---
title: "멀티캐스트 라우팅과 IGMP"
date: 2026-06-14T09:00:00+09:00
tags: ["네트워크", "NW", "핵토200"]
topic_no1: 7
topic_no2: 2
topic_large: "라우팅"
topic_small: "라우팅"
exam_ref: "모의_2020.03"
exam_type: "공통"
question_no: 2
---

## 문제

네트워크를 효율적으로 이용하기 위한 멀티캐스트의 개념과 멀티캐스트 라우팅 프로토콜 유형에 대해 설명하고, IGMP(Internet Group Management Protocol)의 동작 과정과 메시지 유형에 대하여 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 라우팅 |
| 토픽(소) | 라우팅 |
| 출제 | 모의_2020.03회 |
| 유형 | 공통 |
| 번호 | 2 |

## 해설

> **멀티캐스트는 "1:다(多) 방송"을 유니캐스트의 N배 트래픽 없이 구현하는 기술이다 — 마치 케이블TV가 하나의 신호로 수백만 가정에 전달되는 것처럼**

### 1. 출제 배경 및 의도

IPTV, 화상회의, 금융 시세 데이터 배포 등에서 멀티캐스트는 핵심 기술입니다. 동일 데이터를 수천 명에게 유니캐스트로 보내면 N배의 트래픽이 발생하지만, 멀티캐스트는 하나의 스트림으로 전달합니다.

### 2. 개념의 본질과 작동 메커니즘

#### 멀티캐스트 개념

```
유니캐스트: 송신자 → 수신자1
           송신자 → 수신자2  ← N명이면 N개의 스트림 필요
           송신자 → 수신자3

멀티캐스트: 송신자 → [라우터] → 수신자1
                    └──────── → 수신자2  ← 하나의 스트림, 라우터가 복사
                    └──────── → 수신자3
```

| 전송 방식 | 대상 | 예시 | 특징 |
|---|---|---|---|
| **유니캐스트** | 1:1 | 웹 요청/응답 | 정확한 전달, N배 트래픽 |
| **브로드캐스트** | 1:전체 | ARP Request | 모두에게, 불필요한 수신자도 포함 |
| **멀티캐스트** | 1:그룹 | IPTV, 화상회의 | 그룹 구성원에게만, 효율적 |
| **애니캐스트** | 1:가장 가까운 1 | DNS 루트 서버 | 최근접 노드로 전달 |

**멀티캐스트 주소 범위:** 224.0.0.0 ~ 239.255.255.255 (D클래스)

#### 멀티캐스트 라우팅 프로토콜 유형

**1) 밀집 모드 (Dense Mode)**
- 수신자가 많다고 가정, 초기에 전체 네트워크에 트래픽 플러딩
- 수신자 없는 구간은 Prune(가지치기)으로 제거
- 대표: PIM-DM (Protocol Independent Multicast - Dense Mode)

**2) 희소 모드 (Sparse Mode)**
- 수신자가 적다고 가정, 명시적으로 그룹에 참여한 경로에만 전달
- **RP(Rendezvous Point)** 라우터를 중심으로 공유 트리 구성
- 대표: PIM-SM (PIM - Sparse Mode)

**3) 양방향 PIM (BIDIR-PIM)**
- RP를 중심으로 양방향 공유 트리 구성
- 다수의 송신자가 있는 환경에 적합

| 항목 | Dense Mode (PIM-DM) | Sparse Mode (PIM-SM) |
|---|---|---|
| **가정** | 수신자 많음 | 수신자 적음 |
| **초기 동작** | 플러딩 후 가지치기 | 명시적 Join |
| **RP 필요** | 불필요 | 필요 |
| **적합 환경** | 소규모, 고밀도 | 대규모, 저밀도 |

#### IGMP (Internet Group Management Protocol)

**역할:** 호스트가 라우터에게 "나 이 멀티캐스트 그룹에 참여할게요"를 알리는 프로토콜

```
호스트                          라우터
  │                                │
  │── Membership Report ──────────▶│  "224.1.1.1 그룹 참여"
  │                                │  (멀티캐스트 트래픽 전달 시작)
  │
  │◀── Membership Query ───────────│  "224.1.1.1 그룹 아직 있어요?"
  │                                │  (주기적 확인, IGMPv2: 125초)
  │── Membership Report ──────────▶│  "네, 아직 있어요"
  │
  │── Leave Group ────────────────▶│  "저 나갈게요" (IGMPv2 추가)
  │                                │  (전달 중단)
```

**IGMP 버전별 메시지 유형:**

| 메시지 | IGMPv1 | IGMPv2 | IGMPv3 |
|---|---|---|---|
| **Membership Query** | General Query | General + Group-Specific | Source-Specific Query |
| **Membership Report** | 있음 | 있음 | 있음 (소스 필터링) |
| **Leave Group** | 없음 | 있음 | 있음 |
| **특징** | 기본 | Leave 지원 | 소스 지정 가능 (SSM) |

**IGMPv3의 SSM (Source-Specific Multicast):**
```
"224.1.1.1 그룹 중 192.168.1.1에서 오는 것만 수신"
→ 원치 않는 송신자 차단 가능 (보안 강화)
```

### 3. 핵심 키워드 (Must-Have)

- **멀티캐스트 주소:** 224.0.0.0/4 (D클래스)
- **PIM (Protocol Independent Multicast):** Dense Mode, Sparse Mode
- **RP (Rendezvous Point):** PIM-SM의 집합점 라우터
- **IGMP:** 호스트-라우터 간 그룹 멤버십 관리
- **Membership Query/Report/Leave:** IGMP 3대 메시지

### 4. 맥락과 비교

IPv6 멀티캐스트에서는 IGMP 대신 **MLD(Multicast Listener Discovery)**가 ICMPv6 기반으로 동작합니다. 클라우드 환경에서는 멀티캐스트 지원이 제한적이므로, **오버레이 멀티캐스트(Application Layer Multicast)**나 CDN을 통한 복제 방식으로 대체합니다.

### 5. 실무 제언

IPTV 서비스에서 채널 변경 속도(Zapping Time)를 줄이기 위해 **Fast Leave**(IGMPv2)와 **IGMP Snooping**(L2 스위치에서 불필요한 포트로 멀티캐스트 차단)이 필수입니다. 대규모 화상회의 시스템 구축 시 기업 네트워크 내부에 PIM-SM을 활성화하고, 인터넷 구간에는 오버레이 멀티캐스트(WebRTC SFU)를 조합하는 설계가 현실적입니다.
