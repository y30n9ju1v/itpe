---
title: "OS 동기화 기법"
date: 2026-07-11T11:19:35+09:00
tags: ["컴퓨터시스템", "운영체제", "임계영역", "뮤텍스", "세마포어", "우선순위역전", "서브노트"]
draft: false
---

# OS 동기화 기법 서브노트

> **두음 머리에 박기 🧠**
> - **상·진·한** (임계 영역 해결 3대 충족 조건: **상**호 배제 Mutual Exclusion, **진**행 Progress, **한**계 대기 Bounded Waiting)
> - **상·올** (우선순위 역전 현상 해결책 2종: 우선순위 **상**속 Inheritance, 우선순위 **올**림 Ceiling)
> - **피·브이** (세마포어 2대 연산자: **P** 연산(대기/감소 - Proberen), **V** 연산(신호/증가 - Verhogen))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **OS 프로세스 동기화 (Synchronization), 임계 영역 (Critical Section) 및 우선순위 역전** |
| **정의** | 다중 스레드 환경에서 데이터 정합성을 지키기 위해 공유 자원의 동시 접근을 제어하는 **동기화 기술** 및 **임계 영역 제어 조건(상·진·한)**과, 동기화 락에 의해 발생하는 **우선순위 역전 극복 기법** |
| **키워드** | 임계 영역, 상·진·한, Mutex, Semaphore, Monitor, 바쁜 대기(Spinlock), 우선순위 상속(PIP)/올림(PCP) |
| **개념도** | **[ 임계 영역의 흐름 및 우선순위 역전(Priority Inversion) 발생 ]**<br>`[ Low 스레드 ] ── 락 점유 ──➔ [ 임계 영역 진입 ] ─────────────────➔ 락 해제`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲ (락 대기 블로킹)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│` (우선순위 강탈)&nbsp;&nbsp;&nbsp;&nbsp;`│ (임시 상승 적용)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`[ Mid 스레드 ] ───────────── CPU 선점 (비선점 락 무시) ─────────┘`<br>&nbsp;&nbsp;&nbsp;&nbsp;`[ High 스레드 ] ────────────➔ [ 락 획득 대기 (대기 큐 지연) ] ──────➔ [ 우선순위 역전 해결 (상속) ]` |
| **구성요소** | 1. **상호 배제 (Mutual Exclusion)**: 한순간에 단 하나의 프로세스/스레드만 임계 영역에 진입함을 보장하는 조건<br>2. **뮤텍스 (Mutex)**: 공유 자원 잠금 객체. Lock의 소유자(Owner) 스레드만 Unlock할 수 있는 소유권 체계 존재<br>3. **세마포어 (Semaphore)**: 공용 카운터 변수 활용. 임의 스레드가 신호(V 연산)를 보낼 수 있으며, 리소스 개수 통제 가능<br>4. **모니터 (Monitor)**: 프로그래밍 언어 레벨(Java 등)에서 공유 자원 접근을 상호 배제 캡슐화한 동기화 객체 구조 |
| **비교** | **뮤텍스 (Mutex)**<br>- **동작 목적**: 임계 영역의 상호 배제 독점 보장<br>- **값의 범위**: 이진(0 또는 1) 상태 값만 가짐<br>- **소유권**: 존재 (락을 획득한 스레드만 해제 가능)<br><br>**세마포어 (Semaphore)**<br>- **동작 목적**: 자원의 카운팅 및 프로세스 수행 순서 제어<br>- **값의 범위**: 0 이상의 정수 값 (동시 진입 수 통제)<br>- **소유권**: 없음 (임의의 스레드가 신호 V 연산 호출 가능) |
| **차별화** | **실시간 운영체제(RTOS)의 우선순위 역전 극복 및 대기 방식 최적화 실무 전략**<br>1. **우선순위 상속 프로토콜 (Priority Inheritance Protocol) 적용**: 락을 쥐고 있는 낮은 우선순위 스레드($L$)의 우선순위를, 대기 큐에서 대기 중인 높은 우선순위 스레드($H$)의 우선순위와 같게 임시 격상시켜 $Mid$ 스레드의 CPU 선점을 방지하고 신속하게 자원을 반납하도록 통제.<br>2. **스핀락 (Spinlock) vs 뮤텍스 (Mutex)의 임계 구역 대기 튜닝**: 임계 구역 연산이 극도로 짧은 경우(예: 수 마이크로초 이하)에는 스레드를 대기 큐로 보냈다 깨우는 컨텍스트 스위칭 오버헤드가 더 크므로 CPU를 놓지 않고 무한루프로 대기하는 **스핀락(바쁜 대기)** 기법을 적용하여 연산 지연 회피.<br>3. **모니터 내 Condition Variable 활용을 통한 신호 대기화**: 모니터 동기화 사용 시 스레드의 자원 부족 대기를 위해 `wait()`와 `signal()` 조건 변수 구조를 도입하여, 무한 루프 도는 대기 낭비를 막고 커널 대기 큐 기반으로 자원 효율성 극대화. |
