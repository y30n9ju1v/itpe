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

> **위치 정보의 데이터베이스 — 공간을 저장하고 분석하다**  
> 공간 데이터베이스 개념, 공간 분석 기능, 공간 관계 표현(DE-9IM)

자율주행차의 경로 탐색, 배달 앱의 근처 식당 검색, 도시계획 시뮬레이션 — 모두 공간 데이터베이스 없이는 불가능합니다. 기존 관계형 DB는 숫자·문자 데이터를 다루지만, 공간 DB는 점·선·면으로 표현되는 지리 객체와 그들 사이의 위상 관계를 효율적으로 저장·조회·분석합니다.

### 1. 출제 배경 및 의도

위치 기반 서비스(LBS), GIS, 스마트시티, 자율주행 등 공간 데이터 활용이 폭발적으로 증가하면서 공간 데이터베이스는 정보처리기술사의 핵심 토픽이 되었습니다. OGC(Open Geospatial Consortium) 표준과 PostGIS·Oracle Spatial 등 실무 도구의 확산으로 공간 DB 역량이 현업에서 요구됩니다. 채점관은 공간 DB의 개념, 공간 객체 유형, 공간 관계(Topology) 표현 체계를 논리적으로 서술할 수 있는지 평가합니다.

### 2. 개념의 본질과 작동 메커니즘

공간 데이터베이스(Spatial Database)는 점·선·면·입체 등 기하학적 공간 객체(Geometry)와 이들의 위치·형상·위상 관계(두 도형이 서로 어떻게 접해 있는지를 나타내는 관계)를 저장·관리·분석하는 전문 데이터베이스 시스템입니다.

- **Input:** 위성 좌표(GPS), GIS 데이터(Shapefile/GeoJSON), 센서 위치 데이터
- **Mechanism:** 공간 인덱스(R-Tree/Quad-Tree) 기반 고속 탐색 → 공간 함수를 통한 관계 연산 → 결과 반환
- **Output:** 공간 분석 결과(교차 여부, 거리, 버퍼 영역 등)

### 가. 공간 데이터베이스의 개념

```text
[공간 데이터베이스의 핵심 구성 요소]

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
  │                                                         │
  │  좌표계(CRS): WGS84(GPS), GRS80(한국), UTM 등            │
  └─────────────────────────────────────────────────────────┘
```

**기존 관계형 DB와의 차이점:**

| 항목 | 관계형 DB | 공간 DB |
|------|----------|--------|
| **데이터 유형** | 숫자·문자·날짜 | 점·선·면·다면체 기하 객체 추가 |
| **조회 연산** | =, <, >, BETWEEN | ST_Intersects, ST_Contains, ST_Distance 등 |
| **인덱스** | B-Tree, Hash | R-Tree, Quad-Tree, Grid File |
| **거리 측정** | 불가 | 유클리드·구면 거리 계산 |
| **표준** | SQL | SQL/MM, OGC Simple Features |

### 나. 공간 분석의 기능 및 공간 객체의 표현

#### 공간 객체 유형 (OGC Simple Features 기준)

```text
[공간 객체 계층 구조]

  Geometry (기하 객체 추상 클래스)
   ├── Point          : 단일 좌표 (위치 표현)
   │    예) POINT(127.001 37.561)
   │
   ├── LineString     : 연결된 좌표 시퀀스 (도로·강·경계선)
   │    예) LINESTRING(0 0, 1 1, 2 2)
   │
   ├── Polygon        : 닫힌 면 (구역·영역·건물 부지)
   │    예) POLYGON((0 0, 4 0, 4 4, 0 4, 0 0))
   │
   ├── MultiPoint     : 복수 점의 집합
   ├── MultiLineString: 복수 선의 집합
   ├── MultiPolygon   : 복수 면의 집합
   └── GeometryCollection: 혼합 기하 집합
```

#### 공간 분석 주요 기능

| 기능 분류 | 함수 | 설명 |
|---------|------|------|
| **거리·면적** | ST_Distance, ST_Area, ST_Length | 거리·면적·둘레 계산 |
| **관계 판별** | ST_Intersects, ST_Contains, ST_Crosses | 공간 위상 관계 판별 |
| **버퍼 생성** | ST_Buffer | 객체 주변 일정 거리 영역 생성 |
| **중첩 분석** | ST_Intersection, ST_Union, ST_Difference | 공간 객체 집합 연산 |
| **근접 분석** | ST_DWithin, KNN(k-Nearest Neighbor) | 반경 내·인접 객체 탐색 |
| **변환** | ST_Transform, ST_AsGeoJSON, ST_AsWKT | 좌표계 변환 및 형식 변환 |

