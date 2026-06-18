---
title: "RDBMS와 NoSQL 개념 비교 및 유형"
date: 2026-06-07T17:47:26+09:00
tags: ["데이터베이스", "핵토200", "NoSQL", "RDBMS", "NewSQL"]
topic_no1: 20
topic_no2: 1
topic_large: "NOSQL"
topic_small: "NOSQL"
exam_ref: "모의_2021.01"
exam_type: "공통"
question_no: 4
---

## 문제

데이터베이스는 크게 RDBMS 와 NoSQL 로 나뉘지며, 최근에는 비정형화된 빅데이터 저장을 위한 NoSQL 활용이 증가하고 있다. 다음에 대해 설명하시오.

가. RDBMS 와 NoSQL 의 개념 및 비교  
나. NoSQL 의 유형  
다. NewSQL

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | NOSQL |
| 토픽(소) | NOSQL |
| 출제 | 모의_2021.01 |
| 유형 | 공통 |
| 번호 | 4 |

## 해설

### 출제 배경 및 의도

빅데이터·클라우드 시대에 단일 RDBMS로는 수억 건의 비정형 데이터를 실시간 처리하기 어렵게 되었고, NoSQL이 스키마 유연성과 수평 확장성으로 이 한계를 극복했습니다. 이후 ACID와 수평 확장을 동시에 요구하는 글로벌 서비스 수요에 맞춰 NewSQL이 등장했습니다.

MSA·클라우드 네이티브 환경에서 서비스별 최적 DB를 선택하는 Polyglot Persistence 전략이 필수화되면서, RDBMS·NoSQL·NewSQL 각 패러다임의 설계 철학, 트레이드오프, 적합 사용 사례를 논리적으로 비교 설명하는 역량을 채점관은 검증합니다.

### 1. 데이터베이스 패러다임 진화, 개요

정 의  • RDBMS는 고정 스키마·ACID·SQL, NoSQL은 유연 스키마·BASE·수평 확장, NewSQL은 양자의 장점을 통합한 분산 관계형 DB
       - 각 패러다임은 상호 대체가 아닌 상호 보완 관계로 도메인 특성에 맞게 선택

```
RDBMS (1970s~)          NoSQL (2000s~)           NewSQL (2010s~)
┌──────────────┐        ┌──────────────┐         ┌──────────────┐
│ 고정 스키마  │        │ 유연 스키마  │         │ 유연 스키마  │
│ ACID 보장    │──→     │ BASE 특성    │──→      │ ACID 보장    │
│ 수직 확장    │        │ 수평 확장    │         │ 수평 확장    │
│ SQL          │        │ 다양한 API   │         │ SQL 지원     │
└──────────────┘        └──────────────┘         └──────────────┘
 Oracle, MySQL           MongoDB, Redis            CockroachDB
 PostgreSQL              Cassandra, Neo4j          Spanner, TiDB
```

- 데이터 저장 패러다임은 일관성 중심(RDBMS)→가용성 중심(NoSQL)→균형 추구(NewSQL)로 진화해 왔음

### 2. 가. RDBMS와 NoSQL 개념 및 비교

1) ACID vs BASE

| 구분 | 항목 | 설명 |
|------|------|------|
| ACID(RDBMS) | Atomicity | 트랜잭션 원자성 보장 (All or Nothing) |
| ACID(RDBMS) | Consistency | 항상 일관된 상태 유지 (무결성 제약 보장) |
| ACID(RDBMS) | Isolation | 트랜잭션 간 격리 보장 (잠금/MVCC) |
| ACID(RDBMS) | Durability | 커밋된 데이터 영구 보존 (WAL/Redo Log) |
| BASE(NoSQL) | Basically Available | 항상 응답 가능 (가용성 최우선) |
| BASE(NoSQL) | Soft-state | 시스템 상태가 시간에 따라 변할 수 있음 |
| BASE(NoSQL) | Eventually Consistent | 최종적 일관성 (Eventual Consistency) |

2) RDBMS vs NoSQL 종합 비교

| 구분 | 항목 | 설명 |
|------|------|------|
| RDBMS | 데이터 모델 | 관계형 테이블, 고정 스키마(Fixed Schema) |
| RDBMS | 확장 방식 | 수직 확장(Scale-Up) 중심 |
| RDBMS | 트랜잭션 | ACID 완전 지원 |
| RDBMS | 적합 워크로드 | 금융·ERP·정형 트랜잭션 |
| NoSQL | 데이터 모델 | Document/Key-Value/Column/Graph 다양한 모델 |
| NoSQL | 확장 방식 | 수평 확장(Scale-Out) 중심 |
| NoSQL | 트랜잭션 | 제한적 지원(BASE), 단일 문서 원자성 |
| NoSQL | 적합 워크로드 | 빅데이터·실시간·비정형 데이터 |

