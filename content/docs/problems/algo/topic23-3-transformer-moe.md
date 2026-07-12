---
title: "트랜스포머(Transformer)와 MoE(Mixture of Experts)"
date: 2026-07-12T00:00:00+09:00
tags: ["알고리즘", "핵토200", "자연어 처리", "자연어 처리"]
topic_no1: 23
topic_no2: 3
topic_large: "자연어 처리"
topic_small: "자연어 처리"
exam_ref: "137회"
exam_type: "관리"
question_no: 1
---

## 문제

트랜스포머(Transformer)와 MoE(Mixture of Experts)를 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 자연어 처리 |
| 토픽(소) | 자연어 처리 |
| 출제 | 137회 |
| 유형 | 관리 |
| 번호 | 1 |

## 모범답안

```
1. 트랜스포머(Transformer) 개요

   정 의  • RNN의 순차 연산을 배제하고 Self-Attention만으로 시퀀스 내
            전역적 의존관계를 병렬 학습하는 Encoder-Decoder 기반
            신경망 아키텍처 (Vaswani et al., 2017)
          - Multi-Head Attention/FFN 등을 반복 적층해 문맥 표현 생성

   [Encoder] Input+PosEnc → (MH Self-Attn → Add&Norm → FFN → Add&Norm)×N
   [Decoder] Output+PosEnc → (Masked MH Attn → Enc-Dec Attn → FFN)×N
   → Linear + Softmax → 출력 확률

   - GPT는 Decoder만, BERT는 Encoder만 사용하는 구조적 변형 존재.
```

| 구성 요소 | 역할 |
|-----------|------|
| • Positional Encoding | - 순서 정보가 없는 Attention에 위치 정보 주입 |
| • Multi-Head Self-Attention | - 여러 관점에서 단어 간 연관도 병렬 계산 |
| • Add & Norm | - 잔차 연결로 기울기 소실 방지, LayerNorm으로 안정화 |
| • Feed Forward Network | - 위치별 독립적 비선형 변환(2단 완전연결) |

```
2. MoE(Mixture of Experts) 구조

   정 의  • 트랜스포머 블록 내 단일 FFN을 다수의 전문가(Expert)로
            대체, 라우터(Router)가 토큰마다 일부 Expert만 선택적으로
            활성화(Sparse Activation)하는 구조
          - Top-k 선택/가중합을 통해 파라미터는 크고 연산은 작게 유지

   [입력 토큰] → Router(Gating) → Top-k Expert 선택
                     ↓
        [Expert1][Expert2][Expert3]...[ExpertN]  (FFN 다수)
                     ↓ 선택된 k개만 활성화
              가중합(Weighted Sum) → 출력
```

| 구분 | Dense Transformer | MoE Transformer |
|------|--------------------|--------------------|
| FFN 구조 | • 단일 FFN 전체 통과 | • 다수 Expert 중 Top-k만 통과 |
| 연산량 | - 파라미터 수에 비례 | - 활성화 Expert 수에만 비례(절감) |
| 대표 모델 | • GPT-3, T5 | • Mixtral 8x7B, DeepSeek-V3 |
| 과제 | - 스케일업 시 비용 선형 증가 | - 라우팅 불균형, 학습 불안정 |

- 라우터는 Top-1/Top-2 Expert 선택, Load Balancing Loss로 편중 방지.

```
3. MoE 도입 시 고려사항 및 트렌드
```

| 구분 | 이슈 | 대응 |
|------|------|------|
| 학습 안정성 | • Expert Collapse(편중) | - Load Balancing Loss, Noisy Top-k Gating |
| 서빙 복잡도 | • 전체 파라미터 적재, All-to-All 통신 | - Expert Parallelism, 텐서 병렬화 |
| 도입 함정 | • Expert 수만 확대 시 오버헤드↑ | - 태스크 다양성 검증 후 도입 결정 |

- "총 파라미터는 크나(예: 8×7B=56B) 활성 파라미터는 작은(예: 약 13B)" 구조로 성능 대비 비용 효율 확보.
- 최근 GPT-4, Gemini, DeepSeek 등 초거대 LLM의 MoE 채택 확대 예상.  "끝"
