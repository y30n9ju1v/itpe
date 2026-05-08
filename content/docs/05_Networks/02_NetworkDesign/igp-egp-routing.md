---
title: "IGP와 EGP (동적 라우팅 프로토콜)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "컴퓨터시스템및정보통신", "네트워크설계", "IGP", "EGP", "라우팅", "BGP", "OSPF"]
draft: false
exam: "137회"
---

## 개요

동적 라우팅 프로토콜은 라우터가 네트워크 경로를 자동으로 학습·갱신하는 프로토콜이다. IGP(Interior Gateway Protocol)는 단일 자율 시스템(AS) 내부에서, EGP(Exterior Gateway Protocol)는 서로 다른 AS 간에 라우팅 정보를 교환한다.

## 핵심 내용

### 자율 시스템 (AS: Autonomous System)

단일 관리 주체(ISP, 기업)가 관리하는 라우터·네트워크의 집합. AS 번호(ASN)로 식별 (예: KT = AS4766).

### IGP (Interior Gateway Protocol)

**역할**: 동일 AS 내부의 라우터 간 경로 정보 교환

| 프로토콜 | 유형 | 특징 |
|----------|------|------|
| **RIP** (Routing Information Protocol) | 거리 벡터 | 홉 수(최대 15) 기반, 단순하나 대규모 부적합 |
| **OSPF** (Open Shortest Path First) | 링크 상태 | Dijkstra 최단경로, 수렴 빠름, 대규모 적합 |
| **EIGRP** (Cisco) | 하이브리드 | 거리 벡터 + 링크 상태, Cisco 전용 |
| **IS-IS** | 링크 상태 | OSPF와 유사, ISP 코어망 선호 |

**링크 상태 vs 거리 벡터 비교**:
- 거리 벡터: 인접 라우터에 전체 라우팅 테이블 주기적 전송 → 수렴 느림
- 링크 상태: 전체 토폴로지 정보(LSA) 공유, 각 라우터가 직접 최단경로 계산 → 수렴 빠름

### EGP (Exterior Gateway Protocol)

**역할**: 서로 다른 AS 간 라우팅 정보 교환

현재 표준: **BGP-4** (Border Gateway Protocol 버전 4)

| 항목 | 내용 |
|------|------|
| **동작 방식** | 경로 벡터(Path Vector) — AS 경로 목록으로 루프 방지 |
| **연결 방식** | TCP 179번 포트, eBGP(외부) / iBGP(내부) |
| **정책 기반** | 비용·계약·정치적 이유로 경로 선택 가능 (단순 최단경로 아님) |
| **안정성** | 인터넷 전체 라우팅 테이블 관리 (80만+ 경로) |

### IGP vs EGP 비교

| 구분 | IGP | EGP (BGP) |
|------|-----|-----------|
| 적용 범위 | 단일 AS 내부 | AS 간 |
| 목적 | 최적 경로 탐색 | 정책 기반 경로 교환 |
| 수렴 속도 | 빠름 | 느림 (안정성 우선) |
| 대표 프로토콜 | OSPF, RIP, EIGRP | BGP-4 |
| 확장성 | 중간 | 매우 높음 |

## 출제 포인트

- AS 개념 먼저 정의 후 IGP/EGP 구분
- IGP 프로토콜 4가지(RIP·OSPF·EIGRP·IS-IS)와 유형
- BGP-4가 현재 EGP 표준임을 명시
- 경로 벡터 방식과 정책 기반 라우팅이 BGP의 핵심임을 강조

## 연관 개념

- [ARQ/오류제어]({{< relref "/docs/05_Networks/01_Network_Protocol/arq-error-control" >}}) — 네트워크 신뢰성의 다른 측면
- [AI-Native Network/6G]({{< relref "/docs/05_Networks/03_CommunicationSystems/ai-native-network-6g" >}}) — 차세대 네트워크 라우팅

## 참고 기출

- 137회 1교시 1번