- RDBMS는 데이터 무결성, NoSQL은 확장성과 유연성이 핵심 경쟁력이며, 단순 비교보다 도메인 특성에 맞는 선택이 중요

### 3. 나. NoSQL 유형과 다. NewSQL

1) NoSQL 4가지 유형

| 구분 | 항목 | 설명 |
|------|------|------|
| Document DB | 데이터 구조 | JSON/BSON 계층 문서 |
| Document DB | 대표 제품 | MongoDB, CouchDB |
| Document DB | 적합 사례 | 카탈로그·컨텐츠 관리·가변 스키마 |
| Key-Value DB | 데이터 구조 | 단순 키-값 쌍 |
| Key-Value DB | 대표 제품 | Redis, DynamoDB |
| Key-Value DB | 적합 사례 | 세션·캐시·장바구니·실시간 리더보드 |
| Column-family DB | 데이터 구조 | 컬럼 패밀리 기반 와이드 컬럼 |
| Column-family DB | 대표 제품 | Cassandra, HBase |
| Column-family DB | 적합 사례 | 시계열·로그·대용량 쓰기 집중 |
| Graph DB | 데이터 구조 | 노드(Node)·엣지(Edge)·속성(Property) |
| Graph DB | 대표 제품 | Neo4j, Amazon Neptune |
| Graph DB | 적합 사례 | 소셜네트워크·추천·사기 탐지·지식그래프 |

2) NewSQL: ACID + 수평 확장

| 구분 | 항목 | 설명 |
|------|------|------|
| 정의 | 목표 | RDBMS의 ACID + NoSQL의 수평 확장을 동시에 실현 |
| 핵심 기술 | 분산 합의 | Paxos·Raft 기반 분산 트랜잭션 레이어 |
| 핵심 기술 | SQL 지원 | 표준 SQL 인터페이스 유지 |
| 핵심 기술 | 샤딩 | 자동 수평 분산 (Auto Sharding) |
| 대표 제품 | 클라우드 | Google Spanner, CockroachDB, TiDB, YugabyteDB |
| 한계 | 지연 | 분산 합의 오버헤드로 단일 노드 RDBMS보다 지연 높음 |
| 한계 | 비용 | 운영 복잡도와 라이선스 비용 상승 |

- NewSQL은 글로벌 멀티 리전 Active-Active 구성처럼 ACID와 수평 확장이 동시에 필요한 경우에 한해 도입하며, 단일 리전 서비스는 RDBMS+Read Replica+샤딩으로 충분.  "끝"

### 실무 제언

**Polyglot Persistence 전략 수립**
- **챌린지**: MSA 환경에서 모든 서비스에 단일 RDBMS를 강요하면 비정형 데이터·수평 확장·초고속 캐싱에서 성능 병목이 발생하고, NoSQL로 전면 교체하면 복잡한 트랜잭션 무결성 유지가 어려움
- **제언**: 금융 거래는 RDBMS/NewSQL, 사용자 세션·캐시는 Redis(Key-Value), 비정형 컨텐츠는 MongoDB(Document), 소셜 관계 분석은 Neo4j(Graph)를 적용하는 Polyglot Persistence 전략으로 각 DB 강점 활용

**NewSQL 도입 시 지연 트레이드오프 검토**
- **챌린지**: NewSQL은 ACID와 수평 확장을 동시에 제공하지만 분산 합의 프로토콜의 네트워크 지연이 단일 노드 RDBMS보다 높고, 운영 복잡도와 비용이 증가함
- **제언**: 글로벌 멀티 리전 Active-Active 구성처럼 분산 트랜잭션이 필수인 경우에 한해 NewSQL을 검토하고, 단일 리전 서비스는 전통적 RDBMS + 읽기 복제 + 샤딩으로 충분한지 먼저 평가

**NoSQL 도입 시 데이터 일관성 정책 사전 정의**
- **챌린지**: BASE 특성의 Eventual Consistency를 도입하면 특정 시점에 노드 간 데이터 불일치가 발생할 수 있으며, 이를 비즈니스 로직에서 처리하지 못하면 데이터 오류로 이어짐
- **제언**: NoSQL 도입 전 데이터 중요도별 일관성 수준을 정의하고, Tunable Consistency(예: Cassandra QUORUM)를 활용하여 중요 데이터는 강한 일관성, 비중요 데이터는 최종 일관성을 차등 적용
