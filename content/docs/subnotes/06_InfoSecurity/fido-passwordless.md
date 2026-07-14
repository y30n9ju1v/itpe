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
| **정의** | 생체정보를 기기 보안영역(TEE)에 격리보관 + 서버와 비대칭키 전자서명 상호검증 → 패스워드 가로채기 위협 원천해결하는 **FIDO 2.0 및 패스워드리스 표준 기술** |
| **키워드** | WebAuthn, CTAP1/CTAP2, UAF vs U2F, TEE / Secure Element, Passkey (패스키), 비대칭 키 검증 |
| **개념도** | **[ FIDO 2.0 WebAuthn 및 CTAP 인증 처리 메커니즘 ]**<br>`[ 사용자 ] ➔ 지문 인식 ➔ [ 모바일/PC 단말 (Client) ] ── (웹 브라우저 WebAuthn API) ──➔ [ FIDO 2.0 서버 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (블루투스 / NFC / USB 기반 CTAP2 프로토콜 연동)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 외부 하드웨어 보안 키 (Authenticator) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;**[인증 동작]**: 단말 내 개인키로 Challenge 서명 발송 ➔ FIDO 서버가 기 가입된 공개키로 무결성 검증 통과 |
| **구성요소** | 1. WebAuthn(W3C 표준): 웹앱(JS)이 브라우저 통해 플랫폼 인증장치 접근 → 표준 API<br>2. CTAP(Client to Authenticator): 외부 인증장치-브라우저 단말 간 자격증명 전송 규격<br>3. UAF(Universal Authentication Framework): 지문·안면·서명 등 생체정보로 비밀번호 없이 직접 인증<br>4. U2F(Universal 2nd Factor): ID/PW 로그인 후 보안USB·스마트카드로 추가 인증 보강 |
| **비교** | **FIDO 1.0 표준**<br>- 지원환경: 모바일 전용 독립앱(App)에 국한<br>- 브라우저 지원: 불가 (액티브X·플러그인 필요)<br>- 스펙구분: UAF(비밀번호대체)·U2F(2단계인증) 분리<br><br>**FIDO 2.0 표준(WebAuthn/CTAP)**<br>- 지원환경: 모바일앱+PC 웹브라우저 크로스플랫폼<br>- 브라우저 지원: 표준 빌트인(Chrome·Safari·Edge 기본탑재)<br>- 스펙구분: WebAuthn API + CTAP 기기연동 프로토콜 통합 |
| **차별화** | **차세대 패스키(Passkey) 아키텍처 및 하드웨어 TEE 보안 연동 전략**<br>1. 패스키(동기화된 FIDO 자격증명) 도입: 기존 기기귀속형(Device-bound) 자격증명은 단말교체·분실 시 재인증 번거로움 → FIDO 키쌍을 E2E암호화 클라우드 키체인(iCloud·Google)으로 다중단말 자동동기화하는 Passkey 도입<br>2. TEE/SE 연동을 통한 물리탈취 차단: 단말 루팅·맬웨어 감염 시에도 개인키·생체정보 덤프 방지 → 메인커널과 독립실행되는 TEE 내부에서 서명연산 강제처리<br>3. 피싱방어(Phishing-resistant): 도메인명을 서명검증 팩터로 포함 → 피싱 위조사이트에서 지문인식해도 도메인 불일치로 서명실패, 계정도용 기술적 차단<br>4. 무자각 지속인증으로 로그인 이후 세션 보호: FIDO/패스키는 최초 1회 강인증 담당, 세션하이재킹·내부자위협 등 이후 위협은 타이핑·마우스·보행·음성·위치·UEBA 등 행동생체 지속분석 → 신뢰점수(Trust Score) 실시간 산정. 학습기간(2~4주) 후 고위험 시 추가인증·세션종료, 중위험 시 모니터링강화, 정상 시 투명허용의 3단계 대응, 행동데이터는 Edge AI 로컬처리로 프라이버시 보호. 신뢰점수를 Zero Trust PEP에 실시간 전달 → 최초 강인증 + 세션 내내 검증 결합, "Never Trust, Always Verify" 완성 |
