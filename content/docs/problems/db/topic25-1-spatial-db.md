---
title: "공간 데이터베이스"
date: 2026-06-07T17:47:26+09:00
tags: ["데이터베이스", "핵토200", "공간DB", "GIS"]
topic_no1: 25
topic_no2: 1
topic_large: "공간 데이터베이스"
topic_small: "공간 데이터베이스"
exam_ref: "K51관3"
exam_type: "관리"
question_no: 3
---

## 문제

공간 데이터베이스에 대해서 다음을 설명하시오.

가. 공간 데이터베이스의 개념  
나. 공간 분석의 기능 및 공간 객체의 표현  
다. 공간 데이터의 공간 관계 표현

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 공간 데이터베이스 |
| 토픽(소) | 공간 데이터베이스 |
| 출제 | K51관3 |
| 유형 | 관리 |
| 번호 | 3 |

## 해설

### 출제 배경 및 의도

공간 DB는 GIS·LBS·스마트시티 등에서 점·선·면 객체와 위상 관계를 저장·조회·분석한다. 답안에서는 공간 객체, 공간 함수·인덱스, DE-9IM 기반 위상 관계를 연결해 설명한다.

### 1. 공간 데이터베이스, 개요

정 의  • 점·선·면·입체 등 기하학적 공간 객체(Geometry)와 위상 관계를
       - 저장·관리·분석하는 전문 데이터베이스 시스템 (OGC Simple Features 표준 기반)

```
[공간 데이터베이스 핵심 구성 요소]

  ┌─────────────────────────────────────────────────────────┐
  │                  공간 데이터베이스                        │
  │                                                         │
  │  ┌─────────────┐    ┌────────────┐    ┌─────────────┐  │
  │  │  공간 데이터  │    │ 공간 인덱스 │    │  공간 함수   │  │
  │  │  저장 모델   │    │  (R-Tree)  │    │ (ST_*)      │  │
  │  │ Point/Line  │    │            │    │Intersects   │  │
  │  │ Polygon 등  │    │  MBR 기반  │    │Contains     │  │
  │  └─────────────┘    └────────────┘    │Distance 등  │  │
  │                                       └─────────────┘  │
  │  좌표계(CRS): WGS84(GPS), GRS80(한국), UTM 등            │
  └─────────────────────────────────────────────────────────┘
```

- 공간 DB는 R-Tree 기반 인덱스와 OGC 공간 함수(ST_*)로 다차원 위치 데이터를 고속 처리함

### 2. 공간 분석 기능, 객체 표현, 공간 관계

1) 가. 공간 데이터베이스 개념 — 관계형 DB와의 차이

| 항목 | 관계형 DB | 공간 DB |
|------|----------|--------|
| 데이터 유형 | 숫자·문자·날짜 | 점·선·면·다면체 기하 객체 추가 |
| 조회 연산 | =, <, >, BETWEEN | ST_Intersects, ST_Contains, ST_Distance 등 |
| 인덱스 | B-Tree, Hash | R-Tree, Quad-Tree, Grid File |
| 거리 측정 | 불가 | 유클리드·구면 거리 계산 |
| 표준 | SQL | SQL/MM, OGC Simple Features |

- 공간 DB는 관계형 DB 위에 공간 확장(Extension)으로 구현되며, 기존 SQL과 호환성을 유지

2) 나. 공간 분석 기능 및 공간 객체 표현

```
[공간 객체 계층 구조 — OGC Simple Features]

  Geometry (기하 객체 추상 클래스)
   ├── Point          : 단일 좌표 (위치 표현)
   │    예) POINT(127.001 37.561)
   ├── LineString     : 연결된 좌표 시퀀스 (도로·강·경계선)
   │    예) LINESTRING(0 0, 1 1, 2 2)
   ├── Polygon        : 닫힌 면 (구역·영역·건물 부지)
   │    예) POLYGON((0 0, 4 0, 4 4, 0 4, 0 0))
   ├── MultiPoint / MultiLineString / MultiPolygon
   └── GeometryCollection : 혼합 기하 집합
```

