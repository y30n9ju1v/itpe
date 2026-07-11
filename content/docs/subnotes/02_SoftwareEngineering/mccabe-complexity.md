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
| **정의** | 제어 흐름 그래프(CFG)의 위상수학적 구조를 분석하여 **프로그램 내 선형 독립적 경로 수**를 계산함으로써 모듈의 복잡도를 정량적으로 측정하는 **정적 소프트웨어 메트릭** |
| **키워드** | 제어 흐름 그래프(CFG), 간선(E), 노드(V), 분기노드(P), 복잡도 임계치(10 이하 권장), 정적 코드 분석 |
| **개념도** | **[ 간단한 IF-ELSE 소스코드 및 제어 흐름 그래프(CFG) ]**<br>`1: code_start;` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 노드 1 (Start) ]`<br>`2: if (A) then` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>`3: &nbsp;&nbsp;code_T;` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`4: else` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 노드 2 (IF 분기) ]` (A)<br>`5: &nbsp;&nbsp;code_F;` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌───┴───┐`<br>`6: code_end;` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (True)`&nbsp;&nbsp;`▼ (False)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 노드 3 ]`  `[ 노드 4 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└───┬───┘`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 노드 5 (End) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**V(G) 계산**: 간선(E)=5개, 노드(V)=5개 ➔ $V(G) = 5 - 5 + 2 = \mathbf{2}$<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**분기 공식**: 분기 노드(P)=1개(노드 2) ➔ $V(G) = 1 + 1 = \mathbf{2}$ (계산 일치) |
| **구성요소** | 1. **간선 (Edge, E)**: 노드 간의 제어 흐름 경로를 지칭하는 화살표<br>2. **노드 (Node, V)**: 순차적 코드 블록, 조건/분기문, 시작/종료 지점<br>3. **분기 노드 (Predicate, P)**: 결정 조건식(IF, Switch 등)을 포함하는 노드<br>4. **복잡도 임계치**: V(G)가 **10 이하**일 때 안정적 상태, **20 초과** 시 리팩토링 강력 검토 대상 분류<br>5. **독립 경로**: 시작부터 종료 노드까지의 경로 중 타 경로에 속하지 않는 고유 간선을 1개 이상 포함한 경로 |
| **비교** | **순환 복잡도 (McCabe)**<br>- **기본 원리**: 소스코드의 제어 흐름 그래프(CFG) 위상 구조 분석<br>- **특징**: 코드 길이와 상관없이 복잡도 측정 가능, 화이트박스 최소 테스트 케이스 상한선 결정<br><br>**코드 라인 수 (LOC, Line of Code)**<br>- **기본 원리**: 단순 소스코드 텍스트 라인의 합산 측정<br>- **특징**: 주석/빈줄 유무, 코딩 가이드라인에 따라 가변성이 큼, 실제 구조적 복잡성 왜곡 오류 가능 |
| **차별화** | **개발 파이프라인 연계를 통한 McCabe 복잡도 통제 및 리팩토링 방안**<br>1. **SonarQube 정적 검사 품질 관문(Quality Gate) 연동**: 형상 관리 머지(Merge) 조건에 "신규/수정 메서드의 순환 복잡도 V(G) 10 이하" 요건을 의무화하여 빌드 실패(Build Break)로 차단.<br>2. **테스트 커버리지 최적화 유도**: 순환 복잡도 값은 독립 경로의 총합이므로, 화이트박스 분기 테스트 설계 시 요구되는 최소 테스트케이스 개수의 정량적 한계로 삼아 과도한 오버헤드 테스트 방지.<br>3. **메서드 추출(Extract Method)을 통한 복잡도 분산**: $V(G)$가 20 이상인 거대 메서드는 응집도를 분석하여 의미적 하위 모듈로 쪼개어 개별 $V(G)$를 5 내외로 정돈하여 가독성 확보. |
