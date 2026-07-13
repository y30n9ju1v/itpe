---
title: "IT 아웃소싱 유형과 SLA/OLA 계약관리"
date: 2026-07-12T15:23:43+09:00
tags: ["정보전략", "IT경영", "아웃소싱", "SLA", "OLA", "Penalty", "서브노트"]
draft: false
---

# IT 아웃소싱 유형과 SLA/OLA 계약관리 서브노트

> **두음 머리에 박기 🧠**
> - **총·선·멀·조·비** (아웃소싱 5대 유형: **총**괄, **선**택적, **멀**티소싱, **조**인트벤처(공동경영형), **비**핵심업무위탁(BPO))
> - **페·인·시·애** (SLA 성과관리 4요소: **페**널티, **인**센티브, **S**IP(서비스개선계획), **애**뉴얼 리셋)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **IT 아웃소싱 유형 및 SLA(Service Level Agreement)·OLA(Operational Level Agreement) 계약관리** |
| **정의** | IT 아웃소싱은 IT 기능의 전부 또는 일부를 외부 전문업체에 위탁하는 경영 전략이며, SLA는 발주기관(고객)과 수행업체 간 서비스 수준·품질에 대해 합의한 대외적 계약, OLA는 그 SLA를 이행하기 위해 서비스 제공자 내부 조직 간(또는 협력업체 간) 맺는 대내적 운영 협약이다 |
| **키워드** | 총괄/선택적/멀티소싱, SLA vs OLA, Penalty/Incentive, SIP, Annual Reset, Lock-in |
| **개념도** | `[ 발주기관 ] ──SLA(대외 계약)──➔ [ 수행업체(전체) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ OLA(대내 협약)로 세분화`<br>`[ 네트워크팀 ] ⇄ [ 개발팀 ] ⇄ [ 운영팀 ]  ── 내부 R&R 이행 ──➔ [ SLA 목표 달성 ]`<br>`               │`<br>`               ▼ 성과 미달/초과 시`<br>`[ Penalty 차감 / Incentive 지급 / SIP 발동 / Annual Reset ]` |
| **구성요소** | 1. **아웃소싱 5대 유형(총·선·멀·조·비)**: 총괄 아웃소싱(단일업체 전체위탁, Lock-in 위험), 선택적 아웃소싱(부분위탁, 유연성 높음), 멀티소싱/컨소시엄(기능별 분산위탁, 리스크 분산), 공동경영형(Joint Venture, 합작법인), BPO(업무프로세스 자체 위탁)<br>2. **SLA vs OLA**: SLA(고객↔서비스제공자 대외 계약, 가용성·응답시간·페널티 조항), OLA(제공자 내부조직 간 대내 협약, 예: 네트워크팀 장애복구 목표시간)<br>3. **성과관리 체계(페·인·시·애)**: Penalty(목표 미달 시 계약금액 차감), Incentive(목표 초과 시 추가 지급), SIP(Service Improvement Plan, 저성과 지속 시 개선계획 의무화), Annual Reset(연 단위로 SLA 목표치 재설정) |
| **비교** | **SLA**<br>- 체결주체: 고객 ↔ 서비스 제공자(대외)<br>- 목적: 서비스 수준의 계약적 보장<br>- 위반 시: 계약 위반, Penalty 적용<br><br>**OLA**<br>- 체결주체: 서비스 제공자 내부 조직 간(대내)<br>- 목적: SLA 이행을 위한 내부 역할·책임 분담<br>- 위반 시: 내부 성과평가·조직 책임 이슈 |
| **차별화** | **다중 아웃소싱(Multi-sourcing) 환경의 SLA 통합 관리 전략**<br>1. **OLA 체인의 SLA 역산 설계**: 최종 SLA 목표(예: 가용성 99.9%)를 먼저 확정한 뒤, 이를 달성하기 위한 내부 조직별(네트워크·개발·운영) OLA 목표치를 역산하여 개별 조직 목표의 합이 SLA를 충족하도록 설계.<br>2. **멀티소싱 환경의 SLA 책임 경계 명확화**: 여러 업체가 공존하는 멀티소싱 구조에서는 장애 발생 시 책임소재 분쟁을 방지하기 위해 업체 간 인터페이스 지점의 SLA(예: A업체 산출물을 B업체가 인수하는 시점)를 별도로 명문화.<br>3. **SIP 발동 기준의 객관화**: Penalty만으로는 근본적 서비스 개선이 어려우므로, 특정 지표가 N개월 연속 미달 시 자동으로 SIP를 의무화하는 트리거 조건을 계약서에 명시해 실질적 품질 개선을 유도. |
