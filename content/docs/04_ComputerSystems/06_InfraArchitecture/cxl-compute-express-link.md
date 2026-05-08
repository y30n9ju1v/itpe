---
title: "CXL (Compute Express Link)"
date: 2026-05-08T23:38:40+09:00
tags: ["peim", "컴퓨터시스템및정보통신", "인프라아키텍처", "CXL", "메모리확장", "이종컴퓨팅", "PCIe"]
draft: false
exam: "136회"
---

## 개요

CXL(Compute Express Link)은 CPU·GPU·FPGA·메모리 등 이종 디바이스 간 고속·저지연 캐시 코히런트 통신을 지원하는 개방형 인터커넥트 표준이다. PCIe 물리 계층 위에서 동작하며, AI·빅데이터 워크로드에서 메모리 대역폭 병목을 해소하는 핵심 기술로 주목받는다.

## 핵심 내용

**CXL 개요**
- 발표: Intel 주도, 2019년 CXL 1.0 (현재 CXL 3.1)
- 기반: PCIe 6.0 물리 계층
- 목적: CPU와 가속기·메모리 간 캐시 코히런스 유지하며 고속 데이터 공유

**CXL 3가지 프로토콜**

| 프로토콜 | 용도 | 설명 |
|---------|------|------|
| CXL.io | I/O 통신 | PCIe 기반 표준 I/O (레거시 호환) |
| CXL.cache | 캐시 코히런스 | 디바이스가 호스트 메모리를 캐시로 활용 |
| CXL.mem | 메모리 접근 | 호스트가 디바이스 메모리에 직접 접근 |

**주요 활용 사례**

| 시나리오 | CXL 역할 |
|----------|---------|
| 메모리 풀링 | 여러 서버가 공유 메모리 풀에 접근 (Memory Pooling) |
| AI 가속기 연결 | GPU/NPU가 호스트 메모리를 코히런트하게 공유 |
| 메모리 확장 | DRAM 용량 한계를 CXL-attached 메모리로 확장 |
| 이종 컴퓨팅 | CPU-GPU-FPGA 간 저지연 데이터 공유 |

**기존 기술과의 비교**

| 구분 | PCIe | NVLink | CXL |
|------|------|--------|-----|
| 캐시 코히런스 | 없음 | 있음 (NVIDIA only) | 있음 (개방 표준) |
| 메모리 공유 | 제한적 | GPU간 | CPU-가속기-메모리 |
| 표준화 | 개방 | 독점 | 개방 |

## 실무 적용 예시

대형 LLM 추론 서버에서 GPU의 HBM 메모리 한계를 CXL-attached DRAM으로 투명하게 확장하여, 더 큰 모델을 단일 노드에서 실행하는 구성이 확산되고 있다.

## 출제 포인트

- CXL의 정의와 PCIe와의 관계
- 3가지 프로토콜 (io·cache·mem) 역할
- 메모리 풀링·AI 가속기 활용 사례

## 연관 개념

- [GPU/TPU]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/gpu-tpu" >}}) — CXL로 연결되는 AI 가속기
- [FTS/HA 인프라]({{< relref "/docs/04_ComputerSystems/06_InfraArchitecture/fts-ha" >}}) — 고성능 인프라 아키텍처

## 참고 기출

- 136회 1교시 8번 (PEIM)
