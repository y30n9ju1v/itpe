---
title: "교착상태 및 은행가 알고리즘"
date: 2026-07-11T11:19:35+09:00
tags: ["컴퓨터시스템", "운영체제", "교착상태", "데드락", "은행가알고리즘", "기아상태", "서브노트"]
draft: false
---

# 교착상태 및 은행가 알고리즘 서브노트

> **두음 머리에 박기 🧠**
> - **상·점·비·환** (교착상태 발생 4대 필요조건: **상**호배제 Mutual Exclusion, **점**유와 대기 Hold & Wait, **비**선점 No Preemption, **환**형대기 Circular Wait)
> - **예·회·발·복** (교착상태 4대 대응 기법: **예**방 Prevention, **회**피 Avoidance, **발**견 Detection, **복**구 Recovery)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **교착상태 (Deadlock) 및 회피를 위한 은행가 알고리즘 (Banker's Algorithm)** |
| **정의** | 프로세스간 자원 무한대기 → **교착상태 발생조건(상·점·비·환)** + 안전상태(Safe State) 유지 위한 자원할당 동적검증 **은행가 알고리즘** |
| **키워드** | 상·점·비·환, 예·회·발·복, 자원 할당 그래프, 안전/불안전 상태, 안전 순서열(Safe Sequence), 기아 상태 |
| **개념도** | **[ 자원 할당 그래프의 대기 사이클과 은행가 알고리즘의 판정 ]**<br>`[ 자원 R1 ] ── 할당 ──➔ [ 프로세스 P1 ] ── 대기 ──➔ [ 자원 R2 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`└────── 대기 ────── [ 프로세스 P2 ] ── 할당 ──────┘ (사이클 발생 ➔ 데드락)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`[ 시스템 상태 ] ── 자원 요청 ──➔ [ 은행가 알고리즘 안전 검증 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`├── 안전 (Safe State) ➔ 자원 할당`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└── 불안전 (Unsafe State) ➔ 할당 거부 및 대기` |
| **구성요소** | 1. **교착 4대조건(상·점·비·환)**: 4조건 모두 충족 시에만 교착 발생 (상호배제·점유대기·비선점·환형대기)<br>2. **은행가 알고리즘 변수**: 가용자원(Available), 최대요구(Max), 현재할당(Allocation), 추가필요(Need=Max-Allocation)<br>3. **안전상태(Safe State)**: 모든 프로세스 완료가능한 '안전순서열(Safe Sequence)' 존재 상태<br>4. **자원할당 그래프**: 프로세스(원)-자원(네모) 할당/요청 간선 → 교착 진단그래프 |
| **비교** | **교착상태 (Deadlock)**<br>- **원인**: 프로세스 간 자원 교차 점유대기<br>- **현상**: 관여 프로세스군 영구정지<br>- **해결**: 예방·회피·발견·복구<br><br>**기아상태 (Starvation)**<br>- **원인**: 스케줄러 우선순위 편향<br>- **현상**: 특정 프로세스만 실행배제 장기화<br>- **해결**: 에이징(Aging, 대기시간 비례 우선순위 격상) |
| **차별화** | **현대 OS 데드락 통제 현실 및 점진적 복구 전략**<br>1. **타조 알고리즘(Ostrich) 채택 이유**: 은행가는 최악요구량($Max$) 사전필요 + 동적환경 오버헤드($O(m·n^2)$) 과다 → 현대 범용OS는 데드락 무시·프로세스 책임위임<br>2. **자원할당그래프 정리(Reduction) 검출**: 모니터링 데몬 주기실행 → DFS로 사이클 검사 → 교착 정밀진단<br>3. **최소비용 순차 강제종료(Preemption)**: 전체크래시 방지 → (1)우선순위낮은순 (2)실행시간짧은순 (3)점유자원적은순 → 희생자(Victim) 순차종료·롤백 |
