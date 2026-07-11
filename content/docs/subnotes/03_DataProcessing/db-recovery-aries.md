---
title: "DB 회복 기법 및 ARIES"
date: 2026-07-11T11:16:54+09:00
tags: ["자료처리", "데이터베이스", "회복기법", "ARIES", "REDO", "UNDO", "WAL", "서브노트"]
draft: false
---

# DB 회복 기법 및 ARIES 서브노트

> **두음 머리에 박기 🧠**
> - **분·리·언** (ARIES 회복 3단계 절차: **분**석 Analysis ➔ **리**도 Redo ➔ **언**도 Undo)
> - **스·노** (ARIES의 전제 버퍼 관리 정책: **S**teal(커밋 전 디스크 쓰기 허용 ➔ Undo 필요), **No**-Force(커밋 시 디스크 강제 안 함 ➔ Redo 필요))
> - **로·리·언** (로그 기반 회복 연산: **Log** 기록 ➔ **Redo** 재실행 ➔ **Undo** 취소)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **데이터베이스 회복 기법 (Recovery) 및 ARIES 알고리즘** |
| **정의** | 트랜잭션 수행 중 시스템 장애 시, 비휘발성 로그와 WAL 원칙을 활용하여 데이터베이스를 장애 이전의 **일관성 있는 상태(ACID의 Durability)로 복구하는 기술 및 표준 알고리즘** |
| **키워드** | WAL(Write-Ahead Logging), Steal/No-Force 정책, ARIES 3단계(분·리·언), CLR(보상 로그 레코드), LSN |
| **개념도** | `[ 트랜잭션 수행 ] ── (WAL 원칙 : 데이터 쓰기 전 로그 먼저 기록) ──➔ [ 버퍼 플러시 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`┌─────────────────── [ 시스템 Crash 발생 시 ARIES 3단계 구동 ] ─────────────────────┘`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`1. 분석 (Analysis) ➔` 로그 정방향 스캔으로 액티브 트랜잭션(Undo 대상) 및 Dirty 페이지(Redo 대상) 식별<br>`2. 리도 (Redo) ────➔` 가장 오래된 RecLSN부터 정방향으로 모든 로그 재실행 (Repeating History)<br>`3. 언도 (Undo) ────➔` 완료 안 된 트랜잭션을 역방향 스캔하며 복구 취소 및 CLR(Compensating Log) 기록 |
| **구성요소** | 1. **WAL (Write-Ahead Logging)**: 버퍼의 데이터를 디스크에 기록하기 전, 로그 레코드를 디스크에 선반영하는 원칙<br>2. **LSN (Log Sequence Number)**: 로그 레코드마다 순차적으로 부여되는 고유 식별번호. 페이지별 무결성 검증 기준<br>3. **Dirty Page Table**: 버퍼 캐시에는 수정되었으나 디스크에 플러시되지 않은 페이지와 최초 수정 LSN(RecLSN) 목록<br>4. **CLR (Compensating Log Record)**: Undo 연산 실행 시 작성하는 보상 로그. 복구 중 재크래시 시 중복 롤백 방지 |
| **비교** | **즉시 갱신 기법 (Immediate Update)**<br>- **디스크 반영**: 트랜잭션 수행 중 수시로 디스크 갱신 (Steal 정책)<br>- **장애 회복**: REDO와 UNDO 연산 모두 필요 (활성 트랜잭션 취소 필요)<br><br>**지연 갱신 기법 (Deferred Update)**<br>- **디스크 반영**: 트랜잭션 커밋 완료 전까지 디스크 쓰기 지연 (No-Steal 정책)<br>- **장애 회복**: UNDO 불필요, 오직 REDO 연산만 수행 (성능 병목 가능성) |
| **차별화** | **시스템 가용성 극대화(RTO 단축)를 위한 ARIES 알고리즘 및 실무적 백업 전략**<br>1. **Steal/No-Force 정책을 통한 동적 성능 튜닝**: 성능 제고를 위해 버퍼 교체 알고리즘이 언제든 더티 페이지를 디스크에 쓸 수 있게 허용(Steal)하되, 커밋 시 성능 낭비를 막기 위해 동기적 디스크 쓰기를 강제하지 않는(No-Force) 유연성을 ARIES의 분·리·언 3단계 및 CLR 구조로 완전 보장.<br>2. **Fuzzy Checkpoint 도입을 통한 런타임 오버헤드 최소화**: 체크포인트 시점의 활성 트랜잭션 테이블과 Dirty 페이지 테이블만 간결히 기록하고 디스크 플러시 대기를 없애는 Fuzzy Checkpointing 기법을 적용하여 체크포인트 발생 시의 서비스 지연(Stop-the-world) 현상 원천 차단.<br>3. **WAL 로그 디스크 물리적 분리**: 데이터 파일 저장용 NVMe SSD와 WAL 로그 전용 고속 스토리지(PMEM 등)를 물리적으로 분리 구성하여 쓰기(Write) 연산의 디스크 I/O 경합 제거. |
