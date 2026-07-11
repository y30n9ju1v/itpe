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

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **데이터베이스 동시성 제어 (Concurrency Control) 및 트랜잭션 격리 수준** |
| **정의** | 다중 트랜잭션 환경에서 일관성 및 정합성을 훼손하는 **이상현상(갱·현·모·이)**을 방지하는 **동시성 제어 기술**과 성능/정합성을 조율하는 **격리 수준(미·확·반·직) 표준** |
| **키워드** | 갱·현·모·이, 격리수준(미·확·반·직), 2PL (Two-Phase Locking), MVCC (다중버전동시성제어), Next-Key Lock |
| **개념도** | `[ 트랜잭션 T1 ] ── Write (A) ──➔ [ DB 테이블 ] ── Write (A) ──➔ [ 트랜잭션 T2 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (동시성 제어 부재 시 갱신손실 발생)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ Lock 기반 (2PL) ]` ────── 락 획득(Growing Phase) ➔ 락 해제(Shrinking Phase) (직렬성 보장)<br>`[ MVCC (Undo 로그 활용) ]` ── 쓰기 작업 중에도 읽기 작업은 기존 Undo 버전을 참조하여 블로킹 방지 |
| **구성요소** | 1. **2PL (Two-Phase Locking)**: 락을 획득만 하는 단계와 해제만 하는 단계로 엄격 분리하여 직렬화 가능성 보장<br>2. **MVCC (Multi-Version Concurrency Control)**: 데이터 변경 시 Undo 로그에 이전 버전을 기록하여 읽기-쓰기 대기 제거<br>3. **Shared / Exclusive Lock**: 읽기용 공유 락(S-Lock, 중복 가능) 및 쓰기용 배타 락(X-Lock, 중복 차단)<br>4. **Next-Key Lock (InnoDB)**: 레코드 락(Record Lock)과 갭 락(Gap Lock)을 결합하여 Repeatable Read에서도 Phantom Read 방지 |
| **비교** | **낙관적 동시성 제어 (Optimistic)**<br>- **전제**: 트랜잭션 간 충돌이 거의 발생하지 않을 것이라 가정<br>- **방법**: Lock 없이 트랜잭션 처리 ➔ 커밋 시점에 버전 충돌 확인 및 롤백<br><br>**비관적 동시성 제어 (Pessimistic)**<br>- **전제**: 트랜잭션 간 충돌이 빈번하게 발생할 것이라 가정<br>- **방법**: 데이터 접근 시점에 Shared/Exclusive Lock을 획득하여 타 트랜잭션 대기 유도 |
| **차별화** | **대규모 트래픽 환경에서의 동시성 제어 성능 최적화 실무 전략**<br>1. **Next-Key Lock에 의한 성능 병목 인지**: MySQL InnoDB의 Repeatable Read 격리수준에서 제공되는 갭 락(Gap Lock)은 범위 검색 시 데드락(Deadlock)의 빈번한 원인이 되므로, 성능 중심 서비스는 격리 수준을 **Read Committed**로 하향하고 레코드 락만 사용하도록 설정 검토.<br>2. **Redis 기반 분산 락(Distributed Lock) 활용**: 분산 DB 환경에서 DB 커넥션 및 행 잠금 오버헤드를 피하기 위해, Redisson 라이브러리의 pub/sub 기반 분산 락 또는 Spin Lock을 활용하여 DB 진입 전 스핀 대기 제어.<br>3. **낙관적 락(Version Column)을 통한 쓰기 효율화**: 상품 재고 차감 등 동시 쓰기가 잦으나 충돌 확률이 한 자릿수인 경우, JPA `@Version` 속성 기반 낙관적 락을 적용하여 DB Lock 점유 시간을 0으로 수축. |
