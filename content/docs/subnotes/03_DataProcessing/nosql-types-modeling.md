---
title: "NoSQL 유형, 모델링 패턴, 인메모리/그래프 DB"
date: 2026-07-13T15:22:16+09:00
tags: ["데이터처리", "NoSQL", "NewSQL", "그래프DB", "인메모리DB", "서브노트"]
draft: false
---

# NoSQL 유형, 모델링 패턴, 인메모리/그래프 DB 서브노트

> **두음 머리에 박기 🧠**
> - **도·키·컬·그** (NoSQL 4대 유형: **도**큐먼트 Document, **키**밸류 Key-Value, **컬**럼패밀리 Column-family, **그**래프 Graph)
> - **임·레·버** (NoSQL 모델링 3대 패턴: **임**베딩 Embedding, **레**퍼런싱 Referencing, **버**킷팅 Bucketing)
> - **베이·소·이** (BASE 특성: **베이**직 어베일러블 Basically Available, **소**프트-스테이트 Soft-state, **이**벤추얼 컨시스턴시 Eventually Consistent)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **NoSQL 유형 및 모델링, NewSQL, 인메모리 DB, Graph DB** |
| **정의** | 고정 스키마·ACID의 RDBMS와 대비되는 유연 스키마·BASE 기반 수평 확장 데이터베이스 NoSQL의 4대 유형(도·키·컬·그)과, 쿼리 패턴을 먼저 분석해 비정규화 구조로 설계하는 Query-Driven 모델링 3대 패턴(임·레·버), 그리고 ACID와 수평 확장을 동시 실현하는 NewSQL, DRAM 상주로 초저지연을 실현하는 인메모리 DB, 관계 탐색에 특화된 Graph DB를 포괄 |
| **키워드** | ACID vs BASE, Document/Key-Value/Column-family/Graph, Query-Driven 모델링, NewSQL(Spanner/CockroachDB), 인메모리 DB(Redis), Index-Free Adjacency |
| **개념도** | `[RDBMS: 고정스키마·ACID·수직확장]` ➔ `[NoSQL: 유연스키마·BASE·수평확장]` ➔ `[NewSQL: 유연스키마+ACID+수평확장]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼ (NoSQL 4대 유형)`<br>`[Document: MongoDB] [Key-Value: Redis] [Column-family: Cassandra] [Graph: Neo4j]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼ (모델링: 쿼리 패턴 먼저 분석)`<br>`[요구사항] → [쿼리 패턴 분석] → [Embedding(내장)/Referencing(참조)/Bucketing(묶음)] → [컬렉션 설계]` |
| **구성요소** | 1. **ACID vs BASE**: RDBMS는 Atomicity·Consistency·Isolation·Durability, NoSQL은 Basically Available·Soft-state·Eventually Consistent<br>2. **NoSQL 4대 유형(도·키·컬·그)**: Document DB(JSON/BSON, MongoDB, 카탈로그), Key-Value DB(단순 키-값, Redis/DynamoDB, 세션·캐시), Column-family DB(와이드 컬럼, Cassandra/HBase, 시계열·로그), Graph DB(노드·엣지·속성, Neo4j, 소셜/추천/사기탐지)<br>3. **NoSQL 모델링 3대 패턴(임·레·버)**: Embedding(관련 데이터를 문서 내 중첩, 1:1·1:N소량, 읽기 최적화), Referencing(별도 컬렉션+ID 참조, 1:N대량, 중복 최소화), Bucketing(시계열 등 대량 데이터를 시간·크기 단위로 묶어 문서 수 제한)<br>4. **NewSQL**: RDBMS의 ACID + NoSQL의 수평 확장을 동시 실현, Paxos/Raft 기반 분산 합의, 자동 샤딩, SQL 인터페이스 유지(Spanner, CockroachDB, TiDB)<br>5. **인메모리 DB**: 데이터를 DRAM에 상주시켜 I/O 병목 제거, AOF/RDB 스냅샷으로 영속성 확보, HFT·실시간 추천에 활용<br>6. **Graph DB**: Property Graph 모델(노드·엣지·속성), Index-Free Adjacency로 이웃 노드를 포인터 직접 접근해 탐색 깊이 무관 O(k) 성능, RDBMS 다중 JOIN 대비 관계 탐색 압도적 우위 |
| **비교** | **RDBMS vs NoSQL**<br>- RDBMS: 고정 스키마, 수직 확장(Scale-Up), ACID 완전 지원, 금융·ERP 적합<br>- NoSQL: 다양한 스키마, 수평 확장(Scale-Out), BASE(단일 문서 원자성만), 빅데이터·실시간·비정형 적합<br><br>**Embedding vs Referencing**<br>- Embedding: 단일 읽기로 전체 조회(네트워크 왕복 최소화), 문서 크기 제한(MongoDB 16MB)에 취약<br>- Referencing: 데이터 중복 최소화·독립 업데이트 용이, 조회 시 다중 쿼리/$lookup 필요<br><br>**RDBMS 모델링 vs NoSQL 모델링**<br>- RDBMS: 요구사항→엔티티 도출→정규화→ERD→테이블<br>- NoSQL(Query-Driven): 요구사항→쿼리 패턴 분석→액세스 패턴 정의→비정규화/어그리게이션 |
| **차별화** | **Polyglot Persistence 기반 실무 설계 전략**<br>1. **워크로드별 적합 DB 선택**: MSA·클라우드 네이티브 환경에서 서비스마다 도메인 특성(정형 트랜잭션은 RDBMS, 세션/캐시는 Key-Value, 관계 탐색은 Graph, 시계열은 Column-family)에 맞는 DB를 개별 선택하는 Polyglot Persistence 전략 채택.<br>2. **NoSQL 모델링 안티패턴 방지**: NoSQL을 RDBMS처럼 정규화 중심으로 설계하면 애플리케이션 레벨 JOIN이 폭증하므로, 반드시 쿼리 패턴을 선(先) 분석한 뒤 Embedding/Referencing/Bucketing을 결정하는 Query-Driven 설계 원칙 준수.<br>3. **NewSQL 도입 기준 명확화**: 글로벌 멀티 리전 Active-Active처럼 ACID와 수평 확장이 동시에 필수인 경우에만 NewSQL을 도입하고, 단일 리전 서비스는 RDBMS+Read Replica+샤딩 조합으로 충분함을 판단.<br>4. **인메모리 DB의 영속성 트레이드오프 관리**: Cache-Aside 패턴으로 인메모리 DB를 캐시 계층에 배치하고, AOF/RDB 스냅샷 주기를 서비스 RPO 요건에 맞춰 튜닝하여 재시작 시 데이터 유실 리스크 최소화. |
