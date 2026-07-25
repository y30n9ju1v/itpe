---
bookCollapseSection: false
title: "정보보안 용어집"
---

| 용어 | 정의 | 출처 |
| :--- | :--- | :--- |
| 4C 모델 (Code-Container-Cluster-Cloud) | 클라우드 네이티브 계층적 보안 방어모델 | [공급망 보안(SBOM)과 클라우드 네이티브 보안(CNAPP) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/supply-chain-cloud-native-security" >}}) |
| ABAC (Attribute-Based Access Control) | 위치·시간·디바이스 속성 조합 동적 접근통제 | [접근통제 정책(MAC/DAC/RBAC/ABAC)과 보안운영체제(Secure OS) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/access-control-secure-os" >}}) |
| AH (Authentication Header) | IPSec 인증·무결성만 제공, 암호화 없음 | [전송계층 보안 프로토콜: SSL/TLS·IPSec·VPN 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/transport-layer-security-ssl-ipsec-vpn" >}}) |
| APT (Advanced Persistent Threat) | 고도화·장기지속·표적형 사이버 위협 | [TTPs(MITRE ATT&CK)와 공격표면·측면이동 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ttps-attack-surface-lateral-movement" >}}) |
| ARP 스푸핑 | 가짜 ARP Reply로 로컬망 MITM 유도 | [스푸핑(Spoofing) 공격: ARP/IP/DNS 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/spoofing-attack" >}}) |
| ASN.1 | 플랫폼 독립적 데이터구조 기술언어 | [ASN.1 Tag 인코딩과 BER/DER/CER 비교 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/asn1-ber-der-encoding" >}}) |
| Bell-LaPadula 모델 | No Read Up·No Write Down 기밀성 모델 | [접근통제 정책(MAC/DAC/RBAC/ABAC)과 보안운영체제(Secure OS) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/access-control-secure-os" >}}) |
| BER (Basic Encoding Rules) | ASN.1 기본 인코딩규칙, 유일성 미보장 | [ASN.1 Tag 인코딩과 BER/DER/CER 비교 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/asn1-ber-der-encoding" >}}) |
| BFLA (Broken Function Level Authorization) | API 기능수준 인가취약, 관리자API 직접호출 | [API 보안과 AIoT 보안 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/api-aiot-security" >}}) |
| BOLA (Broken Object Level Authorization) | API 객체수준 인가취약, 리소스ID 조작 | [API 보안과 AIoT 보안 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/api-aiot-security" >}}) |
| BPFdoor | 커널 BPF소켓 은닉, 포트없는 백도어 | [랜섬웨어(RaaS), BPFdoor 백도어, 제로데이 취약점 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ransomware-bpfdoor-zeroday" >}}) |
| CC (Common Criteria) | IT 제품 보안기능 평가 국제표준(ISO 15408) | [CC(Common Criteria) 공통평가기준 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/common-criteria-cc" >}}) |
| CCA (Chosen-Ciphertext Attack) | 복호화 오라클 접근 가능한 최강 공격 | [암호문 공격 4유형 및 해시함수·Rainbow Table 방어 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ciphertext-attack-hash-function" >}}) |
| CER (Canonical Encoding Rules) | DER처럼 유일+부정형 길이 허용, 스트리밍 최적화 | [ASN.1 Tag 인코딩과 BER/DER/CER 비교 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/asn1-ber-der-encoding" >}}) |
| Chain of Custody (연계보관사슬) | 압수~제출 전 과정 이력 완전 추적 원칙 | [디지털 포렌식 5대 원칙 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/digital-forensics-principles" >}}) |
| CNAPP | CSPM+CWPP 결합 클라우드 네이티브 보안 통합관제 | [공급망 보안(SBOM)과 클라우드 네이티브 보안(CNAPP) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/supply-chain-cloud-native-security" >}}) |
| COA (Ciphertext-Only Attack) | 암호문만 보유한 최약 암호분석 공격 | [암호문 공격 4유형 및 해시함수·Rainbow Table 방어 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ciphertext-attack-hash-function" >}}) |
| CPA (Chosen-Plaintext Attack) | 암호화 오라클 접근 가능한 공격 | [암호문 공격 4유형 및 해시함수·Rainbow Table 방어 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ciphertext-attack-hash-function" >}}) |
| CTAP (Client to Authenticator Protocol) | 외부 인증장치-브라우저 자격증명 전송 규격 | [생체인증 표준 FIDO 2.0 및 패스워드리스 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/fido-passwordless" >}}) |
| CTEM (Continuous Threat Exposure Management) | 범위설정~동원 5단계 지속적 위협노출관리 | [SIEM/SOAR 보안운영과 CTEM 지속적 위협노출관리 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/siem-soar-ctem" >}}) |
| Cyber Kill Chain | 정찰~목표달성 7단계 APT 공격 연쇄모델 | [TTPs(MITRE ATT&CK)와 공격표면·측면이동 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ttps-attack-surface-lateral-movement" >}}) |
| DAC (Discretionary Access Control) | 자원소유자 임의 권한부여 접근통제 | [접근통제 정책(MAC/DAC/RBAC/ABAC)과 보안운영체제(Secure OS) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/access-control-secure-os" >}}) |
| DER (Distinguished Encoding Rules) | ASN.1 유일 인코딩 강제, X.509 필수 | [ASN.1 Tag 인코딩과 BER/DER/CER 비교 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/asn1-ber-der-encoding" >}}) |
| DRDoS (분산 반사 서비스 거부) | 출발지IP 위조 후 반사서버로 증폭공격 | [DDoS 공격 유형 및 방어 솔루션 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ddos-attack-defense" >}}) |
| DRM (Digital Rights Management) | 콘텐츠 암호화·라이선스로 사용제약 통제 | [DRM(디지털저작권관리)과 DLP(데이터유출방지) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/drm-dlp-content-protection" >}}) |
| DLP (Data Leakage/Loss Prevention) | 민감데이터 비인가 외부유출 탐지·차단 | [DRM(디지털저작권관리)과 DLP(데이터유출방지) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/drm-dlp-content-protection" >}}) |
| Evasion (회피 공격) | 추론단계 미세 노이즈로 AI 오분류 유도 | [AI 적대적 공격 및 프라이버시 보호 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ai-adversarial-attacks" >}}) |
| EAL (Evaluation Assurance Level) | CC 평가보증등급 1~7단계 | [CC(Common Criteria) 공통평가기준 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/common-criteria-cc" >}}) |
| ESP (Encapsulating Security Payload) | IPSec 암호화+인증+무결성 제공, NAT통과 가능 | [전송계층 보안 프로토콜: SSL/TLS·IPSec·VPN 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/transport-layer-security-ssl-ipsec-vpn" >}}) |
| Extraction (모델 추출) | API 질의 반복해 모델 가중치·학습셋 복제 | [AI 적대적 공격 및 프라이버시 보호 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ai-adversarial-attacks" >}}) |
| FDS (Fraud Detection System) | 단말·거래패턴 분석 이상금융거래 실시간 탐지 | [FDS(이상금융거래탐지시스템) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/fds-fraud-detection-system" >}}) |
| FIDO 2.0 | 생체정보 TEE 격리+비대칭키 서명 패스워드리스 표준 | [생체인증 표준 FIDO 2.0 및 패스워드리스 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/fido-passwordless" >}}) |
| Key Stretching | 해시연산 수만회 반복으로 크래킹 지연 | [암호문 공격 4유형 및 해시함수·Rainbow Table 방어 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ciphertext-attack-hash-function" >}}) |
| KPA (Known-Plaintext Attack) | 평문-암호문 쌍 일부 보유 공격 | [암호문 공격 4유형 및 해시함수·Rainbow Table 방어 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ciphertext-attack-hash-function" >}}) |
| MAC (Mandatory Access Control) | 시스템 강제 보안레이블 기반 접근통제 | [접근통제 정책(MAC/DAC/RBAC/ABAC)과 보안운영체제(Secure OS) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/access-control-secure-os" >}}) |
| Machine Unlearning | 특정 개인데이터 학습영향 제거, 잊힐권리 연계 | [AI 프라이버시 위협: 생명주기별 이슈, 안면인식 결제, 딥페이크 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ai-privacy-biometric-threats" >}}) |
| MCP (Model Context Protocol) | LLM-외부도구/데이터소스 표준 연결 프로토콜 | [MCP(Model Context Protocol) 보안 취약점 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/mcp-security" >}}) |
| Membership Inference (멤버십 추론) | 특정 데이터의 학습셋 포함 여부 판별 공격 | [AI 시스템 취약점 분류와 모델 전도·멤버십 추론 공격 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/model-inversion-membership-inference" >}}) |
| Model Inversion (모델 전도 공격) | 출력 신뢰도 역분석해 학습데이터 재구성 | [AI 시스템 취약점 분류와 모델 전도·멤버십 추론 공격 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/model-inversion-membership-inference" >}}) |
| Model DoS | 재귀 프롬프트 등으로 LLM 토큰연산 자원소진 | [OWASP LLM Top 10, 프롬프트 인젝션 및 Model DoS 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/owasp-llm-top10-prompt-injection" >}}) |
| MPC (Secure Multi-Party Computation) | 데이터 비공개 유지한 채 다자간 공동연산 | [PET (개인정보 보호 강화기술) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/pet-privacy-enhancing-technology" >}}) |
| N²SF | 국정원 위험기반 차등 망보안 가이드라인 | [국가 망 보안체계 N²SF 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/n2sf-network-security" >}}) |
| OAuth 2.0 | 패스워드 노출없이 자원접근권한 위임 프레임워크 | [OAuth 2.0 및 SAML 싱글사인온 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/oauth-saml" >}}) |
| OCSP | 인증서 폐기여부 실시간 HTTP 질의 | [PKI 및 전자서명 메커니즘 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/pki-digital-signature" >}}) |
| OCSP Stapling | 웹서버가 CA OCSP 응답 캐싱해 핸드셰이크시 첨부 | [PKI 및 전자서명 메커니즘 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/pki-digital-signature" >}}) |
| OIDC (OpenID Connect) | OAuth 위 ID Token(JWT)으로 신원 보증 확장규격 | [OAuth 2.0 및 SAML 싱글사인온 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/oauth-saml" >}}) |
| OWASP API Security Top 10 | API 취약점 표준 분류체계 | [API 보안과 AIoT 보안 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/api-aiot-security" >}}) |
| OWASP LLM Top 10 | LLM 애플리케이션 10대 보안위협 분류체계 | [OWASP LLM Top 10, 프롬프트 인젝션 및 Model DoS 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/owasp-llm-top10-prompt-injection" >}}) |
| OWASP Top 10 | 웹 보안취약점 표준 분류체계 | [웹 취약점 표준 가이드라인 OWASP Top 10 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/owasp-top10-security" >}}) |
| PA (Policy Administrator) | 제로트러스트 세션 생성/차단 지시 컴포넌트 | [제로 트러스트 보안 모델 및 ZTNA 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/zero-trust-architecture" >}}) |
| PbD (Privacy by Design) | 설계단계부터 프라이버시 내재화 방법론 | [개인정보 보호 거버넌스 — PbD·ISO 29100/27701·PIA 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/privacy-governance-pbd-pia-iso" >}}) |
| PE (Policy Engine) | 제로트러스트 접근권한 결정 두뇌 컴포넌트 | [제로 트러스트 보안 모델 및 ZTNA 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/zero-trust-architecture" >}}) |
| PEP (Policy Enforcement Point) | 실제 트래픽 통과/차단 게이트웨이 | [제로 트러스트 보안 모델 및 ZTNA 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/zero-trust-architecture" >}}) |
| PET (Privacy Enhancing Technology) | 개인정보 보호+데이터 활용성 결합 기술군 | [PET (개인정보 보호 강화기술) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/pet-privacy-enhancing-technology" >}}) |
| PIA (Privacy Impact Assessment) | 정보시스템 구축·변경 시 침해위험 사전평가 | [개인정보 보호 거버넌스 — PbD·ISO 29100/27701·PIA 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/privacy-governance-pbd-pia-iso" >}}) |
| PKI (Public Key Infrastructure) | 공개키 신뢰성 보장 인증서 발급·관리 체계 | [PKI 및 전자서명 메커니즘 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/pki-digital-signature" >}}) |
| Poisoning (포이즈닝) | 학습단계 왜곡 데이터 삽입해 모델 오염 | [AI 적대적 공격 및 프라이버시 보호 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ai-adversarial-attacks" >}}) |
| POMD | 주문·결제정보 해시 연결 후 재해시한 다이제스트 | [전자봉투(Digital Envelope) 및 이중서명(Dual Signature) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/digital-envelope-dual-signature" >}}) |
| PP (Protection Profile) | 제품군 공통 보안요건 명세(사용자 관점) | [CC(Common Criteria) 공통평가기준 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/common-criteria-cc" >}}) |
| PQC (Post-Quantum Cryptography) | 격자문제 등 수학적 난제 기반 양자내성암호 | [타원곡선 암호(ECC)와 양자내성암호(QKD/PQC) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ecc-pqc-quantum-cryptography" >}}) |
| Purdue 모델 | ICS 네트워크 6계층 IT·OT 경계 참조모델 | [OT/ICS 보안 — 파듀(Purdue) 모델과 ISA/IEC 62443 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ot-ics-security-purdue-62443" >}}) |
| QKD (Quantum Key Distribution) | 양자물리 원리 기반 정보이론적 안전 키분배 | [타원곡선 암호(ECC)와 양자내성암호(QKD/PQC) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ecc-pqc-quantum-cryptography" >}}) |
| RA (Registration Authority) | 신원확인·발급신청 접수 대행 보조기관 | [PKI 및 전자서명 메커니즘 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/pki-digital-signature" >}}) |
| RaaS (Ransomware as a Service) | 랜섬웨어 개발·운영 역할분리 서비스형 진화 | [랜섬웨어(RaaS), BPFdoor 백도어, 제로데이 취약점 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ransomware-bpfdoor-zeroday" >}}) |
| Rainbow Table | 해시-환원함수 체인 사전계산 조회테이블 | [암호문 공격 4유형 및 해시함수·Rainbow Table 방어 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ciphertext-attack-hash-function" >}}) |
| RBAC (Role-Based Access Control) | 역할 단위 권한부여, 역할분리로 남용방지 | [접근통제 정책(MAC/DAC/RBAC/ABAC)과 보안운영체제(Secure OS) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/access-control-secure-os" >}}) |
| RUDY (Slow HTTP Body) | POST 바디 1바이트씩 초단위 분할전송 | [DDoS 공격 유형 및 방어 솔루션 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ddos-attack-defense" >}}) |
| SAML 2.0 | XML서명 Assertion 교환 엔터프라이즈 SSO 표준 | [OAuth 2.0 및 SAML 싱글사인온 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/oauth-saml" >}}) |
| SBOM (Software Bill of Materials) | SW 구성컴포넌트·의존성 전체 목록 | [공급망 보안(SBOM)과 클라우드 네이티브 보안(CNAPP) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/supply-chain-cloud-native-security" >}}) |
| SDP (Software Defined Perimeter) | 자원 외부노출없이 논리적 은닉하는 ZTNA 기술 | [제로 트러스트 보안 모델 및 ZTNA 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/zero-trust-architecture" >}}) |
| Secure OS | 참조모니터 기반 접근중재 강제운영체제 | [접근통제 정책(MAC/DAC/RBAC/ABAC)과 보안운영체제(Secure OS) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/access-control-secure-os" >}}) |
| SIEM | 로그·이벤트 상관분석 기반 위협탐지 | [SIEM/SOAR 보안운영과 CTEM 지속적 위협노출관리 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/siem-soar-ctem" >}}) |
| Slowloris | HTTP 헤더 미완성 지연송신으로 소켓 고갈 | [DDoS 공격 유형 및 방어 솔루션 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ddos-attack-defense" >}}) |
| SOAR | Playbook 기반 보안대응 자동화 | [SIEM/SOAR 보안운영과 CTEM 지속적 위협노출관리 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/siem-soar-ctem" >}}) |
| SPA (Single Packet Authorization) | SDP 최초연결 시 암호화 노크패킷으로 포트오픈 | [제로 트러스트 보안 모델 및 ZTNA 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/zero-trust-architecture" >}}) |
| SQL Injection | 동적 쿼리 미검증으로 인증우회·데이터유출 | [웹 취약점 표준 가이드라인 OWASP Top 10 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/owasp-top10-security" >}}) |
| SSRF (Server-Side Request Forgery) | 서버 요청대행 로직 조작해 내부망 공격 | [웹 취약점 표준 가이드라인 OWASP Top 10 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/owasp-top10-security" >}}) |
| ST (Security Target) | 특정 TOE의 구체적 보안요건 명세(개발자 관점) | [CC(Common Criteria) 공통평가기준 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/common-criteria-cc" >}}) |
| TCB (Trusted Computing Base) | 보안 강제 실행 최소 HW/SW 집합 | [접근통제 정책(MAC/DAC/RBAC/ABAC)과 보안운영체제(Secure OS) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/access-control-secure-os" >}}) |
| TEE (Trusted Execution Environment) | 생체정보·개인키 격리보관 하드웨어 보안영역 | [생체인증 표준 FIDO 2.0 및 패스워드리스 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/fido-passwordless" >}}) |
| TOE (Target of Evaluation) | 실제 CC 평가대상 제품/시스템 | [CC(Common Criteria) 공통평가기준 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/common-criteria-cc" >}}) |
| Trust Score (신뢰점수) | 행동·환경 데이터 기반 실시간 신원 위험점수 | [무자각 지속인증 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/continuous-authentication" >}}) |
| TTPs (Tactics, Techniques, Procedures) | 공격자 행동패턴 전술·기법·절차 3계층 체계 | [TTPs(MITRE ATT&CK)와 공격표면·측면이동 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ttps-attack-surface-lateral-movement" >}}) |
| UEBA | 사용자·엔티티 행동분석, 내부자위협 탐지 | [무자각 지속인증 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/continuous-authentication" >}}) |
| VSS (Volume Shadow Copy) | 이전 파일 버전 복원 가능한 섀도복사본 | [디지털 포렌식 아티팩트 (Windows 아티팩트 유형) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/digital-forensics-artifact" >}}) |
| WebAuthn | 웹앱이 플랫폼 인증장치 접근하는 W3C 표준 API | [생체인증 표준 FIDO 2.0 및 패스워드리스 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/fido-passwordless" >}}) |
| XSS (Cross-Site Scripting) | 악성스크립트 삽입해 브라우저 세션정보 탈취 | [웹 취약점 표준 가이드라인 OWASP Top 10 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/owasp-top10-security" >}}) |
| Zone/Conduit 모델 | 동일 보안요구 자산그룹과 통제채널 구분 | [OT/ICS 보안 — 파듀(Purdue) 모델과 ISA/IEC 62443 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ot-ics-security-purdue-62443" >}}) |
| 간편인증 (ISMS-P) | 소규모 사업자용 핵심항목 축소 서면심사 인증 | [ISMS·ISMS-P 관리체계와 간편인증 제도 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/isms-isms-p-simplified" >}}) |
| 개인정보 안심구역 | 개인정보보호위 주관 폐쇄환경 가명정보 분석공간 | [가명처리 기법과 개인정보 안심구역·데이터안심구역 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/pseudonymization-data-safe-zone" >}}) |
| 공격표면 (Attack Surface) | 네·소·물·인·클 등 진입가능 지점 총합 | [TTPs(MITRE ATT&CK)와 공격표면·측면이동 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ttps-attack-surface-lateral-movement" >}}) |
| 다크웹/Tor | 3중 암호화 릴레이 기반 익명 은닉 네트워크 | [은닉·표적형 공격(워터링홀·스피어피싱·부채널·다크웹) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/covert-social-engineering-attacks" >}}) |
| 데이터안심구역 | K-DATA 주관 산업데이터 결합·분석 폐쇄공간 | [가명처리 기법과 개인정보 안심구역·데이터안심구역 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/pseudonymization-data-safe-zone" >}}) |
| 동형암호 (Homomorphic Encryption) | 암호화 상태 유지한 채 직접 연산 수행 | [AI 적대적 공격 및 프라이버시 보호 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ai-adversarial-attacks" >}}) |
| 딥페이크 (Deepfake) | GAN/VAE 등으로 생성한 비동의 합성 미디어 | [AI 프라이버시 위협: 생명주기별 이슈, 안면인식 결제, 딥페이크 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ai-privacy-biometric-threats" >}}) |
| 무자각 지속인증 | 세션 내내 행동·생체 데이터 재검증하는 인증 | [무자각 지속인증 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/continuous-authentication" >}}) |
| 부채널 공격 (Side-Channel Attack) | 타이밍·전력 등 물리 구현신호로 비밀키 추출 | [은닉·표적형 공격(워터링홀·스피어피싱·부채널·다크웹) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/covert-social-engineering-attacks" >}}) |
| 비트스트림 이미징 | 쓰기방지장치+섹터단위 1:1 물리 복제 | [디지털 포렌식 5대 원칙 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/digital-forensics-principles" >}}) |
| 스피어피싱 | 맞춤형 정보수집 후 표적 이메일 침투 | [은닉·표적형 공격(워터링홀·스피어피싱·부채널·다크웹) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/covert-social-engineering-attacks" >}}) |
| 안티드론 시스템 | 탐지·추적·식별·대응·C2 5계층 드론 대응체계 | [안티드론 시스템 프레임워크 (TTAK.KO-10.1460) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/anti-drone-system" >}}) |
| 연합학습 (Federated Learning) | 원본데이터 로컬 학습, 가중치만 취합 | [AI 적대적 공격 및 프라이버시 보호 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ai-adversarial-attacks" >}}) |
| 워터링홀 | 표적 상시방문 사이트 사전침해 후 자동감염 | [은닉·표적형 공격(워터링홀·스피어피싱·부채널·다크웹) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/covert-social-engineering-attacks" >}}) |
| 이중서명 (Dual Signature) | 주문·결제정보를 연결해 상점·은행 분리검증 | [전자봉투(Digital Envelope) 및 이중서명(Dual Signature) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/digital-envelope-dual-signature" >}}) |
| 전자봉투 (Digital Envelope) | 세션키를 수신자 공개키로 암호화하는 하이브리드 기법 | [전자봉투(Digital Envelope) 및 이중서명(Dual Signature) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/digital-envelope-dual-signature" >}}) |
| 제로데이 (Zero-Day) | 패치 부재 상태에서 악용되는 미공개 취약점 | [랜섬웨어(RaaS), BPFdoor 백도어, 제로데이 취약점 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ransomware-bpfdoor-zeroday" >}}) |
| 차분프라이버시 (Differential Privacy) | 통계결과에 노이즈 주입해 개인기여도 은폐 | [AI 적대적 공격 및 프라이버시 보호 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ai-adversarial-attacks" >}}) |
| 참조모니터 (Reference Monitor) | 모든 접근 중재하는 우회불가 보안커널 요소 | [접근통제 정책(MAC/DAC/RBAC/ABAC)과 보안운영체제(Secure OS) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/access-control-secure-os" >}}) |
| 측면이동 (Lateral Movement) | 초기침투 후 내부망 권한·범위 확대 행위 | [TTPs(MITRE ATT&CK)와 공격표면·측면이동 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/ttps-attack-surface-lateral-movement" >}}) |
| 가명처리 (Pseudonymization) | 추가정보 없이 식별 불가하게 일부 대체·삭제 | [가명처리 기법과 개인정보 안심구역·데이터안심구역 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/pseudonymization-data-safe-zone" >}}) |
| 해시 충돌 (Hash Collision) | 서로 다른 입력이 동일 해시값을 갖는 현상 | [해시 자료구조 — 해시함수 종류 및 충돌·오버플로우 해결기법 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/hash-collision-resolution" >}}) |
| 체이닝 (Chaining) | 버킷을 연결리스트로 구성해 해시충돌 해결 | [해시 자료구조 — 해시함수 종류 및 충돌·오버플로우 해결기법 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/hash-collision-resolution" >}}) |
| 개방주소법 (Open Addressing) | 빈 버킷을 테이블 내 탐사해 충돌 해결 | [해시 자료구조 — 해시함수 종류 및 충돌·오버플로우 해결기법 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/hash-collision-resolution" >}}) |
| CIA 트라이어드 | 기밀성·무결성·가용성 정보보안 3대 목적 | [정보보안 3대 목적과 위협 공격 (CIA 트라이어드) 서브노트]({{< relref "/docs/subnotes/06_InfoSecurity/information-security-cia-goals" >}}) |
