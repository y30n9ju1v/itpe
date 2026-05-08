---
title: "개방형 API (Open API)"
date: 2026-05-09T07:09:12+09:00
tags: ["peim", "컴퓨터시스템및정보통신", "네트워크프로토콜", "OpenAPI", "REST", "SOAP", "API보안"]
draft: false
exam: "134회"
---

## 개요

개방형 API(Open API)는 플랫폼·서비스의 기능을 외부 개발자·파트너가 프로그래밍 방식으로 활용할 수 있도록 공개한 인터페이스다. 공공데이터포털, 카카오맵, 네이버 로그인 등 디지털 생태계의 핵심 연결 수단이다.

## 핵심 내용

### 가. 정의 및 특징

**정의**: 특정 소프트웨어 기능·데이터를 외부에서 접근 가능하도록 표준화된 방식으로 공개한 인터페이스

**특징**

| 특징 | 설명 |
|------|------|
| **개방성** | 인증 후 누구나 사용 가능 (공공 API: 무조건 개방) |
| **표준화** | HTTP/HTTPS 기반 표준 프로토콜 |
| **재사용성** | 동일 API를 여러 앱·서비스에서 재사용 |
| **플랫폼 독립** | 언어·OS 무관, 인터넷 접속이면 사용 가능 |
| **비즈니스 가치** | API 생태계로 수익 창출 (API Economy) |

### 나. SOAP vs REST 구성요소

**SOAP (Simple Object Access Protocol)**

| 항목 | 내용 |
|------|------|
| **메시지 포맷** | XML (엄격한 스키마) |
| **전송 프로토콜** | HTTP, SMTP, TCP 등 다양 |
| **표준** | WSDL (서비스 명세), UDDI (서비스 검색) |
| **보안** | WS-Security (메시지 레벨 암호화) |
| **트랜잭션** | ACID 트랜잭션 지원 (WS-AtomicTransaction) |
| **장점** | 엄격한 계약, 엔터프라이즈 보안 |
| **단점** | XML 오버헤드, 복잡성 높음 |
| **적합** | 금융 결제, 레거시 B2B 연동 |

**REST (Representational State Transfer)**

| 항목 | 내용 |
|------|------|
| **메시지 포맷** | JSON (주로), XML, 텍스트 |
| **전송 프로토콜** | HTTP만 사용 |
| **설계 원칙** | 무상태(Stateless), 자원 중심, 균일한 인터페이스 |
| **HTTP 메서드** | GET(조회), POST(생성), PUT(수정), DELETE(삭제) |
| **명세** | OpenAPI Specification (Swagger) |
| **장점** | 경량, 빠름, 캐시 활용, 모바일·웹 적합 |
| **단점** | 표준화 느슨, 복잡한 트랜잭션 어려움 |

**REST 6대 아키텍처 제약**
1. 클라이언트-서버 분리
2. 무상태(Stateless)
3. 캐시 가능
4. 계층화 시스템
5. 균일한 인터페이스
6. 코드 온 디맨드 (선택)

### 다. 취약점 및 대응 방안

**OWASP API Security Top 10 주요 취약점**

| 취약점 | 설명 | 대응 |
|--------|------|------|
| **Broken Object Level Authorization** | 다른 사용자의 객체 접근 (IDOR) | 객체별 권한 검증 |
| **Broken Authentication** | 취약한 인증 토큰 | JWT 만료·서명 검증, OAuth 2.0 |
| **Excessive Data Exposure** | 필요 이상의 데이터 반환 | 최소 데이터 원칙, 응답 필터링 |
| **Rate Limiting 미적용** | API 남용·DDoS | Rate Limiting, API Gateway |
| **Mass Assignment** | 요청 파라미터 자동 바인딩 오용 | 화이트리스트 방식 바인딩 |
| **Injection** | SQL·Command 인젝션 | 파라미터 바인딩, 입력 검증 |

**보안 대응 아키텍처**

```
클라이언트 → API Gateway (인증/인가·Rate Limit·WAF) → 백엔드 서비스
```

- **API Gateway**: Kong, AWS API Gateway — 중앙 보안 통제 지점
- **OAuth 2.0 + JWT**: 토큰 기반 인증
- **TLS 1.3**: 전송 암호화
- **API 문서화**: OpenAPI Spec으로 계약 명확화

## 출제 포인트

- SOAP vs REST 차이 (XML vs JSON, 프로토콜, 상태성)
- REST의 6대 아키텍처 제약
- OWASP API Security Top 10 중 상위 3가지 상세 설명
- API Gateway의 역할 (인증·Rate Limiting·WAF)

## 연관 개념

- [TLS 1.2 vs 1.3]({{< relref "/docs/05_Networks/01_Network_Protocol/tls-1-2-vs-1-3" >}}) — API 전송 보안
- [MCP (Model Context Protocol)]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/mcp-model-context-protocol" >}}) — AI 도구 연결을 위한 새로운 API 표준
- [SBOM]({{< relref "/docs/02_SoftwareEngineering/05_SW_Quality/sbom" >}}) — API 라이브러리 취약점 관리

## 참고 기출

- 134회 4교시 4번 (PEIM)
