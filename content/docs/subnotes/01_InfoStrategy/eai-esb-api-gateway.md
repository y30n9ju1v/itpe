---
title: "시스템 통합 솔루션의 진화: EAI, ESB, API Gateway"
date: 2026-07-12T15:23:43+09:00
tags: ["정보전략", "IT경영", "EAI", "ESB", "APIGateway", "시스템통합", "서브노트"]
draft: false
---

# 시스템 통합 솔루션의 진화: EAI, ESB, API Gateway 서브노트

> **두음 머리에 박기 🧠**
> - **이·에·에** (통합 미들웨어 진화 순서: **E**AI ➔ **E**SB ➔ **API** Gateway, 허브 → 버스 → 게이트웨이)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **EAI(Enterprise Application Integration), ESB(Enterprise Service Bus), API Gateway** |
| **정의** | 이기종 앱 데이터·프로세스 연동 중앙집중형 허브(EAI) → SOA 구현 분산형 미들웨어(ESB) → MSA·클라우드네이티브 경량 단일진입점(API Gateway)으로 진화한 시스템통합 솔루션 계보 |
| **키워드** | 어댑터/메시지큐, SOAP/WSDL/BPEL, REST/gRPC, OAuth2/JWT, SPOF, MSA |
| **개념도** | `[ 이기종 시스템 개별 연동(Spaghetti) ] ➔ [ EAI 허브 ] ➔ [ ESB 분산 버스 ] ➔ [ API Gateway 경량 게이트웨이 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`중앙집중형 SPOF`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`SOA 표준 프로토콜`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`MSA 단일 진입점(인증/라우팅)` |
| **구성요소** | 1. **EAI**: 어댑터·MQ·데이터변환(Transformation) 엔진 → 이기종시스템 중앙집중 관리, 허브장애 시 전체마비(SPOF)·벤더 Lock-in 한계<br>2. **ESB**: 메시지라우팅·프로토콜변환·BPEL 오케스트레이션 담당 분산형 미들웨어, SOAP/WSDL로 상호운용성 확보하나 여전히 중앙집중 관리부담·무거운 성능오버헤드<br>3. **API Gateway**: MSA 다수서비스 단일진입점(Single Entry Point), REST/gRPC 라우팅·OAuth2/JWT 인증·Rate Limiting·Circuit Breaker로 경량화, 단 게이트웨이 장애 시 전체서비스 영향 |
| **비교** | **EAI**<br>- 등장배경: 이기종 시스템 통합 필요<br>- 아키텍처: 중앙집중형 허브<br>- 통신방식: 동기/비동기 메시징<br>- 적합환경: 레거시 통합(ERP-CRM)<br>- 확장성: 낮음<br><br>**ESB**<br>- 등장배경: SOA 확산, 서비스 재사용<br>- 아키텍처: 분산형 버스<br>- 통신방식: SOAP/WS-* 표준<br>- 적합환경: SOA 기반 대규모 엔터프라이즈<br>- 확장성: 중간<br><br>**API Gateway**<br>- 등장배경: MSA·클라우드 네이티브 확산<br>- 아키텍처: 경량 게이트웨이<br>- 통신방식: REST/gRPC, JSON<br>- 적합환경: MSA, 클라우드 네이티브<br>- 확장성: 높음 |
| **차별화** | **레거시-MSA 공존 환경 통합 아키텍처 전략**<br>1. **단계적 전환(Strangler Fig)**: 레거시 일괄전환 대신 신규서비스부터 API Gateway 경유 개발 → 점진적 레거시 연동 이관<br>2. **ESB·API Gateway 병행운영**: 사내 대규모 배치·트랜잭션은 ESB 오케스트레이션 유지, 대외·모바일 연동은 API Gateway 분리운영 → 강점 병행활용<br>3. **서비스 메시(Service Mesh) 확장**: API Gateway 남-북(N-S) 제어 넘어 서비스간 동-서(E-W) 트래픽까지 Istio 등으로 확장 → MSA 내부통신 인증·모니터링 세분화 |
