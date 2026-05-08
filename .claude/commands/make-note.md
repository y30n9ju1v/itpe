# 기출문제 기반 제텔카스텐 노트 생성

기출문제 PDF를 분석하여 출제기준에 맞는 제텔카스텐 노트를 `content/docs/`에 생성합니다.

## 사용법

```
/make-note $ARGUMENTS
```

`$ARGUMENTS`에 기출문제 PDF 경로를 입력하세요.

예시:
- `/make-note static/resources/exam-archive/peim/138.pdf`
- `/make-note static/resources/exam-archive/pecs/138.pdf`

경로를 생략하면 `peim`의 가장 최근 회차를 자동으로 사용합니다.

---

## PEIM 출제기준 (정보관리기술사 2023-2026)

1. **정보 전략 및 관리** — 정보전략, 경영정보, AI윤리, IT감리, 통계, 프로젝트 관리
2. **소프트웨어 공학** — 개발방법론, SW분석/설계, SW구현/시험, 정보시스템 운영/유지보수, SW품질
3. **자료처리** — 자료구조론, 데이터모델링, DBMS/분산파일처리, 데이터마이닝, 데이터품질관리, 빅데이터분석
4. **컴퓨터 시스템 및 정보통신** — 운영체제, 시스템프로그래밍, 수치해석, 알고리즘, 가상화, 인프라아키텍처, 네트워크/프로토콜, 네트워크설계, 통신시스템
5. **정보보안** — 보안기술(암호화), 보안시스템, 정보보호/보안엔지니어링, 관리적보안, 디지털포렌식, 개인정보보호
6. **최신기술, 법규 및 정책** — AI/IoT/모바일/클라우드/스마트팩토리, 전자정부법/개인정보보호법/SW진흥법/데이터산업법

## PECS 출제기준 (컴퓨터시스템응용기술사 2023-2026)

1. **컴퓨터 기초이론** — 컴퓨터 설계/개발/운영/관리, 이산구조/알고리즘/자료구조
2. **하드웨어 시스템** — HW구성/설계/운영/시스템보안, 표시/입력/처리/저장/출력장치 설계, 입출력 인터페이스
3. **시스템 소프트웨어 및 응용소프트웨어** — 운영체제/시스템프로그래밍/컴파일러/임베디드, 소프트웨어공학/DBMS/데이터처리/애플리케이션, IT품질/테스트/감리/SW안전
4. **컴퓨터 통신 및 네트워크** — 통신인터페이스, 네트워크환경/프로토콜/설계/품질평가, 유무선네트워크장비
5. **시스템보안** — 보안체계 운영관리, 보안감사, 보안인증, 보안 운영관리
6. **컴퓨터 시스템 평가** — 성능평가, 국내외/산업계 표준 평가(HW/SW)
7. **법규, 정책 및 표준** — 전자정부법/개인정보보호법/SW진흥법/데이터산업법/지적재산권, 정보기술 투자/성과관리, ICT 국내외 표준
8. **최신 기술 동향** — IoT/클라우드/AI/스마트팩토리, 빅데이터 기획/저장/처리

---

## 실행 지침

### 0단계: 현재 시각 확인

노트 생성 전, 아래 명령을 실행하여 실제 현재 시각을 확인하세요.

```bash
date +"%Y-%m-%dT%H:%M:%S+09:00"
```

이 명령의 출력값을 모든 노트의 `date` 필드에 그대로 사용하세요. 추정하거나 임의로 입력하지 마세요.

### 1단계: 시험 종류 및 PDF 파일 확인

`$ARGUMENTS`에서 경로를 파악하세요.
- 경로에 `peim`이 포함되면 → PEIM 출제기준 사용
- 경로에 `pecs`이 포함되면 → PECS 출제기준 사용
- 경로가 없으면 → `static/resources/exam-archive/peim/`에서 가장 번호가 큰 파일 사용 (PEIM)

해당 PDF 파일을 읽으세요.

### 2단계: 문제 분석 및 출제기준 매핑

각 문제(교시별)를 분석하여:
- 문제의 핵심 키워드 추출
- 해당 시험(PEIM/PECS)의 출제기준 주요항목 → 세부항목으로 분류
- 기반지식이 되는 개념 목록 도출 — **문제 1개당 노트가 여러 개 나와도 됨**
  - 예) "해시함수와 Rainbow Table" 문제 → `hash-function.md`, `rainbow-table.md`, `hash-salt.md` 각각 생성
  - 개념이 충분히 독립적이라면 쪼개서 작성할 것 (제텔카스텐 원자성 원칙)
- 두 시험에 공통으로 해당하는 개념은 별도 표시

### 3단계: 노트 파일 생성

시험 종류에 따라 저장 경로를 구분하세요.
- PEIM: `content/docs/peim/{주요항목폴더}/{세부항목폴더}/{개념명}.md`
- PECS: `content/docs/pecs/{주요항목폴더}/{세부항목폴더}/{개념명}.md`
- 두 시험 공통 개념: `content/docs/common/{주요항목폴더}/{세부항목폴더}/{개념명}.md`

이미 존재하는 노트 파일이면 "참고 기출" 섹션에 회차만 추가하고 내용은 보강하세요.

**폴더 구조 (PEIM/PECS 공통)**

PEIM과 PECS 모두 아래 동일한 폴더 구조를 사용합니다. `peim/` 또는 `pecs/` 루트 아래에 같은 구조로 저장하세요. 아래 매핑표를 참고하여 올바른 폴더에 저장하세요.

