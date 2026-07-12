---
bookCollapseSection: true
title: "컴퓨터시스템"
---

| 번호 | 토픽명 | 정의 |
| :--- | :--- | :--- |
| 1 | [대규모 AI 데이터센터 구축 기술]({{< relref "/docs/subnotes/04_ComputerSystems/ai-datacenter-infra" >}}) | 수천 개 GPU 클러스터를 마이크로초 저지연으로 연결하는 네트워크 인터커넥트 기술과, 분산 데이터센터 간을 고대역폭으로 잇는 **DCI(Data Center Interconnect)** 기술 |
| 2 | [알고리즘 복잡도와 O-Notation]({{< relref "/docs/subnotes/04_ComputerSystems/algorithm-complexity-big-o" >}}) | 입력 크기 n에 따른 시간·공간복잡도를 수학적으로 표현하며, 최악의 경우 성능 상한선을 나타내는 표준 표기법 **O-Notation(Big-O)** |
| 3 | [알고리즘 설계기법(분할정복/DP/탐욕법/백트래킹)과 그래프 순회]({{< relref "/docs/subnotes/04_ComputerSystems/algorithm-design-paradigms" >}}) | 문제를 부분 문제로 나누고 조합하는 방식을 규정한 알고리즘 설계 전략인 **분할정복·동적계획법(DP)·탐욕법(Greedy)·백트래킹**과, 그래프의 모든 정점(또는 특정 목표 정점까지)을 빠짐없이 방문하는 탐색 방법인 **그래프 순회(DFS/BFS)**의 총칭 |
| 4 | [블록체인 네트워크 유형 (퍼블릭/프라이빗/컨소시엄)]({{< relref "/docs/subnotes/04_ComputerSystems/blockchain-network-types" >}}) | 참여 범위·권한 제어 방식에 따라 누구나 참여 가능한 **퍼블릭**, 허가된 참여자만 가능한 **프라이빗**, 다수 기관이 공동 운영하는 **컨소시엄**으로 구분한 블록체인 |
| 5 | [캐시메모리 및 일관성]({{< relref "/docs/subnotes/04_ComputerSystems/cache-coherence" >}}) | CPU-메모리 속도 차이를 보완하는 고속 임시 저장소 **캐시**와, 멀티코어 환경에서 캐시 사본 데이터를 동일하게 유지하는 **일관성 제어(MESI)** |
| 6 | [중앙은행 디지털 화폐 (CBDC)]({{< relref "/docs/subnotes/04_ComputerSystems/cbdc" >}}) | 중앙은행이 직접 발행하는 법정화폐의 디지털 버전으로, 민간 암호화폐와 달리 국가가 가치·신용을 보증하는 디지털 화폐 형태 |
| 7 | [CPU 내부 레지스터 및 상태 플래그]({{< relref "/docs/subnotes/04_ComputerSystems/cpu-registers-status-flags" >}}) | Fetch-Decode-Execute 과정에서 쓰이는 초고속 내부 저장 공간 **레지스터**와, ALU 연산 결과·조건 분기 판단 근거가 되는 **상태 레지스터(SR/PSW)** |
| 8 | [교착상태 및 은행가 알고리즘]({{< relref "/docs/subnotes/04_ComputerSystems/deadlock-banker" >}}) | 프로세스들이 서로의 자원을 무한 대기하는 **교착상태 발생 조건(상·점·비·환)**과, 시스템을 안전 상태로 유지하는 **은행가 알고리즘** |
| 9 | [DMA 및 인터럽트]({{< relref "/docs/subnotes/04_ComputerSystems/dma-interrupt" >}}) | CPU 개입 없이 I/O 장치와 메모리가 직접 데이터를 주고받는 **DMA**와, 예외 발생 시 제어권을 ISR로 전환하는 **인터럽트** 메커니즘 |
| 10 | [유전 알고리즘]({{< relref "/docs/subnotes/04_ComputerSystems/genetic-algorithm" >}}) | 다윈의 자연선택·유전·돌연변이를 모방한 메타휴리스틱 최적화 알고리즘으로, 그래디언트 없이 전역 최적해를 근사 탐색 |
| 11 | [고가용성·재해복구 아키텍처 (FTS/HA/멀티리전)]({{< relref "/docs/subnotes/04_ComputerSystems/ha-dr-multiregion" >}}) | 무중단 운영을 위한 **FTS**, 빠른 Failover로 가동률을 높이는 **HA**, RTO·RPO를 0에 가깝게 하는 **멀티리전 Active-Active** 아키텍처 |
| 12 | [차세대 초고속 메모리 기술 HBM/CXL/PIM]({{< relref "/docs/subnotes/04_ComputerSystems/hbm-cxl-pim" >}}) | Memory Wall 문제를 완화하기 위한 수직적층형 **HBM**, 초고속 인터커넥트 **CXL**, 메모리 내 연산 기술 **PIM** |
| 13 | [정보시스템 하드웨어 규모산정 방법]({{< relref "/docs/subnotes/04_ComputerSystems/hw-sizing-guideline" >}}) | 공공기관 정보시스템 HW 규모를 산정하는 TTA 표준으로, **기준 성능법·유사 시스템 기준법·용량 계획법** 3가지로 도출 |
| 14 | [인터미턴트 컴퓨팅]({{< relref "/docs/subnotes/04_ComputerSystems/intermittent-computing" >}}) | 태양광·RF 등에서 수확한 에너지로 간헐 동작하는 컴퓨팅 패러다임으로, 배터리 없는 극한환경 IoT 센서에 적용되며 전원 재개 시 연산 일관성 유지가 과제 |
| 15 | [IPC(프로세스 간 통신) 및 시스템 콜]({{< relref "/docs/subnotes/04_ComputerSystems/ipc-system-call" >}}) | 독립된 프로세스 간 데이터를 교환·동기화하는 **IPC**와, 사용자 모드에서 커널 서비스를 요청하는 유일한 합법적 경로 **시스템 콜** |
| 16 | [컨테이너 가상화 및 쿠버네티스]({{< relref "/docs/subnotes/04_ComputerSystems/k8s-virtualization" >}}) | 호스트 OS 커널을 공유하며 프로세스 레벨 격리(네·컨)를 구현하는 **컨테이너 가상화**와, 이를 자동 배포·관리하는 **쿠버네티스** |
| 17 | [프로그램 메모리 영역 및 동적 메모리 관리]({{< relref "/docs/subnotes/04_ComputerSystems/memory-areas-dynamic-allocation" >}}) | 프로세스를 코드·데이터·힙·스택 4개 영역으로 나누는 **메모리 레이아웃**과, 런타임 힙 할당·해제 및 **메모리 누수(Memory Leak)** 문제 |
| 18 | [MMU 및 가상메모리]({{< relref "/docs/subnotes/04_ComputerSystems/mmu-virtual-memory" >}}) | 물리 메모리 한계를 보조기억장치로 확장하는 **가상 메모리 기술**과, 가상-물리 주소를 고속 변환·보호하는 **MMU 장치** |
| 19 | [비휘발성 메모리·저장장치 기술 (ROM/FRAM/SSD)]({{< relref "/docs/subnotes/04_ComputerSystems/nonvolatile-memory-rom-fram-ssd" >}}) | 전원이 꺼져도 데이터가 유지되는 저장 기술로, 펌웨어용 **ROM 계열**, 강유전체 기반 고속·고내구 **FRAM**, NAND 플래시 기반 **SSD**로 구성 |
| 20 | [운영체제 스케줄링 (CPU·디스크)]({{< relref "/docs/subnotes/04_ComputerSystems/os-scheduling" >}}) | 제한된 CPU·디스크 자원을 배분하는 정책으로, CPU 스케줄링은 실행 순서를, 디스크 스케줄링은 탐색시간·회전지연 기반 처리 순서를 결정 |
| 21 | [OS 동기화 기법]({{< relref "/docs/subnotes/04_ComputerSystems/os-synchronization" >}}) | 다중 스레드 환경에서 공유 자원의 동시 접근을 제어하는 **동기화 기술(임계영역 조건: 상·진·한)**과, **우선순위 역전 극복 기법** |
| 22 | [병렬 컴퓨팅 및 NPU AI 가속기]({{< relref "/docs/subnotes/04_ComputerSystems/parallel-computing-npu" >}}) | 여러 프로세서가 문제를 동시 분할 처리하는 **병렬 컴퓨팅**과, 딥러닝 행렬·컨볼루션 연산에 특화된 전력 효율(TOPS/W) 가속기 **NPU** |
| 23 | [파이프라인 및 해저드]({{< relref "/docs/subnotes/04_ComputerSystems/pipeline-hazard" >}}) | 명령어 처리를 IF-ID-EX-MEM-WB 단계로 나눠 중첩 실행하는 **파이프라이닝**과, 의존성으로 인한 **해저드(구·데·제) 통제 기술** |
| 24 | [저장장치 다중화 및 신뢰성 RAID]({{< relref "/docs/subnotes/04_ComputerSystems/raid-storage" >}}) | 복수의 독립된 디스크를 통합해 데이터 분산(Striping)과 오류 정정(Parity)으로 I/O 속도와 가용성을 높이는 다중화 기술 |
| 25 | [RISC-V 오픈소스 명령어 집합 구조]({{< relref "/docs/subnotes/04_ComputerSystems/risc-v-isa" >}}) | UC Berkeley가 2010년 공개한 오픈소스 ISA로, 특허·라이선스 비용 없이 자유롭게 설계 가능해 x86·ARM 대안으로 부상하는 모듈식 RISC 아키텍처 |
| 26 | [세그멘테이션 오류와 메모리 보호 메커니즘]({{< relref "/docs/subnotes/04_ComputerSystems/segmentation-fault-memory-protection" >}}) | 접근 권한 없는 메모리 참조 시 OS가 프로세스를 강제 종료시키는 오류로, 유닉스/리눅스에서 **SIGSEGV** 시그널로 처리되며 MMU가 감지 |
| 27 | [서버·네트워크 이중화 실무 (L4/SW/공공망 사례)]({{< relref "/docs/subnotes/04_ComputerSystems/server-network-redundancy" >}}) | 단일 서버 장애를 막는 **서버 이중화(L4 스위치 vs 소프트웨어 기반)**와, 공공망 인프라 장애에 대비한 백업복구·이중화 대응 체계 |
| 28 | [서버리스 컴퓨팅 (Serverless / FaaS)]({{< relref "/docs/subnotes/04_ComputerSystems/serverless-faas" >}}) | 개발자가 서버 관리 없이 함수 단위 코드를 실행하는 클라우드 모델로, 제공자가 프로비저닝·스케일링을 자동 관리하며 실행 자원에만 과금(Pay-per-use) |
| 29 | [최단경로 알고리즘과 최소신장트리(MST)]({{< relref "/docs/subnotes/04_ComputerSystems/shortest-path-mst" >}}) | 그래프의 두 정점 간 간선 가중치 합이 최소가 되는 경로를 구하는 **최단경로 알고리즘**(Dijkstra, Bellman-Ford, Floyd-Warshall, A*)과, 모든 정점을 사이클 없이 최소 비용으로 연결하는 **최소신장트리(MST)** 알고리즘(Kruskal, Prim)의 총칭 |
| 30 | [정렬 알고리즘 (선택정렬/삽입정렬/퀵정렬)]({{< relref "/docs/subnotes/04_ComputerSystems/sorting-algorithms" >}}) | 선택정렬은 최솟값 탐색 후 교환, 삽입정렬은 정렬구간에 삽입, 퀵정렬은 피벗 분할을 반복 적용하는 비교 기반 정렬 기법으로, 미정렬 데이터를 특정 기준(최솟값/삽입위치/피벗)에 따라 정렬하는 구조 |
| 31 | [스토리지 가상화]({{< relref "/docs/subnotes/04_ComputerSystems/storage-virtualization" >}}) | 이기종 스토리지 장치를 하나의 논리적 풀(Pool)로 통합 관리하는 기술로, 관리 복잡성 감소와 무중단 마이그레이션을 목표로 함 |
| 32 | [시스템 버스와 버스 중재]({{< relref "/docs/subnotes/04_ComputerSystems/system-bus-arbitration" >}}) | CPU·메모리·I/O 간 주소·데이터·제어 신호를 전달하는 **시스템 버스**와, 공유 버스에 대한 동시 접근 충돌을 방지하는 **버스 중재 메커니즘** |
| 33 | [트리 자료구조 알고리즘 (B트리/이진트리 순회/AVL트리)]({{< relref "/docs/subnotes/04_ComputerSystems/tree-algorithms-btree-avl" >}}) | 모든 리프 노드가 동일 깊이를 갖도록 자가 균형을 유지하는 다진 탐색 트리인 **B트리**, 이진트리의 모든 노드를 정해진 순서 규칙에 따라 방문하는 **이진트리 순회(전위/중위/후위)**, 모든 노드의 균형인수(BF)를 -1~1로 유지하는 자기균형 이진탐색트리인 **AVL 트리**의 총칭 |
| 34 | [영상압축기법 (무손실·손실·혼합)]({{< relref "/docs/subnotes/04_ComputerSystems/video-compression" >}}) | 멀티미디어 데이터 크기를 줄이는 기법으로, 원본 복원이 가능한 **무손실 압축**, 지각 특성을 이용한 **손실 압축**, 둘을 결합한 **혼합 압축(H.264/HEVC)** |
