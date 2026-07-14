---
title: "대칭키 및 비대칭키 암호화 알고리즘"
date: 2026-07-11T11:19:35+09:00
tags: ["보안", "암호학", "대칭키", "비대칭키", "AES", "ECC", "RSA", "PQC", "하이브리드암호", "서브노트"]
draft: false
---

# 대칭키 및 비대칭키 암호화 알고리즘 서브노트

> **두음 머리에 박기 🧠**
> - **데·에·시·아** (대칭키 블록 암호화 대표 표준: **D**ES, **A**ES, **S**EED, **A**RIA)
> - **아·디·이** (비대칭키 알고리즘 대표 표준: **R**SA 인수분해, **D**H 디피헬먼 키교환, **E**CC 타원곡선)
> - **이·시·비·시·오·시** (대칭키 블록 암호 주요 운영 모드: **E**CB 패턴노출, **C**BC 체이닝, **C**FB 피드백, **O**FB 출력피드백, **C**TR 카운터병렬)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **대칭키 (Symmetric Key) 및 비대칭키 (Asymmetric Key) 암호화 알고리즘** |
| **정의** | 동일키로 고속 암복호화 수행하는 대칭키암호 + 공개키/개인키 쌍으로 키배송문제 해결·인증제공하는 비대칭키(공개키) 암호기술 |
| **키워드** | 블록/스트림 암호, AES, RSA, ECC, 블록 모드(ECB/CBC/CTR), 하이브리드 암호, 양자 내성 암호 (PQC) |
| **개념도** | **[ 하이브리드 암호 시스템 (Hybrid Cryptosystem) 전송 구조 ]**<br>`[ 송신측 ]` ── 평문 데이터 ──➔ `[ AES (대칭키 암호화) ]` ──➔ 암호문 전송 ──┐<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (임시 세션키로 암호화)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 임시 세션키 ] ➔ [ ECC (수신자 공개키 암호화) ] ➔ 암호화된 키 전송 ─┼──➔ [ 수신측 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`├── 수신자 개인키로 세션키 복호화`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└── 복호화된 세션키로 평문 복호화` |
| **구성요소** | 1. **대칭키 블록암호**: 고정크기(AES 128bit) 블록분할 → 대체(Substitution)+치환(Permutation) 반복<br>2. **대칭키 스트림암호**: 평문비트열 ⊕ 난수키스트림 → 실시간 스트림암호화(RC4, A5/1)<br>3. **블록암호 운용모드**(패턴노출 문제 해결): **ECB**(블록독립암호화, 패턴노출 비권장)→**CBC**(이전암호문 XOR후암호화, IV필요)→**CFB**(이전암호문 암호화값⊕평문)→**OFB**(키스트림 독립생성⊕, 오류전파없음)→**CTR**(카운터암호화값⊕평문, 완전병렬·임의접근)<br>4. **비대칭키 RSA**: 거듭제곱모듈로연산, 큰소수곱 소인수분해 난해성 의존. 키생성: ①소수p,q→n=p×q ②φ(n)=(p-1)(q-1) ③gcd(e,φ(n))=1인 e선택(공개키(e,n)) ④e×d≡1(mod φ(n))인 d(개인키(d,n)). 암호화 C=M^e mod n, 복호화 M=C^d mod n<br>5. **비대칭키 ECC**: 타원곡선 점덧셈연산, 이산대수문제 의존, 적은비트(256bit)로 높은보안<br>6. **Diffie-Hellman 키교환**: 이산대수문제(g^x mod p 역산곤란) 기반 공개채널 공유비밀키 유도. Alice A=g^a mod p, Bob B=g^b mod p 교환 → K=B^a mod p=A^b mod p=g^(ab) mod p 동일키. 인증없어 MITM취약→인증서결합 필요, DHE·ECDH/ECDHE는 PFS 보장 |
| **비교** | **대칭키 암호 (Symmetric)**<br>- 키개수/속도: 1개 / 매우빠름(대용량파일 적합)<br>- 키분배문제: N명 시 N(N-1)/2개 기하급수증가, 배송보안 노출<br><br>**비대칭키 암호 (Asymmetric)**<br>- 키개수/속도: 2개(공개키·개인키) / 상대적으로 느림(연산부하↑)<br>- 키분배문제: N명 시 2N개, 관리용이, 공개키는 공개배포로 배송문제 해결 |
| **차별화** | **양자컴퓨팅 시대 대비 PQC 동향 및 하이브리드 실무 가이드라인**<br>1. **양자컴퓨터(Shor 알고리즘) 위협**: RSA(소인수분해)·ECC(이산대수) → 양자컴퓨터 다항식시간 해독, 암호학적붕괴 직면. 대칭키(AES-256)는 Grover로 키강도 절반감쇄 → 최소 AES-256 권고<br>2. **PQC(Post-Quantum Cryptography) 적용**: 격자문제(Lattice-based) 기반 NIST표준 Kyber(키설정)·Dilithium(전자서명) → 레거시 비대칭키 대체규격<br>3. **하이브리드 암호 프로토콜 연동**: TLS v1.3 등 실통신 암호화=고속대칭키(AES-GCM) 세션키, 세션키전달·서명만 비대칭키(ECC/RSA) 결합 하이브리드 의무화 |
