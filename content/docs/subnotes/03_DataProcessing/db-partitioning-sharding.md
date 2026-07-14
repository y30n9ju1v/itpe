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
| **정의** | 단일 DBMS 내 대용량 테이블 논리적 분할 **파티셔닝** + 스케일아웃 위해 여러 독립 물리노드에 데이터 분산저장 **샤딩 기술** |
| **키워드** | 수직/수평 파티셔닝, 범·해·리·컴, 샤드 키(Shard Key), 핫스팟(Hotspot), Cross-Shard Join, 분산 트랜잭션 |
| **개념도** | `[ 대용량 단일 테이블 ] ── (수평 분할) ──➔ 동일 DBMS 디스크 분할 (파티셔닝: Range / List)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (물리적 노드 확장)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 응용 프로그램 ] (라우팅)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌───┴───┐ (Shard Key 분기)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ Shard 1 ] [ Shard 2 ] (독립된 물리 서버 노드)` |
| **구성요소** | 1. **수평 파티셔닝(Horizontal)**: 행(Row) 단위 분할 → 파일그룹/파티션 저장<br>2. **수직 파티셔닝(Vertical)**: 열(Column) 단위 분할 → 정규화에 가까운 구조<br>3. **분할기준(범·해·리·컴)**: 범위(Range-날짜별), 해시(Hash-모듈러), 리스트(List-코드목록), 복합(Composite)<br>4. **샤드 키**: 데이터→샤드 라우팅 기준속성, 쏠림방지 위해 카디널리티 고려 필수 |
| **비교** | **파티셔닝 (Partitioning)**<br>- 물리서버: 단일 DBMS 인스턴스 내<br>- 복잡성: 낮음(SQL 수정불필요, DBMS 자동지원)<br>- ACID: 완벽보장(로컬TX)<br><br>**샤딩 (Sharding)**<br>- 물리서버: 다중 독립 DBMS 노드 분산<br>- 복잡성: 높음(앱레이어 샤드라우터 필요)<br>- ACID: 어려움(분산TX 필요, 2PC 오버헤드) |
| **차별화** | **샤드키 편중(Hotspot) 해결 및 조인성능 최적화 전략**<br>1. **Consistent Hashing 가상노드**: 특정샤드 부하집중 방지 → 해시알고리즘에 Virtual Nodes 결합 → 노드증감 시 Rebalancing 최소화<br>2. **공통데이터 복제로 Cross-Shard Join 제거**: MSA/샤딩구조 공통마스터데이터(공통코드·기준정보) → 전샤드 읽기전용 복제본 유지 → 샤드간 조인 원천봉쇄<br>3. **Partition Pruning**: 조건절에 파티션키 상수지정 SQL가이드 강제 → 전체스캔 없이 대상파티션만 액세스 |
