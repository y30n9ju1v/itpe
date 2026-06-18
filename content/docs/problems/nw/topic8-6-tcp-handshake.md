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

### 출제 배경 및 의도

TCP 연결의 생명주기(설정-사용-종료)는 네트워크 프로그래밍, 보안, 성능 튜닝의 기초다. 3-way Handshake는 양방향 초기 시퀀스 번호(ISN) 동기화를 위한 최소한의 교환이며, 4-way Handshake는 전이중(Full-duplex) 통신의 양방향 독립 종료를 보장하기 위해 필요하다.

SYN Flooding(DoS 공격)과 TIME_WAIT 포트 고갈은 Handshake 메커니즘의 설계에서 비롯된 실무 이슈이며, 이를 해결하는 SYN Cookie·tcp_tw_reuse 기법까지 서술하면 기술사 수준의 심화 답안이 완성된다. UDP와의 비교는 연결 지향 vs 비연결 프로토콜의 본질적 차이를 드러낸다.

### 1. TCP 전송계층, 개요

정 의  • TCP를 연결 지향·신뢰성 기반으로 순서 보장·흐름제어·혼잡제어를 제공하는 전송계층 프로토콜
       - 양방향 Handshake로 연결 설정·종료, 시퀀스 번호로 신뢰성 및 순서를 보장

```
[TCP 연결 생명주기]

CLOSED → [3-way HS] → ESTABLISHED → [데이터 전송] → [4-way HS] → CLOSED
             ↑                                              ↑
      SYN/SYN+ACK/ACK                          FIN/ACK/FIN/ACK
    (ISN 양방향 동기화)                      (양방향 독립 종료)

TCP 제공 서비스:
  신뢰성    ← ACK + 재전송 (RTO / Fast Retransmit)
  순서 보장 ← Sequence Number
  흐름제어  ← Sliding Window (rwnd)
  혼잡제어  ← Slow Start / CUBIC / BBR (cwnd)
  전이중    ← 양방향 동시 전송
```

- TCP는 연결마다 랜덤 ISN을 생성하여 이전 연결의 지연 패킷과 혼동을 방지하고 시퀀스 예측 공격을 차단한다.

### 2. 3-way / 4-way Handshake 동작 및 TCP vs UDP 비교

1) 3-way Handshake (연결 설정) 및 SYN Flooding 대응

```
[3-way Handshake 시퀀스]

Client                              Server
CLOSED                              LISTEN
  │── SYN (seq=x, ISN랜덤) ────────▶│  "x번부터 시작"
  │   [SYN_SENT]                    │  [SYN_RECEIVED]
  │◀── SYN+ACK (seq=y, ack=x+1) ───│  "확인, 나는 y번부터"
  │   [SYN_SENT]                    │  [SYN_RECEIVED]
  │── ACK (ack=y+1) ───────────────▶│  "양방향 동기화 완료"
  │   [ESTABLISHED]                 │  [ESTABLISHED]

3번 교환 필요 이유:
  SYN     → Client→Server 방향 ISN 전달
  SYN+ACK → Server→Client 방향 ISN 전달 + Client ISN 확인
  ACK     → Server ISN 확인 → 양방향 동기화 완료

[SYN Flooding 공격 및 SYN Cookie 방어]
공격: 수만 개 위조 SYN 전송 → 서버 SYN_RECEIVED 상태 누적 → 메모리 고갈
방어: SYN Cookie: 서버가 상태 미저장, SYN+ACK의 ISN을 HMAC 기반 Cookie로 설정
     → ACK 수신 시 Cookie 검증으로 정상 클라이언트 판별
```

2) 4-way Handshake (연결 종료) 및 TIME_WAIT

