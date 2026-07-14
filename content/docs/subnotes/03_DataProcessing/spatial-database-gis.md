---
title: "공간 데이터베이스: 공간 연산자와 R-Tree 인덱스"
date: 2026-07-12T15:22:16+09:00
tags: ["데이터처리", "공간DB", "GIS", "공간연산자", "R트리", "서브노트"]
draft: false
---

# 공간 데이터베이스: 공간 연산자와 R-Tree 인덱스 서브노트

> **두음 머리에 박기 🧠**
> - **점·선·면** (OGC Simple Features 공간 객체 계층: **점**(Point), **선**(LineString), **면**(Polygon))
> - **이·인·컨·디·터** (5대 공간 연산자: **이**퀄스 Equals, **인**터섹츠 Intersects, **컨**테인즈 Contains, **디**스턴스 Distance, **터**치스 Touches)
> - **필·정** (공간 연산자 2단계 처리: **필**터 단계(MBR, R-Tree, 후보추출) ➔ **정**밀 판별 단계(DE-9IM, 실제 기하 계산))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **공간 데이터베이스(Spatial Database), 공간 연산자(Spatial Operator), R-Tree 계열 공간 인덱스** |
| **정의** | 점·선·면 등 기하학적 공간 객체(Geometry)·위상관계(Topology)를 OGC Simple Features 표준 기반 저장·조회·분석하는 전문 DB - 위상관계 판별하는 OGC 표준 공간 연산자(Equals/Intersects/Contains/Distance/Touches) + MBR 계층 그룹화로 질의 효율화하는 R-Tree/R+-Tree/R*-Tree 인덱스 포함 |
| **키워드** | OGC Simple Features, Geometry(Point/LineString/Polygon), MBR, DE-9IM, ST_Intersects/ST_Contains, R-Tree/R+-Tree/R*-Tree, PostGIS |
| **개념도** | `[공간 데이터베이스]` = `[공간 데이터 저장모델: Point/Line/Polygon]` + `[공간 인덱스: R-Tree(MBR 기반)]` + `[공간 함수: ST_*]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼ (공간 쿼리 처리)`<br>`[1단계 필터: R-Tree로 MBR만 비교, 후보 추출(False Positive 포함)]` ➔ `[2단계 정밀판별: DE-9IM으로 실제 기하 계산, 정확한 결과 반환]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼ (R-Tree 계층 구조)`<br>`[루트: MBR1, MBR2] → [내부노드: MBR3~6] → [리프: 실제 객체]` |
| **구성요소** | 1. **공간 객체 계층(OGC Simple Features)**: Geometry 추상클래스 하위 - Point(단일 좌표)·LineString(연결 좌표 시퀀스, 도로·강)·Polygon(닫힌 면, 구역·건물)<br>2. **공간 DB 3대 구성**: 저장모델(Point/Line/Polygon), 공간 인덱스(R-Tree, MBR 기반), 공간 함수(ST_Intersects, ST_Contains, ST_Distance 등)<br>3. **5대 공간 연산자(이·인·컨·디·터)**: Equals(기하학적 동일)·Intersects(어떤 방식으로든 교차)·Contains(A가 B 완전포함)·Distance(거리 계산)·Touches(경계만 접촉) — 모두 DE-9IM 패턴으로 위상관계 정의<br>4. **공간 연산자 2단계 처리(필·정)**: 필터 단계(R-Tree로 MBR만 비교 → 후보 집합 추출, 빠르지만 False Positive 포함) → 정밀 판별 단계(DE-9IM으로 실제 기하 정밀계산, 정확한 결과)<br>5. **R-Tree 계열**: MBR 계층 그룹화한 균형 트리(모든 리프 동일 깊이), 삽입 시 MBR 면적 최소화 기준 노드 선택 |
| **비교** | **관계형 DB vs 공간 DB**<br>- 관계형 DB: 숫자·문자·날짜, `=`/`<`/`BETWEEN` 조회, B-Tree/Hash 인덱스, 거리 측정 불가<br>- 공간 DB: 점·선·면 기하 객체, ST_Intersects 등 위상 연산, R-Tree/Quad-Tree 인덱스, 유클리드·구면 거리 계산 지원<br><br>**R-Tree vs R+-Tree vs R*-Tree**<br>- R-Tree(1984, Guttman): 기본 공간 인덱스, MBR 오버랩 허용, 객체 중복 저장 없음<br>- R+-Tree(1987): 오버랩 완전 제거, 경계 걸친 객체는 다중 저장(중복 발생)<br>- R*-Tree(1990): 오버랩·MBR 면적 동시 최소화(완전 제거 아님), 삽입 비용 높으나 검색 성능 우수 |
| **차별화** | **LBS·자율주행 시대 공간 DB 성능 최적화 전략**<br>1. **필터-정밀판별 2단계 구조 최적화**: R-Tree 필터로 후보 신속 압축 → DE-9IM 정밀계산 최소 후보군만 적용 → 전체스캔 대비 수백배 성능 향상<br>2. **R-Tree 계열 선택 기준화**: 정적·검색 위주 → R+-Tree(오버랩 없어 검색 빠름) / 삽입·삭제 빈번한 동적 데이터 → R*-Tree(균형잡힌 삽입-검색 성능)<br>3. **다차원 색인구조 연계**: 공간 좌표+온도·습도 등 비공간 속성 함께 색인 시 → R-Tree를 K-D Tree·Grid File 등과 병행 검토<br>4. **좌표계(CRS) 표준화**: WGS84(GPS), GRS80(한국측지계), UTM 등 좌표계 불일치로 인한 연산 오류 방지 → 적재 시점 좌표계 통일·변환 규칙 명문화 |
