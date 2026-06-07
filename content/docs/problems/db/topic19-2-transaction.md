---
title: "데이터베이스 트랜잭션의 특징"
date: 2026-06-07T17:47:26+09:00
tags: ["데이터베이스", "핵토200", "트랜잭션", "ACID"]
topic_no1: 19
topic_no2: 1
topic_large: "트랜잭션"
topic_small: "트랜잭션"
exam_ref: "129회"
exam_type: "관리"
question_no: 1
---

## 문제

데이터베이스 트랜잭션(Transaction) 의 특징

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 트랜잭션 |
| 토픽(소) | 트랜잭션 |
| 출제 | 129회 |
| 유형 | 관리 |
| 번호 | 1 |

## 해설

> **데이터베이스의 논리적 작업 단위를 보호하는 4대 특성(ACID)**  
> 원자성(Atomicity)·일관성(Consistency)·격리성(Isolation)·지속성(Durability)과 트랜잭션 상태 다이어그램

트랜잭션(Transaction)은 데이터베이스에서 논리적으로 하나의 완전한 작업 단위로, ACID 특성을 통해 데이터 무결성을 보장합니다. 129회 기출로 출제된 만큼 ACID 각 특성의 정의와 보장 메커니즘, 트랜잭션 상태 전이, TCL 명령어를 체계적으로 서술하는 것이 핵심입니다.

### 1. 출제 배경 및 의도

트랜잭션과 ACID는 데이터베이스의 가장 기본적이면서도 가장 중요한 개념으로, 기술사 시험에서 단독 출제될 만큼 중요합니다. 단순한 용어 정의를 넘어 각 특성이 어떤 DBMS 메커니즘으로 구현되는지(원자성→롤백, 격리성→잠금/MVCC, 지속성→WAL/Redo Log)를 함께 서술해야 깊이 있는 답안이 됩니다. 분산 트랜잭션 환경에서 ACID 보장의 어려움도 언급하면 가산점이 됩니다.

### 2. 개념의 본질과 작동 메커니즘

트랜잭션이란 데이터베이스에서 하나의 논리적 작업 단위(Logical Unit of Work)로, 모든 연산이 완전히 수행되거나(All or Nothing) 하나도 수행되지 않아야 하는 작업의 묶음입니다.

- **Input:** 하나 이상의 SQL DML 연산(INSERT/UPDATE/DELETE), COMMIT 또는 ROLLBACK
- **Mechanism:** ACID 특성 보장 (잠금, 로그, 버전 관리, 버퍼 관리)
- **Output:** 데이터 무결성 보장, 일관된 데이터베이스 상태 유지

#### 트랜잭션 상태 다이어그램

```text
[트랜잭션 상태 전이]

            BEGIN TRANSACTION
                  │
                  ▼
           ┌────────────┐
           │   활성     │ ← SQL 연산 실행 중
           │ (Active)   │
           └──────┬─────┘
                  │
        ┌─────────┴────────────┐
        │ 부분 완료             │ 실패/오류
        ▼ (Partially Committed) ▼
  ┌───────────┐         ┌───────────┐
  │부분 완료  │         │   실패    │
  │(Partially │         │ (Failed)  │
  │Committed) │         └─────┬─────┘
  └─────┬─────┘               │
        │                     │ ROLLBACK
        │ COMMIT 처리 시작     ▼
        │               ┌───────────┐
        │ 성공          │   철회    │
        ▼               │(Aborted)  │
  ┌───────────┐         └───────────┘
  │   완료    │
  │(Committed)│
  └───────────┘

  Active → Partially Committed: 마지막 SQL 연산 완료
  Partially Committed → Committed: COMMIT 완료
  Partially Committed → Failed: 커밋 처리 중 오류
  Active → Failed: SQL 실행 중 오류
  Failed → Aborted: ROLLBACK 완료
```

#### ACID 특성 상세

**① 원자성 (Atomicity) - "All or Nothing"**

트랜잭션의 모든 연산은 완전히 수행되거나 하나도 수행되지 않아야 합니다.

```text
[계좌 이체 예시]
 T1: UPDATE 출금계좌 SET 잔액 = 잔액 - 10000
 T2: UPDATE 입금계좌 SET 잔액 = 잔액 + 10000

 T1 성공, T2 실패 시:
 → 원자성 없음: 출금만 되고 입금 안 됨 (데이터 소실)
 → 원자성 있음: T1도 ROLLBACK → 이전 상태 복원

 구현: Undo Log (ROLLBACK 시 이전 값 복원)
```

**② 일관성 (Consistency) - "항상 유효한 상태"**

트랜잭션 실행 전후에 데이터베이스는 항상 일관된(무결성 제약조건을 만족하는) 상태여야 합니다.

- 구현: 무결성 제약조건(Primary Key, Foreign Key, CHECK, NOT NULL) 검사
- 예: 계좌 잔액은 항상 0 이상이어야 한다 → 잔액 < 0 시 트랜잭션 거부

**③ 격리성 (Isolation) - "독립적 실행 보장"**

동시에 실행되는 트랜잭션은 서로 독립적으로 실행되는 것처럼 보여야 합니다.

```text
[격리성 구현 메커니즘]
 ├── 잠금(Lock): S-Lock, X-Lock, 2PL
 ├── MVCC: 스냅샷 기반 읽기 (락 없는 읽기)
 └── 격리 수준: READ UNCOMMITTED ~ SERIALIZABLE
```

**④ 지속성 (Durability) - "영구 저장 보장"**

COMMIT된 트랜잭션의 결과는 시스템 장애가 발생하더라도 영구적으로 유지되어야 합니다.

