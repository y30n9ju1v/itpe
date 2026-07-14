---
title: "CPU 주소지정방식(Addressing Mode)"
date: 2026-07-12T13:24:19+09:00
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
| **정의** | 명령어 내 피연산자(Operand) 필드 해석 → 실데이터 저장 유효주소(EA, Effective Address) 결정 규칙집합, 방식별 메모리접근 횟수·주소범위 상이 |
| **키워드** | 유효주소(EA), Immediate/Direct/Indirect, PC Relative, Base/Indexed, RISC vs CISC |
| **개념도** | `[Opcode] [Operand]` → 주소지정방식 적용 → `유효주소(EA) 결정` → `실제 데이터 획득`<br>`즉시: EA=피연산자 자체(0회 접근)` → `직접: EA=Operand(1회)` → `간접: EA=M[Operand](2회↑)` → `인덱스: EA=Index+Offset` |
| **구성요소** | 1. **비메모리 접근**: Immediate(즉시, 상수내장), Register(레지스터값 자체)<br>2. **메모리 직접/간접**: Direct(EA=Operand), Indirect(EA=M[Operand]), Register Indirect(EA=M[Register], C언어 `*ptr`)<br>3. **변위(Displacement) 방식**: PC Relative(EA=PC+Offset, 분기·PIC), Base Register(EA=Base+Offset, 세그먼트), Indexed(EA=Index+Offset, 배열접근)<br>4. **RISC vs CISC 설계철학**: RISC(ARM/RISC-V)=Load/Store만 허용, 연산은 레지스터간 수행 / CISC(x86)=연산명령어도 메모리 직접접근 허용 |
| **비교** | **RISC (ARM, RISC-V)**<br>- **방식 수**: 소수(간소화)<br>- **메모리 접근**: Load/Store 명령어로만 허용<br>- **명령어 길이**: 고정길이 → 파이프라인 단순, I-캐시 효율↑<br>- **컴파일러 의존도**: 높음<br><br>**CISC (x86)**<br>- **방식 수**: 다양(복잡)<br>- **메모리 접근**: 연산 명령어에서도 직접접근 가능<br>- **명령어 길이**: 가변길이 → 디코더 복잡, 코드밀도↑<br>- **컴파일러 의존도**: 낮음 |
| **차별화** | **주소지정방식 기반 보안·성능 최적화 전략**<br>1. **간접 주소지정과 버퍼 오버플로우**: 포인터체계(간접주소) → 스택 리턴주소 덮어쓰기 공격 근본원인 → ASLR(주소공간 무작위화)·스택카나리·NX/DEP 다층방어<br>2. **컴파일러의 방식별 최적배치**: 배열접근=인덱스(Base+Offset), 포인터=레지스터간접, 분기=PC상대 우선사용, 레지스터부족 시에만 메모리직접 스필(Spill)<br>3. **PIC(Position Independent Code)**: 공유라이브러리(.so/.dll) → PC상대 주소방식(-fPIC 컴파일)으로 재배치없이 임의주소 로드, ASLR 환경 효율적 동작 |
