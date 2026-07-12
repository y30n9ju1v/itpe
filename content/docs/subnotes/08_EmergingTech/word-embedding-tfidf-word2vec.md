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
| **정의** | 자연어의 단어를 컴퓨터가 처리 가능한 실수 벡터로 매핑해 단어의 의미·문맥적 유사도를 수치로 표현하는 **워드 임베딩** 기법군으로, 문서 내 등장빈도(TF)와 전체 문서군에서의 희소성(IDF)을 곱해 단어 중요도를 산출하는 통계 기반 **TF-IDF**와, 얕은 신경망으로 주변 문맥에서 단어를 예측하도록 학습해 은닉층 가중치를 분산 표현 벡터로 사용하는 예측 기반 **Word2Vec** |
| **키워드** | 희소 표현(One-Hot/BoW) vs 분산 표현(Dense), TF-IDF(t,d)=TF×IDF, CBOW/Skip-gram, Negative Sampling, 코사인 유사도 |
| **개념도** | `[말뭉치] → 토큰화 → [단어] → [임베딩] → [벡터]`<br>`                              ↑`<br>`             희소 표현(Sparse) ↔ 분산 표현(Dense)`<br><br>**[ TF-IDF 수식 ]**<br>`TF-IDF(t,d) = TF(t,d) × IDF(t)`<br>`TF(t,d) = 문서 d 내 단어 t 등장 횟수 / d의 전체 단어 수`<br>`IDF(t)  = log( N / df(t) )   ※ N: 전체 문서 수, df(t): t가 등장한 문서 수`<br><br>**[ Word2Vec 구조 ]**<br>`CBOW: [w(t-2)..w(t+2)] → 은닉층 → w(t)   (주변→중심 예측)`<br>`Skip-gram: w(t) → 은닉층 → [w(t-2)..w(t+2)]   (중심→주변 예측)` |
| **구성요소** | 1. **희소 표현 vs 분산 표현**: 희소 표현(One-Hot/BoW/TF-IDF, 수만~수십만 차원, 유사도 미반영) vs 분산 표현(Word2Vec/GloVe/FastText, 100~300차원, 코사인 유사도 반영)<br>2. **TF-IDF 구성**: TF(등장 빈도↑→값↑, 중요 단어 강조), IDF(여러 문서에 흔한 단어일수록 값↓, 불용어 자동 억제), 결과는 문서×어휘 크기의 희소 행렬로 문서분류·검색랭킹에 활용<br>3. **Word2Vec 학습 구조**: CBOW(빠름, 소규모 데이터 적합), Skip-gram(느림, 대규모/희소단어에 강함), 공통 최적화로 Negative Sampling(전체 Softmax 대신 오답 단어 일부만 샘플링해 학습 비용 절감), Hierarchical Softmax<br>4. **벡터 연산 의미 관계**: `vec(King)-vec(Man)+vec(Woman)≈vec(Queen)` — 분산 표현 공간에서 의미적 유추 연산 가능 |
| **비교** | **TF-IDF (희소/통계 기반)**<br>- 의미 반영: 빈도 기반, 문맥 의미 미반영<br>- 한계: 차원의 저주, OOV(미등록 단어) 대응 곤란<br>- 실무 활용: 1차 검색/필터링 baseline<br><br>**Word2Vec (분산/예측 기반)**<br>- 의미 반영: 얕은 신경망 학습, 문맥적 의미 반영<br>- 한계: 다의어 구분 불가(정적 임베딩, 단어당 벡터 1개 고정)<br>- 실무 활용: 임베딩 기반 유사도·추천 |
| **차별화** | **워드 임베딩 기법 선택 및 고도화 전략**<br>1. **하이브리드 검색 파이프라인**: TF-IDF의 통계적 정확성과 Word2Vec/FastText·트랜스포머 임베딩의 의미적 유사도를 결합해, TF-IDF로 1차 후보군을 빠르게 필터링한 뒤 밀집 임베딩으로 재랭킹(Re-ranking)하는 하이브리드 검색 구조 적용.<br>2. **도메인 특화 재학습**: 범용 Word2Vec의 다의어 구분 불가 한계를 보완하기 위해 도메인 특화 말뭉치로 임베딩을 재학습(Fine-tuning)하거나, 문맥에 따라 벡터가 달라지는 BERT 등 문맥적 임베딩(Contextual Embedding)으로 전환.<br>3. **OOV(미등록 단어) 대응**: TF-IDF/Word2Vec 모두 학습 시 없던 단어(OOV) 처리에 취약하므로, 서브워드 단위로 분해해 부분 벡터 합성이 가능한 FastText를 도입하거나 최근 LLM 임베딩(예: OpenAI/BERT 계열)으로 대체. |
