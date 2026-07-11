---
title: "Transformer, Self-Attention, MoE"
date: 2026-07-11T11:38:09+09:00
tags: ["최신기술", "AI", "Transformer", "Self-Attention", "MoE", "LLM", "서브노트"]
draft: false
---

# Transformer, Self-Attention, MoE 서브노트

> **두음 머리에 박기 🧠**
> - **Q·K·V** (Self-Attention 3대 학습 가중치 행렬: Query 찾고자 하는 정보, Key 정보의 인덱스, Value 실제 전달 내용)
> - **임·인·디·출** (Transformer 원논문 처리 파이프라인 순서: **임**베딩+위치인코딩 ➔ **인**코더 Self-Attention+FFN ➔ **디**코더 Masked/Cross-Attention+FFN ➔ **출**력 시퀀스)
> - **게·전·가** (MoE 3단계 추론 흐름: **게**이팅 네트워크(Router)가 상위 K개 선택 ➔ 선택된 **전**문가(Expert) 병렬 처리 ➔ **가**중 합산 출력)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **Transformer(Self-Attention) 및 MoE (Mixture of Experts)** |
| **정의** | 시퀀스 내 모든 토큰 쌍의 관계를 병렬로 계산하는 **Self-Attention 기반 Transformer** 아키텍처와, 입력별 일부 전문가 네트워크만 선택 활성화해 파라미터 효율을 극대화하는 **MoE** |
| **키워드** | Q·K·V, Attention(QKᵀ/√dk), Multi-Head Attention, 게이팅 네트워크(Router), Sparse Activation, Mixtral 8x7B |
| **개념도** | `[입력 X] → Q=XWq, K=XWk, V=XWv → Attention Score=QKᵀ/√dk → Softmax → Output=Weight·V`<br>`(Multi-Head: head1..headh 병렬 계산 후 Concat·Wo)`<br><br>**[ MoE 게이팅 구조 ]**<br>`[입력 토큰] → [게이팅 네트워크(Router)] → 상위 K개 Expert 선택 → [N1, N2...Nk 병렬 처리] → [가중 합산 출력]` |
| **구성요소** | 1. **Q/K/V 행렬**: 입력 벡터에 학습 가능 가중치를 곱해 생성, 검색 쿼리·인덱스·결과에 비유<br>2. **Multi-Head Attention**: h개 헤드를 병렬 실행해 구문적·의미적 등 다양한 관계 패턴 동시 학습(GPT-3 96헤드)<br>3. **위치 인코딩(Positional Encoding)**: RNN 없이 순서 정보를 임베딩에 주입<br>4. **MoE 게이팅 네트워크**: 입력마다 전체 Expert 중 상위 K개만 선택해 연산량 절감(Sparse Activation)<br>5. **대표 모델**: Mixtral 8x7B(8개 중 2개 선택), Switch Transformer(Google) |
| **비교** | **RNN**<br>- 처리 방식: 순차적, 장거리 의존성 약함(기울기 소실)<br>- 계산 복잡도: O(n), 메모리 낮음<br><br>**Self-Attention (Transformer)**<br>- 처리 방식: 병렬 처리, 장거리 의존성 강함(O(1) 경로 거리)<br>- 계산 복잡도: O(n²) — 시퀀스 길이 n에 대해 n² attention map 메모리 필요 |
| **차별화** | **Attention 연산 병목(O(n²)) 및 MoE 라우팅 불균형 극복 전략**<br>1. **긴 컨텍스트 처리를 위한 효율화 Attention**: 시퀀스 길이 증가 시 폭증하는 O(n²) 연산·메모리를 완화하기 위해 Sparse Attention, Linear Attention, Flash Attention(메모리 I/O 최적화) 적용.<br>2. **MoE FFN 레이어 치환 설계**: 현대 LLM은 Transformer 블록의 FFN을 MoE로 교체해 파라미터는 늘리되(확장성) 실제 활성 연산량은 유지하는 구조로 추론 비용 절감.<br>3. **√dk 스케일링을 통한 기울기 소실 방지**: Key 차원수(dk)가 클수록 내적 값이 커져 Softmax 기울기가 소실되므로 QKᵀ를 √dk로 나누는 스케일링을 필수 적용. |
