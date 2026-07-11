---
title: "인공지능 및 거대언어모델, RAG"
date: 2026-07-11T11:24:18+09:00
tags: ["최신기술", "인공지능", "LLM", "RAG", "벡터DB", "할루시네이션", "GraphRAG", "서브노트"]
draft: false
---

# 인공지능 및 거대언어모델, RAG 서브노트

> **두음 머리에 박기 🧠**
> - **인·검·증·생** (RAG 구축 4단계 라이프사이클: 문서 가공 및 **인**덱싱 Indexing ➔ 쿼리 벡터 유사도 **검**색 Retrieval ➔ 프롬프트 컨텍스트 **증**강 Augmentation ➔ LLM 답변 **생**성 Generation)
> - **청·임·벡·리** (RAG 핵심 기술 요소: 텍스트 분할 **청**킹 Chunking, 고차원변환 **임**베딩 Embedding, 유사도검색 **벡**터DB, 검색문서 최적화 **리**랭킹 Re-ranking)
> - **할·프·개** (생성형 AI 도입 시 3대 위험 챌린지: 가짜 정보를 진짜처럼 답하는 환각 **할**루시네이션, 우회 명령 삽입 **프**롬프트 인젝션, 개인정보 및 내부 기밀 **개**인정보 유출)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **거대언어모델 (LLM) 및 환각 제거를 위한 검색 증강 생성 (RAG, Retrieval-Augmented Generation)** |
| **정의** | Transformer 기반의 대규모 언어 이해/생성 모델인 **LLM**과, 정보의 환각(할루시네이션)을 차단하기 위해 외부 벡터 DB 지식을 프롬프트에 동적 병합하여 답변을 생성하는 **RAG 기술** |
| **키워드** | Transformer, 할루시네이션, 임베딩, 벡터 데이터베이스, 파인튜닝 vs RAG, Graph RAG |
| **개념도** | **[ RAG (검색 증강 생성) 작동 아키텍처 및 데이터 흐름 ]**<br>1. **문서 적재 단계**: `[ 원본 문서 ] ➔ [ 청킹 Chunking ] ➔ [ 임베딩 ] ➔ [ 벡터 DB (Milvus, Pinecone) ]`<br>2. **검색 및 생성 단계**:<br>&nbsp;&nbsp;`[ 사용자 질문 ] ── 임베딩 변환 ➔ [ 벡터 유사도 검색 (Retrieval) ] ── (유사 컨텍스트 추출) ──┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (Context 주입)`<br>&nbsp;&nbsp;`[ 사용자 질문 ] ─────────────────➔ [ 프롬프트 작성 엔진 ] ───────────────────────┼──➔ [ LLM 모델 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`(질문 + 검색 데이터 결합)` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 팩트 기반 답변 생성 ]` |
| **구성요소** | 1. **청킹 (Chunking)**: 긴 텍스트 문서를 의미가 훼손되지 않는 수준(예: 500자 단위, Overlap 10%)으로 슬라이싱<br>2. **벡터 데이터베이스**: 고차원 공간에서 코사인 유사도 연산을 HNSW(계층적 탐색 그래프) 알고리즘으로 초고속 탐색<br>3. **리랭킹 (Re-ranking)**: 1차 벡터 검색 결과에 대해 크로스 엔트로피 유사도 등을 계산해 가장 부합하는 순서로 재정렬<br>4. **할루시네이션 (Hallucination)**: 모델 학습에 사용되지 않은 미지 영역의 답변 요구 시 그럴듯한 거짓말을 응답하는 정보 왜곡 |
| **비교** | **Fine-tuning (미세 조정)**<br>- **동작 원리**: 사전학습 모델 가중치(Weight)를 특정 데이터셋으로 역전파 재학습시킴<br>- **비용 / 속도**: 매우 높음 / 학습 연산으로 실시간 갱신 불가 (정적 지식)<br>- **최적 용도**: 모델의 말투(Tone & Manner) 교정, 도메인 특화 정렬<br><br>**RAG (검색 증강 생성)**<br>- **동작 원리**: 가중치는 고정하고 프롬프트 입력 영역에 신규 검색 문서를 동적 첨부함<br>- **비용 / 속도**: 저렴함 / 외부 DB 갱신으로 실시간 정보 즉각 반영 가능<br>- **최적 용도**: 매일 바뀌는 최신 정보 참조, 사실 근거(Source) 제시 필수 |
| **차별화** | **Graph RAG 고도화 및 온디바이스(On-Device) AI 배포를 위한 경량화 전략**<br>1. **Graph RAG 기술 도입을 통한 단편 검색 한계 극복**: 단순 키워드/벡터 유사도 RAG는 전체 맥락 파악(예: "이 보고서의 핵심 흐름 요약")에 약함. 이를 보완하기 위해 텍스트에서 개체(Entity)와 관계(Relation)를 추출해 지식 그래프(Knowledge Graph)로 구성하고 검색하는 **Graph RAG** 결합.<br>2. **온디바이스 배포용 경량화 기법**: 모바일이나 임베디드 단말에서 LLM을 독립 구동하기 위해 정밀도 손실을 최소화하며 부동 소수점을 정수형으로 매핑하는 **양자화 (Quantization - FP16 ➔ INT8/INT4)** 및 거대 모델(Teacher) 지식을 소형 모델(Student)에 이식하는 지식 증류(Distillation) 적용.<br>3. **할루시네이션 정량 평가 체계 (Ragas Framework)**: 답변의 신뢰성을 모니터링하기 위해 Context Relevance(검색 정합성), Faithfulness(원문 일치도), Answer Relevance(질문 부합도) 지표를 자동 평가하는 파이프라인 가동. |
