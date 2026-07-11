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
| **정의** | 패스워드 노출 없이 자원 접근 권한을 위임하는 **OAuth 2.0**과, 이를 확장한 신원 인증 규격 **OIDC**, 그리고 XML 기반 엔터프라이즈 싱글사인온(SSO) 표준인 **SAML 2.0 기술** |
| **키워드** | Authorization Code Grant, ID Token (JWT), SAML Assertion, PKCE, SSO (Single Sign-On) |
| **개념도** | **[ Authorization Code Grant (인가 코드 승인) 흐름도 ]**<br>`[ User (Resource Owner) ] ── 1. 로그인/동의 ──➔ [ Authorization Server ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ 2. 리다이렉트&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼ 3. 인가코드 (Auth Code) 발급`<br>`[ Client (App) ] ◄─────────────────────────────────────────────┘`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`├── 4. 인가코드 + Client Secret 전달 ➔ [ Authorization Server ] ➔ 5. Access Token 발급`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└── 6. Access Token으로 데이터 요청 ➔ [ Resource Server ] ➔ 7. 자원 반환` |
| **구성요소** | 1. **OAuth 2.0 승인 유형 (인·임·암·클)**: 보안이 강한 인가코드, 스크립트 기반 임시, 기존 패스워드 로그인, M2M 백엔드 전용<br>2. **OIDC (OpenID Connect)**: OAuth 2.0 위에 ID Token(JWT 포맷) 계층을 추가해 사용자 신원(Identity) 정보를 직접 보증<br>3. **SAML 2.0**: 비즈니스 간 인증 연동을 위해 IDP(인증정보제공처)와 SP(서비스제공처) 간에 XML 포맷의 서명(Assertion) 교환<br>4. **Access Token vs ID Token**: API를 호출하는 마스터키 역할(Access Token - 투명/불투명) vs 가입자 프로필 정보 수록(ID Token - JWT) |
| **비교** | **OIDC (OpenID Connect)**<br>- **기반 프로토콜**: OAuth 2.0 기반 RESTful 아키텍처<br>- **데이터 포맷**: JSON / JWT (가볍고 빠름)<br>- **최적 도메인**: 모바일 앱, SPA 싱글 페이지 웹, MSA 클라우드 환경<br><br>**SAML 2.0 (Security Assertion Markup Language)**<br>- **기반 프로토콜**: SOAP / XML 기반 데이터 통신<br>- **데이터 포맷**: XML Assertion (디지털 서명 포함, 무거움)<br>- **최적 도메인**: 전통 엔터프라이즈 내부망, B2B SaaS 대기업 연동 |
| **차별화** | **모바일 등 공개 클라이언트(Public Client)의 취약점 보완을 위한 PKCE 규격 설계전략**<br>1. **PKCE (Proof Key for Code Exchange) 도입**: 모바일 네이티브 앱은 Client Secret을 코드에 내장할 수 없어 인가 코드 가로채기 공격(Authorization Code Interception)에 취약함. 이를 극복하기 위해 클라이언트가 무작위 검증자(Code Verifier)를 만들고 이를 해시한 도전장(Code Challenge)을 전달하여, 토큰 요청 시 원본 검증자와 대조 검증하는 **PKCE** 적용 필수.<br>2. **토큰 탈취 대비를 위한 Refresh Token Rotation (RTR) 구현**: 브라우저 로컬 저장소 등 취약 영역에 저장되는 Access Token 탈취 피해를 최소화하기 위해 만료기간을 수분 내외로 극단 단축하고, 새로운 Access Token 발급 시 Refresh Token도 무효화하고 매번 재발급하는 **RTR** 체계 도입.<br>3. **SSO 환경의 단일 로그아웃(Single Log-Out, SLO) 관리**: 세션이 여러 서비스에 전파된 상태에서 한 곳만 로그아웃할 때 타 서비스 세션까지 동기 폐기할 수 있도록 SAML SLO 메시지 브로드캐스팅 및 OAuth Backchannel Logout 표준 설계. |
