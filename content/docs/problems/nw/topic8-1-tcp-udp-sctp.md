---
title: "TCP, UDP, SCTP 프로토콜 비교"
date: 2026-06-14T09:00:00+09:00
tags: ["네트워크", "NW", "핵토200"]
topic_no1: 8
topic_no2: 1
topic_large: "TCP 전송계층"
topic_small: "TCP, UDP, SCTP"
exam_ref: "모의_2013.10"
exam_type: "응용"
question_no: 4
---

## 문제

TCP(Transmission Control Protocol)와 UDP(User Datagram Protocol) 프로토콜을 비교하여 설명하고, SCTP(Stream Control Transmission Protocol)을 상세하게 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | TCP 전송계층 |
| 토픽(소) | TCP, UDP, SCTP |
| 출제 | 모의_2013.10회 |
| 유형 | 응용 |
| 번호 | 4 |

## 해설

> **TCP는 "등기우편", UDP는 "엽서", SCTP는 "보험이 걸린 특급 배달"이다**

전송계층의 세 프로토콜은 신뢰성과 속도 사이의 서로 다른 균형점을 제공합니다.

### 1. 출제 배경 및 의도

TCP와 UDP는 모든 인터넷 서비스의 기반입니다. SCTP는 통신(VoIP, SS7) 환경에서 TCP의 약점을 보완하기 위해 개발된 프로토콜로, 5G 코어 네트워크에서 중요하게 사용됩니다.

### 2. 개념의 본질과 작동 메커니즘

#### TCP (Transmission Control Protocol)

**특성:** 연결 지향(Connection-oriented), 신뢰성 보장, 순서 보장, 흐름/혼잡 제어

```
TCP 헤더 (20바이트 기본):
├─ Source Port(16) ─────── Destination Port(16) ─┤
├─────────── Sequence Number(32) ────────────────┤
├─────────── Acknowledgment Number(32) ──────────┤
├─ Data Offset │ Flags (SYN, ACK, FIN...) │Window┤
├─ Checksum ──────────── Urgent Pointer ─────────┤
```

**3-way Handshake:**
```
Client          Server
  │── SYN ────▶│
  │◀── SYN+ACK─│
  │── ACK ────▶│
  [연결 설정 완료]
```

#### UDP (User Datagram Protocol)

**특성:** 비연결(Connectionless), 신뢰성 없음, 빠름, 오버헤드 최소

```
UDP 헤더 (8바이트):
├─ Source Port(16) ── Destination Port(16) ─┤
├─ Length(16) ──────── Checksum(16) ────────┤
[페이로드]
```

#### TCP vs UDP 비교

| 비교 항목 | TCP | UDP |
|---|---|---|
| **연결 방식** | 연결 지향 (3-way HS) | 비연결 |
| **신뢰성** | 보장 (ACK, 재전송) | 미보장 |
| **순서 보장** | 보장 | 미보장 |
| **흐름 제어** | 있음 (슬라이딩 윈도우) | 없음 |
| **혼잡 제어** | 있음 (Slow Start 등) | 없음 |
| **헤더 크기** | 20~60바이트 | 8바이트 |
| **속도** | 상대적으로 느림 | 빠름 |
| **적합 용도** | 파일 전송, 웹, 이메일 | DNS, 스트리밍, VoIP, 게임 |

#### SCTP (Stream Control Transmission Protocol)

**탄생 배경:** 전화망(SS7) 시그널링을 IP 망에서 처리하기 위해 설계 (RFC 4960)

**TCP의 한계 극복:**

| TCP 문제점 | SCTP 해결 |
|---|---|
| **Head-of-Line Blocking** | 다중 스트림(Multi-streaming)으로 스트림 독립 |
| **단일 경로** | 멀티호밍(Multi-homing)으로 복수 IP 경로 지원 |
| **SYN Flooding 취약** | 4-way handshake + Cookie 메커니즘 |
| **단일 스트림** | 여러 독립 스트림 병렬 전송 |

**SCTP 주요 특징:**

```
멀티스트리밍:
┌─ Stream 1: 음성 데이터 ─────────────────────────▶
│  Stream 2: 영상 데이터 ──────────────────────────▶
└─ Stream 3: 제어 메시지 ─────────────────────────▶
각 스트림은 독립적 → 한 스트림 지연이 다른 스트림에 영향 없음

멀티호밍:
호스트A(IP1, IP2) ────── IP1 경로 (주) ──▶ 호스트B(IP3, IP4)
                  └───── IP2 경로 (보조) ─▶
IP1 장애 시 자동으로 IP2로 전환 → 고가용성
```

**SCTP 4-way Handshake (Cookie 방식):**
```
Client          Server
  │── INIT ─────▶│
  │◀── INIT-ACK ─│ (Cookie 포함)
  │── COOKIE-ECHO▶│ (Cookie 반환 - SYN Flooding 방지)
  │◀── COOKIE-ACK─│
  [연결 설정 완료]
```

### 3. 핵심 키워드 (Must-Have)

- **TCP:** 연결 지향, 신뢰성, 흐름/혼잡 제어, 3-way HS
- **UDP:** 비연결, 비신뢰, 빠름, 실시간 적합
- **SCTP:** 멀티스트리밍, 멀티호밍, 4-way HS + Cookie
- **Head-of-Line Blocking:** TCP의 스트림 내 순서 의존성 문제
- **멀티호밍:** 복수 IP를 하나의 연결에 묶어 고가용성 제공

### 4. 맥락과 비교

5G 코어 네트워크 인터페이스(N2, N4 등)에서 **SCTP**가 핵심 전송 프로토콜로 사용됩니다. 또한 QUIC(HTTP/3의 기반)는 UDP 위에 TCP와 유사한 신뢰성과 멀티스트리밍을 구현하여 SCTP와 유사한 목표를 달성합니다.

### 5. 실무 제언

VoIP 서비스 구축 시 시그널링(SIP)에는 신뢰성이 필요하여 TCP 또는 SCTP를 사용하고, 미디어(RTP)에는 지연 최소화를 위해 UDP를 사용합니다. 기술사 답안에서 세 프로토콜을 명확한 비교 테이블로 제시하고, SCTP의 멀티스트리밍/멀티호밍 개념을 다이어그램으로 표현하면 차별화된 답안이 됩니다.
