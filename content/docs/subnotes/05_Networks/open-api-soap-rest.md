---
title: "개방형 API 및 SOAP/REST"
date: 2026-07-11T11:38:00+09:00
tags: ["네트워크", "OpenAPI", "REST", "SOAP", "API보안", "서브노트"]
draft: false
---

# 개방형 API 및 SOAP/REST 서브노트

> **두음 머리에 박기 🧠**
> - **엔·웨·바·엑·매·인** (OWASP API Security Top 10 핵심 취약점: 객체권한 없음 BOLA(**엔**티티 무결성), 취약인증(**웨**이크 오스), **바**운더리 Rate Limiting 미적용, **엑**세시브 데이터 노출, **매**스 어사인먼트, **인**젝션)
> - **클·무·캐·계·균·코** (REST 6대 아키텍처 제약: **클**라이언트-서버 분리, **무**상태, **캐**시 가능, **계**층화 시스템, **균**일한 인터페이스, **코**드 온 디맨드)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **개방형 API(Open API) 및 SOAP/REST 비교** |
| **정의** | 플랫폼·서비스 기능을 외부 개발자가 프로그래밍 방식으로 활용하도록 공개한 인터페이스인 **Open API**와, 이를 구현하는 두 축인 XML 기반 엄격한 프로토콜 **SOAP**, HTTP 메서드 기반 경량 아키텍처 스타일 **REST** |
| **키워드** | WSDL, UDDI, WS-Security, JSON/XML, Stateless, OpenAPI Specification(Swagger), API Gateway, OWASP API Top 10 |
| **개념도** | **[ Open API 보안 아키텍처 ]**<br>`[ 외부 클라이언트/파트너 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ API Gateway ] ── 인증/인가(OAuth2.0+JWT) · Rate Limiting · WAF`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 백엔드 서비스 (SOAP: WSDL 계약 / REST: 자원 URI) ]` |
| **구성요소** | 1. **SOAP**: XML 메시지(Envelope-Header-Body-Fault), WSDL 명세, WS-Security 내장, ACID 트랜잭션 지원 → 금융·엔터프라이즈 B2B에 적합<br>2. **REST**: JSON 위주, HTTP만 사용, 무상태(Stateless)·자원 중심, GET/POST/PUT/DELETE 메서드, OpenAPI Spec(Swagger)으로 명세<br>3. **REST 6대 제약**: 클라이언트-서버 분리, 무상태, 캐시 가능, 계층화, 균일한 인터페이스, 코드 온 디맨드(선택)<br>4. **API Gateway**: 인증/인가·Rate Limiting·WAF를 수행하는 중앙 보안 통제 지점(Kong, AWS API Gateway 등)<br>5. **OWASP API Top 10 주요 취약점**: BOLA(객체 권한 없음), 취약 인증, 과다 데이터 노출, Rate Limiting 미적용, Mass Assignment, Injection |
| **비교** | **SOAP (Simple Object Access Protocol)**<br>- 구분: 프로토콜 / 메시지 포맷: XML만<br>- 전송: HTTP, SMTP, TCP 등 다양 / 상태: Stateful 가능<br>- 보안: WS-Security 표준 내장 / 처리속도: XML 파싱 오버헤드로 느림<br>- 적합: 금융 결제, 레거시 B2B 연동<br><br>**REST (Representational State Transfer)**<br>- 구분: 아키텍처 스타일 / 메시지 포맷: JSON 주로, XML·HTML도 가능<br>- 전송: HTTP/HTTPS만 / 상태: Stateless<br>- 보안: HTTPS + OAuth 조합 / 처리속도: 경량 포맷으로 빠름<br>- 적합: 웹 API, 모바일 앱, 공공데이터포털 |
| **차별화** | **API Economy 시대의 Open API 보안·거버넌스 전략**<br>1. **API Gateway 중심 제로트러스트 통제**: 모든 외부 요청을 API Gateway로 단일화하여 OAuth 2.0+JWT 토큰 검증, Rate Limiting, WAF 필터링을 일괄 적용해 백엔드 서비스를 직접 노출하지 않음.<br>2. **OWASP API Top 10 대응 설계**: BOLA는 객체별 권한 검증, Mass Assignment는 화이트리스트 바인딩, Injection은 파라미터 바인딩과 입력 검증으로 대응해 API 계층의 공격 표면을 최소화.<br>3. **전송 계층 보안 강제**: TLS 1.3 전송 암호화를 기본 적용하고, OpenAPI Spec으로 계약을 명확히 문서화하여 API 소비자와의 인터페이스 불일치로 인한 취약점을 사전 차단. |
