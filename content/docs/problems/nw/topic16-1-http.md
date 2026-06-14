---
title: "HTTP 프로토콜과 QUIC, HTTP 3.0 vs 2.0 비교"
date: 2026-06-14T09:00:00+09:00
tags: ["네트워크", "NW", "핵토200"]
topic_no1: 16
topic_no2: 1
topic_large: "HTTP"
topic_small: "HTTP"
exam_ref: "모의_2021.05"
exam_type: "공통"
question_no: 4
---

## 문제

HTTP 프로토콜을 설명하시오.
가. HTTP 프로토콜
나. QUIC 프로토콜
다. HTTP 프로토콜 3.0과 2.0 비교

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | HTTP |
| 토픽(소) | HTTP |
| 출제 | 모의_2021.05회 |
| 유형 | 공통 |
| 번호 | 4 |

## 해설

> **HTTP의 진화는 "한 번에 하나씩 주문"에서 "동시에 여러 주문을 한 번에" 그리고 "트럭을 아예 바꾼" 혁신의 역사다**

### 1. 출제 배경 및 의도

HTTP는 웹의 기반 프로토콜입니다. HTTP/1.1 → HTTP/2 → HTTP/3(QUIC 기반)으로 진화하면서 웹 성능이 급격히 향상되었습니다. 각 버전의 핵심 혁신과 차이점을 이해하는 것이 목표입니다.

### 2. 개념의 본질과 작동 메커니즘

#### 가. HTTP 프로토콜 버전별 진화

**HTTP/1.0 (1996):**
```
요청/응답마다 새 TCP 연결 생성
GET /image.jpg → [응답] → TCP 종료
GET /style.css → [응답] → TCP 종료  ← 매번 3-way HS 오버헤드
```

**HTTP/1.1 (1997, 현재도 사용):**
```
Keep-Alive: TCP 연결 재사용 (Persistent Connection)
Pipelining: 응답 기다리지 않고 연속 요청 (이론상)
→ 그러나 Head-of-Line Blocking 문제 여전히 존재

GET /image.jpg │
GET /style.css │← 순서대로 응답해야 함 (앞 응답 막히면 뒤도 지연)
GET /script.js │
```

**HTTP/2 (2015):**
```
바이너리 프레이밍: 텍스트 → 바이너리 프레임
멀티플렉싱: 하나의 TCP 연결에서 여러 스트림 병렬 처리
헤더 압축: HPACK (반복 헤더 압축)
서버 푸시: 요청 없이 서버가 미리 리소스 전송

┌─ TCP 연결 1개 ──────────────────────────────────┐
│ [스트림1: image.jpg]  [스트림2: style.css]       │
│ [스트림3: script.js]                             │
│ 모두 동시에! ← 멀티플렉싱                         │
└─────────────────────────────────────────────────┘

단, TCP 계층 HOL Blocking은 여전히 존재
(패킷 손실 시 TCP가 전체 연결 대기)
```

#### 나. QUIC 프로토콜

**탄생 배경:** Google이 2013년 개발. TCP의 구조적 한계(HOL Blocking, 연결 설정 지연)를 UDP 기반으로 해결

```
기존 HTTP/2 스택:          HTTP/3 스택:
HTTP/2                     HTTP/3
  TLS 1.3                    QUIC (TLS 1.3 내장)
  TCP                        UDP
  IP                         IP
  
QUIC이 TCP + TLS를 UDP 위에서 자체 구현
```

**QUIC 핵심 특징:**

**1) 0-RTT/1-RTT 연결 설정**
```
TCP + TLS 1.3 기존:
SYN → SYN+ACK → ACK (1 RTT) + TLS HS (1~2 RTT) = 2~3 RTT

QUIC 첫 연결: 1 RTT (암호화 핸드셰이크 동시 진행)
QUIC 재연결: 0-RTT (이전 세션 키 재사용)
```

**2) 스트림별 독립 패킷 손실 복구**
```
HTTP/2 + TCP:
패킷 손실 → TCP가 전체 연결 블로킹 → 모든 스트림 지연

QUIC:
패킷 손실 → 해당 스트림만 대기 → 다른 스트림 계속 진행
→ 애플리케이션 레벨 HOL Blocking 없음
```

**3) 연결 마이그레이션 (Connection Migration)**
```
기존 TCP: IP+포트 변경 시 연결 끊김 (Wi-Fi → LTE 전환)
QUIC: Connection ID로 연결 식별 → IP 변경 후에도 연결 유지
```

#### 다. HTTP/2 vs HTTP/3 비교

| 비교 항목 | HTTP/2 | HTTP/3 |
|---|---|---|
| **전송 기반** | TCP | UDP (QUIC) |
| **멀티플렉싱** | TCP 레벨 HOL 있음 | 완전 독립 스트림 |
| **연결 설정** | 1~2 RTT (+ TLS) | 1 RTT (0-RTT 가능) |
| **헤더 압축** | HPACK | QPACK |
| **TLS** | 별도 레이어 | QUIC 내장 |
| **연결 마이그레이션** | 미지원 | 지원 (Connection ID) |
| **NAT 친화성** | 좋음 | 방화벽 UDP 차단 이슈 |
| **도입 현황** | 광범위 사용 | 점진적 확대 (구글, 페이스북) |

```
HTTP 버전별 연결 비교:

HTTP/1.1:  연결1[req1, res1]  연결2[req2, res2]  연결3[req3, res3]
            (직렬, 연결마다 HS)

HTTP/2:    연결1[스트림1][스트림2][스트림3]...(TCP HOL 존재)

HTTP/3:    QUIC[스트림1][스트림2][스트림3]...(완전 독립 스트림)
```

### 3. 핵심 키워드 (Must-Have)

- **HOL (Head-of-Line) Blocking:** 앞 패킷/요청 지연이 뒤를 막는 현상
- **멀티플렉싱:** 하나의 연결에서 병렬 스트림 전송
- **QUIC:** UDP 기반 차세대 전송 프로토콜 (HTTP/3의 기반)
- **0-RTT:** QUIC의 재연결 시 핸드셰이크 없는 즉시 연결
- **Connection Migration:** IP 변경에도 연결 유지 (QUIC)

### 4. 맥락과 비교

HTTP/3(QUIC)의 가장 큰 장점은 **모바일 환경**에서 발휘됩니다. Wi-Fi↔LTE 전환 시 TCP는 연결이 끊기지만 QUIC은 연속성을 유지합니다. 2022년 기준 전체 웹 트래픽의 약 25~30%가 HTTP/3을 사용합니다. (Google, Facebook, Cloudflare 등 대형 서비스 주도)

### 5. 실무 제언

Nginx, Apache HTTP Server, Caddy 등 주요 웹 서버가 HTTP/3를 지원하기 시작했습니다. 기업 환경에서 HTTP/3 도입 시 UDP 443 포트 방화벽 허용, 로드밸런서 QUIC 지원 여부 확인이 선행 조건입니다. 기술사 답안에서 HTTP 버전별 진화 타임라인을 서술하고, QUIC의 4대 혁신(0-RTT, 독립 스트림, Connection Migration, 내장 TLS)을 명확히 설명하면 최신 기술 트렌드를 반영한 고득점 답안이 됩니다.
