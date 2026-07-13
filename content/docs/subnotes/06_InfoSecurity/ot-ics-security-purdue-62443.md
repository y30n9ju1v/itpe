---
title: "OT/ICS 보안 — 파듀(Purdue) 모델과 ISA/IEC 62443"
date: 2026-07-13T15:25:55+09:00
tags: ["정보보안", "파듀모델", "ISA-IEC62443", "OT보안", "ICS보안", "SCADA", "서브노트"]
draft: false
---

# OT/ICS 보안 — 파듀(Purdue) 모델과 ISA/IEC 62443 서브노트

> **두음 머리에 박기 🧠**
> - **기·사·운·감·기·물** (파듀 모델 6계층 Level 5~0: **기**업망 Enterprise, **사**업 계획 Business Planning, **운**영 제어 Operations Control, **감**시 제어 Supervisory Control, **기**본 제어 Basic Control, **물**리 공정 Physical Process)
> - **일·정·시·컴** (ISA/IEC 62443 4대 표준 시리즈: **일**반 General 62443-1.x, **정**책·절차 62443-2.x, **시**스템 62443-3.x, **컴**포넌트 62443-4.x)
> - **비·의·정·국** (보안 레벨 SL 1~4 방어 대상: SL1 **비**의도적 위반, SL2 **의**도적 단순 공격, SL3 **정**교한 공격, SL4 **국**가 수준 APT)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **파듀(Purdue) 모델과 ISA/IEC 62443 (ICS/OT 보안 참조 모델 및 국제 표준)** |
| **정의** | 산업제어시스템(ICS)의 네트워크를 계층화하여 IT·OT 보안 경계를 정의하는 **파듀 모델**과, IACS(산업자동화제어시스템) 사이버 보안을 정책·시스템·컴포넌트 계층으로 체계화한 국제 표준인 **ISA/IEC 62443**을 결합한 OT/ICS 보안 아키텍처 |
| **키워드** | Purdue Model, ISA/IEC 62443, Zone/Conduit, Security Level(SL), DMZ, 데이터 다이오드, SCADA/PLC |
| **개념도** | **[ 파듀 모델 계층 ↔ 62443 Zone/Conduit 대응 ]**<br>`Level 5 Enterprise Zone (SL1) ── IT 네트워크`<br>&nbsp;&nbsp;&nbsp;&nbsp;↕ DMZ / Conduit (SL2)<br>`Level 4 Site Business Planning (ERP, MES)`<br>`Level 3 Site Manufacturing Operations (MES, 히스토리안)`<br>&nbsp;&nbsp;&nbsp;&nbsp;↕ 방화벽·단방향 게이트웨이 / Conduit (SL3)<br>`Level 2 Area Supervisory Control (SCADA, HMI) — Control Zone`<br>`Level 1 Basic Control (PLC, RTU, DCS)`<br>`Level 0 Physical Process (센서, 액추에이터) — Safety Zone (SL3~4)` |
| **구성요소** | 1. **파듀 모델 6계층 (Purdue University + ISA-95 기반)**: L5 기업망 → L4 사업계획(ERP·MES) → L3 운영제어(MES·히스토리안) → L2 감시제어(SCADA·HMI) → L1 기본제어(PLC·RTU) → L0 물리공정(센서·액추에이터), 각 계층 경계에 DMZ·방화벽·단방향 게이트웨이 배치<br>2. **ISA/IEC 62443 표준 구성**: 62443-1.x(일반, 용어·개념·보안모델) / 62443-2.x(정책·절차, Asset Owner 보안관리) / 62443-3.x(시스템, Zone/Conduit 설계·위험평가) / 62443-4.x(컴포넌트, 제품 보안요구사항·SDL)<br>3. **Zone/Conduit 모델**: **Zone**은 동일 보안 요구사항을 갖는 논리적·물리적 자산 그룹(Enterprise/Control/Safety Zone), **Conduit**은 Zone 간 데이터 흐름을 통제하는 통신 채널(방화벽, 데이터 다이오드)<br>4. **보안 레벨(SL) 1~4**: 각 Zone별 목표 SL(Target SL)을 설정해 방어 대상 위협 수준을 결정 |
| **비교** | **IT 보안**<br>- CIA 중 기밀성(Confidentiality) 우선<br>- 패치·업데이트 주기 빠름, 재기동 허용<br>- 표준 IT 보안 솔루션(EDR, 백신) 적용 가능<br><br>**OT/ICS 보안**<br>- CIA 중 가용성(Availability) 최우선 (공정 중단 = 인명 피해 가능)<br>- PLC·RTU 수명 15~30년, 레거시 패치 불가 → 네트워크 레벨 보호(가상 패치) 필요<br>- IT 보안 솔루션 그대로 적용 금지, Claroty·Dragos 등 OT 전용 가시성 솔루션 사용 |
| **차별화** | **스마트팩토리·국가기반시설 OT 보안 적용 실무 로드맵**<br>1. **단방향 데이터 다이오드 배치**: 스마트팩토리에서 공정 데이터를 클라우드(L5)로 전송할 때 L3-L4 경계에 데이터 다이오드를 설치해 데이터를 IT 방향으로만 전송, OT가 인터넷에 직접 노출되지 않도록 차단<br>2. **OT 전용 가시성 솔루션 연계**: Dragos·Claroty 등을 OT 영역에 배치해 제어망 이상 패턴을 실시간 탐지하고 Zone/Conduit 경계에서의 비정상 트래픽을 모니터링<br>3. **공급망·벤더 보안 관리**: 국가기반시설(발전소·정수장)은 무중단 운영이 필수이므로 ISA/IEC 62443-2-4 기준으로 유지보수 벤더의 보안 요구사항을 계약에 명시하고, 시스템 재기동 없는 가상 패치(Virtual Patch) 방식의 네트워크 IPS 적용<br>4. **Safety Zone 물리적 격리**: SL4가 요구되는 안전계장시스템(SIS) 등 Safety Zone은 물리적 에어갭(Air Gap)을 유지하여 국가 수준 APT 위협까지 방어 |
