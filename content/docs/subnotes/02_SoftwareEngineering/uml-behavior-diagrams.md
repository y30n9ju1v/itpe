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

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **UML 행위 다이어그램 (Activity·State·Use-Case Diagram)** |
| **정의** | 시스템 동적동작 표현 UML 행위 다이어그램 중 업무흐름 **활동 다이어그램**, 객체상태전이 **상태 다이어그램**, 외부행위자 기능상호작용 **유스케이스 다이어그램** → 설계·분석 단계 상호보완 활용 |
| **키워드** | 스윔레인, 포크/조인, 히스토리 상태, 액터, include/extend, 시스템 경계 |
| **개념도** | `[ 액터 ]` ── 연관 ──▶ `(( 유스케이스 ))` ── «include» ──▶ `(( 하위 유스케이스 ))`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 세부 흐름은 활동 다이어그램으로 상세화`<br>`[초기] → 주문접수 → 결제완료 → 배송중 → 배송완료 → [종료]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`↘ 취소 ↗ (상태 다이어그램의 상태 전이)` |
| **구성요소** | 1. **활동 다이어그램**: 초기/종료노드, 활동(Action), 결정노드(◇), 포크/조인(병렬), 스윔레인(역할구분) → 업무프로세스·알고리즘 흐름 모델링<br>2. **상태 다이어그램**: 상태, 전이(이벤트[조건]/행동), 초기/최종상태, 히스토리상태(H), 복합상태 → 객체 생명주기 상태변화 모델링<br>3. **유스케이스 다이어그램**: 액터, 유스케이스(타원), 시스템경계, 연관/include/extend/일반화 → 기능요구사항 도출<br>4. **UML 구조 다이어그램(대비군)**: 클래스, 객체, 컴포넌트, 배치 다이어그램 |
| **비교** | **include (항상 포함)**<br>- 예시: "결제하기" 실행 시 "카드 검증" 항상 실행<br><br>**extend (조건부 포함)**<br>- 예시: "할인 적용"은 특정조건에서만 "결제하기" 확장 |
| **차별화** | **3가지 다이어그램의 개발 단계별 연계 활용 전략**<br>1. **분석→설계 전이**: 유스케이스로 기능요구사항 먼저 도출 → 설계단계에서 내부로직을 활동 다이어그램으로 상세화<br>2. **실시간 시스템 상태 다이어그램 활용**: 주문처리·프로토콜·UI상태 등 이벤트기반 시스템 → 모든 상태전이 조건 명세, 누락 예외상태(비정상전이) 사전검출<br>3. **테스트 케이스 도출 연계**: include/extend 관계 + 활동 다이어그램 분기조건 결합 → 동적테스트 케이스 체계적 도출 |
