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

### 출제 배경 및 의도

HTTP(HyperText Transfer Protocol)는 1991년 초기 웹 탄생 이후 인터넷 통신의 기반 프로토콜로 자리 잡았다. 초기 HTTP/1.0의 단순한 요청-응답 구조는 웹 복잡도 증가에 따른 성능 한계를 노출하였고, 이를 극복하기 위한 지속적 혁신이 HTTP/1.1 → HTTP/2 → HTTP/3의 진화 경로를 만들어 왔다.

HTTP/3는 기존 TCP 기반 전송 계층을 Google이 개발한 QUIC 프로토콜(UDP 기반)로 완전히 교체하는 파격적 혁신으로, 모바일 환경에서의 연결 끊김 문제와 HOL Blocking을 근본적으로 해결한다. 2022년 표준화(RFC 9114) 이후 전 세계 웹 트래픽의 25~30%가 HTTP/3을 사용하며, 기술사 시험에서 QUIC의 4대 혁신과 버전별 비교가 핵심 출제 포인트다.

### 1. HTTP 프로토콜, 개요

정 의  • 클라이언트와 서버 간 하이퍼텍스트 문서를 전송하기 위한 애플리케이션 계층 요청-응답 프로토콜
       - 무상태(Stateless) 프로토콜, TCP 80/443 포트(HTTP/1.1·2), UDP 443(HTTP/3)

```
HTTP 버전별 연결 구조:

HTTP/1.1: [연결1: req/res] [연결2: req/res] [연결3: req/res]
          (다수 TCP 연결, HOL Blocking 있음)

HTTP/2:   [TCP 연결 1개]
          [스트림1:image] [스트림2:css] [스트림3:js] (멀티플렉싱)
          (TCP 레벨 HOL Blocking 잔존)

HTTP/3:   [QUIC 연결]
          [스트림1] [스트림2] [스트림3] (완전 독립 스트림)
          (HOL Blocking 완전 제거)
```

- HTTP는 HOL Blocking 해결을 핵심 과제로 삼아 TCP 기반 개선(HTTP/2)에서 UDP 기반 전환(HTTP/3)으로 혁신이 진행되었다.

### 2. HTTP 버전별 진화 및 QUIC

1) 가. HTTP 버전별 핵심 혁신

| 구분 | 버전 | 연도 | 핵심 혁신 |
|------|------|------|----------|
| ① | HTTP/1.0 | 1996 | 요청마다 새 TCP 연결, 단순 구조 |
| ② | HTTP/1.1 | 1997 | Keep-Alive(연결 재사용), Pipelining(이론상), HOL 잔존 |
| ③ | HTTP/2 | 2015 | 멀티플렉싱, 바이너리 프레이밍, HPACK 헤더 압축, 서버 푸시 |
| ④ | HTTP/3 | 2022 | QUIC 기반(UDP), 0-RTT, 독립 스트림, Connection Migration |

- HTTP/2의 멀티플렉싱은 애플리케이션 레벨 HOL을 해결했으나, TCP 계층의 HOL은 여전히 잔존한다.

2) 나. QUIC 프로토콜 4대 혁신

| 구분 | 혁신 | 기존 TCP+TLS | QUIC |
|------|------|-------------|------|
| ① | 연결 설정 | 2~3 RTT (TCP 1RTT + TLS 1~2RTT) | 1 RTT (첫 연결), 0-RTT (재연결) |
| ② | HOL 차단 | 패킷 손실 시 전체 연결 블로킹 | 스트림별 독립 손실 복구 |
| ③ | 연결 이동 | IP+포트 변경 시 연결 끊김 | Connection ID로 IP 변경 후도 유지 |
| ④ | 암호화 | TLS 별도 레이어 | TLS 1.3 내장, 프로토콜 레벨 암호화 |

```
QUIC 스택 구조:
[HTTP/3]         [HTTP/2]
[QUIC]           [TLS 1.3]
[TLS 1.3 내장]   [TCP]
[UDP]            [IP]
[IP]
```

- QUIC의 Connection ID 기반 연결 관리는 Wi-Fi↔LTE 핸드오버 시 세션 연속성을 보장하여 모바일 환경에서 탁월하다.

### 3. HTTP/2 vs HTTP/3 상세 비교 및 트렌드

| 비교 항목 | HTTP/1.1 | HTTP/2 | HTTP/3 |
|----------|---------|--------|--------|
| 전송 기반 | TCP | TCP | UDP (QUIC) |
| 멀티플렉싱 | 없음 | TCP HOL 잔존 | 완전 독립 스트림 |
| 연결 설정 | 매 요청 또는 Keep-Alive | 1 RTT + TLS | 1 RTT / 0-RTT |
| 헤더 압축 | 없음 | HPACK | QPACK |
| TLS 통합 | 별도 | 별도 레이어 | QUIC 내장 |
| 연결 마이그레이션 | 미지원 | 미지원 | 지원 (Connection ID) |
| 방화벽 친화성 | 높음 | 높음 | UDP 차단 이슈 있음 |
| 적합 환경 | 레거시 | 일반 웹 | 모바일·고손실 환경 |

- 엔터프라이즈 환경에서 HTTP/3 도입 시 UDP 443 포트 방화벽 허용, 로드밸런서 QUIC 지원 여부 사전 검토가 필수이며, 2026년 현재 Nginx·Caddy·Cloudflare가 HTTP/3를 기본 지원한다.  "끝"

### 실무 제언

**HTTP/3 도입 사전 검토**
- **챌린지**: 기업 방화벽이 UDP 443을 차단하는 경우 HTTP/3 연결이 HTTP/2로 자동 폴백되어 성능 이점 미확보
- **제언**: UDP 443 방화벽 허용 정책 수립, 로드밸런서·CDN의 QUIC 지원 버전 확인, Alt-Svc 헤더 기반 HTTP/3 광고로 점진적 마이그레이션

**모바일 앱 성능 최적화**
- **챌린지**: Wi-Fi↔LTE 전환 시 TCP 연결 재수립으로 세션 끊김 및 재인증 지연 발생
- **제언**: HTTP/3(QUIC)의 Connection Migration 기능 활용, 모바일 API 서버에 QUIC 적용으로 핸드오버 시 세션 연속성 보장

**레거시 시스템 단계적 HTTP/2 전환**
- **챌린지**: HTTP/1.1 다수 TCP 연결 방식은 서버 리소스 낭비와 HOL Blocking으로 성능 저하
- **제언**: nginx에서 http2 지시자 활성화로 무중단 전환, HPACK 헤더 압축 효과(반복 요청 헤더 60~80% 절감) 및 서버 푸시로 초기 페이지 로드 시간 단축
