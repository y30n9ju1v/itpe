---
title: "세그멘테이션 오류와 메모리 보호 메커니즘"
date: 2026-07-11T14:57:27+09:00
tags: ["컴퓨터시스템", "운영체제", "세그멘테이션폴트", "SIGSEGV", "버퍼오버플로우", "메모리보호", "서브노트"]
draft: false
---

# 세그멘테이션 오류와 메모리 보호 메커니즘 서브노트

> **두음 머리에 박기 🧠**
> - **널·댕·버·스·읽** (세그폴트 5대 발생 원인: **널**포인터 역참조, **댕**글링 포인터, **버**퍼 오버플로우, **스**택 오버플로우, **읽**기전용 영역 쓰기)
> - **A·S·D** (보안 대응 3종: **A**SLR(주소공간 랜덤화), **S**tack Canary, **D**EP/NX(실행 방지))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **세그멘테이션 오류(Segmentation Fault, SIGSEGV)와 OS 메모리 보호 메커니즘** |
| **정의** | 권한 없는/잘못된 메모리 접근 시 OS가 프로세스 강제종료 → 유닉스/리눅스 SIGSEGV 시그널 처리, MMU가 가상↔물리 주소변환 시 권한검사로 감지 |
| **키워드** | SIGSEGV, NULL 포인터, 댕글링 포인터, 버퍼 오버플로우, MMU, ASLR/Stack Canary/DEP·NX |
| **개념도** | `[ 프로세스의 잘못된 메모리 접근 ] ➔ [ MMU 가상→물리 주소변환 및 R/W/X 권한검사 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (권한 위반 감지)`<br>`[ OS: SIGSEGV 시그널 발생 ] ➔ [ 프로세스 강제 종료 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲ (악용 시 제어흐름 하이재킹 위험)`<br>`[ 버퍼 오버플로우 ] ── Return Address 덮어쓰기 ──➔ [ 임의 코드 실행 공격 ]` |
| **구성요소** | 1. **NULL 포인터 역참조**: `int *p = NULL; *p = 5;` → NULL 주소 접근<br>2. **댕글링 포인터**: free() 후 해제 메모리 재접근<br>3. **버퍼 오버플로우**: 배열 범위(`arr[10]` 등) 초과 접근<br>4. **스택 오버플로우**: 무한 재귀 등 → 스택 한계 초과<br>5. **읽기전용 영역 쓰기**: 코드·상수 영역(문자열 리터럴 등) 쓰기 시도<br>6. **MMU**: 가상→물리 주소변환 + R/W/X 권한검사 수행 하드웨어 |
| **비교** | **일반 논리 오류(배열 인덱스 오류 등)**<br>- 감지주체: 애플리케이션 로직(컴파일러/런타임 예외)<br>- 결과: 잘못된 값 반환, 실행 계속 가능<br><br>**세그멘테이션 오류(SIGSEGV)**<br>- 감지주체: OS/MMU(하드웨어 권한검사)<br>- 결과: 즉시 강제종료, 복구 불가 |
| **차별화** | **버퍼 오버플로우 대응 및 디버깅 전략**<br>1. **3중 방어선**: Return Address 조작·하이재킹 방지 → **ASLR**(주소공간 랜덤화)+**Stack Canary**(변조탐지)+**DEP/NX**(실행차단) 계층적 적용<br>2. **정적·동적 사전탐지**: 배포전 AddressSanitizer 계측탐지, 장애시 GDB·Valgrind 코어덤프 분석→호출스택 역추적<br>3. **안전 언어·API 전환**: 원시 포인터 대신 경계검사 내장 `std::vector`/Rust 소유권시스템 → 컴파일타임 원천차단 |
