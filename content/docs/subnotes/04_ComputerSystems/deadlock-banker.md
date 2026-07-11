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

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **교착상태 (Deadlock) 및 회피를 위한 은행가 알고리즘 (Banker's Algorithm)** |
| **정의** | 프로세스들이 서로 가진 자원을 무한정 대기하는 **교착상태 발생 조건(상·점·비·환)**과, 시스템을 항상 안전 상태(Safe State)로 유지하기 위해 자원 할당 여부를 동적 검증하는 **은행가 알고리즘** |
| **키워드** | 상·점·비·환, 예·회·발·복, 자원 할당 그래프, 안전/불안전 상태, 안전 순서열(Safe Sequence), 기아 상태 |
| **개념도** | **[ 자원 할당 그래프의 대기 사이클과 은행가 알고리즘의 판정 ]**<br>`[ 자원 R1 ] ── 할당 ──➔ [ 프로세스 P1 ] ── 대기 ──➔ [ 자원 R2 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`└────── 대기 ────── [ 프로세스 P2 ] ── 할당 ──────┘ (사이클 발생 ➔ 데드락)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`[ 시스템 상태 ] ── 자원 요청 ──➔ [ 은행가 알고리즘 안전 검증 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`├── 안전 (Safe State) ➔ 자원 할당`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└── 불안전 (Unsafe State) ➔ 할당 거부 및 대기` |
| **구성요소** | 1. **교착상태 4대 조건 (상·점·비·환)**: 네 조건이 모두 동시에 충족되어야 교착상태가 발생 (상호배제, 점유대기, 비선점, 환형대기)<br>2. **은행가 알고리즘 변수**: 가용 자원(Available), 최대 요구(Max), 현재 할당(Allocation), 추가 필요(Need = Max - Allocation)<br>3. **안전 상태 (Safe State)**: 모든 프로세스에 자원을 정상 할당하고 완료할 수 있는 '안전 순서열(Safe Sequence)'이 있는 상태<br>4. **자원 할당 그래프**: 프로세스(동그라미)와 자원(네모) 간의 할당/요청 관계를 간선으로 나타낸 교착상태 진단 그래프 |
| **비교** | **교착상태 (Deadlock)**<br>- **원인**: 여러 프로세스가 서로의 자원을 교차 점유 대기함<br>- **현상**: 시스템 전체 또는 관여된 프로세스 군이 영구 정지됨<br>- **해결**: 예방, 회피, 감출 및 복구 체계 적용<br><br>**기아상태 (Starvation)**<br>- **원인**: 스케줄러의 우선순위 정책 편향으로 선택 지연<br>- **현상**: 특정 프로세스만 오랫동안 실행을 거부당해 대기함<br>- **해결**: 에이징 (Aging - 대기 시간에 비례해 우선순위 격상) |
| **차별화** | **현대 범용 OS의 데드락 통제 현실과 검출 시 점진적 복구 전략**<br>1. **범용 OS의 타조 알고리즘 (Ostrich Algorithm) 채택 사유**: 은행가 알고리즘은 최악의 자원 요구량($Max$)을 미리 알아야 하고, 프로세스 개수가 수시로 변하는 동적 환경(현대 OS)에서는 연산 오버헤드($O(m \times n^2)$)가 너무 크기 때문에, 현대 범용 OS는 데드락을 무시하고 사용자 프로세스에 책임을 위임.<br>2. **자원 할당 그래프 정리(Reduction)를 통한 데드락 검출**: 주 주기적으로 실행되는 모니터링 데몬이 자원 할당 그래프 상의 사이클(Cycle)을 DFS 알고리즘으로 검사하여 교착상태 여부를 정밀 진단.<br>3. **최소 비용 기준의 점진적 프로세스 강제 종료 (Preemption)**: 데드락 검출 시 시스템 전체 크래시를 방지하기 위해, (1) 프로세스 우선순위가 낮은 순, (2) 실행 소요 시간이 짧은 순, (3) 점유한 자원이 적은 순으로 희생자(Victim)를 골라 하나씩 순차 강제 종료하며 롤백 실행. |
