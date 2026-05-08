---
title: "OWASP LLM Top 10 (2025)"
date: 2026-05-08T23:38:40+09:00
tags: ["peim", "정보보안", "보안시스템", "OWASP", "LLM", "AI보안", "프롬프트인젝션"]
draft: false
exam: "136회"
---

## 개요

OWASP LLM Top 10은 LLM(Large Language Model) 애플리케이션의 안전한 개발·운영을 위해 OWASP가 제시한 10대 보안 위협 목록이다. 2025년 버전은 프롬프트 인젝션·공급망 취약점·에이전트 과도한 권한 등 LLM 고유의 공격 벡터를 체계적으로 정리한다.

## 핵심 내용

**제시 배경**
- LLM 기반 애플리케이션의 급속한 확산
- 기존 OWASP Top 10으로 커버되지 않는 LLM 특유 위협 등장
- 표준화된 보안 가이드라인 수요 증가

**OWASP LLM Top 10 (2025) 목록**

| 순위 | 위협 | 핵심 내용 |
|------|------|-----------|
| LLM01 | 프롬프트 인젝션 | 악의적 입력으로 LLM 지시 우회 |
| LLM02 | 안전하지 않은 출력 처리 | LLM 출력을 검증 없이 시스템에 전달 |
| LLM03 | 학습 데이터 오염 | 악의적 데이터로 모델 행동 조작 |
| LLM04 | 모델 서비스 거부 | 과부하 입력으로 가용성 저하 |
| LLM05 | 공급망 취약점 | 오염된 모델·플러그인·데이터 사용 |
| LLM06 | 민감정보 유출 | 학습 데이터 내 개인정보 응답 노출 |
| LLM07 | 불안전한 플러그인 설계 | 검증 없는 외부 플러그인·도구 연동 |
| LLM08 | 과도한 에이전트 권한 | 필요 이상의 권한·기능 부여 |
| LLM09 | 과도한 의존 | LLM 출력 검증 없이 의사결정에 활용 |
| LLM10 | 모델 도용 | 역공학을 통한 독점 모델 추출 |

**기업의 보안 대응 방안**
1. 입력 검증 파이프라인 (LLM01·LLM02)
2. 최소 권한 원칙 적용 (LLM07·LLM08)
3. 공급망 검증·SBOM 관리 (LLM05)
4. 출력 모니터링 및 민감정보 필터링 (LLM06)
5. 인간 감독(Human-in-the-Loop) 프로세스 (LLM09)
6. 보안 설계(Security by Design) 내재화

## 출제 포인트

- OWASP LLM Top 10 제시 배경
- 주요 위협 항목 (LLM01·LLM06·LLM08 집중)
- 기업 LLM 애플리케이션 설계·운영 시 보안 대응방안

## 연관 개념

- [LLM 보안 위험과 대응방안]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/llm-security-risks" >}}) — LLM 보안 위험 심화 분석
- [프롬프트 인젝션]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/prompt-injection" >}}) — LLM01 상세
- [공급망 보안]({{< relref "/docs/06_InfoSecurity/02_SecuritySystems/supply-chain-security" >}}) — LLM05 공급망 취약점과 연계

## 참고 기출

- 136회 4교시 5번 (PEIM)
