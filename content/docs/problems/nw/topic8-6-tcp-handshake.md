---
title: "TCP 3-way/4-way Handshake와 UDP 비교"
date: 2026-06-14T09:00:00+09:00
tags: ["네트워크", "NW", "핵토200"]
topic_no1: 8
topic_no2: 6
topic_large: "TCP 전송계층"
topic_small: "TCP 전송계층"
exam_ref: "125"
exam_type: "응용"
question_no: 3
---

## 문제

TCP 전송계층 프로토콜에 대하여 다음을 설명하시오.
가. TCP 전송계층 개념
나. 3-way handshake와 4-way handshake 설명
다. TCP와 UDP 비교

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | TCP 전송계층 |
| 토픽(소) | TCP 전송계층 |
| 출제 | 125회 |
| 유형 | 응용 |
| 번호 | 3 |

## 해설

> **3-way Handshake는 "전화 연결"이고, 4-way는 "정중한 전화 종료"다 — 각각 동기화와 독립적 종료를 위한 최소한의 신호 교환**

### 1. 출제 배경 및 의도

TCP 연결의 생명주기(설정-사용-종료)는 네트워크 프로그래밍과 보안의 기초입니다. SYN Flooding, TIME_WAIT 등 실무 이슈와 직접 연결됩니다.

### 2. 개념의 본질과 작동 메커니즘

#### 가. TCP 전송계층 개념

TCP(Transmission Control Protocol)는 전송계층의 연결 지향 프로토콜로, 다음 서비스를 제공합니다:

- **신뢰성:** 패킷 손실 시 재전송, ACK 확인
- **순서 보장:** 시퀀스 번호(Sequence Number)로 순서 재조합
- **흐름제어:** 수신자 처리 능력에 맞춘 전송 속도 조절
- **혼잡제어:** 네트워크 혼잡 감지 및 전송률 조절
- **전이중 통신:** 양방향 동시 전송 가능

#### 나-1. 3-way Handshake (연결 설정)

**목적:** 양쪽의 초기 시퀀스 번호(ISN) 동기화 및 연결 설정

```
Client                          Server
CLOSED                          LISTEN
  │                               │
  │── SYN (seq=x) ───────────────▶│  "나 x번부터 시작할게"
  │   [SYN_SENT]                  │  [SYN_RECEIVED]
  │                               │
  │◀── SYN+ACK (seq=y, ack=x+1) ─│  "알겠어, 나는 y번부터"
  │   [SYN_SENT]                  │  [SYN_RECEIVED]
  │                               │
  │── ACK (ack=y+1) ─────────────▶│  "확인!"
  │   [ESTABLISHED]               │  [ESTABLISHED]
  │                               │
  [데이터 전송 가능]
```

**3번 교환이 필요한 이유:**
- 1번(SYN): 클라이언트 → 서버 방향 시퀀스 번호 동기화
- 2번(SYN+ACK): 서버 → 클라이언트 방향 동기화 + 1번 확인
- 3번(ACK): 2번 확인 → 양방향 모두 동기화 완료

**보안 문제 - SYN Flooding:**
```
공격자가 수만 개의 SYN 전송 (응답 없음)
서버: SYN_RECEIVED 상태로 반연결(Half-open) 유지
→ 서버 메모리 고갈 → DoS 공격

대응: SYN Cookie (서버가 상태 저장 없이 쿠키로 검증)
     방화벽 SYN Proxy
```

#### 나-2. 4-way Handshake (연결 종료)

**목적:** 양방향 통신이 독립적으로 종료됨을 보장

```
Client                          Server
ESTABLISHED                     ESTABLISHED
  │                               │
  │── FIN (seq=u) ───────────────▶│  "나 보낼 거 다 보냈어"
  │   [FIN_WAIT1]                 │  [CLOSE_WAIT]
  │                               │
  │◀── ACK (ack=u+1) ─────────────│  "알겠어"
  │   [FIN_WAIT2]                 │  [CLOSE_WAIT]
  │                               │  (서버가 남은 데이터 전송 중...)
  │◀── FIN (seq=v) ───────────────│  "나도 다 보냈어"
  │   [TIME_WAIT]                 │  [LAST_ACK]
  │                               │
  │── ACK (ack=v+1) ─────────────▶│  "알겠어, 종료!"
  │   [TIME_WAIT: 2*MSL 대기]     │  [CLOSED]
  │                               │
  [CLOSED]
```

**4번 교환이 필요한 이유:**
- 클라이언트 FIN: 클라이언트→서버 방향 종료
- 서버 ACK: 클라이언트 FIN 확인
- 서버 FIN: 서버→클라이언트 방향 종료 (별도 단계)
- 클라이언트 ACK: 서버 FIN 확인

**TIME_WAIT (2*MSL = 보통 2분):**
```
마지막 ACK가 분실되었을 경우 서버가 FIN 재전송 → 클라이언트가 수신 가능
이전 연결의 지연 패킷이 새 연결과 혼동되지 않도록 격리
```

#### 다. TCP vs UDP 비교

| 비교 항목 | TCP | UDP |
|---|---|---|
| **연결 방식** | 연결 지향 (3-way HS) | 비연결 (Connectionless) |
| **신뢰성** | 보장 (ACK, 재전송) | 미보장 |
| **순서 보장** | 보장 | 미보장 |
| **흐름 제어** | 있음 (슬라이딩 윈도우) | 없음 |
| **혼잡 제어** | 있음 | 없음 |
| **헤더 크기** | 20~60바이트 | 8바이트 |
| **전이중** | 지원 | 지원 |
| **브로드캐스트** | 미지원 | 지원 |
| **속도** | 상대적으로 느림 | 빠름 |
| **사용 예** | HTTP, FTP, 이메일, DB | DNS, VoIP, 게임, 스트리밍 |

### 3. 핵심 키워드 (Must-Have)

- **ISN (Initial Sequence Number):** 연결마다 랜덤 생성 (예측 공격 방지)
- **SYN, ACK, FIN:** TCP 제어 플래그
- **TIME_WAIT:** 종료 후 2*MSL 대기, 안정적 종료 보장
- **Half-close:** FIN 전송 후에도 반대 방향 수신 가능
- **SYN Cookie:** SYN Flooding 방어 기법

### 4. 맥락과 비교

**TIME_WAIT 문제와 해결:**
고성능 서버에서 대량의 단기 TCP 연결이 TIME_WAIT 상태로 쌓여 포트 고갈 문제가 발생합니다. 해결책:
- `SO_REUSEADDR`: 같은 포트 재사용 허용
- `tcp_tw_reuse`: 안전한 TIME_WAIT 소켓 재사용
- Keep-Alive: 연결을 유지하여 반복 Handshake 방지 (HTTP/1.1)

### 5. 실무 제언

웹 서버 성능 튜닝 시 `netstat -an | grep TIME_WAIT` 명령으로 TIME_WAIT 수를 모니터링합니다. 대량 발생 시 HTTP Keep-Alive 적용 또는 `tcp_tw_reuse` 설정으로 완화합니다. 기술사 답안에서 3-way/4-way HS를 시퀀스 다이어그램으로 명확히 표현하고, 각 단계의 목적과 상태 전이(SYN_SENT, ESTABLISHED, TIME_WAIT 등)를 함께 서술하면 높은 점수를 받을 수 있습니다.
