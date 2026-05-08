---
title: "지능형 엣지 컴퓨팅"
date: 2026-05-09T07:56:10+09:00
tags: ["pecs", "최신기술", "AI", "엣지컴퓨팅", "IoT", "MEC", "온디바이스AI"]
draft: false
exam: "137회"
---

## 개요

지능형 엣지 컴퓨팅(Intelligent Edge Computing)은 전통적 엣지 컴퓨팅(데이터를 발생 지점 근처에서 처리)에 AI 추론 능력을 결합한 아키텍처다. 단순 데이터 전처리를 넘어 엣지 노드 자체에서 의사결정·예측·이상감지를 수행한다.

## 핵심 내용

### 엣지 컴퓨팅의 진화

```
클라우드 중심 → 엣지 컴퓨팅 → 지능형 엣지 컴퓨팅
(중앙 처리)     (근거리 처리)   (근거리 AI 추론)
```

### 구성 요소

| 계층 | 역할 | 예시 |
|------|------|------|
| **엣지 디바이스** | 센서 데이터 수집, 경량 추론 | 스마트 카메라, IoT 센서 |
| **엣지 서버/게이트웨이** | 중간 처리, 모델 실행 | MEC 서버, 산업용 PC |
| **MEC** (Mobile Edge Computing) | 기지국 근처 클라우드 | 5G MEC 서버 |
| **클라우드** | 모델 학습, 글로벌 집계 | AWS, Azure, GCP |

### 핵심 특성

- **저지연 실시간 처리**: 클라우드 왕복 없이 ms 단위 응답
- **대역폭 절감**: 원본 데이터 대신 추론 결과만 클라우드 전송
- **프라이버시 보호**: 민감 데이터 로컬 처리
- **오프라인 동작**: 네트워크 단절 시에도 기본 AI 기능 유지
- **연합학습(Federated Learning)**: 엣지에서 개인 데이터 유출 없이 모델 개선

### 활용 기술

- AI 경량화: TinyML, ONNX Runtime, TensorFlow Lite
- 하드웨어: NVIDIA Jetson, Google Coral, Intel NCS

## 실무 적용 예시

- 스마트 팩토리: 생산 라인 카메라에서 불량품 실시간 검출 (엣지 AI)
- 자율주행: 차량 내 ECU에서 객체 인식·충돌 회피 판단

## 출제 포인트

- 지능형 엣지 컴퓨팅의 3계층(디바이스-엣지-클라우드) 구조
- 클라우드 AI 대비 장점: 지연·대역폭·프라이버시
- 연합학습과의 연계

## 연관 개념

- [클라우드 AI vs 온디바이스 AI]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/cloud-ai-vs-ondevice-ai" >}}) — 온디바이스 AI의 인프라 확장
- [AI-Native Network / 6G]({{< relref "/docs/05_Networks/03_CommunicationSystems/ai-native-network-6g" >}}) — MEC와 6G 연계
- [스마트 팩토리]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/general-purpose-ai-risk-framework" >}}) — 지능형 엣지의 주요 적용 도메인

## 참고 기출

- 137회 1교시 3번 (PECS)
