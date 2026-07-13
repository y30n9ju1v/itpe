---
title: "관계대수, SQL JOIN, 옵티마이저"
date: 2026-07-12T15:22:16+09:00
tags: ["데이터처리", "관계대수", "JOIN", "옵티마이저", "쿼리최적화", "서브노트"]
draft: false
---

# 관계대수, SQL JOIN, 옵티마이저 서브노트

> **두음 머리에 박기 🧠**
> - **셀·프·조·디** (4대 순수관계연산: **셀**렉션 σ, **프**로젝션 π, **조**인 ⋈, **디**비전 ÷)
> - **NL·SM·해** (3대 물리 조인 알고리즘: **N**ested **L**oops, **S**ort **M**erge, **해**시 Hash)
> - **변·비·플** (옵티마이저 3단계: **변**환(Query Transformation) ➔ **비**용추정(Cost Estimation) ➔ **플**랜선택(Plan Selection))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **관계대수(Relational Algebra), SQL JOIN, 옵티마이저(Optimizer)** |
| **정의** | 릴레이션을 입력받아 수학적 연산으로 새 릴레이션을 만드는 절차적 질의 언어인 관계대수와, 이를 구현한 SQL의 논리적 JOIN 유형·물리적 조인 알고리즘(NL/SM/Hash), 그리고 선언형 SQL을 최소 비용의 실행 계획으로 변환하는 옵티마이저(RBO/CBO)의 통합 체계 |
| **키워드** | 순수관계연산(σ/π/⋈/÷), 일반집합연산(∪/∩/-/×), 논리적 JOIN(Inner/Outer/Cross/Self), 물리 조인 알고리즘, RBO/CBO, 카디널리티 추정, 힌트(Hint) |
| **개념도** | `[관계대수: σ·π·⋈·÷ + ∪·∩·-·×]` ➔ `[SQL 논리적 JOIN: Inner/Left/Right/Full/Cross/Self]` ➔ `[SQL 파싱]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[옵티마이저: 쿼리변환→비용추정(통계정보)→플랜선택]` ➔ `{인덱스+소량: NL Join} / {등가+대용량: Hash Join} / {비등가·정렬됨: Sort Merge Join}`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[실행 계획(Execution Plan)] → 실행 엔진` |
| **구성요소** | 1. **순수관계연산(셀·프·조·디)**: 셀렉션 σ(행 추출, WHERE), 프로젝션 π(열 추출, SELECT), 조인 ⋈(교차곱+셀렉션, JOIN), 디비전 ÷(모든 조건 만족, ALL/EXISTS)<br>2. **일반집합연산**: 합집합 ∪(UNION), 교집합 ∩(INTERSECT), 차집합 -(EXCEPT/MINUS), 교차곱 ×<br>3. **논리적 JOIN 5+유형**: Inner(교집합만), Left/Right Outer(한쪽 전체+매칭 NULL), Full Outer(합집합), Cross(M×N), Self(자기조인), Equi/Non-Equi<br>4. **물리 조인 알고리즘(NL·SM·해)**: NL Join(Driving 소량+후행 인덱스, Random I/O, First-Row 응답), Sort Merge Join(양쪽 정렬 후 병합, 비등가·인덱스 부재에 유리), Hash Join(소량 Build 해시맵+대량 Probe, 등가조인·대용량 OLAP)<br>5. **옵티마이저(변·비·플)**: 쿼리 변환(뷰 머징, 서브쿼리→조인)→비용 추정(통계정보 기반 I/O/CPU 계산, 카디널리티 추정)→플랜 선택(최소비용 접근법·조인순서·조인방법 결정) |
| **비교** | **RBO (Rule-Based Optimizer)**<br>- 사전 정의 규칙(우선순위 1~15) 기반, 통계정보 불필요<br>- 데이터 특성 미반영, 대부분 DBMS 지원 중단(구 Oracle 9i 이하)<br><br>**CBO (Cost-Based Optimizer)**<br>- 통계정보(행 수, NDV, 히스토그램) 기반 비용 계산<br>- 현대 모든 DBMS 기본 채택(Oracle 10g+, PostgreSQL, MySQL 8.0+), 통계 정확도에 성능 의존<br><br>**Nested Loops / Sort Merge / Hash Join**<br>- NL: 인덱스 필수, 소량 OLTP, Random I/O<br>- Sort Merge: 인덱스 의존 낮음, 비등가 조인 가능, Sequential I/O<br>- Hash: 등가조인(`=`)만 가능, 대용량 OLAP/DW, Build 입력이 메모리(PGA) 수용 가능해야 유리 |
| **차별화** | **JOIN·옵티마이저 성능 최적화 실무 전략**<br>1. **데이터 특성 기반 알고리즘 선택**: 소량+인덱스 완비 OLTP는 NL Join(USE_NL 힌트), 대용량 등가 집계는 Hash Join(USE_HASH), 인덱스 부재·비등가 조건은 Sort Merge Join(USE_MERGE)으로 힌트 강제 제어.<br>2. **카디널리티 추정 정확도 관리**: CBO 성능은 통계정보 정확도에 절대적으로 의존하므로, 대량 데이터 변경 후 히스토그램·NDV를 포함한 통계정보를 주기적으로 갱신해 조인 순서 오판을 방지.<br>3. **Outer Join 오용 방지 및 Driving 테이블 선정**: LEFT/RIGHT OUTER JOIN은 조인 순서가 고정되어 옵티마이저 최적화 폭을 제한하므로 필요한 경우에만 사용하고, NL Join 시 결과 집합이 작은 테이블을 Driving으로 선정.<br>4. **분산 쿼리 엔진과의 연계**: Spark SQL·Trino 등 분산 쿼리 엔진의 내부 옵티마이저도 동일한 관계대수적 변환 원리(Predicate Pushdown, 조인 재정렬)로 실행 계획을 수립하므로, 대용량 분산 환경에서도 동일한 조인 최적화 원칙이 적용됨을 이해하고 설계. |
