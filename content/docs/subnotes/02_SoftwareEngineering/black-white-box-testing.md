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
| **정의** | 요구사항명세 기반 기능정합성 검증 **블랙박스 테스팅**과, 내부 소스코드 제어구조·데이터흐름 직접검증 **화이트박스 테스팅**의 기법 및 절차 |
| **키워드** | 명세 기반 테스팅, 구조 기반 테스팅, 동등분할, 경계값분석 (2-Point/3-Point), 커버리지 (구·결·조·MCDC) |
| **개념도** | `[ 블랙박스: 명세 기반 ]` ── 입력(Input) ➔ `[ ??? (구조 비공개) ]` ➔ 출력 결과 검증<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (상호 보완 수행)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 화이트박스: 구조 기반 ]` ─ 코드 분석 ➔ `[ 문장/분기/논리 흐름 ]` ➔ 실행 경로 커버리지 측정 |
| **구성요소** | 1. **동등분할**: 입력도메인 → 동등그룹 분할, 대표값 추출테스팅<br>2. **경계값분석**: 에러빈도 높은 경계영역(`Min`,`Min-1`,`Min+1` 등) 집중검수<br>3. **의사결정 테이블**: 조건(Condition)·결과행동(Action) 조합매트릭스 설계<br>4. **제어흐름 테스팅**: 코드구조(Statement/Decision) 흐름그래프 경로검증<br>5. **데이터흐름 테스팅**: 변수 정의(Def)·사용(Use) 경로, Def-Use 이상징후 검수 |
| **비교** | **블랙박스 테스팅**<br>- 관점/대상: 사용자·분석가 관점 / 외부 기능명세 준수여부 검증<br>- 기법: 동등분할, 경계값분석, 의사결정테이블, 상태전이, 분류트리 등<br><br>**화이트박스 테스팅**<br>- 관점/대상: 개발자·화이트박스테스터 관점 / 소스코드 제어·데이터흐름 검증<br>- 기법: 구문/결정·분기/조건 커버리지, MCDC, 데이터흐름 |
| **차별화** | **경계값 분석 고도화 및 실무적 자동테스팅 연계 방안**<br>1. **2-Point vs 3-Point 선별 적용**: 단순로직은 2-Point(경계값·외곽값1개), 고위험/금융로직은 3-Point(경계값·내부인접1·외곽인접1)로 정밀도 제어<br>2. **API Gate/백엔드 동시 경계값 검증**: 클라이언트단(HTML5/JS) 외 조작데이터 유입 가능 → API서버·DB Constraint 단계 병행설계 → OWASP Top-10(인젝션 등) 원천방지<br>3. **퍼징(Fuzzing) 연계**: 경계값·예외값 자동생성 대량입력 도구 연계 → 사람이 놓친 경계결함 조기탐지 |
