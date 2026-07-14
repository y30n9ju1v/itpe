---
title: "라우팅 프로토콜 분류 및 알고리즘"
date: 2026-07-11T11:19:35+09:00
tags: ["네트워크", "라우팅", "OSPF", "RIP", "BGP", "다익스트라", "벨만포드", "멀티캐스트", "IGMP", "PIM", "서브노트"]
draft: false
---

# 라우팅 프로토콜 분류 및 알고리즘 서브노트

> **두음 머리에 박기 🧠**
> - **디·벨 / 링·다** (라우팅 알고리즘 매핑: 거리 벡터 **D**istance Vector는 **Bel**lman-Ford 벨만포드 알고리즘, 링크 상태 **L**ink State는 **Di**jkstra 다익스트라 알고리즘)
> - **아·오·비** (범위별 대표 프로토콜: 내부 소형 **R**IP(알), 내부 대형 **O**SPF(오), 외부 AS간 **B**GP(비))
> - **스·포·홀** (거리 벡터 라우팅 루프 방지 기법: 들어온 곳 전송 금지 **스**플릿호라이즌 Split Horizon, 무한대 메트릭 전송 **포**이즌리버스 Poison Reverse, 업데이트 보류 **홀**다운타이머 Hold-down Timer)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **인프라 라우팅 프로토콜 (Routing Protocols) 분류 및 최적 경로 탐색 알고리즘** |
| **정의** | 송신지→목적지 패킷을 안전·최적경로로 유도하는 경로정보관리 **라우팅 프로토콜** 아키텍처·유형별 분류 |
| **키워드** | IGP vs EGP, RIP, OSPF, BGP, 벨만포드 vs 다익스트라, 루프 방지(스·포·홀), AS_PATH |
| **개념도** | **[ IGP와 EGP의 물리적 계층 영역 및 알고리즘 동작 모델 ]**<br>`[ AS 100 (Autonomous System) : 내부망 ] ◀──── BGP (EGP, 경로벡터) ───➔ [ AS 200 : 외부망 ]`<br>&nbsp;&nbsp;`├── 라우터 A (OSPF: 링크상태) ─ (다익스트라)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`├── 라우터 C (OSPF)`<br>&nbsp;&nbsp;`└── 라우터 B (RIP: 거리벡터) ── (벨만포드)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└── 라우터 D (RIP)` |
| **구성요소** | 1. **IGP**: 단일AS 내 라우터간 최적경로 설정 프로토콜 (RIP, OSPF 등)<br>2. **EGP**: 서로 다른 독립AS 도메인간 인터네트워크 라우팅정보 교환 (BGP)<br>3. **거리벡터(Distance Vector)**: 목적지 홉수+방향(인접라우터)만 주기적 전체복사 → 테이블갱신 (벨만포드)<br>4. **링크상태(Link State)**: 전망 토폴로지지도(LSA) 구성 → 라우터 직접 최단경로계산 후 수렴 (다익스트라)<br>5. **경로벡터(Path Vector)**: BGP 방식, 목적지까지 AS번호목록(AS_PATH) 활용 → 루프 원천방지<br>6. **멀티캐스트 라우팅**: 단일스트림 → 그룹구성원에만 선택전달(1:다). PIM-DM(전체플러딩 후 미수신구간 Prune, RP불필요, 소규모·고밀도) / PIM-SM(명시적Join, RP필요, 대규모·저밀도, 인터넷 사실상표준)<br>7. **IGMP**: 호스트-라우터간 그룹관리, Membership Report(참여)·Query(주기확인)·Leave Group(v2+) 교환. IGMPv3는 SSM으로 소스필터링 지원 |
| **비교** | **RIP (Routing Information Protocol)**<br>- **알고리즘**: 거리벡터 (Bellman-Ford)<br>- **메트릭**: 홉수 (최대 15홉 제한)<br>- **수렴/갱신**: 느림 / 30초주기 전체테이블 전송<br><br>**OSPF (Open Shortest Path First)**<br>- **알고리즘**: 링크상태 (Dijkstra)<br>- **메트릭**: 대역폭기반 코스트(Cost)<br>- **수렴/갱신**: 빠름 / 변화시 델타(이벤트) 전송 |
| **차별화** | **대규모망 라우팅 요동(Flapping) 통제·복구 전략**<br>1. **BGP Route Dampening**: 경계라우터, 특정링크 간헐장애 → 라우팅테이블 수초단위 추가/삭제 → CPU급증 플래핑 방어, 플래핑횟수별 페널티 부여 → 임계치초과 시 경로광고 일정시간 Suppress<br>2. **거리벡터 Count-to-Infinity 방지**: 장애노드를 인접노드끼리 서로 가깝다 착각 → 무한 홉수증가 방지 위해 **Split Horizon**(수신인터페이스 역송금지)+**Poison Reverse**(장애발견 즉시 메트릭16 전파) 강제<br>3. **OSPF Area 분할**: 대형 내부망 전체단일영역 지양 → 백본영역(Area 0)+일반영역 분리 → SPF 다익스트라 연산범위·메모리소모 제한 |
