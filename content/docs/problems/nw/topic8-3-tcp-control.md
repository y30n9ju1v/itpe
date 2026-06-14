---
title: "TCP 오류제어, 흐름제어, 혼잡제어"
date: 2026-06-14T09:00:00+09:00
tags: ["네트워크", "NW", "핵토200"]
topic_no1: 8
topic_no2: 3
topic_large: "TCP 전송계층"
topic_small: "TCP 제어"
exam_ref: "120"
exam_type: "컴시응"
question_no: 3
---

## 문제

TCP(Transmission Control Protocol)의 신뢰성 있는 전송을 가능케 하는 오류제어, 흐름제어, 혼잡제어에 대하여 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | TCP 전송계층 |
| 토픽(소) | TCP 제어 |
| 출제 | 120회 |
| 유형 | 컴시응 |
| 번호 | 3 |

## 해설

> **TCP의 신뢰성 삼각형 — 오류제어(손실 복구), 흐름제어(수신자 보호), 혼잡제어(네트워크 보호)**

### 1. 출제 배경 및 의도

TCP가 "신뢰성 있는 전송"을 제공하는 메커니즘의 전체 구조를 묻는 문제입니다. 세 가지 제어 메커니즘은 서로 다른 문제를 해결하며 TCP의 핵심 가치를 형성합니다.

### 2. 개념의 본질과 작동 메커니즘

#### 1) 오류제어 (Error Control)

**목적:** 패킷 손실, 손상, 순서 역전 탐지 및 복구

```
정상:       송신 → [패킷1][패킷2][패킷3] → 수신
                                           ↓
                    수신 ← [ACK1][ACK2][ACK3] ← 수신

손실 발생:  송신 → [패킷1][   ×   ][패킷3] → 수신
           (패킷2 손실)
                    수신 ← [ACK1][NAK2 또는 재전송 타임아웃] ← 수신
           재전송: 송신 → [패킷2] → 수신
```

**오류 탐지 방법:**
- **재전송 타임아웃(RTO):** ACK가 일정 시간 내 오지 않으면 재전송
- **중복 ACK(Duplicate ACK):** 동일 ACK 3번 수신 시 빠른 재전송(Fast Retransmit)

**체크섬:** 비트 오류 검출 (16비트 체크섬)

#### 2) 흐름제어 (Flow Control)

**목적:** 수신자 버퍼 오버플로우 방지 (수신자 처리 능력에 맞춰 전송 속도 조절)

**메커니즘: 슬라이딩 윈도우 (Sliding Window)**

```
수신자가 수신 가능 버퍼 크기를 Window Size로 광고:

수신자 버퍼: [   ][   ][   ][   ][   ] = 5개 여유
→ ACK에 Window Size = 5 포함
→ 송신자는 최대 5개 패킷만 미확인 상태로 전송 가능

Window Size = 0이면 전송 중지 (Zero Window)
```

```
송신 윈도우 이동 (슬라이딩):
전: [1✓][2✓][3  ][4  ][5  ][6][7][8]...
          ↑  [──── 전송 중 ────]
후: [3✓][4  ][5  ][6  ][7  ][8][9]...
               ↑  [──── 전송 중 ────]
(ACK 3 수신 → 윈도우 오른쪽 이동)
```

#### 3) 혼잡제어 (Congestion Control)

**목적:** 네트워크 혼잡으로 인한 패킷 손실 방지 (네트워크 전체 보호)

**핵심 메커니즘:**

**① Slow Start (느린 시작)**
```
cwnd(혼잡 윈도우) 초기값 = 1 MSS
ACK 수신마다 cwnd × 2 (지수 증가)
SSthresh(임계값) 도달 시 선형 증가로 전환

cwnd:
1→2→4→8→[SSthresh=8]→9→10→11...
```

**② Congestion Avoidance (혼잡 회피)**
```
SSthresh 이상에서 RTT당 1 MSS씩 선형 증가
패킷 손실 감지 시:
 - 타임아웃: SSthresh = cwnd/2, cwnd = 1 (Slow Start 재시작)
 - 3중복 ACK: SSthresh = cwnd/2, cwnd = SSthresh (Fast Recovery)
```

**③ Fast Retransmit & Fast Recovery**
```
중복 ACK 3회 → 타임아웃 기다리지 않고 즉시 재전송
SSthresh = cwnd/2
cwnd = SSthresh (Slow Start 건너뜀)
→ 빠른 복구로 성능 향상
```

**혼잡제어 동작 그래프:**
```
cwnd
  │       ╱  ←선형
  │      ╱
  │   SS│resh
  │  ╱
  │ ╱ ←지수
  └─────────────── 시간
   Slow  Congestion
   Start Avoidance
```

**오류제어 vs 흐름제어 vs 혼잡제어 비교:**

| 항목 | 오류제어 | 흐름제어 | 혼잡제어 |
|---|---|---|---|
| **보호 대상** | 데이터 무결성 | 수신자 버퍼 | 네트워크 |
| **기준** | 체크섬, ACK | 수신 윈도우 | 혼잡 윈도우 |
| **메커니즘** | 재전송, SACK | Sliding Window | Slow Start, CA |
| **제어 변수** | RTO | rwnd | cwnd |

### 3. 핵심 키워드 (Must-Have)

- **RTO (Retransmission Timeout):** 재전송 대기 시간
- **rwnd (Receive Window):** 수신자 광고 윈도우 크기
- **cwnd (Congestion Window):** 혼잡 제어 윈도우 크기
- **SSthresh (Slow Start Threshold):** 지수→선형 증가 전환점
- **Fast Retransmit:** 3중복 ACK 시 즉시 재전송

### 4. 맥락과 비교

현대 TCP 구현(CUBIC, BBR)은 전통적 혼잡제어를 개선합니다. **TCP CUBIC**은 cwnd를 3차 함수로 증가시켜 고속 네트워크에서 효율을 높이고, **TCP BBR**(Google, 2016)은 패킷 손실 대신 대역폭과 RTT를 직접 측정해 혼잡을 감지합니다.

### 5. 실무 제언

클라우드 환경에서 TCP 성능 튜닝 시 `tcp_wmem`, `tcp_rmem` 설정으로 소켓 버퍼를 최적화하고, TCP BBR 혼잡 제어 알고리즘을 적용하면 장거리 고속 전송 성능이 크게 향상됩니다. 기술사 답안에서 세 가지 제어의 목적과 메커니즘을 명확히 구분하고, cwnd와 rwnd의 MIN값이 실제 전송 윈도우임을 언급하면 심화 이해를 보여줄 수 있습니다.
