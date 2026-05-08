---
title: "DMA (Direct Memory Access)"
date: 2026-05-09T07:56:10+09:00
tags: ["pecs", "하드웨어시스템", "입출력인터페이스", "DMA", "SG-DMA", "RDMA", "입출력", "메모리"]
draft: false
exam_pecs: ["137회"]
---

## 개요

DMA(Direct Memory Access)는 CPU 개입 없이 I/O 장치와 메모리 사이에서 데이터를 직접 전송하는 하드웨어 메커니즘이다. CPU는 전송 시작과 완료 인터럽트만 처리하여 대용량 데이터 전송 시 CPU 부하를 크게 줄인다.

## 핵심 내용

### Programmed I/O vs DMA 비교

| 구분 | Programmed I/O (PIO) | DMA |
|------|---------------------|-----|
| **CPU 역할** | 매 바이트/워드마다 직접 전송 | 시작·완료 인터럽트만 처리 |
| **CPU 부하** | 매우 높음 | 낮음 |
| **전송 속도** | 느림 | 빠름 |
| **구현 복잡도** | 단순 | DMA 컨트롤러 필요 |
| **적합 상황** | 소량 데이터 | 대용량 블록 전송 |

**Interrupt-Driven I/O**: PIO와 DMA의 중간 — 문자 수신 때마다 인터럽트, 여전히 CPU가 복사.

### DMA 동작 방식

1. CPU가 DMA 컨트롤러에 소스/목적지 주소, 전송 크기 설정
2. DMA가 버스 제어권 획득 → 메모리-장치 간 직접 전송
3. 전송 완료 시 인터럽트로 CPU에 통보

### Cycle Stealing Mode vs Transparent Mode

| 구분 | Cycle Stealing Mode | Transparent Mode |
|------|-------------------|-----------------|
| **방식** | CPU 버스 사이클 하나를 '도용'하여 1워드 전송 | CPU가 버스 미사용 시에만 전송 |
| **CPU 영향** | 약간의 지연 발생 | CPU 성능에 영향 없음 |
| **전송 우선순위** | DMA가 주기적으로 선점 | CPU 우선, DMA는 유휴 시 |
| **사용 사례** | 실시간 I/O | 백그라운드 대용량 전송 |

### SG-DMA와 RDMA

**SG-DMA (Scatter-Gather DMA)**
- 비연속적인 메모리 영역(Scatter)의 데이터를 모아서(Gather) 전송하거나 반대 수행
- 단일 DMA 명령으로 여러 메모리 버퍼를 처리 → 네트워크 제로카피(Zero-Copy) 구현
- 예: Linux `sendfile()`, 네트워크 카드 TSO(TCP Segmentation Offload)

**RDMA (Remote DMA)**
- 원격 노드의 메모리에 CPU 개입 없이 직접 읽기/쓰기
- 초저지연·고대역폭 (수μs 지연)
- 구현: InfiniBand, RoCE(RDMA over Converged Ethernet), iWARP
- 사용 사례: HPC 클러스터, AI 학습(NCCL), 분산 데이터베이스(Redis on Flash)

## 출제 포인트

- PIO vs DMA — CPU 부하 관점 비교
- Cycle Stealing vs Transparent — DMA 버스 사용 방식 차이
- SG-DMA: 비연속 메모리 + 제로카피; RDMA: 원격 노드 직접 접근

## 연관 개념

- [인터럽트 처리]({{< relref "/docs/04_ComputerSystems/03_SystemSoftware/01_OS_Embedded" >}}) — DMA 완료 인터럽트 처리
- [HBM]({{< relref "/docs/04_ComputerSystems/06_InfraArchitecture/high-bandwidth-memory" >}}) — 고대역폭 메모리와 DMA 연계
- 인피니밴드/RoCE — RDMA 네트워크 패브릭

## 참고 기출

- 137회 2교시 6번 (PECS)
