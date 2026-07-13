---
title: "TCP/UDP/SCTP 전송계층 프로토콜 비교"
date: 2026-07-13T18:13:12+09:00
tags: ["네트워크", "TCP", "UDP", "SCTP", "멀티스트리밍", "멀티호밍", "서브노트"]
draft: false
---

# TCP/UDP/SCTP 전송계층 프로토콜 비교 서브노트

> **두음 머리에 박기 🧠**
> - **스·호·보·메** (SCTP가 TCP 한계를 극복하는 4대 특징: **스**트림 멀티플렉싱, **호**밍 멀티호밍, **보**안강화 4-way+Cookie, **메**시지 경계 청크 단위)
> - **I·I·C·C** (SCTP 4-way Handshake: **I**NIT → **I**NIT-ACK(Cookie) → **C**OOKIE-ECHO → **C**OOKIE-ACK)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **TCP/UDP/SCTP 전송계층 프로토콜 (SCTP, Stream Control Transmission Protocol)** |
| **정의** | 신뢰성·속도·고가용성 간 서로 다른 균형점을 제공하는 전송계층 프로토콜군으로, TCP는 연결지향 신뢰성 전송, UDP는 비연결 저지연 전송을 담당하며, SCTP는 멀티스트리밍·멀티호밍으로 TCP의 HOL Blocking과 단일 경로 장애 문제를 해결한 연결지향 프로토콜(RFC 4960)임 |
| **키워드** | 3-way(TCP) vs 4-way+Cookie(SCTP), 멀티스트리밍, 멀티호밍(HEARTBEAT), Chunk, 5G N2/N4 인터페이스 |
| **개념도** | SCTP Association: Stream 0(시그널링)｜Stream 1(음성)｜Stream 2(제어) — 스트림 독립(HOL Blocking 없음)<br>멀티호밍: Host A(IP1 주,IP2 보조) → Host B(IP3 주,IP4 보조), IP1 장애 시 HEARTBEAT로 IP2 자동 전환<br>4-way Handshake: Client --INIT--> Server --INIT-ACK(Cookie)--> Client --COOKIE-ECHO--> Server --COOKIE-ACK--> [Association 수립] |
| **구성요소** | 1. **TCP vs UDP**: TCP는 3-way Handshake·ACK 재전송·슬라이딩 윈도우로 신뢰성 보장(HTTP/FTP), UDP는 비연결·미보장으로 최소 지연(DNS/RTP/게임)<br>2. **SCTP 멀티스트리밍**: 하나의 Association 내 복수 독립 스트림으로 HOL Blocking 해소(스트림별 독립 TSN)<br>3. **SCTP 멀티호밍**: 복수 IP 바인딩과 HEARTBEAT 경로 감시로 장애 시 자동 Failover<br>4. **SCTP 4-way+Cookie**: INIT/INIT-ACK(Cookie=HMAC-SHA1)/COOKIE-ECHO/COOKIE-ACK로 SYN Flooding 방어(Cookie 검증 전 상태 미저장)<br>5. **청크(Chunk) 구조**: SCTP 공통헤더(12B, Verification Tag·Checksum) + Chunk(Type/Flags/Length/Value) 복수 포함, DATA·SACK·HEARTBEAT·SHUTDOWN·ABORT 등 유형 |
| **비교** | **TCP**<br>- 헤더: 20~60B<br>- 핸드셰이크: 3-way<br>- 멀티스트리밍/멀티호밍: 없음<br>- 적용: 범용 웹/파일<br><br>**SCTP**<br>- 헤더: 공통헤더 12B+Chunk<br>- 핸드셰이크: 4-way+Cookie<br>- 멀티스트리밍/멀티호밍: 있음<br>- 적용: 5G 코어(N2/N4), IMS, SS7/IP<br><br>**UDP**<br>- 헤더: 8B, 신뢰성 없음, 실시간 미디어 적용 |
| **차별화** | **SCTP 5G 코어망 및 VoIP 실무 적용**<br>1. **VoIP 시그널링/미디어 프로토콜 분리**: 시그널링(SIP)은 TCP 또는 SCTP로 신뢰성 확보, 미디어(RTP)는 UDP로 지연 최소화하는 이중 프로토콜 설계<br>2. **5G 코어 SCTP 멀티호밍 이중화**: AMF-gNB 간 N2 인터페이스(NGAP 전송)에 SCTP 멀티호밍으로 주/보조 IP 경로 이중화, HEARTBEAT 간격 SLA 기반 튜닝으로 자동 Failover 보장. N4 인터페이스(SMF-UPF)는 SCTP가 아닌 PFCP over UDP 사용<br>3. **IMS 환경 SYN Flooding 방어**: SCTP Cookie(HMAC-SHA1 Stateless) 메커니즘으로 Association 수립 전 자원 미할당, INIT Flooding 공격 방어. QUIC(HTTP/3)은 UDP 위에서 SCTP와 유사한 멀티스트리밍을 구현하며 웹 영역에서 공존 |
