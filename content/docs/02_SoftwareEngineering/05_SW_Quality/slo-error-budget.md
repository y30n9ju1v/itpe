---
title: "SLO와 에러 버짓 (Service Level Objective & Error Budget)"
date: 2026-05-09T07:34:17+09:00
tags: ["pecs", "소프트웨어공학", "SW품질", "SLO", "에러버짓", "SRE", "가용성"]
draft: false
exam_pecs: "138회"
---

## 개요

SLO(Service Level Objective)는 서비스 신뢰성 목표를 구체적 지표로 정의한 것이고, 에러 버짓(Error Budget)은 SLO에서 허용하는 서비스 중단·오류의 최대 허용량이다. 구글 SRE(Site Reliability Engineering) 방법론의 핵심 개념으로, 안정성과 개발 속도의 균형을 수치화한다.

## 핵심 내용

### SLA / SLO / SLI 관계

| 용어 | 정의 | 예시 |
|------|------|------|
| **SLI** (Service Level Indicator) | 서비스 성능의 실측 지표 | 실제 가용성 = 99.95% |
| **SLO** (Service Level Objective) | 서비스 목표 (내부 기준) | 가용성 99.9% 이상 유지 |
| **SLA** (Service Level Agreement) | 고객과의 계약 (SLO보다 완화) | 가용성 99.5% 이하 시 환불 |

**관계**: SLI로 측정 → SLO 달성 여부 판단 → SLA 위반 시 패널티

### 에러 버짓 (Error Budget) 정의

```
에러 버짓 = 1 - SLO 목표

예시: SLO = 99.9% 가용성
  에러 버짓 = 0.1% = 연간 약 8.77시간 / 월 약 43.8분
```

| SLO 목표 | 에러 버짓 (연간) | 에러 버짓 (월간) |
|----------|----------------|----------------|
| 99% | 87.6시간 | 7.3시간 |
| 99.9% | 8.76시간 | 43.8분 |
| 99.99% | 52.6분 | 4.38분 |
| 99.999% | 5.26분 | 26.3초 |

### 에러 버짓 운용 방안

**에러 버짓 소진이 빠를 때 (안정성 위기):**
1. 신규 기능 배포 중단 (Freeze)
2. 개발 팀이 신뢰성 개선 작업에 집중
3. 장애 원인 분석 및 재발 방지 (Post-mortem)

**에러 버짓 여유가 있을 때 (정상 운영):**
1. 신규 기능 빠르게 배포 (에러 버짓 내에서 위험 감수)
2. 계획된 다운타임 수행 (시스템 유지보수)
3. 카오스 엔지니어링 실험 (넷플릭스 Chaos Monkey 등)

**에러 버짓 정책 수립 단계:**
1. SLI 지표 선정 (가용성, 지연, 오류율)
2. SLO 목표 수치 설정 (과거 데이터 + 비즈니스 요구 기반)
3. 에러 버짓 계산 및 모니터링 체계 구축
4. 에러 버짓 초과/여유 시 대응 정책 문서화
5. 정기 리뷰로 SLO 조정

## 출제 포인트

- SLI → SLO → SLA 3단계 관계와 차이
- 에러 버짓 계산 공식: 1 - SLO (예: 99.9% → 0.1%)
- 에러 버짓 소진 빠를 때: 배포 중단·신뢰성 집중
- 에러 버짓 여유 시: 빠른 배포·카오스 엔지니어링 허용

## 연관 개념

- [SLA(서비스 수준 협약)]({{< relref "/docs/02_SoftwareEngineering/05_SW_Quality/sla-service-level-agreement" >}}) — SLO와 SLA의 관계
- [FTS/HA]({{< relref "/docs/04_ComputerSystems/06_InfraArchitecture/fts-ha" >}}) — 고가용성 인프라로 에러 버짓 확보
- [공공망 백업복구]({{< relref "/docs/04_ComputerSystems/06_InfraArchitecture/public-network-backup-recovery" >}}) — 가용성 SLO 확보 사례

## 참고 기출

- 138회 3교시 5번 (PECS)
