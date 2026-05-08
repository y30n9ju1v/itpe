---
title: "고대역 초고속 메모리 (HBM: High Bandwidth Memory)"
date: 2026-05-09T07:09:12+09:00
tags: ["peim", "pecs", "컴퓨터시스템및정보통신", "인프라아키텍처", "HBM", "메모리", "AI가속기", "GPU"]
draft: false
exam: "134회"
---

## 개요

HBM(High Bandwidth Memory)은 여러 DRAM 다이를 수직으로 적층(3D Stacking)하고 실리콘 관통전극(TSV)으로 연결하여 극고대역폭을 실현하는 차세대 메모리 기술이다. AI 학습·추론에서 GPU/NPU의 메모리 대역폭 병목을 해결하는 핵심 부품이다.

## 핵심 내용

### HBM 등장 배경

- AI/딥러닝 모델 대형화로 GPU 메모리 대역폭 수요 폭증
- GDDR 메모리의 핀 수 한계: 물리적으로 핀을 늘리기 어려움
- 에너지 효율 개선 필요: 긴 데이터 버스로 인한 전력 소비 증가

### 구조와 동작 원리

**3D 적층 구조**
- DRAM 다이 4~16개를 수직 적층
- **TSV(Through-Silicon Via)**: 실리콘 웨이퍼를 관통하는 수직 배선으로 다이 간 연결
- **인터포저(Interposer)**: HBM과 GPU/CPU를 연결하는 실리콘 기판

**와이드 버스**
- GDDR6: 32bit 버스 × 수 개 채널
- HBM3: 1024bit 버스 × 8 스택 = 8192bit 총 버스 폭
- 버스 폭이 넓을수록 동일 클럭에서 더 많은 데이터 전송

### HBM 세대별 비교

| 세대 | 출시 | 대역폭 (단일 스택) | 적용 제품 |
|------|------|-------------------|-----------|
| HBM1 | 2015 | 128GB/s | AMD Fiji (R9 Fury) |
| HBM2 | 2016 | 256GB/s | AMD Vega, NVIDIA V100 |
| HBM2e | 2019 | 460GB/s | AMD MI100, NVIDIA A100 |
| HBM3 | 2022 | 819GB/s | NVIDIA H100, AMD MI300 |
| HBM3e | 2024 | 1.2TB/s | NVIDIA H200, AMD MI300X |

### GDDR vs HBM 비교

| 구분 | GDDR6 | HBM3 |
|------|-------|------|
| **대역폭** | ~576GB/s (8채널) | ~3.35TB/s (H100, 5스택) |
| **버스 폭** | 384bit | 8192bit |
| **전력 효율** | 낮음 | 높음 (짧은 배선) |
| **용량** | 최대 24GB | 최대 96GB+ |
| **비용** | 저렴 | 매우 고가 |
| **적용** | 게이밍 GPU | AI 가속기, HPC |

### 적용 분야

- **AI 학습**: H100/H200 GPU — LLM 학습 시 수TB/s 대역폭 필요
- **HPC**: 슈퍼컴퓨터 (Frontier, Aurora)
- **CPU-GPU 통합**: AMD APU, Intel Meteor Lake (On-package HBM)
- **SK하이닉스·삼성**: HBM 주요 제조사 (AI 반도체 경쟁의 핵심 부품)

## 출제 포인트

- HBM의 3D 적층 + TSV + 인터포저 구조 설명
- GDDR 대비 HBM의 대역폭·전력효율 우위 이유
- HBM 세대별 대역폭 발전 추이
- AI 가속기에서 메모리 대역폭이 병목인 이유 (Roofline 모델)

## 연관 개념

- [GPU/TPU]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/gpu-tpu" >}}) — HBM 탑재 AI 가속기
- [CXL]({{< relref "/docs/04_ComputerSystems/06_InfraArchitecture/cxl-compute-express-link" >}}) — 메모리 풀링과 확장 기술
- [대규모 AI 데이터센터]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/large-scale-ai" >}}) — HBM이 필요한 인프라 환경

## 참고 기출

- 134회 1교시 12번 (PEIM)
- 137회 1교시 7번 (PECS)
