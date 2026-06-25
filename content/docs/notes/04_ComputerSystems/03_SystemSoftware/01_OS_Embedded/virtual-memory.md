---
title: "가상 메모리 (Virtual Memory)"
date: 2026-05-09T07:34:17+09:00
tags: ["peim", "pecs", "컴퓨터시스템", "운영체제", "가상메모리", "페이징", "스와핑", "TLB"]
draft: false
exam_peim: ["139회"]
exam_pecs: ["138회"]
---

## 개요


가상 메모리(Virtual Memory)는 물리적 RAM보다 큰 주소 공간을 프로세스에 제공하는 운영체제 기술이다. 실제로 사용 중인 데이터만 RAM에 올리고 나머지는 보조 저장장치(스왑 공간)에 두어 여러 프로세스를 효율적으로 실행한다.

## 핵심 내용

### 개념 및 작동 원리

```
프로세스 → 가상 주소(Virtual Address) 사용
             ↓
          MMU (Memory Management Unit)
          페이지 테이블 조회
             ↓
     물리 주소(Physical Address)로 변환
             ↓
          RAM 접근
          (없으면 페이지 폴트 → 디스크에서 로드)
```

**페이지와 프레임:**
- 가상 주소 공간을 고정 크기 **페이지(page)**로 분할
- 물리 메모리를 동일 크기 **프레임(frame)**으로 분할
- 페이지 테이블이 가상 페이지 번호 → 물리 프레임 번호 매핑

**TLB (Translation Lookaside Buffer):**
- 최근 변환 결과를 캐싱하여 페이지 테이블 조회 가속
- TLB Hit: 1~2 클럭, TLB Miss: 수백 클럭

### 페이지 교체 알고리즘

| 알고리즘 | 설명 |
|----------|------|
| **FIFO** | 가장 먼저 적재된 페이지 교체 (벨레이디 이상 현상) |
| **LRU** | 가장 오랫동안 사용 안 된 페이지 교체 (구현 비용 높음) |
| **LFU** | 사용 빈도 가장 낮은 페이지 교체 |
| **최적 (OPT)** | 미래에 가장 오래 사용 안 될 페이지 (이론적 최적) |
| **Clock** | LRU 근사, 원형 큐 + 참조 비트 (실용적) |

### 가상 메모리의 장점

1. **메모리 용량 초과 실행**: 물리 RAM보다 큰 프로그램 실행 가능
2. **프로세스 격리**: 각 프로세스가 독립된 주소 공간 → 보안·안정성
3. **메모리 효율화**: 실제 사용 페이지만 RAM에 적재 (Demand Paging)
4. **Copy-on-Write**: fork() 시 페이지 복사 지연으로 효율적 프로세스 생성
5. **공유 메모리**: 여러 프로세스가 동일 물리 프레임을 공유 가능

### 가상 메모리의 단점

1. **스래싱 (Thrashing)**: 페이지 폴트 과다 발생 시 CPU가 페이지 교체만 수행하여 성능 급락
2. **페이지 폴트 오버헤드**: 디스크 I/O로 수 밀리초 지연
3. **TLB 미스**: 컨텍스트 스위치 시 TLB 플러시로 성능 저하
4. **메모리 단편화**: 페이지 경계 내부 단편화 (내부 단편화만 발생)
5. **복잡한 구현**: MMU, 페이지 테이블, TLB 하드웨어 필요

## 출제 포인트

- 가상 주소 → 물리 주소 변환 경로: MMU → 페이지 테이블 → TLB
- 장점: 메모리 초과 실행, 프로세스 격리
- 단점: 스래싱, 페이지 폴트 오버헤드 명확히 서술
- 페이지 교체 알고리즘 4가지 비교 (FIFO·LRU·LFU·최적)

## 연관 개념

- [데드락]({{< relref "/docs/notes/04_ComputerSystems/03_SystemSoftware/01_OS_Embedded/deadlock" >}}) — OS 자원 관리 연계
- [동적 메모리 할당]({{< relref "/docs/notes/04_ComputerSystems/03_SystemSoftware/01_OS_Embedded/dynamic-memory-allocation" >}}) — 힙 메모리와 가상 메모리
- [은행가 알고리즘]({{< relref "/docs/notes/04_ComputerSystems/03_SystemSoftware/01_OS_Embedded/banker-algorithm" >}}) — 자원 관리 알고리즘

## 참고 기출

- 138회 3교시 3번 (PECS)
- 139회 4교시 4번 (PEIM)
