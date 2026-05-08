---
title: "트랜스포머(Transformer)와 MoE(Mixture of Experts)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "최신기술", "AI", "트랜스포머", "MoE", "어텐션", "LLM"]
draft: false
exam_peim: "137회"
---

## 개요

트랜스포머(Transformer)는 2017년 "Attention is All You Need" 논문에서 제안된 자기 어텐션(Self-Attention) 기반 딥러닝 아키텍처로, GPT·BERT 등 현대 LLM의 근간이다. MoE(Mixture of Experts)는 입력에 따라 일부 전문가 네트워크만 선택적으로 활성화하여 파라미터 수 대비 효율을 극대화하는 아키텍처다.

## 핵심 내용

### 트랜스포머 구조

**인코더-디코더 구조** (원논문):
```
[입력 시퀀스]
    ↓
[임베딩 + 위치 인코딩]
    ↓
[인코더: Multi-Head Self-Attention + FFN] × N
    ↓
[디코더: Masked Self-Attention + Cross-Attention + FFN] × N
    ↓
[출력 시퀀스]
```

**핵심 구성 요소**:

| 구성요소 | 역할 |
|----------|------|
| **Self-Attention** | 시퀀스 내 모든 토큰 쌍의 관계를 병렬로 계산 |
| **Multi-Head Attention** | 여러 관점(head)에서 어텐션 동시 계산 |
| **위치 인코딩** | 순서 정보 주입 (RNN 없이 순서 파악) |
| **FFN (Feed-Forward)** | 비선형 변환 |
| **Layer Normalization** | 학습 안정화 |

**Attention 수식**:
```
Attention(Q, K, V) = softmax(QK^T / √d_k) × V
```
Q(Query), K(Key), V(Value) — d_k: Key 차원 수

**장점**: RNN 대비 병렬 처리 가능 → 학습 속도 대폭 향상, 장거리 의존성 포착

### MoE (Mixture of Experts)

**개념**: 여러 전문가(Expert) 네트워크 중 입력에 따라 소수만 활성화하여 연산

**구조**:
```
[입력 토큰]
    ↓
[게이팅 네트워크(Router)] → 상위 K개 전문가 선택
    ↓
[선택된 전문가 N1, N2, ...Nk] 병렬 처리
    ↓
[가중 합산] → 출력
```

**핵심 장점**:
- **Sparse Activation**: 전체 파라미터의 일부만 활성화 → 추론 비용 절감
- **확장성**: 전문가 수를 늘려 파라미터 증가 vs 연산량은 유지
- **전문화**: 각 Expert가 특정 도메인/언어에 특화

**대표 모델**:
- **Mixtral 8x7B**: 8개 Expert 중 2개 선택 (Mistral AI)
- **GPT-4**: MoE 구조 추정 (미공개)
- **Switch Transformer**: Google의 MoE 연구

### 트랜스포머 vs MoE 결합

현대 LLM은 트랜스포머 블록의 FFN 레이어를 MoE로 교체하여 효율 극대화.

## 출제 포인트

- 트랜스포머의 Self-Attention 원리와 RNN 대비 장점(병렬 처리)
- Attention 수식(Q, K, V) 제시
- MoE의 게이팅 네트워크와 Sparse Activation 개념
- MoE의 장점(파라미터 효율, 확장성) 서술

## 연관 개념

- [GNN]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/gnn-graph-neural-network" >}}) — 또 다른 현대 딥러닝 아키텍처
- [초거대 AI]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/large-scale-ai" >}}) — 트랜스포머 기반 LLM
- [프롬프트 인젝션]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/prompt-injection" >}}) — 트랜스포머 기반 LLM 보안 위협

## 참고 기출

- 137회 1교시 7번 (PEIM)
