---
bookCollapseSection: true
title: "정보보안"
---

| 번호 | 토픽명 | 정의 |
| :--- | :--- | :--- |
| 1 | [접근통제 정책(MAC/DAC/RBAC/ABAC)과 보안운영체제(Secure OS)]({{< relref "/docs/subnotes/06_InfoSecurity/access-control-secure-os" >}}) | 인가된 주체만 보호 자원에 접근하도록 제한하는 4대 **접근통제 정책(M·D·R·A)**과, 이를 커널 수준에서 강제 구현한 **보안운영체제(Secure OS)** |
| 2 | [AI 적대적 공격 및 프라이버시 보호]({{< relref "/docs/subnotes/06_InfoSecurity/ai-adversarial-attacks" >}}) | 모델에 노이즈를 넣어 오분류·유출을 유도하는 **AI 적대적 공격(포·이·엑)**과, 민감 데이터 유출을 막는 **프라이버시 보존 기술(동·차·연)** |
| 3 | [AI 프라이버시 위협: 생명주기별 이슈, 안면인식 결제, 딥페이크]({{< relref "/docs/subnotes/06_InfoSecurity/ai-privacy-biometric-threats" >}}) | AI 생명주기(수·학·추·배) 단계별 프라이버시 위험과, 그 대표 사례인 **안면인식 결제**, 실사 유사 가짜 미디어 **딥페이크(G·V·확·F·V·립)** 위협군 |
| 4 | [안티드론 시스템 프레임워크 (TTAK.KO-10.1460)]({{< relref "/docs/subnotes/06_InfoSecurity/anti-drone-system" >}}) | 불법·위협 드론(UAV)의 탐지·추적·식별·대응 절차와 기술구조를 정의한 TTA 표준(**TTAK.KO-10.1460**)의 **5단계 기능계층(탐·추·식·대·C2)** |
| 5 | [ASN.1 Tag 인코딩과 BER/DER/CER 비교]({{< relref "/docs/subnotes/06_InfoSecurity/asn1-ber-der-encoding" >}}) | 데이터 구조 기술 표준 ASN.1의 TLV 구조 중 **Long-form Tag Encoding** 방식과, 바이트 스트림 생성 규칙 **BER·DER·CER**의 X.509 적용 |
| 6 | [암호문 공격 4유형 및 해시함수·Rainbow Table 방어]({{< relref "/docs/subnotes/06_InfoSecurity/ciphertext-attack-hash-function" >}}) | 공격자 보유 정보 수준별 **암호문 공격 4유형(COA·KPA·CPA·CCA)**과, 해시 취약점을 노리는 **Rainbow Table 공격** 및 Salt·Key Stretching 방어 |
| 7 | [CC(Common Criteria) 공통평가기준]({{< relref "/docs/subnotes/06_InfoSecurity/common-criteria-cc" >}}) | 보안기능요건(SFR)·보증요건(SAR)으로 IT 제품 보안을 평가하는 국제 표준으로, 평가보증등급(**EAL 1~7**)과 상호인정협정(**CCRA**)을 포함 |
| 8 | [DDoS 공격 유형 및 방어 솔루션]({{< relref "/docs/subnotes/06_InfoSecurity/ddos-attack-defense" >}}) | 대역폭·자원을 고갈시켜 가용성을 침해하는 **DDoS 공격**과, 적은 트래픽으로 소켓을 점유하는 **L7 Slow HTTP 공격** 대응 기술 |
| 9 | [디지털 포렌식 아티팩트 (Windows 아티팩트 유형)]({{< relref "/docs/subnotes/06_InfoSecurity/digital-forensics-artifact" >}}) | OS·애플리케이션이 자동 생성하는 디지털 흔적으로, 삭제 후에도 잔존 가능한 **증거 데이터(레·이·파·웹·프·링·페·섀)** |
| 10 | [디지털 포렌식 5대 원칙]({{< relref "/docs/subnotes/06_InfoSecurity/digital-forensics-principles" >}}) | 전자적 증거물의 법적 증거능력(허용성·증명력)을 입증하기 위해 준수해야 하는 **5대 원칙(정·재·신·연·무)** 및 수집·분석 절차 |
| 11 | [타원곡선 암호(ECC)와 양자내성암호(QKD/PQC)]({{< relref "/docs/subnotes/06_InfoSecurity/ecc-pqc-quantum-cryptography" >}}) | 이산로그문제(ECDLP) 난해성으로 짧은 키로 RSA급 보안을 제공하는 **ECC**와, Shor 알고리즘 대응을 위한 **양자키분배(QKD)**·**양자내성암호(PQC)** |
| 12 | [생체인증 표준 FIDO 2.0 및 패스워드리스]({{< relref "/docs/subnotes/06_InfoSecurity/fido-passwordless" >}}) | 생체정보를 기기 보안영역(TEE)에 격리 보관하고 비대칭 키 전자서명으로 서버 검증하는 **FIDO 2.0** 및 패스워드리스 인증 표준 |
| 13 | [ISMS·ISMS-P 관리체계와 간편인증 제도]({{< relref "/docs/subnotes/06_InfoSecurity/isms-isms-p-simplified" >}}) | 정보보호 관리체계 국내 인증제도 **ISMS**(80개 통제항목)와 개인정보보호 통합 **ISMS-P**(102개), 소규모 사업자용 **간편인증** 제도 |
| 14 | [MCP(Model Context Protocol) 보안 취약점]({{< relref "/docs/subnotes/06_InfoSecurity/mcp-security" >}}) | Anthropic이 제안한 LLM-외부 도구 연결 표준 **MCP**가 파일시스템·DB 접근 권한 부여로 새롭게 여는 **7대 보안 취약점(프·권·오·악·민·S·도)** |
| 15 | [AI 시스템 취약점 분류와 모델 전도·멤버십 추론 공격]({{< relref "/docs/subnotes/06_InfoSecurity/model-inversion-membership-inference" >}}) | AI 시스템의 학습·추론·인프라 3단계(학·추·인) 취약점 분류체계와, 출력을 역분석해 학습 데이터를 재구성하는 **모델 전도·멤버십 추론 공격** |
| 16 | [국가 망 보안체계 N²SF]({{< relref "/docs/subnotes/06_InfoSecurity/n2sf-network-security" >}}) | 국정원이 2025년 발표한 공공기관 망 보안 가이드라인으로, 물리적 망 분리를 위험 기반 차등 보안으로 전환한 **3대 보안구역(고·일·인)** 체계 |
| 17 | [OAuth 2.0 및 SAML 싱글사인온]({{< relref "/docs/subnotes/06_InfoSecurity/oauth-saml" >}}) | 패스워드 노출 없이 접근권한을 위임하는 **OAuth 2.0**, 이를 확장한 **OIDC**, XML 기반 엔터프라이즈 SSO 표준 **SAML 2.0** |
| 18 | [OWASP LLM Top 10, 프롬프트 인젝션 및 Model DoS]({{< relref "/docs/subnotes/06_InfoSecurity/owasp-llm-top10-prompt-injection" >}}) | LLM 앱의 10대 보안 위협 가이드라인 **OWASP LLM Top 10**과, 1순위 **프롬프트 인젝션(직·간·탈)**, 자원 소진 공격 **Model DoS** |
| 19 | [웹 취약점 표준 가이드라인 OWASP Top 10]({{< relref "/docs/subnotes/06_InfoSecurity/owasp-top10-security" >}}) | 웹 보안 취약점 표준 기준 **OWASP Top 10** 분류체계와, 소스코드 단계에서 비정상 입력을 무력화하는 시큐어 코딩·보안 아키텍처 기술 |
| 20 | [경계 기반 보안 vs 제로 트러스트 성숙도 모델 2.0 (CISA)]({{< relref "/docs/subnotes/06_InfoSecurity/perimeter-vs-zero-trust-maturity" >}}) | 내부를 전면 신뢰하는 **경계 기반 보안**의 한계를 넘어 "항상 검증"을 원칙으로 하는 CISA **제로 트러스트 성숙도 모델 2.0**(5개 기둥×4단계) |
| 21 | [PET (개인정보 보호 강화기술)]({{< relref "/docs/subnotes/06_InfoSecurity/pet-privacy-enhancing-technology" >}}) | AI 학습·의료·금융 등에서 프라이버시-유용성을 함께 확보하는 기술 총칭으로, 동형암호·차분 프라이버시·연합학습·MPC 등 6대 기술로 구성 |
| 22 | [PKI 및 전자서명 메커니즘]({{< relref "/docs/subnotes/06_InfoSecurity/pki-digital-signature" >}}) | 공개키 신뢰성을 인증서로 보증하는 **PKI**와, 송신처 인증·위변조 방지·부인방지(인·무·부)를 실현하는 **전자서명** 기술 |
| 23 | [가명처리 기법과 개인정보 안심구역·데이터안심구역]({{< relref "/docs/subnotes/06_InfoSecurity/pseudonymization-data-safe-zone" >}}) | 추가 정보 없이 개인 식별을 막는 **가명처리(가·총·삭·범·마·잡·교·토)** 8대 기법과, 이를 안전하게 활용하는 **개인정보 안심구역**·**데이터안심구역** |
| 24 | [랜섬웨어(RaaS), BPFdoor 백도어, 제로데이 취약점]({{< relref "/docs/subnotes/06_InfoSecurity/ransomware-bpfdoor-zeroday" >}}) | 데이터를 암호화해 금전을 요구하는 **랜섬웨어**의 서비스형 모델 **RaaS**, Linux BPF를 악용한 은닉 백도어 **BPFdoor**, 패치 전 악용되는 **제로데이 취약점** |
| 25 | [SIEM/SOAR 보안운영과 CTEM 지속적 위협노출관리]({{< relref "/docs/subnotes/06_InfoSecurity/siem-soar-ctem" >}}) | 로그 상관분석으로 위협을 탐지하는 **SIEM**과 Playbook 기반 자동대응 **SOAR**, 공격표면을 지속 평가·검증하는 **CTEM(범·발·우·검·동)** |
| 26 | [스푸핑(Spoofing) 공격: ARP/IP/DNS]({{< relref "/docs/subnotes/06_InfoSecurity/spoofing-attack" >}}) | 정체(MAC·IP·도메인)를 위장해 인증 부재를 악용, 도청·세션하이재킹·MITM을 수행하는 **ARP/IP/DNS 스푸핑** 공격 |
| 27 | [공급망 보안(SBOM)과 클라우드 네이티브 보안(CNAPP)]({{< relref "/docs/subnotes/06_InfoSecurity/supply-chain-cloud-native-security" >}}) | SBOM 기반 투명성으로 공급망 변조를 차단하는 **공급망 보안**과, 컨테이너 환경에 보안을 내재화하는 **클라우드 네이티브 보안(4C, CNAPP)** |
| 28 | [대칭키 및 비대칭키 암호화 알고리즘]({{< relref "/docs/subnotes/06_InfoSecurity/symmetric-asymmetric-key" >}}) | 동일 키로 고속 암복호화하는 **대칭키 암호**와, 공개키·개인키 쌍으로 키 배송 문제와 인증을 해결하는 **비대칭키(공개키) 암호** 기술 |
| 29 | [TTPs(MITRE ATT&CK)와 공격표면·측면이동]({{< relref "/docs/subnotes/06_InfoSecurity/ttps-attack-surface-lateral-movement" >}}) | 공격자 행동을 전술·기법·절차(전·기·절)로 체계화한 **TTPs(MITRE ATT&CK)**와, 침투 후 권한·범위를 확대하는 **측면이동**이 발생하는 **공격표면** |
| 30 | [네트워크 보안 장비(방화벽/IDS/IPS/VPN)와 무선랜 보안(WEP/WPA)]({{< relref "/docs/subnotes/06_InfoSecurity/wifi-security-network-devices" >}}) | 차단·탐지·방지·암호화를 계층적으로 수행하는 **4대 네트워크 보안 장비**와, WEP의 IV 취약점을 802.1X+RADIUS로 보완한 **동적 WEP**·**WPA** 계보 |
| 31 | [제로 트러스트 보안 모델 및 ZTNA]({{< relref "/docs/subnotes/06_InfoSecurity/zero-trust-architecture" >}}) | "결코 신뢰하지 말고 항상 검증하라"는 기조로 상시 인증하는 **제로 트러스트 모델**과, 자원을 논리적으로 은닉하는 **SDP(ZTNA)** 기술 |
