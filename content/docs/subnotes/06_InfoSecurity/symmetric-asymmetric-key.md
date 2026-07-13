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
| **정의** | 동일한 키로 고속 암복호화를 수행하는 **대칭키 암호**와, 서로 다른 공개키/개인키 쌍을 사용해 키 배송 문제를 해결하고 인증을 제공하는 **비대칭키(공개키) 암호 기술** |
| **키워드** | 블록/스트림 암호, AES, RSA, ECC, 블록 모드(ECB/CBC/CTR), 하이브리드 암호, 양자 내성 암호 (PQC) |
| **개념도** | **[ 하이브리드 암호 시스템 (Hybrid Cryptosystem) 전송 구조 ]**<br>`[ 송신측 ]` ── 평문 데이터 ──➔ `[ AES (대칭키 암호화) ]` ──➔ 암호문 전송 ──┐<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (임시 세션키로 암호화)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 임시 세션키 ] ➔ [ ECC (수신자 공개키 암호화) ] ➔ 암호화된 키 전송 ─┼──➔ [ 수신측 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`├── 수신자 개인키로 세션키 복호화`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└── 복호화된 세션키로 평문 복호화` |
| **구성요소** | 1. **대칭키 블록 암호**: 데이터를 고정 크기(예: AES 128비트) 블록으로 나누어 대체(Substitution)와 치환(Permutation) 반복<br>2. **대칭키 스트림 암호**: 평문 비트열과 난수 키 스트림을 XOR하여 실시간 데이터 스트림 암호화 (RC4, A5/1 등)<br>3. **블록암호 운용모드**: 동일 평문 블록이 항상 동일 암호문으로 변환되는 패턴 노출 문제를 해결하기 위해 적용. **ECB**(Electronic Codebook, 블록 독립 암호화, 패턴 노출로 비권장) → **CBC**(Cipher Block Chaining, 이전 암호문과 XOR 후 암호화, IV 필요) → **CFB**(Cipher Feedback, 이전 암호문의 암호화값과 평문 XOR) → **OFB**(Output Feedback, 키 스트림을 독립 생성 후 XOR, 오류 전파 없음) → **CTR**(Counter, 카운터 암호화값과 평문 XOR, 완전 병렬처리·임의접근 가능)<br>4. **비대칭키 RSA**: 거듭제곱 모듈로 연산 기반, 매우 큰 두 소수의 곱을 소인수분해하는 수학적 난해성에 의존. 키 생성은 ①두 소수 p,q 선택 후 n=p×q ②φ(n)=(p-1)(q-1) 계산 ③gcd(e,φ(n))=1인 e 선택(공개키 (e,n)) ④e×d≡1(mod φ(n))인 d 계산(개인키 (d,n)) 순으로 진행하며, 암호화는 C=M^e mod n, 복호화는 M=C^d mod n으로 수행<br>5. **비대칭키 ECC**: 타원곡선 상의 점 더하기 연산 기반, 타원곡선 이산대수 문제에 의존. 적은 비트(256bit)로 높은 보안 보장<br>6. **Diffie-Hellman 키교환**: 이산대수 문제(g^x mod p에서 x 역산 곤란) 기반으로 공개 채널에서 공유 비밀키를 유도하는 프로토콜. Alice는 A=g^a mod p, Bob은 B=g^b mod p를 교환 후 각자 K=B^a mod p=A^b mod p=g^(ab) mod p를 계산해 동일 키 확보. 인증이 없어 중간자공격(MITM)에 취약하므로 인증서 결합이 필요하며, 매 세션 새 키쌍을 쓰는 DHE와 타원곡선 결합형 ECDH/ECDHE는 PFS(Perfect Forward Secrecy)를 보장 |
| **비교** | **대칭키 암호 (Symmetric)**<br>- **키 개수 / 속도**: 1개 / 매우 빠름 (대용량 파일 암호화에 적합)<br>- **키 분배 문제**: 참여자 $N$명일 때 키 개수 $\frac{N(N-1)}{2}$로 기하급수적 증가 및 배송 보안 노출<br><br>**비대칭키 암호 (Asymmetric)**<br>- **키 개수 / 속도**: 2개 (공개키, 개인키) / 상대적으로 느림 (연산 부하 큼)<br>- **키 분배 문제**: 참여자 $N$명일 때 키 개수 $2N$개로 관리 용이, 공개키는 일반 공개되므로 배송 문제 해결 |
| **차별화** | **양자 컴퓨팅 시대를 대비한 양자 내성 암호(PQC) 동향 및 하이브리드 실무 가이드라인**<br>1. **양자 컴퓨터(Shor 알고리즘) 위협 시나리오**: 기존 소인수분해(RSA) 및 이산대수(ECC) 기반 알고리즘은 양자 컴퓨터 상에서 다항식 시간 내 해독되므로 암호학적 붕괴 직면. 대칭키(AES-256)의 경우 Grover 알고리즘에 의해 키 강도가 절반 수준으로 감쇄되므로 최소 **AES-256** 이상 권고.<br>2. **양자 내성 암호 (PQC, Post-Quantum Cryptography) 적용**: 수학적 격자 문제(Lattice-based)에 기반한 NIST 표준 알고리즘인 **Kyber (키 설정 용도)** 및 **Dilithium (전자서명 용도)**을 레거시 비대칭키 체계의 대체 규격으로 식별.<br>3. **하이브리드 암호 프로토콜 연동**: TLS v1.3 등 네트워크 통신 구간에서 비대칭키 연산 속도를 보완하기 위해, 실제 통신 데이터 암호화는 고속 대칭키(AES-GCM) 세션키로 수행하고, 해당 세션키 전달 및 서명에만 비대칭키(ECC/RSA)를 결합하는 하이브리드 아키텍처 의무화. |
