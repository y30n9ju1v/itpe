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
| **정의** | 디스크의 정적 프로그램이 메모리에 적재되어 실행 중인 동적 인스턴스인 **프로세스**의 New→Ready→Running→Waiting→Terminated 상태 전이를 **PCB(Process Control Block)**로 관리하는 체계와, CPU가 실행 중인 프로세스의 상태(문맥)를 저장하고 다른 프로세스의 저장된 상태를 복원해 실행권을 이전하는 **문맥교환** 메커니즘 |
| **키워드** | PCB, fork/exec/wait/exit, 좀비/고아 프로세스, 문맥교환 발생조건, TLB 플러시, ASID |
| **개념도** | `New --승인--> Ready --Dispatch--> Running --타임아웃--> Ready`<br>`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Running --I/O요청--> Waiting --완료--> Ready`<br>`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Running --exit()--> Terminated`<br>`[문맥교환] ① PCB-A에 CPU상태 저장(PC,SP,레지스터,PSW) → ② 스케줄러가 B 선택 → ③ PCB-B에서 CPU상태 복원 → ④ CR3 변경(TLB 플러시)` |
| **구성요소** | 1. **프로세스 상태 전이 조건**: New→Ready(Admitted), Ready→Running(Dispatch), Running→Ready(타임퀀텀 만료/선점), Running→Waiting(I/O·세마포어 대기), Waiting→Ready(이벤트 발생), Running→Terminated(exit())<br>2. **PCB 구성**: PID, 프로세스 상태, PC/레지스터(CPU상태), 우선순위·큐포인터(스케줄링), 페이지/세그먼트 테이블(메모리), CPU 사용시간, 열린 파일 디스크립터<br>3. **생성/종료 시스템콜**: fork()(부모 복제, Copy-on-Write), exec()(메모리를 새 프로그램으로 교체), wait()(자식 종료 대기), exit()(종료 상태 전달) — wait() 미호출 시 **좀비 프로세스**, 부모 조기종료 시 자식은 init에 입양되는 **고아 프로세스**<br>4. **문맥교환 발생 6대 조건**: ① 타임퀀텀 만료 ② I/O 요청 ③ 인터럽트 발생 ④ 높은 우선순위 프로세스 등장 ⑤ 프로세스 종료 ⑥ 동기화 대기(세마포어/뮤텍스) |
| **비교** | **프로세스 문맥교환**<br>- **주소공간 전환**: 필요(CR3 변경, TLB 플러시)<br>- **오버헤드**: 높음(TLB 미스 폭발, 캐시 오염)<br>- **소요시간**: 수십~수백 μs<br><br>**스레드 문맥교환**<br>- **주소공간 전환**: 불필요(동일 가상주소공간 공유)<br>- **오버헤드**: 낮음(레지스터만 교체)<br>- **소요시간**: 수~수십 μs |
| **차별화** | **문맥교환 오버헤드 최소화 및 컨테이너 프로세스 관리 실무**<br>1. **ASID(Address Space ID) 활용**: TLB 플러시 없이 프로세스별 주소공간을 구분해 TLB 히트율을 유지하는 하드웨어 기법으로 문맥교환 비용 절감.<br>2. **좀비 프로세스 방지**: 도커 컨테이너에서 PID 1이 init 역할을 하지 않으면 좀비가 누적되므로 `docker run --init` 또는 tini/dumb-init을 PID 1로 실행해 자동 수집.<br>3. **경량 문맥교환 전략**: Go 고루틴(M:N 모델)처럼 사용자 공간 스케줄러로 OS 문맥교환 비용을 1/10 이하로 줄이거나, CPU 어피니티·NUMA 최적화로 캐시 재사용을 극대화. |
