---
title: "대규모 AI 데이터센터 구축 기술"
date: 2026-05-09T07:09:12+09:00
tags: ["peim", "컴퓨터시스템및정보통신", "인프라아키텍처", "데이터센터", "DCI", "저지연", "스케일링", "AI인프라"]
draft: false
exam_peim: "134회"
---

## 개요

LLM·생성형 AI 서비스의 급격한 수요로 수천 개의 GPU 클러스터를 연결하는 초대규모 AI 데이터센터가 구축되고 있다. 마이크로초 단위 저지연·PB급 데이터 처리·수십만 GPU 병렬 학습을 지원하기 위한 네트워크·스토리지·쿨링 기술이 핵심이다.

## 핵심 내용

### 가. 저지연 기술과 스케일링 확보 기술

**저지연 기술**

| 기술 | 설명 |
|------|------|
| **RDMA (Remote Direct Memory Access)** | CPU 개입 없이 원격 메모리 직접 접근, 수μs 지연 |
| **InfiniBand** | HPC·AI 특화 고대역폭 인터커넥트 (400Gb/s+) |
| **RoCE (RDMA over Converged Ethernet)** | 이더넷 위 RDMA, 비용 절감 |
| **NVLink / NVSwitch** | NVIDIA GPU 간 전용 고속 인터커넥트 (최대 900GB/s) |
| **SmartNIC/DPU** | 네트워크 처리를 전용 프로세서로 오프로드 |

**스케일링 확보 기술**

| 기술 | 설명 |
|------|------|
| **수평 스케일링 (Scale-out)** | 서버 노드 추가, 분산 학습 확장 |
| **Spine-Leaf 아키텍처** | 2계층 Clos 토폴로지, 균등한 동서(East-West) 트래픽 처리 |
| **Fat-Tree 토폴로지** | 비차단(Non-blocking) 스위칭 패브릭 |
| **컨테이너·쿠버네티스** | 워크로드 동적 배치·확장 |
| **자동화 오케스트레이션** | Slurm, Kubernetes, Ray로 GPU 클러스터 스케줄링 |

**쿨링 기술** (전력 밀도 증가에 따른 과제)
- 액침 냉각(Immersion Cooling): 서버를 절연 유체에 직접 침지
- 직접 액냉(Direct Liquid Cooling, DLC): CPU/GPU에 수냉 플레이트 직접 부착
- PUE(Power Usage Effectiveness) 목표: 1.2 이하 (AI 데이터센터 기준)

### 나. DCI (Data Center Interconnect) 기술

**DCI 정의**
- 지리적으로 분산된 데이터센터 간을 고대역폭·저지연 전용망으로 연결하는 기술
- 재해복구(DR), 데이터 동기화, 멀티사이트 AI 학습에 필수

**DCI 주요 기술**

| 기술 | 설명 |
|------|------|
| **OTN (Optical Transport Network)** | 광 전송 표준, 100G/400G/800G 파장 다중화 |
| **DWDM (Dense WDM)** | 단일 광섬유에 다수 파장 다중화, 수십 Tb/s 용량 |
| **SR-IOV** | 가상 기능으로 네트워크 자원 분리 |
| **MPLS-TP** | 패킷 기반 전송망의 보호·복구 |
| **ZR/ZR+ 코히어런트 광학** | 80km~2000km 장거리 DCI (플러그인 모듈) |

**DCI 아키텍처 유형**

| 유형 | 특징 |
|------|------|
| **Metro DCI** | 도시 내 수십 km, 초저지연 (<1ms) |
| **Long-haul DCI** | 수백~수천 km, 능동 광 증폭 필요 |
| **Cloud DCI** | 클라우드 제공자 간 전용 연결 (AWS Direct Connect, Azure ExpressRoute) |

**지연 예산 (Latency Budget)**
- AI 분산 학습 시 데이터센터 간 지연이 집합(All-reduce) 통신 병목
- 기준: 동일 캠퍼스 <100μs, Metro <1ms, Long-haul <10ms

## 출제 포인트

- RDMA·InfiniBand·NVLink 등 저지연 인터커넥트 기술
- Spine-Leaf vs Fat-Tree 스케일링 아키텍처
- DCI의 정의와 DWDM·OTN·ZR 광학 기술
- AI 분산 학습에서 데이터센터 간 지연이 미치는 영향

## 연관 개념

- [고대역 초고속 메모리(HBM)]({{< relref "/docs/04_ComputerSystems/06_InfraArchitecture/high-bandwidth-memory" >}}) — AI 가속기의 메모리 대역폭
- [GPU/TPU]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/gpu-tpu" >}}) — AI 데이터센터의 핵심 연산 자원
- [FTS/HA]({{< relref "/docs/04_ComputerSystems/06_InfraArchitecture/fts-ha" >}}) — 데이터센터 고가용성 아키텍처
- [멀티 GPU 기술]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/multi-gpu-training" >}}) — 분산 학습 기법

## 참고 기출

- 134회 2교시 4번 (PEIM)
