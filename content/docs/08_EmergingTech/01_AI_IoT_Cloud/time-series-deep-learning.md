---
title: "시계열 딥러닝 (Time-Series Deep Learning)"
date: 2026-05-29T11:17:52+09:00
tags: ["peim", "최신기술", "AI", "시계열딥러닝", "LSTM", "Transformer", "전력예측", "시계열분석"]
draft: false
exam_peim: ["139회"]
---

## 개요

시계열 딥러닝은 시간적 순서를 가진 데이터(시계열)의 패턴을 딥러닝 모델로 학습하여 미래 값을 예측하거나 이상을 탐지하는 기술이다. 전력 수요 예측, 주가 예측, 센서 이상 탐지 등 다양한 분야에 활용된다.

## 핵심 내용

### 주요 시계열 딥러닝 모델

| 모델 | 특징 | 적합 상황 |
|------|------|----------|
| **LSTM** | 장기 의존성 학습, Vanishing Gradient 완화 | 중·장기 시계열, 자연어 |
| **GRU** | LSTM 경량화 버전, 빠른 학습 | 메모리 제한 환경 |
| **Transformer (시계열)** | 전역 패턴 학습, 병렬 처리 | 긴 시계열, 복수 변수 |
| **Informer** | 희소 Self-Attention, 장기 예측 최적화 | 수천 스텝 장기 예측 |
| **Temporal Fusion Transformer (TFT)** | 다변수·설명 가능 시계열 예측 | 전력·수요 예측 |
| **PatchTST** | 패치 기반 시계열 Transformer | 다변수 장기 예측 |

### 시계열 딥러닝 특징

- **순서 의존성**: 과거 관측값이 미래 예측에 영향
- **개념 드리프트(Concept Drift)**: 시간에 따른 데이터 분포 변화 대응 필요
- **다변수 시계열**: 여러 변수의 상호작용 모델링 (전력 수요 + 날씨 + 계절)
- **외부 변수(Exogenous Variable)**: 예측에 영향을 미치는 외부 요인 통합

### VPP(가상발전소)에서의 활용

- **입력**: 과거 전력 소비량, 기온, 습도, 시간대, 공휴일 여부
- **출력**: 다음 24~72시간 전력 수요 예측값
- **모델**: TFT 또는 LSTM 기반으로 분산 자원(태양광·ESS·풍력)의 발전량·소비량 예측
- **활용**: 실시간 전력 거래, ESS 충방전 계획 최적화

## 출제 포인트

- 시계열 딥러닝 주요 모델 계보(RNN→LSTM→GRU→Transformer 계열)
- LSTM의 장기 의존성 해결 원리(Forget/Input/Output Gate)
- VPP 전력 수요 예측에서의 역할과 강화학습·GNN과의 통합 구조

## 연관 개념

- [강화학습]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/reinforcement-learning" >}}) — VPP 전력 수급 최적화
- [GNN]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/gnn-graph-neural-network" >}}) — 전력망 토폴로지 기반 예측
- [AR-MA 모델]({{< relref "/docs/01_InfoStrategy/05_Statistics/ar-ma-model" >}}) — 전통 시계열 분석 기법

## 참고 기출

- 139회 4교시 5번 (PEIM)
