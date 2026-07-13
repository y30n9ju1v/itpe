---
title: "데이터마이닝 방법론: CRISP-DM과 SEMMA"
date: 2026-07-13T15:35:09+09:00
tags: ["데이터처리", "데이터마이닝", "CRISP-DM", "SEMMA", "방법론", "서브노트"]
draft: false
---

# 데이터마이닝 방법론: CRISP-DM과 SEMMA 서브노트

> **두음 머리에 박기 🧠**
> - **S·E·M·M·A** (SEMMA 5단계: **S**ample, **E**xplore, **M**odify, **M**odel, **A**ssess)
> - **비·데·데·모·평·적** (CRISP-DM 6단계: **비**즈니스 이해, **데**이터 이해, **데**이터 준비, **모**형화, **평**가, **적**용)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **데이터마이닝 방법론: SEMMA(Sample, Explore, Modify, Model, Assess)와 CRISP-DM(Cross-industry Standard Process for Data Mining)** |
| **정의** | 대규모 데이터로부터 숨겨진 패턴과 정보를 찾아내는 데이터마이닝 과정을 표준화한 절차 모델로, SAS가 개발한 5단계 기술 중심 방법론 SEMMA와 유럽 컨소시엄(SPSS, NCR 등)이 개발한 4레벨·6단계 비즈니스 중심 방법론 CRISP-DM이 대표적 |
| **키워드** | SEMMA, CRISP-DM, 계층적 프로세스 모델, 비즈니스 이해, SAS Enterprise Miner, SPSS Modeler |
| **개념도** | `[SEMMA]` Sample(추출)→Explore(탐색)→Modify(변환)→Model(모델링)→Assess(평가)<br>`[CRISP-DM]` 비즈니스이해→데이터이해→데이터준비→모형화→평가→적용 ⟲(순환·반복) |
| **구성요소** | 1. **SEMMA - Sample**: 통계적/조건 추출로 분석 데이터 생성, 비용 절감<br>2. **SEMMA - Explore**: 기초 통계·클러스터링으로 데이터 탐색·오류 검색<br>3. **SEMMA - Modify**: 수량화·표준화·그룹화로 데이터 변환<br>4. **SEMMA - Model**: 뉴럴네트워크·결정트리 등으로 모델 구축<br>5. **SEMMA - Assess**: 피드백 기반 모델 평가·비교<br>6. **CRISP-DM 6단계**: 비즈니스 이해(요구사항 파악)→데이터 이해(수집·품질 정의)→데이터 준비(전처리)→모형화(기법 선택)→평가(최적 모델 선정)→적용(고객 제시·배포) |
| **비교** | **SEMMA**<br>- SAS Enterprise Miner 활용, 5단계 순차 프로세스<br>- 개발자·기술적 관점 집중, 비즈니스 이해 단계 부재<br>- 데이터 마이닝 기술 작업에 특화<br><br>**CRISP-DM**<br>- SPSS Modeler 활용, 4레벨·6단계 계층적 프로세스<br>- 비즈니스 문제 인식과 상황을 고려해 결과 해석에 집중<br>- Business Understanding·Deployment 단계로 비즈니스-기술 연결 |
| **차별화** | **방법론 선정 및 실무 적용 전략** <br>1. **선정 기준**: 비즈니스 목표 정의와 실행계획 수립까지 필요하면 CRISP-DM, 이미 목표가 명확하고 기술적 모델링에 집중할 때는 SEMMA가 효율적<br>2. **순환적 적용**: 두 방법론 모두 단방향이 아닌 반복·순환 프로세스이므로, 평가 단계 결과를 데이터 준비/탐색 단계로 피드백하여 모델 정교화<br>3. **하이브리드 활용**: 실무에서는 CRISP-DM의 비즈니스 이해 단계로 목표를 설정한 뒤 SEMMA의 세부 기술 단계(Modify·Model)를 결합해 적용하는 사례가 많음 |
