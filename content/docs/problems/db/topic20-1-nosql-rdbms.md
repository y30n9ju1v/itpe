---
title: "RDBMS와 NoSQL 개념 비교 및 유형"
date: 2026-06-07T17:47:26+09:00
tags: ["데이터베이스", "핵토200", "NoSQL", "RDBMS", "NewSQL"]
topic_no1: 20
topic_no2: 1
topic_large: "NOSQL"
topic_small: "NOSQL"
exam_ref: "모의_2021.01"
exam_type: "공통"
question_no: 4
---

## 문제

데이터베이스는 크게 RDBMS 와 NoSQL 로 나뉘지며, 최근에는 비정형화된 빅데이터 저장을 위한 NoSQL 활용이 증가하고 있다. 다음에 대해 설명하시오.

가. RDBMS 와 NoSQL 의 개념 및 비교  
나. NoSQL 의 유형  
다. NewSQL

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | NOSQL |
| 토픽(소) | NOSQL |
| 출제 | 모의_2021.01 |
| 유형 | 공통 |
| 번호 | 4 |

## 해설

> **데이터 저장 패러다임의 분기점**  
> RDBMS(스키마 고정·ACID)와 NoSQL(스키마 유연·BASE·수평 확장), 그리고 두 장점을 통합한 NewSQL

빅데이터·클라우드 시대가 도래하며 단일 RDBMS로는 수억 건의 비정형 데이터를 실시간으로 처리하기 어렵게 되었습니다. NoSQL은 이 한계를 극복하기 위해 스키마 유연성과 수평 확장성을 전면에 내세웠으며, NewSQL은 다시 ACID 트랜잭션 보장이라는 RDBMS의 강점을 NoSQL 수준의 확장성과 결합하려는 시도입니다.

### 1. 출제 배경 및 의도

클라우드 네이티브·MSA 환경에서 서비스별로 최적의 데이터 저장소를 선택하는 Polyglot Persistence 전략이 필수화되고 있습니다. 기술사 채점관은 응시자가 단순 암기를 넘어 각 데이터베이스 유형의 근본적인 설계 철학, 트레이드오프, 그리고 적합한 사용 사례를 논리적으로 설명할 수 있는지를 검증합니다. 특히 NewSQL은 2020년대 이후 시험에서 빈출되는 현대 데이터 인프라의 핵심 토픽입니다.

### 2. 개념의 본질과 작동 메커니즘

RDBMS는 테이블·행·열로 구성된 고정 스키마 위에서 SQL과 ACID 트랜잭션을 보장하는 관계형 데이터베이스입니다. NoSQL은 "Not Only SQL"의 약자로, 관계형 모델을 고집하지 않고 Document·Key-Value·Column·Graph 등 다양한 데이터 모델을 사용하며 BASE 특성으로 높은 가용성과 수평 확장을 추구합니다.

```text
[데이터베이스 패러다임 진화]

RDBMS (1970s~)          NoSQL (2000s~)           NewSQL (2010s~)
┌──────────────┐        ┌──────────────┐         ┌──────────────┐
│ 고정 스키마  │        │ 유연 스키마  │         │ 유연 스키마  │
│ ACID 보장    │ ──→   │ BASE 특성    │ ──→    │ ACID 보장    │
│ 수직 확장    │        │ 수평 확장    │         │ 수평 확장    │
│ SQL          │        │ 다양한 API   │         │ SQL 지원     │
└──────────────┘        └──────────────┘         └──────────────┘
   Oracle, MySQL          MongoDB, Redis          CockroachDB, Spanner
   PostgreSQL             Cassandra, Neo4j        TiDB, YugabyteDB
```

**ACID vs BASE 비교**

| 특성 | ACID (RDBMS) | BASE (NoSQL) |
|------|-------------|-------------|
| Atomicity / Basically Available | 트랜잭션 원자성 보장 | 항상 응답 가능(가용성 우선) |
| Consistency / Soft-state | 항상 일관된 상태 유지 | 시스템 상태가 시간에 따라 변할 수 있음 |
| Isolation / Eventually consistent | 트랜잭션 간 격리 보장 | 최종적 일관성(Eventual Consistency) |
| Durability | 커밋된 데이터 영구 보존 | - |

### 3. 핵심 키워드 (Must-Have)

