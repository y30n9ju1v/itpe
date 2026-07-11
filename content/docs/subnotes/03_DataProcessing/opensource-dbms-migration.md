---
title: "오픈소스 DBMS 전환 및 마이그레이션"
date: 2026-07-11T11:37:51+09:00
tags: ["자료처리", "DBMS", "오픈소스", "마이그레이션", "고가용성", "서브노트"]
draft: false
---

# 오픈소스 DBMS 전환 및 마이그레이션 서브노트

> **두음 머리에 박기 🧠**
> - **비·벤·성·공** (전환 배경 4가지: **비**용 절감, **벤**더 종속성 탈피, 오픈소스 **성**숙도, **공**공부문 정책)
> - **현·목·변·이·테·전·안** (마이그레이션 7단계: **현**황분석 ➔ **목**표설계 ➔ **변**환도구적용 ➔ **이**전 ➔ **테**스트 ➔ **전**환(Cutover) ➔ **안**정화)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **오픈소스 DBMS 전환 및 마이그레이션 (Open Source DBMS Migration)** |
| **정의** | 상용 DBMS(Oracle, MS SQL 등)에서 오픈소스 DBMS(PostgreSQL, MySQL 등)로 전환하는 것으로, 라이선스 비용 절감과 벤더 종속성 탈피를 목적으로 하며 SQL 방언·데이터 타입 차이로 인한 이기종 전환 복잡성 관리가 핵심 |
| **키워드** | 벤더 종속성(Lock-in), PL/SQL→PL/pgSQL, AWS SCT/pgloader/Ora2Pg, CDC, Blue-Green 배포, HA(Patroni, InnoDB Cluster) |
| **개념도** | `[현황분석 AS-IS]` ➔ `[목표설계 TO-BE]` ➔ `[변환도구 적용]` ➔ `[데이터 이전(전체+CDC 증분)]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[테스트]` ➔ `[전환(Cutover, Blue-Green)]` ➔ `[안정화·모니터링]` |
| **구성요소** | 1. **전환 제약사항**: SQL 호환성(PL/SQL 변환), 데이터 타입 방언, 저장 프로시저·트리거, 옵티마이저 재튜닝, 운영 도구 교체<br>2. **변환 도구**: AWS SCT, pgloader, Ora2Pg<br>3. **데이터 이전**: 초기 전체 이전 + CDC 기반 증분 동기화<br>4. **고가용성(HA)**: PostgreSQL(Patroni+etcd, Streaming Replication), MySQL(InnoDB Cluster, ProxySQL) |
| **비교** | **Active-Standby 구성**<br>- 평상시 대기 노드는 유휴 상태<br>- 장애 시 Failover로 전환, 구성 단순<br><br>**Active-Active 구성**<br>- 모든 노드가 트래픽 처리(부하분산)<br>- 처리량 향상되나 데이터 정합성 관리 복잡 |
| **차별화** | **공공·민간 오픈소스 전환 성공 전략**<br>1. **단계적 Cutover로 리스크 최소화**: Blue-Green 배포와 CDC 증분 동기화를 결합하여 서비스 중단을 최소화하고 롤백 경로를 확보.<br>2. **성능 재튜닝 필수화**: 옵티마이저 특성이 다르므로 전환 후 반드시 인덱스·쿼리 실행계획 재분석을 통한 성능 비교 테스트 수행.<br>3. **HA 아키텍처 병행 설계**: 오픈소스 DBMS는 상용 대비 내장 HA 기능이 약하므로 Patroni·InnoDB Cluster 등 외부 클러스터링 솔루션을 함께 설계하여 가용성 공백을 보완. |
