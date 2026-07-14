---
title: "최단경로 알고리즘과 최소신장트리(MST)"
date: 2026-07-12T18:14:48+09:00
tags: ["컴퓨터시스템", "알고리즘", "최단경로", "MST", "그래프", "서브노트"]
draft: false
---

# 최단경로 알고리즘과 최소신장트리(MST) 서브노트

> **두음 머리에 박기 🧠**
> - **다·벨·플·에이** (단일출발/전체쌍 최단경로 4대 알고리즘: **다**익스트라, **벨**만포드, **플**로이드워셜, **에이**스타(A*))
> - **간·정** (MST 2대 알고리즘의 접근축: 크루스칼=**간**선 중심, 프림=**정**점 중심)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **최단경로 알고리즘(Shortest Path) 및 최소신장트리(MST, Minimum Spanning Tree)** |
| **정의** | 두 정점 간 간선가중치 합 최소경로 구하는 **최단경로 알고리즘**(Dijkstra/Bellman-Ford/Floyd-Warshall/A*) + 전 정점 사이클없이 최소비용 연결하는 **MST**(Kruskal/Prim) 총칭 |
| **키워드** | 단일출발/전체쌍, Greedy/DP, 우선순위 큐, Union-Find(Disjoint Set), 음의 가중치 |
| **개념도** | `[최단경로 문제]`<br>`  ├─ 단일출발: Dijkstra(Greedy+PQ, 음수 불가) / Bellman-Ford(DP, 음수·사이클 탐지 가능)`<br>`  ├─ 전체쌍: Floyd-Warshall(3중 DP, 음수 가능·무사이클 전제)`<br>`  └─ 휴리스틱: A*(f(n)=g(n)+h(n), 목적지 지정)`<br>`&nbsp;`<br>`[MST 문제] N개 정점 → Greedy 확장 → 사이클 없는 N-1개 간선의 트리(총 가중치 최소)`<br>`  ├─ Kruskal: 간선 정렬 → 최소 간선부터 선택 → Union-Find 사이클 검사`<br>`  └─ Prim   : 시작 정점 → 인접 최소간선(PQ) 탐색 → 트리 집합 점진 확장` |
| **구성요소** | 1. **Dijkstra**: 미방문 최소거리 노드 그리디선택, 우선순위큐 기반, 음수가중치 불가<br>2. **Bellman-Ford**: 전체간선 \|V\|-1회 반복 이완(Relaxation), 음수가중치·음수사이클 탐지 가능<br>3. **Floyd-Warshall**: 경유노드 k 기준 D[i][j]=min(D[i][j],D[i][k]+D[k][j]) 3중 DP, 전체쌍 일괄계산<br>4. **A***: f(n)=g(n)+h(n)(실제비용+휴리스틱), h 과소추정(Admissible) 시 최적해 보장<br>5. **Kruskal**: 간선 가중치 오름차순 정렬 → Union-Find 사이클검사, N-1개 채택<br>6. **Prim**: 트리집합 인접 최소가중치 간선 우선순위큐로 선택, 정점 순차 편입 |
| **비교** | **예시(A-B=4,A-C=1,C-B=2,B-D=3,C-D=7,B-E=6,D-E=5) A→E 최단경로**<br>- 4개 알고리즘 모두 경로 A-C-B-E, 비용 **9** 수렴(음수가중치 無 → 알고리즘 간 정합)<br>- 시간복잡도: Dijkstra O((V+E)logV), Bellman-Ford O(V·E), Floyd-Warshall O(V³), A*는 휴리스틱 의존<br><br>**Kruskal(간선중심, 희소그래프 적합, O(E logE)) vs Prim(정점중심, 밀집그래프 적합, O(E logV))**<br>- Kruskal: 부분트리(숲) 전역병합 / Prim: 하나의 트리 정점단위 점진확장 |
| **차별화** | **그래프 최적화 알고리즘 적용 전략**<br>1. **음수비용 모델링 시 Dijkstra 오탐지 방지**: 벨만포드 채택 + 음수사이클 탐지 배치 병행 → 라우팅 오류 예방<br>2. **대규모 O(V³) Floyd-Warshall 연산폭증 대응**: 계층적 라우팅(Contraction Hierarchies)으로 계산량 절감<br>3. **A* 휴리스틱 과대평가로 최적해 미보장 방지**: h값 과소추정 검증 + Dijkstra 교차검증 자동화<br>4. **Union-Find 누락 시 O(E·V) 성능저하되는 Kruskal**: 경로압축+Union by Rank 병행 적용<br>5. **동적그래프 MST 전체재계산 비효율**: 증분갱신 Dynamic MST/국소재계산으로 토폴로지 변화 대응 |
