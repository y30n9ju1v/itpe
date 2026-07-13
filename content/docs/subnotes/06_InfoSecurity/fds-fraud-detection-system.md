---
title: "FDS(이상금융거래탐지시스템)"
date: 2026-07-12T13:24:45+09:00
tags: ["정보보안", "FDS", "이상거래탐지", "금융보안", "서브노트"]
draft: false
---

# FDS(이상금융거래탐지시스템) 서브노트

> **두음 머리에 박기 🧠**
> - **정·분·거·대·모** (FDS 5대 구성요소: **정**보수집 단말·IP·거래패턴, **분**석엔진 규칙·ML·이상치, **거**래스코어링 위험점수부여, **대**응모듈 차단·추가인증, **모**니터링화면 실시간대시보드)
> - **규·통·머·행·위·그** (FDS 6대 탐지방법: **규**칙기반, **통**계기반, **머**신러닝AI기반, **행**동분석BA, **위**치기반, **그**래프분석)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **FDS (Fraud Detection System, 이상금융거래탐지시스템)** |
| **정의** | 전자금융거래의 단말기 정보, 접속 정보, 거래내용 등을 종합적으로 분석하여 이상 금융거래를 실시간 탐지·차단하는 시스템으로, 전자금융거래법 제21조의4에 따라 은행·카드·증권·보험사 등 전자금융업자에 의무 적용됨 |
| **키워드** | 전자금융거래법 제21조의4, 위험 점수(Risk Score), 규칙기반/ML/행동분석, 실시간 차단·추가인증, 보이스피싱·스미싱 대응 |
| **개념도** | **[ FDS 3계층 처리 구조 ]**<br>`[ 데이터 수집 계층: 단말기정보 · 접속IP/위치 · 거래패턴 · 행동분석 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 분석 엔진 계층: 규칙기반 · ML모델 · 이상치탐지 ] ─거래스코어링(위험점수부여)─➔`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 대응 계층: 실시간차단 · 추가인증(OTP/ARS) · 알림 ] ── [ 모니터링화면: 보안담당자 대시보드 ]` |
| **구성요소** | 1. **정보 수집**: 단말기 정보(OS, 브라우저), IP, 위치, 거래금액·시간, 수신계좌<br>2. **분석 엔진**: 규칙 기반 + 머신러닝 + 이상치 탐지 하이브리드<br>3. **거래 스코어링**: 각 거래에 위험 점수(Risk Score) 부여<br>4. **대응 모듈**: 임계점 초과 시 자동 차단 또는 추가 인증(OTP, ARS) 요청<br>5. **모니터링 화면**: 실시간 이상거래 현황 대시보드(보안담당자) |
| **비교** | **규칙 기반(Rule-Based) 탐지**<br>- **방식**: 사전 정의된 이상 패턴 매칭(예: 1분 내 3회 이상 결제 실패)<br>- **특성**: 고속 1차 필터, 신종 패턴 미탐 위험<br><br>**ML/AI 기반 탐지**<br>- **방식**: 비지도 학습(Isolation Forest), 지도 학습(Random Forest)으로 정상 거래 패턴 학습 후 이탈 시 탐지<br>- **특성**: 정교한 신종 사기 패턴 포착 가능하나 오탐(False Positive) 관리 필요 |
| **차별화** | **AI 기반 FDS 고도화 및 오탐 최소화 실무 전략**<br>1. **3단계 하이브리드 탐지 파이프라인**: 규칙 기반(고속 1차 필터) → ML(정밀 2차 분석) → 행동분석(3차 검증)의 단계적 구조를 구성하여, 머신러닝 단독 적용 시 발생하는 과다 차단(오탐)과 신종 사기 미탐의 딜레마를 동시에 완화.<br>2. **탐지 방법 다변화**: 통계 기반(평소 거래금액 대비 10배 초과 경보), 위치 기반(서울 접속 후 5분 내 뉴욕 IP 결제 탐지), 그래프 분석(빠른 자금 순환 계좌 패턴 탐지)을 결합하여 단일 기법의 사각지대 보완.<br>3. **지속적 모델 재학습 및 위협 인텔리전스 연동**: 분기별 모델 재학습으로 신종 금융사기 패턴을 반영하고, 금융보안원 공유 위협 인텔리전스와 연동하여 오탐률을 낮은 수준(5% 이하)으로 관리하며 전기통신금융사기 통합대응 체계로 확장. |
