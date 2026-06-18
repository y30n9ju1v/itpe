---
title: "SCTP(Stream Control Transmission Protocol) 구조와 동작"
date: 2026-06-14T09:00:00+09:00
tags: ["네트워크", "NW", "핵토200"]
topic_no1: 8
topic_no2: 2
topic_large: "TCP 전송계층"
topic_small: "SCTP"
exam_ref: "132"
exam_type: "관리"
question_no: 3
---

## 문제

SCTP(Stream Control Transmission Protocol)와 관련하여 다음을 설명하시오.
가. SCTP 개요와 특징
나. SCTP 프로토콜(Protocol) 구조 및 동작방식

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | TCP 전송계층 |
| 토픽(소) | SCTP |
| 출제 | 132회 |
| 유형 | 관리 |
| 번호 | 3 |

## 해설

### 출제 배경 및 의도

SCTP(Stream Control Transmission Protocol)는 2000년 IETF RFC 2960으로 제정되어 SS7 시그널링의 IP 망 수용이라는 구체적 요구를 배경으로 탄생하였다. VoIP 확산, 4G/5G 코어 네트워크 구축, IMS 아키텍처 도입과 함께 통신 인프라의 핵심 전송 프로토콜로 자리잡았다.

132회 관리 문제로 출제된 것은 통신사·SI 현장에서의 실무 중요성을 반영한다. TCP의 구조적 한계인 HOL Blocking·단일 경로를 SCTP가 어떻게 극복하였는지, 그리고 4-way Handshake + Cookie 메커니즘으로 SYN Flooding을 방어하는 방식이 핵심 평가 포인트다.

### 1. SCTP(Stream Control Transmission Protocol), 개요

정 의  • SCTP를 멀티스트리밍·멀티호밍으로 TCP의 구조적 한계를 극복한 연결 지향 전송 프로토콜
       - RFC 4960 기반, SS7-over-IP 시그널링 및 5G 코어 네트워크 표준 전송 프로토콜

```
[SCTP Association 구조]

         ┌── Stream 0 (시그널링) ───────────────────▶
         │                                           
Host A ──┼── Stream 1 (음성 데이터) ───────────────▶ Host B
(IP1,IP2)│                                          (IP3,IP4)
         └── Stream 2 (제어 메시지) ──────────────▶

주 경로:  IP1 ──────────────────────────────────▶ IP3
보조 경로: IP2 (IP1 장애 시 HEARTBEAT로 자동 감지·전환)
```

- 하나의 Association 내 스트림 독립성과 멀티 경로 이중화로 통신 인프라의 고가용성을 실현한다.

### 2. SCTP 특징 및 프로토콜 구조·동작

1) SCTP 4대 핵심 특징 및 TCP 한계 극복

| 구분 | TCP 문제점 | SCTP 해결 방안 | 핵심 메커니즘 |
|------|------|------|------|
| ① 멀티스트리밍 | HOL Blocking (단일 스트림 순서 의존) | Association 내 복수 독립 스트림 | 스트림별 독립 TSN |
| ② 멀티호밍 | 단일 경로 장애 시 연결 끊김 | 복수 IP 바인딩·자동 Failover | HEARTBEAT 경로 감시 |
| ③ 보안 강화 | SYN Flooding 취약 (Half-open 메모리 고갈) | 4-way HS + Stateless Cookie | Cookie 검증 후 Association |
| ④ 메시지 경계 | 바이트 스트림 (경계 없음) | 청크(Chunk) 단위 전송 | Chunk Type·Length |

- 멀티호밍은 단순 이중화를 넘어 서비스 무중단 Failover를 보장하며, 통신사 SLA(99.999%) 달성의 핵심 기반이다.

2) SCTP 프로토콜 구조 및 4-way Handshake 동작

