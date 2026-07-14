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
> - **PR·불 / ROC·균** (곡선 선택 기준: **P**recision-**R**ecall 곡선은 **불**균형 데이터, **ROC** 곡선은 **균**형 데이터에 적합)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **머신러닝 혼동 행렬 (Confusion Matrix) 및 성능 평가 지표 (Accuracy, Precision, Recall)** |
| **정의** | 분류모델 예측성능 평가 → 실제값-예측값 매트릭스인 **혼동행렬** 정의, 이를 기반으로 **정밀도·재현율·F1-Score·ROC/PR 곡선** 산출 → 모델 튜닝 |
| **키워드** | Confusion Matrix (TP/FP/FN/TN), 정확도, 정밀도, 재현율, F1-Score, ROC-AUC, PR-AUC, 불균형 데이터 |
| **개념도** | **[ 머신러닝 혼동 행렬 (Confusion Matrix) ]**<br>| 실제 \ 예측 | **Positive (참)** | **Negative (거짓)** |<br>|:---:|:---:|:---:|<br>| **Positive (참)** | **TP** (True Positive) <br> (실제 참을 참으로 예측) | **FN** (False Negative) <br> (실제 참을 거짓으로 예측) |<br>| **Negative (거짓)** | **FP** (False Positive) <br> (실제 거짓을 참으로 예측) | **TN** (True Negative) <br> (실제 거짓을 거짓으로 예측) | |
| **구성요소** | 1. **정확도 (Accuracy)**: 전체 예측 건수 중 올바르게 예측한 건수 비율. $\frac{TP + TN}{TP + FN + FP + TN}$<br>2. **정밀도 (Precision)**: 모델이 Positive로 예측한 것 중 실제 Positive 비율. $\frac{TP}{TP + FP}$<br>3. **재현율 (Recall)**: 실제 Positive인 것 중 모델이 Positive로 찾아낸 비율. $\frac{TP}{TP + FN}$<br>4. **F1-Score**: 정밀도와 재현율의 균형을 평가하기 위한 조화 평균 지표. $2 \times \frac{Precision \times Recall}{Precision + Recall}$<br>5. **ROC-AUC**: X축 FPR(=FP/(FP+TN), 1-특이도), Y축 TPR(재현율) 곡선의 하단 면적(AUC). 0.5(무작위)~1.0(완벽)<br>6. **PR-AUC**: X축 Recall, Y축 Precision 곡선의 하단 면적(AUC-PR). 1에 가까울수록 우수 |
| **비교** | **정밀도(Precision) 극대화 (스팸 필터 등)**<br>- **핵심**: False Positive(정상메일 유실) 최소화<br>- **튜닝**: 임계값↑ → 확실할 때만 Positive 분류<br><br>**재현율(Recall) 극대화 (암 진단, 금융사기 탐지 등)**<br>- **핵심**: False Negative(치명적 위험 놓침) 최소화<br>- **튜닝**: 임계값↓ → 가능성만 있어도 Positive 적극분류<br><br>**ROC 곡선 (균형 데이터)**<br>- 관심축: TPR vs FPR, 음성클래스(TN) 영향 큼<br>- 클래스균형 문제 적합, 임계값별 민감도/특이도 트레이드오프 시각화<br><br>**PR 곡선 (불균형 데이터)**<br>- 관심축: Precision vs Recall, 음성클래스(TN) 영향 거의 없음<br>- 양성 희귀한 사기탐지·의료진단 적합. ROC는 TN 절대다수 시 FPR 낮게 유지→AUC 과대평가 → 이때 PR 곡선이 신뢰도 높은 지표 |
| **차별화** | **극도의 데이터 불균형(Class Imbalance) 해결 및 평가 보완 실무 전략**<br>1. **PR-AUC 적용**: 사기탐지(FDS)·희귀질병 진단 등 참데이터 1% 미만 극심한 불균형 → TN 다수로 왜곡되는 ROC-AUC 대신 **PR-AUC**를 최종 최적화 지표로 적용<br>2. **불균형 샘플링 연계**: 소수클래스 정밀도 향상 → 오버샘플링(SMOTE-가상 소수데이터 생성) 또는 언더샘플링(Tomek Links-다수데이터 제거)를 파이프라인 반영 → 모델 편향(Bias) 방지<br>3. **비즈니스 비용기반 Cost-Sensitive Learning**: FN vs FP 페널티 비용차(예: 사기 미탐지 비용 vs 오탐 고객불편 비용) 계산 → 손실함수에 가중치(Penalty Weight) 차등부여하는 최적 가중학습 |
