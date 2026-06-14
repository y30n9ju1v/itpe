---
title: "CDN(Contents Delivery Network) 동작원리와 캐싱"
date: 2026-06-14T09:00:00+09:00
tags: ["네트워크", "NW", "핵토200"]
topic_no1: 15
topic_no2: 1
topic_large: "CDN"
topic_small: "CDN"
exam_ref: "합숙_2020.01"
exam_type: "응용"
question_no: "Day-4"
---

## 문제

CDN(Contents Delivery Network)의 동작원리, 주요기술, 캐싱방식에 대해 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | CDN |
| 토픽(소) | CDN |
| 출제 | 합숙_2020.01회 |
| 유형 | 응용 |
| 번호 | Day-4 |

## 해설

> **CDN은 "편의점 체인"과 같다 — 중앙 창고(원본 서버) 하나에서 멀리까지 배달하는 대신, 동네마다 편의점(엣지 서버)을 두어 빠르게 제공한다**

### 1. 출제 배경 및 의도

넷플릭스, 유튜브, 네이버 등 모든 대형 콘텐츠 서비스가 CDN을 사용합니다. 전 세계 사용자에게 빠른 응답을 제공하고 원본 서버 부하를 줄이는 CDN의 원리는 현대 웹 아키텍처의 필수 지식입니다.

### 2. 개념의 본질과 작동 메커니즘

#### CDN 동작 원리

```
CDN 없음:
한국 사용자 ──── 인터넷 (고지연) ──── 미국 원본 서버
                                      (평균 RTT: 200ms+)

CDN 있음:
한국 사용자 ──── CDN 엣지 서버 (서울)
                [캐시 히트!]         (평균 RTT: 5ms)
                   ↑
           미국 원본 서버에서 사전 배포
```

**CDN 구조:**

```
[원본 서버 (Origin)]
     │ (콘텐츠 배포)
     ├── PoP (서울)  ← 한국 사용자
     ├── PoP (도쿄)  ← 일본 사용자
     ├── PoP (런던)  ← 유럽 사용자
     └── PoP (뉴욕)  ← 미국 동부 사용자
     
PoP: Point of Presence = 엣지 서버 클러스터
```

**사용자 요청 처리 흐름:**

```
1. 사용자: cdn.example.com/image.jpg 요청
2. DNS: cdn.example.com → CDN DNS 서버 질의
3. CDN DNS: 사용자 위치 기반 최적 엣지 서버 IP 반환
4. 엣지 서버: 캐시 확인
   - 캐시 히트: 즉시 응답 (빠름!)
   - 캐시 미스: 원본 서버에 요청 → 캐시 저장 → 응답
```

#### 주요 기술

**1) 부하 분산 (Load Balancing)**
```
DNS 기반: 지리적으로 가까운 PoP로 DNS 응답 차등화
Anycast: 동일 IP를 여러 PoP가 공유, BGP로 최근접 라우팅
HTTP 리다이렉션: 응답에 다른 CDN URL로 리다이렉트
```

**2) 콘텐츠 복제 (Content Replication)**
```
Push 방식: 원본 서버가 능동적으로 엣지 서버에 배포
           사전 준비, 인기 콘텐츠에 적합
           
Pull 방식: 첫 요청 시 원본에서 가져와 캐시
           캐시 미스 첫 요청 느림, 자동 관리
```

**3) 네트워크 최적화**
```
TCP 연결 최적화: 원본↔CDN 간 상시 연결 유지 (연결 오버헤드 제거)
프로토콜 최적화: HTTP/2, QUIC 활용
경로 최적화: 인터넷보다 CDN 전용 백본 활용
```

**4) 보안 기능**
```
DDoS 방어: CDN의 분산 용량으로 공격 흡수
WAF: Web Application Firewall 통합
SSL/TLS 오프로딩: CDN에서 암호화 처리
```

#### 캐싱 방식

**1) 캐시 제어 헤더 (HTTP Cache-Control)**

```
Cache-Control: max-age=3600        (1시간 캐시)
Cache-Control: no-cache            (캐시 전 검증 필요)
Cache-Control: no-store            (캐시 금지)
Cache-Control: public              (CDN 캐시 허용)
Cache-Control: private             (CDN 캐시 금지, 브라우저만)

Vary: Accept-Encoding              (압축 방식별 별도 캐시)
ETag: "abc123"                     (변경 감지용 식별자)
```

**2) 캐시 무효화 (Cache Invalidation)**

```
문제: 원본 업데이트 → CDN 캐시 만료 전까지 구버전 제공

해결 방법:
① API Purge: CDN 관리 API로 특정 콘텐츠 즉시 삭제
② URL Versioning: /app.v2.css (버전 변경 시 새 URL)
③ 단기 TTL: max-age를 짧게 (CDN 히트율 저하)
```

**3) 캐시 히트율 최적화**

| 전략 | 설명 |
|---|---|
| **URL 정규화** | 동일 콘텐츠의 다른 URL을 하나로 통합 |
| **쿼리스트링 무시** | ?utm_source=... 등 캐시 키에서 제외 |
| **압축** | gzip/brotli 압축으로 전송 크기 감소 |
| **지역별 캐시** | 지역 특화 콘텐츠는 별도 캐시 키 |

**캐시 히트율 (Cache Hit Ratio):**
```
히트율 = 캐시에서 처리된 요청 수 / 전체 요청 수 × 100
목표: 90% 이상 (정적 콘텐츠는 99%+)

낮은 히트율 원인:
- TTL이 너무 짧음
- 콘텐츠 변경이 잦음
- URL 파라미터 다양화
```

### 3. 핵심 키워드 (Must-Have)

- **PoP (Point of Presence):** CDN 엣지 서버 클러스터
- **Cache Hit/Miss:** 캐시에서 응답 성공/실패
- **Pull vs Push:** 두 가지 콘텐츠 배포 방식
- **Cache-Control:** HTTP 캐시 제어 헤더
- **Anycast:** CDN 글로벌 부하분산 핵심 기술

### 4. 맥락과 비교

| 항목 | CDN | 웹 가속기 | 로드밸런서 |
|---|---|---|---|
| **주 기능** | 콘텐츠 분산 | 응답 최적화 | 서버 간 부하 분산 |
| **위치** | 전 세계 엣지 | 데이터센터 | 데이터센터 |
| **캐싱** | 핵심 기능 | 보조 기능 | 없음 |

**엣지 컴퓨팅과 CDN:** 최신 CDN(Cloudflare Workers, Lambda@Edge)은 단순 캐싱을 넘어 엣지에서 코드 실행도 지원하여 CDN과 엣지 컴퓨팅의 경계가 사라지고 있습니다.

### 5. 실무 제언

CDN 도입 시 히트율 측정과 원본 서버 부하 감소 수치를 KPI로 설정합니다. 정적 콘텐츠(이미지, CSS, JS)는 max-age를 1년(31536000초)으로 설정하고 URL 버저닝으로 캐시 무효화를 처리하는 것이 베스트 프랙티스입니다. 기술사 답안에서 동작 원리(DNS 기반 최적 PoP 선택), 주요 기술(복제, 부하분산, 보안), 캐싱 방식(헤더, 무효화)을 체계적으로 서술하면 높은 점수를 기대할 수 있습니다.
