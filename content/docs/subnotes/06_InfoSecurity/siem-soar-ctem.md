---
title: "SIEM/SOAR 보안운영과 CTEM 지속적 위협노출관리"
date: 2026-07-11T11:38:05+09:00
tags: ["보안", "SIEM", "SOAR", "CTEM", "보안운영", "SOC", "서브노트"]
draft: false
---

# SIEM/SOAR 보안운영과 CTEM 지속적 위협노출관리 서브노트

> **두음 머리에 박기 🧠**
> - **탐·대** (SIEM·SOAR 역할 분담: SIEM=**탐**지, SOAR=**대**응)
> - **O·A·R** (SOAR 3대 핵심 요소: **O**rchestration 도구통합, **A**utomation 자동실행, **R**esponse Playbook대응)
> - **범·발·우·검·동** (CTEM 5단계: **범**위설정 Scoping, **발**견 Discovery, **우**선순위화 Prioritization, **검**증 Validation, **동**원 Mobilization)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **SIEM·SOAR 기반 SOC 운영과 CTEM(지속적 위협노출관리)** |
| **정의** | 로그·이벤트 상관분석 위협탐지 SIEM + Playbook 기반 대응자동화 SOAR 상호보완 SOC 체계, 기존 주기적 VM 넘어 공격표면 지속평가·검증하는 CTEM(범·발·우·검·동) |
| **키워드** | SIM+SEM, Correlation, Playbook, MTTR, ASM, BAS, Gartner 2022 |
| **개념도** | **[ SIEM+SOAR+CTEM 통합 보안운영 흐름 ]**<br>`[ CTEM: 범위설정→발견→우선순위화→검증(BAS)→동원 ] ──➔ 고위험 자산·취약점 목록`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`로그/이벤트 수집 ➔ [ SIEM(탐지·경보, 상관분석) ] ➔ [ SOAR(Playbook 실행) ] ➔ 자동대응(IP차단·격리)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲ 분석가 검토(필요시)` |
| **구성요소** | 1. **SIEM**: 로그수집→정규화→상관분석(Correlation)→경보, ML/Rule 이상행위탐지, ISMS-P·PCI-DSS 컴플라이언스보고<br>2. **SOAR 3요소**: Orchestration(SIEM·방화벽·EDR 도구통합연계), Automation(IP차단·계정격리 자동실행), Response(Playbook 표준대응절차)<br>3. **CTEM 5단계**: ①범위설정(보호대상식별) ②발견(자산·취약점·설정오류·노출자격증명 탐색) ③우선순위화(악용가능성+비즈니스영향) ④검증(침투테스트·BAS로 악용여부확인) ⑤동원(소유자지정·치료계획·경영보고)<br>4. **관련기술**: ASM(외부공격표면 지속모니터링), BAS(공격시나리오 시뮬레이션) |
| **비교** | **기존 취약점관리(VM)**<br>- 주기: 분기·연간 주기적스캔<br>- 우선순위기준: CVSS점수, 검증절차 없음<br><br>**CTEM**<br>- 주기: 지속적(Continuous) 평가<br>- 우선순위기준: 악용가능성+비즈니스영향, BAS·레드팀 실검증 후 조치 |
| **차별화** | **SOC 성숙도 향상 SIEM/SOAR/CTEM 통합 전략**<br>1. **CTEM 발견단계 ↔ SIEM 자산인벤토리 연계**: 공급망·클라우드·Shadow IT 자산 → SIEM 로그수집대상 실시간반영 → 탐지사각지대 최소화<br>2. **SOAR Playbook ↔ CTEM 우선순위 반영**: 악용검증된 고위험 취약점 → SOAR 자동 가상패칭·격리Playbook 실행, MTTR단축<br>3. **BAS 시뮬레이션 → SIEM 탐지룰 지속튜닝**: CTEM 검증단계 공격시뮬레이션 결과 → 상관분석규칙 피드백개선, Closed-loop 운영 |
