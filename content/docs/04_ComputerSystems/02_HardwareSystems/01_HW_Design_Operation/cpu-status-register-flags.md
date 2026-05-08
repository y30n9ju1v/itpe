---
title: "CPU 상태 레지스터 조건 플래그"
date: 2026-05-09T07:34:17+09:00
tags: ["pecs", "컴퓨터시스템", "하드웨어", "CPU", "상태레지스터", "조건플래그", "조건분기"]
draft: false
exam: "138회"
---

## 개요

CPU 상태 레지스터(Status Register, SR) 또는 프로그램 상태 워드(PSW)는 ALU 연산 결과 및 CPU 동작 상태를 나타내는 플래그들을 저장하는 레지스터다. 조건 분기 명령어(BEQ, BNE, BGT 등)는 이 플래그 상태를 확인하여 분기 여부를 결정한다.

## 핵심 내용

### 조건 플래그 종류

| 플래그 | 기호 | 이름 | 설정 조건 | 사용 예 |
|--------|------|------|----------|--------|
| **음수 플래그** | N | Negative | 연산 결과의 MSB(최상위 비트) = 1 | 음수 판별 |
| **영 플래그** | Z | Zero | 연산 결과 = 0 | 같음 비교 (BEQ) |
| **올림수 플래그** | C | Carry | 부호 없는 덧셈에서 자리올림 발생 | 부호 없는 오버플로우 |
| **오버플로우 플래그** | V | Overflow | 부호 있는 연산에서 결과 범위 초과 | 부호 있는 오버플로우 |
| **인터럽트 비트** | I | Interrupt | 인터럽트 활성화/비활성화 상태 | ISR 진입/복귀 |

### 플래그 설정 예시

**덧셈 (부호 있는 8비트, 0111 1111 + 0000 0001):**
```
  0111 1111 (= 127)
+ 0000 0001 (= 1)
-----------
  1000 0000 (= -128 부호 있는 해석)
N = 1 (MSB=1, 음수)
Z = 0 (결과 ≠ 0)
C = 0 (자리올림 없음)
V = 1 (양수+양수=음수, 오버플로우 발생)
```

**뺄셈을 비교로 사용 (CMP A, B → A-B 수행, 결과 버림):**
```
A = B → Z = 1  → BEQ 분기
A > B → Z = 0, N = 0, V = 0  → BGT 분기
A < B → N ≠ V  → BLT 분기
```

### 조건 분기 명령어와 플래그 관계

| 분기 명령어 | 조건 | 사용 플래그 |
|------------|------|------------|
| BEQ (Equal) | Z = 1 | Z |
| BNE (Not Equal) | Z = 0 | Z |
| BLT (Less Than, signed) | N ≠ V | N, V |
| BGT (Greater Than, signed) | Z = 0 AND N = V | Z, N, V |
| BCS/BCC (Carry Set/Clear) | C = 1 / C = 0 | C |
| BVS/BVC (Overflow Set/Clear) | V = 1 / V = 0 | V |
| BMI/BPL (Minus/Plus) | N = 1 / N = 0 | N |

### ARM과 x86 비교

| 아키텍처 | 레지스터 명칭 | 플래그 |
|---------|------------|--------|
| **ARM** | CPSR (Current Program Status Register) | N, Z, C, V, Q |
| **x86** | EFLAGS/RFLAGS | ZF, SF, CF, OF, PF, AF 등 |

## 출제 포인트

- 4가지 핵심 플래그: N(음수), Z(영), C(올림수), V(오버플로우) 조건 서술
- C 플래그(부호 없는)와 V 플래그(부호 있는) 차이 명확히
- CMP 명령어가 뺄셈 수행 후 플래그만 설정하는 원리
- BEQ, BNE, BLT 분기 명령어가 어느 플래그를 검사하는지

## 연관 개념

- [CPU 내부 레지스터]({{< relref "/docs/04_ComputerSystems/02_HardwareSystems/01_HW_Design_Operation/cpu-registers" >}}) — 레지스터 전체 종류
- [데드락]({{< relref "/docs/04_ComputerSystems/05_Algorithms/deadlock" >}}) — OS 자원 관리 (CPU 사용 연계)

## 참고 기출

- 138회 4교시 3번 (PECS)
