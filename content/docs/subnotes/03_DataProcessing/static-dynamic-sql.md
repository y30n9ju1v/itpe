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

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **정적 SQL(Static SQL)과 동적 SQL(Dynamic SQL) 비교** |
| **정의** | 정적 SQL: 컴파일 시점 SQL문 확정 → 실행계획 캐시 / 동적 SQL: 런타임 SQL문자열 조립·파싱·실행 → 유연성↑, 보안위험↑ (상반관계) |
| **키워드** | PreparedStatement, EXECUTE IMMEDIATE, 실행 계획 재사용, SQL Injection, 바인딩 변수, MyBatis `<if>` |
| **개념도** | `[SQL 요청]` ➔ `{정적: 컴파일 시 실행계획 생성·캐시} / {동적: 런타임 문자열 조립→파싱→최적화→실행}`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (동적 SQL 위험 대응)`<br>`[문자열 직접 결합] ➔ SQL Injection 위험` → `[바인딩 변수(Bind Variable) 사용] ➔ 안전`  |
| **구성요소** | 1. **정적 SQL**: Embedded SQL, PreparedStatement, Stored Procedure → 실행계획 재사용, 응답 일관성<br>2. **동적 SQL**: EXECUTE IMMEDIATE, sp_executesql, MyBatis `<if>` 태그 → 복잡 검색조건 유연대응<br>3. **바인딩 변수**: 값 직접삽입 대신 파라미터 전달, ORM(Hibernate, JPA) 기본적용 |
| **비교** | **정적 SQL**<br>- 성능 빠름(실행계획 재사용), SQL Injection 위험 없음<br>- 유연성 낮음(고정 구조), OLTP 반복 쿼리에 적합<br><br>**동적 SQL**<br>- 성능 느림(매번 파싱·최적화), 바인딩 미사용 시 SQL Injection 위험<br>- 유연성 높음, 동적 조건·검색·관리 도구에 적합 |
| **차별화** | **성능과 보안을 동시에 확보하는 SQL 설계 전략**<br>1. **상황별 선택기준**: 반복 OLTP 쿼리 → 정적 SQL(실행계획 캐시) / 가변 검색조건 관리자도구·리포트 → 동적 SQL+바인딩변수<br>2. **SQL Injection 방어원칙**: 동적 SQL 불가피 시 바인딩변수 필수 사용, 문자열 결합방식 원천금지<br>3. **AI 기반 동적SQL 연계**: TEXT2SQL 등 LLM 생성쿼리도 바인딩변수·권한검증 적용 → 인젝션·과도접근 통제 |
