---
title: "OPC UA 산업용 통신 표준"
date: 2026-07-11T11:38:09+09:00
tags: ["최신기술", "IoT", "스마트팩토리", "OPC-UA", "IIoT", "서브노트"]
draft: false
---

# OPC UA 산업용 통신 표준 서브노트

> **두음 머리에 박기 🧠**
> - **디·티** (OPC 진화 2단계: 기존 OPC=**디**COM 기반(Windows전용) → OPC UA=**티**CP/IP 기반(크로스플랫폼))
> - **노·참·타** (OPC UA 정보모델 3대 구성: **노**드(Node), **참**조(Reference), **타**입시스템 — 객체지향 데이터 구조)
> - **P·S·M·E** (OPC UA 스마트팩토리 수직통합 4계층: **P**LC → **S**CADA → **M**ES → **E**RP, ISA-95 모델)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **OPC UA (Open Platform Communications Unified Architecture) — IEC 62541 산업 자동화 통신 표준** |
| **정의** | Microsoft DCOM 기반의 기존 OPC의 Windows 의존성·보안 취약점을 극복한, TCP/IP 기반 플랫폼·벤더 중립적 차세대 산업 자동화 통신 프로토콜(IEC 62541) |
| **키워드** | IEC 62541, X.509 인증서/TLS, 통합 정보모델, Pub/Sub(MQTT/AMQP), TSN(Time-Sensitive Networking), ISA-95 |
| **개념도** | **[ OPC UA 스마트팩토리 수직·수평 통합 ]**<br>`[ERP] ↕ [MES] ↕ [SCADA] ↕ [PLC/센서] — OPC UA로 수직 통합(ISA-95)`<br>`[PLC1] ↔ OPC UA ↔ [PLC2] — 수평 통합(동일 계층 기기 간)`<br><br>**[ OPC Classic → OPC UA 전환 배경 ]**<br>`(기존) DCOM 기반 → Windows 전용, 방화벽 통과 어려움, 보안 취약`<br>`(전환) TCP/IP+HTTPS → 크로스플랫폼(Windows/Linux/임베디드), X.509+TLS 보안, 인터넷·방화벽 통과 가능` |
| **구성요소** | 1. **정보 모델**: 노드(Node)·참조(Reference)·타입시스템으로 구성된 객체지향(OO) 데이터 구조, DA/HDA/A&E를 통합<br>2. **전송 방식**: OPC UA TCP(바이너리), HTTPS(텍스트), Pub/Sub(MQTT/AMQP, v1.04+)<br>3. **TSN(Time-Sensitive Networking)**: 이더넷 기반 실시간 제어를 위한 OPC UA over TSN<br>4. **보안**: X.509 인증서 기반 인증, TLS 암호화, 메시지 서명 |
| **비교** | **OPC Classic**<br>- 기반기술: DCOM(Windows 전용), 보안: DCOM 기본 보안(취약)<br>- 데이터모델: DA/HDA/A&E 각각 분리, 표준: 비공개<br><br>**OPC UA**<br>- 기반기술: TCP/IP·HTTPS(크로스플랫폼), 보안: X.509/TLS/서명<br>- 데이터모델: 통합 정보모델(OO 방식), 표준: IEC 62541(국제표준) |
| **차별화** | **스마트팩토리 실시간 통합 및 디지털 트윈 연계 전략**<br>1. **수직·수평 통합 아키텍처 표준화**: ISA-95 참조모델에 따라 PLC-SCADA-MES-ERP 전 계층을 OPC UA 통합 정보모델로 연결해 이기종 벤더 장비 간 데이터 상호운용성 확보.<br>2. **TSN 결합 실시간 제어 고도화**: 기존 이더넷의 지터·지연 문제를 OPC UA over TSN으로 해결해 로봇 제어·컨베이어 동기화 등 밀리초 단위 정밀 제어가 필요한 공정에 적용.<br>3. **디지털 트윈 실시간 데이터 파이프라인**: 현장 PLC/센서의 OPC UA 노드 데이터를 Pub/Sub(MQTT)로 클라우드 디지털 트윈에 실시간 반영해 원격 모니터링과 시뮬레이션 기반 예지보전 구현. |
