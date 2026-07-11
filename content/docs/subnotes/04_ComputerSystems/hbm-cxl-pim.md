---
title: "차세대 초고속 메모리 기술 HBM/CXL/PIM"
date: 2026-07-11T11:26:36+09:00
tags: ["컴퓨터시스템", "컴퓨터구조", "HBM", "CXL", "PIM", "MemoryWall", "TSV", "서브노트"]
draft: false
---

# 차세대 초고속 메모리 기술 HBM/CXL/PIM 서브노트

> **두음 머리에 박기 🧠**
> - **에이치·씨·피** (AI 가속용 3대 차세대 메모리 기술: 수직적층 **H**BM, 메모리풀링 **C**XL, 메모리내부연산 **P**IM)
> - **티·스·인** (HBM 물리 구현 핵심 3요소: 수직 관통 전극 **T**SV, 마이크로 범프 **S**older Bump, 미세 배선판 **I**nterposer)
> - **아이·캐·멤** (CXL의 3대 핵심 서브 프로토콜: 장치 설정 **C**XL.io, 가속기캐시공유 **C**XL.cache, 호스트메모리공유 **C**XL.mem)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **차세대 고성능 메모리 기술 (HBM, CXL, PIM) 및 폰 노이만 병목 극복 방안** |
| **정의** | CPU/GPU와 메모리 간 데이터 전송 지연(Memory Wall)을 타개하기 위해 고안된 수직적층형 **HBM**, 초고속 인터커넥트 **CXL**, 그리고 메모리 칩 내부 연산 기술인 **PIM** |
| **키워드** | TSV, Silicon Interposer, CXL 3대 프로토콜 (.io/.cache/.mem), Memory Pooling, PIM (Processing-In-Memory) |
| **개념도** | **[ HBM 물리 적층 구조 ]** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[ CXL Memory Pooling 자원 공유 개념 ]**<br>`[ DRAM 4 ]` ──┐ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ Host CPU 1 ] &nbsp;&nbsp;&nbsp;[ Host CPU 2 ]`<br>`[ DRAM 3 ]` &nbsp;│ (TSV 수직 관통 전극) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`\ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ (CXL Switch)`<br>`[ DRAM 2 ]` &nbsp;│ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ CXL Switch / Routing ]`<br>`[ DRAM 1 ]` ──┴──➔ [ GPU ] (인터포저 미세 배선 결합) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>`[  실리콘 인터포저 (Silicon Interposer)  ]` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[         패키지 기판 (Substrate)        ]` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ CXL 공유 메모리 풀 (Memory Pool) ]` |
| **구성요소** | 1. **HBM (High Bandwidth Memory)**: TSV 전극과 마이크로 범프로 4~12단 DRAM을 수직 적층해 1024bit 와이드 버스 구현<br>2. **CXL (Compute Express Link)**: PCIe 5.0/6.0 물리 계층을 활용해 CPU-가속기-메모리 간 가상 캐시 정합성을 유지하는 프로토콜<br>3. **PIM (Processing-In-Memory)**: 폰 노이만 병목을 근본적으로 극복하도록 DRAM 뱅크(Bank) 내부에 연산 코어(ALU) 내장<br>4. **CXL 3대 프로토콜**: **CXL.io**(장치 검색), **CXL.cache**(가속기 캐시 참조), **CXL.mem**(메모리 직접 맵핑) |
| **비교** | **HBM (고대역폭 메모리)**<br>- **핵심 특징**: 실리콘 인터포저 위에 GPU와 DRAM 물리 결합<br>- **전송 성능**: 1024비트 와이드 버스로 수백 GB/s 대역폭 보증<br>- **최적 용도**: 초고성능 AI 모델 학습(LLM), 대규모 그래픽 가속<br><br>**CXL (Compute Express Link)**<br>- **핵심 특징**: PCIe 버스 상에 가상 공유 메모리 아키텍처 구성<br>- **전송 성능**: 스위치를 통해 메모리 풀링 및 동적 자원 배분<br>- **최적 용도**: 데이터센터 서버 메모리 파편화 방지 및 확장 |
| **차별화** | **AI 거대 가속 시스템을 위한 HBM-PIM 적용 및 CXL 메모리 풀링(Memory Pooling) 구축 전략**<br>1. **HBM-PIM 기반의 메모리 전송 에너지 소모 80% 감축**: AI 추론 연산 시 가중치 데이터를 메모리에서 연산기(Processor)로 가져오는 데이터 이동 에너지 부하가 연산 자체보다 1,000배 이상 큼. 따라서 가중치 보관 메모리 뱅크 내에 ALU를 내장하는 **PIM**을 적용하여 물리 데이터 이동 자체를 원천 수축.<br>2. **CXL Memory Pooling을 통한 가상 서버 메모리 파편화(Stranded Memory) 제거**: 클라우드 가상 노드 마다 메모리가 남거나 부족해 버려지는 파편화 현상을 극복하기 위해, 가상 메모리를 CXL 스위치 기반의 공유 풀(Pool)로 구축하여 필요한 노드에 핫플러그(Hot-plug)식으로 즉시 할당.<br>3. **CXL.cache를 활용한 GPU-CPU 간 Zero-Copy 데이터 처리**: 기존 PCIe DMA 복사(HtoD Copy)로 인한 연산 지연을 줄이기 위해, GPU가 호스트 CPU 메모리를 자신의 캐시처럼 직접 일관성(Coherent) 있게 참조하도록 설정. |
