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

> **트랜잭션 간 데이터 가시성 범위를 정의하는 4단계 격리 규약**  
> READ UNCOMMITTED → READ COMMITTED → REPEATABLE READ → SERIALIZABLE, 격리 수준 상향 시 이상현상 제거와 동시성 감소의 트레이드오프

데이터베이스 격리 수준(Isolation Level)은 SQL-92 표준에서 정의한 트랜잭션 격리의 4단계로, 데이터 일관성과 동시 처리 성능 사이의 균형을 조절하는 핵심 파라미터입니다. 수도꼭지처럼 격리 수준을 높이면 일관성이 올라가는 대신 처리 속도가 낮아집니다. 기술사 시험에서 119회 출제된 만큼 각 레벨의 정의, 허용/방지 이상현상, 실제 DBMS 동작 방식을 종합적으로 서술해야 합니다.

### 1. 출제 배경 및 의도

격리 수준은 DBMS 선택과 시스템 설계 단계에서 반드시 결정해야 하는 중요한 파라미터로, 실무 아키텍트와 DBA의 핵심 역량입니다. MySQL InnoDB의 기본값(REPEATABLE READ)과 Oracle/PostgreSQL의 기본값(READ COMMITTED)이 다르므로, 시스템 통합 시 이상현상 발생 위험이 있습니다. 채점관은 각 격리 수준의 정의와 이상현상 관계를 명확히 도식화할 수 있는지를 중점 평가합니다.

### 2. 개념의 본질과 작동 메커니즘

격리 수준이란 한 트랜잭션이 실행 중일 때 다른 트랜잭션의 변경 사항이 어느 시점부터 보이는지를 정의하는 규약으로, 낮을수록 동시성이 높고 높을수록 데이터 일관성이 강합니다.

- **Input:** 병행 트랜잭션 환경, DBMS 격리 수준 설정값
- **Mechanism:** 락 프로토콜 또는 MVCC 스냅샷 타임스탬프 제어 → 데이터 가시성 범위 한정
- **Output:** 특정 이상현상의 허용 또는 방지, 트랜잭션 실행 결과 보장 수준

```text
[격리 수준과 이상현상 관계]

  낮음 ◀──────────────────────────────────────▶ 높음
  (고성능, 낮은 일관성)                  (저성능, 높은 일관성)

  READ          READ           REPEATABLE      SERIALIZABLE
  UNCOMMITTED   COMMITTED      READ
  ─────────────────────────────────────────────────────────
  Dirty Read    방지           방지            방지
  발생          ─────────────────────────────────────────
                Non-Repeatable 방지            방지
                Read 발생      ────────────────────────────
                               Phantom Read    방지
                               발생            ──────────
                                               완전 직렬화
```

#### 각 격리 수준 상세

**① READ UNCOMMITTED**

```text
T1: UPDATE 계좌잔액 = 1000 (미커밋)
T2: SELECT 계좌잔액 → 1000 (커밋 안 된 값 읽음 = Dirty Read)
T1: ROLLBACK
→ T2가 읽은 1000은 실제 존재하지 않는 데이터
```

- 커밋되지 않은 변경사항도 다른 트랜잭션에 보임
- 사실상 잠금 없음, 최고 동시성 but 데이터 신뢰성 없음
- 실무 사용: 로그 테이블 등 정확도 불필요 조회에만 제한적 허용

**② READ COMMITTED (Oracle, PostgreSQL 기본값)**

```text
T1: SELECT 잔액 → 500
T2: UPDATE 잔액 = 300, COMMIT
T1: SELECT 잔액 → 300 (Non-Repeatable Read 발생)
→ 같은 트랜잭션 내 동일 쿼리 결과 상이
```

- 커밋된 데이터만 읽기 가능 → Dirty Read 방지
- 매 SELECT마다 새 스냅샷 참조 → Non-Repeatable Read 허용
- MVCC 기반 DBMS(PostgreSQL, Oracle)의 기본 동작

**③ REPEATABLE READ (MySQL InnoDB 기본값)**

