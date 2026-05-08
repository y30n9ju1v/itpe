---
title: "TTPs (Tactics, Techniques and Procedures)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "정보보안", "보안기술", "TTPs", "MITRE ATT&CK", "위협인텔리전스"]
draft: false
---

## 개요

TTPs(Tactics, Techniques and Procedures)는 공격자의 행동 패턴을 전술·기법·절차의 3단계 계층으로 분류한 위협 인텔리전스 프레임워크다. MITRE ATT&CK 매트릭스가 TTPs를 체계화한 대표적 표준으로, 공격자의 의도와 행동 방식을 분석하여 방어 전략을 수립하는 데 활용된다.

## 핵심 내용

### TTPs 3계층

| 계층 | 설명 | 예시 |
|------|------|------|
| **Tactics (전술)** | 공격자의 목적/의도 — "왜" | 초기 접근, 권한 상승, 측면 이동, 데이터 유출 |
| **Techniques (기법)** | 목적 달성을 위한 방법 — "어떻게" | 피싱, Pass-the-Hash, SQL 인젝션 |
| **Procedures (절차)** | 기법의 구체적 구현 방법 — "무엇을" | 특정 악성코드가 특정 레지스트리 키를 수정하는 상세 행동 |

### MITRE ATT&CK 매트릭스

- 14개 전술(Tactics): 정찰→초기접근→실행→지속성→권한상승→방어회피→자격증명접근→탐색→측면이동→수집→C2→유출→영향
- 각 전술에 수백 개의 기법(Techniques) 매핑
- 실제 위협 그룹(APT 등)의 TTPs 문서화

### 활용 방안

- **위협 헌팅(Threat Hunting)**: 알려진 TTPs 기반 능동적 탐지
- **레드팀/블루팀**: 공격 시뮬레이션과 탐지 능력 검증
- **SIEM 규칙**: TTPs 패턴을 탐지 룰로 변환
- **사이버 킬 체인**: TTPs를 킬체인 단계에 매핑하여 방어 계층 설계

## 출제 포인트

- T(전술)·T(기법)·P(절차) 각각의 정의와 예시 서술
- MITRE ATT&CK와의 연관성 언급
- 위협 인텔리전스 활용 방안(위협 헌팅, SIEM 연동) 포함

## 연관 개념

- [공격 표면/측면 이동]({{< relref "/docs/peim/06_InfoSecurity/02_SecuritySystems/attack-surface-lateral-movement" >}}) — TTPs의 구체적 기법
- [랜섬웨어/RaaS]({{< relref "/docs/peim/06_InfoSecurity/02_SecuritySystems/ransomware-raas" >}}) — TTPs 적용 대표 공격 유형
- 디지털포렌식 — TTPs 역추적을 통한 공격자 식별

## 참고 기출

- 138회 1교시 10번
