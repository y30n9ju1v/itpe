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

> **분산 시스템의 근본 트레이드오프를 정의하는 이론**  
> CAP(일관성/가용성/분할내성 중 2가지만 선택)와 PACELC(분할 여부와 무관한 지연-일관성 트레이드오프)

분산 데이터베이스 설계에서 "모든 것을 다 가질 수는 없다"는 현실을 수학적으로 정리한 것이 CAP 이론(분산 시스템에서 일관성·가용성·분단 허용성 세 가지를 동시에 완전히 만족할 수 없다는 이론)입니다. 그러나 CAP는 네트워크 파티션(장애) 상황만을 다루어 현실의 운영 환경을 완전히 설명하지 못했고, 이를 보완하기 위해 PACELC 이론이 2012년 Daniel Abadi에 의해 제안되었습니다.

### 1. 출제 배경 및 의도

클라우드와 글로벌 분산 서비스 환경에서 DB 아키텍처를 설계할 때, 가용성과 일관성 사이의 트레이드오프를 이해하지 못하면 치명적인 설계 실수를 범할 수 있습니다. 채점관은 CAP와 PACELC의 차이점, 각 이론에 해당하는 실제 DB 제품 예시, 그리고 이론의 한계를 정확히 설명할 수 있는지를 검증합니다. CAP/PACELC는 분산 DB뿐만 아니라 마이크로서비스 아키텍처 설계에도 직결되는 핵심 이론입니다.

### 2. 개념의 본질과 작동 메커니즘

#### 가. CAP 이론 (Brewer's Theorem, 2000)

Eric Brewer가 2000년 PODC에서 발표하고 2002년 Gilbert & Lynch가 증명한 정리로, **분산 시스템은 Consistency(일관성), Availability(가용성), Partition Tolerance(분할 내성) 세 가지 특성 중 동시에 두 가지만 보장**할 수 있다는 이론입니다.

| 특성 | 정의 | 의미 |
|------|------|------|
| **C (Consistency)** | 모든 노드가 동시에 같은 데이터를 반환 | 쓰기 후 읽기 시 항상 최신 값 반환 |
| **A (Availability)** | 모든 요청에 대해 정상 응답 반환 | 장애 노드 있어도 서비스 중단 없음 |
| **P (Partition Tolerance)** | 네트워크 파티션(분리) 발생 시에도 동작 | 노드 간 통신 단절 시에도 운영 가능 |

```text
[CAP 이론 삼각형]

              Consistency (C)
                    /\
                   /  \
                  / CA \
                 /      \
                /────────\
               /    CP    \   AP
              /            \
  Availability (A) ─────── Partition Tolerance (P)

CA: 단일 노드 RDBMS (Oracle, MySQL) → 분산 환경에서 P 포기 불가
CP: HBase, Zookeeper, MongoDB(기본) → 파티션 시 가용성 희생
AP: Cassandra, DynamoDB, CouchDB → 파티션 시 일관성 희생
```

**실제 분산 환경에서는 P(분할 내성)는 포기할 수 없으므로 CP vs AP 선택이 핵심입니다.**

| 분류 | 특징 | 대표 제품 | 사용 사례 |
|------|------|----------|----------|
| CP 시스템 | 파티션 시 일부 노드 응답 거부, 일관성 유지 | HBase, MongoDB, Zookeeper | 금융 거래, 분산 코디네이션 |
| AP 시스템 | 파티션 시 오래된 데이터라도 응답, 가용성 유지 | Cassandra, DynamoDB, CouchDB | SNS 피드, 쇼핑카트, DNS |

#### CAP 이론의 한계

1. **이분법적 단순화:** 실제로 일관성과 가용성은 0 또는 1이 아니라 스펙트럼(연속적 레벨)으로 조절 가능
2. **파티션 없는 정상 운영 설명 불가:** 네트워크가 정상인 대다수 시간에도 지연(Latency)과 일관성의 트레이드오프가 존재하지만 CAP는 이를 설명하지 못함
3. **지연(Latency) 개념 부재:** 일관성을 높일수록 분산 합의(Consensus) 오버헤드로 지연이 증가하는 현상을 이론에 포함하지 않음

#### 나. PACELC 이론 (2012, Daniel Abadi)

CAP의 한계를 보완하여, **파티션(P) 발생 시에는 가용성(A) vs 일관성(C)을, 정상 운영(E: Else) 시에는 지연(L: Latency) vs 일관성(C: Consistency)을 트레이드오프**로 명시하는 이론입니다.

