---
title: "타원곡선 암호(ECC)와 양자내성암호(QKD/PQC)"
date: 2026-07-11T11:38:05+09:00
tags: ["보안", "ECC", "타원곡선암호", "양자암호", "QKD", "PQC", "공개키암호", "서브노트"]
draft: false
---

# 타원곡선 암호(ECC)와 양자내성암호(QKD/PQC) 서브노트

> **두음 머리에 박기 🧠**
> - **P·G·k** (ECC 이산로그문제 ECDLP 3요소: **P**=공개키, **G**=기저점, **k**=개인키 — P=kG에서 k 계산 불가능)
> - **DH·DHE·DSA** (ECC 3대 활용 알고리즘: EC**DH** 키교환, EC**DHE** 전방향비밀성 키교환, EC**DSA** 전자서명)
> - **격·해·코·다** (PQC 4대 난제 기반 분류: **격**자기반(Kyber/Dilithium), **해**시기반(SPHINCS+), **코**드기반, **다**변수기반)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **타원곡선 암호(ECC, Elliptic Curve Cryptography) 및 양자컴퓨팅 대응 암호: QKD·PQC** |
| **정의** | 타원곡선 위 이산로그문제(ECDLP)의 계산 난해성에 기반해 짧은 키로 RSA와 동등한 보안을 제공하는 **ECC**와, Shor 알고리즘으로 ECC·RSA가 무력화되는 양자컴퓨팅 시대에 대응하기 위한 **양자키분배(QKD)**·**양자내성암호(PQC)** |
| **키워드** | ECDLP, ECDHE, ECDSA, secp256k1, Shor 알고리즘, BB84, ML-KEM/ML-DSA/SLH-DSA(NIST FIPS 203/204/205), FIPS 140-3(암호모듈 Level 1~4) |
| **개념도** | **[ 공개키 암호의 양자컴퓨팅 위협 대응 계보 ]**<br>`[ RSA/ECC (현행 공개키 암호, 이산로그·소인수분해 기반) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (Shor 알고리즘으로 양자컴퓨터가 다항시간에 해독)`<br>`[ QKD (양자물리 기반 키분배, BB84) ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ PQC (수학적 난제 기반, 소프트웨어 교체) ]`<br>&nbsp;&nbsp;`정보이론적 안전성, 전용 광채널 필요&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;계산론적 안전성, 기존망 그대로 사용` |
| **구성요소** | 1. **ECC 수학적 기반**: y²=x³+ax+b(mod p) 곡선 위의 점 연산, ECDLP(P=kG에서 k 계산 불가능)<br>2. **RSA 대비 효율**: 128비트 보안강도 기준 RSA 3072비트 vs ECC 256비트(12배 효율)<br>3. **ECC 알고리즘군**: ECDH(키교환)/ECDHE(일회성키+전방향비밀성)/ECDSA(서명)/EdDSA(고성능서명)<br>4. **QKD(BB84)**: Alice가 무작위 비트·편광기저로 광자 전송 → Bob 측정 → 기저 일치 비트만 키로 채택, 도청 시 양자상태 변화로 즉시 탐지<br>5. **PQC NIST 표준**: FIPS 203(ML-KEM/Kyber, 격자기반 키교환), FIPS 204(ML-DSA/Dilithium, 격자기반 서명), FIPS 205(SLH-DSA/SPHINCS+, 해시기반 서명)<br>6. **FIPS 140-3(암호모듈 보안등급)**: PQC·ECC 알고리즘을 실제 구현·탑재하는 암호 모듈 자체의 보안성을 검증하는 NIST 표준(ISO/IEC 19790 기반, FIPS 140-2 후속)으로 Level 1(물리보안 없는 SW 모듈)~Level 4(물리적 완전봉인·환경공격 탐지, 군사·금융 최고보안)의 4단계 등급으로 구분하며 국내 KCMVP 인증의 참조 표준으로 활용 |
| **비교** | **QKD (Quantum Key Distribution)**<br>- **안전성 근거**: 하이젠베르크 불확정성 원리(양자물리 법칙) → 무조건적·정보이론적 안전<br>- **제약**: 전용 광섬유·양자중계기 필요, 전송거리 수백km 제한, 도입비용 높음<br><br>**PQC (Post-Quantum Cryptography)**<br>- **안전성 근거**: 격자문제(LWE/NTRU) 등 수학적 난제 → 계산론적(가정 기반) 안전<br>- **제약**: 기존 네트워크 인프라 그대로 사용 가능, 소프트웨어 교체만으로 도입, 비용 낮음 |
| **차별화** | **양자컴퓨팅 시대 대비 암호 전환(Crypto Agility) 로드맵**<br>1. **하이브리드 전환 전략**: TLS 1.3의 ECDHE 키교환에 ML-KEM(Kyber)을 병행 적용하는 하이브리드 키교환을 우선 도입하여, PQC 표준의 미성숙 리스크를 헤지하면서 점진적으로 완전 PQC 전환.<br>2. **핵심 인프라는 QKD, 범용망은 PQC로 이원화**: 금융·국방 등 최고 보안이 요구되는 거점 간 통신에는 QKD 전용회선을, 일반 인터넷 서비스에는 비용 효율적인 PQC 소프트웨어 교체를 적용하는 계층적 전환.<br>3. **선제적 데이터 보호(Harvest Now, Decrypt Later 대응)**: 현재 ECC/RSA로 암호화되어 저장된 장기보존 민감데이터가 향후 양자컴퓨터로 복호화될 위험에 대비, 장기 보존이 필요한 데이터부터 우선적으로 PQC 재암호화 적용. |
