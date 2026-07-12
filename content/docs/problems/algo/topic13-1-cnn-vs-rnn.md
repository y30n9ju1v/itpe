---
title: "CNN과 RNN의 개념, 구성, 주요기술요소, 적용분야 비교"
date: 2026-07-12T00:00:00+09:00
tags: ["알고리즘", "핵토200", "CNN 비교", "CNN 비교"]
topic_no1: 13
topic_no2: 1
topic_large: "CNN 비교"
topic_small: "CNN 비교"
exam_ref: "모의_2018.06"
exam_type: "응용"
question_no: 2
---

## 문제

CNN과 RNN의 개념, 구성, 주요기술요소, 적용분야를 비교 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | CNN 비교 |
| 토픽(소) | CNN 비교 |
| 출제 | 모의_2018.06 |
| 유형 | 응용 |
| 번호 | 2 |

## 모범답안

### 1. CNN과 RNN 개요

정 의  • CNN(Convolutional Neural Network): 합성곱 연산으로 이미지 등 격자형 데이터의 공간적 특징을 추출하는 신경망
       - RNN(Recurrent Neural Network): 순환 구조로 이전 시점 정보를 은닉상태에 유지하며 순차 데이터를 처리하는 신경망

```
[CNN 구조]                              [RNN 구조]
입력이미지 → Conv → Pool → Conv → Pool     x₁ → [h₁] → x₂ → [h₂] → x₃ → [h₃]
   → FC → 출력(분류)                          ↑ 이전 은닉상태가 다음 입력에 영향
   (공간적 지역 특징을 계층적으로 추출)          (시간적 순서 의존성을 기억)
```

- CNN은 '공간(Spatial)' 축 지역패턴을, RNN은 '시간(Temporal)' 축 순서 의존성을 학습하도록 특화된 구조.

### 2. 구성 및 주요기술요소 비교

| 구분 | CNN | RNN |
|------|-----|-----|
| 핵심 연산 | 합성곱(Convolution) | 순환(Recurrence, 은닉상태 전달) |
| 구성 계층 | Convolution/Pooling/FC Layer | Input/Hidden/Output Layer(시점별 반복) |
| 주요 기술요소 | 필터(Kernel), Stride, Padding, Pooling | 은닉상태(Hidden State), 게이트, BPTT |
| 파라미터 공유 | 필터가 전체 이미지에 공유 | 모든 시점에서 동일 가중치 공유 |
| 대표 파생모델 | ResNet, VGG, Inception, EfficientNet | LSTM, GRU, Bi-RNN |
| 주요 한계 | 순서 정보 처리 부적합 | 기울기 소실/폭주 |
| 한계 극복 기술 | Batch Normalization, Skip Connection | LSTM 셀 상태+3-게이트(입력/망각/출력) |

```
LSTM 게이트 구조:
  Forget Gate → 과거 정보 중 버릴 것 결정
  Input  Gate → 새로운 정보 중 반영할 것 결정
  Output Gate → 다음 은닉상태로 내보낼 정보 결정
```

### 3. 적용분야 및 최근 트렌드

| 구분 | CNN | RNN |
|------|-----|-----|
| 데이터 특성 | 격자형/공간적 데이터 | 순차적/시계열 데이터 |
| 적용분야 | 이미지 분류, 객체 탐지, 의료영상 진단 | 자연어처리, 음성인식, 주가예측 |
| 대표 사례 | 자율주행 객체인식, 얼굴인식 | 챗봇, 기계번역, 시계열 이상탐지 |
| 최근 대체 흐름 | Vision Transformer(ViT) 대두 | Transformer(Self-Attention) 대두 |

- 최근 Attention 기반 Transformer가 병렬처리 이점으로 RNN의 순차처리 한계 극복, ViT가 CNN의 대안으로 부상하는 추세 증대.  "끝"
