---
title: "암호문 공격 (Ciphertext Attack)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "정보보안", "보안기술", "암호문공격", "암호분석", "CPA", "CCA"]
draft: false
exam_peim: "137회"
---

## 개요

암호문 공격(Ciphertext Attack)은 공격자가 암호문을 분석하여 평문이나 암호 키를 복원하려는 암호해독(Cryptanalysis) 공격의 총칭이다. 공격자가 가진 정보의 수준에 따라 4가지 유형으로 분류된다.

## 핵심 내용

### 암호문 공격 4가지 유형

| 유형 | 공격자 보유 정보 | 난이도 |
|------|----------------|--------|
| **암호문 단독 공격 (COA)** Ciphertext-Only Attack | 암호문만 보유 | 가장 어려움 |
| **기지 평문 공격 (KPA)** Known-Plaintext Attack | 평문+암호문 쌍 일부 보유 | 중간 |
| **선택 평문 공격 (CPA)** Chosen-Plaintext Attack | 원하는 평문의 암호문 얻기 가능 | 쉬움 |
| **선택 암호문 공격 (CCA)** Chosen-Ciphertext Attack | 원하는 암호문의 평문 얻기 가능 | 가장 쉬움 |

### 각 유형 상세

**COA (암호문 단독)**:
- 공격자는 암호문만 관찰
- 빈도 분석(영어에서 'e'가 가장 많음), 패턴 분석으로 해독 시도
- 고전 암호(카이사르, 비즈네르)에 효과적

**KPA (기지 평문)**:
- 평문-암호문 쌍을 일부 알고 있는 경우
- 2차대전 에니그마 해독이 대표적 사례
- 선형 암호분석에 활용

**CPA (선택 평문)**:
- 암호화 오라클(Oracle)에 접근 가능 시나리오
- 공개키 암호에서 기본 가정 (공개키 보유자라면 누구나 암호화 가능)
- IND-CPA(불구별성): CPA에 안전한 암호의 보안 기준

**CCA (선택 암호문)**:
- 복호화 오라클에 접근 가능 (가장 강력한 공격 모델)
- 패딩 오라클 공격 (CBC 모드 PKCS#7 패딩 취약점)
- RSA-OAEP, AES-GCM이 CCA 안전

### 현대 암호의 안전성 기준

안전한 암호는 **IND-CCA2** (적응적 선택 암호문 공격에 불구별) 수준을 목표로 함.

## 출제 포인트

- 4가지 유형을 공격자 보유 정보 기준으로 비교표 작성
- COA → KPA → CPA → CCA 순으로 공격자 능력이 강해짐
- 패딩 오라클 공격과 CCA 연결
- IND-CPA/CCA 보안 기준 언급

## 연관 개념

- [해시 함수/Rainbow Table]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/hash-function-rainbow-table" >}}) — 암호 공격의 다른 유형
- [PET]({{< relref "/docs/06_InfoSecurity/06_PrivacyProtection/pet-privacy-enhancing-technology" >}}) — 동형암호의 CPA 안전성

## 참고 기출

- 137회 1교시 4번 (PEIM)
