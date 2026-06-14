---
title: "Ad-hoc 네트워킹 라우팅 프로토콜"
date: 2026-06-14T09:00:00+09:00
tags: ["네트워크", "NW", "핵토200"]
topic_no1: 13
topic_no2: 1
topic_large: "Ad-hoc"
topic_small: "Ad-hoc 라우팅"
exam_ref: "119"
exam_type: "컴시응"
question_no: 1
---

## 문제

Ad-hoc Networking Routing Protocol에 대해 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | Ad-hoc |
| 토픽(소) | Ad-hoc 라우팅 |
| 출제 | 119회 |
| 유형 | 컴시응 |
| 번호 | 1 |

## 해설

> **Ad-hoc 네트워크는 기지국 없이 단말끼리 직접 연결하는 "즉석 네트워크"다 — 군사 작전 지역이나 재난 현장처럼 인프라가 없는 곳에서 빛을 발한다**

### 1. 출제 배경 및 의도

5G의 D2D(Device-to-Device), 드론 군집 통신, 재난망, 군사 통신, VANET(차량 네트워크)에서 Ad-hoc 네트워킹이 핵심 기술입니다. 기반 인프라 없이 자율적으로 네트워크를 구성하고 라우팅하는 능력이 중요합니다.

### 2. 개념의 본질과 작동 메커니즘

#### Ad-hoc 네트워크 개념

**정의:** 기지국(Base Station)이나 AP(Access Point) 같은 고정 인프라 없이, 단말들이 자율적으로 네트워크를 구성하는 분산형 무선 네트워크

```
일반 무선 네트워크 (Infrastructure):
단말A ──▶ AP(기지국) ──▶ 인터넷 ──▶ 단말B
           [고정 인프라 필요]

Ad-hoc 네트워크 (MANET):
단말A ──▶ 단말B ──▶ 단말C ──▶ 단말D
          [단말들이 라우터 역할]
          [인프라 불필요]
```

**특성:**
- 단말이 라우터 역할 겸임 (Multi-hop 라우팅)
- 토폴로지 동적 변화 (단말 이동)
- 자율 구성 (Self-organizing)
- 에너지 제약 (배터리 기기)
- 보안 취약 (중앙 인증 없음)

#### MANET (Mobile Ad-hoc NETwork)

```
예시: 전쟁터 통신
병사1 ──(직접)──▶ 병사2 ──(중계)──▶ 병사3 ──(중계)──▶ 지휘소
        1홉              2홉               3홉

병사2가 이동하면 → 토폴로지 변경 → 라우팅 재계산
```

#### Ad-hoc 라우팅 프로토콜 분류

**1) 선제적(Proactive) 라우팅 — "미리 지도를 만들어 두는 방식"**

항상 최신 라우팅 테이블 유지, 경로 요청 즉시 응답 가능

| 프로토콜 | 특징 |
|---|---|
| **DSDV** (Destination Sequenced DV) | 시퀀스 번호 추가 DV, 루프 방지 |
| **OLSR** (Optimized LS Routing) | MPR(Multi-Point Relay) 선택적 플러딩으로 오버헤드 감소 |
| **TBRPF** | 트리 기반 라우팅 |

```
OLSR MPR 개념:
A - B - C - D
    |
    E

B가 MPR: B만 전체에 플러딩, A와 E는 선택적 전달
→ 플러딩 오버헤드 감소
```

**장점:** 낮은 통신 지연 (즉시 경로 제공)
**단점:** 높은 제어 트래픽 오버헤드, 변화 빠른 환경 부적합

**2) 반응형(Reactive) 라우팅 — "필요할 때만 지도를 찾는 방식"**

경로가 필요할 때만 탐색, 평상시 라우팅 테이블 미유지

| 프로토콜 | 특징 |
|---|---|
| **AODV** (Ad-hoc On-demand DV) | Route Discovery + Route Maintenance |
| **DSR** (Dynamic Source Routing) | 패킷 헤더에 전체 경로 포함 |
| **TORA** (Temporally Ordered Routing) | 방향성 그래프 기반 |

```
AODV 동작:
1. Route Discovery:
   A → RREQ(브로드캐스트) → B,C,D... → 목적지 Z
   Z → RREP(유니캐스트) → ... → A (최적 경로)

2. Route Maintenance:
   링크 끊김 → RERR → 출발지에 알림 → 재탐색
```

**장점:** 낮은 오버헤드, 변화 빠른 환경 적합
**단점:** 초기 경로 탐색 지연

**3) 하이브리드(Hybrid) 라우팅**

지역(Zone) 내는 Proactive, 지역 간은 Reactive

| 프로토콜 | 특징 |
|---|---|
| **ZRP** (Zone Routing Protocol) | Zone 내 IARP(선제), Zone 간 IERP(반응) |
| **HARP** | 계층적 적응형 라우팅 |

**비교표:**

| 항목 | Proactive | Reactive | Hybrid |
|---|---|---|---|
| **라우팅 테이블** | 항상 유지 | 요청 시 탐색 | 혼합 |
| **지연** | 낮음 | 탐색 지연 있음 | 중간 |
| **오버헤드** | 높음 | 낮음 | 중간 |
| **적합 환경** | 소규모, 안정 | 대규모, 이동 많음 | 중규모 |
| **대표** | OLSR, DSDV | AODV, DSR | ZRP |

### 3. 핵심 키워드 (Must-Have)

- **MANET:** Mobile Ad-hoc Network, 이동 Ad-hoc 네트워크
- **Multi-hop 라우팅:** 단말이 중계 라우터 역할
- **Proactive vs Reactive vs Hybrid:** 3대 분류
- **AODV:** RREQ/RREP/RERR, 가장 널리 사용되는 반응형
- **OLSR:** MPR 선택으로 오버헤드 감소, 선제형 대표

### 4. 맥락과 비교

**Ad-hoc 응용 분야:**

| 분야 | 특징 |
|---|---|
| **VANET** | 차량 간 Ad-hoc, V2V/V2I 통신 |
| **WSN** | 무선 센서 네트워크, 에너지 최적화 중점 |
| **군사통신** | 재난 복구, 기지국 없는 전장 |
| **5G D2D** | 기지국 부하 감소, ProSe(Proximity Services) |

### 5. 실무 제언

재난 현장 통신망 구축 시 AODV 또는 OLSR 기반 메시 네트워크를 활용합니다. 드론을 Flying Relay로 활용하여 지상 단말의 커버리지를 확장하는 FANET(Flying Ad-hoc Network)이 최신 응용입니다. 기술사 답안에서 3가지 라우팅 분류체계와 대표 프로토콜을 비교 표로 정리하고, AODV의 경로 탐색 과정을 다이어그램으로 표현하면 체계적 이해를 보여줄 수 있습니다.
