---
title: "파라미터 vs 하이퍼파라미터 및 베이지안 최적화"
date: 2026-07-12T18:15:39+09:00
tags: ["최신기술", "AI", "딥러닝", "하이퍼파라미터", "베이지안최적화", "서브노트"]
draft: false
---

# 파라미터 vs 하이퍼파라미터 및 베이지안 최적화 서브노트

> **두음 머리에 박기 🧠**
> - **G·R·B·H** (하이퍼파라미터 튜닝 4대 기법: **G**rid Search 전수탐색, **R**andom Search 무작위샘플링, **B**ayesian Optimization 대리모델기반, **H**yperband 조기종료)
> - **GP·RF·TPE** (베이지안 최적화 3대 대리모델: **G**aussian **P**rocess, **R**andom **F**orest(SMAC), **T**ree-structured **P**arzen **E**stimator)
> - **EI·PI·UCB** (베이지안 최적화 3대 획득함수: **E**xpected **I**mprovement, **P**robability of **I**mprovement, **U**pper **C**onfidence **B**ound)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **파라미터(Parameter) vs 하이퍼파라미터(Hyperparameter) 및 베이지안 최적화(Bayesian Optimization)** |
| **정의** | 학습을 통해 모델이 스스로 결정하는 **파라미터**와 학습 시작 전 사람(또는 탐색 알고리즘)이 사전 설정해 학습 과정 자체를 제어하는 **하이퍼파라미터**를 비교하고, 목적함수 형태를 알 수 없는 블랙박스 최적화 문제에서 베이즈 정리 기반 확률 모델로 함수를 근사해 최소 시도 횟수로 전역 최적점에 근접하는 **베이지안 최적화** 튜닝 기법 |
| **키워드** | 학습률/배치크기/은닉층 수, Grid/Random Search, 대리모델(Surrogate Model), 획득함수(Acquisition Function), Hyperband/ASHA |
| **개념도** | `[하이퍼파라미터 설정] → [학습 프로세스 제어] → [파라미터(W,b) 최적화] → [모델 성능]`<br>`   Learning Rate              Forward/Backward         Weight, Bias`<br>`   Batch Size                 Gradient Descent`<br>`   Epoch, Optimizer 종류`<br><br>**[ 베이지안 최적화 순환 구조 ]**<br>`[초기 랜덤 샘플 관측] → [대리모델(Surrogate) 적합]`<br>`        ↓                        ↓`<br>`  [획득함수로 다음 탐색점 x* 선정] ← [사후분포(Posterior) 갱신]`<br>`        ↓`<br>`  [f(x*) 실제 평가(모델 학습)] → 반복(Iteration)` |
| **구성요소** | 1. **파라미터/하이퍼파라미터 비교**: 파라미터(가중치·편향, 역전파로 매 스텝 자동 갱신, 경사하강법으로 최적화) vs 하이퍼파라미터(학습률·배치크기·은닉층 수, 학습 시작 전 고정, Grid/Random/Bayesian으로 탐색)<br>2. **하이퍼파라미터 분류**: 학습 제어(학습률·Batch Size·Epoch), 모델 구조(은닉층 수·노드 수·커널 크기), 정규화(Dropout·L1/L2), 최적화 알고리즘(Optimizer 종류·Momentum)<br>3. **대리모델(Surrogate Model)**: Gaussian Process(불확실성 정량화 우수, 저차원 적합), Random Forest/SMAC(고차원·범주형에 강건), TPE(조건부 분포 기반, 대규모 반복 탐색 Optuna)<br>4. **획득함수(Acquisition Function)**: Expected Improvement(EI, 기대 개선량 최대화, 가장 널리 사용), Probability of Improvement(PI, 개선 확률 최대화, 보수적), Upper Confidence Bound(UCB, `μ(x)+κ·σ(x)` 최대화, κ로 탐색/활용 비율 조절) |
| **비교** | **Grid/Random Search**<br>- 방식: 사전 정의 값 전수 탐색(Grid) / 탐색 공간 무작위 샘플링(Random)<br>- 장점: 구현 단순·재현성 높음(Grid), 효율적·병렬화 용이(Random)<br>- 단점: 차원 증가 시 비용 폭증(Grid), 최적점 보장 안 됨(Random)<br><br>**베이지안 최적화**<br>- 방식: 대리모델로 성능 예측 후 획득함수로 유망 지점 순차 탐색<br>- 장점: 적은 시도 횟수로 효율적 수렴<br>- 단점: 구현 복잡, 순차 구조로 병렬화 제약, 고차원(수십 개 이상)에서 GP의 O(n³) 복잡도 급증 |
| **차별화** | **하이퍼파라미터 튜닝 실무 전략**<br>1. **탐색 공간 규모별 기법 선택**: 탐색 공간이 작으면 Grid, 크면 Random/Bayesian, 대규모 딥러닝은 Hyperband/ASHA로 저성능 후보 조기 종료(Early Stopping)해 자원 효율 확보.<br>2. **Coarse-to-Fine 2단계 전략**: 탐색마다 전체 학습을 반복해야 하는 GPU 비용 폭증 문제에 대응해, Random Search로 광역 탐색 후 Bayesian Optimization으로 유망 구간을 정밀화.<br>3. **고차원 베이지안 최적화 확장**: 고차원에서 GP의 O(n³) 복잡도 급증 문제는 TPE 기반 도구(Optuna) 또는 사전 민감도 분석으로 차원 축소하고, 순차 탐색의 병렬화 제약은 Batch BO(q-EI)로 다중 후보를 동시 제안하며 초기 샘플 편향은 라틴 하이퍼큐브 샘플링으로 완화. MLflow/W&B로 하이퍼파라미터-성능을 자동 로깅해 재현성 확보. |
