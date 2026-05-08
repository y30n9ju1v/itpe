---
title: "CPU 내부 레지스터 종류"
date: 2026-05-09T07:34:17+09:00
tags: ["pecs", "컴퓨터시스템", "하드웨어", "CPU", "레지스터", "명령어사이클"]
draft: false
exam_pecs: "138회"
---

## 개요

CPU 내부 레지스터는 CPU가 명령어를 실행하기 위해 사용하는 초고속 내부 저장 공간이다. RAM보다 수백~수천 배 빠르며, 명령어 페치(Fetch)·디코드(Decode)·실행(Execute) 사이클 전반에서 사용된다.

## 핵심 내용

### 명령어 실행 사이클과 레지스터

```
Fetch (인출): PC가 가리키는 주소에서 명령어 MAR → MBR → IR로 적재
Decode (해독): IR의 명령어 해석
Execute (실행): ALU가 AC를 사용하여 연산
Write-back: 결과를 레지스터 또는 메모리에 저장
```

### 주요 레지스터 분류

#### 프로그램 제어 레지스터

| 레지스터 | 이름 | 기능 |
|----------|------|------|
| **PC** | Program Counter (프로그램 카운터) | 다음에 실행할 명령어의 메모리 주소 |
| **IR** | Instruction Register (명령어 레지스터) | 현재 실행 중인 명령어 저장 |

#### 메모리 접근 레지스터

| 레지스터 | 이름 | 기능 |
|----------|------|------|
| **MAR** | Memory Address Register (메모리 주소 레지스터) | 읽기/쓰기할 메모리 주소 보관 |
| **MBR/MDR** | Memory Buffer/Data Register (메모리 버퍼 레지스터) | 메모리에서 읽거나 쓸 데이터 임시 저장 |

#### 연산 레지스터

| 레지스터 | 이름 | 기능 |
|----------|------|------|
| **AC** | Accumulator (누산기) | ALU 연산 결과 임시 저장 |
| **GPR** | General Purpose Register (범용 레지스터) | 데이터, 주소, 임시값 저장 (x86: EAX~EDX, R0~R15) |

#### 상태 레지스터 (Status Register / Flags Register)

| 레지스터 | 이름 | 포함 플래그 |
|----------|------|-----------|
| **SR/PSW** | Status Register / Program Status Word | N, Z, C, V 등 조건 플래그 |

**조건 플래그 상세:**

| 플래그 | 이름 | 설정 조건 |
|--------|------|----------|
| **N (Negative)** | 음수 플래그 | 연산 결과가 음수 (MSB = 1) |
| **Z (Zero)** | 영 플래그 | 연산 결과가 0 |
| **C (Carry)** | 올림수 플래그 | 부호 없는 덧셈에서 자리올림 발생 |
| **V (Overflow)** | 오버플로우 플래그 | 부호 있는 연산에서 범위 초과 |

#### 스택 레지스터

| 레지스터 | 이름 | 기능 |
|----------|------|------|
| **SP** | Stack Pointer (스택 포인터) | 현재 스택의 최상위 주소 |
| **FP/BP** | Frame/Base Pointer (프레임 포인터) | 현재 스택 프레임 기준 주소 |
| **LR** | Link Register (링크 레지스터, ARM) | 서브루틴 호출 시 복귀 주소 저장 |

### 명령어 실행 순서 예시 (ADD R1, R2)

```
1. MAR ← PC         (PC 내용을 MAR에 복사)
2. MBR ← Mem[MAR]   (메모리에서 명령어 fetch)
3. IR ← MBR         (명령어를 IR에 저장)
4. PC ← PC + 1      (다음 명령어 주소로 증가)
5. ALU: AC ← R1 + R2 (연산 수행)
6. SR 업데이트       (N, Z, C, V 플래그 설정)
```

## 출제 포인트

- PC·IR·MAR·MBR·AC 5가지 핵심 레지스터 역할 서술
- 조건 플래그(N, Z, C, V) 각각의 설정 조건
- 명령어 사이클과 레지스터 사용 순서 (Fetch → Decode → Execute)
- SP와 FP의 스택 관리 역할

## 연관 개념

- [시스템 콜]({{< relref "/docs/04_ComputerSystems/03_SystemSoftware/01_OS_Embedded/system-call" >}}) — 커널 모드 전환 시 레지스터 컨텍스트 저장
- [CPU 상태 레지스터 플래그]({{< relref "/docs/04_ComputerSystems/02_HardwareSystems/01_HW_Design_Operation/cpu-status-register-flags" >}}) — 조건 플래그 상세
- [메모리 영역]({{< relref "/docs/04_ComputerSystems/05_Algorithms/memory-areas" >}}) — 스택 메모리와 SP 연계

## 참고 기출

- 138회 2교시 6번 (PECS)
- 138회 4교시 3번 (PECS)
