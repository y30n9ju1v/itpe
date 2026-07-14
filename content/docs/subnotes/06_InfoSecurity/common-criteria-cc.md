---
title: "CC(Common Criteria) 공통평가기준"
date: 2026-07-11T11:38:05+09:00
tags: ["보안", "CC", "공통평가기준", "EAL", "보안인증", "ISO15408", "서브노트"]
draft: false
---

# CC(Common Criteria) 공통평가기준 서브노트

> **두음 머리에 박기 🧠**
> - **1·2·3** (CC 구조 3파트: Part**1** 소개·일반모델, Part**2** 보안기능요건(**SFR**), Part**3** 보안보증요건(**SAR**))
> - **TOE·PP·ST·EAL** (CC 4대 핵심개념: 평가대상 **TOE**, 사용자관점 요건명세 **PP**, 개발자관점 요건명세 **ST**, 평가보증등급 **EAL**)
> - **1~7 상승** (EAL 등급: 1(기능테스트)~7(형식적방법) 숫자가 클수록 보증수준 상승, 4등급이 상용보안제품(방화벽·VPN) 표준선)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **CC (Common Criteria, 공통평가기준, ISO/IEC 15408)** |
| **정의** | IT 제품·시스템 보안기능 평가 국제표준 — 보안기능요건(SFR)·보안보증요건(SAR) 체계 정의 → 평가보증등급(**EAL 1~7**)으로 보안수준 인증, 상호인정협정(**CCRA**)으로 1회 평가 다국가 인정 |
| **키워드** | ISO/IEC 15408, SFR/SAR, TOE/PP/ST, EAL1~7, CCRA, ITSEC |
| **개념도** | **[ CC 평가 개념 관계도 ]**<br>`[ PP (Protection Profile) - 사용자 관점, 제품군 공통 보안요건 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 참조하여 작성`<br>`[ ST (Security Target) - 개발자 관점, 특정 TOE의 구체적 보안요건 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 대상 제품 평가`<br>`[ TOE (Target of Evaluation) - 실제 평가대상 제품/시스템 ] ──➔ 평가결과: EAL1~7 등급 부여` |
| **구성요소** | 1. **Part 1(소개·일반모델)**: CC 목적·개념·적용모델 정의<br>2. **Part 2(SFR, 보안기능요건)**: 제공해야 할 보안기능 → 클래스·계열·요소로 구조화<br>3. **Part 3(SAR, 보안보증요건)**: 보안성 신뢰수준(개발·테스팅·취약점분석 프로세스)<br>4. **TOE**: 실제 평가대상 제품/시스템<br>5. **PP**: 제품군(방화벽 등) 공통 보안요건 명세(사용자 관점)<br>6. **ST**: 특정 TOE의 구체적 보안요건 명세(개발자 관점)<br>7. **EAL 1~7**: EAL1(기능테스트, 일반SW) ~ EAL4(방법론적 설계·테스트, 상용 방화벽·VPN) ~ EAL7(형식적방법, 군사·금융 핵심시스템) |
| **비교** | **CC(Common Criteria)**<br>- 평가대상: IT 제품·시스템 자체 보안기능·설계 수준<br>- 평가결과: EAL 등급(1~7) 제품 신뢰수준, CCRA로 국가간 상호인정<br><br>**ISMS·ISMS-P**<br>- 평가대상: 조직의 정보보호 관리체계·운영 프로세스<br>- 평가결과: 인증 획득/미획득, 국내 법정의무 인증(정보통신망법) |
| **차별화** | **보안 제품 조달·개발 단계의 CC 활용 전략**<br>1. **PP 기반 요건 표준화로 조달 효율화**: 정부·공공기관 제품군별 PP 사전정의·공고 → 제조사 참조해 ST 작성·평가 → 조달 적합성 검증시간 단축<br>2. **적용환경별 목표 EAL 선정**: 일반 상용제품 EAL4(비용 대비 실효성), 군사·금융 핵심시스템 EAL5~7(준형식적·형식적 방법) — 위험도 비례 보증수준 설계<br>3. **CCRA 상호인정 활용 해외진출**: 국내 인증기관(IT보안인증사무국) CC인증 → 협정국 그대로 활용 → 재평가 없이 글로벌 조달시장 신속 진입 |
