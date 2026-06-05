---
title: "클라우드 AI와 온디바이스 AI 비교"
date: 2026-05-09T07:56:10+09:00
tags: ["pecs", "최신기술", "AI", "클라우드AI", "온디바이스AI", "엣지AI", "NPU"]
draft: false
exam_pecs: ["134회", "137회"]
---

## 개요

클라우드 AI는 원격 서버(GPU 클러스터)에서 AI 모델을 실행하고 결과를 네트워크로 반환하는 방식이다. 온디바이스 AI는 스마트폰·IoT 기기 등 단말 내 NPU/AP에서 직접 AI 추론을 수행하며, 네트워크 의존성 없이 저지연·프라이버시를 실현한다.

## 핵심 내용

### 개념 비교

| 구분 | 클라우드 AI | 온디바이스 AI |
|------|------------|--------------|
| **실행 위치** | 원격 데이터센터 | 단말 기기 내 NPU/AP |
| **지연(Latency)** | 100ms 이상 (네트워크 포함) | 수ms (로컬 실행) |
| **프라이버시** | 데이터 외부 전송 필요 | 단말 내 처리, 외부 미전송 |
| **모델 크기** | GPT-4급 수백B 파라미터 가능 | 1~7B 경량화 모델 |
| **네트워크 의존** | 필수 | 불필요 (오프라인 가능) |
| **전력 소비** | 서버 측 부담 | 단말 배터리 소비 증가 |
| **비용** | API 사용료 | 초기 하드웨어 비용 |
| **업데이트** | 즉시 반영 | 앱/펌웨어 업데이트 필요 |

### 온디바이스 AI 구현 기술

- **경량화 기법**: 양자화(Quantization), 프루닝(Pruning), 지식증류(Knowledge Distillation)
- **전용 하드웨어**: Apple Neural Engine, Qualcomm Hexagon NPU, MediaTek APU
- **대표 경량 모델**: Phi-3 Mini, Gemini Nano, LLaMA 3.2 (1B/3B)

### 하이브리드 AI

단순 추론은 온디바이스, 복잡한 처리는 클라우드에 위임하는 분산 아키텍처. 지능형 엣지 컴퓨팅과 연계.

## 실무 적용 예시

- 스마트폰 AI 비서: 음성 인식·번역은 온디바이스, 복잡한 추론은 클라우드
- 자율주행: 실시간 객체 인식은 차량 내 NPU, 지도 업데이트는 클라우드

## 출제 포인트

- 클라우드/온디바이스 AI의 지연·프라이버시·비용 트레이드오프
- 온디바이스 AI 경량화 기법(양자화·프루닝·증류)
- sLLM과의 연계 (온디바이스 AI = sLLM의 주요 활용처)

## 연관 개념

- [sLLM (소형 대형 언어 모델)]({{< relref "/docs/notes/08_EmergingTech/01_AI_IoT_Cloud/sllm-smaller-llm" >}}) — 온디바이스 AI의 핵심 모델
- [지능형 엣지 컴퓨팅]({{< relref "/docs/notes/08_EmergingTech/01_AI_IoT_Cloud/intelligent-edge-computing" >}}) — 온디바이스 AI의 인프라 맥락
- [GPU/TPU]({{< relref "/docs/notes/08_EmergingTech/01_AI_IoT_Cloud/gpu-tpu" >}}) — 클라우드 AI 실행 하드웨어

## 참고 기출

- 137회 1교시 2번 (PECS)
- 134회 1교시 3번 (PECS)
