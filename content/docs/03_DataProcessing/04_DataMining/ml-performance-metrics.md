---
title: "머신러닝 성능지표"
date: 2026-05-09T07:09:12+09:00
tags: ["peim", "자료처리", "데이터마이닝", "머신러닝", "성능지표", "혼동행렬", "F1", "AUC"]
draft: false
exam_peim: "134회"
---

## 개요

머신러닝 모델의 성능은 단일 지표만으로 판단하기 어려우며, 문제 유형(분류·회귀·군집)과 데이터 특성(클래스 불균형 등)에 따라 적합한 지표가 달라진다. 기술사 시험에서는 분류 문제의 혼동행렬 기반 지표와 회귀 지표를 중심으로 출제된다.

## 핵심 내용

### 혼동 행렬 (Confusion Matrix)

|  | 예측 Positive | 예측 Negative |
|--|--------------|--------------|
| **실제 Positive** | TP (True Positive) | FN (False Negative) |
| **실제 Negative** | FP (False Positive) | TN (True Negative) |

- **FP (1종 오류)**: 음성을 양성으로 잘못 판단 (스팸 필터가 정상 메일을 스팸으로)
- **FN (2종 오류)**: 양성을 음성으로 잘못 판단 (암 환자를 정상으로 판단)

### 분류 성능지표

| 지표 | 공식 | 의미 |
|------|------|------|
| **정확도 (Accuracy)** | (TP+TN) / 전체 | 전체 중 올바른 예측 비율, 불균형 데이터에 부적합 |
| **정밀도 (Precision)** | TP / (TP+FP) | 양성 예측 중 실제 양성 비율 (FP 최소화) |
| **재현율 (Recall)** | TP / (TP+FN) | 실제 양성 중 맞게 예측한 비율 (FN 최소화) |
| **F1-Score** | 2×(P×R)/(P+R) | 정밀도-재현율 조화평균, 불균형 클래스에 적합 |
| **특이도 (Specificity)** | TN / (TN+FP) | 실제 음성 중 맞게 예측한 비율 |

**Precision vs Recall 트레이드오프**
- 임계값(Threshold) 높이면 → Precision ↑, Recall ↓
- 의료 진단(암 탐지): Recall 중시 (FN 최소화)
- 스팸 필터: Precision 중시 (FP 최소화)

### ROC 곡선과 AUC

- **ROC (Receiver Operating Characteristic)**: X축=FPR(1-특이도), Y축=TPR(재현율)
- **AUC (Area Under Curve)**: 0.5(무작위)~1.0(완벽), 클수록 좋음
- 클래스 불균형 시 ROC보다 **PR 곡선(Precision-Recall Curve)** 더 적합

### 회귀 성능지표

| 지표 | 공식 | 특징 |
|------|------|------|
| **MAE** (Mean Absolute Error) | Σ|y-ŷ|/n | 이상치에 강건 |
| **MSE** (Mean Squared Error) | Σ(y-ŷ)²/n | 큰 오차 가중 처벌 |
| **RMSE** | √MSE | 원래 단위로 해석 가능 |
| **R²** (결정계수) | 1-(SS_res/SS_tot) | 0~1, 모델 설명력 |

### 군집 성능지표

- **실루엣 계수(Silhouette Coefficient)**: -1~1, 클수록 군집 품질 우수
- **Davies-Bouldin Index**: 낮을수록 우수 (군집 내 응집도 ÷ 군집 간 분리도)

## 출제 포인트

- 혼동행렬의 TP/FP/FN/TN 정의와 각 지표 공식
- 1종 오류(FP) vs 2종 오류(FN) 상황별 중요도
- Precision-Recall 트레이드오프와 F1-Score의 필요성
- 불균형 데이터셋에서 Accuracy 한계와 대안 지표

## 연관 개념

- [데이터마이닝]({{< relref "/docs/03_DataProcessing/04_DataMining" >}}) — 머신러닝 기반 패턴 탐지
- [이미지 데이터 어노테이션]({{< relref "/docs/03_DataProcessing/04_DataMining/data-annotation" >}}) — 성능지표 산출의 전제
- [SOM (Self Organizing Map)]({{< relref "/docs/03_DataProcessing/04_DataMining/self-organizing-map" >}}) — 비지도 군집화 기법

## 참고 기출

- 134회 1교시 3번 (PEIM)
