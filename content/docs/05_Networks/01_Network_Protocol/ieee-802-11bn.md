---
title: "IEEE 802.11bn (Ultra High Reliability Wi-Fi)"
date: 2026-05-09T00:00:00+09:00
tags: ["peim", "컴퓨터시스템및정보통신", "네트워크프로토콜", "IEEE802.11bn", "Wi-Fi8", "UHR", "무선랜"]
draft: false
exam: "135회"
---

## 개요

IEEE 802.11bn은 차세대 Wi-Fi 표준(Wi-Fi 8)으로, UHR(Ultra High Reliability)을 핵심 목표로 하는 IEEE 802.11 계열 표준이다. 기존 Wi-Fi 7(802.11be)의 고속 전송에 더해 초신뢰성과 저지연을 강화한다.

## 핵심 내용

### Wi-Fi 세대별 비교

| 세대 | 표준 | 주파수 | 최대 속도 | 핵심 기술 |
|------|------|--------|---------|---------|
| Wi-Fi 6 | 802.11ax | 2.4/5GHz | 9.6Gbps | OFDMA, MU-MIMO |
| Wi-Fi 6E | 802.11ax | +6GHz | 9.6Gbps | 6GHz 대역 추가 |
| Wi-Fi 7 | 802.11be | 2.4/5/6GHz | 46Gbps | MLO, 4096-QAM |
| **Wi-Fi 8** | **802.11bn** | 2.4/5/6GHz + 60GHz | **100Gbps+** | **UHR, CoCoA** |

### IEEE 802.11bn 핵심 기술

| 기술 | 설명 |
|------|------|
| **UHR(Ultra High Reliability)** | 신뢰성 99.9999% 목표, 산업·의료 환경 지원 |
| **CoCoA(Coordinated Coexistence with Access)** | 다중 AP 간 협력 스케줄링으로 간섭 최소화 |
| **MLO 강화** | Wi-Fi 7의 Multi-Link Operation 확장, 링크 이중화 |
| **HARQ** | Hybrid ARQ 도입으로 재전송 효율화 |
| **AI 기반 자원 관리** | 채널 상태 예측·자원 할당 자동화 |

### 주요 응용 분야

- 산업 자동화(IIoT): 공장 내 저지연·고신뢰 무선 제어
- 의료: 실시간 의료 기기 모니터링
- XR(확장현실): 저지연 AR/VR 스트리밍

## 출제 포인트

- UHR(Ultra High Reliability)이 802.11bn의 핵심 키워드
- Wi-Fi 7 대비 차이: 신뢰성 중심 + CoCoA + HARQ
- 산업/의료 분야 실시간 무선 네트워크 요구사항과의 연계

## 연관 개념

- [ARQ 오류제어]({{< relref "/docs/05_Networks/01_Network_Protocol/arq-error-control" >}}) — HARQ의 기반이 되는 오류 제어 기법
- [6G 이동통신]({{< relref "/docs/05_Networks/03_CommunicationSystems/ai-native-network-6g" >}}) — 무선 통신 기술 발전 흐름

## 참고 기출

- 135회 1교시 10번 (PEIM)
