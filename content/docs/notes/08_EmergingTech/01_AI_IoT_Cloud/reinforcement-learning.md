---
title: "강화학습 (Reinforcement Learning)"
date: 2026-05-29T11:17:52+09:00
tags: ["peim", "최신기술", "AI", "강화학습", "RL", "보상함수", "Q러닝", "정책최적화"]
draft: false
exam_peim: ["139회"]
---

## 개요

강화학습(Reinforcement Learning, RL)은 에이전트가 환경(Environment)과 상호작용하면서 보상(Reward)을 최대화하는 정책(Policy)을 스스로 학습하는 기계학습 패러다임이다. 지도학습과 달리 정답 레이블 없이 시행착오(Trial and Error)를 통해 최적 행동을 학습한다.

## 핵심 내용

### 핵심 구성 요소

| 요소 | 설명 |
|------|------|
| **에이전트 (Agent)** | 학습하는 주체, 행동 결정자 |
| **환경 (Environment)** | 에이전트가 상호작용하는 외부 시스템 |
| **상태 (State, S)** | 현재 환경의 관측 정보 |
| **행동 (Action, A)** | 에이전트가 취할 수 있는 선택 |
| **보상 (Reward, R)** | 행동의 즉각적 결과 (양수/음수) |
| **정책 (Policy, π)** | 상태→행동 매핑 함수 (학습 목표) |
| **가치 함수 (Value Function)** | 장기 누적 보상 기댓값 |

### 주요 알고리즘

| 알고리즘 | 특징 |
|----------|------|
| **Q-Learning** | 모델-프리, 행동-가치 함수(Q-함수) 학습 |
| **DQN (Deep Q-Network)** | Q-Learning + 딥러닝, Atari 게임 정복 |
| **PPO (Proximal Policy Optimization)** | 안정적 정책 경사법, RLHF에 활용 |
| **A3C/A2C** | 비동기 병렬 학습, 연속 행동 공간 적합 |
| **SAC** | 최대 엔트로피 RL, 탐색-활용 균형 |

### VPP(가상발전소)에서의 강화학습 활용

- **상태**: 현재 전력 수요·공급, 날씨, 배터리 잔량
- **행동**: 각 분산자원(태양광·풍력·ESS)의 출력 조절
- **보상**: 전력 비용 최소화 + 수급 안정화
- **효과**: 실시간 전력 수급 최적화, 피크 저감

## 출제 포인트

- 강화학습의 5대 요소(에이전트·환경·상태·행동·보상) 정의
- 지도학습·비지도학습·강화학습의 차이점 비교
- VPP·로봇·게임·RLHF 등 실제 응용 사례 연결

## 연관 개념

- [RLHF·RAFT]({{< relref "/docs/notes/08_EmergingTech/01_AI_IoT_Cloud/rlhf-raft" >}}) — LLM 정렬에서의 강화학습 활용
- [시계열 딥러닝]({{< relref "/docs/notes/08_EmergingTech/01_AI_IoT_Cloud/time-series-deep-learning" >}}) — VPP 전력 수요 예측과 함께 활용
- [GNN]({{< relref "/docs/notes/08_EmergingTech/01_AI_IoT_Cloud/gnn-graph-neural-network" >}}) — VPP 전력망 토폴로지 모델링

## 참고 기출

- 139회 4교시 5번 (PEIM)
