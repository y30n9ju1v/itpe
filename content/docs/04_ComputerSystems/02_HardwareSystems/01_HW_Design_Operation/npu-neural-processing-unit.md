---
title: "NPU (신경망 처리장치, Neural Processing Unit)"
date: 2026-05-09T14:07:16+09:00
tags: ["pecs", "하드웨어시스템", "HW설계", "NPU", "AI가속기", "온디바이스AI", "딥러닝"]
draft: false
exam_pecs: ["134회"]
---

## 개요

NPU(Neural Processing Unit)는 딥러닝 신경망 연산에 특화된 전용 프로세서다. 행렬 곱셈·컨볼루션 등 AI 추론에 반복되는 연산을 병렬로 처리하며, CPU·GPU 대비 소비전력 대비 성능(TOPS/W)이 월등하다. 온디바이스 AI 구현의 핵심 하드웨어다.

## 핵심 내용

### CPU·GPU·NPU 비교

| 구분 | CPU | GPU | NPU |
|------|-----|-----|-----|
| **특화 연산** | 범용 순차 처리 | 그래픽·병렬 계산 | 신경망 행렬 연산 |
| **코어 수** | 수십 개 | 수천~수만 개 | 수백~수천 MAC 유닛 |
| **AI 추론 효율** | 낮음 | 중간 | 높음 |
| **전력 효율** | 낮음 | 중간 | 높음 |
| **용도** | OS, 제어 로직 | 학습, 렌더링 | 추론(Edge AI) |

### NPU 핵심 구성 요소

| 구성요소 | 역할 |
|---------|------|
| **MAC 어레이 (Multiply-Accumulate)** | 행렬 곱셈의 기본 단위, 대량 병렬 배치 |
| **온-칩 SRAM** | 가중치·활성화값 임시 저장, 메모리 대역폭 절약 |
| **DMA 컨트롤러** | 외부 메모리와 NPU 간 데이터 고속 전송 |
| **활성화 함수 유닛** | ReLU, Sigmoid 등 비선형 함수 하드웨어 처리 |
| **양자화 지원** | INT8/INT4 연산으로 메모리·전력 절감 |

### 주요 NPU 제품

| 제조사 | NPU | 적용 제품 |
|-------|-----|---------|
| Apple | Neural Engine | iPhone A/M 시리즈 |
| Qualcomm | Hexagon NPU | Snapdragon |
| Samsung | Exynos NPU | 갤럭시 스마트폰 |
| Google | Tensor Processing Unit | Pixel, GCP |
| 화웨이 | Ascend NPU | Mate 시리즈 |

### NPU 성능 지표

- **TOPS (Tera Operations Per Second)**: 초당 조 단위 연산 횟수
- **TOPS/W**: 전력 대비 성능 (온디바이스 AI에서 핵심 지표)
- 예) Apple M4 Neural Engine: 38 TOPS

## 실무 적용 예시

- 스마트폰 카메라: 실시간 피사체 인식·배경 분리(온디바이스)
- 자율주행 ECU: 도로 객체 인식, 100ms 이하 응답 요구
- 스마트팩토리 엣지 장비: 비전 검사(불량 탐지)를 현장 NPU에서 처리

## 출제 포인트

- NPU vs CPU·GPU 차이: AI 추론 특화, 전력 효율
- MAC 어레이 구조와 행렬 곱셈 병렬화
- TOPS/W 성능 지표
- 온디바이스 AI·엣지 AI 구현의 핵심 HW

## 연관 개념

- [클라우드 AI vs 온디바이스 AI]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/cloud-ai-vs-ondevice-ai" >}}) — NPU가 온디바이스 AI의 핵심 HW
- [GPU/TPU]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/gpu-tpu" >}}) — AI 학습용 가속기와의 비교

## 참고 기출

- 134회 1교시 8번 (PECS)
