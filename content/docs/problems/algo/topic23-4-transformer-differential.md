---
title: "트랜스포머와 차등 트랜스포머(Differential Transformer)"
date: 2026-07-12T00:00:00+09:00
tags: ["알고리즘", "핵토200", "자연어 처리", "자연어 처리"]
topic_no1: 23
topic_no2: 4
topic_large: "자연어 처리"
topic_small: "자연어 처리"
exam_ref: "모의_2024.12"
exam_type: "관리"
question_no: 2
---

## 문제

트랜스포머(Transformer) 모델에 대해 다음을 설명하시오.
가. 트랜스포머 개념 및 구성 요소
나. 차등 트랜스포머 개념 및 구성 요소

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 자연어 처리 |
| 토픽(소) | 자연어 처리 |
| 출제 | 모의_2024.12 |
| 유형 | 관리 |
| 번호 | 2 |

## 모범답안

```
1. 긴 컨텍스트 어텐션 노이즈, 트랜스포머 개요

   정 의  • RNN 없이 Self-Attention만으로 시퀀스 내 전역 의존관계를
            병렬 학습하는 Encoder-Decoder 기반 신경망 아키텍처
          - Multi-Head Attention/FFN 등을 반복 적층해 문맥 표현 생성

   [입력] → Input Embedding + Positional Encoding
          → (Multi-Head Self-Attention → Add&Norm → FFN → Add&Norm)×N
          → Linear + Softmax → 출력

   - 긴 컨텍스트일수록 무관 토큰에 어텐션이 분산되는 노이즈 문제 존재.
```

| 구성 요소 | 역할 |
|-----------|------|
| • Positional Encoding | - Attention에 순서 정보 주입 |
| • Multi-Head Self-Attention | - softmax(QK^T/√d_k)V로 연관도 가중합 산출 |
| • Residual+LayerNorm | - 잔차 연결/정규화로 학습 안정화 |
| • Feed Forward Network | - 토큰별 독립적 비선형 변환 |

- 표준 Softmax Attention은 모든 토큰에 항상 양수 가중치를 부여, 무관 토큰에도 어텐션이 미세하게 분산되는 구조적 특성.

```
2. 차등 트랜스포머(Differential Transformer) 구조

   정 의  • 하나의 헤드를 두 개의 독립 Softmax Attention Map으로 계산,
            학습 가능한 스칼라 λ로 두 맵의 차(差)를 구해 공통 노이즈는
            상쇄하고 유의미한 신호만 증폭시키는 어텐션 기법
          - Noise Cancelling 원리를 어텐션 스코어 연산에 적용한 구조

   A1 = softmax(Q1K1^T/√d),  A2 = softmax(Q2K2^T/√d)
   DiffAttn = (A1 - λ·A2) · V

   [Q,K를 2배 폭 분할] → [Q1,K1],[Q2,K2] → softmax 각각 계산
                        → (A1-λA2) → ×V → 출력
```

| 구성 요소 | 역할 |
|-----------|------|
| • Q1,K1 / Q2,K2 | - 입력을 2그룹 분할, 독립 어텐션 맵 2개 생성 |
| • λ(학습 파라미터) | - 두 맵의 차감 비율을 레이어/헤드별 학습 |
| • Differential Attention Map | - A1-λ·A2로 공통 노이즈 상쇄, 신호 부각 |
| • GroupNorm | - 헤드별 값 스케일 차이 보정 |

```
3. 표준 Transformer vs 차등 Transformer 비교
```

| 구분 | 표준 Transformer | 차등 Transformer |
|------|--------------------|---------------------|
| 어텐션 맵 | • 헤드당 1개 | • 헤드당 2개(차감 연산) |
| 노이즈 처리 | - 무관 토큰에도 낮은 가중치 잔존 | - 공통 노이즈 상쇄, 무관 토큰 가중치 0에 근접 |
| 긴 컨텍스트 | - 길수록 정보검색 정확도 저하 | - Needle-in-Haystack 검색 정확도 향상 |
| 환각(Hallucination) | - 무관 정보 참조로 발생 가능성↑ | - 핵심 토큰 집중으로 환각 감소 경향 |

- 노이즈 캔슬링 헤드폰이 두 마이크 신호 차로 배경 소음을 제거하는 원리를 어텐션 스코어에 적용.

```
4. 실무 적용 및 시사점
```

| 구분 | 고려사항 | 대응 |
|------|----------|------|
| λ 튜닝 | • 초기화·레이어별 민감도 | - 논문 스케줄(λ_init=0.8-0.6e^(-0.3·layer)) 기반 A/B 검증 |
| 호환성 | • 기존 BERT/GPT 가중치 전이 불가 | - 법률/장문 요약 등 특화 도메인 선별 적용, 병행 운영 |
| 과대 해석 | • "노이즈 제거=환각 해결"로 오인 | - RAG, Fact-Checking 파이프라인 병행 필요 |

- 최근 긴 컨텍스트·사실성(Factuality) 요구 증대로 차등 트랜스포머 등 노이즈 억제 구조 적용 확대 예상.  "끝"