```text
T1: SELECT 잔액 → 500 (트랜잭션 시작 스냅샷)
T2: UPDATE 잔액 = 300, COMMIT
T1: SELECT 잔액 → 500 (여전히 스냅샷 기준 = Non-Repeatable Read 방지)
T2: INSERT INTO 계좌 VALUES(신규), COMMIT
T1: SELECT COUNT(*) → 새 행 보임 가능 (Phantom Read, DBMS 구현 의존)
```

- 트랜잭션 시작 시점의 스냅샷 고정 → 동일 행 반복 읽기 결과 동일
- MySQL InnoDB: Next-Key Lock(Gap Lock + Record Lock)으로 Phantom Read 부분 방지
- 표준상으로는 Phantom Read 허용

**④ SERIALIZABLE**

- 가장 강한 격리, 완전한 직렬 스케줄 보장
- 읽기 작업에도 S-Lock 적용, 범위 락(Range Lock)으로 Phantom Read 방지
- 처리량 최저, 데드락 가능성 최고

### 3. 핵심 키워드 (Must-Have)

| 격리 수준 | 허용 이상현상 | 방지 이상현상 | 구현 메커니즘 |
|----------|------------|------------|------------|
| READ UNCOMMITTED | Dirty/Non-Rep/Phantom | - | 락 없음 |
| READ COMMITTED | Non-Repeatable/Phantom | Dirty Read | 커밋 후 읽기, MVCC |
| REPEATABLE READ | Phantom(표준) | Dirty/Non-Rep | 스냅샷 고정, Row Lock |
| SERIALIZABLE | - | 모든 이상현상 | Range Lock, SSI |

### 4. 맥락과 비교

| 비교 항목 | READ COMMITTED | REPEATABLE READ | SERIALIZABLE |
|----------|---------------|----------------|-------------|
| **DBMS 기본값** | Oracle, PostgreSQL, SQL Server | MySQL InnoDB | 일부 Strict 환경 |
| **성능** | 높음 | 중간 | 낮음 |
| **락 비용** | 낮음 | 중간 | 높음 |
| **적합 워크로드** | 일반 OLTP | 잔고/재고 처리 | 금융 정산, 감사 |
| **Phantom 처리** | 미처리 | DBMS 구현 의존 | 완전 방지 |

**MVCC와 락 기반 구현 비교**

| 구현 방식 | 읽기 | 쓰기 | Phantom 방지 |
|---------|------|------|------------|
| 락 기반 | S-Lock 필요 | X-Lock 필요 | Range Lock |
| MVCC | 스냅샷(락 없음) | X-Lock 필요 | SSI(직렬화 스냅샷) |

### 5. 실무 제언

**DBMS별 기본 격리 수준 차이에 의한 통합 리스크**

- **챌린지:** MSA 환경에서 서비스별로 다른 DBMS(MySQL, PostgreSQL, Oracle)를 혼용할 때 각 DBMS의 기본 격리 수준이 달라 동일 애플리케이션 로직도 DBMS에 따라 서로 다른 이상현상이 발생할 수 있습니다. 특히 MySQL(REPEATABLE READ)과 PostgreSQL(READ COMMITTED)의 차이는 동일 쿼리에서 다른 결과를 낳습니다.
- **제언:** 멀티 DBMS 환경에서는 반드시 격리 수준을 명시적으로 설정하고, 핵심 트랜잭션에는 애플리케이션 레벨에서 낙관적 락(Optimistic Lock, 버전 컬럼)을 적용하여 DBMS 구현 차이를 흡수해야 합니다.

**REPEATABLE READ와 MySQL의 Next-Key Lock**

- **챌린지:** MySQL InnoDB의 REPEATABLE READ는 Next-Key Lock(Gap Lock + Record Lock)으로 Phantom Read를 방지하지만, 인덱스 미사용 범위 쿼리나 특정 패턴에서는 Gap Lock이 광범위하게 적용되어 교착 상태(Deadlock)를 유발할 수 있습니다.
- **제언:** Phantom Read가 허용 가능한 읽기 중심 쿼리는 READ COMMITTED로 하향 설정하여 Gap Lock 경합을 해소하고, Phantom이 치명적인 쓰기 트랜잭션만 REPEATABLE READ 이상을 적용하는 세분화 전략이 효과적입니다.
