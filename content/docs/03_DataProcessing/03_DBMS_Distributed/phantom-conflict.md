---
title: "팬텀 충돌 (Phantom Conflict)"
date: 2026-05-09T00:00:00+09:00
tags: ["peim", "자료처리", "DBMS", "팬텀충돌", "팬텀읽기", "트랜잭션", "격리수준"]
draft: false
exam_peim: ["135회"]
---

## 개요

팬텀 충돌(Phantom Conflict)은 트랜잭션 처리 중 한 트랜잭션이 범위 조회를 두 번 실행했을 때 다른 트랜잭션의 INSERT/DELETE로 인해 첫 번째와 두 번째 결과가 달라지는 현상이다. 팬텀 읽기(Phantom Read)라고도 하며, 동시성 제어의 핵심 문제다.

## 핵심 내용

### 팬텀 읽기 발생 시나리오

```
T1: SELECT * FROM orders WHERE amount > 1000  → 3건 조회
T2: INSERT INTO orders VALUES (4000)          → 커밋
T1: SELECT * FROM orders WHERE amount > 1000  → 4건 조회 (팬텀!)
```

- T1의 두 번째 조회에서 이전에 없던 레코드가 '유령(Phantom)'처럼 나타남

### 트랜잭션 격리 수준별 발생 가능 이상 현상

| 격리 수준 | Dirty Read | Non-Repeatable Read | Phantom Read |
|---------|-----------|--------------------|-----------| 
| READ UNCOMMITTED | 발생 | 발생 | 발생 |
| READ COMMITTED | 방지 | 발생 | 발생 |
| REPEATABLE READ | 방지 | 방지 | **발생** |
| SERIALIZABLE | 방지 | 방지 | 방지 |

### 팬텀 충돌 방지 기법

| 기법 | 설명 |
|------|------|
| **SERIALIZABLE 격리** | 범위 잠금(Range Lock)으로 완전 방지. 성능 저하 |
| **갭 잠금(Gap Lock)** | MySQL InnoDB에서 범위 내 삽입을 막는 잠금 |
| **MVCC(다중버전 동시성 제어)** | 스냅샷 기반 읽기로 팬텀 읽기 방지 (PostgreSQL) |
| **넥스트 키 잠금(Next-Key Lock)** | 레코드 잠금 + 갭 잠금 조합 |

### Non-Repeatable Read와의 비교

| 구분 | Non-Repeatable Read | Phantom Read |
|------|---------------------|-------------|
| 원인 | 기존 레코드 UPDATE | 레코드 INSERT/DELETE |
| 결과 | 같은 행의 값 변경 | 행 수 변화 |
| 방지 수준 | REPEATABLE READ | SERIALIZABLE |

## 출제 포인트

- 팬텀 읽기: INSERT/DELETE로 인한 행 수 변화 (UPDATE와 구분)
- REPEATABLE READ에서도 팬텀 발생 가능한 이유
- 갭 잠금(Gap Lock)과 SERIALIZABLE로 방지

## 연관 개념

- [트랜잭션 격리 수준]({{< relref "/docs/03_DataProcessing/03_DBMS_Distributed/transaction-isolation-level" >}}) — 격리 수준 전체 체계
- [확장성 해싱]({{< relref "/docs/03_DataProcessing/01_DataStructures/extendible-hashing" >}}) — 동시 접근 충돌 관련 자료구조

## 참고 기출

- 135회 1교시 11번 (PEIM)
