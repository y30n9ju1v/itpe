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

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **직접 메모리 접근 (DMA, Direct Memory Access) 및 인터럽트 (Interrupt)** |
| **정의** | CPU개입 없이 I/O장치-메모리 직접전송하는 **DMA 기술** + 예외발생 시 제어권을 ISR로 전환하는 **인터럽트 하드웨어 메커니즘** |
| **키워드** | 사이클 스틸링(Cycle Stealing), 버스트 모드, 인터럽트 벡터, ISR, 시스템 콜 (System Call), IOP (채널 제어기) |
| **개념도** | `[ CPU ] ── 1. DMA 명령 (주소, 크기 전달) ──➔ [ DMA 제어기 ] ── 2. 버스 요구 (Hold/Grant) ──┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`└─ 4. 전송 완료 인터럽트 (Interrupt) 보고 ─── [ 시스템 버스 ] ◀───────────────────────┘`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ 3. 직접 데이터 전송`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ I/O 장치 ] ➔ [ 메인 메모리 ]` |
| **구성요소** | 1. **DMA 내부 레지스터**: 주소레지스터(메모리주소), 카운트레지스터(전송바이트수), 제어레지스터(R/W모드)<br>2. **ISR(인터럽트 서비스 루틴)**: 인터럽트발생 시 예외처리 수행하는 커널 소프트웨어 루틴<br>3. **인터럽트 벡터 테이블**: 종류별 ISR 시작주소(포인터) 모음 → 하드웨어 조회테이블<br>4. **시스템 콜**: 유저모드가 커널자원 요청 시 유발하는 소프트웨어 인터럽트(SVC) |
| **비교** | **사이클 스틸링 (Cycle Stealing)**<br>- **전송방식**: CPU 비사용 1클록 틈새 → 1Word단위 전송<br>- **CPU 영향**: 연산 연속성 유지(블로킹 없음)<br><br>**버스트 모드 (Burst Mode)**<br>- **전송방식**: 버스 완전점유 → 대량블록 일괄연속 전송<br>- **CPU 영향**: 전송 중 버스사용 불가 → 요구 시 블로킹 발생 |
| **차별화** | **대규모 I/O 병목 극복 IOP 및 인터럽트 오버헤드 완화**<br>1. **IOP(채널제어기) 도입**: DMA 한계(단순전송만) 극복 → 독자 I/O명령 해석/실행 전용프로세서 → CPU I/O부하 0%<br>2. **인터럽트 병합(Coalescing)**: 초고속장치 패킷당 인터럽트 → '인터럽트 폭풍' 방지 → 버퍼누적/타임아웃 묶어 1회 처리<br>3. **Scatter-Gather DMA**: 가상메모리 파편화 페이지 → 물리연속공간 복사(Buffer Copy) 오버헤드 절감 → 비연속 버퍼목록 순차전송 |
