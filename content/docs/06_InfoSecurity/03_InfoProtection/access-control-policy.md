---
title: "접근통제 정책 비교 (MAC·DAC·RBAC·ABAC)"
date: 2026-05-09T08:09:13+09:00
tags: ["pecs", "시스템보안", "보안체계", "접근통제", "MAC", "DAC", "RBAC", "ABAC"]
draft: false
exam_pecs: ["135회"]
---

## 개요

접근통제(Access Control)는 인가된 주체(사용자·프로세스)만이 보호된 자원(파일·DB·서비스)에 접근할 수 있도록 제한하는 보안 메커니즘이다. MAC, DAC, RBAC, ABAC의 4가지 정책이 대표적이다.

## 핵심 내용

### 접근통제 개념

**3요소**: 주체(Subject) — 접근 요청자 / 객체(Object) — 보호 자원 / 접근 권한(Permission)

**접근통제 절차**: 식별(Identification) → 인증(Authentication) → 인가(Authorization)

### 4가지 접근통제 정책 비교

| 항목 | MAC | DAC | RBAC | ABAC |
|------|-----|-----|------|------|
| **정의** | 시스템이 보안 레이블로 강제 통제 | 소유자가 권한 부여 결정 | 역할(Role) 기반 권한 부여 | 속성(Attribute) 기반 동적 판단 |
| **통제 주체** | 시스템/관리자 | 자원 소유자 | 관리자 (역할 정의) | 정책 엔진 (속성 조합) |
| **유연성** | 낮음 | 높음 | 중간 | 매우 높음 |
| **관리 복잡성** | 낮음 | 높음 (소유자 분산) | 중간 | 높음 (정책 설계) |
| **적용 환경** | 군사·기밀 시스템 | 일반 파일 시스템 | 기업 ERP, 병원 | 클라우드, 제로트러스트 |
| **표준 모델** | Bell-LaPadula, BiBa | Unix 파일 권한 | NIST RBAC | XACML |

### MAC + ABAC 융합 정책의 필요성

**MAC의 한계**: 정적 보안 레이블로 동적 환경(클라우드, 원격근무) 대응 불가

**ABAC의 한계**: 높은 정책 복잡성, 설계 오류 시 과도한 접근 허용 위험

**융합 필요성**:
- MAC으로 강제적 보안 등급(기밀성 수준)을 기본 제어
- ABAC으로 사용자 위치·시간·디바이스·행동 맥락을 동적 반영
- 제로트러스트 환경에서 "Never Trust, Always Verify" 구현

### MAC + ABAC 융합 정책의 동적 보안 정책 운영 방안

| 단계 | 방안 |
|------|------|
| **속성 수집** | 사용자 위치·디바이스 상태·행동 로그 실시간 수집 |
| **리스크 점수 산정** | AI/ML로 접근 요청의 위험도 실시간 계산 |
| **정책 동적 적용** | 리스크 점수에 따라 MFA 추가 요구, 접근 범위 제한 |
| **지속 검증** | 세션 중에도 속성 변화 모니터링 (Continuous Verification) |
| **감사 로그** | 모든 접근 결정 기록 (SIEM 연계) |

## 출제 포인트

- 4가지 정책의 통제 주체·유연성·적용 환경 비교표
- MAC: Bell-LaPadula 모델 (기밀성), BiBa (무결성)
- RBAC: 역할 분리(Separation of Duty)로 권한 남용 방지
- ABAC: XACML 정책 언어, 제로트러스트의 핵심 기반
- 융합 정책: MAC의 강제성 + ABAC의 동적 맥락 인식

## 연관 개념

- [제로트러스트 성숙도 모델]({{< relref "/docs/06_InfoSecurity/03_InfoProtection/zero-trust-maturity-model" >}}) — ABAC 기반 제로트러스트 구현
- [ISMS-P]({{< relref "/docs/06_InfoSecurity/04_AdminSecurity/isms-isms-p" >}}) — 접근통제 관리적 보안 기준
- [디지털 포렌식]({{< relref "/docs/06_InfoSecurity/05_DigitalForensics/digital-forensics-artifact" >}}) — 접근통제 감사 로그 분석

## 참고 기출

- 135회 2교시 3번 (PECS)
