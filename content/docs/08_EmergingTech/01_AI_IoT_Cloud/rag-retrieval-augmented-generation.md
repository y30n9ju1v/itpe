---
title: "RAG (검색 증강 생성, Retrieval Augmented Generation)"
date: 2026-05-09T07:09:12+09:00
tags: ["peim", "pecs", "최신기술", "AI", "RAG", "LLM", "벡터DB", "환각방지"]
draft: false
exam_peim: ["134회"]
exam_pecs: ["137회"]
---

## 개요


RAG(Retrieval Augmented Generation)는 LLM의 응답 생성 시 외부 지식 베이스에서 관련 문서를 검색(Retrieve)하여 컨텍스트로 제공함으로써 환각(Hallucination)을 줄이고 최신 정보를 반영하는 아키텍처 패턴이다. LLM의 파라메트릭 지식(학습 데이터 내 지식)과 논파라메트릭 지식(외부 문서)을 결합한다.

## 핵심 내용

### RAG의 필요성

| 문제 | LLM 단독 | RAG 적용 후 |
|------|---------|------------|
| **환각(Hallucination)** | 없는 정보 생성 | 문서 기반 응답으로 억제 |
| **지식 최신성** | 학습 컷오프 이후 정보 없음 | 실시간 문서 검색 |
| **도메인 특화** | 일반 지식 기반 | 사내 문서, 전문 DB 활용 |
| **출처 제공** | 근거 불분명 | 검색된 문서 출처 명시 가능 |

### RAG 아키텍처 (3단계)

**1. 인덱싱 (Indexing)**
```
문서 수집 → 청킹(Chunking) → 임베딩(Embedding) → 벡터 DB 저장
```
- 청킹: 문서를 적절한 크기로 분할 (고정 크기, 문단 기준, 의미 기반)
- 임베딩: 텍스트를 고차원 벡터로 변환 (text-embedding-ada-002, BGE 등)
- 벡터 DB: Pinecone, Weaviate, ChromaDB, pgvector

**2. 검색 (Retrieval)**
```
사용자 쿼리 → 쿼리 임베딩 → 유사도 검색(ANN) → 관련 청크 반환
```
- **ANN(Approximate Nearest Neighbor)**: FAISS, HNSW 알고리즘
- **하이브리드 검색**: 벡터 유사도 + BM25(키워드 검색) 결합

**3. 생성 (Generation)**
```
[검색된 문서 컨텍스트] + [사용자 질문] → LLM → 최종 응답
```
- 프롬프트에 검색 결과를 컨텍스트로 주입
- LLM은 제공된 컨텍스트를 근거로 응답 생성

### RAG 고급 기법

| 기법 | 설명 |
|------|------|
| **Re-ranking** | 초기 검색 결과를 Cross-Encoder로 재순위화 |
| **HyDE** | 가상 문서 생성 후 임베딩하여 검색 품질 향상 |
| **Multi-hop RAG** | 복잡한 질문을 하위 질문으로 분해하여 다단계 검색 |
| **GraphRAG** | 지식 그래프와 결합, 개체 관계 기반 검색 |
| **Self-RAG** | LLM이 검색 필요 여부를 스스로 판단 |

### RAG vs Fine-tuning 비교

| 구분 | RAG | Fine-tuning |
|------|-----|-------------|
| **지식 업데이트** | 실시간 (문서 교체) | 재학습 필요 (비용 큼) |
| **비용** | 중간 (벡터 DB 운영) | 매우 높음 (GPU 학습) |
| **투명성** | 출처 추적 가능 | 블랙박스 |
| **적합 상황** | 최신 정보, 사내 문서 QA | 어조·스타일, 전문 태스크 |

## 실무 적용 예시

- 공공기관 민원 챗봇: 법령·고시 문서를 인덱싱하여 최신 법률 기반 응답
- 기업 내부 지식관리: Confluence, SharePoint 문서를 RAG로 검색 가능한 AI 어시스턴트 구축

## 출제 포인트

- RAG의 필요성: LLM 환각·지식 최신성 한계 해결
- 3단계 파이프라인: 인덱싱-검색-생성 흐름
- 벡터 DB, 임베딩, ANN 검색의 역할
- RAG vs Fine-tuning 비교 (비용·투명성·업데이트 주기)

## 연관 개념

- [프롬프트 엔지니어링]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/prompt-engineering" >}}) — RAG는 컨텍스트 강화 프롬프트 기법
- [Agentic AI]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/agentic-ai" >}}) — RAG를 도구로 사용하는 AI 에이전트
- [GNN (그래프 신경망)]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/gnn-graph-neural-network" >}}) — GraphRAG의 기반
- [다차원 색인구조]({{< relref "/docs/03_DataProcessing/01_DataStructures/multidimensional-index" >}}) — 벡터 DB ANN 검색의 기반

## 참고 기출

- 134회 1교시 13번 (PEIM)
- 137회 1교시 8번 (PECS)
