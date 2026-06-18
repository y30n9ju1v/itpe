---
title: "다중 접근 프로토콜(Multiple Access Protocol)"
date: 2026-06-14T09:00:00+09:00
tags: ["네트워크", "NW", "핵토200"]
topic_no1: 10
topic_no2: 1
topic_large: "Multiple Access"
topic_small: "Multiple Access"
exam_ref: "모의_2020.10"
exam_type: "공통"
question_no: 4
---

## 문제

데이터링크 계층에서 사용하는 다중 접근 프로토콜 (Multiple Access Protocol) 중 다음에 대하여 설명하시오.
가. 임의 접근 프로토콜 (Random access protocols)
나. 제어 접근 프로토콜 (Controlled access protocols)
다. 채널화 프로토콜 (Channelization protocols)

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | Multiple Access |
| 토픽(소) | Multiple Access |
| 출제 | 모의_2020.10회 |
| 유형 | 공통 |
| 번호 | 4 |

## 해설

### 출제 배경 및 의도

하나의 공유 매체(이더넷 케이블, 무선 채널)를 다수의 장치가 동시에 사용하려 할 때 발생하는 충돌을 어떻게 제어하는지가 데이터링크 계층 설계의 핵심이다. 이더넷(CSMA/CD), Wi-Fi(CSMA/CA), LTE/5G(OFDMA), 위성(TDMA), WCDMA(CDMA) 등 현대 통신 기술의 모든 채널 접근 방식이 임의·제어·채널화 세 분류 체계로 설명된다.

기술사 시험에서 다중 접근 프로토콜을 출제하는 것은 유무선 통신 기술의 이론적 기반을 이해하는지를 검증하기 위함이다. 세 분류별 대표 프로토콜, 충돌 유무, 적합 환경을 체계적 표로 정리하고 Wi-Fi 6·5G NR과의 연계까지 서술하면 차별화된 답안이 완성된다.

### 1. 다중 접근 프로토콜(Multiple Access Protocol), 개요

정 의  • 다중 접근 프로토콜을 공유 매체를 다수 장치가 효율적·공정하게 사용하도록 채널 접근을 조율하는 데이터링크 계층 프로토콜군
       - 충돌 허용·금지·회피 전략에 따라 임의 접근·제어 접근·채널화 세 방식으로 분류

```
[다중 접근 프로토콜 분류 체계]

공유 채널
    │
    ├── 임의 접근 (Random Access)
    │    충돌 허용 → 감지/회피 후 재전송
    │    대표: ALOHA, CSMA/CD, CSMA/CA
    │
    ├── 제어 접근 (Controlled Access)
    │    충돌 없음 → 순서·권한 부여로 전송
    │    대표: Polling, Token Ring, Reservation
    │
    └── 채널화 (Channelization)
         충돌 없음 → 주파수·시간·코드로 분할
         대표: FDMA, TDMA, CDMA, OFDMA
```

- 채널 부하가 낮을 때는 임의 접근이 효율적이고, 고부하·실시간 환경에서는 제어 접근·채널화가 예측 가능한 지연을 보장한다.

### 2. 임의 접근·제어 접근·채널화 프로토콜 상세

1) 임의 접근 프로토콜 (Random Access Protocols)

```
[CSMA/CD 동작 - 유선 이더넷]

A ────────── 이더넷 케이블 ─────────── B
  ↑ 전송 시작                   ↑ 동시 전송
  
  충돌 감지! → Jam Signal → Binary Exponential Backoff → 재전송
  (1회: 0~1슬롯 중 랜덤, n회: 0~2^n-1슬롯 중 랜덤, 최대 10회)

[CSMA/CA 동작 - 무선 Wi-Fi]

채널 유휴 확인 → DIFS 대기 → 랜덤 백오프 감소 → 전송 → ACK 대기
(백오프 중 채널 사용 감지 시 카운트 중단 → 유휴 시 재개)
ACK 수신 실패 → 백오프 범위 2배 증가 후 재시도
```

| 구분 | 항목 | ALOHA | CSMA/CD | CSMA/CA |
|------|------|------|------|------|
| 감청 | Carrier Sense | 없음 | 있음 | 있음 |
| 충돌 처리 | 방식 | 재전송 | 감지 즉시 중단+재전송 | 충돌 회피(ACK 기반) |
| 채널 효율 | 최대 | 18.4%(Pure)/36.8%(Slotted) | ~50% | ~50% |
| 적용 환경 | 매체 | 위성·초기 LAN | 유선 이더넷 | 무선 Wi-Fi |
| 표준 | 규격 | - | IEEE 802.3 | IEEE 802.11 |

