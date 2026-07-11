---
title: "정적 SQL과 동적 SQL"
date: 2026-07-11T11:37:51+09:00
tags: ["자료처리", "DBMS", "SQL", "정적SQL", "동적SQL", "SQLInjection", "서브노트"]
draft: false
---

# 정적 SQL과 동적 SQL 서브노트

> **두음 머리에 박기 🧠**
> - **컴·런** (SQL 확정 시점: 정적 SQL은 **컴**파일 시, 동적 SQL은 **런**타임 시)
> - **PS·EI** (구현 수단: 정적은 **P**repared**S**tatement, 동적은 **E**xecute **I**mmediate)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **정적 SQL(Static SQL)과 동적 SQL(Dynamic SQL) 비교** |
| **정의** | 정적 SQL은 컴파일 시점에 SQL 문장이 확정되어 실행 계획이 캐시되는 방식이고, 동적 SQL은 런타임에 SQL 문자열을 조립·파싱·실행하는 방식으로 유연성과 보안 위험이 상반됨 |
| **키워드** | PreparedStatement, EXECUTE IMMEDIATE, 실행 계획 재사용, SQL Injection, 바인딩 변수, MyBatis `<if>` |
| **개념도** | `[SQL 요청]` ➔ `{정적: 컴파일 시 실행계획 생성·캐시} / {동적: 런타임 문자열 조립→파싱→최적화→실행}`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (동적 SQL 위험 대응)`<br>`[문자열 직접 결합] ➔ SQL Injection 위험` → `[바인딩 변수(Bind Variable) 사용] ➔ 안전`  |
| **구성요소** | 1. **정적 SQL**: Embedded SQL, PreparedStatement, Stored Procedure — 실행 계획 재사용으로 응답 일관성<br>2. **동적 SQL**: EXECUTE IMMEDIATE, sp_executesql, MyBatis `<if>` 태그 — 복잡한 검색 조건에 유연<br>3. **바인딩 변수**: 값을 SQL 문자열에 직접 삽입하지 않고 파라미터로 전달, ORM(Hibernate, JPA)이 기본 적용 |
| **비교** | **정적 SQL**<br>- 성능 빠름(실행계획 재사용), SQL Injection 위험 없음<br>- 유연성 낮음(고정 구조), OLTP 반복 쿼리에 적합<br><br>**동적 SQL**<br>- 성능 느림(매번 파싱·최적화), 바인딩 미사용 시 SQL Injection 위험<br>- 유연성 높음, 동적 조건·검색·관리 도구에 적합 |
| **차별화** | **성능과 보안을 동시에 확보하는 SQL 설계 전략**<br>1. **상황별 선택 기준**: 반복 실행되는 OLTP 쿼리는 정적 SQL로 실행 계획 캐시를 활용하고, 검색 조건이 가변적인 관리자 도구·리포트는 동적 SQL+바인딩 변수로 구성.<br>2. **SQL Injection 방어 원칙**: 동적 SQL 사용이 불가피한 경우 반드시 바인딩 변수를 사용하며, 문자열 결합 방식은 원천 금지.<br>3. **AI 기반 동적 SQL 생성과의 연계**: TEXT2SQL처럼 LLM이 동적으로 SQL을 생성하는 경우, 생성된 쿼리에도 바인딩 변수·권한 검증을 적용해 인젝션과 과도한 데이터 접근을 통제. |
