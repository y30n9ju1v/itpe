---
title: "소프트웨어 아키텍처 스타일"
date: 2026-07-11T11:26:36+09:00
tags: ["소프트웨어공학", "아키텍처스타일", "4플러스1뷰", "ATAM", "CBAM", "이벤트구동", "서브노트"]
draft: false
---

# 소프트웨어 아키텍처 스타일 서브노트

> **두음 머리에 박기 🧠**
> - **논·구·프·배·유** (Kruchten의 4+1 아키텍처 뷰: **논**리 뷰 Logical, **구**현(개발) 뷰 Development, **프**로세스 뷰 Process, **배**포(물리) 뷰 Physical, 그리고 이들을 통합 검증하는 **유**스케이스(시나리오) 뷰)
> - **계·이·파·마** (대표 아키텍처 스타일 4종: **계**층형 Layered, **이**벤트 구동 Event-Driven, **파**이프-필터 Pipe & Filter, **마**이크로서비스 MSA)
> - **에이·티·에이·엠** (아키텍처 적합성 평가 모델: **ATAM** Architecture Trade-off Analysis Method ➔ 품질속성 충돌 해결 기법)
> - **감·트·위·비** (ATAM 4대 산출물: **감**도점 Sensitivity Point, **트**레이드오프점 Tradeoff Point, **위**험점 Risk, **비**위험점 Non-Risk)
> - **정·역** (아키텍처 분석 2대 방향: **정**방향 분석(설계→구현 사전검증), **역**방향 분석(구현→설계 구조복원))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **소프트웨어 아키텍처 스타일 (Architecture Styles) 및 4+1 아키텍처 뷰 (View)** |
| **정의** | 소프트웨어 구조 설계의 정형화된 표준 유형인 **아키텍처 스타일**과, 다각적 이해관계자 관점에서 시스템 구조를 명세 및 검증하는 **4+1 아키텍처 뷰 기술** |
| **키워드** | Layered, Event-Driven, Pipe-Filter, 4+1 View (논·구·프·배·유), 아키텍처 평가(ATAM / CBAM) |
| **개념도** | **[ Kruchten의 4+1 아키텍처 뷰 모델 ]** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[ Pipe & Filter 아키텍처 스타일 ]**<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 논리 뷰 ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ 프로세스 뷰 ]` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 데이터 소스 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`\ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (파이프 Pipe)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 유스케이스 뷰 ]` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 필터 A (정제) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 개발 뷰 ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ 물리(배포) 뷰 ]` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (파이프 Pipe)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`(사용자 요건 시나리오 기반 정합성 교차 교정)` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 필터 B (변환) ]` ➔ `[ 데이터 싱크 ]` |
| **구성요소** | 1. **논리 뷰(Logical)**: 설계자 관점, 기능적요구사항 명세(클래스다이어그램·객체구조)<br>2. **프로세스 뷰(Process)**: 통합자 관점, 스레드동기화·성능·실행흐름(시퀀스/액티비티)<br>3. **개발 뷰(Development)**: 개발자 관점, 코드 패키징·소스파일 배치도<br>4. **물리 뷰(Physical)**: 시스템엔지니어 관점, HW노드·VM·네트워크 토폴로지<br>5. **유스케이스 뷰(Use Case)**: 全이해관계자, 4대뷰 시나리오 통합검증 앵커<br>6. **ATAM 9단계**: ①발표→②비즈니스동인 발표→③아키텍처 발표→④접근법 식별→⑤유틸리티트리 생성(품질속성 계층화)→⑥접근법분석(감도점·트레이드오프점·위험점·비위험점)→⑦시나리오 브레인스토밍→⑧우선순위화→⑨접근법 재분석<br>7. **분석 방향**: 정방향(요구사항→설계, 구현前 사전검증) vs 역방향(구현→코드분석·재문서화, Architecture Recovery) |
| **비교** | **논리 뷰(Logical View)**<br>- 표현타깃: 클래스구조, 인터페이스관계, 도메인엔티티 맵<br>- 관여대상: 설계자, 프로덕트매니저, 최종사용자<br><br>**프로세스 뷰(Process View)**<br>- 표현타깃: 동적흐름, 런타임제어, 스레드병렬성, 자원잠금<br>- 관여대상: 시스템통합엔지니어, 성능분석가<br><br>**SA 평가모델 분류**<br>- 질문지기반(Questionnaire): 경량 체크리스트<br>- 시나리오기반: SAAM(단일품질속성) vs ATAM(다중속성 트레이드오프) vs CBAM(ATAM+경제적ROI)<br><br>**정방향 vs 역방향 분석**<br>- 정방향: 요구사항→설계, 구현前 사전검증(변경비용 최소)<br>- 역방향: 구현→설계, ArchUnit/SonarQube 재문서화(현대화 대상 파악) |
| **차별화** | **비기능요건 평가 위한 ATAM+CBAM 융합 전략**<br>1. **ATAM 기반 위험분석**: 비동기메시지큐 EDA 채택 시 확장성·결합도 개선 vs 데이터정합성 저하 트레이드오프 식별 → 민감도분석으로 설계조정<br>2. **CBAM 경제성 분석 연계**: 아키텍처 변경안(MSA전환 vs 모놀리식 유지)의 도입비용 대비 비즈니스가치(Return) 정량계산 → 최적 로드맵 결정<br>3. **4+1뷰 문서화(AD) 지침 준수**: 다이어그램만 지양, IEEE 1471 준수 → 뷰별 설계배경(Rationale)·결정사항·대안분석 기록<br>4. **레거시 현대화 정방향·역방향 통합**: 역방향으로 현행구조 복원·문서화 → ATAM 정방향평가, Boehm 결함비용법칙 근거 구현前 아키텍처 부식(Erosion) 조기차단 |
