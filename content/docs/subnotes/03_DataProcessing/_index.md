---
bookCollapseSection: true
title: "데이터처리"
---

| 번호 | 토픽명 | 정의 |
| :--- | :--- | :--- |
| 1 | [AI 학습용 데이터 품질관리]({{< relref "/docs/subnotes/03_DataProcessing/ai-training-data-quality" >}}) | 훈련 데이터의 정확성·완전성·일관성·대표성을 체계적으로 확보하는 활동으로, AI 모델 성능을 직접 좌우 |
| 2 | [연관 규칙 분석: 지지도·신뢰도·향상도]({{< relref "/docs/subnotes/03_DataProcessing/association-rule-analysis" >}}) | 트랜잭션 데이터에서 항목 간 동시 출현 패턴(A→B)을 지지도·신뢰도·향상도로 정량화하는 데이터마이닝 기법 |
| 3 | [기본 자료구조: 연결 리스트와 이진 탐색 트리]({{< relref "/docs/subnotes/03_DataProcessing/basic-data-structures" >}}) | 포인터로 노드를 연결하는 동적 자료구조인 연결 리스트와, 좌<부모<우 속성으로 평균 O(log n) 탐색을 지원하는 이진 탐색 트리 |
| 4 | [빅데이터 플랫폼 아키텍처: 람다·카파·하둡·카프카]({{< relref "/docs/subnotes/03_DataProcessing/bigdata-platform-lambda-kappa-kafka" >}}) | 대용량·다양·고속의 빅데이터를 수집·저장·처리·분석·활용하기 위해 서로 다른 처리 엔진을 조합하는 폴리글랏 프로세싱 패러다임과, 이를 구현하는 대표 아키텍처인 람다(배치+스트림 병행)·카파(스트림 단일) 아키텍처, 그리고 분산 저장·처리의 핵심인 하둡 에코시스템(HDFS)과 실시간 메시징 시스템 카프카(Kafka)를 포괄하는 빅데이터 플랫폼 기술 체계 |
| 5 | [빅데이터 시각화]({{< relref "/docs/subnotes/03_DataProcessing/bigdata-visualization" >}}) | 대용량·다양·고속의 빅데이터를 차트·그래프·인터랙티브 대시보드 등 시각적 형태로 표현하는 기술 |
| 6 | [비지도 군집분석: SOM과 실루엣 계수]({{< relref "/docs/subnotes/03_DataProcessing/clustering-som-silhouette" >}}) | 경쟁 학습으로 고차원 데이터를 2D 격자에 투영하는 비지도 신경망 SOM과, 군집 응집도·분리도를 정량화하는 실루엣 계수 |
| 7 | [CNN과 RNN 비교]({{< relref "/docs/subnotes/03_DataProcessing/cnn-vs-rnn" >}}) | 합성곱 연산으로 공간적 특징을 추출하는 CNN과, 순환 구조로 시간적 순서 의존성을 학습하는 RNN |
| 8 | [데이터마이닝 방법론: CRISP-DM과 SEMMA]({{< relref "/docs/subnotes/03_DataProcessing/crisp-dm-semma" >}}) | 대규모 데이터로부터 숨겨진 패턴과 정보를 찾아내는 데이터마이닝 과정을 표준화한 절차 모델로, SAS가 개발한 5단계 기술 중심 방법론 SEMMA와 유럽 컨소시엄(SPSS, NCR 등)이 개발한 4레벨·6단계 비즈니스 중심 방법론 CRISP-DM이 대표적 |
| 9 | [데이터 분석 Flow: EDA-전처리-모델링-평가]({{< relref "/docs/subnotes/03_DataProcessing/data-analysis-flow-eda" >}}) | 데이터 탐색·전처리·분석모델링·평가가 단방향이 아닌 유기적으로 연결된 순환 과정을 통해 데이터로부터 인사이트를 도출하고 비즈니스 가치를 창출하는 체계적 분석 프로세스로, 지도/비지도학습 기법 선택과 분류·군집 모델 평가지표 활용을 포함 |
| 10 | [데이터 분석 거버넌스: CoA·준비도·성숙도]({{< relref "/docs/subnotes/03_DataProcessing/data-analysis-governance-maturity" >}}) | 전사 차원의 데이터 분석 정책·지침·표준화·전략을 수립하고 이를 관리할 조직·프로세스를 구축해 고품질 데이터 기반 가치 창출을 지원하는 체계로, CoA(Center of Analytics)를 중심으로 분석 프로세스·인력·조직·수준진단·교육의 5대 구성요소와, 조직의 분석 역량을 진단하는 준비도(6기준)·성숙도(4단계) 모델을 포함 |
| 11 | [이미지 데이터 어노테이션]({{< relref "/docs/subnotes/03_DataProcessing/data-annotation" >}}) | AI/ML 모델 학습을 위해 원시 이미지에 레이블·메타데이터를 부착하는 작업으로 컴퓨터 비전 품질을 좌우 |
| 12 | [데이터 레이크와 데이터 패브릭]({{< relref "/docs/subnotes/03_DataProcessing/data-lake-data-fabric" >}}) | 스키마 없이(schemaless) 원천 데이터(raw data)를 그대로 저장하는 대용량 저장소인 데이터 레이크와, 온프레미스·클라우드·하이브리드 등 이기종 환경의 모든 데이터를 능동적 메타데이터와 AI/ML 기반으로 통합 관리·분석하는 차세대 아키텍처인 데이터 패브릭을 포괄하는 빅데이터 저장·관리 체계 |
| 13 | [데이터 모델링: ERD, 슈퍼/서브타입, 식별자 관계]({{< relref "/docs/subnotes/03_DataProcessing/data-modeling-erd-relationship" >}}) | 현실 세계의 업무 규칙을 개체·속성·관계로 도출하는 ERD와 이를 PK/FK 기반 테이블로 변환하는 관계형 데이터 모델링 기법으로, 공통 속성은 슈퍼타입/개별 속성은 서브타입으로 분할하는 상속 구조 설계와, 부모 PK가 자식 PK로 전이되는 식별자 관계 vs 일반 속성(FK)으로 전이되는 비식별자 관계의 선택을 포함 |
| 14 | [데이터 옵저버빌리티와 데이터 늪]({{< relref "/docs/subnotes/03_DataProcessing/data-observability-swamp" >}}) | 파이프라인 상태·품질·흐름을 실시간 진단하는 능력과, 거버넌스 부재로 신뢰성을 상실한 데이터 레이크 |
| 15 | [데이터 품질관리 및 ISO 8000]({{< relref "/docs/subnotes/03_DataProcessing/data-quality-iso8000" >}}) | 데이터 자산의 신뢰성·정합성을 유지하는 품질 관리 활동과, 이를 평가하는 국제표준 ISO 8000 |
| 16 | [데이터 가치평가]({{< relref "/docs/subnotes/03_DataProcessing/data-valuation" >}}) | 데이터 거래·활용 시 자산의 경제적 가치를 비용·시장·수익·옵션 접근법으로 산정하는 체계로, 데이터산업진흥법과 연계 |
| 17 | [데이터베이스 ANSI/SPARC 3단계 아키텍처]({{< relref "/docs/subnotes/03_DataProcessing/db-ansi-sparc-architecture" >}}) | 1975년 ANSI 산하 SPARC 위원회가 정의한 DBMS 표준 구조로, 데이터를 외부(사용자)·개념(전사)·내부(물리 저장)의 3단계로 격리·추상화하고 계층 간 사상(Mapping)을 통해 상위 단계 변경이 하위 단계에 영향을 주지 않는 데이터 독립성을 보장 |
| 18 | [분산 데이터베이스의 CAP 및 PACELC 이론]({{< relref "/docs/subnotes/03_DataProcessing/db-cap-pacelc" >}}) | 네트워크 분할 시 가용성-일관성 양자택일을 명시한 CAP 정리와, 정상 상태 지연-일관성까지 확장한 PACELC 정리 |
| 19 | [DB 서버 용량 산정]({{< relref "/docs/subnotes/03_DataProcessing/db-capacity-planning" >}}) | 예상 업무량(Workload)과 데이터 증가율을 분석하여 CPU·Memory·Disk·Network 자원이 SLA(서비스 수준 목표)를 만족하는 최적 하드웨어 규모를 사전에 결정하는 공학적 프로세스로, 테이블별 건수·증가율·보존기간을 기초자료로 TPS→CPU→Memory→Disk 순서로 체계적으로 산출 |
| 20 | [DB 동시성 제어 및 격리수준]({{< relref "/docs/subnotes/03_DataProcessing/db-concurrency-control" >}}) | 다중 트랜잭션 환경에서 이상현상(갱신·현실·모순)을 방지하는 동시성 제어 기술과 격리 수준 표준 |
| 21 | [DB 인덱스: 클러스터드 vs 논클러스터드]({{< relref "/docs/subnotes/03_DataProcessing/db-index-structures" >}}) | 데이터를 인덱스 키 순으로 물리적 정렬·저장하는 클러스터드와, 데이터 포인터(RID)를 따로 두는 논클러스터드 인덱스 |
| 22 | [DB 무결성 제약조건 및 참조 무결성]({{< relref "/docs/subnotes/03_DataProcessing/db-integrity-constraints" >}}) | 데이터 정확성·일관성을 DBMS 수준에서 보장하는 규칙과, 외래키(FK)가 부모 기본키(PK)를 지키는 참조 무결성 |
| 23 | [데이터 모델링 및 정규화]({{< relref "/docs/subnotes/03_DataProcessing/db-normalization" >}}) | 중복을 제거해 이상현상(삽입·삭제·수정)을 방지하는 단계적 정규화와, 성능을 위해 중복을 허용하는 반정규화 |
| 24 | [DB 파티셔닝 및 샤딩]({{< relref "/docs/subnotes/03_DataProcessing/db-partitioning-sharding" >}}) | 단일 DBMS 내 대용량 테이블을 논리 분할하는 파티셔닝과, 여러 물리 노드에 분산 저장하는 샤딩 기술 |
| 25 | [데이터베이스 튜닝]({{< relref "/docs/subnotes/03_DataProcessing/db-performance-tuning" >}}) | DB 성능 병목(Bottleneck)을 체계적으로 진단·제거하여 최소 비용으로 최대 성능을 달성하는 최적화 활동으로, 보색(조사)→이행(적용)→평가(검증)의 3단계 방법론과 설계→Application→Server→System 4계층의 우선순위 절차로 수행 |
| 26 | [DB 회복 기법 및 ARIES]({{< relref "/docs/subnotes/03_DataProcessing/db-recovery-aries" >}}) | 시스템 장애 시 비휘발성 로그와 WAL 원칙으로 DB를 장애 이전 일관 상태로 복구하는 기술 및 표준 알고리즘 |
| 27 | [의사결정나무: 형성절차와 지니·엔트로피 지수]({{< relref "/docs/subnotes/03_DataProcessing/decision-tree-gini-entropy" >}}) | 데이터 속성으로부터 분할 기준을 판별하여 트리 형태로 모델링하는 분류·예측 기법으로, 자식마디의 불순도(이질성)를 가장 낮추는 변수를 분리 기준으로 선택하며 CART는 지니 지수, C4.5는 엔트로피 지수를 불순도 측정 지표로 사용 |
| 28 | [분산 데이터베이스의 투명성]({{< relref "/docs/subnotes/03_DataProcessing/distributed-db-transparency" >}}) | 사용자가 데이터의 물리적 분산 구조를 의식하지 않고 단일 DB처럼 접근하도록 복잡성을 감추는 특성 |
| 29 | [LDW와 DW 다차원 모델링: Star/Snowflake Schema]({{< relref "/docs/subnotes/03_DataProcessing/dw-ldw-dimensional-modeling" >}}) | 기존 EDW와 하둡(Hadoop) 환경을 통합해 정형·비정형 데이터를 재배치나 변환 없이 조회 가능하도록 추상화한 정보분석 아키텍처인 LDW와, 사실 테이블(측정값)과 차원 테이블(분석 관점)의 관계로 OLAP 분석에 최적화된 구조를 설계하는 다차원 모델링(Star/Snowflake Schema) 기법 |
| 30 | [앙상블 기법: 배깅·부스팅·랜덤포레스트]({{< relref "/docs/subnotes/03_DataProcessing/ensemble-bagging-boosting-randomforest" >}}) | 기계학습에서 다수의 모형을 학습시켜 예측·분류 결과를 종합함으로써 단일 모형보다 높은 신뢰성을 확보하고 과적합을 최소화하는 기법으로, 샘플링 기반 배깅·부스팅과 변수 샘플링 기반 랜덤포레스트가 대표적 |
| 31 | [연합학습과 전이학습]({{< relref "/docs/subnotes/03_DataProcessing/federated-transfer-learning" >}}) | 원본 데이터 이동 없이 로컬 학습 결과만 집계하는 연합학습과, 사전학습 모델의 지식을 다른 태스크에 재사용하는 전이학습 |
| 32 | [확장성 해싱과 다차원 색인구조]({{< relref "/docs/subnotes/03_DataProcessing/hashing-multidimensional-index" >}}) | 전체 재해싱 없이 디렉토리·버킷 분할로 확장하는 확장성 해싱과, 고차원 벡터를 탐색하는 다차원 색인구조 |
| 33 | [k-fold 교차검증과 머신러닝 모델 평가 절차]({{< relref "/docs/subnotes/03_DataProcessing/kfold-cross-validation" >}}) | 데이터를 k개 폴드로 분할해 k번 학습·평가를 반복함으로써 일반화 성능을 안정적으로 추정하는 검증 기법과, 회귀·분류 평가지표 |
| 34 | [기계학습 기초와 KNN·K-means·DBSCAN 비교]({{< relref "/docs/subnotes/03_DataProcessing/ml-basics-knn-kmeans-dbscan" >}}) | 데이터로부터 패턴을 학습하는 기계학습 기초와, 이웃 다수결의 K-NN·중심 기반 K-means·밀도 기반 DBSCAN 비교 |
| 35 | [기계학습 성능평가 지표]({{< relref "/docs/subnotes/03_DataProcessing/ml-performance-metrics" >}}) | 실제값-예측값의 혼동 행렬을 기반으로 정밀도·재현율·F1-Score·ROC/PR 곡선을 산출해 모델을 튜닝하는 기술 |
| 36 | [NoSQL 유형, 모델링 패턴, 인메모리/그래프 DB]({{< relref "/docs/subnotes/03_DataProcessing/nosql-types-modeling" >}}) | 고정 스키마·ACID의 RDBMS와 대비되는 유연 스키마·BASE 기반 수평 확장 데이터베이스 NoSQL의 4대 유형(도·키·컬·그)과, 쿼리 패턴을 먼저 분석해 비정규화 구조로 설계하는 Query-Driven 모델링 3대 패턴(임·레·버), 그리고 ACID와 수평 확장을 동시 실현하는 NewSQL, DRAM 상주로 초저지연을 실현하는 인메모리 DB, 관계 탐색에 특화된 Graph DB를 포괄 |
| 37 | [OLAP vs OLTP: 비교와 분리운영]({{< relref "/docs/subnotes/03_DataProcessing/olap-oltp-comparison" >}}) | 요청 조건에 맞는 대량 데이터를 검색해 다차원 뷰를 제공하는 온라인 분석처리(OLAP)와, 트랜잭션 중심으로 거래 데이터를 정확히 처리하는 온라인 트랜잭션처리(OLTP)를 비교하고, 운영 DB와 분석 DB(DW)를 목적·특성이 상이한 이유로 분리 운영해야 하는 근거를 다루는 기업 정보시스템 아키텍처 |
| 38 | [오픈소스 DBMS 전환 및 마이그레이션]({{< relref "/docs/subnotes/03_DataProcessing/opensource-dbms-migration" >}}) | 상용 DBMS(Oracle 등)에서 오픈소스 DBMS(PostgreSQL 등)로 전환해 라이선스 비용과 벤더 종속성을 줄이는 작업 |
| 39 | [아웃라이어(이상치) 탐지]({{< relref "/docs/subnotes/03_DataProcessing/outlier-detection" >}}) | 통계적으로 평균 ±2σ(3σ) 범위 밖의 값처럼 다른 데이터와 현저히 다른 관측값을 찾는 데이터마이닝 기법 |
| 40 | [과적합과 과소적합]({{< relref "/docs/subnotes/03_DataProcessing/overfitting-underfitting" >}}) | 노이즈까지 학습해 일반화 못 하는 과적합과, 패턴조차 못 배우는 과소적합으로 편향-분산 트레이드오프의 양극단 |
| 41 | [공공데이터 품질인증]({{< relref "/docs/subnotes/03_DataProcessing/public-data-quality-certification" >}}) | 「공공데이터법」에 근거해 행정안전부(NIA 위탁)가 공공기관 데이터의 품질 수준을 심사·인증하는 제도 |
| 42 | [랜덤 샘플링과 필터링 기법]({{< relref "/docs/subnotes/03_DataProcessing/sampling-filtering-techniques" >}}) | 빅데이터 스트림 급증으로 전체 데이터 처리가 불가능한 환경에서, 모집단 대표성을 확보하기 위해 각 구성요소가 동일 확률로 추출되도록 하는 랜덤 샘플링과, 데이터 활용 목적에 맞는 유의미한 데이터를 추출해 품질을 개선하는 필터링 기법 |
| 43 | [소셜 네트워크 분석(SNA): 속성과 Centrality]({{< relref "/docs/subnotes/03_DataProcessing/sna-social-network-analysis" >}}) | 사회연결망 이론을 바탕으로 소셜 네트워크의 형태·연결 구조·연결 강도를 계량화하여, 특정 구성원 및 네트워크 자체의 영향력 등 유의미한 지식을 도출하는 비정형 데이터 마이닝 기법 |
| 44 | [공간 데이터베이스: 공간 연산자와 R-Tree 인덱스]({{< relref "/docs/subnotes/03_DataProcessing/spatial-database-gis" >}}) | 점·선·면 등 기하학적 공간 객체(Geometry)와 위상 관계(Topology)를 OGC Simple Features 표준 기반으로 저장·조회·분석하는 전문 데이터베이스로, 공간 객체 간 위상 관계를 판별하는 OGC 표준 공간 연산자(Equals/Intersects/Contains/Distance/Touches)와, MBR(최소 경계 사각형)을 계층적으로 그룹화해 공간 질의를 효율화하는 R-Tree/R+-Tree/R*-Tree 인덱스 구조를 포함 |
| 45 | [관계대수, SQL JOIN, 옵티마이저]({{< relref "/docs/subnotes/03_DataProcessing/sql-join-optimizer" >}}) | 릴레이션을 입력받아 수학적 연산으로 새 릴레이션을 만드는 절차적 질의 언어인 관계대수와, 이를 구현한 SQL의 논리적 JOIN 유형·물리적 조인 알고리즘(NL/SM/Hash), 그리고 선언형 SQL을 최소 비용의 실행 계획으로 변환하는 옵티마이저(RBO/CBO)의 통합 체계 |
| 46 | [스택과 큐: 입출력 원리와 순환큐 구현]({{< relref "/docs/subnotes/03_DataProcessing/stack-queue-linear-structures" >}}) | 한쪽 끝(Top)에서만 삽입·삭제하는 후입선출 스택, Rear 삽입·Front 삭제하는 선입선출 큐, 모듈러 연산으로 공간을 재사용하는 순환 큐 |
| 47 | [정적 SQL과 동적 SQL]({{< relref "/docs/subnotes/03_DataProcessing/static-dynamic-sql" >}}) | 컴파일 시점에 실행 계획이 확정·캐시되는 정적 SQL과, 런타임에 문자열을 조립·파싱·실행하는 동적 SQL |
| 48 | [SVM: 마진 분류와 커널 트릭]({{< relref "/docs/subnotes/03_DataProcessing/svm-classification" >}}) | 클래스 간 마진을 최대화하는 결정경계를 찾아 데이터를 분류하고, 비선형 문제는 커널 트릭으로 고차원 매핑해 확장하는 지도학습 기법 |
| 49 | [텍스트 마이닝과 오피니언 마이닝: 비정형 데이터 분석]({{< relref "/docs/subnotes/03_DataProcessing/text-mining-opinion-mining" >}}) | 자연어로 구성된 비정형 텍스트 데이터에서 NLP 기술로 패턴·관계를 추출해 가치 있는 정보를 찾는 텍스트 마이닝과, 그중 긍/부정 감성 판별에 특화된 오피니언 마이닝을 포괄하며, 귀납적(데이터 주도) 접근인 데이터마이닝과 연역적(가설 주도) 접근인 통계분석의 철학적 차이를 포함하는 비정형 데이터 분석 체계 |
| 50 | [TEXT2SQL: 자연어의 SQL 변환]({{< relref "/docs/subnotes/03_DataProcessing/text2sql" >}}) | 자연어 질의를 SQL로 자동 변환하는 기술로, LLM 기반 스키마 이해를 통해 비전문가도 DB를 조회하게 하는 데이터 민주화 기술 |
| 51 | [시계열 분석: 정상성과 AR·MA·ARIMA]({{< relref "/docs/subnotes/03_DataProcessing/time-series-analysis-arima" >}}) | 연도·분기·월별 등 시간 순서로 관측되는 자료를 정상성(Stationary) 가정 하에 분석하여 미래를 예측하는 기법으로, AR·MA·ARIMA 모형을 통해 추세·계절·순환·불규칙 요인을 분해 |
| 52 | [벡터 데이터베이스와 HNSW/IVF 검색 알고리즘]({{< relref "/docs/subnotes/03_DataProcessing/vector-database-hnsw-ivf" >}}) | 고차원 실수 벡터(임베딩)를 저장하고 의미적 유사도로 ANN(근사 최근접 이웃) 검색을 수행하는 RAG 특화 DB 기술 |