```text
[PACELC 의사결정 트리]

네트워크 파티션 발생?
        │
   YES ─┤─ NO (Else: 정상 운영)
        │           │
   P 상황           E 상황
   ┌────┴────┐     ┌────┴────┐
   A 우선   C 우선  L 우선   C 우선
   (AP)     (CP)   (EL)     (EC)
        │
    PA/EL: Cassandra, DynamoDB
    PC/EC: MongoDB, HBase
    PC/EL: PNUTS(Yahoo)
    PC/EC: MongoDB, HBase, VoltDB
```

| 시스템 | Partition 상황 | Else 상황 | PACELC 분류 |
|--------|--------------|----------|------------|
| Cassandra | A 우선 (AP) | L 우선 (EL) | PA/EL |
| DynamoDB | A 우선 (AP) | L 우선 (EL) | PA/EL |
| MongoDB | C 우선 (CP) | C 우선 (EC) | PC/EC |
| HBase | C 우선 (CP) | C 우선 (EC) | PC/EC |
| MySQL Cluster | C 우선 (CP) | C 우선 (EC) | PC/EC |

### 3. 핵심 키워드 (Must-Have)

| 분류 | 키워드 |
|------|--------|
| CAP 3요소 | Consistency, Availability, Partition Tolerance |
| CAP 분류 | CA 시스템, CP 시스템, AP 시스템 |
| CAP 한계 | 이분법, Latency 부재, 연속적 스펙트럼, 정상 운영 미설명 |
| PACELC 요소 | Partition, Availability, Consistency, Else, Latency |
| PACELC 분류 | PA/EL, PA/EC, PC/EL, PC/EC |
| 일관성 모델 | Strong Consistency, Eventual Consistency, Tunable Consistency |

### 4. 맥락과 비교

| 비교 항목 | CAP 이론 | PACELC 이론 |
|----------|---------|------------|
| 제안자 | Eric Brewer (2000) | Daniel Abadi (2012) |
| 고려 상황 | 네트워크 파티션 발생 시만 | 파티션 발생 + 정상 운영 모두 |
| 트레이드오프 | A vs C (P 발생 시) | A vs C (P 발생 시) + L vs C (정상 시) |
| Latency 포함 | 미포함 | 포함 |
| 표현력 | 단순, 직관적 | 복잡하나 더 현실적 |
| 실무 활용성 | DB 초기 선택 기준 | DB 세부 튜닝 기준 |

**Tunable Consistency (Cassandra 예시)**

Cassandra는 `QUORUM`, `ONE`, `ALL` 등의 Consistency Level을 쿼리 단위로 조절 가능하여, AP vs CP를 동적으로 선택할 수 있는 Tunable Consistency(일관성 수준을 요청마다 조절할 수 있는 기능)를 지원합니다. 이는 CAP의 이분법적 한계를 실용적으로 극복한 사례입니다.

### 5. 실무 제언

**일관성 수준 설계 전략**

- **챌린지:** "일관성이 높을수록 좋다"는 단순 논리로 모든 쿼리에 Strong Consistency를 적용하면 분산 합의 프로토콜(Paxos/Raft)의 오버헤드로 인해 지연이 수십 배 증가할 수 있습니다. 반대로 Eventual Consistency만 허용하면 금융·재고 등 임계적 데이터에서 읽기 불일치(Stale Read)로 인한 심각한 비즈니스 오류가 발생합니다.
- **제언:** 데이터 중요도와 SLA(Service Level Agreement)에 따라 일관성 수준을 계층화해야 합니다. 금융 거래·재고 차감은 Strong Consistency(CP), 사용자 프로필·소셜 피드는 Eventual Consistency(AP), 실시간 분석·로그는 최대한 낮은 지연(EL)을 우선시하는 차등 전략을 적용해야 합니다.

**PACELC 관점의 아키텍처 선택**

- **챌린지:** 글로벌 서비스에서 멀티 리전 Active-Active 구성 시, 리전 간 네트워크 지연이 수십~수백 ms에 달해 Strong Consistency를 유지하면 모든 쓰기 응답 시간이 이 지연만큼 증가합니다.
- **제언:** PACELC의 EL(Else-Latency) 관점에서, 리전 로컬 쓰기를 우선 허용하고 비동기 복제로 최종 일관성을 달성하는 PA/EL 전략(예: DynamoDB Global Tables)을 채택하되, 충돌(Conflict) 해소 정책(Last-Write-Wins, CRDT 등)을 사전에 명확히 정의해야 합니다.
