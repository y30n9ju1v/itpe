---
title: "분산 데이터베이스의 투명성 (Distributed DB Transparency)"
date: 2026-05-29T11:17:52+09:00
tags: ["peim", "자료처리", "DBMS분산파일처리", "분산DB", "투명성", "위치투명성"]
draft: false
exam_peim: ["139회"]
---

## 개요

분산 데이터베이스의 투명성(Transparency)이란 사용자가 데이터의 물리적 분산 구조를 의식하지 않고 마치 단일 DB처럼 접근할 수 있도록 시스템이 복잡성을 숨기는 특성이다.

## 핵심 내용

### 투명성의 종류

| 투명성 | 설명 |
|--------|------|
| **위치(Location) 투명성** | 데이터가 어느 사이트에 있는지 몰라도 접근 가능 |
| **분할(Fragmentation) 투명성** | 릴레이션이 수평·수직 분할되어 있어도 전체를 하나로 조회 |
| **복제(Replication) 투명성** | 동일 데이터가 여러 사이트에 복제되어 있어도 단일 데이터처럼 접근 |
| **병행(Concurrency) 투명성** | 다수 트랜잭션이 동시에 실행되어도 직렬성 보장 |
| **장애(Failure) 투명성** | 일부 사이트 장애 시에도 서비스 지속 |
| **성능(Performance) 투명성** | 분산 환경의 최적 쿼리 수행을 사용자가 직접 처리 불필요 |
| **확장(Scalability) 투명성** | 사이트 추가·변경 시 응용 프로그램 수정 불필요 |

### 분산 DB 투명성 구현 기술

- **전역 스키마(Global Schema)**: 분산된 로컬 스키마를 통합 관리
- **분산 쿼리 최적화기**: 위치·비용을 고려한 실행 계획 자동 생성
- **2단계 커밋(2PC)**: 분산 트랜잭션의 원자성 보장 → 병행·장애 투명성 기반

## 실무 적용 예시

전국 지방자치단체 통합 DB에서 서울·부산·대구 사이트에 분산 저장된 민원 데이터를 사용자가 단일 쿼리로 조회할 수 있도록 위치 투명성과 분할 투명성을 구현한다.

## 출제 포인트

- 투명성 종류 7가지를 분류·정의하는 단답형 단골 주제
- 투명성 구현 대가(비용): 통신 오버헤드, 복잡한 분산 트랜잭션 관리
- 2PC·SAGA 패턴과 병행·장애 투명성의 관계

## 연관 개념

- [DB 파티셔닝]({{< relref "/docs/notes/03_DataProcessing/03_DBMS_Distributed/db-partitioning" >}}) — 수평·수직 분할의 구체적 기법
- [트랜잭션 격리수준]({{< relref "/docs/notes/03_DataProcessing/03_DBMS_Distributed/transaction-isolation-level" >}}) — 병행 투명성의 기반
- [DB 트랜잭션 복구]({{< relref "/docs/notes/03_DataProcessing/03_DBMS_Distributed/db-transaction-recovery" >}}) — 장애 투명성 구현

## 참고 기출

- 139회 1교시 7번 (PEIM)
