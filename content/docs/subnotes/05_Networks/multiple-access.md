---
title: "다중 접근 프로토콜"
date: 2026-07-12T18:13:12+09:00
tags: ["네트워크", "CSMA/CD", "CSMA/CA", "TDMA", "FDMA", "CDMA", "OFDMA", "서브노트"]
draft: false
---

# 다중 접근 프로토콜 서브노트

> **두음 머리에 박기 🧠**
> - **임·제·채** (Multiple Access 3대 분류: **임**의 접근 Random Access, **제**어 접근 Controlled Access, **채**널화 Channelization)
> - **F·T·C·O** (채널화 4가지 방식: **F**DMA 주파수분할, **T**DMA 시간분할, **C**DMA 코드분할, **O**FDMA 직교주파수분할)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **다중 접근 프로토콜(Multiple Access Protocol)** |
| **정의** | 공유매체를 다수 장치가 효율·공정하게 사용하도록 채널접근을 조율하는 데이터링크 프로토콜군, 충돌 허용·금지·회피 전략따라 임의접근·제어접근·채널화 3방식 분류 |
| **키워드** | ALOHA, CSMA/CD, CSMA/CA, Token Ring, Polling, TDMA/FDMA/CDMA/OFDMA |
| **개념도** | 공유 채널<br>├─ 임의 접근(Random): 충돌 허용→감지/회피 후 재전송, 대표 ALOHA·CSMA/CD·CSMA/CA<br>├─ 제어 접근(Controlled): 충돌 없음→순서·권한 부여, 대표 Polling·Token Ring<br>└─ 채널화(Channelization): 충돌 없음→주파수·시간·코드 분할, 대표 FDMA·TDMA·CDMA·OFDMA |
| **구성요소** | 1. **CSMA/CD(유선 이더넷)**: 충돌감지 시 Jam Signal → Binary Exponential Backoff → 재전송, IEEE 802.3<br>2. **CSMA/CA(무선 Wi-Fi)**: 채널유휴 확인 → DIFS 대기 → 랜덤백오프 → 전송 → ACK 대기, IEEE 802.11<br>3. **Token Ring/Polling**: 토큰보유 장치만 전송(순환) 또는 컨트롤러 순차질의, 충돌없이 결정론적 지연<br>4. **FDMA/TDMA**: 각각 주파수대역 분할(1G), 시간슬롯 분할(GSM/2G)<br>5. **CDMA/OFDMA**: 직교코드로 동시전송(3G WCDMA), 직교 부반송파를 사용자별 할당(LTE, Wi-Fi 6, 5G NR) |
| **비교** | **임의 접근(Random Access)**<br>- 충돌여부: 발생가능<br>- 채널효율: 부하 낮을 때 우수(CSMA/CD·CA 약 50%)<br>- 지연: 가변(비결정론적)<br><br>**제어 접근 vs 채널화**<br>- 제어접근: 충돌없음, 중간효율, 예측가능 지연 (Token Ring, Polling)<br>- 채널화: 충돌없음, 높은효율, 낮고 일정한 지연 (TDMA, CDMA, OFDMA) |
| **차별화** | **현대 무선 기술의 채널 접근 방식 진화**<br>1. **Wi-Fi 6(802.11ax) OFDMA 도입**: CSMA/CA 충돌문제 해소 → MU-MIMO 결합, 다중사용자 동시접속 효율극대화, BSS Coloring으로 인접BSS 간섭구분<br>2. **산업용 IoT 채널접근 분리**: 실시간제어(PLC)는 Token Ring/Polling 기반 결정론적 지연 프로토콜(Profinet, EtherCAT), 비실시간 모니터링은 ALOHA 기반 LoRaWAN 분리운용<br>3. **5G 사설망 OFDMA 슬라이싱**: gNB 스케줄러 QCI기반 동적 자원블록 할당, eMBB·URLLC·mMTC 슬라이싱 분리로 효율·지연요건 동시충족 |
