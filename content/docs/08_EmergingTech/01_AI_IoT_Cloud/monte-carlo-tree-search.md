---
title: "몬테카를로 트리탐색 (Monte Carlo Tree Search)"
date: 2026-05-09T08:09:13+09:00
tags: ["pecs", "최신기술", "AI", "MCTS", "트리탐색", "강화학습", "게임AI"]
draft: false
exam_pecs: ["135회"]
---

## 개요

MCTS(Monte Carlo Tree Search)는 게임 트리를 탐색할 때 무작위 시뮬레이션(플레이아웃)을 통해 각 상태의 가치를 추정하고, UCT(Upper Confidence Bound applied to Trees) 기준으로 탐색-활용 균형을 맞추는 휴리스틱 탐색 알고리즘이다. AlphaGo에서 딥러닝과 결합되어 세계 최강 바둑 AI를 달성했다.

## 핵심 내용

### 4단계 반복 구조

```
1. Selection (선택)
   - 루트에서 UCT 점수 최대인 노드를 따라 이동
   - UCT = Q(v)/N(v) + C × √(ln N(parent)/N(v))
     - Q: 누적 보상, N: 방문 횟수, C: 탐색-활용 균형 상수

2. Expansion (확장)
   - 미방문 자식 노드 중 하나를 트리에 추가

3. Simulation/Rollout (시뮬레이션)
   - 추가된 노드에서 무작위로 게임을 끝까지 진행
   - 결과(승/패)를 반환

4. Backpropagation (역전파)
   - 결과를 경로 상의 모든 노드에 반영 (Q·N 업데이트)
```

### UCT 수식의 의미

| 항 | 의미 |
|----|------|
| Q(v)/N(v) | 활용(Exploitation): 지금까지 좋은 수 |
| C × √(ln N/N(v)) | 탐색(Exploration): 덜 방문한 수 선호 |

C 값을 크게 → 탐색 우선 / 작게 → 활용 우선

### AlphaGo에서의 MCTS 개선

| 구성요소 | 역할 |
|----------|------|
| 정책 네트워크(Policy Network) | Rollout 방향 유도 (무작위 대신 AI 추천 수 사용) |
| 가치 네트워크(Value Network) | Rollout 없이 상태 가치 직접 추정 |

→ 순수 무작위 시뮬레이션의 노이즈를 줄여 탐색 효율 대폭 향상

### 적용 분야

- 게임: 바둑(AlphaGo/Zero), 체스, 포커
- 계획·최적화: 로봇 경로 계획, 자원 스케줄링
- 자율주행: 시나리오 탐색

## 출제 포인트

- 4단계(Selection→Expansion→Simulation→Backpropagation) 순서와 역할
- UCT 수식: 탐색-활용 균형
- AlphaGo가 MCTS + 딥러닝을 결합한 방식
- 순수 MCTS의 한계(깊은 트리에서 Rollout 품질 저하)

## 연관 개념

- [GNN]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/gnn-graph-neural-network" >}}) — 그래프 구조 학습과 탐색 알고리즘 연계
- [은행가 알고리즘]({{< relref "/docs/04_ComputerSystems/05_Algorithms/banker-algorithm" >}}) — 트리 기반 탐색 알고리즘 비교
- 강화학습(RL) — MCTS는 모델 기반 RL의 핵심 탐색 기법

## 참고 기출

- 135회 1교시 4번 (PECS)
