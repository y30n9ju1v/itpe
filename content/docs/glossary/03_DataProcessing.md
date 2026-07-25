---
bookCollapseSection: false
title: "자료처리 용어집"
---

| 용어 | 정의 | 출처 |
| :--- | :--- | :--- |
| 2PC | 분산 트랜잭션 원자성 보장 프로토콜 | [분산 데이터베이스의 CAP 및 PACELC 이론]({{< relref "/docs/subnotes/03_DataProcessing/db-cap-pacelc" >}}) |
| 2PL (Two-Phase Locking) | 락 획득·해제 단계 엄격분리한 동시성제어 | [DB 동시성 제어 및 격리수준]({{< relref "/docs/subnotes/03_DataProcessing/db-concurrency-control" >}}) |
| 4NF / 5NF | 다치종속성·조인종속성 제거하는 정규형 | [데이터 모델링 및 정규화]({{< relref "/docs/subnotes/03_DataProcessing/db-normalization" >}}) |
| ACID | 원자성·일관성·격리성·지속성 트랜잭션 4대 특성 | [DB 동시성 제어 및 격리수준]({{< relref "/docs/subnotes/03_DataProcessing/db-concurrency-control" >}}) |
| ANN (Approximate Nearest Neighbor) | 고차원 벡터의 근사 최근접 이웃 검색 | [벡터 데이터베이스와 HNSW/IVF 검색 알고리즘]({{< relref "/docs/subnotes/03_DataProcessing/vector-database-hnsw-ivf" >}}) |
| Apriori 알고리즘 | 빈발 항목집합을 상향식으로 확장하는 탐색기법 | [연관 규칙 분석: 지지도·신뢰도·향상도]({{< relref "/docs/subnotes/03_DataProcessing/association-rule-analysis" >}}) |
| ARI (Adjusted Rand Index) | 정답레이블 있을 때 군집결과 보정평가 지수 | [데이터 분석 Flow: EDA-전처리-모델링-평가]({{< relref "/docs/subnotes/03_DataProcessing/data-analysis-flow-eda" >}}) |
| ARIES | 분석-리도-언도 3단계로 진행되는 DB 회복 알고리즘 | [DB 회복 기법 및 ARIES]({{< relref "/docs/subnotes/03_DataProcessing/db-recovery-aries" >}}) |
| ARIMA | AR+MA를 차분으로 결합한 시계열 예측모형 | [시계열 분석: 정상성과 AR·MA·ARIMA]({{< relref "/docs/subnotes/03_DataProcessing/time-series-analysis-arima" >}}) |
| AVL 트리 | 좌우 높이차 1 이하로 유지하는 엄격균형 이진트리 | [기본 자료구조: 연결 리스트와 이진 탐색 트리]({{< relref "/docs/subnotes/03_DataProcessing/basic-data-structures" >}}) |
| B+Tree | 리프노드에 데이터·포인터 저장하는 DB 기본 인덱스구조 | [DB 인덱스: 클러스터드 vs 논클러스터드]({{< relref "/docs/subnotes/03_DataProcessing/db-index-structures" >}}) |
| B-트리 | 모든 리프가 동일깊이인 균형트리, 디스크 DB 인덱스 활용 | [기본 자료구조: 연결 리스트와 이진 탐색 트리]({{< relref "/docs/subnotes/03_DataProcessing/basic-data-structures" >}}) |
| BASE | 기본가용·소프트상태·결과적일관성이라는 NoSQL 특성 | [NoSQL 유형, 모델링 패턴, 인메모리/그래프 DB]({{< relref "/docs/subnotes/03_DataProcessing/nosql-types-modeling" >}}) |
| BCNF | 모든 결정자가 후보키인 강한 정규형 | [데이터 모델링 및 정규화]({{< relref "/docs/subnotes/03_DataProcessing/db-normalization" >}}) |
| Bloom Filter | 확률적 자료구조 기반 원소포함 여부 판단 필터 | [랜덤 샘플링과 필터링 기법]({{< relref "/docs/subnotes/03_DataProcessing/sampling-filtering-techniques" >}}) |
| BMT (Benchmark Test) | 벤더 실측 기반 용량산정 결과 최종검증 | [DB 서버 용량 산정]({{< relref "/docs/subnotes/03_DataProcessing/db-capacity-planning" >}}) |
| BMU (Best Matching Unit) | SOM에서 입력벡터와 가장 가까운 경쟁노드 | [비지도 군집분석: SOM과 실루엣 계수]({{< relref "/docs/subnotes/03_DataProcessing/clustering-som-silhouette" >}}) |
| Bootstrap | 복원추출 기반 샘플링, 배깅의 기반 기법 | [앙상블 기법: 배깅·부스팅·랜덤포레스트]({{< relref "/docs/subnotes/03_DataProcessing/ensemble-bagging-boosting-randomforest" >}}) |
| BPTT | RNN 시간축을 따라 역전파하는 학습기법 | [CNN과 RNN 비교]({{< relref "/docs/subnotes/03_DataProcessing/cnn-vs-rnn" >}}) |
| CAP 정리 | 일관성·가용성·분할내성 3중 택2 원칙 | [분산 데이터베이스의 CAP 및 PACELC 이론]({{< relref "/docs/subnotes/03_DataProcessing/db-cap-pacelc" >}}) |
| CART | 지니지수로 이진분리하는 의사결정나무 알고리즘 | [의사결정나무: 형성절차와 지니·엔트로피 지수]({{< relref "/docs/subnotes/03_DataProcessing/decision-tree-gini-entropy" >}}) |
| CDC (Change Data Capture) | 변경분만 증분 동기화하는 데이터 이전기법 | [오픈소스 DBMS 전환 및 마이그레이션]({{< relref "/docs/subnotes/03_DataProcessing/opensource-dbms-migration" >}}) |
| CHAID | Chi-square 기반 다지분리 의사결정나무 알고리즘 | [의사결정나무: 형성절차와 지니·엔트로피 지수]({{< relref "/docs/subnotes/03_DataProcessing/decision-tree-gini-entropy" >}}) |
| CLR (Compensating Log Record) | Undo 실행 시 작성하는 보상 로그레코드 | [DB 회복 기법 및 ARIES]({{< relref "/docs/subnotes/03_DataProcessing/db-recovery-aries" >}}) |
| CNN | 합성곱으로 공간적 지역특징을 계층추출하는 신경망 | [CNN과 RNN 비교]({{< relref "/docs/subnotes/03_DataProcessing/cnn-vs-rnn" >}}) |
| CoA (Center of Analytics) | 비즈니스전략-분석을 연결하는 분석 컨트롤타워 조직 | [데이터 분석 거버넌스: CoA·준비도·성숙도]({{< relref "/docs/subnotes/03_DataProcessing/data-analysis-governance-maturity" >}}) |
| Confusion Matrix | 실제값-예측값 매트릭스(TP/FP/FN/TN) | [기계학습 성능평가 지표]({{< relref "/docs/subnotes/03_DataProcessing/ml-performance-metrics" >}}) |
| CRISP-DM | 비즈니스이해 중심 6단계 데이터마이닝 표준 방법론 | [데이터마이닝 방법론: CRISP-DM과 SEMMA]({{< relref "/docs/subnotes/03_DataProcessing/crisp-dm-semma" >}}) |
| DBSCAN | 밀도 높은 영역을 군집으로, 낮은 점은 노이즈로 분류 | [기계학습 기초와 KNN·K-means·DBSCAN 비교]({{< relref "/docs/subnotes/03_DataProcessing/ml-basics-knn-kmeans-dbscan" >}}) |
| DE-9IM | 공간객체 위상관계를 정의하는 9교차행렬 패턴 | [공간 데이터베이스: 공간 연산자와 R-Tree 인덱스]({{< relref "/docs/subnotes/03_DataProcessing/spatial-database-gis" >}}) |
| DQC-V / DQC-M | 데이터 값 진단 / 데이터 관리프로세스 진단 체계 | [데이터 품질관리 및 ISO 8000]({{< relref "/docs/subnotes/03_DataProcessing/data-quality-iso8000" >}}) |
| Dropout | 학습 시 일부 뉴런을 비활성화해 과적합 완화 | [과적합과 과소적합]({{< relref "/docs/subnotes/03_DataProcessing/overfitting-underfitting" >}}) |
| EDA (Exploratory Data Analysis) | 시각화·통계지표로 데이터 특성을 탐색하는 단계 | [데이터 분석 Flow: EDA-전처리-모델링-평가]({{< relref "/docs/subnotes/03_DataProcessing/data-analysis-flow-eda" >}}) |
| Embedding / Referencing / Bucketing | NoSQL 쿼리패턴 우선 분석 기반 3대 모델링 패턴 | [NoSQL 유형, 모델링 패턴, 인메모리/그래프 DB]({{< relref "/docs/subnotes/03_DataProcessing/nosql-types-modeling" >}}) |
| Entropy Index | 무질서도를 측정하는 C4.5의 불순도 지표 | [의사결정나무: 형성절차와 지니·엔트로피 지수]({{< relref "/docs/subnotes/03_DataProcessing/decision-tree-gini-entropy" >}}) |
| ERD (Entity Relationship Diagram) | 개체·속성·관계를 도출하는 데이터 모델링 다이어그램 | [데이터 모델링: ERD, 슈퍼/서브타입, 식별자 관계]({{< relref "/docs/subnotes/03_DataProcessing/data-modeling-erd-relationship" >}}) |
| Fact Table / Dimension Table | 사실(측정값) 테이블과 분석관점(차원) 테이블 | [LDW와 DW 다차원 모델링: Star/Snowflake Schema]({{< relref "/docs/subnotes/03_DataProcessing/dw-ldw-dimensional-modeling" >}}) |
| FedAvg | 데이터수 비례 가중평균으로 집계하는 연합학습 알고리즘 | [연합학습과 전이학습]({{< relref "/docs/subnotes/03_DataProcessing/federated-transfer-learning" >}}) |
| Feature Extraction / Fine-tuning | 전이학습 2대 전략(출력층만 학습 / 전체·일부 재학습) | [연합학습과 전이학습]({{< relref "/docs/subnotes/03_DataProcessing/federated-transfer-learning" >}}) |
| Five Pillars | 신선도·분포·볼륨·스키마·계보 옵저버빌리티 5대 지표 | [데이터 옵저버빌리티와 데이터 늪]({{< relref "/docs/subnotes/03_DataProcessing/data-observability-swamp" >}}) |
| Gini Index | 이질성을 측정하는 CART의 불순도 지표 | [의사결정나무: 형성절차와 지니·엔트로피 지수]({{< relref "/docs/subnotes/03_DataProcessing/decision-tree-gini-entropy" >}}) |
| Hash Join | 빌드+프로브 해시맵 기반 등가조인 알고리즘 | [관계대수, SQL JOIN, 옵티마이저]({{< relref "/docs/subnotes/03_DataProcessing/sql-join-optimizer" >}}) |
| HNSW | 계층적 그래프 기반 근사 최근접이웃 탐색 인덱스 | [벡터 데이터베이스와 HNSW/IVF 검색 알고리즘]({{< relref "/docs/subnotes/03_DataProcessing/vector-database-hnsw-ivf" >}}) |
| IAA (Inter-Annotator Agreement) | 어노테이터 간 레이블 일치도 지표 | [이미지 데이터 어노테이션]({{< relref "/docs/subnotes/03_DataProcessing/data-annotation" >}}) |
| Index-Free Adjacency | 이웃노드에 직접 포인터로 접근하는 그래프DB 특성 | [NoSQL 유형, 모델링 패턴, 인메모리/그래프 DB]({{< relref "/docs/subnotes/03_DataProcessing/nosql-types-modeling" >}}) |
| ISO 8000 | 구문·의미론·적합성 3대 요건의 데이터품질 국제표준 | [데이터 품질관리 및 ISO 8000]({{< relref "/docs/subnotes/03_DataProcessing/data-quality-iso8000" >}}) |
| Isolation Forest | 모델기반 이상치 탐지 알고리즘 | [아웃라이어(이상치) 탐지]({{< relref "/docs/subnotes/03_DataProcessing/outlier-detection" >}}) |
| IVF (Inverted File Index) | K-Means 클러스터링 기반 벡터 역파일 인덱스 | [벡터 데이터베이스와 HNSW/IVF 검색 알고리즘]({{< relref "/docs/subnotes/03_DataProcessing/vector-database-hnsw-ivf" >}}) |
| k-fold 교차검증 | k개 폴드를 순환하며 학습·검증해 성능을 평가하는 기법 | [k-fold 교차검증과 머신러닝 모델 평가 절차]({{< relref "/docs/subnotes/03_DataProcessing/kfold-cross-validation" >}}) |
| K-DATA DQ 인증 | 민간 대상 관리체계+값품질 데이터품질 인증제도 | [공공데이터 품질인증]({{< relref "/docs/subnotes/03_DataProcessing/public-data-quality-certification" >}}) |
| K-D Tree | 레벨마다 축을 교대분할하는 저차원 다차원 색인 | [확장성 해싱과 다차원 색인구조]({{< relref "/docs/subnotes/03_DataProcessing/hashing-multidimensional-index" >}}) |
| K-means | 중심점까지 거리 최소화하는 구형 비지도 군집화 | [기계학습 기초와 KNN·K-means·DBSCAN 비교]({{< relref "/docs/subnotes/03_DataProcessing/ml-basics-knn-kmeans-dbscan" >}}) |
| K-NN | K개 이웃의 다수결로 분류하는 지도학습 기법 | [기계학습 기초와 KNN·K-means·DBSCAN 비교]({{< relref "/docs/subnotes/03_DataProcessing/ml-basics-knn-kmeans-dbscan" >}}) |
| Kafka | Producer-Broker-Consumer Pub/Sub 기반 분산 메시징 | [빅데이터 플랫폼 아키텍처: 람다·카파·하둡·카프카]({{< relref "/docs/subnotes/03_DataProcessing/bigdata-platform-lambda-kappa-kafka" >}}) |
| LDW (Logical Data Warehouse) | 기존 EDW+Hadoop을 재배치 없이 조회하는 논리적 통합 아키텍처 | [LDW와 DW 다차원 모델링: Star/Snowflake Schema]({{< relref "/docs/subnotes/03_DataProcessing/dw-ldw-dimensional-modeling" >}}) |
| LOF (Local Outlier Factor) | 밀도기반 이상치 탐지 지표 | [아웃라이어(이상치) 탐지]({{< relref "/docs/subnotes/03_DataProcessing/outlier-detection" >}}) |
| LSN | 로그레코드별 순차 고유식별번호 | [DB 회복 기법 및 ARIES]({{< relref "/docs/subnotes/03_DataProcessing/db-recovery-aries" >}}) |
| LSTM | 망각·입력·출력 게이트로 장기의존성을 학습하는 RNN 변형 | [CNN과 RNN 비교]({{< relref "/docs/subnotes/03_DataProcessing/cnn-vs-rnn" >}}) |
| MAE / RMSE / R² | 회귀모델의 오차 크기·설명력을 평가하는 지표 | [k-fold 교차검증과 머신러닝 모델 평가 절차]({{< relref "/docs/subnotes/03_DataProcessing/kfold-cross-validation" >}}) |
| MBR (Minimum Bounding Rectangle) | 공간객체를 감싸는 최소경계 사각형 | [공간 데이터베이스: 공간 연산자와 R-Tree 인덱스]({{< relref "/docs/subnotes/03_DataProcessing/spatial-database-gis" >}}) |
| MVCC | Undo 로그 기반 다중버전 동시성제어 기법 | [DB 동시성 제어 및 격리수준]({{< relref "/docs/subnotes/03_DataProcessing/db-concurrency-control" >}}) |
| MVD (다치 종속성) | A값 하나에 B의 독립적 값집합이 매핑되는 4NF 대상 종속성 | [데이터 모델링 및 정규화]({{< relref "/docs/subnotes/03_DataProcessing/db-normalization" >}}) |
| Nested Loops Join | 소량 드라이빙 테이블+인덱스 후행 조인 알고리즘 | [관계대수, SQL JOIN, 옵티마이저]({{< relref "/docs/subnotes/03_DataProcessing/sql-join-optimizer" >}}) |
| Next-Key Lock | 레코드락+갭락 결합으로 팬텀리드 방지하는 기법 | [DB 동시성 제어 및 격리수준]({{< relref "/docs/subnotes/03_DataProcessing/db-concurrency-control" >}}) |
| NewSQL | RDBMS ACID와 NoSQL 수평확장을 동시실현하는 DB | [NoSQL 유형, 모델링 패턴, 인메모리/그래프 DB]({{< relref "/docs/subnotes/03_DataProcessing/nosql-types-modeling" >}}) |
| NoSQL | 유연스키마·BASE 기반 수평확장 DB | [NoSQL 유형, 모델링 패턴, 인메모리/그래프 DB]({{< relref "/docs/subnotes/03_DataProcessing/nosql-types-modeling" >}}) |
| OLAP | 대량 데이터의 다차원 뷰를 제공하는 분석처리 | [OLAP vs OLTP: 비교와 분리운영]({{< relref "/docs/subnotes/03_DataProcessing/olap-oltp-comparison" >}}) |
| OLTP | 거래데이터를 정확·실시간 처리하는 트랜잭션처리 | [OLAP vs OLTP: 비교와 분리운영]({{< relref "/docs/subnotes/03_DataProcessing/olap-oltp-comparison" >}}) |
| PACELC 정리 | 장애 시 A/C, 평상시 L/C 트레이드오프까지 확장한 이론 | [분산 데이터베이스의 CAP 및 PACELC 이론]({{< relref "/docs/subnotes/03_DataProcessing/db-cap-pacelc" >}}) |
| PR-AUC | 불균형 데이터에 적합한 정밀도-재현율 곡선 면적 | [기계학습 성능평가 지표]({{< relref "/docs/subnotes/03_DataProcessing/ml-performance-metrics" >}}) |
| Precision (정밀도) | Positive로 예측한 것 중 실제 Positive 비율 | [기계학습 성능평가 지표]({{< relref "/docs/subnotes/03_DataProcessing/ml-performance-metrics" >}}) |
| Quadtree | 2차원 공간을 4분할하는 색인구조 | [확장성 해싱과 다차원 색인구조]({{< relref "/docs/subnotes/03_DataProcessing/hashing-multidimensional-index" >}}) |
| Quorum (정족수 일관성) | R+W>N 조건으로 강한 일관성을 보장하는 방식 | [분산 데이터베이스의 CAP 및 PACELC 이론]({{< relref "/docs/subnotes/03_DataProcessing/db-cap-pacelc" >}}) |
| R-Tree | MBR 기반 계층구조의 공간 색인 | [공간 데이터베이스: 공간 연산자와 R-Tree 인덱스]({{< relref "/docs/subnotes/03_DataProcessing/spatial-database-gis" >}}) |
| RBO / CBO | 규칙기반 / 통계기반 비용추정 쿼리 옵티마이저 | [관계대수, SQL JOIN, 옵티마이저]({{< relref "/docs/subnotes/03_DataProcessing/sql-join-optimizer" >}}) |
| Recall (재현율) | 실제 Positive 중 모델이 찾아낸 비율 | [기계학습 성능평가 지표]({{< relref "/docs/subnotes/03_DataProcessing/ml-performance-metrics" >}}) |
| RNN | 순환구조로 은닉상태 유지해 시간적 의존성을 학습하는 신경망 | [CNN과 RNN 비교]({{< relref "/docs/subnotes/03_DataProcessing/cnn-vs-rnn" >}}) |
| ROC-AUC | 균형 데이터에 적합한 TPR-FPR 곡선 면적 | [기계학습 성능평가 지표]({{< relref "/docs/subnotes/03_DataProcessing/ml-performance-metrics" >}}) |
| Saga 패턴 | 비동기 보상트랜잭션 기반 분산 트랜잭션 처리 | [분산 데이터베이스의 CAP 및 PACELC 이론]({{< relref "/docs/subnotes/03_DataProcessing/db-cap-pacelc" >}}) |
| SCD (Slowly Changing Dimension) | 차원테이블 변경이력 관리 정책 | [LDW와 DW 다차원 모델링: Star/Snowflake Schema]({{< relref "/docs/subnotes/03_DataProcessing/dw-ldw-dimensional-modeling" >}}) |
| SEMMA | SAS 기반 5단계 기술중심 데이터마이닝 방법론 | [데이터마이닝 방법론: CRISP-DM과 SEMMA]({{< relref "/docs/subnotes/03_DataProcessing/crisp-dm-semma" >}}) |
| SNA (Social Network Analysis) | 연결망 구조·연결강도를 계량화해 영향력을 분석하는 기법 | [소셜 네트워크 분석(SNA): 속성과 Centrality]({{< relref "/docs/subnotes/03_DataProcessing/sna-social-network-analysis" >}}) |
| SOM (Self Organizing Map) | 경쟁학습 기반 2D격자 위상보존 군집화 신경망 | [비지도 군집분석: SOM과 실루엣 계수]({{< relref "/docs/subnotes/03_DataProcessing/clustering-som-silhouette" >}}) |
| Sort Merge Join | 양쪽 정렬 후 병합하는 비등가조인 알고리즘 | [관계대수, SQL JOIN, 옵티마이저]({{< relref "/docs/subnotes/03_DataProcessing/sql-join-optimizer" >}}) |
| SQL Injection | 문자열 직접결합으로 인한 SQL 조작 취약점 | [정적 SQL과 동적 SQL]({{< relref "/docs/subnotes/03_DataProcessing/static-dynamic-sql" >}}) |
| Star Schema | 차원테이블 비정규화, 사실테이블과 직접연결하는 구조 | [LDW와 DW 다차원 모델링: Star/Snowflake Schema]({{< relref "/docs/subnotes/03_DataProcessing/dw-ldw-dimensional-modeling" >}}) |
| Snowflake Schema | 차원테이블을 3NF까지 정규화한 다차원 모델 | [LDW와 DW 다차원 모델링: Star/Snowflake Schema]({{< relref "/docs/subnotes/03_DataProcessing/dw-ldw-dimensional-modeling" >}}) |
| SVM | 마진 최대화로 최적 결정경계를 찾는 지도학습 분류기 | [SVM: 마진 분류와 커널 트릭]({{< relref "/docs/subnotes/03_DataProcessing/svm-classification" >}}) |
| TEXT2SQL | 자연어 질의를 SQL로 자동변환하는 기술 | [TEXT2SQL: 자연어의 SQL 변환]({{< relref "/docs/subnotes/03_DataProcessing/text2sql" >}}) |
| TF-IDF | 단어빈도-역문서빈도 기반 텍스트 가중치 기법 | [텍스트 마이닝과 오피니언 마이닝: 비정형 데이터 분석]({{< relref "/docs/subnotes/03_DataProcessing/text-mining-opinion-mining" >}}) |
| TPS (Transactions Per Second) | 초당 트랜잭션 처리량 | [DB 서버 용량 산정]({{< relref "/docs/subnotes/03_DataProcessing/db-capacity-planning" >}}) |
| WAL (Write-Ahead Logging) | 디스크 반영 전 로그를 먼저 기록하는 원칙 | [DB 회복 기법 및 ARIES]({{< relref "/docs/subnotes/03_DataProcessing/db-recovery-aries" >}}) |
| 가지치기(Pruning) | 분류오류 위험 큰 가지를 제거해 과적합을 방지 | [의사결정나무: 형성절차와 지니·엔트로피 지수]({{< relref "/docs/subnotes/03_DataProcessing/decision-tree-gini-entropy" >}}) |
| 개념 드리프트 | 배포 후 데이터 분포가 변화해 모델성능이 저하되는 현상 | [AI 학습용 데이터 품질관리]({{< relref "/docs/subnotes/03_DataProcessing/ai-training-data-quality" >}}) |
| 격리수준 | 미확정읽기~직렬화 4단계의 트랜잭션 격리 표준 | [DB 동시성 제어 및 격리수준]({{< relref "/docs/subnotes/03_DataProcessing/db-concurrency-control" >}}) |
| 계통 샘플링 | 랜덤 출발점 이후 매 k번째 간격으로 추출하는 샘플링 | [랜덤 샘플링과 필터링 기법]({{< relref "/docs/subnotes/03_DataProcessing/sampling-filtering-techniques" >}}) |
| 골든 셋 | 어노테이션 품질검증 기준이 되는 데이터셋 | [이미지 데이터 어노테이션]({{< relref "/docs/subnotes/03_DataProcessing/data-annotation" >}}) |
| 과소적합(Underfitting) | 모델이 너무 단순해 훈련 패턴조차 학습하지 못한 상태 | [과적합과 과소적합]({{< relref "/docs/subnotes/03_DataProcessing/overfitting-underfitting" >}}) |
| 과적합(Overfitting) | 훈련 데이터 노이즈까지 학습해 일반화에 실패한 상태 | [과적합과 과소적합]({{< relref "/docs/subnotes/03_DataProcessing/overfitting-underfitting" >}}) |
| 관계대수 | 셀렉션·프로젝션·조인 등 수학적 연산 기반 질의언어 | [관계대수, SQL JOIN, 옵티마이저]({{< relref "/docs/subnotes/03_DataProcessing/sql-join-optimizer" >}}) |
| 공간 데이터베이스 | 점·선·면 기하객체를 저장·조회하는 전문 DB | [공간 데이터베이스: 공간 연산자와 R-Tree 인덱스]({{< relref "/docs/subnotes/03_DataProcessing/spatial-database-gis" >}}) |
| 공공데이터 품질인증 | 행안부(NIA 위탁)가 공공데이터 품질을 심사·인증하는 제도 | [공공데이터 품질인증]({{< relref "/docs/subnotes/03_DataProcessing/public-data-quality-certification" >}}) |
| 군집 이상치 | 개별로는 정상이나 집합적으로 이상 패턴을 보이는 값 | [아웃라이어(이상치) 탐지]({{< relref "/docs/subnotes/03_DataProcessing/outlier-detection" >}}) |
| 근접 중심성(Closeness Centrality) | 노드 간 근접도를 측정하는 중심성 지표 | [소셜 네트워크 분석(SNA): 속성과 Centrality]({{< relref "/docs/subnotes/03_DataProcessing/sna-social-network-analysis" >}}) |
| 기계학습 기초 | 명시적 프로그래밍 없이 데이터에서 패턴을 학습하는 AI 하위분야 | [기계학습 기초와 KNN·K-means·DBSCAN 비교]({{< relref "/docs/subnotes/03_DataProcessing/ml-basics-knn-kmeans-dbscan" >}}) |
| 데이터 가치평가 | 비용·시장·수익·옵션 접근법으로 데이터 경제가치를 산정 | [데이터 가치평가]({{< relref "/docs/subnotes/03_DataProcessing/data-valuation" >}}) |
| 데이터 늪(Data Swamp) | 거버넌스 부재로 품질·신뢰성을 상실한 레이크 상태 | [데이터 옵저버빌리티와 데이터 늪]({{< relref "/docs/subnotes/03_DataProcessing/data-observability-swamp" >}}) |
| 데이터 다운타임 | 데이터 누락·부정확·노후 상태가 지속되는 기간 | [데이터 옵저버빌리티와 데이터 늪]({{< relref "/docs/subnotes/03_DataProcessing/data-observability-swamp" >}}) |
| 데이터 레이크(Data Lake) | 스키마리스 원천데이터를 담는 대용량 저장소 | [데이터 레이크와 데이터 패브릭]({{< relref "/docs/subnotes/03_DataProcessing/data-lake-data-fabric" >}}) |
| 데이터마이닝 vs 통계분석 | 귀납적 패턴발견과 연역적 가설검정의 철학 차이 | [텍스트 마이닝과 오피니언 마이닝: 비정형 데이터 분석]({{< relref "/docs/subnotes/03_DataProcessing/text-mining-opinion-mining" >}}) |
| 데이터 민주화 | 비전문가도 데이터를 직접 조회·활용할 수 있게 하는 개념 | [TEXT2SQL: 자연어의 SQL 변환]({{< relref "/docs/subnotes/03_DataProcessing/text2sql" >}}) |
| 데이터 옵저버빌리티 | 파이프라인 전반 상태·품질·흐름을 실시간 진단하는 능력 | [데이터 옵저버빌리티와 데이터 늪]({{< relref "/docs/subnotes/03_DataProcessing/data-observability-swamp" >}}) |
| 데이터 패브릭(Data Fabric) | 능동적 메타데이터 기반 이기종 통합관리 아키텍처 | [데이터 레이크와 데이터 패브릭]({{< relref "/docs/subnotes/03_DataProcessing/data-lake-data-fabric" >}}) |
| 데이터 프로파일링 | 컬럼분포·결측치 등을 점검하는 정적 품질진단기법 | [데이터 품질관리 및 ISO 8000]({{< relref "/docs/subnotes/03_DataProcessing/data-quality-iso8000" >}}) |
| 동적 SQL | 런타임에 SQL문을 조립·파싱·실행하는 방식 | [정적 SQL과 동적 SQL]({{< relref "/docs/subnotes/03_DataProcessing/static-dynamic-sql" >}}) |
| 랜덤포레스트(Random Forest) | 배깅+변수샘플링 기반 앙상블 트리 모델 | [앙상블 기법: 배깅·부스팅·랜덤포레스트]({{< relref "/docs/subnotes/03_DataProcessing/ensemble-bagging-boosting-randomforest" >}}) |
| 람다 아키텍처 | 배치·스피드·서빙 3레이어로 구성된 빅데이터 처리구조 | [빅데이터 플랫폼 아키텍처: 람다·카파·하둡·카프카]({{< relref "/docs/subnotes/03_DataProcessing/bigdata-platform-lambda-kappa-kafka" >}}) |
| 레이크하우스 | 레이크의 유연성과 웨어하우스의 거버넌스를 결합한 구조 | [데이터 옵저버빌리티와 데이터 늪]({{< relref "/docs/subnotes/03_DataProcessing/data-observability-swamp" >}}) |
| 매개 중심성(Betweenness Centrality) | 노드 간 매개 정도로 브로커 역할을 측정하는 지표 | [소셜 네트워크 분석(SNA): 속성과 Centrality]({{< relref "/docs/subnotes/03_DataProcessing/sna-social-network-analysis" >}}) |
| 마진(Margin) | 결정경계와 서포트벡터 간 거리, 클수록 일반화성능 우수 | [SVM: 마진 분류와 커널 트릭]({{< relref "/docs/subnotes/03_DataProcessing/svm-classification" >}}) |
| 맥락 이상치 | 특정 맥락(시간·위치)에서만 이상으로 나타나는 값 | [아웃라이어(이상치) 탐지]({{< relref "/docs/subnotes/03_DataProcessing/outlier-detection" >}}) |
| 바운딩 박스 | 사각형 경계로 객체 영역을 표시하는 어노테이션 기법 | [이미지 데이터 어노테이션]({{< relref "/docs/subnotes/03_DataProcessing/data-annotation" >}}) |
| 반정규화(Denormalization) | 조회성능 위해 의도적으로 중복을 허용하는 기법 | [데이터 모델링 및 정규화]({{< relref "/docs/subnotes/03_DataProcessing/db-normalization" >}}) |
| 밀도(Density) | 총 관계 수 대비 실제 관계 수 비율, 응집수준 측정 | [소셜 네트워크 분석(SNA): 속성과 Centrality]({{< relref "/docs/subnotes/03_DataProcessing/sna-social-network-analysis" >}}) |
| 배깅(Bagging) | Bootstrap 복원추출로 병렬학습해 분산을 감소시키는 기법 | [앙상블 기법: 배깅·부스팅·랜덤포레스트]({{< relref "/docs/subnotes/03_DataProcessing/ensemble-bagging-boosting-randomforest" >}}) |
| 벡터 데이터베이스 | 고차원 임베딩을 저장하고 ANN 검색을 수행하는 DB | [벡터 데이터베이스와 HNSW/IVF 검색 알고리즘]({{< relref "/docs/subnotes/03_DataProcessing/vector-database-hnsw-ivf" >}}) |
| 부스팅(Boosting) | 오분류에 가중치를 부여해 순차학습, 편향을 감소시키는 기법 | [앙상블 기법: 배깅·부스팅·랜덤포레스트]({{< relref "/docs/subnotes/03_DataProcessing/ensemble-bagging-boosting-randomforest" >}}) |
| 분석 성숙도 | 도입-활용-확산-최적화 4단계의 분석 발전모델 | [데이터 분석 거버넌스: CoA·준비도·성숙도]({{< relref "/docs/subnotes/03_DataProcessing/data-analysis-governance-maturity" >}}) |
| 분석 준비도 | 업무·인력·데이터 등 6기준으로 분석 수행여건을 평가 | [데이터 분석 거버넌스: CoA·준비도·성숙도]({{< relref "/docs/subnotes/03_DataProcessing/data-analysis-governance-maturity" >}}) |
| 분할 투명성 | 데이터가 수평·수직 분할돼도 단일 조회처럼 접근 가능 | [분산 데이터베이스의 투명성]({{< relref "/docs/subnotes/03_DataProcessing/distributed-db-transparency" >}}) |
| 비식별자 관계 | 부모 PK가 자식 일반속성 FK로 전이하는 약한 결합관계 | [데이터 모델링: ERD, 슈퍼/서브타입, 식별자 관계]({{< relref "/docs/subnotes/03_DataProcessing/data-modeling-erd-relationship" >}}) |
| 빅데이터 시각화 | 대용량·다양·고속 데이터를 시각형태로 표현하는 기술 | [빅데이터 시각화]({{< relref "/docs/subnotes/03_DataProcessing/bigdata-visualization" >}}) |
| 샤드 키(Shard Key) | 데이터를 샤드로 라우팅하는 기준 속성 | [DB 파티셔닝 및 샤딩]({{< relref "/docs/subnotes/03_DataProcessing/db-partitioning-sharding" >}}) |
| 샤딩(Sharding) | 여러 독립 물리노드에 데이터를 분산저장하는 방식 | [DB 파티셔닝 및 샤딩]({{< relref "/docs/subnotes/03_DataProcessing/db-partitioning-sharding" >}}) |
| 선택도(Selectivity) | 고유값이 많을수록 인덱스 효율이 상승하는 지표 | [DB 인덱스: 클러스터드 vs 논클러스터드]({{< relref "/docs/subnotes/03_DataProcessing/db-index-structures" >}}) |
| 소프트 마진 | 슬랙변수로 일부 오분류를 허용하는 SVM 방식 | [SVM: 마진 분류와 커널 트릭]({{< relref "/docs/subnotes/03_DataProcessing/svm-classification" >}}) |
| 슬로우 쿼리 | 응답지연을 유발하는 성능병목 쿼리 | [데이터베이스 튜닝]({{< relref "/docs/subnotes/03_DataProcessing/db-performance-tuning" >}}) |
| 스택(Stack) | 한쪽 끝(Top)에서만 삽입·삭제하는 LIFO 선형구조 | [스택과 큐: 입출력 원리와 순환큐 구현]({{< relref "/docs/subnotes/03_DataProcessing/stack-queue-linear-structures" >}}) |
| 시맨틱 분할 / 인스턴스 분할 | 픽셀단위로 클래스·개체를 구분하는 어노테이션 기법 | [이미지 데이터 어노테이션]({{< relref "/docs/subnotes/03_DataProcessing/data-annotation" >}}) |
| 식별자 관계 | 부모 PK가 자식 PK로 전이되는 강한 종속관계 | [데이터 모델링: ERD, 슈퍼/서브타입, 식별자 관계]({{< relref "/docs/subnotes/03_DataProcessing/data-modeling-erd-relationship" >}}) |
| 실루엣 계수 | 응집도·분리도 기반 클러스터링 품질지표 | [비지도 군집분석: SOM과 실루엣 계수]({{< relref "/docs/subnotes/03_DataProcessing/clustering-som-silhouette" >}}) |
| 아웃라이어(Outlier) | 정상범위를 벗어난 분석가치가 있는 관측값 | [아웃라이어(이상치) 탐지]({{< relref "/docs/subnotes/03_DataProcessing/outlier-detection" >}}) |
| 암스트롱 공리 | 반사율·첨가율·이행율 기반 함수적종속성 추론규칙 | [데이터 모델링 및 정규화]({{< relref "/docs/subnotes/03_DataProcessing/db-normalization" >}}) |
| 액티브 러닝 | 불확실 샘플만 선별해 라벨링, 비용을 절감하는 기법 | [이미지 데이터 어노테이션]({{< relref "/docs/subnotes/03_DataProcessing/data-annotation" >}}) |
| 앙상블 | 다수 모형의 학습결과를 종합해 신뢰성을 높이는 기법 | [앙상블 기법: 배깅·부스팅·랜덤포레스트]({{< relref "/docs/subnotes/03_DataProcessing/ensemble-bagging-boosting-randomforest" >}}) |
| 연결 리스트(Linked List) | 노드-포인터로 논리연결된 동적 자료구조 | [기본 자료구조: 연결 리스트와 이진 탐색 트리]({{< relref "/docs/subnotes/03_DataProcessing/basic-data-structures" >}}) |
| 연관 규칙 분석 | 트랜잭션 내 동시출현 패턴을 정량화하는 데이터마이닝 기법 | [연관 규칙 분석: 지지도·신뢰도·향상도]({{< relref "/docs/subnotes/03_DataProcessing/association-rule-analysis" >}}) |
| 연합학습(Federated Learning) | 원본데이터 미이동, 로컬학습 결과만 전송하는 분산 협업학습 | [연합학습과 전이학습]({{< relref "/docs/subnotes/03_DataProcessing/federated-transfer-learning" >}}) |
| 오피니언 마이닝 | 긍/부정 감성을 판별하는 텍스트마이닝 하위분야 | [텍스트 마이닝과 오피니언 마이닝: 비정형 데이터 분석]({{< relref "/docs/subnotes/03_DataProcessing/text-mining-opinion-mining" >}}) |
| 오픈소스 DBMS 마이그레이션 | 상용 DBMS를 오픈소스로 전환하는 작업 | [오픈소스 DBMS 전환 및 마이그레이션]({{< relref "/docs/subnotes/03_DataProcessing/opensource-dbms-migration" >}}) |
| 옵티마이저 | 선언형 SQL을 최소비용 실행계획으로 변환하는 구성요소 | [관계대수, SQL JOIN, 옵티마이저]({{< relref "/docs/subnotes/03_DataProcessing/sql-join-optimizer" >}}) |
| 위치 투명성 | 데이터가 소재한 사이트를 몰라도 접근 가능한 특성 | [분산 데이터베이스의 투명성]({{< relref "/docs/subnotes/03_DataProcessing/distributed-db-transparency" >}}) |
| 이진 탐색 트리(BST) | 좌<부모<우 속성으로 평균 O(log n) 탐색하는 트리 | [기본 자료구조: 연결 리스트와 이진 탐색 트리]({{< relref "/docs/subnotes/03_DataProcessing/basic-data-structures" >}}) |
| 전역 이상치 | 전체 데이터셋 관점에서 명백히 다른 값 | [아웃라이어(이상치) 탐지]({{< relref "/docs/subnotes/03_DataProcessing/outlier-detection" >}}) |
| 전이학습(Transfer Learning) | 사전학습 모델의 지식을 관련 타겟 태스크에 재사용하는 기법 | [연합학습과 전이학습]({{< relref "/docs/subnotes/03_DataProcessing/federated-transfer-learning" >}}) |
| 정규화(Normalization) | 중복 제거로 이상현상을 방지하는 단계적 데이터 모델링 절차 | [데이터 모델링 및 정규화]({{< relref "/docs/subnotes/03_DataProcessing/db-normalization" >}}) |
| 정적 SQL | 컴파일 시점에 SQL문을 확정, 실행계획을 캐시하는 방식 | [정적 SQL과 동적 SQL]({{< relref "/docs/subnotes/03_DataProcessing/static-dynamic-sql" >}}) |
| 지도학습/비지도학습/강화학습 | 학습데이터 제공방식에 따른 기계학습 3대 분류 | [기계학습 기초와 KNN·K-means·DBSCAN 비교]({{< relref "/docs/subnotes/03_DataProcessing/ml-basics-knn-kmeans-dbscan" >}}) |
| 참조 무결성 | FK값이 부모 PK로 존재하거나 NULL이어야 하는 제약 | [DB 무결성 제약조건 및 참조 무결성]({{< relref "/docs/subnotes/03_DataProcessing/db-integrity-constraints" >}}) |
| 층별 샘플링(Stratified) | 이질적 하위그룹(층)으로 나눠 각 층에서 추출하는 샘플링 | [랜덤 샘플링과 필터링 기법]({{< relref "/docs/subnotes/03_DataProcessing/sampling-filtering-techniques" >}}) |
| 카디널리티 | ERD 개체 간 1:1, 1:M, M:N 수적 대응관계 | [데이터 모델링: ERD, 슈퍼/서브타입, 식별자 관계]({{< relref "/docs/subnotes/03_DataProcessing/data-modeling-erd-relationship" >}}) |
| 카파 아키텍처 | 스피드+서빙 2레이어로 스트림만 처리하는 구조 | [빅데이터 플랫폼 아키텍처: 람다·카파·하둡·카프카]({{< relref "/docs/subnotes/03_DataProcessing/bigdata-platform-lambda-kappa-kafka" >}}) |
| 커널 트릭(Kernel Trick) | 저차원 데이터를 고차원에 매핑해 비선형 분리를 가능케 함 | [SVM: 마진 분류와 커널 트릭]({{< relref "/docs/subnotes/03_DataProcessing/svm-classification" >}}) |
| 커버링 인덱스 | 인덱스만으로 쿼리 결과를 반환, 테이블 접근이 불필요 | [DB 인덱스: 클러스터드 vs 논클러스터드]({{< relref "/docs/subnotes/03_DataProcessing/db-index-structures" >}}) |
| 클러스터드 인덱스 | 키 순으로 물리적으로 정렬·저장되는 인덱스 | [DB 인덱스: 클러스터드 vs 논클러스터드]({{< relref "/docs/subnotes/03_DataProcessing/db-index-structures" >}}) |
| 탐색적 시각화 / 설명적 시각화 | 분석가용 패턴발견 vs 청중대상 인사이트전달 시각화 | [빅데이터 시각화]({{< relref "/docs/subnotes/03_DataProcessing/bigdata-visualization" >}}) |
| 텍스트 마이닝 | 비정형 텍스트에서 NLP로 패턴·정보를 추출하는 기법 | [텍스트 마이닝과 오피니언 마이닝: 비정형 데이터 분석]({{< relref "/docs/subnotes/03_DataProcessing/text-mining-opinion-mining" >}}) |
| 파티셔닝(Partitioning) | 단일 DBMS 내에서 대용량 테이블을 논리적으로 분할 | [DB 파티셔닝 및 샤딩]({{< relref "/docs/subnotes/03_DataProcessing/db-partitioning-sharding" >}}) |
| 편향(Bias) | 수집·처리·설계 과정의 치우침으로 공정성이 저해된 상태 | [아웃라이어(이상치) 탐지]({{< relref "/docs/subnotes/03_DataProcessing/outlier-detection" >}}) |
| 편향-분산 트레이드오프 | 모델 복잡도에 따른 과소적합-과적합 양극단 관계 | [과적합과 과소적합]({{< relref "/docs/subnotes/03_DataProcessing/overfitting-underfitting" >}}) |
| 폴리글랏 프로세싱 | 3V 특성별로 최적 처리엔진을 조합하는 방식 | [빅데이터 플랫폼 아키텍처: 람다·카파·하둡·카프카]({{< relref "/docs/subnotes/03_DataProcessing/bigdata-platform-lambda-kappa-kafka" >}}) |
| 핫스팟(Hotspot) | 특정 샤드에 부하가 집중되는 현상 | [DB 파티셔닝 및 샤딩]({{< relref "/docs/subnotes/03_DataProcessing/db-partitioning-sharding" >}}) |
| 확장성 해싱 | 디렉토리·버킷 분할로 동적 확장하는 해시 기법 | [확장성 해싱과 다차원 색인구조]({{< relref "/docs/subnotes/03_DataProcessing/hashing-multidimensional-index" >}}) |
