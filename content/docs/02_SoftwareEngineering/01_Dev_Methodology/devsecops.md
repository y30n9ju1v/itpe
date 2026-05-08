---
title: "DevSecOps와 CI/CD 파이프라인 보안"
date: 2026-05-09T00:00:00+09:00
tags: ["peim", "소프트웨어공학", "개발방법론", "DevSecOps", "CI/CD", "보안자동화", "SAST", "DAST"]
draft: false
exam_peim: ["135회"]
---

## 개요

DevSecOps는 DevOps 파이프라인에 보안(Security)을 처음부터 통합하는 방법론이다. "Shift Left" 원칙에 따라 개발 초기부터 보안 검사를 자동화하여, 운영 단계에서 발견되는 취약점을 사전에 차단한다.

## 핵심 내용

### DevSecOps 핵심 원칙

- **Shift Left Security**: 보안 검증을 개발 초기 단계로 이동
- **자동화 우선**: 수동 보안 검사를 CI/CD 파이프라인에 자동화
- **지속적 모니터링**: 운영 단계까지 보안 가시성 확보

### CI/CD 파이프라인 단계별 DevSecOps 적용

| 단계 | 활동 | 도구 |
|------|------|------|
| **코드 작성** | 보안 코딩 가이드라인, IDE 보안 플러그인 | SonarLint |
| **빌드(CI)** | SAST(정적 분석): 소스코드 취약점 스캔 | SonarQube, Checkmarx |
| **빌드(CI)** | SCA(소프트웨어 구성 분석): 오픈소스 취약점 | OWASP Dependency-Check, Snyk |
| **컨테이너 빌드** | 컨테이너 이미지 취약점 스캔 | Trivy, Clair |
| **스테이징(CD)** | DAST(동적 분석): 실행 중 취약점 테스트 | OWASP ZAP, Burp Suite |
| **배포** | IaC 보안 검사: 인프라 설정 오류 탐지 | Checkov, Terraform Sentinel |
| **운영** | RASP, 런타임 모니터링, SIEM 연계 | Falco, Datadog |

### SAST vs DAST 비교

| 구분 | SAST | DAST |
|------|------|------|
| 분석 대상 | 소스코드·바이너리 | 실행 중인 애플리케이션 |
| 시점 | 빌드 단계 (정적) | 스테이징·운영 (동적) |
| 장점 | 조기 발견, 낮은 비용 | 실제 취약점 검증 |
| 단점 | 오탐(False Positive) 많음 | 늦은 발견 |

### 보안 게이트(Security Gate)

파이프라인 각 단계에 통과 기준을 설정하여 취약점 발견 시 빌드 중단:
- Critical 취약점: 즉시 차단
- High: 승인 필요
- Medium 이하: 레포트 후 진행

## 출제 포인트

- DevSecOps = DevOps + Shift Left Security
- SAST·DAST·SCA 각각의 적용 시점과 도구
- CI/CD 파이프라인 단계별 보안 활동 매핑

## 연관 개념

- [DevOps 장단점]({{< relref "/docs/02_SoftwareEngineering/01_Dev_Methodology/devops-pros-cons" >}}) — DevSecOps의 기반 방법론
- [SIEM과 SOAR]({{< relref "/docs/06_InfoSecurity/02_SecuritySystems/siem-soar" >}}) — 운영 단계 보안 모니터링 연계
- [SW 보안 품질]({{< relref "/docs/02_SoftwareEngineering/05_SW_Quality/sw-security-quality" >}}) — 보안 품질 요건

## 참고 기출

- 135회 2교시 2번 (PEIM)
