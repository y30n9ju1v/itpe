---
bookCollapseSection: true
title: "소프트웨어공학"
---

| 번호 | 토픽명 | 정의 |
| :--- | :--- | :--- |
| 1 | [애자일 규모/일정 산정 기법]({{< relref "/docs/subnotes/02_SoftwareEngineering/agile-estimation" >}}) | 사용자 스토리의 복잡도를 상대 지표인 **스토리 포인트**로 정의하고 **플래닝 포커**로 합의해 범위를 조율하는 애자일 일정 관리 기법 |
| 2 | [애자일 개발방법론]({{< relref "/docs/subnotes/02_SoftwareEngineering/agile-sw-development" >}}) | 짧은 개발 주기(**Sprint**)를 반복하며 작동 가능한 SW를 신속히 인도하고 고객 피드백을 상시 반영하는 개발방법론 |
| 3 | [AI 소프트웨어 품질 보증 테스트 기법]({{< relref "/docs/subnotes/02_SoftwareEngineering/ai-sw-testing" >}}) | 입력 간 관계로 검증하는 **메타모픽 테스트**, 뉴런 활성화를 측정하는 **뉴런 커버리지**, 강건성 검증 등 AI 특화 테스트 기법 |
| 4 | [블랙박스 & 경계값 테스트]({{< relref "/docs/subnotes/02_SoftwareEngineering/black-white-box-testing" >}}) | 요구사항 명세로 기능 정합성을 검증하는 **블랙박스**와 소스코드의 제어 구조를 검증하는 **화이트박스** 테스팅 기법 |
| 5 | [형상관리와 기준선]({{< relref "/docs/subnotes/02_SoftwareEngineering/configuration-management-baseline" >}}) | 산출물(형상항목)의 변경을 체계적으로 관리해 무결성과 추적성을 보장하는 **형상관리**와, 승인된 시점의 형상항목 집합인 **기준선** |
| 6 | [배포 전략 및 무중단 배포]({{< relref "/docs/subnotes/02_SoftwareEngineering/deployment-strategy" >}}) | 시스템 다운타임 없이 새 버전의 애플리케이션을 안전하게 릴리즈하는 트래픽 제어 및 배포 자동화 기술 |
| 7 | [데브옵스, SRE, 플랫폼 엔지니어링]({{< relref "/docs/subnotes/02_SoftwareEngineering/devops-sre-platform" >}}) | DevOps 사상을 SW 공학으로 실현한 **SRE(사이트 신뢰성 공학)**와, 인지 부하를 줄이는 내부 개발자 플랫폼(**IDP**) 기반 **플랫폼 엔지니어링** |
| 8 | [DevSecOps와 소프트웨어 보안 품질]({{< relref "/docs/subnotes/02_SoftwareEngineering/devsecops-security-quality" >}}) | **Shift Left** 원칙으로 파이프라인 초기부터 보안 검사를 자동화하는 **DevSecOps**와, 그 목표인 ISO/IEC 25010 기반 **보안 품질** |
| 9 | [실험적 검증 기법 (A/B 테스트, Benchmark·PoC·Pilot)]({{< relref "/docs/subnotes/02_SoftwareEngineering/experimental-validation-testing" >}}) | 무작위 노출로 우열을 검증하는 **A/B 테스팅**과, 기술·성능을 단계 검증하는 **Benchmark→PoC→Pilot**의 실험적 검증 기법 |
| 10 | [기능안전성 및 ISO 26262]({{< relref "/docs/subnotes/02_SoftwareEngineering/functional-safety-iso26262" >}}) | 전기·전자 시스템의 오작동·고장으로 인한 위험을 방지하는 **기능 안전성** 원칙과, 이를 차량 E/E 시스템에 적용한 **ISO 26262** |
| 11 | [ITA 기반 H/W 용량산정]({{< relref "/docs/subnotes/02_SoftwareEngineering/hw-capacity-planning" >}}) | 목표 시스템의 업무 처리 능력 요구사항을 만족시키는 CPU·Memory·Storage·Network의 최소 필요 규모를 정량적으로 도출하는 프로세스로, ITA 기반 공공 사업에서는 산정 결과가 예산 편성의 공식 근거가 됨 |
| 12 | [소프트웨어 설계 원리 (추상화, 정보은닉, 단계적분해, 모듈화)]({{< relref "/docs/subnotes/02_SoftwareEngineering/information-hiding" >}}) | SW 개발 시 복잡성을 관리하고 품질을 확보하기 위한 4대 설계 원칙으로, 핵심 본질만 추출하는 **추상화**, David Parnas가 1972년 제안한 원칙으로 모듈 내부 구현을 인터페이스 뒤로 은폐하는 **정보은닉**, 상위→하위로 점진 분할하는 **단계적 분해**, 독립된 SW 단위로 형상화하는 **모듈화**가 순서대로 유기적으로 연결되어 유지보수성·재사용성의 기반을 형성 |
| 13 | [ISMP와 ISP, EA/ITA 비교]({{< relref "/docs/subnotes/02_SoftwareEngineering/ismp-isp" >}}) | 특정 SW 개발 사업의 상세 분석과 RFP 마련을 위해 업무·IT 현황과 요구사항을 분석하고 **기능점수(FP) 도출 가능 수준까지** 기능적·기술적 요건을 상세 기술하여 구축 전략 및 이행 계획을 수립하는 활동으로, 전사 정보화 로드맵인 **ISP**의 추상적 전략을 본 사업(SI) 발주 직전 정밀 요건으로 구체화하는 징검다리 |
| 14 | [로우코드/노코드와 제품계열 방법론]({{< relref "/docs/subnotes/02_SoftwareEngineering/lowcode-productline" >}}) | 시민개발자가 시각적 개발로 앱을 신속 생산하는 **로우코드/노코드**와, 공통 핵심 자산 기반 **제품계열 방법론(SPL)** |
| 15 | [McCabe 순환 복잡도]({{< relref "/docs/subnotes/02_SoftwareEngineering/mccabe-complexity" >}}) | 제어 흐름 그래프(**CFG**)를 분석해 프로그램의 선형 독립 경로 수를 계산하는 정적 소프트웨어 복잡도 메트릭 |
| 16 | [MCDC & 커버리지]({{< relref "/docs/subnotes/02_SoftwareEngineering/mcdc-coverage" >}}) | 복합 조건식에서 각 개별 조건이 다른 조건의 영향 없이 전체 결정 결과에 독립적으로 영향을 미치는지 검증하는 화이트박스 커버리지 기법 |
| 17 | [MLOps와 DevOps 비교]({{< relref "/docs/subnotes/02_SoftwareEngineering/mlops-devops" >}}) | 코드 개발·운영을 통합하는 DevOps에, 데이터·모델의 학습·검증·배포를 자동화하는 **CT**를 결합한 ML 특화 운영 방법론 |
| 18 | [MSA 아키텍처]({{< relref "/docs/subnotes/02_SoftwareEngineering/msa-architecture" >}}) | 애플리케이션을 비즈니스 영역(**Bounded Context**)별 독립 배포·확장 가능한 최소 단위 서비스 집합으로 설계하는 아키텍처 스타일 |
| 19 | [오픈소스 라이선스 정책 변경과 SBOM 공급망 관리]({{< relref "/docs/subnotes/02_SoftwareEngineering/opensource-license-sbom" >}}) | 클라우드 무임승차 문제로 Redis·MongoDB 등이 개방형에서 준폐쇄형(**SSPL·BSL**)으로 전환하는 추세와, 공급망 보안 수단 **SBOM** |
| 20 | [성능 테스트와 리틀의 법칙(Little's Law)]({{< relref "/docs/subnotes/02_SoftwareEngineering/performance-testing-littlelaw" >}}) | 부하 상황에서 시스템의 속도(Speed)·확장성(Scalability)·안정성(Stability)을 비즈니스 요구사항 기준으로 검증하는 비기능 테스트로, 대기 이론에 기반한 **리틀의 법칙(L = λ × W)**을 통해 목표 동시 사용자 수와 응답시간으로부터 필요 처리율(TPS)을 수학적으로 도출하여 성능 목표의 객관적 근거를 제공 |
| 21 | [품질보증(QA)/품질통제(QC)와 QC 7도구]({{< relref "/docs/subnotes/02_SoftwareEngineering/qa-qc-7tools" >}}) | **QA**는 소프트웨어가 품질 목표를 달성하도록 개발 프로세스를 계획·수행·감시하는 예방 중심 활동(프로세스 지향), **QC**는 산출물이 품질 기준을 충족하는지 검사하여 결함을 발견·수정하는 활동(제품 지향)이며, **QC 7도구**는 QC 수행 시 품질 데이터를 수집·시각화·분석하는 구 7도구(수치)와 신 7도구(언어)의 통계적 기법 집합 |
| 22 | [요구사항 공학]({{< relref "/docs/subnotes/02_SoftwareEngineering/requirements-engineering" >}}) | SDLC 동안 이해관계자 요구사항을 체계적으로 **도출·분석·명세·검증**하고 변경을 추적·통제하는 시스템 엔지니어링 활동 |
| 23 | [SIL과 HIL 테스팅]({{< relref "/docs/subnotes/02_SoftwareEngineering/sil-hil-testing" >}}) | SW와 가상 환경을 PC에서 함께 실행하는 **SIL**, 실제 ECU를 실시간 시뮬레이터에 연결하는 **HIL**로 V-모델 통합·시스템 테스트를 수행 |
| 24 | [SLA, SLO, Error Budget]({{< relref "/docs/subnotes/02_SoftwareEngineering/sla-slo-error-budget" >}}) | 정량적 품질 지표 **SLI**를 기반으로 내부 목표 **SLO**와 계약 **SLA**를 수립하고, 허용 오류량인 **오류 예산**으로 안정성·혁신을 관리 |
| 25 | [객체지향 5대 설계 원칙과 다형성, 의존성 주입]({{< relref "/docs/subnotes/02_SoftwareEngineering/solid-principles" >}}) | 소프트웨어 아키텍처의 유지보수성, 확장성, 재사용성을 극대화하기 위해 클래스 및 컴포넌트 설계 시 준수해야 하는 **5대 객체지향 설계 원칙(단·개·리·인·의)**과, OCP·DIP 실현의 기반이 되는 OOP 고유 특성 **다형성(정적 오버로딩/동적 오버라이딩)**, 그리고 DIP를 실행 단계에서 완성하는 **의존성 주입(DI)**의 3가지 구현 방식 |
| 26 | [소프트웨어 프로세스(SP) 품질인증]({{< relref "/docs/subnotes/02_SoftwareEngineering/sp-software-process-quality" >}}) | SW 개발·관리 프로세스 역량을 공인 기준(**CMMI/SPICE**)에 따라 평가하는 SW진흥법 기반 국내 프로세스 품질인증 제도 |
| 27 | [소프트웨어 아키텍처 스타일]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-architecture-styles" >}}) | 구조 설계의 정형화된 표준 유형인 **아키텍처 스타일**과, 다각적 관점에서 구조를 명세하는 **4+1 아키텍처 뷰** |
| 28 | [기능점수(FP) 및 소프트웨어 비용 산정방법]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-cost-estimation" >}}) | **기능점수(FP)**는 사용자가 요청·인식하는 기능적 요구사항의 양을 측정하는 사용자 관점·언어 독립적 SW 규모 산정 방법(IFPUG, ISO/IEC 20926)이며, **SW 비용 산정**은 하향식(전문가·델파이)·상향식(WBS)·알고리즘(COCOMO·FP) 방식을 프로젝트 진행 단계별 불확실성 콘(Cone of Uncertainty)에 맞춰 복합 활용하여 개발 비용을 예측하는 활동 |
| 29 | [소프트웨어 개발방법론의 발전과정]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-development-methodology-evolution" >}}) | 소프트웨어 생명주기(SDLC) 전 과정에서 생산성과 품질을 높이기 위한 수행 절차·방법·산출물·기법·도구의 체계로, 개발의 중심축이 **프로세스(구조적)→데이터(정보공학)→객체(객체지향)→컴포넌트(CBD)→사람(애자일)** 순으로, 대응 방식이 통제 중심에서 불확실성 수용 중심으로 진화한 패러다임 계보 |
| 30 | [SW 유지보수 및 3R]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-maintenance-3r" >}}) | SW 위기를 방지하기 위해 표준 유지보수 절차(수·예·적·비)를 따르고 레거시를 분석·개선하는 **3R(역·재·재) 공학 기술** |
| 31 | [SW사업 단계별 발주제도와 상용 SW 직접구매]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-procurement-process" >}}) | **단계별 발주제도**는 SW 개발 사업을 기획/분석과 설계/구현 단계로 분리하여 각 단계별 별도 계약을 체결함으로써 요구사항 불확실성 리스크를 단계적으로 관리하는 발주 방식(행안부 지침)이며, **상용 SW 직접구매 제도**는 수요기관이 상용 SW를 HW·SI 사업에 포함하지 않고 나라장터·디지털서비스몰을 통해 SW사와 직접 계약하는 공공조달 방식으로 두 제도 모두 SI 종속·불공정 하도급 구조를 개선하는 공공 SW 발주 혁신 제도 |
| 32 | [소프트웨어 품질보증(SQA)과 인스펙션]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-quality-assurance-inspection" >}}) | 개발 프로세스·산출물의 품질 기준 충족을 확인하는 **SQA**와, 구조화된 절차로 결함을 조기 제거하는 정적 검토 기법 **인스펙션** |
| 33 | [소프트웨어 품질성능 평가시험 (GS인증)]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-quality-performance-test" >}}) | 국제 표준 **ISO/IEC 25010(SQuaRE)** 품질 모델 기반으로 시험·인증하는 제도로, 국내 TTA의 **GS인증**이 대표적 |
| 34 | [코드 리팩토링 및 코드 악취]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-refactoring-badsmells" >}}) | 외부 기능 동작은 유지한 채 구조를 개선하는 **리팩토링**과, 결합도 상승·응집도 하락 신호인 **코드 악취(중·대·발·산)** |
| 35 | [소프트웨어 테일러링]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-tailoring" >}}) | 조직의 표준 개발방법론을 프로젝트 특성(규모, 위험, 기술, 기간)에 맞게 최적화해 맞춤 적용하는 엔지니어링 활동 |
| 36 | [소프트웨어 기술 부채(SW Technical Debt)]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-technical-debt" >}}) | Ward Cunningham이 제시한 개념으로, 단기 편의를 위해 최선이 아닌 설계·구현을 택해 미래에 추가 비용(이자)이 발생하는 상태를 부채에 비유 |
| 37 | [SW 테스트 기초 및 원칙]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-testing-fundamentals" >}}) | **테스트 7원칙**을 기반으로 SDLC와 대응되는 **V-모델(단·통·시·인)**에 따라 검증하고, 리스크에 의거해 자원을 배분하는 활동 |
| 38 | [TA와 AA (기술 아키텍트 vs 애플리케이션 아키텍트)]({{< relref "/docs/subnotes/02_SoftwareEngineering/ta-aa-architect" >}}) | 인프라·플랫폼·보안 등 기술 아키텍처를 설계하는 **TA**와, 요구사항을 SW 구조(MSA, API)로 변환하는 **AA**의 역할 비교 |
| 39 | [UML 행위 다이어그램 (Activity·State·Use-Case)]({{< relref "/docs/subnotes/02_SoftwareEngineering/uml-behavior-diagrams" >}}) | 업무 흐름을 표현하는 **활동 다이어그램**, 상태 전이를 표현하는 **상태 다이어그램**, 외부 상호작용을 표현하는 **유스케이스 다이어그램** |
| 40 | [UML 및 디자인 패턴]({{< relref "/docs/subnotes/02_SoftwareEngineering/uml-design-pattern" >}}) | 객체지향 설계 5대 원칙(**SOLID**), 표준 모델링 언어 **UML**, 반복 설계 문제를 해결하는 **GoF 디자인 패턴(생·구·행)** |
