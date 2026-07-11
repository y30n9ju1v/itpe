---
title: "고가용성·재해복구 아키텍처 (FTS/HA/멀티리전)"
date: 2026-07-11T11:37:56+09:00
tags: ["컴퓨터시스템", "인프라아키텍처", "FTS", "HA", "재해복구", "MultiRegion", "서브노트"]
draft: false
---

# 고가용성·재해복구 아키텍처 (FTS/HA/멀티리전) 서브노트

> **두음 머리에 박기 🧠**
> - **FTS·vs·HA** (가용성 확보 2대 접근: **F**ault **T**olerant **S**ystem(무중단), **H**igh **A**vailability(신속복구))
> - **RTO·RPO** (재해복구 2대 지표: **R**ecovery **T**ime **O**bjective(복구시간목표), **R**ecovery **P**oint **O**bjective(복구시점목표))
> - **글·분·충** (멀티리전 Active-Active 3대 기술요소: **글**로벌 로드밸런서, **분**산 데이터베이스, **충**돌 해결(Conflict Resolution))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **고가용성·재해복구 아키텍처: FTS·HA 및 다중지역 Active-Active** |
| **정의** | 구성요소 장애 시에도 서비스 중단 없이 지속 운영되는 **FTS(Fault Tolerant System)**, 장애 시 빠른 Failover로 가동률을 높게 유지하는 **HA(High Availability)**, 그리고 둘 이상의 지역에 동시 서비스를 배치해 RTO≈0·RPO≈0을 목표로 하는 **다중지역 Active-Active** 아키텍처 |
| **키워드** | FTS/HA, Active-Active/Active-Standby, RTO/RPO, MTBF/MTTR, CAP 이론, 분산 DB(Spanner/CockroachDB) |
| **개념도** | `[ FTS ]`: 하드웨어 완전 이중화 → 장애 발생해도 서비스 중단 없음 (항공제어·원전급)<br>`[ HA ]`: Active-Standby/로드밸런싱 → Health Check → 수초~수분 내 Failover (금융·포털급)<br>`[ Multi-Region Active-Active ]`: 글로벌 로드밸런서 → 지역A·지역B 동시 서비스 → 실시간 데이터 복제(CRDT/LWW) → 지역 장애 시 즉시 트래픽 전환 |
| **구성요소** | 1. **FTS 구현**: 하드웨어 이중화, Active-Active 클러스터, RAID, 이중 네트워크, ECC 메모리<br>2. **HA 구현**: Active-Standby 클러스터, 로드밸런싱, Health Check, DNS Failover, 실시간 데이터 복제<br>3. **가용성 공식**: 가용성 = MTBF / (MTBF + MTTR)<br>4. **멀티리전 기술 요소**: 글로벌 로드밸런서(Route53/Anycast), 멀티 마스터 분산 DB(Spanner/CockroachDB), 충돌 해결(Last-Write-Wins/CRDT), 서비스 메쉬(Istio), 데이터 주권(GDPR) 고려 |
| **비교** | **FTS**<br>- **목표**: 무중단 운영<br>- **장애 시**: 서비스 중단 없음<br>- **가용성**: 99.999%(Five Nines)<br>- **비용**: 매우 높음<br><br>**HA / Active-Standby**<br>- **목표**: 신속 복구<br>- **장애 시**: 수초~수분 내 복구<br>- **가용성**: 99.99%(Four Nines)<br>- **비용**: 중간~높음<br><br>**Multi-Region Active-Active**<br>- **목표**: 지역 재해까지 대응<br>- **RTO/RPO**: 각각 ≈0<br>- **비용**: 가장 높음 (모든 리전 풀 스펙) |
| **차별화** | **CAP 이론에 기반한 일관성-가용성 트레이드오프 설계**<br>1. **CAP 이론과 아키텍처 선택**: Multi-Region Active-Active는 AP(가용성+파티션 내성)를 우선하여 일시적 불일치(결과적 일관성)를 허용하는 반면, 금융 거래 시스템처럼 강한 일관성(CP)이 필요한 경우는 동기 복제 기반 Active-Standby나 합의 프로토콜(Raft/Paxos) 기반 분산 DB를 선택.<br>2. **비용-가용성 계층화 전략**: 모든 서비스에 FTS급 완전 이중화를 적용하면 비용이 과도하므로, 미션 크리티컬 구간만 FTS로, 일반 서비스는 HA로, 지역 재해 대비가 필요한 핵심 서비스만 Multi-Region Active-Active로 계층화하여 비용 대비 효과를 최적화.<br>3. **동시 쓰기 충돌 해결 메커니즘**: 여러 지역에서 동시에 같은 데이터를 수정할 때 발생하는 충돌을 Last-Write-Wins(단순하나 데이터 유실 가능)나 CRDT(Conflict-free Replicated Data Type, 수학적으로 자동 병합)로 해결하는 방식을 서비스 특성에 맞춰 선택. |
