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
| **정의** | 데이터의 정확성·일관성·유효성을 DBMS 수준에서 보장하기 위한 규칙의 총칭이며, 그중 참조 무결성은 외래키(FK) 값이 부모 테이블의 기본키(PK)에 존재하거나 NULL이어야 한다는 제약으로 고아 레코드 발생을 방지 |
| **키워드** | 도메인 무결성, 개체 무결성, 참조 무결성, RESTRICT/CASCADE/SET NULL/SET DEFAULT, 식별/비식별 관계 |
| **개념도** | `[INSERT/UPDATE/DELETE 연산]` ➔ `[DBMS 제약조건 자동 검사]` ➔ `{위반: 연산 거부(Reject) 또는 보상 동작(Cascade)}`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (부모 삭제 시)`<br>`[자식 FK 존재?]` ➔ `RESTRICT(거부) / CASCADE(연쇄삭제) / SET NULL / SET DEFAULT` |
| **구성요소** | 1. **도메인 무결성**: 컬럼 값이 정의된 타입·범위·형식 만족<br>2. **개체 무결성**: PK는 NOT NULL + UNIQUE<br>3. **참조 무결성**: FK는 부모 PK 값 존재 또는 NULL<br>4. **키/컬럼 무결성**: 유일 키 존재, NOT NULL·UNIQUE·CHECK<br>5. **사용자 정의 무결성**: TRIGGER·CHECK·ASSERTION 기반 비즈니스 규칙 |
| **비교** | **식별 관계(Identifying Relationship)**<br>- 자식의 PK에 부모 FK 포함<br>- 부모 없이 자식 레코드 존재 불가 (강한 결합)<br><br>**비식별 관계(Non-identifying Relationship)**<br>- 자식의 일반 속성으로 FK 보유<br>- NULL 허용 가능 (약한 결합) |
| **차별화** | **무결성 제약 설계 시 성능·비즈니스 트레이드오프 전략**<br>1. **선택적 제약 적용**: 제약 조건 검사는 DML 성능을 저하시키므로 핵심 무결성(PK/FK)만 우선 적용하고, 대량 배치 처리 구간은 Deferrable(지연 검사)로 트랜잭션 종료 시점까지 검사를 유예.<br>2. **순환 참조 관리**: A→B→A 형태의 순환 FK 구조에서는 삽입 순서·CASCADE 충돌을 방지하기 위해 순서 제어 또는 NULL 허용 후 2단계 UPDATE 전략 적용.<br>3. **분산 환경 확장**: 분산 DB에서는 참조 무결성 검사를 위한 원격 조인 비용이 크므로, 비정규화 또는 이벤트 기반 최종 일관성(Eventual Consistency)으로 완화하는 설계 고려. |
