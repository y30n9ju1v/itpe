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
| **정의** | E/E시스템 오작동·고장 위험 → 안전확보 **기능안전성** 원칙 + 이를 차량 E/E에 적용한 자동차 국제표준 **ISO 26262** |
| **키워드** | ASIL (S·E·C), HARA(위해성평가), FMEA (상향식), FTA (하향식), IEC 61508, FMEDA (하드웨어 고장진단) |
| **개념도** | `[ 아이템 정의 ]` ➔ `[ 위해요소 분석 및 위해평가 (HARA) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (S, E, C 매트릭스 결합)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ ASIL 등급 도출 (QM, A, B, C, D) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 시스템 / HW / SW 안전 설계 ] ➔ [ 정성적 분석 (FMEA) & 정량적 분석 (FTA) ] ➔ [ 안전 인증 검증 ]` |
| **구성요소** | 1. **HARA**: 차량 오작동 시나리오별 유해원인 분석·위험평가<br>2. **ASIL 결정기준**: S(심각도, 상해없음~사망), E(노출빈도, 보통~매우높음), C(통제성, 제어용이~불가)<br>3. **FMEA**: 부품고장→시스템영향 분석 (상향식·귀납적·정성적)<br>4. **FTA**: 최상위 장애원인→하위결함 조합 트리분석 (하향식·연역적·정량/정성적)<br>5. **FMEDA**: HW 무작위고장률 통제 → SPFM(단일점고장율)·LFM(잠재고장율) 산정 |
| **비교** | **IEC 61508 (전산업 표준)**<br>- 대상: 전산업 전기/전자/PE 안전관련시스템<br>- 지표: SIL 1~4등급<br><br>**ISO 26262 (자동차 특화)**<br>- 대상: 3.5톤이하 양산차 E/E시스템<br>- 지표: ASIL A~D등급 (D 최고) |
| **차별화** | **ASIL D 최고등급 만족 설계·검증 전략**<br>1. **SW아키텍처 안전제어**: MPU(메모리보호), CRC(데이터커럽션방지), 워치독 상호감시, Redundancy 이중화 강제<br>2. **ASIL D SW검증 의무화**: MISRA-C 준수율 100%(정적분석), **MCDC 커버리지 100%**(동적분석, 결정적 제어흐름 입증)<br>3. **HW 정량평가지표**: FMEDA로 SPFM 99%이상·LFM 90%이상 입증 → 부품안전 무결성 |
