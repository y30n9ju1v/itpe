---
title: "샤딩, 파티셔닝, 리플리케이션, 쿼리 오프로딩"
date: 2026-06-07T17:47:26+09:00
tags: ["데이터베이스", "핵토200", "파티셔닝", "샤딩", "리플리케이션"]
topic_no1: 18
topic_no2: 2
topic_large: "파티셔닝"
topic_small: "파티셔닝"
exam_ref: "모의_2018.11"
exam_type: "관리"
question_no: 3
---

## 문제

데이터베이스에서 성능 향상을 위한 샤딩(Sharding), 파티셔닝(Partitioning) 기법과 가용성을 위한 리플리케이션(Replication)과 쿼리 오프로딩(Query offloading)기법에 대해 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 파티셔닝 |
| 토픽(소) | 파티셔닝 |
| 출제 | 모의_2018.11 |
| 유형 | 관리 |
| 번호 | 3 |

## 해설

> **데이터를 여러 노드에 분산하여 성능과 가용성을 확보하는 분산 데이터베이스 아키텍처**  
> 샤딩(수평 분산), 리플리케이션(Master-Slave/Master-Master), Query Offloading, CAP 트레이드오프

단일 DBMS 서버로는 처리할 수 없는 초대용량 데이터와 초고속 트랜잭션 요구를 해결하기 위해 데이터를 여러 서버에 분산하는 전략이 필수가 되었습니다. 샤딩은 성능 향상을, 리플리케이션은 가용성과 읽기 부하 분산을 목적으로 하며, 두 기법을 조합하여 실제 대규모 시스템을 구성합니다.

### 1. 출제 배경 및 의도

MSA 전환, 클라우드 네이티브 아키텍처, 글로벌 서비스 확장으로 분산 데이터베이스 설계 역량이 아키텍트의 핵심 역량이 되었습니다. 샤딩과 파티셔닝의 차이, 리플리케이션 유형별 트레이드오프, Query Offloading을 통한 읽기/쓰기 분리 아키텍처를 종합적으로 설명해야 합니다. CAP 정리(Consistency-Availability-Partition Tolerance)와의 연계도 중요합니다.

### 2. 개념의 본질과 작동 메커니즘

- **샤딩(Sharding):** 수평 분할을 여러 물리 서버에 적용하여 데이터와 쓰기 부하를 분산
- **리플리케이션(Replication):** 동일 데이터를 여러 서버에 복제하여 가용성 및 읽기 성능 향상
- **Query Offloading:** 읽기 쿼리를 레플리카(Replica) 서버로 분기하여 주 서버 부하 감소

```text
[분산 DB 아키텍처 전체 구조]

  ┌─────────────────────────────────────────────────────┐
  │                  Application Layer                   │
  │          읽기 요청 ◄─────────┬──────────► 쓰기 요청  │
  └──────────────────────────────┼─────────────────────┘
                                 │
              ┌──────────────────┴──────────────────┐
              │       DB Proxy / Router Layer        │
              │  (쿼리 라우팅: 읽기→레플리카, 쓰기→마스터) │
              └──────────┬───────────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         ▼               ▼               ▼
   ┌─────────┐     ┌─────────┐     ┌─────────┐
   │ Shard 1 │     │ Shard 2 │     │ Shard 3 │  ← 샤딩
   │(Master) │     │(Master) │     │(Master) │
   └────┬────┘     └────┬────┘     └────┬────┘
        │               │               │        ← 리플리케이션
   ┌────┴────┐     ┌────┴────┐     ┌────┴────┐
   │Replica1 │     │Replica2 │     │Replica3 │
   └─────────┘     └─────────┘     └─────────┘
```

#### 가. 샤딩 (Sharding)

샤딩이란 수평 파티셔닝(Horizontal Partitioning)을 다수의 독립적인 물리 서버(샤드, Shard)에 적용하여 데이터와 트랜잭션 부하를 분산시키는 기법입니다.

**샤딩 키(Shard Key) 전략**

| 전략 | 방법 | 장점 | 단점 |
|------|------|------|------|
| **Range 샤딩** | 키 범위로 샤드 결정 | 범위 쿼리 효율 | 핫스팟(Hot Spot) 발생 |
| **Hash 샤딩** | Hash(키) mod N | 균등 분산 | 범위 쿼리 비효율, 리샤딩 어려움 |
| **Directory 샤딩** | 룩업 테이블로 라우팅 | 유연한 분배 | 룩업 테이블 병목 |
| **Geo 샤딩** | 지역 기반 분배 | 레이턴시 최소화 | 지역별 데이터 불균형 |

```text
[Hash 샤딩 예시]
  샤드 키: user_id
  샤드 수: 4

  user_id = 1001 → Hash(1001) % 4 = 1 → Shard 2
  user_id = 1002 → Hash(1002) % 4 = 2 → Shard 3
  user_id = 1003 → Hash(1003) % 4 = 3 → Shard 4
  user_id = 1004 → Hash(1004) % 4 = 0 → Shard 1
```

**파티셔닝 vs 샤딩 비교**

