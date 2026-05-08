---
title: "범용 AI 위험관리 프레임워크 (General-Purpose AI Risk Framework)"
date: 2026-05-08T23:38:40+09:00
tags: ["peim", "최신기술", "AI", "범용AI", "GPAI", "위험관리", "AI법", "EU AI Act"]
draft: false
exam_peim: "136회"
---

## 개요

범용 AI(GPAI, General-Purpose AI)는 특정 목적이 아닌 광범위한 작업에 적용 가능한 AI 시스템으로, GPT·Gemini·Claude 등 대형 언어모델이 대표적이다. EU AI Act에서 GPAI를 별도 규제 범주로 분류하며, 시스템적 위험(Systemic Risk)을 가진 GPAI에 대해 강화된 위험관리 의무를 부과한다.

## 핵심 내용

**GPAI 정의와 특성**
- 정의: 다수의 작업을 수행할 수 있도록 훈련된 AI 모델 (범용성)
- 특성: 광범위한 적용 가능성, 예측 불가한 사용 사례, 간접적 사회 영향

**EU AI Act의 GPAI 규제 구조**
- 일반 GPAI: 투명성 요건 (기술 문서, 저작권 정책 공개)
- 시스템적 위험 GPAI: 학습에 10²⁵ FLOPs 이상 사용한 모델
  - 모델 평가, 적대적 테스트, 중대 사고 보고, 사이버보안 조치 의무

**GPAI 위험관리 프레임워크 구성요소**

| 구성요소 | 내용 |
|---------|------|
| 위험 식별 | 잠재적 오용 시나리오, 편향·환각 위험 목록화 |
| 위험 평가 | 발생 가능성·영향도 기반 위험 점수화 |
| 위험 완화 | 안전 필터, 사용 정책, 기술적 안전장치 |
| 모니터링 | 배포 후 지속적 성능·안전성 추적 |
| 거버넌스 | 책임 있는 AI 담당 조직, 인시던트 대응 절차 |

**NIST AI RMF와의 관계**
- NIST AI RMF의 Govern-Map-Measure-Manage 4단계 사이클을 GPAI에도 적용
- 국내 AI 안전연구소도 GPAI 안전 기준 개발 중

## 출제 포인트

- GPAI의 정의와 기존 특수목적 AI와의 차이
- EU AI Act의 GPAI 규제 체계 (시스템적 위험 기준)
- GPAI 위험관리의 주요 단계

## 연관 개념

- [AI RMF]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/ai-rmf" >}}) — NIST AI 위험관리 프레임워크
- [ISO/IEC 42001]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/iso-iec-42001" >}}) — AI 경영시스템 표준
- [에이전틱 AI]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/agentic-ai" >}}) — GPAI의 자율행동 형태

## 참고 기출

- 136회 1교시 2번 (PEIM)
