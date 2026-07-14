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

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **WiFi 7 (IEEE 802.11be, Extremely High Throughput) 및 WiFi 8 (IEEE 802.11bn)** |
| **정의** | 최대 46Gbps 속도와 극저지연을 실현하는 7세대 무선 규격 **WiFi 7**과, 속도 경쟁을 넘어 밀집 지역 내 초고신뢰성(Ultra High Reliability) 확보에 초점을 둔 차세대 **WiFi 8 무선랜 표준 기술** |
| **키워드** | 320MHz, 4096-QAM, MLO (Multi-Link Operation), Multi-RU, Multi-AP (MAP), WiFi 8 (UHR) |
| **개념도** | **[ WiFi 7 MLO (다중 링크) 및 Multi-RU 펑처링 기술 메커니즘 ]**<br>1. **MLO (Multi-Link Operation)**<br>&nbsp;&nbsp;`[ WiFi 7 AP ] ─── (2.4 GHz) ───┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`─── (5.0 GHz) ───┼──➔ [ WiFi 7 클라이언트 (동시 동적 채널 병합 결합) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`─── (6.0 GHz) ───┘`<br>2. **Multi-RU & Preamble Puncturing**<br>&nbsp;&nbsp;`[ 전송 채널 (80MHz) ] ➔ [ 20MHz ] [ 20MHz (간섭발생 펑처링) ] [ 20MHz ] [ 20MHz ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└─── 묶어서 단일 사용자 할당 ───┘ (낭비 없는 간섭 회피)` |
| **구성요소** | 1. **320MHz 대역폭**: WiFi 6 대비 채널크기 2배 확장 → 초고속 대용량 스트리밍<br>2. **4096-QAM**: 변조성상도 고도화 → 1심볼당 12bit 전송(WiFi 6 10bit 대비 처리량 20%↑)<br>3. **MLO**: 2.4/5/6GHz 동시결합 송수신 → 장애극복+지연율 감소<br>4. **Multi-RU/Puncturing**: 간섭 주파수만 도려내고(Puncture) 나머지 통합 → 전송효율화<br>5. **WiFi 8 Multi-AP Coordinated**: 다중AP 협력 빔포밍·OFDMA 조율 → 밀집환경 신뢰화 |
| **비교** | **WiFi 6/6E (802.11ax)**<br>- 최대속도: 9.6Gbps<br>- 변조/채널대역: 1024-QAM / 최대160MHz<br>- 특징: OFDMA 도입, 단일링크 결합<br><br>**WiFi 7 (802.11be)**<br>- 최대속도: 46Gbps<br>- 변조/채널대역: 4096-QAM / 최대320MHz<br>- 특징: MLO(다중대역결합), Multi-RU(펑처링 간섭제어) |
| **차별화** | **초고신뢰/저지연 무선랜 인프라 구축 위한 주파수조정·차세대 연계 전략**<br>1. **AFC 솔루션 연동**: 6GHz 사용시 기존 무선서비스(기상/방송레이더) 혼선방지 → 위치DB 연동 AP 송신전력 자동감쇄 필수<br>2. **WiFi 8(UHR) 산업용 OT 무선랜 활용**: 패킷탈락 치명적인 산업현장 → 복수AP 협력빔포밍+자원분할로 음영지역 무결성 유지<br>3. **통합제어 아키텍처(SDN/SD-WLAN) 전환**: 다수 WiFi 7 AP MLO상태·주파수간섭 일괄제어 → SW정의 무선랜 컨트롤러로 동적채널 최적화 |
