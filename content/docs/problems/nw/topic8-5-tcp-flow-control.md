---
title: "TCP 흐름제어와 Sliding Window, Slow Start 비교"
date: 2026-06-14T09:00:00+09:00
tags: ["네트워크", "NW", "핵토200"]
topic_no1: 8
topic_no2: 5
topic_large: "TCP 전송계층"
topic_small: "TCP 전송계층"
exam_ref: "125"
exam_type: "응용"
question_no: 3
---

## 문제

전송계층(Transport Layer)에서 전송 데이터의 단위는 Segment이다. 전송계층 기능 중 흐름제어(Flow Control)에 대하여 다음을 설명하시오.
가. 흐름제어 방식 개념
나. 흐름제어 방식의 개념도
다. Sliding Windows와 Slow Start 비교

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | TCP 전송계층 |
| 토픽(소) | TCP 전송계층 |
| 출제 | 125회 |
| 유형 | 응용 |
| 번호 | 3 |

## 해설

> **흐름제어는 "빠른 송신자가 느린 수신자를 압도하지 않도록" 브레이크를 거는 메커니즘이다**

### 1. 출제 배경 및 의도

TCP 신뢰성의 두 축인 흐름제어(수신자 보호)와 혼잡제어(네트워크 보호)를 혼동하지 않고 설명할 수 있는지를 평가합니다. Sliding Window와 Slow Start는 각각 흐름제어와 혼잡제어의 대표 메커니즘입니다.

### 2. 개념의 본질과 작동 메커니즘

#### 가. 흐름제어 방식 개념

**문제 상황:** 고성능 서버(송신)가 1Gbps로 전송, 저사양 클라이언트(수신)는 100Mbps로만 처리 가능
→ 수신 버퍼 오버플로우 → 패킷 손실 → 불필요한 재전송

**해결:** 수신자가 자신이 처리 가능한 버퍼 크기(rwnd: Receive Window)를 ACK에 포함하여 송신자에게 알림

```
수신자 처리 흐름:
[수신 버퍼]      [응용 프로그램]
└── 패킷 도착 ──▶└── 처리 후 버퍼 비움
    버퍼 여유 공간 = rwnd
    (ACK에 rwnd 값 포함하여 송신자에 전달)
```

#### 나. 흐름제어 개념도

```
[송신자]                              [수신자]
   │                                     │
   │── Segment 1 (seq=1) ──────────────▶│
   │── Segment 2 (seq=2) ──────────────▶│
   │── Segment 3 (seq=3) ──────────────▶│
   │◀── ACK(seq=3, rwnd=2) ─────────────│
   │   (수신 확인, 남은 버퍼=2)          │
   │── Segment 4 (seq=4) ──────────────▶│
   │── Segment 5 (seq=5) ──────────────▶│
   │   (rwnd=2이므로 2개만 전송 후 대기) │
   │◀── ACK(seq=5, rwnd=0) ─────────────│
   │   (버퍼 가득 참! Zero Window)       │
   │   [전송 일시 중단]                  │
   │◀── ACK(seq=5, rwnd=3) ─────────────│
   │   (버퍼 여유 생김, 재개)            │
   │── Segment 6 (seq=6) ──────────────▶│
   
Window Size = min(rwnd, cwnd)
실제 전송 가능 크기 = rwnd와 cwnd 중 작은 값
```

**Persist Timer:** Zero Window 상태에서 수신자가 윈도우 갱신 패킷을 잃었을 때 데드락 방지용 타이머

#### 다. Sliding Windows vs Slow Start 비교

| 비교 항목 | Sliding Window (흐름제어) | Slow Start (혼잡제어) |
|---|---|---|
| **목적** | 수신자 버퍼 오버플로우 방지 | 네트워크 혼잡 방지 |
| **제어 변수** | rwnd (수신 윈도우) | cwnd (혼잡 윈도우) |
| **결정 주체** | 수신자가 광고 | 송신자가 자체 조절 |
| **기준** | 수신자 버퍼 여유 공간 | 네트워크 혼잡 감지 |
| **증가 방식** | 수신자 버퍼에 따라 가변 | 지수 증가 후 선형 증가 |
| **감소 조건** | 수신자 버퍼 부족 | 패킷 손실 감지 |

**Sliding Window 상세 동작:**
```
전송 윈도우 (크기=4):
상태별 세그먼트 분류:
[이미 전송+확인] [전송중, 미확인] [전송 가능] [아직 전송 불가]
    1  2  3    │   4   5   6   │   7   8   │   9  10  11...
               └── rwnd=3 ────┘

ACK 4 수신 → 윈도우 오른쪽 슬라이딩:
    1  2  3  4 │   5   6   7   │   8   9   │  10  11  12...
```

**Slow Start 상세 동작:**
```
cwnd 증가:
- RTT 1: cwnd = 1 MSS (1개 전송)
- RTT 2: cwnd = 2 MSS (2개 전송) ← ACK당 1 MSS 증가 → 지수
- RTT 3: cwnd = 4 MSS
- RTT 4: cwnd = 8 MSS = SSthresh

SSthresh 도달 후 선형 증가:
- RTT 5: cwnd = 9 (RTT당 1 MSS)
- RTT 6: cwnd = 10 ...

손실 발생 시:
- 타임아웃: cwnd = 1, SSthresh = cwnd/2
- 3중복 ACK: cwnd = SSthresh = cwnd/2 (Fast Recovery)
```

**실제 전송 윈도우 크기:**
```
실제 전송 = min(rwnd, cwnd)
→ rwnd가 작으면 수신자가 제한
→ cwnd가 작으면 네트워크 혼잡 때문에 제한
```

### 3. 핵심 키워드 (Must-Have)

- **rwnd:** Receive Window, 수신자 버퍼 기반 흐름제어
- **cwnd:** Congestion Window, 혼잡 제어 기반 전송 제한
- **Zero Window:** rwnd=0, 전송 중단 후 Persist Timer 동작
- **SSthresh:** Slow Start 임계값, 지수→선형 증가 전환점
- **min(rwnd, cwnd):** 실제 전송 윈도우 크기

### 4. 맥락과 비교

TCP QUIC(HTTP/3)에서는 스트림별 독립 흐름제어를 지원합니다. 각 스트림이 독립적인 흐름제어 윈도우를 가져 Head-of-Line Blocking 문제를 해결합니다. 이는 SCTP의 멀티스트리밍과 유사한 개념입니다.

### 5. 실무 제언

대용량 파일 전송 성능 최적화 시 소켓 버퍼 크기(`SO_RCVBUF`, `SO_SNDBUF`)를 BDP(Bandwidth Delay Product = 대역폭 × RTT)에 맞게 설정합니다. 예를 들어 100Mbps 링크에서 RTT=100ms이면 BDP = 100Mbps × 0.1s = 10Mb = 1.25MB, 이에 맞춰 버퍼를 설정해야 파이프라인을 가득 채워 최대 처리량을 달성할 수 있습니다.
