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
| **정의** | 트랜잭션 수행 중 장애 시 비휘발성 로그+WAL 원칙 활용 → 장애이전 **일관성 상태(ACID Durability)로 복구하는 기술 및 표준 알고리즘** |
| **키워드** | WAL(Write-Ahead Logging), Steal/No-Force 정책, ARIES 3단계(분·리·언), CLR(보상 로그 레코드), LSN |
| **개념도** | `[ 트랜잭션 수행 ] ── (WAL 원칙 : 데이터 쓰기 전 로그 먼저 기록) ──➔ [ 버퍼 플러시 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`┌─────────────────── [ 시스템 Crash 발생 시 ARIES 3단계 구동 ] ─────────────────────┘`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`1. 분석 (Analysis) ➔` 로그 정방향 스캔으로 액티브 트랜잭션(Undo 대상) 및 Dirty 페이지(Redo 대상) 식별<br>`2. 리도 (Redo) ────➔` 가장 오래된 RecLSN부터 정방향으로 모든 로그 재실행 (Repeating History)<br>`3. 언도 (Undo) ────➔` 완료 안 된 트랜잭션을 역방향 스캔하며 복구 취소 및 CLR(Compensating Log) 기록 |
| **구성요소** | 1. **WAL**: 버퍼 데이터 디스크기록 전 로그레코드 디스크 선반영 원칙<br>2. **LSN**: 로그레코드별 순차 고유식별번호, 페이지별 무결성검증 기준<br>3. **Dirty Page Table**: 수정됐으나 미플러시 페이지+최초수정LSN(RecLSN) 목록<br>4. **CLR**: Undo 실행 시 작성 보상로그, 복구 중 재크래시 시 중복롤백 방지 |
| **비교** | **즉시 갱신 기법 (Immediate Update)**<br>- 디스크반영: 수행 중 수시 갱신(Steal 정책)<br>- 장애회복: REDO+UNDO 모두 필요(활성TX 취소 필요)<br><br>**지연 갱신 기법 (Deferred Update)**<br>- 디스크반영: 커밋완료 전까지 쓰기지연(No-Steal 정책)<br>- 장애회복: UNDO 불필요, REDO만 수행(성능병목 가능) |
| **차별화** | **시스템 가용성 극대화(RTO 단축) ARIES 알고리즘 및 실무 백업 전략**<br>1. **Steal/No-Force 동적 성능튜닝**: 버퍼교체 시 더티페이지 디스크쓰기 언제든 허용(Steal), 커밋 시 동기쓰기 강제안함(No-Force) → 분·리·언 3단계+CLR 구조로 완전보장<br>2. **Fuzzy Checkpoint로 오버헤드 최소화**: 체크포인트 시 활성TX테이블+Dirty페이지테이블만 간결기록, 플러시대기 없앰 → 체크포인트 시 서비스지연(Stop-the-world) 원천차단<br>3. **WAL 로그 물리적 분리**: 데이터파일용 NVMe SSD ↔ WAL 전용 고속스토리지(PMEM 등) 분리 → 쓰기 I/O 경합 제거 |
