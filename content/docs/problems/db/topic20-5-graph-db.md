---
title: "Graph DB"
date: 2026-06-07T17:47:26+09:00
tags: ["데이터베이스", "핵토200", "NoSQL", "GraphDB"]
topic_no1: 20
topic_no2: 5
topic_large: "NOSQL"
topic_small: "Graph DB"
exam_ref: "122회"
exam_type: "응용"
question_no: 1
---

## 문제

Graph DB

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | NOSQL |
| 토픽(소) | Graph DB |
| 출제 | 122회 |
| 유형 | 응용 |
| 번호 | 1 |

## 해설

> **관계(Relationship)를 일급 시민으로 다루는 데이터베이스**  
> 노드(Node)·엣지(Edge)·속성(Property)으로 구성된 그래프 구조로, 복잡한 연결 관계 탐색에서 RDBMS의 다중 JOIN을 압도하는 성능을 제공

소셜 네트워크의 "친구의 친구" 탐색, 추천 시스템의 협업 필터링, 사기 탐지의 이상 관계 발견 등 관계가 핵심인 도메인에서 RDBMS는 깊은 JOIN으로 인한 성능 저하가 심각합니다. Graph DB는 관계 자체를 저장 구조로 내재화하여 이러한 연결 탐색 쿼리를 상수 시간(O(1))에 가까운 성능으로 처리합니다.

### 1. 출제 배경 및 의도

AI 지식 그래프, 금융 사기 탐지, 의료 데이터 연계 등 관계 중심 데이터 분석 수요가 폭발적으로 증가하면서, Graph DB는 NoSQL의 핵심 유형으로 자리잡았습니다. 122회 기술사 시험에서는 Graph DB의 구조적 특성, RDBMS와의 성능 차이, 그리고 대표 활용 사례를 체계적으로 설명할 수 있는지를 검증합니다.

### 2. 개념의 본질과 작동 메커니즘

Graph DB는 데이터를 **노드(Node, 정점)**와 **엣지(Edge, 간선)**로 표현하고, 각각에 **속성(Property)**을 부여하는 Property Graph 모델을 기반으로 하는 데이터베이스입니다.

```text
[Graph DB 구조 - 소셜 네트워크 예시]

        [Person: 홍길동]──────────────KNOWS──────────────[Person: 이순신]
         │ name: "홍길동"  │                              │ name: "이순신"  │
         │ age: 30        │                              │ age: 45        │
         └────────────────┘           since: 2020        └────────────────┘
                │                                                │
             LIKES                                           WORKS_AT
                │                                                │
                ▼                                                ▼
         [Post: "그래프DB"]                            [Company: "삼성전자"]
         │ title: "..."   │                              │ name: "삼성전자"│
         │ created: 2024  │                              │ sector: "IT"   │
         └────────────────┘                              └────────────────┘

  노드(Node): Person, Post, Company → 엔티티 표현
  엣지(Edge): KNOWS, LIKES, WORKS_AT → 관계 표현 (방향성 있음)
  속성(Property): name, age, since → 노드/엣지의 속성값
```

#### RDBMS vs Graph DB 성능 비교 (깊이 탐색)

```text
[친구의 친구 탐색 - 깊이 증가에 따른 쿼리 시간]

탐색 깊이  │ RDBMS (JOIN)        │ Graph DB (BFS/DFS)
─────────────────────────────────────────────────────
depth=1    │ ~수십 ms           │ ~수 ms
depth=2    │ ~수백 ms           │ ~수십 ms
depth=3    │ ~수 초             │ ~수백 ms
depth=4    │ ~수십 초 ~ 타임아웃 │ ~수 초
depth=5    │ 사실상 불가능       │ ~수십 초

※ RDBMS는 깊이가 늘수록 JOIN 수가 지수 증가 (O(N^k))
※ Graph DB는 Index-Free Adjacency로 이웃 노드 직접 포인터 접근 (O(k))
```

**Neo4j Cypher 쿼리 예시**

```cypher
// 홍길동의 2단계 지인 탐색 (친구의 친구)
MATCH (p:Person {name: "홍길동"})-[:KNOWS*1..2]->(friend)
RETURN friend.name, friend.age
ORDER BY friend.name;

// 소셜 경로 탐색 (홍길동 → 이순신 최단 경로)
MATCH path = shortestPath(
  (start:Person {name: "홍길동"})-[:KNOWS*]-(end:Person {name: "이순신"})
)
RETURN path, length(path) AS hops;

// 공통 관심사 기반 추천
MATCH (me:Person {name: "홍길동"})-[:LIKES]->(item)<-[:LIKES]-(other:Person)
WHERE NOT (me)-[:KNOWS]-(other)
RETURN other.name, count(item) AS commonLikes
ORDER BY commonLikes DESC LIMIT 10;
```

