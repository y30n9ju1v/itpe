---
title: "프로세스 생명주기와 문맥교환(Context Switch)"
date: 2026-07-12T13:24:19+09:00
tags: ["컴퓨터시스템", "운영체제", "프로세스", "PCB", "ContextSwitch", "문맥교환", "서브노트"]
draft: false
---

# 프로세스 생명주기와 문맥교환(Context Switch) 서브노트

> **두음 머리에 박기 🧠**
> - **뉴·레·런·웨·터** (프로세스 5대 상태: **New** 생성, **Re**ady 준비, **Run**ning 실행, **Wa**iting 대기, **Ter**minated 종료)
> - **포·엑·웨·엑** (프로세스 생성·종료 4대 시스템콜: **fo**rk, **ex**ec, **w**ait, **ex**it)
> - **피·에스·알·피** (문맥 구성요소: **P**C, **S**P, 범용 레지스터, **P**SW — 및 CR3/세그먼트 레지스터)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **프로세스 상태 다이어그램·PCB·생성/종료 및 문맥교환(Context Switch)** |
| **정의** | 디스크 정적프로그램이 메모리 적재·실행되는 동적인스턴스 **프로세스**의 New→Ready→Running→Waiting→Terminated 전이를 **PCB**로 관리하는 체계 + CPU가 실행프로세스 상태(문맥) 저장 후 타 프로세스 상태복원 → 실행권 이전하는 **문맥교환** 메커니즘 |
| **키워드** | PCB, fork/exec/wait/exit, 좀비/고아 프로세스, 문맥교환 발생조건, TLB 플러시, ASID |
| **개념도** | `New --승인--> Ready --Dispatch--> Running --타임아웃--> Ready`<br>`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Running --I/O요청--> Waiting --완료--> Ready`<br>`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Running --exit()--> Terminated`<br>`[문맥교환] ① PCB-A에 CPU상태 저장(PC,SP,레지스터,PSW) → ② 스케줄러가 B 선택 → ③ PCB-B에서 CPU상태 복원 → ④ CR3 변경(TLB 플러시)` |
| **구성요소** | 1. **상태전이 조건**: New→Ready(Admitted), Ready→Running(Dispatch), Running→Ready(타임퀀텀만료/선점), Running→Waiting(I/O·세마포어대기), Waiting→Ready(이벤트발생), Running→Terminated(exit())<br>2. **PCB 구성**: PID, 프로세스상태, PC/레지스터(CPU상태), 우선순위·큐포인터(스케줄링), 페이지/세그먼트테이블(메모리), CPU사용시간, 열린파일디스크립터<br>3. **생성/종료 시스템콜**: fork()(부모복제, CoW), exec()(새프로그램 교체), wait()(자식종료 대기), exit()(종료상태 전달) — wait() 미호출 → **좀비프로세스**, 부모조기종료 → **고아프로세스**(init 입양)<br>4. **문맥교환 발생 6대조건**: ①타임퀀텀만료 ②I/O요청 ③인터럽트발생 ④고우선순위프로세스 등장 ⑤프로세스종료 ⑥동기화대기(세마포어/뮤텍스) |
| **비교** | **프로세스 문맥교환**<br>- 주소공간전환: 필요(CR3변경, TLB플러시)<br>- 오버헤드: 높음(TLB미스 폭발, 캐시오염)<br>- 소요시간: 수십~수백μs<br><br>**스레드 문맥교환**<br>- 주소공간전환: 불필요(동일 가상주소공간 공유)<br>- 오버헤드: 낮음(레지스터만 교체)<br>- 소요시간: 수~수십μs |
| **차별화** | **문맥교환 오버헤드 최소화 및 컨테이너 프로세스 관리 실무**<br>1. **ASID 활용**: TLB플러시 없이 프로세스별 주소공간 구분 → TLB히트율 유지 → 문맥교환 비용절감<br>2. **좀비 프로세스 방지**: 도커컨테이너 PID 1이 init 역할↓ → 좀비누적 → `docker run --init` 또는 tini/dumb-init을 PID 1로 실행해 자동수집<br>3. **경량 문맥교환 전략**: Go 고루틴(M:N모델) 사용자공간스케줄러 → OS문맥교환 비용 1/10 이하 감소, CPU어피니티·NUMA최적화로 캐시재사용 극대화 |
