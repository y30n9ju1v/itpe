---
title: "소셜 네트워크 분석(SNA): 속성과 Centrality"
date: 2026-07-12T15:35:09+09:00
tags: ["데이터처리", "데이터마이닝", "SNA", "소셜네트워크분석", "Centrality", "서브노트"]
draft: false
---

# 소셜 네트워크 분석(SNA): 속성과 Centrality 서브노트

> **두음 머리에 박기 🧠**
> - **응·구·명·범·중** (SNA 5대 속성: **응**집력 Cohesion, **구**조적 동위성 Equivalence, **명**성 Prominence, **범**위 Range, **중**계 Brokerage)
> - **D·C·B** (Centrality 3대 분석: **D**egree, **C**loseness, **B**etweenness)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **소셜 네트워크 분석 (SNA: Social Network Analysis)과 Centrality Analysis** |
| **정의** | 사회연결망 이론을 바탕으로 소셜 네트워크의 형태·연결 구조·연결 강도를 계량화하여, 특정 구성원 및 네트워크 자체의 영향력 등 유의미한 지식을 도출하는 비정형 데이터 마이닝 기법 |
| **키워드** | Density, Neighbor, Centrality, Clique, Affinity, Degree/Closeness/Betweenness Centrality |
| **개념도** | `[노드/엣지 연결망 구축]`▶`[Density/Neighbor/Centrality/Clique/Affinity 분석]`▶`[영향력·구조 해석]`<br>`Degree(연결 정도)` / `Closeness(근접도)` / `Betweenness(매개도)` → 노드별 중요도 산출 |
| **구성요소** | 1. **응집력(Cohesion)**: 행위자 간 강한 사회적 관계 존재 여부, 밀도(Density)·결속(Clique)으로 표현<br>2. **구조적 동위성(Equivalence)**: 네트워크 내 구조적 지위·역할이 동일한 관계, 유클리디안 거리·상관계수로 측정<br>3. **명성(Prominence)**: 네트워크 내 권력 보유자 파악, 연결 정도·근접 중심성으로 측정<br>4. **범위(Range)**: 행위자의 네트워크 규모, 도달가능성·최단경로(Geodesic Distance)로 측정<br>5. **중계(Brokerage)**: 다른 네트워크를 연결하는 역할<br>6. **Centrality 분석**: Degree(관계 맺은 정도, In/Out 구분)·Closeness(다른 노드와의 근접도)·Betweenness(다른 노드 사이 매개 정도, Broker 역할)·Centralization(전체 네트워크의 중앙집중도) |
| **비교** | **Density 분석**<br>- 가능한 총 관계 수 대비 실제 관계 수의 비율 측정<br>- 전체 네트워크의 응집 수준 파악, Centralization은 미고려<br><br>**Centrality 분석**<br>- 개별 노드의 중심성·영향력 측정<br>- Degree(리더 식별)·Closeness(근접성)·Betweenness(중개자 식별)로 세분화 |
| **차별화** | **SNA 실무 적용 전략** <br>1. **인플루언서 식별**: Degree Centrality가 높은 노드(Highest In-Degree=Popular)를 SNS 마케팅의 핵심 타겟으로 선정<br>2. **정보 확산 경로 분석**: Betweenness Centrality가 높은 Broker 노드를 통해 바이럴 마케팅·허위정보 확산 경로를 추적<br>3. **텍스트 마이닝과 연계**: 텍스트 마이닝으로 추출한 개체·관계를 노드·엣지로 모델링해 SNA 수행, 커뮤니티 구조·구전 효과 분석에 활용<br>4. **조직 분석 적용**: 조직 내 비공식 네트워크·핵심 인재 파악에 Clique·Affinity 분석을 결합 적용 |
