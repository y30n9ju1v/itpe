---
title: "LSTM(Long Short Term Memory)과 GRU(Gated Recurrent Unit)"
date: 2026-07-12T00:00:00+09:00
tags: ["알고리즘", "핵토200", "딥러닝", "LSTM"]
topic_no1: 14
topic_no2: 1
topic_large: "LSTM"
topic_small: "LSTM"
exam_ref: "모의_2020.11"
exam_type: "공통"
question_no: 1
---

## 문제

LSTM(Long Short Term Memory)과 GRU(Gated Recurrent Unit)설명

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | LSTM |
| 토픽(소) | LSTM |
| 출제 | 모의_2020.11 |
| 유형 | 공통 |
| 번호 | 1 |

## 모범답안

1. RNN의 한계와 LSTM 등장배경

    정 의  • RNN의 기울기 소실(Vanishing Gradient) 문제를 셀 상태(Cell State)와
             게이트(Gate) 구조로 해결하여 장기 의존성을 보존하는 순환신경망
           - Forget/Input/Output 게이트로 정보 흐름을 선택 제어하는 구조

    ```
    [RNN]  h(t-1) → tanh(W·[h(t-1),x(t)]) → h(t)   (기울기 반복 곱 → 소실)

    [LSTM] C(t-1) ──────────⊕────────────→ C(t)   (셀 상태, 덧셈 경로로 기울기 보존)
                     ↑Forget  ↑Input
            h(t-1),x(t) → [Gate 연산] → h(t)
    ```

    - 셀 상태를 곱셈이 아닌 덧셈(⊕)으로 갱신해 역전파 시 기울기 보존.

2. LSTM의 게이트 구조(3-Gate)

    | 게이트 | 수식 | 역할 |
    |--------|------|------|
    | Forget Gate | f_t = σ(W_f·[h_{t-1},x_t]+b_f) | 이전 셀 상태 중 잊을 정보 비율 결정 |
    | Input Gate | i_t = σ(W_i·[..]+b_i), C̃_t = tanh(W_c·[..]+b_c) | 새 정보 후보와 반영 비율 결정 |
    | 셀 상태 갱신 | C_t = f_t⊙C_{t-1} + i_t⊙C̃_t | 망각·입력 결과 합산 |
    | Output Gate | o_t = σ(W_o·[..]+b_o), h_t = o_t⊙tanh(C_t) | 출력할 정보 비율 결정 |

    - σ는 개폐 비율(0~1), tanh는 후보값 방향(-1~1) 산출.

3. GRU의 게이트 구조(2-Gate)와 LSTM 비교

    | 게이트 | 수식 | 역할 |
    |--------|------|------|
    | Reset Gate | r_t = σ(W_r·[h_{t-1},x_t]) | 과거 정보 무시 정도 결정 |
    | Update Gate | z_t = σ(W_z·[h_{t-1},x_t]) | 이전 상태 유지 vs 신규 반영 비율 |
    | 은닉 상태 갱신 | h_t=(1-z_t)⊙h_{t-1}+z_t⊙h̃_t | Forget/Input을 z_t 하나로 결합 |

    | 구분 | LSTM | GRU |
    |------|------|-----|
    | 게이트 수 | 3개(Forget/Input/Output) | 2개(Reset/Update) |
    | 상태 | 셀 상태+은닉 상태 분리 | 은닉 상태 단일 |
    | 파라미터 수 | 상대적으로 많음 | LSTM 대비 약 25% 적음 |
    | 적용 예 | 기계번역, 음성인식 초기모델 | 임베디드, 실시간 스트리밍 |
    | 한계 | 긴 시퀀스도 병렬화 어려움(Transformer 대비 느림) | 복잡 패턴에서 LSTM 대비 정확도 열세 가능 |

    - 셀·은닉 상태를 분리한 LSTM이 표현력은 크나, GRU는 구조 단순화로 연산 효율 확보.
    - 최근 초장문·대규모 병렬 과제는 Attention/Transformer 우선 검토, 저지연 온디바이스는 LSTM/GRU 선택 적용 예상.  "끝"
