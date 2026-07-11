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
| **정의** | 외부의 기능 동작은 유지한 채 가독성과 구조를 개선하는 **리팩토링**과, 결합도 상승 및 응집도 하락으로 리팩토링이 필요한 상태를 뜻하는 **코드 악취(중·대·발·산) 통제 기술** |
| **키워드** | 리팩토링, 코드 스멜, Divergent Change, Shotgun Surgery, Feature Envy, 정적분석 (SonarQube) |
| **개념도** | **[ 발산적 변경 (Divergent Change) vs 산탄총 수술 (Shotgun Surgery) 비교 도식 ]**<br>1. **발산적 변경 (응집도 하락 스멜)** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. **산탄총 수술 (결합도 상승 스멜)**<br>요구사항 변경 (DB, UI, 비즈니스 등)<br>&nbsp;&nbsp;&nbsp;&nbsp;`│ (다양한 수정 원인 유입)` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;단일 요구사항 변경 (예: 과금 정책 변경)<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>`[ 단일 클래스 (Order Class) ]` ➔ 수시로 난도 수정 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (사방에 흩어진 파편 동시 수정)`<br>&nbsp;&nbsp;&nbsp;&nbsp;*(해결책: 클래스 추출 Extract Class)* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ Class A ]  [ Class B ]  [ Class C ]  [ Class D ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*(해결책: 클래스/메서드 통합 및 인라인)* |
| **구성요소** | 1. **발산적 변경**: 하나의 클래스가 변경되는 이유가 너무 여러 개 존재할 때 발생 (SRP 위배 상태)<br>2. **산탄총 수술**: 한 군데 코드를 변경했을 때 수많은 클래스들을 짤막하게 함께 다 뜯어고쳐야 할 때 발생 (강결합 상태)<br>3. **기능 선망 (Feature Envy)**: 특정 메서드가 자기가 소속된 곳보다 다른 클래스의 Getter를 더 많이 불러다 쓸 때 발생<br>4. **데이터 뭉치 (Data Clumps)**: 3~4개의 동일한 파라미터(예: 시작일, 종료일)가 사방에 항상 세트로 몰려다니는 현상<br>5. **추출 기법**: Extract Method(복잡한 코드를 하위 메서드로), Extract Class(복잡한 필드를 묶어 별도 클래스로 분리) |
| **비교** | **발산적 변경 (Divergent Change)**<br>- **원인 / 현상**: 단일 클래스 내부 응집력 부족 / 하나의 클래스가 사방에서 들어오는 요건 때문에 수시 수정당함<br>- **리팩토링 기법**: 클래스 추출(Extract Class)을 통해 역할별 전담 클래스로 쪼갬<br><br>**산탄총 수술 (Shotgun Surgery)**<br>- **원인 / 현상**: 클래스 간 강한 종속 결합 / 변경 원인은 하나인데 여러 클래스에 동시 수술(수정)을 감행해야 함<br>- **리팩토링 기법**: 메서드/필드 이동(Move Method/Field), 클래스 인라인화(Inline Class)를 통해 파편을 병합 |
| **차별화** | **리팩토링 무결성(Regression) 보장 프로세스 및 정적 분석 도구(SonarQube) 연계 방안**<br>1. **리팩토링 전단계 자동화 단위테스트 커버리지 확보**: 리팩토링 중 실수가 발생해 기능이 망가지는 위험을 차단하도록, 코드 수정 전 반드시 커버리지 80% 이상의 단위 테스트 코드(JUnit/PyTest 등)를 선수 확보하고 통과(Green)를 보장.<br>2. **CI/CD 파이프라인 내 정적 분석 자동 검출**: 개발자가 Git Push 시 빌드 서버에서 **SonarQube** 정적 분석 툴을 자동 가동하여, 중복 코드율 3% 이상 초과, 복잡도(Cognitive Complexity) 15 초과 시 빌드를 깨버리는 하드웨어적 차단 게이트 설치.<br>3. **클린코드 가독성 규칙 적용**: 매직 넘버(Magic Number)를 static final 상수로 치환하고, 조건식 중첩(Deep Nesting)을 빠른 반환(Early Return/Guard Clauses) 패턴으로 리팩토링하여 가독성 강화. |
