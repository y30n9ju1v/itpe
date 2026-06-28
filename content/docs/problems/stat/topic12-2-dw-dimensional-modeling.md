---
title: "DW 다차원 모델링 (Star Schema / Snowflake Schema)"
date: 2026-06-28T00:00:00+09:00
tags: ["통계", "데이터분석", "핵토200", "DW", "다차원모델링", "StarSchema", "SnowflakeSchema", "OLAP", "사실테이블", "차원테이블"]
topic_no1: 12
topic_no2: 2
topic_large: "LDW (Logical Data Warehouse)"
topic_small: "DW 다차원 모델링·Star Schema·Snowflake Schema"
exam_ref: "모의_82회"
exam_type: "컴시응"
question_no: 7
---

## 문제

DW(Data Warehouse)의 다차원 모델링에 대해 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 출제영역 | LDW (Logical Data Warehouse) |
| 난이도 | ★★★☆☆ |

## 해설

### 출제 배경 및 의도

OLAP 기반 의사결정 지원 시스템에서 DW 설계의 핵심인 다차원 모델링 기법(Star/Snowflake Schema)의 구조와 차이점, EDW 모델링과의 비교를 통해 설계 능력을 확인하기 위해 출제

### 1. 사실·차원 테이블 기반 분석 설계 기법, DW 다차원 모델링의 개요

정 의  • DW 모델링 시 사실 테이블(Fact Table)과 차원 테이블(Dimension Table) 간의 상호관계를 정의한 모델링 기법
       - 관계형 데이터베이스로 다차원 데이터를 구현하는 데 사용되는 기법
       - OLAP 분석에 최적화된 구조로, 복잡한 Join 최소화 및 빠른 집계 쿼리를 지원

```
[Fact Table]  ──── [Dimension Table 1]
     │         ──── [Dimension Table 2]
     └─────── ──── [Dimension Table N]
(측정값·수치)        (분석 관점·기준)
```

### 2. 다차원 모델링 기법

#### 가. Star Schema

한 개의 사실 테이블(Fact Table)에 다수의 차원 테이블(Dimension Table)이 둘러싼 형태로, 적은 Join으로 빠른 Query 성능을 제공한다.

```
     [지역]    [일자]
        \      /
[상품]--[매출]--[성별]
             \
            [연령]
```

- **장점**: Join 횟수 최소화 → 쿼리 성능 우수, 구조 단순하여 이해 용이
- **단점**: 차원 테이블 내 데이터 중복 발생 가능, 갱신 이상 발생 가능성

#### 나. Snowflake Schema

Star Schema의 데이터 중복 문제를 해결하기 위해 차원 테이블을 정규화(3차 정규화)한 형태이다.

```
[지역-시도]──[지역]    [연도]──[일자]
               \         /
    [카테고리]──[상품]──[매출]──[성별]
                              \
                             [연령대]──[연령]
```

- **장점**: 데이터 중복 제거, 저장 공간 절약, 데이터 일관성 향상
- **단점**: Join 증가로 인한 Star Join 속도 저하 가능성, 구조 복잡성 증가

### 3. EDW 모델링과 다차원 모델링의 비교

| 구분 | EDW 모델링 (OLTP) | 다차원 모델링 (OLAP) |
|------|-------------------|----------------------|
| 용도 | 트랜잭션 처리, 업무 프로세스 | Analytical 처리, 주제 중심의 분석 |
| 지원영역 | 업무 처리 | 의사결정 (비교/분석) |
| 추구점 | 정보 기록, 중복성 배제 | 정보 분석, 요약 정보, 중복 수용 |
| 주 이용자 | 실무자 | 관리자/경영진 → 점차 운영자로 확대 |
| 모델 | Entity/Relation 모델 | Fact/Dimension 모델 (다차원 모델) |
| 특징 | 정확성/무결성, 현재 데이터 | 조회/경향/추이, 과거·미래(Forecasting) |

### 4. 결론

다차원 모델링의 Star Schema는 분석 성능이 중요한 환경에, Snowflake Schema는 저장 효율과 데이터 일관성이 중요한 환경에 적합하다. 두 기법을 목적에 맞게 선택하거나 혼합 적용함으로써 분석 목적에 최적화된 DW를 구성할 수 있다. **끝**

### 실무 제언

- **사실 테이블 설계**: 측정 지표(Measure)의 세분화 수준(Granularity)을 먼저 확정한 뒤 차원 정의
- **Schema 선택 기준**: 쿼리 빈도가 높고 응답 속도가 중요한 경우 Star Schema, 데이터 정합성과 갱신이 잦은 경우 Snowflake Schema 권장
- **Slowly Changing Dimension(SCD)**: 차원 데이터 변경 이력 관리 정책(SCD Type 1/2/3)을 사전에 정의하여 분석 신뢰성 확보
