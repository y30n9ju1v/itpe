---
title: "MMU (Memory Management Unit)"
date: 2026-05-09T07:56:10+09:00
tags: ["pecs", "시스템소프트웨어및응용소프트웨어", "운영체제", "MMU", "TLB", "IOMMU", "가상메모리", "주소변환"]
draft: false
exam_pecs: "137회"
---

## 개요

MMU(Memory Management Unit)는 CPU와 물리 메모리 사이에 위치하여 가상 주소(Virtual Address)를 물리 주소(Physical Address)로 변환하는 하드웨어 장치다. OS의 가상 메모리, 메모리 보호, 프로세스 격리의 핵심 하드웨어 기반이다.

## 핵심 내용

### MMU 구성 요소

| 구성 요소 | 역할 |
|-----------|------|
| **페이지 테이블 베이스 레지스터(PTBR)** | 현재 프로세스의 페이지 테이블 시작 주소 저장 |
| **페이지 테이블** | 가상 페이지 번호(VPN) → 물리 프레임 번호(PFN) 매핑 |
| **TLB** (Translation Lookaside Buffer) | 최근 주소 변환 캐시 |
| **보호 비트** | 읽기/쓰기/실행 권한 설정 (페이지별) |
| **유효 비트** | 페이지가 물리 메모리에 있는지 여부 |

### 주소 변환 흐름

```
가상 주소(VA)
  → TLB 조회 (히트: 즉시 PA 반환)
  → TLB 미스 → 페이지 테이블 접근 (2회 메모리 접근)
  → PFN + 오프셋 → 물리 주소(PA)
```

- **TLB 히트율**: 보통 90~99% (지역성 원리)
- **페이지 폴트**: 유효 비트 0이면 OS가 디스크에서 페이지 로드

### TLB (Translation Lookaside Buffer)

- 페이지 테이블 접근 비용(메모리 2번)을 줄이는 완전 연관(Full Associative) 캐시
- **ASID(Address Space ID)**: 컨텍스트 스위치 시 TLB 플러시 대신 프로세스 식별자 유지
- **TLB 플러시**: 컨텍스트 스위치 시 발생, 성능 저하 원인 중 하나

### MMU vs IOMMU

| 구분 | MMU | IOMMU |
|------|-----|-------|
| **대상** | CPU의 메모리 접근 | I/O 장치(DMA)의 메모리 접근 |
| **위치** | CPU 내부 | 칩셋/PCIe 버스 |
| **목적** | 프로세스 가상 메모리 | DMA 공격 방지, 가상화 |
| **사용 사례** | 일반 OS 메모리 관리 | 가상화(SR-IOV), GPU 패스스루 |

IOMMU는 PCIe 장치가 허가되지 않은 메모리 영역에 DMA 접근하는 것을 차단 → 보안 강화.

## 출제 포인트

- MMU의 주소 변환 흐름: VA → TLB → 페이지 테이블 → PA
- TLB의 역할과 히트/미스 처리
- IOMMU: I/O 장치 DMA 제어, 가상화 환경의 중요성

## 연관 개념

- [가상 메모리]({{< relref "/docs/04_ComputerSystems/05_Algorithms/virtual-memory" >}}) — MMU 기반 가상 메모리 구현
- [DMA]({{< relref "/docs/04_ComputerSystems/02_HardwareSystems/03_IO_Interface/dma-direct-memory-access" >}}) — IOMMU로 제어되는 DMA
- [캐시 메모리]({{< relref "/docs/04_ComputerSystems/05_Algorithms/cache-memory" >}}) — TLB는 주소 변환 전용 캐시

## 참고 기출

- 137회 3교시 2번 (PECS)
- 135회 1교시 3번 (PECS)
