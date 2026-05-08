---
title: "데이터베이스 트랜잭션 회복 기법 (REDO·UNDO·Shadow Paging)"
date: 2026-05-09T08:09:13+09:00
tags: ["pecs", "자료처리", "DBMS", "트랜잭션", "회복기법", "체크포인트", "REDO", "UNDO"]
draft: false
exam_pecs: ["135회"]
---

## 개요

데이터베이스 회복(Recovery)은 장애 발생 시 데이터베이스를 일관된 상태로 복원하는 기법이다. REDO/UNDO 로그 기반 회복, 체크포인트 기반 회복, 그림자 페이징의 3가지 방식이 대표적이다.

## 핵심 내용

### REDO와 UNDO를 이용한 방법

**로그(Log) 기반 회복**의 핵심 개념:

| 연산 | 적용 대상 | 목적 |
|------|-----------|------|
| **REDO** | 커밋된 트랜잭션 | 완료된 변경을 재실행하여 복원 |
| **UNDO** | 미완료 트랜잭션 | 미완료 변경을 취소하여 원상복구 |

**WAL (Write-Ahead Logging)**: 데이터 변경 전에 반드시 로그를 먼저 기록

**회복 절차 (ARIES 알고리즘)**:
```
1. Analysis Pass: 장애 시점의 활성 트랜잭션 파악
2. REDO Pass: 마지막 체크포인트 이후 로그 순방향 재실행
3. UNDO Pass: 미완료 트랜잭션 역방향 취소
```

### 체크포인트(Checkpoint)를 이용한 방법

**목적**: 로그 전체를 분석하지 않고 체크포인트 이후만 회복하여 복구 시간 단축

**동작**:
```
체크포인트 시점:
1. 메모리 버퍼의 변경 데이터를 디스크에 강제 플러시
2. 체크포인트 레코드를 로그에 기록 (활성 트랜잭션 목록 포함)

장애 발생 시:
→ 마지막 체크포인트부터만 REDO/UNDO 수행 (이전 구간 불필요)
```

**종류**:
- **Sharp Checkpoint**: 모든 버퍼 플러시 (처리 중단) — 단순하지만 성능 저하
- **Fuzzy Checkpoint**: 점진적 플러시 (처리 계속) — 복잡하지만 성능 우수

### 그림자 페이징(Shadow Paging)을 이용한 방법

**개념**: 현재 페이지 테이블(Current PT)과 그림자 페이지 테이블(Shadow PT) 두 버전을 유지

```
트랜잭션 시작:
  Current PT = Shadow PT (복사)

데이터 변경:
  Current PT의 해당 페이지만 새 위치에 기록
  Shadow PT는 변경 전 페이지 가리킴 (불변)

커밋:
  Shadow PT ← Current PT (원자적 전환)
  이전 Shadow 페이지 해제

장애 발생 시:
  Shadow PT가 일관된 상태 → UNDO 불필요
```

**장단점**:
| | 장점 | 단점 |
|-|------|------|
| Shadow Paging | UNDO 로그 불필요, 간단한 회복 | 페이지 테이블 관리 오버헤드, 단편화 발생 |
| 로그 기반 | 범용적, 체크포인트 결합 용이 | 복잡한 UNDO 처리 |

## 출제 포인트

- REDO: 커밋 완료 트랜잭션 재실행 / UNDO: 미완료 트랜잭션 취소
- WAL 원칙: 로그를 데이터보다 먼저 기록
- 체크포인트: 회복 범위를 체크포인트 이후로 제한하여 속도 향상
- Shadow Paging: 로그 없는 회복, 페이지 테이블 원자적 전환

## 연관 개념

- [DB 인덱스]({{< relref "/docs/03_DataProcessing/03_DBMS_Distributed/db-index-clustered-nonclustered" >}}) — 인덱스의 회복 시 처리
- [DB 파티셔닝]({{< relref "/docs/03_DataProcessing/03_DBMS_Distributed/db-partitioning" >}}) — 분산 DB에서의 회복 복잡성
- 트랜잭션 ACID — 회복 기법이 보장하는 원자성·내구성

## 참고 기출

- 135회 2교시 6번 (PECS)
