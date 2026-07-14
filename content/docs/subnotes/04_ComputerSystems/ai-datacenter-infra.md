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

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **대규모 AI 데이터센터 구축 기술 (저지연 인터커넥트 및 DCI)** |
| **정의** | 수천 GPU 클러스터 연결용 마이크로초급 저지연·PB급 **네트워크 인터커넥트 기술** + 분산 데이터센터 간 고대역폭·저지연 연결 **DCI** 기술 |
| **키워드** | RDMA/InfiniBand/RoCE/NVLink, Spine-Leaf/Fat-Tree, 액침 냉각, DWDM/OTN, 지연 예산(Latency Budget) |
| **개념도** | `[ GPU 클러스터 노드 ] ── NVLink/NVSwitch (노드 내) ──`<br>`── RDMA/InfiniBand/RoCE (노드 간, Spine-Leaf 패브릭) ──`<br>`── DCI: DWDM/OTN/ZR+ 코히어런트 광학 (사이트 간, Metro/Long-haul) ──`<br>`→ 지연 예산: 동일 캠퍼스 <100μs, Metro <1ms, Long-haul <10ms` |
| **구성요소** | 1. **저지연 인터커넥트**: RDMA(CPU 개입없는 원격 메모리 접근), InfiniBand(HPC/AI 특화 400Gb/s+), RoCE(이더넷 위 RDMA), NVLink/NVSwitch(GPU 간 최대 900GB/s), SmartNIC/DPU(네트워크 오프로드)<br>2. **스케일링 아키텍처**: Spine-Leaf(2계층 Clos, 균등 동서 트래픽), Fat-Tree(비차단 스위칭), 컨테이너/쿠버네티스·Slurm·Ray 오케스트레이션<br>3. **쿨링 기술**: 액침 냉각(Immersion), 직접 액냉(DLC), PUE 목표 1.2 이하<br>4. **DCI 기술**: OTN/DWDM(파장 다중화), SR-IOV, MPLS-TP, ZR/ZR+ 코히어런트 광학(80km~2000km) |
| **비교** | **Metro DCI**<br>- **거리**: 도시 내 수십 km<br>- **지연**: 초저지연 (<1ms)<br>- **용도**: 동일 권역 멀티 AZ 동기화<br><br>**Long-haul DCI**<br>- **거리**: 수백~수천 km<br>- **지연**: 상대적으로 큼 (<10ms), 능동 광 증폭 필요<br>- **용도**: 재해복구(DR)용 원거리 사이트 연결 |
| **차별화** | **AI 분산 학습 병목 해소 인프라 설계 전략**<br>1. **All-reduce 병목 ↔ 인터커넥트 계층 매칭**: 지연 민감 집합통신 → 노드내 NVLink·노드간 InfiniBand/RoCE·사이트간 DCI 계층 매칭 → 병목 최소화<br>2. **Spine-Leaf 스케일 아웃**: 3계층 대비 2계층 Clos → 홉 수 감소, 동서(East-West) 트래픽 균등분산 → 대역폭 병목 완화<br>3. **전력밀도 급증 → 쿨링 전환**: 공랭 한계 → 액침냉각·직접액냉(DLC) 전환, PUE 1.2 이하 목표 |
