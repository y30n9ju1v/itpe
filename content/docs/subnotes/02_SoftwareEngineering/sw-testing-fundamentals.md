---
title: "SW 테스트 기초 및 원칙"
date: 2026-07-11T11:14:19+09:00
tags: ["소프트웨어공학", "SW테스트", "테스트7원칙", "V모델", "RBT", "서브노트"]
draft: false
---

# SW 테스트 기초 및 원칙 서브노트

> **두음 머리에 박기 🧠**
> - **결·완·초·의·가·살·정** (테스트 7원칙: **결**함존재, **완**벽불가, **초**기테스팅, 결함 **의**집, **가**짜약오류, **살**충제, **정**황의존)
> - **단·통·시·인** (테스트 단계 V-모델: **단**위 ➔ **통**합 ➔ **시**스템 ➔ **인**수 테스트)
> - **드·스** (통합 테스트 필요 모듈: 상향식 통합은 **드**라이버 Driver, 하향식 통합은 **스**텁 Stub)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **소프트웨어 테스팅 기초 원칙, V-모델 및 리스크 기반 테스팅 (RBT)** |
| **정의** | 고품질 소프트웨어를 확보하기 위해 **테스트 7원칙**을 기반으로 개발 수명주기(SDLC)와 대응되는 **V-모델(단·통·시·인)**에 따라 검증을 수행하고, 리스크(발생 가능성 및 영향도)에 의거해 자원을 배분하는 활동 |
| **키워드** | 테스트 7원칙, V-모델 (단·통·시·인), 통합테스트 (상향식/하향식), Stub & Driver, RBT (리스크 기반 테스팅) |
| **개념도** | `[ 요구사항 정의 ] ───────────────────────────── [ 인수 테스트 (사용자) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│ (분석)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼ [ 시스템 설계 ] ───────────────────────── [ 시스템 테스트 (비기능) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│ (설계)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼ [ 상세 설계 ] ───────────────────── [ 통합 테스트 (스텁/드라이버) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│ (구현)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;`└─➔ [ 프로그램 구현 ] ────────────── [ 단위 테스트 (화이트박스) ]` |
| **구성요소** | 1. **테스트 7원칙 (결·완·초·의·가·살·정)**: 결함 존재 증명, 완벽 불가, 초기 수행, 결함 의집, 가짜약의 오류, 살충제 패러독스, 정황 의존<br>2. **V-모델 테스트 단계**: 단위(모듈 단위), 통합(모듈 간 인터페이스), 시스템(기능/비기능 전반), 인수(계약 만족 및 인도 여부)<br>3. **통합 테스트 도구**: 하향식(상위부터 통합, 깊이/넓이 우선, Stub 필요) 및 상향식(하위부터 통합, Driver 필요) 기법<br>4. **RBT (Risk Based Testing)**: 리스크 매트릭스(영향도 x 발생가능성) 기준 테스트 우선순위 및 강도 결정 기법 |
| **비교** | **하향식 통합 (Top-Down)**<br>- **필요 모듈**: 스텁 (Stub - 하위 모듈이 구현 안 되었을 때 모방하는 가상 수신 모듈)<br>- **특징**: 메인 로직 조기 발견, 상위 인터페이스 조기 검증, 깊이/넓이 우선 탐색 적용<br><br>**상향식 통합 (Bottom-Up)**<br>- **필요 모듈**: 드라이버 (Driver - 상위 모듈이 없을 때 하위 모듈을 구동하는 가상 제어 모듈)<br>- **특징**: 하위 모듈 상세 테스트 가능, 최종 빌드 완성 시까지 시스템 통합 상태 파악 지연 |
| **차별화** | **살충제 패러독스 극복 및 실무 RBT 자원 효율화 방안**<br>1. **살충제 패러독스 극복을 위한 Mutation Testing 도입**: 자동화 회귀 테스트 세트에 주기적인 뮤테이션(고의로 결함을 주입한 코드 버전)을 실행하여 기존 테스트 케이스의 결함 탐지율을 끊임없이 재평가 및 리팩토링.<br>2. **RBT 기반 자원 배분 전략**: 비즈니스 영향도와 결함 발생 빈도를 정량화하여 High-Risk 20% 영역에 전체 테스트 시간/비용의 80%를 집중하고, Low-Risk 영역은 자동화 스모크 테스트(Smoke Test)로 대체.<br>3. **통합 테스트에서의 Stub/Driver 가상화**: 마이크로서비스(MSA) 분산 환경에서 테스트 병목을 피하기 위해 API 가상화 도구(WireMock 등)를 사용해 Stub/Driver 개발 오버헤드를 원천적으로 단축. |
