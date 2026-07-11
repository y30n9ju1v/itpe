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
| **구성요소** | 1. **OpenFlow**: SDN의 표준 사우스바운드 규격. 컨트롤러가 스위치의 흐름 테이블(Flow Table)을 설정/갱신<br>2. **VNF (Virtual Network Function)**: 방화벽, 로드밸런서, IMS 등 기존 가속 하드웨어의 기능을 VM 소프트웨어화한 모듈<br>3. **NFVI (NFV Infrastructure)**: VNF가 정상 구동되도록 가상화 계층(Hypervisor) 및 범용 하드웨어를 제공하는 물리 계층<br>4. **MANO (Management & Orchestration)**: 전체 가상 자원을 모니터링하고 VNF의 동적 스케일 아웃을 라이프사이클 관리 |
| **비교** | **SDN (Software Defined Networking)**<br>- **핵심 목적**: 패킷 라우팅 경로의 중앙 집중식 제어 및 프로그래밍화<br>- **비즈니스 가치**: 망 관리 유연성 확보, 패킷 병목 동적 해소<br>- **핵심 기술**: OpenFlow 프로토콜, 노스/사우스바운드 API<br><br>**NFV (Network Function Virtualization)**<br>- **핵심 목적**: 값비싼 전용 물리 네트워크 어플라이언스를 가상화<br>- **비즈니스 가치**: 장비 도입 비용(CAPEX) 및 전력/공간 유지비(OPEX) 절감<br>- **핵심 기술**: VNF, NFVI, MANO (Orchestration) |
| **차별화** | **5G 코어 슬라이싱 구현을 위한 SDN/NFV의 물리적 결합 및 의도 기반 네트워킹 (IBN) 응용**<br>1. **5G/6G 네트워크 슬라이싱 (Network Slicing)의 핵심 인프라 구현**: 단일 물리 망 상에서 자율주행용 초저지연 슬라이스와 멀티미디어용 초고대역폭 슬라이스를 논리 분할하기 위해, NFV MANO가 리소스를 격리 할당하고 SDN 컨트롤러가 슬라이스별 트래픽 전달 경로(SFC, Service Function Chaining)를 OpenFlow로 동적 통제.<br>2. **의도 기반 네트워킹 (IBN, Intent-Based Networking)으로의 진화**: 엔지니어가 개별 장비를 터미널로 설정하는 방식을 탈피하여, "이 서버에서 저 서버까지의 구간은 비대칭 암호화를 준수하고 10ms 이내로 통신할 것"과 같은 의도(Intent)를 입력하면 SDN/NFV 오케스트레이터가 하부 환경을 자동 구성(Closed-Loop)하도록 유도.<br>3. **네트워크 가상화 보안 대책**: 가상화 하이퍼바이저 붕괴 시 모든 네트워크 망이 통제 불능에 빠지는 취약점에 대응하여, MANO와 SDN 컨트롤러 간의 인증서 기반 mTLS 상호 인증 및 침입 탐지 가상 에이전트(VNF) 항시 배치. |