| 기능 분류 | 함수 | 설명 |
|---------|------|------|
| 거리·면적 | ST_Distance, ST_Area, ST_Length | 거리·면적·둘레 계산 |
| 관계 판별 | ST_Intersects, ST_Contains, ST_Crosses | 공간 위상 관계 판별 |
| 버퍼 생성 | ST_Buffer | 객체 주변 일정 거리 영역 생성 |
| 중첩 분석 | ST_Intersection, ST_Union, ST_Difference | 공간 객체 집합 연산 |
| 근접 분석 | ST_DWithin, KNN | 반경 내·인접 객체 탐색 |

- 공간 분석 함수(ST_*)는 OGC 표준에 따라 정의되며 PostGIS·Oracle Spatial·MySQL Spatial에서 공통 지원

3) 다. 공간 관계 표현 — DE-9IM

```
[DE-9IM 9교차 행렬]

         B의 내부(I)  B의 경계(B)  B의 외부(E)
A의 내부(I)  I(A)∩I(B)  I(A)∩B(B)  I(A)∩E(B)
A의 경계(B)  B(A)∩I(B)  B(A)∩B(B)  B(A)∩E(B)
A의 외부(E)  E(A)∩I(B)  E(A)∩B(B)  E(A)∩E(B)

각 교차의 차원: F(empty), 0(점), 1(선), 2(면), T(비어있지 않음), *(무관)
```

| 관계 | DE-9IM 패턴 | 의미 | 예시 |
|------|-----------|------|------|
| Equals | TFFFTFFFT | 동일한 공간 객체 | 동일 경계선 |
| Disjoint | FF2FF1212 | 완전히 분리 | 접촉 없는 두 구역 |
| Intersects | Disjoint의 역 | 어떤 방식으로든 교차 | 겹치는 도로와 구역 |
| Touches | FT******* | 경계만 접촉 | 인접 구역 |
| Within | TF*FF**** | A가 B 내부에 포함 | 도시 내 구청 위치 |
| Contains | Within의 역 | B가 A 내부에 포함 | 도시가 구청 포함 |
| Crosses | T*T****** | 내부를 교차 | 강이 도로를 교차 |
| Overlaps | T*T***T** | 부분적으로 겹침 | 두 관할 구역 중복 |

### 3. 공간 DB vs 유사 DB 비교 및 트렌드

| 비교 항목 | 공간 DB | 시계열 DB | 관계형 DB |
|---------|--------|----------|---------|
| 주요 데이터 | 기하 객체(점·선·면) | 시간 시퀀스 데이터 | 테이블·행·열 |
| 핵심 연산 | 공간 위상 관계, 거리 | 시간 범위 집계, 이동 평균 | JOIN, GROUP BY |
| 인덱스 | R-Tree, Quad-Tree | Time-Series Index | B-Tree, Hash |
| 대표 제품 | PostGIS, Oracle Spatial | InfluxDB, TimescaleDB | MySQL, PostgreSQL |
| 활용 분야 | GIS, 자율주행, LBS | IoT, 금융 시계열 | ERP, CRM |

**3D·시공간 트렌드**: LiDAR 포인트클라우드, CityGML·3D Tiles, 위치와 시간을 결합한 이동 객체 분석이 확산되고 있다. 공간 DB는 시계열 DB와 결합해 디지털트윈·스마트시티에 활용된다.  "끝"

### 실무 제언

- **운영 요령**: 적재 단계에서 표준 CRS로 변환하고, 공간 인덱스와 MBR 1차 필터·정밀 함수 2차 필터를 함께 사용한다. Contains·Covers처럼 경계 포함 여부가 다른 연산자는 DE-9IM과 업무 요건으로 선택한다.