| 분류 | 키워드 |
|------|--------|
| RDBMS 핵심 | 스키마(Schema), ACID, SQL, 정규화, 무결성 제약, 수직 확장(Scale-Up) |
| NoSQL 핵심 | Not Only SQL, BASE, 스키마리스(Schema-less), 수평 확장(Scale-Out), 분산 저장 |
| NoSQL 유형 | Document DB, Key-Value DB, Column-family DB, Graph DB |
| NewSQL 핵심 | ACID + 수평 확장, 분산 SQL, Spanner, CockroachDB, TiDB |
| 설계 철학 | Polyglot Persistence, CAP 이론, Eventual Consistency |

**NoSQL 4가지 유형 상세**

| 유형 | 데이터 구조 | 대표 제품 | 적합 사례 |
|------|------------|----------|----------|
| Document DB | JSON/BSON 문서 | MongoDB, CouchDB | 카탈로그, 컨텐츠 관리 |
| Key-Value DB | 키-값 쌍 | Redis, DynamoDB | 세션, 캐시, 장바구니 |
| Column-family DB | 컬럼 패밀리 | Cassandra, HBase | 시계열, 로그, 분석 |
| Graph DB | 노드-엣지-속성 | Neo4j, Amazon Neptune | 소셜네트워크, 추천, 지식그래프 |

### 4. 맥락과 비교

| 비교 항목 | RDBMS | NoSQL | NewSQL |
|----------|-------|-------|--------|
| 데이터 모델 | 관계형 테이블 | 다양한 모델 | 관계형 테이블 |
| 스키마 | 고정(Fixed) | 유연(Flexible) | 유연/고정 혼용 |
| 확장 방식 | 수직 확장 | 수평 확장 | 수평 확장 |
| 트랜잭션 | ACID 완전 지원 | 제한적 지원(BASE) | ACID 완전 지원 |
| 쿼리 언어 | SQL | 독자 API/DSL | SQL |
| 일관성 | 강한 일관성 | 최종적 일관성 | 강한 일관성 |
| 대표 제품 | Oracle, MySQL, PostgreSQL | MongoDB, Cassandra, Redis | CockroachDB, Spanner, TiDB |
| 적합 워크로드 | 금융, ERP, 정형 트랜잭션 | 빅데이터, 실시간, 비정형 | 글로벌 분산 OLTP |

**NewSQL의 핵심 기술 요소**

```text
[NewSQL 아키텍처]

클라이언트 (SQL 쿼리)
        ↓
  ┌──────────────────────────────┐
  │  SQL 파서 + 쿼리 최적화기    │
  └──────────────────────────────┘
        ↓
  ┌──────────────────────────────┐
  │  분산 트랜잭션 레이어        │
  │  (2PC / Paxos / Raft 합의)  │
  └──────────────────────────────┘
        ↓
  ┌────────┐ ┌────────┐ ┌────────┐
  │ 노드1  │ │ 노드2  │ │ 노드3  │  ← 수평 확장
  │(샤드A) │ │(샤드B) │ │(샤드C) │
  └────────┘ └────────┘ └────────┘
```

### 5. 실무 제언

**데이터베이스 선택 기준 (Polyglot Persistence)**

- **챌린지:** MSA 환경에서 모든 서비스에 단일 RDBMS를 강요하면 비정형 데이터 처리, 수평 확장, 초고속 캐싱 등에서 심각한 성능 병목이 발생합니다. 반대로 NoSQL로 전면 교체하면 복잡한 트랜잭션 처리와 데이터 정합성 유지가 어렵습니다.
- **제언:** 서비스 특성에 따라 적합한 DB를 혼용하는 Polyglot Persistence 전략을 채택해야 합니다. 금융 거래처럼 강한 일관성이 필요한 도메인은 RDBMS나 NewSQL을, 사용자 세션·캐시는 Redis(Key-Value)를, 비정형 컨텐츠는 MongoDB(Document)를, 소셜 관계 분석은 Neo4j(Graph)를 적용하는 방식으로 각 DB의 강점을 살려야 합니다.

**NewSQL 도입 시 주의사항**

- **챌린지:** NewSQL은 ACID와 수평 확장을 동시에 제공하지만, 분산 트랜잭션의 네트워크 지연(Latency)이 단일 노드 RDBMS보다 높을 수 있으며, 운영 복잡도와 라이선스 비용이 상승합니다.
- **제언:** 글로벌 분산 트랜잭션이 반드시 필요한 경우(전 세계 동시 서비스, 멀티 리전 활성-활성 구성)에 한해 NewSQL을 검토하고, 단일 리전 서비스는 전통적 RDBMS의 읽기 복제(Read Replica)와 샤딩으로 충분한 경우가 많습니다.
