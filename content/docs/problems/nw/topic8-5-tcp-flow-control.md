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

### 출제 배경 및 의도

전송계층에서 흐름제어는 수신자 보호를, 혼잡제어는 네트워크 보호를 담당하는 서로 다른 메커니즘이다. 이 둘을 혼동하지 않고 제어 변수(rwnd vs cwnd)·결정 주체·보호 대상을 명확히 구분하여 설명하는 것이 핵심 평가 포인트다.

125회 응용 문제에서 Sliding Windows와 Slow Start 비교를 요구한 것은 흐름제어와 혼잡제어의 실질적 차이를 이해하는지를 검증하기 위함이다. 실제 전송 윈도우가 min(rwnd, cwnd)로 결정되며 두 제어가 연동한다는 핵심 원리를 답안에 반드시 포함해야 한다.

### 1. TCP 흐름제어(Flow Control), 개요

정 의  • 흐름제어를 수신자 버퍼 크기(rwnd)를 ACK에 광고하여 송신 속도를 수신자 처리 능력에 맞게 조절하는 메커니즘
       - 고속 송신자(1Gbps)가 저사양 수신자(100Mbps) 버퍼를 오버플로우하는 문제를 방지

```
[흐름제어 개념도]

송신자 (1Gbps)                        수신자 (버퍼 5개)
   │── Seg1 ──▶ │── Seg2 ──▶ │── Seg3 ──▶│  버퍼: [1][2][3][ ][ ]
   │◀─────────── ACK3, rwnd=2 ────────────│  (여유 2개)
   │── Seg4 ──▶ │── Seg5 ──▶│   (2개만)   │
   │◀─────────── ACK5, rwnd=0 ────────────│  (Zero Window: 버퍼 가득)
   │   [전송 중단]  [Persist Timer 동작]   │
   │◀─────────── ACK5, rwnd=3 ────────────│  (앱이 버퍼 처리 → 재개)
   │── Seg6 ──▶ │── Seg7 ──▶ │── Seg8 ──▶│

실제 전송 윈도우 = min(rwnd, cwnd)
  rwnd 작음 → 수신자 버퍼 한계 (흐름제어)
  cwnd 작음 → 네트워크 혼잡 (혼잡제어)
```

- Persist Timer는 Zero Window 시 수신자의 윈도우 갱신 ACK 손실로 인한 송수신 데드락을 방지한다.

### 2. 흐름제어 상세 동작 및 Sliding Window vs Slow Start 비교

1) Sliding Window (흐름제어) 상세 동작

```
[슬라이딩 윈도우 상태 분류]

세그먼트 상태:
[전송+확인완료] │[전송중·미확인]│[전송가능]│[전송불가]
  1   2   3   │  4   5   6  │  7   8  │  9  10  11...
              └─── rwnd=3 ──┘

ACK 4 수신 → 윈도우 오른쪽 슬라이딩:
  1   2   3   4 │  5   6   7  │  8   9  │ 10  11  12...

rwnd = 0 (Zero Window):
모든 세그먼트 전송 불가 → Persist Timer 동작
→ Zero Window Probe(1바이트) 주기적 전송 → 수신자 응답 대기
```

2) Sliding Window vs Slow Start 비교

| 구분 | 항목 | Sliding Window (흐름제어) | Slow Start (혼잡제어) |
|------|------|------|------|
| 목적 | 보호 대상 | 수신자 버퍼 오버플로우 방지 | 네트워크 혼잡 방지 |
| 제어 변수 | 변수명 | rwnd (Receive Window) | cwnd (Congestion Window) |
| 결정 주체 | 누가 | 수신자가 ACK에 광고 | 송신자가 자체 계산 |
| 기준 | 판단 근거 | 수신 버퍼 여유 공간 | 패킷 손실·RTT 측정 |
| 증가 방식 | 변화 패턴 | 수신자 버퍼 처리에 따라 가변 | 지수 증가 → 선형 증가 |
| 감소 조건 | 트리거 | 수신자 버퍼 부족 (rwnd→0) | 타임아웃 또는 3중복 ACK |
| 초기화 | 시점 | 연결 설정 시 rwnd 광고 | cwnd=1 MSS, SSthresh=∞ |

- Slow Start는 cwnd를 RTT당 2배씩 지수 증가하다 SSthresh 도달 시 RTT당 1 MSS 선형 증가로 전환하며, 손실 발생 시 즉각 cwnd를 축소한다.

### 3. 실제 전송 윈도우 결정 및 QUIC 비교

```
[전송 윈도우 결정 원리]

rwnd=10 (수신자 버퍼 충분)
cwnd=4  (네트워크 혼잡 감지)
→ 실제 전송 = min(10, 4) = 4 MSS  ← cwnd가 제한

rwnd=2  (수신자 버퍼 부족)
cwnd=8  (네트워크 여유)
→ 실제 전송 = min(2, 8) = 2 MSS  ← rwnd가 제한
```

| 항목 | TCP Sliding Window | QUIC (HTTP/3) 흐름제어 |
|------|------|------|
| 흐름제어 단위 | 연결(Connection) 전체 | 연결 + 스트림별 독립 |
| HOL Blocking | 발생 (단일 rwnd) | 없음 (스트림 독립 rwnd) |
| Zero Window | Persist Timer | 스트림별 독립 차단 |
| 표준 | RFC 9293 | RFC 9000 |

- QUIC은 스트림별 독립 흐름제어로 한 스트림의 버퍼 고갈이 다른 스트림에 영향을 주지 않아 TCP Sliding Window의 HOL Blocking을 근본적으로 해결한다.  "끝"

### 실무 제언

**BDP 기반 소켓 버퍼 최적화**
- **챌린지**: 서울-LA 간 RTT=150ms, 10Gbps 링크에서 기본 소켓 버퍼(4MB)로는 BDP(10Gbps × 0.15s = 1.875GB)의 0.2%만 활용, 처리량이 이론값 대비 극히 낮음
- **제언**: `sysctl -w net.ipv4.tcp_rmem="4096 87380 67108864"` 설정으로 최대 소켓 버퍼를 64MB 이상으로 확장, BDP 공식(대역폭 × RTT)을 기준으로 서비스별 최적값 산출

**Zero Window 빈발 원인 진단**
- **챌린지**: 애플리케이션 로그에서 전송 지연 발생 시 Zero Window가 원인인지 혼잡 손실이 원인인지 구분 어려움
- **제언**: `tcpdump` 또는 Wireshark에서 TCP Zero Window / Window Update 패킷 캡처로 rwnd=0 빈도 측정, 잦은 경우 수신 애플리케이션 처리 스레드 증가 또는 `SO_RCVBUF` 확대 조치

**HTTP/2 vs HTTP/3 흐름제어 선택**
- **챌린지**: 멀티스트림 API 서버에서 HTTP/2 사용 시 단일 TCP 연결의 rwnd 부족으로 모든 스트림 지연
- **제언**: QUIC 기반 HTTP/3 도입으로 스트림별 독립 흐름제어 적용, 방화벽 UDP 443 허용 후 Chrome DevTools Network 탭으로 QUIC 활성 여부 및 TTFB 개선 효과 측정