| 비교 항목 | 파티셔닝 | 샤딩 |
|---------|---------|------|
| **분산 단위** | 단일 DBMS 내 논리/물리 분할 | 다수의 독립 DBMS 서버 |
| **투명성** | 애플리케이션에 투명 | 라우팅 로직 필요 |
| **확장성** | 수직 확장(Scale-Up) 연계 | 수평 확장(Scale-Out) |
| **조인** | 파티션 간 조인 가능 | 샤드 간 조인 비용 큼 |

#### 나. 리플리케이션 (Replication)

**Master-Slave (단방향 복제)**

```text
[Master-Slave 아키텍처]

  Write   ┌──────────────┐
  ──────→ │   Master DB  │ ─→ Binary Log ─→ Relay Log
          └──────────────┘               │
                                         ▼
          ┌──────────────┐     ┌──────────────┐
  Read ─→ │   Slave DB 1 │     │   Slave DB 2 │ ← Read
          └──────────────┘     └──────────────┘
  
  장점: 구성 단순, 읽기 확장 용이
  단점: Master 단일 장애점(SPOF), 복제 지연(Replication Lag)
```

**Master-Master (양방향 복제)**

```text
[Master-Master 아키텍처]

  Write/Read  ┌──────────────┐   양방향 동기화   ┌──────────────┐  Write/Read
  ──────────→ │   Master 1   │ ←───────────────→ │   Master 2   │ ←──────────
              └──────────────┘                   └──────────────┘
  
  장점: 고가용성, 지역 분산 쓰기
  단점: 충돌 해결(Conflict Resolution) 복잡, 구성 복잡
```

#### 다. Query Offloading (쿼리 오프로딩)

```text
[Query Offloading 아키텍처]

  Application
     ├── 쓰기(INSERT/UPDATE/DELETE) → Master DB
     └── 읽기(SELECT)               → Replica DB(들)

  DB Proxy (예: ProxySQL, MaxScale, AWS RDS Proxy)
     └── SQL 파싱 → Read/Write 분기 자동화
  
  효과:
  - Master CPU/I/O 부하 70-80% 감소
  - Replica 스케일아웃으로 읽기 처리량 선형 증가
  
  주의:
  - 복제 지연(Replication Lag) 중 읽기 시 Dirty Read 유사 문제
  - 강한 일관성이 필요한 읽기는 Master에서 처리
```

### 3. 핵심 키워드 (Must-Have)

| 분류 | 키워드 |
|------|--------|
| 샤딩 | Shard Key, Range/Hash/Directory Sharding, 수평 확장(Scale-Out), 리샤딩(Re-sharding) |
| 리플리케이션 | Master-Slave, Master-Master, Binary Log, 복제 지연(Replication Lag), SPOF |
| Query Offloading | 읽기/쓰기 분리, DB Proxy, 복제 지연 일관성 |
| 공통 | CAP 정리, 일관성(Consistency), 가용성(Availability), 파티션 내성(Partition Tolerance) |

### 4. 맥락과 비교

**CAP 정리 관점**

| 아키텍처 | Consistency | Availability | Partition Tolerance | 설명 |
|---------|-----------|-------------|-------------------|------|
| Master-Slave (동기 복제) | 강함 | 낮음 | 낮음 | 복제 완료 후 응답 |
| Master-Slave (비동기 복제) | 약함 | 높음 | 높음 | 복제 지연 허용 |
| Master-Master | 중간 | 높음 | 높음 | 충돌 해결 비용 |
| 샤딩 | 파티션별 | 높음 | 높음 | 교차 샤드 트랜잭션 어려움 |

### 5. 실무 제언

**리샤딩(Re-sharding)의 어려움 선제 대비**

- **챌린지:** 처음 설계한 샤드 수로는 성장하는 데이터를 감당하지 못할 때 샤드를 추가하는 리샤딩 작업이 필요합니다. Hash 샤딩의 경우 샤드 수 변경 시 대부분의 데이터를 재배치해야 하는 극단적인 운영 부하가 발생합니다.
- **제언:** 초기 설계 시 일관된 해싱(Consistent Hashing)을 채택하여 리샤딩 시 이동 데이터를 최소화하거나, 가상 샤드(Virtual Shard) 방식으로 논리적 샤드를 물리 샤드에 유연하게 매핑하는 구조를 선택합니다. MongoDB Atlas, Vitess(MySQL 샤딩) 등 샤딩 미들웨어를 활용하면 리샤딩 복잡도를 크게 낮출 수 있습니다.

**복제 지연(Replication Lag) 관리**

- **챌린지:** Master에 쓴 직후 Slave에서 읽으면 아직 복제가 완료되지 않은 구 버전 데이터를 읽는 "Read-Your-Writes 불일치" 문제가 발생합니다. 특히 결제, 주문 상태 확인 등 강한 일관성이 필요한 비즈니스 로직에서 치명적입니다.
- **제언:** "방금 쓴 데이터를 즉시 읽어야 하는" 요청은 반드시 Master에서 읽도록 라우팅 정책을 수립하고, 세션 기반 일관성(Session Consistency) 혹은 모노토닉 읽기 보장 정책을 DB Proxy 레벨에서 구현합니다.
