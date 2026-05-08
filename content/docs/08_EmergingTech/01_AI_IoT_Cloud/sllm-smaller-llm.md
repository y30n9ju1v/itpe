---
title: "sLLM (소형 대형 언어 모델, smaller Large Language Model)"
date: 2026-05-09T07:56:10+09:00
tags: ["pecs", "최신기술", "AI", "sLLM", "LLM", "경량화", "온디바이스AI", "파인튜닝"]
draft: false
exam: "137회"
---

## 개요

sLLM(smaller Large Language Model)은 수백억 파라미터 규모의 대형 LLM을 경량화하여 수억~수십억 파라미터로 줄인 모델이다. 클라우드 의존 없이 온디바이스·엣지 환경에서 실행 가능하며, 특정 도메인 미세조정으로 범용 LLM 대비 전문성을 높인다.

## 핵심 내용

### sLLM의 정의 및 필요성

**필요성**
- 대형 LLM의 추론 비용: GPT-4급은 쿼리당 수십 원 수준
- 프라이버시: 민감 데이터를 외부 API에 전송하는 위험
- 지연 문제: 실시간 응답이 필요한 엣지·IoT 환경
- 전력 제약: 모바일·임베디드 기기의 배터리 한계

### sLLM 주요 기술

| 기술 | 설명 |
|------|------|
| **양자화 (Quantization)** | FP32 → INT8/INT4로 가중치 정밀도 축소 (모델 크기 2~8배 감소) |
| **프루닝 (Pruning)** | 중요도 낮은 가중치 제거 (비구조적/구조적) |
| **지식 증류 (Knowledge Distillation)** | 대형 교사 모델 → 소형 학생 모델로 지식 전이 |
| **LoRA / QLoRA** | 전체 파인튜닝 대신 저차원 행렬로 효율적 미세조정 |
| **GGUF/GGML** | CPU 추론 최적화 포맷 (llama.cpp) |

### 대표 sLLM 모델

| 모델 | 개발사 | 파라미터 | 특징 |
|------|--------|----------|------|
| Phi-3 Mini | Microsoft | 3.8B | 소형이지만 GPT-3.5 수준 |
| Gemini Nano | Google | 1.8B~3.25B | Pixel 단말 온디바이스 |
| LLaMA 3.2 | Meta | 1B, 3B | 오픈소스, 모바일 최적화 |
| Mistral 7B | Mistral AI | 7B | 효율적 어텐션(Sliding Window) |

### LLM vs sLLM 비교

| 구분 | LLM (대형) | sLLM (소형) |
|------|-----------|------------|
| **파라미터** | 70B~수천B | 1B~13B |
| **실행 환경** | 서버/클라우드 (A100/H100) | 온디바이스, 엣지 서버 |
| **추론 비용** | 높음 | 낮음 |
| **일반 성능** | 높음 | 중간 |
| **도메인 특화** | 어려움 (대규모 재학습) | 쉬움 (LoRA 파인튜닝) |
| **프라이버시** | 외부 전송 필요 | 로컬 처리 가능 |

## 실무 적용 예시

- 기업 내부 문서 챗봇: Mistral 7B + LoRA로 사내 규정 특화 모델 구축
- 스마트폰 AI 어시스턴트: Gemini Nano로 오프라인 번역·요약

## 출제 포인트

- sLLM의 경량화 4대 기법(양자화·프루닝·증류·LoRA)
- LLM vs sLLM 비교 (파라미터·비용·환경·도메인 특화)
- 온디바이스 AI와의 연계

## 연관 개념

- [클라우드 AI vs 온디바이스 AI]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/cloud-ai-vs-ondevice-ai" >}}) — sLLM의 주요 실행 환경
- [RAG]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/rag-retrieval-augmented-generation" >}}) — sLLM과 RAG 결합으로 도메인 지식 강화
- [대규모 AI/LLM 아키텍처]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/llm-architecture-public-sector" >}}) — LLM 대비 sLLM의 위치

## 참고 기출

- 137회 2교시 4번 (PECS)
