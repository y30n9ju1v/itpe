---
title: "TCP/UDP/SCTP 전송계층 프로토콜 비교"
date: 2026-07-12T18:13:12+09:00
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
| **구성요소** | 1. **TCP vs UDP**: TCP는 3-way+ACK재전송+슬라이딩윈도우 → 신뢰성보장(HTTP/FTP), UDP는 비연결·미보장 → 최소지연(DNS/RTP/게임)<br>2. **SCTP 멀티스트리밍**: 1 Association 내 복수 독립스트림 → HOL Blocking 해소(스트림별 독립TSN)<br>3. **SCTP 멀티호밍**: 복수IP 바인딩+HEARTBEAT 경로감시 → 장애시 자동 Failover<br>4. **SCTP 4-way+Cookie**: INIT/INIT-ACK(Cookie=HMAC-SHA1)/COOKIE-ECHO/COOKIE-ACK → SYN Flooding 방어(검증전 상태미저장)<br>5. **청크구조**: 공통헤더(12B, Verification Tag·Checksum)+Chunk(Type/Flags/Length/Value) 복수 → DATA·SACK·HEARTBEAT·SHUTDOWN·ABORT 유형 |
| **비교** | **TCP**<br>- 헤더: 20~60B<br>- 핸드셰이크: 3-way<br>- 멀티스트리밍/호밍: 없음<br>- 적용: 범용 웹/파일<br><br>**SCTP**<br>- 헤더: 공통헤더 12B+Chunk<br>- 핸드셰이크: 4-way+Cookie<br>- 멀티스트리밍/호밍: 있음<br>- 적용: 5G코어(N2/N4), IMS, SS7/IP<br><br>**UDP**<br>- 헤더: 8B, 신뢰성없음, 실시간미디어 적용 |
| **차별화** | **SCTP 5G 코어망 및 VoIP 실무적용**<br>1. **VoIP 시그널링/미디어 분리**: 시그널링(SIP)은 TCP/SCTP로 신뢰성확보, 미디어(RTP)는 UDP로 지연최소화<br>2. **5G코어 SCTP 멀티호밍 이중화**: AMF-gNB N2인터페이스(NGAP) → SCTP 멀티호밍 주/보조IP 이중화, HEARTBEAT간격 SLA튜닝 자동Failover. N4(SMF-UPF)는 PFCP over UDP 사용<br>3. **IMS SYN Flooding 방어**: SCTP Cookie(HMAC-SHA1 Stateless) → Association수립 전 자원미할당, INIT Flooding 방어. QUIC(HTTP/3)은 UDP위 유사 멀티스트리밍 구현, 웹영역 공존 |
