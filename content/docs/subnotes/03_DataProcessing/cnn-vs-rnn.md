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
| **정의** | CNN: 합성곱으로 격자형데이터 공간적 지역특징 계층적 추출 신경망 / RNN: 순환구조로 은닉상태 유지 → 순차데이터 시간적 의존성 학습 신경망 |
| **키워드** | 합성곱(Convolution), Pooling, 순환(Recurrence), 은닉상태, LSTM/GRU, BPTT, Vision Transformer |
| **개념도** | `[CNN 구조]` 입력이미지 → Conv → Pool → Conv → Pool → FC → 출력(분류)<br>(공간적 지역 특징을 계층적으로 추출)<br><br>`[RNN 구조]` x₁ → [h₁] → x₂ → [h₂] → x₃ → [h₃]<br>↑ 이전 은닉상태가 다음 입력에 영향(시간적 순서 의존성 기억) |
| **구성요소** | 1. **CNN 구성**: Convolution Layer(필터/Kernel, Stride, Padding), Pooling Layer, FC Layer, 파라미터가 전체 이미지에 공유<br>2. **RNN 구성**: Input/Hidden/Output Layer가 시점별 반복, 은닉상태(Hidden State)가 모든 시점에서 동일 가중치 공유, BPTT(Backpropagation Through Time)로 학습<br>3. **CNN 한계 극복**: Batch Normalization, Skip Connection(ResNet)<br>4. **RNN 한계 극복(LSTM 게이트)**: Forget Gate(과거 정보 중 버릴 것 결정), Input Gate(새 정보 중 반영할 것 결정), Output Gate(다음 은닉상태로 내보낼 정보 결정)<br>5. **대표 파생모델**: CNN → ResNet, VGG, Inception, EfficientNet / RNN → LSTM, GRU, Bi-RNN |
| **비교** | **CNN**<br>- 핵심 연산: 합성곱(Convolution)<br>- 데이터 특성: 격자형/공간적 데이터<br>- 주요 한계: 순서 정보 처리 부적합<br>- 적용분야: 이미지 분류, 객체 탐지, 의료영상 진단(자율주행 객체인식, 얼굴인식)<br>- 최근 대체 흐름: Vision Transformer(ViT) 대두<br><br>**RNN**<br>- 핵심 연산: 순환(Recurrence, 은닉상태 전달)<br>- 데이터 특성: 순차적/시계열 데이터<br>- 주요 한계: 기울기 소실/폭주(Vanishing/Exploding Gradient)<br>- 적용분야: 자연어처리, 음성인식, 주가예측(챗봇, 기계번역, 시계열 이상탐지)<br>- 최근 대체 흐름: Transformer(Self-Attention) 대두 |
| **차별화** | **아키텍처 선택 및 최신 트렌드 대응 전략**<br>1. **데이터축 선택**: 공간특징 핵심 → CNN, 시간의존성 핵심 → RNN, 이미지시퀀스(동영상)는 CNN+RNN 결합 고려<br>2. **기울기 대응**: CNN → Skip Connection, RNN → LSTM/GRU 게이트로 기울기소실 완화<br>3. **Transformer 전환**: Attention기반 Transformer가 RNN 순차처리 한계 극복, ViT가 CNN 대안 부상 → 신규설계 시 함께 검토 |
