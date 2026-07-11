---
title: "WiFi 7 및 차세대 무선 표준"
date: 2026-07-11T11:19:35+09:00
tags: ["네트워크", "WiFi7", "WiFi8", "802.11be", "802.11bn", "MLO", "MultiRU", "AFC", "서브노트"]
draft: false
---

# WiFi 7 및 차세대 무선 표준 서브노트

> **두음 머리에 박기 🧠**
> - **삼·사·엠·엠** (WiFi 7 핵심 4대 물리 사양: **320**MHz 대역폭, **4096**-QAM 변조, **M**LO 다중링크결합, **M**ulti-RU 간섭펑처링)
> - **신·지·밀·비** (WiFi 8 (802.11bn) 핵심 지향 가치: 초고**신**뢰성 Reliability, 극저**지**연 Latency, **밀**집 환경 성능 보장, **비**면허 대역 효율 향상)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **WiFi 7 (IEEE 802.11be, Extremely High Throughput) 및 WiFi 8 (IEEE 802.11bn)** |
| **정의** | 최대 46Gbps 속도와 극저지연을 실현하는 7세대 무선 규격 **WiFi 7**과, 속도 경쟁을 넘어 밀집 지역 내 초고신뢰성(Ultra High Reliability) 확보에 초점을 둔 차세대 **WiFi 8 무선랜 표준 기술** |
| **키워드** | 320MHz, 4096-QAM, MLO (Multi-Link Operation), Multi-RU, Multi-AP (MAP), WiFi 8 (UHR) |
| **개념도** | **[ WiFi 7 MLO (다중 링크) 및 Multi-RU 펑처링 기술 메커니즘 ]**<br>1. **MLO (Multi-Link Operation)**<br>&nbsp;&nbsp;`[ WiFi 7 AP ] ─── (2.4 GHz) ───┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`─── (5.0 GHz) ───┼──➔ [ WiFi 7 클라이언트 (동시 동적 채널 병합 결합) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`─── (6.0 GHz) ───┘`<br>2. **Multi-RU & Preamble Puncturing**<br>&nbsp;&nbsp;`[ 전송 채널 (80MHz) ] ➔ [ 20MHz ] [ 20MHz (간섭발생 펑처링) ] [ 20MHz ] [ 20MHz ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└─── 묶어서 단일 사용자 할당 ───┘ (낭비 없는 간섭 회피)` |
| **구성요소** | 1. **320MHz 대역폭**: WiFi 6 대비 물리 채널 크기를 2배로 확장하여 초고속 대용량 스트리밍 지원<br>2. **4096-QAM**: 변조 성상도를 고도화해 1심볼당 12bit 데이터 전송 (WiFi 6의 10bit 대비 처리량 20% 상향)<br>3. **MLO**: 2.4/5/6GHz 대역을 물리적으로 동시에 묶어 데이터 송수신을 처리해 장애 극복 및 지연율 감소<br>4. **Multi-RU 및 Puncturing**: 채널 대역 내 간섭 주파수 부분만 도려내고(Puncture) 나머지 대역을 통합해 전송 효율화<br>5. **WiFi 8 Multi-AP Coordinated**: 다중 AP가 서로 협력하여 빔포밍 및 OFDMA를 조율하는 밀집 환경 신뢰화 기술 |
| **비교** | **WiFi 6 / 6E (802.11ax)**<br>- **최대 속도**: 9.6 Gbps<br>- **변조 기법 / 채널 대역**: 1024-QAM / 최대 160 MHz<br>- **핵심 특징**: 밀집지 주파수 분할 (OFDMA) 도입, 단일 링크 결합<br><br>**WiFi 7 (802.11be)**<br>- **최대 속도**: 46 Gbps (Extremely High Throughput)<br>- **변조 기법 / 채널 대역**: 4096-QAM / 최대 320 MHz<br>- **핵심 특징**: MLO (다중 대역 결합), Multi-RU (주파수 펑처링 간섭 제어) |
| **차별화** | **초고신뢰/저지연 무선랜 인프라 구축을 위한 주파수 조정 및 차세대 연계 전략**<br>1. **AFC (Automated Frequency Coordination) 솔루션 연동**: 6GHz 대역 사용 시 기존 고정 무선 통신 서비스(기상/방송 레이더 등)와의 신호 혼선을 막기 위해, 위치 기반 데이터베이스와 연동해 AP 송신 전력을 자동 감쇄 조절하는 AFC 기술 탑재 필수.<br>2. **스마트 팩토리 등 산업용 OT(운영기술) 무선랜을 위한 WiFi 8(UHR) 활용**: 공장 내 기기 제어 등 패킷 탈락(Drop)이 치명적인 산업 현장에서 복수 AP 간 협력 빔포밍(Coordinated Beamforming) 및 자원 분할 기술을 탑재하여 음영 지역 무결성 유지.<br>3. **통합 제어 아키텍처(SDN/SD-WLAN) 전환**: 다중 건물 내 수십 개의 WiFi 7 AP들의 MLO 활성화 상태와 주파수 간섭을 일괄 제어하기 위해 소프트웨어 정의 무선랜 컨트롤러를 구축하여 동적 채널 최적화. |
