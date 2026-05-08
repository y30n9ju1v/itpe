---
title: "모놀리식 아키텍처 vs 마이크로서비스 아키텍처 (MSA)"
date: 2026-05-09T08:09:13+09:00
tags: ["pecs", "시스템소프트웨어및응용소프트웨어", "응용SW", "아키텍처", "모놀리식", "MSA", "마이크로서비스"]
draft: false
exam_pecs: ["135회"]
---

## 개요

모놀리식 아키텍처는 모든 기능이 단일 프로세스에 통합된 전통적 구조이며, MSA(MicroService Architecture)는 독립적으로 배포·확장 가능한 서비스들의 집합으로 시스템을 구성하는 방식이다.

## 핵심 내용

### 비교표

| 항목 | 모놀리식 | MSA |
|------|----------|-----|
| **배포 단위** | 단일 애플리케이션 | 서비스별 독립 배포 |
| **확장성** | 전체 애플리케이션 수평 확장 | 서비스별 독립 확장 |
| **기술 스택** | 단일 언어·프레임워크 | 서비스별 다른 기술 선택 가능 |
| **장애 격리** | 하나의 오류가 전체에 영향 | 장애 서비스만 영향 |
| **개발 복잡성** | 초기 단순, 성장 시 복잡 | 초기부터 높음 (서비스 간 통신) |
| **데이터 관리** | 단일 DB | 서비스별 독립 DB |
| **운영 인프라** | 단순 | 복잡 (Kubernetes, 서비스 메시 등) |
| **배포 속도** | 전체 재배포 | 변경된 서비스만 배포 |
| **적합 규모** | 소·중규모 | 대규모·고성장 서비스 |

### MSA 핵심 구성요소

| 구성요소 | 역할 |
|----------|------|
| **API Gateway** | 단일 진입점, 인증·라우팅·로드밸런싱 |
| **Service Registry** | 서비스 위치 동적 등록·조회 (Eureka, Consul) |
| **Circuit Breaker** | 장애 서비스 격리, Fallback 처리 |
| **Event Bus** | 비동기 서비스 간 통신 (Kafka, RabbitMQ) |
| **Distributed Tracing** | 분산 요청 추적 (Zipkin, Jaeger) |

### MSA 전환 시 주요 도전과제

- **분산 트랜잭션**: SAGA 패턴(Choreography/Orchestration)으로 처리
- **데이터 일관성**: Eventually Consistent 모델 적용
- **네트워크 지연**: 서비스 간 통신 오버헤드 증가
- **서비스 경계(Boundary) 설계**: DDD(도메인 주도 설계)의 Bounded Context 활용

## 실무 적용 예시

- Netflix: 수백 개의 마이크로서비스로 스트리밍 서비스 운영
- 공공기관 레거시 현대화: 모놀리식 → MSA 단계적 전환(Strangler Fig 패턴)

## 출제 포인트

- 두 아키텍처의 장단점 비교표 작성
- MSA 도입 시 필요한 인프라(API GW, 서비스 메시, 컨테이너 오케스트레이션)
- 분산 트랜잭션 처리: SAGA 패턴
- MSA 적합 조건: 팀 규모, 서비스 성장률, 독립 배포 필요성

## 연관 개념

- [SOAP vs REST]({{< relref "/docs/05_Networks/01_Network_Protocol/soap-vs-rest" >}}) — MSA 서비스 간 통신 방식
- [TA/AA 아키텍처]({{< relref "/docs/02_SoftwareEngineering/02_Analysis_Design/ta-aa-architect" >}}) — MSA 적용 아키텍처 설계
- [무중단 배포]({{< relref "/docs/02_SoftwareEngineering/03_Implementation_Testing/deployment-strategy" >}}) — MSA에서의 배포 전략
- 컨테이너·Kubernetes — MSA 운영 인프라

## 참고 기출

- 135회 1교시 5번 (PECS)
