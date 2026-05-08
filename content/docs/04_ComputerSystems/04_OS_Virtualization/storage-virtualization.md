---
title: "스토리지 가상화 (Storage Virtualization)"
date: 2026-05-09T07:09:12+09:00
tags: ["peim", "컴퓨터시스템및정보통신", "가상화", "스토리지가상화", "SAN", "NAS", "클라우드스토리지"]
draft: false
exam: "134회"
---

## 개요

스토리지 가상화(Storage Virtualization)는 물리적으로 분산된 이기종 스토리지 장치를 하나의 논리적 스토리지 풀(Pool)로 통합 관리하는 기술이다. 관리 복잡성 감소, 스토리지 활용률 향상, 무중단 마이그레이션이 주요 이점이다.

## 핵심 내용

### 스토리지 가상화 유형

**1. 블록 레벨 가상화 (Block-level Virtualization)**

| 구분 | 설명 |
|------|------|
| **개념** | 물리 블록 장치를 논리적 블록으로 추상화 |
| **구현** | SAN(Storage Area Network) 스위치, 스토리지 컨트롤러 |
| **장점** | 고성능, 지연 시간 최소화 |
| **적용** | DBMS, 고성능 트랜잭션 처리 |
| **예시** | LUN(Logical Unit Number) 매핑, Thin Provisioning |

**2. 파일 레벨 가상화 (File-level Virtualization)**

| 구분 | 설명 |
|------|------|
| **개념** | 파일 시스템 레벨에서 여러 NAS 장치를 단일 네임스페이스로 통합 |
| **구현** | NAS 게이트웨이, 파일 가상화 어플라이언스 |
| **장점** | 서버 재구성 없이 스토리지 이동 가능 |
| **예시** | NetApp ONTAP, EMC VNX Global Namespace |

**3. 오브젝트 스토리지 가상화 (Object Storage)**

| 구분 | 설명 |
|------|------|
| **개념** | 데이터를 오브젝트(데이터+메타데이터+고유 ID)로 저장 |
| **접근 방식** | REST API (HTTP GET/PUT/DELETE) |
| **장점** | 무한 확장, 대용량 비정형 데이터 적합 |
| **예시** | AWS S3, OpenStack Swift, MinIO |

**4. 클라우드 스토리지 가상화**

| 구분 | 설명 |
|------|------|
| **개념** | 퍼블릭 클라우드와 온프레미스 스토리지 통합 (하이브리드) |
| **구현** | 스토리지 게이트웨이, CASB |
| **예시** | AWS Storage Gateway, Azure StorSimple |

### 스토리지 가상화 아키텍처

**인밴드(In-band) vs 아웃밴드(Out-of-band)**

| 구분 | 인밴드 | 아웃밴드 |
|------|--------|---------|
| 데이터 경로 | 가상화 장치 통과 | 메타데이터만 경유 |
| 성능 | 병목 가능 | 데이터 흐름 간섭 없음 |
| 관리 | 단순 | 복잡 |

### 주요 기술

- **씬 프로비저닝(Thin Provisioning)**: 실제 사용 공간만 할당, 용량 예약 불필요
- **자동 계층화(Auto-Tiering)**: 접근 빈도에 따라 SSD/HDD/테이프 자동 이동
- **스냅샷(Snapshot)**: 특정 시점 복사본 생성 (Copy-on-Write)
- **중복제거(Deduplication)**: 동일 데이터 블록 중복 저장 제거

## 출제 포인트

- 4가지 가상화 유형(블록·파일·오브젝트·클라우드) 구분과 특징
- 인밴드 vs 아웃밴드 차이
- 씬 프로비저닝과 자동 계층화의 활용 효과
- SAN, NAS, 오브젝트 스토리지 비교

## 연관 개념

- [CXL]({{< relref "/docs/04_ComputerSystems/06_InfraArchitecture/cxl-compute-express-link" >}}) — 차세대 스토리지-컴퓨팅 인터커넥트
- [고대역 초고속 메모리(HBM)]({{< relref "/docs/04_ComputerSystems/06_InfraArchitecture/high-bandwidth-memory" >}}) — 메모리 계층의 최상위
- [서버리스 컴퓨팅]({{< relref "/docs/04_ComputerSystems/04_OS_Virtualization/serverless-computing" >}}) — 스토리지 가상화 위에서 동작

## 참고 기출

- 134회 1교시 10번 (PEIM)
