---
title: "DMA 및 인터럽트"
date: 2026-07-11T11:19:35+09:00
tags: ["컴퓨터시스템", "컴퓨터구조", "DMA", "인터럽트", "사이클스틸링", "IOP", "서브노트"]
draft: false
---

# DMA 및 인터럽트 서브노트

> **두음 머리에 박기 🧠**
> - **전·기·외·입** (하드웨어 인터럽트 우선순위: **전**원 고장 ➔ **기**계 검사 ➔ **외**부 인터럽트 ➔ **입**출력)
> - **사·버** (DMA의 버스 점유 동작 모드: **사**이클 스틸링 Cycle Stealing, **버**스트 모드 Burst Mode)
> - **PC·PSR 저장** (인터럽트 접수 시 복구를 위해 하드웨어가 자동으로 스택에 대피시키는 핵심 레지스터: **P**rogram **C**ounter, **P**rocessor **S**tatus **R**egister)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **직접 메모리 접근 (DMA, Direct Memory Access) 및 인터럽트 (Interrupt)** |
| **정의** | CPU 개입 없이 고속 I/O 장치와 메모리가 직접 데이터를 전송하는 **DMA 기술**과, 예기치 않은 사건 발생 시 CPU의 제어권을 예외 처리 루틴(ISR)으로 전환하는 **인터럽트 하드웨어 메커니즘** |
| **키워드** | 사이클 스틸링(Cycle Stealing), 버스트 모드, 인터럽트 벡터, ISR, 시스템 콜 (System Call), IOP (채널 제어기) |
| **개념도** | `[ CPU ] ── 1. DMA 명령 (주소, 크기 전달) ──➔ [ DMA 제어기 ] ── 2. 버스 요구 (Hold/Grant) ──┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`└─ 4. 전송 완료 인터럽트 (Interrupt) 보고 ─── [ 시스템 버스 ] ◀───────────────────────┘`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ 3. 직접 데이터 전송`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ I/O 장치 ] ➔ [ 메인 메모리 ]` |
| **구성요소** | 1. **DMA 내부 레지스터**: 주소 레지스터(메모리 주소), 카운트 레지스터(전송 바이트 수), 제어 레지스터(R/W 모드)<br>2. **인터럽트 서비스 루틴 (ISR)**: 인터럽트 발생 시 실제 예외 처리를 수행하기 위해 메모리에 적재된 커널 소프트웨어 루틴<br>3. **인터럽트 벡터 테이블**: 인터럽트 종류별로 할당된 ISR의 시작 주소(포인터)를 모아놓은 하드웨어 조회 테이블<br>4. **시스템 콜 (System Call)**: 유저 모드 프로그램이 커널 자원을 요청하기 위해 유발하는 소프트웨어 인터럽트(SVC) |
| **비교** | **사이클 스틸링 (Cycle Stealing)**<br>- **전송 방식**: CPU가 시스템 버스를 사용하지 않는 1 클록 사이클 틈새를 얻어 1 Word 단위 전송<br>- **CPU 영향**: CPU 연산 연속성 유지 (블로킹 없음)<br><br>**버스트 모드 (Burst Mode)**<br>- **전송 방식**: 버스 제어권을 완전히 넘겨받아 대량 데이터 블록 전체를 일괄 연속 전송<br>- **CPU 영향**: DMA 전송 중 CPU는 버스를 사용할 수 없어 버스 요구 시 블로킹 발생 |
| **차별화** | **대규모 I/O 병목 극복을 위한 입출력 프로세서(IOP) 및 인터럽트 오버헤드 완화 전략**<br>1. **IOP(Input-Output Processor, 채널 제어기) 도입**: 단순 데이터 전송만 하는 DMA의 한계를 극복하여, 독자적인 I/O 명령어를 해석하고 실행할 수 있는 전용 프로세서(IOP)를 버스 하위에 두어 CPU의 I/O 제어 부하를 0%로 차단.<br>2. **인터럽트 병합 (Interrupt Coalescing)을 통한 성능 개선**: 기가비트 이더넷 카드 등 초고속 통신 장치에서 패킷 하나당 인터럽트를 유발하는 '인터럽트 폭풍(Interrupt Storm)' 현상을 방지하기 위해, 패킷을 버퍼에 모으거나 일정 시간(Timeout) 동안 묶어 1회의 인터럽트만 유발하도록 설정.<br>3. **Scatter-Gather DMA 활용을 통한 가상 메모리 효율화**: 가상 메모리 상에 파편화되어 흩어져 있는 페이지들을 물리 메모리의 연속된 공간으로 복사하는 오버헤드(Buffer Copy)를 줄이기 위해, 비연속적 버퍼 주소 목록을 들고 순차 전송하는 Scatter-Gather 기술 적용. |
