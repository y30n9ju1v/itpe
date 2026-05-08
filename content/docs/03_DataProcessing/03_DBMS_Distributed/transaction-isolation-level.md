---
title: "DB 트랜잭션 격리 수준 (Transaction Isolation Level)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "자료처리", "DBMS", "트랜잭션", "격리수준", "동시성제어", "ACID"]
draft: false
exam_peim: "137회"
---

## 개요

트랜잭션 격리 수준(Transaction Isolation Level)은 동시에 실행되는 여러 트랜잭션 간의 간섭 정도를 정의한 ANSI/ISO SQL 표준이다. 격리 수준이 높을수록 데이터 일관성이 높아지지만 동시성(Concurrency)이 낮아진다.

## 핵심 내용

### 4가지 격리 수준 (낮음 → 높음)

| 격리 수준 | 설명 | 허용 이상 현상 |
|----------|------|--------------|
| **READ UNCOMMITTED** | 커밋되지 않은 데이터도 읽기 가능 | Dirty Read, Non-Repeatable Read, Phantom Read |
| **READ COMMITTED** | 커밋된 데이터만 읽기 (Oracle 기본값) | Non-Repeatable Read, Phantom Read |
| **REPEATABLE READ** | 같은 트랜잭션 내 동일 조회 결과 보장 (MySQL InnoDB 기본값) | Phantom Read |
| **SERIALIZABLE** | 트랜잭션을 순차 실행한 것과 동일한 결과 보장 | 없음 (완전한 격리) |

### 이상 현상 (Anomaly) 3가지

**① Dirty Read (더티 리드)**
```
T1: X = 10 → X = 20 (미커밋)
T2: X 읽기 → 20 (더티 데이터)
T1: 롤백 → X = 10 복원
결과: T2는 존재하지 않는 값 20을 읽었음
```
방지: READ COMMITTED 이상

**② Non-Repeatable Read (반복 불가 읽기)**
```
T1: X 읽기 → 10
T2: X = 20으로 수정 후 커밋
T1: X 다시 읽기 → 20 (같은 트랜잭션인데 다른 결과!)
```
방지: REPEATABLE READ 이상

**③ Phantom Read (팬텀 리드)**
```
T1: 나이 > 20인 행 조회 → 3건
T2: 나이 25인 새 행 삽입 후 커밋
T1: 동일 조건 재조회 → 4건 (幽靈처럼 새 행 등장!)
```
방지: SERIALIZABLE만 완전 방지 (InnoDB REPEATABLE READ는 Next-Key Lock으로 부분 방지)

### 격리 수준별 이상 현상 매트릭스

| 격리 수준 | Dirty Read | Non-Repeatable Read | Phantom Read |
|----------|-----------|---------------------|-------------|
| READ UNCOMMITTED | 발생 | 발생 | 발생 |
| READ COMMITTED | 방지 | 발생 | 발생 |
| REPEATABLE READ | 방지 | 방지 | 발생 |
| SERIALIZABLE | 방지 | 방지 | 방지 |

### 실무 선택 기준

- 금융·주문 시스템: REPEATABLE READ 이상
- 통계·보고 시스템: READ COMMITTED (성능 우선)
- 재고 관리: SERIALIZABLE (정확성 필수)

## 출제 포인트

- 4가지 격리 수준 이름과 특징 순서대로 서술
- 3가지 이상 현상(Dirty Read·Non-Repeatable·Phantom) 각각 시나리오 설명
- 격리수준×이상현상 매트릭스 작성

## 연관 개념

- [DB 분할]({{< relref "/docs/03_DataProcessing/03_DBMS_Distributed/db-partitioning" >}}) — 분산 환경에서 격리 수준 관리
- [Multi-Region Active-Active]({{< relref "/docs/04_ComputerSystems/06_InfraArchitecture/multi-region-active-active" >}}) — 분산 DB 일관성 문제
- [오픈소스 DBMS 마이그레이션]({{< relref "/docs/03_DataProcessing/03_DBMS_Distributed/opensource-dbms-migration" >}}) — DBMS 전환 시 격리 수준 검토

## 참고 기출

- 137회 3교시 4번 (PEIM)
- 134회 2교시 6번 (PEIM)
