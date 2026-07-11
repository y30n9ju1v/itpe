---
title: "벡터 데이터베이스와 HNSW/IVF 검색 알고리즘"
date: 2026-07-11T11:12:16+09:00
tags: ["자료처리", "데이터베이스", "NoSQL", "VectorDB", "HNSW", "IVF", "서브노트"]
draft: false
---

# 벡터 데이터베이스와 HNSW/IVF 검색 알고리즘 서브노트

> **두음 머리에 박기 🧠**
> - **코·유·내** (유사도 메트릭: **코**사인 유사도, **유**클리드 거리, **내**적)
> - **에·아·피·스** (주요 ANN 인덱스: **H**NSW(에이치), **I**VF(아이), **P**Q(피), **S**caNN(스))

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **벡터 데이터베이스 (Vector Database) 및 고차원 검색 알고리즘** |
| **정의** | 고차원 실수 벡터(임베딩)를 저장하고 의미적 유사도 기준으로 **ANN(근사 최근접 이웃) 검색**을 수행하는 LLM 및 RAG 기반 AI 특화 데이터베이스 기술 |
| **키워드** | ANN(Approximate Nearest Neighbor), HNSW, IVF, 유사도 메트릭(코·유·내), RAG, Dense/Sparse 하이브리드 검색 |
| **개념도** | `[ 쿼리 벡터 ]` (진입점)<br>&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼ 장거리 고속 도약`<br>`[ 레이어 2 (희소 그래프) ]` ── 노드A ─────────────── 노드B<br>&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼ 하향식 중간 탐색`<br>`[ 레이어 1 (중간 그래프) ]` ── 노드A ── 노드C ──── 노드B<br>&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼ 정밀 근접 탐색`<br>`[ 레이어 0 (밀집 그래프) ]` ── 노드A─노드D─노드C─노드E─노드B (최종 K-NN 도출) |
| **구성요소** | 1. **임베딩 모델**: 비정형 데이터를 고차원 실수 벡터(예: 1536차원)로 변환<br>2. **유사도 메트릭**: 코사인 유사도(방향성), 유클리드 거리(직선 거리), 내적(정규화 벡터)<br>3. **ANN 인덱스**: HNSW(계층적 그래프), IVF(클러스터 역파일), PQ(벡터 압축), ScaNN<br>4. **하이브리드 검색**: 의미론적 Dense 벡터와 키워드 매칭 Sparse 벡터(BM25)의 결합 |
| **비교** | **HNSW (Hierarchical Navigable Small World)**<br>- **구조**: 계층적 소셜 네트워크 그래프 구조<br>- **특징**: 빠른 검색 속도(O(log N)), 높은 정확도, 메모리 사용량 많음, 실시간 삽입 가능<br><br>**IVF (Inverted File Index)**<br>- **구조**: K-Means 클러스터링 기반 역파일 구조<br>- **특징**: 낮은 메모리 사용량, 사전 학습(Train) 필요, 대규모 정적 데이터셋 적합, 실시간 삽입 곤란 |
| **차별화** | **RAG 시스템 구축 시 검색 정확도(Recall)와 효율성 극대화 방안**<br>1. **의미적 청킹(Semantic Chunking)**: 단순히 글자 수 단위가 아닌 문맥 오버랩(50~100 토큰)을 둔 256~512 토큰 단위 청킹 및 Parent-Child Retrieval 구조 적용으로 정보 품질 확보.<br>2. **하이브리드 RRF(Reciprocal Rank Fusion) 재순위화**: Dense 검색과 Sparse 검색을 혼합한 후, Re-ranker 모델(예: Cohere Re-rank)을 적용하여 할루시네이션(환각 현상) 최소화.<br>3. **인덱스 파라미터 최적화**: HNSW의 `ef_construction` 및 `M` 값 튜닝을 통해 Recall@K와 QPS(Queries Per Second) 간 트레이드오프 조정. |
