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

> **다중 접근 프로토콜은 "여러 사람이 하나의 무선 채널을 공유할 때의 교통 규칙"이다**

하나의 공유 매체(이더넷 케이블, 무선 채널)를 여러 장치가 동시에 사용하려 할 때 충돌을 어떻게 관리할 것인가가 핵심입니다.

### 1. 출제 배경 및 의도

이더넷(CSMA/CD), Wi-Fi(CSMA/CA), 4G/5G의 OFDMA 등 현대 통신 기술의 근간이 되는 채널 접근 제어 메커니즘입니다. 유무선 모두에 적용되는 원리로 실무적 중요성이 높습니다.

### 2. 개념의 본질과 작동 메커니즘

#### 가. 임의 접근 프로토콜 (Random Access Protocols)

**개념:** 전송 권한 부여 없이 각 장치가 채널 상태를 확인하고 자유롭게 전송. 충돌 발생 시 재전송.

**1) ALOHA**
```
Pure ALOHA: 보내고 싶을 때 바로 전송
           충돌 → 랜덤 시간 후 재전송
           채널 효율: 18.4% (최대)

Slotted ALOHA: 시간 슬롯에 맞춰 전송
               채널 효율: 36.8% (최대)
```

**2) CSMA (Carrier Sense Multiple Access)**
```
전송 전 채널 "감청(Carrier Sense)" → 비어 있으면 전송
전파 지연으로 인해 충돌 여전히 가능

CSMA/CD (Collision Detection) - 유선 이더넷:
└── 전송 중 충돌 감지 → 즉시 중단 → Jam Signal → 재전송

CSMA/CA (Collision Avoidance) - 무선 Wi-Fi:
└── 충돌 감지 불가 → 전송 전 회피
    IFS 대기 → 랜덤 백오프 → 전송 → ACK 확인
```

**CSMA/CD 동작 (이더넷):**
```
A ──────────────────────── 이더넷 케이블 ────────────────── B
  ↑                                                          ↑
  전송 시작                                              동시 전송
  
  충돌 감지! → Jam Signal 전송 → Binary Exponential Backoff 후 재전송
```

**CSMA/CA 동작 (Wi-Fi):**
```
채널 유휴 확인 → DIFS 대기 → 랜덤 백오프 → 전송 → ACK 대기
충돌 없으면 ACK 수신
ACK 없으면 재전송 (백오프 증가)
```

#### 나. 제어 접근 프로토콜 (Controlled Access Protocols)

**개념:** 중앙 제어 또는 합의된 순서에 따라 전송 권한을 순서대로 부여. 충돌 없음.

**1) 폴링 (Polling)**
```
중앙 컨트롤러
  │── "A야, 보낼 거 있어?" → A가 전송
  │── "B야, 보낼 거 있어?" → B가 전송
  순환 방식, 중앙 장치 장애 시 전체 마비
```

**2) 토큰 패싱 (Token Passing)**
```
Token Ring: 토큰(작은 패킷)이 링을 순환
└── 토큰 보유한 장치만 전송 가능
└── 전송 후 토큰 다음 장치에 전달
충돌 없음, 결정론적 지연 보장
대표: Token Ring (IEEE 802.5), FDDI
```

**3) 예약 (Reservation)**
```
미니 슬롯에서 전송 예약 후 실제 데이터 전송
TDMA와 결합된 방식
```

#### 다. 채널화 프로토콜 (Channelization Protocols)

**개념:** 채널을 물리적/논리적으로 분할하여 각 장치에 전용 채널 할당. 충돌 없음.

**1) FDMA (Frequency Division Multiple Access)**
```
주파수 분할: 채널을 주파수 대역으로 분할
장치A: 900MHz ~ 910MHz
장치B: 910MHz ~ 920MHz
장치C: 920MHz ~ 930MHz
동시 사용 가능, 가드 밴드(Guard Band) 필요
대표: FM 라디오, 1세대 이동통신(AMPS)
```

**2) TDMA (Time Division Multiple Access)**
```
시간 분할: 하나의 주파수를 시간 슬롯으로 분할
주파수: 900MHz
시간: [A슬롯][B슬롯][C슬롯][A슬롯][B슬롯]...
대표: GSM(2G), IS-136
```

**3) CDMA (Code Division Multiple Access)**
```
코드 분할: 같은 주파수/시간에 다른 코드로 동시 전송
A: 데이터 × 코드A (직교 코드)
B: 데이터 × 코드B
수신측: 수신신호 × 코드A = A의 데이터만 추출

비유: 여러 사람이 다른 언어로 동시에 말해도 
      자신의 언어를 아는 사람만 알아들음
대표: 3G WCDMA, CDMA2000
```

**4) OFDMA (Orthogonal FDM Access)**
```
직교 주파수 분할: 서로 직교하는 다수의 좁은 부반송파 사용
사용자마다 다른 부반송파 집합 할당
대표: LTE, Wi-Fi 6 (802.11ax), 5G NR
```

**세 방식 비교:**

| 항목 | 임의 접근 | 제어 접근 | 채널화 |
|---|---|---|---|
| **충돌** | 발생 가능 | 없음 | 없음 |
| **효율** | 부하 낮을 때 좋음 | 중간 | 높음 |
| **지연** | 가변 | 예측 가능 | 낮음 |
| **복잡도** | 낮음 | 중간 | 높음 |
| **대표** | CSMA/CD, CSMA/CA | 토큰링 | TDMA, CDMA, OFDMA |

### 3. 핵심 키워드 (Must-Have)

- **CSMA/CD:** 충돌 감지, 이더넷, Binary Exponential Backoff
- **CSMA/CA:** 충돌 회피, Wi-Fi, RTS/CTS
- **Token Passing:** 결정론적 지연, 충돌 없음
- **FDMA/TDMA/CDMA/OFDMA:** 주파수/시간/코드/직교 분할

### 4. 맥락과 비교

Wi-Fi 6(802.11ax)는 OFDMA를 도입하여 기존 CSMA/CA 방식의 충돌 문제를 줄이고 동시 다중 접속 효율을 높였습니다. 5G NR에서도 OFDMA가 기본 채널 접근 방식입니다.

### 5. 실무 제언

IoT 환경에서 다수의 센서가 동일 주파수를 공유할 때 CSMA/CA의 충돌 회피만으로는 부족합니다. LoRaWAN은 ALOHA 기반이며, NB-IoT는 OFDMA/SC-FDMA를 사용합니다. 기술사 답안에서 세 방식의 분류 체계와 대표 프로토콜을 표로 정리하고 현대 무선 기술(LTE, 5G, Wi-Fi 6)과 연결하면 실무 적용 이해를 효과적으로 보여줄 수 있습니다.
