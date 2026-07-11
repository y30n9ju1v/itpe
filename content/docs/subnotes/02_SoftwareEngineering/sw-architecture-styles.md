---
title: "소프트웨어 아키텍처 스타일"
date: 2026-07-11T11:26:36+09:00
tags: ["소프트웨어공학", "아키텍처스타일", "4플러스1뷰", "ATAM", "CBAM", "이벤트구동", "서브노트"]
draft: false
---

# 소프트웨어 아키텍처 스타일 서브notes

> **두음 머리에 박기 🧠**
> - **논·구·프·배·유** (Kruchten의 4+1 아키텍처 뷰: **논**리 뷰 Logical, **구**현(개발) 뷰 Development, **프**로세스 뷰 Process, **배**포(물리) 뷰 Physical, 그리고 이들을 통합 검증하는 **유**스케이스(시나리오) 뷰)
> - **계·이·파·마** (대표 아키텍처 스타일 4종: **계**층형 Layered, **이**벤트 구동 Event-Driven, **파**이프-필터 Pipe & Filter, **마**이크로서비스 MSA)
> - **에이·티·에이·엠** (아키텍처 적합성 평가 모델: **ATAM** Architecture Trade-off Analysis Method ➔ 품질속성 충돌 해결 기법)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **소프트웨어 아키텍처 스타일 (Architecture Styles) 및 4+1 아키텍처 뷰 (View)** |
| **정의** | 소프트웨어 구조 설계의 정형화된 표준 유형인 **아키텍처 스타일**과, 다각적 이해관계자 관점에서 시스템 구조를 명세 및 검증하는 **4+1 아키텍처 뷰 기술** |
| **키워드** | Layered, Event-Driven, Pipe-Filter, 4+1 View (논·구·프·배·유), 아키텍처 평가(ATAM / CBAM) |
| **개념도** | **[ Kruchten의 4+1 아키텍처 뷰 모델 ]** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[ Pipe & Filter 아키텍처 스타일 ]**<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 논리 뷰 ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ 프로세스 뷰 ]` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 데이터 소스 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`\ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (파이프 Pipe)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 유스케이스 뷰 ]` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 필터 A (정제) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 개발 뷰 ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ 물리(배포) 뷰 ]` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (파이프 Pipe)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`(사용자 요건 시나리오 기반 정합성 교차 교정)` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 필터 B (변환) ]` ➔ `[ 데이터 싱크 ]` |
| **구성요소** | 1. **논리 뷰 (Logical)**: 설계자 관점. 시스템의 기능적 요구사항 명세 (클래스 다이어그램, 객체 구조)<br>2. **프로세스 뷰 (Process)**: 통합자 관점. 스레드 동기화, 시스템 성능, 실행 흐름 명세 (시퀀스/액티비티 다이어그램)<br>3. **개발(구현) 뷰 (Development)**: 개발자 관점. 코드 컴포넌트 패키징, 정적 소스 파일 배치도 명세<br>4. **물리(배포) 뷰 (Physical)**: 시스템 엔지니어 관점. HW 서버 노드, 클라우드 가상 머신, 네트워크 토폴로지 배치<br>5. **유스케이스 뷰 (Use Case)**: 전체 이해관계자 대상. 4가지 뷰의 설계 내용을 시나리오로 통합 검증하는 앵커 역할 |
| **비교** | **논리 뷰 (Logical View)**<br>- **표현 타깃**: 클래스 구조, 인터페이스 관계, 도메인 엔티티 맵<br>- **관여 대상**: 시스템 설계자, 프로덕트 매니저, 최종 사용자<br><br>**프로세스 뷰 (Process View)**<br>- **표현 타깃**: 동적 흐름, 런타임 제어, 스레드 병렬성, 자원 잠금<br>- **관여 대상**: 시스템 통합 엔지니어, 고성능 성능 분석가 |
| **차별화** | **아키텍처의 비기능 요건 평가를 위한 ATAM 및 경제성 중심의 CBAM 평가 융합 전략**<br>1. **ATAM (Architecture Trade-off Analysis Method) 기반 위험 분석**: 특정 아키텍처 스타일(예: 비동기 메시지 큐 기반 EDA) 채택 시, 확장성과 결합도는 개선(이득)되나 즉시성 데이터 정합성(Loss)이 상충하는 트레이드오프(Trade-off) 지점을 식별하고 민감도(Sensitivity) 분석을 통해 설계 조정.<br>2. **CBAM (Cost Benefit Analysis Method) 경제성 분석 연계**: 여러 품질 속성 해결을 위해 도입할 아키텍처 변경안(예: MSA 전면 전환 vs 모놀리식 유지보수)의 도입 비용 대비 비즈니스적 가치(Return)를 정량 계산하여 최적 비용 효율의 아키텍처 로드맵 결정.<br>3. **4+1 뷰의 실무적 문서화(AD, Architecture Document) 지침 준수**: 다이어그램만 그리는 것을 지양하고, IEEE 1471 표준을 준수하여 각 뷰마다 설계 배경(Rationale), 결정 사항, 대안 분석 기록 유지. |
