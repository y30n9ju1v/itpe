---
title: "동적 메모리 할당과 메모리 누수"
date: 2026-05-08T23:38:40+09:00
tags: ["peim", "컴퓨터시스템및정보통신", "알고리즘", "동적메모리", "메모리누수", "GC", "힙메모리"]
draft: false
exam_peim: ["136회"]
---

## 개요

동적 메모리 할당은 프로그램 실행 중 런타임에 필요한 만큼의 메모리를 힙(Heap) 영역에서 요청하고 해제하는 메커니즘이다. 정적 할당과 달리 유연한 메모리 사용이 가능하지만, 잘못된 관리는 메모리 누수(Memory Leak)·댕글링 포인터 등 심각한 문제를 유발한다.

## 핵심 내용

**동적 메모리 할당의 필요성**
- 컴파일 타임에 크기를 알 수 없는 자료구조 (가변 길이 배열, 트리, 그래프)
- 사용자 입력·외부 데이터 크기에 따른 가변적 메모리 수요
- 객체 지향 프로그래밍의 객체 생성 (힙에 동적 생성)

**메모리 영역 구조**
| 영역 | 저장 내용 | 할당 시점 |
|------|----------|-----------|
| 코드(Code) | 실행 코드 | 컴파일 시 |
| 데이터(Data) | 전역·정적 변수 | 프로그램 시작 시 |
| 스택(Stack) | 지역 변수, 함수 호출 프레임 | 함수 호출 시 (자동 해제) |
| 힙(Heap) | 동적 할당 객체 | 런타임 (명시적 해제 필요) |

**메모리 누수(Memory Leak)로 인한 문제**
- 정의: 할당된 힙 메모리를 해제하지 않아 사용 불가 메모리 축적
- 문제:
  1. 메모리 부족 → 프로그램 크래시 (OOM, Out Of Memory)
  2. 시스템 전체 성능 저하
  3. 장기 운영 서비스에서 점진적 가용 메모리 감소

**프로그래밍 언어별 메모리 누수 해결방안**

| 언어 | 메커니즘 | 설명 |
|------|---------|------|
| Java | GC (Garbage Collector) | Mark-and-Sweep으로 참조 없는 객체 자동 해제 |
| Python | Reference Counting + GC | 참조 카운트 0이 되면 즉시 해제, 순환 참조는 GC 처리 |
| C/C++ | 수동 해제 (free/delete) | RAII, Smart Pointer (unique_ptr, shared_ptr)로 안전화 |
| Go | Tri-color Mark-and-Sweep GC | 낮은 지연 GC |
| Rust | 소유권 시스템 (Ownership) | 컴파일 타임에 메모리 안전성 보장, GC 불필요 |

**메모리 누수 탐지 도구**
- Valgrind (C/C++), Java VisualVM/Heap Dump, Python tracemalloc

## 출제 포인트

- 동적 메모리 할당의 필요성과 힙·스택 차이
- 메모리 누수의 정의와 시스템에 미치는 영향
- Java·Python 등 언어별 메모리 관리 메커니즘

## 연관 개념

- [세그멘테이션 오류]({{< relref "/docs/notes/04_ComputerSystems/03_SystemSoftware/01_OS_Embedded/segmentation-fault" >}}) — 잘못된 메모리 접근의 또 다른 유형
- [메모리 구조]({{< relref "/docs/notes/04_ComputerSystems/03_SystemSoftware/01_OS_Embedded/memory-areas" >}}) — 힙·스택·코드 영역 상세

## 참고 기출

- 136회 3교시 6번 (PEIM)
