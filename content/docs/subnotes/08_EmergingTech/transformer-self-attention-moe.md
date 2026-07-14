---
title: "Transformer, Self-Attention, MoE"
date: 2026-07-11T11:38:09+09:00
tags: ["최신기술", "AI", "Transformer", "Self-Attention", "MoE", "차등트랜스포머", "LLM", "서브노트"]
draft: false
---

# Transformer, Self-Attention, MoE 서브노트

> **두음 머리에 박기 🧠**
> - **Q·K·V** (Self-Attention 3대 학습 가중치 행렬: Query 찾고자 하는 정보, Key 정보의 인덱스, Value 실제 전달 내용)
> - **임·인·디·출** (Transformer 원논문 처리 파이프라인 순서: **임**베딩+위치인코딩 ➔ **인**코더 Self-Attention+FFN ➔ **디**코더 Masked/Cross-Attention+FFN ➔ **출**력 시퀀스)
> - **게·전·가** (MoE 3단계 추론 흐름: **게**이팅 네트워크(Router)가 상위 K개 선택 ➔ 선택된 **전**문가(Expert) 병렬 처리 ➔ **가**중 합산 출력)
> - **A1·λ·A2** (차등 트랜스포머 노이즈 캔슬링 연산: 독립 어텐션맵 **A1**, 학습가능 차감비율 **λ**, 공통 노이즈 상쇄용 두번째 맵 **A2** → DiffAttn=(A1-λA2)·V)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **Transformer(Self-Attention), MoE (Mixture of Experts) 및 차등 트랜스포머(Differential Transformer)** |
| **정의** | 시퀀스 내 모든 토큰 쌍의 관계를 병렬로 계산하는 **Self-Attention 기반 Transformer** 아키텍처와, 입력별 일부 전문가 네트워크만 선택 활성화해 파라미터 효율을 극대화하는 **MoE**, 두 어텐션 맵의 차(差)로 공통 노이즈를 상쇄하는 **차등 트랜스포머** |
| **키워드** | Q·K·V, Attention(QKᵀ/√dk), Multi-Head Attention, 게이팅 네트워크(Router), Sparse Activation, Mixtral 8x7B, 차등 트랜스포머(A1-λA2) |
| **개념도** | `[입력 X] → Q=XWq, K=XWk, V=XWv → Attention Score=QKᵀ/√dk → Softmax → Output=Weight·V`<br>`(Multi-Head: head1..headh 병렬 계산 후 Concat·Wo)`<br><br>**[ MoE 게이팅 구조 ]**<br>`[입력 토큰] → [게이팅 네트워크(Router)] → 상위 K개 Expert 선택 → [N1, N2...Nk 병렬 처리] → [가중 합산 출력]`<br><br>**[ 차등 트랜스포머 구조 ]**<br>`[Q,K를 2배 폭 분할] → [Q1,K1],[Q2,K2] → A1=softmax(Q1K1ᵀ/√d), A2=softmax(Q2K2ᵀ/√d) → DiffAttn=(A1-λA2)·V` |
| **구성요소** | 1. **Q/K/V 행렬**: 입력 벡터에 학습 가능 가중치를 곱해 생성, 검색 쿼리·인덱스·결과에 비유<br>2. **Multi-Head Attention**: h개 헤드를 병렬 실행해 구문적·의미적 등 다양한 관계 패턴 동시 학습(GPT-3 96헤드)<br>3. **위치 인코딩(Positional Encoding)**: RNN 없이 순서 정보를 임베딩에 주입<br>4. **MoE 게이팅 네트워크**: 입력마다 전체 Expert 중 상위 K개만 선택해 연산량 절감(Sparse Activation)<br>5. **대표 모델**: Mixtral 8x7B(8개 중 2개 선택), Switch Transformer(Google)<br>6. **차등 트랜스포머(Differential Transformer)**: 한 헤드 → Q1K1/Q2K2 독립 Softmax Attention Map(A1,A2) 계산 → 학습가능 스칼라 λ로 `DiffAttn=(A1-λ·A2)·V` 차감연산 — 노이즈캔슬링 헤드폰처럼 공통노이즈(무관토큰 미세가중치) 상쇄, 유의미신호만 증폭 / GroupNorm으로 헤드별 스케일 보정 / Needle-in-Haystack 긴컨텍스트 검색정확도·환각감소 효과 |
| **비교** | **RNN**<br>- 처리 방식: 순차적, 장거리 의존성 약함(기울기 소실)<br>- 계산 복잡도: O(n), 메모리 낮음<br><br>**Self-Attention (Transformer)**<br>- 처리 방식: 병렬 처리, 장거리 의존성 강함(O(1) 경로 거리)<br>- 계산 복잡도: O(n²) — 시퀀스 길이 n에 대해 n² attention map 메모리 필요 |
| **차별화** | **Attention 연산 병목(O(n²)) 및 MoE 라우팅 불균형 극복 전략**<br>1. **긴 컨텍스트용 효율화 Attention**: 시퀀스길이↑ → O(n²) 연산·메모리 폭증 완화 위해 Sparse/Linear/Flash Attention(메모리 I/O 최적화) 적용<br>2. **MoE FFN 레이어 치환 설계**: Transformer FFN → MoE 교체, 파라미터 확장하되 활성연산량 유지 → 추론비용 절감<br>3. **√dk 스케일링으로 기울기소실 방지**: dk↑ → 내적값↑ → Softmax 기울기소실 → QKᵀ를 √dk로 나눔(필수)<br>4. **차등 트랜스포머 도입 시 유의사항**: λ초기화·레이어별 민감도는 논문 스케줄(λ_init=0.8-0.6e^(-0.3·layer)) A/B검증, 기존 BERT/GPT 가중치 호환불가 → 법률·장문요약 등 긴컨텍스트·사실성 요구 도메인 선별적용, "노이즈제거=환각완전해결" 과대해석 금지 → RAG·Fact-Checking 병행 |
