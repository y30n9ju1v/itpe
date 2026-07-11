---
title: "요구사항 공학"
date: 2026-07-11T11:14:19+09:00
tags: ["소프트웨어공학", "요구사항", "RTM", "기능비기능", "서브노트"]
draft: false
---

# 요구사항 공학 서브노트

> **두음 머리에 박기 🧠**
> - **도·분·명·검** (요구사항 개발 프로세스: **도**출 ➔ **분**석 ➔ **명**세 ➔ **검**증)
> - **기·비** (요구사항 분류: **기**능적 요구사항(What), **비**기능적 요구사항(How/Quality))
> - **협·기·추·변** (요구사항 관리 프로세스: **협**상 ➔ **기**준선(Baseline) 설정 ➔ **추**적 관리 ➔ **변**경 통제)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **요구사항 공학 (Requirements Engineering)** |
| **정의** | 소프트웨어 개발 수명주기(SDLC) 동안 이해관계자의 요구사항을 체계적으로 **도출, 분석, 명세, 검증(도·분·명·검)**하고, 변경 사항을 **추적 및 통제(협·기·추·변)**하는 시스템 엔지니어링 활동 |
| **키워드** | 도·분·명·검, RTM (요구사항 추적표), 기능/비기능 요구사항, 요구사항 상세화, CCB (변경통제위원회) |
| **개념도** | `[ 도출 (Elicitation) ]` ── 인터뷰, 워크숍, 프로토타이핑<br>&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 분석 (Analysis) ]` ──── 범위 설정, 구조적/객체지향 모델링, 우선순위화(MoSCoW)<br>&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 명세 (Specification) ]` ── SRS(요구사항 명세서) 작성, 기능 점수(FP) 도출 기준선 설정<br>&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 검증 (Validation) ]` ─── 동료검토, 워크스루, 인스펙션 ➔ `[ 기준선(Baseline) 설정 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`└─────────── [ 요구사항 관리: RTM 추적 및 변경통제(CCB) ] ──────────────┘` |
| **구성요소** | 1. **도출 기법**: 인터뷰, 설문조사, 브레인스토밍, 사용자 관찰, 프로토타이핑<br>2. **분석 모델링**: 구조적 분석(DFD, ERD), 객체지향 분석(UML Use Case, Class Diagram)<br>3. **명세서 검증 기법**: 동료 검토, 워크스루(회의식 비정형), 인스펙션(체크리스트 기반 정형 검토)<br>4. **RTM (Requirements Traceability Matrix)**: 요구사항 ➔ 분석/설계 ➔ 구현 ➔ 테스트케이스 매핑 표<br>5. **변경 통제**: 변경 요청서(RFC) 접수 ➔ 영향도 분석 ➔ CCB 심의/승인 ➔ 기준선 업데이트 및 릴리즈 |
| **비교** | **기능적 요구사항 (Functional)**<br>- **개념**: 시스템이 무엇을(What) 수행해야 하는지 기술<br>- **대상**: 입력값에 대한 연산, 데이터 처리, 비즈니스 흐름, CRUD 기능<br><br>**비기능적 요구사항 (Non-Functional)**<br>- **개념**: 시스템이 어떻게(How) 동작하고 품질을 유지할지 기술<br>- **대상**: 성능(TPS, 응답시간), 보안성, 신뢰성, 가용성, 호환성, 품질(ISO 25010) |
| **차별화** | **요구사항 상세화 부재 극복 및 비기능 요구사항 검증 실무 전략**<br>1. **구체적 인수 조건(Acceptance Criteria) 명시**: 요구사항 상세화 단계에서 개발 명세뿐만 아니라 "초당 2,000건의 동시 요청 처리 시 응답시간 2초 이내"와 같은 테스트가 가능한 구체적 비기능 지표(SLA)를 명세.<br>2. **자동화 도구 연계 양방향 추적성**: RTM의 수작업 업데이트 지연을 방지하기 위해 Jira(이슈) ➔ GitHub(커밋 및 PR) ➔ Jenkins(빌드/테스트) ➔ TestLink(테스트케이스)를 API로 연동하여 실시간 추적 시각화.<br>3. **CCB의 기민성 확보**: 대형 폭포수형 CCB 외에 가벼운 변경에 대응하는 Agile CCB(스프린트 백로그 재조정 세션)를 주 단위로 병행 운영하여 요구사항 변경 병목 해소. |
