---
title: "TTFT와 TPOT (LLM 추론 성능 지표)"
date: 2026-05-09T07:34:17+09:00
tags: ["pecs", "최신기술", "AI", "LLM", "TTFT", "TPOT", "성능지표", "추론"]
draft: false
exam: "138회"
---

## 개요

TTFT(Time To First Token)와 TPOT(Time Per Output Token)은 LLM 추론 서비스의 응답성을 측정하는 핵심 지표다. TTFT는 사용자가 요청을 보낸 후 첫 번째 토큰이 반환되기까지의 시간, TPOT는 이후 토큰 1개를 생성하는 데 걸리는 평균 시간이다.

## 핵심 내용

### TTFT vs TPOT 비교

| 구분 | TTFT | TPOT |
|------|------|------|
| **정의** | 요청 전송 ~ 첫 토큰 수신까지의 시간 | 두 번째 토큰부터 각 토큰 생성 평균 시간 |
| **영향 요소** | 입력 토큰 수, KV 캐시 준비, 큐 대기 | 모델 크기, 배치 처리, 하드웨어 처리량 |
| **체감 품질** | 응답 시작 느낌 (지연 체감) | 스트리밍 속도 (읽기 속도 체감) |
| **개선 방법** | 사전 KV 캐시, Prompt 압축 | 양자화, 배치 최적화, 텐서 병렬화 |
| **단위** | 밀리초(ms) | 밀리초/토큰 (ms/token) |

### LLM 추론 단계와 지표 관계

```
사용자 요청 전송
     ↓ (네트워크 지연)
요청 큐 진입 → GPU 할당
     ↓
Prefill 단계: 입력 토큰 전체 처리 (KV 캐시 생성)
     ↓ ← TTFT 측정 시점
첫 번째 토큰 반환
     ↓
Decode 단계: 토큰 1개씩 자기회귀 생성
     ↓ ← TPOT 측정 구간
응답 완료
```

### 성능 목표 기준 (일반적 기준)

| 지표 | 대화형 서비스 | 배치 처리 |
|------|-------------|----------|
| **TTFT** | < 200ms (체감 즉각 응답) | 수 초 허용 |
| **TPOT** | < 50ms/token (읽기 속도 대응) | 처리량 최대화 우선 |

### TTFT 최적화 기법

1. **Prompt Caching**: 반복 시스템 프롬프트의 KV 캐시 재사용
2. **Speculative Decoding**: 작은 Draft 모델로 후보 토큰 예측 후 검증
3. **Prefill 분리**: 큰 클러스터는 Prefill 전용 서버 분리 운영

### TPOT 최적화 기법

1. **양자화 (Quantization)**: FP16 → INT8/INT4로 모델 크기 감소
2. **연속 배칭 (Continuous Batching)**: 다중 요청 동시 처리로 GPU 활용률 향상
3. **텐서 병렬화**: 모델 가중치를 여러 GPU에 분산
4. **Flash Attention**: 메모리 최적화로 Attention 계산 가속

## 출제 포인트

- TTFT는 첫 토큰까지의 지연, TPOT는 토큰당 생성 시간 명확히 구분
- Prefill 단계(TTFT)와 Decode 단계(TPOT)와의 연결
- 각 지표의 개선 방법 2가지 이상 서술
- Model DoS 공격이 TTFT/TPOT 모두에 악영향을 미침

## 연관 개념

- [Self-Attention 메커니즘]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/self-attention-mechanism" >}}) — TTFT의 Prefill 단계에서 실행
- [Model DoS]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/model-dos-llm-attack" >}}) — TTFT/TPOT 악화를 유발하는 공격
- [LLM 보안 위협]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/llm-security-threats-owasp" >}}) — LLM 운영 전체 보안 위협

## 참고 기출

- 138회 1교시 6번 (PECS)
