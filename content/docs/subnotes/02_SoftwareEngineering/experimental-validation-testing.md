---
title: "실험적 검증 기법 (A/B 테스트, Benchmark·PoC·Pilot)"
date: 2026-07-11T11:37:46+09:00
tags: ["소프트웨어공학", "SW구현시험", "AB테스팅", "벤치마크", "PoC", "파일럿테스트", "서브노트"]
draft: false
---

# 실험적 검증 기법 서브노트

> **두음 머리에 박기 🧠**
> - **가·지·샘·무·실·통·의** (A/B 테스팅 7단계: **가**설 수립, **지**표 선정, **샘**플크기 계산, **무**작위 배분, **실**험 실행, **통**계 분석, **의**사결정)
> - **벤·P·파** (단계적 검증 순서: **벤**치마크(성능비교) → **P**oC(가능성확인) → **파**일럿(실용성검증))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **A/B 테스팅과 Benchmark/PoC/Pilot Test** |
| **정의** | **A/B 테스팅**: 두 버전 무작위 노출 → 통계적 우열 검증<br>**Benchmark→PoC→Pilot**: 기술·성능·적합성 단계적 검증<br>→ 도입 전 데이터기반 리스크 절감 실험기법 (공통) |
| **키워드** | p-value, 검정력(Power), 피킹(Peeking) 문제, MVT, TPC-C 벤치마크, Go/No-Go |
| **개념도** | `[ Benchmark Test ]` ── 성능 수치 비교(TPC-C 등) ──▶ `[ 상위 후보 선정 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ PoC ]` ── 핵심 기능 프로토타입(Go/No-Go) ──▶ `[ 기술 실현 가능성 확인 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ Pilot Test ]` ── 실제 환경 소규모 배포 + `[ A/B 테스트 ]`(무작위 배분·통계검정) ──▶ `[ 전사 확대 결정 ]` |
| **구성요소** | 1. **A/B 7단계**: 가설수립→지표선정→샘플크기계산→무작위배분→실험실행→통계분석(p-value)→의사결정<br>2. **A/B 주의사항**: 피킹문제(조기종료 위양성), 신기효과, 샘플오염(SUTVA위반), 다중검정문제<br>3. **Benchmark**: 표준환경 성능수치·순위 비교 (예: TPC-C, SPECrate)<br>4. **PoC**: 격리개발환경 핵심기능 프로토타입 → Go/No-Go 결정<br>5. **Pilot**: 실프로덕션 일부적용 → 확장가능성 판단 |
| **비교** | **A/B 테스팅**<br>- 목적: 두 대안 중 통계적 우수안 선택<br>- 시점: 운영중 지속반복 실험<br><br>**Benchmark→PoC→Pilot**<br>- 목적: 도입여부 자체 단계적 리스크축소<br>- 시점: 도입전 1회성 순차검증 |
| **차별화** | **통합 검증 파이프라인 설계 (예: AI 챗봇 도입)**<br>1. **단계적 리스크저감**: Benchmark로 LLM후보 속도·정확도·비용 비교→상위선별, PoC로 핵심기능 2주내 실현가능성 검증, Pilot로 특정채널 1개월 실배포·반응확인<br>2. **Pilot+A/B 결합**: Pilot 대상군 재차 A/B 무작위분할 → 전환율·만족도 통계검증 → 전사확대 의사결정 객관화<br>3. **가드레일 지표 병행**: A/B 주지표 외 오류율·응답지연 등 병행모니터링 → Pilot 부작용 조기탐지 |
