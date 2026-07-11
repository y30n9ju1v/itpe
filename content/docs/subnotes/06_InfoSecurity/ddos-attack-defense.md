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
| **정의** | 수많은 시스템/반사판을 동원해 인프라 대역폭을 점유하거나 시스템 자원을 고갈시켜 가용성을 침해하는 **DDoS 공격**과, 적은 트래픽으로 소켓을 점유하는 **L7 Slow HTTP 공격 대응 기술** |
| **키워드** | DRDoS (IP Spoofing), Slowloris, RUDY, Slow Read, SYN Cookies, Anycast Routing, CDN 방어 |
| **개념도** | **[ DRDoS (분산 반사 서비스 거부) 공격 메커니즘 ]**<br>`[ 공격자 (C&C) ] ➔ [ 봇넷 / 좀비 PC ] ── (출발지 IP를 타깃 서버 IP로 위조 IP Spoofing) ──┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 1. 질의 요청`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌── [ 정상 DNS / NTP / Memcached 서버 (Reflectors) ]` (UDP 전제)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (응답 크기를 수십~수백 배로 부풀림)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 2. 증폭된 응답 집중 타격`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 타깃 웹 서버 ] ➔ 대역폭 고갈 및 서비스 불능 상태` |
| **구성요소** | 1. **DRDoS (반사/증폭)**: 송신자 IP를 타깃 IP로 위조해 DNS/NTP 서버에 쿼리 전송. 증폭된 UDP 응답이 타깃 강타<br>2. **Slowloris (Slow HTTP Header)**: HTTP 헤더 끝인 개행문자(`\r\n\r\n`)를 완성하지 않고 계속 지연 송신해 웹 서버 소켓 고갈<br>3. **RUDY (Slow HTTP Body)**: Post 바디 데이터를 전송 시 Content-Length를 크게 잡고 1Byte씩 초 단위로 분할 전송<br>4. **Slow Read**: TCP 수신 윈도우 크기(Window Size)를 0 또는 극소로 조작해 웹 서버가 데이터를 보내지 못하고 대기 유도 |
| **비교** | **대역폭 고갈 공격 (L3/L4 - UDP Flooding, DRDoS 등)**<br>- **공격 특징**: 망 대역폭(Gbps 단위) 자체를 압도하여 회선 마비 유발<br>- **대응 솔루션**: ISP 백본단 연동(Clean Zone), 라우터 블랙홀 필터링<br><br>**웹 리소스 고갈 공격 (L7 - Slowloris, RUDY 등)**<br>- **공격 특징**: 소량의 트래픽(Mbps 이하)으로 웹 서버 스레드/소켓 고갈<br>- **대응 솔루션**: 웹 서버 커널 타임아웃 튜닝, WAF 임계치 보안 정책 |
| **차별화** | **대규모 DDoS 및 고지능 L7 Slow 공격에 대응하는 입체적 클라우드 보안 모델**<br>1. **글로벌 Anycast 라우팅 및 CDN 연동**: 대역폭 공격 방어를 위해 전 세계 엣지 네트워크로 트래픽을 분산 수용하고 흡수하는 **Anycast IP 라우팅**망과 CDN (Cloudflare, AWS Shield) 연계 구축.<br>2. **L7 웹 서버 타임아웃 파라미터 최적화 (Nginx 기준)**: (1) `client_header_timeout` 및 `client_body_timeout`을 기본 60초에서 5~10초로 단축, (2) `keepalive_timeout` 및 세션당 최대 연결 유지 수 타이트하게 통제, (3) `limit_conn` 모듈을 통한 단일 IP당 동시 커넥션 수 제한.<br>3. **DDoS 스크러빙 센터 (Clean Zone) 전환**: 인입 회선 초입에 DDoS 탐지 장비를 연동하고 임계치 초과 시 스크러빙 센터로 트래픽을 리다이렉트(BGP Route Injection)하여 오염된 데이터만 여과 전송하는 클린존 거버넌스 가동. |
