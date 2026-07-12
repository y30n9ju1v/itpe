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
| **정의** | 그래프의 두 정점 간 간선 가중치 합이 최소가 되는 경로를 구하는 **최단경로 알고리즘**(Dijkstra, Bellman-Ford, Floyd-Warshall, A*)과, 모든 정점을 사이클 없이 최소 비용으로 연결하는 **최소신장트리(MST)** 알고리즘(Kruskal, Prim)의 총칭 |
| **키워드** | 단일출발/전체쌍, Greedy/DP, 우선순위 큐, Union-Find(Disjoint Set), 음의 가중치 |
| **개념도** | `[최단경로 문제]`<br>`  ├─ 단일출발: Dijkstra(Greedy+PQ, 음수 불가) / Bellman-Ford(DP, 음수·사이클 탐지 가능)`<br>`  ├─ 전체쌍: Floyd-Warshall(3중 DP, 음수 가능·무사이클 전제)`<br>`  └─ 휴리스틱: A*(f(n)=g(n)+h(n), 목적지 지정)`<br>`&nbsp;`<br>`[MST 문제] N개 정점 → Greedy 확장 → 사이클 없는 N-1개 간선의 트리(총 가중치 최소)`<br>`  ├─ Kruskal: 간선 정렬 → 최소 간선부터 선택 → Union-Find 사이클 검사`<br>`  └─ Prim   : 시작 정점 → 인접 최소간선(PQ) 탐색 → 트리 집합 점진 확장` |
| **구성요소** | 1. **Dijkstra**: 미방문 노드 중 최소거리 노드를 그리디 선택, 우선순위 큐 기반, 음수 가중치 불가<br>2. **Bellman-Ford**: 전체 간선을 \|V\|-1회 반복 이완(Relaxation), 음수 가중치·음수 사이클 탐지 가능<br>3. **Floyd-Warshall**: 경유 노드 k를 기준으로 D[i][j]=min(D[i][j], D[i][k]+D[k][j]) 3중 반복 DP, 전체쌍 최단거리 일괄 계산<br>4. **A***: f(n)=g(n)+h(n)(실제비용+휴리스틱 추정), h가 과소추정(Admissible)일 때 최적해 보장<br>5. **Kruskal**: 간선을 가중치 오름차순 정렬 후 Union-Find로 사이클 여부 검사하며 N-1개 채택<br>6. **Prim**: 트리 집합에서 인접한 최소 가중치 간선을 우선순위 큐로 뽑아 정점을 하나씩 편입 |
| **비교** | **예시 그래프(A-B=4, A-C=1, C-B=2, B-D=3, C-D=7, B-E=6, D-E=5)에서 A→E 최단경로**<br>- Dijkstra/Bellman-Ford/Floyd-Warshall/A* 4개 알고리즘 모두 경로 A-C-B-E, 비용 **9**로 수렴(음의 가중치가 없어 알고리즘 간 정합성 성립)<br>- 시간복잡도: Dijkstra O((V+E)logV), Bellman-Ford O(V·E), Floyd-Warshall O(V³), A*는 휴리스틱 의존<br><br>**Kruskal(간선 중심, 희소 그래프 적합, O(E logE)) vs Prim(정점 중심, 밀집 그래프 적합, O(E logV))**<br>- Kruskal은 부분 트리(숲)들이 전역적으로 병합되는 방식, Prim은 하나의 트리가 정점 단위로 점진 확장되는 방식이 본질적 차이 |
| **차별화** | **그래프 최적화 알고리즘의 실무 적용 전략**<br>1. **비용을 음수(이익)로 모델링할 때 Dijkstra 오탐지 방지**: 벨만포드 계열 채택 + 음수 사이클 탐지 배치를 병행하여 라우팅 오류를 예방.<br>2. **대규모 그래프의 O(V³) Floyd-Warshall 연산 폭증 대응**: 계층적 라우팅(Contraction Hierarchies)으로 전체쌍 계산량을 절감.<br>3. **A* 휴리스틱 과대평가로 인한 최적해 미보장 방지**: h값 과소추정 검증과 Dijkstra 교차검증을 자동화.<br>4. **Union-Find 최적화 누락 시 O(E·V)까지 성능 저하되는 Kruskal**: 경로 압축(Path Compression) + Union by Rank를 병행 적용.<br>5. **동적 그래프에서 MST 전체 재계산 비효율**: 증분 갱신형 Dynamic MST 또는 국소 재계산 기법을 적용해 클라우드 인프라의 동적 토폴로지 변화에 대응. |
