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

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **Lehman의 소프트웨어 진화 법칙, ISO/IEC 14764 및 3R 기술** |
| **정의** | 소프트웨어 위기를 방지하고 자산의 수명을 연장하기 위해 **진화 법칙**과 **표준 유지보수 절차(수·예·적·비)**를 준수하고, 레거시 자산을 분석/개선하는 **3R(역·재·재) 공학 기술** |
| **키워드** | Lehman 진화 법칙, ISO/IEC 14764(수·예·적·비), 역공학, 재공학, 재개발, 리팩토링, Strangler Fig 패턴 |
| **개념도** | `[ 레거시 소스코드 ]` ── (디컴파일/파싱) ──➔ `[ 설계서 / ERD 도출 ]` (역공학 Reverse)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (구조 변경 / 리팩토링)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼ (기능 혁신 및 재구현)`<br>`[ 개량된 고품질 SW ]` (재공학 Reengineering)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 신규 플랫폼 / 신 시스템 ]` (재개발)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└───────────────── (종합적 Legacy 수명 연장 전략) ────────────────┘` |
| **구성요소** | 1. **Lehman의 법칙**: 계속 변경(변경 필수), 복잡도 증가(가독성 저하), 자기 조절(일정 패턴 유지) 등<br>2. **유지보수 유형 (수·예·적·비)**: 수정(오류 해결), 예방(품질 향상), 적응(환경 변화 대응), 비완/완전(기능 개선)<br>3. **역공학 (Reverse Engineering)**: 가동 중인 레거시 분석을 통해 상위 수준의 논리적 설계 데이터 추출<br>4. **재공학 (Reengineering)**: 외형적 기능 변경 없이 내부 구조를 리팩토링 및 튜닝하여 유지보수성 향상<br>5. **재개발 (Reconstruction)**: 레거시 자산을 모두 폐기하고 현대식 아키텍처와 기술로 시스템 전면 재구축 |
| **비교** | **리팩토링 (Refactoring)**<br>- **수행 단위**: 개발 환경 내 소스코드 레벨 (클래스, 메서드 단위)<br>- **초점**: 가독성 향상, 기술적 부채 제거, 중복 코드 최소화 (기능 유지)<br><br>**재공학 (Reengineering)**<br>- **수행 단위**: 아키텍처 및 시스템 전체 레벨 (도구, 미들웨어 변경 포함)<br>- **초점**: 시스템 수명 연장, 노후화 방지, 운영 생산성 극대화 (기능 유지) |
| **차별화** | **빅뱅 재개발 한계 극복을 위한 Strangler Fig (교사형 무화과나무) 패턴 적용 전략**<br>1. **점진적 교체 모델**: 대규모 레거시 시스템을 한 번에 바꾸는 위험을 피해, 신규 모듈(MSA)을 외곽에 만들고 API Gateway 라우팅 조작을 통해 레거시 API를 하나씩 이관하여 노후 시스템을 점진적으로 소멸.<br>2. **소나큐브(SonarQube) 연계 기술적 부채(Technical Debt) 통제**: 개발 가이드라인과 정적 분석 룰셋을 CI/CD 빌드에 병합하여 가독성과 복잡도(순환 복잡도 등) 임계치 초과 시 머지(Merge)를 반려하는 예방형 유지보수 체계화.<br>3. **자동화 회귀 테스트 세트 구축**: 역공학 및 재공학 수행 전, 레거시의 현행 동작을 검증하는 블랙박스 테스트 케이스를 자동화 툴(Selenium, JUnit)로 확보한 후 리팩토링하여 기능 미일치 장애 차단. |
