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
| **정의** | 단말기정보·접속정보·거래내용 종합분석 → 이상 금융거래 실시간 탐지·차단하는 시스템, 전자금융거래법 제21조의4에 따라 은행·카드·증권·보험사 등 전자금융업자 의무 적용 |
| **키워드** | 전자금융거래법 제21조의4, 위험 점수(Risk Score), 규칙기반/ML/행동분석, 실시간 차단·추가인증, 보이스피싱·스미싱 대응 |
| **개념도** | **[ FDS 3계층 처리 구조 ]**<br>`[ 데이터 수집 계층: 단말기정보 · 접속IP/위치 · 거래패턴 · 행동분석 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 분석 엔진 계층: 규칙기반 · ML모델 · 이상치탐지 ] ─거래스코어링(위험점수부여)─➔`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 대응 계층: 실시간차단 · 추가인증(OTP/ARS) · 알림 ] ── [ 모니터링화면: 보안담당자 대시보드 ]` |
| **구성요소** | 1. **정보 수집**: 단말기 정보(OS, 브라우저), IP, 위치, 거래금액·시간, 수신계좌<br>2. **분석 엔진**: 규칙 기반 + 머신러닝 + 이상치 탐지 하이브리드<br>3. **거래 스코어링**: 각 거래에 위험 점수(Risk Score) 부여<br>4. **대응 모듈**: 임계점 초과 시 자동 차단 또는 추가 인증(OTP, ARS) 요청<br>5. **모니터링 화면**: 실시간 이상거래 현황 대시보드(보안담당자) |
| **비교** | **규칙기반(Rule-Based) 탐지**<br>- 방식: 사전정의 이상패턴 매칭 (예: 1분 내 3회 이상 결제실패)<br>- 특성: 고속 1차 필터, 신종패턴 미탐 위험<br><br>**ML/AI 기반 탐지**<br>- 방식: 비지도학습(Isolation Forest)·지도학습(Random Forest)으로 정상패턴 학습 후 이탈 시 탐지<br>- 특성: 정교한 신종사기 포착 가능, 오탐(False Positive) 관리 필요 |
| **차별화** | **AI 기반 FDS 고도화 및 오탐 최소화 실무 전략**<br>1. 3단계 하이브리드 파이프라인: 규칙기반(고속 1차필터) → ML(정밀 2차분석) → 행동분석(3차검증) → 과다차단(오탐)·신종사기 미탐 딜레마 동시 완화<br>2. 탐지방법 다변화: 통계기반(거래금액 10배초과 경보) + 위치기반(서울접속 후 5분내 뉴욕IP 결제 탐지) + 그래프분석(자금순환 계좌패턴 탐지) → 단일기법 사각지대 보완<br>3. 지속적 모델재학습·위협인텔리전스 연동: 분기별 재학습으로 신종패턴 반영, 금융보안원 공유정보 연동 → 오탐률 5%이하 관리, 전기통신금융사기 통합대응체계로 확장 |
