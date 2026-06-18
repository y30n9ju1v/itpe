---
title: "NoSQL CAP 이론과 PACELC 이론"
date: 2026-06-07T17:47:26+09:00
tags: ["데이터베이스", "핵토200", "NoSQL", "CAP", "PACELC"]
topic_no1: 20
topic_no2: 2
topic_large: "NOSQL"
topic_small: "NoSQL"
exam_ref: "함속_2019.08"
exam_type: "응용"
question_no: "Day-2"
---

## 문제

NOSQL 의 CAP 이론과 PACELC 이론에 대해 다음에 대하여 설명하시오.

가. CAP 이론과 CAP 이론의 한계  
나. PACELC 이론

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | NOSQL |
| 토픽(소) | NoSQL |
| 출제 | 함속_2019.08 |
| 유형 | 응용 |
| 번호 | Day-2 |

## 해설

### 출제 배경 및 의도

분산 데이터베이스 설계에서 "모든 것을 다 가질 수는 없다"는 현실을 수학적으로 정리한 CAP 이론은 분산 시스템 아키텍처의 기본 원리입니다. 그러나 CAP는 네트워크 파티션 상황만을 다루어 정상 운영 시의 Latency-Consistency 트레이드오프를 설명하지 못했고, PACELC가 이를 보완했습니다.

클라우드·글로벌 분산 서비스에서 DB 아키텍처 설계 시 가용성과 일관성의 트레이드오프를 이해하지 못하면 치명적 설계 실수가 발생합니다. 채점관은 CAP와 PACELC의 차이, 각 이론의 실제 DB 제품 매핑, 그리고 이론의 한계와 Tunable Consistency 같은 실용적 극복 방안을 설명할 수 있는지를 검증합니다.

### 1. CAP 이론, 개요

정 의  • 분산 시스템에서 Consistency(일관성)·Availability(가용성)·Partition Tolerance(분할 내성) 세 가지를 동시에 완전히 만족할 수 없다는 이론 (Eric Brewer, 2000)
       - 분산 환경에서 P(분할 내성)는 포기 불가하므로, 실질적으로 CP vs AP 선택이 핵심

```
              Consistency (C)
                    /\
                   /  \
                  / CA \
                 /      \
                /────────\
               /    CP    \   AP
              /            \
  Availability (A) ─────── Partition Tolerance (P)

  CA: 단일 노드 RDBMS(Oracle, MySQL) → 분산 환경에서 P 포기 불가
  CP: HBase, Zookeeper, MongoDB → 파티션 시 가용성 희생, 일관성 유지
  AP: Cassandra, DynamoDB, CouchDB → 파티션 시 일관성 희생, 가용성 유지
```

- 실제 분산 환경에서 네트워크 파티션은 반드시 발생하므로 CA는 이론적 구분이며, CP vs AP 선택이 분산 DB 설계의 핵심 결정임

### 2. 가. CAP 이론 상세와 한계

1) CAP 3요소와 CP/AP 분류

| 구분 | 항목 | 설명 |
|------|------|------|
| C(Consistency) | 정의 | 모든 노드가 동시에 같은 데이터를 반환 (쓰기 후 항상 최신 값 읽기) |
| A(Availability) | 정의 | 모든 요청에 정상 응답 반환 (장애 노드 있어도 서비스 중단 없음) |
| P(Partition Tolerance) | 정의 | 노드 간 통신 단절 시에도 시스템 운영 가능 |
| CP 시스템 | 특징 | 파티션 시 일부 노드 응답 거부, 일관성 유지 |
| CP 시스템 | 대표 제품 | HBase, MongoDB, Zookeeper |
| CP 시스템 | 적합 사례 | 금융 거래, 분산 코디네이션 |
| AP 시스템 | 특징 | 파티션 시 구 버전 데이터라도 응답, 가용성 유지 |
| AP 시스템 | 대표 제품 | Cassandra, DynamoDB, CouchDB |
| AP 시스템 | 적합 사례 | SNS 피드, 쇼핑카트, DNS |

2) CAP 이론의 한계

