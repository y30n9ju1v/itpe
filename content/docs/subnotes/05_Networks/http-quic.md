---
title: "HTTP 프로토콜과 QUIC"
date: 2026-07-13T18:13:12+09:00
tags: ["네트워크", "HTTP", "QUIC", "HTTP2", "HTTP3", "HOL Blocking", "서브노트"]
draft: false
---

# HTTP 프로토콜과 QUIC 서브노트

> **두음 머리에 박기 🧠**
> - **1.0·1.1·2·3** (HTTP 진화: 매요청 새연결(1.0) → Keep-Alive(1.1) → 멀티플렉싱(2) → QUIC기반(3))
> - **연·홀·이·암** (QUIC 4대 혁신: **연**결설정 1RTT/0-RTT, **홀**블로킹 스트림별 독립 복구, **이**동 Connection ID로 유지, **암**호화 TLS1.3 내장)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **HTTP 프로토콜 진화 및 QUIC(HTTP/3)** |
| **정의** | 클라이언트와 서버 간 하이퍼텍스트 문서를 전송하기 위한 무상태(Stateless) 애플리케이션 계층 요청-응답 프로토콜로, TCP 기반 HTTP/1.1·HTTP/2의 HOL Blocking 한계를 극복하기 위해 UDP 기반 QUIC을 전송 계층으로 채택한 HTTP/3(RFC 9114)로 진화함 |
| **키워드** | HOL Blocking, 멀티플렉싱, HPACK/QPACK, Connection Migration, 0-RTT, TLS 1.3 내장 |
| **개념도** | `HTTP/1.1`: [연결1][연결2][연결3] 각각 req/res (다수 TCP 연결, HOL 있음)<br>`HTTP/2`: [TCP 연결1개] 내 [스트림1][스트림2][스트림3] 멀티플렉싱 (TCP 레벨 HOL 잔존)<br>`HTTP/3`: [QUIC 연결] 내 완전 독립 스트림 (HOL Blocking 완전 제거) |
| **구성요소** | 1. **HTTP 버전별 혁신**: HTTP/1.0(1996, 요청마다 새 연결) → HTTP/1.1(1997, Keep-Alive) → HTTP/2(2015, 멀티플렉싱·HPACK·서버푸시) → HTTP/3(2022, QUIC 기반)<br>2. **QUIC 4대 혁신**: 연결설정(1RTT/0-RTT, 기존 TCP+TLS는 2~3RTT), HOL차단 해소(스트림별 독립 손실 복구), 연결이동(Connection ID로 IP 변경 후에도 세션 유지), 암호화(TLS 1.3 프로토콜 레벨 내장)<br>3. **QUIC 스택**: [HTTP/3]-[QUIC(TLS 1.3 내장)]-[UDP]-[IP] vs [HTTP/2]-[TLS 1.3]-[TCP]-[IP]<br>4. **헤더 압축**: HTTP/2는 HPACK, HTTP/3는 QPACK |
| **비교** | **HTTP/2**<br>- 전송 기반: TCP<br>- 멀티플렉싱: TCP HOL 잔존<br>- 연결 마이그레이션: 미지원<br>- 방화벽 친화성: 높음<br><br>**HTTP/3(QUIC)**<br>- 전송 기반: UDP<br>- 멀티플렉싱: 완전 독립 스트림<br>- 연결 마이그레이션: 지원(Connection ID)<br>- 방화벽 친화성: UDP 차단 이슈 있음 |
| **차별화** | **HTTP/3 도입 및 모바일 최적화 실무 전략**<br>1. **UDP 443 방화벽 사전 검토**: 기업 방화벽이 UDP 443을 차단하면 HTTP/3이 HTTP/2로 자동 폴백되므로, 방화벽 허용 정책 및 로드밸런서·CDN의 QUIC 지원 여부 사전 확인, Alt-Svc 헤더 기반 점진적 마이그레이션<br>2. **모바일 Connection Migration 활용**: Wi-Fi↔LTE 핸드오버 시 QUIC의 Connection ID 기반 연결 관리로 세션 연속성 보장, TCP 재수립 지연 제거<br>3. **레거시 HTTP/2 단계적 전환**: nginx http2 지시자로 무중단 전환, HPACK 헤더 압축(반복 요청 헤더 60~80% 절감) 및 서버 푸시로 초기 로드 시간 단축 |
