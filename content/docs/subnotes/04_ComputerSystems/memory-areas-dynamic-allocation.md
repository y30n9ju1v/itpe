---
title: "프로그램 메모리 영역 및 동적 메모리 관리"
date: 2026-07-11T11:37:56+09:00
tags: ["컴퓨터시스템", "운영체제", "메모리구조", "힙", "스택", "메모리누수", "GC", "서브노트"]
draft: false
---

# 프로그램 메모리 영역 및 동적 메모리 관리 서브노트

> **두음 머리에 박기 🧠**
> - **코·데·힙·스** (프로그램 메모리 4대 영역: **코**드(Text), **데**이터(Data/BSS), **힙**(Heap), **스**택(Stack))
> - **자·레·스** (동적 메모리 누수 해결 3계열: **자**동 GC(Java/Go), **레**퍼런스 카운팅(Python), **스**마트 포인터/소유권(C++/Rust))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **프로그램 메모리 4대 영역 (Code/Data/Heap/Stack) 및 동적 메모리 할당·누수 관리** |
| **정의** | 프로세스 실행 시 OS가 메모리를 코드·데이터·힙·스택 4개 영역으로 나누어 관리하는 **메모리 레이아웃**과, 런타임에 힙에서 필요한 메모리를 요청·해제하는 **동적 메모리 할당** 및 해제 누락 시 발생하는 **메모리 누수(Memory Leak)** 문제 |
| **키워드** | Code/Data/Heap/Stack, 스택 프레임, malloc/free, GC(Mark-and-Sweep), 스마트 포인터, Stack/Heap Overflow |
| **개념도** | `[ 높은 주소 ]`<br>`Stack (지역변수, 함수 프레임) ↓ grows down`<br>`↕ (미사용 공간)`<br>`Heap (동적 할당, malloc/new) ↑ grows up`<br>`Data (전역·정적 변수, BSS+Data Segment)`<br>`Code (Text, 실행 기계어, 읽기 전용)`<br>`[ 낮은 주소 ]` |
| **구성요소** | 1. **Code(Text)**: 실행 기계어, 컴파일시 크기고정, 읽기전용<br>2. **Data**: 전역·정적변수, 초기화(Data Segment)/미초기화(BSS) 구분<br>3. **Heap**: 런타임 가변, malloc/new 동적할당, 프로그래머 직접관리 → 누수위험<br>4. **Stack**: LIFO, 함수호출마다 스택프레임(반환주소+매개변수+지역변수) 생성·소멸, 빠른접근·크기제한(Stack Overflow) |
| **비교** | **힙 (Heap)**<br>- 크기: 유연 (런타임요청)<br>- 접근속도: 느림 (포인터 역참조)<br>- 관리주체: 프로그래머 or GC (명시적해제 필요)<br>- 주요문제: 메모리누수, Heap Overflow(Use-After-Free)<br><br>**스택 (Stack)**<br>- 크기: 제한적 (고정스택 영역)<br>- 접근속도: 빠름 (SP 이동만으로 할당/해제)<br>- 관리주체: 컴파일러/런타임 자동 (함수반환 시 자동해제)<br>- 주요문제: Stack Buffer Overflow(반환주소 덮어쓰기, ROP공격) |
| **차별화** | **언어별 메모리 누수방지 전략 + 보안취약점 대응**<br>1. **언어별 힙관리 메커니즘**: Java/Go=Mark-and-Sweep GC 자동회수 / Python=참조카운팅+순환참조 GC 병행 / C/C++=RAII·스마트포인터(unique_ptr, shared_ptr)로 완화 / Rust=컴파일타임 소유권으로 GC없이 안전성 보장<br>2. **메모리누수 영향·탐지**: 누적 시 OOM 크래시+성능저하 → Valgrind·Java Heap Dump·Python tracemalloc으로 힙스냅샷 비교 조기탐지<br>3. **Stack/Heap 보안취약점 대응**: 스택버퍼오버플로우(반환주소 조작, ROP) → 스택카나리·ASLR 방어 / 힙 Use-After-Free → 스마트포인터·정적분석 방어 |
