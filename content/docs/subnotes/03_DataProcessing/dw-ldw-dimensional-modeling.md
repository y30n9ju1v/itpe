---
title: "LDW와 DW 다차원 모델링: Star/Snowflake Schema"
date: 2026-07-12T15:35:09+09:00
tags: ["데이터처리", "데이터웨어하우스", "LDW", "StarSchema", "SnowflakeSchema", "다차원모델링", "서브노트"]
draft: false
---

# LDW와 DW 다차원 모델링: Star/Snowflake Schema 서브노트

> **두음 머리에 박기 🧠**
> - **저·기·운** (LDW 3대 구성요소 그룹: **저**장/처리, **기**준 데이터, **운**영)
> - **F·D** (다차원 모델링 핵심 테이블: **F**act Table(사실), **D**imension Table(차원))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **LDW(Logical Data Warehouse)와 DW 다차원 모델링(Star Schema / Snowflake Schema)** |
| **정의** | LDW: 기존 EDW+Hadoop 통합 → 정형·비정형 데이터 재배치/변환없이 조회하는 논리적 통합 아키텍처<br>다차원 모델링: 사실 테이블(측정값)-차원 테이블(분석관점) 관계로 OLAP 최적화 구조 설계(Star/Snowflake) |
| **키워드** | LDW, Data Virtualization, Star Schema, Snowflake Schema, Fact/Dimension Table, SCD |
| **개념도** | `[기존 EDW]`─┐<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─▶`[LDW: 논리적 통합 계층]`─▶분석/리포팅<br>`[Hadoop]`──┘<br>`[Fact Table]`──`[Dim1][Dim2]...[DimN]` (Star, 직접 연결)<br>`[Fact Table]`──`[Dim1]`──`[Dim1-세부]` (Snowflake, 정규화 연결) |
| **구성요소** | 1. **LDW 특징**: 비용절감(오픈소스Hadoop)·처리속도↑(병렬처리)·분석 적시성·Scale-out 용이·데이터 효용성↑<br>2. **LDW 구성요소**: 저장/처리(Repository Mgmt, Data Virtualization, Distributed Processing)·기준데이터(Metadata Mgmt, Taxonomy/Ontology Resolution, Auditing)·운영(SLA Mgmt)<br>3. **LDW 아키텍처**: 원천데이터(Sqoop/ETL/CDC 수집)→저장/처리계층(HDFS/YARN/Hive/Spark+EDW/ODS/NoSQL)→응용(Reporting/Analytics/Text Mining)<br>4. **Star Schema**: 사실테이블 1개 - 차원테이블 다수 직접연결, Join 최소 → 쿼리성능↑, 차원 데이터 중복 발생<br>5. **Snowflake Schema**: 차원테이블 정규화(3NF) → 중복제거·저장공간 절약, Join 증가로 속도↓ 가능 |
| **비교** | **Star Schema**<br>- 비정규화 차원테이블, 단순구조<br>- Join 최소화 → 쿼리 성능 우수<br>- 데이터 중복·갱신이상 가능<br><br>**Snowflake Schema**<br>- 정규화(3NF) 차원테이블, 복잡구조<br>- 저장공간 절약·일관성↑<br>- Join 증가로 속도↓ 가능 |
| **차별화** | **LDW 및 다차원 모델링 실무 적용 전략**<br>1. **Schema 선택 기준**: 쿼리빈도·응답속도 중요 → Star, 정합성·갱신빈번 → Snowflake<br>2. **SCD 관리**: Type 1(덮어쓰기)/2(이력유지)/3(제한적 이력) 정책 사전정의 → 분석 신뢰성 확보<br>3. **LDW 거버넌스 우선**: 메타데이터 관리·품질정책 선행수립 → 정형·비정형 통합분석 신뢰성<br>4. **하이브리드 운영**: 기존EDW+LDW 병행, Hadoop 레이어 점진 확장하는 단계적 도입 |
