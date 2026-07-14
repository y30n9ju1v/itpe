---
title: "DB 무결성 제약조건 및 참조 무결성"
date: 2026-07-11T11:37:51+09:00
tags: ["자료처리", "데이터모델링", "무결성", "참조무결성", "외래키", "서브노트"]
draft: false
---

# DB 무결성 제약조건 및 참조 무결성 서브노트

> **두음 머리에 박기 🧠**
> - **도·개·참·키·컬·사** (무결성 제약 6종: **도**메인, **개**체, **참**조, **키**, **컬**럼, **사**용자 정의)
> - **R·C·S·S** (참조 무결성 위반 시 처리 옵션: **R**ESTRICT, **C**ASCADE, **S**ET NULL, **S**ET DEFAULT)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **데이터베이스 무결성 제약조건(Integrity Constraints) 및 참조 무결성(Referential Integrity)** |
| **정의** | 데이터 정확성·일관성·유효성 DBMS 수준 보장 규칙 총칭. 참조무결성=FK값이 부모PK 존재 or NULL 제약 → 고아레코드 방지 |
| **키워드** | 도메인 무결성, 개체 무결성, 참조 무결성, RESTRICT/CASCADE/SET NULL/SET DEFAULT, 식별/비식별 관계 |
| **개념도** | `[INSERT/UPDATE/DELETE 연산]` ➔ `[DBMS 제약조건 자동 검사]` ➔ `{위반: 연산 거부(Reject) 또는 보상 동작(Cascade)}`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (부모 삭제 시)`<br>`[자식 FK 존재?]` ➔ `RESTRICT(거부) / CASCADE(연쇄삭제) / SET NULL / SET DEFAULT` |
| **구성요소** | 1. **도메인 무결성**: 컬럼 값이 정의된 타입·범위·형식 만족<br>2. **개체 무결성**: PK는 NOT NULL + UNIQUE<br>3. **참조 무결성**: FK는 부모 PK 값 존재 또는 NULL<br>4. **키/컬럼 무결성**: 유일 키 존재, NOT NULL·UNIQUE·CHECK<br>5. **사용자 정의 무결성**: TRIGGER·CHECK·ASSERTION 기반 비즈니스 규칙 |
| **비교** | **식별 관계(Identifying Relationship)**<br>- 자식의 PK에 부모 FK 포함<br>- 부모 없이 자식 레코드 존재 불가 (강한 결합)<br><br>**비식별 관계(Non-identifying Relationship)**<br>- 자식의 일반 속성으로 FK 보유<br>- NULL 허용 가능 (약한 결합) |
| **차별화** | **무결성 제약 설계 시 성능·비즈니스 트레이드오프 전략**<br>1. **선택적 제약 적용**: 제약검사→DML 성능저하 → 핵심(PK/FK)만 우선적용, 대량배치는 Deferrable(지연검사)로 TX종료 시까지 유예<br>2. **순환참조 관리**: A→B→A 순환FK → 삽입순서제어 또는 NULL허용 후 2단계 UPDATE 전략<br>3. **분산환경 확장**: 참조무결성 원격조인 비용↑ → 비정규화 또는 Eventual Consistency로 완화 |
