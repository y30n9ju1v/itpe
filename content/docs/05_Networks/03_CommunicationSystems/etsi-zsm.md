---
title: "ETSI ZSM (Zero-touch Network and Service Management)"
date: 2026-05-09T08:09:13+09:00
tags: ["pecs", "컴퓨터통신및네트워크", "통신시스템", "ZSM", "ETSI", "자동화", "AI네트워크", "6G"]
draft: false
exam_pecs: ["135회"]
---

## 개요

ETSI ZSM(Zero-touch Network and Service Management)은 유럽전기통신표준화기구(ETSI)가 주도하는 네트워크·서비스의 완전 자동화 관리 표준 프레임워크다. 인간 개입 없이(Zero-touch) AI/ML로 네트워크를 자율적으로 운영·최적화·치유하는 것을 목표로 한다.

## 핵심 내용

### ZSM 핵심 개념

**Zero-touch**: 네트워크 운영의 모든 생명주기(배포·설정·모니터링·최적화·장애 복구)를 자동화하여 인간 개입을 최소화 또는 제거

**목표**: 5G NF(Network Function), 6G 환경에서의 완전 자율 운영

### ZSM 참조 아키텍처

```
┌─────────────────────────────────────┐
│       Cross-domain Management       │ ← 전사적 E2E 서비스 관리
├─────────────────────────────────────┤
│   Domain 1  │  Domain 2  │ Domain 3 │ ← 도메인별 관리 (RAN, Core, Transport)
└─────────────────────────────────────┘
```

| 구성 요소 | 역할 |
|-----------|------|
| **Management Domain** | 특정 네트워크 도메인(RAN, 코어망 등) 자율 관리 |
| **Cross-domain Integration Fabric** | 도메인 간 데이터 공유·서비스 조율 |
| **Analytics Services** | AI/ML 기반 네트워크 상태 분석·예측 |
| **Intent-based Interface** | 비즈니스 의도(Intent)를 기술 정책으로 변환 |

### ZSM 핵심 기능

| 기능 | 설명 |
|------|------|
| **자가 설정(Self-Configuration)** | 새 NF 배포 시 자동 파라미터 설정 |
| **자가 최적화(Self-Optimization)** | KPI 기반 자동 파라미터 조정 |
| **자가 치유(Self-Healing)** | 장애 감지·원인 분석·자동 복구 |
| **자가 보호(Self-Protection)** | 보안 위협 탐지·자동 차단 |

→ **Cognitive Network(인지 네트워크)**: 4자가(Self-X) 기능의 통합

### 5G/6G와의 관계

- 5G: SON(Self-Organizing Network)에서 ZSM으로 진화
- 6G: AI-Native Network에서 ZSM이 기반 관리 프레임워크
- O-RAN: 오픈 RAN 인터페이스에서 ZSM 적용

## 출제 포인트

- ZSM의 정의: 인간 개입 없는 완전 자동화 네트워크 관리
- 4자가(Self-Configuration/Optimization/Healing/Protection) 기능
- ETSI ZSM 참조 아키텍처: 도메인 관리 + Cross-domain 조율
- 5G SON과의 차이점, 6G AI-Native Network와의 연계

## 연관 개념

- [AI-Native Network 6G]({{< relref "/docs/05_Networks/03_CommunicationSystems/ai-native-network-6g" >}}) — 6G에서 ZSM이 핵심 관리 계층
- [채널용량 샤논 정리]({{< relref "/docs/05_Networks/03_CommunicationSystems/shannon-channel-capacity" >}}) — 자동화 네트워크의 이론적 기반
- IBN(Intent-Based Networking) — ZSM의 Intent 인터페이스와 연계

## 참고 기출

- 135회 1교시 13번 (PECS)
