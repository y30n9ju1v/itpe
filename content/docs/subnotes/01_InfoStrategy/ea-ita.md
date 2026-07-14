---
title: "전사 아키텍처 및 EA/ITA 체계"
date: 2026-07-11T11:26:36+09:00
tags: ["정보전략", "EA", "ITA", "Zachman", "TOGAF", "비데애테", "서브노트"]
draft: false
---

# 전사 아키텍처 및 EA/ITA 체계 서브노트

> **두음 머리에 박기 🧠**
> - **비·데·애·테** (EA 4대 핵심 아키텍처 도메인: **비**즈니스 BA, **데**이터 DA, **애**플리케이션 AA, **테**크놀로지 TA)
> - **프·정·거** (EA 수립 3대 구성요소: 방향성을 제시하는 **프**레임워크, 실제 아키텍처인 **정**보, 지속적 관리를 보장하는 **거**버넌스)
> - **파·하·웨·후·웬·와이** (Zachman 프레임워크 5W1H 질의 축: **What** 데이터, **How** 기능, **Where** 네트워크, **Who** 조직, **When** 시간, **Why** 동기)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **전사 아키텍처 (EA, Enterprise Architecture) 및 정보기술아키텍처 (ITA)** |
| **정의** | 조직의 비즈니스 목표와 정보기술 인프라를 유기적으로 정렬하기 위해, 전사의 업무·데이터·응용·기술 인프라(비·데·애·테)를 거시적으로 설계하고 관리하는 **전사 아키텍처 및 ITA 체계** |
| **키워드** | 비·데·애·테, EA 프레임워크, Zachman Matrix, TOGAF ADM, EAMS (관리도구) |
| **개념도** | **[ EA 4대 아키텍처 도메인 간의 유기적 계층화 모델 ]**<br>`[ 비즈니스 아키텍처 (BA) ] ➔ 전사 업무 프로세스, 조직도, 사업 전략 정의`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (데이터 요건 및 기능 위임)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 데이터 아키텍처 (DA) ] ◀─── (데이터 CRUD 매핑) ───▶ [ 애플리케이션 아키텍처 (AA) ]`<br>`(전사 개체, ERD, 표준화) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(컴포넌트, 서비스, 인터페이스)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└──────────────────────────┬──────────────────────────┘`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (기술 인프라 매핑)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 기술 아키텍처 (TA) ] ➔ HW, 네트워크, 보안 표준 및 아키텍처` |
| **구성요소** | 1. **EA 정보 (비데애테)**: BA·DA·AA·TA 4대 아키텍처 산출물 셋<br>2. **EA 프레임워크**: 아키텍처 수립 가이드라인·매트릭스 체계, **Zachman**·**TOGAF**가 대표 표준<br>3. **EA 거버넌스**: 아키텍처 상시검수 + 비즈니스변화 현행화(Update)를 위한 조직·프로세스·통제기구<br>4. **TOGAF ADM**: Open Group 아키텍처 개발방법론, 비전수립 → 비데애테 설계 → 기회/대안 → 이행계획 순환구조 |
| **비교** | **EA (전사 아키텍처)**<br>- 무게중심: 비즈니스목표-IT인프라 거시적 정렬 + 전사 거버넌스 통제체계<br>- 주요산출물: 전사 비즈니스모델, 정보시스템 연계맵, 표준프로토콜<br><br>**ITA (정보기술아키텍처)**<br>- 무게중심: 개별 기술인프라 표준화, HW·시스템자원 통합연동성 초점<br>- 주요산출물: 기술참조모델(TRM), 표준프로파일(SP), 시스템연동 지침 |
| **차별화** | **클라우드네이티브/MSA 전환 대응 동적 EA(Dynamic EA) 전략**<br>1. **정적 EA 한계 → 실시간 인벤토리 수집**: 수작업 문서형 EAMS는 클라우드 가변자원·MSA API엔드포인트 미반영 → CMDB·API Gateway 레지스트리 연동한 **Dynamic EA** 자동수집 구축<br>2. **Zachman Matrix 기반 입체적 검증**: 5W1H 축 × 역할관점(Planner/Owner/Designer/Builder/Implementer) 6x6 매트릭스 → 요구사항 누락·구현단계 정합성(Alignment) 교차검증<br>3. **공공정보화 EA 메타데이터 표준 연계**: 범정부 EA시스템(GEAP) 정합성 확보 → 기획단계부터 데이터·기술표준코드를 범정부 메타정의에 동기화 |
