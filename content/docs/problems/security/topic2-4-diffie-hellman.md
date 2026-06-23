---
title: "디피-헬만 알고리즘(Diffie-Hellman Algorithm)"
date: 2026-06-23T20:29:59+09:00
tags: ["보안", "암호화", "디피헬만", "키교환", "핵토200"]
topic_no1: 2
topic_no2: 4
topic_large: "암호화 알고리즘"
topic_small: "디피-헬만"
exam_ref: "128"
exam_type: "응용"
question_no: 1
---

## 문제

디피-헬만 알고리즘(Diffie-Hellman Algorithm)

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 암호화 알고리즘 |
| 토픽(소) | 디피-헬만 |
| 출제 | 128회 |
| 유형 | 응용 |
| 번호 | 1 |

## 해설

### 출제 배경 및 의도

디피-헬만은 공개 채널에서 안전하게 공유 비밀키를 교환하는 최초의 공개키 프로토콜이다. 이산 대수 문제 기반의 수학적 원리, 중간자 공격 취약점, 현대 DH 변종(ECDH, DHE)까지 서술할 수 있어야 한다.

### 1. 디피-헬만 알고리즘 개요

- **제안**: 1976년 Whitfield Diffie와 Martin Hellman
- **원리**: 이산 대수 문제(Discrete Logarithm Problem)의 계산적 어려움 기반
  - `g^x mod p`는 계산 가능하지만, `y = g^x mod p`에서 `x`를 역산하기 매우 어려움
- **목적**: 비밀 채널 없이 공개 채널에서 공유 비밀키 교환

### 2. 동작 원리

```
공개 파라미터: 소수 p, 생성자 g (양측 공개)

Alice                              Bob
개인키: a 선택                      개인키: b 선택
A = g^a mod p ────────────────▶    B = g^b mod p
              ◀────────────────    
              
공유 비밀키 계산:
Alice: K = B^a mod p = g^(ab) mod p
Bob:   K = A^b mod p = g^(ab) mod p
→ 동일한 K 도출
```

### 3. 특징 및 취약점

| 항목 | 내용 |
|------|------|
| 장점 | 공개 채널에서 키 교환 가능, 중간자가 A·B를 알아도 K 계산 불가 |
| 취약점 | 중간자 공격(MITM): 인증 메커니즘 없음 → 인증서 결합 필요 |
| 해결 | 인증된 DH(DHE with certificates), Station-to-Station 프로토콜 |

### 4. 현대 DH 변종

| 변종 | 설명 | 특징 |
|------|------|------|
| DHE(DH Ephemeral) | 매 세션마다 새 DH 키 쌍 생성 | PFS(Perfect Forward Secrecy) 보장 |
| ECDH(Elliptic Curve DH) | 타원곡선 기반 DH | 더 짧은 키로 동등한 보안 강도 |
| ECDHE | 타원곡선 + 임시 키 | TLS 1.3 기본 키 교환 방식 |

- **TLS 1.3**: RSA 키 교환 제거, ECDHE만 허용 → PFS 필수화.  "끝"

### 실무 제언

**PFS 적용의 중요성**
- **챌린지**: RSA 기반 키 교환은 서버 개인키가 나중에 유출되면 과거 모든 세션의 암호가 풀린다.
- **제언**: TLS 1.3에서 ECDHE를 적용하면 세션별 임시 키를 사용하므로 과거 세션의 PFS를 보장한다. 레거시 TLS 1.2 서버도 DHE/ECDHE 사이퍼 스위트를 우선 적용하도록 서버를 재설정해야 한다.