```
01_InfoStrategy/
├── 01_InfoStrategy_Planning   # 정보전략, ISP/ISMP, EA
├── 02_ManagementIS            # 경영정보, 조직경영전략
├── 03_AI_Ethics               # 정보윤리, AI윤리
├── 04_IT_Audit                # IT감리
├── 05_Statistics              # 통계분석, 가설검정, 회귀모형
└── 06_ProjectManagement       # 프로젝트관리, 위험관리

02_SoftwareEngineering/
├── 01_Dev_Methodology         # 개발방법론, 애자일, 테일러링, 로우코드
├── 02_Analysis_Design         # SW아키텍처, UML, UI/UX, TA/AA
├── 03_Implementation_Testing  # 프로그래밍, 테스트, 임베디드
├── 04_Operation_Maintenance   # 리팩토링, 재공학, 역공학, 운영관리
└── 05_SW_Quality              # SW품질, IT품질보증, SW안전

03_DataProcessing/
├── 01_DataStructures          # 자료구조론
├── 02_DataModeling            # 데이터모델링, ERD, 정규화, 무결성
├── 03_DBMS_Distributed        # DBMS, 분산DB, DB분할, 마이그레이션
├── 04_DataMining              # 데이터마이닝, 머신러닝
├── 05_DataQuality             # 데이터품질, 데이터관측가능성
└── 06_BigDataAnalytics        # 빅데이터분석, 빅데이터기획

04_ComputerSystems/
├── 01_CS_Fundamentals         # 컴퓨터 설계/개발/운영, 이산구조
├── 02_HardwareSystems/
│   ├── 01_HW_Design_Operation # HW구성/설계/운영, 시스템보안구축
│   ├── 02_Devices_DeviceDriver# 입출력장치, 디바이스드라이버
│   └── 03_IO_Interface        # 입출력 인터페이스
├── 03_SystemSoftware/
│   ├── 01_OS_Embedded         # 운영체제, 시스템프로그래밍, 컴파일러, 임베디드
│   └── 02_ApplicationSW       # 응용SW, DBMS연동, 애플리케이션
├── 04_OS_Virtualization       # 가상화, 컨테이너, 클라우드인프라
├── 05_Algorithms              # 알고리즘, 수치해석, 은행가알고리즘, 메모리구조
└── 06_InfraArchitecture       # 인프라아키텍처, FTS/HA, 고가용성

05_Networks/
├── 01_Network_Protocol        # 네트워크, 프로토콜, OSI, TCP/IP, ARQ, 오류제어
├── 02_NetworkDesign           # 네트워크설계, 유무선
├── 03_CommunicationSystems    # 통신시스템, 6G, AI-Native Network
└── 04_Network_QualityEval     # 네트워크 품질평가

06_InfoSecurity/
├── 01_SecurityTech            # 암호화, 해시, 보안기술, TTPs, 프롬프트인젝션, 모델전도공격
├── 02_SecuritySystems         # 보안시스템, 공격표면, 측면이동, 랜섬웨어
├── 03_InfoProtection          # 정보보호, 보안엔지니어링
├── 04_AdminSecurity           # 관리적보안, ISMS, ISMS-P
├── 05_DigitalForensics        # 디지털포렌식
├── 06_PrivacyProtection       # 개인정보보호, PET, 안면인식
├── 07_SecurityAudit           # 보안감사
└── 08_SecurityCertification   # 보안인증

07_SystemEvaluation/
├── 01_PerformanceEvaluation   # 성능평가
└── 02_HW_SW_Standards         # HW/SW 국내외 표준

08_EmergingTech/
├── 01_AI_IoT_Cloud            # AI, IoT, 클라우드, GPU/TPU, AI RMF, ISO42001, 스마트팩토리
├── 02_BigData                 # 빅데이터 기획/저장/처리
└── 03_Regulations_Policies    # 법규·정책: 인공지능기본법, 전자정부법, 개인정보보호법 등
```

**파일명**: 영어 소문자 + 하이픈 형식. 예) `banker-algorithm.md`, `hash-function.md`

**노트 파일 형식:**

현재 시각을 `date` 필드에 RFC 3339 형식으로 기록하세요 (예: `2026-05-08T14:30:00+09:00`).

```markdown
---
title: "{개념명 (한글)}"
date: {현재시각 RFC3339, 예: 2026-05-08T14:30:00+09:00}
tags: ["{시험종류}", "{주요항목}", "{세부항목}", "키워드1", "키워드2"]
draft: false
---

## 개요

{개념의 핵심을 2-3문장으로 요약}

## 핵심 내용

{기술사 답안에 필요한 핵심 내용. 정의, 특징, 구성요소 등}

## 실무 적용 예시

{실제 현장에서 이 개념이 어떻게 적용되는지 1-2개 사례. 논술형 답안에 살을 붙이는 용도. 적용 예시가 불분명한 순수 이론 개념은 이 섹션을 생략해도 됨}

## 출제 포인트

{이 개념이 시험에서 어떤 방식으로 출제되는지. 실제 기출 문제 맥락 포함}

## 연관 개념

{관련된 다른 노트로의 링크. 반드시 content 루트 기준 전체 경로를 사용할 것. 아직 없는 노트는 텍스트로만 표기}
- [연관개념1]({{< relref "/docs/peim/{주요항목폴더}/{세부항목폴더}/파일명" >}}) — 한줄 설명
- 연관개념2 — 한줄 설명 (노트 미작성)

## 참고 기출

- {회차}회 {교시} {문제번호}번
```

### 4단계: 결과 보고

생성/수정된 노트 목록과 각 노트가 매핑된 출제기준 항목을 요약해서 보고하세요.
