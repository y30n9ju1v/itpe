---
title: "OLAP vs OLTP: 비교와 분리운영"
date: 2026-07-12T15:35:09+09:00
tags: ["데이터처리", "데이터웨어하우스", "OLAP", "OLTP", "분석DB", "운영DB", "서브노트"]
draft: false
---

# OLAP vs OLTP: 비교와 분리운영 서브노트

> **두음 머리에 박기 🧠**
> - **D·P·S·D** (OLAP 4대 조작: **D**rill Down/Up, **P**ivot, **S**lice, **D**ice)
> - **서·성·관** (분리 운영 3대 필요성: **서**비스 제공 차별화, **성**능, **관**리 정책 일관성)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **OLAP(On-Line Analytical Processing) vs OLTP(On-Line Transaction Processing) 비교 및 분리 운영** |
| **정의** | 요청 조건에 맞는 대량 데이터를 검색해 다차원 뷰를 제공하는 온라인 분석처리(OLAP)와, 트랜잭션 중심으로 거래 데이터를 정확히 처리하는 온라인 트랜잭션처리(OLTP)를 비교하고, 운영 DB와 분석 DB(DW)를 목적·특성이 상이한 이유로 분리 운영해야 하는 근거를 다루는 기업 정보시스템 아키텍처 |
| **키워드** | Drill Down/Up, Slice/Dice, ACID, Star/Snowflake Schema, ETL, Schema on Write |
| **개념도** | `[운용시스템](SCM/ERP/MES)`▶`OLTP DB`──ETL──▶`Staging`──▶`DW/DM`◀──`OLAP`◀──`[분석시스템](EIS/BI)` |
| **구성요소** | 1. **OLAP 기능적 특징**: 중복·집계·소트·차원별 그룹, Drill Down/Up·Pivot·Slice·Dice 기능, MOLAP/ROLAP/DOLAP 구현<br>2. **OLTP 기능적 특징**: 트랜잭션 ACID 보장, Insert/Update/Commit/Rollback, TP-monitor/CS/EJB/ODBC 구현<br>3. **OLAP 데이터 특징**: 중복·집계 컬럼, 스타/스노우플레이크 스키마, Read Only, 시계열·그룹 분석용<br>4. **OLTP 데이터 특징**: 정규화로 중복 최소화, ER모델, Repeatable Read·락킹, 무결성 유지 목적<br>5. **분리 운영 필요성**: 서비스 제공(배치작업으로 인한 운영DB 지연 방지)·DB 성능(병행처리 성능저하 방지)·데이터 관리(백업/복구 방식 차이 반영) |
| **비교** | **OLTP**<br>- 단일 트랜잭션 데이터 저장·처리, 실시간 거래<br>- 데이터 무결성·정합성 최우선, ER모델<br>- 응용프로그램을 통한 간접 접근<br><br>**OLAP**<br>- 대용량 데이터 조회·다차원 분석<br>- 시계열분석·그룹분석·실적집계, Fact/Dimension 모델<br>- 사용자가 EUC로 직접 접근 |
| **차별화** | **OLAP/OLTP 분리 운영 실무 전략** <br>1. **ETL 주기 설계**: 운영DB 부하가 낮은 야간 배치로 ETL을 실행해 OLTP 서비스 영향 최소화<br>2. **개인정보 처리 이원화**: 운영DB는 암호화, DW 적재 시에는 마스킹·일반화·난독화로 개인정보 처리 방식을 분리<br>3. **SLA 독립 관리**: OLTP는 응답시간, OLAP는 쿼리 처리량을 별도 SLA 지표로 모니터링<br>4. **주 이용자 확대**: OLAP은 전통적으로 관리자/경영진 대상이었으나 셀프서비스 BI 확산으로 현업 운영자까지 사용자층이 확대되는 추세 |
