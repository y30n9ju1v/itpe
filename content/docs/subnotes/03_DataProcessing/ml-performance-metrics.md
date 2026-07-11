---
title: "기계학습 성능평가 지표"
date: 2026-07-11T11:16:54+09:00
tags: ["자료처리", "데이터마이닝", "혼동행렬", "정밀도", "재현율", "ROC커브", "F1Score", "서브노트"]
draft: false
---

# 기계학습 성능평가 지표 서브노트

> **두음 머리에 박기 🧠**
> - **정·재·에프·특** (분류 모델 4대 평가 지표: **정**밀도 Precision, **재**현율 Recall, **F**1-Score, **특**이도 Specificity)
> - **F·T·아** (ROC 커브 핵심 구성요소: X축 **F**PR(1-특이도), Y축 **T**PR(재현율), 면적 **A**UC)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **머신러닝 혼동 행렬 (Confusion Matrix) 및 성능 평가 지표 (Accuracy, Precision, Recall)** |
| **정의** | 기계학습 분류 모델의 예측 성능을 평가하기 위해 실제값과 예측값의 매트릭스인 **혼동 행렬**을 정의하고, 이를 기반으로 **정밀도, 재현율, F1-Score, ROC/PR 곡선**을 산출하여 모델을 튜닝하는 기술 |
| **키워드** | Confusion Matrix (TP/FP/FN/TN), 정확도, 정밀도, 재현율, F1-Score, ROC-AUC, PR-AUC, 불균형 데이터 |
| **개념도** | **[ 머신러닝 혼동 행렬 (Confusion Matrix) ]**<br>| 실제 \ 예측 | **Positive (참)** | **Negative (거짓)** |<br>|:---:|:---:|:---:|<br>| **Positive (참)** | **TP** (True Positive) <br> (실제 참을 참으로 예측) | **FN** (False Negative) <br> (실제 참을 거짓으로 예측) |<br>| **Negative (거짓)** | **FP** (False Positive) <br> (실제 거짓을 참으로 예측) | **TN** (True Negative) <br> (실제 거짓을 거짓으로 예측) | |
| **구성요소** | 1. **정확도 (Accuracy)**: 전체 예측 건수 중 올바르게 예측한 건수 비율. $\frac{TP + TN}{TP + FN + FP + TN}$<br>2. **정밀도 (Precision)**: 모델이 Positive로 예측한 것 중 실제 Positive 비율. $\frac{TP}{TP + FP}$<br>3. **재현율 (Recall)**: 실제 Positive인 것 중 모델이 Positive로 찾아낸 비율. $\frac{TP}{TP + FN}$<br>4. **F1-Score**: 정밀도와 재현율의 균형을 평가하기 위한 조화 평균 지표. $2 \times \frac{Precision \times Recall}{Precision + Recall}$<br>5. **ROC-AUC**: X축 FPR, Y축 TPR 곡선의 하단 면적(AUC). 1에 가까울수록 우수한 분류 모델임을 지칭 |
| **비교** | **정밀도 (Precision) 극대화 (스팸 필터 등)**<br>- **핵심**: False Positive(오판으로 정상 메일 유실) 최소화에 주력<br>- **튜닝**: 임계값(Threshold)을 높여 모델이 확실할 때만 Positive로 분류<br><br>**재현율 (Recall) 극대화 (암 진단, 금융 사기 탐지 등)**<br>- **핵심**: False Negative(환자를 놓치는 등 치명적 위험) 최소화에 주력<br>- **튜닝**: 임계값(Threshold)을 낮춰 약간의 가능성만 있어도 Positive로 적극 분류 |
| **차별화** | **극도의 데이터 불균형(Class Imbalance) 해결 및 평가 보완 실무 전략**<br>1. **PR-AUC(Precision-Recall AUC) 적용**: 사기 탐지(FDS)나 희귀 질병 진단처럼 데이터 라벨 불균형이 극도로 심한(참 데이터가 1% 미만) 도메인에서는 다수의 True Negative(TN) 때문에 왜곡되는 ROC-AUC 대신 **PR-AUC**를 최종 최적화 지표로 적용.<br>2. **데이터 불균형 샘플링 연계**: 소수 클래스의 정밀도 향상을 위해 오버샘플링(SMOTE - 가상의 소수 데이터 생성) 또는 언더샘플링(Tomek Links - 다수 데이터 제거) 기법을 데이터 파이프라인 단계에 반영하여 모델 편향(Bias) 방지.<br>3. **비즈니스 비용 기반 Cost-Sensitive Learning 적용**: 잘못된 예측(FN vs FP)에 따른 비즈니스적 페널티 비용 차이(예: 사기 거래 미탐지 비용 vs 오탐 시 고객 불편 비용)를 계산하여, 모델의 손실 함수(Loss Function)에 가중치(Penalty Weight)를 다르게 부여하는 최적 가중 학습 기법 실천. |
