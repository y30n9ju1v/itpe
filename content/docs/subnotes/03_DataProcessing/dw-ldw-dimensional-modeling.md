---
title: "LDW와 DW 다차원 모델링: Star/Snowflake Schema"
date: 2026-07-13T15:35:09+09:00
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
| **정의** | 기존 EDW와 하둡(Hadoop) 환경을 통합해 정형·비정형 데이터를 재배치나 변환 없이 조회 가능하도록 추상화한 정보분석 아키텍처인 LDW와, 사실 테이블(측정값)과 차원 테이블(분석 관점)의 관계로 OLAP 분석에 최적화된 구조를 설계하는 다차원 모델링(Star/Snowflake Schema) 기법 |
| **키워드** | LDW, Data Virtualization, Star Schema, Snowflake Schema, Fact/Dimension Table, SCD |
| **개념도** | `[기존 EDW]`─┐<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─▶`[LDW: 논리적 통합 계층]`─▶분석/리포팅<br>`[Hadoop]`──┘<br>`[Fact Table]`──`[Dim1][Dim2]...[DimN]` (Star, 직접 연결)<br>`[Fact Table]`──`[Dim1]`──`[Dim1-세부]` (Snowflake, 정규화 연결) |
| **구성요소** | 1. **LDW 특징**: 비용 절감(오픈소스 Hadoop)·처리속도 증가(병렬처리)·분석 적시성·Scale-out 용이·데이터 효용성 증대<br>2. **LDW 구성요소**: 저장/처리(Repository Management, Data Virtualization, Distributed Processing)·기준 데이터(Metadata Management, Taxonomy/Ontology Resolution, Auditing)·운영(SLA Management)<br>3. **LDW 아키텍처**: 원천데이터(Sqoop/ETL/CDC 수집)→저장/처리 계층(HDFS/YARN/Hive/Spark + EDW/ODS/NoSQL)→응용(Reporting/Analytics/Text Mining)<br>4. **Star Schema**: 1개 사실 테이블에 다수 차원 테이블이 직접 연결, Join 최소화로 쿼리 성능 우수하나 차원 테이블 데이터 중복 발생<br>5. **Snowflake Schema**: 차원 테이블을 정규화(3NF)해 중복 제거, 저장 공간 절약하나 Join 증가로 속도 저하 가능 |
| **비교** | **Star Schema**<br>- 비정규화된 차원 테이블, 단순 구조<br>- Join 횟수 최소화 → 쿼리 성능 우수<br>- 데이터 중복·갱신 이상 발생 가능<br><br>**Snowflake Schema**<br>- 정규화(3NF)된 차원 테이블, 복잡 구조<br>- 저장 공간 절약·데이터 일관성 향상<br>- Join 증가로 Star Join 속도 저하 가능 |
| **차별화** | **LDW 및 다차원 모델링 실무 적용 전략** <br>1. **Schema 선택 기준**: 쿼리 빈도가 높고 응답 속도가 중요하면 Star Schema, 데이터 정합성과 갱신이 잦으면 Snowflake Schema 채택<br>2. **SCD(Slowly Changing Dimension) 관리**: 차원 데이터 변경 이력을 SCD Type 1(덮어쓰기)/2(이력 유지)/3(제한적 이력) 정책으로 사전 정의해 분석 신뢰성 확보<br>3. **LDW 거버넌스 우선**: 메타데이터 관리·데이터 품질 정책을 선행 수립해야 정형·비정형 통합 분석의 신뢰성 확보<br>4. **하이브리드 운영**: 기존 EDW와 LDW를 병행 운영하며 Hadoop 레이어를 점진적으로 확장하는 단계적 도입 전략 권장 |
