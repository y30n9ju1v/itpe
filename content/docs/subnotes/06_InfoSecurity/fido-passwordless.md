---
title: "생체인증 표준 FIDO 2.0 및 패스워드리스"
date: 2026-07-11T11:26:36+09:00
tags: ["보안", "FIDO", "FIDO2.0", "WebAuthn", "CTAP", "Passkey", "패스워드리스", "서브노트"]
draft: false
---

# 생체인증 표준 FIDO 2.0 및 패스워드리스 서브노트

> **두음 머리에 박기 🧠**
> - **웹·씨** (FIDO 2.0을 구성하는 2대 핵심 표준 아키텍처: 웹 브라우저용 표준 API **Web**Authn, 외부 인증 단말 연동 규격 **C**TAP Client-to-Authenticator Protocol)
> - **유·유·웹** (FIDO 스펙의 변천: 1.0 패스워드리스 대체 **U**AF, 1.0 2단계 하드웨어 키 **U**2F, 2.0 통합 웹인증 표준 **W**ebAuthn)
> - **티·에스·이** (단말 내 생체 정보가 유출되지 않도록 가두는 하드웨어 보안 영역: 신뢰 실행 환경 **TEE** Trusted Execution Environment, 보안 칩셋 **SE** Secure Element)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **FIDO 2.0 생체인증 표준 (WebAuthn, CTAP) 및 패스워드리스 (Passwordless) 인증** |
| **정의** | 생체 정보는 사용자 기기 보안 영역(TEE)에 격리 보관하고, 서버와는 비대칭 키 전자서명으로 상호 검증하여 패스워드 가로채기 위협을 원천 해결하는 **FIDO 2.0 및 패스워드리스 표준 기술** |
| **키워드** | WebAuthn, CTAP1/CTAP2, UAF vs U2F, TEE / Secure Element, Passkey (패스키), 비대칭 키 검증 |
| **개념도** | **[ FIDO 2.0 WebAuthn 및 CTAP 인증 처리 메커니즘 ]**<br>`[ 사용자 ] ➔ 지문 인식 ➔ [ 모바일/PC 단말 (Client) ] ── (웹 브라우저 WebAuthn API) ──➔ [ FIDO 2.0 서버 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (블루투스 / NFC / USB 기반 CTAP2 프로토콜 연동)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 외부 하드웨어 보안 키 (Authenticator) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;**[인증 동작]**: 단말 내 개인키로 Challenge 서명 발송 ➔ FIDO 서버가 기 가입된 공개키로 무결성 검증 통과 |
| **구성요소** | 1. **WebAuthn (W3C 표준)**: 웹 애플리케이션(JS)이 브라우저를 통해 플랫폼 인증 장치에 접근할 수 있게 돕는 표준 API<br>2. **CTAP (Client to Authenticator)**: 모바일/보안키 등 외부 인증 장치와 브라우저 실행 단말 간 자격 증명 전송 규격<br>3. **UAF (Universal Authentication Framework)**: 비밀번호 없이 지문, 안면, 서명 등 생체 정보로 직접 사용자를 대체 인증<br>4. **U2F (Universal 2nd Factor)**: ID/PW 로그인 완료 후, 보안 USB 동글이나 스마트카드 등의 추가 팩터로 인증 보강 |
| **비교** | **FIDO 1.0 표준**<br>- **지원 환경**: 모바일 전용 독립 애플리케이션(App) 환경에 국한됨<br>- **브라우저 지원**: 불가 (별도 액티브X 또는 플러그인 필요)<br>- **스펙 구분**: UAF(비밀번호 대체) 및 U2F(2단계 인증)로 분리됨<br><br>**FIDO 2.0 표준 (WebAuthn / CTAP)**<br>- **지원 환경**: 모바일 앱, 데스크톱 PC 웹 브라우저를 포괄하는 크로스 플랫폼<br>- **브라우저 지원**: 표준 빌트인 (Chrome, Safari, Edge 기본 탑재)<br>- **스펙 구분**: WebAuthn API와 CTAP 기기 연동 프로토콜로 통합 |
| **차별화** | **차세대 패스키(Passkey) 아키텍처 및 하드웨어 TEE 보안 연동 전략**<br>1. **패스키 (Passkey - 동기화된 FIDO 자격증명) 도입**: 기존 FIDO는 기기 귀속형(Device-bound) 자격증명을 사용하여 단말기 교체/분실 시 재인증 절차가 매우 번거로움. 이를 해결하기 위해 사용자의 FIDO 비대칭 키 쌍을 엔드투엔드 암호화로 보호되는 클라우드 키체인(iCloud, Google)을 통해 다중 단말에 자동 동기화하는 **Passkey** 도입.<br>2. **하드웨어 격리 영역 (TEE / SE) 연동을 통한 물리 탈취 차단**: 단말이 루팅되거나 맬웨어에 감염되더라도 개인키와 생체 지문 정보가 덤프되지 않도록, 메인 커널과 하드웨어적으로 독립 실행되는 **TEE (신뢰 실행 환경)** 내부에서 서명 연산 처리 강제.<br>3. **패스워드리스 도입에 따른 피싱 공격(Phishing-resistant) 원천 방어**: FIDO는 도메인 이름을 비대칭 키 서명 검증의 팩터로 포함하므로, 사용자가 피싱 위조 사이트(예: naver-fake.com)에 속아 지문을 인식하더라도 서버 측 도메인 불일치로 서명이 실패하여 계정 도용이 기술적으로 차단됨. |
