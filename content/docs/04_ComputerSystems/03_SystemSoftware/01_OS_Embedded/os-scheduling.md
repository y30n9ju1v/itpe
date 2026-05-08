---
title: "운영체제 스케줄링 (CPU·디스크 스케줄링)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "pecs", "컴퓨터시스템", "운영체제", "CPU스케줄링", "디스크스케줄링", "SJF", "SSTF"]
draft: false
exam_peim: "137회"
exam_pecs: "138회"
---

## 개요

<!--more-->

운영체제 스케줄링은 CPU와 디스크 등 제한된 자원을 여러 프로세스·요청에 효율적으로 배분하는 정책이다. CPU 스케줄링은 프로세스 실행 순서를, 디스크 스케줄링은 I/O 요청 처리 순서를 결정한다.

## 핵심 내용

### CPU 스케줄링과 디스크 스케줄링 개념

| 구분 | CPU 스케줄링 | 디스크 스케줄링 |
|------|------------|--------------|
| 대상 | 프로세스/스레드 | 디스크 I/O 요청 |
| 목적 | CPU 사용률·응답시간 최적화 | 탐색 시간·회전 지연 최소화 |
| 선점 여부 | 선점형/비선점형 | 주로 비선점 |

### SJF vs SRT (CPU 스케줄링)

**SJF (Shortest Job First)**:
- CPU 버스트 시간이 가장 짧은 프로세스를 먼저 실행
- **비선점형**: 실행 중인 프로세스는 완료까지 유지
- 평균 대기 시간 최소화 (최적 알고리즘)
- 단점: 긴 프로세스의 **기아(Starvation)** 발생, CPU 버스트 시간 예측 어려움

**SRT (Shortest Remaining Time)**:
- SJF의 **선점형** 버전
- 새 프로세스 도착 시 남은 시간 비교 → 더 짧으면 선점
- SJF보다 더 좋은 평균 대기 시간 (이론적 최적)
- 단점: 빈번한 컨텍스트 스위칭 오버헤드

| 구분 | SJF | SRT |
|------|-----|-----|
| 선점 여부 | 비선점 | 선점 |
| 기준 | 전체 CPU 버스트 시간 | 남은 CPU 버스트 시간 |
| 평균 대기시간 | 낮음 | 더 낮음 |
| 오버헤드 | 낮음 | 높음 (컨텍스트 스위칭) |

### SSTF vs SLTF (디스크 스케줄링)

**SSTF (Shortest Seek Time First)**:
- 현재 헤드 위치에서 탐색 시간(Seek Time)이 가장 짧은 요청 먼저 처리
- 장점: 평균 탐색 시간 감소
- 단점: 헤드 근처 요청만 처리 → 원거리 요청 기아 발생

**SLTF (Shortest Latency Time First)**:
- 회전 지연(Rotational Latency)이 가장 짧은 요청 먼저 처리
- 현재 디스크 회전 위치 기준 가장 가까운 섹터부터 처리
- SSTF가 트랙 선택 후, SLTF가 동일 트랙 내 섹터 순서 결정
- SDF(Shortest-Scheduling) 또는 SPTF(Shortest Positioning Time First)와 함께 사용

### 기타 주요 CPU 스케줄링 알고리즘

| 알고리즘 | 특징 |
|----------|------|
| **FCFS** | 도착 순서, 단순하나 Convoy 효과 |
| **Round Robin** | 시간 할당량(Quantum) 순환, 공정성 |
| **Priority** | 우선순위 기반, 기아 가능 (Aging으로 해결) |
| **MLQ/MLFQ** | 다단계 큐, 프로세스 특성별 큐 분리 |

## 출제 포인트

- CPU/디스크 스케줄링 차이 먼저 정의
- SJF vs SRT: 비선점/선점 차이 + 각 장단점
- SSTF vs SLTF: 탐색시간/회전지연 기준 차이
- 기아(Starvation)와 Aging 해결책 언급

## 연관 개념

- [은행가 알고리즘]({{< relref "/docs/04_ComputerSystems/05_Algorithms/banker-algorithm" >}}) — 자원 스케줄링의 교착상태 회피
- [메모리 영역]({{< relref "/docs/04_ComputerSystems/05_Algorithms/memory-areas" >}}) — OS 자원 관리 전반
- [캐시 메모리]({{< relref "/docs/04_ComputerSystems/05_Algorithms/cache-memory" >}}) — 메모리 계층 구조

## 참고 기출

- 138회 2교시 5번 (PECS)
- 137회 3교시 1번 (PEIM)
- 135회 3교시 4번 (PECS)
