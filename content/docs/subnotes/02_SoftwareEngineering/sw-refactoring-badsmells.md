---
title: "코드 리팩토링 및 코드 악취"
date: 2026-07-11T11:26:36+09:00
tags: ["소프트웨어공학", "유지보수", "리팩토링", "코드스멜", "발산적변경", "산탄총수술", "클린코드", "서브노트"]
draft: false
---

# 코드 리팩토링 및 코드 악취 서브노트

> **두음 머리에 박기 🧠**
> - **중·대·발·산** (대표적 리팩토링 대상 코드 악취 4종: **중**복 코드 Duplicated, **대**형 클래스 Large Class, **발**산적 변경 Divergent Change, **산**탄총 수술 Shotgun Surgery)
> - **추·이·인·템** (핵심 리팩토링 전개 기법: 메서드 **추**출 Extract Method, 메서드/필드 **이**동 Move Method/Field, 인라인 클래스 **인**line Class, 상속 템플릿화 **템**plate Method)
> - **레·정·커** (리팩토링 안전 보증 3단계: 회귀 방지 **레**그레션 테스트(단위테스트) ➔ 코드 **정**적분석(SonarQube) ➔ 무결성 확인 및 **커**밋 Commit)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **소스코드 리팩토링 (Refactoring) 및 코드 악취 (Code Bad Smells) 유형** |
| **정의** | 외부 기능동작 유지 + 가독성·구조 개선 **리팩토링**, 결합도↑·응집도↓ → 리팩토링 필요신호 **코드 악취(중·대·발·산)** 통제기술 |
| **키워드** | 리팩토링, 코드 스멜, Divergent Change, Shotgun Surgery, Feature Envy, 정적분석 (SonarQube) |
| **개념도** | **[ 발산적 변경 (Divergent Change) vs 산탄총 수술 (Shotgun Surgery) 비교 도식 ]**<br>1. **발산적 변경 (응집도 하락 스멜)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. **산탄총 수술 (결합도 상승 스멜)**<br>요구사항 변경 (DB, UI, 비즈니스 등)<br>&nbsp;&nbsp;&nbsp;&nbsp;`│ (다양한 수정 원인 유입)` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;단일 요구사항 변경 (예: 과금 정책 변경)<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>`[ 단일 클래스 (Order Class) ]` ➔ 수시로 난도 수정 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (사방에 흩어진 파편 동시 수정)`<br>&nbsp;&nbsp;&nbsp;&nbsp;*(해결책: 클래스 추출 Extract Class)* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ Class A ]  [ Class B ]  [ Class C ]  [ Class D ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*(해결책: 클래스/메서드 통합 및 인라인)* |
| **구성요소** | 1. **발산적 변경**: 클래스 하나 → 변경사유 다수 (SRP 위배)<br>2. **산탄총 수술**: 한 곳 수정 → 다수 클래스 동시 수정 필요 (강결합)<br>3. **기능 선망(Feature Envy)**: 소속보다 타 클래스 Getter 과다호출<br>4. **데이터 뭉치(Data Clumps)**: 동일 파라미터 3~4개(시작일·종료일 등) 세트 반복<br>5. **추출 기법**: Extract Method(복잡코드→하위메서드), Extract Class(복잡필드→별도클래스) |
| **비교** | **발산적 변경 (Divergent Change)**<br>- 원인/현상: 응집력 부족 → 다양한 요건에 수시 수정<br>- 기법: Extract Class → 역할별 전담클래스 분리<br><br>**산탄총 수술 (Shotgun Surgery)**<br>- 원인/현상: 강결합 → 변경원인 1개, 다수클래스 동시수정<br>- 기법: Move Method/Field, Inline Class → 파편 병합 |
| **차별화** | **리팩토링 무결성(Regression) 보장 및 SonarQube 연계 방안**<br>1. **선(先)단위테스트 확보**: 커버리지 80%↑ 테스트코드(JUnit/PyTest) 선확보 → Green 통과 보장 후 리팩토링<br>2. **CI/CD 정적분석 게이트**: Push 시 SonarQube 자동가동 → 중복률 3%↑·복잡도 15↑ 시 빌드 차단<br>3. **클린코드 규칙 적용**: 매직넘버→static final 치환, 중첩(Deep Nesting)→Early Return/Guard Clauses |
