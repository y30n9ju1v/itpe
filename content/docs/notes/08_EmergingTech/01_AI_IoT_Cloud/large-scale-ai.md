---
title: "초거대 AI (Large-Scale AI / Foundation Model)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "최신기술", "AI", "초거대AI", "LLM", "파운데이션모델", "공공AI"]
draft: false
exam_peim: ["137회"]
---

## 개요

초거대 AI(Large-Scale AI)는 수천억 개 이상의 파라미터를 보유하고 대규모 데이터로 학습된 범용 AI 모델로, 다양한 태스크에 파인튜닝 없이 또는 최소한의 적응으로 활용 가능한 파운데이션 모델(Foundation Model)이다. GPT-4, Claude, Gemini, HyperCLOVA X 등이 대표적이다.

## 핵심 내용

### 개념과 구성요소

**특징**:
- **스케일**: 수천억~수조 파라미터
- **범용성**: 언어·이미지·코드·음성 다중 모달 처리
- **창발성(Emergence)**: 일정 규모 이상에서 예상치 못한 능력 발현
- **지시 따르기(Instruction Following)**: 자연어 지시로 다양한 태스크 수행

**구성요소**:

| 구성요소 | 설명 |
|----------|------|
| **파운데이션 모델** | 대규모 사전학습 모델 (GPT-4, Claude 등) |
| **프롬프트 엔지니어링** | 모델 능력을 끌어내는 입력 설계 |
| **파인튜닝** | 도메인 특화 데이터로 추가 학습 (SFT, RLHF) |
| **RAG** | 외부 지식베이스와 결합하여 최신 정보 반영 |
| **벡터 데이터베이스** | 임베딩 기반 의미 검색 지원 |
| **오케스트레이션** | LangChain, LlamaIndex 등 에이전트 조율 |

### 기술 요소

| 기술 | 역할 |
|------|------|
| **트랜스포머 아키텍처** | Self-Attention 기반 병렬 학습 |
| **RLHF** (Reinforcement Learning from Human Feedback) | 인간 피드백으로 안전·유용성 정렬 |
| **MoE** (Mixture of Experts) | 파라미터 효율적 확장 |
| **양자화(Quantization)** | 모델 경량화 (FP32→INT8) |
| **분산 학습** | 모델 병렬·데이터 병렬로 초대형 모델 학습 |

### 공공부문 초거대 AI 도입 절차 (가이드라인 2.0)

1. **도입 필요성 검토**: 업무 적합성, 법적 검토, ROI 분석
2. **AI 서비스 유형 선정**: 자체 구축 / 클라우드 SaaS / 온프레미스
3. **데이터 준비**: 학습·평가 데이터 정제, 개인정보 처리
4. **시범 도입(PoC)**: 소규모 실증, 성능·보안 검증
5. **본격 도입**: 시스템 통합, 직원 교육
6. **운영·모니터링**: 성능 모니터링, 편향 점검, 지속 개선

## 출제 포인트

- 초거대 AI의 정의와 파운데이션 모델·창발성 개념
- 구성요소 6가지(파운데이션 모델, 프롬프트, 파인튜닝, RAG, 벡터DB, 오케스트레이션)
- 기술요소(트랜스포머, RLHF, MoE, 양자화) 서술
- 공공부문 도입 절차 6단계

## 연관 개념

- [Transformer/MoE]({{< relref "/docs/notes/08_EmergingTech/01_AI_IoT_Cloud/transformer-moe" >}}) — 초거대 AI의 핵심 아키텍처
- [벡터 데이터베이스/HNSW]({{< relref "/docs/notes/03_DataProcessing/04_DataMining/vector-database-hnsw-ivf" >}}) — RAG 구현 기반
- [프롬프트 인젝션]({{< relref "/docs/notes/06_InfoSecurity/01_SecurityTech/prompt-injection" >}}) — 초거대 AI 보안 위협
- [AI 거버넌스]({{< relref "/docs/notes/01_InfoStrategy/03_AI_Ethics/ai-governance" >}}) — 공공 AI 거버넌스 체계

## 참고 기출

- 137회 2교시 4번 (PEIM)
