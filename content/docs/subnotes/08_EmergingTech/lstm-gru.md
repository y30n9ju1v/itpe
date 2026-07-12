---
title: "LSTM과 GRU"
date: 2026-07-12T18:15:39+09:00
tags: ["최신기술", "AI", "딥러닝", "LSTM", "GRU", "RNN", "서브노트"]
draft: false
---

# LSTM과 GRU 서브노트

> **두음 머리에 박기 🧠**
> - **F·I·O** (LSTM 3-Gate 구조: **F**orget Gate 망각, **I**nput Gate 입력, **O**utput Gate 출력)
> - **R·U** (GRU 2-Gate 구조: **R**eset Gate 과거정보 무시정도, **U**pdate Gate 유지/신규반영 비율)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **LSTM(Long Short Term Memory)과 GRU(Gated Recurrent Unit)** |
| **정의** | RNN의 기울기 소실(Vanishing Gradient) 문제를 셀 상태(Cell State)와 게이트(Gate) 구조로 해결하여 장기 의존성을 보존하는 순환신경망인 **LSTM**과, LSTM의 게이트를 2개로 단순화해 연산 효율을 높인 **GRU** |
| **키워드** | Forget/Input/Output Gate, Cell State, Reset/Update Gate, 기울기 소실, 장기 의존성 |
| **개념도** | `[RNN]  h(t-1) → tanh(W·[h(t-1),x(t)]) → h(t)   (기울기 반복 곱 → 소실)`<br>`[LSTM] C(t-1) ──────⊕────── C(t)   (셀 상태, 덧셈 경로로 기울기 보존)`<br>`              ↑Forget  ↑Input`<br>`     h(t-1),x(t) → [Gate 연산] → h(t)`<br>- 셀 상태를 곱셈이 아닌 덧셈(⊕)으로 갱신해 역전파 시 기울기 보존 |
| **구성요소** | 1. **Forget Gate**: `f_t=σ(W_f·[h_{t-1},x_t]+b_f)` — 이전 셀 상태 중 잊을 정보 비율 결정<br>2. **Input Gate**: `i_t=σ(W_i·[..]+b_i), C̃_t=tanh(W_c·[..]+b_c)` — 새 정보 후보와 반영 비율 결정<br>3. **셀 상태 갱신**: `C_t=f_t⊙C_{t-1}+i_t⊙C̃_t` — 망각·입력 결과 합산<br>4. **Output Gate**: `o_t=σ(W_o·[..]+b_o), h_t=o_t⊙tanh(C_t)` — 출력할 정보 비율 결정 (σ는 개폐 비율 0~1, tanh는 후보값 방향 -1~1)<br>5. **GRU Reset/Update Gate**: `r_t=σ(W_r·[h_{t-1},x_t])`(과거 정보 무시 정도), `z_t=σ(W_z·[h_{t-1},x_t])`(이전 상태 유지 vs 신규 반영 비율), `h_t=(1-z_t)⊙h_{t-1}+z_t⊙h̃_t`(Forget/Input을 z_t 하나로 결합) |
| **비교** | **LSTM**<br>- 게이트 수: 3개(Forget/Input/Output)<br>- 상태: 셀 상태+은닉 상태 분리, 파라미터 수 상대적으로 많음<br>- 적용 예: 기계번역, 음성인식 초기모델<br>- 한계: 긴 시퀀스도 병렬화 어려움(Transformer 대비 느림)<br><br>**GRU**<br>- 게이트 수: 2개(Reset/Update)<br>- 상태: 은닉 상태 단일, LSTM 대비 파라미터 약 25% 적음<br>- 적용 예: 임베디드, 실시간 스트리밍<br>- 한계: 복잡 패턴에서 LSTM 대비 정확도 열세 가능 |
| **차별화** | **RNN 계열 모델 선택 실무 전략**<br>1. **표현력 vs 효율 트레이드오프**: 셀·은닉 상태를 분리한 LSTM이 표현력은 크나 연산·메모리 부담이 크므로, 저지연 온디바이스·임베디드 환경은 GRU를 우선 검토.<br>2. **Transformer 전환 판단 기준**: 초장문·대규모 병렬 처리가 필요한 과제는 Attention/Transformer 계열을 우선 검토하고, 순차적·저지연 스트리밍 처리가 중요한 과제만 LSTM/GRU를 선택 적용.<br>3. **기울기 보존 원리의 실무 적용**: 셀 상태의 덧셈(⊕) 경로가 기울기 소실을 완화하는 핵심 원리이므로, 유사한 잔차 연결(Residual Connection) 개념을 다른 심층 아키텍처 설계 시에도 응용. |
