---
title: "AI 거버넌스 (AI Governance)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "정보전략및관리", "AI윤리", "AI거버넌스", "책임AI", "AI정책"]
draft: false
exam: "137회"
---

## 개요

AI 거버넌스(AI Governance)는 AI 시스템의 개발·배포·운영 전반에 걸쳐 책임성·투명성·공정성·안전성을 확보하기 위한 정책·규칙·프로세스·기술 체계의 총합이다. AI의 잠재적 위험을 최소화하고 신뢰할 수 있는 AI 생태계를 조성하는 것이 목적이다.

## 핵심 내용

### AI 거버넌스의 필요성

- AI 편향·차별로 인한 사회적 피해 증가
- 자율 의사결정 시스템의 책임 소재 불명확
- 딥페이크·허위정보 등 AI 악용 위험
- EU AI Act, 인공지능기본법 등 각국 규제 강화

### AI 거버넌스 핵심 원칙

| 원칙 | 내용 |
|------|------|
| **투명성(Transparency)** | AI 의사결정 과정의 설명 가능성 확보 |
| **책임성(Accountability)** | AI 개발·운영자의 명확한 책임 체계 |
| **공정성(Fairness)** | 데이터 편향 제거, 차별 없는 결과 |
| **안전성(Safety)** | 의도치 않은 피해 방지, 안전 장치 |
| **프라이버시(Privacy)** | 개인정보 보호 내재화 |
| **인간 감독(Human Oversight)** | 고위험 AI의 인간 최종 판단 권한 |

### AI 거버넌스 구성 요소

**① 정책·규제 체계**
- 인공지능기본법 (국내, 2026.1.22 시행)
- EU AI Act (위험 기반 규제)
- NIST AI RMF (자발적 프레임워크)

**② 조직 거버넌스**
- AI 윤리위원회 설치
- AI 책임자(CAIO: Chief AI Officer) 지정
- AI 사용 정책·가이드라인 수립

**③ 기술적 거버넌스**
- 모델 카드(Model Card): AI 모델 특성·한계 문서화
- 설명 가능 AI(XAI): LIME, SHAP 등
- AI 감사(AI Audit): 정기적 편향·성능 점검

**④ 운영 거버넌스**
- AI 생명주기 관리 (MLOps)
- 지속적 모니터링 및 재학습
- 사고 대응 절차

### 고위험 AI vs 저위험 AI 거버넌스

EU AI Act 기준:
- **고위험**: 의료기기, 자율주행, 채용 심사 → 사전 적합성 평가, 인간 감독 의무
- **저위험**: 챗봇, 추천 시스템 → 투명성 의무만 적용

## 출제 포인트

- AI 거버넌스의 정의와 필요성 (피해 사례 포함)
- 6대 원칙 서술
- 정책·조직·기술·운영 4개 구성 요소로 체계화
- AI RMF, ISO 42001, EU AI Act, 인공지능기본법과 연계

## 연관 개념

- [AI RMF]({{< relref "/docs/peim/08_EmergingTech/01_AI_IoT_Cloud/ai-rmf" >}}) — AI 위험관리 프레임워크
- [ISO/IEC 42001]({{< relref "/docs/peim/08_EmergingTech/01_AI_IoT_Cloud/iso-iec-42001" >}}) — AI 관리시스템 인증
- [인공지능기본법]({{< relref "/docs/peim/08_EmergingTech/03_Regulations_Policies/ai-basic-law" >}}) — 국내 AI 거버넌스 법적 근거
- [AI 신뢰성 검인증(CAT)]({{< relref "/docs/peim/01_InfoStrategy/03_AI_Ethics/ai-cat-certification" >}}) — 기술적 거버넌스 수단

## 참고 기출

- 137회 1교시 6번
