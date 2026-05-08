---
title: "캐시 메모리 (Cache Memory)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "컴퓨터시스템", "알고리즘", "캐시메모리", "쓰기정책", "캐시일관성", "멀티코어"]
draft: false
exam: "137회"
---

## 개요

캐시 메모리는 CPU와 주기억장치 사이의 속도 차이를 줄이기 위해 자주 접근하는 데이터를 빠른 SRAM에 임시 저장하는 고속 메모리다. 지역성(Locality) 원리(시간적·공간적)를 활용하여 평균 메모리 접근 시간을 단축한다.

## 핵심 내용

### 캐시 쓰기 정책 (Write Policy)

캐시에 데이터를 쓸 때 주기억장치와의 동기화 방식.

| 정책 | 방식 | 장점 | 단점 |
|------|------|------|------|
| **Write-Through** | 캐시와 메모리 동시 기록 | 항상 일관성 유지, 구현 단순 | 매번 메모리 접근 → 쓰기 속도 느림 |
| **Write-Back** | 캐시에만 기록, 교체 시 메모리 반영 | 쓰기 빠름, 버스 트래픽 감소 | 캐시 교체 시 복잡, 장애 시 데이터 손실 위험 |

**Write-Back 보조 정책**:
- **Write-Allocate**: Write Miss 시 캐시에 블록 로드 후 수정 (Write-Back과 주로 함께 사용)
- **No-Write-Allocate**: Write Miss 시 캐시 없이 메모리에 직접 기록 (Write-Through와 주로 함께 사용)

### 캐시 일관성 (Cache Coherence) 문제

**원인**: 멀티코어 프로세서에서 각 코어가 독립된 캐시를 보유하여 동일 메모리 주소의 캐시 값이 서로 다를 수 있음.

```
코어 1 캐시: X = 5
코어 2 캐시: X = 5
→ 코어 1이 X = 10으로 수정
→ 코어 2 캐시는 여전히 X = 5 (불일치!)
```

**해결 방법**:

| 방법 | 설명 |
|------|------|
| **스누핑 프로토콜 (Snooping)** | 모든 캐시가 공유 버스를 감시, 수정 시 다른 캐시에 즉시 알림. MESI 프로토콜 |
| **디렉토리 기반 (Directory)** | 중앙 디렉토리가 각 캐시 라인의 상태 추적. 대규모 멀티프로세서에 적합 |
| **Write-Invalidate** | 한 캐시가 수정 시 다른 캐시의 해당 블록을 무효화 |
| **Write-Update** | 한 캐시가 수정 시 다른 캐시도 동시에 갱신 |

**MESI 프로토콜** (가장 널리 사용):
- **M**odified: 수정됨, 유일한 유효 복사본
- **E**xclusive: 유일 복사본, 미수정
- **S**hared: 여러 캐시에 공유, 미수정
- **I**nvalid: 무효 (사용 불가)

## 출제 포인트

- Write-Through vs Write-Back 비교 (장단점 포함)
- 캐시 일관성 문제의 원인: 멀티코어 독립 캐시
- 해결 방법: 스누핑(MESI) vs 디렉토리 기반
- MESI 4가지 상태 서술

## 연관 개념

- [메모리 영역(Code/Data/Heap/Stack)]({{< relref "/docs/04_ComputerSystems/05_Algorithms/memory-areas" >}}) — 메모리 구조
- [OS 스케줄링]({{< relref "/docs/04_ComputerSystems/03_SystemSoftware/01_OS_Embedded/os-scheduling" >}}) — 멀티코어 스케줄링과 캐시 관계
- [FTS/HA]({{< relref "/docs/04_ComputerSystems/06_InfraArchitecture/fts-ha" >}}) — 시스템 성능·가용성 구조

## 참고 기출

- 137회 2교시 1번 (PEIM)
