---
title: "가설 검정 및 중심극한정리"
date: 2026-07-11T11:16:54+09:00
tags: ["정보전략", "통계학", "중심극한정리", "대수의법칙", "가설검정", "Pvalue", "Ztest", "Ttest", "서브노트"]
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
| **정의** | 표본 크기가 충분히 크면 모집단 분포와 무관하게 표본평균들의 분포가 정규분포를 따른다는 **중심극한정리**와, 표본 통계량(Z, T값)을 유의수준 및 P-value와 비교하여 가설을 판정하는 **통계적 가설 검정 기술** |
| **키워드** | 중심극한정리(CLT), 대수의 법칙(LLN), 1종/2종 오류 ($\alpha, \beta$), P-value, Z-검정 vs T-검정 |
| **개념도** | `[ 모집단 (분포 무관, 평균 μ, 분산 σ²) ] ── (표본 추출: n ≥ 30) ──➔ [ 표본평균 X̄ 들의 분포 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (CLT에 의해 정규분포화)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 표본평균 X̄ ~ N(μ, σ²/n) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`[ 가설설정 (H0, H1) ] ➔ [ 유의수준(α) 설정 ] ➔ [ 검정통계량(Z, t) 계산 ] ➔ [ 임계값/P-value 비교 판정 ]` |
| **구성요소** | 1. **대수의 법칙 (LLN)**: 표본의 크기 $n$이 커질수록 표본 평균 $\bar{X}$가 모평균 $\mu$에 수렴한다는 대수적 현상<br>2. **중심극한정리 (CLT)**: 임의의 모집단에서 추출한 표본평균들의 분포가 정규분포 $N(\mu, \sigma^2/n)$를 따름<br>3. **귀무가설 ($H_0$) / 대립가설 ($H_1$)**: 기각 목적의 기본 가설($H_0$) 및 증명하고자 하는 새로운 가설($H_1$)<br>4. **1종 오류 ($\alpha$)**: 귀무가설이 실제로 참인데 잘못 기각하여 오류를 범할 확률 (생산자 위험, 유의수준)<br>5. **2종 오류 ($\beta$)**: 귀무가설이 실제로 거짓인데 기각하지 못하고 채택할 확률 (소비자 위험, $1-\beta$는 검정력) |
| **비교** | **Z-검정 (Z-test)**<br>- **전제**: 모집단의 표준편차($\sigma$)를 알고 있거나 표본 크기가 충분히 큰 경우 ($n \ge 30$)<br>- **분포**: 표준정규분포 (Z-분포) 활용<br><br>**T-검정 (T-test)**<br>- **전제**: 모집단의 표준편차를 모르고 표본의 크기가 작은 경우 ($n < 30$)<br>- **분포**: t-분포 (자유도 $n-1$ 반영, 정규분포보다 꼬리가 두꺼운 구조) 활용 |
| **차별화** | **빅데이터 A/B 테스팅 및 공정 품질 관리에서의 p-value 한계와 실무 통제 방안**<br>1. **샘플 사이즈 비대화에 따른 p-value 왜곡 방지**: 데이터 모수가 수만~수백만 건으로 늘어나는 IT 서비스 A/B 테스트 환경에서는 미세한 차이도 p-value가 0에 수렴하여 대립가설이 채택되므로, 통계적 유의성 외에 비즈니스적 가치 크기를 진단하는 **효과 크기 (Effect Size - Cohen's d)** 지표를 반드시 병행 평가.<br>2. **1종 오류와 2종 오류의 도메인 특화 통제**: 신약 임상이나 공장 출하 불량 검정 등은 1종 오류(부작용 있는 약을 허가)를 극단적으로 막기 위해 유의수준($\alpha$)을 $1\%$ 이하로 설정하고, 반면 보안 관제 이상 탐지(FDS) 등은 미탐지를 막기 위해 2종 오류($\beta$) 최소화(즉, 검정력 향상)를 목표로 임계치 튜닝.<br>3. **다중 가설 검정 시 본페로니 교정(Bonferroni Correction) 적용**: 여러 개(M개)의 지표를 동시에 검정할 때 1종 오류 발생 확률이 곱으로 증가하는 다중 비교 문제를 해결하기 위해, 개별 검정의 유의수준을 $\alpha/M$로 하향 조정하여 오탐 차단. |
