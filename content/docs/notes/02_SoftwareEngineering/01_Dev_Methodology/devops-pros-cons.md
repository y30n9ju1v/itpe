---
title: "DevOps 장점과 단점"
date: 2026-05-08T23:38:40+09:00
tags: ["peim", "소프트웨어공학", "개발방법론", "DevOps", "CI/CD", "자동화", "문화"]
draft: false
exam_peim: ["136회"]
---

## 개요

DevOps는 개발(Development)과 운영(Operations)을 통합하여 소프트웨어를 빠르고 안정적으로 지속 제공하는 문화·방법론·도구의 집합이다. CI/CD 파이프라인 자동화를 핵심으로, 개발-테스트-배포-운영 피드백 루프를 단축한다.

## 핵심 내용

**DevOps 핵심 원칙 (CALMS)**
- Culture (문화): 협업·공유·책임
- Automation (자동화): CI/CD, 인프라 코드화(IaC)
- Lean (린): 낭비 제거, 흐름 최적화
- Measurement (측정): 지표 기반 개선
- Sharing (공유): 도구·프로세스·지식 공유

**DevOps 장점**

| 장점 | 설명 |
|------|------|
| 빠른 배포 주기 | CI/CD로 일 수십 회 배포 가능 |
| 품질 향상 | 자동화 테스트로 조기 결함 탐지 |
| 협업 강화 | Dev-Ops 사일로 해소 |
| 장애 복구 단축 | 모니터링·롤백 자동화 |
| 비용 절감 | 수동 작업 자동화로 운영 비용 감소 |

**DevOps 단점/도전과제**

| 단점 | 설명 |
|------|------|
| 조직 문화 변화 저항 | Dev·Ops 역할 경계 모호화에 대한 저항 |
| 초기 구축 비용 | CI/CD 파이프라인·도구 도입 비용 |
| 보안 취약점 위험 | 빠른 배포로 보안 검토 생략 우려 (→ DevSecOps) |
| 레거시 시스템 호환 | 기존 모놀리식 시스템에 적용 어려움 |
| 기술 복잡성 | 다양한 도구 습득 부담 (Kubernetes, Terraform 등) |

**DevOps 주요 도구 체인**
- SCM: Git, GitLab
- CI/CD: Jenkins, GitHub Actions, ArgoCD
- 컨테이너: Docker, Kubernetes
- 모니터링: Prometheus, Grafana, ELK

## 출제 포인트

- DevOps의 개념과 CALMS 원칙
- 장점(배포속도·품질·협업)과 단점(문화저항·보안·복잡성) 균형 서술
- DevSecOps로의 발전 방향

## 연관 개념

- [소프트웨어 보안 품질]({{< relref "/docs/notes/02_SoftwareEngineering/05_SW_Quality/sw-security-quality" >}}) — DevSecOps 연계
- [제품계열 방법론]({{< relref "/docs/notes/02_SoftwareEngineering/01_Dev_Methodology/product-line-methodology" >}}) — 개발 방법론 비교

## 참고 기출

- 136회 1교시 6번 (PEIM)
