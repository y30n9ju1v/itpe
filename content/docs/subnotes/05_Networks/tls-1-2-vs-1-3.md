---
title: "TLS 1.2 취약점과 TLS 1.3 개선사항"
date: 2026-07-11T11:38:00+09:00
tags: ["네트워크", "TLS", "핸드셰이크", "보안통신", "PFS", "서브노트"]
draft: false
---

# TLS 1.2 취약점과 TLS 1.3 개선사항 서브노트

> **두음 머리에 박기 🧠**
> - **레·핸·얼** (TLS 3대 프로토콜 구성: 데이터 분할·암호화 **레**코드 Record, 키 협상 **핸**드셰이크 Handshake, 오류전송 **얼**러트 Alert)
> - **이·이·제** (TLS 1.3 3대 개선 축: 암호스위트 제한 **E**CDHE 강제, 완전전방향비밀성 **E**CDHE 기반 PFS, 협상속도 **1**-RTT 단축)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **TLS(Transport Layer Security) 1.2 취약점과 1.3 개선 사항** |
| **정의** | 인터넷 통신의 기밀성·무결성·인증을 보장하는 보안 프로토콜로, TLS 1.2는 약한 암호 스위트와 2-RTT 핸드셰이크로 POODLE·BEAST 등 공격에 노출되어, RFC 8446 기반 TLS 1.3(1-RTT, 강제 PFS)로의 전환이 권고됨 |
| **키워드** | Record/Handshake/Alert Protocol, ECDHE, PFS(전방향비밀성), AES-GCM, ChaCha20-Poly1305, 1-RTT/0-RTT |
| **개념도** | **[ TLS 1.2 vs 1.3 핸드셰이크 비교 ]**<br>`TLS 1.2 (2-RTT)`<br>`Client → ClientHello`<br>`Server → ServerHello + Cert + ServerHelloDone`<br>`Client → ClientKeyExchange + ChangeCipherSpec + Finished`<br>`Server → ChangeCipherSpec + Finished`<br>&nbsp;&nbsp;&nbsp;&nbsp;`↓`<br>`TLS 1.3 (1-RTT)`<br>`Client → ClientHello(키 공유 포함)`<br>`Server → ServerHello + EncryptedExtensions + Cert + Finished`<br>`Client → Finished → 애플리케이션 데이터 전송(재연결 시 0-RTT)` |
| **구성요소** | 1. **Record Protocol**: 데이터 분할·암호화·MAC 처리<br>2. **Handshake Protocol**: 키 협상, 인증서 교환, 암호 스위트 합의<br>3. **Alert Protocol**: 오류·경고 메시지 전송<br>4. **Change Cipher Spec Protocol**: TLS 1.2에만 존재하는 암호화 전환 신호<br>5. **전방향 비밀성(PFS)**: 세션 키 유출 시에도 과거 트래픽 복호화를 불가능하게 하는 성질, TLS 1.3은 ECDHE 강제로 보장 |
| **비교** | **TLS 1.2 취약점**<br>- 암호 스위트: RC4·3DES·MD5 등 취약 알고리즘 허용<br>- 키 교환: RSA 키 교환(전방향 비밀성 없음)<br>- 핸드셰이크: 평문 전송 구간 존재, 재협상 공격 가능<br>- 협상 속도: 2-RTT<br><br>**TLS 1.3 개선**<br>- 암호 스위트: AES-GCM·ChaCha20-Poly1305만 허용<br>- 키 교환: ECDHE만 허용(완전 전방향 비밀성)<br>- 핸드셰이크: 전체 암호화, 재협상 제거<br>- 협상 속도: 1-RTT(재연결 0-RTT) |
| **차별화** | **레거시 프로토콜 폐기 및 전방향 비밀성 강제 전환 전략**<br>1. **약한 암호 스위트 단계적 폐기**: 금융감독원 등 국내 보안 기준은 TLS 1.0/1.1 사용을 전면 금지하고, TLS 1.2에서도 취약 암호 스위트(RC4/3DES) 사용을 금지하며 TLS 1.3 우선 적용을 권고.<br>2. **ECDHE 강제를 통한 PFS 확보**: RSA 키 교환 방식을 제거하고 ECDHE(타원곡선 디피-헬만)만 허용함으로써, 장기 개인키가 유출되더라도 과거 세션의 기밀성이 보존되도록 설계.<br>3. **응용 계층 보안과의 연계**: HTTPS 기반 스트리밍(HLS/DASH)·API 통신 등 상위 응용에서 TLS 1.3을 전송 보안 기본값으로 강제하여, 핸드셰이크 지연을 줄이면서 종단간 보안 수준을 통일. |
