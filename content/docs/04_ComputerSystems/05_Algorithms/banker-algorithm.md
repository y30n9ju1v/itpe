---
title: "은행가 알고리즘 (Banker's Algorithm)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "컴퓨터시스템", "알고리즘", "은행가알고리즘", "교착상태", "자원할당"]
draft: false
exam_peim: "138회"
---

## 개요

은행가 알고리즘(Banker's Algorithm)은 Dijkstra가 제안한 교착상태(Deadlock) 회피 알고리즘으로, 자원 요청 시 안전 상태(Safe State) 여부를 미리 검사하여 교착상태 가능성이 있으면 자원 할당을 거부한다. 은행이 예금 한도 내에서 대출을 허용하는 방식에 비유하여 명명되었다.

## 핵심 내용

### 교착상태 4가지 필요 조건 (Coffman 조건)

1. **상호 배제(Mutual Exclusion)**: 자원은 한 번에 하나의 프로세스만 사용
2. **점유 대기(Hold and Wait)**: 자원을 보유한 채 다른 자원 대기
3. **비선점(No Preemption)**: 자원을 강제로 빼앗을 수 없음
4. **순환 대기(Circular Wait)**: 프로세스들이 원형으로 자원 대기

### 알고리즘 핵심 자료구조

- **Available[j]**: 현재 사용 가능한 자원 j의 수
- **Max[i][j]**: 프로세스 i가 자원 j를 최대 요청할 수 있는 수
- **Allocation[i][j]**: 프로세스 i에 할당된 자원 j의 수
- **Need[i][j]** = Max[i][j] - Allocation[i][j]: 프로세스 i가 추가로 필요한 자원 j

### 안전 상태 판별 (Safety Algorithm)

```
1. Work = Available, Finish[i] = false
2. Need[i] ≤ Work를 만족하는 미완료 프로세스 i 탐색
3. Work = Work + Allocation[i], Finish[i] = true
4. 모든 Finish[i] = true이면 안전 상태
```

### 자원 요청 처리 (Resource-Request Algorithm)

1. Request[i] ≤ Need[i] 확인
2. Request[i] ≤ Available 확인
3. 가상 할당 후 Safety Algorithm 실행
4. 안전 상태이면 실제 할당, 아니면 거부하고 대기

### 한계점

- 프로세스 수와 자원 수가 고정되어야 함
- 최대 자원 요청량(Max)을 사전에 알아야 함
- 오버헤드로 인해 실시간 시스템에서 사용 곤란

## 출제 포인트

- 4가지 필요 조건 서술 후 은행가 알고리즘의 위치(회피) 설명
- Need = Max - Allocation 수식 제시
- 안전 상태 판별 절차(Work, Finish 배열) 서술
- 한계점 포함

## 연관 개념

- 운영체제 메모리 관리 — 자원 할당과 교착상태
- [메모리 영역(Code/Data/Heap/Stack)]({{< relref "/docs/04_ComputerSystems/05_Algorithms/memory-areas" >}}) — OS 메모리 구조
- 프로젝트 위험관리 — 자원 위험 회피 전략과 유사 개념

## 참고 기출

- 138회 1교시 11번 (PEIM)
