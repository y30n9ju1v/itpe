---
title: "AI 학습 하드웨어 (GPU·TPU) 및 멀티 GPU 분산학습"
date: 2026-07-11T11:38:09+09:00
tags: ["최신기술", "AI", "GPU", "TPU", "멀티GPU", "분산학습", "서브노트"]
draft: false
---

# AI 학습 하드웨어 (GPU·TPU) 및 멀티 GPU 분산학습 서브노트

> **두음 머리에 박기 🧠**
> - **CUDA·시스톨릭** (GPU vs TPU 연산 단위 대비: GPU=**CUDA** Core(범용), TPU=**시스톨릭** Array(텐서 전용 파이프라인))
> - **데·모·파·텐** (멀티 GPU 4대 병렬화 유형: **데**이터 병렬화, **모**델 병렬화, **파**이프라인 병렬화, **텐**서 병렬화)
> - **인·메·배·통** (멀티 GPU 환경 구축 4대 고려사항: **인**터커넥트(NVLink/InfiniBand), **메**모리 용량, **배**치 크기, **통**신 최적화)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **AI 학습 전용 프로세서 (GPU/TPU) 및 딥러닝 멀티 GPU 분산학습 기술** |
| **정의** | 병렬 부동소수점 연산에 특화된 범용 프로세서 **GPU**와 텐서 연산 전용 ASIC **TPU**를 비교하고, 단일 GPU 한계를 초과하는 대형 모델을 여러 GPU에 분산 학습시키는 **멀티 GPU 기술** |
| **키워드** | CUDA Core vs Systolic Array, FLOPS/Watt, 데이터/모델/파이프라인/텐서 병렬화, All-reduce, DeepSpeed ZeRO |
| **개념도** | **[ 멀티 GPU 데이터 병렬화 + All-reduce ]**<br>`[GPU1: 모델복사본+미니배치1] [GPU2: 모델복사본+미니배치2] ... [GPUn]`<br>`   ↓ 각자 그래디언트 계산`<br>`   → Ring All-reduce(NCCL)로 전체 GPU 그래디언트 집계 →  전 GPU 가중치 동기화 갱신` |
| **구성요소** | 1. **GPU (CUDA Core)**: 범용 병렬 연산, PyTorch/TensorFlow 폭넓은 생태계 지원, H100 등 고가<br>2. **TPU (Systolic Array)**: MAC 연산 파이프라인 처리로 메모리 접근 최소화, GPU 대비 2~5배 에너지 효율<br>3. **데이터 병렬화**: 미니배치를 GPU별로 분배, All-reduce로 그래디언트 집계 (구현 쉬움)<br>4. **모델/파이프라인/텐서 병렬화**: 레이어·마이크로배치·행렬을 GPU 간 분할해 메모리 초과 대형 모델 학습<br>5. **DeepSpeed ZeRO**: 옵티마이저 상태까지 GPU 간 분산시켜 조 단위 파라미터 학습 지원 |
| **비교** | **GPU**<br>- 설계 목적: 범용 그래픽·병렬 연산 (유연성 높음)<br>- 프레임워크: PyTorch/TensorFlow/CUDA 광범위 지원<br><br>**TPU**<br>- 설계 목적: 텐서(행렬) 연산 전용 ASIC (유연성 낮음)<br>- 프레임워크: TensorFlow/JAX 제한적 지원, Pod 구성으로 대형 모델 학습 |
| **차별화** | **초거대 모델 학습 3D 병렬화 및 인터커넥트 설계 전략**<br>1. **3D 병렬화 조합 최적화**: 데이터+모델+파이프라인 병렬화 → 모델규모별 조합 → GPU 유휴시간(Bubble) 최소화, 선형에 가까운 확장성<br>2. **인터커넥트 계층 설계**: 서버내부 NVLink(900GB/s), 서버간 InfiniBand/RoCE → All-reduce 병목제거, GPU 이기종혼합 지양<br>3. **메모리 최적화 기법 결합**: Gradient Checkpointing(활성화 재계산)으로 메모리절감 + Gradient Compression·통신-연산 오버랩으로 병목완화 |
