---
title: "WBS 및 일정 압축 기법"
date: 2026-07-11T11:16:54+09:00
tags: ["정보전략", "프로젝트관리", "WBS", "일정단축", "Brooks의법칙", "CPM", "CCPM", "서브노트"]
draft: false
---

# WBS 및 일정 압축 기법 서브노트

> **두음 머리에 박기 🧠**
> - **백·미·독** (WBS 작성 3대 원칙: **100**% 룰(상위 노드는 하위 노드 합의 100%), **M**ECE(중복/누락 배제), 인도물 중심 **독**립성)
> - **크·패** (일정 단축 기법: 리소스 투입 **크**래싱 Crashing, 병행 수행 **패**스트 트래킹 Fast-Tracking)
> - **프·피·리** (CCPM 통제 버퍼 종류: **프**로젝트 버퍼 Project Buffer, **피**딩 버퍼 Feeding Buffer, **리**소스 버퍼 Resource Buffer)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **WBS (Work Breakdown Structure) 및 일정 단축 기법 (Schedule Compression)** |
| **정의** | 프로젝트 범위를 계층적으로 분할 → 관리가능 워크패키지로 정의하는 **WBS** + 일정지연 시 주공정(Critical Path) 단축 적용 **일정 단축 기법(크·패)** |
| **키워드** | WBS (100% Rule), Crashing, Fast-Tracking, Brooks의 법칙, CPM (주공정법), CCPM (임계체인법) |
| **개념도** | `[ WBS : 범위를 워크패키지로 세분화 ]` ➔ `[ CPM 주공정 (Critical Path) 식별 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (일정 지연 발생 시 압축 가동)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌───────────────────────────────────────────────┴───────────────────────────────────────────────┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (크래싱 : 리소스 추가 투입)                      ▼ (패스트 트래킹 : 작업 병행 수행)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 인력, 예산 집중 ] ➔ 비용 증가, Brooks 법칙 주의    [ 설계-개발 병행 ] ➔ 재작업 리스크, 품질 저하 주의` |
| **구성요소** | 1. **Work Package**: WBS 최하위노드, 독립적 예산·일정산정·담당자지정 가능 단위(8/80 Rule: 8~80시간 내 완료수준)<br>2. **100% Rule**: 하위작업이 상위작업 정의범위를 100% 완벽설명해야 하는 MECE적 원칙<br>3. **크래싱 (Crashing)**: 주공정(Critical Path) 활동에 비용(리소스) 추가투입 → 기간단축 유도<br>4. **패스트 트래킹 (Fast-Tracking)**: 선후관계 무시, 병행가능 작업 동시진행 → 일정단축<br>5. **CCPM (임계체인법)**: 자원제약 고려 최적경로 설정, 안전여유 모아 버퍼(프·피·리)로 통제<br>6. **ISO21500 범위관리(기획/통제)**: 기획(요구사항수집→범위기술서작성→WBS개발), 통제(범위검증: 인수기준 대비 산출물검토 / 범위통제: 변경요청처리·형상관리 연계)<br>7. **WBS의 타 관리영역 활용**: 일정관리(Work Package→Activity 분해, PDM 네트워크), 비용관리(WBS코드↔원가계정 매핑 CBS로 EVM 산정), 의사소통관리(WBS단위 RACI 담당자지정), 인력관리(Work Package단위 역량·공수산정)<br>8. **Scope Creep(범위 크리프)**: 공식 변경통제 없이 고객·이해관계자 요구로 범위 점진확대. 대응: 범위기술서 명확화, CCB 운영, 기준선(Baseline)관리, 이해관계자 기대치관리<br>9. **Gold Plating(골드플레이팅)**: 개발팀·PM 자발적 미요청기능 추가(과잉엔지니어링). 대응: RTM 관리, 코드/설계리뷰 강화, MVP/애자일 원칙 내재화 |
| **비교** | **크래싱 (Crashing)**<br>- **핵심 방식**: 자원(인력, 시간외근무, 예산) 추가투입<br>- **비용 영향**: 프로젝트 비용증가 (한계수확체감 우려)<br>- **대표적 리스크**: Brooks의 법칙 (인력 추가투입 → 커뮤니케이션 오버헤드 증가 → 오히려 지연)<br><br>**패스트 트래킹 (Fast-Tracking)**<br>- **핵심 방식**: 순차수행 단계 오버랩 → 병행수행<br>- **비용 영향**: 초기 직접비용 증가 없음<br>- **대표적 리스크**: 재작업(Rework) 확률 폭증, 품질저하·이해관계자 갈등 유발<br><br>**Scope Creep**<br>- **발생 주체**: 고객/이해관계자<br>- **발생 동기**: 요구사항 추가압박, 명확화 미흡<br>- **통제 절차**: 우회(비공식 요청수용)<br><br>**Gold Plating**<br>- **발생 주체**: 개발팀/PM 자신<br>- **발생 동기**: 고객만족도 제고, 기술적 과시욕<br>- **통제 절차**: 통제대상 자체 아님(자발적 행위)<br>- **공통 결과**: 일정지연, 비용초과, 품질저하, 팀소진(burnout) |
| **차별화** | **Brooks의 법칙 우회 및 비용 최적화(Cost Slope) 기반 일정 단축 전략**<br>1. **Cost Slope(비용경사) 분석 → 크래싱 대상선정**: $Cost\ Slope = \frac{급행비용 - 정상비용}{정상기간 - 급행기간}$ 공식 → 단축비용 가장 저렴한 주공정 작업부터 자원투입<br>2. **모듈 결합도(Coupling) 최소화 후 인력수급**: 무조건적 인력추가(Brooks 법칙 유발) 전 → 작업도메인 독립모듈 파티셔닝(인터페이스분리) → 커뮤니케이션 오버헤드 제거 후 독립담당자 투입<br>3. **CCPM 버퍼 소진율 관리(Buffer Trend Chart)**: 프로젝트 버퍼소진 상태 3색(Green/Yellow/Red) 신호등차트 실시간관측 → Red Zone 진입 시에만 즉각 통제·에스컬레이션 |
