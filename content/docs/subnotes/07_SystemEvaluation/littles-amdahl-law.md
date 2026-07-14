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

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **시스템 성능 분석 법칙 (리틀의 법칙, 암달의 법칙, 구스타프슨의 법칙)** |
| **정의** | 대기행렬 내 작업수·응답시간 관계 수치화한 **리틀의 법칙** + 자원병렬화 가속성능 한계 다룬 **암달·구스타프슨 법칙** |
| **키워드** | Little's Law ($L=\lambda W$), Amdahl's Law (병렬화 한계), Gustafson's Law (선형적 성능 향상), Strong vs Weak Scaling |
| **개념도** | **[ 암달의 법칙(Amdahl's Law)에 의한 병렬화 가속도 한계 그래프 ]**<br>가속비 (Speedup)<br>&nbsp;&nbsp;&nbsp;&nbsp;`▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`────────────────────── [ P = 95% (한계 20배 수렴) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`.. ───`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`.. ───` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`────────────────────── [ P = 90% (한계 10배 수렴) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`/`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ &nbsp;`[ 직렬 처리 영역 (1-P)에 의해 아무리 코어를 늘려도 전체 속도는 임계값에 수렴 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`└──────────────┴──────────────────┴────────────────────────────────➔ 코어 수 (N)` |
| **구성요소** | 1. **리틀의 법칙 ($L = \lambda \times W$)**: 안정상태 대기시스템 → 평균작업수($L$), 평균도달률($\lambda$), 평균체류시간($W$)<br>2. **암달의 법칙**: 코어 무한대($N \rightarrow \infty$) 증가해도 직렬부분($1-P$) 때문에 가속비 $\frac{1}{1-P}$ 한계수렴<br>3. **구스타프슨의 법칙**: 시간내 처리가능 대형문제 관점, 가속비 $S(N) = (1-P) + N \cdot P$ → 코어수 비례 선형증가<br>4. **Strong Scaling**: 고정 전체작업크기 하 리소스증가→시간단축 평가 (암달 관점) |
| **비교** | **암달의 법칙**<br>- 전제: 문제(데이터크기) 완전고정<br>- 가속곡선: 로그형태 수평수렴 (한계존재)<br>- 해결: 직렬블록($1-P$) 제거 필요<br><br>**구스타프슨의 법칙**<br>- 전제: 프로세서 증가 시 문제크기도 확장<br>- 가속곡선: 코어수($N$) 비례 선형증가<br>- 해결: 대규모 빅데이터 분산환경(Hadoop, Spark) 부합 |
| **차별화** | **스레드풀 설계 및 병렬프로그래밍 최적화 실무전략**<br>1. **리틀법칙 기반 적정 스레드풀 산정**: CPU 바쁜대기·컨텍스트스위칭 부하방지 → 유입 $\lambda = 200 \text{ tps}$, 응답 $W = 0.1$초 시 적정 스레드수 $L = 200 \times 0.1 = 20$개 기준설정<br>2. **병렬처리 직렬장벽 제거**: 암달의 법칙상 가속저해 주원인 Mutex Lock 최소화 → 독립메모리큐·Lock-Free 구조 도입<br>3. **분산컴퓨팅 파티셔닝**: 대량분산노드 → 구스타프슨의 법칙 적용, 파티셔닝키 동종분산 → 노드증설 병행 처리량 선형확장 |
