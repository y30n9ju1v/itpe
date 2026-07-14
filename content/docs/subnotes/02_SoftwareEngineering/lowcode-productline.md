---
title: "로우코드/노코드와 제품계열 방법론"
date: 2026-07-11T11:37:46+09:00
tags: ["소프트웨어공학", "개발방법론", "로우코드", "노코드", "제품계열", "SPL", "시민개발자", "서브노트"]
draft: false
---

# 로우코드/노코드와 제품계열 방법론 서브노트

> **두음 머리에 박기 🧠**
> - **벤·성·보·커·기** (로우코드 5대 한계점: **벤**더종속, **성**능한계, **보**안위험, **커**스터마이징한계, **기**술부채)
> - **식·통·상·기·감** (형상관리 기준선과 유사한 SPL 4대 활동처럼, SPL 고려사항 암기용 **도·변·조·초** — **도**메인 범위, **변**동성 관리, **조**직 변화, **초**기 투자)
> - **도·응** (SPL 두 가지 개발 프로세스: **도**메인 공학 Domain Engineering, **응**용 공학 Application Engineering)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **로우코드/노코드 플랫폼(Low Code/No Code)과 소프트웨어 제품계열 방법론(SPL)** |
| **정의** | 시민개발자 시각적개발로 앱 신속생산 **로우코드/노코드** + 공통핵심자산(Core Assets)기반 제품군 체계생산 **SPL(제품계열)** → 둘다 "재사용 공통기반 위 변형제품 신속생산" 공통목표의 생산성 향상기법 |
| **키워드** | 시민개발자, WYSIWYG, 벤더 종속(Vendor Lock-in), Core Assets, Feature Model, 도메인 공학/응용 공학, 변동성 관리 |
| **개념도** | `[ 로우코드/노코드 플랫폼 ]` ── 시각적 컴포넌트 조립 ──▶ `[ 개별 앱 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`(공통 UI/로직 블록 재사용)`<br><br>`[ 제품계열 핵심 자산(Core Assets) ]` ── Feature 선택 ──▶ `[ 제품 A / B / C (변형) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`(도메인 공학이 자산 구축, 응용 공학이 개별 제품 생산)` |
| **구성요소** | 1. **로우코드/노코드**: 시각적개발(WYSIWYG), 컴포넌트기반 조립, API/DB 자동연동, 자동코드생성<br>2. **SPL 핵심자산(Core Assets)**: 아키텍처, 컴포넌트, 테스트케이스, 도메인모델<br>3. **Feature Model**: 제품군 공통점(Common)·선택점(Optional)·대안점(Alternative) 트리표현<br>4. **도메인공학**: 공통자산·가변점 선행구축 프로세스<br>5. **응용공학**: Feature선택으로 개별제품 조립·생산 프로세스 |
| **비교** | **로우코드/노코드 (플랫폼형 재사용)**<br>- 재사용단위: UI/로직 블록<br>- 대상: 시민개발자 포함 광범위<br>- 한계: 벤더종속·성능한계·보안위험·커스터마이징한계·기술부채(벤·성·보·커·기)<br><br>**SPL (자산형 재사용)**<br>- 재사용단위: 아키텍처·컴포넌트·도메인모델(Core Assets)<br>- 대상: 전문개발조직(도메인팀/제품팀)<br>- 한계: 도메인범위 설정실패 시 복잡도폭증, 초기투자 과다 |
| **차별화** | **공통기반 재사용전략 결합 실무방안**<br>1. **SPL Core Assets + 로우코드 계층결합**: 자동차 ECU플랫폼처럼 SPL로 하위 공통아키텍처 확정 → 상위 UI/업무로직은 로우코드로 시민개발자 위임 → 신차종 SW개발기간 단축<br>2. **거버넌스 이원화**: 로우코드 섀도우IT·보안위험→CCB형 거버넌스, SPL 변동성폭증→Feature Model 승인절차로 각각 통제<br>3. **테일러링 관점**: 둘다 표준개발방법론 테일러링 수단, 프로젝트 특성(신속성 vs 재사용성)따라 선택채택 |
