---
title: "McCabe 순환 복잡도"
date: 2026-07-11T11:14:19+09:00
tags: ["소프트웨어공학", "정적분석", "McCabe", "순환복잡도", "CFG", "서브노트"]
draft: false
---

# McCabe 순환 복잡도 서브노트

> **두음 머리에 박기 🧠**
> - **이·브이·이** (순환 복잡도 기본 공식: $V(G) = E - V + 2$ ➔ **E**(이) - **V**(브이) + **2**(이))
> - **피·플·원** (분기 노드 공식: $V(G) = P + 1$ ➔ **P**(피) + **1**(원))
> - **영역의 수** (도식적 산정법: 흐름 그래프가 만드는 독립적 닫힌 공간의 수 + 바깥 평면(1) = 순환복잡도)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **McCabe 순환 복잡도 (Cyclomatic Complexity)** |
| **정의** | CFG 위상수학적 구조분석 → **프로그램내 선형독립 경로수** 계산 → 모듈복잡도 정량측정 **정적 SW 메트릭** |
| **키워드** | 제어 흐름 그래프(CFG), 간선(E), 노드(V), 분기노드(P), 복잡도 임계치(10 이하 권장), 정적 코드 분석 |
| **개념도** | **[ 간단한 IF-ELSE 소스코드 및 제어 흐름 그래프(CFG) ]**<br>`1: code_start;` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 노드 1 (Start) ]`<br>`2: if (A) then` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>`3: &nbsp;&nbsp;code_T;` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`4: else` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 노드 2 (IF 분기) ]` (A)<br>`5: &nbsp;&nbsp;code_F;` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌───┴───┐`<br>`6: code_end;` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (True)`&nbsp;&nbsp;`▼ (False)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 노드 3 ]`  `[ 노드 4 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└───┬───┘`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 노드 5 (End) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**V(G) 계산**: 간선(E)=5개, 노드(V)=5개 ➔ $V(G) = 5 - 5 + 2 = \mathbf{2}$<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**분기 공식**: 분기 노드(P)=1개(노드 2) ➔ $V(G) = 1 + 1 = \mathbf{2}$ (계산 일치) |
| **구성요소** | 1. **간선(E)**: 노드간 제어흐름 경로 화살표<br>2. **노드(V)**: 순차코드블록, 조건/분기문, 시작/종료지점<br>3. **분기노드(P)**: 결정조건식(IF, Switch 등) 포함 노드<br>4. **복잡도 임계치**: V(G) **10이하** 안정, **20초과** 리팩토링 강력검토대상<br>5. **독립경로**: 시작~종료 경로 중 타경로 미속 고유간선 1개이상 포함 경로 |
| **비교** | **순환복잡도 (McCabe)**<br>- 원리: 소스코드 CFG 위상구조 분석<br>- 특징: 코드길이 무관 측정가능, 화이트박스 최소테스트케이스 상한선 결정<br><br>**코드라인수 (LOC)**<br>- 원리: 소스코드 텍스트라인 단순합산<br>- 특징: 주석/빈줄·코딩가이드에 따라 가변성 큼, 구조적 복잡성 왜곡오류 가능 |
| **차별화** | **개발 파이프라인 연계 McCabe 복잡도 통제·리팩토링 방안**<br>1. **SonarQube Quality Gate 연동**: 머지조건에 "신규/수정 메서드 V(G) 10이하" 의무화 → 미충족 시 빌드실패로 차단<br>2. **테스트커버리지 최적화**: 순환복잡도=독립경로 총합 → 화이트박스 분기테스트 최소케이스수 정량한계로 활용, 오버헤드 테스트 방지<br>3. **Extract Method로 복잡도 분산**: V(G) 20이상 거대메서드 → 응집도 분석해 의미적 하위모듈 분할 → 개별 V(G) 5내외로 가독성 확보 |