### 3. 핵심 키워드 (Must-Have)

| 분류 | 키워드 |
|------|--------|
| 핵심 구조 | 노드(Node/Vertex), 엣지(Edge/Arc), 속성(Property), 레이블(Label) |
| 그래프 모델 | Property Graph Model, RDF (Resource Description Framework) |
| 성능 원리 | Index-Free Adjacency, 포인터 직접 참조, O(k) 탐색 |
| 쿼리 언어 | Cypher (Neo4j), Gremlin (Apache TinkerPop), SPARQL (RDF) |
| 대표 제품 | Neo4j, Amazon Neptune, JanusGraph, ArangoDB, Tiger Graph |
| 활용 사례 | 소셜 네트워크, 추천 시스템, 사기 탐지, 지식 그래프, 공급망 분석 |

**Graph DB 유형**

| 유형 | 모델 | 특징 | 대표 제품 |
|------|------|------|----------|
| Property Graph | 노드+엣지+속성 | 직관적, 유연한 스키마 | Neo4j, Amazon Neptune |
| RDF Graph | Subject-Predicate-Object 트리플 | 시맨틱 웹, 온톨로지 | Apache Jena, Virtuoso |
| Hypergraph | 엣지가 2개 이상의 노드 연결 | 복잡한 다자 관계 | SurrealDB |

### 4. 맥락과 비교

| 비교 항목 | RDBMS | Graph DB |
|----------|-------|----------|
| 데이터 모델 | 테이블 (행·열) | 노드·엣지·속성 |
| 관계 저장 방식 | 외래 키 (FK) + JOIN | 엣지 (직접 포인터) |
| 관계 탐색 성능 | JOIN 깊이에 따라 지수 감소 | 깊이와 무관하게 일정 |
| 스키마 | 고정 (ALTER 필요) | 유연 (레이블 추가 자유) |
| 집계 성능 | 우수 (GROUP BY, 윈도우 함수) | 제한적 |
| 적합 쿼리 | 대량 집계, 리포팅 | 관계 탐색, 경로 탐색, 패턴 매칭 |
| 대표 사용처 | ERP, 금융 원장, 트랜잭션 | 소셜, 추천, 사기 탐지, 지식 그래프 |

**Graph DB 주요 활용 사례 상세**

```text
[사기 탐지 (Fraud Detection) 패턴]

정상 거래:  계좌A ─TRANSFER→ 계좌B (1회성)

사기 링 패턴:
  계좌A ─TRANSFER→ 계좌B ─TRANSFER→ 계좌C
     ↑                                  │
     └─────────TRANSFER─────────────────┘
  (순환 거래로 자금 세탁 패턴 탐지)

Graph DB: MATCH (a)-[:TRANSFER*2..5]->(a) 로 즉시 탐지
RDBMS:    재귀 CTE + 복잡한 다중 JOIN → 수분~타임아웃
```

### 5. 실무 제언

**Graph DB 도입 판단 기준**

- **챌린지:** Graph DB는 관계 탐색에 특화되어 있어 단순 CRUD나 대량 집계 분석에는 RDBMS보다 오히려 성능이 낮을 수 있습니다. 모든 문제를 Graph DB로 해결하려는 과도한 적용은 불필요한 복잡성을 증가시킵니다.
- **제언:** "데이터 간의 관계 자체가 비즈니스 가치를 가지는가?"를 기준으로 도입 여부를 결정해야 합니다. 소셜 관계 분석, 추천 알고리즘, 이상 거래 탐지처럼 다단계 연결 탐색이 핵심인 경우에 한해 Graph DB를 적용하고, 일반 트랜잭션·리포팅은 RDBMS와 병행 운영하는 하이브리드 전략을 권장합니다.

**Neo4j 도입 시 샤딩 한계**

- **챌린지:** Neo4j Community/Enterprise의 단일 인스턴스는 수십~수백억 노드까지 처리 가능하지만, 그래프 데이터는 노드 간 연결이 전체에 걸쳐 있어 RDBMS처럼 행 단위로 깔끔하게 샤딩하기 어렵습니다. 네트워크 파티셔닝(그래프 분할)을 잘못하면 샤드 간 엣지 탐색이 빈번해져 분산 효과가 반감됩니다.
- **제언:** 대규모 그래프는 커뮤니티 탐지 알고리즘(Louvain, Label Propagation)으로 밀접하게 연결된 하위 그래프를 동일 샤드에 배치하는 Graph-Aware Partitioning 전략을 적용해야 합니다. 페타바이트급 그래프는 JanusGraph(분산) 또는 TigerGraph와 같은 MPP(Massively Parallel Processing) 그래프 DB를 검토해야 합니다.
