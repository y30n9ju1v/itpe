---
title: "Self-Attention 메커니즘"
date: 2026-07-12T00:00:00+09:00
tags: ["알고리즘", "핵토200", "자연어 처리", "자연어 처리"]
topic_no1: 23
topic_no2: 2
topic_large: "자연어 처리"
topic_small: "자연어 처리"
exam_ref: "138회"
exam_type: "응용"
question_no: 1
---

## 문제

Self-Attention 메커니즘

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 자연어 처리 |
| 토픽(소) | 자연어 처리 |
| 출제 | 138회 |
| 유형 | 응용 |
| 번호 | 1 |

## 모범답안

```
1. Self-Attention 개요

   정 의  • 시퀀스 내 각 단어가 자신을 포함한 모든 단어와의 연관도
            (Attention Score)를 계산, 그 가중합으로 새로운 표현
            (Context Vector)을 생성하는 메커니즘
          - Q(Query), K(Key), V(Value) 3벡터 기반 연관도 산출 구조

   Q = X·W_Q,  K = X·W_K,  V = X·W_V   (X: 입력 임베딩)

   "it was tired" → "it" 이 무엇을 가리키는가?
   → 문장 내 모든 단어와 연관도 계산 → "animal"에 높은 가중치
   → "it" 벡터에 "animal" 의미 반영해 재구성

   - RNN과 달리 순차 전달 없이 모든 단어 쌍을 병렬 연결, 장거리 의존성 해결.
```

```
2. Scaled Dot-Product / Multi-Head Attention 연산

   Attention(Q,K,V) = softmax( Q·K^T / √d_k ) · V

   [입력] → h개 Head 분할 → Head별 Scaled Dot-Product Attention 병렬 수행
          → Concat(head_1,...,head_h) → 선형변환(W_O) → 출력
```

| 구분 | 항목 | 설 명 |
|------|------|-------|
| Q·K^T | • 내적(유사도) | - 모든 단어 쌍의 Attention Score 산출 |
| √d_k | • 스케일링 | - 값 폭주로 인한 softmax 기울기 소실 방지 |
| softmax·V | • 가중합 | - 확률 분포화 후 Value에 곱해 Context Vector 생성 |
| Multi-Head | • h개 부분공간 병렬 | - 문법/의미/위치 등 다각도 관계 동시 학습 |

- 단일 Head는 관점이 제한적이나, Multi-Head는 구문적·의미적 연관관계를 나누어 학습.

```
3. 한계 및 확장 방안
```

| 구분 | 한계 | 대응 |
|------|------|------|
| 연산 비용 | • O(n²) 복잡도, 긴 컨텍스트 비용 폭증 | - FlashAttention, Sparse/Sliding Window Attention |
| 위치 정보 | • 순서 없는 집합 연산 | - Positional Encoding, RoPE(상대 위치) |
| 해석 오남용 | • Attention Weight를 판단 근거로 과신 | - SHAP/LIME 등 별도 XAI 기법 병행 |

- 최근 FlashAttention, RoPE 등 긴 컨텍스트·경량화 기법 적용 증대.  "끝"
