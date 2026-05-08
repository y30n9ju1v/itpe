---
title: "CC (Common Criteria, 공통평가기준)"
date: 2026-05-08T23:38:40+09:00
tags: ["peim", "정보보안", "보안인증", "CC", "공통평가기준", "EAL", "보안기능요건", "보안보증요건"]
draft: false
exam_peim: "136회"
---

## 개요

CC(Common Criteria, ISO/IEC 15408)는 IT 제품과 시스템의 보안 기능을 평가하기 위한 국제 표준이다. 보안기능요건(SFR)과 보안보증요건(SAR)을 체계적으로 정의하고, 평가보증등급(EAL 1~7)으로 보안 수준을 인증한다. 국가 간 상호인정협정(CCRA)을 통해 한 번의 평가로 여러 나라에서 인정받을 수 있다.

## 핵심 내용

**CC 구조**

| 문서 | 내용 |
|------|------|
| Part 1: 소개와 일반모델 | CC의 목적, 개념, 적용 모델 |
| Part 2: 보안기능요건 (SFR) | 제품이 제공해야 할 보안 기능 (클래스·계열·요소) |
| Part 3: 보안보증요건 (SAR) | 제품의 보안성 신뢰 수준 (개발·테스팅·취약점 분석) |

**주요 개념**

| 개념 | 설명 |
|------|------|
| TOE (Target of Evaluation) | 평가 대상 제품/시스템 |
| PP (Protection Profile) | 특정 제품군의 보안요건 명세서 (사용자 관점) |
| ST (Security Target) | 특정 TOE의 보안요건 명세서 (개발자 관점) |
| EAL (Evaluation Assurance Level) | 평가보증등급 1~7 |

**EAL 등급**

| EAL | 명칭 | 적용 대상 |
|-----|------|---------|
| EAL1 | 기능 테스트 | 일반 소프트웨어 |
| EAL2 | 구조 테스트 | 저위험 환경 |
| EAL3 | 체계적 테스트 | 범용 상용 제품 |
| EAL4 | 방법론적 설계·테스트 | 상용 보안 제품 (방화벽·VPN) |
| EAL5~7 | 준형식적·형식적 방법 | 군사·금융 핵심 시스템 |

**국내 적용**
- ITSEC(정보보호제품 보안성 평가) 제도와 연계
- 방화벽·IDS·암호모듈 등 보안 제품 정부 조달 시 CC 인증 필수

## 출제 포인트

- CC의 목적과 PP·ST·TOE·EAL 주요 개념
- EAL 등급별 보증 수준과 적용 사례
- CCRA(상호인정협정)의 의미

## 연관 개념

- [ISMS·ISMS-P]({{< relref "/docs/06_InfoSecurity/04_AdminSecurity/isms-isms-p" >}}) — 정보보호 관리 인증과의 차이
- [소프트웨어 보안 품질]({{< relref "/docs/02_SoftwareEngineering/05_SW_Quality/sw-security-quality" >}}) — CC 기반 제품 보안 평가

## 참고 기출

- 136회 1교시 11번 (PEIM)
