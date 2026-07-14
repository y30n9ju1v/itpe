---
title: "OAuth 2.0 및 SAML 싱글사인온"
date: 2026-07-11T11:19:35+09:00
tags: ["보안", "OAuth", "OIDC", "SAML", "SSO", "JWT", "PKCE", "서브노트"]
draft: false
---

# OAuth 2.0 및 SAML 싱글사인온 서브노트

> **두음 머리에 박기 🧠**
> - **자·클·인·리** (OAuth 2.0 4대 역할자: 자원소유자 **자**Resource Owner, 앱 서비스 **클**Client, 토큰발급 **인**Authorization Server, 실제데이터 **리**Resource Server)
> - **인·임·암·클** (OAuth 2.0 4대 기본 승인 타입: 인가코드 **인**Authorization Code, 암묵적 **임**Implicit, 비번 **암**Password, 앱 직접 **클**Client Credentials)
> - **인가·인증·주장** (인증 프로토콜 3각 기능 구분: OAuth 2.0은 **인가** Authorization, OIDC는 **인증** Authentication, SAML은 **주장** Assertion 기반 인증/인가 통합 — 이니셜형 두음이 아닌 역할 구분 키워드)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **OAuth 2.0 인가 프레임워크, OIDC (OpenID Connect) 및 SAML 2.0 SSO 표준** |
| **정의** | 패스워드 노출없이 자원접근권한 위임하는 **OAuth 2.0** + 확장 신원인증규격 **OIDC** + XML기반 엔터프라이즈 SSO 표준 **SAML 2.0** |
| **키워드** | Authorization Code Grant, ID Token (JWT), SAML Assertion, PKCE, SSO (Single Sign-On) |
| **개념도** | **[ Authorization Code Grant (인가 코드 승인) 흐름도 ]**<br>`[ User (Resource Owner) ] ── 1. 로그인/동의 ──➔ [ Authorization Server ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ 2. 리다이렉트&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼ 3. 인가코드 (Auth Code) 발급`<br>`[ Client (App) ] ◄─────────────────────────────────────────────┘`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`├── 4. 인가코드 + Client Secret 전달 ➔ [ Authorization Server ] ➔ 5. Access Token 발급`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└── 6. Access Token으로 데이터 요청 ➔ [ Resource Server ] ➔ 7. 자원 반환` |
| **구성요소** | 1. **OAuth 2.0 승인유형(인·임·암·클)**: 인가코드(고보안), 임시(스크립트기반), 암묵(패스워드로그인), 클라이언트(M2M 백엔드전용)<br>2. **OIDC**: OAuth 2.0 위에 ID Token(JWT) 계층 추가 → 사용자 신원 직접 보증<br>3. **SAML 2.0**: IDP↔SP 간 XML 서명(Assertion) 교환 → 비즈니스 간 인증연동<br>4. **Access Token vs ID Token**: API 호출용 마스터키(Access Token, 투명/불투명) vs 가입자 프로필정보 수록(ID Token, JWT) |
| **비교** | **OIDC**<br>- 기반: OAuth 2.0 기반 RESTful 아키텍처<br>- 포맷: JSON/JWT (가볍고 빠름)<br>- 최적도메인: 모바일앱, SPA, MSA 클라우드환경<br><br>**SAML 2.0**<br>- 기반: SOAP/XML 기반 데이터통신<br>- 포맷: XML Assertion (디지털서명 포함, 무거움)<br>- 최적도메인: 전통 엔터프라이즈 내부망, B2B SaaS 대기업 연동 |
| **차별화** | **공개 클라이언트(Public Client) 취약점 보완 PKCE 설계전략**<br>1. **PKCE 도입**: 모바일 네이티브 앱은 Client Secret 내장 불가 → 인가코드 가로채기 취약 — 무작위 검증자(Code Verifier)→해시 도전장(Code Challenge) 전달, 토큰요청 시 원본과 대조검증<br>2. **Refresh Token Rotation(RTR)**: Access Token 탈취피해 최소화 → 만료기간 극단 단축 + 신규 Access Token 발급 시 Refresh Token도 매번 재발급·기존 무효화<br>3. **단일 로그아웃(SLO) 관리**: 여러 서비스 세션 동기 폐기 위해 SAML SLO 메시지 브로드캐스팅 + OAuth Backchannel Logout 표준 설계 |
