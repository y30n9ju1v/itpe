---
title: "프록시 디자인 패턴 (Proxy Design Pattern)"
date: 2026-05-08T23:38:40+09:00
tags: ["peim", "소프트웨어공학", "SW분석설계", "디자인패턴", "프록시패턴", "GoF", "구조패턴"]
draft: false
exam: "136회"
---

## 개요

프록시(Proxy) 패턴은 GoF 구조 패턴 중 하나로, 다른 객체에 대한 접근을 제어하는 대리자(Proxy) 객체를 제공한다. 클라이언트는 실제 객체(Real Subject) 대신 프록시를 통해 요청을 보내며, 프록시는 접근 제어·지연 초기화·캐싱·로깅 등 부가 기능을 투명하게 제공한다.

## 핵심 내용

**패턴 구조**
```
Client → Proxy → RealSubject
          ↑ (Subject 인터페이스 구현)
```
- Subject: 인터페이스 (Proxy와 RealSubject의 공통 계약)
- RealSubject: 실제 작업을 수행하는 객체
- Proxy: RealSubject와 동일한 인터페이스 구현, 요청 전후 처리

**프록시 패턴의 4가지 유형**

| 유형 | 목적 | 예시 |
|------|------|------|
| 가상 프록시 (Virtual Proxy) | 생성 비용이 큰 객체의 지연 초기화 | 이미지 로딩 최적화 |
| 보호 프록시 (Protection Proxy) | 객체 접근 권한 제어 | 역할 기반 접근 제어 |
| 원격 프록시 (Remote Proxy) | 다른 주소 공간의 객체 대리 | RPC, gRPC Stub |
| 캐싱 프록시 (Caching Proxy) | 결과 캐싱으로 성능 향상 | 웹 프록시 서버 |

**Decorator 패턴과의 차이**
- 프록시: 접근 제어가 주 목적 (동일 인터페이스, 생명주기 관리)
- 데코레이터: 기능 추가가 주 목적 (동적 기능 조합)

## 실무 적용 예시

Spring AOP(Aspect-Oriented Programming)는 프록시 패턴을 기반으로 트랜잭션 관리·보안·로깅을 비즈니스 로직과 분리하여 횡단 관심사를 처리한다.

## 출제 포인트

- 프록시 패턴의 구조 (Subject·Proxy·RealSubject)
- 4가지 프록시 유형과 각 사용 사례
- Decorator 패턴과의 차이점

## 연관 개념

- [TA/AA 아키텍처]({{< relref "/docs/02_SoftwareEngineering/02_Analysis_Design/ta-aa-architect" >}}) — 아키텍처 수준의 프록시 적용 (API Gateway 등)
- 에이전틱 AI — MCP에서 프록시 패턴으로 도구 접근 제어

## 참고 기출

- 136회 1교시 5번
