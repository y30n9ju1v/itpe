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
| **정의** | 전 세계에 분산된 엣지 서버(PoP)에 콘텐츠를 캐싱하여 사용자에게 지리적으로 근접한 위치에서 빠르게 제공하는 분산 콘텐츠 전송 네트워크로, DNS 기반 최적 PoP 선택과 HTTP 캐시 제어 헤더 기반 캐싱 관리를 사용함 |
| **키워드** | PoP(Point of Presence), Anycast, Push/Pull 캐싱, Cache-Control/ETag, Origin Shield, Edge Computing |
| **개념도** | `[CDN 없음]` 한국 사용자 ── 인터넷(RTT 200ms+) ── 미국 원본서버<br>`[CDN 있음]` 한국 사용자 ── PoP(서울, RTT 5ms, 캐시 히트) / 캐시 미스 시에만 원본서버 접근 |
| **구성요소** | 1. **DNS 기반 PoP 선택**: 요청 → DNS 질의(사용자 IP 기반 최적 PoP 반환) → 캐시 확인 → 히트(5ms 내외 응답) / 미스(원본 요청 후 캐시 저장)<br>2. **Push/Pull 캐싱**: Push는 원본이 능동적으로 엣지에 배포, Pull은 첫 요청 시 원본에서 가져와 캐시<br>3. **Anycast 부하분산**: 동일 IP를 여러 PoP가 공유(BGP 최근접 라우팅)해 DNS 없이도 최적 경로 자동 선택<br>4. **Cache-Control 헤더**: max-age(TTL), public/private(CDN 캐시 허용 여부), no-cache(재검증), no-store(캐시 금지), ETag(콘텐츠 해시 변경 감지)<br>5. **캐시 무효화 전략**: API Purge(즉시 무효화), URL Versioning(/app.v2.css), 단기 TTL |
| **비교** | **CDN**<br>- 주 기능: 콘텐츠 분산 캐싱<br>- 위치: 전 세계 엣지<br>- 적용 범위: 글로벌<br><br>**웹 가속기 / 로드밸런서**<br>- 주 기능: 응답 압축·최적화(웹가속기) / 서버 간 부하 분산(LB)<br>- 위치: 단일 데이터센터<br>- 캐싱: 보조 기능 또는 없음 |
| **차별화** | **CDN 캐싱 전략 및 보안 강화 실무 설계**<br>1. **정적 콘텐츠 캐시 최적화**: max-age=31536000(1년) + URL 버저닝(hash 기반 파일명) 적용으로 배포 시 새 URL 자동 생성, 캐시 불일치 문제 원천 해결<br>2. **캐시 히트율 KPI 관리**: 캐시 히트율(목표 90%+)·원본 서버 트래픽 감소율·P95 응답 시간을 CDN 대시보드에서 실시간 모니터링<br>3. **DDoS 방어 통합 CDN**: Anycast 분산 용량으로 공격 흡수 + WAF 통합, SSL/TLS 오프로딩으로 원본 부하 절감, Origin Shield로 원본 보호 레이어 추가. 최신 CDN(Cloudflare Workers, AWS Lambda@Edge)은 Edge Computing까지 지원하며 서버리스와 경계가 수렴 |
