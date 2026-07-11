---
title: "EVM 프로젝트 관리"
date: 2026-07-11T11:16:54+09:00
tags: ["정보전략", "프로젝트관리", "EVM", "PV", "EV", "AC", "EAC", "AgileEVM", "서브노트"]
draft: false
---

# EVM 프로젝트 관리 서브노트

> **두음 머리에 박기 🧠**
> - **피·이·에이** (EVM 3대 실측 지표: **P**V 계획가치, **E**V 획득가치, **A**C 실제원가)
> - **에스브이 이브이피브이** (일정편차 공식: $SV = EV - PV$)
> - **씨브이 이브이에이씨** (비용편차 공식: $CV = EV - AC$)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **획득가치관리 (EVM, Earned Value Management)** |
| **정의** | 프로젝트의 일정 계획(PV)과 실제 비용(AC)을 수행 성과(EV)와 비교하여, 현재의 **일정/비용 편차(SV/CV)를 정량 진단하고 최종 완수 시점의 예측값(EAC)을 도출하는 프로젝트 통제 기술** |
| **키워드** | PV/EV/AC, SV/CV, SPI/CPI, 완수시점예측 (EAC / ETC / TCPI), S-Curve, Agile EVM |
| **개념도** | **[ EVM 분석 S-Curve 그래프 ]**<br>누적 비용 (Cost)<br>&nbsp;&nbsp;&nbsp;&nbsp;`▲`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ BAC ] (총 예산)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`... ── [ PV (계획) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`.. ── [ AC (실제 비용) ]`  ➔ (예산 초과 상태)<br>&nbsp;&nbsp;&nbsp;&nbsp;`│`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`.. ── [ EV (획득 가치) ]`  ➔ (일정 지연 상태)<br>&nbsp;&nbsp;&nbsp;&nbsp;`│`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`..`<br>&nbsp;&nbsp;&nbsp;&nbsp;`└─────────────────────────┬───────────────────────────➔ 시간 (Time)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 현재 시점 (Time Now) ]` |
| **구성요소** | 1. **PV (Planned Value)**: 계획일정 대비 승인된 예산의 가치 (계획치)<br>2. **EV (Earned Value)**: 현재 완료된 작업의 가치. $총예산(BAC) \times 실제진척률(\%)$<br>3. **AC (Actual Cost)**: 완료된 작업을 위해 실제로 소요된 총 비용 (실제 지출)<br>4. **SPI / CPI**: 일정수행지수($EV/PV$) 및 비용수행지수($EV/AC$). 1.0 미만 시 부정적 의미<br>5. **EAC (Estimate At Completion)**: 완수시점 추정치. 현재 효율 유지 시 $BAC/CPI$, 계획복구 시 $AC+(BAC-EV)$ |
| **비교** | **일정 편차 및 효율 (SV / SPI)**<br>- **공식**: $SV = EV - PV$ / $SPI = EV / PV$<br>- **판단**: $SV > 0, SPI > 1.0 \rightarrow$ 일정 준수 및 조기 완수<br><br>**비용 편차 및 효율 (CV / CPI)**<br>- **공식**: $CV = EV - AC$ / $CPI = EV / AC$<br>- **판단**: $CV > 0, CPI > 1.0 \rightarrow$ 예산 범위 내 집행 및 비용 절감 |
| **차별화** | **무형의 SW 개발 환경에서의 진척율 측정 한계 극복 및 Agile EVM 설계 방안**<br>1. **정량적 진척율 측정 규칙 수립**: 주관적 감에 의존한 진척 보고를 방지하기 위해, 작업을 잘게 쪼개어 시작 시 50%, 완료 검수 시 50%의 가치를 인정하는 **50/50 법칙** 또는 이정표 기반 **마일스톤 산정법** 강제.<br>2. **스토리 포인트(Story Point) 기반 Agile EVM 구축**: 폭포수형 WBS 대신 애자일 스프린트에서 계획된 총 스토리 포인트(Planned Points)를 PV, 릴리즈 완료 후 완료 정의(DoD)를 통과해 완료된 스토리 포인트(Velocity)를 EV로 환산하여 매 스프린트마다 정량 통제.<br>3. **TCPI(잔여성과지수) 연계를 통한 현실적 목표 관리**: 잔여 예산 대비 목표 달성율인 $TCPI = \frac{BAC - EV}{BAC - AC}$ (또는 $EAC - AC$) 값이 1.10 이상 초과 시, 추가 예산 확보(EAC 승인) 또는 범위 축소를 위한 변경 통제(CCB) 긴급 가동 가이드라인 적용. |
