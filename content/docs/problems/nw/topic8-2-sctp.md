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

> **SCTP는 TCP와 UDP의 장점을 결합한 "차세대 전송 프로토콜"이다 — 신뢰성은 TCP처럼, 멀티스트림은 UDP처럼, 고가용성은 SCTP만의 것**

### 1. 출제 배경 및 의도

5G 코어 네트워크, VoIP 시그널링, SS7-over-IP 환경에서 SCTP가 필수 프로토콜입니다. 132회 관리 문제로 출제될 만큼 실무에서의 중요성이 높습니다. TCP의 구조적 한계를 SCTP가 어떻게 해결했는지를 이해하는 것이 핵심입니다.

### 2. 개념의 본질과 작동 메커니즘

#### 가. SCTP 개요와 특징

**탄생 배경:**
- 인터넷 전화(VoIP) 보급으로 SS7(공중전화망 시그널링)을 IP 망에서 운용 필요
- TCP의 단일 스트림, 단일 경로 한계 극복을 위해 IETF RFC 2960 (2000년) 제정
- 현재 RFC 4960으로 업데이트

**SCTP vs TCP vs UDP 핵심 비교:**

| 특성 | TCP | UDP | SCTP |
|---|---|---|---|
| **연결** | 연결 지향 | 비연결 | 연결 지향 (Association) |
| **신뢰성** | 보장 | 미보장 | 보장 |
| **순서 보장** | 전체 보장 | 없음 | 스트림 내에서만 |
| **멀티스트리밍** | 없음 | 없음 | 있음 |
| **멀티호밍** | 없음 | 없음 | 있음 |
| **SYN Flood 방어** | 취약 | 해당없음 | Cookie 방어 |
| **HOL Blocking** | 있음 | 없음 | 없음 (스트림 독립) |

**SCTP 4대 핵심 특징:**

1. **멀티스트리밍 (Multi-streaming)**
   - 하나의 연결(Association) 내 여러 독립 스트림
   - 한 스트림 지연이 다른 스트림 영향 없음
   - 음성/영상/시그널링을 하나의 연결에서 분리 전송

2. **멀티호밍 (Multi-homing)**
   - 하나의 Association에 복수의 IP 주소 바인딩
   - 주 경로 장애 시 보조 경로 자동 전환
   - 통신 단절 없는 고가용성 제공

3. **4-way Handshake + Cookie**
   - TCP 3-way HS의 SYN Flooding 취약점 해결
   - Stateless Cookie로 서버 자원 소모 없이 연결 검증

4. **메시지 경계 보존**
   - TCP는 바이트 스트림 (메시지 경계 없음)
   - SCTP는 청크(Chunk) 단위 전송 → 메시지 경계 보존

#### 나. SCTP 프로토콜 구조 및 동작방식

**SCTP 패킷 구조:**

```
┌────────────────────────────────────────────────┐
│              SCTP Common Header                │
│  Source Port(16) │ Destination Port(16)        │
│  Verification Tag(32)                          │
│  Checksum(32)                                  │
├────────────────────────────────────────────────┤
│              Chunk 1                           │
│  Type(8) │ Flags(8) │ Length(16)              │
│  [Chunk 데이터]                                 │
├────────────────────────────────────────────────┤
│              Chunk 2 (복수 청크 가능)            │
│  ...                                           │
└────────────────────────────────────────────────┘
```

**주요 청크(Chunk) 유형:**

| 청크 타입 | 설명 |
|---|---|
| **INIT** | Association 초기화 요청 |
| **INIT-ACK** | 초기화 응답 (Cookie 포함) |
| **COOKIE-ECHO** | Cookie 반환 (클라이언트) |
| **COOKIE-ACK** | Cookie 확인 (Association 설정 완료) |
| **DATA** | 실제 데이터 전송 |
| **SACK** | 선택적 확인 응답 |
| **HEARTBEAT** | 경로 활성 확인 |
| **SHUTDOWN** | 연결 종료 |
| **ERROR** | 오류 보고 |

**4-way Handshake 상세 동작:**

```
Client                              Server
  │── INIT (Initiate Tag=1234) ────▶│
  │   (내 초기 TSN, 지원 IP 목록)   │ (Cookie 생성, 상태 저장 안 함)
  │                                  │
  │◀── INIT-ACK (Cookie=XYZ) ───────│
  │   (서버 TSN, 지원 IP 목록,       │
  │    State Cookie)                 │
  │                                  │
  │── COOKIE-ECHO (Cookie=XYZ) ────▶│
  │   (Cookie 그대로 반환)           │ (Cookie 검증 → Association 설정)
  │                                  │
  │◀── COOKIE-ACK ──────────────────│
  [Association 설정 완료 - 데이터 전송 시작]
```

**멀티호밍 동작:**

```
Host A                              Host B
IP: 10.0.0.1 (주)                  IP: 20.0.0.1 (주)
IP: 10.0.0.2 (보조)                IP: 20.0.0.2 (보조)

정상:
10.0.0.1 ────────────────────────▶ 20.0.0.1 (주 경로)

장애 발생:
10.0.0.1 ─✕─ (장애)
10.0.0.2 ────────────────────────▶ 20.0.0.1 (보조 경로 자동 전환)
[HEARTBEAT으로 경로 상태 주기적 확인]
```

### 3. 핵심 키워드 (Must-Have)

- **Association:** SCTP의 연결 단위 (TCP의 Connection에 해당)
- **TSN (Transmission Sequence Number):** 청크 순서 번호
- **Stream:** Association 내 독립 데이터 흐름
- **Chunk:** SCTP의 기본 전송 단위 (데이터 + 제어)
- **Cookie:** 4-way HS에서 SYN Flooding 방어 메커니즘
- **HEARTBEAT:** 멀티호밍 경로 활성 확인

### 4. 맥락과 비교

5G 코어 네트워크에서 AMF-RAN 간 N2 인터페이스, SMF-UPF 간 N4 인터페이스에 SCTP가 사용됩니다. 또한 QUIC 프로토콜도 UDP 위에 SCTP와 유사한 멀티스트리밍 기능을 구현하여 HTTP/3의 기반이 되었습니다.

### 5. 실무 제언

통신사 코어 네트워크(IMS, 5G) 구축 시 SCTP 멀티호밍 설계로 네트워크 장애에 대한 고가용성을 확보합니다. 특히 Active-Standby 구성에서 SCTP의 자동 경로 전환(Failover)은 SLA(서비스 수준 협약)를 만족시키는 핵심 기능입니다. 기술사 답안에서 청크 구조 다이어그램과 4-way HS 흐름, 멀티호밍 Failover 시나리오를 체계적으로 서술하면 고득점을 기대할 수 있습니다.
