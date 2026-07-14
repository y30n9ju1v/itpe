---
title: "분산 데이터베이스의 CAP 및 PACELC 이론"
date: 2026-07-11T11:26:36+09:00
tags: ["자료처리", "데이터베이스", "분산DB", "CAP정리", "PACELC", "일관성", "가용성", "Quorum", "서브노트"]
draft: false
---

# 분산 데이터베이스의 CAP 및 PACELC 이론 서브노트

> **두음 머리에 박기 🧠**
> - **일·가·분** (CAP 정리의 3대 핵심 속성: 데이터 **일**관성 Consistency, 시스템 **가**용성 Availability, 네트워크 **분**할 허용 Partition Tolerance)
> - **피·에이·시 / 이·엘·시** (PACELC 의사결정 수식: 네트워크 분할 **P**artition 시에는 가용성 **A** vs 일관성 **C** 선택 / 평상시 **E**lse 상황 시에는 지연시간 **L**atency vs 일관성 **C** 선택)
> - **R·W·N** (정족수 일관성 Quorum 조건 수식: $R + W > N$ ➔ 읽기 노드 수 **R** + 쓰기 노드 수 **W** > 전체 복제본 수 **N** 일 때 강한 일관성 Strong Consistency 보장)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **분산 시스템의 CAP 정리 (CAP Theorem) 및 확장 아키텍처 PACELC 정리** |
| **정의** | 분산환경 네트워크분할 시 가용성-일관성 양자택일 명시 **CAP 정리** + 정상상태 지연시간-일관성 트레이드오프까지 확장정립한 **PACELC 정리** |
| **키워드** | 일·가·분, PC/EC vs PA/EL, Eventual Consistency (결과적 일관성), Quorum, 2PC, Saga 패턴 |
| **개념도** | **[ PACELC 정리의 조건 분기 및 주요 분산 DBMS 맵 ]**<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 분산 데이터베이스 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌────────────────┴────────────────┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 네트워크 분할 (P) 시` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 평상시 (E) 작동 상황`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌─────┴─────┐` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌─────┴─────┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 가용성 (A) &nbsp;▼ 일관성 (C)` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 지연 (L) &nbsp;&nbsp;▼ 일관성 (C)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ PA / EL 조합 ]` ➔ Cassandra, DynamoDB &nbsp;&nbsp;&nbsp;`[ PC / EC 조합 ]` ➔ Spanner, RDBMS (2PC) |
| **구성요소** | 1. **일관성 (Consistency)**: 분산클러스터 내 모든 노드 → 조회 시 동일 최신 데이터상태 보장<br>2. **가용성 (Availability)**: 노드 일부 고장 시에도 작동노드는 실패없이 응답완료<br>3. **분할 허용 (Partition Tolerance)**: 네트워크 회선 단절·노드 격리에도 시스템 작동<br>4. **지연 시간 (Latency)**: 정상가동 상태에서 복제본 전달·동기화 시 발생 지연시간 |
| **비교** | **CAP 정리 (Brewer's Theorem)**<br>- **분석 대상**: 물리적 네트워크 분할 장애상황(Partition) 초점<br>- **한계**: 평상시(Else) 정상시점 트레이드오프(성능 vs 동기화) 설명 불가<br><br>**PACELC 정리 (Abadi's Theorem)**<br>- **분석 대상**: 장애(P)+정상(E) 시점 전체 포괄<br>- **장점**: 분산DB 제품군(NoSQL 등) 아키텍처 특성(지연최소화형 vs 정합성보장형) 명확히 설명 |
| **차별화** | **결과적 일관성(Eventual Consistency) 모델 정족수(Quorum) 설계 및 분산합의 제언**<br>1. **정족수 일관성 공식 제어**: 가용성 위해 복제본노드($N$) 유지 + 강한일관성 위해 $R+W>N$ 설정. 빠른쓰기 최우선이면 $W=1, R=N$ → 지연율 최소화<br>2. **강한일관성 지향 분산 트랜잭션 보완**: PC/EC 성향 시스템 → **2PC(Two-Phase Commit)** 사용하나 블로킹 오버헤드 큼 → MSA 환경은 이벤트구독 기반 비동기 **Saga 패턴** 결합<br>3. **분산 합의 알고리즘 (Raft/Paxos) 탑재**: 메타상태 정합성 위해 리더선출·다수결투표 내재화한 **Raft**를 상태저장엔진(etcd 등)에 적용 → 데이터신뢰성 확보 |
