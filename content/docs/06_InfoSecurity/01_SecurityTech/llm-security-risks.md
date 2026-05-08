---
title: "LLM 보안 위험과 대응방안 (AI 기반 SW 개발)"
date: 2026-05-08T23:38:40+09:00
tags: ["peim", "정보보안", "보안기술", "LLM", "AI보안", "OWASP", "프롬프트인젝션"]
draft: false
exam_peim: ["136회"]
---

## 개요

LLM(Large Language Model)을 소프트웨어 개발에 도입할 때 기존 보안 취약점과는 다른 새로운 위협이 발생한다. OWASP는 2025년 LLM Top 10을 발표하여 프롬프트 인젝션, 데이터 유출, 모델 오용 등 LLM 특유의 보안 위험과 대응 기준을 제시한다.

## 핵심 내용

**주요 보안 위험 5가지**

| # | 위험 유형 | 설명 | 대응 방안 |
|---|-----------|------|-----------|
| 1 | 프롬프트 인젝션 | 악의적 입력으로 LLM 지시 우회·조작 | 입력 검증, 지시-데이터 분리, 출력 필터링 |
| 2 | 민감정보 유출 | 학습 데이터 내 개인정보·기밀이 응답에 포함 | 학습 데이터 정제, PII 마스킹, 출력 모니터링 |
| 3 | 모델 공급망 취약점 | 오염된 사전학습 모델·플러그인 사용 | 공식 소스 검증, 모델 서명, SBOM 관리 |
| 4 | 에이전트 과도한 권한 | LLM 에이전트가 필요 이상의 시스템 접근 | 최소 권한 원칙, 행동 범위 제한, 인간 승인 |
| 5 | 모델 조작 공격(Model Inversion) | 쿼리를 통한 학습 데이터 역추출 | 차분 프라이버시, 응답 제한, 쿼리 속도 제한 |

**OWASP LLM Top 10 (2025) 주요 항목**
1. LLM01: Prompt Injection
2. LLM02: Insecure Output Handling
3. LLM03: Training Data Poisoning
4. LLM04: Model Denial of Service
5. LLM05: Supply Chain Vulnerabilities
6. LLM06: Sensitive Information Disclosure
7. LLM07: Insecure Plugin Design
8. LLM08: Excessive Agency
9. LLM09: Overreliance
10. LLM10: Model Theft

**보안 대응 원칙**
- Zero Trust 원칙을 LLM 에이전트에도 적용
- 입력·출력 양방향 필터링 파이프라인 구성
- 지속적 모델 행동 모니터링 및 이상 탐지

## 실무 적용 예시

금융권 코드 리뷰 자동화에 LLM 도입 시, 코드베이스 내 API 키·비밀번호 노출 위험을 방지하기 위해 입력 전처리 단계에서 시크릿 스캐너를 적용하고 LLM 응답의 민감정보 출력을 사후 필터링한다.

## 출제 포인트

- LLM 고유 보안 위험 3가지 이상 + 각 대응방안 서술
- OWASP LLM Top 10의 배경·목적·활용 방법
- 기존 OWASP Top 10과의 차이점 (LLM 특이성)

## 연관 개념

- [프롬프트 인젝션]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/prompt-injection" >}}) — LLM01 상세 분석
- [모델 반전 공격]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/model-inversion-attack" >}}) — LLM06 관련
- [에이전틱 AI]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/agentic-ai" >}}) — LLM08 Excessive Agency와 직결

## 참고 기출

- 136회 2교시 3번 (PEIM)
- 136회 4교시 5번 (PEIM)
