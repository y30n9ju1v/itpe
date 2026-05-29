---
title: "Wi-Fi 7 (IEEE 802.11be)"
date: 2026-05-09T14:07:16+09:00
tags: ["peim", "pecs", "네트워크", "무선네트워크", "Wi-Fi7", "802.11be", "MLO", "4096-QAM"]
draft: false
exam_peim: ["139회"]
exam_pecs: ["134회"]
---

## 개요

Wi-Fi 7(IEEE 802.11be, EHT: Extremely High Throughput)은 2.4GHz·5GHz·6GHz 3개 대역을 동시에 활용하는 최신 Wi-Fi 표준이다. 이론적 최대 속도 46Gbps, 다중 링크 동작(MLO)으로 초저지연을 실현하며 Wi-Fi 6/6E 대비 약 4.8배 속도를 제공한다.

## 핵심 내용

### Wi-Fi 세대 비교

| 세대 | 표준 | 최대 속도 | 주파수 | 핵심 기술 |
|------|------|----------|--------|----------|
| Wi-Fi 5 | 802.11ac | 6.9Gbps | 5GHz | MU-MIMO, OFDM |
| Wi-Fi 6 | 802.11ax | 9.6Gbps | 2.4/5GHz | OFDMA, TWT, BSS Coloring |
| Wi-Fi 6E | 802.11ax | 9.6Gbps | 2.4/5/6GHz | 6GHz 대역 추가 |
| **Wi-Fi 7** | **802.11be** | **46Gbps** | **2.4/5/6GHz** | **MLO, 4096-QAM, 320MHz** |

### Wi-Fi 7 핵심 기술

| 기술 | 설명 |
|------|------|
| **MLO (Multi-Link Operation)** | 여러 대역·채널을 동시에 사용해 처리량 극대화·지연 최소화 |
| **320MHz 채널 대역폭** | Wi-Fi 6E 대비 2배 확장 (6GHz 대역에서 사용 가능) |
| **4096-QAM** | Wi-Fi 6의 1024-QAM 대비 20% 향상된 변조 방식 |
| **Multi-RU (Resource Unit)** | 한 STA에 복수 RU 동시 할당 가능 |
| **16×16 MU-MIMO** | 동시에 최대 16개 스트림 지원 |

### MLO(Multi-Link Operation) 상세

- **동시 송수신**: 2.4GHz + 5GHz + 6GHz 동시 이용
- **지연 감소**: 가장 지연이 낮은 링크 자동 선택
- **신뢰성**: 한 링크 장애 시 다른 링크로 자동 전환
- **활용**: 게이밍, 화상회의, XR(확장현실) 저지연 요구 환경

## 실무 적용 예시

- 스마트팩토리: 실시간 제어 데이터의 초저지연(1ms 이하 목표) 전송
- 의료 영상: 고해상도 DICOM 이미지 무선 전송
- AR/VR: 끊김 없는 실시간 렌더링 스트리밍

## 출제 포인트

- Wi-Fi 세대별 표준명(802.11ax/be)·최대 속도 비교
- MLO: 다중 대역 동시 사용으로 저지연 실현
- 4096-QAM·320MHz·16×16 MU-MIMO 핵심 기술 3가지

## 연관 개념

- [촉각 인터넷]({{< relref "/docs/05_Networks/03_CommunicationSystems/tactile-internet" >}}) — Wi-Fi 7 저지연이 전제 조건
- 6G 네트워크 — Wi-Fi 7 이후 무선 기술 발전 방향

## 참고 기출

- 134회 1교시 1번 (PECS)
- 139회 1교시 10번 (PEIM)
