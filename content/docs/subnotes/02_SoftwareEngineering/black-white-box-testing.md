---
title: "블랙박스 & 경계값 테스트"
date: 2026-07-11T11:14:19+09:00
tags: ["소프트웨어공학", "SW테스트", "블랙박스", "화이트박스", "경계값분석", "동등분할", "서브노트"]
draft: false
---

# 블랙박스 & 화이트박스 테스트 서브노트

> **두음 머리에 박기 🧠**
> - **동·경·의·상·유** (블랙박스(명세 기반) 테스트 기법: **동**등분할, **경**계값분석, **의**사결정테이블, **상**태전이, **유**스케이스)
> - **구·결·조·주·루·데** (화이트박스(구조 기반) 테스트 기법: **구**문, **결**정/분기, **조**건, **주**경로, **루**프, **데**이터흐름)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **블랙박스 테스팅 (명세 기반) 및 화이트박스 테스팅 (구조 기반)** |
| **정의** | 요구사항 명세를 기반으로 기능의 정합성을 검증하는 **블랙박스 테스팅**과, 내부 소스코드의 제어 구조와 데이터 흐름을 직접 검증하는 **화이트박스 테스팅**의 기법 및 절차 |
| **키워드** | 명세 기반 테스팅, 구조 기반 테스팅, 동등분할, 경계값분석 (2-Point/3-Point), 커버리지 (구·결·조·MCDC) |
| **개념도** | `[ 블랙박스: 명세 기반 ]` ── 입력(Input) ➔ `[ ??? (구조 비공개) ]` ➔ 출력 결과 검증<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (상호 보완 수행)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 화이트박스: 구조 기반 ]` ─ 코드 분석 ➔ `[ 문장/분기/논리 흐름 ]` ➔ 실행 경로 커버리지 측정 |
| **구성요소** | 1. **동등 분할 (Equivalence Partitioning)**: 입력 도메인을 동등 그룹으로 분할하여 대표값 추출 테스팅<br>2. **경계값 분석 (Boundary Value Analysis)**: 에러 빈도가 높은 경계 영역(예: `Min`, `Min-1`, `Min+1` 등) 집중 검수<br>3. **의사결정 테이블 (Decision Table)**: 복잡한 조건(Condition)과 결과 행동(Action)을 조합 매트릭스로 설계<br>4. **제어 흐름 테스팅 (Control Flow)**: 코드 구조(Statement, Decision 등)의 흐름 그래프 경로 검증<br>5. **데이터 흐름 테스팅 (Data Flow)**: 변수 정의(Def)와 사용(Use) 경로 및 이상 징후(Def-Use Anomaly) 검수 |
| **비교** | **블랙박스 테스팅 (Black Box)**<br>- **관점/대상**: 사용자, 분석가 관점 / 외부 기능 명세 준수 여부 검증<br>- **기법**: 동등분할, 경계값분석, 의사결정테이블, 상태전이, 분류트리 등<br><br>**화이트박스 테스팅 (White Box)**<br>- **관점/대상**: 개발자, 화이트박스 테스터 관점 / 소스코드 제어/데이터 흐름 검증<br>- **기법**: 구문 커버리지, 결정/분기 커버리지, 조건 커버리지, MCDC, 데이터흐름 |
| **차별화** | **경계값 분석의 고도화 및 실무적 자동 테스팅 연계 방안**<br>1. **2-Point vs 3-Point 경계값 분석 선별 적용**: 단순 로직은 2-Point(경계값, 경계 외곽값 1개)를 적용하고, 고위험/금융 거래 로직은 3-Point(경계값, 경계 내부 인접값 1개, 경계 외곽 인접값 1개)를 적용하여 정밀도 제어.<br>2. **API Gate/백엔드 동시 경계값 유효성 검증**: 클라이언트 사이드(HTML5/JS 유효성 검증) 외에 공격자가 조작된 데이터를 보낼 수 있으므로, API 서버 및 DB Constraint 단계에서 경계값 테스트 케이스를 동시에 설계하여 OWASP Top-10 취약점(인젝션 등) 원천 방지.<br>3. **테스트 데이터 제너레이터(Fuzzing) 연계**: 경계값 및 예외값을 자동으로 생성하여 대량 입력을 수행하는 퍼징(Fuzzing) 도구를 연계하여 사람이 인지하지 못한 경계 범위 결함 조기 탐지. |
