---
title: "데이터 모델링 및 정규화"
date: 2026-07-11T11:16:54+09:00
tags: ["자료처리", "데이터베이스", "정규화", "반정규화", "이상현상", "4NF", "5NF", "서브노트"]
draft: false
---

# 데이터 모델링 및 정규화 서브노트

> **두음 머리에 박기 🧠**
> - **삽·삭·수** (데이터베이스 3대 이상현상: **삽**입 이상, **삭**제 이상, **수**정 이상)
> - **원·부·이·결·다·조** (정규화 단계: **원**자값 ➔ **부**분함수종속 제거 ➔ **이**행함수종속 제거 ➔ **결**정자 후보키 ➔ **다**치종속 제거 ➔ **조**인종속 제거)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **관계형 데이터베이스 정규화 (Normalization) 및 반정규화 (Denormalization)** |
| **정의** | 데이터 중복성을 제거하여 **이상현상(삽·삭·수)**을 방지하는 단계적 **정규화(원·부·이·결·다·조)** 과정과, 성능 및 개발 편의성을 위해 무결성을 양보하고 의도적으로 중복을 허용하는 **반정규화 기술** |
| **키워드** | 이상현상, 함수적 종속성(FD), 결정자/종속자, 다치 종속(MVD), 조인 종속(JD), 반정규화 대안 |
| **개념도** | `[ 비정규 테이블 ] ── (원자값) ──➔ 1NF ── (부분함수종속 제거) ──➔ 2NF ── (이행함수종속 제거) ──➔ 3NF`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`┌─────────────────────────────────────────────────────────────────────────────┘`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ BCNF (결정자가 후보키) ] ── (다치종속 제거) ──➔ 4NF ── (조인종속 제거) ──➔ 5NF ➔ [ 이상현상 완전 제거 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`└─────────── [ 반정규화 : 조회 성능 극대화를 위한 의도적 테이블/컬럼 중복 허용 ] ──────────┘` |
| **구성요소** | 1. **이상현상 (삽·삭·수)**: 데이터 중복으로 발생하는 불합리한 현상 (불필요한 데이터 삽입, 원치 않는 정보 연쇄 삭제, 일부 속성만 수정되는 모순)<br>2. **다치 종속성 (MVD, 4NF 대상)**: $A \twoheadrightarrow B$ 관계에서 $A$ 값 하나에 $B$의 독립적인 값들의 집합이 매핑되는 현상<br>3. **조인 종속성 (JD, 5NF 대상)**: 어떤 릴레이션 $R$의 투영(Projection)들을 다시 조인한 결과가 원래 $R$과 같은 현상<br>4. **반정규화 대상**: 테이블 분할(수직-컬럼/수평-행 파티셔닝), 중복 컬럼 추가, 중복 관계 정의 |
| **비교** | **4정규형 (4NF)**<br>- **종속성**: 다치 종속성 (Multi-valued Dependency) 제거<br>- **현상**: 한 테이블 내에 독립된 다대다 관계가 공존하여 중복 발생<br><br>**5정규형 (5NF)**<br>- **종속성**: 조인 종속성 (Join Dependency) 제거<br>- **현상**: 릴레이션을 3개 이상의 조각으로 쪼갰다가 조인해야만 무손실 복원이 가능한 상태 |
| **차별화** | **무분별한 반정규화 지양을 위한 대안 기술 및 무결성 제어 실무 방안**<br>1. **반정규화의 대안 기술 우선 검토**: 무결성을 파괴하는 반정규화 적용 전, **"인덱스 최적화(커버링 인덱스)"**, **"부분 반정규화 뷰(Materialized View)"**, **"어플리케이션 캐싱(Redis)"** 및 **"역정규화 없는 수평 파티셔닝"**을 먼저 도입하여 리스크 회피.<br>2. **실시간 데이터 동기화 거버넌스**: 중복 컬럼이나 중복 테이블을 생성한 경우, 데이터 일치(Consistency)를 보증하기 위해 DB 레이어의 트리거(Trigger) 활용을 최소화하고, 애플리케이션 수준의 Event Listener(예: Spring Event) 또는 Kafka 기반 비동기 CDC(Change Data Capture)를 적용해 동기화 오버헤드 통제.<br>3. **데이터 이관 및 정합성 검증 배치 구축**: 분기별 1회 이상 중복 데이터 간의 불일치를 모니터링하고 정정하는 자동 검증 SQL 및 이관 배치를 구축하여 잔존 데이터 결함 자동 정화. |
