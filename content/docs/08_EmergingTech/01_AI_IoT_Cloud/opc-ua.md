---
title: "OPC UA (Open Platform Communications Unified Architecture)"
date: 2026-05-09T07:56:10+09:00
tags: ["pecs", "최신기술", "IoT", "스마트팩토리", "OPC-UA", "산업프로토콜", "IIoT"]
draft: false
exam: "137회"
---

## 개요

OPC UA(Open Platform Communications Unified Architecture)는 IEC 62541 표준으로 정의된 산업 자동화 통신 프로토콜이다. 플랫폼·벤더 중립적이며 TCP/IP 기반으로 운용되어, 기존 OPC의 Windows 의존성과 DCOM 한계를 극복한 차세대 산업 통신 표준이다.

## 핵심 내용

### OPC UA 등장 배경

- 기존 OPC: Microsoft DCOM 기반 → Windows 전용, 방화벽 통과 어려움, 보안 취약
- Industry 4.0·스마트팩토리: 다양한 OS·플랫폼 간 수직(MES→ERP)·수평(PLC↔PLC) 통합 필요
- IoT 확산: 클라우드 연결, 모바일 접근 요구

### OPC vs OPC UA 비교

| 구분 | OPC Classic | OPC UA |
|------|------------|--------|
| **기반 기술** | DCOM (Windows 전용) | TCP/IP, HTTPS (크로스 플랫폼) |
| **보안** | DCOM 기본 보안 (취약) | X.509 인증서, TLS 암호화, 서명 |
| **데이터 모델** | DA/HDA/A&E 각각 분리 | 통합 정보 모델 (OO 방식) |
| **표준** | 비공개 | IEC 62541 (국제 표준) |
| **연결 방식** | 내부 네트워크 | 인터넷·방화벽 통과 가능 |
| **플랫폼** | Windows 전용 | Windows, Linux, 임베디드 MCU |

### OPC UA 주요 특징

- **정보 모델**: 노드(Node)·참조(Reference)·타입시스템으로 구성된 객체지향 데이터 구조
- **전송 방식**: OPC UA TCP(바이너리), HTTPS(텍스트), MQTT/AMQP 기반 Pub/Sub (v1.04+)
- **TSN(Time-Sensitive Networking)**: 이더넷 기반 실시간 제어 (OPC UA over TSN)

### OPC UA 활용 분야

- **스마트팩토리**: PLC↔SCADA↔MES↔ERP 수직 통합 (ISA-95 모델)
- **에너지**: 발전소·변전소 장비 원격 모니터링
- **자동차**: 로봇 제어기·컨베이어 간 데이터 교환
- **디지털 트윈**: 현장 장비 데이터를 실시간으로 디지털 트윈에 반영

## 출제 포인트

- OPC Classic(DCOM) 대비 OPC UA(TCP/IP) 전환 이유
- OPC UA의 보안(X.509, TLS), 크로스 플랫폼, 정보 모델 특징
- 스마트팩토리 수직 통합에서의 역할

## 연관 개념

- [스마트팩토리 / IIoT]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/general-purpose-ai-risk-framework" >}}) — OPC UA의 핵심 적용 도메인
- [Modbus 프로토콜]({{< relref "/docs/05_Networks/01_Network_Protocol/modbus-protocol" >}}) — 구형 산업 프로토콜 (OPC UA로 대체)
- [IEC 표준]({{< relref "/docs/07_SystemEvaluation/02_HW_SW_Standards/ieee-iec-standards-comparison" >}}) — OPC UA = IEC 62541

## 참고 기출

- 137회 3교시 3번 (PECS)
