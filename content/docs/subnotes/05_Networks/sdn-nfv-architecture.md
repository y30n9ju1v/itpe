---
title: "소프트웨어 정의 네트워크 SDN/NFV"
date: 2026-07-11T11:26:36+09:00
tags: ["네트워크", "SDN", "NFV", "OpenFlow", "MANO", "VNF", "네트워크슬라이싱", "서브노트"]
draft: false
---

# 소프트웨어 정의 네트워크 SDN/NFV 서브노트

> **두음 머리에 박기 🧠**
> - **컨·데·앱** (SDN의 3대 계층 구조: 중앙 제어 **컨**트롤러 Control Layer, 물리 스위치 **데**이터 Data Layer, 정책 관리 **앱** Application Layer)
> - **노·사** (SDN 통신 인터페이스: 상위 앱 연동 **노**스바운드 Northbound API, 하위 스위치 제어 **사**우스바운드 Southbound API)
> - **브·엔·매** (ETSI 표준 NFV 아키텍처 3대 축: 가상화된 네트워크 소프트웨어 기능 **V**NF, 물리 및 하이퍼바이저 인프라 **N**FVI, 통합 관리 조율 기구 **M**ANO)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **소프트웨어 정의 네트워크 (SDN) 및 네트워크 기능 가상화 (NFV)** |
| **정의** | 제어부(Control)와 전송부(Data)를 분리해 소프트웨어로 유연하게 망을 통제하는 **SDN**과, 하드웨어 장비 기능들을 범용 x86 서버 가상머신(VNF)으로 구동하는 **NFV 기술** |
| **키워드** | Control/Data Plane 분리, OpenFlow, North/Southbound API, VNF, NFVI, MANO 오케스트레이션 |
| **개념도** | **[ SDN 및 NFV 융합 아키텍처 ]**<br>`[ Application / Business Policy ] ➔ 네트워크 정책 자연어 정의`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (Northbound API : RESTful)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ SDN Controller (Control Plane) ] ➔ 전체 토폴로지 집중 제어 및 경로 계산`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (Southbound API : OpenFlow 프로토콜)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ Data Plane (Data Forwarding) ] ◀─── (하이퍼바이저 제어) ─── [ NFV MANO (통합 관리) ]`<br>`(가상 스위치 / 라우터 물리 장치) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(VNF 가상 기능 배포 조율)` |
| **구성요소** | 1. **OpenFlow**: 표준 사우스바운드 규격 → 컨트롤러가 Flow Table 설정/갱신<br>2. **VNF**: 방화벽·LB·IMS 등 HW기능 → VM 소프트웨어 모듈화<br>3. **NFVI**: VNF 구동용 Hypervisor+범용HW → 물리 인프라 계층<br>4. **MANO**: 가상자원 모니터링 → VNF 동적 스케일아웃·라이프사이클 관리 |
| **비교** | **SDN**<br>- 목적: 라우팅 경로 중앙집중 제어·프로그래밍화<br>- 가치: 망관리 유연성, 병목 동적해소<br>- 기술: OpenFlow, North/Southbound API<br><br>**NFV**<br>- 목적: 전용 물리 어플라이언스 가상화<br>- 가치: CAPEX/OPEX 절감<br>- 기술: VNF, NFVI, MANO |
| **차별화** | **5G 코어 슬라이싱용 SDN/NFV 결합 및 IBN 응용**<br>1. **5G/6G 네트워크 슬라이싱**: 초저지연/초광대역 슬라이스 논리분할 → MANO 자원격리 할당 + SDN컨트롤러 SFC 경로 OpenFlow 동적통제<br>2. **IBN 진화**: 개별장비 설정 탈피 → "구간별 암호화·10ms이내" 등 Intent 입력 시 오케스트레이터 자동구성(Closed-Loop)<br>3. **가상화 보안대책**: Hypervisor 붕괴 취약점 대응 → MANO-SDN컨트롤러 간 mTLS 상호인증 + IDS VNF 상시배치 |
