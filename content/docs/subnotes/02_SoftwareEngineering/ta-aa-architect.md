---
title: "TA와 AA (기술 아키텍트 vs 애플리케이션 아키텍트)"
date: 2026-07-11T11:37:46+09:00
tags: ["소프트웨어공학", "SW아키텍처", "TA", "AA", "클라우드네이티브", "서브노트"]
draft: false
---

# TA와 AA 서브노트

> **두음 머리에 박기 🧠**
> - **인·플·네·보** (TA 관심 범위: **인**프라, **플**랫폼, **네**트워크, **보**안)
> - **애·API·데** (AA 관심 범위: **애**플리케이션 구조, **API**, **데**이터 흐름)
> - **A·A·통·공** (TA·AA 협업 방안: **A**RB 아키텍처 리뷰 보드, **A**DR 결정기록, **통**합 설계 워크숍, **공**통 표준 수립)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **TA(Technical Architect)와 AA(Application Architect)** |
| **정의** | **TA**는 인프라·플랫폼·네트워크·보안 등 시스템 전반의 기술 아키텍처를 설계하는 역할이며, **AA**는 비즈니스 요구사항을 소프트웨어 구조(MSA, API, 데이터 흐름)로 변환하는 역할로, 클라우드 네이티브 전환 프로젝트에서는 두 역할의 경계가 모호해져 협업이 핵심 성공 요인이 된다 |
| **키워드** | 인프라 아키텍처, 애플리케이션 아키텍처, K8s/IaC, MSA/DDD, ARB, ADR |
| **개념도** | `[ TA ]` ── 인프라·네트워크·보안 설계(K8s, Istio, Terraform) ──▶ `[ 클라우드 네이티브 플랫폼 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (ARB/ADR 공동 설계 검토)`<br>`[ AA ]` ── 애플리케이션 구조·API·데이터 설계(MSA, DDD) ──▶ `[ 비즈니스 기능 구현 ]` |
| **구성요소** | 1. **TA 산출물**: 인프라 아키텍처, 네트워크 설계서, 보안 아키텍처<br>2. **AA 산출물**: 시스템 아키텍처, 컴포넌트 설계서, API 명세<br>3. **협업 문제 유형**: 스케일링 정책과 상태 관리 충돌, 동기/비동기 통신 불일치, 보안 정책·API 설계 미정합<br>4. **협업 방안**: 공동 ARB(아키텍처 리뷰 보드), ADR(결정 기록), 통합 설계 워크숍, 공통 표준(API/로깅/보안) |
| **비교** | **TA (Technical Architect)**<br>- **관심 기술**: K8s, 네트워크, IaC, CI/CD 파이프라인<br>- **사용자 관점**: 운영팀, DevOps<br><br>**AA (Application Architect)**<br>- **관심 기술**: MSA, DDD, 디자인 패턴, 프레임워크<br>- **사용자 관점**: 개발팀, 비즈니스 분석가 |
| **차별화** | **클라우드 네이티브 전환 시 TA·AA 정합성 확보 전략**<br>1. **ARB를 통한 상시 아키텍처 정합성 검증**: 스프린트 초기 TA·AA 공동 설계 세션을 운영하여 인프라 스케일링 정책과 애플리케이션 상태 관리 방식(Stateless 설계)을 사전 정합.<br>2. **ADR 문서화로 결정 추적성 확보**: 서비스 간 통신 방식(동기 REST vs 비동기 메시징) 결정 근거를 ADR로 남겨 TA·AA 간 재작업 방지.<br>3. **공통 표준 선(先)수립**: API Gateway 표준, 로깅/모니터링 표준, 보안 요구사항(mTLS 등)을 TA·AA 합의로 선행 정의하여 개별 설계 시 충돌 원천 차단. |
