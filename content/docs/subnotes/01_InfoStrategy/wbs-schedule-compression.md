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

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **WBS (Work Breakdown Structure) 및 일정 단축 기법 (Schedule Compression)** |
| **정의** | 프로젝트 범위를 계층적으로 분할하여 관리 가능한 워크 패키지로 정의하는 **WBS**와, 일정 지연 시 주공정(Critical Path)을 단축하기 위해 적용하는 **일정 단축 기법(크·패)** |
| **키워드** | WBS (100% Rule), Crashing, Fast-Tracking, Brooks의 법칙, CPM (주공정법), CCPM (임계체인법) |
| **개념도** | `[ WBS : 범위를 워크패키지로 세분화 ]` ➔ `[ CPM 주공정 (Critical Path) 식별 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (일정 지연 발생 시 압축 가동)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌───────────────────────────────────────────────┴───────────────────────────────────────────────┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (크래싱 : 리소스 추가 투입)                      ▼ (패스트 트래킹 : 작업 병행 수행)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 인력, 예산 집중 ] ➔ 비용 증가, Brooks 법칙 주의    [ 설계-개발 병행 ] ➔ 재작업 리스크, 품질 저하 주의` |
| **구성요소** | 1. **Work Package**: WBS의 최하위 노드로 독립적으로 예산 및 일정을 산정하고 담당자를 지정할 수 있는 단위<br>2. **100% Rule**: WBS 내의 하위 작업은 상위 작업이 정의하는 범위를 100% 완벽하게 설명해야 한다는 MECE적 원칙<br>3. **크래싱 (Crashing)**: 주공정(Critical Path) 상의 활동에 비용(리소스)을 더 투입하여 기간 단축을 유도하는 기법<br>4. **패스트 트래킹 (Fast-Tracking)**: 단계별 선후 관계를 무시하고 병행 가능한 선후 작업을 동시에 진행하는 일정 기법<br>5. **CCPM (임계체인법)**: 자원 제약을 고려하여 최적 경로를 설정하고, 안전 여유를 모아 버퍼(프·피·리)로 통제하는 방식 |
| **비교** | **크래싱 (Crashing)**<br>- **핵심 방식**: 자원(인력, 시간외 근무, 예산) 추가 투입<br>- **비용 영향**: 프로젝트 비용 증가 (한계수확체감 우려)<br>- **대표적 리스크**: Brooks의 법칙 (인력 추가 투입으로 커뮤니케이션 오버헤드가 증가하여 프로젝트가 더 지연됨)<br><br>**패스트 트래킹 (Fast-Tracking)**<br>- **핵심 방식**: 순차적 수행 단계를 오버랩하여 병행 수행<br>- **비용 영향**: 초기 직접 비용 증가 없음<br>- **대표적 리스크**: 재작업(Rework) 발생 확률 폭증, 품질 저하 및 이해관계자 갈등 유발 |
| **차별화** | **Brooks의 법칙 우회 및 비용 최적화(Cost Slope) 기반 일정 단축 전략**<br>1. **Cost Slope(비용 경사) 분석을 통한 크래싱 대상 선정**: $Cost\ Slope = \frac{급행비용 - 정상비용}{정상기간 - 급행기간}$ 공식을 활용하여 하루를 단축하는 데 드는 비용이 가장 저렴한 주공정(Critical Path) 상의 작업부터 선별하여 자원 투입.<br>2. **모듈 결합도(Coupling) 최소화 후 인력 수급**: 무조건적인 인력 추가(Brooks 법칙 유발) 전, 아키텍처 분석을 통해 작업 도메인을 독립 모듈로 파티셔닝(인터페이스 분리)하여 커뮤니케이션 오버헤드를 물리적으로 제거한 후 독립 담당자 투입.<br>3. **CCPM 버퍼 소진율 관리(Buffer Trend Chart)**: 프로젝트 버퍼 소진 상태를 3색(Green, Yellow, Red) 신호등 차트로 실시간 관측하여, 소진율이 위험 수준(Red Zone)에 진입할 때만 즉각적인 통제 및 에스컬레이션 실행. |
