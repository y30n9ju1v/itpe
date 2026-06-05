---
title: "RLHF와 RAFT — LLM 정렬 학습 파이프라인 비교"
date: 2026-05-29T11:17:52+09:00
tags: ["peim", "최신기술", "AI", "RLHF", "RAFT", "LLM", "파인튜닝", "LLM정렬", "강화학습"]
draft: false
exam_peim: ["139회"]
---

## 개요

RLHF(Reinforcement Learning from Human Feedback)와 RAFT(Retrieval Augmented Fine-Tuning)는 LLM을 사용자 의도에 맞게 정렬(Alignment)하거나 특정 도메인에 적응시키는 학습 파이프라인이다.

## 핵심 내용

### 파인튜닝(Fine-Tuning)과 RAG 개념

| 구분 | 파인튜닝 | RAG |
|------|---------|-----|
| 개념 | 사전훈련 모델의 가중치를 도메인 데이터로 재조정 | 외부 지식베이스에서 관련 문서를 검색·주입하여 생성 |
| 지식 업데이트 | 모델 재훈련 필요 | 지식베이스만 갱신 |
| 비용 | 높음 (GPU 학습) | 낮음 (추론 시 검색) |
| 활용 | 스타일·형식·도메인 적응 | 최신 정보·사실 기반 응답 |

### RLHF 파이프라인

1. **지도 학습(SFT)**: 고품질 인간 시범 데이터로 초기 파인튜닝
2. **보상 모델(RM) 학습**: 인간 선호도 쌍(preferred vs. rejected)으로 보상 함수 학습
3. **PPO 강화학습**: 보상 모델을 피드백으로 LLM 정책 최적화
   - KL 발산 페널티로 기존 모델에서 과도한 이탈 방지

```
SFT → 인간 피드백 수집 → 보상 모델 학습 → PPO 최적화
```

### RAFT 파이프라인 (2가지 독립적 정의)

인공지능 및 LLM 연구 분야에서 **RAFT**는 목적에 따라 완전히 다른 **두 가지 핵심 기법**의 약어로 혼용된다. 기술사 답안 작성 시 이 두 가지 맥락을 모두 서술하면 최고 수준의 가점을 얻을 수 있다.

#### 정의 A: Retrieval-Augmented Fine-Tuning (검색 증강 미세조정)
*   **제안**: UC Berkeley (2024년 3월)
*   **목적**: LLM이 특정 도메인 문서집을 바탕으로 오픈북(RAG) 환경에서 답변할 때, 관련 문서(Oracle)와 노이즈 문서(Distractor)를 분별하여 정확하게 인용(Citation) 및 사실 근거 답변을 하도록 훈련함.
*   **원리**: 학습용 데이터 생성 시 질문에 도움이 되는 골드 문서(Oracle)와 노이즈 문서(Distractor)를 일정 비율로 섞어 프롬프트와 함께 주입하고, 답안 작성 시 반드시 본문 내용을 참조하도록 SFT를 학습시킴.
*   **흐름**: `문서 코퍼스 ➡️ RAG Q&A 생성 ➡️ Oracle/Distractor 혼합 데이터셋 ➡️ SFT 학습`

#### 정의 B: Reward rAnked Fine-Tuning (보상 순위 기반 미세조정)
*   **제안**: Dong et al. (2023년)
*   **목적**: RLHF의 핵심인 PPO(강화학습)의 극심한 학습 불안정성과 높은 자원 소모를 회복하기 위해, **강화학습 없이** 인간 선호도에 정렬(Alignment)된 모델을 만드는 기법.
*   **원리**: 현재 LLM 정책으로부터 대량의 답변 샘플을 생성한 뒤 보상 모델(Reward Model)로 점수를 매겨 최상위(Top-K) 고득점 답변들만 필터링함. 선별된 고품질 데이터만으로 일반 지도학습(SFT)을 반복하는 반복적 오프라인 정렬 방식.
*   **흐름**: `샘플 생성 ➡️ 보상 모델 평가 및 랭킹 ➡️ 최상위 샘플 필터링 ➡️ SFT 학습 및 정책 업데이트`

---

### LLM 최적화 및 정렬 학습 파이프라인 비교 (핵심 요약)

| 기법 | 구분 | 핵심 목적 | 학습 방식 | 비용 및 자원 |
|------|------|-----------|-----------|--------------|
| **SFT** | 지도학습 미세조정 | 작업 형식/스타일 적응 | 인간 작성 고품질 QA 데이터 지도 학습 | 보통 (GPU 자원 필요) |
| **RAG** | 검색 증강 생성 | 최신 지식/사실 정확성 보완 | 학습 없음 (추론 시 외부 DB 실시간 연동) | 낮음 (추론 비용만 발생) |
| **RLHF** | 인간 피드백 강화학습 | 인간 선호도(안전성/무해성) 정렬 | 보상 모델 기반 PPO 알고리즘 최적화 | 매우 높음 (인간 피드백 및 불안정한 RL) |
| **RAFT (정의 A)** | 검색 증강 미세조정 | 도메인 특화 RAG 능력 학습 | 노이즈 문서가 섞인 QA 데이터셋 기반 SFT | 중간 (데이터셋 자동 생성 가능) |
| **RAFT (정의 B)** | 보상 순위 미세조정 | PPO가 배제된 선호도 정렬 | 보상 필터링된 최상위 답변셋 기반 반복 SFT | 중간 (RL 학습 대비 극도로 안정적) |

## 출제 포인트

- **RLHF 3단계 파이프라인**: SFT(지도 학습) ➡️ RM(보상 모델 학습) ➡️ PPO(강화학습 최적화) 단계별 원리 및 주체
- **RAFT의 다의성 설명 능력**:
  1. **Retrieval-Augmented Fine-Tuning**의 개념 및 목적(RAG 결점을 보완하여 Oracle 노이즈 필터링 능력 내재화)
  2. **Reward rAnked Fine-Tuning**의 개념 및 목적(PPO의 한계를 극복하기 위해 보상 필터링과 SFT를 반복하는 정렬)
- SFT, RAG, RLHF, 두 종류의 RAFT 기법들의 목적, 학습 대상, 학습 난이도 및 TCO 비용 측면의 입체적 비교 분석 작성 능력

## 연관 개념

- [RAG]({{< relref "/docs/notes/08_EmergingTech/01_AI_IoT_Cloud/rag-retrieval-augmented-generation" >}}) — 검색 증강 생성 기반 개념
- [강화학습]({{< relref "/docs/notes/08_EmergingTech/01_AI_IoT_Cloud/reinforcement-learning" >}}) — RLHF의 기반 기술
- [LLM 아키텍처]({{< relref "/docs/notes/08_EmergingTech/01_AI_IoT_Cloud/llm-architecture-public-sector" >}}) — LLM 구조 전반

## 참고 기출

- 139회 2교시 2번 (PEIM)
