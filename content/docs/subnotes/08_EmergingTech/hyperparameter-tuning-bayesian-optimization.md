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
| **정의** | 학습으로 모델 스스로 결정 **파라미터** vs 학습 전 사람/알고리즘이 사전설정 → 학습과정 제어 **하이퍼파라미터** 비교, 블랙박스 목적함수를 베이즈정리 확률모델로 근사 → 최소시도로 전역최적점 근접 **베이지안 최적화** 튜닝기법 |
| **키워드** | 학습률/배치크기/은닉층 수, Grid/Random Search, 대리모델(Surrogate Model), 획득함수(Acquisition Function), Hyperband/ASHA |
| **개념도** | `[하이퍼파라미터 설정] → [학습 프로세스 제어] → [파라미터(W,b) 최적화] → [모델 성능]`<br>`   Learning Rate              Forward/Backward         Weight, Bias`<br>`   Batch Size                 Gradient Descent`<br>`   Epoch, Optimizer 종류`<br><br>**[ 베이지안 최적화 순환 구조 ]**<br>`[초기 랜덤 샘플 관측] → [대리모델(Surrogate) 적합]`<br>`        ↓                        ↓`<br>`  [획득함수로 다음 탐색점 x* 선정] ← [사후분포(Posterior) 갱신]`<br>`        ↓`<br>`  [f(x*) 실제 평가(모델 학습)] → 반복(Iteration)` |
| **구성요소** | 1. **파라미터 vs 하이퍼파라미터**: 파라미터(가중치·편향, 역전파로 매스텝 자동갱신, 경사하강법 최적화) vs 하이퍼파라미터(학습률·배치크기·은닉층수, 학습전 고정, Grid/Random/Bayesian 탐색)<br>2. **하이퍼파라미터 분류**: 학습제어(학습률·Batch Size·Epoch), 모델구조(은닉층수·노드수·커널크기), 정규화(Dropout·L1/L2), 최적화알고리즘(Optimizer·Momentum)<br>3. **대리모델**: GP(불확실성정량화 우수, 저차원적합), Random Forest/SMAC(고차원·범주형 강건), TPE(조건부분포기반, 대규모반복탐색 Optuna)<br>4. **획득함수**: EI(기대개선량 최대화, 최다사용), PI(개선확률 최대화, 보수적), UCB(`μ(x)+κ·σ(x)` 최대화, κ로 탐색/활용 조절) |
| **비교** | **Grid/Random Search**<br>- 방식: 사전값 전수탐색(Grid) / 공간 무작위샘플링(Random)<br>- 장점: 구현단순·재현성高(Grid), 효율적·병렬화용이(Random)<br>- 단점: 차원↑ 시 비용폭증(Grid), 최적점 미보장(Random)<br><br>**베이지안 최적화**<br>- 방식: 대리모델 성능예측 후 획득함수로 유망지점 순차탐색<br>- 장점: 적은 시도횟수로 효율적 수렴<br>- 단점: 구현복잡, 순차구조 병렬화제약, 고차원(수십+)서 GP O(n³) 급증 |
| **차별화** | **하이퍼파라미터 튜닝 실무 전략**<br>1. **탐색공간 규모별 기법선택**: 소규모→Grid, 대규모→Random/Bayesian, 딥러닝→Hyperband/ASHA로 저성능후보 조기종료 → 자원효율<br>2. **Coarse-to-Fine 2단계**: 전체학습 반복 GPU비용폭증 → Random으로 광역탐색 후 Bayesian으로 유망구간 정밀화<br>3. **고차원 BO 확장**: GP O(n³) 급증 → TPE(Optuna)/사전민감도분석 차원축소, 병렬화제약 → Batch BO(q-EI), 초기샘플편향 → 라틴하이퍼큐브샘플링, MLflow/W&B로 로깅·재현성 확보 |