```text
[지속성 구현: WAL (Write-Ahead Logging)]

 트랜잭션 실행
       │
       ▼
 Redo Log (WAL) 먼저 기록 → 디스크
       │
       ▼
 Buffer Pool (메모리) 변경
       │
       ▼
 COMMIT 완료 응답
       │
       (나중에 비동기로)
       ▼
 Dirty Page → Disk (Checkpoint)

 장애 발생 시:
 → WAL 로그로 REDO (커밋 완료 트랜잭션 재적용)
 → Undo 로그로 UNDO (미완료 트랜잭션 롤백)
```

#### TCL (Transaction Control Language)

| 명령어 | 기능 | 설명 |
|------|------|------|
| **COMMIT** | 트랜잭션 확정 | 모든 변경사항을 DB에 영구 저장, 잠금 해제 |
| **ROLLBACK** | 트랜잭션 취소 | 트랜잭션 시작 이후 모든 변경사항 취소 |
| **SAVEPOINT** | 중간 저장점 설정 | 특정 지점으로의 부분 롤백 지원 |
| **ROLLBACK TO SAVEPOINT** | 저장점으로 롤백 | 저장점 이후 변경사항만 취소 |

```sql
-- SAVEPOINT 활용 예시
BEGIN;
  UPDATE 계좌 SET 잔액 = 잔액 - 10000 WHERE id = 1;
  SAVEPOINT sp1;
  
  UPDATE 계좌 SET 잔액 = 잔액 + 10000 WHERE id = 2;
  -- 오류 발생 시:
  ROLLBACK TO SAVEPOINT sp1;  -- sp1 이후만 취소
  -- 또는 전체 취소:
  ROLLBACK;
COMMIT;
```

### 3. 핵심 키워드 (Must-Have)

| 특성 | 키워드 | 구현 메커니즘 |
|-----|--------|------------|
| **원자성(A)** | All or Nothing, 부분 완료 불가 | Undo Log, ROLLBACK |
| **일관성(C)** | 무결성 제약, 유효한 상태 | 제약조건 검사, 트리거 |
| **격리성(I)** | 독립적 실행, 직렬 가능성 | 잠금(Lock), MVCC, 격리 수준 |
| **지속성(D)** | 영구 저장, 장애 복구 | Redo Log, WAL, 체크포인트 |
| **TCL** | COMMIT, ROLLBACK, SAVEPOINT | - |
| **상태** | Active, Partially Committed, Committed, Failed, Aborted | - |

### 4. 맥락과 비교

**ACID vs BASE (NoSQL)**

| 비교 항목 | ACID (RDBMS) | BASE (NoSQL) |
|---------|------------|------------|
| **Consistency** | 강한 일관성 | 최종 일관성(Eventual Consistency) |
| **Availability** | 일관성 우선으로 상대적 낮음 | 가용성 최우선 |
| **트랜잭션** | 완전 지원 | 제한적 지원 |
| **성능** | 잠금으로 인한 지연 가능 | 높은 처리량 |
| **적합 환경** | 금융, 결제, 재고 관리 | SNS, 로그, 캐시, 빅데이터 |

**분산 트랜잭션과 2PC (Two-Phase Commit)**

```text
[2PC: 분산 환경에서 원자성 보장]

  Phase 1: Prepare        Phase 2: Commit/Rollback
  
  Coordinator             Coordinator
      │                       │
      ├→ DB1: PREPARE?         ├→ DB1: COMMIT
      ├→ DB2: PREPARE?         ├→ DB2: COMMIT
      └→ DB3: PREPARE?         └→ DB3: COMMIT
  
  모두 OK → Commit         하나라도 실패 → All Rollback
  
  단점: Coordinator 장애 시 블로킹, 성능 오버헤드
  대안: Saga Pattern (MSA 분산 트랜잭션)
```

### 5. 실무 제언

**트랜잭션 범위 최소화 원칙**

- **챌린지:** 트랜잭션을 너무 길게 열면 잠금(Lock)을 오래 유지하여 다른 트랜잭션의 대기 시간이 증가하고, MVCC 환경에서는 오래된 스냅샷을 유지하여 Undo/Undo 공간을 과다하게 소비합니다. "트랜잭션 안에서 외부 API를 호출하는" 안티 패턴은 네트워크 지연 동안 DB 잠금을 유지하여 심각한 성능 저하를 초래합니다.
- **제언:** 트랜잭션은 DB 연산만 포함하고, 네트워크 호출·파일 I/O·긴 계산 작업은 트랜잭션 밖에서 처리합니다. DML 작업은 가능한 한 묶어서 한 트랜잭션에 처리하되 (배치 처리), 잠금 경합이 심한 경우 낙관적 잠금(Optimistic Lock)으로 전환을 검토합니다.

**분산 트랜잭션의 현실적 대안**

- **챌린지:** MSA 환경에서 서비스별 독립 DB를 사용하면 서비스 간 ACID 트랜잭션을 보장하기 위한 2PC(Two-Phase Commit)는 성능 병목과 장애 취약성 문제를 야기합니다.
- **제언:** Saga 패턴을 채택하여 각 서비스가 로컬 트랜잭션으로 커밋 후 이벤트를 발행하고, 실패 시 보상 트랜잭션(Compensating Transaction)으로 데이터 일관성을 복원하는 최종 일관성(Eventual Consistency) 모델을 적용합니다. 강한 일관성이 반드시 필요한 결제·정산 로직은 단일 서비스/DB 내에 배치하는 설계를 우선합니다.
