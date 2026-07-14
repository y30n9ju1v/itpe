---
title: "MMU 및 가상메모리"
date: 2026-07-11T11:19:35+09:00
tags: ["컴퓨터시스템", "운영체제", "가상메모리", "MMU", "TLB", "페이징", "세그멘테이션", "서브노트"]
draft: false
---

# MMU 및 가상메모리 서브노트

> **두음 머리에 박기 🧠**
> - **페·세·티** (가상 메모리 변환 축: **페**이징 Paging, **세**그멘테이션 Segmentation, 고속 변환 캐시 **T**LB)
> - **피·엘·엘·엔** (페이지 교체 알고리즘: **F**IFO, **L**RU, **L**FU, **N**UR)
> - **워·피** (쓰래싱 방지 기법 2종: **워**킹 세트 Working Set, **P**FF 페이지 결함 빈도)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **가상 메모리 (Virtual Memory) 및 메모리 관리 유닛 (MMU, Memory Management Unit)** |
| **정의** | 물리 메모리의 한계를 극복하기 위해 보조기억장치를 확장 활용하는 **가상 메모리 기술**과, 가상-물리 주소를 하드웨어적으로 고속 변환하고 불법 접근을 보호하는 **MMU 장치** |
| **키워드** | Paging/Segmentation, 내부/외부 단편화, TLB 캐시, Page Fault, 쓰래싱 (Thrashing), Segmentation Fault |
| **개념도** | `[ CPU (가상 주소 Virtual Address) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`├─ [ TLB 캐시 검색 (고속 변환 버퍼) ] ── Hit ──➔ [ 물리 주소 (RAM) 액세스 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼ Miss`<br>`[ MMU (Page Table Walk) ] ➔ [ Page Table (RAM 적재) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`└─➔ [ Page Fault (페이지 결함 인터럽트) ] ➔ [ OS 스왑 아웃/인 구동 (LRU 등) ] ➔ [ 스왑디스크 ]` |
| **구성요소** | 1. **MMU (하드웨어)**: 가상→물리주소 고속변환, 침범탐지(Protection Register), 다중레벨 페이지워킹<br>2. **TLB (Translation Lookaside Buffer)**: MMU 내장, 최근 변환된 페이지테이블 엔트리 캐싱 연상메모리<br>3. **페이징 (Paging)**: 가상/물리 주소공간을 고정크기(예 4KB) 분할관리, 내부단편화 가능<br>4. **세그멘테이션 (Segmentation)**: 코드·데이터·스택 등 논리단위(가변크기) 분할관리, 외부단편화 가능 |
| **비교** | **페이징 (Paging)**<br>- 분할단위: 고정크기 (Page/Frame)<br>- 단편화: 내부단편화 (마지막페이지 자투리 낭비)<br>- HW구현: 매우용이 (가상-물리 1:1 대응)<br><br>**세그멘테이션 (Segmentation)**<br>- 분할단위: 가변크기 (논리적 Segment)<br>- 단편화: 외부단편화 (중간 빈틈 조각발생)<br>- HW구현: 복잡함 (세그먼트테이블에 한계레지스터 필요) |
| **차별화** | **시스템 쓰래싱 방지 + 안전한 메모리보호 실무전략**<br>1. **쓰래싱 임계치 모니터링·복구**: CPU이용률 급감+디스크I/O 폭증 시 → **워킹세트(Working Set)**(실행주기 집합 유지) or **PFF**(페이지결함율 상하한 유지) 모델 구동 → 일시 프로세스 서스펜드로 회복<br>2. **Segmentation Fault 메커니즘 제어**: NULL포인터 역참조·배열범위 초과 → 한계레지스터 초과 불법접근 → MMU 하드웨어 트랩(Trap) → OS 제어권 이양 → `SIGSEGV` 전송, 비정상전파 차단<br>3. **다중레벨 페이징 설계**: 64비트 가상주소체계 페이지테이블 공간오버헤드 방지 → 역페이지테이블(Inverted Page Table)·계층형 페이징 적용<br>4. **MMU vs IOMMU 구분**: MMU=CPU 가상-물리 변환(프로세스 메모리관리) / IOMMU(칩셋·PCIe)=I/O장치 DMA 접근제어, 불허영역 DMA 차단(DMA공격 방지), SR-IOV·GPU패스스루 핵심. TLB는 ASID로 컨텍스트스위치 시 플러시 없이 구분→성능저하 완화 |
