---
title: "GNN (Graph Neural Network, 그래프 신경망)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "최신기술", "AI", "GNN", "그래프신경망", "딥러닝", "지식그래프"]
draft: false
---

## 개요

GNN(Graph Neural Network)은 그래프 구조 데이터(노드·엣지로 표현)를 직접 학습하는 딥러닝 모델이다. 소셜 네트워크, 분자 구조, 지식 그래프, 추천 시스템 등 관계 중심 데이터에서 CNN·RNN이 처리하지 못하는 비유클리드 구조를 다룬다.

## 핵심 내용

### 그래프 데이터 구조

- **노드(Node/Vertex)**: 개체 (사람, 원자, 문서)
- **엣지(Edge)**: 관계 (친구 관계, 화학 결합, 인용)
- **특성 행렬(Feature Matrix)**: 각 노드의 속성 벡터

### GNN 핵심 동작: 메시지 패싱 (Message Passing)

```
각 노드가 이웃 노드의 정보를 수집(Aggregate)하고
자신의 표현(Embedding)을 갱신(Update)하는 과정을 반복
```

1. **집계(Aggregation)**: 이웃 노드 임베딩 수집 (평균, 합산, 최대)
2. **결합(Combination)**: 자신 + 이웃 정보 결합
3. **갱신(Update)**: 신경망으로 새 임베딩 생성
4. L번 반복 → L-hop 이웃까지 정보 전파

### 주요 GNN 아키텍처

| 모델 | 특징 | 적합 태스크 |
|------|------|------------|
| **GCN** (Graph Convolutional Network) | 스펙트럼 기반 합성곱 | 노드 분류 |
| **GraphSAGE** | 샘플링 기반 귀납적 학습 | 대규모 그래프 |
| **GAT** (Graph Attention Network) | 어텐션으로 이웃 가중치 | 이종 그래프 |
| **GIN** (Graph Isomorphism Network) | 그래프 동형 구별 능력 최대 | 그래프 분류 |

### 주요 활용 분야

- **소셜 네트워크**: 커뮤니티 탐지, 이상 계정 탐지
- **추천 시스템**: 사용자-아이템 상호작용 그래프 (Pinterest, Alibaba)
- **신약 개발**: 분자 구조 예측, 단백질 상호작용
- **지식 그래프**: 관계 추론, 질의응답 (KG-QA)
- **사이버 보안**: 공격 경로 그래프 분석, 이상 탐지

## 출제 포인트

- GNN이 일반 딥러닝과 다른 점: 그래프(비유클리드) 구조 처리
- 메시지 패싱 3단계(집계→결합→갱신) 서술
- GCN·GAT·GraphSAGE 3가지 비교
- 활용 사례를 3가지 이상 구체적으로 제시

## 연관 개념

- [Transformer/MoE]({{< relref "/docs/peim/08_EmergingTech/01_AI_IoT_Cloud/transformer-moe" >}}) — 어텐션 기반 딥러닝 아키텍처
- [초거대 AI]({{< relref "/docs/peim/08_EmergingTech/01_AI_IoT_Cloud/large-scale-ai" >}}) — GNN을 포함한 현대 AI 아키텍처
- 데이터마이닝 — 그래프 기반 패턴 분석

## 참고 기출

- 137회 1교시 5번
