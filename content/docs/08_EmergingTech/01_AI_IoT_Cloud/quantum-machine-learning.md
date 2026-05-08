---
title: "양자 머신러닝 (QML, Quantum Machine Learning)"
date: 2026-05-09T07:56:10+09:00
tags: ["pecs", "최신기술", "AI", "양자컴퓨팅", "QML", "머신러닝", "양자회로"]
draft: false
exam: "137회"
---

## 개요

양자 머신러닝(QML, Quantum Machine Learning)은 양자컴퓨팅의 중첩(Superposition)·얽힘(Entanglement)·간섭(Interference) 특성을 머신러닝 알고리즘에 적용하여 특정 문제에서 고전 머신러닝 대비 지수적 속도 향상을 목표로 하는 분야다.

## 핵심 내용

### 양자컴퓨팅 기초 개념

| 개념 | 설명 |
|------|------|
| **큐비트(Qubit)** | 0과 1의 중첩 상태 표현 (고전 비트 대비 지수적 정보량) |
| **중첩(Superposition)** | 측정 전까지 0과 1을 동시에 존재 |
| **얽힘(Entanglement)** | 두 큐비트가 거리에 무관하게 상태 연동 |
| **간섭(Interference)** | 올바른 답의 확률은 증폭, 오답은 감소 |

### QML 주요 기술 및 알고리즘

| 알고리즘 | 특징 | 고전 대비 우위 |
|----------|------|--------------|
| **QSVM** (Quantum SVM) | 양자 커널로 고차원 특징 공간 매핑 | 고차원 데이터 분류 |
| **VQC** (Variational Quantum Circuit) | 매개변수 양자 회로 + 고전 최적화 | 현재 NISQ 기기 적합 |
| **QNN** (Quantum Neural Network) | 양자 게이트로 뉴런 연산 구현 | 특정 문제 지수 가속 이론적 |
| **HHL 알고리즘** | 선형 방정식 시스템 풀기 | O(log N) vs 고전 O(N) |
| **양자 PCA** | 주성분 분석 지수적 가속 | 고차원 데이터 차원 축소 |

### 기존 머신러닝 vs 양자 머신러닝 비교

| 구분 | 고전 ML | QML |
|------|--------|-----|
| **연산 기반** | 비트 (0 또는 1) | 큐비트 (중첩) |
| **하드웨어** | GPU/CPU | 양자컴퓨터 (극저온 필요) |
| **성숙도** | 높음 (상용화) | 낮음 (NISQ 시대 연구 중) |
| **속도 우위** | 일반 문제 효율적 | 특정 문제(암호, 최적화)에서 지수 우위 |
| **노이즈** | 미발생 | 디코히런스 문제 (NISQ 한계) |
| **적용 분야** | 범용 | 신약 개발, 금융 최적화, 암호해독 |

### NISQ 시대 현실

현재 양자컴퓨터(NISQ: Noisy Intermediate-Scale Quantum)는 큐비트 수와 오류율 제한으로 실용적 QML은 제한적. 하이브리드 양자-고전 알고리즘(VQC 등)이 현실적 접근법.

## 출제 포인트

- 양자컴퓨팅 3대 특성(중첩·얽힘·간섭)과 ML 연계
- NISQ 시대의 한계와 VQC 같은 하이브리드 접근
- 기존 ML 대비 QML의 이론적 우위 분야(선형대수, 최적화)

## 연관 개념

- [양자 암호(PQC·QKD)]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/quantum-cryptography-qkd-pqc" >}}) — 양자컴퓨팅의 보안 응용
- [GPU/TPU]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/gpu-tpu" >}}) — 고전 ML 하드웨어와 비교
- 데이터마이닝 — QML의 응용 도메인

## 참고 기출

- 137회 4교시 3번 (PECS)
