---
title: "해시 함수, Rainbow Table, Hash Salt, Key Stretching"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "정보보안", "보안기술", "해시함수", "레인보우테이블", "솔트", "암호화"]
draft: false
---

## 개요

단방향 해시 함수는 임의 길이 입력을 고정 길이 해시값으로 변환하며 역방향 계산이 불가능한 암호학적 함수다. 그러나 Rainbow Table 공격 등으로 해시 단독 사용의 취약점이 드러나, 현재는 Salt와 Key Stretching을 함께 적용한다.

## 핵심 내용

### 단방향 해시 함수의 문제점

| 문제 | 설명 |
|------|------|
| **사전 공격(Dictionary Attack)** | 흔한 패스워드를 미리 해시하여 비교 |
| **무차별 대입(Brute Force)** | 모든 조합의 해시를 계산하여 비교 |
| **Rainbow Table 공격** | 해시-평문 쌍 사전표로 역추적 |
| **충돌(Collision)** | 서로 다른 입력이 같은 해시 생성 (MD5, SHA-1 취약) |
| **동일 입력 동일 출력** | 같은 패스워드는 항상 같은 해시 → 패턴 노출 |

### Rainbow Table

**개념**: 평문과 해시값의 쌍을 체인(Chain) 구조로 압축 저장한 조회 테이블

**동작 원리**:
```
평문 → [해시 함수] → 해시값 → [환원 함수(Reduction)] → 평문 → ... (반복)
```
- 완전한 해시-평문 쌍이 아닌 체인 형태로 저장 → 저장 공간 대폭 절약
- 공격 시: 탈취한 해시를 체인에서 역추적

**특징**: 사전 계산 후 공격이 매우 빠름 (시간-공간 트레이드오프)

### Hash Salt (해시 솔트)

**개념**: 해시 계산 전 패스워드에 랜덤 데이터(Salt)를 추가하여 Rainbow Table을 무력화

```
Hash(Password + Salt) → 저장: {Salt, HashValue}
검증: 저장된 Salt + 입력 패스워드 재해시 후 비교
```

**효과**: 같은 패스워드도 다른 Salt → 다른 해시 → Rainbow Table 적용 불가

### Key Stretching

**개념**: 해시 연산을 수천~수만 회 반복하여 계산 비용을 의도적으로 증가시키는 기법

- **PBKDF2**: 반복 횟수 지정 (NIST 권장, 최소 10만 회)
- **bcrypt**: 비용 인수(cost factor)로 반복 수 조절, 자체 Salt 포함
- **scrypt, Argon2**: 메모리 집약적으로 GPU 병렬 공격 저항

**효과**: 공격자의 초당 시도 횟수를 수천 배 감소

### 해시 함수의 활용

| 활용 분야 | 설명 | 알고리즘 |
|-----------|------|---------|
| 패스워드 저장 | Salt + Key Stretching | bcrypt, Argon2 |
| 무결성 검증 | 파일·메시지 변조 탐지 | SHA-256, SHA-3 |
| 디지털 서명 | 서명 대상 데이터 해시 | SHA-256 (RSA/ECDSA) |
| 블록체인 | 블록 연결, 작업증명(PoW) | SHA-256 |
| MAC(메시지 인증코드) | 무결성 + 인증 | HMAC-SHA256 |

## 출제 포인트

- 단방향 해시의 5가지 문제점 서술
- Rainbow Table 동작 원리(체인, 환원함수) 설명
- Salt의 역할과 Rainbow Table 무력화 메커니즘
- Key Stretching 3가지 알고리즘(bcrypt, PBKDF2, Argon2) 비교
- 해시 활용 4가지 분야

## 연관 개념

- [모델 전도 공격]({{< relref "/docs/peim/06_InfoSecurity/01_SecurityTech/model-inversion-attack" >}}) — 해시 역추론과 유사한 공격 개념
- [PET]({{< relref "/docs/peim/06_InfoSecurity/06_PrivacyProtection/pet-privacy-enhancing-technology" >}}) — 동형암호 등 고급 프라이버시 기술
- 디지털 서명 — 해시 함수 핵심 활용

## 참고 기출

- 138회 4교시 2번
