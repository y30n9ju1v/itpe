---
title: "PR 곡선과 ROC 곡선 비교"
date: 2026-05-09T00:00:00+09:00
tags: ["peim", "자료처리", "데이터마이닝", "PR곡선", "ROC곡선", "AUC", "정밀도", "재현율"]
draft: false
exam: "135회"
---

## 개요

PR 곡선(Precision-Recall Curve)과 ROC 곡선(Receiver Operating Characteristic Curve)은 분류 모델의 성능을 평가하는 시각화 도구다. PR 곡선은 불균형 데이터에, ROC 곡선은 균형 데이터에 적합하다.

## 핵심 내용

### 혼동 행렬 기반 지표

| 지표 | 공식 | 의미 |
|------|------|------|
| 정밀도(Precision) | TP / (TP+FP) | 양성 예측 중 실제 양성 비율 |
| 재현율(Recall) / TPR | TP / (TP+FN) | 실제 양성 중 올바르게 예측된 비율 |
| FPR(False Positive Rate) | FP / (FP+TN) | 실제 음성 중 양성으로 잘못 예측된 비율 |

### PR 곡선

- **축**: X축 = Recall, Y축 = Precision
- **AUC-PR**: 곡선 아래 면적 → 1에 가까울수록 우수
- **특징**: 양성 클래스 성능에 집중, 불균형 데이터에서 유리
- **사용 예**: 사기 탐지, 의료 진단 (양성 희귀)

### ROC 곡선

- **축**: X축 = FPR, Y축 = TPR(Recall)
- **AUC-ROC**: 곡선 아래 면적 → 0.5(랜덤)~1.0(완벽)
- **특징**: 임계값 변화에 따른 민감도/특이도 트레이드오프 시각화
- **사용 예**: 클래스 균형 분류 문제

### 비교

| 구분 | PR 곡선 | ROC 곡선 |
|------|---------|---------|
| 관심 축 | Precision vs Recall | TPR vs FPR |
| 강점 | 불균형 데이터 | 균형 데이터 |
| 음성 클래스 영향 | 거의 없음 | TN 포함 |
| 면적 지표 | AUC-PR | AUC-ROC |
| 해석 | 양성 예측 품질 | 전체 분류 능력 |

## 출제 포인트

- Precision·Recall·FPR 공식과 혼동 행렬 연결
- 불균형 데이터에서 PR 곡선이 더 적합한 이유: ROC는 TN이 많아 AUC가 과대평가될 수 있음
- AUC 해석: 두 곡선 모두 1.0이 최적

## 연관 개념

- [혼동 행렬과 분류 지표]({{< relref "/docs/peim/03_DataProcessing/04_DataMining/confusion-matrix-metrics" >}}) — TP/FP/TN/FN 기반 지표
- [실루엣 계수]({{< relref "/docs/peim/03_DataProcessing/04_DataMining/silhouette-coefficient" >}}) — 클러스터링 평가 지표

## 참고 기출

- 135회 1교시 1번
