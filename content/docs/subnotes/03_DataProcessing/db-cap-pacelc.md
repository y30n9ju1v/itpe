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
| **정의** | 분산 환경에서 네트워크 분할 시 가용성과 일관성의 양자택일을 명시한 **CAP 정리**와, 정상 상태의 지연시간-일관성 트레이드오프까지 확장 정립한 **PACELC 정리** |
| **키워드** | 일·가·분, PC/EC vs PA/EL, Eventual Consistency (결과적 일관성), Quorum, 2PC, Saga 패턴 |
| **개념도** | **[ PACELC 정리의 조건 분기 및 주요 분산 DBMS 맵 ]**<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 분산 데이터베이스 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌────────────────┴────────────────┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 네트워크 분할 (P) 시` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 평상시 (E) 작동 상황`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌─────┴─────┐` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌─────┴─────┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 가용성 (A) &nbsp;▼ 일관성 (C)` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 지연 (L) &nbsp;&nbsp;▼ 일관성 (C)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ PA / EL 조합 ]` ➔ Cassandra, DynamoDB &nbsp;&nbsp;&nbsp;`[ PC / EC 조합 ]` ➔ Spanner, RDBMS (2PC) |
| **구성요소** | 1. **일관성 (Consistency)**: 분산 클러스터 내 모든 노드는 조회 시 동일한 최신 데이터 상태를 보장해야 함<br>2. **가용성 (Availability)**: 노드 일부가 고장 나더라도 작동 중인 노드는 반드시 실패(Error) 없이 응답을 완료해야 함<br>3. **분할 허용 (Partition Tolerance)**: 물리적 네트워크 회선이 끊어져 노드 간 격리가 나도 시스템은 작동해야 함<br>4. **지연 시간 (Latency)**: 정상 가동 상태에서 여러 노드에 복제본을 전달하고 동기화할 때 발생하는 데이터 지연 시간 |
| **비교** | **CAP 정리 (Brewer's Theorem)**<br>- **분석 대상**: 물리적 네트워크 분할 장애 상황(Partition)에 초점<br>- **한계 상황**: 평상시(Else) 통신에 문제가 없는 정상 시점의 트레이드오프(성능 vs 동기화)를 설명 불가<br><br>**PACELC 정리 (Abadi's Theorem)**<br>- **분석 대상**: 장애(P) 상황뿐만 아니라 정상(E) 시점까지 전체 포괄<br>- **장점**: 분산 데이터베이스 제품군(NoSQL 등)의 아키텍처적 특성(예: 지연 최소화형 vs 정합성 보장형)을 명밀히 설명 |
| **차별화** | **결과적 일관성 (Eventual Consistency) 모델에서의 정족수(Quorum) 설계 및 분산 합의 제언**<br>1. **정족수 일관성(Quorum Consistency) 공식 제어**: 가용성을 높이기 위해 복제본 노드($N$)를 유지하되 강한 일관성을 확보하려면 읽기 정족수($R$)와 쓰기 정족수($W$)의 합이 전체 노드 수보다 크도록 설정($R+W>N$). 만약 빠른 쓰기가 최우선이면 $W=1, R=N$으로 튜닝해 지연율 최소화.<br>2. **강한 일관성 지향을 위한 분산 트랜잭션 보완 기법**: PC/EC 성향 시스템에서는 분산 노드 간의 상태를 맞추기 위해 **2단계 커밋(2PC, Two-Phase Commit)**을 사용하나 블로킹(Lock) 오버헤드가 크므로, 마이크로서비스(MSA) 환경에서는 이벤트를 구독하여 로컬 트랜잭션을 롤백 처리하는 비동기 **Saga 패턴** 결합.<br>3. **분산 합의 알고리즘 (Raft / Paxos) 탑재**: 데이터의 메타 상태 정합성을 위해 리더 노드 선출 및 다수결 투표 메커니즘을 내재화한 **Raft 합의 알고리즘**을 상태 저장 엔진(etcd 등)에 적용하여 데이터 신뢰성 확보. |
