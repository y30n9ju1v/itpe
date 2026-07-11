---
bookCollapseSection: true
title: "데이터처리"
---

| 토픽명 | 정의 |
| :--- | :--- |
| [AI 학습용 데이터 품질관리]({{< relref "/docs/subnotes/03_DataProcessing/ai-training-data-quality" >}}) | 기계학습 모델 성능을 좌우하는 훈련 데이터의 정확성·완전성·일관성·대표성을 체계적으로 확보하는 활동으로, "Garbage In, Garbage Out" 원칙에 따라 데이터 품질이 AI 모델 성능을 직접 결정 |
| [연관 규칙 분석: 지지도·신뢰도·향상도]({{< relref "/docs/subnotes/03_DataProcessing/association-rule-analysis" >}}) | 대규모 트랜잭션 데이터에서 항목 간 동시 출현 패턴(A→B)을 지지도·신뢰도·향상도로 정량화하여 발견하는 데이터마이닝 기법으로, 장바구니 분석·추천 시스템에 활용 |
| [기본 자료구조: 연결 리스트와 이진 탐색 트리]({{< relref "/docs/subnotes/03_DataProcessing/basic-data-structures" >}}) | 연결 리스트는 노드가 포인터로 논리적으로 연결되는 동적 자료구조이며, 이진 탐색 트리는 좌 < 부모 < 우 속성을 만족하는 이진 트리로 평균 O(log n) 탐색을 지원하는 자료구조 |
| [빅데이터 시각화]({{< relref "/docs/subnotes/03_DataProcessing/bigdata-visualization" >}}) | 대용량·다양·고속의 빅데이터를 인간이 직관적으로 이해할 수 있도록 차트·그래프·지도·인터랙티브 대시보드 등 시각적 형태로 표현하는 기술과 방법론 |
| [비지도 군집분석: SOM과 실루엣 계수]({{< relref "/docs/subnotes/03_DataProcessing/clustering-som-silhouette" >}}) | SOM은 경쟁 학습으로 고차원 데이터를 2D 격자에 위상 보존 투영하는 비지도 신경망 군집화 기법이며, 실루엣 계수는 클러스터링 결과의 응집도·분리도를 정량화해 품질을 평가하는 지표 |
| [이미지 데이터 어노테이션]({{< relref "/docs/subnotes/03_DataProcessing/data-annotation" >}}) | AI/ML 모델 학습을 위해 원시 이미지 데이터에 레이블·메타데이터·주석을 부착하는 작업으로, 컴퓨터 비전 모델(분류·탐지·분할)의 품질을 결정하는 핵심 전처리 과정 |
| [데이터 옵저버빌리티와 데이터 늪]({{< relref "/docs/subnotes/03_DataProcessing/data-observability-swamp" >}}) | 데이터 관측가능성은 파이프라인 전반의 상태·품질·흐름을 실시간으로 이해·진단하는 능력이며, 데이터 늪은 거버넌스 없이 운영된 데이터 레이크가 품질·접근성·신뢰성을 상실해 활용 가치가 없는 상태로 전락한 것 |
| [데이터 품질관리 및 ISO 8000]({{< relref "/docs/subnotes/03_DataProcessing/data-quality-iso8000" >}}) | 조직 내 데이터 자산의 신뢰성과 정합성을 유지하기 위한 **품질 관리 활동** 및 비즈니스 거버넌스 체계와, 데이터 및 프로세스 품질을 평가하는 **국제 표준인 ISO 8000** |
| [데이터 가치평가]({{< relref "/docs/subnotes/03_DataProcessing/data-valuation" >}}) | 데이터 거래·활용 시 데이터 자산의 경제적 가치를 비용·시장·수익·옵션 접근법 등으로 객관적으로 산정하는 체계로, 데이터산업진흥법(2022) 시행과 함께 데이터 거래소 활성화를 위해 제도화되고 있는 방법론 |
| [분산 데이터베이스의 CAP 및 PACELC 이론]({{< relref "/docs/subnotes/03_DataProcessing/db-cap-pacelc" >}}) | 분산 환경에서 네트워크 분할 시 가용성과 일관성의 양자택일을 명시한 **CAP 정리**와, 정상 상태의 지연시간-일관성 트레이드오프까지 확장 정립한 **PACELC 정리** |
| [DB 동시성 제어 및 격리수준]({{< relref "/docs/subnotes/03_DataProcessing/db-concurrency-control" >}}) | 다중 트랜잭션 환경에서 일관성 및 정합성을 훼손하는 **이상현상(갱·현·모·이)**을 방지하는 **동시성 제어 기술**과 성능/정합성을 조율하는 **격리 수준(미·확·반·직) 표준** |
| [DB 인덱스: 클러스터드 vs 논클러스터드]({{< relref "/docs/subnotes/03_DataProcessing/db-index-structures" >}}) | 인덱스는 컬럼 값과 레코드 위치를 매핑해 검색 속도를 높이는 자료구조로, 클러스터드 인덱스는 데이터를 인덱스 키 순으로 물리적으로 정렬·저장하고 논클러스터드 인덱스는 별도 구조에 데이터 포인터(RID)를 저장 |
| [DB 무결성 제약조건 및 참조 무결성]({{< relref "/docs/subnotes/03_DataProcessing/db-integrity-constraints" >}}) | 데이터의 정확성·일관성·유효성을 DBMS 수준에서 보장하기 위한 규칙의 총칭이며, 그중 참조 무결성은 외래키(FK) 값이 부모 테이블의 기본키(PK)에 존재하거나 NULL이어야 한다는 제약으로 고아 레코드 발생을 방지 |
| [데이터 모델링 및 정규화]({{< relref "/docs/subnotes/03_DataProcessing/db-normalization" >}}) | 데이터 중복성을 제거하여 **이상현상(삽·삭·수)**을 방지하는 단계적 **정규화(원·부·이·결·다·조)** 과정과, 성능 및 개발 편의성을 위해 무결성을 양보하고 의도적으로 중복을 허용하는 **반정규화 기술** |
| [DB 파티셔닝 및 샤딩]({{< relref "/docs/subnotes/03_DataProcessing/db-partitioning-sharding" >}}) | 단일 DBMS 내에서 대용량 테이블을 논리적으로 분할하는 **파티셔닝**과, 데이터 스케일아웃을 위해 여러 독립 물리 노드에 데이터를 분산 저장하는 **샤딩 기술** |
| [DB 회복 기법 및 ARIES]({{< relref "/docs/subnotes/03_DataProcessing/db-recovery-aries" >}}) | 트랜잭션 수행 중 시스템 장애 시, 비휘발성 로그와 WAL 원칙을 활용하여 데이터베이스를 장애 이전의 **일관성 있는 상태(ACID의 Durability)로 복구하는 기술 및 표준 알고리즘** |
| [분산 데이터베이스의 투명성]({{< relref "/docs/subnotes/03_DataProcessing/distributed-db-transparency" >}}) | 사용자가 데이터의 물리적 분산 구조를 의식하지 않고 마치 단일 DB처럼 접근할 수 있도록, 분산 시스템이 위치·분할·복제 등의 복잡성을 감추는 특성 |
| [확장성 해싱과 다차원 색인구조]({{< relref "/docs/subnotes/03_DataProcessing/hashing-multidimensional-index" >}}) | 확장성 해싱은 전체 재해싱 없이 디렉토리와 버킷의 분할로 동적 확장하는 해시 기법이며, 다차원 색인구조는 2차원 이상 공간·고차원 벡터 데이터를 효율적으로 탐색하기 위한 색인 기법 |
| [기계학습 성능평가 지표]({{< relref "/docs/subnotes/03_DataProcessing/ml-performance-metrics" >}}) | 기계학습 분류 모델의 예측 성능을 평가하기 위해 실제값과 예측값의 매트릭스인 **혼동 행렬**을 정의하고, 이를 기반으로 **정밀도, 재현율, F1-Score, ROC/PR 곡선**을 산출하여 모델을 튜닝하는 기술 |
| [오픈소스 DBMS 전환 및 마이그레이션]({{< relref "/docs/subnotes/03_DataProcessing/opensource-dbms-migration" >}}) | 상용 DBMS(Oracle, MS SQL 등)에서 오픈소스 DBMS(PostgreSQL, MySQL 등)로 전환하는 것으로, 라이선스 비용 절감과 벤더 종속성 탈피를 목적으로 하며 SQL 방언·데이터 타입 차이로 인한 이기종 전환 복잡성 관리가 핵심 |
| [아웃라이어(이상치) 탐지]({{< relref "/docs/subnotes/03_DataProcessing/outlier-detection" >}}) | 데이터 집합에서 다른 데이터와 현저히 다른 패턴을 보이는 관측값으로, 통계적으로는 평균 ±2σ(3σ) 범위 밖의 값이며 금융 사기·장비 이상 감지 등에서 그 자체가 분석 목표가 되는 데이터마이닝 대상 |
| [과적합과 과소적합]({{< relref "/docs/subnotes/03_DataProcessing/overfitting-underfitting" >}}) | 과적합은 모델이 훈련 데이터의 노이즈까지 학습하여 일반화되지 않는 현상이고, 과소적합은 모델이 너무 단순하여 훈련 데이터의 패턴조차 학습하지 못하는 현상으로, 편향-분산 트레이드오프의 양극단 |
| [공공데이터 품질인증]({{< relref "/docs/subnotes/03_DataProcessing/public-data-quality-certification" >}}) | 「공공데이터의 제공 및 이용 활성화에 관한 법률」 제22조의2에 근거하여 행정안전부(NIA 위탁)가 공공기관 보유 데이터의 품질 수준을 심사·인증하는 제도로, 공공데이터의 신뢰성과 활용성 제고가 목적 |
| [정적 SQL과 동적 SQL]({{< relref "/docs/subnotes/03_DataProcessing/static-dynamic-sql" >}}) | 정적 SQL은 컴파일 시점에 SQL 문장이 확정되어 실행 계획이 캐시되는 방식이고, 동적 SQL은 런타임에 SQL 문자열을 조립·파싱·실행하는 방식으로 유연성과 보안 위험이 상반됨 |
| [TEXT2SQL: 자연어의 SQL 변환]({{< relref "/docs/subnotes/03_DataProcessing/text2sql" >}}) | 자연어 질의를 SQL 쿼리로 자동 변환하는 기술로, LLM 기반 스키마 이해와 의도 파악을 통해 비전문가도 데이터베이스를 직접 조회할 수 있게 하는 데이터 민주화(Data Democratization) 핵심 기술 |
| [벡터 데이터베이스와 HNSW/IVF 검색 알고리즘]({{< relref "/docs/subnotes/03_DataProcessing/vector-database-hnsw-ivf" >}}) | 고차원 실수 벡터(임베딩)를 저장하고 의미적 유사도 기준으로 **ANN(근사 최근접 이웃) 검색**을 수행하는 LLM 및 RAG 기반 AI 특화 데이터베이스 기술 |
