---
title: "소프트웨어 보안 품질"
date: 2026-05-08T23:38:40+09:00
tags: ["peim", "소프트웨어공학", "SW품질", "보안품질", "DevSecOps", "SAST", "DAST", "보안자동화"]
draft: false
exam_peim: ["136회"]
---

## 개요

소프트웨어 보안 품질은 시스템이 의도하지 않은 접근·변조·파괴로부터 데이터와 기능을 보호하는 능력이다. ISO/IEC 25010의 품질 특성 중 보안성(Security)에 해당하며, 개발 라이프사이클 전반에 보안을 통합하는 DevSecOps 접근이 표준이 되고 있다.

## 핵심 내용

**소프트웨어 보안 품질 정의**
- ISO/IEC 25010 보안성 하위 특성: 기밀성·무결성·부인방지·책임추적성·인증성
- 기능 보안(Functional Security): 인증·권한부여·암호화·감사로그
- 비기능 보안(Non-Functional Security): 취약점 없는 코드·아키텍처

**보안 품질 확보를 위한 자동화 기술과 도구**

| 기술 | 도구 예시 | 적용 단계 |
|------|-----------|-----------|
| SAST (정적 분석) | SonarQube, Checkmarx, Fortify | 코딩·빌드 |
| DAST (동적 분석) | OWASP ZAP, Burp Suite | 테스트·운영 |
| SCA (오픈소스 분석) | Snyk, Black Duck | 빌드·배포 |
| IAST (대화형 분석) | Contrast Security | 런타임 테스트 |
| 컨테이너 보안 스캔 | Trivy, Clair | 빌드·배포 |
| 비밀 스캔 (Secret Scan) | GitLeaks, TruffleHog | 소스코드 커밋 |

**소프트웨어 라이프사이클 관점의 보안 자동화**

| 단계 | 보안 활동 | 자동화 방법 |
|------|-----------|------------|
| 요구사항 | 보안 요구사항 정의, Threat Modeling | STRIDE 템플릿 |
| 설계 | 보안 아키텍처 검토 | 체크리스트 자동화 |
| 구현 | 시큐어 코딩, SAST | CI 파이프라인 통합 |
| 테스트 | DAST·침투 테스트 | CD 파이프라인 통합 |
| 배포 | 컨테이너·인프라 취약점 스캔 | IaC 보안 검사 |
| 운영 | SIEM·WAF·이상 탐지 | 실시간 자동 알림 |

**기대 효과**
- 취약점 조기 발견으로 수정 비용 10~100배 절감
- 보안 패치 배포 사이클 단축
- 컴플라이언스 자동 증적 생성

## 출제 포인트

- 소프트웨어 보안 품질의 정의 (ISO/IEC 25010 보안성)
- SAST·DAST·SCA 차이와 적용 단계
- DevSecOps 기반 보안 자동화 구현 방안

## 연관 개념

- [소프트웨어 품질보증과 인스펙션]({{< relref "/docs/notes/02_SoftwareEngineering/05_SW_Quality/sw-quality-assurance-inspection" >}}) — SQA 전반과 연계
- [LLM 보안 위험]({{< relref "/docs/notes/06_InfoSecurity/01_SecurityTech/llm-security-risks" >}}) — AI 기반 SW 개발의 보안 품질 이슈

## 참고 기출

- 136회 4교시 6번 (PEIM)
