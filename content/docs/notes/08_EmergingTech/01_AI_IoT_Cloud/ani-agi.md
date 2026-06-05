---
title: "AGI 관점에서 ANI의 필요성"
date: 2026-05-09T00:00:00+09:00
tags: ["peim", "최신기술", "AI", "AGI", "ANI", "범용인공지능", "특화인공지능"]
draft: false
exam_peim: ["135회"]
---

## 개요

ANI(Artificial Narrow Intelligence)는 특정 과업에 특화된 AI이며, AGI(Artificial General Intelligence)는 인간 수준의 범용 지능을 갖춘 AI다. AGI 달성 과정에서 ANI는 핵심 빌딩블록이자 실용적 가치를 제공하는 필수 단계다.

## 핵심 내용

### AI 발전 단계

| 단계 | 개념 | 예시 |
|------|------|------|
| **ANI** | 단일 과업 특화, 해당 영역 초인간 수준 | ChatGPT, AlphaGo, 이미지 분류 |
| **AGI** | 인간과 동등한 범용 인지 능력 | (아직 미실현) |
| **ASI** | 인간을 초월하는 초지능 | (이론적 개념) |

### AGI 측면에서 ANI의 필요성

**1. 전이학습 기반 제공**
- ANI에서 학습된 표현(Feature)은 AGI 구현의 기반
- GPT 계열: 언어 ANI → 범용 추론 능력 획득

**2. 모듈형 AGI 구성**
- AGI = 다수의 ANI 모듈 통합 (지각·추론·계획·실행)
- 멀티모달 AI: 비전 ANI + 언어 ANI → 통합 지능

**3. 실용적 가치 창출**
- AGI 미완성 상황에서 ANI가 의료·금융·제조 현장 실용 가치 제공
- 연구 투자 재원 확보

**4. 안전성 검증 단계**
- ANI 단계에서 AI 정렬(Alignment)·편향·설명가능성 문제 해결
- 점진적 능력 확장으로 위험 통제

**5. 벤치마크 및 평가 체계 구축**
- ANI 성능 측정 기준이 AGI 목표 설정의 기반
- 튜링 테스트, 멀티태스크 벤치마크(BIG-bench) 등

### ANI의 한계와 AGI 필요성

| ANI 한계 | AGI의 해결 방향 |
|---------|--------------|
| 과업 외 맥락 이해 불가 | 범용 상식 추론 |
| 분포 외(OOD) 데이터 취약 | 일반화 능력 |
| 학습 데이터 의존 | 소수샷 학습·지속 학습 |

## 출제 포인트

- ANI→AGI→ASI 단계 구분
- AGI 구현에서 ANI가 필요한 5가지 이유
- 현재 LLM(GPT-4, Claude)의 위치: 강한 ANI, 약한 AGI 경계

## 연관 개념

- [멀티모달 LLM]({{< relref "/docs/notes/08_EmergingTech/01_AI_IoT_Cloud/multimodal-llm" >}}) — ANI의 실현 형태
- [AI RMF]({{< relref "/docs/notes/08_EmergingTech/01_AI_IoT_Cloud/ai-rmf" >}}) — AGI 전환 과정의 위험 관리
- [AI 거버넌스]({{< relref "/docs/notes/01_InfoStrategy/03_AI_Ethics/ai-governance" >}}) — AGI 시대 윤리·규제

## 참고 기출

- 135회 1교시 13번 (PEIM)
