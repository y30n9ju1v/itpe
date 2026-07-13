---
title: "스타트업 데이터 분석기법: Funnel·Cohort·A/B Test·VDT"
date: 2026-07-13T15:23:43+09:00
tags: ["정보전략", "IT경영", "스타트업", "Funnel", "Cohort", "ABTest", "서브노트"]
draft: false
---

# 스타트업 데이터 분석기법: Funnel·Cohort·A/B Test·VDT 서브노트

> **두음 머리에 박기 🧠**
> - **퍼·코·에·브** (스타트업 4대 분석기법: **퍼**널분석, **코**호트분석, **에**이비테스트, **브**이디티(VDT))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **스타트업 데이터 분석기법 (Funnel Analysis, Cohort Analysis, A/B Test, Value Driver Tree)** |
| **정의** | 스타트업 데이터 분석기법이란 제한된 자원 하에서 사용자 행동 데이터를 기반으로 제품·서비스의 성과를 정량적으로 측정하고 개선 의사결정을 신속히 내리기 위한 분석 방법론의 총칭으로, 각 단계별 이탈지점을 진단하는 Funnel, 시간에 따른 리텐션을 추적하는 Cohort, 가설의 인과관계를 검증하는 A/B Test, 핵심지표를 구조적으로 분해하는 Value Driver Tree(VDT)로 구성된다 |
| **키워드** | 이탈률(Drop-off), 리텐션(Retention), 통계적 유의성, 지표 분해(Tree Decomposition) |
| **개념도** | `[ 사용자 유입 ] ➔ [ Funnel: 단계별 이탈지점 진단 ] ➔ [ Cohort: 가입시점별 리텐션 추적 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ A/B Test: 개선 가설의 인과관계 검증 ] ➔ [ VDT: 핵심 경영지표를 하위 동인으로 구조 분해 ]` |
| **구성요소** | 1. **Funnel Analysis**: 사용자 여정을 단계별로 나누어 각 단계의 이탈률(Drop-off)을 진단, 초기 문제 진단에 활용<br>2. **Cohort Analysis**: 가입 시점 등 공통 특성을 가진 집단(코호트)별로 시간 경과에 따른 리텐션 변화를 종단 추적, 제품 개선 효과 검증에 활용(예: 1월 1주 코호트 W1 100%→W4 22%)<br>3. **A/B Test**: 두 가지 이상의 버전을 무작위 배정해 특정 지표에 대한 가설의 인과관계를 실험 기간 동안 통계적으로 검증<br>4. **Value Driver Tree(VDT)**: 핵심 경영지표(예: 매출)를 하위 동인 지표로 MECE하게 구조 분해하여 정적 구조 분석, 경영 지표 우선순위 도출에 활용 |
| **비교** | **Funnel Analysis**<br>- 시간축: 특정 시점 스냅샷<br>- 활용시점: 초기 문제 진단<br><br>**Cohort Analysis**<br>- 시간축: 시간 경과(종단)<br>- 활용시점: 제품 개선 효과 검증<br><br>**A/B Test**<br>- 시간축: 실험 기간<br>- 활용시점: 특정 기능/UX 변경 결정<br><br>**Value Driver Tree**<br>- 시간축: 정적 구조 분석<br>- 활용시점: 경영 지표 우선순위 도출 |
| **차별화** | **스타트업 그로스(Growth) 단계별 4대 기법 통합 활용 전략**<br>1. **Funnel로 문제 발견 → A/B Test로 해법 검증의 연쇄 적용**: Funnel Analysis에서 이탈이 큰 단계를 식별한 뒤, 해당 단계 개선안을 A/B Test로 검증하는 순차적 워크플로우를 표준 프로세스로 정착.<br>2. **Cohort로 장기 효과의 착시 방지**: 단기 지표(가입자 수 등)만 보면 놓치는 리텐션 붕괴를 Cohort Analysis로 상시 모니터링하여 지속가능한 성장(Sustainable Growth) 여부를 판별.<br>3. **VDT를 전사 OKR과 연계**: Value Driver Tree로 분해한 하위 동인 지표를 팀별 OKR의 Key Result로 배정하여, 개별 팀의 실험(Funnel/Cohort/A-B Test 결과)이 전사 핵심지표 개선으로 이어지도록 연결. |
