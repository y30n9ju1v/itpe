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
| **정의** | ECDLP 계산난해성 기반 짧은키로 RSA와 동등 보안 제공하는 **ECC** & Shor 알고리즘으로 ECC·RSA 무력화되는 양자컴퓨팅 시대 대응 **QKD**·**PQC** |
| **키워드** | ECDLP, ECDHE, ECDSA, secp256k1, Shor 알고리즘, BB84, ML-KEM/ML-DSA/SLH-DSA(NIST FIPS 203/204/205), FIPS 140-3(암호모듈 Level 1~4) |
| **개념도** | **[ 공개키 암호의 양자컴퓨팅 위협 대응 계보 ]**<br>`[ RSA/ECC (현행 공개키 암호, 이산로그·소인수분해 기반) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (Shor 알고리즘으로 양자컴퓨터가 다항시간에 해독)`<br>`[ QKD (양자물리 기반 키분배, BB84) ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ PQC (수학적 난제 기반, 소프트웨어 교체) ]`<br>&nbsp;&nbsp;`정보이론적 안전성, 전용 광채널 필요&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;계산론적 안전성, 기존망 그대로 사용` |
| **구성요소** | 1. ECC 수학적 기반: y²=x³+ax+b(mod p) 곡선 위 점 연산, ECDLP(P=kG에서 k 계산 불가능)<br>2. RSA 대비 효율: 128비트 보안강도 기준 RSA 3072비트 vs ECC 256비트 (12배 효율)<br>3. ECC 알고리즘군: ECDH(키교환)/ECDHE(전방향비밀성)/ECDSA(서명)/EdDSA(고성능서명)<br>4. QKD(BB84): 무작위 비트·편광기저로 광자 전송 → 기저일치 비트만 키채택 → 도청 시 양자상태 변화로 즉시 탐지<br>5. PQC NIST 표준: FIPS 203(ML-KEM/Kyber, 격자기반 키교환) / FIPS 204(ML-DSA/Dilithium, 격자기반 서명) / FIPS 205(SLH-DSA/SPHINCS+, 해시기반 서명)<br>6. FIPS 140-3(암호모듈 보안등급): 암호모듈 자체 보안성 검증 NIST 표준(ISO/IEC 19790 기반, FIPS 140-2 후속) → Level 1(SW모듈)~Level 4(물리봉인·공격탐지) 4단계, 국내 KCMVP 참조표준 |
| **비교** | **QKD(Quantum Key Distribution)**<br>- 안전성 근거: 하이젠베르크 불확정성 원리 → 무조건적·정보이론적 안전<br>- 제약: 전용 광섬유·양자중계기 필요, 전송거리 수백km 제한, 고비용<br><br>**PQC(Post-Quantum Cryptography)**<br>- 안전성 근거: 격자문제(LWE/NTRU) 등 수학적 난제 → 계산론적 안전<br>- 제약: 기존 네트워크 그대로 사용, SW 교체만으로 도입, 저비용 |
| **차별화** | **양자컴퓨팅 시대 대비 암호 전환(Crypto Agility) 로드맵**<br>1. 하이브리드 전환: TLS 1.3 ECDHE에 ML-KEM(Kyber) 병행 적용 → PQC 미성숙 리스크 헤지하며 점진 전환<br>2. QKD/PQC 이원화: 금융·국방 핵심망은 QKD 전용회선, 일반 인터넷은 저비용 PQC SW교체 → 계층적 전환<br>3. 선제적 데이터 보호(Harvest Now, Decrypt Later 대응): 현재 ECC/RSA 암호화된 장기보존 민감데이터가 향후 양자컴퓨터로 복호화될 위험 → 장기보존 데이터부터 우선 PQC 재암호화 |
