---
title: "SSL(Secure Socket Layer) Handshake 과정"
date: 2026-06-23T20:29:59+09:00
tags: ["보안", "SSL", "TLS", "핸드셰이크", "보안프로토콜", "핵토200"]
topic_no1: 8
topic_no2: 1
topic_large: "보안 프로토콜"
topic_small: "SSL"
exam_ref: "합숙_2020.07"
exam_type: "응용"
question_no: "Day-4"
---

## 문제

SSL(Secure Socket Layer) Handshake 과정에 대해 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 보안 프로토콜 |
| 토픽(소) | SSL |
| 출제 | 합숙 2020.07 |
| 유형 | 응용 |
| 번호 | Day-4 |

## 해설

### 출제 배경 및 의도

SSL/TLS는 인터넷 보안 통신의 기반 프로토콜이다. Handshake 단계별 메시지 교환, 인증서 검증, 세션키 생성 과정을 순서대로 서술하고 TLS 1.2와 1.3의 차이를 비교할 수 있어야 한다.

### 1. SSL/TLS 개요

| 항목 | 내용 |
|------|------|
| 정의 | 전송계층(L4)과 응용계층(L7) 사이에서 암호화·인증·무결성을 제공하는 보안 프로토콜 |
| 계층 | TCP 위, HTTP/FTP/SMTP 아래 |
| 현황 | SSL 3.0 이하 폐기, TLS 1.2/1.3 사용(TLS 1.0/1.1 폐기 권고) |
| 제공 서비스 | 서버 인증, 클라이언트 인증(선택), 기밀성, 메시지 무결성 |

### 2. TLS 1.2 Handshake 과정

```
Client                                    Server
  │                                          │
  │──① ClientHello(랜덤, 지원 암호 스위트)──▶│
  │                                          │
  │◀─② ServerHello(선택 암호 스위트, 랜덤)───│
  │◀─③ Certificate(서버 인증서)──────────────│
  │◀─④ ServerKeyExchange(DH 파라미터)────────│
  │◀─⑤ ServerHelloDone──────────────────────│
  │                                          │
  │──⑥ ClientKeyExchange(Pre-Master Secret)─▶│
  │──⑦ ChangeCipherSpec──────────────────────▶│
  │──⑧ Finished(MAC 검증)────────────────────▶│
  │                                          │
  │◀─⑨ ChangeCipherSpec─────────────────────│
  │◀─⑩ Finished(MAC 검증)───────────────────│
  │                                          │
  │════════ 암호화된 데이터 교환 ═════════════│
```

**세션키 생성:**
- Pre-Master Secret + Client Random + Server Random → Master Secret
- Master Secret → 세션키(암호화) + MAC 키 + IV 파생

### 3. TLS 1.3 Handshake (간소화)

```
Client                                    Server
  │                                          │
  │──① ClientHello(키 공유, 암호 스위트)────▶│
  │                                          │
  │◀─② ServerHello + Certificate + Finished─│
  │                                          │
  │──③ Finished──────────────────────────────▶│
  │════════ 암호화된 데이터 교환 ═════════════│
```

- **1-RTT**: 기존 TLS 1.2의 2-RTT에서 단축
- **0-RTT**: 재연결 시 이전 세션 재개(Early Data) — 재전송 공격 주의

### 4. TLS 1.2 vs TLS 1.3 비교

| 항목 | TLS 1.2 | TLS 1.3 |
|------|---------|---------|
| Handshake 라운드 트립 | 2-RTT | 1-RTT (재연결 0-RTT) |
| 키 교환 | RSA, DHE, ECDHE | ECDHE, DHE 만 허용(PFS 필수) |
| 인증 암호화 | 옵션 | AEAD 필수(AES-GCM, ChaCha20-Poly1305) |
| 취약 알고리즘 | RC4, MD5, SHA-1 허용 | 완전 제거 |
| 0-RTT | 없음 | 지원(재전송 공격 위험 있음) |


- 최근 SSL(Secure Socket Layer) Handshake 과정 관련 보안 위협 증가에 대응하여, 서비스 안전성 확보를 위한 체계적인 통제 및 기술 적용이 증대되는 추세임.  "끝"

### 실무 제언

**TLS 1.3 전환 가속화**
- **챌린지**: 일부 레거시 방화벽·IDS가 TLS 1.3을 지원하지 않아 TLS 1.2를 유지하면 BEAST·POODLE 같은 취약점에 노출된다.
- **제언**: Nginx/Apache에서 `ssl_protocols TLSv1.2 TLSv1.3`로 설정하되, TLS 1.3을 우선 협상하도록 구성하고, 방화벽·IDS는 TLS 1.3 지원 버전으로 업그레이드하며 인증서 유효기간을 90일 이하로 단축(자동 갱신 연동)해야 한다.
