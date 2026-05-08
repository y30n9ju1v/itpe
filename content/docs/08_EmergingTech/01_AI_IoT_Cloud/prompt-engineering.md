---
title: "프롬프트 엔지니어링 (Prompt Engineering)"
date: 2026-05-09T00:00:00+09:00
tags: ["peim", "최신기술", "AI", "프롬프트엔지니어링", "LLM", "CoT", "RAG"]
draft: false
exam_peim: "135회"
---

## 개요

프롬프트 엔지니어링은 LLM이 원하는 출력을 생성하도록 입력(프롬프트)을 설계·최적화하는 기술이다. 모델 재학습 없이 성능을 향상시키는 비용 효율적 접근법으로, AI 서비스 개발의 핵심 역량이다.

## 핵심 내용

### 핵심 기술 요소

| 기법 | 설명 | 효과 |
|------|------|------|
| **Zero-shot Prompting** | 예시 없이 직접 지시 | 빠른 적용, 낮은 복잡 과업 |
| **Few-shot Prompting** | 2~5개 예시 제공 | 패턴 학습, 성능 향상 |
| **Chain-of-Thought (CoT)** | "단계별로 생각하라" 지시 | 추론·수학 문제 정확도 향상 |
| **Tree-of-Thoughts (ToT)** | 여러 추론 경로 탐색·평가 | 복잡한 계획 문제 |
| **Role Prompting** | 역할 부여 ("당신은 전문가입니다") | 도메인 특화 답변 품질 향상 |
| **RAG 연계** | 외부 문서 검색 결과를 프롬프트에 삽입 | 환각 감소, 최신 정보 활용 |
| **구조화 출력** | JSON/XML 형식 지정 | API 연동, 파싱 자동화 |

### CoT (Chain-of-Thought) 상세

```
일반 프롬프트: "15 × 24는?"
CoT 프롬프트: "15 × 24를 단계별로 계산하세요.
              먼저 15 × 20 = 300
              그다음 15 × 4 = 60
              합계: 360"
```

CoT 활성화 방법:
- 명시적: "단계별로 생각하세요 (Let's think step by step)"
- 자동(Auto-CoT): 예시 기반 자동 추론 체인 생성

### 프롬프트 설계 원칙

1. **명확성(Clarity)**: 모호한 지시 제거, 구체적 맥락 제공
2. **제약 조건(Constraints)**: 출력 형식·길이·언어 명시
3. **역할 부여(Persona)**: 전문가 역할로 품질 향상
4. **예시 제공(Examples)**: Few-shot으로 패턴 유도
5. **반복 개선(Iteration)**: 출력 분석 → 프롬프트 수정 → 재시도

### 활용 방안

| 분야 | 적용 예시 |
|------|---------|
| 공공 민원 | RAG 기반 FAQ 자동 응답 |
| SW 개발 | 코드 생성·리뷰·테스트 케이스 생성 |
| 문서 처리 | 요약·분류·번역 자동화 |
| 데이터 분석 | 자연어 → SQL 변환 (Text2SQL) |

## 출제 포인트

- Few-shot vs Zero-shot vs CoT 비교
- CoT의 핵심: "단계별 추론"으로 복잡 문제 성능 향상
- RAG와 프롬프트 엔지니어링의 결합: 환각 감소

## 연관 개념

- [공공기관 LLM 아키텍처]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/llm-architecture-public-sector" >}}) — 프롬프트 엔지니어링 적용 맥락
- [프롬프트 인젝션]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/prompt-injection" >}}) — 프롬프트 엔지니어링의 보안 위협

## 참고 기출

- 135회 3교시 2번 (PEIM)
