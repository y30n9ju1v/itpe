---
title: "DDoS 공격 유형 및 방어 솔루션"
date: 2026-07-11T11:19:35+09:00
tags: ["보안", "네트워크보안", "DDoS", "DRDoS", "Slowloris", "RUDY", "SYNFlooding", "Anycast", "서브노트"]
draft: false
---

# DDoS 공격 유형 및 방어 솔루션 서브노트

> **두음 머리에 박기 🧠**
> - **유·아·디** (L3/L4 대역폭 마비 반사 공격 DRDoS: **U**DP/NTP 반사, **A**nycast 분산방어, **D**NS 증폭)
> - **헤·바·리** (L7 HTTP Slow 계열 자원 고갈 공격 3종: 헤더 느리게 쓰기 **S**lowloris(헤더), 바디 느리게 쓰기 **R**UDY(바디), 읽기 윈도우 0 유지 **S**low Read(리))
> - **백·클·애** (DDoS 방어 인프라 계층 체계: ISP 백본 **백**Clean Zone, 클라우드 **클**CDN/Anycast Edge, 서버단 **애**플리케이션 필터링)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **분산 서비스 거부 공격 (DDoS) 분류 및 웹 애플리케이션 L7 Slow 공격 방어 체계** |
| **정의** | 다수 시스템/반사판 동원 → 인프라 대역폭 점유·시스템자원 고갈 → 가용성 침해하는 **DDoS 공격** + 적은 트래픽으로 소켓 점유하는 **L7 Slow HTTP 공격 대응기술** |
| **키워드** | DRDoS (IP Spoofing), Slowloris, RUDY, Slow Read, SYN Cookies, Anycast Routing, CDN 방어 |
| **개념도** | **[ DRDoS (분산 반사 서비스 거부) 공격 메커니즘 ]**<br>`[ 공격자 (C&C) ] ➔ [ 봇넷 / 좀비 PC ] ── (출발지 IP를 타깃 서버 IP로 위조 IP Spoofing) ──┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 1. 질의 요청`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌── [ 정상 DNS / NTP / Memcached 서버 (Reflectors) ]` (UDP 전제)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (응답 크기를 수십~수백 배로 부풀림)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 2. 증폭된 응답 집중 타격`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 타깃 웹 서버 ] ➔ 대역폭 고갈 및 서비스 불능 상태` |
| **구성요소** | 1. **DRDoS(반사/증폭)**: 송신자IP를 타깃IP로 위조 → DNS/NTP 서버 쿼리 → 증폭된 UDP 응답이 타깃 강타<br>2. **Slowloris(Slow HTTP Header)**: HTTP 헤더 개행문자(`\r\n\r\n`) 미완성 지연송신 → 웹서버 소켓 고갈<br>3. **RUDY(Slow HTTP Body)**: Post 바디 전송 시 Content-Length 크게 설정 → 1Byte씩 초단위 분할전송<br>4. **Slow Read**: TCP 수신윈도우 0/극소 조작 → 웹서버 데이터 전송 대기 유도 |
| **비교** | **대역폭 고갈 공격(L3/L4 - UDP Flooding, DRDoS 등)**<br>- 공격특징: 망 대역폭(Gbps) 압도 → 회선마비<br>- 대응솔루션: ISP 백본단 연동(Clean Zone), 라우터 블랙홀 필터링<br><br>**웹 리소스 고갈 공격(L7 - Slowloris, RUDY 등)**<br>- 공격특징: 소량 트래픽(Mbps 이하) → 웹서버 스레드/소켓 고갈<br>- 대응솔루션: 웹서버 커널 타임아웃 튜닝, WAF 임계치 보안정책 |
| **차별화** | **대규모 DDoS 및 고지능 L7 Slow 공격 입체적 클라우드 보안 모델**<br>1. **글로벌 Anycast 라우팅·CDN 연동**: 전세계 엣지 네트워크 트래픽 분산·흡수 **Anycast IP 라우팅**망 + CDN(Cloudflare, AWS Shield) 연계<br>2. **L7 웹서버 타임아웃 파라미터 최적화(Nginx)**: `client_header/body_timeout` 60초→5~10초 단축, `keepalive_timeout`·세션 최대연결수 타이트 통제, `limit_conn`으로 단일IP 동시커넥션 제한<br>3. **DDoS 스크러빙 센터(Clean Zone) 전환**: 인입회선 초입 DDoS 탐지장비 연동 → 임계치 초과 시 스크러빙센터로 리다이렉트(BGP Route Injection) → 오염데이터 여과전송 |
