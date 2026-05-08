---
title: "TLS 1.2 취약점과 TLS 1.3 개선 사항"
date: 2026-05-08T23:38:40+09:00
tags: ["peim", "컴퓨터시스템및정보통신", "네트워크프로토콜", "TLS", "핸드셰이크", "보안통신", "암호화"]
draft: false
exam_peim: "136회"
---

## 개요

TLS(Transport Layer Security)는 인터넷 통신의 기밀성·무결성·인증을 보장하는 보안 프로토콜이다. TLS 1.2는 구조적 취약점과 약한 암호 스위트 지원으로 인해 POODLE·BEAST 등 공격에 노출될 수 있어, RFC 8446으로 표준화된 TLS 1.3으로의 전환이 권고된다.

## 핵심 내용

**TLS 프로토콜 구조**
- Record Protocol: 데이터 분할·암호화·MAC 처리
- Handshake Protocol: 키 협상, 인증서 교환, 암호 스위트 합의
- Alert Protocol: 오류·경고 메시지 전송
- Change Cipher Spec Protocol (TLS 1.2만 해당)

**TLS 1.2 핸드셰이크 (2-RTT)**
```
Client → Server: ClientHello (랜덤, 암호 스위트 목록)
Server → Client: ServerHello + Certificate + ServerHelloDone
Client → Server: ClientKeyExchange + ChangeCipherSpec + Finished
Server → Client: ChangeCipherSpec + Finished
→ 총 2 RTT 후 애플리케이션 데이터 전송
```

**TLS 1.3 핸드셰이크 (1-RTT, 0-RTT 지원)**
```
Client → Server: ClientHello (키 공유 포함)
Server → Client: ServerHello + EncryptedExtensions + Certificate + Finished
Client → Server: Finished
→ 총 1 RTT, 재연결 시 0-RTT 가능
```

**TLS 1.2 보안 취약점 vs TLS 1.3 개선사항**

| 구분 | TLS 1.2 취약점 | TLS 1.3 개선 |
|------|---------------|-------------|
| 암호 스위트 | RC4·3DES·MD5 등 취약 알고리즘 허용 | AES-GCM·ChaCha20-Poly1305만 허용 |
| 키 교환 | RSA 키 교환 (전방향 비밀성 없음) | ECDHE만 허용 (완전 전방향 비밀성) |
| 핸드셰이크 | 평문 전송 구간 존재 | 핸드셰이크 전체 암호화 |
| 협상 속도 | 2-RTT | 1-RTT (재연결 0-RTT) |
| 재협상 | 재협상 공격 가능 | 재협상 제거 |
| 인증서 | 평문 노출 가능 | 암호화된 EncryptedExtensions |

**전방향 비밀성 (Perfect Forward Secrecy)**
- 세션 키가 유출되어도 과거 트래픽 복호화 불가
- TLS 1.3은 ECDHE 강제로 PFS 보장

## 실무 적용 예시

금융감독원 IT 보안 기준은 TLS 1.0/1.1 사용 금지를 명시하며, 2025년부터 TLS 1.2도 취약 암호 스위트 사용 금지 및 TLS 1.3 우선 적용을 권고하고 있다.

## 출제 포인트

- TLS 핸드셰이크 과정 (1.2 2-RTT vs 1.3 1-RTT)
- TLS 1.2 취약점 목록과 1.3에서 각각 어떻게 해결되었는지
- 전방향 비밀성의 개념과 ECDHE 적용

## 연관 개념

- [타원곡선 암호 ECC]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/ecc-elliptic-curve-cryptography" >}}) — TLS 1.3의 ECDHE 기반
- [암호문 공격 유형]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/ciphertext-attack" >}}) — POODLE·BEAST 공격 배경

## 참고 기출

- 136회 2교시 6번 (PEIM)
