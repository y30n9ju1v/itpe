---
title: "라우팅 프로토콜 분류 및 알고리즘"
date: 2026-07-11T11:19:35+09:00
tags: ["네트워크", "라우팅", "OSPF", "RIP", "BGP", "다익스트라", "벨만포드", "서브노트"]
draft: false
---

# 라우팅 프로토콜 분류 및 알고리즘 서브노트

> **두음 머리에 박기 🧠**
> - **디·벨 / 링·다** (라우팅 알고리즘 매핑: 거리 벡터 **D**istance Vector는 **Bel**lman-Ford 벨만포드 알고리즘, 링크 상태 **L**ink State는 **Di**jkstra 다익스트라 알고리즘)
> - **아·오·비** (범위별 대표 프로토콜: 내부 소형 **R**IP(알), 내부 대형 **O**SPF(오), 외부 AS간 **B**GP(비))
> - **스·포·홀** (거리 벡터 라우팅 루프 방지 기법: 들어온 곳 전송 금지 **스**플릿호라이즌 Split Horizon, 무한대 메트릭 전송 **포**이즌리버스 Poison Reverse, 업데이트 보류 **홀**다운타이머 Hold-down Timer)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **인프라 라우팅 프로토콜 (Routing Protocols) 분류 및 최적 경로 탐색 알고리즘** |
| **정의** | 송신지에서 목적지까지 패킷을 안전하고 빠른 최적의 경로로 유도하기 위해 경로 정보를 관리하는 **라우팅 프로토콜**의 아키텍처 및 유형별 분류 기술 |
| **키워드** | IGP vs EGP, RIP, OSPF, BGP, 벨만포드 vs 다익스트라, 루프 방지(스·포·홀), AS_PATH |
| **개념도** | **[ IGP와 EGP의 물리적 계층 영역 및 알고리즘 동작 모델 ]**<br>`[ AS 100 (Autonomous System) : 내부망 ] ◀──── BGP (EGP, 경로벡터) ───➔ [ AS 200 : 외부망 ]`<br>&nbsp;&nbsp;`├── 라우터 A (OSPF: 링크상태) ─ (다익스트라)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`├── 라우터 C (OSPF)`<br>&nbsp;&nbsp;`└── 라우터 B (RIP: 거리벡터) ── (벨만포드)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└── 라우터 D (RIP)` |
| **구성요소** | 1. **IGP (Interior Gateway Protocol)**: 단일 자율 시스템(AS) 내 라우터 간 최적 경로를 설정하는 프로토콜 (RIP, OSPF 등)<br>2. **EGP (Exterior Gateway Protocol)**: 서로 다른 독립된 AS 도메인 간의 인터네트워크 라우팅 정보를 교환하는 프로토콜 (BGP)<br>3. **거리 벡터 (Distance Vector)**: 목적지까지의 홉수와 방향(인접 라우터) 정보만 주기적 전체 복사하여 테이블 갱신 (벨만포드)<br>4. **링크 상태 (Link State)**: 전 망의 토폴로지 지도(LSA)를 구성하여 라우터가 직접 최단 경로 계산 후 수렴 (다익스트라)<br>5. **경로 벡터 (Path Vector)**: BGP가 사용하는 방식으로, 목적지까지 지나가는 AS 번호 목록(AS_PATH)을 활용해 루프 원천 방지 |
| **비교** | **RIP (Routing Information Protocol)**<br>- **동작 알고리즘**: 거리 벡터 (Bellman-Ford)<br>- **최적 경로 메트릭**: 홉 수 (Hop Count, 최대 15홉 제한)<br>- **수렴 속도 / 갱신**: 느림 / 30초 주기 전체 테이블 전송<br><br>**OSPF (Open Shortest Path First)**<br>- **동작 알고리즘**: 링크 상태 (Dijkstra)<br>- **최적 경로 메트릭**: 대역폭 기반 코스트 (Cost)<br>- **수렴 속도 / 갱신**: 빠름 / 네트워크 변화 시 델타(이벤트) 전송 |
| **차별화** | **대규모 망의 라우팅 정보 요동(Flapping) 통제 및 복구 전략**<br>1. **BGP Route Dampening (경로 감쇠) 적용**: 인터넷 경계 라우터에서 특정 링크의 간헐적 장애로 인해 라우팅 테이블이 수초 간격으로 추가/삭제되며 라우터 CPU를 급증시키는 플래핑(Flapping) 현상을 방어하기 위해, 플래핑 횟수에 비중 페널티(Penalty)를 매겨 임계치 초과 시 일정 시간 동안 해당 경로 광고를 차단(Suppress)하는 메커니즘 적용.<br>2. **거리 벡터의 Count-to-Infinity 문제와 루프 방지**: 노드가 장애 처리되었음에도 인접 노드끼리 서로 가깝다고 착각하여 무한 홉수로 숫자가 증가하는 문제를 방어하기 위해 **Split Horizon**(수신한 인터페이스로 역송 금지)과 **Poison Reverse**(장애 발견 즉시 메트릭을 16으로 설정해 전파) 기법 강제.<br>3. **OSPF Area 분할을 통한 SPF 연산 부하 완화**: 라우터 수가 많은 대형 내부망은 전체를 단일 영역으로 묶지 않고, 백본 영역(Area 0)과 일반 영역으로 분리하여 SPF 다익스트라 알고리즘 연산 범위와 메모리 소모를 제한. |
