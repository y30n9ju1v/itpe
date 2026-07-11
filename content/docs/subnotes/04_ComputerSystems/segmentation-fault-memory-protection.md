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
| **정의** | 프로세스가 접근 권한이 없는 메모리 영역에 접근하거나 잘못된 메모리 주소를 참조할 때 운영체제가 해당 프로세스를 강제 종료시키는 오류로, 유닉스/리눅스 계열에서 SIGSEGV 시그널로 처리되며 MMU가 가상-물리 주소 변환 시 접근 권한을 검사해 감지한다 |
| **키워드** | SIGSEGV, NULL 포인터, 댕글링 포인터, 버퍼 오버플로우, MMU, ASLR/Stack Canary/DEP·NX |
| **개념도** | `[ 프로세스의 잘못된 메모리 접근 ] ➔ [ MMU 가상→물리 주소변환 및 R/W/X 권한검사 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (권한 위반 감지)`<br>`[ OS: SIGSEGV 시그널 발생 ] ➔ [ 프로세스 강제 종료 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲ (악용 시 제어흐름 하이재킹 위험)`<br>`[ 버퍼 오버플로우 ] ── Return Address 덮어쓰기 ──➔ [ 임의 코드 실행 공격 ]` |
| **구성요소** | 1. **NULL 포인터 역참조**: `int *p = NULL; *p = 5;` 형태로 NULL이 가리키는 주소 접근<br>2. **댕글링 포인터**: free() 후 해제된 메모리를 재접근<br>3. **버퍼 오버플로우**: 배열 범위(`arr[10]` 크기 5인 배열 등)를 초과 접근<br>4. **스택 오버플로우**: 종료 조건 없는 무한 재귀 등으로 스택 한계 초과<br>5. **읽기전용 영역 쓰기**: 코드·상수 영역(문자열 리터럴 등)에 쓰기 시도<br>6. **MMU(Memory Management Unit)**: 가상→물리 주소 변환 및 접근 권한(R/W/X) 검사를 수행하는 하드웨어 장치 |
| **비교** | **일반 논리 오류 (예: 배열 인덱스 오류)**<br>- **감지 주체**: 애플리케이션 로직 (컴파일러/런타임 예외)<br>- **결과**: 잘못된 값 반환, 프로그램 계속 실행 가능<br><br>**세그멘테이션 오류 (Segmentation Fault)**<br>- **감지 주체**: OS/MMU (하드웨어 수준 권한 검사)<br>- **결과**: SIGSEGV로 프로세스 즉시 강제 종료, 복구 불가 |
| **차별화** | **버퍼 오버플로우 보안 취약점 대응 및 디버깅 실무 전략**<br>1. **3중 방어선 적용**: 스택 버퍼 오버플로우로 인한 반환주소(Return Address) 조작·제어흐름 하이재킹을 막기 위해, 주소 공간을 매 실행마다 랜덤화하는 **ASLR**, 스택 프레임 경계에 카나리 값을 심어 변조를 탐지하는 **Stack Canary**, 데이터 영역의 코드 실행 자체를 차단하는 **DEP/NX**를 함께 적용하는 계층적 방어.<br>2. **정적·동적 도구를 통한 사전 탐지**: 배포 전 AddressSanitizer(컴파일러 수준 계측)로 메모리 오류를 사전 탐지하고, 장애 발생 시 GDB·Valgrind로 코어 덤프를 분석해 크래시 지점의 호출 스택을 역추적.<br>3. **안전한 메모리 관리 언어·API로의 전환**: C/C++의 원시 포인터 연산 대신 경계 검사가 내장된 표준 컨테이너(`std::vector` 등)나 Rust의 소유권 시스템을 채택해 버퍼 오버플로우·댕글링 포인터를 컴파일 타임에 원천 차단. |
