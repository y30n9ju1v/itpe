---
title: "CDN 동작원리와 캐싱"
date: 2026-07-12T18:13:12+09:00
tags: ["네트워크", "CDN", "PoP", "캐싱", "Anycast", "Cache-Control", "서브노트"]
draft: false
---

# CDN 동작원리와 캐싱 서브노트

> **두음 머리에 박기 🧠**
> - **요·질·캐·히·미** (CDN 동작 흐름: **요**청 → DNS **질**의 → **캐**시 확인 → **히**트(즉시 응답) / **미**스(원본 요청 후 캐싱))
> - **P·U** (콘텐츠 복제 방식: 사전 배포 **P**ush, 첫 요청 시 가져오는 **P**ull) — Push/Pull

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **CDN(Content Delivery Network)** |
| **정의** | 전 세계 분산 엣지서버(PoP)에 콘텐츠 캐싱 → 사용자 근접위치서 빠른제공하는 분산 CDN, DNS기반 최적PoP 선택+HTTP 캐시제어헤더 기반 캐싱관리 |
| **키워드** | PoP(Point of Presence), Anycast, Push/Pull 캐싱, Cache-Control/ETag, Origin Shield, Edge Computing |
| **개념도** | `[CDN 없음]` 한국 사용자 ── 인터넷(RTT 200ms+) ── 미국 원본서버<br>`[CDN 있음]` 한국 사용자 ── PoP(서울, RTT 5ms, 캐시 히트) / 캐시 미스 시에만 원본서버 접근 |
| **구성요소** | 1. **DNS기반 PoP 선택**: 요청 → DNS질의(사용자IP 기반 최적PoP 반환) → 캐시확인 → 히트(5ms 내외 응답)/미스(원본요청 후 캐시저장)<br>2. **Push/Pull 캐싱**: Push=원본이 능동적으로 엣지배포, Pull=첫요청 시 원본에서 가져와 캐시<br>3. **Anycast 부하분산**: 동일IP를 여러 PoP 공유(BGP 최근접라우팅) → DNS없이도 최적경로 자동선택<br>4. **Cache-Control 헤더**: max-age(TTL), public/private(CDN 캐시허용여부), no-cache(재검증), no-store(캐시금지), ETag(콘텐츠 해시변경감지)<br>5. **캐시 무효화전략**: API Purge(즉시무효화), URL Versioning(/app.v2.css), 단기TTL |
| **비교** | **CDN**<br>- 주기능: 콘텐츠 분산캐싱<br>- 위치: 전 세계 엣지<br>- 적용범위: 글로벌<br><br>**웹 가속기 / 로드밸런서**<br>- 주기능: 응답 압축·최적화(웹가속기) / 서버간 부하분산(LB)<br>- 위치: 단일 데이터센터<br>- 캐싱: 보조기능 또는 없음 |
| **차별화** | **CDN 캐싱전략 및 보안강화 실무설계**<br>1. **정적 콘텐츠 캐시최적화**: max-age=31536000(1년)+URL버저닝(hash 기반 파일명) → 배포 시 새URL 자동생성, 캐시불일치 원천해결<br>2. **캐시 히트율 KPI관리**: 캐시히트율(목표 90%+)·원본서버 트래픽감소율·P95 응답시간 → CDN 대시보드 실시간모니터링<br>3. **DDoS 방어통합 CDN**: Anycast 분산용량으로 공격흡수+WAF 통합, SSL/TLS 오프로딩으로 원본부하 절감, Origin Shield로 원본보호 레이어 추가. 최신 CDN(Cloudflare Workers, AWS Lambda@Edge)은 Edge Computing까지 지원, 서버리스와 경계 수렴 |
