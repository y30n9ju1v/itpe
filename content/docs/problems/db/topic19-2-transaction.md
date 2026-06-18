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

### 출제 배경 및 의도

트랜잭션은 데이터베이스의 핵심 개념으로 기술사 시험에서 단독 출제될 만큼 중요합니다. 계좌 이체처럼 여러 SQL이 하나의 논리 단위로 묶여야 하는 상황에서 ACID 특성이 데이터 무결성을 어떻게 보장하는지가 핵심입니다.

단순한 ACID 용어 나열을 넘어 각 특성이 어떤 DBMS 메커니즘으로 구현되는지(원자성→Undo Log, 격리성→잠금/MVCC, 지속성→WAL/Redo Log), 트랜잭션 상태 다이어그램, TCL 명령어를 체계적으로 서술해야 합니다. MSA 환경의 분산 트랜잭션 한계와 Saga 패턴까지 언급하면 가산점을 얻을 수 있습니다.

### 1. 트랜잭션, 개요

정 의  • 데이터베이스에서 모든 연산이 완전히 수행되거나 하나도 수행되지 않아야 하는 논리적 작업 단위(Logical Unit of Work)
       - ACID(원자성·일관성·격리성·지속성) 4대 특성으로 데이터 무결성 보장

```
            BEGIN TRANSACTION
                  │
                  ▼
           ┌────────────┐
           │   활성     │ ← SQL 연산 실행 중
           │ (Active)   │
           └──────┬─────┘
                  │
        ┌─────────┴──────────────┐
        ▼(마지막 SQL 완료)        ▼(SQL 실행 중 오류)
  ┌──────────────┐         ┌───────────┐
  │  부분 완료   │         │   실패    │
  │  (Partially  │         │ (Failed)  │
  │  Committed)  │         └─────┬─────┘
  └──────┬───────┘               │ ROLLBACK
         │                       ▼
         │ COMMIT          ┌───────────┐
         ▼                 │   철회    │
  ┌───────────┐            │(Aborted)  │
  │   완료    │            └───────────┘
  │(Committed)│
  └───────────┘
```

- 트랜잭션은 Committed(완료) 또는 Aborted(철회) 중 하나의 최종 상태로만 종료되어 데이터 무결성을 보장함

### 2. ACID 4대 특성

1) 원자성(Atomicity)과 일관성(Consistency)

| 구분 | 항목 | 설명 |
|------|------|------|
| 원자성(A) | 정의 | All or Nothing: 모든 연산 완전 수행 또는 전체 취소 |
| 원자성(A) | 구현 메커니즘 | Undo Log - ROLLBACK 시 이전 값 복원 |
| 원자성(A) | 예시 | 계좌 이체: 출금 성공·입금 실패 시 출금도 ROLLBACK |
| 일관성(C) | 정의 | 트랜잭션 전후 DB가 항상 무결성 제약을 만족하는 유효한 상태 유지 |
| 일관성(C) | 구현 메커니즘 | PK·FK·CHECK·NOT NULL 제약조건 검사, 트리거 |
| 일관성(C) | 예시 | 계좌 잔액 < 0 시 트랜잭션 거부 |

- 원자성은 Undo Log로, 일관성은 제약조건 검사로 DBMS가 자동 보장함

2) 격리성(Isolation)과 지속성(Durability)

| 구분 | 항목 | 설명 |
|------|------|------|
| 격리성(I) | 정의 | 동시 실행 트랜잭션이 서로 독립적으로 실행되는 것처럼 보임 |
| 격리성(I) | 잠금 방식 | S-Lock(읽기), X-Lock(쓰기), 2PL(2단계 잠금) |
| 격리성(I) | MVCC 방식 | 스냅샷 기반 읽기로 락 없는 읽기 성능 향상 |
| 격리성(I) | 격리 수준 | READ UNCOMMITTED → READ COMMITTED → REPEATABLE READ → SERIALIZABLE |
| 지속성(D) | 정의 | COMMIT된 결과는 시스템 장애 발생 시에도 영구 보존 |
| 지속성(D) | WAL 방식 | Redo Log 먼저 디스크 기록 후 Buffer Pool 변경 → Checkpoint로 동기화 |
| 지속성(D) | 장애 복구 | WAL로 REDO(커밋 트랜잭션 재적용), Undo Log로 UNDO(미완료 롤백) |

