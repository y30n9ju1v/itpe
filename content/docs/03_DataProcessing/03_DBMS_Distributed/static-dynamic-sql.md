---
title: "정적 SQL과 동적 SQL 비교 (Static vs Dynamic SQL)"
date: 2026-05-09T07:09:12+09:00
tags: ["peim", "자료처리", "DBMS", "SQL", "정적SQL", "동적SQL", "PreparedStatement"]
draft: false
exam: "134회"
---

## 개요

정적 SQL(Static SQL)은 컴파일 시점에 SQL 문장이 확정되는 방식이고, 동적 SQL(Dynamic SQL)은 런타임에 SQL 문장을 구성·실행하는 방식이다. 성능·보안·유연성 측면에서 상반된 특성을 가지며, 상황에 따른 적절한 선택이 중요하다.

## 핵심 내용

### 비교표

| 구분 | 정적 SQL | 동적 SQL |
|------|---------|---------|
| **SQL 확정 시점** | 컴파일 시 | 런타임 시 |
| **실행 계획** | 컴파일 시 생성·저장 | 실행 때마다 생성 |
| **성능** | 빠름 (실행 계획 재사용) | 느림 (매번 파싱·최적화) |
| **유연성** | 낮음 (고정된 구조) | 높음 (조건에 따라 변형) |
| **보안** | SQL Injection 위험 없음 | SQL Injection 위험 (바인딩 미사용 시) |
| **유지보수** | 쉬움 (IDE 타입 체크 가능) | 어려움 (런타임 오류 발생 가능) |
| **적합 상황** | 반복 실행 쿼리, OLTP | 동적 조건, 검색 기능, 관리 도구 |

### 정적 SQL

```java
// Java PreparedStatement (정적 SQL)
PreparedStatement ps = conn.prepareStatement(
    "SELECT * FROM users WHERE id = ?"
);
ps.setInt(1, userId);
ResultSet rs = ps.executeQuery();
```

- **구현**: Embedded SQL, PreparedStatement, Stored Procedure
- **원리**: 쿼리 구조가 고정되어 DBMS가 실행 계획을 캐시에 저장
- **장점**: 실행 계획 재사용 → 응답 시간 일관성, SQL Injection 방지

### 동적 SQL

```java
// 동적 SQL (SQL Injection 위험)
String sql = "SELECT * FROM users WHERE name = '" + name + "'";
Statement st = conn.createStatement();

// 안전한 동적 SQL (바인딩 변수 사용)
String sql = "SELECT * FROM users WHERE name = ?";
PreparedStatement ps = conn.prepareStatement(sql);
ps.setString(1, name);
```

- **구현**: EXECUTE IMMEDIATE, sp_executesql, MyBatis `<if>` 태그
- **원리**: 런타임에 SQL 문자열 조립 후 파싱·최적화·실행
- **장점**: 복잡한 검색 조건, 테이블명/컬럼명 동적 변경 가능

### SQL Injection 대응

동적 SQL 사용 시 반드시 **바인딩 변수(Bind Variable)** 사용:
- 바인딩 변수: 값을 SQL 문자열에 직접 삽입하지 않고 파라미터로 전달
- ORM(Hibernate, JPA)은 기본적으로 바인딩 변수 사용

## 출제 포인트

- 실행 계획 생성 시점이 핵심 차이
- 성능 이유: 정적 SQL은 실행 계획 캐시 재사용
- 동적 SQL의 SQL Injection 취약점과 바인딩 변수로 해결
- OLTP에는 정적, 동적 조건 검색에는 동적 SQL 권장

## 연관 개념

- [트랜잭션 격리 수준]({{< relref "/docs/03_DataProcessing/03_DBMS_Distributed/transaction-isolation-level" >}}) — DBMS 쿼리 실행 환경
- [DB 인덱스]({{< relref "/docs/03_DataProcessing/03_DBMS_Distributed/db-index-clustered-nonclustered" >}}) — 실행 계획 최적화와 인덱스의 관계
- [Text2SQL]({{< relref "/docs/03_DataProcessing/03_DBMS_Distributed/text2sql" >}}) — AI 기반 동적 SQL 생성

## 참고 기출

- 134회 1교시 7번
