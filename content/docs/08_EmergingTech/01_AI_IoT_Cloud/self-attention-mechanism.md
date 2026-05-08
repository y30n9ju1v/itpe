---
title: "Self-Attention 메커니즘"
date: 2026-05-09T07:34:17+09:00
tags: ["pecs", "최신기술", "AI", "Self-Attention", "Transformer", "LLM", "딥러닝"]
draft: false
exam_pecs: "138회"
---

## 개요

Self-Attention은 입력 시퀀스 내의 각 요소가 다른 모든 요소와의 관계(연관성)를 계산하여 맥락적 표현을 학습하는 메커니즘이다. Transformer 아키텍처의 핵심 구성 요소로, 기존 RNN의 순차 처리 한계를 극복하고 병렬 처리를 가능하게 한다.

## 핵심 내용

### Self-Attention 동작 원리

입력 벡터 X로부터 Query(Q), Key(K), Value(V) 행렬을 생성하여 주의(attention) 가중치를 계산한다.

```
1. 입력 X → Q = X·Wq, K = X·Wk, V = X·Wv (학습 가능 가중치 행렬)
2. Attention Score = QKᵀ / √dk  (스케일된 내적)
3. Attention Weight = Softmax(Attention Score)
4. Output = Attention Weight · V
```

**√dk로 나누는 이유**: dk(키 차원수)가 클수록 내적 값이 커져 소프트맥스 기울기가 소실되므로 스케일 조정

### Q, K, V 역할

| 행렬 | 역할 | 비유 |
|------|------|------|
| **Query (Q)** | 현재 토큰이 찾고자 하는 정보 | 검색 쿼리 |
| **Key (K)** | 각 토큰이 가진 정보의 인덱스 | 검색 인덱스 |
| **Value (V)** | 실제 전달할 정보의 내용 | 검색 결과 |

### Multi-Head Attention

단일 Self-Attention을 h개 헤드로 병렬 실행하여 다양한 관계 패턴을 동시에 학습:

```
MultiHead(Q,K,V) = Concat(head₁, ..., headₕ) · Wₒ
headᵢ = Attention(Q·Wᵢq, K·Wᵢk, V·Wᵢv)
```

- GPT-3: 96 헤드, BERT-large: 16 헤드
- 각 헤드는 서로 다른 유형의 의존관계 학습 (구문적, 의미적 등)

### RNN과 Self-Attention 비교

| 구분 | RNN | Self-Attention |
|------|-----|----------------|
| **처리 방식** | 순차적 | 병렬 |
| **장거리 의존성** | 약함 (기울기 소실) | 강함 (O(1) 경로 거리) |
| **계산 복잡도** | O(n) | O(n²) (시퀀스 길이 n) |
| **메모리** | 낮음 | 높음 (n² attention map) |

### Attention의 계산 복잡도 문제

- 시퀀스 길이 n에 대해 O(n²) 계산 및 메모리 필요
- 해결: Sparse Attention, Linear Attention, Flash Attention (메모리 효율화)

## 출제 포인트

- Q, K, V 행렬의 역할과 생성 방법 서술
- Attention Score 계산 공식: QKᵀ/√dk
- Multi-Head Attention의 목적: 다양한 관계 패턴 동시 학습
- RNN 대비 장점: 병렬 처리, 장거리 의존성

## 연관 개념

- [Transformer/MoE]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/transformer-moe" >}}) — Self-Attention을 사용하는 아키텍처
- [뉴로모픽 컴퓨팅]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/neuromorphic-computing" >}}) — 폰 노이만 구조 대안 (Attention과 대조)
- [TTFT/TPOT]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/ttft-tpot-llm-performance" >}}) — Self-Attention 처리 성능 지표

## 참고 기출

- 138회 1교시 5번 (PECS)
