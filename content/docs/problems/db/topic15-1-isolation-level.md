---
title: "데이터베이스 Isolation Level"
date: 2026-06-07T17:47:26+09:00
tags: ["데이터베이스", "핵토200", "격리수준", "트랜잭션"]
topic_no1: 15
topic_no2: 1
topic_large: "isolation level"
topic_small: "isolation level"
exam_ref: "119회"
exam_type: "관리"
question_no: 1
---

## 문제

데이터베이스의 Isolation Level

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | isolation level |
| 토픽(소) | isolation level |
| 출제 | 119회 |
| 유형 | 관리 |
| 번호 | 1 |

## 해설

### 출제 배경 및 의도

데이터베이스 격리 수준(Isolation Level)은 SQL-92 표준에서 정의한 트랜잭션 격리의 4단계로, 데이터 일관성과 동시 처리 성능 사이의 균형을 조절하는 핵심 파라미터이다. 격리 수준을 높이면 일관성이 올라가는 대신 처리 속도가 낮아지는 트레이드오프가 존재한다.

119회 기출 문제로, 각 레벨의 정의, 허용/방지 이상현상, 실제 DBMS 동작 방식을 종합적으로 서술해야 한다. MySQL InnoDB의 기본값(REPEATABLE READ)과 Oracle/PostgreSQL의 기본값(READ COMMITTED)이 다르므로, 채점관은 이를 정확히 구분하여 설명할 수 있는지를 중점 평가한다.

### 1. 격리 수준(Isolation Level), 개요

정 의  • 한 트랜잭션이 실행 중일 때 다른 트랜잭션의 변경 사항이 어느 시점부터 보이는지를 정의하는 규약
       - 낮을수록 동시성이 높고, 높을수록 데이터 일관성이 강함 (성능-일관성 트레이드오프)

```
[격리 수준과 이상현상 관계 구성도]

  낮음 ◀──────────────────────────────────────────▶ 높음
  (고성능, 낮은 일관성)                  (저성능, 높은 일관성)

  READ           READ           REPEATABLE      SERIALIZABLE
  UNCOMMITTED    COMMITTED      READ
  ──────────────────────────────────────────────────────────
  Dirty Read     방지 ─────────────────────────────────────
  발생
                 Non-Repeatable  방지 ────────────────────
                 Read 발생
                                 Phantom Read    방지 ────
                                 발생(표준)
                                                 완전 직렬화
```

- 대부분의 OLTP 시스템은 READ COMMITTED 또는 REPEATABLE READ를 기본값으로 채택한다.

### 2. 4단계 격리 수준 상세

1) 각 격리 수준의 정의와 이상현상

| 구분 | 격리 수준 | 허용 이상현상 | 방지 이상현상 | 구현 메커니즘 |
|------|---------|------------|------------|------------|
| ① | READ UNCOMMITTED | Dirty/Non-Rep/Phantom | 없음 | 락 없음 |
| ② | READ COMMITTED | Non-Rep/Phantom | Dirty Read | 커밋 후 읽기, MVCC |
| ③ | REPEATABLE READ | Phantom(표준) | Dirty/Non-Rep | 스냅샷 고정, Row Lock |
| ④ | SERIALIZABLE | 없음 | 모든 이상현상 | Range Lock, SSI |

- READ UNCOMMITTED는 데이터 신뢰성이 없어 실무에서 로그 테이블 등 정확도 불필요 조회에만 제한적으로 사용한다.

2) DBMS별 기본값 및 구현 특성

| 구분 | 항목 | 설명 |
|------|------|------|
| READ COMMITTED | DBMS 기본값 | Oracle, PostgreSQL, SQL Server |
| READ COMMITTED | 동작 | 매 SELECT마다 새 스냅샷 참조, Non-Repeatable Read 허용 |
| REPEATABLE READ | DBMS 기본값 | MySQL InnoDB |
| REPEATABLE READ | 동작 | 트랜잭션 시작 스냅샷 고정, 동일 행 반복 읽기 결과 동일 |
| REPEATABLE READ | InnoDB 특성 | Next-Key Lock(Gap Lock + Record Lock)으로 Phantom Read 부분 방지 |
| SERIALIZABLE | 동작 | 읽기에도 S-Lock 적용, Range Lock으로 Phantom Read 완전 방지 |
| SERIALIZABLE | 단점 | 처리량 최저, 데드락 가능성 최고 |

### 3. 격리 수준별 DBMS 비교 및 구현 트렌드

| 비교 항목 | READ COMMITTED | REPEATABLE READ | SERIALIZABLE |
|---------|--------------|----------------|-------------|
| DBMS 기본값 | Oracle, PostgreSQL, SQL Server | MySQL InnoDB | 일부 Strict 환경 |
| 성능 | 높음 | 중간 | 낮음 |
| 락 비용 | 낮음 | 중간 | 높음 |
| 적합 워크로드 | 일반 OLTP | 잔고/재고 처리 | 금융 정산, 감사 |
| Phantom 처리 | 미처리 | DBMS 구현 의존 | 완전 방지 |

MVCC 기반 구현에서 락 기반과의 차이는 다음과 같다. 락 기반은 읽기에 S-Lock, 쓰기에 X-Lock, Phantom 방지에 Range Lock을 사용하는 반면, MVCC는 읽기 시 스냅샷(락 없음), 쓰기에 X-Lock, Phantom 방지에 SSI(직렬화 스냅샷 격리)를 사용한다. PostgreSQL 9.1부터 SSI(Serializable Snapshot Isolation)를 구현하여 SERIALIZABLE 수준에서도 락 기반 대비 높은 동시성을 제공한다.  "끝"

### 실무 제언

**DBMS별 기본 격리 수준 차이의 통합 리스크**
- **챌린지**: MSA 환경에서 서비스별로 다른 DBMS(MySQL, PostgreSQL, Oracle)를 혼용할 때 기본 격리 수준 차이로 동일 애플리케이션 로직에서 서로 다른 이상현상이 발생한다. 특히 MySQL(REPEATABLE READ)과 PostgreSQL(READ COMMITTED)의 차이는 동일 쿼리에서 다른 결과를 낳는다.
- **제언**: 멀티 DBMS 환경에서는 반드시 격리 수준을 명시적으로 설정하고, 핵심 트랜잭션에는 낙관적 락(버전 컬럼)을 적용하여 DBMS 구현 차이를 흡수한다.

**MySQL InnoDB Next-Key Lock과 데드락**
- **챌린지**: InnoDB REPEATABLE READ에서 인덱스 미사용 범위 쿼리는 Gap Lock이 광범위하게 적용되어 교착 상태(Deadlock)를 유발할 수 있다.
- **제언**: Phantom Read가 허용 가능한 읽기 중심 쿼리는 READ COMMITTED로 하향 설정하여 Gap Lock 경합을 해소하고, Phantom이 치명적인 쓰기 트랜잭션만 REPEATABLE READ 이상을 적용하는 세분화 전략이 효과적이다.

**금융 정산 환경의 SERIALIZABLE 적용**
- **챌린지**: SERIALIZABLE은 모든 이상현상을 방지하지만 처리량이 급격히 저하되어 대용량 OLTP 환경에서 적용하기 어렵다.
- **제언**: 금융 정산·감사 등 완전한 직렬성이 요구되는 배치 작업은 SERIALIZABLE을 적용하되, 실시간 서비스는 READ COMMITTED + SELECT FOR UPDATE 조합으로 필요한 수준의 격리성만 선택적으로 확보한다.
