---
title: "SOAP와 REST 비교"
date: 2026-05-09T08:09:13+09:00
tags: ["pecs", "컴퓨터통신및네트워크", "네트워크프로토콜", "SOAP", "REST", "웹서비스", "API"]
draft: false
exam_pecs: "135회"
---

## 개요

SOAP(Simple Object Access Protocol)는 XML 기반의 구조화된 메시지 교환 프로토콜로, 엄격한 표준과 보안을 제공한다. REST(Representational State Transfer)는 HTTP 메서드를 활용한 아키텍처 스타일로 단순성과 확장성이 특징이다.

## 핵심 내용

### 비교표

| 항목 | SOAP | REST |
|------|------|------|
| **구분** | 프로토콜 | 아키텍처 스타일 |
| **메시지 포맷** | XML만 사용 | JSON, XML, HTML 등 다양 |
| **전송 프로토콜** | HTTP, SMTP, TCP 등 | HTTP/HTTPS |
| **인터페이스** | WSDL 정의 | URL + HTTP 메서드 |
| **상태 관리** | Stateful 가능 | Stateless |
| **보안** | WS-Security 표준 내장 | HTTPS + OAuth 조합 |
| **처리 속도** | 느림 (XML 파싱 오버헤드) | 빠름 (경량 포맷) |
| **표준화** | 엄격한 표준 (W3C) | 느슨한 가이드라인 |
| **주요 사용처** | 금융·의료·엔터프라이즈 | 웹 API, 모바일 앱 |

### SOAP 구조

```
Envelope (전체 메시지 감싸는 루트 요소)
├── Header (선택적 메타데이터: 인증, 트랜잭션 등)
└── Body (실제 요청/응답 데이터)
    └── Fault (오류 정보, 선택적)
```

### REST 6대 제약 조건

| 제약 | 설명 |
|------|------|
| **클라이언트-서버** | UI와 데이터 저장소 분리 |
| **무상태(Stateless)** | 각 요청에 필요한 정보 모두 포함 |
| **캐시 가능** | 응답에 캐시 가능 여부 명시 |
| **계층화 시스템** | 프록시·게이트웨이 중간 계층 허용 |
| **균일한 인터페이스** | 자원 식별, HTTP 메서드 일관성 |
| **온디맨드 코드** | 클라이언트에 코드 전송 가능(선택) |

## 출제 포인트

- SOAP는 프로토콜, REST는 아키텍처 스타일이라는 구분 중요
- SOAP의 장점: WS-Security 내장, 엄격한 계약(WSDL), 트랜잭션 지원
- REST의 장점: 단순함, JSON 경량, HTTP 표준 활용, 빠른 개발
- 금융·공공: SOAP / 웹·모바일: REST 선택 기준

## 연관 개념

- [Open API]({{< relref "/docs/05_Networks/01_Network_Protocol/open-api" >}}) — REST 기반 공개 API 설계 원칙
- [MSA]({{< relref "/docs/02_SoftwareEngineering/02_Analysis_Design/ta-aa-architect" >}}) — 마이크로서비스 간 통신에 REST/gRPC 활용
- GraphQL — REST의 대안으로 등장한 쿼리 언어 기반 API

## 참고 기출

- 135회 1교시 2번 (PECS)
