---
title: "동시성 제어 미적용 이상현상과 해결 기법"
date: 2026-06-07T17:47:26+09:00
tags: ["데이터베이스", "핵토200", "동시성제어", "트랜잭션"]
topic_no1: 14
topic_no2: 2
topic_large: "동시성제어"
topic_small: "동시성제어"
exam_ref: "모의_2017.12"
exam_type: "응용"
question_no: 3
---

## 문제

데이터베이스의 트랜잭션 무결성 확보를 위해 동시성 제어를 하고 있다. 트랜잭션 동시성 제어를 하지 않은 경우 발생하는 이상현상과 이를 해결하기 위한 기법을 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 동시성제어 |
| 토픽(소) | 동시성제어 |
| 출제 | 모의_2017.12 |
| 유형 | 응용 |
| 번호 | 3 |

## 해설

> **동시성 제어 부재가 초래하는 데이터 불일치 4대 이상현상**  
> Dirty Read, Non-Repeatable Read, Phantom Read, Lost Update와 이를 해결하는 격리 수준 및 락 프로토콜

다수의 트랜잭션이 동시에 실행될 때 동시성 제어 메커니즘 없이는 서로의 실행에 간섭하여 데이터 무결성이 파괴됩니다. 이상현상의 유형과 발생 조건을 정확히 이해하는 것이 적절한 격리 수준(Isolation Level, 한 트랜잭션이 다른 트랜잭션의 변경을 얼마나 볼 수 있는지를 정의하는 단계)과 잠금 전략 선택의 전제 조건입니다.

### 1. 출제 배경 및 의도

이 문제는 동시성 제어 기법보다 한 단계 더 실용적인 관점, 즉 "제어 미적용 시 어떤 문제가 발생하는가"를 묻습니다. 실무 DBA/아키텍트는 발생 가능한 이상현상을 인식하고 격리 수준과 성능 트레이드오프를 균형 있게 설계해야 합니다. SQL 표준(SQL-92)에서 정의한 3가지 이상현상(Dirty Read, Non-Repeatable Read, Phantom Read)에 더해 Lost Update를 포함하여 서술하면 고득점입니다.

### 2. 개념의 본질과 작동 메커니즘

동시성 제어 미적용 이상현상이란 두 개 이상의 트랜잭션이 동일 데이터에 동시 접근할 때 실행 순서에 따라 데이터가 불일치하거나 소실되는 현상입니다.

- **Input:** 격리 수준 미설정 또는 부적절 설정 환경에서의 병행 트랜잭션
- **Mechanism:** 커밋되지 않은 데이터 노출 / 동일 쿼리 반복 실행 시 결과 변동 / 집계 범위 변동 / 갱신 덮어쓰기
- **Output:** 데이터 불일치, 무결성 위반, 비즈니스 로직 오류

#### 이상현상 발생 시나리오

```text
[Dirty Read]
  T1: UPDATE 잔액 = 1000 (미커밋)
  T2: SELECT 잔액 → 1000 읽음 (미커밋 데이터!)
  T1: ROLLBACK → 잔액 = 0
  결과: T2는 존재하지 않는 1000을 읽었음

[Non-Repeatable Read]
  T1: SELECT 잔액 → 500 (첫 번째 읽기)
  T2: UPDATE 잔액 = 300, COMMIT
  T1: SELECT 잔액 → 300 (두 번째 읽기)
  결과: 같은 트랜잭션에서 동일 쿼리 결과가 달라짐

[Phantom Read]
  T1: SELECT COUNT(*) WHERE 부서='개발' → 5명
  T2: INSERT INTO 사원(부서='개발'), COMMIT
  T1: SELECT COUNT(*) WHERE 부서='개발' → 6명
  결과: 없던 행(유령 행, Phantom Row)이 나타남

[Lost Update]
  T1: 잔액 읽기 = 1000, 100 차감 예정
  T2: 잔액 읽기 = 1000, 200 차감, COMMIT → 잔액 = 800
  T1: 잔액 = 900 기록, COMMIT → 잔액 = 900
  결과: T2의 갱신(200 차감) 손실
```

### 3. 핵심 키워드 (Must-Have)

| 이상현상 | 발생 조건 | SQL-92 정의 여부 | 해결 격리 수준 |
|---------|----------|----------------|--------------|
| **Dirty Read** | T1 미커밋 데이터를 T2가 읽음 | O | READ COMMITTED 이상 |
| **Non-Repeatable Read** | 같은 행을 두 번 읽었을 때 값이 다름 | O | REPEATABLE READ 이상 |
| **Phantom Read** | 같은 범위 쿼리 결과 행 수가 다름 | O | SERIALIZABLE |
| **Lost Update** | 두 트랜잭션이 같은 데이터 덮어씀 | X (추가 고려) | SELECT FOR UPDATE |

### 4. 맥락과 비교

#### 이상현상과 격리 수준 매트릭스

| 격리 수준 | Dirty Read | Non-Repeatable Read | Phantom Read | Lost Update |
|----------|-----------|--------------------|--------------------|------------|
| READ UNCOMMITTED | 발생 | 발생 | 발생 | 발생 |
| READ COMMITTED | 방지 | 발생 | 발생 | 발생 |
| REPEATABLE READ | 방지 | 방지 | 발생(InnoDB 예외) | 발생(MVCC 구현 의존, SELECT FOR UPDATE로 방지) |
| SERIALIZABLE | 방지 | 방지 | 방지 | 방지 |

#### 이상현상 해결 기법 비교

| 기법 | 원리 | 해결 이상현상 | 성능 영향 |
|------|------|------------|---------|
| **2PL(엄격)** | X-Lock을 커밋까지 유지 | Dirty Read, Lost Update | 처리량 감소 |
| **MVCC** | 스냅샷 기반 읽기 | Dirty Read, Non-Repeatable Read | 읽기 성능 우수 |
| **SELECT FOR UPDATE** | 읽기 시 X-Lock 획득 | Lost Update | 동시성 저하 |
| **Range Lock / Gap Lock** | 범위에 락 적용 | Phantom Read | 높은 경합 가능성 |
| **SERIALIZABLE** | 완전 직렬화 | 모든 이상현상 | 성능 최저 |

### 5. 실무 제언

**적절한 격리 수준 선택 전략**

- **챌린지:** SERIALIZABLE 격리 수준은 모든 이상현상을 방지하지만 동시 처리량(Throughput)이 급격히 저하됩니다. 반대로 READ UNCOMMITTED는 성능은 최고지만 데이터 신뢰성이 없어 실무에서 사용이 사실상 불가능합니다.
- **제언:** 대부분의 OLTP 시스템은 READ COMMITTED(Oracle 기본값) 또는 REPEATABLE READ(MySQL InnoDB 기본값)를 채택합니다. Lost Update가 치명적인 금융 트랜잭션(계좌 이체, 재고 차감)은 반드시 `SELECT ... FOR UPDATE` 또는 낙관적 락(버전 컬럼 체크)을 적용하여 보완합니다.

**Phantom Read 실무 대응**

- **챌린지:** InnoDB는 REPEATABLE READ에서도 Next-Key Lock(Gap Lock + Record Lock)을 통해 Phantom Read를 부분적으로 방지하지만, 특정 인덱스 미사용 쿼리에서는 여전히 발생할 수 있습니다.
- **제언:** 정확한 집계가 필요한 리포트성 쿼리는 별도 읽기 전용 레플리카에서 처리하거나 애플리케이션 레벨의 스냅샷 캐시를 활용하여 주 DB 격리 수준 상향 없이 해결합니다.
