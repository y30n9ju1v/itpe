---
title: "CPU 주소지정방식(Addressing Mode)"
date: 2026-07-13T13:24:19+09:00
tags: ["컴퓨터시스템", "컴퓨터구조", "주소지정방식", "AddressingMode", "RISC", "CISC", "서브노트"]
draft: false
---

# CPU 주소지정방식(Addressing Mode) 서브노트

> **두음 머리에 박기 🧠**
> - **즉·레·직·간·상·베·인** (7대 주소지정방식: **즉**시(Immediate), **레**지스터(Register), **직**접(Direct), **간**접(Indirect/레지스터간접), **상**대(PC Relative), **베**이스(Base), **인**덱스(Indexed))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **CPU 주소지정방식 (Addressing Mode)** |
| **정의** | 명령어 내 피연산자(Operand) 필드를 해석해 실제 데이터가 저장된 유효 주소(EA, Effective Address)를 결정하는 규칙 집합으로, 방식 선택에 따라 메모리 접근 횟수와 표현 가능한 주소 범위가 달라짐 |
| **키워드** | 유효주소(EA), Immediate/Direct/Indirect, PC Relative, Base/Indexed, RISC vs CISC |
| **개념도** | `[Opcode] [Operand]` → 주소지정방식 적용 → `유효주소(EA) 결정` → `실제 데이터 획득`<br>`즉시: EA=피연산자 자체(0회 접근)` → `직접: EA=Operand(1회)` → `간접: EA=M[Operand](2회↑)` → `인덱스: EA=Index+Offset` |
| **구성요소** | 1. **비메모리 접근**: Immediate(즉시, 상수 내장), Register(레지스터 값 자체)<br>2. **메모리 직접/간접**: Direct(EA=Operand), Indirect(EA=M[Operand]), Register Indirect(EA=M[Register], C언어 `*ptr`)<br>3. **변위(Displacement) 방식**: PC Relative(EA=PC+Offset, 분기·PIC), Base Register(EA=Base+Offset, 세그먼트), Indexed(EA=Index+Offset, 배열 접근)<br>4. **RISC vs CISC 설계 철학**: RISC(ARM/RISC-V)는 Load/Store 방식만 허용해 연산 명령어는 레지스터 간에만 수행, CISC(x86)는 연산 명령어에서도 메모리 직접 접근 허용 |
| **비교** | **RISC (ARM, RISC-V)**<br>- **방식 수**: 소수(간소화)<br>- **메모리 접근**: Load/Store 명령어로만 허용<br>- **명령어 길이**: 고정 길이 → 파이프라인 단순, I-캐시 효율↑<br>- **컴파일러 의존도**: 높음<br><br>**CISC (x86)**<br>- **방식 수**: 다양(복잡)<br>- **메모리 접근**: 연산 명령어에서도 직접 접근 가능<br>- **명령어 길이**: 가변 길이 → 디코더 복잡, 코드 밀도↑<br>- **컴파일러 의존도**: 낮음 |
| **차별화** | **주소지정방식 기반 보안·성능 최적화 전략**<br>1. **간접 주소지정과 버퍼 오버플로우**: 포인터 체계(간접 주소)가 스택의 리턴 주소를 덮어쓰는 공격의 근본 원인이 되므로, ASLR(주소 공간 무작위화)·스택 카나리·NX/DEP를 다층 적용해 방어.<br>2. **컴파일러의 방식별 최적 배치**: 배열 접근에 인덱스(Base+Offset) 방식, 포인터에 레지스터 간접 방식, 분기에 PC 상대 방식을 우선 사용하고, 레지스터 부족 시에만 메모리 직접 방식으로 스필(Spill).<br>3. **PIC(Position Independent Code)**: 공유 라이브러리(.so/.dll)는 PC 상대 주소 방식(-fPIC 컴파일)으로 재배치 없이 임의 주소에 로드 가능해 ASLR 환경에서도 효율적으로 동작. |
