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
| **정의** | 서비스기능을 외부개발자에 공개한 인터페이스 **Open API**, 구현축인 XML기반 엄격프로토콜 **SOAP** vs HTTP메서드기반 경량 아키텍처스타일 **REST** |
| **키워드** | WSDL, UDDI, WS-Security, JSON/XML, Stateless, OpenAPI Specification(Swagger), API Gateway, OWASP API Top 10 |
| **개념도** | **[ Open API 보안 아키텍처 ]**<br>`[ 외부 클라이언트/파트너 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ API Gateway ] ── 인증/인가(OAuth2.0+JWT) · Rate Limiting · WAF`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 백엔드 서비스 (SOAP: WSDL 계약 / REST: 자원 URI) ]` |
| **구성요소** | 1. **SOAP**: XML메시지(Envelope-Header-Body-Fault), WSDL명세, WS-Security 내장, ACID 트랜잭션지원 → 금융·엔터프라이즈B2B 적합<br>2. **REST**: JSON위주, HTTP만 사용, 무상태(Stateless)·자원중심, GET/POST/PUT/DELETE, OpenAPI Spec(Swagger) 명세<br>3. **REST 6대 제약**: 클라이언트-서버분리, 무상태, 캐시가능, 계층화, 균일한인터페이스, 코드온디맨드(선택)<br>4. **API Gateway**: 인증/인가·Rate Limiting·WAF 수행 → 중앙 보안통제지점 (Kong, AWS API Gateway 등)<br>5. **OWASP API Top 10**: BOLA(객체권한없음), 취약인증, 과다데이터노출, Rate Limiting 미적용, Mass Assignment, Injection |
| **비교** | **SOAP (Simple Object Access Protocol)**<br>- 구분: 프로토콜 / 메시지포맷: XML만<br>- 전송: HTTP·SMTP·TCP 등 다양 / 상태: Stateful 가능<br>- 보안: WS-Security 내장 / 속도: XML파싱 오버헤드로 느림<br>- 적합: 금융결제, 레거시 B2B연동<br><br>**REST (Representational State Transfer)**<br>- 구분: 아키텍처스타일 / 메시지포맷: JSON 주, XML·HTML 가능<br>- 전송: HTTP/HTTPS만 / 상태: Stateless<br>- 보안: HTTPS+OAuth 조합 / 속도: 경량포맷 → 빠름<br>- 적합: 웹API, 모바일앱, 공공데이터포털 |
| **차별화** | **API Economy 시대 Open API 보안·거버넌스 전략**<br>1. **API Gateway 중심 제로트러스트 통제**: 외부요청 게이트웨이 단일화 → OAuth2.0+JWT 검증, Rate Limiting, WAF 일괄적용, 백엔드 직접노출 차단<br>2. **OWASP API Top 10 대응설계**: BOLA→객체별 권한검증, Mass Assignment→화이트리스트 바인딩, Injection→파라미터바인딩+입력검증 → 공격표면 최소화<br>3. **전송계층 보안강제**: TLS 1.3 기본적용 + OpenAPI Spec 계약문서화 → 인터페이스 불일치 취약점 사전차단 |
