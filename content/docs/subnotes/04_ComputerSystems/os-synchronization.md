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
| **정의** | 다중스레드 환경 데이터정합성 유지 → 공유자원 동시접근 제어 **동기화 기술** + **임계영역 제어조건(상·진·한)** + 동기화락 발생 **우선순위 역전 극복 기법** |
| **키워드** | 임계 영역, 상·진·한, Mutex, Semaphore, Monitor, 바쁜 대기(Spinlock), 우선순위 상속(PIP)/올림(PCP) |
| **개념도** | **[ 임계 영역의 흐름 및 우선순위 역전(Priority Inversion) 발생 ]**<br>`[ Low 스레드 ] ── 락 점유 ──➔ [ 임계 영역 진입 ] ─────────────────➔ 락 해제`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲ (락 대기 블로킹)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│` (우선순위 강탈)&nbsp;&nbsp;&nbsp;&nbsp;`│ (임시 상승 적용)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`[ Mid 스레드 ] ───────────── CPU 선점 (비선점 락 무시) ─────────┘`<br>&nbsp;&nbsp;&nbsp;&nbsp;`[ High 스레드 ] ────────────➔ [ 락 획득 대기 (대기 큐 지연) ] ──────➔ [ 우선순위 역전 해결 (상속) ]` |
| **구성요소** | 1. **상호배제(Mutual Exclusion)**: 한순간 단 하나의 프로세스/스레드만 임계영역 진입 보장<br>2. **뮤텍스(Mutex)**: 공유자원 잠금객체 → 소유자(Owner)만 Unlock 가능한 소유권체계<br>3. **세마포어(Semaphore)**: 공용 카운터변수 → 임의스레드 신호(V연산) 가능, 리소스 개수 통제<br>4. **모니터(Monitor)**: 언어레벨(Java 등) 공유자원 접근 상호배제 캡슐화 동기화 객체 |
| **비교** | **뮤텍스 (Mutex)**<br>- 목적: 임계영역 상호배제 독점보장<br>- 값 범위: 이진(0/1)<br>- 소유권: 존재(락획득 스레드만 해제)<br><br>**세마포어 (Semaphore)**<br>- 목적: 자원 카운팅·수행순서 제어<br>- 값 범위: 0 이상 정수(동시진입수 통제)<br>- 소유권: 없음(임의스레드 V연산 호출가능) |
| **차별화** | **RTOS 우선순위 역전 극복 및 대기 방식 최적화 실무 전략**<br>1. **우선순위 상속(PIP) 적용**: 락보유 저우선순위($L$) → 대기중 고우선순위($H$)와 동일하게 임시격상 → $Mid$ CPU선점 방지, 신속 자원반납<br>2. **스핀락 vs 뮤텍스 튜닝**: 임계구역 극단시(수μs 이하) → 컨텍스트스위칭 오버헤드 > 대기비용 → 무한루프 스핀락(바쁜대기)로 지연회피<br>3. **모니터 Condition Variable 활용**: 자원부족 대기 → `wait()`/`signal()` 조건변수 도입 → 무한루프 낭비 방지, 커널대기큐 기반 효율극대화 |
