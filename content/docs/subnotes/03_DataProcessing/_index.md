---
bookCollapseSection: true
title: "데이터처리"
---

| 번호 | 토픽명 | 정의 |
| :--- | :--- | :--- |
| 1 | [AI 학습용 데이터 품질관리]({{< relref "/docs/subnotes/03_DataProcessing/ai-training-data-quality" >}}) | 훈련 데이터의 정확성·완전성·일관성·대표성을 체계적으로 확보하는 활동으로, AI 모델 성능을 직접 좌우 |
| 2 | [연관 규칙 분석: 지지도·신뢰도·향상도]({{< relref "/docs/subnotes/03_DataProcessing/association-rule-analysis" >}}) | 트랜잭션 데이터에서 항목 간 동시 출현 패턴(A→B)을 지지도·신뢰도·향상도로 정량화하는 데이터마이닝 기법 |
| 3 | [기본 자료구조: 연결 리스트와 이진 탐색 트리]({{< relref "/docs/subnotes/03_DataProcessing/basic-data-structures" >}}) | 포인터로 노드를 연결하는 동적 자료구조인 연결 리스트와, 좌<부모<우 속성으로 평균 O(log n) 탐색을 지원하는 이진 탐색 트리 |
| 4 | [빅데이터 시각화]({{< relref "/docs/subnotes/03_DataProcessing/bigdata-visualization" >}}) | 대용량·다양·고속의 빅데이터를 차트·그래프·인터랙티브 대시보드 등 시각적 형태로 표현하는 기술 |
| 5 | [비지도 군집분석: SOM과 실루엣 계수]({{< relref "/docs/subnotes/03_DataProcessing/clustering-som-silhouette" >}}) | 경쟁 학습으로 고차원 데이터를 2D 격자에 투영하는 비지도 신경망 SOM과, 군집 응집도·분리도를 정량화하는 실루엣 계수 |
| 6 | [CNN과 RNN 비교]({{< relref "/docs/subnotes/03_DataProcessing/cnn-vs-rnn" >}}) | 합성곱 연산으로 공간적 특징을 추출하는 CNN과, 순환 구조로 시간적 순서 의존성을 학습하는 RNN |
| 7 | [이미지 데이터 어노테이션]({{< relref "/docs/subnotes/03_DataProcessing/data-annotation" >}}) | AI/ML 모델 학습을 위해 원시 이미지에 레이블·메타데이터를 부착하는 작업으로 컴퓨터 비전 품질을 좌우 |
| 8 | [데이터 옵저버빌리티와 데이터 늪]({{< relref "/docs/subnotes/03_DataProcessing/data-observability-swamp" >}}) | 파이프라인 상태·품질·흐름을 실시간 진단하는 능력과, 거버넌스 부재로 신뢰성을 상실한 데이터 레이크 |
| 9 | [데이터 품질관리 및 ISO 8000]({{< relref "/docs/subnotes/03_DataProcessing/data-quality-iso8000" >}}) | 데이터 자산의 신뢰성·정합성을 유지하는 품질 관리 활동과, 이를 평가하는 국제표준 ISO 8000 |
| 10 | [데이터 가치평가]({{< relref "/docs/subnotes/03_DataProcessing/data-valuation" >}}) | 데이터 거래·활용 시 자산의 경제적 가치를 비용·시장·수익·옵션 접근법으로 산정하는 체계로, 데이터산업진흥법과 연계 |
| 11 | [분산 데이터베이스의 CAP 및 PACELC 이론]({{< relref "/docs/subnotes/03_DataProcessing/db-cap-pacelc" >}}) | 네트워크 분할 시 가용성-일관성 양자택일을 명시한 CAP 정리와, 정상 상태 지연-일관성까지 확장한 PACELC 정리 |
| 12 | [DB 동시성 제어 및 격리수준]({{< relref "/docs/subnotes/03_DataProcessing/db-concurrency-control" >}}) | 다중 트랜잭션 환경에서 이상현상(갱신·현실·모순)을 방지하는 동시성 제어 기술과 격리 수준 표준 |
| 13 | [DB 인덱스: 클러스터드 vs 논클러스터드]({{< relref "/docs/subnotes/03_DataProcessing/db-index-structures" >}}) | 데이터를 인덱스 키 순으로 물리적 정렬·저장하는 클러스터드와, 데이터 포인터(RID)를 따로 두는 논클러스터드 인덱스 |
| 14 | [DB 무결성 제약조건 및 참조 무결성]({{< relref "/docs/subnotes/03_DataProcessing/db-integrity-constraints" >}}) | 데이터 정확성·일관성을 DBMS 수준에서 보장하는 규칙과, 외래키(FK)가 부모 기본키(PK)를 지키는 참조 무결성 |
| 15 | [데이터 모델링 및 정규화]({{< relref "/docs/subnotes/03_DataProcessing/db-normalization" >}}) | 중복을 제거해 이상현상(삽입·삭제·수정)을 방지하는 단계적 정규화와, 성능을 위해 중복을 허용하는 반정규화 |
| 16 | [DB 파티셔닝 및 샤딩]({{< relref "/docs/subnotes/03_DataProcessing/db-partitioning-sharding" >}}) | 단일 DBMS 내 대용량 테이블을 논리 분할하는 파티셔닝과, 여러 물리 노드에 분산 저장하는 샤딩 기술 |
| 17 | [DB 회복 기법 및 ARIES]({{< relref "/docs/subnotes/03_DataProcessing/db-recovery-aries" >}}) | 시스템 장애 시 비휘발성 로그와 WAL 원칙으로 DB를 장애 이전 일관 상태로 복구하는 기술 및 표준 알고리즘 |
| 18 | [분산 데이터베이스의 투명성]({{< relref "/docs/subnotes/03_DataProcessing/distributed-db-transparency" >}}) | 사용자가 데이터의 물리적 분산 구조를 의식하지 않고 단일 DB처럼 접근하도록 복잡성을 감추는 특성 |
| 19 | [연합학습과 전이학습]({{< relref "/docs/subnotes/03_DataProcessing/federated-transfer-learning" >}}) | 원본 데이터 이동 없이 로컬 학습 결과만 집계하는 연합학습과, 사전학습 모델의 지식을 다른 태스크에 재사용하는 전이학습 |
| 20 | [확장성 해싱과 다차원 색인구조]({{< relref "/docs/subnotes/03_DataProcessing/hashing-multidimensional-index" >}}) | 전체 재해싱 없이 디렉토리·버킷 분할로 확장하는 확장성 해싱과, 고차원 벡터를 탐색하는 다차원 색인구조 |
| 21 | [k-fold 교차검증과 머신러닝 모델 평가 절차]({{< relref "/docs/subnotes/03_DataProcessing/kfold-cross-validation" >}}) | 데이터를 k개 폴드로 분할해 k번 학습·평가를 반복함으로써 일반화 성능을 안정적으로 추정하는 검증 기법과, 회귀·분류 평가지표 |
| 22 | [기계학습 기초와 KNN·K-means·DBSCAN 비교]({{< relref "/docs/subnotes/03_DataProcessing/ml-basics-knn-kmeans-dbscan" >}}) | 데이터로부터 패턴을 학습하는 기계학습 기초와, 이웃 다수결의 K-NN·중심 기반 K-means·밀도 기반 DBSCAN 비교 |
| 23 | [기계학습 성능평가 지표]({{< relref "/docs/subnotes/03_DataProcessing/ml-performance-metrics" >}}) | 실제값-예측값의 혼동 행렬을 기반으로 정밀도·재현율·F1-Score·ROC/PR 곡선을 산출해 모델을 튜닝하는 기술 |
| 24 | [오픈소스 DBMS 전환 및 마이그레이션]({{< relref "/docs/subnotes/03_DataProcessing/opensource-dbms-migration" >}}) | 상용 DBMS(Oracle 등)에서 오픈소스 DBMS(PostgreSQL 등)로 전환해 라이선스 비용과 벤더 종속성을 줄이는 작업 |
| 25 | [아웃라이어(이상치) 탐지]({{< relref "/docs/subnotes/03_DataProcessing/outlier-detection" >}}) | 통계적으로 평균 ±2σ(3σ) 범위 밖의 값처럼 다른 데이터와 현저히 다른 관측값을 찾는 데이터마이닝 기법 |
| 26 | [과적합과 과소적합]({{< relref "/docs/subnotes/03_DataProcessing/overfitting-underfitting" >}}) | 노이즈까지 학습해 일반화 못 하는 과적합과, 패턴조차 못 배우는 과소적합으로 편향-분산 트레이드오프의 양극단 |
| 27 | [공공데이터 품질인증]({{< relref "/docs/subnotes/03_DataProcessing/public-data-quality-certification" >}}) | 「공공데이터법」에 근거해 행정안전부(NIA 위탁)가 공공기관 데이터의 품질 수준을 심사·인증하는 제도 |
| 28 | [스택과 큐: 입출력 원리와 순환큐 구현]({{< relref "/docs/subnotes/03_DataProcessing/stack-queue-linear-structures" >}}) | 한쪽 끝(Top)에서만 삽입·삭제하는 후입선출 스택, Rear 삽입·Front 삭제하는 선입선출 큐, 모듈러 연산으로 공간을 재사용하는 순환 큐 |
| 29 | [정적 SQL과 동적 SQL]({{< relref "/docs/subnotes/03_DataProcessing/static-dynamic-sql" >}}) | 컴파일 시점에 실행 계획이 확정·캐시되는 정적 SQL과, 런타임에 문자열을 조립·파싱·실행하는 동적 SQL |
| 30 | [SVM: 마진 분류와 커널 트릭]({{< relref "/docs/subnotes/03_DataProcessing/svm-classification" >}}) | 클래스 간 마진을 최대화하는 결정경계를 찾아 데이터를 분류하고, 비선형 문제는 커널 트릭으로 고차원 매핑해 확장하는 지도학습 기법 |
| 31 | [TEXT2SQL: 자연어의 SQL 변환]({{< relref "/docs/subnotes/03_DataProcessing/text2sql" >}}) | 자연어 질의를 SQL로 자동 변환하는 기술로, LLM 기반 스키마 이해를 통해 비전문가도 DB를 조회하게 하는 데이터 민주화 기술 |
| 32 | [벡터 데이터베이스와 HNSW/IVF 검색 알고리즘]({{< relref "/docs/subnotes/03_DataProcessing/vector-database-hnsw-ivf" >}}) | 고차원 실수 벡터(임베딩)를 저장하고 의미적 유사도로 ANN(근사 최근접 이웃) 검색을 수행하는 RAG 특화 DB 기술 |
