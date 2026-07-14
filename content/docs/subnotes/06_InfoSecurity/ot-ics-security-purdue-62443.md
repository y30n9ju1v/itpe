---
title: "OT/ICS 보안 — 파듀(Purdue) 모델과 ISA/IEC 62443"
date: 2026-07-12T15:25:55+09:00
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
| **정의** | ICS 네트워크 계층화 → IT·OT 보안경계 정의하는 **파듀 모델** + IACS 사이버보안을 정책·시스템·컴포넌트 계층으로 체계화한 **ISA/IEC 62443** 결합 OT/ICS 보안 아키텍처 |
| **키워드** | Purdue Model, ISA/IEC 62443, Zone/Conduit, Security Level(SL), DMZ, 데이터 다이오드, SCADA/PLC |
| **개념도** | **[ 파듀 모델 계층 ↔ 62443 Zone/Conduit 대응 ]**<br>`Level 5 Enterprise Zone (SL1) ── IT 네트워크`<br>&nbsp;&nbsp;&nbsp;&nbsp;↕ DMZ / Conduit (SL2)<br>`Level 4 Site Business Planning (ERP, MES)`<br>`Level 3 Site Manufacturing Operations (MES, 히스토리안)`<br>&nbsp;&nbsp;&nbsp;&nbsp;↕ 방화벽·단방향 게이트웨이 / Conduit (SL3)<br>`Level 2 Area Supervisory Control (SCADA, HMI) — Control Zone`<br>`Level 1 Basic Control (PLC, RTU, DCS)`<br>`Level 0 Physical Process (센서, 액추에이터) — Safety Zone (SL3~4)` |
| **구성요소** | 1. **파듀 모델 6계층**: L5 기업망 → L4 사업계획(ERP·MES) → L3 운영제어(MES·히스토리안) → L2 감시제어(SCADA·HMI) → L1 기본제어(PLC·RTU) → L0 물리공정(센서·액추에이터) — 계층경계에 DMZ·방화벽·단방향 게이트웨이 배치<br>2. **ISA/IEC 62443 표준 구성**: 1.x(일반, 용어·개념·보안모델) / 2.x(정책·절차, Asset Owner 보안관리) / 3.x(시스템, Zone/Conduit 설계·위험평가) / 4.x(컴포넌트, 제품 보안요구사항·SDL)<br>3. **Zone/Conduit 모델**: Zone=동일 보안요구사항 자산그룹(Enterprise/Control/Safety Zone), Conduit=Zone 간 데이터흐름 통제 채널(방화벽, 데이터다이오드)<br>4. **보안레벨(SL) 1~4**: Zone별 목표SL(Target SL) 설정 → 방어 대상 위협수준 결정 |
| **비교** | **IT 보안**<br>- CIA 중 기밀성 우선<br>- 패치·업데이트 주기 빠름, 재기동 허용<br>- 표준 IT 보안솔루션(EDR, 백신) 적용 가능<br><br>**OT/ICS 보안**<br>- CIA 중 가용성 최우선(공정중단=인명피해 가능)<br>- PLC·RTU 수명 15~30년, 레거시 패치 불가 → 네트워크 레벨 보호(가상패치) 필요<br>- IT 솔루션 직접적용 금지, Claroty·Dragos 등 OT 전용 가시성 솔루션 사용 |
| **차별화** | **스마트팩토리·국가기반시설 OT 보안 적용 실무 로드맵**<br>1. **단방향 데이터 다이오드 배치**: 공정데이터 클라우드(L5) 전송 시 L3-L4 경계에 설치 → IT방향 단방향 전송, OT의 인터넷 직접노출 차단<br>2. **OT 전용 가시성 솔루션 연계**: Dragos·Claroty 등 OT 영역 배치 → 제어망 이상패턴 실시간 탐지, Zone/Conduit 경계 비정상 트래픽 모니터링<br>3. **공급망·벤더 보안 관리**: 국가기반시설(발전소·정수장) 무중단 운영 필수 → ISA/IEC 62443-2-4 기준 벤더 보안요구사항 계약 명시 + 재기동 없는 가상패치(Virtual Patch) 방식 네트워크 IPS 적용<br>4. **Safety Zone 물리적 격리**: SL4 요구 안전계장시스템(SIS) 등은 물리적 에어갭 유지 → 국가수준 APT 위협까지 방어 |
