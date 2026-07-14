---
title: "멀티미디어 스트리밍 프로토콜"
date: 2026-07-11T11:38:00+09:00
tags: ["네트워크", "스트리밍", "HLS", "DASH", "RTMP", "WebRTC", "서브노트"]
draft: false
---

# 멀티미디어 스트리밍 프로토콜 서브노트

> **두음 머리에 박기 🧠**
> - **알·에이치·디·알·웹·에스** (주요 스트리밍 프로토콜: 인제스트용 **R**TMP, 세그먼트 VOD **H**LS, 어댑티브 표준 **D**ASH, 카메라 제어 **R**TSP, P2P 실시간 **Web**RTC, 저지연 **S**RT)
> - **티·유** (스트리밍 전송 계층 2대 축: 신뢰성 보장 **T**CP 기반(RTMP/HLS/DASH), 저지연 우선 **U**DP 기반(WebRTC/RTSP/SRT))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **멀티미디어 스트리밍 프로토콜 (RTMP/HLS/DASH/RTSP/WebRTC/SRT)** |
| **정의** | 오디오·영상 데이터를 실시간(Live)·주문형(VOD)으로 전송하는 통신규약, 전송계층·지연요구·플랫폼호환성에 따라 상이한 프로토콜 사용 |
| **키워드** | RTMP, HLS(m3u8), DASH(mpd), RTSP/RTP, WebRTC(SRTP), SRT, ABR(어댑티브 비트레이트) |
| **개념도** | **[ OTT 스트리밍 파이프라인 ]**<br>`[ 인코더 ] ──RTMP(인제스트, TCP)──➔ [ 스트리밍 서버 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 트랜스코딩(1080p/720p/480p)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ CDN ] ──HLS(.m3u8)/DASH(.mpd)──➔ [ 클라이언트 (ABR 알고리즘) ]`<br>`(실시간 참여) [ 시청자 ] ◀──WebRTC(P2P, UDP/SRTP)──▶ [ 시청자 ]` |
| **구성요소** | 1. **RTMP**: TCP기반, 1~3초 지연, Adobe Flash 기반 저지연 인제스트(OBS→서버 업로드)<br>2. **HLS**: HTTP/TCP기반, 10~30초 지연, Apple 개발, ts/m4s 세그먼트+m3u8 매니페스트로 VOD·라이브 전송<br>3. **DASH**: HTTP/TCP기반, MPEG 표준 어댑티브 비트레이트, mpd 매니페스트<br>4. **RTSP**: TCP/UDP기반, 1초 미만 지연, RTP로 데이터전송하는 제어 프로토콜(IP카메라·IPTV)<br>5. **WebRTC**: UDP(SRTP)기반, 200ms 미만 지연, P2P·브라우저내장·종단간 암호화(화상회의)<br>6. **SRT**: UDP기반, 0.1~1초 지연, ARQ 기반 패킷손실 복구, 방송 원격제작 활용 |
| **비교** | **TCP 기반 프로토콜 (RTMP·HLS·DASH)**<br>- 특징: 신뢰성보장(재전송), 순서보장<br>- 트레이드오프: 버퍼링 발생가능, 지연 10초 이상<br>- 적합: VOD, 대규모 OTT 배포<br><br>**UDP 기반 프로토콜 (WebRTC·RTSP/RTP·SRT)**<br>- 특징: 낮은지연, 패킷손실 허용 또는 자체복구(ARQ)<br>- 트레이드오프: 별도 손실보정 로직 필요<br>- 적합: 실시간방송, 화상회의, CCTV |
| **차별화** | **ABR(어댑티브 비트레이트) 기반 대규모 배포 및 저지연 전략**<br>1. **ABR 스트리밍 동작**: 1080p/720p/480p/360p 등 다중비트레이트 인코딩+세그먼트(2~10초) 분할 → 클라이언트가 네트워크 상태따라 실시간 품질전환, 버퍼링 최소화<br>2. **인제스트-배포 파이프라인 분리**: 저지연 인제스트(RTMP/SRT)로 스트리밍서버까지 원본전달 → CDN 통해 HLS/DASH로 대규모 배포, 이원화로 지연·확장성 동시확보<br>3. **보안 연계**: HTTPS 기반 HLS/DASH는 TLS 1.3으로 콘텐츠탈취·워터마킹 우회 방지, WebRTC는 SRTP 종단간 암호화 기본적용 |
