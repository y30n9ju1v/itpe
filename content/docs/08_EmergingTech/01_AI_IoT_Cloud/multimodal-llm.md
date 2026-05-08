---
title: "멀티모달 LLM (Multimodal Large Language Model)"
date: 2026-05-09T00:00:00+09:00
tags: ["peim", "최신기술", "AI", "LLM", "멀티모달", "GPT-4V", "Gemini"]
draft: false
exam: "135회"
---

## 개요

멀티모달 LLM은 텍스트뿐 아니라 이미지·음성·영상 등 복수의 데이터 유형을 입력으로 받아 처리하는 대규모 언어 모델이다. 단일 모달 LLM의 텍스트 한계를 극복하고 인간의 다중 감각적 인지를 모사한다.

## 핵심 내용

### 개념과 등장 배경

- 기존 LLM: 텍스트(토큰) 입출력만 처리
- 멀티모달 LLM: 텍스트 + 이미지 + 오디오 + 비디오 통합 처리
- 대표 모델: GPT-4V(Vision), Gemini, Claude 3, LLaVA

### 핵심 구성 요소

| 구성 요소 | 역할 |
|-----------|------|
| 인코더(Encoder) | 각 모달리티(이미지, 오디오)를 임베딩 벡터로 변환 |
| 크로스-어텐션(Cross-Attention) | 텍스트와 비텍스트 모달리티 간 관계 학습 |
| 프로젝션 레이어 | 모달리티별 임베딩을 공통 표현 공간으로 정렬 |
| LLM 디코더 | 통합된 표현 기반으로 텍스트 생성 |

### 주요 모달리티 조합

- **Vision-Language**: 이미지 캡셔닝, 시각적 질의응답(VQA), OCR
- **Audio-Language**: 음성 인식, 음성-텍스트 번역
- **Video-Language**: 영상 내용 요약, 장면 설명
- **Document Understanding**: PDF·표·차트 해석

### 학습 방식

1. **사전학습(Pre-training)**: 대규모 이미지-텍스트 쌍 학습 (예: CLIP)
2. **정렬(Alignment)**: 비전 인코더와 LLM 간 프로젝션 학습
3. **미세조정(Fine-tuning)**: 특정 태스크(VQA, 캡셔닝) 적응

## 실무 적용 예시

- 의료 영상 분석: X-ray 이미지와 임상 기록 텍스트를 결합하여 진단 보조
- 공공기관 문서 처리: 스캔 문서 OCR + 내용 요약 자동화

## 출제 포인트

- 단일 모달 LLM 대비 멀티모달 LLM의 차별점
- 크로스-어텐션·프로젝션 레이어 역할
- 공공기관 LLM 도입 시 고려사항 연계 (2교시 5번)

## 연관 개념

- [LLM 아키텍처와 공공기관 적용]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/llm-architecture-public-sector" >}}) — 공공부문 LLM 5가지 고려사항
- [VAE(Variational AutoEncoder)]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/vae-variational-autoencoder" >}}) — 생성 모델 기반 기술
- [프롬프트 엔지니어링]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/prompt-engineering" >}}) — LLM 활용 기술

## 참고 기출

- 135회 1교시 2번 (PEIM)
