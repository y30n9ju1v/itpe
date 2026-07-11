---
title: "CPU 내부 레지스터 및 상태 플래그"
date: 2026-07-11T11:37:56+09:00
tags: ["컴퓨터시스템", "컴퓨터구조", "CPU", "레지스터", "상태레지스터", "조건플래그", "서브노트"]
draft: false
---

# CPU 내부 레지스터 및 상태 플래그 서브노트

> **두음 머리에 박기 🧠**
> - **PC·IR·MAR·MBR·AC** (명령어 사이클 5대 핵심 레지스터: **P**rogram **C**ounter, **I**nstruction **R**egister, **M**emory **A**ddress **R**egister, **M**emory **B**uffer **R**egister, **A**ccumulator)
> - **N·Z·C·V** (상태 레지스터 4대 조건 플래그: **N**egative 음수, **Z**ero 영, **C**arry 올림수, o**V**erflow 오버플로우)
> - **페·디·이** (명령어 실행 3단계: **Fe**tch 인출, **D**ecode 해독, **E**xecute 실행)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **CPU 내부 레지스터 (Register) 및 상태 레지스터 조건 플래그 (Condition Flags)** |
| **정의** | CPU가 명령어를 Fetch-Decode-Execute 하는 과정에서 사용하는 초고속 내부 저장 공간인 **레지스터**와, ALU 연산 결과·CPU 상태를 나타내어 조건 분기 명령의 판단 근거가 되는 **상태 레지스터(SR/PSW)의 조건 플래그** |
| **키워드** | PC/IR/MAR/MBR/AC, GPR, SP/FP, N·Z·C·V, CMP 비교연산, BEQ/BLT/BGT 분기 |
| **개념도** | `[ PC ] → MAR ← PC → MBR ← Mem[MAR] → IR ← MBR`<br>&nbsp;&nbsp;&nbsp;&nbsp;`(Fetch: 명령어 인출)`<br>`[ IR 해독 ] → [ ALU: AC ← R1 op R2 ] (Execute)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`↓`<br>`[ SR/PSW 갱신 (N,Z,C,V) ] → [ 조건 분기 명령 (BEQ 등) 판단 ]` |
| **구성요소** | 1. **프로그램 제어 레지스터**: PC(다음 명령 주소), IR(현재 명령어)<br>2. **메모리 접근 레지스터**: MAR(주소), MBR/MDR(데이터)<br>3. **연산/범용 레지스터**: AC(누산기), GPR(범용, x86 EAX~EDX)<br>4. **스택 레지스터**: SP(스택 포인터), FP/BP(프레임 포인터), LR(ARM 복귀 주소)<br>5. **상태 레지스터(SR/PSW)**: N/Z/C/V 등 조건 플래그 집합, ARM은 CPSR, x86은 EFLAGS/RFLAGS로 명명 |
| **비교** | **C (Carry) 플래그**<br>- **적용 대상**: 부호 없는(Unsigned) 연산<br>- **의미**: 자리올림 발생 시 1 (예: 0xFF+1)<br>- **분기 명령**: BCS/BCC<br><br>**V (Overflow) 플래그**<br>- **적용 대상**: 부호 있는(Signed) 연산<br>- **의미**: 결과가 표현 범위를 초과해 부호가 뒤집힘 (예: 127+1=-128)<br>- **분기 명령**: BVS/BVC |
| **차별화** | **CMP 명령어의 플래그 전용 갱신 원리 및 컨텍스트 스위칭 연계**<br>1. **CMP(비교) 연산의 원리**: `CMP A, B`는 내부적으로 A-B 뺄셈을 수행하되 그 결과값 자체는 버리고 N/Z/C/V 플래그만 갱신하여, 이어지는 BEQ(A=B, Z=1)·BGT(Z=0 AND N=V)·BLT(N≠V) 등 조건 분기가 플래그만으로 대소 관계를 판별하도록 설계됨.<br>2. **시스템 콜/인터럽트 시 레지스터 컨텍스트 저장**: 커널 모드 전환(시스템 콜, 인터럽트) 시 PC·SR을 포함한 전체 레지스터 상태를 스택에 저장(Context Save)하여, 복귀 시 원래 실행 흐름과 플래그 상태를 그대로 복원.<br>3. **스택 프레임과 SP/FP 연계**: 함수 호출마다 SP가 이동하여 매개변수·반환주소·지역변수를 담는 스택 프레임을 생성하고, FP는 해당 프레임 내에서 고정된 기준 주소로 지역 변수 접근을 단순화. |
