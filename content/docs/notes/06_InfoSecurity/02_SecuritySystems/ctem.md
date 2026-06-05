---
title: "CTEM (지속적 위협 노출 관리, Continuous Threat Exposure Management)"
date: 2026-05-29T11:17:52+09:00
tags: ["peim", "정보보안", "보안시스템", "CTEM", "위협노출관리", "공격표면", "취약점관리"]
draft: false
exam_peim: ["139회"]
---

## 개요

CTEM(Continuous Threat Exposure Management)은 Gartner가 2022년 제시한 사이버보안 프로그램으로, 조직의 공격 노출 범위를 지속적으로 평가·우선순위화·검증하여 위협 노출을 능동적으로 최소화하는 체계적 접근법이다.

## 핵심 내용

### CTEM 5단계 프로세스

| 단계 | 명칭 | 주요 활동 |
|------|------|-----------|
| 1 | **범위 설정 (Scoping)** | 보호 대상 자산·비즈니스 프로세스 식별 |
| 2 | **발견 (Discovery)** | 공격 표면 전체 탐색: 자산, 취약점, 설정 오류, 노출된 자격증명 |
| 3 | **우선순위화 (Prioritization)** | 실제 악용 가능성·비즈니스 영향도 기준 위험 순위 결정 |
| 4 | **검증 (Validation)** | 침투 테스트·BAS(Breach & Attack Simulation)로 실제 악용 가능 여부 확인 |
| 5 | **동원 (Mobilization)** | 발견된 위험의 소유자 지정, 치료 계획 실행, 경영진 보고 |

### 기존 취약점 관리와의 차이

| 구분 | 기존 VM | CTEM |
|------|---------|------|
| 주기 | 주기적(분기/연간) 스캔 | 지속적(Continuous) |
| 범위 | 내부 자산 중심 | 디지털 공급망·클라우드·Shadow IT 포함 |
| 우선순위 기준 | CVSS 점수 | 실제 악용 가능성 + 비즈니스 영향 |
| 검증 | 없음 | BAS·레드팀으로 실제 검증 |

### 관련 기술

- **ASM(Attack Surface Management)**: 외부 공격 표면 지속 모니터링
- **BAS(Breach and Attack Simulation)**: 실제 공격 시나리오 시뮬레이션
- **Exposure Management Platform**: CTEM 통합 관리 플랫폼

## 실무 적용 예시

금융사가 CTEM 도입 후 퍼블릭 클라우드·협력업체·레거시 시스템의 공격 표면을 통합 가시화하여, 실제 악용 가능한 고위험 취약점을 먼저 패치하는 우선순위 기반 보안 운영으로 전환한다.

## 출제 포인트

- CTEM 5단계 순서와 각 단계의 핵심 활동
- 기존 취약점 관리(VM)와의 차이점(지속성, 우선순위화 기준, 검증 절차)
- ASM·BAS·SIEM·SOAR와의 연계 구조

## 연관 개념

- [공격 표면과 측면 이동]({{< relref "/docs/notes/06_InfoSecurity/02_SecuritySystems/attack-surface-lateral-movement" >}}) — 공격 표면 관리 개념
- [SIEM과 SOAR]({{< relref "/docs/notes/06_InfoSecurity/02_SecuritySystems/siem-soar" >}}) — 탐지·대응 자동화 연계

## 참고 기출

- 139회 1교시 11번 (PEIM)
