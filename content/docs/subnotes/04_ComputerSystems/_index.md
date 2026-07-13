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
| 7 | [컴퓨터 기본구조와 폰노이만·하버드 아키텍처]({{< relref "/docs/subnotes/04_ComputerSystems/computer-architecture-von-neumann-harvard" >}}) | 입력·출력·기억·연산·제어 5대 장치가 버스로 연결되어 명령어와 데이터를 메모리에 저장하고 순차 인출·실행하는 **Stored-program 방식**의 **폰노이만 아키텍처**와, 명령어·데이터 메모리·버스를 물리적으로 분리하여 동시 접근을 가능케 한 **하버드 아키텍처**의 총칭 |
| 8 | [CPU 주소지정방식(Addressing Mode)]({{< relref "/docs/subnotes/04_ComputerSystems/cpu-addressing-mode" >}}) | 명령어 내 피연산자(Operand) 필드를 해석해 실제 데이터가 저장된 유효 주소(EA, Effective Address)를 결정하는 규칙 집합으로, 방식 선택에 따라 메모리 접근 횟수와 표현 가능한 주소 범위가 달라짐 |
| 9 | [CPU 내부 레지스터 및 상태 플래그]({{< relref "/docs/subnotes/04_ComputerSystems/cpu-registers-status-flags" >}}) | Fetch-Decode-Execute 과정에서 쓰이는 초고속 내부 저장 공간 **레지스터**와, ALU 연산 결과·조건 분기 판단 근거가 되는 **상태 레지스터(SR/PSW)** |
| 10 | [교착상태 및 은행가 알고리즘]({{< relref "/docs/subnotes/04_ComputerSystems/deadlock-banker" >}}) | 프로세스들이 서로의 자원을 무한 대기하는 **교착상태 발생 조건(상·점·비·환)**과, 시스템을 안전 상태로 유지하는 **은행가 알고리즘** |
| 11 | [DMA 및 인터럽트]({{< relref "/docs/subnotes/04_ComputerSystems/dma-interrupt" >}}) | CPU 개입 없이 I/O 장치와 메모리가 직접 데이터를 주고받는 **DMA**와, 예외 발생 시 제어권을 ISR로 전환하는 **인터럽트** 메커니즘 |
| 12 | [DRAM과 SRAM 비교]({{< relref "/docs/subnotes/04_ComputerSystems/dram-sram-comparison" >}}) | 임의의 주소에 동일한 속도로 읽기/쓰기가 가능한 휘발성 반도체 메모리(RAM)로서, 저장 셀 구조에 따라 커패시터 전하로 데이터를 저장하고 주기적 리프레시가 필요한 **DRAM(1T1C)**과, 쌍안정 래치(플립플롭)로 저장해 리프레시가 불필요한 **SRAM(6T)**으로 분류됨 |
| 13 | [이중 모드(Dual Mode)와 보호 링(Protection Ring)]({{< relref "/docs/subnotes/04_ComputerSystems/dual-mode-privilege-ring" >}}) | CPU가 사용자 모드(User Mode)와 커널 모드(Kernel Mode) 두 실행 환경을 하드웨어 수준에서 구별해 사용자 프로세스가 특권 명령어를 직접 실행하지 못하도록 하는 보호 메커니즘으로, PSW 내 1비트 Mode Bit로 모드를 구분하며 사용자 모드에서 특권 명령어 실행 시 트랩(Trap)이 발생함 |
| 14 | [엣지 컴퓨팅과 클라우드 컴퓨팅 비교]({{< relref "/docs/subnotes/04_ComputerSystems/edge-computing" >}}) | 데이터 생성 지점(엣지)에 가까운 곳에서 컴퓨팅을 수행해 레이턴시와 대역폭 소비를 최소화하는 분산 컴퓨팅 패러다임으로, 중앙 집중형 클라우드 처리에서 말단 디바이스 근처로 연산 위치를 이동시켜 실시간성·프라이버시 요구에 대응함 |
| 15 | [유전 알고리즘]({{< relref "/docs/subnotes/04_ComputerSystems/genetic-algorithm" >}}) | 다윈의 자연선택·유전·돌연변이를 모방한 메타휴리스틱 최적화 알고리즘으로, 그래디언트 없이 전역 최적해를 근사 탐색 |
| 16 | [고가용성·재해복구 아키텍처 (FTS/HA/멀티리전)]({{< relref "/docs/subnotes/04_ComputerSystems/ha-dr-multiregion" >}}) | 무중단 운영을 위한 **FTS**, 빠른 Failover로 가동률을 높이는 **HA**, RTO·RPO를 0에 가깝게 하는 **멀티리전 Active-Active** 아키텍처 |
| 17 | [차세대 초고속 메모리 기술 HBM/CXL/PIM]({{< relref "/docs/subnotes/04_ComputerSystems/hbm-cxl-pim" >}}) | Memory Wall 문제를 완화하기 위한 수직적층형 **HBM**, 초고속 인터커넥트 **CXL**, 메모리 내 연산 기술 **PIM** |
| 18 | [정보시스템 하드웨어 규모산정 방법]({{< relref "/docs/subnotes/04_ComputerSystems/hw-sizing-guideline" >}}) | 공공기관 정보시스템 HW 규모를 산정하는 TTA 표준으로, **기준 성능법·유사 시스템 기준법·용량 계획법** 3가지로 도출 |
| 19 | [인터미턴트 컴퓨팅]({{< relref "/docs/subnotes/04_ComputerSystems/intermittent-computing" >}}) | 태양광·RF 등에서 수확한 에너지로 간헐 동작하는 컴퓨팅 패러다임으로, 배터리 없는 극한환경 IoT 센서에 적용되며 전원 재개 시 연산 일관성 유지가 과제 |
| 20 | [IPC(프로세스 간 통신) 및 시스템 콜]({{< relref "/docs/subnotes/04_ComputerSystems/ipc-system-call" >}}) | 독립된 프로세스 간 데이터를 교환·동기화하는 **IPC**와, 사용자 모드에서 커널 서비스를 요청하는 유일한 합법적 경로 **시스템 콜** |
| 21 | [컨테이너 가상화 및 쿠버네티스]({{< relref "/docs/subnotes/04_ComputerSystems/k8s-virtualization" >}}) | 호스트 OS 커널을 공유하며 프로세스 레벨 격리(네·컨)를 구현하는 **컨테이너 가상화**와, 이를 자동 배포·관리하는 **쿠버네티스** |
| 22 | [프로그램 메모리 영역 및 동적 메모리 관리]({{< relref "/docs/subnotes/04_ComputerSystems/memory-areas-dynamic-allocation" >}}) | 프로세스를 코드·데이터·힙·스택 4개 영역으로 나누는 **메모리 레이아웃**과, 런타임 힙 할당·해제 및 **메모리 누수(Memory Leak)** 문제 |
| 23 | [메모리 인터리빙(Memory Interleaving)]({{< relref "/docs/subnotes/04_ComputerSystems/memory-interleaving" >}}) | 주기억장치를 k개의 독립 뱅크(Bank)로 분할해 연속 주소를 각 뱅크에 분산 배치함으로써 동시 접근을 가능하게 하는 메모리 대역폭 향상 기법으로, 단일 뱅크 접근 시간(t)이 동일하더라도 k-way 인터리빙 시 이론적으로 k배 대역폭 향상이 가능함 |
| 24 | [MMU 및 가상메모리]({{< relref "/docs/subnotes/04_ComputerSystems/mmu-virtual-memory" >}}) | 물리 메모리 한계를 보조기억장치로 확장하는 **가상 메모리 기술**과, 가상-물리 주소를 고속 변환·보호하는 **MMU 장치** |
| 25 | [비휘발성 메모리·저장장치 기술 (ROM/FRAM/SSD)]({{< relref "/docs/subnotes/04_ComputerSystems/nonvolatile-memory-rom-fram-ssd" >}}) | 전원이 꺼져도 데이터가 유지되는 저장 기술로, 펌웨어용 **ROM 계열**, 강유전체 기반 고속·고내구 **FRAM**, NAND 플래시 기반 **SSD**로 구성 |
| 26 | [운영체제 스케줄링 (CPU·디스크·실시간)]({{< relref "/docs/subnotes/04_ComputerSystems/os-scheduling" >}}) | 제한된 CPU·디스크 자원을 여러 프로세스·I/O 요청에 효율적으로 배분하는 정책으로, CPU 스케줄링은 프로세스 실행 순서를, 디스크 스케줄링은 I/O 요청 처리 순서(탐색시간·회전지연)를 결정하며, 실시간 스케줄링(RM/EDF)은 마감 시간(Deadline) 준수를 최우선 목표로 우선순위를 부여 |
| 27 | [OS 동기화 기법]({{< relref "/docs/subnotes/04_ComputerSystems/os-synchronization" >}}) | 다중 스레드 환경에서 공유 자원의 동시 접근을 제어하는 **동기화 기술(임계영역 조건: 상·진·한)**과, **우선순위 역전 극복 기법** |
| 28 | [병렬 컴퓨팅 및 GPU·NPU AI 가속기]({{< relref "/docs/subnotes/04_ComputerSystems/parallel-computing-npu" >}}) | 여러 프로세서·코어가 하나의 문제를 동시에 분할 처리하여 성능을 높이는 **병렬 컴퓨팅**과, 수천~수만 개의 단순 코어로 대규모 병렬 데이터 처리에 특화된 **GPU**(그 병렬 연산력을 그래픽 이외 범용 컴퓨팅에 활용하는 것이 **GPGPU**), 딥러닝 신경망의 행렬 곱셈·컨볼루션 연산에 특화되어 전력 효율(TOPS/W)이 뛰어난 전용 병렬 프로세서 **NPU**의 총칭 |
| 29 | [파이프라인 및 해저드]({{< relref "/docs/subnotes/04_ComputerSystems/pipeline-hazard" >}}) | 명령어 처리를 IF-ID-EX-MEM-WB 단계로 나눠 중첩 실행하는 **파이프라이닝**과, 의존성으로 인한 **해저드(구·데·제) 통제 기술** |
| 30 | [프로세스 생명주기와 문맥교환(Context Switch)]({{< relref "/docs/subnotes/04_ComputerSystems/process-lifecycle-context-switch" >}}) | 디스크의 정적 프로그램이 메모리에 적재되어 실행 중인 동적 인스턴스인 **프로세스**의 New→Ready→Running→Waiting→Terminated 상태 전이를 **PCB(Process Control Block)**로 관리하는 체계와, CPU가 실행 중인 프로세스의 상태(문맥)를 저장하고 다른 프로세스의 저장된 상태를 복원해 실행권을 이전하는 **문맥교환** 메커니즘 |
| 31 | [저장장치 다중화 및 신뢰성 RAID]({{< relref "/docs/subnotes/04_ComputerSystems/raid-storage" >}}) | 복수의 독립된 디스크를 통합해 데이터 분산(Striping)과 오류 정정(Parity)으로 I/O 속도와 가용성을 높이는 다중화 기술 |
| 32 | [RISC-V 오픈소스 명령어 집합 구조]({{< relref "/docs/subnotes/04_ComputerSystems/risc-v-isa" >}}) | UC Berkeley가 2010년 공개한 오픈소스 ISA로, 특허·라이선스 비용 없이 자유롭게 설계 가능해 x86·ARM 대안으로 부상하는 모듈식 RISC 아키텍처 |
| 33 | [세그멘테이션 오류와 메모리 보호 메커니즘]({{< relref "/docs/subnotes/04_ComputerSystems/segmentation-fault-memory-protection" >}}) | 접근 권한 없는 메모리 참조 시 OS가 프로세스를 강제 종료시키는 오류로, 유닉스/리눅스에서 **SIGSEGV** 시그널로 처리되며 MMU가 감지 |
| 34 | [서버·네트워크 이중화 실무 (L4/SW/공공망 사례)]({{< relref "/docs/subnotes/04_ComputerSystems/server-network-redundancy" >}}) | 단일 서버 장애를 막는 **서버 이중화(L4 스위치 vs 소프트웨어 기반)**와, 공공망 인프라 장애에 대비한 백업복구·이중화 대응 체계 |
| 35 | [서버리스 컴퓨팅 (Serverless / FaaS)]({{< relref "/docs/subnotes/04_ComputerSystems/serverless-faas" >}}) | 개발자가 서버 관리 없이 함수 단위 코드를 실행하는 클라우드 모델로, 제공자가 프로비저닝·스케일링을 자동 관리하며 실행 자원에만 과금(Pay-per-use) |
| 36 | [최단경로 알고리즘과 최소신장트리(MST)]({{< relref "/docs/subnotes/04_ComputerSystems/shortest-path-mst" >}}) | 그래프의 두 정점 간 간선 가중치 합이 최소가 되는 경로를 구하는 **최단경로 알고리즘**(Dijkstra, Bellman-Ford, Floyd-Warshall, A*)과, 모든 정점을 사이클 없이 최소 비용으로 연결하는 **최소신장트리(MST)** 알고리즘(Kruskal, Prim)의 총칭 |
| 37 | [정렬 알고리즘 (선택정렬/삽입정렬/퀵정렬)]({{< relref "/docs/subnotes/04_ComputerSystems/sorting-algorithms" >}}) | 선택정렬은 최솟값 탐색 후 교환, 삽입정렬은 정렬구간에 삽입, 퀵정렬은 피벗 분할을 반복 적용하는 비교 기반 정렬 기법으로, 미정렬 데이터를 특정 기준(최솟값/삽입위치/피벗)에 따라 정렬하는 구조 |
| 38 | [스토리지 가상화]({{< relref "/docs/subnotes/04_ComputerSystems/storage-virtualization" >}}) | 이기종 스토리지 장치를 하나의 논리적 풀(Pool)로 통합 관리하는 기술로, 관리 복잡성 감소와 무중단 마이그레이션을 목표로 함 |
| 39 | [시스템 버스와 버스 중재]({{< relref "/docs/subnotes/04_ComputerSystems/system-bus-arbitration" >}}) | CPU·메모리·I/O 간 주소·데이터·제어 신호를 전달하는 **시스템 버스**와, 공유 버스에 대한 동시 접근 충돌을 방지하는 **버스 중재 메커니즘** |
| 40 | [트리 자료구조 알고리즘 (B트리/이진트리 순회/AVL트리)]({{< relref "/docs/subnotes/04_ComputerSystems/tree-algorithms-btree-avl" >}}) | 모든 리프 노드가 동일 깊이를 갖도록 자가 균형을 유지하는 다진 탐색 트리인 **B트리**, 이진트리의 모든 노드를 정해진 순서 규칙에 따라 방문하는 **이진트리 순회(전위/중위/후위)**, 모든 노드의 균형인수(BF)를 -1~1로 유지하는 자기균형 이진탐색트리인 **AVL 트리**의 총칭 |
| 41 | [영상압축기법 (무손실·손실·혼합)]({{< relref "/docs/subnotes/04_ComputerSystems/video-compression" >}}) | 멀티미디어 데이터 크기를 줄이는 기법으로, 원본 복원이 가능한 **무손실 압축**, 지각 특성을 이용한 **손실 압축**, 둘을 결합한 **혼합 압축(H.264/HEVC)** |
