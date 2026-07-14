---
title: "MSA 아키텍처"
date: 2026-07-11T11:14:19+09:00
tags: ["소프트웨어공학", "아키텍처", "MSA", "Saga패턴", "CQRS", "서브노트"]
draft: false
---

# MSA 아키텍처 서브노트

> **두음 머리에 박기 🧠**
> - **게·메·서·사** (MSA 도입 필수 패턴: API **게**이트웨이, 서비스 **메**쉬, **서**킷 브레이커, **S**aga(사) 패턴)
> - **이·사·시** (분산 데이터 정합성 패턴: **이**벤트 소싱 Event Sourcing, **S**aga(사) 패턴, **C**QRS(시))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **마이크로서비스 아키텍처 (MSA, Microservice Architecture)** |
| **정의** | 앱을 비즈니스영역(Bounded Context) 기준 독립배포·확장 가능한 최소단위 서비스 집합으로 설계하는 아키텍처 스타일 |
| **키워드** | DDD(Bounded Context), Database-per-Service, API Gateway, Service Mesh (Sidecar), Saga 패턴, CQRS |
| **개념도** | `[ Client ]` ➔ `[ API Gateway ]` (인증/라우팅)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 서비스 A ] ──── (Sidecar Proxy) ───➔ [ 서비스 B ]` (Service-to-Service 통신)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ Database-per-Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ DB A ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ DB B ]` |
| **구성요소** | 1. **API Gateway**: 단일진입점 → 인증/인가·SSL Offloading·속도제한·라우팅<br>2. **Service Mesh(Istio 등)**: 사이드카 프록시 → 통신추상화·트래픽제어·mTLS암호화<br>3. **Circuit Breaker**: 타 서비스 장애 시 호출차단 → Fallback 실행 (장애전파 방지)<br>4. **Saga 패턴**: 분산DB → 서비스별 로컬트랜잭션 후 실패 시 보상트랜잭션<br>5. **CQRS**: Command(생성/수정)·Query(조회) 데이터모델 분리설계 |
| **비교** | **모놀리식(Monolithic)**<br>- 구조: 단일 코드베이스, 단일 DB(Single DB)<br>- 특징: 초기배포/개발 단순, ACID 트랜잭션 용이, 부분장애 → 전체장애 전파<br><br>**MSA**<br>- 구조: 서비스별 독립 코드베이스, Database-per-Service<br>- 특징: 독립배포/확장성 우수, 장애격리 용이, 분산트랜잭션(최종일관성)·배포복잡성 증가 |
| **차별화** | **분산 트랜잭션 챌린지 및 데이터 동기화 최적화 방안**<br>1. **Saga 선택**: 오케스트레이션(중앙컨트롤러 흐름제어) vs 코레오그래피(이벤트 발행/구독) → 시스템 복잡도별 선택, 2PC 락 성능저하 해결<br>2. **이벤트 소싱**: 상태변경 RDBMS 직접기록 대신 변경이벤트 Event Store(Kafka 등) 순차기록 → 완전한 감사추적(Audit Trail)<br>3. **Outbox 패턴**: 비즈니스DB 쓰기+이벤트발행 로컬RDBMS 트랜잭션 묶음 → Transaction Log Miner(Debezium)로 이벤트발행, 메시지유실 방지 |
