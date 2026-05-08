---
title: "딥러닝 멀티 GPU 기술"
date: 2026-05-09T07:09:12+09:00
tags: ["peim", "최신기술", "AI", "GPU", "멀티GPU", "분산학습", "데이터병렬", "모델병렬"]
draft: false
exam: "134회"
---

## 개요

대규모 딥러닝 모델(LLM, 비전 모델 등)은 단일 GPU의 메모리와 연산 능력을 초과하므로, 여러 GPU를 병렬로 활용하는 멀티 GPU 기술이 필수다. 데이터 병렬화, 모델 병렬화, 파이프라인 병렬화 등 다양한 기법이 조합 사용된다.

## 핵심 내용

### 가. 멀티 GPU 기술의 개념과 장점

**개념**

여러 GPU를 연결하여 딥러닝 모델의 학습 속도를 높이거나, 단일 GPU 메모리를 초과하는 대형 모델을 분산하여 학습하는 기술

**병렬화 유형**

| 유형 | 원리 | 장점 | 적합 상황 |
|------|------|------|----------|
| **데이터 병렬화 (Data Parallelism)** | 미니배치를 여러 GPU에 분배, 각 GPU에 모델 복사본 → 그래디언트 집합(All-reduce) | 선형 확장, 구현 쉬움 | 모델이 GPU 메모리에 들어갈 때 |
| **모델 병렬화 (Model Parallelism)** | 모델의 레이어를 여러 GPU에 분산 | 메모리 초과 모델 학습 가능 | 모델이 단일 GPU 메모리 초과 |
| **파이프라인 병렬화 (Pipeline Parallelism)** | 레이어 그룹을 파이프라인으로 GPU에 배치, 미니배치를 마이크로배치로 분할 | GPU 유휴 시간(Bubble) 감소 | 모델 병렬화 효율 향상 |
| **텐서 병렬화 (Tensor Parallelism)** | 단일 레이어(행렬)를 여러 GPU에 분할 | 레이어 내 병렬 | Transformer 레이어 분산 |

**All-reduce 집합 통신**
- 데이터 병렬화에서 모든 GPU의 그래디언트를 집계하는 연산
- Ring All-reduce (NCCL): 대역폭 효율 95%+
- AllReduce 지연이 병목 → InfiniBand, NVLink 중요

**장점 요약**
- 학습 시간 단축 (GPU 수에 비례한 선형 스케일링 이상적)
- 메모리 한계 극복 (100B+ 파라미터 LLM 학습 가능)
- 비용 효율 (A100 1개 vs H100 8개 비용 대비 성능)

### 나. 멀티 GPU 환경 구축 시 고려사항

**하드웨어 측면**

| 고려사항 | 내용 |
|---------|------|
| **GPU 인터커넥트** | 동일 서버: NVLink (900GB/s), PCIe (64GB/s); 서버 간: InfiniBand, RoCE |
| **메모리 용량** | 모델 파라미터 + 옵티마이저 상태 + 그래디언트 = 실제 필요 메모리의 ~4배 |
| **GPU 동질성** | 이기종 GPU 혼합 시 최저 사양에 맞춰 성능 제한 |

**소프트웨어 측면**

| 고려사항 | 내용 |
|---------|------|
| **병렬화 전략 선택** | 3D 병렬화(데이터+모델+파이프라인) 조합 최적화 |
| **메모리 최적화** | Gradient Checkpointing (중간 활성화 재계산으로 메모리 절감) |
| **Batch Size 조정** | Global batch size = (단일 GPU batch) × GPU 수 × 그래디언트 누적 단계 |
| **통신 최적화** | Gradient Compression, Overlap communication with computation |

**운영 프레임워크**

| 프레임워크 | 특징 |
|-----------|------|
| **PyTorch DDP** | 데이터 병렬화 표준, 간단한 멀티 GPU |
| **DeepSpeed** | ZeRO 최적화 (옵티마이저 상태 분산), 조 단위 파라미터 학습 |
| **Megatron-LM** | NVIDIA의 대형 트랜스포머 병렬 학습 |
| **FSDP** | PyTorch 기반 완전 분산 학습 |

## 출제 포인트

- 데이터·모델·파이프라인·텐서 병렬화 4가지 원리 구분
- All-reduce 통신과 NVLink/InfiniBand 역할
- 멀티 GPU 구축 시 인터커넥트·메모리·배치 크기 고려사항
- DeepSpeed ZeRO의 메모리 절감 원리

## 연관 개념

- [GPU/TPU]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/gpu-tpu" >}}) — 멀티 GPU의 개별 단위
- [HBM]({{< relref "/docs/04_ComputerSystems/06_InfraArchitecture/high-bandwidth-memory" >}}) — GPU 메모리 대역폭
- [AI 데이터센터]({{< relref "/docs/04_ComputerSystems/06_InfraArchitecture/ai-datacenter-tech" >}}) — 멀티 GPU 클러스터 인프라
- [AI 윤리 및 법적 이슈]({{< relref "/docs/01_InfoStrategy/03_AI_Ethics/ai-ethics-generative-ai" >}}) — AI 시스템의 윤리적 문제

## 참고 기출

- 134회 4교시 2번
