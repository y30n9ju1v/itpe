---
title: "타원곡선 암호 (ECC, Elliptic Curve Cryptography)"
date: 2026-05-08T23:38:40+09:00
tags: ["peim", "정보보안", "보안기술", "ECC", "타원곡선암호", "공개키암호", "ECDHE", "양자내성암호"]
draft: false
exam_peim: "136회"
---

## 개요

ECC(Elliptic Curve Cryptography)는 타원곡선 위의 점 연산을 기반으로 하는 공개키 암호 시스템이다. RSA 대비 훨씬 짧은 키 길이로 동등한 보안 강도를 제공하여, TLS·블록체인·모바일 환경에서 광범위하게 활용된다.

## 핵심 내용

**타원곡선 수학적 기반**
- 타원곡선 방정식: y² = x³ + ax + b (mod p)
- 이산 로그 문제(ECDLP): P = kG에서 k를 계산하는 것이 계산상 불가능
  - P: 공개키 (타원곡선 위의 점)
  - G: 기저점 (곡선 상수)
  - k: 개인키 (랜덤 정수)

**RSA vs ECC 키 길이 비교**

| 보안 강도 | RSA 키 길이 | ECC 키 길이 | ECC 효율 |
|----------|------------|------------|---------|
| 80비트 | 1024비트 | 160비트 | 6.4배 |
| 128비트 | 3072비트 | 256비트 | 12배 |
| 256비트 | 15360비트 | 521비트 | 29배 |

**ECC 기반 알고리즘**
- ECDH (Elliptic Curve Diffie-Hellman): 키 교환
- ECDHE: ECDH + Ephemeral (일회성 키 → 전방향 비밀성)
- ECDSA (Elliptic Curve DSA): 디지털 서명
- EdDSA (Ed25519): 고성능 서명 알고리즘

**활용 분야**
- TLS 1.3: ECDHE 키 교환 기본 방식
- 비트코인·이더리움: secp256k1 곡선 기반 서명
- 스마트카드·IoT: 제한된 자원에서 고보안 암호화

**양자 컴퓨팅 위협**
- Shor 알고리즘으로 ECDLP 문제도 해결 가능 → ECC도 양자 취약
- 대응: NIST 후양자암호(PQC) 표준화 (CRYSTALS-Kyber, CRYSTALS-Dilithium)

## 출제 포인트

- ECC의 수학적 기반 (ECDLP)과 RSA 대비 키 길이 효율성
- ECDH·ECDHE·ECDSA의 차이와 용도
- TLS 1.3에서 ECC 활용 (ECDHE)

## 연관 개념

- [TLS 1.2 취약점과 TLS 1.3]({{< relref "/docs/05_Networks/01_Network_Protocol/tls-1-2-vs-1-3" >}}) — ECDHE 기반 TLS 1.3
- [해시함수와 Rainbow Table]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/hash-function-rainbow-table" >}}) — 암호 시스템의 또 다른 핵심 요소

## 참고 기출

- 136회 1교시 12번 (PEIM)
