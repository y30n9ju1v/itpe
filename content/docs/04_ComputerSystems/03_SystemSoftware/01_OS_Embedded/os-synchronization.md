---
title: "운영체제 동기화 (OS Synchronization)"
date: 2026-05-09T07:34:17+09:00
tags: ["pecs", "컴퓨터시스템", "운영체제", "동기화", "뮤텍스", "세마포어", "경쟁조건"]
draft: false
exam: "138회"
---

## 개요

운영체제 동기화(Synchronization)는 공유 자원에 대한 여러 프로세스/스레드의 동시 접근을 제어하여 데이터 일관성을 보장하는 메커니즘이다. 동기화 없이는 경쟁 조건(Race Condition)으로 인해 예측 불가능한 결과가 발생한다.

## 핵심 내용

### 동기화의 필요성

**경쟁 조건(Race Condition) 예시:**
```
Thread 1: counter++  →  읽기(5) → +1 → 쓰기(6)
Thread 2: counter++  →  읽기(5) → +1 → 쓰기(6)
결과: counter = 6 (예상: 7) ← 동기화 부재로 잘못된 결과
```

**임계 구역(Critical Section)**: 공유 자원에 접근하는 코드 영역

임계 구역 해결 3가지 조건:
1. **상호 배제(Mutual Exclusion)**: 하나의 프로세스만 진입
2. **진행(Progress)**: 임계 구역 밖의 프로세스는 진입 결정 방해 불가
3. **유한 대기(Bounded Waiting)**: 무한 대기 방지

### 주요 동기화 기법

#### 뮤텍스 (Mutex)

- **이진 잠금**: 잠금(Lock) / 해제(Unlock) 2가지 상태
- **소유권**: 잠근 스레드만 해제 가능
- **용도**: 임계 구역 보호, 스레드 간 상호 배제

```
mutex.lock()
  → 임계 구역 실행
mutex.unlock()
```

#### 세마포어 (Semaphore)

- **카운터 기반**: 음이 아닌 정수값 S
- **Wait(P)**: S > 0이면 S-1, S = 0이면 대기
- **Signal(V)**: S + 1, 대기 중 프로세스 깨움
- **이진 세마포어**: 뮤텍스와 동일
- **계수 세마포어**: 자원 pool 접근 제어 (예: 연결 풀 5개)

#### 모니터 (Monitor)

- **고급 추상화**: 공유 자원과 임계 구역을 하나로 캡슐화
- 내부적으로 뮤텍스 + 조건 변수(Condition Variable) 사용
- Java의 `synchronized` 키워드가 대표적

#### 스핀락 (Spinlock)

- **바쁜 대기(Busy Waiting)**: 잠금 해제될 때까지 루프
- **장점**: 대기 시간이 짧을 때 컨텍스트 스위치 오버헤드 없음
- **단점**: CPU 낭비, 멀티코어 환경에서만 의미 있음

### 기법 비교

| 기법 | 소유권 | 카운터 | 대기 방식 | 주 용도 |
|------|--------|--------|----------|--------|
| 뮤텍스 | 있음 | 없음 | 블로킹 | 단순 상호 배제 |
| 이진 세마포어 | 없음 | 0/1 | 블로킹 | 상호 배제·신호 |
| 계수 세마포어 | 없음 | N | 블로킹 | 자원 풀 관리 |
| 모니터 | 있음 | 없음 | 블로킹 | 복잡한 동기화 |
| 스핀락 | 있음 | 없음 | Busy-wait | 짧은 임계 구역 |

### 교착 상태(Deadlock)와의 관계

잘못된 동기화는 데드락을 유발:
```
Thread 1: mutex_A.lock() → mutex_B.lock()
Thread 2: mutex_B.lock() → mutex_A.lock()
→ 환형 대기 → 데드락
```

## 출제 포인트

- 경쟁 조건 → 임계 구역 → 동기화 필요성 흐름
- 뮤텍스: 소유권 있음, 세마포어: 소유권 없음 (핵심 차이)
- 임계 구역 해결 3가지 조건: 상호배제·진행·유한대기
- 세마포어 Wait(P)/Signal(V) 연산

## 연관 개념

- [데드락]({{< relref "/docs/04_ComputerSystems/05_Algorithms/deadlock" >}}) — 잘못된 동기화로 발생
- [IPC]({{< relref "/docs/04_ComputerSystems/03_SystemSoftware/01_OS_Embedded/ipc-inter-process-communication" >}}) — 프로세스 간 통신과 동기화
- [시스템 콜]({{< relref "/docs/04_ComputerSystems/03_SystemSoftware/01_OS_Embedded/system-call" >}}) — 뮤텍스/세마포어는 시스템 콜로 구현

## 참고 기출

- 138회 4교시 2번 (PECS)
