---
title: "오픈소스 DBMS 전환 및 마이그레이션"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "자료처리", "DBMS", "오픈소스", "마이그레이션", "고가용성"]
draft: false
exam_peim: ["138회"]
---

## 개요

상용 DBMS(Oracle, MS SQL 등)에서 오픈소스 DBMS(PostgreSQL, MySQL, MariaDB 등)로의 전환은 라이선스 비용 절감과 벤더 종속성 탈피를 위해 공공·민간에서 확산되고 있다. 이기종 DBMS 간 마이그레이션은 SQL 방언, 저장 프로시저, 데이터 타입 차이로 인한 복잡성이 높다.

## 핵심 내용

### 전환 배경

- **비용 절감**: 상용 DBMS 라이선스 비용(Oracle EE 수억 원/코어)
- **벤더 종속성(Vendor Lock-in) 탈피**: 오픈 표준 기반 유연성
- **오픈소스 성숙도**: PostgreSQL·MySQL의 기능·안정성이 상용 수준에 도달
- **공공부문 정책**: 공공기관 공개소프트웨어 전환 권고

### 전환 시 제약사항

| 제약 유형 | 내용 |
|-----------|------|
| SQL 호환성 | PL/SQL (Oracle) → PL/pgSQL 변환 필요 |
| 데이터 타입 | NUMBER, VARCHAR2 등 방언 차이 |
| 저장 프로시저·트리거 | 대규모 변환 작업 |
| 성능 특성 | 옵티마이저 차이로 재튜닝 필요 |
| 운영 도구 | 모니터링·백업 도구 교체 |

### 단계별 마이그레이션 절차

1. **현황 분석**: AS-IS 데이터 구조·SQL·프로시저 인벤토리
2. **목표 설계**: TO-BE 스키마 설계, 변환 규칙 정의
3. **변환 도구 적용**: AWS SCT, pgloader, Ora2Pg 등
4. **데이터 이전**: 초기 전체 이전 + 증분 동기화(CDC)
5. **테스트**: 기능 테스트, 성능 비교 테스트
6. **전환(Cutover)**: 서비스 중단 최소화 전략(Blue-Green)
7. **안정화**: 모니터링, 이슈 대응

### 고가용성(HA) 아키텍처

- **PostgreSQL**: Patroni + etcd (자동 Failover), Streaming Replication
- **MySQL**: InnoDB Cluster (Group Replication), ProxySQL 로드밸런싱
- **구성 방식**: Active-Standby (HA), Active-Active (부하분산)

## 출제 포인트

- 전환 배경 3-4가지 명확히 서술
- 제약사항을 SQL·데이터·운영 측면으로 분류
- 마이그레이션 7단계 흐름도 형태로 서술
- HA 구현 방법(복제·Failover·로드밸런싱) 포함

## 연관 개념

- [FTS/HA]({{< relref "/docs/notes/04_ComputerSystems/06_InfraArchitecture/fts-ha" >}}) — 고가용성 아키텍처 상세
- [DB 분할]({{< relref "/docs/notes/03_DataProcessing/03_DBMS_Distributed/db-partitioning" >}}) — 분산 DBMS 구성
- 데이터 품질관리 — 마이그레이션 후 데이터 정합성 검증

## 참고 기출

- 138회 2교시 1번 (PEIM)
