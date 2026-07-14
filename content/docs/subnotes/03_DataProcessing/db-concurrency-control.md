---
title: "DB 동시성 제어 및 격리수준"
date: 2026-07-11T11:16:54+09:00
tags: ["자료처리", "데이터베이스", "동시성제어", "격리수준", "2PL", "MVCC", "서브노트"]
draft: false
---

# DB 동시성 제어 및 격리수준 서브노트

> **두음 머리에 박기 🧠**
> - **갱·현·모·이** (동시성 결여 시 4대 이상현상: **갱**신 손실, **현**황 파악 오류(Dirty Read), **모**순성(Non-Repeatable Read), **이**중 분석(Phantom Read))
> - **미·확·반·직** (트랜잭션 4대 격리 수준: **미**확정 읽기 Read Uncommitted, **확**정 읽기 Read Committed, **반**복 읽기 Repeatable Read, **직**렬화 Serializable)
> - **A·C·I·D** (트랜잭션 4대 특성: **A**tomicity 원자성, **C**onsistency 일관성, **I**solation 격리성, **D**urability 지속성)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **데이터베이스 동시성 제어 (Concurrency Control) 및 트랜잭션 격리 수준** |
| **정의** | 다중 트랜잭션 환경 이상현상(갱·현·모·이) 방지 **동시성 제어 기술** + 성능·정합성 트레이드오프 조율 **격리수준(미·확·반·직) 표준** |
| **키워드** | 갱·현·모·이, 격리수준(미·확·반·직), 2PL (Two-Phase Locking), MVCC (다중버전동시성제어), Next-Key Lock |
| **개념도** | `[ 트랜잭션 T1 ] ── Write (A) ──➔ [ DB 테이블 ] ── Write (A) ──➔ [ 트랜잭션 T2 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (동시성 제어 부재 시 갱신손실 발생)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ Lock 기반 (2PL) ]` ────── 락 획득(Growing Phase) ➔ 락 해제(Shrinking Phase) (직렬성 보장)<br>`[ MVCC (Undo 로그 활용) ]` ── 쓰기 작업 중에도 읽기 작업은 기존 Undo 버전을 참조하여 블로킹 방지 |
| **구성요소** | 1. **2PL (Two-Phase Locking)**: 락 획득단계/해제단계 엄격분리 → 직렬화가능성 보장<br>2. **MVCC**: 변경 시 Undo로그에 이전버전 기록 → 읽기-쓰기 대기 제거<br>3. **Shared/Exclusive Lock**: 공유락(S-Lock, 중복가능) vs 배타락(X-Lock, 중복차단)<br>4. **Next-Key Lock(InnoDB)**: Record Lock+Gap Lock 결합 → RR에서도 Phantom Read 방지<br>5. **트랜잭션 ACID**: 원자성(전부수행/취소, Undo Log)·일관성(제약유지)·격리성(독립, Lock/MVCC)·지속성(영구보존, WAL/Redo)<br>6. **트랜잭션 상태전이**: BEGIN→Active→Partially Committed→Committed/Failed→Aborted |
| **비교** | **낙관적 동시성 제어 (Optimistic)**<br>- 전제: 충돌 거의없음 가정<br>- 방법: Lock없이 처리 → 커밋시점 버전충돌 확인·롤백<br><br>**비관적 동시성 제어 (Pessimistic)**<br>- 전제: 충돌 빈번 가정<br>- 방법: 접근시점 S/X-Lock 획득 → 타TX 대기유도 |
| **차별화** | **대규모 트래픽 환경 동시성 제어 성능 최적화 실무 전략**<br>1. **Next-Key Lock 병목 인지**: InnoDB RR의 Gap Lock → 범위검색 시 Deadlock 빈발 → 성능중심 서비스는 Read Committed 하향+레코드락만 사용 검토<br>2. **Redis 분산 락 활용**: 분산DB에서 커넥션·행잠금 오버헤드 회피 → Redisson pub/sub 분산락 또는 Spin Lock으로 DB진입 전 대기제어<br>3. **낙관적 락(Version Column) 효율화**: 동시쓰기 잦으나 충돌률 낮은 재고차감 등 → JPA `@Version` 낙관적 락 → DB Lock 점유시간 0 수축 |
