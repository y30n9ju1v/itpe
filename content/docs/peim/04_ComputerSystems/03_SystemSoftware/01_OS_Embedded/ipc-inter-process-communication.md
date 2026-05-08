---
title: "IPC (Inter Process Communication, 프로세스 간 통신)"
date: 2026-05-08T23:38:40+09:00
tags: ["peim", "컴퓨터시스템및정보통신", "운영체제", "IPC", "프로세스통신", "동기화", "공유메모리"]
draft: false
exam: "136회"
---

## 개요

IPC(Inter Process Communication)는 독립된 프로세스들이 데이터를 교환하고 동기화하기 위한 운영체제 수준의 메커니즘이다. 각 프로세스는 독립된 메모리 공간을 가지므로, 직접 메모리 접근이 불가능하여 운영체제가 제공하는 IPC 기법을 통해 통신한다.

## 핵심 내용

**IPC의 개념과 목적**
- 개념: OS가 제공하는 프로세스 간 데이터 공유·메시지 전달 메커니즘
- 목적: 협력 프로세스 간 정보 공유, 계산 가속화(병렬처리), 모듈화

**IPC 주요 기법 3가지**

| 기법 | 설명 | 장점 | 단점 |
|------|------|------|------|
| 공유 메모리 (Shared Memory) | 여러 프로세스가 동일 메모리 영역에 직접 접근 | 빠른 속도 (커널 개입 최소) | 동기화 필요 (레이스 컨디션 위험) |
| 메시지 패싱 (Message Passing) | 커널을 통해 메시지(데이터)를 send/receive | 구현 간단, 동기화 자동 | 커널 개입으로 상대적으로 느림 |
| 파이프 (Pipe/Named Pipe) | 단방향 데이터 스트림으로 프로세스 연결 | 간단한 구현 | 단방향, 부모-자식 관계 제한 (익명 파이프) |

**추가 IPC 기법**
- 소켓(Socket): 네트워크·로컬 양방향 통신 (범용성 높음)
- 시그널(Signal): 프로세스에 이벤트 알림 (SIGTERM, SIGKILL 등)
- 세마포어(Semaphore): 공유 자원 접근 동기화용

**동기화 기법 (공유 자원 충돌 해결)**

| 기법 | 설명 |
|------|------|
| 뮤텍스 (Mutex) | 상호배제 잠금, 한 번에 하나의 스레드/프로세스만 접근 |
| 세마포어 (Semaphore) | 카운터 기반 접근 제어, N개 동시 접근 허용 가능 |
| 모니터 (Monitor) | 객체 수준의 동기화 (Java synchronized) |
| 스핀락 (Spinlock) | 락 해제까지 CPU 바쁜 대기 (짧은 대기 시간에 적합) |

**임계 구역 (Critical Section) 3가지 조건**
1. 상호배제 (Mutual Exclusion): 한 번에 하나의 프로세스만 진입
2. 진행 (Progress): 임계 구역이 비어있으면 진입 허용
3. 유한 대기 (Bounded Waiting): 무한 대기 방지

## 출제 포인트

- IPC의 목적과 3가지 주요 기법 (공유메모리·메시지패싱·파이프)
- 동기화 기법 4가지와 임계 구역 3가지 조건
- 공유 메모리 vs 메시지 패싱 성능·안전성 트레이드오프

## 연관 개념

- [OS 스케줄링]({{< relref "/docs/peim/04_ComputerSystems/03_SystemSoftware/01_OS_Embedded/os-scheduling" >}}) — 프로세스 관리의 핵심
- [뱅커 알고리즘]({{< relref "/docs/peim/04_ComputerSystems/05_Algorithms/banker-algorithm" >}}) — 교착상태 방지 (IPC의 동기화 문제와 연계)

## 참고 기출

- 136회 4교시 2번
