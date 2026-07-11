---
title: "대규모 AI 데이터센터 구축 기술"
date: 2026-07-11T11:37:56+09:00
tags: ["컴퓨터시스템", "인프라아키텍처", "데이터센터", "DCI", "저지연", "AI인프라", "서브노트"]
draft: false
---

# 대규모 AI 데이터센터 구축 기술 서브노트

> **두음 머리에 박기 🧠**
> - **알·인·로·엔·스** (AI 데이터센터 저지연 5대 기술: **R**DMA, **I**nfiniBand, **Ro**CE, **N**VLink/NVSwitch, **S**martNIC/DPU)
> - **메·롱·클** (DCI 3대 아키텍처 유형: **메**트로 DCI(<1ms), **롱**홀 Long-haul DCI, **클**라우드 DCI)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **대규모 AI 데이터센터 구축 기술 (저지연 인터커넥트 및 DCI)** |
| **정의** | LLM·생성형 AI의 수천 개 GPU 클러스터를 연결하기 위해 마이크로초 단위 저지연·PB급 데이터 처리를 지원하는 **네트워크 인터커넥트 기술**과, 지리적으로 분산된 데이터센터 간을 고대역폭·저지연으로 연결하는 **DCI(Data Center Interconnect)** 기술 |
| **키워드** | RDMA/InfiniBand/RoCE/NVLink, Spine-Leaf/Fat-Tree, 액침 냉각, DWDM/OTN, 지연 예산(Latency Budget) |
| **개념도** | `[ GPU 클러스터 노드 ] ── NVLink/NVSwitch (노드 내) ──`<br>`── RDMA/InfiniBand/RoCE (노드 간, Spine-Leaf 패브릭) ──`<br>`── DCI: DWDM/OTN/ZR+ 코히어런트 광학 (사이트 간, Metro/Long-haul) ──`<br>`→ 지연 예산: 동일 캠퍼스 <100μs, Metro <1ms, Long-haul <10ms` |
| **구성요소** | 1. **저지연 인터커넥트**: RDMA(CPU 개입없는 원격 메모리 접근), InfiniBand(HPC/AI 특화 400Gb/s+), RoCE(이더넷 위 RDMA), NVLink/NVSwitch(GPU 간 최대 900GB/s), SmartNIC/DPU(네트워크 오프로드)<br>2. **스케일링 아키텍처**: Spine-Leaf(2계층 Clos, 균등 동서 트래픽), Fat-Tree(비차단 스위칭), 컨테이너/쿠버네티스·Slurm·Ray 오케스트레이션<br>3. **쿨링 기술**: 액침 냉각(Immersion), 직접 액냉(DLC), PUE 목표 1.2 이하<br>4. **DCI 기술**: OTN/DWDM(파장 다중화), SR-IOV, MPLS-TP, ZR/ZR+ 코히어런트 광학(80km~2000km) |
| **비교** | **Metro DCI**<br>- **거리**: 도시 내 수십 km<br>- **지연**: 초저지연 (<1ms)<br>- **용도**: 동일 권역 멀티 AZ 동기화<br><br>**Long-haul DCI**<br>- **거리**: 수백~수천 km<br>- **지연**: 상대적으로 큼 (<10ms), 능동 광 증폭 필요<br>- **용도**: 재해복구(DR)용 원거리 사이트 연결 |
| **차별화** | **AI 분산 학습 병목 해소를 위한 인프라 설계 전략**<br>1. **All-reduce 병목과 인터커넥트 계층 매칭**: AI 분산 학습의 집합 통신(All-reduce)이 데이터센터 간 지연에 가장 민감하므로, 노드 내부는 NVLink, 노드 간은 InfiniBand/RoCE, 사이트 간은 DCI로 계층별 인터커넥트를 매칭하여 병목 지점을 최소화.<br>2. **Spine-Leaf 기반 스케일 아웃**: 전통적 3계층 네트워크 대비 Spine-Leaf 2계층 Clos 토폴로지는 홉 수를 줄이고 동서(East-West) 트래픽을 균등 분산시켜 대규모 GPU 클러스터의 대역폭 병목을 완화.<br>3. **전력 밀도 증가에 따른 쿨링 전략 전환**: AI 가속기의 전력 밀도가 급증함에 따라 기존 공랭 방식의 한계를 넘어 액침 냉각·직접 액냉(DLC)으로 전환하며, PUE 1.2 이하를 목표로 데이터센터 전체 에너지 효율을 관리. |
