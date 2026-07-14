---
title: "애자일 규모/일정 산정 기법"
date: 2026-07-11T11:26:36+09:00
tags: ["소프트웨어공학", "프로젝트관리", "애자일", "스토리포인트", "플래닝포커", "번다운차트", "Velocity", "서브노트"]
draft: false
---

# 애자일 규모/일정 산정 기법 서브노트

> **두음 머리에 박기 🧠**
> - **인·베·스·트** (사용자 스토리 품질 요건 INVEST 원칙: 독립적 **I**ndependent, 타협가능 **N**egotiable, 가치있는 **V**aluable, 추정가능 **E**stimatable, 작은 크기 **S**mall, 테스트가능 **T**estable)
> - **스·티·포** (애자일 3대 상대규모 추정 도구: 복잡도 상대 점수 **스**토리포인트 Story Point, 대략적 초분류 **티**셔츠사이징 T-shirt Sizing, 협업적 합의 **포**커게임 Planning Poker)
> - **피·보·나·치** (플래닝 포커 점수 눈금 카드 기준: 복잡도가 커질수록 추정 오차도 비례해 넓어짐을 투영한 **피보나치** 수열 $1, 2, 3, 5, 8, 13, 21 \dots$ 활용)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **애자일 프로젝트 상대적 규모 산정 기법 및 일정 통제 지표** |
| **정의** | 고정시간추정 한계 극복 → 스토리 복잡도/위험을 **스토리 포인트**로 상대산정, **플래닝 포커** 등 협업합의로 범위조율하는 **애자일 일정관리 기법** |
| **키워드** | User Story (INVEST), Story Point, Planning Poker, Velocity (개발 속도), Burn-down/up Chart, 불확실성의 콘 |
| **개념도** | **[ 플래닝 포커(Planning Poker)를 통한 스토리 포인트 합의 메커니즘 ]**<br>`[ 사용자 스토리 (User Story) 제시 ]` ➔ `[ 개발팀 개별 비공개 카드 선택 (피보나치) ]` ➔ `[ 동시 공개 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌───────────────────────────┴───────────────────────────┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (점수 차이 큼 : 예: 2pt vs 13pt)                      ▼ (점수 차이 작음 : 예: 3pt vs 5pt)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 최저/최고 의견 개진 및 토론 ]                        [ 평균 혹은 보수적 최종 합의 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└───────➔ [ 재투표 수행 (만장일치 지향) ]                  └────➔ [ 제품 백로그 포인트 확정 ]` |
| **구성요소** | 1. **사용자 스토리**: 혜택중심 서술 — "나는 [페르소나]로서 [기능] 원함, [가치] 때문"<br>2. **스토리 포인트**: 기준스토리(예: 로그인)=1 → 비교산정한 복잡도/노력 상대치<br>3. **플래닝 포커**: 피보나치 카드 비공개제출 → 극단값 토론 → 합의수렴<br>4. **개발속도(Velocity)**: 스프린트당 DoD 충족·소멸 스토리포인트 합<br>5. **번다운 차트**: X=스프린트일자, Y=잔여포인트 → 우하향선으로 지연 가시화 |
| **비교** | **기능 점수 (Function Point)**<br>- 추정기준: 물리 데이터파일(ILF/EIF)·트랜잭션 수<br>- 계약적용: 법적 SW대가산정 기준, 기획단계 의무<br>- 유연성: 낮음 (변경 시 대가조절 복잡)<br><br>**스토리 포인트 (Story Point)**<br>- 추정기준: 팀역량 대비 주관/상대적 노력·복잡도<br>- 계약적용: 스프린트단위 탄력적 이행계약<br>- 유연성: 매우 높음 (백로그 교체로 즉시변경) |
| **차별화** | **불확실성의 콘 극복 및 범위확장(Scope Creep) 통제 방안**<br>1. **롤링 웨이브 계획법**: 초기 오차범위 큼(콘 4배편차) → 마일스톤 에픽단위 대략산정, 스프린트 진행 시 상세화·정확도 수렴<br>2. **번업 차트 교차 활용**: 번다운=잔여일만 표시→지연원인(속도저하 vs 요구사항유입) 구별불가 → 백로그 누적/소멸치 동시표시 번업차트로 계약리스크 통제<br>3. **Velocity 기반 커미트먼트**: 최근 3스프린트 평균속도(예 30pt) 기준 → 차기 목표 30pt 이하 약속, 피로누적·부실테스트 방지 |