```
[WAL(Write-Ahead Logging) 지속성 보장 구조]
  트랜잭션 실행
       │
       ▼
  Redo Log(WAL) 먼저 디스크 기록
       │
       ▼
  Buffer Pool(메모리) 변경
       │
       ▼
  COMMIT 완료 응답 (클라이언트)
       │ (비동기)
       ▼
  Dirty Page → Disk (Checkpoint)
  
  ※ 장애 시: WAL로 REDO + Undo Log로 미완료 트랜잭션 UNDO
```

- 격리성은 잠금 또는 MVCC로, 지속성은 WAL(Redo Log)로 구현되며, 두 특성은 성능-일관성 트레이드오프의 핵심

### 3. TCL과 ACID vs BASE 비교

1) TCL(Transaction Control Language)

| 구분 | 항목 | 설명 |
|------|------|------|
| COMMIT | 기능 | 트랜잭션 확정: 변경사항 영구 저장, 잠금 해제 |
| ROLLBACK | 기능 | 트랜잭션 취소: 시작 이후 모든 변경사항 취소 |
| SAVEPOINT | 기능 | 중간 저장점 설정: 특정 지점으로 부분 롤백 지원 |
| ROLLBACK TO SAVEPOINT | 기능 | 저장점 이후 변경사항만 취소 |

2) ACID vs BASE(NoSQL)와 분산 트랜잭션

| 구분 | 항목 | 설명 |
|------|------|------|
| ACID | Consistency | 강한 일관성 (항상 유효한 상태 유지) |
| ACID | Availability | 일관성 우선으로 상대적 낮음 |
| ACID | 적합 환경 | 금융·결제·재고 등 강한 무결성 필요 도메인 |
| BASE | Consistency | 최종 일관성(Eventual Consistency) |
| BASE | Availability | 가용성 최우선 |
| BASE | 적합 환경 | SNS·로그·캐시·빅데이터 등 대용량 비정형 |
| 2PC | 분산 원자성 | 모든 참여 노드가 동시 커밋/롤백 (코디네이터 SPOF 취약) |
| Saga | 분산 대안 | 로컬 트랜잭션 + 보상 트랜잭션으로 최종 일관성 달성 (MSA 적합) |

- MSA 환경에서 2PC의 블로킹 문제를 극복하기 위해 Saga 패턴이 표준 분산 트랜잭션 대안으로 부상하고 있음.  "끝"

### 실무 제언

**트랜잭션 범위 최소화 원칙**
- **챌린지**: 트랜잭션 내 외부 API 호출이나 긴 계산 작업이 포함되면 네트워크 지연 동안 DB 잠금이 유지되어 심각한 Lock 경합이 발생함
- **제언**: 트랜잭션은 DB 연산만 포함하고, 외부 I/O·계산 작업은 트랜잭션 밖에서 처리. 잠금 경합이 심하면 낙관적 잠금(Optimistic Lock)으로 전환 검토

**분산 트랜잭션의 현실적 대안**
- **챌린지**: MSA 환경에서 서비스별 독립 DB 간 ACID 보장을 위한 2PC는 코디네이터 SPOF와 블로킹 문제로 성능 병목이 됨
- **제언**: Saga 패턴으로 로컬 트랜잭션 커밋 후 이벤트 발행, 실패 시 보상 트랜잭션으로 일관성 복원하는 Eventual Consistency 모델 적용. 강한 일관성이 필수인 결제·정산 로직은 단일 서비스/DB 내 배치 설계 우선

**격리 수준과 성능 트레이드오프 관리**
- **챌린지**: SERIALIZABLE 격리 수준은 완전한 격리를 보장하지만 잠금 경합으로 TPS가 급감하고, READ UNCOMMITTED는 Dirty Read 문제가 발생함
- **제언**: 일반 OLTP는 READ COMMITTED 또는 REPEATABLE READ를 기본으로 설정하고, 회계·재고처럼 팬텀 리드 방지가 필요한 로직만 SERIALIZABLE 또는 낙관적 잠금으로 처리하는 계층적 격리 수준 정책을 적용