2) 제어 접근 프로토콜 (Controlled Access Protocols)

```
[Token Ring 동작]

A → B → C → D → (토큰 순환)
  토큰 보유 장치만 전송 가능 → 전송 완료 후 토큰 다음 장치에 전달
  충돌 없음, 결정론적 지연 보장

[Polling 동작]
컨트롤러: "A야?" → A 전송 → "B야?" → B 전송 → 순환
장점: 충돌 없음 / 단점: 컨트롤러 SPOF
```

3) 채널화 프로토콜 (Channelization Protocols) 및 현대 적용

```
[FDMA / TDMA / CDMA / OFDMA 비교]

FDMA (주파수 분할):
주파수: [──A──][──B──][──C──]  각 장치 전용 대역
Guard Band 필요, 동시 전송 가능, 1G 이동통신

TDMA (시간 분할):
시간:   [A][B][C][A][B][C]...  하나의 주파수를 슬롯 분할
효율적, 동기화 필요, GSM(2G)

CDMA (코드 분할):
같은 주파수·시간에 직교 코드로 다중 전송
A신호×코드A + B신호×코드B → 수신측: ×코드A → A신호만 추출
간섭에 강함, 복잡, 3G(WCDMA/CDMA2000)

OFDMA (직교 주파수 분할):
다수 직교 부반송파를 사용자별 할당
주파수 효율 극대화, 멀티패스 페이딩 강인
LTE, Wi-Fi 6(802.11ax), 5G NR
```

### 3. 세 방식 종합 비교 및 현대 무선 기술 적용

| 항목 | 임의 접근 | 제어 접근 | 채널화 |
|------|------|------|------|
| 충돌 여부 | 발생 가능 | 없음 | 없음 |
| 채널 효율 | 부하 낮을 때 우수 | 중간 | 높음 |
| 지연 특성 | 가변 (비결정론적) | 예측 가능 | 낮고 일정 |
| 복잡도 | 낮음 | 중간 | 높음 |
| 대표 프로토콜 | CSMA/CD, CSMA/CA | Token Ring, Polling | TDMA, CDMA, OFDMA |
| 현대 적용 | Wi-Fi 5 이하, 이더넷 | 산업용 제어망 | LTE, 5G, Wi-Fi 6 |

- Wi-Fi 6(IEEE 802.11ax)는 OFDMA 도입으로 기존 CSMA/CA의 충돌 문제를 해소하고 다중 사용자 동시 접속 효율을 극대화하였으며, 5G NR에서도 하향링크·상향링크 모두 OFDMA가 기본 채널 접근 방식으로 채택되었다.  "끝"

### 실무 제언

**Wi-Fi 6 도입으로 고밀도 환경 성능 개선**
- **챌린지**: 강당·전시장 등 수백 명이 집중된 환경에서 Wi-Fi 5 기반 CSMA/CA 충돌 증가로 실효 처리량이 이론값의 20% 수준에 불과
- **제언**: Wi-Fi 6(OFDMA + MU-MIMO) AP로 교체하여 동시 다중 사용자 채널 분배, BSS Coloring으로 인접 BSS 간 간섭 구분, 채널 너비 80MHz 이상 확보로 처리량 극대화

**산업용 IoT 채널 접근 방식 선택**
- **챌린지**: 공장 자동화 환경에서 수백 개 센서의 CSMA/CA 기반 충돌과 랜덤 지연으로 실시간 제어 응답이 불안정
- **제언**: 실시간 제어(PLC)에는 Token Ring 또는 Polling 방식의 결정론적 지연 프로토콜(Profinet, EtherCAT) 적용, 비실시간 모니터링 데이터에는 LoRaWAN(ALOHA 기반) 분리 운용

**5G 사설망(Private 5G) 채널 설계**
- **챌린지**: 기업 구내망에 5G 사설망 구축 시 OFDMA 자원 블록 할당 최적화 없이는 고밀도 단말 환경에서 스케줄링 오버헤드 증가
- **제언**: gNB 스케줄러에서 트래픽 우선순위(QoS Class Identifier) 기반 동적 자원 블록 할당 정책 설정, eMBB(대용량)·URLLC(저지연)·mMTC(대규모 접속) 슬라이싱 분리로 채널 효율과 지연 요건 동시 충족