```
[SCTP 패킷 구조]
┌────────────────────────────────────────┐
│           SCTP Common Header           │
│  Source Port(16) │ Dest Port(16)       │
│  Verification Tag(32)                  │
│  Checksum(32)  ← CRC-32c              │
├────────────────────────────────────────┤
│  Chunk 1: Type(8)│Flags(8)│Length(16) │
│           [Chunk Value]                │
├────────────────────────────────────────┤
│  Chunk 2 (하나의 패킷에 복수 청크 가능) │
└────────────────────────────────────────┘

[4-way Handshake + Cookie]
Client                           Server
  │── INIT (InitTag, TSN, IP목록) ──▶│ (Cookie 생성, 상태 미저장)
  │◀── INIT-ACK (Cookie=HMAC-SHA1) ──│
  │── COOKIE-ECHO (Cookie 반환) ────▶│ (Cookie 검증 → Association 설정)
  │◀── COOKIE-ACK ──────────────────│
  [데이터 전송 시작 (DATA/SACK 청크)]
```

| 구분 | 청크 유형 | 설명 |
|------|------|------|
| 연결 설정 | INIT / INIT-ACK | Association 초기화·응답 (Cookie 포함) |
| | COOKIE-ECHO / COOKIE-ACK | Cookie 반환·검증 (SYN Flooding 방어) |
| 데이터 전송 | DATA | 실제 데이터 전송 (스트림 번호 포함) |
| | SACK | 선택적 누적 확인 응답 |
| 경로 관리 | HEARTBEAT / HEARTBEAT-ACK | 멀티호밍 경로 활성 주기적 확인 |
| 연결 종료 | SHUTDOWN / SHUTDOWN-ACK / SHUTDOWN-COMPLETE | 3단계 정상 종료 |
| 오류 | ERROR / ABORT | 오류 보고·강제 종료 |

- SACK는 수신 갭(Gap)을 명시적으로 보고하여 불필요한 재전송을 최소화하고 처리량을 향상시킨다.

### 3. SCTP 적용 현황 및 프로토콜 진화 비교

| 항목 | SCTP | TCP | QUIC (HTTP/3) |
|------|------|------|------|
| 멀티스트리밍 | 있음 (Association 내) | 없음 | 있음 (UDP 기반) |
| 멀티호밍 | 있음 (복수 IP Failover) | 없음 | 없음 (연결 마이그레이션) |
| 핸드셰이크 | 4-way + Cookie | 3-way | 0/1-RTT |
| 보안 | 별도 TLS | 별도 TLS | TLS 1.3 내장 |
| 주요 적용 | 5G N2/N4, IMS, SS7/IP | 범용 | 웹 (HTTP/3) |
| 표준 | RFC 4960 | RFC 9293 | RFC 9000 |

- 5G 코어에서 AMF-RAN 간 N2, SMF-UPF 간 N4 인터페이스에 SCTP가 표준 전송으로 채택되었으며, QUIC는 웹 영역에서 유사한 목표를 UDP 위에서 실현하며 공존한다.  "끝"

### 실무 제언

**5G 코어 SCTP 멀티호밍 이중화 설계**
- **챌린지**: AMF 단일 IP 구성 시 네트워크 인터페이스 장애로 N2 인터페이스 중단, 대규모 호 절단 발생
- **제언**: AMF·gNB 양단에 SCTP 멀티호밍 구성(주 IP/보조 IP), HEARTBEAT 간격을 1초로 설정하여 3초 내 자동 Failover 보장, Active-Active 대신 Active-Standby로 경로 우선순위 명시

**IMS 환경 SYN Flooding 방어**
- **챌린지**: 공개 SIP 서버에 대한 INIT Flooding 공격으로 서버 메모리 고갈 및 서비스 중단
- **제언**: SCTP Cookie(HMAC-SHA1 기반 Stateless) 메커니즘으로 Association 수립 전 자원 미할당, 추가로 방화벽에서 INIT 메시지 Rate Limiting 적용

**SCTP 스트림 수 최적화 튜닝**
- **챌린지**: 스트림 수를 과도하게 설정 시 오버헤드 증가, 너무 적으면 HOL Blocking 재발
- **제언**: 서비스 유형별(시그널링/미디어/제어) 스트림 분리 설계, 초기 협상(INIT)에서 MAX_STREAMS를 서비스 프로파일 기반으로 명시적 설정
