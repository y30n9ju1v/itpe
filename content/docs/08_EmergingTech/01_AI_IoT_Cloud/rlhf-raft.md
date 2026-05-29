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

### RAFT 파이프라인

1. **RAG 기반 데이터 생성**: 문서·QA 쌍을 RAG로 생성
2. **Oracle 문서 포함/미포함 혼합**: 관련 문서(oracle)와 무관 문서를 혼합하여 모델이 관련 정보 선별 학습
3. **파인튜닝**: 생성된 SFT 데이터로 모델 학습

```
문서 코퍼스 → RAG 기반 Q&A 생성 → Oracle/Distractor 혼합 → 파인튜닝
```

### RLHF vs RAFT 비교

| 구분 | RLHF | RAFT |
|------|------|------|
| 목적 | 인간 선호도 정렬 (안전성·유용성) | 도메인 지식 + 검색 능력 동시 학습 |
| 핵심 요소 | 인간 피드백, 보상 모델, PPO | 문서 코퍼스, RAG, Oracle 문서 학습 |
| 비용 | 매우 높음 (인간 피드백 수집) | 중간 (자동 데이터 생성 가능) |
| 결과 | 안전하고 유용한 범용 LLM | 도메인 특화 지식 활용 LLM |
| 대표 사례 | ChatGPT, Claude | 기업 내부 문서 기반 QA 봇 |

## 출제 포인트

- RLHF 3단계(SFT→RM→PPO) 순서와 각 단계 역할
- RAFT의 핵심 아이디어(Oracle/Distractor 혼합 학습)
- 파인튜닝·RAG·RLHF·RAFT 각 기법의 목적과 비용 비교 테이블

## 연관 개념

- [RAG]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/rag-retrieval-augmented-generation" >}}) — 검색 증강 생성 기반 개념
- [강화학습]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/reinforcement-learning" >}}) — RLHF의 기반 기술
- [LLM 아키텍처]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/llm-architecture-public-sector" >}}) — LLM 구조 전반

## 참고 기출

- 139회 2교시 2번 (PEIM)
