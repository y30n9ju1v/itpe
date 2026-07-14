---
title: "PoE (Power over Ethernet)"
date: 2026-07-11T11:38:00+09:00
tags: ["네트워크", "PoE", "IEEE802.3", "유선네트워크", "전력공급", "서브노트"]
draft: false
---

# PoE (Power over Ethernet) 서브노트

> **두음 머리에 박기 🧠**
> - **피에스·피디** (PoE 2대 구성요소: 전력 공급 장치 **PSE**(Power Sourcing Equipment), 전력 수신 장치 **PD**(Powered Device))
> - **애프·앳·비티** (PoE 3세대 IEEE 표준: 초기 15.4W **af**, 30W PoE+ **at**, 60~100W PoE++ **bt**)
> - **탐·협·공** (PoE 동작 3단계: **탐**지(Detection), **협**상(Classification), 전력 **공**급(Power-up))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **PoE (Power over Ethernet)** |
| **정의** | IEEE 802.3 기반 Cat5e+ 이더넷케이블로 데이터+DC전력 동시전송 → IP카메라·무선AP·IP폰 등 별도전원 없이 구동, 배선비·설치복잡도 절감 |
| **키워드** | PSE/PD, IEEE 802.3af/at/bt, 전력 클래스 협상, Cat5e/Cat6, 스마트팩토리·IoT |
| **개념도** | **[ PoE 동작 과정 ]**<br>`[ PSE (PoE 스위치/인젝터) ]`<br>&nbsp;&nbsp;`1. 탐지 신호 전송(저전압) →`<br>&nbsp;&nbsp;`2. ◀ PD 저항값 응답(PoE 지원 여부)`<br>&nbsp;&nbsp;`3. 전력 클래스 협상(0~8 클래스) →`<br>&nbsp;&nbsp;`4. DC 전력 공급 시작(데이터+전력 동시 전송) →`<br>&nbsp;&nbsp;`5. 연결 해제 시 자동 차단`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ PD (IP카메라 / 무선AP / IP전화기) ]` |
| **구성요소** | 1. **PSE(Power Sourcing Equipment)**: PoE스위치/인젝터(미드스팬) → 전력공급 장치<br>2. **PD(Powered Device)**: IP카메라, 무선AP, IP폰 등 전력수신 장치<br>3. **IEEE 802.3af(2003)**: 최대15.4W(PD수신 12.95W), IP전화·카메라용 초기표준<br>4. **IEEE 802.3at/PoE+(2009)**: 최대30W(PD수신 25.5W), 무선AP·PTZ카메라용<br>5. **IEEE 802.3bt/PoE++(2018)**: Type3 60W, Type4 100W(PD수신 71.3W), 고성능AP·노트북·디스플레이용 |
| **비교** | **일반 이더넷 배선**<br>- 데이터만 전송, 전원은 별도 어댑터 필요<br>- 설치비용: 콘센트 위치제약, 배선 복잡<br><br>**PoE 이더넷 배선**<br>- 데이터+전력 동시전송<br>- 설치비용: 케이블 1개 통합, 배선단순화, 원격 전원On/Off 관리용이 |
| **차별화** | **PoE 전력예산·안전기준 설계 전략**<br>1. **PSE 포트 전력예산(Power Budget) 설계**: 스위치 전체PSE 용량 vs PD 합산소비전력(af/at/bt별 상이) 비교 → 과부하 시 특정포트 오작동 방지 여유율 확보<br>2. **국내 기술기준 준수**: 전기통신설비 기술기준 → 과전류보호·접지요건, 공공건물 Cat6+ 권고, 소방 PoE 스프링클러제어기 등 안전요건 적용<br>3. **탐지-협상 단계 오동작 방지**: PSE 저전압탐지로 PD PoE지원여부 확인 후 전력클래스 협상 → 비PoE장비 고전압인가 손상사고 예방 |
