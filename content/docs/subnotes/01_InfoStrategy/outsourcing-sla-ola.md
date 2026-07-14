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
| **정의** | IT아웃소싱: IT기능 전부/일부 외부전문업체 위탁 경영전략 / SLA: 발주기관↔수행업체 서비스수준·품질 합의 대외계약 / OLA: SLA 이행 위한 제공자 내부조직간(협력업체간) 대내 운영협약 |
| **키워드** | 총괄/선택적/멀티소싱, SLA vs OLA, Penalty/Incentive, SIP, Annual Reset, Lock-in |
| **개념도** | `[ 발주기관 ] ──SLA(대외 계약)──➔ [ 수행업체(전체) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ OLA(대내 협약)로 세분화`<br>`[ 네트워크팀 ] ⇄ [ 개발팀 ] ⇄ [ 운영팀 ]  ── 내부 R&R 이행 ──➔ [ SLA 목표 달성 ]`<br>`               │`<br>`               ▼ 성과 미달/초과 시`<br>`[ Penalty 차감 / Incentive 지급 / SIP 발동 / Annual Reset ]` |
| **구성요소** | 1. **아웃소싱 5대 유형(총·선·멀·조·비)**: 총괄(단일업체 전체위탁, Lock-in 위험), 선택적(부분위탁, 유연성 높음), 멀티소싱/컨소시엄(기능별 분산위탁, 리스크분산), 공동경영형(Joint Venture, 합작법인), BPO(업무프로세스 자체위탁)<br>2. **SLA vs OLA**: SLA(고객↔제공자 대외계약, 가용성·응답시간·페널티조항), OLA(제공자 내부조직간 대내협약, 예: 네트워크팀 장애복구 목표시간)<br>3. **성과관리 체계(페·인·시·애)**: Penalty(목표미달시 계약금액 차감), Incentive(목표초과시 추가지급), SIP(저성과 지속시 개선계획 의무화), Annual Reset(연단위 SLA 목표치 재설정) |
| **비교** | **SLA**<br>- 체결주체: 고객↔서비스제공자(대외)<br>- 목적: 서비스수준 계약적 보장<br>- 위반시: 계약위반, Penalty 적용<br><br>**OLA**<br>- 체결주체: 서비스제공자 내부조직간(대내)<br>- 목적: SLA 이행 위한 내부 역할·책임 분담<br>- 위반시: 내부 성과평가·조직책임 이슈 |
| **차별화** | **다중 아웃소싱(Multi-sourcing) SLA 통합관리 전략**<br>1. **OLA 체인의 SLA 역산설계**: 최종 SLA목표(예: 가용성99.9%) 확정 후 → 내부조직별(네트워크·개발·운영) OLA 목표치 역산 → 개별목표 합=SLA 충족 설계<br>2. **멀티소싱 SLA 책임경계 명확화**: 여러업체 공존구조 → 장애시 책임소재 분쟁방지 위해 업체간 인터페이스지점 SLA 별도명문화(예: A업체 산출물 B업체 인수시점)<br>3. **SIP 발동기준 객관화**: Penalty만으론 근본개선 한계 → 특정지표 N개월 연속미달시 SIP 자동의무화 트리거 계약명시 |
