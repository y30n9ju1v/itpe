---
title: "DB 파티셔닝 및 샤딩"
date: 2026-07-11T11:16:54+09:00
tags: ["자료처리", "데이터베이스", "파티셔닝", "샤딩", "샤드키", "복제", "서브노트"]
draft: false
---

# DB 파티셔닝 및 샤딩 서브노트

> **두음 머리에 박기 🧠**
> - **범·해·리·컴** (수평 파티셔닝 분할 기준 4종: **범**위 Range, **해**시 Hash, **리**스트 List, **컴**포지트 Composite)
> - **파·샤·복** (대용량 DB 성능 및 가용성 확장 3대 축: **파**티셔닝, **샤**딩, **복**제 Replication)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **데이터베이스 파티셔닝 (Partitioning) 및 물리적 분산 샤딩 (Sharding)** |
| **정의** | 단일 DBMS 내에서 대용량 테이블을 논리적으로 분할하는 **파티셔닝**과, 데이터 스케일아웃을 위해 여러 독립 물리 노드에 데이터를 분산 저장하는 **샤딩 기술** |
| **키워드** | 수직/수평 파티셔닝, 범·해·리·컴, 샤드 키(Shard Key), 핫스팟(Hotspot), Cross-Shard Join, 분산 트랜잭션 |
| **개념도** | `[ 대용량 단일 테이블 ] ── (수평 분할) ──➔ 동일 DBMS 디스크 분할 (파티셔닝: Range / List)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (물리적 노드 확장)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 응용 프로그램 ] (라우팅)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌───┴───┐ (Shard Key 분기)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ Shard 1 ] [ Shard 2 ] (독립된 물리 서버 노드)` |
| **구성요소** | 1. **수평 파티셔닝 (Horizontal)**: 테이블의 행(Row) 단위로 쪼개어 파일 그룹이나 파티션에 나누어 저장<br>2. **수직 파티셔닝 (Vertical)**: 테이블의 열(Column) 단위로 쪼개어 정규화에 가깝게 테이블을 분할하는 구조<br>3. **분할 기준 (범·해·리·컴)**: 범위(Range - 날짜별), 해시(Hash - 모듈러 연산), 리스트(List - 특정 코드 목록), 복합(Composite)<br>4. **샤드 키 (Shard Key)**: 데이터를 어떤 샤드로 보낼지 결정하는 기준 속성. 쏠림 방지를 위해 카디널리티 고려 필수 |
| **비교** | **파티셔닝 (Partitioning)**<br>- **물리 서버**: 단일 DBMS 서버 인스턴스 환경 내 적용<br>- **복잡성**: 낮음 (SQL 수정 불필요, DBMS 자동 지원)<br>- **ACID 보장**: 완벽 보장 (로컬 트랜잭션 적용)<br><br>**샤딩 (Sharding)**<br>- **물리 서버**: 다중 독립 DBMS 서버 노드 분산 환경 적용<br>- **복잡성**: 높음 (어플리케이션 레이어 샤드 라우터 구현 필요)<br>- **ACID 보장**: 어려움 (분산 트랜잭션 필요, 2PC 오버헤드) |
| **차별화** | **샤드 키(Shard Key) 편중(Hotspot) 해결 및 조인 성능 최적화 전략**<br>1. **해시 기반 가상 노드(Consistent Hashing) 적용**: 특정 샤드에 부하가 집중되는 현상을 막기 위해 샤드 키 해시 알고리즘에 가상 노드(Virtual Nodes) 개념을 결합하여 노드 추가/제거 시 데이터 재배치(Rebalancing) 최소화.<br>2. **공통 참조 데이터 복제(Replication)를 통한 Cross-Shard Join 제거**: 마이크로서비스 및 샤딩 구조에서 공통으로 사용되는 마스터 성격의 데이터(공통코드, 기준정보)는 모든 샤드 노드에 읽기 전용 복제본을 유지(Replication)하여 샤드 간 조인을 원천 봉쇄.<br>3. **파티션 프루닝(Partition Pruning) 적용**: 파티셔닝 쿼리 시 조건절에 반드시 파티션 키를 상수로 지정하도록 SQL 가이드를 강제하여, 전체 파티션을 스캔하지 않고 대상 파티션 디스크 세트만 즉시 액세스하도록 최적화. |
