---
title: "시스템 응답 성능 분석 모델"
date: 2026-07-11T11:24:18+09:00
tags: ["시스템평가", "성능분석", "리틀의법칙", "암달의법칙", "구스타프슨의법칙", "스레드풀", "서브노트"]
draft: false
---

# 시스템 응답 성능 분석 모델 서브노트

> **두음 머리에 박기 🧠**
> - **엘·람·더블유** (리틀의 법칙 공식: $L = \lambda \times W$ ➔ 시스템 내 고객 수 **L** = 단위시간당 유입률 **λ** × 평균 응답시간 **W**)
> - **피·엔·가속** (암달의 법칙 공식 구성요소: 병렬 비율 **P**, 프로세서 수 **N**, 가속비 $S(N) = \frac{1}{(1-P) + P/N}$)
> - **스트롱 vs 위크** (스케일링 전제 비교: 암달의 법칙은 데이터 크기 고정인 **Strong** Scaling, 구스타프슨의 법칙은 가동 시간 고정인 **Weak** Scaling)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **시스템 성능 분석 법칙 (리틀의 법칙, 암달의 법칙, 구스타프슨의 법칙)** |
| **정의** | 대기 행렬에서 시스템 내 작업 수와 응답시간 간의 관계를 수치화한 **리틀의 법칙**과, 자원 병렬화 시 가속 성능의 한계를 다룬 **암달 및 구스타프슨의 법칙** |
| **키워드** | Little's Law ($L=\lambda W$), Amdahl's Law (병렬화 한계), Gustafson's Law (선형적 성능 향상), Strong vs Weak Scaling |
| **개념도** | **[ 암달의 법칙(Amdahl's Law)에 의한 병렬화 가속도 한계 그래프 ]**<br>가속비 (Speedup)<br>&nbsp;&nbsp;&nbsp;&nbsp;`▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`────────────────────── [ P = 95% (한계 20배 수렴) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`.. ───`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`.. ───` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`────────────────────── [ P = 90% (한계 10배 수렴) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`/`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ &nbsp;`[ 직렬 처리 영역 (1-P)에 의해 아무리 코어를 늘려도 전체 속도는 임계값에 수렴 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`└──────────────┴──────────────────┴────────────────────────────────➔ 코어 수 (N)` |
| **구성요소** | 1. **리틀의 법칙 ($L = \lambda \times W$)**: 안정 상태의 대기 시스템에서 평균 작업 수($L$), 평균 도달률($\lambda$), 평균 체류시간($W$)<br>2. **암달의 법칙**: 병렬 코어를 무한대($N \rightarrow \infty$)로 늘려도 순차 실행 부분($1-P$) 때문에 가속비는 $\frac{1}{1-P}$로 한계 수렴함<br>3. **구스타프슨의 법칙**: 시간 내 처리 가능한 대형 문제 관점. 가속비 $S(N) = (1-P) + N \cdot P$로 코어 수에 비례 선형 증가 가능<br>4. **Strong Scaling**: 고정된 전체 작업 크기 하에서 리소스 증가에 따른 시간 단축 평가 (암달의 관점) |
| **비교** | **암달의 법칙 (Amdahl's Law)**<br>- **전제 조건**: 해결하고자 하는 문제(데이터 크기)가 완전히 고정됨<br>- **가속 곡선**: 로그 형태로 점차 수평 수렴 (한계 존재)<br>- **해결 방안**: 직렬 실행 블록($1-P$)을 혁신적으로 제거해야 함<br><br>**구스타프슨의 법칙 (Gustafson's Law)**<br>- **전제 조건**: 프로세서 개수가 늘어남에 따라 문제의 크기도 확장됨<br>- **가속 곡선**: 코어 수($N$)의 증가에 선형적으로 증가 가능<br>- **해결 방안**: 대규모 빅데이터 분산 환경(Hadoop, Spark)에 부합 |
| **차별화** | **웹 서버 스레드 풀(Thread Pool) 설계 및 병렬 프로그래밍 최적화 실무 전략**<br>1. **리틀의 법칙 기반 적정 스레드 풀 수 산정**: WAS 서버의 CPU 바쁜 대기 및 컨텍스트 스위칭 부하를 막기 위해, 목표 유입 트랜잭션 비율($\lambda = 200 \text{ tps}$)과 평균 트랜잭션 응답 속도($W = 0.1 \text{ 초}$)가 측정되었을 때, 적정 액티브 스레드 수($L = 200 \times 0.1 = 20 \text{ 개}$)를 기준값으로 세팅하고 시스템 튜닝 가동.<br>2. **병렬 처리 아키텍처의 직렬 장벽 제거**: 다중 스레드 병렬 연산 시, 암달의 법칙 상 가속 성능 저해의 주원인인 공유 자원 동기화 블로킹(Mutex Lock)을 최소화하도록 독립 메모리 큐 구조 및 Lock-Free 데이터 구조 도입.<br>3. **분산 컴퓨팅 파티셔닝 구조**: 대량 분산 노드 환경에서는 구스타프슨의 법칙이 적용되므로, 데이터 유실이 없도록 파티셔닝 키를 동종 분산시켜 노드 증설과 병행하여 실 데이터 처리량(Throughput)을 리니어하게 확장. |
