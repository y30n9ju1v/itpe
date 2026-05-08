---
title: "GPU와 TPU (AI 학습 전용 프로세서 비교)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "최신기술", "AI", "GPU", "TPU", "딥러닝", "하드웨어"]
draft: false
exam: "138회"
---

## 개요

GPU(Graphics Processing Unit)는 병렬 부동소수점 연산에 특화된 범용 병렬 프로세서로, CUDA 생태계를 통해 AI 학습의 표준 플랫폼이 되었다. TPU(Tensor Processing Unit)는 Google이 TensorFlow 행렬 연산 최적화를 위해 설계한 AI 전용 ASIC으로, 에너지 효율과 추론 속도에서 GPU를 능가한다.

## 핵심 내용

### GPU vs TPU 비교

| 구분 | GPU | TPU |
|------|-----|-----|
| 설계 목적 | 범용 그래픽·병렬 연산 | 텐서(행렬) 연산 전용 |
| 제조사 | NVIDIA, AMD | Google (Cloud TPU) |
| 연산 단위 | CUDA Core (FP32/FP16) | Systolic Array (INT8/BF16) |
| 메모리 | HBM2/3 (GPU 내부) | HBM + 대용량 온칩 |
| 에너지 효율 | 보통 | 매우 높음 |
| 프레임워크 지원 | PyTorch, TensorFlow, CUDA | TensorFlow, JAX (제한적) |
| 유연성 | 높음 (다양한 연산) | 낮음 (행렬 연산 중심) |
| 비용 | H100: $30,000+ | Cloud TPU 시간당 과금 |

### Systolic Array (TPU 핵심 구조)

데이터를 규칙적으로 흘려보내며 곱셈-누산(MAC) 연산을 파이프라인 처리. 메모리 접근 최소화로 에너지 효율 극대화.

### 최근 TPU 선호 이유

1. **추론 비용 절감**: 대규모 서비스에서 단위당 처리 비용 낮음
2. **Google 생태계 최적화**: TensorFlow·JAX 워크로드에서 성능 우위
3. **Pod 구성**: 수천 개 TPU 코어를 저지연 연결, 대형 모델 학습 가능
4. **전력 효율**: 동일 성능 대비 GPU 대비 낮은 전력 소비

### TPU 효율성 장점 및 향후 전망

- **FLOPS/Watt**: GPU 대비 2~5배 에너지 효율 (모델 크기에 따라 상이)
- **향후 전망**: AI 워크로드 폭증에 따라 전용 ASIC 수요 증가. Google TPU v5p, 삼성 Mach-1 등 경쟁 심화. 국내: NAVER HyperClova X에 TPU 일부 활용

## 출제 포인트

- GPU와 TPU의 구조적 차이(범용 vs 전용 ASIC) 명확히 서술
- Systolic Array 구조와 에너지 효율의 연관성
- TPU 선호 이유를 비용·성능·생태계 측면에서 서술

## 연관 개념

- [AI RMF]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/ai-rmf" >}}) — AI 인프라 위험관리
- 클라우드 인프라 — Cloud TPU 서비스 연계
- 빅데이터 분석 — 대규모 모델 학습 인프라

## 참고 기출

- 138회 2교시 3번
