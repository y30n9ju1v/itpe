---
title: "스타트업 데이터 분석기법: Funnel·Cohort·A/B Test·VDT"
date: 2026-07-12T15:23:43+09:00
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
| **정의** | 제한된 자원 하 사용자 행동데이터 기반 → 성과 정량측정·개선의사결정 방법론 총칭: 이탈지점 진단 Funnel + 리텐션 추적 Cohort + 인과관계 검증 A/B Test + 지표 구조분해 VDT |
| **키워드** | 이탈률(Drop-off), 리텐션(Retention), 통계적 유의성, 지표 분해(Tree Decomposition) |
| **개념도** | `[ 사용자 유입 ] ➔ [ Funnel: 단계별 이탈지점 진단 ] ➔ [ Cohort: 가입시점별 리텐션 추적 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ A/B Test: 개선 가설의 인과관계 검증 ] ➔ [ VDT: 핵심 경영지표를 하위 동인으로 구조 분해 ]` |
| **구성요소** | 1. **Funnel Analysis**: 사용자 여정 단계별 분리 → 이탈률(Drop-off) 진단, 초기 문제진단 활용<br>2. **Cohort Analysis**: 공통특성 집단(코호트)별 → 시간경과 리텐션 변화 종단추적, 개선효과 검증 (예: 1월1주 코호트 W1 100%→W4 22%)<br>3. **A/B Test**: 2개 이상 버전 무작위배정 → 지표 가설 인과관계 통계적 검증<br>4. **Value Driver Tree(VDT)**: 핵심지표(예: 매출) → 하위 동인지표 MECE 구조분해, 우선순위 도출 |
| **비교** | **Funnel Analysis**<br>- 시간축: 특정 시점 스냅샷<br>- 활용시점: 초기 문제 진단<br><br>**Cohort Analysis**<br>- 시간축: 시간 경과(종단)<br>- 활용시점: 제품 개선 효과 검증<br><br>**A/B Test**<br>- 시간축: 실험 기간<br>- 활용시점: 특정 기능/UX 변경 결정<br><br>**Value Driver Tree**<br>- 시간축: 정적 구조 분석<br>- 활용시점: 경영 지표 우선순위 도출 |
| **차별화** | **스타트업 그로스(Growth) 단계별 4대 기법 통합 전략**<br>1. **Funnel 발견 → A/B Test 검증 연쇄**: 이탈 큰 단계 식별 후 개선안 A/B Test 검증 → 표준 워크플로우화<br>2. **Cohort로 장기효과 착시방지**: 단기지표만으론 놓치는 리텐션붕괴 → 상시모니터링 → 지속가능성장 판별<br>3. **VDT를 OKR과 연계**: 하위 동인지표 → 팀별 OKR Key Result 배정 → 실험결과 전사지표 개선 연결 |
