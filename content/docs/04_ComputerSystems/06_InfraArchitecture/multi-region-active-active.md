---
title: "다중지역 동시 가동방식 재해복구 (Multi-Region Active-Active)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "컴퓨터시스템", "인프라아키텍처", "재해복구", "Active-Active", "멀티리전", "DR"]
draft: false
exam_peim: ["137회"]
---

## 개요

다중지역 동시 가동방식(Multi-Region Active-Active)은 둘 이상의 물리적 지역(Region)에 모든 인프라를 구축하고 동시에 서비스를 제공하는 재해복구(DR) 아키텍처다. 어느 한 지역에 재해가 발생해도 다른 지역이 즉시 전체 서비스를 이어받아 RTO≈0, RPO≈0을 목표로 한다.

## 핵심 내용

### 개념 및 특징

| 구분 | Active-Standby | Active-Active |
|------|--------------|--------------|
| 운영 방식 | 주 사이트만 서비스, 대기 사이트 대기 | 모든 사이트 동시 서비스 |
| RTO | 수십 분 ~ 수 시간 | 수 초 이내 (≈0) |
| RPO | 수 분 ~ 수 시간 | ≈0 (실시간 동기화) |
| 비용 | 낮음 (대기 자원 낭비) | 높음 (모든 사이트 풀 스펙) |
| 부하 분산 | 불가 | 가능 (지역별 트래픽 분산) |
| 복잡도 | 낮음 | 높음 (데이터 일관성 유지) |

**특징**:
- **무중단 서비스**: 지역 장애 시 자동 트래픽 전환
- **글로벌 부하분산**: 사용자를 가장 가까운 지역으로 라우팅
- **데이터 일관성**: 모든 지역 데이터 실시간 동기화 (가장 어려운 과제)

### 주요 기술 요소

| 기술 요소 | 설명 |
|-----------|------|
| **글로벌 로드밸런서** | DNS 기반(Route53, Cloudflare) 또는 Anycast로 가장 가까운 지역으로 라우팅 |
| **데이터 복제** | 실시간 동기 복제 (강한 일관성) 또는 비동기 복제 (가용성 우선) |
| **분산 데이터베이스** | 멀티 마스터 DB (CockroachDB, Google Spanner, Cassandra) |
| **충돌 해결(Conflict Resolution)** | 동시 쓰기 충돌 처리 (Last-Write-Wins, CRDT) |
| **서비스 메쉬** | Istio 기반 지역 간 서비스 통신 관리 |
| **헬스체크·자동전환** | 지역별 상태 모니터링, 자동 Failover |
| **데이터 주권** | GDPR 등 데이터 저장 지역 규제 준수 |

### CAP 이론과의 관계

CAP 이론: 분산 시스템에서 Consistency·Availability·Partition Tolerance 중 2개만 선택 가능.
- Active-Active는 AP(Availability + Partition Tolerance) 우선 → 일시적 불일치 허용 (결과적 일관성)
- 금융 시스템은 CP 선호 → 강한 일관성 필요

## 출제 포인트

- Active-Standby vs Active-Active 비교 (RTO/RPO/비용/복잡도)
- 주요 기술 요소 5~6가지 서술 (글로벌 LB, 분산 DB, 충돌 해결 포함)
- CAP 이론과의 관계 언급
- RTO≈0, RPO≈0이 목표임을 명시

## 연관 개념

- [FTS/HA]({{< relref "/docs/04_ComputerSystems/06_InfraArchitecture/fts-ha" >}}) — 단일 지역 내 고가용성과의 차이
- [오픈소스 DBMS 마이그레이션]({{< relref "/docs/03_DataProcessing/03_DBMS_Distributed/opensource-dbms-migration" >}}) — 분산 DB HA 구성
- [DB 트랜잭션 격리]({{< relref "/docs/03_DataProcessing/03_DBMS_Distributed/transaction-isolation-level" >}}) — 분산 환경 일관성과 연계

## 참고 기출

- 137회 3교시 3번 (PEIM)
