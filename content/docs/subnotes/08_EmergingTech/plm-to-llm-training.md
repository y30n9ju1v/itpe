---
title: "PLM 특성 및 LLM 훈련 과정"
date: 2026-07-12T18:15:39+09:00
tags: ["최신기술", "AI", "PLM", "LLM", "사전학습", "MLM", "CLM", "서브노트"]
draft: false
---

# PLM 특성 및 LLM 훈련 과정 서브노트

> **두음 머리에 박기 🧠**
> - **M·C** (PLM 학습 목표 2대 방식: **M**LM(BERT, 양방향 마스킹), **C**LM(GPT, 단방향 자기회귀))
> - **P·S·R** (PLM→LLM 3단계 훈련 파이프라인: **P**re-training 언어패턴 습득, **S**FT 지시이해 조정, **R**LHF 인간선호 정렬)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **PLM(Pre-trained Language Model, 사전학습 언어모델)의 특성 및 LLM(Large Language Model)으로의 훈련 과정** |
| **정의** | 레이블 없는 대규모 텍스트 말뭉치로 자기지도학습(Self-Supervised Learning)을 통해 언어의 통계적 패턴·문맥 지식을 사전 습득한 범용 언어모델인 **PLM**(예: BERT, GPT, T5)을 기반으로, 지시 이해력과 인간 선호 정렬 능력을 Pre-training→SFT→RLHF 3단계로 순차 추가 학습시켜 범용 대화·추론이 가능한 **LLM**으로 완성하는 훈련 과정 |
| **키워드** | 자기지도학습, MLM/CLM, Pre-training/SFT/RLHF, Instruction Tuning, KL 페널티 |
| **개념도** | `[대규모 비정형 텍스트] → Self-Supervised Learning → [PLM] → Fine-tuning(Downstream Task별) → 감성분석/개체명인식/번역 등`<br><br>**[ PLM → LLM 훈련 파이프라인 ]**<br>`1단계 Pre-training → 2단계 SFT(Instruction Tuning) → 3단계 RLHF/Alignment`<br>`(TB급 비정형 텍스트)   (지시-응답 쌍, 수만~수십만건)   (인간 선호 데이터, Reward Model)`<br>`     ↓                        ↓                          ↓`<br>` Base PLM 생성        Instruction-tuned Model        RLHF 정렬 LLM` |
| **구성요소** | 1. **PLM 특성**: 자기지도학습(레이블 없는 원시 텍스트에서 학습 신호 자체 생성), 학습 목표(MLM-BERT 양방향, CLM-GPT 단방향 자기회귀), 범용성/전이학습(특정 태스크 비종속, 사전학습 가중치 다운스트림 전이), 한계(지시 이해력·대화 능력 부족, 태스크마다 별도 Fine-tuning 필요)<br>2. **①Pre-training**: 언어 통계 구조·세계 지식 습득, 자기지도학습(MLM/CLM), 전체 학습 비용의 90% 이상 차지<br>3. **②SFT(Supervised Fine-Tuning)**: 지시 이해·형식 준수 조정, 지도학습(지시-모범답변 쌍)<br>4. **③RLHF(Reinforcement Learning from Human Feedback)**: 인간 선호(유용·안전) 정렬, Reward Model 학습 + PPO/DPO 강화학습, KL 페널티로 SFT 모델에서 과도하게 벗어나지 않도록 제약 |
| **비교** | **PLM (Base)**<br>- 능력: 언어 패턴/세계 지식 습득<br>- 활용: 태스크별 Fine-tuning 필요<br>- 리스크: 다운스트림 적응 비용↑<br><br>**LLM (정렬 후)**<br>- 능력: 지시 이해 + 대화 + 선호 정렬<br>- 활용: 범용 지시 수행(Zero/Few-shot)<br>- 리스크: 보상 해킹(Reward Hacking), 정렬 왜곡 가능성 |
| **차별화** | **PLM 기반 LLM 구축 실무 전략**<br>1. **오픈소스 Base 활용 전략**: 자체 Pre-training은 TB급 데이터·막대한 GPU 비용이 소요되므로(전체 비용의 90% 이상), 오픈소스 Base 모델(LLaMA, Qwen)에 도메인 특화 SFT/DPO만 집중 적용해 비용 효율화.<br>2. **데이터 품질 관리**: 웹크롤링 Pre-training 데이터의 편향·오류가 환각(Hallucination)의 근본 원인이 되므로, 필터링·중복제거·품질 스코어링을 거치고 RAG와 결합해 사실성 보완.<br>3. **보상 해킹 방지**: RLHF 단계에서 보상 모델을 속이는 장황한 응답으로 최적화되는 보상 해킹을 막기 위해 다수 평가자 기반 보상모델과 KL 페널티를 적용하며, PPO 대비 구현이 단순한 DPO(Direct Preference Optimization)도 저비용 대안으로 채택 확대. |
