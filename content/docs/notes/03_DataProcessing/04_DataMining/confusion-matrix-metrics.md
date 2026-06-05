---
title: "혼동행렬과 분류 성능 지표 (Confusion Matrix)"
date: 2026-05-08T23:38:40+09:00
tags: ["peim", "자료처리", "데이터마이닝", "혼동행렬", "정확도", "정밀도", "재현율", "F1-score"]
draft: false
exam_peim: ["136회"]
---

## 개요

혼동행렬(Confusion Matrix)은 분류 모델의 예측 결과를 실제 값과 비교하여 4가지 범주(TP·FP·FN·TN)로 정리한 행렬이다. 이를 바탕으로 정확도·정밀도·재현율·F1-score 등 다양한 성능 지표를 계산하여 모델을 평가한다.

## 핵심 내용

**혼동행렬 구조**

|  | 예측 Positive | 예측 Negative |
|--|-------------|-------------|
| **실제 Positive** | TP (True Positive) | FN (False Negative) |
| **실제 Negative** | FP (False Positive) | TN (True Negative) |

- TP: 양성을 양성으로 정확히 예측
- FP: 음성을 양성으로 잘못 예측 (Type I Error)
- FN: 양성을 음성으로 잘못 예측 (Type II Error)
- TN: 음성을 음성으로 정확히 예측

**성능 지표 공식 및 예시 계산**
*(TP=100, FP=5, FN=7, TN=9 기준)*

| 지표 | 공식 | 계산 | 해석 |
|------|------|------|------|
| 정확도 (Accuracy) | (TP+TN)/(TP+FP+FN+TN) | (100+9)/121 = **90%** | 전체 중 올바른 예측 비율 |
| 정밀도 (Precision) | TP/(TP+FP) | 100/105 = **95%** | 양성 예측 중 실제 양성 비율 |
| 재현율 (Recall) | TP/(TP+FN) | 100/107 = **93%** | 실제 양성 중 올바르게 탐지한 비율 |
| F1-score | 2×(P×R)/(P+R) | 2×(95×93)/(95+93) = **94%** | 정밀도와 재현율의 조화평균 |

**지표 선택 기준**
- 정밀도 우선: FP 비용이 큰 경우 (스팸 필터 → 정상 메일이 스팸 분류되면 안 됨)
- 재현율 우선: FN 비용이 큰 경우 (암 진단 → 환자를 놓치면 안 됨)
- F1-score: 불균형 데이터셋에서 정밀도·재현율 균형 평가

## 출제 포인트

- 4가지 혼동행렬 요소 정의와 의미
- 정확도·정밀도·재현율·F1-score 계산 공식
- 지표별 적합한 사용 상황 (도메인 특성에 따른 선택)

## 연관 개념

- [아웃라이어 탐지]({{< relref "/docs/notes/03_DataProcessing/04_DataMining/outlier-detection" >}}) — 이상 탐지 모델 평가에 혼동행렬 활용
- [벡터 데이터베이스와 HNSW]({{< relref "/docs/notes/03_DataProcessing/04_DataMining/vector-database-hnsw-ivf" >}}) — AI 모델 파이프라인 연계

## 참고 기출

- 136회 3교시 5번 (PEIM)
