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
| **정의** | BCP: 재해 시 핵심업무 무중단·최소시간 복구 예방·대응·복구 통합계획(ISO 22301) / BIA: 업무중단 영향 정량·정성분석 → MTPD·MBCO 등 복구목표 도출절차 / DRS: RTO/RPO 목표 구현 기술적 복구체계 |
| **키워드** | ISO 22301, RTO/RPO, MTPD/MBCO, DRS 4유형(미러/핫/웜/콜드), 행정기관 정보시스템 안정성 고시 |
| **개념도** | `[ BCP 거버넌스 ] ➔ [ BIA 분석 ] ──MTPD/MBCO/RTO/RPO 도출──➔ [ 복구전략 수립 ] ➔ [ DRS 구축(미·핫·웜·콜) ] ➔ [ 훈련·개선(PDCA) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 공공 정보시스템 등급(최·우·일) ] ──➔ [ 등급별 RTO 차등: 1등급 4h(미러) / 2등급 24h(핫·웜) / 3등급(콜드) ]` |
| **구성요소** | 1. **BCP 프레임워크**: 거버넌스(정책·조직)-분석(BIA/RA)-전략/계획(자원확보)-실행/검증(훈련·감사), ISO 22301 기반 PDCA 구조<br>2. **BIA 핵심 도출사항**: 핵심업무 우선순위(Tier1~3), MTPD(최대허용중단기간), RTO/RPO, MBCO(최소사업연속성목표), 자원요구사항<br>3. **BCP 6대 핵심지표**: RTO(목표복구시간, 시스템관점), RPO(목표복구시점, 데이터관점), MTPD(최대허용중단기간, 사업존속관점), MBCO(최소사업연속성목표, 서비스품질관점), RCO(자원관점), RSO(범위관점)<br>4. **DRS 4대 유형**: Mirror Site(실시간동기화, RTO 수분·RPO≈0, 비용최상) / Hot Site(준실시간복제, RTO 수시간, 비용상) / Warm Site(주기적백업, RTO 수일, 비용중) / Cold Site(최소설비, RTO 수주, 비용하)<br>5. **DRS 구축 핵심 고려사항**: 데이터복제방식(동기/비동기), 지리적 이격거리, 네트워크이중화, 전환자동화 수준, 데이터정합성검증, 인력/거버넌스, 비용최적화(Tiering)<br>6. **공공 정보시스템 등급별 DR 기준(행정기관 정보시스템 안정성 고시)**: 1등급(국가안전·국민생명 직결, RTO 4h, Mirror Site) / 2등급(대국민서비스, RTO 24h, Hot/Warm Site) / 3등급(내부행정지원, 기관장재량, Cold Site) |
| **비교** | **MTPD (최대허용중단기간)**<br>- 관점: 사업존속(경영) 관점<br>- 의미: 언제까지 반드시 복구해야 하는가의 상한선<br><br>**MBCO (최소사업연속성목표)**<br>- 관점: 서비스품질 관점<br>- 의미: 최악상황에서도 지켜야 할 최소 서비스라인<br><br>**RTO (목표복구시간)**<br>- 관점: 시스템/서비스 관점, 얼마나 빨리 복구할 것인가<br><br>**RPO (목표복구시점)**<br>- 관점: 데이터 관점, 얼마나 최근 데이터까지 복구할 것인가 |
| **차별화** | **레거시·클라우드 혼재환경 DR 등급별 투자최적화 전략**<br>1. **업무등급별 차등 DR 투자(Tiering)**: 전체 Mirror Site 적용 시 과잉투자 → BIA 업무등급(Tier1~3)별 1등급 Mirror/Hot, 3등급 Warm/Cold 차등구축, 투자대비 리스크관리 효율화<br>2. **클라우드 리전 활용 DR 비용절감**: 온프레미스 Cold Site 대비 멀티리전 백업·오토스케일링 → 재해 시만 확장하는 Pilot Light 방식으로 절감<br>3. **RTO/RPO-공공등급 기준 연계검증**: 안정성고시 등급별 RTO기준(4h/24h) 확정 → DRS유형 역산 → 법정기준 미달 감사지적 리스크 사전차단 |
