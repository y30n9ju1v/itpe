---
title: "병렬 컴퓨팅 및 NPU AI 가속기"
date: 2026-07-11T11:37:56+09:00
tags: ["컴퓨터시스템", "컴퓨터구조", "병렬컴퓨팅", "Flynn분류", "NPU", "AI가속기", "GPU", "GPGPU", "서브노트"]
draft: false
---

# 병렬 컴퓨팅 및 GPU·NPU AI 가속기 서브노트

> **두음 머리에 박기 🧠**
> - **SISD·SIMD·MISD·MIMD** (Flynn 분류 4종: 명령어/데이터 스트림 단일·다중 조합 - **S**ingle/**M**ultiple **I**nstruction, **S**ingle/**M**ultiple **D**ata)
> - **비·명·작·데** (병렬 처리 구현 4수준: **비**트 수준, **명**령어 수준(ILP), **작**업 수준(TLP), **데**이터 병렬)
> - **맥·온·디·활·양** (NPU 5대 구성요소: **맥** MAC 어레이, **온**칩 SRAM, **디**MA 컨트롤러, **활**성화 함수 유닛, **양**자화 지원)
> - **큐·에스·와·텐** (GPU 4대 구성요소: **큐**다코어(CUDA Core), **에스**엠(SM, Streaming Multiprocessor), **와**프(Warp), **텐**서코어(Tensor Core))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **병렬 컴퓨팅 (Parallel Computing, Flynn 분류), GPU/GPGPU 및 신경망 처리장치 (NPU)** |
| **정의** | 여러 프로세서·코어 → 문제 동시분할 처리 **병렬컴퓨팅** + 수천~수만 단순코어 대규모 병렬처리 특화 **GPU**(그래픽 외 범용활용 = **GPGPU**) + 딥러닝 행렬곱·컨볼루션 특화, 전력효율(TOPS/W) 우수 전용병렬프로세서 **NPU** 총칭 |
| **키워드** | Flynn 분류(SISD/SIMD/MISD/MIMD), 암달의 법칙, MAC 어레이, TOPS/W, SIMT, CUDA Core/SM/Warp |
| **개념도** | `[ Flynn 분류 ]`<br>`SISD(단일코어) → SIMD(GPU/벡터연산, NPU 유사) → MIMD(멀티코어/클러스터)`<br>`[ CPU vs GPU 설계철학 ]`<br>`CPU: 소수의 강력한 코어(4~64개)+대형캐시+분기예측(직렬·저지연 최적화)`<br>`GPU: SM(Streaming Multiprocessor) 다수 × CUDA Core 수천~수만개(병렬·고처리량 최적화)`<br>`[ NPU 데이터 흐름 ]`<br>`외부 메모리 --DMA--> [ 온칩 SRAM (가중치/활성화값) ] → [ MAC 어레이 병렬 연산 ] → [ 활성화 함수 유닛 ] → 출력` |
| **구성요소** | 1. **Flynn 분류**: SISD(단일코어), SIMD(GPU·벡터프로세서), MISD(이론적), MIMD(멀티코어·클러스터)<br>2. **암달의 법칙**: S = 1/(P+(1-P)/N) → 직렬비율(P)이 병렬화 성능향상 상한 결정<br>3. **GPU 아키텍처**: CUDA Core(단순연산코어, 수천~수만개), SM(수십~수백 CUDA코어 묶음), SIMT(Warp 32스레드 동시실행, 분기시 Warp Divergence→성능↓), Tensor Core(행렬곱 전용HW)<br>4. **GPGPU 활용영역**: AI/ML 학습·추론, 과학계산(CFD·분자동역학), 암호화폐 해시, 몬테카를로 시뮬레이션 — CUDA(NVIDIA)/OpenCL(벤더중립)/ROCm(AMD)<br>5. **NPU 핵심요소**: MAC 어레이(행렬곱 기본단위), 온칩SRAM(대역폭 절약), 양자화(INT8/INT4, 전력·메모리 절감)<br>6. **메모리구조**: 공유메모리(SMP, 캐시일관성 이슈) vs 분산메모리(클러스터, MPI, 높은확장성) |
| **비교** | **CPU**<br>- 코어수/설계: 4~64개, 복잡(분기예측·OoO)<br>- 캐시: 크고지능적(수십MB L3)<br>- 적합워크로드: 순차·복잡분기·저지연<br><br>**GPU**<br>- 코어수/설계: 수천~수만개, 단순(SIMT)<br>- 캐시: 작고단순(공유L2), 대역폭~4TB/s(HBM3)<br>- 적합워크로드: 대규모병렬·규칙적데이터(행렬곱)<br><br>**NPU (AI추론 특화)**<br>- 코어수: 수백~수천 MAC유닛<br>- 용도: 온디바이스AI추론(Edge AI), TOPS/W 최우선 |
| **차별화** | **온디바이스 AI 구현을 위한 병렬 아키텍처 선택 전략**<br>1. **병렬화 한계-하드웨어 선택**: 암달의법칙 → 직렬비율↑ 워크로드는 코어↑해도 향상 제한 → AI추론(SIMD/SIMT) → NPU/GPU, 제어로직 → CPU 배치(이기종컴퓨팅)<br>2. **Warp Divergence 방지**: CUDA커널 if-else 분기 → Warp내 스레드 경로상이 → 성능 최대32배↓ → 브랜치리스 패턴/분기방향 사전정렬로 Warp Efficiency 확보<br>3. **NPU 전력효율 활용**: 자율주행ECU·엣지비전검사(100ms 이하+저전력) → GPU 대비 TOPS/W↑인 NPU채택 → 배터리·발열 제약 해소<br>4. **공유 vs 분산메모리 트레이드오프**: 대규모AI학습클러스터 → 분산메모리(MPI, 확장성↑), 단일노드 내 다중코어 → 공유메모리(빠른통신) 하이브리드 설계 |
