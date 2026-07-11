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
| **구성요소** | 1. **EA 정보 (비데애테)**: 비즈니스 아키텍처, 데이터 아키텍처, 애플리케이션 아키텍처, 기술 아키텍처의 산출물 셋<br>2. **EA 프레임워크**: 아키텍처 수립 가이드라인 및 매트릭스 체계. **Zachman 프레임워크**와 **TOGAF**가 대표적 표준<br>3. **EA 거버넌스**: 아키텍처를 상시 검수하고 비즈니스 변화에 맞춰 현행화(Update)하기 위한 조직, 프로세스, 통제 기구<br>4. **TOGAF ADM**: Open Group의 아키텍처 개발 방법론. 비전수립 ➔ 비·데·애·테 설계 ➔ 기회/대안 ➔ 이행계획 순환 구조 |
| **비교** | **EA (전사 아키텍처)**<br>- **무게 중심**: 비즈니스 목표와 IT 인프라의 거시적 정렬 및 전사 거버넌스 통제 체계 정립<br>- **주요 산출물**: 전사 비즈니스 모델, 정보시스템 연계 맵, 표준 프로토콜<br><br>**ITA (정보기술아키텍처)**<br>- **무게 중심**: 개별 기술 인프라의 표준화, 하드웨어 및 시스템 자원의 통합 연동성에 초점<br>- **주요 산출물**: 기술참조모델 (TRM), 표준프로파일 (SP), 시스템 연동 지침 |
| **차별화** | **클라우드 네이티브 및 MSA 전환 환경에 대응하는 동적 EA(Dynamic EA) 실무 적용 전략**<br>1. **정적 EA의 한계와 실시간 인벤토리 수집**: 과거의 수작업 문서/도구 중심 EA 관리(EAMS)는 수시로 가동/중단되는 클라우드 가상 자원이나 MSA의 수많은 API 엔드포인트를 반영하지 못함. 이를 보완하기 위해 클라우드 리소스 구성정보 DB(CMDB) 및 API Gateway 레지스트리와 연동하여 현행 아키텍처를 자동 수집하는 **Dynamic EA** 구축.<br>2. **Zachman Matrix 기반의 입체적 아키텍처 검증**: 5W1H 질문 축과 조직 구성원의 역할 관점(Planner, Owner, Designer, Builder, Implementer)의 6x6 매트릭스를 결합하여, 사업 기획 단계의 요구사항 누락이나 물리 구현 단계의 아키텍처적 일치성(Alignment)을 빈틈없이 교차 검증.<br>3. **공공 정보화 사업의 EA 메타 데이터 표준 연계**: 범정부 EA 시스템(GEAP)과의 표준 정합성을 확보하기 위해, 정보화 기획 단계부터 데이터 정보 및 기술 제품 표준 코드를 범정부 메타 정의에 맞춰 동기화 설정. |
