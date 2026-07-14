---
title: "SW 유지보수 및 3R"
date: 2026-07-11T11:14:19+09:00
tags: ["소프트웨어공학", "유지보수", "3R", "Lehman법칙", "리팩토링", "교사형무화과나무", "서브노트"]
draft: false
---

# SW 유지보수 및 3R 서브노트

> **두음 머리에 박기 🧠**
> - **수·예·적·비** (ISO/IEC 14764 유지보수 4대 유형: **수**정형, **예**방형, **적**응형, **비**완형/완전형)
> - **역·재·재** (소프트웨어 위기 극복 3R 기술: **역**공학 Reverse, **재**공학 Reengineering, **재**개발 Reconstruction)
> - **계·복·자·조·친** (Lehman의 소프트웨어 진화 5대 법칙: **계**속되는 변경, **복**잡도 증가, 자기 **조**절, **조**직적 안정성, **친**근성 유지)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **Lehman의 소프트웨어 진화 법칙, ISO/IEC 14764 및 3R 기술** |
| **정의** | 소프트웨어 위기를 방지하고 자산의 수명을 연장하기 위해 **진화 법칙**과 **표준 유지보수 절차(수·예·적·비)**를 준수하고, 레거시 자산을 분석/개선하는 **3R(역·재·재) 공학 기술** |
| **키워드** | Lehman 진화 법칙, ISO/IEC 14764(수·예·적·비), 역공학, 재공학, 재개발, 리팩토링, Strangler Fig 패턴 |
| **개념도** | `[ 레거시 소스코드 ]` ── (디컴파일/파싱) ──➔ `[ 설계서 / ERD 도출 ]` (역공학 Reverse)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (구조 변경 / 리팩토링)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼ (기능 혁신 및 재구현)`<br>`[ 개량된 고품질 SW ]` (재공학 Reengineering)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 신규 플랫폼 / 신 시스템 ]` (재개발)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└───────────────── (종합적 Legacy 수명 연장 전략) ────────────────┘` |
| **구성요소** | 1. **Lehman의 법칙**: 계속변경(변경필수), 복잡도증가(가독성저하), 자기조절(일정패턴 유지) 등<br>2. **유지보수 유형(수·예·적·비)**: 수정(오류해결), 예방(품질향상), 적응(환경변화 대응), 비완/완전(기능개선)<br>3. **역공학(Reverse Engineering)**: 가동중 레거시분석 → 상위수준 논리적설계 데이터추출<br>4. **재공학(Reengineering)**: 외형기능 변경無 → 내부구조 리팩토링·튜닝, 유지보수성 향상<br>5. **재개발(Reconstruction)**: 레거시자산 전면폐기 → 현대식 아키텍처·기술로 시스템 재구축 |
| **비교** | **리팩토링(Refactoring)**<br>- 수행단위: 소스코드 레벨(클래스·메서드)<br>- 초점: 가독성향상, 기술부채 제거, 중복코드 최소화(기능유지)<br><br>**재공학(Reengineering)**<br>- 수행단위: 아키텍처·시스템 전체(도구·미들웨어 변경 포함)<br>- 초점: 수명연장, 노후화 방지, 운영생산성 극대화(기능유지) |
| **차별화** | **빅뱅 재개발 한계 극복 → Strangler Fig(교사형무화과나무) 패턴 전략**<br>1. **점진적 교체모델**: 대규모 일괄전환 위험회피 → 신규모듈(MSA) 외곽구축, API Gateway 라우팅으로 레거시API 순차이관, 노후시스템 점진소멸<br>2. **SonarQube 연계 기술부채 통제**: 개발가이드+정적분석 룰셋 CI/CD빌드 병합 → 복잡도(순환복잡도 등) 임계치초과 시 머지반려, 예방형 유지보수 체계화<br>3. **자동화 회귀테스트 구축**: 역공학·재공학 수행前 현행동작 검증 블랙박스테스트(Selenium·JUnit) 자동확보 → 리팩토링 후 기능미일치 장애차단 |
