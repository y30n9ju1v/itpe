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

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **마이크로서비스 아키텍처 (MSA, Microservice Architecture)** |
| **정의** | 애플리케이션을 비즈니스 영역(Bounded Context)에 맞게 독립적으로 배포 및 확장 가능한 **최소 단위의 서비스들의 집합으로 설계하는 아키텍처 스타일** |
| **키워드** | DDD(Bounded Context), Database-per-Service, API Gateway, Service Mesh (Sidecar), Saga 패턴, CQRS |
| **개념도** | `[ Client ]` ➔ `[ API Gateway ]` (인증/라우팅)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 서비스 A ] ──── (Sidecar Proxy) ───➔ [ 서비스 B ]` (Service-to-Service 통신)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ Database-per-Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ DB A ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ DB B ]` |
| **구성요소** | 1. **API Gateway**: 단일 진입점 역할. 공통 기능(인증/인가, SSL Offloading, 속도 제한) 및 라우팅<br>2. **Service Mesh (Istio 등)**: 사이드카(Sidecar) 프록시로 통신 추상화, 트래픽 제어, 암호화(mTLS)<br>3. **Circuit Breaker**: 타 서비스 장애 발생 시 호출을 차단하고 Fallback을 실행하여 장애 전파 방지<br>4. **Saga 패턴**: 분산 DB 환경에서 각 서비스 로결 트랜잭션 수행 후 실패 시 보상 트랜잭션 수행<br>5. **CQRS**: 데이터의 생성/수정(Command) 영역과 조회(Query) 영역의 데이터 모델을 분리하여 설계 |
| **비교** | **모놀리식 (Monolithic) 아키텍처**<br>- **구조**: 단일 코드베이스, 단일 데이터베이스(Single DB)<br>- **특징**: 초기 배포/개발 단순, 트랜잭션 보장(ACID) 용이, 부분 장애가 시스템 전체 장애로 연결<br><br>**마이크로서비스 (MSA) 아키텍처**<br>- **구조**: 서비스별 독립 코드베이스, Database-per-Service<br>- **특징**: 독립적 점진 배포/확장성 우수, 장애 격리 용이, 분산 트랜잭션(최종 일관성) 및 배포 복잡성 증가 |
| **차별화** | **분산 트랜잭션 챌린지 및 데이터 동기화 최적화 방안**<br>1. **Saga 패턴의 구체적 선택**: 오케스트레이션(중앙 컨트롤러가 흐름 제어)과 코레오그래피(이벤트 발행/구독 방식) 중 시스템 복잡도에 맞춰 선택하여 2PC의 락(Lock) 성능 저하 해결.<br>2. **이벤트 소싱(Event Sourcing)을 통한 신뢰성 확보**: 상태 변경 자체를 RDBMS에 직접 쓰지 않고 변경 이벤트를 Event Store(Kafka 등)에 순차 기록하여 완벽한 감사 추적(Audit Trail) 보장.<br>3. **Outbox 패턴 적용**: 비즈니스 DB 쓰기와 이벤트 발행을 로컬 RDBMS 트랜잭션으로 묶은 후 Transaction Log Miner(Debezium 등)로 이벤트를 발행하여 메시지 유실 방지. |