| 구분 | 항목 | 설명 |
|------|------|------|
| 한계 ① | 이분법적 단순화 | 일관성·가용성은 0/1이 아닌 연속적 스펙트럼으로 조절 가능 |
| 한계 ② | 정상 운영 미설명 | 파티션이 없는 정상 운영 시의 Latency-Consistency 트레이드오프 미포함 |
| 한계 ③ | Latency 개념 부재 | 일관성↑ 시 분산 합의 오버헤드로 지연 증가하는 현상 미설명 |

- CAP의 한계를 극복하기 위해 2012년 Daniel Abadi가 PACELC 이론을 제안함

### 3. 나. PACELC 이론과 실제 DB 적용

1) PACELC 의사결정 구조

| 구분 | 항목 | 설명 |
|------|------|------|
| P(Partition) | 파티션 발생 시 | A(가용성 우선) vs C(일관성 우선) 선택 |
| E(Else) | 정상 운영 시 | L(Latency 우선, 빠른 응답) vs C(일관성 우선) 선택 |
| PA/EL | 대표 제품 | Cassandra, DynamoDB (가용성·저지연 최우선) |
| PC/EC | 대표 제품 | MongoDB, HBase, MySQL Cluster (일관성 최우선) |
| PC/EL | 대표 제품 | PNUTS(Yahoo) (파티션 시 일관성, 정상 시 저지연) |

```
네트워크 파티션 발생?
        │
   YES ─┤─ NO (Else: 정상 운영)
        │              │
   P 상황          E 상황
   ┌────┴────┐    ┌────┴────┐
   A 우선   C 우선 L 우선   C 우선
   (PA)     (PC)  (EL)     (EC)

   PA/EL: Cassandra, DynamoDB
   PC/EC: MongoDB, HBase, VoltDB
   PC/EL: PNUTS(Yahoo)
```

2) CAP vs PACELC 비교

| 구분 | 항목 | 설명 |
|------|------|------|
| CAP | 제안자/연도 | Eric Brewer, 2000 |
| CAP | 고려 상황 | 네트워크 파티션 발생 시만 |
| CAP | Latency 포함 | 미포함 |
| CAP | 실무 활용성 | DB 초기 선택 기준 |
| PACELC | 제안자/연도 | Daniel Abadi, 2012 |
| PACELC | 고려 상황 | 파티션 발생 + 정상 운영 모두 |
| PACELC | Latency 포함 | 포함 (Else-Latency) |
| PACELC | 실무 활용성 | DB 세부 튜닝·운영 기준으로 더 현실적 |

- PACELC는 CAP의 이분법 한계를 극복하여 정상 운영 시의 Latency-Consistency 트레이드오프까지 포함하는 더 실용적인 이론이며, Tunable Consistency(Cassandra의 QUORUM/ONE/ALL 등 쿼리 단위 일관성 수준 조절)는 이를 실용적으로 구현한 사례임.  "끝"

### 실무 제언

**일관성 수준 계층화 전략**
- **챌린지**: 모든 쿼리에 Strong Consistency를 적용하면 Paxos/Raft 분산 합의 오버헤드로 지연이 수십 배 증가하고, Eventual Consistency만 허용하면 금융·재고 데이터에서 Stale Read로 비즈니스 오류가 발생함
- **제언**: 데이터 중요도에 따라 금융 거래·재고 차감은 Strong Consistency(CP), 사용자 프로필·소셜 피드는 Eventual Consistency(AP), 로그·분석은 저지연(EL) 우선으로 계층화 적용

**PACELC 관점의 글로벌 멀티 리전 설계**
- **챌린지**: 멀티 리전 Active-Active 구성 시 리전 간 네트워크 지연이 수십~수백 ms에 달해 Strong Consistency를 유지하면 모든 쓰기 응답 시간이 이 지연만큼 증가함
- **제언**: PA/EL 전략(리전 로컬 쓰기 허용 + 비동기 복제로 최종 일관성)을 채택하되, Conflict 해소 정책(Last-Write-Wins, CRDT 등)을 사전에 명확히 정의

**Tunable Consistency로 CAP 이분법 극복**
- **챌린지**: CAP는 이분법적 선택만 제시하지만 실제 운영에서는 요청별로 다른 일관성 수준이 필요함
- **제언**: Cassandra의 Tunable Consistency(QUORUM, ONE, ALL)처럼 쿼리 단위로 일관성 수준을 조절하는 기능을 활용하여, AP 시스템에서도 중요 데이터는 강한 일관성을 선택적으로 적용
