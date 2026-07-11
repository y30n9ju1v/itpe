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

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **가상 메모리 (Virtual Memory) 및 메모리 관리 유닛 (MMU, Memory Management Unit)** |
| **정의** | 물리 메모리의 한계를 극복하기 위해 보조기억장치를 확장 활용하는 **가상 메모리 기술**과, 가상-물리 주소를 하드웨어적으로 고속 변환하고 불법 접근을 보호하는 **MMU 장치** |
| **키워드** | Paging/Segmentation, 내부/외부 단편화, TLB 캐시, Page Fault, 쓰래싱 (Thrashing), Segmentation Fault |
| **개념도** | `[ CPU (가상 주소 Virtual Address) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`├─ [ TLB 캐시 검색 (고속 변환 버퍼) ] ── Hit ──➔ [ 물리 주소 (RAM) 액세스 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼ Miss`<br>`[ MMU (Page Table Walk) ] ➔ [ Page Table (RAM 적재) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`└─➔ [ Page Fault (페이지 결함 인터럽트) ] ➔ [ OS 스왑 아웃/인 구동 (LRU 등) ] ➔ [ 스왑디스크 ]` |
| **구성요소** | 1. **MMU (하드웨어)**: 가상 주소를 물리 주소로 고속 변환, 침범 탐지(Protection Register), 다중 레벨 페이지 워킹<br>2. **TLB (Translation Lookaside Buffer)**: MMU 내에 탑재되어 최근 변환된 페이지 테이블 엔트리를 캐싱하는 연상 메모리<br>3. **페이징 (Paging)**: 가상/물리 주소 공간을 고정 크기(예: 4KB)로 분할하여 관리. 내부 단편화 가능<br>4. **세그멘테이션 (Segmentation)**: 코드, 데이터, 스택 등 논리적 단위(가변 크기)로 나누어 관리. 외부 단편화 가능 |
| **비교** | **페이징 (Paging)**<br>- **분할 단위**: 고정 크기 (Page / Frame)<br>- **단편화**: 내부 단편화 (마지막 페이지 자투리 공간 낭비)<br>- **하드웨어 구현**: 매우 용이 (가상-물리 1:1 대응)<br><br>**세그멘테이션 (Segmentation)**<br>- **분할 단위**: 가변 크기 (논리적 Segment)<br>- **단편화**: 외부 단편화 (중간 빈틈 공간 조각 발생)<br>- **하드웨어 구현**: 복잡함 (세그먼트 테이블에 크기 한계 레지스터 필요) |
| **차별화** | **시스템 쓰래싱(Thrashing) 방지 및 안전한 메모리 보호 실무 전략**<br>1. **쓰래싱 임계치 모니터링 및 복구**: CPU 이용률이 급감하고 디스크 I/O가 폭증하는 쓰래싱 발생 시, OS 단에서 프로세스 실행 주기 집합을 유지하는 **워킹 세트(Working Set)** 모델 또는 페이지 결함율의 상하한선을 유지하는 **PFF (Page Fault Frequency)** 모델을 구동하여 일시적 프로세스 서스펜드(Suspend)로 회복.<br>2. **Segmentation Fault 발생 메커니즘 제어**: NULL 포인터 역참조 또는 배열 범위 초과로 세그먼트 한계 레지스터(Limit Register)의 범위를 초과하는 불법 접근 시, MMU가 하드웨어 트랩(Trap) 인터럽트를 걸어 OS로 제어권을 넘기고 해당 프로세스에 `SIGSEGV` 시그널을 보내 비정상 전파 차단.<br>3. **다중 레벨 페이징(Multi-level Paging) 설계**: 64비트 가상 주소 체계에서 페이지 테이블이 차지하는 공간 오버헤드를 막기 위해, 페이지 테이블을 다시 페이징하여 RAM 공간을 아끼는 역페이지 테이블(Inverted Page Table) 및 계층형 페이징 적용. |
