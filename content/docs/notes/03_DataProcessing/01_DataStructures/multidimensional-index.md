---
title: "다차원 색인구조 (Multidimensional Index Structure)"
date: 2026-05-09T07:09:12+09:00
tags: ["peim", "자료처리", "자료구조론", "다차원색인", "R-Tree", "KD-Tree", "공간데이터", "벡터DB"]
draft: false
exam_peim: ["134회"]
---

## 개요

다차원 색인구조(Multidimensional Index Structure)는 2차원 이상의 공간 데이터나 고차원 벡터 데이터를 효율적으로 탐색하기 위한 색인 기법이다. GIS·지도서비스·AI 벡터 데이터베이스·이미지 검색 등에 활용된다.

## 핵심 내용

### 다차원 색인의 필요성

- 1차원 B-Tree는 단일 키 기반 → 위치(위도+경도) 같은 다차원 데이터 검색 비효율
- "서울 중심부 반경 5km 내 병원"과 같은 **범위 질의(Range Query)**, **최근접 이웃(KNN)** 검색 지원 필요

### 주요 유형

**1. K-D Tree (K-Dimensional Tree)**

```
       (7,2)
      /     \
   (5,4)   (9,6)
   /   \
(2,3) (4,7)
```

| 항목 | 내용 |
|------|------|
| **원리** | 각 레벨에서 교대로 다른 축으로 공간 분할 |
| **탐색** | KNN, 범위 탐색: O(log n) 평균 |
| **장점** | 구현 단순, 정적 데이터에 효율 |
| **단점** | 삽입/삭제 시 불균형 발생, 고차원 저하 (차원의 저주) |
| **활용** | 저차원 공간 탐색, 컴퓨터 그래픽스 |

**2. R-Tree (Rectangle Tree)**

```
[MBR: 최소 경계 직사각형 기반 계층 구조]
  Root
  ├─ MBR1 (강남구 병원들)
  │   ├─ 병원A (37.50, 127.02)
  │   └─ 병원B (37.51, 127.03)
  └─ MBR2 (서초구 병원들)
```

| 항목 | 내용 |
|------|------|
| **원리** | 공간 객체를 MBR(Minimum Bounding Rectangle)로 묶어 B-Tree처럼 계층화 |
| **장점** | 삽입/삭제 동적 지원, 실제 공간 데이터에 효율 |
| **단점** | MBR 오버랩 시 성능 저하 |
| **활용** | PostGIS, Oracle Spatial, 지도 서비스 |

**3. 쿼드트리 (Quadtree)**

| 항목 | 내용 |
|------|------|
| **원리** | 2D 공간을 4분면으로 재귀 분할 |
| **활용** | 게임 맵 충돌 감지, 이미지 압축 |

**4. HNSW (Hierarchical Navigable Small World)**

| 항목 | 내용 |
|------|------|
| **원리** | 그래프 기반 ANN(근사 최근접 이웃), 다층 그래프 구조 |
| **탐색** | O(log n) 근사 탐색 |
| **활용** | 고차원 벡터 DB (FAISS, Pinecone, Weaviate) — RAG의 핵심 |

### 비교표

| 구분 | K-D Tree | R-Tree | HNSW |
|------|---------|--------|------|
| **데이터 유형** | 점 데이터, 저차원 | 공간 객체 (폴리곤, 선) | 고차원 벡터 |
| **차원 수** | 저차원 효율 | 중차원 | 수백~수천차원 |
| **동적 갱신** | 어려움 | 가능 | 가능 |
| **정확도** | 정확 | 정확 | 근사 |
| **활용** | 컴퓨터 비전, CAD | GIS, 지도 | AI 벡터 DB |

## 실무 적용 예시

- **네이버 지도**: R-Tree로 반경 내 음식점·병원 검색
- **AI RAG 시스템**: HNSW 기반 벡터 DB에서 질문과 유사한 문서 청크 검색
- **의료 영상 검색**: KD-Tree로 특징 벡터 기반 유사 이미지 탐색

## 출제 포인트

- 1차원 B-Tree로 다차원 검색이 어려운 이유
- K-D Tree와 R-Tree의 원리·특징·적합 상황 비교
- HNSW가 AI 벡터 DB에 사용되는 이유 (고차원 ANN)
- 범위 질의(Range Query)와 KNN 질의 개념

## 연관 개념

- [이진 탐색 트리]({{< relref "/docs/notes/03_DataProcessing/01_DataStructures/binary-search-tree" >}}) — 1차원 색인의 기초
- [RAG]({{< relref "/docs/notes/08_EmergingTech/01_AI_IoT_Cloud/rag-retrieval-augmented-generation" >}}) — HNSW 기반 벡터 검색 활용
- [데이터마이닝]({{< relref "/docs/notes/03_DataProcessing/04_DataMining" >}}) — 공간 클러스터링과 연계

## 참고 기출

- 134회 3교시 5번 (PEIM)
