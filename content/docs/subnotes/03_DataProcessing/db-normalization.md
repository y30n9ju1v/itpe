---
title: "데이터 모델링 및 정규화"
date: 2026-07-11T11:16:54+09:00
tags: ["자료처리", "데이터베이스", "정규화", "반정규화", "이상현상", "4NF", "5NF", "암스트롱공리", "연결함정", "서브노트"]
draft: false
---

# 데이터 모델링 및 정규화 서브노트

> **두음 머리에 박기 🧠**
> - **삽·삭·수** (데이터베이스 3대 이상현상: **삽**입 이상, **삭**제 이상, **수**정 이상)
> - **원·부·이·결·다·조** (정규화 단계: **원**자값 ➔ **부**분함수종속 제거 ➔ **이**행함수종속 제거 ➔ **결**정자 후보키 ➔ **다**치종속 제거 ➔ **조**인종속 제거)
> - **반·첨·이** (암스트롱 3대 기본 공리: **반**사율 Reflexivity, **첨**가율 Augmentation, **이**행율 Transitivity)
> - **팬·캐즘** (연결함정 2대 유형: **팬**트랩 Fan Trap(가짜 튜플 양산), **캐즘**트랩 Chasm Trap(경로 단절))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **관계형 데이터베이스 정규화 (Normalization) 및 반정규화 (Denormalization)** |
| **정의** | 중복제거 → 이상현상(삽·삭·수) 방지 단계적 **정규화(원·부·이·결·다·조)** + 성능·개발편의 위해 무결성 양보·의도적 중복허용 **반정규화 기술** |
| **키워드** | 이상현상, 함수적 종속성(FD), 결정자/종속자, 다치 종속(MVD), 조인 종속(JD), 반정규화 대안 |
| **개념도** | `[ 비정규 테이블 ] ── (원자값) ──➔ 1NF ── (부분함수종속 제거) ──➔ 2NF ── (이행함수종속 제거) ──➔ 3NF`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`┌─────────────────────────────────────────────────────────────────────────────┘`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ BCNF (결정자가 후보키) ] ── (다치종속 제거) ──➔ 4NF ── (조인종속 제거) ──➔ 5NF ➔ [ 이상현상 완전 제거 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`└─────────── [ 반정규화 : 조회 성능 극대화를 위한 의도적 테이블/컬럼 중복 허용 ] ──────────┘` |
| **구성요소** | 1. **이상현상 (삽·삭·수)**: 중복으로 인한 불합리 현상 (불필요 삽입, 연쇄삭제, 일부속성만 수정되는 모순)<br>2. **다치 종속성 (MVD, 4NF 대상)**: $A \twoheadrightarrow B$ 관계 → A값 하나에 B의 독립적 값집합 매핑<br>3. **조인 종속성 (JD, 5NF 대상)**: 릴레이션 R의 투영(Projection) 재조인 결과=원래 R<br>4. **반정규화 대상**: 테이블분할(수직-컬럼/수평-행), 중복컬럼 추가, 중복관계 정의<br>5. **암스트롱 공리**: F로부터 논리적 유도가능 FD 전부 찾는 추론규칙. 기본3규칙(반사율 Y⊆X→X→Y, 첨가율 X→Y⇒XZ→YZ, 이행율 X→Y∧Y→Z⇒X→Z)+부가3규칙(합집합·분해·의사이행), 건전성·완전성 만족 → 애트리뷰트 폐포(X⁺)로 후보키·부분FD·이행FD 판별<br>6. **연결함정**: 3개+ 엔티티 관계 오설계 → 조인 시 가짜정보 유도 or 경로단절. SQL오류 없이 실행 → 발견 어려움 |
| **비교** | **4정규형 (4NF)**<br>- 종속성: 다치종속성(MVD) 제거<br>- 현상: 테이블 내 독립적 다대다 관계 공존 → 중복<br><br>**5정규형 (5NF)**<br>- 종속성: 조인종속성(JD) 제거<br>- 현상: 3조각+ 분할 후 조인해야 무손실복원 가능<br><br>**팬 트랩**<br>- 구조: 부모1-자식2 각각 1:M, 자식간 직접연결 소실<br>- 현상: 조인 시 가짜튜플 양산 → 해결: 수직재배치, 교차엔티티 도입<br><br>**캐즘 트랩**<br>- 구조: 경로상 선택적(Optional 0..1) 관계 존재<br>- 현상: 연결경로 유실 → 해결: 상하위 직접관계 신설 |
| **차별화** | **무분별한 반정규화 지양 대안기술 및 무결성 제어 실무방안**<br>1. **반정규화 대안 우선검토**: 반정규화 전 "인덱스 최적화(커버링)", "부분 반정규화 뷰(Materialized View)", "앱 캐싱(Redis)", "역정규화 없는 수평파티셔닝" 우선도입 → 리스크 회피<br>2. **실시간 동기화 거버넌스**: 중복컬럼/테이블 생성 시 → DB 트리거 최소화, 앱수준 Event Listener(Spring Event) 또는 Kafka 비동기 CDC로 동기화 오버헤드 통제<br>3. **이관·정합성 검증 배치**: 분기별 중복데이터 불일치 모니터링·정정 자동검증SQL+이관배치 → 잔존결함 정화 |
