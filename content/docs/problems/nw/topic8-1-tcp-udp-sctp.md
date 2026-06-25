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

### 출제 배경 및 의도

인터넷의 모든 서비스는 전송계층 프로토콜 위에서 동작한다. TCP는 웹·파일·이메일 등 신뢰성이 요구되는 서비스의 근간이며, UDP는 DNS·스트리밍·게임 등 속도가 우선인 서비스에 사용된다. SCTP는 2000년대 VoIP 보급과 함께 SS7 시그널링을 IP 망으로 수용하기 위해 탄생하였으며, 현재 5G 코어 네트워크의 핵심 전송 프로토콜로 활용된다.

세 프로토콜은 신뢰성·속도·고가용성이라는 서로 다른 균형점을 제공하므로, 서비스 요구사항에 맞는 프로토콜 선택이 네트워크 설계의 핵심 의사결정이다. 기술사 시험에서는 단순 특성 비교를 넘어 SCTP의 멀티스트리밍·멀티호밍 메커니즘과 5G 적용 사례까지 서술할 것을 요구한다.

### 1. 전송계층 프로토콜(TCP/UDP/SCTP), 개요

정 의  • TCP/UDP/SCTP를 신뢰성·속도·고가용성 간 균형 차이로 설계된 전송계층 프로토콜군
       - 각 프로토콜은 연결 방식·오버헤드·적용 서비스에서 본질적 차이를 가짐

```
[헤더 구조 비교]

TCP 헤더 (20~60B):
├─ Source Port(16) ─── Destination Port(16) ─┤
├──────── Sequence Number(32) ───────────────┤
├──────── Acknowledgment Number(32) ─────────┤
├─ Offset │ Flags(SYN/ACK/FIN) │ Window(16) ─┤
├─ Checksum(16) ──── Urgent Pointer(16) ──────┤

UDP 헤더 (8B):
├─ Source Port(16) ─── Destination Port(16) ─┤
├─ Length(16) ─────── Checksum(16) ───────────┤

SCTP 공통 헤더 (12B) + 청크(Chunk):
├─ Source Port(16) ─── Destination Port(16) ─┤
├────── Verification Tag(32) ────────────────┤
├────── Checksum(32) ────────────────────────┤
├─ [Chunk Type│Flags│Length│Data] × N ────────┤
```

- 헤더 오버헤드는 TCP > SCTP > UDP 순이며, 신뢰성과 기능성은 SCTP ≥ TCP > UDP 순이다.

### 2. TCP·UDP 비교 및 SCTP 핵심 특징

1) TCP와 UDP 비교

| 구분 | 항목 | TCP | UDP |
|------|------|------|------|
| 연결 | 방식 | 연결 지향 (3-way Handshake) | 비연결 (Connectionless) |
| 신뢰성 | ACK/재전송 | 보장 | 미보장 |
| 순서 | 시퀀스 번호 | 보장 | 미보장 |
| 제어 | 흐름/혼잡 | 슬라이딩 윈도우 / Slow Start | 없음 |
| 헤더 | 크기 | 20~60바이트 | 8바이트 |
| 브로드캐스트 | 지원 | 미지원 | 지원 |
| 적용 | 서비스 | HTTP, FTP, SMTP, DB | DNS, VoIP(RTP), 게임, 스트리밍 |

- TCP는 신뢰성 보장을 위한 오버헤드를 감수하고, UDP는 최소 지연을 위해 신뢰성을 응용계층에 위임한다.

2) SCTP(Stream Control Transmission Protocol) 핵심 특징

```
[SCTP 멀티스트리밍·멀티호밍 구조]

멀티스트리밍 (하나의 Association):
┌─ Stream 1: 음성 데이터 ──────────────────────▶
│  Stream 2: 영상 데이터 ───────────────────────▶
└─ Stream 3: 제어 메시지 ──────────────────────▶
  → 스트림 독립: Stream 1 지연이 Stream 2에 영향 없음

멀티호밍 (Failover):
Host A (IP1:주, IP2:보조) ──IP1──▶ Host B (IP3:주, IP4:보조)
                          ──IP2(장애시 자동전환)──▶
  → HEARTBEAT 청크로 경로 상태 주기적 확인
```

| 구분 | TCP 문제점 | SCTP 해결 방안 |
|------|------|------|
| HOL Blocking | 단일 스트림 순서 의존 | 멀티스트리밍으로 스트림 독립 |
| 단일 경로 | 링크 장애 시 연결 끊김 | 멀티호밍으로 자동 Failover |
| SYN Flooding | 반연결(Half-open) 메모리 고갈 | 4-way HS + Stateless Cookie |
| 메시지 경계 | 바이트 스트림 (경계 없음) | 청크 단위 전송 (경계 보존) |

- SCTP는 RFC 4960 기반으로 5G 코어 **N2 인터페이스(AMF-gNB 간 NGAP 전송)**의 하위 전송 프로토콜로 채택되었다. 단, N4 인터페이스(SMF-UPF 간)는 SCTP가 아닌 **PFCP(Packet Forwarding Control Protocol) over UDP**를 사용한다.

### 3. 프로토콜 진화 동향 및 QUIC 비교

| 항목 | TCP | UDP | SCTP | QUIC(HTTP/3) |
|------|------|------|------|------|
| 신뢰성 | 보장 | 없음 | 보장 | 보장 |
| 멀티스트리밍 | 없음 | 없음 | 있음 | 있음 |
| 멀티호밍 | 없음 | 없음 | 있음 | 없음 (연결 마이그레이션) |
| TLS 통합 | 별도 | 별도 | 별도 | 내장 |
| 핸드셰이크 | 3-way | 없음 | 4-way+Cookie | 0/1-RTT |
| 주요 사용처 | 범용 웹/파일 | 실시간 미디어 | 5G 코어·VoIP | HTTP/3 |

- QUIC은 UDP 위에 SCTP와 유사한 멀티스트리밍을 구현하여 웹 영역에서 TCP를 대체하는 추세이며, SCTP는 통신 인프라 전용 고신뢰 트랜스포트로 공존한다.  "끝"

### 실무 제언

**VoIP 시그널링/미디어 프로토콜 분리 설계**
- **챌린지**: SIP 시그널링에 UDP 사용 시 패킷 손실로 호 설정 실패, TCP 사용 시 지연 증가
- **제언**: 시그널링(SIP)은 TCP 또는 SCTP를 사용하여 신뢰성 확보, 미디어(RTP)는 UDP로 지연 최소화하는 이중 프로토콜 설계 적용

**5G 코어 SCTP 멀티호밍 구성**
- **챌린지**: AMF-gNB 간 N2 인터페이스 링크 장애 시 제어 플레인 중단으로 대규모 호 절단
- **제언**: SCTP 멀티호밍으로 주/보조 IP 경로 이중화 구성, HEARTBEAT 주기를 SLA 기반으로 튜닝하여 30초 이내 자동 전환 보장

**QUIC 도입 시 기존 UDP 방화벽 정책 검토**
- **챌린지**: QUIC(UDP 443)이 기업 방화벽에서 차단되어 HTTP/3 성능 이점 미실현
- **제언**: 방화벽 UDP 443 허용 정책 추가 및 QUIC 인식 가능한 NGFW 적용, 불가 시 TCP fallback 자동 전환 확인
