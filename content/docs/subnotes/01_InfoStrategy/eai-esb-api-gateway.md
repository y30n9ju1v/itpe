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
| **정의** | 기업 시스템 통합 기술은 이기종 애플리케이션 간 데이터·프로세스를 연동하는 중앙집중형 허브(EAI)에서, SOA 구현을 위한 분산형 통합 미들웨어(ESB)를 거쳐, MSA·클라우드 네이티브 환경의 경량 단일 진입점(API Gateway)으로 진화해 온 시스템 통합 솔루션 계보이다 |
| **키워드** | 어댑터/메시지큐, SOAP/WSDL/BPEL, REST/gRPC, OAuth2/JWT, SPOF, MSA |
| **개념도** | `[ 이기종 시스템 개별 연동(Spaghetti) ] ➔ [ EAI 허브 ] ➔ [ ESB 분산 버스 ] ➔ [ API Gateway 경량 게이트웨이 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`중앙집중형 SPOF`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`SOA 표준 프로토콜`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`MSA 단일 진입점(인증/라우팅)` |
| **구성요소** | 1. **EAI**: 어댑터(Adapter)·메시지큐(MQ)·데이터 변환(Transformation) 엔진으로 이기종 시스템을 중앙집중 관리, 허브 장애 시 전체 통합 마비(SPOF), 벤더 종속성(Lock-in) 한계<br>2. **ESB**: 메시지 라우팅·프로토콜 변환·BPEL 기반 오케스트레이션을 담당하는 분산형 통합 미들웨어, SOAP/WSDL 표준으로 상호운용성 확보하나 여전히 중앙집중적 관리 부담과 무거운 미들웨어 성능 오버헤드 존재<br>3. **API Gateway**: MSA에서 다수 서비스의 단일 진입점(Single Entry Point) 역할, REST/gRPC 라우팅·OAuth2/JWT 인증·Rate Limiting·Circuit Breaker로 경량화되었으나 게이트웨이 자체 장애 시 전체 서비스 영향 |
| **비교** | **EAI**<br>- 등장배경: 이기종 시스템 통합 필요<br>- 아키텍처: 중앙집중형 허브<br>- 통신방식: 동기/비동기 메시징<br>- 적합환경: 레거시 통합(ERP-CRM)<br>- 확장성: 낮음<br><br>**ESB**<br>- 등장배경: SOA 확산, 서비스 재사용<br>- 아키텍처: 분산형 버스<br>- 통신방식: SOAP/WS-* 표준<br>- 적합환경: SOA 기반 대규모 엔터프라이즈<br>- 확장성: 중간<br><br>**API Gateway**<br>- 등장배경: MSA·클라우드 네이티브 확산<br>- 아키텍처: 경량 게이트웨이<br>- 통신방식: REST/gRPC, JSON<br>- 적합환경: MSA, 클라우드 네이티브<br>- 확장성: 높음 |
| **차별화** | **레거시-MSA 공존 환경의 통합 아키텍처 전략**<br>1. **단계적 전환(Strangler Fig) 적용**: 기존 EAI/ESB로 통합된 레거시 시스템을 일시에 API Gateway로 전환하지 않고, 신규 서비스부터 API Gateway 경유로 개발하며 점진적으로 레거시 연동을 이관.<br>2. **ESB와 API Gateway의 병행 운영**: 사내 대규모 배치·트랜잭션은 ESB의 오케스트레이션 기능을 유지하고, 대외 서비스·모바일 연동은 API Gateway를 통해 분리 운영하여 각 기술의 강점을 병행 활용.<br>3. **서비스 메시(Service Mesh)로의 확장**: API Gateway의 남-북(North-South) 트래픽 제어를 넘어, 서비스 간 동-서(East-West) 트래픽까지 Istio 등 서비스 메시로 확장해 MSA 내부 통신의 인증·모니터링을 세분화. |
