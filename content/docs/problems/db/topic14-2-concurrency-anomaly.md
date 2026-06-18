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

### 출제 배경 및 의도

다수의 트랜잭션이 동시에 실행될 때 동시성 제어 메커니즘 없이는 서로의 실행에 간섭하여 데이터 무결성이 파괴된다. 이 문제는 동시성 제어 기법보다 한 단계 더 실용적인 관점, 즉 "제어 미적용 시 어떤 문제가 발생하는가"를 묻는다.

실무 DBA/아키텍트는 발생 가능한 이상현상을 인식하고 격리 수준과 성능 트레이드오프를 균형 있게 설계해야 한다. SQL 표준(SQL-92)에서 정의한 3가지 이상현상(Dirty Read, Non-Repeatable Read, Phantom Read)에 더해 Lost Update를 포함하여 서술하면 고득점이다.

### 1. 동시성 제어 미적용 이상현상, 개요

정 의  • 두 개 이상의 트랜잭션이 동일 데이터에 동시 접근할 때 실행 순서에 따라 데이터가 불일치하거나 소실되는 현상
       - 격리 수준(Isolation Level) 미설정 또는 부적절 설정 환경에서 발생

```
[4대 이상현상 발생 시나리오]

[Dirty Read]                    [Non-Repeatable Read]
 T1: UPDATE 잔액=1000(미커밋)    T1: SELECT 잔액 → 500
 T2: SELECT 잔액 → 1000(오염!)   T2: UPDATE 잔액=300, COMMIT
 T1: ROLLBACK                    T1: SELECT 잔액 → 300(변경!)
 → T2는 존재하지 않는 값 읽음    → 동일 쿼리 결과 불일치

[Phantom Read]                  [Lost Update]
 T1: COUNT(부서='개발') → 5명    T1: 잔액 읽기=1000, 100 차감 예정
 T2: INSERT 사원(개발), COMMIT   T2: 잔액=800, COMMIT
 T1: COUNT(부서='개발') → 6명    T1: 잔액=900, COMMIT
 → 없던 유령 행(Phantom Row)     → T2의 갱신(200 차감) 소실
```

- 이상현상은 격리 수준을 높일수록 방지되지만, 동시 처리량(Throughput)은 감소하는 트레이드오프가 존재한다.

### 2. 4대 이상현상과 해결 기법 상세

1) 이상현상 발생 조건 및 해결 격리 수준

| 구분 | 이상현상 | 발생 조건 | SQL-92 정의 | 해결 격리 수준 |
|------|---------|---------|-----------|------------|
| ① | Dirty Read | T1 미커밋 데이터를 T2가 읽음 | O | READ COMMITTED 이상 |
| ② | Non-Repeatable Read | 같은 행을 두 번 읽었을 때 값이 다름 | O | REPEATABLE READ 이상 |
| ③ | Phantom Read | 같은 범위 쿼리 결과 행 수가 다름 | O | SERIALIZABLE |
| ④ | Lost Update | 두 트랜잭션이 같은 데이터 덮어씀 | X (추가 고려) | SELECT FOR UPDATE |

- Lost Update는 SQL-92 표준에 포함되지 않았으나, 금융·재고 트랜잭션에서 가장 치명적인 이상현상이다.

2) 이상현상 해결 기법 비교

| 구분 | 기법 | 원리 | 해결 이상현상 | 성능 영향 |
|------|------|------|------------|---------|
| 락 기반 | 2PL (엄격) | X-Lock을 커밋까지 유지 | Dirty Read, Lost Update | 처리량 감소 |
| 락 기반 | SELECT FOR UPDATE | 읽기 시 X-Lock 획득 | Lost Update | 동시성 저하 |
| 락 기반 | Range Lock / Gap Lock | 범위에 락 적용 | Phantom Read | 높은 경합 가능성 |
| MVCC | 스냅샷 기반 읽기 | 커밋된 버전 스냅샷 참조 | Dirty Read, Non-Repeatable Read | 읽기 성능 우수 |
| 격리 수준 | SERIALIZABLE | 완전 직렬화 | 모든 이상현상 | 성능 최저 |

### 3. 격리 수준과 이상현상 매트릭스 및 트렌드

| 격리 수준 | Dirty Read | Non-Repeatable Read | Phantom Read | Lost Update |
|---------|-----------|--------------------|-----------| ----------|
| READ UNCOMMITTED | 발생 | 발생 | 발생 | 발생 |
| READ COMMITTED | 방지 | 발생 | 발생 | 발생 |
| REPEATABLE READ | 방지 | 방지 | 발생(InnoDB: Next-Key Lock으로 부분 방지) | 발생(SELECT FOR UPDATE로 방지) |
| SERIALIZABLE | 방지 | 방지 | 방지 | 방지 |

대부분의 OLTP 시스템은 READ COMMITTED(Oracle/PostgreSQL 기본값) 또는 REPEATABLE READ(MySQL InnoDB 기본값)를 채택한다. MySQL InnoDB는 REPEATABLE READ에서 Next-Key Lock(Gap Lock + Record Lock)으로 Phantom Read를 부분적으로 방지하는 독자적 구현을 제공한다.  "끝"

### 실무 제언

**격리 수준과 성능의 균형 설계**
- **챌린지**: SERIALIZABLE은 모든 이상현상을 방지하지만 동시 처리량이 급격히 저하된다. READ UNCOMMITTED는 성능은 최고이나 데이터 신뢰성이 없어 실무 사용이 사실상 불가능하다.
- **제언**: Lost Update가 치명적인 금융 트랜잭션(계좌 이체, 재고 차감)은 `SELECT ... FOR UPDATE` 또는 낙관적 락(버전 컬럼 체크)을 필수 적용한다.

**Phantom Read 실무 대응**
- **챌린지**: InnoDB REPEATABLE READ에서 인덱스 미사용 범위 쿼리는 Gap Lock이 광범위하게 적용되어 데드락을 유발할 수 있다.
- **제언**: 정확한 집계가 필요한 리포트성 쿼리는 별도 읽기 전용 레플리카에서 처리하거나 애플리케이션 레벨의 스냅샷 캐시를 활용하여 주 DB 격리 수준 상향 없이 해결한다.

**멀티 DBMS 환경의 격리 수준 통합 관리**
- **챌린지**: MSA 환경에서 서비스별로 다른 DBMS(MySQL, PostgreSQL, Oracle)를 혼용하면 DBMS별 기본 격리 수준 차이로 동일 로직에서 서로 다른 이상현상이 발생한다.
- **제언**: 멀티 DBMS 환경에서는 격리 수준을 명시적으로 설정하고, 핵심 트랜잭션에는 애플리케이션 레벨에서 낙관적 락(버전 컬럼)을 적용하여 DBMS 구현 차이를 흡수한다.
