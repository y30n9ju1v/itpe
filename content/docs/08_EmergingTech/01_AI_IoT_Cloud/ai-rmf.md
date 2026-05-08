---
title: "AI RMF (AI 위험관리 프레임워크)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "최신기술", "AI", "AI RMF", "NIST", "위험관리"]
draft: false
exam: "138회"
---

## 개요

AI RMF(AI Risk Management Framework)는 미국 국립표준기술연구소(NIST)가 2023년 발행한 AI 시스템의 위험을 식별·평가·관리하기 위한 자발적 프레임워크다. AI 신뢰성 확보와 책임 있는 AI 개발·배포를 지원하는 것이 목적이다.

## 핵심 내용

### 4가지 핵심 구조 (Core Functions)

| 구조 | 설명 |
|------|------|
| **GOVERN (거버넌스)** | AI 위험관리 문화·정책·책임 체계 수립. 조직 전반에 걸친 AI 위험 관리 기반 마련 |
| **MAP (식별)** | AI 시스템의 맥락, 위험 범주, 영향 범위 파악 |
| **MEASURE (측정)** | 식별된 위험을 분석·평가·우선순위화 |
| **MANAGE (관리)** | 위험 대응·모니터링·잔존 위험 처리 |

> GOVERN이 나머지 3개 함수(MAP·MEASURE·MANAGE)의 기반 역할을 한다.

### 7가지 신뢰 가능한 AI 특성 (Trustworthy AI Properties)

1. **안전성(Safe)** — 의도치 않은 피해 방지
2. **보안성(Secure & Resilient)** — 사이버 공격·오용에 대한 견고성
3. **명시적 설명 가능성(Explainable & Interpretable)** — 결정 과정의 투명한 설명
4. **책무성(Accountable & Transparent)** — 행위자와 시스템 책임 명확화
5. **공정성(Fair with Bias Managed)** — 차별 없는 공정한 처리
6. **프라이버시 보호(Privacy Enhanced)** — 개인정보 보호 내재화
7. **신뢰성(Valid & Reliable)** — 일관되고 검증된 성능

## 실무 적용 예시

공공기관이 AI 기반 민원 자동응답 시스템을 도입할 때, GOVERN 단계에서 AI 책임자를 지정하고, MAP 단계에서 편향 발생 가능 시나리오를 식별하며, MEASURE/MANAGE 단계에서 정기 감사 체계를 수립한다.

## 출제 포인트

- 4가지 핵심 구조의 이름과 역할을 정확히 서술
- GOVERN이 나머지 3개의 기반임을 강조
- 7가지 특성은 약어 없이 한국어로 설명하되 각 특성의 의미를 한 줄씩 서술
- ISO/IEC 42001과의 차이점(자발적 vs 인증 기반) 비교 가능

## 연관 개념

- [ISO/IEC 42001]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/iso-iec-42001" >}}) — AI 관리시스템 국제 인증 표준
- [프롬프트 인젝션]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/prompt-injection" >}}) — AI 보안 위협의 대표 사례
- [모델 전도 공격]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/model-inversion-attack" >}}) — AI 프라이버시 위협
- AI 윤리 — AI RMF의 공정성·책무성과 연결

## 참고 기출

- 138회 1교시 1번 (PEIM)
