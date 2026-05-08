---
title: "SIEM과 SOAR 비교"
date: 2026-05-09T00:00:00+09:00
tags: ["peim", "정보보안", "보안시스템", "SIEM", "SOAR", "보안운영", "SOC"]
draft: false
exam_peim: ["135회"]
---

## 개요

SIEM(Security Information & Event Management)은 로그·이벤트를 수집·분석하여 보안 위협을 탐지하는 플랫폼이고, SOAR(Security Orchestration, Automation & Response)는 탐지된 위협에 대해 자동화된 대응을 수행하는 플랫폼이다. 현대 SOC(Security Operations Center)에서 두 기술은 상호보완적으로 운영된다.

## 핵심 내용

### SIEM 개요

- **기능**: 로그 수집(Log Collection) → 정규화 → 상관분석(Correlation) → 경보(Alert)
- **주요 기능**:
  - 실시간 로그 통합 관리 (SIEM = SIM + SEM)
  - 이상 행위 탐지 (Rule-based, ML-based)
  - 컴플라이언스 보고 (ISMS-P, PCI-DSS)
  - 장기 로그 보존 및 포렌식 지원

### SOAR 개요

- **기능**: 위협 대응 자동화·오케스트레이션
- **3대 핵심 요소**:

| 요소 | 설명 |
|------|------|
| **Orchestration** | 다양한 보안 도구(SIEM, Firewall, EDR)를 통합 연계 |
| **Automation** | 반복적인 대응 작업 자동 실행 (IP 차단, 격리 등) |
| **Response** | Playbook 기반 표준화된 사고 대응 절차 실행 |

### SIEM vs SOAR 비교

| 구분 | SIEM | SOAR |
|------|------|------|
| 핵심 기능 | 위협 탐지 및 경보 | 위협 대응 자동화 |
| 처리 대상 | 로그·이벤트 데이터 | 보안 경보·인시던트 |
| 자동화 | 탐지 규칙 중심 | Playbook 기반 대응 |
| AI/ML 활용 | 이상 탐지 | 우선순위 분류·대응 결정 |
| 인력 의존도 | 높음 (분석가 필요) | 낮음 (자동 대응) |
| MTTR 기여 | 간접적 | 직접적 단축 |

### 통합 운영 (SIEM + SOAR)

```
로그/이벤트 수집
      ↓
    SIEM (탐지·경보)
      ↓
    SOAR (Playbook 실행)
      ↓
자동 대응: IP차단, 계정잠금, 격리
      ↓
분석가 검토 (필요 시)
```

## 출제 포인트

- SIEM: 탐지, SOAR: 대응 — 역할 분리 명확히
- SOAR의 3요소: Orchestration, Automation, Response
- Playbook 개념: 시나리오별 대응 절차 자동화
- 두 기술 통합으로 SOC의 MTTR(Mean Time to Respond) 단축

## 연관 개념

- [ISMS·ISMS-P]({{< relref "/docs/06_InfoSecurity/04_AdminSecurity/isms-isms-p" >}}) — 컴플라이언스 로그 요건
- [공격 표면과 측면 이동]({{< relref "/docs/06_InfoSecurity/02_SecuritySystems/attack-surface-lateral-movement" >}}) — SOAR로 대응하는 위협 유형
- [제로 트러스트 성숙도 모델]({{< relref "/docs/06_InfoSecurity/03_InfoProtection/zero-trust-maturity-model" >}}) — SIEM/SOAR와 ZTA 연계

## 참고 기출

- 135회 1교시 5번 (PEIM)
