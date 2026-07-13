---
title: "이중 모드(Dual Mode)와 보호 링(Protection Ring)"
date: 2026-07-12T13:24:19+09:00
tags: ["컴퓨터시스템", "운영체제", "이중모드", "DualMode", "특권명령어", "ProtectionRing", "서브노트"]
draft: false
---

# 이중 모드(Dual Mode)와 보호 링(Protection Ring) 서브노트

> **두음 머리에 박기 🧠**
> - **유·커** (이중 모드 2종: **유**저 모드 User Mode(Mode Bit=1), **커**널 모드 Kernel Mode(Mode Bit=0))
> - **아이·오·인·메·타·모** (특권 명령어 6대 유형: **아이오**(I/O제어), **인**터럽트관리, **메**모리보호, **타**이머설정, **모**드전환)
> - **R0·R1·R2·R3·R-1** (x86 보호 링: Ring 0 커널 ~ Ring 3 사용자 애플리케이션, 가상화 확장 Ring -1 하이퍼바이저)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **운영체제 이중 모드(Dual Mode) 구조 및 x86 보호 링(Protection Ring)** |
| **정의** | CPU가 사용자 모드(User Mode)와 커널 모드(Kernel Mode) 두 실행 환경을 하드웨어 수준에서 구별해 사용자 프로세스가 특권 명령어를 직접 실행하지 못하도록 하는 보호 메커니즘으로, PSW 내 1비트 Mode Bit로 모드를 구분하며 사용자 모드에서 특권 명령어 실행 시 트랩(Trap)이 발생함 |
| **키워드** | Mode Bit, 특권 명령어(Privileged Instruction), 시스템 콜, x86 보호 링, Ring -1(하이퍼바이저) |
| **개념도** | `User Mode(Mode Bit=1) --시스템콜(SYSCALL)--> Kernel Mode(Mode Bit=0)`<br>`&nbsp;&nbsp;&nbsp;&nbsp;일반 명령어만 실행 가능&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;특권 명령어 포함 모든 명령어 실행`<br>`Ring 3(사용자앱) → Ring 0(OS커널) → Ring -1(하이퍼바이저, VMX Root Mode)` |
| **구성요소** | 1. **특권 명령어**: I/O 제어(IN/OUT), 인터럽트 관리(STI/CLI), 메모리 보호(페이지 테이블 베이스 변경), 타이머 설정, 모드 전환(SYSENTER/SYSEXIT)<br>2. **시스템 콜 모드 전환 흐름**: 사용자 프로그램 실행(Mode Bit=1) → SYSCALL 명령어 → 하드웨어가 Mode Bit=0 전환 → 커널 핸들러 처리 → SYSRET로 Mode Bit=1 복귀<br>3. **x86 보호 링**: Ring 0(최대 권한, OS 커널) ~ Ring 3(최소 권한, 사용자 앱), 대부분 OS는 Ring 0·3만 사용<br>4. **가상화 확장 Ring -1**: 하이퍼바이저(VMware, KVM)가 VMX Root Mode로 동작, 게스트 OS는 VMX Non-root Mode |
| **비교** | **이중 모드 (기본)**<br>- **모드 수**: 2(커널/사용자)<br>- **구분 기준**: Mode Bit 1비트<br>- **실제 활용**: 대부분의 범용 OS<br><br>**x86 보호 링 + 가상화 확장**<br>- **모드 수**: 4(Ring 0~3) + Ring -1<br>- **구분 기준**: CPL 2비트 + VMX Root/Non-root<br>- **실제 활용**: Ring 0·3만 사용 + Intel VT-x/AMD-V로 Ring -1 지원 |
| **차별화** | **컨테이너·클라우드 환경에서의 이중 모드 보안 실무**<br>1. **컨테이너 보안**: Docker는 게스트 OS 없이 호스트 커널을 공유하므로 커널 취약점(Dirty COW 등) 발생 시 커널 모드 탈취 위험이 있어, seccomp로 시스템 콜을 화이트리스트 제한하고 AppArmor/SELinux로 커널 자원 접근을 추가 제한.<br>2. **시스템 콜 성능 최적화(vDSO)**: gettimeofday 등 고빈도 시스템 콜은 vDSO로 커널 모드 전환 없이 사용자 공간에서 처리해 모드 전환 오버헤드를 절감.<br>3. **VM Escape 방어**: Ring -1 하이퍼바이저 취약점(VENOM 등)으로 게스트가 호스트를 탈취할 수 있어, 하이퍼바이저 정기 패치와 Confidential Computing(AMD SEV, Intel TDX)으로 하이퍼바이저조차 VM 내부 메모리에 접근 못하도록 하드웨어 수준에서 격리. |
