---
title: "AIaaS (AI as a Service)"
date: 2026-05-09T07:56:10+09:00
tags: ["pecs", "최신기술", "AI", "클라우드", "AIaaS", "서비스형AI", "MLaaS"]
draft: false
exam_pecs: ["137회"]
---

## 개요

AIaaS(AI as a Service)는 AI 인프라·모델·플랫폼을 클라우드 서비스 형태로 제공하여, 기업이 자체 AI 인프라 없이 API 또는 관리형 서비스로 AI 기능을 활용하는 서비스 모델이다. SaaS·PaaS 개념을 AI 도메인에 적용한 형태다.

## 핵심 내용

### 개념 및 구분

| 계층 | 서비스 형태 | 예시 |
|------|-----------|------|
| **AI API** | 특정 AI 기능 API 호출 | OpenAI GPT API, Google Vision AI, AWS Rekognition |
| **ML 플랫폼(MLaaS)** | 모델 학습·배포·모니터링 환경 | AWS SageMaker, Azure ML, Google Vertex AI |
| **AI 에이전트 서비스** | 자율 AI 에이전트 호스팅 | AWS Bedrock Agents, Azure AI Agent Service |

### 주요 특징

- **No-Code/Low-Code AI**: AI 전문 인력 없이도 사전 학습 모델 활용
- **탄력적 확장**: 수요에 따라 GPU 인스턴스 자동 증감
- **종량제 과금**: 사용량 기반 비용 (쿼리 수, 토큰 수)
- **빠른 도입**: 자체 학습·인프라 구축 대비 수개월 → 수일

### 도입 시 고려 사항

| 고려 영역 | 세부 내용 |
|-----------|----------|
| **데이터 주권** | 민감 데이터의 외부 전송·저장 허용 여부 |
| **벤더 종속** | 특정 클라우드 API 의존 시 전환 비용 |
| **SLA·가용성** | AI API 장애 시 서비스 중단 위험 |
| **모델 버전 관리** | 공급자가 모델 업데이트 시 결과 변동 가능 |
| **비용 예측** | 트래픽 폭증 시 API 비용 급증 |
| **규제 준수** | 개인정보보호법·AI 규제 준수 여부 |

### LLM 시대의 AIaaS 확장

- **Foundation Model API**: GPT-4o, Claude, Gemini 등 초거대 모델 API 서비스
- **RAG-as-a-Service**: 벡터 DB + LLM 통합 제공
- **Fine-tuning Service**: 클라우드에서 도메인 특화 파인튜닝

## 출제 포인트

- AIaaS의 계층 구조(AI API → MLaaS → 에이전트 서비스)
- 도입 시 고려사항 6가지: 데이터 주권·벤더 종속·SLA·버전관리·비용·규제
- SaaS/PaaS와의 유사성 및 AI 특유의 도전(모델 불확실성)

## 연관 개념

- [클라우드 컴퓨팅 서비스 유형]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/public-sector-saas-guideline" >}}) — IaaS/PaaS/SaaS와의 관계
- [RAG]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/rag-retrieval-augmented-generation" >}}) — AIaaS 기반 RAG 구현
- [클라우드 AI vs 온디바이스 AI]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/cloud-ai-vs-ondevice-ai" >}}) — AIaaS는 클라우드 AI의 서비스 형태

## 참고 기출

- 137회 4교시 2번 (PECS)
