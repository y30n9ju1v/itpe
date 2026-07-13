---
title: "API 보안과 AIoT 보안"
date: 2026-07-13T15:25:55+09:00
tags: ["정보보안", "API보안", "OWASPAPITop10", "AIoT보안", "IoT보안", "서브노트"]
draft: false
---

# API 보안과 AIoT 보안 서브노트

> **두음 머리에 박기 🧠**
> - **BOLA·BFLA·과·SSRF** (API 4대 핵심 위협: 객체수준인가 취약 **BOLA**, 기능수준인가 취약 **BFLA**, **과**도한 데이터 노출/무제한 리소스 소비, 서버측요청위조 **SSRF**)
> - **인·입·전·속·로** (API 보안 대응 5대 영역: **인**증·인가, **입**력 검증, **전**송 보안, **속**도 제한, **로**깅·모니터링)
> - **분·이·자·물** (AIoT 환경 특성 4가지: **분**산성, **이**기종성, **자**원 제약, **물**리적 접근 취약)
> - **TPM·Secure Boot·HSM·PUF** (AIoT 하드웨어 보안 기술: 보안키저장 **TPM**, 부팅무결성 **Secure Boot**, 물리보호 **HSM**, 칩고유인증 **PUF**)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **API 보안(OWASP API Security Top 10)과 AIoT(AI+IoT) 융합 환경 보안** |
| **정의** | 마이크로서비스·클라우드 전환으로 노출이 급증한 **API(REST/GraphQL/gRPC 등)**의 인증·인가·데이터 노출 위협을 체계화한 **API 보안**과, AI 추론 기능이 IoT 디바이스·엣지에 결합되면서 디바이스·통신·AI모델·클라우드 계층에 새로운 위협이 발생하는 **AIoT 보안**을 통합한 최신 보안 주제 |
| **키워드** | OWASP API Security Top 10, BOLA/BFLA, API Gateway, OAuth 2.0+PKCE, Shadow API, 적대적 예제(Adversarial Example), TPM/PUF/TEE, mTLS, OTA 보안 업데이트 |
| **개념도** | **[ API 요청 흐름과 게이트웨이 보안 ]**<br>`클라이언트 → [API Gateway: 인증(OAuth) · 인가(RBAC) · Rate Limiting · WAF · TLS종료 · 로깅 · 응답마스킹] → 백엔드 서비스`<br><br>**[ AIoT 4계층 위협 구조 ]**<br>`디바이스(백도어·기본자격증명) → 통신(평문전송·MITM) → AI모델(적대적예제·모델탈취·데이터포이즈닝) → 클라우드(API취약점·데이터유출)` |
| **구성요소** | 1. **API 유형별 보안 포인트**: REST(HTTPS·JWT·CORS), GraphQL(쿼리 복잡도 제한·인트로스펙션 비활성화), gRPC(mTLS·서비스메시), 웹훅(HMAC 서명 검증)<br>2. **OWASP API Security Top 10 핵심 위협**: BOLA(객체수준 인가 취약, 리소스ID 조작), BFLA(기능수준 인가 취약, 관리자 API 직접 호출), 과도한 데이터 노출·Mass Assignment, 무제한 리소스 소비(DDoS), SSRF, 보안설정 오류, Shadow API(부적절한 인벤토리 관리)<br>3. **API 게이트웨이 보안 기능**: OAuth Token/API Key 검증 → RBAC 인가 → Rate Limiting → WAF 연계(SQLi/XSS 필터링) → TLS 종료 → 감사 로깅 → 응답 민감필드 마스킹<br>4. **AIoT 계층별 위협**: 디바이스(하드웨어 백도어·JTAG 노출·물리 변조), 통신(평문전송·취약한 페어링·MITM), AI모델(적대적 예제·모델 탈취·데이터 포이즈닝), 클라우드(API 취약점·개인정보 유출)<br>5. **AIoT 디바이스 보안 기술**: 하드웨어(TPM·Secure Boot·HSM·PUF·디버그포트 비활성화), 통신(경량TLS1.3·DTLS·CoAP+DTLS·mTLS), AI모델(모델 암호화·Federated Learning·적대적 훈련·TEE/TrustZone), 수명주기(제조→설치→운영 OTA→폐기 키삭제) |
| **비교** | **API 보안 (서비스 연계 계층)**<br>- 위협 대상: 인증/인가 우회, 데이터 과다 노출, Shadow API<br>- 대응 축: API 게이트웨이 중앙 통제, OAuth2+PKCE, OAS 기반 자동 보안 테스트(DAST·Fuzzing)<br><br>**AIoT 보안 (디바이스·엣지 계층)**<br>- 위협 대상: 하드웨어 변조, 적대적 예제, 모델 탈취, 자원 제약형 암호화 미흡<br>- 대응 축: 하드웨어 신뢰루트(TPM·Secure Boot), 경량 암호화(DTLS), 연합학습·TEE로 모델 보호 |
| **차별화** | **금융 오픈뱅킹 API 및 스마트홈 AIoT 보안 내재화 로드맵**<br>1. **API Security by Design**: OAS(OpenAPI Spec) 작성 단계에서 리소스별 접근 권한과 최소 응답 원칙(필요 필드만 반환)을 명시하고, CI/CD 파이프라인에 DAST·API 퍼징을 통합해 배포 전 취약점 자동 차단<br>2. **오픈뱅킹 Stepped-Up Authentication**: OAuth 2.0 Authorization Code+PKCE 의무화, 토큰 수명 15분 이내 제한, 고액 거래 시 FIDO 기반 재인증 요구, 금융보안원 API 보안 가이드라인 준수 심사를 연 1회 이상 수행<br>3. **API 스프롤 방지**: 마이크로서비스 수백 개 환경에서 팀별 독립 개발로 발생하는 정책 불일치를 중앙 API 게이트웨이(Kong 등)로 인증·속도제한·로깅을 일괄 처리하여 해소<br>4. **스마트홈 AIoT 공급망 보안**: 제조 단계에서 랜덤 고유 자격증명·Secure Boot·OTA 자동 업데이트를 의무화하고 ETSI EN 303 645 준수로 출시 후 5년 이상 보안 패치를 보장하며, 홈 게이트웨이에 IoT 전용 VLAN을 분리해 감염 시 측면 이동 차단 |
