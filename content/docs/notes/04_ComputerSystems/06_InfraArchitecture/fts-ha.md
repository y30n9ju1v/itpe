---
title: "FTS와 HA (장애허용시스템 vs 고가용성)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "pecs", "컴퓨터시스템", "인프라아키텍처", "FTS", "HA", "고가용성", "가용성"]
draft: false
exam_peim: ["138회"]
exam_pecs: ["135회"]
---

## 개요

FTS(Fault Tolerant System)는 구성 요소 장애 발생 시에도 서비스 중단 없이 계속 운영되는 시스템이며, HA(High Availability)는 장애 발생 시 빠른 전환(Failover)으로 가동률을 높은 수준으로 유지하는 설계 방식이다. FTS는 무중단을, HA는 신속 복구를 목표로 한다.

## 핵심 내용

### FTS (Fault Tolerant System) 구현 방법

장애가 발생해도 서비스가 **즉시 중단 없이** 지속되는 시스템. 모든 구성 요소를 이중화하여 한쪽 장애 시 나머지가 즉시 대체.

| 기법 | 설명 |
|------|------|
| **하드웨어 이중화** | CPU, 전원, 스토리지 이중화 |
| **Active-Active 클러스터** | 모든 노드가 동시에 서비스, 장애 시 나머지 분담 |
| **RAID** | 디스크 이중화 (RAID 1: 미러링, RAID 5: 패리티) |
| **이중 네트워크** | 네트워크 이중화 (Bonding, LACP) |
| **ECC 메모리** | 메모리 오류 자동 정정 |

### HA (High Availability) 구현 방법

장애 발생 시 **빠른 전환**으로 가동률(Availability)을 99.99% 이상 유지.

| 기법 | 설명 |
|------|------|
| **Active-Standby 클러스터** | 주 노드 장애 시 대기 노드로 Failover |
| **로드 밸런싱** | 다수 서버로 부하 분산, 일부 장애 시 나머지 처리 |
| **Health Check** | 주기적 상태 확인 후 자동 Failover |
| **DNS Failover** | DNS TTL 활용한 트래픽 전환 |
| **데이터 복제** | 실시간 복제로 데이터 일관성 유지 |

### FTS vs HA 비교

| 구분 | FTS | HA |
|------|-----|----|
| 목표 | 무중단 운영 | 신속 복구 |
| 장애 시 | 서비스 중단 없음 | 수초~수분 내 복구 |
| 구현 방식 | 완전 이중화 | Failover 메커니즘 |
| 비용 | 매우 높음 | 중간~높음 |
| 적용 사례 | 항공 제어, 원전, 병원 | 금융, 커머스, 포털 |
| 가용성 | 99.999% (Five Nines) | 99.99% (Four Nines) |

### 가용성(Availability) 계산

```
가용성 = MTBF / (MTBF + MTTR)
- MTBF: 평균 무고장 시간
- MTTR: 평균 복구 시간
```

## 출제 포인트

- FTS와 HA의 핵심 차이(무중단 vs 신속복구) 먼저 정의
- 각각의 구현 방법 3~4가지씩 서술
- 비교표 작성 (목표·비용·가용성·사례)
- 가용성 공식 포함

## 연관 개념

- [오픈소스 DBMS 마이그레이션]({{< relref "/docs/notes/03_DataProcessing/03_DBMS_Distributed/opensource-dbms-migration" >}}) — HA 구성 적용
- [DB 분할]({{< relref "/docs/notes/03_DataProcessing/03_DBMS_Distributed/db-partitioning" >}}) — 분산 DB의 가용성 구성
- 클라우드 인프라 — 멀티 AZ로 HA 구현

## 참고 기출

- 138회 3교시 4번 (PEIM)
- 135회 4교시 5번 (PECS)
