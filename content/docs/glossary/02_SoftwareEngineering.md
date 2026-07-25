---
bookCollapseSection: false
title: "소프트웨어 공학 용어집"
---

| 용어 | 정의 | 출처 |
| :--- | :--- | :--- |
| A/B 테스팅 | 두 버전 무작위 노출 후 통계적 우열 검증 | [실험적 검증 기법 (A/B 테스트, Benchmark·PoC·Pilot)]({{< relref "/docs/subnotes/02_SoftwareEngineering/experimental-validation-testing" >}}) |
| ADR (Architecture Decision Record) | 아키텍처 결정 근거를 기록해 추적성 확보 | [TA와 AA (기술 아키텍트 vs 애플리케이션 아키텍트)]({{< relref "/docs/subnotes/02_SoftwareEngineering/ta-aa-architect" >}}) |
| API Gateway | MSA 단일진입점, 인증·라우팅·속도제한 처리 | [MSA 아키텍처]({{< relref "/docs/subnotes/02_SoftwareEngineering/msa-architecture" >}}) |
| ARB (Architecture Review Board) | TA·AA 공동 아키텍처 검토 협업체계 | [TA와 AA (기술 아키텍트 vs 애플리케이션 아키텍트)]({{< relref "/docs/subnotes/02_SoftwareEngineering/ta-aa-architect" >}}) |
| ASIL | 심각도·노출·통제성 기반 자동차 기능안전 등급(A~D) | [기능안전성 및 ISO 26262]({{< relref "/docs/subnotes/02_SoftwareEngineering/functional-safety-iso26262" >}}) |
| ATAM | 품질속성 트레이드오프 분석 아키텍처 평가기법 | [소프트웨어 아키텍처 스타일]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-architecture-styles" >}}) |
| Blue-Green 배포 | 신구버전 동시기동 후 로드밸런서로 트래픽 전환 | [배포 전략 및 무중단 배포]({{< relref "/docs/subnotes/02_SoftwareEngineering/deployment-strategy" >}}) |
| Boy Scout Rule | 코드 발견 시보다 더 깨끗하게 두는 리팩토링 원칙 | [소프트웨어 기술 부채(SW Technical Debt)]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-technical-debt" >}}) |
| Burn-down/up Chart | 스프린트 잔여/누적 포인트로 진행률 가시화 | [애자일 규모/일정 산정 기법]({{< relref "/docs/subnotes/02_SoftwareEngineering/agile-estimation" >}}) |
| CALMS | DevOps 5대 가치(문화·자동화·린·측정·공유) | [데브옵스, SRE, 플랫폼 엔지니어링]({{< relref "/docs/subnotes/02_SoftwareEngineering/devops-sre-platform" >}}) |
| Canary 배포 | 신버전에 소수 트래픽 선배포 후 점진 확대 | [배포 전략 및 무중단 배포]({{< relref "/docs/subnotes/02_SoftwareEngineering/deployment-strategy" >}}) |
| CBAM | ATAM에 경제적 비용·효과(ROI) 분석 추가한 평가모델 | [소프트웨어 아키텍처 스타일]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-architecture-styles" >}}) |
| CBD | 독립 컴포넌트 저장·재조합 기반 개발방법론 | [소프트웨어 개발방법론의 발전과정]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-development-methodology-evolution" >}}) |
| CCB | 형상 변경요청 심의·승인 의사결정기구 | [형상관리와 기준선]({{< relref "/docs/subnotes/02_SoftwareEngineering/configuration-management-baseline" >}}) |
| Circuit Breaker | 장애서비스 호출차단 후 Fallback으로 전파방지 | [MSA 아키텍처]({{< relref "/docs/subnotes/02_SoftwareEngineering/msa-architecture" >}}) |
| CMMI | 조직 SW 프로세스 성숙도 국제 평가모델 | [소프트웨어 프로세스(SP) 품질인증]({{< relref "/docs/subnotes/02_SoftwareEngineering/sp-software-process-quality" >}}) |
| COCOMO II | 공수=A×Size^E×보정계수 알고리즘 비용산정모델 | [기능점수(FP) 및 소프트웨어 비용 산정방법]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-cost-estimation" >}}) |
| Core Assets | SPL 도메인공학이 구축하는 공통 핵심자산 | [로우코드/노코드와 제품계열 방법론]({{< relref "/docs/subnotes/02_SoftwareEngineering/lowcode-productline" >}}) |
| COSMIC | 데이터 이동(Entry/Exit/Read/Write) 기반 FP 산정법 | [기능점수(FP) 및 소프트웨어 비용 산정방법]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-cost-estimation" >}}) |
| CQRS | 명령(Command)·조회(Query) 데이터모델 분리설계 | [MSA 아키텍처]({{< relref "/docs/subnotes/02_SoftwareEngineering/msa-architecture" >}}) |
| CycloneDX | OWASP 주도 SBOM 표준 포맷, 취약점정보 통합 | [오픈소스 라이선스 정책 변경과 SBOM 공급망 관리]({{< relref "/docs/subnotes/02_SoftwareEngineering/opensource-license-sbom" >}}) |
| DAST | 실행중인 애플리케이션 취약점 동적분석 | [DevSecOps와 소프트웨어 보안 품질]({{< relref "/docs/subnotes/02_SoftwareEngineering/devsecops-security-quality" >}}) |
| Database-per-Service | MSA 서비스별 독립 데이터베이스 소유 원칙 | [MSA 아키텍처]({{< relref "/docs/subnotes/02_SoftwareEngineering/msa-architecture" >}}) |
| DDD (Bounded Context) | 비즈니스영역 경계 기준 MSA 서비스 분할 설계 | [MSA 아키텍처]({{< relref "/docs/subnotes/02_SoftwareEngineering/msa-architecture" >}}) |
| DeepGauge | KMNC/NBC/SNAC/TKNC 4대 뉴런 커버리지 지표 | [AI 소프트웨어 품질 보증 테스트 기법]({{< relref "/docs/subnotes/02_SoftwareEngineering/ai-sw-testing" >}}) |
| DI (의존성 주입) | 생성자/세터/메서드 방식으로 객체 의존성 외부주입 | [객체지향 5대 설계 원칙과 다형성, 의존성 주입]({{< relref "/docs/subnotes/02_SoftwareEngineering/solid-principles" >}}) |
| DIP | 상위모듈이 구체클래스 대신 추상화에 의존 | [객체지향 5대 설계 원칙과 다형성, 의존성 주입]({{< relref "/docs/subnotes/02_SoftwareEngineering/solid-principles" >}}) |
| Driver/Stub | 상향식 통합엔 Driver, 하향식 통합엔 Stub 필요 | [SW 테스트 기초 및 원칙]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-testing-fundamentals" >}}) |
| Error Budget | 허용가능 장애범위(=100%-SLO), 배포속도 제어수단 | [SLA, SLO, Error Budget]({{< relref "/docs/subnotes/02_SoftwareEngineering/sla-slo-error-budget" >}}) |
| Event Sourcing | 상태변경을 이벤트로 순차기록해 감사추적 확보 | [MSA 아키텍처]({{< relref "/docs/subnotes/02_SoftwareEngineering/msa-architecture" >}}) |
| Expand-Contract 패턴 | 확장→이행→축소 단계별 DB 스키마 마이그레이션 | [배포 전략 및 무중단 배포]({{< relref "/docs/subnotes/02_SoftwareEngineering/deployment-strategy" >}}) |
| Fagan Inspection | 계획→회의→재작업 6단계 구조화 정적 검토기법 | [소프트웨어 품질보증(SQA)과 인스펙션]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-quality-assurance-inspection" >}}) |
| Feature Model | 제품군 공통·선택·대안점을 트리로 표현한 모델 | [로우코드/노코드와 제품계열 방법론]({{< relref "/docs/subnotes/02_SoftwareEngineering/lowcode-productline" >}}) |
| FMEA | 부품고장→시스템영향 분석하는 상향식 정성적 기법 | [기능안전성 및 ISO 26262]({{< relref "/docs/subnotes/02_SoftwareEngineering/functional-safety-iso26262" >}}) |
| Fowler 기술부채 사분면 | 의도성×신중함 2축으로 기술부채 4유형 분류 | [소프트웨어 기술 부채(SW Technical Debt)]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-technical-debt" >}}) |
| FP (기능점수) | 사용자관점 언어독립적 SW 규모 산정법 | [기능점수(FP) 및 소프트웨어 비용 산정방법]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-cost-estimation" >}}) |
| FTA | 최상위 장애원인→하위결함 트리분석 하향식 기법 | [기능안전성 및 ISO 26262]({{< relref "/docs/subnotes/02_SoftwareEngineering/functional-safety-iso26262" >}}) |
| GS인증 | ISO/IEC 25010 기반 TTA 제품 품질 인증제도 | [소프트웨어 품질성능 평가시험 (GS인증)]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-quality-performance-test" >}}) |
| HARA | 차량 오작동 시나리오별 유해원인·위험 평가 | [기능안전성 및 ISO 26262]({{< relref "/docs/subnotes/02_SoftwareEngineering/functional-safety-iso26262" >}}) |
| HIL | 실제 ECU를 실시간 시뮬레이터에 연결하는 검증 | [SIL과 HIL 테스팅]({{< relref "/docs/subnotes/02_SoftwareEngineering/sil-hil-testing" >}}) |
| IAST | 런타임 코드계측 기반 대화형 취약점 분석 | [DevSecOps와 소프트웨어 보안 품질]({{< relref "/docs/subnotes/02_SoftwareEngineering/devsecops-security-quality" >}}) |
| IDP (내부 개발자 플랫폼) | 개발자 셀프서비스 인프라 프로비저닝 플랫폼 | [데브옵스, SRE, 플랫폼 엔지니어링]({{< relref "/docs/subnotes/02_SoftwareEngineering/devops-sre-platform" >}}) |
| IEEE 829 | 테스트계획서~결과보고서 표준 문서체계 | [SW 테스트 기초 및 원칙]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-testing-fundamentals" >}}) |
| INVEST 원칙 | 사용자 스토리 품질요건(독립·타협·가치·추정·소형·테스트) | [애자일 규모/일정 산정 기법]({{< relref "/docs/subnotes/02_SoftwareEngineering/agile-estimation" >}}) |
| ISMP | FP도출 가능수준까지 요건 구체화하는 마스터플랜 | [ISMP와 ISP, EA/ITA 비교]({{< relref "/docs/subnotes/02_SoftwareEngineering/ismp-isp" >}}) |
| ISO 26262 | 차량 E/E시스템 기능안전 국제표준(ASIL 등급) | [기능안전성 및 ISO 26262]({{< relref "/docs/subnotes/02_SoftwareEngineering/functional-safety-iso26262" >}}) |
| ISO/IEC 25010 | 기능적합성 등 8대 품질특성(SQuaRE) 모델 | [소프트웨어 품질성능 평가시험 (GS인증)]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-quality-performance-test" >}}) |
| ISP (인터페이스분리원칙) | 클라이언트가 미사용 메서드에 비의존하도록 분할 | [객체지향 5대 설계 원칙과 다형성, 의존성 주입]({{< relref "/docs/subnotes/02_SoftwareEngineering/solid-principles" >}}) |
| ISP (정보전략계획) | 조직전체 3~5년 거시적 IT 로드맵 수립 | [ISMP와 ISP, EA/ITA 비교]({{< relref "/docs/subnotes/02_SoftwareEngineering/ismp-isp" >}}) |
| Little's Law | L=λ×W, 목표 동시사용자·응답시간으로 TPS 도출 | [성능 테스트와 리틀의 법칙(Little's Law)]({{< relref "/docs/subnotes/02_SoftwareEngineering/performance-testing-littlelaw" >}}) |
| LOC | 소스코드 텍스트라인 단순합산 규모 측정 | [McCabe 순환 복잡도]({{< relref "/docs/subnotes/02_SoftwareEngineering/mccabe-complexity" >}}) |
| LSP | 하위타입이 상위타입 대체해도 계약 유지 | [객체지향 5대 설계 원칙과 다형성, 의존성 주입]({{< relref "/docs/subnotes/02_SoftwareEngineering/solid-principles" >}}) |
| McCabe 순환복잡도 | CFG 위상구조 기반 선형독립 경로수 측정 | [McCabe 순환 복잡도]({{< relref "/docs/subnotes/02_SoftwareEngineering/mccabe-complexity" >}}) |
| MCDC | 개별조건이 결정결과에 독립영향 미침을 검증(n+1) | [MCDC & 커버리지]({{< relref "/docs/subnotes/02_SoftwareEngineering/mcdc-coverage" >}}) |
| MIL/PIL | 모델(MIL)·타겟프로세서(PIL) 단계 임베디드 검증 | [SIL과 HIL 테스팅]({{< relref "/docs/subnotes/02_SoftwareEngineering/sil-hil-testing" >}}) |
| MLOps | 데이터·모델 CT까지 결합한 ML 특화 운영방법론 | [MLOps와 DevOps 비교]({{< relref "/docs/subnotes/02_SoftwareEngineering/mlops-devops" >}}) |
| MSA | 비즈니스영역 기준 독립배포 최소단위 서비스 아키텍처 | [MSA 아키텍처]({{< relref "/docs/subnotes/02_SoftwareEngineering/msa-architecture" >}}) |
| OCP | 기존코드 수정없이 확장으로 기능추가 원칙 | [객체지향 5대 설계 원칙과 다형성, 의존성 주입]({{< relref "/docs/subnotes/02_SoftwareEngineering/solid-principles" >}}) |
| Outbox 패턴 | DB쓰기+이벤트발행을 로컬 트랜잭션으로 묶는 패턴 | [MSA 아키텍처]({{< relref "/docs/subnotes/02_SoftwareEngineering/msa-architecture" >}}) |
| Planning Poker | 피보나치 카드 비공개제출 후 토론합의 산정기법 | [애자일 규모/일정 산정 기법]({{< relref "/docs/subnotes/02_SoftwareEngineering/agile-estimation" >}}) |
| PoC | 격리환경 핵심기능 프로토타입으로 실현가능성 확인 | [실험적 검증 기법 (A/B 테스트, Benchmark·PoC·Pilot)]({{< relref "/docs/subnotes/02_SoftwareEngineering/experimental-validation-testing" >}}) |
| QC 7도구 | 품질데이터 수집·시각화 통계기법 집합(구/신 7종) | [품질보증(QA)/품질통제(QC)와 QC 7도구]({{< relref "/docs/subnotes/02_SoftwareEngineering/qa-qc-7tools" >}}) |
| RBT (리스크 기반 테스팅) | 영향도×발생가능성 기준 테스트자원 배분 | [SW 테스트 기초 및 원칙]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-testing-fundamentals" >}}) |
| RTM | 요구사항→구현→테스트케이스 매핑 추적표 | [요구사항 공학]({{< relref "/docs/subnotes/02_SoftwareEngineering/requirements-engineering" >}}) |
| SAST | 소스코드·바이너리 취약점 정적분석(빌드단계) | [DevSecOps와 소프트웨어 보안 품질]({{< relref "/docs/subnotes/02_SoftwareEngineering/devsecops-security-quality" >}}) |
| SBOM | SW 구성요소·라이선스·취약점 기계판독 목록 | [오픈소스 라이선스 정책 변경과 SBOM 공급망 관리]({{< relref "/docs/subnotes/02_SoftwareEngineering/opensource-license-sbom" >}}) |
| SCA | 오픈소스 의존성 취약점 구성분석 | [DevSecOps와 소프트웨어 보안 품질]({{< relref "/docs/subnotes/02_SoftwareEngineering/devsecops-security-quality" >}}) |
| Saga 패턴 | 로컬 트랜잭션 + 실패시 보상트랜잭션 분산처리 | [MSA 아키텍처]({{< relref "/docs/subnotes/02_SoftwareEngineering/msa-architecture" >}}) |
| Service Mesh | 사이드카 프록시 기반 서비스간 통신 추상화·제어 | [MSA 아키텍처]({{< relref "/docs/subnotes/02_SoftwareEngineering/msa-architecture" >}}) |
| SIL | SW+가상환경모델을 PC에서 함께 실행하는 검증 | [SIL과 HIL 테스팅]({{< relref "/docs/subnotes/02_SoftwareEngineering/sil-hil-testing" >}}) |
| SLA | 대고객 서비스제공수준 계약, 미달시 보상규정 | [SLA, SLO, Error Budget]({{< relref "/docs/subnotes/02_SoftwareEngineering/sla-slo-error-budget" >}}) |
| SLI | 서비스수준 정량측정 구체 지표(에러율·지연 등) | [SLA, SLO, Error Budget]({{< relref "/docs/subnotes/02_SoftwareEngineering/sla-slo-error-budget" >}}) |
| SLO | 시스템안정성 위한 내부 목표치(SLA보다 엄격) | [SLA, SLO, Error Budget]({{< relref "/docs/subnotes/02_SoftwareEngineering/sla-slo-error-budget" >}}) |
| SOLID | SRP·OCP·LSP·ISP·DIP 객체지향 5대 설계원칙 | [UML 및 디자인 패턴]({{< relref "/docs/subnotes/02_SoftwareEngineering/uml-design-pattern" >}}) |
| SP인증 | SW진흥법 기반 국내 프로세스 품질인증 제도 | [소프트웨어 프로세스(SP) 품질인증]({{< relref "/docs/subnotes/02_SoftwareEngineering/sp-software-process-quality" >}}) |
| SPICE | ISO/IEC 15504 기반 프로세스 역량 평가모델 | [소프트웨어 프로세스(SP) 품질인증]({{< relref "/docs/subnotes/02_SoftwareEngineering/sp-software-process-quality" >}}) |
| SPL (제품계열) | 공통 핵심자산 기반 제품군 체계적 생산방법론 | [로우코드/노코드와 제품계열 방법론]({{< relref "/docs/subnotes/02_SoftwareEngineering/lowcode-productline" >}}) |
| SRP | 클래스는 하나의 액터·변경사유만 가져야 함 | [객체지향 5대 설계 원칙과 다형성, 의존성 주입]({{< relref "/docs/subnotes/02_SoftwareEngineering/solid-principles" >}}) |
| SSPL/BSL | 클라우드 무임승차 대응 준폐쇄형 오픈소스 라이선스 | [오픈소스 라이선스 정책 변경과 SBOM 공급망 관리]({{< relref "/docs/subnotes/02_SoftwareEngineering/opensource-license-sbom" >}}) |
| Story Point | 기준스토리 대비 상대적 복잡도·노력 산정치 | [애자일 규모/일정 산정 기법]({{< relref "/docs/subnotes/02_SoftwareEngineering/agile-estimation" >}}) |
| Strangler Fig 패턴 | 신규모듈 외곽구축 후 레거시를 점진 이관·소멸 | [SW 유지보수 및 3R]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-maintenance-3r" >}}) |
| TDD | Red-Green-Refactor 3단계 테스트 선행 개발기법 | [애자일 개발방법론]({{< relref "/docs/subnotes/02_SoftwareEngineering/agile-sw-development" >}}) |
| Testability(테스트 용이성) | 관찰·제어·분리·이해·자동화가능성 5대 특성 | [SW 테스트 기초 및 원칙]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-testing-fundamentals" >}}) |
| Threat Modeling (STRIDE) | 요구사항단계 보안위협 식별 모델링 기법 | [DevSecOps와 소프트웨어 보안 품질]({{< relref "/docs/subnotes/02_SoftwareEngineering/devsecops-security-quality" >}}) |
| tpmC/TPC-C | 분당 신규주문 트랜잭션 기준 CPU 성능 벤치마크 | [ITA 기반 H/W 용량산정]({{< relref "/docs/subnotes/02_SoftwareEngineering/hw-capacity-planning" >}}) |
| V-모델 | 단위-통합-시스템-인수 테스트 SDLC 대응 검증체계 | [SW 테스트 기초 및 원칙]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-testing-fundamentals" >}}) |
| WBS | 세부 작업분해 기반 상향식 비용 산정법 | [기능점수(FP) 및 소프트웨어 비용 산정방법]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-cost-estimation" >}}) |
| XP (익스트림 프로그래밍) | 용기·단순성·의사소통·피드백·존중 5대 가치 실천법 | [애자일 개발방법론]({{< relref "/docs/subnotes/02_SoftwareEngineering/agile-sw-development" >}}) |
| 결정 커버리지 | 각 결정문(IF 등)의 T/F를 최소 1회 실행 검증 | [MCDC & 커버리지]({{< relref "/docs/subnotes/02_SoftwareEngineering/mcdc-coverage" >}}) |
| 경계값 분석 | 에러빈도 높은 입력경계 영역 집중 검수 기법 | [블랙박스 & 경계값 테스트]({{< relref "/docs/subnotes/02_SoftwareEngineering/black-white-box-testing" >}}) |
| 기능선망 (Feature Envy) | 자기 클래스보다 타 클래스 getter 과다호출 스멜 | [코드 리팩토링 및 코드 악취]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-refactoring-badsmells" >}}) |
| 기준선 (Baseline) | 검토·승인된 특정시점 형상항목 집합, 변경 기준점 | [형상관리와 기준선]({{< relref "/docs/subnotes/02_SoftwareEngineering/configuration-management-baseline" >}}) |
| 뉴런 커버리지 | 딥러닝 뉴런 활성화 상태 측정하는 화이트박스 지표 | [AI 소프트웨어 품질 보증 테스트 기법]({{< relref "/docs/subnotes/02_SoftwareEngineering/ai-sw-testing" >}}) |
| 단계별 발주제도 | 분석/설계·구현 단계분리 후 별도계약하는 공공발주 | [SW사업 단계별 발주제도와 상용 SW 직접구매]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-procurement-process" >}}) |
| 데이터 뭉치 (Data Clumps) | 동일 파라미터 세트가 반복 등장하는 코드 스멜 | [코드 리팩토링 및 코드 악취]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-refactoring-badsmells" >}}) |
| 데이터/개념 드리프트 | 입력분포·입출력관계 변화로 모델 재학습 트리거 | [MLOps와 DevOps 비교]({{< relref "/docs/subnotes/02_SoftwareEngineering/mlops-devops" >}}) |
| 동등분할 | 입력도메인을 동등그룹으로 나눠 대표값 테스팅 | [블랙박스 & 경계값 테스트]({{< relref "/docs/subnotes/02_SoftwareEngineering/black-white-box-testing" >}}) |
| 리팩토링 | 외부동작 유지하며 가독성·구조 개선하는 작업 | [코드 리팩토링 및 코드 악취]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-refactoring-badsmells" >}}) |
| 메타모픽 테스트 | 오라클 없이 입력간 예상관계로 출력일관성 검증 | [AI 소프트웨어 품질 보증 테스트 기법]({{< relref "/docs/subnotes/02_SoftwareEngineering/ai-sw-testing" >}}) |
| 발산적 변경 | 클래스 하나에 다양한 변경사유가 몰리는 스멜 | [코드 리팩토링 및 코드 악취]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-refactoring-badsmells" >}}) |
| 산탄총 수술 | 한 곳 수정시 다수 클래스 동시수정 필요한 스멜 | [코드 리팩토링 및 코드 악취]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-refactoring-badsmells" >}}) |
| 살충제 패러독스 | 동일테스트 반복시 결함발견율 감소하는 현상 | [SW 테스트 기초 및 원칙]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-testing-fundamentals" >}}) |
| 상태 다이어그램 | 상태·전이·히스토리상태로 객체 생명주기 표현 | [UML 행위 다이어그램 (Activity·State·Use-Case)]({{< relref "/docs/subnotes/02_SoftwareEngineering/uml-behavior-diagrams" >}}) |
| 안전반경 최대화/형식검증 | 적대적예제 최소임계거리 산출과 SMT 수학적 증명 | [AI 소프트웨어 품질 보증 테스트 기법]({{< relref "/docs/subnotes/02_SoftwareEngineering/ai-sw-testing" >}}) |
| 오버로딩/오버라이딩 | 정적(컴파일타임) vs 동적(런타임) 다형성 구현 | [객체지향 5대 설계 원칙과 다형성, 의존성 주입]({{< relref "/docs/subnotes/02_SoftwareEngineering/solid-principles" >}}) |
| 워크스루 | 작성자주도 비형식적 검토회의(빠른 피드백) | [소프트웨어 품질보증(SQA)과 인스펙션]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-quality-assurance-inspection" >}}) |
| 유스케이스 다이어그램 | 액터·유스케이스·include/extend로 기능요구 도출 | [UML 행위 다이어그램 (Activity·State·Use-Case)]({{< relref "/docs/subnotes/02_SoftwareEngineering/uml-behavior-diagrams" >}}) |
| 응집도/결합도 | 모듈내 기능집중도/모듈간 의존강도 측정 기준 | [소프트웨어 설계 원리 (추상화, 정보은닉, 단계적분해, 모듈화)]({{< relref "/docs/subnotes/02_SoftwareEngineering/information-hiding" >}}) |
| 정보은닉 | 인터페이스 뒤로 내부구현을 은폐하는 설계원리 | [소프트웨어 설계 원리 (추상화, 정보은닉, 단계적분해, 모듈화)]({{< relref "/docs/subnotes/02_SoftwareEngineering/information-hiding" >}}) |
| 직접구매 제도 | 상용SW를 SI사업에서 분리해 SW사와 직접계약 | [SW사업 단계별 발주제도와 상용 SW 직접구매]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-procurement-process" >}}) |
| 추상화 | 불필요특성 제거해 핵심본질만 추출하는 설계원리 | [소프트웨어 설계 원리 (추상화, 정보은닉, 단계적분해, 모듈화)]({{< relref "/docs/subnotes/02_SoftwareEngineering/information-hiding" >}}) |
| 캡슐화 | 데이터+행위를 하나로 묶는 것(정보은닉의 목적) | [소프트웨어 설계 원리 (추상화, 정보은닉, 단계적분해, 모듈화)]({{< relref "/docs/subnotes/02_SoftwareEngineering/information-hiding" >}}) |
| 프록시 패턴 | 동일 인터페이스로 대리자가 접근제어·부가기능 수행 | [UML 및 디자인 패턴]({{< relref "/docs/subnotes/02_SoftwareEngineering/uml-design-pattern" >}}) |
| 플랫폼 엔지니어링 | 개발자 인지부하 감소 위한 셀프서비스 IDP 구축 | [데브옵스, SRE, 플랫폼 엔지니어링]({{< relref "/docs/subnotes/02_SoftwareEngineering/devops-sre-platform" >}}) |
| 형상항목 (CI) | 소스코드·설계문서 등 형상관리 대상 단위 | [형상관리와 기준선]({{< relref "/docs/subnotes/02_SoftwareEngineering/configuration-management-baseline" >}}) |
| 활동 다이어그램 | 초기/종료노드·포크조인·스윔레인으로 업무흐름 표현 | [UML 행위 다이어그램 (Activity·State·Use-Case)]({{< relref "/docs/subnotes/02_SoftwareEngineering/uml-behavior-diagrams" >}}) |
| 회귀 테스트 | 변경후 기존기능 손상여부 재검증하는 테스트 | [SW 테스트 기초 및 원칙]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-testing-fundamentals" >}}) |