### 다. 공간 데이터의 공간 관계 표현

#### DE-9IM (Dimensionally Extended 9-Intersection Model, 두 공간 객체 간의 내부·경계·외부 교차를 9개 행렬로 표현하는 OGC 표준 모델)

OGC 표준인 DE-9IM은 두 공간 객체 A, B의 내부(Interior), 경계(Boundary), 외부(Exterior) 간의 9가지 교차 관계를 행렬로 표현합니다.

```text
[DE-9IM 9교차 행렬]

         B의 내부(I)  B의 경계(B)  B의 외부(E)
A의 내부(I)  I(A)∩I(B)  I(A)∩B(B)  I(A)∩E(B)
A의 경계(B)  B(A)∩I(B)  B(A)∩B(B)  B(A)∩E(B)
A의 외부(E)  E(A)∩I(B)  E(A)∩B(B)  E(A)∩E(B)

각 교차의 차원: F(empty), 0(점), 1(선), 2(면), T(비어있지 않음), *(무관)
```

#### 주요 공간 위상 관계

| 관계 | DE-9IM 패턴 | 의미 | 예시 |
|------|-----------|------|------|
| **Equals** | TFFFTFFFT | 동일한 공간 객체 | 동일 경계선 |
| **Disjoint** | FF2FF1212 | 완전히 분리 | 접촉 없는 두 구역 |
| **Intersects** | Disjoint의 역 | 어떤 방식으로든 교차 | 겹치는 도로와 구역 |
| **Touches** | FT******* | 경계만 접촉 | 인접 구역 |
| **Within** | TF*FF**** | A가 B 내부에 포함 | 도시 내 구청 위치 |
| **Contains** | Within의 역 | B가 A 내부에 포함 | 도시가 구청 포함 |
| **Crosses** | T*T****** | 내부를 교차 | 강이 도로를 교차 |
| **Overlaps** | T*T***T** | 부분적으로 겹침 | 두 관할 구역 중복 |

### 3. 핵심 키워드 (Must-Have)

- **공간 객체:** Point, LineString, Polygon, MultiPolygon, GeometryCollection
- **좌표계:** WGS84, GRS80, UTM, CRS(Coordinate Reference System)
- **OGC 표준:** Simple Features for SQL, WKT/WKB, GeoJSON
- **공간 관계:** DE-9IM, Intersects, Contains, Within, Touches, Overlaps, Crosses, Disjoint
- **공간 함수:** ST_Intersects, ST_Contains, ST_Distance, ST_Buffer, ST_Area
- **공간 인덱스:** R-Tree, MBR(Minimum Bounding Rectangle)

### 4. 맥락과 비교

| 비교 항목 | 공간 DB | 시계열 DB | 관계형 DB |
|---------|--------|----------|---------|
| **주요 데이터** | 기하 객체(점·선·면) | 시간 시퀀스 데이터 | 테이블·행·열 |
| **핵심 연산** | 공간 위상 관계, 거리 | 시간 범위 집계, 이동 평균 | JOIN, GROUP BY |
| **인덱스** | R-Tree, Quad-Tree | Time-Series Index | B-Tree, Hash |
| **대표 제품** | PostGIS, Oracle Spatial | InfluxDB, TimescaleDB | MySQL, PostgreSQL |
| **활용 분야** | GIS, 자율주행, LBS | IoT, 금융 시계열 | ERP, CRM |

### 5. 실무 제언

**좌표계(CRS) 불일치로 인한 공간 분석 오류 방지**

- **챌린지:** 공공 GIS 데이터(EPSG:5186, GRS80)와 GPS 데이터(EPSG:4326, WGS84)를 좌표계 변환 없이 혼합 사용하면 수십~수백 미터의 위치 오차가 발생하여 공간 분석이 무의미해집니다.
- **제언:** 공간 DB 설계 초기에 전사 표준 좌표계를 명시적으로 정의하고, 데이터 적재 시 ST_Transform()으로 통일된 좌표계로 변환하는 파이프라인을 구축해야 합니다. PostGIS의 geometry_columns 메타데이터를 활용하여 각 레이어의 SRID를 일관되게 관리하는 것이 핵심입니다.
