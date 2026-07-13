---
title: "BCP·BIA와 재해복구시스템(DRS) 체계"
date: 2026-07-12T15:23:43+09:00
tags: ["정보전략", "IT경영", "BCP", "DRS", "RTO", "RPO", "BIA", "서브노트"]
draft: false
---

# BCP·BIA와 재해복구시스템(DRS) 체계 서브노트

> **두음 머리에 박기 🧠**
> - **미·핫·웜·콜** (DRS 4대 유형: **미**러사이트 ➔ **핫**사이트 ➔ **웜**사이트 ➔ **콜**드사이트, RTO/RPO/비용 순 감소)
> - **알·티·엠·비** (BCP 4대 핵심지표: **R**TO 복구시간, **R**PO 복구시점, **M**TPD 최대허용중단, M**B**CO 최소연속성목표)
> - **최·우·일** (공공 정보시스템 3등급: **최**우선(1등급) → **우**선(2등급) → **일**반(3등급))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **사업연속성계획(BCP, Business Continuity Planning), 사업영향분석(BIA), 재해복구시스템(DRS)** |
| **정의** | BCP는 재해·재난 발생 시에도 핵심 비즈니스 기능이 중단되지 않거나 최소 시간 내 정상 수준으로 복구되도록 사전에 수립하는 예방·대응·복구 통합 계획(ISO 22301)이며, BIA는 그 앞단에서 업무 중단의 영향을 정량·정성 분석해 MTPD·MBCO 등 복구 목표를 도출하는 절차이고, DRS는 RTO/RPO 목표를 실제로 구현하는 기술적 복구 체계이다 |
| **키워드** | ISO 22301, RTO/RPO, MTPD/MBCO, DRS 4유형(미러/핫/웜/콜드), 행정기관 정보시스템 안정성 고시 |
| **개념도** | `[ BCP 거버넌스 ] ➔ [ BIA 분석 ] ──MTPD/MBCO/RTO/RPO 도출──➔ [ 복구전략 수립 ] ➔ [ DRS 구축(미·핫·웜·콜) ] ➔ [ 훈련·개선(PDCA) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 공공 정보시스템 등급(최·우·일) ] ──➔ [ 등급별 RTO 차등: 1등급 4h(미러) / 2등급 24h(핫·웜) / 3등급(콜드) ]` |
| **구성요소** | 1. **BCP 프레임워크**: 거버넌스(정책·조직)-분석(BIA/RA)-전략/계획(자원 확보)-실행/검증(훈련·감사)의 ISO 22301 기반 PDCA 구조<br>2. **BIA 핵심 도출사항**: 핵심업무 우선순위(Tier 1~3), MTPD(최대허용중단기간), RTO/RPO, MBCO(최소사업연속성목표), 자원 요구사항<br>3. **BCP 6대 핵심지표**: RTO(목표복구시간, 시스템관점), RPO(목표복구시점, 데이터관점), MTPD(최대허용중단기간, 사업존속관점), MBCO(최소사업연속성목표, 서비스품질관점), RCO(Recovery Capacity Objective, 자원관점), RSO(Recovery Scope Objective, 범위관점)<br>4. **DRS 4대 유형**: Mirror Site(실시간 동기화, RTO 수분·RPO 0에 근접, 비용 매우높음), Hot Site(준실시간 복제, RTO 수시간, 비용 높음), Warm Site(주기적 백업, RTO 수일, 비용 중간), Cold Site(최소설비, RTO 수주, 비용 낮음)<br>5. **DRS 구축 핵심 고려사항**: 데이터 복제방식(동기/비동기), 지리적 이격거리, 네트워크 이중화, 전환 자동화 수준, 데이터 정합성 검증, 인력/거버넌스, 비용 최적화(Tiering)<br>6. **공공 정보시스템 등급별 DR 기준(행정기관 정보시스템 안정성 고시)**: 1등급(국가안전·국민생명 직결, RTO 4시간, Mirror Site 수준) / 2등급(대국민 서비스, RTO 24시간, Hot/Warm Site 수준) / 3등급(내부 행정지원, 기관장 재량, Cold Site 수준) |
| **비교** | **MTPD (최대허용중단기간)**<br>- 관점: 사업 존속(경영) 관점<br>- 의미: "언제까지는 반드시 복구해야 하는가"의 상한선<br><br>**MBCO (최소사업연속성목표)**<br>- 관점: 서비스 품질 관점<br>- 의미: "최악의 상황에서도 지켜야 할 최소 서비스 라인"<br><br>**RTO (목표복구시간)**<br>- 관점: 시스템/서비스 관점, "얼마나 빨리 복구할 것인가"<br><br>**RPO (목표복구시점)**<br>- 관점: 데이터 관점, "얼마나 최근 데이터까지 복구할 것인가" |
| **차별화** | **레거시·클라우드 혼재 환경에서의 DR 등급별 투자 최적화 전략**<br>1. **업무 등급별 차등 DR 투자(Tiering)**: 모든 시스템에 동일한 Mirror Site 수준을 적용하면 과잉투자이므로, BIA로 도출한 업무 등급(Tier 1~3)에 따라 1등급은 Mirror/Hot, 3등급은 Warm/Cold로 차등 구축하여 투자 대비 리스크 관리 효율 극대화.<br>2. **클라우드 리전 활용 DR 비용 절감**: 온프레미스 Cold Site 대비 클라우드 멀티 리전 백업·오토스케일링을 활용하면 평시 유휴 비용 없이 재해 시에만 리소스를 확장하는 Pilot Light 방식으로 DR 비용을 절감.<br>3. **RTO/RPO와 공공 등급 기준의 연계 검증**: 공공기관은 정보시스템 안정성 고시의 등급별 RTO 기준(4h/24h)을 먼저 확정한 뒤 그에 맞는 DRS 유형을 역산하여, 법정 기준 미달로 인한 감사 지적 리스크를 사전 차단. |
