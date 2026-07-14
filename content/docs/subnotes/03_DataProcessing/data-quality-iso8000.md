---
title: "데이터 품질관리 및 ISO 8000"
date: 2026-07-11T11:16:54+09:00
tags: ["자료처리", "데이터베이스", "데이터품질", "ISO8000", "DQC", "옵저버빌리티", "서브노트"]
draft: false
---

# 데이터 품질관리 및 ISO 8000 서브노트

> **두음 머리에 박기 🧠**
> - **유·일·정·유·일·접** (데이터 값 품질 6대 차원: **유**효성, **일**관성, **정**확성, **유**일성, **일**치성(적시성), **접**근성)
> - **구·의·적** (ISO 8000 데이터 품질 3대 만족 요건: **구**문 Syntax, **의**미론 Semantics, **적**합성 Conformance)
> - **준·진·평·개** (데이터 품질진단 4단계: **준**비 ➔ **진**단(프로파일링·규칙검증) ➔ **평**가(점수산출·원인분석) ➔ **개**선(정제·거버넌스))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **데이터 품질 관리 체계 (Data Quality Management) 및 국제 표준 ISO 8000** |
| **정의** | 데이터 자산 신뢰성·정합성 유지 위한 **품질관리 활동** + 비즈니스 거버넌스 체계, 데이터·프로세스 품질 평가 **국제표준 ISO 8000** |
| **키워드** | 품질 차원(유·일·정·유·일·접), ISO 8000 (구·의·적), 데이터 프로파일링, DQC-V / DQC-M, 데이터 옵저버빌리티 |
| **개념도** | `[ 비즈니스 데이터 요건 ]` ➔ `[ 데이터 표준 관리 (단어, 용어, 도메인) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (품질 진단 룰셋 정의)`<br>`[ 데이터 프로파일링 (정적 진단) ] ── (수집/가공 감시) ──➔ [ 데이터 옵저버빌리티 (동적 감시) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (오류 정화 배포)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 데이터 가치 증대 및 신뢰성 확보 ]` |
| **구성요소** | 1. **데이터 품질 차원 (유·일·정·유·일·접)**: 유효성·일관성·정확성·유일성·일치성·접근성 지표<br>2. **데이터 프로파일링**: 컬럼 분포·결측치·형식오류 등 SQL 분석기법<br>3. **ISO 8000 표준 (Part 110)**: 기계가독성(구문)·데이터딕셔너리 정합성(의미)·스키마 요건충족(적합성)<br>4. **데이터 옵저버빌리티**: Lineage·스키마변경·Freshness·볼륨변화 실시간 관측<br>5. **품질진단 절차 (준·진·평·개)**: 준비(범위·지표정의)→진단(프로파일링·규칙·참조무결성)→평가(차원별 점수산출·오류유형 분류·RCA)→개선(단기정제/중기프로세스개선/장기거버넌스)<br>6. **데이터 마이그레이션 품질 검증**: 원천프로파일링→ETL→검증테스트(Count·Hash·Sampling 비교) → 무결성(Integrity)+정합성(Consistency) 확보 |
| **비교** | **데이터 값 진단 (Value, DQC-V)**<br>- **초점**: 실제 DB 테이블 데이터 진단·검수<br>- **기법**: 프로파일링, 규칙검증, 도메인범위 진단<br><br>**데이터 관리 프로세스 진단 (Process, DQC-M)**<br>- **초점**: 조직적 데이터관리 절차·성숙도 진단<br>- **기법**: 거버넌스 성숙도평가, 표준관리체계 감사 |
| **차별화** | **생성형 AI 학습데이터 품질 및 공공데이터 정합성 확보 거버넌스 전략**<br>1. **비정형 AI 학습데이터 다차원 품질검증**: 정형테이블 위주 탈피 → 텍스트 편향성(Bias), 이미지-텍스트 레이블매칭 무결성, 증강데이터 노이즈 정량평가 체계 도입<br>2. **옵저버빌리티로 데이터 늪(Data Swamp) 방지**: 레이크 내 적재데이터 쓰임새·종속성(Lineage) 실시간 관측 → 방치자원 조기폐기 정책<br>3. **공공데이터 품질인증(행안부) 메타데이터 표준 정의**: 행정표준코드 준수, 도메인규칙 사전수립, MDMS 연동 → 데이터값 오류율 0.01% 이하 관리 |