```
[4-way Handshake 시퀀스]

Client                              Server
ESTABLISHED                         ESTABLISHED
  │── FIN (seq=u) ─────────────────▶│  "내 전송 완료"
  │   [FIN_WAIT1]                   │  [CLOSE_WAIT]
  │◀── ACK (ack=u+1) ───────────────│  "확인 (서버 데이터 전송 중...)"
  │   [FIN_WAIT2]                   │  [CLOSE_WAIT]
  │◀── FIN (seq=v) ─────────────────│  "내 전송도 완료"
  │   [TIME_WAIT]                   │  [LAST_ACK]
  │── ACK (ack=v+1) ───────────────▶│  "종료 확인"
  │   [TIME_WAIT: 2×MSL 대기]       │  [CLOSED]
  │   [CLOSED]

4번 교환 필요 이유: TCP 전이중 → 각 방향을 독립적으로 종료
TIME_WAIT (2×MSL ≈ 2분) 목적:
  ① 마지막 ACK 손실 시 서버 FIN 재전송 수신 가능
  ② 이전 연결 지연 패킷이 새 연결과 혼동되지 않도록 격리
```

3) TCP vs UDP 비교

| 구분 | 항목 | TCP | UDP |
|------|------|------|------|
| 연결 | 방식 | 연결 지향 (3-way HS) | 비연결 (Connectionless) |
| 신뢰성 | ACK/재전송 | 보장 | 미보장 |
| 순서 | 시퀀스 번호 | 보장 | 미보장 |
| 제어 | 흐름/혼잡 | 있음 (rwnd / cwnd) | 없음 |
| 헤더 | 크기 | 20~60바이트 | 8바이트 |
| 브로드캐스트 | 지원 | 미지원 | 지원 |
| 속도 | 지연 | 상대적으로 느림 | 빠름 |
| 적용 서비스 | 예시 | HTTP, FTP, SMTP, DB | DNS, VoIP(RTP), 게임, IPTV |

- TCP는 신뢰성 보장을 위한 오버헤드를 감수하고, UDP는 애플리케이션이 직접 신뢰성을 처리하거나 손실을 허용하는 서비스에 적합하다.

### 3. TIME_WAIT 문제 및 현대 TCP 개선

| 항목 | 문제 | 해결 방안 |
|------|------|------|
| TIME_WAIT 포트 고갈 | 단기 연결 대량 발생 시 포트 소진 | `tcp_tw_reuse`: 안전한 TIME_WAIT 재사용 |
| SYN Flooding | Half-open 연결로 서버 메모리 고갈 | SYN Cookie, 방화벽 SYN Proxy |
| 반복 Handshake 오버헤드 | 매 요청마다 3-way HS 지연 | HTTP Keep-Alive, HTTP/2 멀티플렉싱 |
| Handshake RTT 지연 | 연결 설정에 1 RTT 소요 | TLS 1.3 (0-RTT), QUIC (0/1-RTT) |

- QUIC(HTTP/3)은 UDP 기반으로 연결 설정과 TLS 협상을 0/1-RTT에 완료하여 TCP 3-way HS의 지연을 근본적으로 해소하며, Connection ID 기반으로 IP 변경 시에도 연결을 유지한다.  "끝"

### 실무 제언

**TIME_WAIT 포트 고갈 대응**
- **챌린지**: 초당 수천 건의 단기 HTTP 연결 처리 서버에서 `netstat -an | grep TIME_WAIT` 결과 수만 개 누적, 새 연결 불가 상태 발생
- **제언**: `sysctl net.ipv4.tcp_tw_reuse=1` 설정으로 안전한 TIME_WAIT 재사용 활성화, 근본 해결을 위해 HTTP Keep-Alive 또는 HTTP/2 멀티플렉싱 적용으로 연결 재사용률 향상

**SYN Flooding DDoS 방어 체계 구축**
- **챌린지**: 외부에 노출된 API 서버 대상 SYN Flooding 공격 시 SYN_RECEIVED 상태 큐 포화 → 정상 사용자 연결 불가
- **제언**: OS 레벨 `tcp_syncookies=1` 활성화 + L4 스위치/방화벽에서 SYN Rate Limiting(임계값 초과 시 자동 차단), WAF/DDoS 방어 장비와 연계하여 다층 방어

**고성능 서버 Handshake 지연 최소화**
- **챌린지**: 글로벌 서비스에서 해외 사용자 초기 연결 시 3-way HS + TLS 협상으로 2~3 RTT 소요, 체감 지연 증가
- **제언**: TLS 1.3 적용으로 Handshake를 1 RTT로 단축, CDN 엣지 서버를 사용자 근거리에 배치하여 RTT 자체를 줄이는 물리적 최적화 병행
