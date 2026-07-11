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
| **정의** | 고정 시간 추정의 한계를 극복하기 위해 사용자 스토리의 복잡도와 위험을 상대적 지표인 **스토리 포인트**로 정의하고, 협업적 합의 게임인 **플래닝 포커** 등을 통해 범위를 조율하는 **애자일 일정 관리 기법** |
| **키워드** | User Story (INVEST), Story Point, Planning Poker, Velocity (개발 속도), Burn-down/up Chart, 불확실성의 콘 |
| **개념도** | **[ 플래닝 포커(Planning Poker)를 통한 스토리 포인트 합의 메커니즘 ]**<br>`[ 사용자 스토리 (User Story) 제시 ]` ➔ `[ 개발팀 개별 비공개 카드 선택 (피보나치) ]` ➔ `[ 동시 공개 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌───────────────────────────┴───────────────────────────┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (점수 차이 큼 : 예: 2pt vs 13pt)                      ▼ (점수 차이 작음 : 예: 3pt vs 5pt)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 최저/최고 의견 개진 및 토론 ]                        [ 평균 혹은 보수적 최종 합의 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└───────➔ [ 재투표 수행 (만장일치 지향) ]                  └────➔ [ 제품 백로그 포인트 확정 ]` |
| **구성요소** | 1. **사용자 스토리**: 사용자의 혜택 중심 서술 문장. "나는 [페르소나]로서, [기능]을 원한다. 왜냐하면 [가치] 때문이다"<br>2. **스토리 포인트**: 기준 스토리(예: 단순 로그인)를 1로 잡고 비교해 매긴 복잡도/노력의 상대적 정량치<br>3. **플래닝 포커**: 피보나치 카드를 각자 비공개 제출하여 극단적 수치 제출자 간 토론을 거쳐 합의점을 수렴하는 기법<br>4. **개발 속도 (Velocity)**: 한 스프린트당 완료 선언 정의(DoD)를 만족하고 실제 소멸시킨 스토리 포인트의 합<br>5. **번다운 차트 (Burn-down)**: X축 스프린트 일자, Y축 남은 스토리 포인트. 우하향 선을 통해 실시간 지연 상태 가시화 |
| **비교** | **전통적 기능 점수 (Function Point - FP)**<br>- **추정 기준**: 물리적 데이터 파일(ILF/EIF) 및 트랜잭션 수<br>- **계약 적용**: 법적 소프트웨어 대가 산정 기준, 기획 단계 의무<br>- **유연성**: 낮음 (기획 변경 시 대가 조절 프로세스 복잡함)<br><br>**애자일 스토리 포인트 (Story Point)**<br>- **추정 기준**: 개발팀 역량 대비 주관/상대적 노력 및 복잡도 점수<br>- **계약 적용**: 스프린트 단위 탄력적 이행 계약에 적합<br>- **유연성**: 매우 높음 (스프린트 백로그 교체를 통해 즉각 변경) |
| **차별화** | **불확실성의 콘 (Cone of Uncertainty) 극복 및 범위 확장 (Scope Creep) 통제 방안**<br>1. **불확실성의 콘 완화를 위한 롤링 웨이브 계획법 (Rolling Wave Planning)**: 초기 분석 설계 단계에서는 추정 오차 범위가 매우 크므로(불확실성 콘에 의한 4배 편차), 초기 마일스톤은 대략적인 에픽(Epic) 크기로 잡고 스프린트가 진행됨에 따라 상세화하여 추정 정확도 점진적 수렴.<br>2. **범위 확장 탐지용 번업 차트 (Burn-up Chart) 교차 활용**: 번다운 차트는 잔여 일만 표시하여 전체 백로그 추가(Scope Creep)가 발생했을 때 일정 지연 원인이 개발 속도 저하 때문인지 신규 요구사항 유입 때문인지 구별 불가. 따라서 전체 백로그 누적치와 소멸치를 동시에 그리는 **번업 차트**를 결합하여 계약 리스크 통제.<br>3. **Velocity 기반 차기 스프린트 계획(Commitment)**: 최근 3개 스프린트 평균 개발 속도(예: 30pt)를 기준으로 다음 스프린트 이행 목표를 30pt 이하로 약속하여 개발 피로도 누적 및 부실 테스트 방지. |
