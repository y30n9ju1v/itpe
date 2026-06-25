---
title: "보안 운영체제 (Secure OS)"
date: 2026-05-09T07:56:10+09:00
tags: ["pecs", "시스템보안", "보안운영체제", "MAC", "SELinux", "TCB", "보안커널"]
draft: false
exam_pecs: ["137회"]
---

## 개요

보안 운영체제(Secure OS)는 일반 OS에 보안 기능을 강화하여 강제 접근 통제(MAC), 최소 권한 원칙, 감사 기능 등을 커널 수준에서 구현한 운영체제다. 군사·공공·금융 등 고보안 환경에서 내부자 위협과 권한 탈취에 대응한다.

## 핵심 내용

### 보안 OS의 핵심 구성 요소

| 구성 요소 | 설명 |
|-----------|------|
| **TCB** (Trusted Computing Base) | 보안 정책을 강제하는 최소 하드웨어/소프트웨어 집합 |
| **보안 커널** | TCB의 핵심; 참조 모니터 구현 |
| **참조 모니터** (Reference Monitor) | 모든 접근을 중재, 우회 불가 |
| **보안 정책 DB** | 주체-객체 간 접근 규칙 저장 |

### 접근 통제 모델

| 모델 | 방식 | 특징 |
|------|------|------|
| **DAC** (임의 접근 통제) | 자원 소유자가 권한 부여 | 일반 OS (Linux chmod) |
| **MAC** (강제 접근 통제) | 시스템이 보안 레이블로 강제 | Secure OS 핵심, Bell-LaPadula |
| **RBAC** (역할 기반 접근 통제) | 역할에 권한 할당 | 기업 환경 |
| **MLS** (다중 수준 보안) | 기밀 등급(기밀/비밀/극비) 기반 | 군사 시스템 |

### Bell-LaPadula 모델 (기밀성)

- **No Read Up**: 낮은 등급 주체는 높은 등급 객체 읽기 불가
- **No Write Down**: 높은 등급 주체는 낮은 등급 객체 쓰기 불가

### 대표 구현

- **SELinux** (Security-Enhanced Linux): NSA 개발, MAC 정책 적용, Android 기반
- **AppArmor**: Ubuntu 기본 탑재, 경로 기반 정책
- **Trusted Solaris**: Oracle의 고보안 Unix
- **국내**: 안철수연구소 시큐어OS, 국정원 CC인증 제품

## 실무 적용 예시

- 금융권 서버: SELinux enforcing 모드로 DB 접근 프로세스 제한
- 스마트폰: Android SELinux로 앱 간 격리, 루팅 탐지

## 출제 포인트

- TCB·참조 모니터 개념과 역할
- DAC vs MAC 비교 (Secure OS = MAC 기반)
- Bell-LaPadula 규칙 (No Read Up / No Write Down)

## 연관 개념

- [제로 트러스트 보안]({{< relref "/docs/notes/06_InfoSecurity/03_InfoProtection/zero-trust-maturity-model" >}}) — 최소 권한 원칙 연계
- 보안 감사 — Secure OS의 감사 기능
- [Common Criteria (CC)]({{< relref "/docs/notes/06_InfoSecurity/07_SecurityCertification/common-criteria-cc" >}}) — Secure OS 인증 기준

## 참고 기출

- 137회 1교시 5번 (PECS)
