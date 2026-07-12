---
title: "CNN과 RNN 비교"
date: 2026-07-12T18:15:41+09:00
tags: ["자료처리", "딥러닝", "CNN", "RNN", "LSTM", "서브노트"]
draft: false
---

# CNN과 RNN 비교 서브노트

> **두음 머리에 박기 🧠**
> - **공·시** (CNN·RNN 특화 축: CNN은 **공**간(Spatial), RNN은 **시**간(Temporal))
> - **망·입·출** (LSTM 3-게이트: **망**각 게이트(Forget), **입**력 게이트(Input), **출**력 게이트(Output))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **CNN(Convolutional Neural Network) vs RNN(Recurrent Neural Network)** |
| **정의** | CNN은 합성곱 연산으로 이미지 등 격자형 데이터의 공간적 지역 특징을 계층적으로 추출하는 신경망이고, RNN은 순환 구조로 이전 시점의 정보를 은닉상태에 유지하며 순차 데이터의 시간적 순서 의존성을 학습하는 신경망이다 |
| **키워드** | 합성곱(Convolution), Pooling, 순환(Recurrence), 은닉상태, LSTM/GRU, BPTT, Vision Transformer |
| **개념도** | `[CNN 구조]` 입력이미지 → Conv → Pool → Conv → Pool → FC → 출력(분류)<br>(공간적 지역 특징을 계층적으로 추출)<br><br>`[RNN 구조]` x₁ → [h₁] → x₂ → [h₂] → x₃ → [h₃]<br>↑ 이전 은닉상태가 다음 입력에 영향(시간적 순서 의존성 기억) |
| **구성요소** | 1. **CNN 구성**: Convolution Layer(필터/Kernel, Stride, Padding), Pooling Layer, FC Layer, 파라미터가 전체 이미지에 공유<br>2. **RNN 구성**: Input/Hidden/Output Layer가 시점별 반복, 은닉상태(Hidden State)가 모든 시점에서 동일 가중치 공유, BPTT(Backpropagation Through Time)로 학습<br>3. **CNN 한계 극복**: Batch Normalization, Skip Connection(ResNet)<br>4. **RNN 한계 극복(LSTM 게이트)**: Forget Gate(과거 정보 중 버릴 것 결정), Input Gate(새 정보 중 반영할 것 결정), Output Gate(다음 은닉상태로 내보낼 정보 결정)<br>5. **대표 파생모델**: CNN → ResNet, VGG, Inception, EfficientNet / RNN → LSTM, GRU, Bi-RNN |
| **비교** | **CNN**<br>- 핵심 연산: 합성곱(Convolution)<br>- 데이터 특성: 격자형/공간적 데이터<br>- 주요 한계: 순서 정보 처리 부적합<br>- 적용분야: 이미지 분류, 객체 탐지, 의료영상 진단(자율주행 객체인식, 얼굴인식)<br>- 최근 대체 흐름: Vision Transformer(ViT) 대두<br><br>**RNN**<br>- 핵심 연산: 순환(Recurrence, 은닉상태 전달)<br>- 데이터 특성: 순차적/시계열 데이터<br>- 주요 한계: 기울기 소실/폭주(Vanishing/Exploding Gradient)<br>- 적용분야: 자연어처리, 음성인식, 주가예측(챗봇, 기계번역, 시계열 이상탐지)<br>- 최근 대체 흐름: Transformer(Self-Attention) 대두 |
| **차별화** | **아키텍처 선택 및 최신 트렌드 대응 전략**<br>1. **데이터 축에 따른 선택**: 공간(픽셀 격자) 특징이 핵심이면 CNN, 시간(순서) 의존성이 핵심이면 RNN 계열을 기본 아키텍처로 선택하되, 순서 정보가 있는 이미지 시퀀스(동영상)는 CNN+RNN 결합 구조도 고려.<br>2. **기울기 문제 대응**: 깊은 CNN은 Skip Connection으로, RNN은 LSTM/GRU 게이트 구조로 각각 기울기 소실 문제를 완화.<br>3. **Transformer로의 전환**: 최근 Attention 기반 Transformer가 병렬처리 이점으로 RNN의 순차처리 한계를 극복하고, Vision Transformer(ViT)가 CNN의 대안으로 부상하는 추세이므로 신규 설계 시 Transformer 계열도 함께 검토. |
