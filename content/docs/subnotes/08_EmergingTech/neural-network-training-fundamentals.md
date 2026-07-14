---
title: "신경망 학습 3요소 (비용함수·경사하강법·활성화함수)"
date: 2026-07-12T18:15:39+09:00
tags: ["최신기술", "AI", "딥러닝", "비용함수", "경사하강법", "활성화함수", "옵티마이저", "서브노트"]
draft: false
---

# 신경망 학습 3요소 (비용함수·경사하강법·활성화함수) 서브노트

> **두음 머리에 박기 🧠**
> - **비·경·활** (신경망 학습 3요소: 오차 정량화 **비**용함수 → 파라미터 갱신 **경**사하강법(옵티마이저) → 비선형 표현력 **활**성화함수)
> - **G·S·M·A·R·A** (옵티마이저 발전 계보: **G**D → **S**GD → **M**omentum → **A**daGrad → **R**MSProp → **A**dam)
> - **LR·GC·BN·W** (오버슈팅 방지 4대 기법: **L**R Decay 학습률감소, **G**radient **C**lipping, **B**atch **N**ormalization, **W**arm-up)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **신경망 학습 3요소: 비용함수(Cost Function), 경사하강법(Gradient Descent)/옵티마이저(Optimizer), 활성화함수(Activation Function)** |
| **정의** | 예측-실제 오차 정량화 **비용함수** → 기울기 반대방향 파라미터 반복갱신 손실최소화 **경사하강법(옵티마이저)** → 가중합 출력에 비선형변환 적용 복잡패턴 학습 **활성화함수**, 신경망 학습 3대 핵심 메커니즘 |
| **키워드** | MSE/Cross-Entropy, Adam(Momentum+RMSProp), 오버슈팅/지역최소점, ReLU/GELU, 기울기 소실 |
| **개념도** | `[예측값 ŷ] vs [실제값 y] → 비용함수 L(ŷ,y) 계산 → 역전파(∂L/∂W) → 옵티마이저가 W←W-η·∂L/∂W 갱신`<br><br>**[ 옵티마이저 발전 계보 ]**<br>`GD(Batch) → SGD → Momentum ─┐`<br>`                              ├─ Adam (Momentum + RMSProp 결합)`<br>`              AdaGrad → RMSProp ┘`<br><br>**[ 활성화함수 발전 계보 ]**<br>`Sigmoid/Tanh(기울기 소실 취약) → ReLU(계산 단순, but Dying ReLU) → Leaky ReLU/PReLU/ELU → GELU/Swish(Transformer 표준)` |
| **구성요소** | 1. **비용함수 종류**: MSE `(1/n)Σ(y-ŷ)²`(회귀), MAE(회귀, 이상치 강건), Binary/Categorical Cross-Entropy(분류), Huber Loss(회귀, MSE·MAE 절충)<br>2. **경사하강법 갱신식**: `W_new=W_old-η·∇J(W_old)`, η(학습률) 크기에 따라 과소수렴/안정수렴/오버슈팅(발산) 결정, Batch/SGD/Mini-batch GD로 구분<br>3. **옵티마이저**: SGD(미니배치 갱신, 진동), Momentum(기울기 방향 관성 누적), AdaGrad(파라미터별 학습률 반비례 조정), RMSProp(지수이동평균으로 학습률 급감 완화), Adam(Momentum 1차모멘트+RMSProp 2차모멘트 결합)<br>4. **오버슈팅 방지**: LR Decay(단계적 감소), 적응적 학습률(AdaGrad/RMSProp/Adam), Warm-up, Gradient Clipping, Batch Normalization<br>5. **지역최소점 회피**: Momentum(관성 통과), SGD 노이즈(무작위성 탈출), Warm Restart(SGDR), 다중 초기화, Adam 등 2차 모멘텀(평탄구간 가속) — 고차원 신경망은 지역최소점보다 안장점(Saddle Point) 정체가 더 빈번<br>6. **활성화함수**: Sigmoid `σ(x)=1/(1+e^-x)`(0,1), Tanh(-1,1), ReLU `max(0,x)`[0,∞), Leaky ReLU(음수구간 αx), GELU `x·Φ(x)`(Transformer 표준) |
| **비교** | **활성화함수 없는 신경망**<br>- `f(x)=Wn·...·W2·W1·x+b` = 단일 선형변환으로 축약, 표현력 상실<br><br>**활성화함수 있는 신경망**<br>- `f(x)=σ(Wn·σ(...σ(W1·x+b1)...)+bn)` = 비선형 조합으로 복잡한 함수 근사 가능<br><br>**Sigmoid/Tanh**<br>- 기울기 소실 심함(양끝 포화), 지수 연산 필요, 이진분류 출력층/RNN 은닉층(과거)<br><br>**ReLU/GELU**<br>- 기울기 소실 적음, ReLU는 연산 매우 낮으나 Dying ReLU, GELU는 매끄러운 곡선으로 Transformer(BERT/GPT) 표준 |
| **차별화** | **신경망 학습 최적화 실무 전략**<br>1. **태스크-비용함수 표준 매핑**: 회귀=MSE/MAE, 이진분류=Sigmoid+BCE, 다중분류=Softmax+CCE 매핑표 체크리스트화 → 출력층-비용함수 불일치 학습발산 방지, 클래스불균형 시 Weighted CE/Focal Loss 보정<br>2. **2단계 옵티마이저 전략**: Adam 초기수렴 확인 후 SGD+Momentum/AdamW 미세조정(Adam 일반화성능 열세 대비), Cosine Annealing/OneCycle 학습률스케줄 검증손실 비교<br>3. **활성화함수 규모별 선택**: 소규모모델=ReLU/Leaky ReLU 우선(GELU 이득 적음), 대규모 Transformer만 벤치마크 후 GELU/Swish 채택 + He초기화 병행, 활성화분포 모니터링으로 Dying ReLU 조기탐지 |
