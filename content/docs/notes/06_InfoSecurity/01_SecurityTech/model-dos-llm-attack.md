---
title: "Model DoS (LLM 자원 소진 공격)"
date: 2026-05-09T07:34:17+09:00
tags: ["pecs", "정보보안", "보안기술", "ModelDoS", "LLM", "AI보안", "서비스거부공격"]
draft: false
exam_pecs: ["138회"]
---

## 개요

Model DoS(Model Denial of Service)는 LLM(대규모 언어 모델)에 비정상적으로 복잡하거나 반복적인 요청을 보내 컴퓨팅 자원을 고갈시키고 서비스 응답 불능 상태를 유발하는 공격이다. OWASP LLM Top 10의 주요 위협 중 하나다.

## 핵심 내용

### Model DoS 정의 및 특징

- **정의**: LLM에 과도한 계산 부하를 유발하는 입력으로 서비스 품질 저하 또는 불능 유발
- **일반 DoS와의 차이**: 네트워크 패킷 폭주가 아닌, 모델 추론 비용(Token 계산)을 악용
- **과금 공격**: 클라우드 LLM API는 토큰 당 과금 → 금전적 피해 유발 가능

### 주요 공격 유형

| 유형 | 설명 |
|------|------|
| **Recursive Prompt** | 무한 재귀적 응답 생성 유도 (반복 확장 요청) |
| **Context Window Flooding** | 최대 컨텍스트 길이(128K 토큰 등)에 가까운 초대형 프롬프트 전송 |
| **Nested Instruction** | 복잡한 중첩 조건문으로 추론 트리 폭발 유도 |
| **자원 집약 쿼리** | 수학·코드·논리 문제 대량 연속 요청 |
| **Sponge Attack** | 최대 계산량을 유발하는 특수 입력 패턴 |

### LLM이 컴퓨터 자원에 미치는 영향

- **GPU 메모리**: 모델 가중치 + KV 캐시 → 수십~수백 GB 점유
- **CPU/메모리**: 토큰화, 후처리, 컨텍스트 관리 부하
- **네트워크**: 스트리밍 응답 시 지속 연결 유지 비용
- **추론 지연**: 입력 토큰 수 증가에 따라 선형~이차적 지연 증가

### 대응 방안

1. **입력 토큰 제한**: 요청당 최대 토큰 수 설정 (Rate Limiting)
2. **타임아웃 설정**: 추론 시간 상한 설정 (예: 30초 초과 시 중단)
3. **쿼리 복잡도 분석**: 프롬프트 복잡도 사전 평가 후 처리 여부 결정
4. **사용자 인증·쿼터**: API 키 당 일일/분당 요청 수 제한
5. **비용 경보**: 토큰 사용량 임계값 초과 시 알림 및 차단
6. **캐싱**: 동일·유사 요청에 대한 응답 캐싱으로 중복 계산 방지

## 출제 포인트

- Model DoS와 전통 DoS의 차이: 토큰 계산 비용 악용
- OWASP LLM Top 10 맥락에서 출제
- 공격 유형 3~4가지 서술 (Recursive Prompt, Context Flooding 등)
- 대응 방안 Rate Limiting + Timeout + 복잡도 분석 3가지 이상

## 연관 개념

- [LLM 보안 위협]({{< relref "/docs/notes/06_InfoSecurity/01_SecurityTech/llm-security-threats-owasp" >}}) — OWASP LLM Top 10 전체
- [프롬프트 인젝션]({{< relref "/docs/notes/06_InfoSecurity/01_SecurityTech/prompt-injection" >}}) — 또 다른 LLM 공격 유형 (미작성)
- [TTFT/TPOT]({{< relref "/docs/notes/08_EmergingTech/01_AI_IoT_Cloud/ttft-tpot-llm-performance" >}}) — LLM 성능 지표 (DoS로 악화)

## 참고 기출

- 138회 1교시 4번 (PECS)
