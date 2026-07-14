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
| **정의** | CPU가 사용자모드/커널모드 2실행환경을 하드웨어수준 구별 → 사용자프로세스 특권명령어 직접실행 차단 보호메커니즘, PSW 1비트 Mode Bit로 구분, 사용자모드 특권명령 실행 시 트랩(Trap) 발생 |
| **키워드** | Mode Bit, 특권 명령어(Privileged Instruction), 시스템 콜, x86 보호 링, Ring -1(하이퍼바이저) |
| **개념도** | `User Mode(Mode Bit=1) --시스템콜(SYSCALL)--> Kernel Mode(Mode Bit=0)`<br>`&nbsp;&nbsp;&nbsp;&nbsp;일반 명령어만 실행 가능&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;특권 명령어 포함 모든 명령어 실행`<br>`Ring 3(사용자앱) → Ring 0(OS커널) → Ring -1(하이퍼바이저, VMX Root Mode)` |
| **구성요소** | 1. **특권 명령어**: I/O제어(IN/OUT), 인터럽트관리(STI/CLI), 메모리보호(페이지테이블베이스 변경), 타이머설정, 모드전환(SYSENTER/SYSEXIT)<br>2. **시스템콜 모드전환 흐름**: 사용자실행(Mode Bit=1) → SYSCALL → HW가 Mode Bit=0 전환 → 커널핸들러 처리 → SYSRET로 Mode Bit=1 복귀<br>3. **x86 보호링**: Ring 0(최대권한, OS커널) ~ Ring 3(최소권한, 사용자앱), 대부분 OS는 Ring 0·3만 사용<br>4. **가상화 확장 Ring -1**: 하이퍼바이저(VMware/KVM) VMX Root Mode, 게스트OS는 VMX Non-root Mode |
| **비교** | **이중 모드 (기본)**<br>- **모드수**: 2(커널/사용자)<br>- **구분기준**: Mode Bit 1비트<br>- **활용**: 대부분 범용OS<br><br>**x86 보호링 + 가상화 확장**<br>- **모드수**: 4(Ring 0~3) + Ring -1<br>- **구분기준**: CPL 2비트 + VMX Root/Non-root<br>- **활용**: Ring 0·3만 사용 + VT-x/AMD-V로 Ring -1 지원 |
| **차별화** | **컨테이너·클라우드 환경 이중 모드 보안 실무**<br>1. **컨테이너 보안**: Docker 호스트커널 공유(게스트OS 없음) → 취약점(Dirty COW) 시 커널탈취 위험 → seccomp 시스템콜 화이트리스트, AppArmor/SELinux 자원접근 제한<br>2. **시스템콜 최적화(vDSO)**: gettimeofday 등 고빈도 콜 → vDSO로 커널전환 없이 사용자공간 처리 → 오버헤드 절감<br>3. **VM Escape 방어**: Ring -1 하이퍼바이저 취약점(VENOM) → 게스트의 호스트탈취 위험 → 정기패치 + Confidential Computing(AMD SEV/Intel TDX)로 HW수준 격리 |
