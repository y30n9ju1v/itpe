---
bookCollapseSection: true
title: "소프트웨어공학"
---

| 번호 | 토픽명 | 정의 |
| :--- | :--- | :--- |
| 1 | [애자일 규모/일정 산정 기법]({{< relref "/docs/subnotes/02_SoftwareEngineering/agile-estimation" >}}) | 고정 시간 추정의 한계를 극복하기 위해 사용자 스토리의 복잡도와 위험을 상대적 지표인 **스토리 포인트**로 정의하고, 협업적 합의 게임인 **플래닝 포커** 등을 통해 범위를 조율하는 **애자일 일정 관리 기법** |
| 2 | [애자일 개발방법론]({{< relref "/docs/subnotes/02_SoftwareEngineering/agile-sw-development" >}}) | 불확실성이 높은 환경에서 짧은 개발 주기(Sprint)를 반복하며 작동 가능한 소프트웨어를 신속하게 인도하고, 고객 피드백을 상시 반영하는 **고객/인간 중심 개발방법론** |
| 3 | [AI 소프트웨어 품질 보증 테스트 기법]({{< relref "/docs/subnotes/02_SoftwareEngineering/ai-sw-testing" >}}) | AI 소프트웨어는 결정론적이 아닌 확률적·데이터 의존적 특성으로 기존 테스트 오라클 기반 기법 적용이 어려워, 입력 간 관계로 검증하는 **메타모픽 테스트**, 모델 내부 뉴런 활성화를 측정하는 **뉴런 커버리지(DeepGauge)**, 적대적 노이즈 강건성을 검증하는 **안전 반경 최대화/형식 검증**의 3대 AI 특화 테스트 기법이 필요하다 |
| 4 | [블랙박스 & 경계값 테스트]({{< relref "/docs/subnotes/02_SoftwareEngineering/black-white-box-testing" >}}) | 요구사항 명세를 기반으로 기능의 정합성을 검증하는 **블랙박스 테스팅**과, 내부 소스코드의 제어 구조와 데이터 흐름을 직접 검증하는 **화이트박스 테스팅**의 기법 및 절차 |
| 5 | [형상관리와 기준선]({{< relref "/docs/subnotes/02_SoftwareEngineering/configuration-management-baseline" >}}) | 소프트웨어 개발 전 생명주기에 걸쳐 산출물(형상항목)의 변경을 체계적으로 관리하여 무결성과 추적성을 보장하는 프로세스가 **형상관리**이며, **기준선**은 정식으로 검토·승인된 특정 시점의 형상항목 집합으로 이후 모든 변경의 기준점이 된다 |
| 6 | [배포 전략 및 무중단 배포]({{< relref "/docs/subnotes/02_SoftwareEngineering/deployment-strategy" >}}) | 서비스 운영 중에 시스템 다운타임(Downtime)을 발생시키지 않고 새로운 버전의 애플리케이션을 안전하게 사용자에게 릴리즈하는 **트래픽 제어 및 배포 자동화 기술** |
| 7 | [데브옵스, SRE, 플랫폼 엔지니어링]({{< relref "/docs/subnotes/02_SoftwareEngineering/devops-sre-platform" >}}) | 개발과 운영의 단절을 극복하는 **DevOps 사상**을 SW 공학 방식으로 실현한 **SRE(사이트 신뢰성 공학)**와, 개발팀의 인지 부하를 줄이기 위해 내부 개발자 플랫폼(IDP)을 구축하는 **플랫폼 엔지니어링 기술** |
| 8 | [DevSecOps와 소프트웨어 보안 품질]({{< relref "/docs/subnotes/02_SoftwareEngineering/devsecops-security-quality" >}}) | **DevSecOps**는 "Shift Left" 원칙에 따라 DevOps 파이프라인 초기부터 보안 검사를 자동화하는 방법론이며, 이를 통해 확보하고자 하는 목표가 ISO/IEC 25010의 보안성(기밀성·무결성·부인방지·책임추적성·인증성)을 포함하는 **소프트웨어 보안 품질**이다 |
| 9 | [실험적 검증 기법 (A/B 테스트, Benchmark·PoC·Pilot)]({{< relref "/docs/subnotes/02_SoftwareEngineering/experimental-validation-testing" >}}) | 두 버전을 무작위 노출해 통계적으로 우열을 검증하는 **A/B 테스팅**과, 기술·성능·적합성을 단계적으로 검증하는 **Benchmark → PoC → Pilot Test**는 모두 실제 도입 전 데이터 기반으로 리스크를 줄이는 실험적 검증 기법 |
| 10 | [기능안전성 및 ISO 26262]({{< relref "/docs/subnotes/02_SoftwareEngineering/functional-safety-iso26262" >}}) | 전기·전자 시스템의 오작동 및 고장으로 유발되는 위험으로부터 안전을 확보하는 **기능 안전성** 원칙과, 이를 차량 E/E 시스템에 적용한 **자동차 기능안전 국제 표준인 ISO 26262** |
| 11 | [정보은닉(Information Hiding)]({{< relref "/docs/subnotes/02_SoftwareEngineering/information-hiding" >}}) | David Parnas가 1972년 제안한 설계 원칙으로, 모듈 내부의 구현 세부사항(변경 가능성이 높은 설계 결정)을 외부에 노출하지 않고 인터페이스를 통해서만 접근하도록 하여 모듈 간 결합도를 낮추고 변경 영향 범위를 최소화하는 기법 |
| 12 | [로우코드/노코드와 제품계열 방법론]({{< relref "/docs/subnotes/02_SoftwareEngineering/lowcode-productline" >}}) | 시민개발자(Citizen Developer)가 시각적 개발로 애플리케이션을 신속히 생산하는 **로우코드/노코드**와, 공통 핵심 자산(Core Assets)을 기반으로 관련 제품군을 체계적으로 생산하는 **제품계열 방법론(SPL)**은 모두 "재사용 가능한 공통 기반 위에서 빠르게 변형 제품을 생산"한다는 공통 목표를 갖는 개발 생산성 향상 기법 |
| 13 | [McCabe 순환 복잡도]({{< relref "/docs/subnotes/02_SoftwareEngineering/mccabe-complexity" >}}) | 제어 흐름 그래프(CFG)의 위상수학적 구조를 분석하여 **프로그램 내 선형 독립적 경로 수**를 계산함으로써 모듈의 복잡도를 정량적으로 측정하는 **정적 소프트웨어 메트릭** |
| 14 | [MCDC & 커버리지]({{< relref "/docs/subnotes/02_SoftwareEngineering/mcdc-coverage" >}}) | 복합 조건식에서 각 개별 조건(Condition)이 다른 조건들의 영향을 받지 않고 **전체 결정(Decision) 결과에 독립적으로 영향을 미치는 경로를 검증**하는 고신뢰성 화이트박스 커버리지 기술 |
| 15 | [MLOps와 DevOps 비교]({{< relref "/docs/subnotes/02_SoftwareEngineering/mlops-devops" >}}) | DevOps는 애플리케이션 코드의 개발·운영을 통합해 빠른 배포를 지향하는 방법론이며, **MLOps**는 여기에 데이터와 모델의 학습·검증·배포·모니터링 전 생명주기를 자동화하는 **CT(Continuous Training)**를 결합한 ML 특화 운영 방법론 |
| 16 | [MSA 아키텍처]({{< relref "/docs/subnotes/02_SoftwareEngineering/msa-architecture" >}}) | 애플리케이션을 비즈니스 영역(Bounded Context)에 맞게 독립적으로 배포 및 확장 가능한 **최소 단위의 서비스들의 집합으로 설계하는 아키텍처 스타일** |
| 17 | [오픈소스 라이선스 정책 변경과 SBOM 공급망 관리]({{< relref "/docs/subnotes/02_SoftwareEngineering/opensource-license-sbom" >}}) | 클라우드 사업자의 무임승차 문제로 Redis·MongoDB 등 주요 오픈소스가 개방형(MIT/Apache)에서 상업적 이용을 제한하는 준폐쇄형(**SSPL·BSL**)으로 전환하는 추세이며, 이에 대응해 사용 중인 모든 소프트웨어 구성요소와 라이선스·취약점을 기계 판독 가능한 형식으로 관리하는 **SBOM(Software Bill of Materials)**이 공급망 보안의 핵심 수단으로 부상 |
| 18 | [요구사항 공학]({{< relref "/docs/subnotes/02_SoftwareEngineering/requirements-engineering" >}}) | 소프트웨어 개발 수명주기(SDLC) 동안 이해관계자의 요구사항을 체계적으로 **도출, 분석, 명세, 검증(도·분·명·검)**하고, 변경 사항을 **추적 및 통제(협·기·추·변)**하는 시스템 엔지니어링 활동 |
| 19 | [SIL과 HIL 테스팅]({{< relref "/docs/subnotes/02_SoftwareEngineering/sil-hil-testing" >}}) | 임베디드·실시간 제어 시스템(자동차, 항공)에서 실제 환경 대신 시뮬레이션 또는 실제 하드웨어를 검증 루프에 포함하는 기법으로, **SIL**은 SW와 가상 환경 모델을 PC에서 함께 실행하고 **HIL**은 실제 ECU를 실시간 시뮬레이터에 연결하여 V-모델의 통합·시스템 테스트 단계를 수행한다 |
| 20 | [SLA, SLO, Error Budget]({{< relref "/docs/subnotes/02_SoftwareEngineering/sla-slo-error-budget" >}}) | 안정성과 혁신의 균형을 맞추기 위해 정량적 품질 지표 **SLI**를 기반으로 내부 목표치 **SLO**와 비즈니스 계약 **SLA**를 수립하고, 허용 가능한 에러의 총량인 **오류 예산**을 제어 수단으로 활용하는 품질 관리 기법 |
| 21 | [객체지향 5대 설계 원칙]({{< relref "/docs/subnotes/02_SoftwareEngineering/solid-principles" >}}) | 소프트웨어 아키텍처의 유지보수성, 확장성, 재사용성을 극대화하기 위해 클래스 및 컴포넌트 설계 시 준수해야 하는 **5대 객체지향 설계 원칙(단·개·리·인·의)** |
| 22 | [소프트웨어 프로세스(SP) 품질인증]({{< relref "/docs/subnotes/02_SoftwareEngineering/sp-software-process-quality" >}}) | SW 개발 및 관리 프로세스 역량 수준을 공인 기준(CMMI/SPICE)에 따라 평가하여 등급을 부여하는 **SW진흥법 기반의 국내 프로세스 품질인증 제도** |
| 23 | [소프트웨어 아키텍처 스타일]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-architecture-styles" >}}) | 소프트웨어 구조 설계의 정형화된 표준 유형인 **아키텍처 스타일**과, 다각적 이해관계자 관점에서 시스템 구조를 명세 및 검증하는 **4+1 아키텍처 뷰 기술** |
| 24 | [SW 유지보수 및 3R]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-maintenance-3r" >}}) | 소프트웨어 위기를 방지하고 자산의 수명을 연장하기 위해 **진화 법칙**과 **표준 유지보수 절차(수·예·적·비)**를 준수하고, 레거시 자산을 분석/개선하는 **3R(역·재·재) 공학 기술** |
| 25 | [소프트웨어 품질보증(SQA)과 인스펙션]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-quality-assurance-inspection" >}}) | **SQA**는 소프트웨어 개발 프로세스와 산출물이 정해진 품질 기준을 만족하는지 체계적으로 확인하는 활동이며, **인스펙션**은 SQA의 핵심 정적 검토 기법으로 요구사항·설계·코드 산출물을 구조화된 절차로 검토해 테스트 단계 대비 1/10의 비용으로 결함을 조기 제거한다 |
| 26 | [소프트웨어 품질성능 평가시험 (GS인증)]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-quality-performance-test" >}}) | SW 제품이 기능적·비기능적 품질 요구사항을 충족하는지 국제 표준 **ISO/IEC 25010(SQuaRE)** 품질 모델 기반으로 시험·인증하는 제도로, 국내에서는 TTA(한국정보통신기술협회)의 **GS인증**이 대표적이며 공공기관 SW 조달 품질 보증에 활용된다 |
| 27 | [코드 리팩토링 및 코드 악취]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-refactoring-badsmells" >}}) | 외부의 기능 동작은 유지한 채 가독성과 구조를 개선하는 **리팩토링**과, 결합도 상승 및 응집도 하락으로 리팩토링이 필요한 상태를 뜻하는 **코드 악취(중·대·발·산) 통제 기술** |
| 28 | [소프트웨어 테일러링]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-tailoring" >}}) | 조직의 표준 개발방법론을 특정 프로젝트의 특성(규모, 위험, 기술, 기간 등)에 부합하도록 최적화하여 가공하고 맞춤 적용하는 **엔지니어링 활동** |
| 29 | [소프트웨어 기술 부채(SW Technical Debt)]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-technical-debt" >}}) | Ward Cunningham이 제시한 개념으로, 단기적 편의를 위해 최선이 아닌 설계·구현 방식을 선택함으로써 미래에 추가 작업(이자)이 발생하는 상태를 금융 부채에 비유한 개념. 의도적/비의도적 발생 원인과 6대 유형으로 분류되며 체계적 측정·리팩토링으로 관리한다 |
| 30 | [SW 테스트 기초 및 원칙]({{< relref "/docs/subnotes/02_SoftwareEngineering/sw-testing-fundamentals" >}}) | 고품질 소프트웨어를 확보하기 위해 **테스트 7원칙**을 기반으로 개발 수명주기(SDLC)와 대응되는 **V-모델(단·통·시·인)**에 따라 검증을 수행하고, 리스크(발생 가능성 및 영향도)에 의거해 자원을 배분하는 활동 |
| 31 | [TA와 AA (기술 아키텍트 vs 애플리케이션 아키텍트)]({{< relref "/docs/subnotes/02_SoftwareEngineering/ta-aa-architect" >}}) | **TA**는 인프라·플랫폼·네트워크·보안 등 시스템 전반의 기술 아키텍처를 설계하는 역할이며, **AA**는 비즈니스 요구사항을 소프트웨어 구조(MSA, API, 데이터 흐름)로 변환하는 역할로, 클라우드 네이티브 전환 프로젝트에서는 두 역할의 경계가 모호해져 협업이 핵심 성공 요인이 된다 |
| 32 | [UML 행위 다이어그램 (Activity·State·Use-Case)]({{< relref "/docs/subnotes/02_SoftwareEngineering/uml-behavior-diagrams" >}}) | 시스템의 동적 동작을 표현하는 UML 행위 다이어그램 중 업무 프로세스 흐름을 표현하는 **활동 다이어그램**, 객체의 상태 전이를 표현하는 **상태 다이어그램**, 시스템과 외부 행위자 간 기능적 상호작용을 표현하는 **유스케이스 다이어그램**은 각각 설계·분석 단계에서 상호 보완적으로 활용된다 |
| 33 | [UML 및 디자인 패턴]({{< relref "/docs/subnotes/02_SoftwareEngineering/uml-design-pattern" >}}) | 고품질 객체지향 소프트웨어 설계를 위한 **5대 원칙(SOLID)**과, 시스템 구조 및 동적 행위를 시각화하는 표준 모델링 언어 **UML**, 그리고 반복되는 설계 문제를 해결하는 **GoF 디자인 패턴(생·구·행)**의 종합적 소프트웨어 설계 기술 |
