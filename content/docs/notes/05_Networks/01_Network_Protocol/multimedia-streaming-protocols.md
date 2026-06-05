---
title: "멀티미디어 스트리밍 프로토콜"
date: 2026-05-09T07:56:10+09:00
tags: ["pecs", "컴퓨터통신및네트워크", "네트워크프로토콜", "스트리밍", "HLS", "DASH", "RTMP", "WebRTC"]
draft: false
exam_pecs: ["137회"]
---

## 개요

멀티미디어 스트리밍 프로토콜은 오디오·영상 데이터를 실시간 또는 주문형으로 전송하기 위한 통신 규약이다. 전송 방식(라이브/VOD), 지연 요구사항, 플랫폼 호환성에 따라 프로토콜이 달라진다.

## 핵심 내용

### 주요 스트리밍 프로토콜 비교

| 프로토콜 | 전송 계층 | 지연 | 주요 특징 | 사용 사례 |
|----------|----------|------|-----------|-----------|
| **RTMP** (Real-Time Messaging Protocol) | TCP | 1-3초 | Adobe Flash 기반, 저지연 인제스트 | OBS → 스트리밍 서버 업로드 |
| **HLS** (HTTP Live Streaming) | HTTP/TCP | 10-30초 | Apple 개발, 세그먼트(ts/m4s) 단위 전송 | Netflix, YouTube VOD |
| **DASH** (Dynamic Adaptive Streaming over HTTP) | HTTP/TCP | 10-30초 | MPEG 표준, 어댑티브 비트레이트, MPD 매니페스트 | 넷플릭스, OTT |
| **RTSP** (Real-Time Streaming Protocol) | TCP/UDP | < 1초 | 제어 프로토콜(RTP 데이터 별도), CCTV·IP캠 | IP 카메라, IPTV |
| **WebRTC** | UDP(SRTP) | < 200ms | P2P, 브라우저 내장, E2E 암호화 | 화상회의, 실시간 방송 |
| **SRT** (Secure Reliable Transport) | UDP | 0.1-1초 | 저지연 + 패킷손실 복구(ARQ) | 방송 원격 제작 |

### 어댑티브 비트레이트(ABR) 스트리밍

HLS·DASH는 동일 콘텐츠를 다양한 비트레이트로 인코딩하여 클라이언트 네트워크 상태에 따라 품질을 자동 전환한다.

```
콘텐츠 → 인코더(1080p/720p/480p/360p) → CDN → 클라이언트(ABR 알고리즘)
```

- 매니페스트 파일: HLS는 `.m3u8`, DASH는 `.mpd`
- 세그먼트: 2~10초 단위 분할 파일

### 전송 계층별 특성

- **TCP 기반(RTMP, HLS, DASH)**: 신뢰성 보장, 버퍼링 발생 가능
- **UDP 기반(WebRTC, RTSP/RTP, SRT)**: 낮은 지연, 패킷 손실 허용 또는 자체 복구

## 실무 적용 예시

- OTT 플랫폼: 인제스트(RTMP) → 트랜스코딩 → 배포(HLS/DASH) 파이프라인
- 실시간 방송: SRT로 방송국 간 원고화질 영상 중계, WebRTC로 시청자 참여 구현

## 출제 포인트

- 각 프로토콜의 전송 계층(TCP/UDP)과 지연 특성 비교
- HLS·DASH의 ABR 동작 원리
- WebRTC의 P2P 구조와 낮은 지연의 이유

## 연관 개념

- [ARQ 오류 제어]({{< relref "/docs/notes/05_Networks/01_Network_Protocol/arq-error-control" >}}) — SRT의 패킷 손실 복구 기반
- [TLS 1.2 vs 1.3]({{< relref "/docs/notes/05_Networks/01_Network_Protocol/tls-1-2-vs-1-3" >}}) — HTTPS 스트리밍 보안 기반

## 참고 기출

- 137회 1교시 1번 (PECS)
