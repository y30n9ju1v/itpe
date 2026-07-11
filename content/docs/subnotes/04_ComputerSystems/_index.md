---
bookCollapseSection: true
title: "컴퓨터시스템"
---

| 토픽명 | 정의 |
| :--- | :--- |
| [대규모 AI 데이터센터 구축 기술]({{< relref "/docs/subnotes/04_ComputerSystems/ai-datacenter-infra" >}}) | LLM·생성형 AI의 수천 개 GPU 클러스터를 연결하기 위해 마이크로초 단위 저지연·PB급 데이터 처리를 지원하는 **네트워크 인터커넥트 기술**과, 지리적으로 분산된 데이터센터 간을 고대역폭·저지연으로 연결하는 **DCI(Data Center Interconnect)** 기술 |
| [알고리즘 복잡도와 O-Notation]({{< relref "/docs/subnotes/04_ComputerSystems/algorithm-complexity-big-o" >}}) | 입력 크기 n에 따른 연산 횟수(시간복잡도) 또는 메모리 사용량(공간복잡도)을 수학적으로 표현하는 알고리즘 복잡도와, 최악의 경우 성능 상한선을 나타내는 알고리즘 비교의 표준 표기법 **O-Notation(Big-O)** |
| [블록체인 네트워크 유형 (퍼블릭/프라이빗/컨소시엄)]({{< relref "/docs/subnotes/04_ComputerSystems/blockchain-network-types" >}}) | 블록체인을 참여 범위·권한 제어 방식에 따라 누구나 참여 가능한 **퍼블릭**, 허가된 자만 참여하는 **프라이빗**, 허가된 다수 기관이 공동 운영하는 **컨소시엄**으로 구분한 네트워크 아키텍처 |
| [캐시메모리 및 일관성]({{< relref "/docs/subnotes/04_ComputerSystems/cache-coherence" >}}) | CPU-메모리 간 속도 차이를 보완하는 고속 임시 저장소 **캐시**와, 멀티코어 시스템에서 개별 코어의 로컬 캐시 사본 데이터가 동일하도록 보장하는 **일관성 제어 기술(MESI)** |
| [중앙은행 디지털 화폐 (CBDC)]({{< relref "/docs/subnotes/04_ComputerSystems/cbdc" >}}) | 중앙은행이 직접 발행하는 법정화폐(Fiat Currency)의 디지털 버전으로, 민간 암호화폐와 달리 국가가 가치와 신용을 보증하는 독점적 화폐 권력의 디지털 형태 |
| [CPU 내부 레지스터 및 상태 플래그]({{< relref "/docs/subnotes/04_ComputerSystems/cpu-registers-status-flags" >}}) | CPU가 명령어를 Fetch-Decode-Execute 하는 과정에서 사용하는 초고속 내부 저장 공간인 **레지스터**와, ALU 연산 결과·CPU 상태를 나타내어 조건 분기 명령의 판단 근거가 되는 **상태 레지스터(SR/PSW)의 조건 플래그** |
| [교착상태 및 은행가 알고리즘]({{< relref "/docs/subnotes/04_ComputerSystems/deadlock-banker" >}}) | 프로세스들이 서로 가진 자원을 무한정 대기하는 **교착상태 발생 조건(상·점·비·환)**과, 시스템을 항상 안전 상태(Safe State)로 유지하기 위해 자원 할당 여부를 동적 검증하는 **은행가 알고리즘** |
| [DMA 및 인터럽트]({{< relref "/docs/subnotes/04_ComputerSystems/dma-interrupt" >}}) | CPU 개입 없이 고속 I/O 장치와 메모리가 직접 데이터를 전송하는 **DMA 기술**과, 예기치 않은 사건 발생 시 CPU의 제어권을 예외 처리 루틴(ISR)으로 전환하는 **인터럽트 하드웨어 메커니즘** |
| [유전 알고리즘]({{< relref "/docs/subnotes/04_ComputerSystems/genetic-algorithm" >}}) | 다윈의 진화론(자연선택·유전·돌연변이)을 모방한 메타휴리스틱 최적화 알고리즘으로, 복잡한 탐색 공간에서 그래디언트 정보 없이도 전역 최적해(Global Optimum)를 근사 탐색 |
| [고가용성·재해복구 아키텍처 (FTS/HA/멀티리전)]({{< relref "/docs/subnotes/04_ComputerSystems/ha-dr-multiregion" >}}) | 구성요소 장애 시에도 서비스 중단 없이 지속 운영되는 **FTS(Fault Tolerant System)**, 장애 시 빠른 Failover로 가동률을 높게 유지하는 **HA(High Availability)**, 그리고 둘 이상의 지역에 동시 서비스를 배치해 RTO≈0·RPO≈0을 목표로 하는 **다중지역 Active-Active** 아키텍처 |
| [차세대 초고속 메모리 기술 HBM/CXL/PIM]({{< relref "/docs/subnotes/04_ComputerSystems/hbm-cxl-pim" >}}) | CPU/GPU와 메모리 간 데이터 전송 지연(Memory Wall)을 타개하기 위해 고안된 수직적층형 **HBM**, 초고속 인터커넥트 **CXL**, 그리고 메모리 칩 내부 연산 기술인 **PIM** |
| [정보시스템 하드웨어 규모산정 방법]({{< relref "/docs/subnotes/04_ComputerSystems/hw-sizing-guideline" >}}) | 공공기관 정보시스템 구축 시 CPU·메모리·스토리지 등 하드웨어 규모를 산정하기 위한 TTA 단체표준으로, **기준 성능법·유사 시스템 기준법·용량 계획법** 3가지 방법으로 적정 HW 규모를 도출 |
| [인터미턴트 컴퓨팅]({{< relref "/docs/subnotes/04_ComputerSystems/intermittent-computing" >}}) | 태양광·RF·진동 등 주변 환경에서 수확한 에너지(Energy Harvesting)로 간헐적으로 동작하는 컴퓨팅 패러다임으로, 배터리가 없거나 충전 불가능한 극한 환경 IoT 센서에 적용되며 전원 중단 후 재개 시 연산 일관성 유지가 핵심 과제 |
| [IPC(프로세스 간 통신) 및 시스템 콜]({{< relref "/docs/subnotes/04_ComputerSystems/ipc-system-call" >}}) | 독립된 메모리 공간을 가진 프로세스들이 데이터를 교환·동기화하는 OS 수준 메커니즘인 **IPC**와, 사용자 프로그램이 커널 서비스를 요청하기 위해 사용자 모드→커널 모드로 전환하는 유일한 합법적 경로인 **시스템 콜** |
| [컨테이너 가상화 및 쿠버네티스]({{< relref "/docs/subnotes/04_ComputerSystems/k8s-virtualization" >}}) | 호스트 OS 커널을 공유하며 프로세스 레벨 격리(네·컨)를 구현하는 **컨테이너 가상화**와, 컨테이너의 배포·스케일링·모니터링을 자동화하는 오픈소스 플랫폼 **쿠버네티스** |
| [프로그램 메모리 영역 및 동적 메모리 관리]({{< relref "/docs/subnotes/04_ComputerSystems/memory-areas-dynamic-allocation" >}}) | 프로세스 실행 시 OS가 메모리를 코드·데이터·힙·스택 4개 영역으로 나누어 관리하는 **메모리 레이아웃**과, 런타임에 힙에서 필요한 메모리를 요청·해제하는 **동적 메모리 할당** 및 해제 누락 시 발생하는 **메모리 누수(Memory Leak)** 문제 |
| [MMU 및 가상메모리]({{< relref "/docs/subnotes/04_ComputerSystems/mmu-virtual-memory" >}}) | 물리 메모리의 한계를 극복하기 위해 보조기억장치를 확장 활용하는 **가상 메모리 기술**과, 가상-물리 주소를 하드웨어적으로 고속 변환하고 불법 접근을 보호하는 **MMU 장치** |
| [비휘발성 메모리·저장장치 기술 (ROM/FRAM/SSD)]({{< relref "/docs/subnotes/04_ComputerSystems/nonvolatile-memory-rom-fram-ssd" >}}) | 전원이 꺼져도 데이터가 유지되는 비휘발성 저장 기술로, 펌웨어 저장용 **ROM 계열**, 강유전체 분극을 이용한 고속·고내구 **FRAM**, NAND 플래시 기반 대용량 저장장치인 **SSD**로 구성 |
| [운영체제 스케줄링 (CPU·디스크)]({{< relref "/docs/subnotes/04_ComputerSystems/os-scheduling" >}}) | 제한된 CPU·디스크 자원을 여러 프로세스·I/O 요청에 효율적으로 배분하는 정책으로, CPU 스케줄링은 프로세스 실행 순서를, 디스크 스케줄링은 I/O 요청 처리 순서(탐색시간·회전지연)를 결정 |
| [OS 동기화 기법]({{< relref "/docs/subnotes/04_ComputerSystems/os-synchronization" >}}) | 다중 스레드 환경에서 데이터 정합성을 지키기 위해 공유 자원의 동시 접근을 제어하는 **동기화 기술** 및 **임계 영역 제어 조건(상·진·한)**과, 동기화 락에 의해 발생하는 **우선순위 역전 극복 기법** |
| [병렬 컴퓨팅 및 NPU AI 가속기]({{< relref "/docs/subnotes/04_ComputerSystems/parallel-computing-npu" >}}) | 여러 프로세서·코어가 하나의 문제를 동시에 분할 처리하여 성능을 높이는 **병렬 컴퓨팅**과, 딥러닝 신경망의 행렬 곱셈·컨볼루션 연산에 특화되어 전력 효율(TOPS/W)이 뛰어난 전용 병렬 프로세서 **NPU** |
| [파이프라인 및 해저드]({{< relref "/docs/subnotes/04_ComputerSystems/pipeline-hazard" >}}) | CPU의 명령어 처리 과정을 여러 단계(IF-ID-EX-MEM-WB)로 나누어 동시에 중첩 실행하는 **병렬 처리 기술(파이프라이닝)**과, 명령어 간 의존성에 의해 파이프라인이 멈추는 **해저드(구·데·제) 통제 기술** |
| [저장장치 다중화 및 신뢰성 RAID]({{< relref "/docs/subnotes/04_ComputerSystems/raid-storage" >}}) | 복수의 독립된 물리 디스크를 논리적으로 통합하여, 데이터 분산(Striping) 및 오류 정정(Parity)을 통해 **디스크 I/O 속도와 데이터 가용성 신뢰도를 극대화하는 디스크 다중화 기술** |
| [RISC-V 오픈소스 명령어 집합 구조]({{< relref "/docs/subnotes/04_ComputerSystems/risc-v-isa" >}}) | UC Berkeley가 2010년 공개한 **오픈소스 ISA**로, 특허·라이선스 비용 없이 누구나 자유롭게 칩을 설계·제조·판매할 수 있어 x86·ARM의 대안으로 부상하는 **모듈식 RISC 아키텍처** |
| [서버·네트워크 이중화 실무 (L4/SW/공공망 사례)]({{< relref "/docs/subnotes/04_ComputerSystems/server-network-redundancy" >}}) | 단일 서버 장애로 인한 서비스 중단을 방지하는 **서버 이중화(L4 스위치 기반 vs 소프트웨어 기반)**와, 배터리 화재 등 공공망 인프라 장애에 대비한 **인프라관리·백업복구·이중화 3대 관점의 대응 체계** |
| [스토리지 가상화]({{< relref "/docs/subnotes/04_ComputerSystems/storage-virtualization" >}}) | 물리적으로 분산된 이기종 스토리지 장치를 하나의 논리적 스토리지 풀(Pool)로 통합 관리하는 기술로, 관리 복잡성 감소·활용률 향상·무중단 마이그레이션을 목표로 함 |
| [시스템 버스와 버스 중재]({{< relref "/docs/subnotes/04_ComputerSystems/system-bus-arbitration" >}}) | CPU·메모리·I/O 장치 간 주소·데이터·제어 신호를 전달하는 공유 통신 경로인 **시스템 버스**와, 공유 자원인 버스에 대한 동시 접근 충돌을 방지하기 위한 **버스 중재 메커니즘** |
| [영상압축기법 (무손실·손실·혼합)]({{< relref "/docs/subnotes/04_ComputerSystems/video-compression" >}}) | 멀티미디어 데이터의 저장·전송 효율을 높이기 위해 데이터 크기를 줄이는 기법으로, 원본 완전 복원이 가능한 **무손실 압축**, 지각 특성을 활용해 데이터를 버리는 **손실 압축**, 둘을 결합한 **혼합 압축(H.264/HEVC 등)**으로 분류 |
