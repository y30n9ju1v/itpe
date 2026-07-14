---
title: "가설 검정 및 중심극한정리"
date: 2026-07-11T11:16:54+09:00
tags: ["정보전략", "통계학", "중심극한정리", "대수의법칙", "가설검정", "Pvalue", "Ztest", "Ttest", "ANOVA", "CDA", "EDA", "서브노트"]
draft: false
---

# 가설 검정 및 중심극한정리 서브노트

> **두음 머리에 박기 🧠**
> - **참·기·일 / 거짓·채·이** (통계적 가설 검정 오류: 귀무가설이 **참**인데 **기**각하면 **1**종 오류 / 귀무가설이 **거짓**인데 **채**택하면 **2**종 오류)
> - **설·수·통·판** (가설검정 4단계 절차: 가설 **설**정 ➔ 유의수준 **수**립 ➔ 검정**통**계량 계산 ➔ 의사결정 **판**정)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **중심극한정리 (CLT) 및 통계적 가설 검정 (Hypothesis Testing)** |
| **정의** | 표본크기 충분 시 모집단 분포 무관 표본평균 분포가 정규분포를 따르는 **중심극한정리**와, 표본통계량(Z,T)을 유의수준·P-value와 비교판정하는 **통계적 가설검정 기술** |
| **키워드** | 중심극한정리(CLT), 대수의 법칙(LLN), 1종/2종 오류 ($\alpha, \beta$), P-value, Z-검정 vs T-검정 vs ANOVA, CDA/EDA |
| **개념도** | `[ 모집단 (분포 무관, 평균 μ, 분산 σ²) ] ── (표본 추출: n ≥ 30) ──➔ [ 표본평균 X̄ 들의 분포 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (CLT에 의해 정규분포화)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 표본평균 X̄ ~ N(μ, σ²/n) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`[ 가설설정 (H0, H1) ] ➔ [ 유의수준(α) 설정 ] ➔ [ 검정통계량(Z, t) 계산 ] ➔ [ 임계값/P-value 비교 판정 ]` |
| **구성요소** | 1. **대수의 법칙 (LLN)**: $n$ 증가 → 표본평균 $\bar{X}$가 모평균 $\mu$에 수렴하는 대수적 현상<br>2. **중심극한정리 (CLT)**: 모집단 무관 표본평균 분포 → 정규분포 $N(\mu, \sigma^2/n)$ 수렴<br>3. **귀무가설($H_0$)/대립가설($H_1$)**: 기각목적 기본가설($H_0$) vs 증명대상 새가설($H_1$)<br>4. **1종 오류 ($\alpha$)**: $H_0$ 참인데 잘못기각 (생산자위험, 유의수준)<br>5. **2종 오류 ($\beta$)**: $H_0$ 거짓인데 채택 (소비자위험, $1-\beta$=검정력) |
| **비교** | **Z-검정 (Z-test)**<br>- 전제: 모집단 표준편차($\sigma$) 기지 또는 표본크기 충분 ($n \ge 30$)<br>- 분포: 표준정규분포(Z-분포) 활용<br><br>**T-검정 (T-test)**<br>- 전제: 모집단 표준편차 미지 + 표본크기 작음 ($n < 30$)<br>- 분포: t-분포(자유도 $n-1$, 정규분포보다 꼬리 두꺼움) 활용<br><br>**T-검정 vs ANOVA (집단수별 평균차이 검정)**<br>- T-검정: 2개 집단 평균비교, 독립/대응표본 구분, 검정통계량 t값<br>- ANOVA(분산분석): 3개↑ 집단 평균비교, 검정통계량 F값(집단간/집단내 분산), 유의 시 사후검정(Multiple Comparison) 필요<br>- X²검정(카이제곱): 범주형 데이터 적합도·독립성 검정 |
| **차별화** | **빅데이터 A/B 테스팅 및 공정 품질관리 p-value 한계와 실무 통제 방안**<br>1. **샘플사이즈 비대화 p-value 왜곡 방지**: 수만~수백만건 A/B테스트 → 미세차이도 p-value 0 수렴, 대립가설 채택 → 비즈니스 가치크기 진단용 **효과크기(Effect Size, Cohen's d)** 병행평가 필수<br>2. **1종·2종 오류 도메인별 통제**: 신약임상·불량검정은 1종오류(부작용약 허가) 억제 위해 $\alpha \le 1\%$, 이상탐지(FDS)는 미탐지 방지 위해 2종오류($\beta$) 최소화(검정력↑) 목표로 임계치 튜닝<br>3. **다중가설 검정 시 본페로니 교정**: M개 지표 동시검정 → 1종오류 확률 곱증가 → 개별 유의수준 $\alpha/M$ 하향조정 → 오탐차단<br>4. **확증적분석(CDA)·탐색적분석(EDA) 병행**: CDA(가설검정→수집→분석→검증, 연역적)=요인구조 확증용, EDA(수집→시각화→패턴도출→인사이트, 귀납적)=신규패턴 발견용. 가트너 성숙도모델(설명→진단→예측→처방)에서 EDA로 가설발굴 후 CDA 검증이 실무표준 |
