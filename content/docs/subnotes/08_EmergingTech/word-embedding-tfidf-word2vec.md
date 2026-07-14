---
title: "워드 임베딩 (TF-IDF, Word2Vec)"
date: 2026-07-12T18:15:39+09:00
tags: ["최신기술", "AI", "자연어처리", "워드임베딩", "TF-IDF", "Word2Vec", "서브노트"]
draft: false
---

# 워드 임베딩 (TF-IDF, Word2Vec) 서브노트

> **두음 머리에 박기 🧠**
> - **T·I** (TF-IDF 2대 구성요소: **T**erm Frequency 문서 내 등장빈도, **I**nverse Document Frequency 문서군 내 희소성)
> - **C·S** (Word2Vec 2대 학습 구조: **C**BOW 주변→중심 예측, **S**kip-gram 중심→주변 예측)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **워드 임베딩(Word Embedding): TF-IDF(Term Frequency-Inverse Document Frequency)와 Word2Vec** |
| **정의** | 단어 → 실수벡터 매핑, 의미·문맥유사도 수치화하는 **워드 임베딩** 기법군 — TF(등장빈도)×IDF(문서군 희소성)로 중요도 산출하는 통계기반 **TF-IDF** / 얕은신경망으로 주변문맥 예측학습, 은닉층가중치를 분산표현벡터로 쓰는 예측기반 **Word2Vec** |
| **키워드** | 희소 표현(One-Hot/BoW) vs 분산 표현(Dense), TF-IDF(t,d)=TF×IDF, CBOW/Skip-gram, Negative Sampling, 코사인 유사도 |
| **개념도** | `[말뭉치] → 토큰화 → [단어] → [임베딩] → [벡터]`<br>`                              ↑`<br>`             희소 표현(Sparse) ↔ 분산 표현(Dense)`<br><br>**[ TF-IDF 수식 ]**<br>`TF-IDF(t,d) = TF(t,d) × IDF(t)`<br>`TF(t,d) = 문서 d 내 단어 t 등장 횟수 / d의 전체 단어 수`<br>`IDF(t)  = log( N / df(t) )   ※ N: 전체 문서 수, df(t): t가 등장한 문서 수`<br><br>**[ Word2Vec 구조 ]**<br>`CBOW: [w(t-2)..w(t+2)] → 은닉층 → w(t)   (주변→중심 예측)`<br>`Skip-gram: w(t) → 은닉층 → [w(t-2)..w(t+2)]   (중심→주변 예측)` |
| **구성요소** | 1. **희소 표현 vs 분산 표현**: 희소 표현(One-Hot/BoW/TF-IDF, 수만~수십만 차원, 유사도 미반영) vs 분산 표현(Word2Vec/GloVe/FastText, 100~300차원, 코사인 유사도 반영)<br>2. **TF-IDF 구성**: TF(등장 빈도↑→값↑, 중요 단어 강조), IDF(여러 문서에 흔한 단어일수록 값↓, 불용어 자동 억제), 결과는 문서×어휘 크기의 희소 행렬로 문서분류·검색랭킹에 활용<br>3. **Word2Vec 학습 구조**: CBOW(빠름, 소규모 데이터 적합), Skip-gram(느림, 대규모/희소단어에 강함), 공통 최적화로 Negative Sampling(전체 Softmax 대신 오답 단어 일부만 샘플링해 학습 비용 절감), Hierarchical Softmax<br>4. **벡터 연산 의미 관계**: `vec(King)-vec(Man)+vec(Woman)≈vec(Queen)` — 분산 표현 공간에서 의미적 유추 연산 가능 |
| **비교** | **TF-IDF (희소/통계 기반)**<br>- 의미 반영: 빈도 기반, 문맥 의미 미반영<br>- 한계: 차원의 저주, OOV(미등록 단어) 대응 곤란<br>- 실무 활용: 1차 검색/필터링 baseline<br><br>**Word2Vec (분산/예측 기반)**<br>- 의미 반영: 얕은 신경망 학습, 문맥적 의미 반영<br>- 한계: 다의어 구분 불가(정적 임베딩, 단어당 벡터 1개 고정)<br>- 실무 활용: 임베딩 기반 유사도·추천 |
| **차별화** | **워드 임베딩 기법 선택 및 고도화 전략**<br>1. **하이브리드 검색 파이프라인**: TF-IDF 통계적정확성 + Word2Vec/FastText·트랜스포머 의미적유사도 결합 → TF-IDF로 1차후보군 필터링 후 밀집임베딩 재랭킹(Re-ranking)<br>2. **도메인특화 재학습**: 범용Word2Vec 다의어구분 불가 한계 보완 → 도메인 말뭉치로 Fine-tuning 또는 BERT 등 문맥적임베딩(Contextual)으로 전환<br>3. **OOV(미등록단어) 대응**: TF-IDF/Word2Vec 모두 OOV 취약 → 서브워드분해 FastText 도입 또는 LLM임베딩(OpenAI/BERT계열)으로 대체 |
