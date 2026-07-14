---
title: "SLA, SLO, Error Budget"
date: 2026-07-11T11:14:19+09:00
tags: ["소프트웨어공학", "SRE", "SLA", "SLO", "오류예산", "기술부채", "서브노트"]
draft: false
---

# SLA, SLO, Error Budget 서브노트

> **두음 머리에 박기 🧠**
> - **지·목·합** (품질 관리 3단계 체계: **지**표 SLI, **목**표 SLO, **합**의/계약 SLA)
> - **100 - SLO** (오류 예산 공식: 허용 가능한 시스템 실패율 = 100% - SLO)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **서비스 품질 합의 (SLA), 목표 (SLO) 및 오류 예산 (Error Budget)** |
| **정의** | 안정성·혁신 균형 위해 정량적 품질지표 **SLI** 기반 내부목표치 **SLO**·비즈니스계약 **SLA** 수립<br>허용가능 에러총량인 **오류예산**을 제어수단으로 활용하는 품질관리 기법 |
| **키워드** | SLI (지표), SLO (목표), SLA (합의), Error Budget (오류 예산), 배포 잠금(Freeze Policy), SRE |
| **개념도** | `[ SLI : 정량적 품질 지표 ] ── 가용성, 지연율 측정`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`├─────────➔ [ SLO : 내부 엔지니어링 목표 (예: 99.9% 가용) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── [ 가용 영역 : 99.9% ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── [ 오류 예산 : 0.1% ] ──➔ [ 개발팀 배포/장애 수용 ] (소진 시 배포 동결)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ SLA : 대고객 계약 및 보상 기준 (예: 99.0% 미달 시 위약금) ]` |
| **구성요소** | 1. **SLI(Service Level Indicator)**: 서비스수준 정량측정 구체지표 (예: 에러율, Latency)<br>2. **SLO(Service Level Objective)**: 시스템안정성 위한 내부타겟값 (SLA보다 엄격하게 설정)<br>3. **SLA(Service Level Agreement)**: 대고객 서비스제공수준 계약 (목표미달 시 보상·환불 등 법적/재무적 페널티)<br>4. **오류 예산(Error Budget)**: 허용가능 장애범위 = 100%-SLO, 개발팀 신규배포·시스템실패 수용력 제공 |
| **비교** | **SLI(지표)**<br>- 대상: 서비스 성능 실측치<br>- 수준: 실시간 측정데이터<br><br>**SLO(목표)**<br>- 대상: 내부 서비스운영팀<br>- 수준: 타이트하게 설정(예: 99.9%)<br><br>**SLA(계약)**<br>- 대상: 외부고객·법적주체<br>- 수준: 비교적 넉넉하게 설정(예: 99.0%) |
| **차별화** | **개발-운영 갈등 완화 위한 오류 예산(Error Budget) 거버넌스 및 기술부채 관리 전략**<br>1. **배포 잠금 정책(Freeze Policy) 자동화**: 프로메테우스/그라파나 연계 → 오류예산 100% 소진 시 CI/CD 신규기능 머지 차단, 장애개선 태스크만 승인하도록 자동제어<br>2. **기술부채(Technical Debt) 정량적 가시화**: 남은 오류예산 추이로 리팩토링 주기 과학적 결정, 소진속도 과다 시 다음 스프린트를 전체 리팩토링+테스트강화로 자동전환<br>3. **사용자경험 중심 SLI 다각화**: 단순 서버가용시간(Uptime) 측정 한계 넘어, 사용자체감 응답속도(Apdex Score)+API성공률 결합지수를 SLI로 적용 → 실제 품질보증 정합성 일치 |
