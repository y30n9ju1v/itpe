---
title: "QoS IntServ 모델과 DiffServ 모델 비교"
date: 2026-06-14T09:00:00+09:00
tags: ["네트워크", "NW", "핵토200"]
topic_no1: 14
topic_no2: 1
topic_large: "QoS"
topic_small: "IntServ, DiffServ"
exam_ref: "모의_2019.10"
exam_type: "관리"
question_no: 4
---

## 문제

네트워크 서비스 품질(QoS) 보장을 위한 기술 중 다음에 대해 설명하시오.
가. 패킷 처리 순서 결정을 위한 스케줄링 기술
나. 트래픽 처리량 제어를 위한 버킷(bucket) 기술
다. IntServ 모델과 DiffServ 모델 비교

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | QoS |
| 토픽(소) | IntServ, DiffServ |
| 출제 | 모의_2019.10회 |
| 유형 | 관리 |
| 번호 | 4 |

## 해설

> **QoS 스케줄링은 "응급실 트리아지(triage)"와 같다 — 중증 환자(실시간 트래픽)를 먼저, 경증 환자(일반 데이터)는 나중에**

### 1. 출제 배경 및 의도

패킷교환 네트워크에서 실시간 트래픽(VoIP, 영상회의)의 품질 보장 문제는 핵심 과제입니다. QoS 스케줄링, 트래픽 쉐이핑, IntServ/DiffServ 아키텍처를 통합적으로 이해하는 것이 목표입니다.

### 2. 개념의 본질과 작동 메커니즘

#### 가. 패킷 스케줄링 기술

**1) FIFO (First In, First Out)**
```
들어온 순서대로 처리
장점: 단순
단점: 중요 패킷 우선 처리 불가
```

**2) Priority Queuing (우선순위 큐잉)**
```
높은 우선순위 큐가 비어야 낮은 우선순위 처리
큐 1 (VoIP): ████████ → 먼저 처리
큐 2 (영상): ████     → 큐1 완료 후
큐 3 (데이터):████    → 큐2 완료 후

단점: 낮은 큐 Starvation(기아) 가능
```

**3) WFQ (Weighted Fair Queuing)**
```
각 흐름에 가중치에 비례하여 대역폭 할당
VoIP(가중치4): 40% 대역폭
영상(가중치3):  30%
데이터(가중치3):30%

공정성 보장 + 우선순위 부여
```

**4) WRR (Weighted Round Robin)**
```
가중치 비례로 라운드로빈 서비스
가중치 [3:2:1]:
큐A큐A큐A큐B큐B큐C → 큐A큐A큐A큐B큐B큐C ...
```

**5) CBWFQ + LLQ (Class-Based WFQ + Low Latency Queue)**
```
트래픽 클래스별 WFQ + VoIP용 최우선 LLQ 추가
VoIP → LLQ (최우선, 지연 최소)
영상 → CBWFQ 클래스 1
데이터 → CBWFQ 클래스 2
```

#### 나. 버킷(Bucket) 기술

**1) 토큰 버킷 (Token Bucket)**

```
토큰 생성(r개/초)
         ↓
    [버킷 용량: B개]
         ↓
패킷 전송 시 토큰 소비
남은 토큰 없으면 패킷 대기

특성: 평균 전송률 = r, 버스트 허용 = B
→ 짧은 버스트는 허용하되 장기 평균을 제한
```

**2) 리키 버킷 (Leaky Bucket)**

```
입력 패킷 → [버킷] → 일정 속도(r)로 출력
버킷 가득 차면 → 패킷 드롭

특성: 출력 속도 항상 일정
→ 트래픽 쉐이핑(완만하게)에 사용
→ 버스트 완전히 흡수
```

| 항목 | 토큰 버킷 | 리키 버킷 |
|---|---|---|
| **버스트** | 허용 (토큰 축적) | 허용 안 함 |
| **출력 속도** | 가변 (최대 r+B) | 일정 (r) |
| **용도** | 트래픽 폴리싱 | 트래픽 쉐이핑 |
| **사용 예** | 인터넷 속도 제한 | ATM, QoS 보장 |

#### 다. IntServ vs DiffServ 비교

**IntServ (Integrated Services):**

```
흐름별 자원 예약 방식 (RSVP 프로토콜 사용)

클라이언트 → RSVP PATH 메시지 → 목적지
             (QoS 요구사항 포함)
목적지 → RSVP RESV 메시지 → 클라이언트
         (경로상 라우터가 자원 예약)

[L3 라우터A] ← RESV: 2Mbps 예약 →
[L3 라우터B] ← RESV: 2Mbps 예약 →
[L3 라우터C] ← RESV: 2Mbps 예약
```

**DiffServ (Differentiated Services):**

```
트래픽 클래스별 처리 방식 (DSCP 마킹)

패킷 → IP 헤더 DSCP 필드에 마킹
EF(Expedited Forwarding): 46 ← VoIP
AF(Assured Forwarding):   34 ← 영상
BE(Best Effort):           0  ← 일반 데이터

라우터: DSCP 값에 따라 큐 배정 → 처리
(흐름별 상태 유지 불필요)
```

**IntServ vs DiffServ 비교표:**

| 비교 항목 | IntServ | DiffServ |
|---|---|---|
| **QoS 단위** | 개별 흐름(Flow) | 트래픽 클래스 |
| **자원 예약** | RSVP로 경로상 예약 | 없음 (마킹만) |
| **보장 수준** | 엄격한 보장 | 상대적 우선순위 |
| **확장성** | 낮음 (흐름 상태 저장) | 높음 (Stateless) |
| **복잡도** | 높음 | 낮음 |
| **대규모 적용** | 어려움 | 용이 |
| **대표 기술** | RSVP | DSCP, MPLS |

### 3. 핵심 키워드 (Must-Have)

- **DSCP (Differentiated Services Code Point):** IP 헤더 6비트 마킹
- **EF (Expedited Forwarding):** VoIP용 최우선 처리 클래스
- **RSVP:** Resource Reservation Protocol, IntServ의 신호 프로토콜
- **LLQ:** Low Latency Queue, 지연 최소화를 위한 절대 우선 큐
- **토큰 버킷:** 버스트 허용 트래픽 폴리싱

### 4. 맥락과 비교

MPLS(Multi-Protocol Label Switching)에서 DiffServ와 결합한 **DS-TE(DiffServ-aware Traffic Engineering)**가 WAN QoS의 실무 표준입니다. SD-WAN에서는 DPI(Deep Packet Inspection)로 애플리케이션을 식별하고 DSCP를 자동 마킹하는 방식이 보편화되었습니다.

### 5. 실무 제언

기업 네트워크 QoS 설계 시 DiffServ가 현실적입니다. VoIP 트래픽에 DSCP EF(46) 마킹, 영상에 AF41(34), 일반 데이터에 BE(0)를 적용하고, WAN 구간 라우터에서 LLQ + CBWFQ로 처리합니다. 기술사 답안에서 스케줄링 기법 비교, 버킷 기술 원리, IntServ/DiffServ 비교표를 체계적으로 서술하면 높은 점수를 기대할 수 있습니다.
