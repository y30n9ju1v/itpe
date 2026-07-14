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
| **구성요소** | 1. **HBM**: TSV+마이크로범프 → 4~12단 DRAM 수직적층, 1024bit 와이드버스<br>2. **CXL**: PCIe 5.0/6.0 물리계층 활용 → CPU-가속기-메모리 캐시정합성 유지 프로토콜<br>3. **PIM**: DRAM 뱅크 내부 연산코어(ALU) 내장 → 폰노이만 병목 근본 해결<br>4. **CXL 3대 프로토콜**: **CXL.io**(장치검색), **CXL.cache**(가속기캐시참조), **CXL.mem**(메모리직접맵핑) |
| **비교** | **HBM (고대역폭 메모리)**<br>- 특징: 실리콘 인터포저 위 GPU-DRAM 물리결합<br>- 성능: 1024bit 와이드버스 → 수백 GB/s 대역폭<br>- 용도: 초고성능 AI 학습(LLM), 대규모 그래픽가속<br><br>**CXL (Compute Express Link)**<br>- 특징: PCIe 버스 위 가상 공유메모리 아키텍처<br>- 성능: 스위치 경유 메모리풀링 + 동적자원배분<br>- 용도: 데이터센터 서버 메모리 파편화 방지·확장 |
| **차별화** | **AI 거대 가속시스템 HBM-PIM 적용 + CXL 메모리풀링 전략**<br>1. **HBM-PIM → 전송 에너지 80% 감축**: 가중치 이동 에너지가 연산 자체보다 1,000배↑ → 뱅크 내 ALU 내장(PIM)으로 데이터이동 원천 축소<br>2. **CXL Pooling → Stranded Memory 제거**: 노드별 메모리 과부족 파편화 → CXL스위치 공유풀 구축, 핫플러그 즉시할당<br>3. **CXL.cache → GPU-CPU Zero-Copy**: 기존 PCIe DMA복사(HtoD) 지연 → GPU가 호스트메모리 캐시처럼 Coherent 직접참조 |
