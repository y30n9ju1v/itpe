---
title: "혼동행렬(Confusion Matrix)"
date: 2026-07-12T00:00:00+09:00
tags: ["알고리즘", "핵토200", "모델 평가", "성능지표"]
topic_no1: 17
topic_no2: 2
topic_large: "모델 평가"
topic_small: "성능지표"
exam_ref: "모의_2021.01"
exam_type: "공통"
question_no: 1
---

## 문제

혼동행렬(Confusion Matrix)에 대해 설명하시오

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 모델 평가 |
| 토픽(소) | 성능지표 |
| 출제 | 모의_2021.01 |
| 유형 | 공통 |
| 번호 | 1 |

## 모범답안

### 1. 혼동행렬(Confusion Matrix)의 개념

정 의  • 분류 모델의 예측값과 실제값을 교차표 형태로 정리하여
       모델의 예측 성능을 다각도로 분석할 수 있게 하는 행렬
      - 이진 분류 기준 2x2 행렬로 구성, 다중 클래스는 NxN으로 확장

```
                    예측(Predicted)
                  Positive    Negative
실제  Positive      TP           FN
(Actual) Negative   FP           TN

TP(True Positive)  : 실제 양성을 양성으로 올바르게 예측
TN(True Negative)  : 실제 음성을 음성으로 올바르게 예측
FP(False Positive) : 실제 음성을 양성으로 잘못 예측(1종 오류)
FN(False Negative) : 실제 양성을 음성으로 잘못 예측(2종 오류)
```

- 정확도·정밀도·재현율·F1·ROC-AUC 등 모든 분류 평가지표를 산출하는 기초 자료.

### 2. 혼동행렬 기반 평가지표

| 지표 | 수식 | 의미 |
|------|------|------|
| 정확도(Accuracy) | (TP+TN)/(TP+TN+FP+FN) | 전체 예측 중 맞춘 비율 |
| 정밀도(Precision) | TP/(TP+FP) | 양성 예측 중 실제 양성 비율 |
| 재현율(Recall,TPR) | TP/(TP+FN) | 실제 양성 중 양성으로 맞춘 비율 |
| 특이도(Specificity,TNR) | TN/(TN+FP) | 실제 음성 중 음성으로 맞춘 비율 |
| F1-Score | 2·(Precision·Recall)/(Precision+Recall) | 정밀도·재현율의 조화평균 |
| FPR | FP/(FP+TN) | 실제 음성을 양성으로 오판한 비율 |

- 정밀도-재현율은 트레이드오프 관계이며 임계값(Threshold)을 낮추면 재현율↑, 정밀도↓.

### 3. 오류 유형별 우선 지표 및 활용 트렌드

| 오류 유형 | 설명 | 예시 도메인 | 우선 지표 |
|-----------|------|-------------|-----------|
| FP(1종 오류) | 정상을 이상으로 오탐 | 스팸 필터, 대출 심사 | 정밀도(Precision) 중요 |
| FN(2종 오류) | 이상을 정상으로 미탐 | 암 진단, 화재 감지, 이상거래 탐지 | 재현율(Recall) 중요 |

```
ROC Curve: TPR(재현율) vs FPR을 임계값별로 그린 곡선
  AUC(Area Under Curve): 1에 가까울수록 우수, 0.5는 랜덤 수준
```

- 클래스 불균형이 심한 경우 정확도 대신 F1-Score·PR-AUC 등 불균형에 강건한 지표 채택 증대.  "끝"
