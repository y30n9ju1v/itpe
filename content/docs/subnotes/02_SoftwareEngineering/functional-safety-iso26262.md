---
title: "기능안전성 및 ISO 26262"
date: 2026-07-11T11:14:19+09:00
tags: ["소프트웨어공학", "기능안전", "ISO26262", "ASIL", "FMEA", "FTA", "서브노트"]
draft: false
---

# 기능안전성 및 ISO 26262 서브노트

> **두음 머리에 박기 🧠**
> - **S·E·C** (ASIL 평가 3대 요소: **S**everity 심각도(S0~S3), **E**xposure 노출 가능성(E0~E4), **C**ontrollability 통제 가능성(C0~C3))
> - **에·에·하** (안전 분석 3대 기법: **F**MEA 상향식/정성적, **F**TA 하향식/정량적, **H**AZOP 가이드워드 기반)
> - **수·설·시** (기능안전 V-모델 핵심 축: 요구**수**행 ➔ 안전**설**계 ➔ 안전**시**험)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **기능 안전성 (Functional Safety) 및 자동차 국제 표준 ISO 26262** |
| **정의** | 전기·전자 시스템의 오작동 및 고장으로 유발되는 위험으로부터 안전을 확보하는 **기능 안전성** 원칙과, 이를 차량 E/E 시스템에 적용한 **자동차 기능안전 국제 표준인 ISO 26262** |
| **키워드** | ASIL (S·E·C), HARA(위해성평가), FMEA (상향식), FTA (하향식), IEC 61508, FMEDA (하드웨어 고장진단) |
| **개념도** | `[ 아이템 정의 ]` ➔ `[ 위해요소 분석 및 위해평가 (HARA) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (S, E, C 매트릭스 결합)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ ASIL 등급 도출 (QM, A, B, C, D) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 시스템 / HW / SW 안전 설계 ] ➔ [ 정성적 분석 (FMEA) & 정량적 분석 (FTA) ] ➔ [ 안전 인증 검증 ]` |
| **구성요소** | 1. **HARA (Hazard Analysis and Risk Assessment)**: 차량의 오작동 시나리오별 유해원인 분석 및 위험 평가<br>2. **ASIL 결정 기준**: S(심각도 - 상해 없음~사망), E(노출빈도 - 보통~매우 높음), C(통제성 - 제어 용이~제어 불가)<br>3. **FMEA (Failure Mode and Effects Analysis)**: 부품 고장이 시스템에 미치는 영향 분석 (상향식, 귀납적, 정성적)<br>4. **FTA (Fault Tree Analysis)**: 최상위 장애 원인을 하위 결함 조합으로 트리 분석 (하향식, 연역적, 정량/정성적)<br>5. **FMEDA**: HW 무작위 고장률 통제를 위해 SPFM(단일점고장율), LFM(잠재고장율) 등을 산정하는 분석법 |
| **비교** | **IEC 61508 (전 산업 표준)**<br>- **대상**: 전 산업군의 전기/전자/프로그래밍 가능한 안전 관련 시스템<br>- **안전 지표**: SIL (Safety Integrity Level) 1 ~ 4 등급<br><br>**ISO 26262 (자동차 특화)**<br>- **대상**: 3.5톤 이하 양산 여객 차량에 탑재되는 E/E (전기/전자) 시스템<br>- **안전 지표**: ASIL (Automotive SIL) A, B, C, D 등급 (D가 최고 안전 요구) |
| **차별화** | **ASIL D 최고 안전 등급 만족을 위한 설계 및 검증 실무 전략**<br>1. **SW 아키텍처 안전 제어 기법 적용**: 메모리 영역 보호(MPU), 데이터 커럽션 방지(CRC), 워치독(Watchdog) 상호 감시 및 시스템 리던던시(Redundancy) 이중화 구조 강제화.<br>2. **ASIL D SW 검증 의무화**: 정적 분석을 통한 코딩 규칙(MISRA-C) 준수율 100% 확보, 동적 분석 시 결정적 제어 흐름 입증을 위한 **MCDC(변경조건/결정) 커버리지 100%** 달성 필수.<br>3. **하드웨어 아키텍처 정량적 평가지표 만족**: FMEDA를 통해 단일점 고장률(SPFM) 99% 이상, 다중점 잠재 고장률(LFM) 90% 이상을 입증하여 부품 안전 무결성 증명. |
