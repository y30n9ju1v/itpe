---
title: "UML 행위 다이어그램 (Activity·State·Use-Case)"
date: 2026-07-11T11:37:46+09:00
tags: ["소프트웨어공학", "SW분석설계", "UML", "활동다이어그램", "상태다이어그램", "유스케이스", "서브노트"]
draft: false
---

# UML 행위 다이어그램 서브노트

> **두음 머리에 박기 🧠**
> - **유·시·활·상·협** (UML 5대 행위 다이어그램: **유**스케이스, **시**퀀스, **활**동, **상**태, **협**력)
> - **inc·ext** (유스케이스 관계 구분: **inc**lude=항상 포함, **ext**end=조건부 포함)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **UML 행위 다이어그램 (Activity·State·Use-Case Diagram)** |
| **정의** | 시스템의 동적 동작을 표현하는 UML 행위 다이어그램 중 업무 프로세스 흐름을 표현하는 **활동 다이어그램**, 객체의 상태 전이를 표현하는 **상태 다이어그램**, 시스템과 외부 행위자 간 기능적 상호작용을 표현하는 **유스케이스 다이어그램**은 각각 설계·분석 단계에서 상호 보완적으로 활용된다 |
| **키워드** | 스윔레인, 포크/조인, 히스토리 상태, 액터, include/extend, 시스템 경계 |
| **개념도** | `[ 액터 ]` ── 연관 ──▶ `(( 유스케이스 ))` ── «include» ──▶ `(( 하위 유스케이스 ))`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 세부 흐름은 활동 다이어그램으로 상세화`<br>`[초기] → 주문접수 → 결제완료 → 배송중 → 배송완료 → [종료]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`↘ 취소 ↗ (상태 다이어그램의 상태 전이)` |
| **구성요소** | 1. **활동 다이어그램**: 초기/종료 노드, 활동(Action), 결정 노드(◇), 포크/조인(병렬), 스윔레인(역할 구분) — 업무 프로세스·알고리즘 흐름 모델링<br>2. **상태 다이어그램**: 상태, 전이(이벤트[조건]/행동), 초기/최종 상태, 히스토리 상태(H), 복합 상태 — 객체 생명주기의 상태 변화 모델링<br>3. **유스케이스 다이어그램**: 액터, 유스케이스(타원), 시스템 경계, 연관/include/extend/일반화 관계 — 기능 요구사항 도출<br>4. **UML 구조 다이어그램(대비군)**: 클래스, 객체, 컴포넌트, 배치 다이어그램 |
| **비교** | **include (항상 포함)**<br>- **예시**: "결제하기" 실행 시 "카드 검증"은 항상 실행<br><br>**extend (조건부 포함)**<br>- **예시**: "할인 적용"은 특정 조건에서만 "결제하기"를 확장 |
| **차별화** | **3가지 다이어그램의 개발 단계별 연계 활용 전략**<br>1. **분석→설계 단계 전이**: 요구사항 분석 단계에서 유스케이스 다이어그램으로 기능 요구사항을 먼저 도출한 뒤, 설계 단계에서 각 유스케이스의 내부 로직을 활동 다이어그램으로 상세화.<br>2. **실시간 시스템의 상태 다이어그램 활용**: 주문 처리, 프로토콜 설계, UI 상태 관리 등 이벤트 기반 시스템에서는 상태 다이어그램으로 모든 상태 전이 조건을 명세하여 누락된 예외 상태(비정상 전이)를 사전 검출.<br>3. **테스트 케이스 도출 연계**: 유스케이스의 include/extend 관계와 활동 다이어그램의 분기 조건을 결합해 동적 테스트의 테스트 케이스를 체계적으로 도출. |
