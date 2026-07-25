---
bookCollapseSection: false
title: "컴퓨터 시스템 용어집"
---

| 용어 | 정의 | 출처 |
| :--- | :--- | :--- |
| 1T1C | DRAM 셀 구조(트랜지스터1+커패시터1) | [DRAM과 SRAM 비교]({{< relref "/docs/subnotes/04_ComputerSystems/dram-sram-comparison" >}}) |
| 3-2-1 백업 원칙 | 3개 복사본·2가지 매체·1개 오프사이트 원칙 | [서버·네트워크 이중화 실무 (L4/SW/공공망 사례)]({{< relref "/docs/subnotes/04_ComputerSystems/server-network-redundancy" >}}) |
| 6T | SRAM 셀 구조(트랜지스터 6개 교차결합) | [DRAM과 SRAM 비교]({{< relref "/docs/subnotes/04_ComputerSystems/dram-sram-comparison" >}}) |
| A* | 휴리스틱 기반 목적지 지정 최단경로 탐색 | [최단경로 알고리즘과 최소신장트리(MST)]({{< relref "/docs/subnotes/04_ComputerSystems/shortest-path-mst" >}}) |
| AC (Accumulator) | 연산 결과 저장하는 누산기 레지스터 | [CPU 내부 레지스터 및 상태 플래그]({{< relref "/docs/subnotes/04_ComputerSystems/cpu-registers-status-flags" >}}) |
| ASID | TLB 플러시 없이 프로세스 주소공간 구분자 | [프로세스 생명주기와 문맥교환(Context Switch)]({{< relref "/docs/subnotes/04_ComputerSystems/process-lifecycle-context-switch" >}}) |
| ASLR | 주소공간 배치 무작위화 보안기법 | [세그멘테이션 오류와 메모리 보호 메커니즘]({{< relref "/docs/subnotes/04_ComputerSystems/segmentation-fault-memory-protection" >}}) |
| AVL 트리 | 균형인수(BF) ±1 유지 자가균형 이진탐색트리 | [트리 자료구조 알고리즘 (B트리/이진트리 순회/AVL트리)]({{< relref "/docs/subnotes/04_ComputerSystems/tree-algorithms-btree-avl" >}}) |
| B트리 | 모든 리프 동일깊이 유지 자가균형 다진탐색트리 | [트리 자료구조 알고리즘 (B트리/이진트리 순회/AVL트리)]({{< relref "/docs/subnotes/04_ComputerSystems/tree-algorithms-btree-avl" >}}) |
| Bellman-Ford | 음수가중치 허용 DP기반 최단경로 알고리즘 | [최단경로 알고리즘과 최소신장트리(MST)]({{< relref "/docs/subnotes/04_ComputerSystems/shortest-path-mst" >}}) |
| BFS | 큐 기반 너비우선 그래프 탐색 | [알고리즘 설계기법(분할정복/DP/탐욕법/백트래킹)과 그래프 순회]({{< relref "/docs/subnotes/04_ComputerSystems/algorithm-design-paradigms" >}}) |
| Big-O | 최악 성능 상한을 나타내는 점근 표기법 | [알고리즘 복잡도와 O-Notation]({{< relref "/docs/subnotes/04_ComputerSystems/algorithm-complexity-big-o" >}}) |
| Big-Omega | 최선 하한을 나타내는 점근 표기법 | [알고리즘 복잡도와 O-Notation]({{< relref "/docs/subnotes/04_ComputerSystems/algorithm-complexity-big-o" >}}) |
| Big-Theta | 평균(상하한 일치)을 나타내는 점근 표기법 | [알고리즘 복잡도와 O-Notation]({{< relref "/docs/subnotes/04_ComputerSystems/algorithm-complexity-big-o" >}}) |
| cgroups | 프로세스 자원 소모량 한계 제한 커널기술 | [컨테이너 가상화 및 쿠버네티스]({{< relref "/docs/subnotes/04_ComputerSystems/k8s-virtualization" >}}) |
| CUDA Core | GPU의 단순 병렬연산 코어 | [병렬 컴퓨팅 및 NPU AI 가속기]({{< relref "/docs/subnotes/04_ComputerSystems/parallel-computing-npu" >}}) |
| CXL | PCIe 기반 메모리풀링 인터커넥트 | [차세대 초고속 메모리 기술 HBM/CXL/PIM]({{< relref "/docs/subnotes/04_ComputerSystems/hbm-cxl-pim" >}}) |
| CXL.cache | 가속기 캐시 공유용 CXL 서브 프로토콜 | [차세대 초고속 메모리 기술 HBM/CXL/PIM]({{< relref "/docs/subnotes/04_ComputerSystems/hbm-cxl-pim" >}}) |
| CXL.mem | 호스트 메모리 공유용 CXL 서브 프로토콜 | [차세대 초고속 메모리 기술 HBM/CXL/PIM]({{< relref "/docs/subnotes/04_ComputerSystems/hbm-cxl-pim" >}}) |
| DCI | 분산 데이터센터 간 고대역폭·저지연 연결 기술 | [대규모 AI 데이터센터 구축 기술]({{< relref "/docs/subnotes/04_ComputerSystems/ai-datacenter-infra" >}}) |
| DCT | 공간→주파수 변환 손실압축 기법 | [영상압축기법 (무손실·손실·혼합)]({{< relref "/docs/subnotes/04_ComputerSystems/video-compression" >}}) |
| DEP/NX | 데이터영역 코드실행 차단 보안기법 | [세그멘테이션 오류와 메모리 보호 메커니즘]({{< relref "/docs/subnotes/04_ComputerSystems/segmentation-fault-memory-protection" >}}) |
| DFS | 스택(재귀) 기반 깊이우선 그래프 탐색 | [알고리즘 설계기법(분할정복/DP/탐욕법/백트래킹)과 그래프 순회]({{< relref "/docs/subnotes/04_ComputerSystems/algorithm-design-paradigms" >}}) |
| Dijkstra | 그리디+우선순위큐 기반 단일출발 최단경로 | [최단경로 알고리즘과 최소신장트리(MST)]({{< relref "/docs/subnotes/04_ComputerSystems/shortest-path-mst" >}}) |
| DLT | 중앙은행 등이 활용하는 분산원장기술 | [중앙은행 디지털 화폐 (CBDC)]({{< relref "/docs/subnotes/04_ComputerSystems/cbdc" >}}) |
| EDF | 마감임박 우선 동적 실시간 스케줄링 | [운영체제 스케줄링 (CPU·디스크)]({{< relref "/docs/subnotes/04_ComputerSystems/os-scheduling" >}}) |
| etcd | K8s 클러스터 상태(Desired State) 저장 분산 DB | [컨테이너 가상화 및 쿠버네티스]({{< relref "/docs/subnotes/04_ComputerSystems/k8s-virtualization" >}}) |
| FaaS | 함수 단위로 실행되는 서버리스 컴퓨팅 모델 | [서버리스 컴퓨팅 (Serverless / FaaS)]({{< relref "/docs/subnotes/04_ComputerSystems/serverless-faas" >}}) |
| Floyd-Warshall | 전체쌍 최단경로 3중 DP 알고리즘 | [최단경로 알고리즘과 최소신장트리(MST)]({{< relref "/docs/subnotes/04_ComputerSystems/shortest-path-mst" >}}) |
| FRAM | 강유전체 분극 이용 고속·고내구 비휘발성메모리 | [비휘발성 메모리·저장장치 기술 (ROM/FRAM/SSD)]({{< relref "/docs/subnotes/04_ComputerSystems/nonvolatile-memory-rom-fram-ssd" >}}) |
| FTS | 하드웨어 완전 이중화로 무중단 운영하는 시스템 | [고가용성·재해복구 아키텍처 (FTS/HA/멀티리전)]({{< relref "/docs/subnotes/04_ComputerSystems/ha-dr-multiregion" >}}) |
| H.264/HEVC | DCT+모션보상 결합 혼합압축 영상표준 | [영상압축기법 (무손실·손실·혼합)]({{< relref "/docs/subnotes/04_ComputerSystems/video-compression" >}}) |
| HA | 신속 Failover로 고가동률 유지하는 아키텍처 | [고가용성·재해복구 아키텍처 (FTS/HA/멀티리전)]({{< relref "/docs/subnotes/04_ComputerSystems/ha-dr-multiregion" >}}) |
| HBM | TSV 수직적층 방식 고대역폭 메모리 | [차세대 초고속 메모리 기술 HBM/CXL/PIM]({{< relref "/docs/subnotes/04_ComputerSystems/hbm-cxl-pim" >}}) |
| IaaS/PaaS/CaaS | 클라우드 서비스 모델 계층(인프라/플랫폼/컨테이너) | [서버리스 컴퓨팅 (Serverless / FaaS)]({{< relref "/docs/subnotes/04_ComputerSystems/serverless-faas" >}}) |
| InfiniBand | HPC/AI 특화 초고속(400Gb/s+) 네트워크 | [대규모 AI 데이터센터 구축 기술]({{< relref "/docs/subnotes/04_ComputerSystems/ai-datacenter-infra" >}}) |
| IOP | 독자 I/O 명령 처리하는 채널제어기 전용프로세서 | [DMA 및 인터럽트]({{< relref "/docs/subnotes/04_ComputerSystems/dma-interrupt" >}}) |
| IR (Instruction Register) | 현재 실행 명령어를 저장하는 레지스터 | [CPU 내부 레지스터 및 상태 플래그]({{< relref "/docs/subnotes/04_ComputerSystems/cpu-registers-status-flags" >}}) |
| ISA | RISC-V 등의 명령어 집합 구조 | [RISC-V 오픈소스 명령어 집합 구조]({{< relref "/docs/subnotes/04_ComputerSystems/risc-v-isa" >}}) |
| ISR | 인터럽트 발생 시 예외처리하는 커널 루틴 | [DMA 및 인터럽트]({{< relref "/docs/subnotes/04_ComputerSystems/dma-interrupt" >}}) |
| Keepalived | VRRP 기반 VIP 자동 이관 소프트웨어 | [서버·네트워크 이중화 실무 (L4/SW/공공망 사례)]({{< relref "/docs/subnotes/04_ComputerSystems/server-network-redundancy" >}}) |
| Kruskal | 간선 중심 접근의 MST 알고리즘 | [최단경로 알고리즘과 최소신장트리(MST)]({{< relref "/docs/subnotes/04_ComputerSystems/shortest-path-mst" >}}) |
| Kubelet | 워커노드에서 컨테이너를 관리하는 에이전트 | [컨테이너 가상화 및 쿠버네티스]({{< relref "/docs/subnotes/04_ComputerSystems/k8s-virtualization" >}}) |
| LUN | 블록 가상화의 논리 블록 매핑 단위 | [스토리지 가상화]({{< relref "/docs/subnotes/04_ComputerSystems/storage-virtualization" >}}) |
| MAC 어레이 | NPU의 행렬곱 기본 연산단위 | [병렬 컴퓨팅 및 NPU AI 가속기]({{< relref "/docs/subnotes/04_ComputerSystems/parallel-computing-npu" >}}) |
| MAR | 접근할 메모리 주소를 저장하는 레지스터 | [CPU 내부 레지스터 및 상태 플래그]({{< relref "/docs/subnotes/04_ComputerSystems/cpu-registers-status-flags" >}}) |
| MBR | 메모리 데이터를 저장하는 레지스터 | [CPU 내부 레지스터 및 상태 플래그]({{< relref "/docs/subnotes/04_ComputerSystems/cpu-registers-status-flags" >}}) |
| MEC | 기지국 등에서 근접 처리하는 엣지 컴퓨팅 방식 | [엣지 컴퓨팅과 클라우드 컴퓨팅 비교]({{< relref "/docs/subnotes/04_ComputerSystems/edge-computing" >}}) |
| MESI | 캐시일관성 4상태(M/E/S/I) 프로토콜 | [캐시메모리 및 일관성]({{< relref "/docs/subnotes/04_ComputerSystems/cache-coherence" >}}) |
| Mirroring | 동일 복사본을 다중 디스크에 저장하는 RAID 기법 | [저장장치 다중화 및 신뢰성 RAID]({{< relref "/docs/subnotes/04_ComputerSystems/raid-storage" >}}) |
| MMU | 가상주소→물리주소 변환하는 하드웨어 | [MMU 및 가상메모리]({{< relref "/docs/subnotes/04_ComputerSystems/mmu-virtual-memory" >}}) |
| Mode Bit | 사용자모드/커널모드를 구분하는 1비트 | [이중 모드(Dual Mode)와 보호 링(Protection Ring)]({{< relref "/docs/subnotes/04_ComputerSystems/dual-mode-privilege-ring" >}}) |
| Monitor | 언어레벨에서 공유자원 접근을 캡슐화한 동기화 객체 | [OS 동기화 기법]({{< relref "/docs/subnotes/04_ComputerSystems/os-synchronization" >}}) |
| MTBF/MTTR | 가용성 산출용 평균고장간격/평균수리시간 지표 | [고가용성·재해복구 아키텍처 (FTS/HA/멀티리전)]({{< relref "/docs/subnotes/04_ComputerSystems/ha-dr-multiregion" >}}) |
| Mutex | 소유권 있는 이진(0/1) 상호배제 잠금객체 | [OS 동기화 기법]({{< relref "/docs/subnotes/04_ComputerSystems/os-synchronization" >}}) |
| NVLink/NVSwitch | GPU 간 최대 900GB/s급 인터커넥트 | [대규모 AI 데이터센터 구축 기술]({{< relref "/docs/subnotes/04_ComputerSystems/ai-datacenter-infra" >}}) |
| Over-Provisioning | SSD 예비공간 확보로 성능 유지하는 기법 | [비휘발성 메모리·저장장치 기술 (ROM/FRAM/SSD)]({{< relref "/docs/subnotes/04_ComputerSystems/nonvolatile-memory-rom-fram-ssd" >}}) |
| Parity | XOR 연산 기반 RAID 오류정정 정보 | [저장장치 다중화 및 신뢰성 RAID]({{< relref "/docs/subnotes/04_ComputerSystems/raid-storage" >}}) |
| PBFT | 2/3 이상 노드 합의 비잔틴장애허용 알고리즘 | [블록체인 네트워크 유형 (퍼블릭/프라이빗/컨소시엄)]({{< relref "/docs/subnotes/04_ComputerSystems/blockchain-network-types" >}}) |
| PC (Program Counter) | 다음 실행할 명령 주소를 저장하는 레지스터 | [CPU 내부 레지스터 및 상태 플래그]({{< relref "/docs/subnotes/04_ComputerSystems/cpu-registers-status-flags" >}}) |
| PCB | 프로세스 상태를 저장하는 제어블록 | [프로세스 생명주기와 문맥교환(Context Switch)]({{< relref "/docs/subnotes/04_ComputerSystems/process-lifecycle-context-switch" >}}) |
| PC Relative | EA=PC+Offset 방식의 분기·PIC용 주소지정 | [CPU 주소지정방식(Addressing Mode)]({{< relref "/docs/subnotes/04_ComputerSystems/cpu-addressing-mode" >}}) |
| PIM | DRAM 뱅크 내부에 연산코어를 내장한 기술 | [차세대 초고속 메모리 기술 HBM/CXL/PIM]({{< relref "/docs/subnotes/04_ComputerSystems/hbm-cxl-pim" >}}) |
| PoA | 신뢰된 검증자 목록 기반 권위증명 합의방식 | [블록체인 네트워크 유형 (퍼블릭/프라이빗/컨소시엄)]({{< relref "/docs/subnotes/04_ComputerSystems/blockchain-network-types" >}}) |
| PoS | 지분(Stake) 기반 합의 알고리즘 | [블록체인 네트워크 유형 (퍼블릭/프라이빗/컨소시엄)]({{< relref "/docs/subnotes/04_ComputerSystems/blockchain-network-types" >}}) |
| PoW | 해시 경쟁 기반 작업증명 합의 알고리즘 | [블록체인 네트워크 유형 (퍼블릭/프라이빗/컨소시엄)]({{< relref "/docs/subnotes/04_ComputerSystems/blockchain-network-types" >}}) |
| Prim | 정점 중심 접근의 MST 알고리즘 | [최단경로 알고리즘과 최소신장트리(MST)]({{< relref "/docs/subnotes/04_ComputerSystems/shortest-path-mst" >}}) |
| RDMA | CPU 개입 없는 원격 메모리 직접 접근 기술 | [대규모 AI 데이터센터 구축 기술]({{< relref "/docs/subnotes/04_ComputerSystems/ai-datacenter-infra" >}}) |
| Register Indirect | EA=M[Register] 방식의 주소지정 | [CPU 주소지정방식(Addressing Mode)]({{< relref "/docs/subnotes/04_ComputerSystems/cpu-addressing-mode" >}}) |
| Ring -1 | 가상화 확장 하이퍼바이저 전용 권한 레벨 | [이중 모드(Dual Mode)와 보호 링(Protection Ring)]({{< relref "/docs/subnotes/04_ComputerSystems/dual-mode-privilege-ring" >}}) |
| RLE | 반복패턴 기반 무손실 압축 기법 | [영상압축기법 (무손실·손실·혼합)]({{< relref "/docs/subnotes/04_ComputerSystems/video-compression" >}}) |
| RM | 주기 기반 정적 우선순위 실시간 스케줄링 | [운영체제 스케줄링 (CPU·디스크)]({{< relref "/docs/subnotes/04_ComputerSystems/os-scheduling" >}}) |
| RoCE | 이더넷 위에서 구현한 RDMA | [대규모 AI 데이터센터 구축 기술]({{< relref "/docs/subnotes/04_ComputerSystems/ai-datacenter-infra" >}}) |
| RPO | 재해복구 시 허용 데이터 손실 시점 목표 | [고가용성·재해복구 아키텍처 (FTS/HA/멀티리전)]({{< relref "/docs/subnotes/04_ComputerSystems/ha-dr-multiregion" >}}) |
| RTO | 재해복구 시 목표 복구 소요시간 지표 | [고가용성·재해복구 아키텍처 (FTS/HA/멀티리전)]({{< relref "/docs/subnotes/04_ComputerSystems/ha-dr-multiregion" >}}) |
| RV32I/RV64I | 워드길이별 RISC-V 기본 정수 ISA | [RISC-V 오픈소스 명령어 집합 구조]({{< relref "/docs/subnotes/04_ComputerSystems/risc-v-isa" >}}) |
| SIGSEGV | 잘못된 메모리 접근 시 발생하는 강제종료 시그널 | [세그멘테이션 오류와 메모리 보호 메커니즘]({{< relref "/docs/subnotes/04_ComputerSystems/segmentation-fault-memory-protection" >}}) |
| SIMD | 단일명령 다중데이터 병렬처리 방식 | [병렬 컴퓨팅 및 NPU AI 가속기]({{< relref "/docs/subnotes/04_ComputerSystems/parallel-computing-npu" >}}) |
| SIMT | Warp(32스레드) 단위 동시실행 방식 | [병렬 컴퓨팅 및 NPU AI 가속기]({{< relref "/docs/subnotes/04_ComputerSystems/parallel-computing-npu" >}}) |
| SJF | 최단작업 우선 비선점 CPU 스케줄링 | [운영체제 스케줄링 (CPU·디스크)]({{< relref "/docs/subnotes/04_ComputerSystems/os-scheduling" >}}) |
| Spine-Leaf | 2계층 Clos 구조로 동서 트래픽 균등분산 아키텍처 | [대규모 AI 데이터센터 구축 기술]({{< relref "/docs/subnotes/04_ComputerSystems/ai-datacenter-infra" >}}) |
| SRT | SJF의 선점형 CPU 스케줄링 | [운영체제 스케줄링 (CPU·디스크)]({{< relref "/docs/subnotes/04_ComputerSystems/os-scheduling" >}}) |
| SSTF | 탐색시간 최소 우선 디스크 스케줄링 | [운영체제 스케줄링 (CPU·디스크)]({{< relref "/docs/subnotes/04_ComputerSystems/os-scheduling" >}}) |
| Stack Canary | 스택 변조 탐지용 삽입 값 | [세그멘테이션 오류와 메모리 보호 메커니즘]({{< relref "/docs/subnotes/04_ComputerSystems/segmentation-fault-memory-protection" >}}) |
| Striping | 데이터 블록을 분할해 병렬 분산 저장하는 기법 | [저장장치 다중화 및 신뢰성 RAID]({{< relref "/docs/subnotes/04_ComputerSystems/raid-storage" >}}) |
| Stored-program | 명령어를 데이터와 함께 메모리에 저장하는 방식 | [컴퓨터 기본구조와 폰노이만·하버드 아키텍처]({{< relref "/docs/subnotes/04_ComputerSystems/computer-architecture-von-neumann-harvard" >}}) |
| TLB | 페이지테이블 엔트리를 캐싱하는 연상메모리 | [MMU 및 가상메모리]({{< relref "/docs/subnotes/04_ComputerSystems/mmu-virtual-memory" >}}) |
| TRIM | 삭제블록 사전정리로 SSD 성능 유지하는 기법 | [비휘발성 메모리·저장장치 기술 (ROM/FRAM/SSD)]({{< relref "/docs/subnotes/04_ComputerSystems/nonvolatile-memory-rom-fram-ssd" >}}) |
| TSV | HBM의 수직 관통 전극 | [차세대 초고속 메모리 기술 HBM/CXL/PIM]({{< relref "/docs/subnotes/04_ComputerSystems/hbm-cxl-pim" >}}) |
| VIP | 로드밸런서의 단일 진입점 가상 IP | [서버·네트워크 이중화 실무 (L4/SW/공공망 사례)]({{< relref "/docs/subnotes/04_ComputerSystems/server-network-redundancy" >}}) |
| Wear Leveling | SSD 쓰기를 균등 분산시키는 수명연장 기법 | [비휘발성 메모리·저장장치 기술 (ROM/FRAM/SSD)]({{< relref "/docs/subnotes/04_ComputerSystems/nonvolatile-memory-rom-fram-ssd" >}}) |
| 고아 프로세스 | 부모 조기종료 후 init이 입양하는 프로세스 | [프로세스 생명주기와 문맥교환(Context Switch)]({{< relref "/docs/subnotes/04_ComputerSystems/process-lifecycle-context-switch" >}}) |
| 고위 인터리빙 | 상위비트로 뱅크 결정, 독립접근에 최적 | [메모리 인터리빙(Memory Interleaving)]({{< relref "/docs/subnotes/04_ComputerSystems/memory-interleaving" >}}) |
| 공유 메모리 (IPC) | 직접접근 방식의 빠른 IPC 기법 | [IPC(프로세스 간 통신) 및 시스템 콜]({{< relref "/docs/subnotes/04_ComputerSystems/ipc-system-call" >}}) |
| 구조적 해저드 | 동일 HW자원을 동시 요구할 때 발생하는 해저드 | [파이프라인 및 해저드]({{< relref "/docs/subnotes/04_ComputerSystems/pipeline-hazard" >}}) |
| 균형인수(BF) | 좌우 서브트리 높이차 | [트리 자료구조 알고리즘 (B트리/이진트리 순회/AVL트리)]({{< relref "/docs/subnotes/04_ComputerSystems/tree-algorithms-btree-avl" >}}) |
| 기아상태 | 스케줄러 우선순위 편향으로 실행 배제 지속 | [교착상태 및 은행가 알고리즘]({{< relref "/docs/subnotes/04_ComputerSystems/deadlock-banker" >}}) |
| 기준 성능법 | TPC-C 등 벤치마크 기반 HW 규모산정법 | [정보시스템 하드웨어 규모산정 방법]({{< relref "/docs/subnotes/04_ComputerSystems/hw-sizing-guideline" >}}) |
| 데이지 체인 | 직렬 연결 고정우선순위 버스중재 방식 | [시스템 버스와 버스 중재]({{< relref "/docs/subnotes/04_ComputerSystems/system-bus-arbitration" >}}) |
| 데이터 해저드 | 이전명령어 결과 미반영 상태에서 참조 시 발생 | [파이프라인 및 해저드]({{< relref "/docs/subnotes/04_ComputerSystems/pipeline-hazard" >}}) |
| 도매 CBDC | 상업은행 등 금융기관 간 거액결제용 CBDC | [중앙은행 디지털 화폐 (CBDC)]({{< relref "/docs/subnotes/04_ComputerSystems/cbdc" >}}) |
| 독립 요청 | 장치별 개별 요청/허가선 기반 버스중재 | [시스템 버스와 버스 중재]({{< relref "/docs/subnotes/04_ComputerSystems/system-bus-arbitration" >}}) |
| 동적계획법 | 중복 부분문제를 메모이제이션해 재사용하는 기법 | [알고리즘 설계기법(분할정복/DP/탐욕법/백트래킹)과 그래프 순회]({{< relref "/docs/subnotes/04_ComputerSystems/algorithm-design-paradigms" >}}) |
| 디렉토리 (캐시) | 중앙디렉토리 기반 캐시상태 관리(대규모용) | [캐시메모리 및 일관성]({{< relref "/docs/subnotes/04_ComputerSystems/cache-coherence" >}}) |
| 룰렛 휠 | 적합도 비례 확률 기반 선택 방식 | [유전 알고리즘]({{< relref "/docs/subnotes/04_ComputerSystems/genetic-algorithm" >}}) |
| 메모리 누수 | 해제 누락으로 메모리가 점진 소모되는 문제 | [프로그램 메모리 영역 및 동적 메모리 관리]({{< relref "/docs/subnotes/04_ComputerSystems/memory-areas-dynamic-allocation" >}}) |
| 메시지 패싱 | 커널 경유 send/receive 방식의 IPC | [IPC(프로세스 간 통신) 및 시스템 콜]({{< relref "/docs/subnotes/04_ComputerSystems/ipc-system-call" >}}) |
| 백트래킹 | 제약 위반 시 이전 단계로 회귀하는 탐색기법 | [알고리즘 설계기법(분할정복/DP/탐욕법/백트래킹)과 그래프 순회]({{< relref "/docs/subnotes/04_ComputerSystems/algorithm-design-paradigms" >}}) |
| 버스트 모드 | 버스 완전점유 대량 연속전송 DMA 방식 | [DMA 및 인터럽트]({{< relref "/docs/subnotes/04_ComputerSystems/dma-interrupt" >}}) |
| 분할정복 | 독립 부분문제로 나눠 재귀 해결 후 병합 | [알고리즘 설계기법(분할정복/DP/탐욕법/백트래킹)과 그래프 순회]({{< relref "/docs/subnotes/04_ComputerSystems/algorithm-design-paradigms" >}}) |
| 사이클 스틸링 | CPU 비사용 1클록 틈새 이용 DMA 전송 방식 | [DMA 및 인터럽트]({{< relref "/docs/subnotes/04_ComputerSystems/dma-interrupt" >}}) |
| 삽입정렬 | 정렬구간 알맞은 위치에 원소를 삽입하는 정렬 | [정렬 알고리즘 (선택정렬/삽입정렬/퀵정렬)]({{< relref "/docs/subnotes/04_ComputerSystems/sorting-algorithms" >}}) |
| 선택정렬 | 최솟값 탐색 후 맨 앞 원소와 교환하는 정렬 | [정렬 알고리즘 (선택정렬/삽입정렬/퀵정렬)]({{< relref "/docs/subnotes/04_ComputerSystems/sorting-algorithms" >}}) |
| 세트 연관 매핑 | 여러 세트로 분할, 세트내 완전연관인 절충형 매핑 | [캐시메모리 및 일관성]({{< relref "/docs/subnotes/04_ComputerSystems/cache-coherence" >}}) |
| 소매 CBDC | 일반대중 대상 현금대체용 CBDC | [중앙은행 디지털 화폐 (CBDC)]({{< relref "/docs/subnotes/04_ComputerSystems/cbdc" >}}) |
| 쓰래싱 | 과도한 페이지 스왑으로 인한 성능저하 현상 | [MMU 및 가상메모리]({{< relref "/docs/subnotes/04_ComputerSystems/mmu-virtual-memory" >}}) |
| 씬 프로비저닝 | 실사용량만큼만 스토리지를 할당하는 기법 | [스토리지 가상화]({{< relref "/docs/subnotes/04_ComputerSystems/storage-virtualization" >}}) |
| 안전 순서열 | 모든 프로세스가 완료 가능한 자원할당 순서 | [교착상태 및 은행가 알고리즘]({{< relref "/docs/subnotes/04_ComputerSystems/deadlock-banker" >}}) |
| 암달의 법칙 | 직렬비율이 병렬화 성능 향상의 상한을 결정 | [병렬 컴퓨팅 및 NPU AI 가속기]({{< relref "/docs/subnotes/04_ComputerSystems/parallel-computing-npu" >}}) |
| 에너지 하베스팅 | 태양광·RF·진동 등 주변 환경에서 에너지 수확 | [인터미턴트 컴퓨팅]({{< relref "/docs/subnotes/04_ComputerSystems/intermittent-computing" >}}) |
| 엘리트주의 | 최우수 개체를 다음 세대로 무조건 보존 | [유전 알고리즘]({{< relref "/docs/subnotes/04_ComputerSystems/genetic-algorithm" >}}) |
| 오토 티어링 | 핫/콜드데이터를 자동으로 계층 이동시키는 기법 | [스토리지 가상화]({{< relref "/docs/subnotes/04_ComputerSystems/storage-virtualization" >}}) |
| 완전 연관 매핑 | 메모리블록을 임의 캐시라인에 자유 저장 | [캐시메모리 및 일관성]({{< relref "/docs/subnotes/04_ComputerSystems/cache-coherence" >}}) |
| 용량 계획법 | 업무량 분석 기반 HW 규모산정법 | [정보시스템 하드웨어 규모산정 방법]({{< relref "/docs/subnotes/04_ComputerSystems/hw-sizing-guideline" >}}) |
| 우선순위 역전 | 저우선순위 락점유로 고우선순위 태스크가 지연되는 현상 | [OS 동기화 기법]({{< relref "/docs/subnotes/04_ComputerSystems/os-synchronization" >}}) |
| 워킹 세트 | 쓰래싱 방지 위한 실행주기 페이지 집합 모델 | [MMU 및 가상메모리]({{< relref "/docs/subnotes/04_ComputerSystems/mmu-virtual-memory" >}}) |
| 유사 시스템 기준법 | 기구축 유사시스템 데이터를 참조하는 규모산정법 | [정보시스템 하드웨어 규모산정 방법]({{< relref "/docs/subnotes/04_ComputerSystems/hw-sizing-guideline" >}}) |
| 저위 인터리빙 | 하위비트로 뱅크 결정, 연속접근에 최적 | [메모리 인터리빙(Memory Interleaving)]({{< relref "/docs/subnotes/04_ComputerSystems/memory-interleaving" >}}) |
| 제어 해저드 | 분기명령어로 다음 명령어주소가 미확정일 때 발생 | [파이프라인 및 해저드]({{< relref "/docs/subnotes/04_ComputerSystems/pipeline-hazard" >}}) |
| 좀비 프로세스 | wait() 미호출로 남아있는 종료 프로세스 | [프로세스 생명주기와 문맥교환(Context Switch)]({{< relref "/docs/subnotes/04_ComputerSystems/process-lifecycle-context-switch" >}}) |
| 직접 매핑 | 메모리블록을 지정 캐시라인 1개에만 매핑 | [캐시메모리 및 일관성]({{< relref "/docs/subnotes/04_ComputerSystems/cache-coherence" >}}) |
| 체크포인팅 | 실행 상태를 주기적으로 저장·복원하는 기법 | [인터미턴트 컴퓨팅]({{< relref "/docs/subnotes/04_ComputerSystems/intermittent-computing" >}}) |
| 콜드 스타트 | 첫 호출 시 함수 컨테이너 생성으로 인한 지연 | [서버리스 컴퓨팅 (Serverless / FaaS)]({{< relref "/docs/subnotes/04_ComputerSystems/serverless-faas" >}}) |
| 퀵정렬 | 피벗 기준 분할정복 방식의 정렬 | [정렬 알고리즘 (선택정렬/삽입정렬/퀵정렬)]({{< relref "/docs/subnotes/04_ComputerSystems/sorting-algorithms" >}}) |
| 탐욕법 | 매 단계 국소 최적을 선택하는 설계기법 | [알고리즘 설계기법(분할정복/DP/탐욕법/백트래킹)과 그래프 순회]({{< relref "/docs/subnotes/04_ComputerSystems/algorithm-design-paradigms" >}}) |
| 토너먼트 선택 | 무작위 k개 중 최우수 개체를 선택하는 방식 | [유전 알고리즘]({{< relref "/docs/subnotes/04_ComputerSystems/genetic-algorithm" >}}) |
| 특권 명령어 | 커널모드에서만 실행 가능한 명령어 | [이중 모드(Dual Mode)와 보호 링(Protection Ring)]({{< relref "/docs/subnotes/04_ComputerSystems/dual-mode-privilege-ring" >}}) |
| 포워딩 | WB 대기 없이 EX 결과를 직접 우회 전달하는 기법 | [파이프라인 및 해저드]({{< relref "/docs/subnotes/04_ComputerSystems/pipeline-hazard" >}}) |
| 폴링 (버스중재) | 순차 질의 방식의 버스중재 | [시스템 버스와 버스 중재]({{< relref "/docs/subnotes/04_ComputerSystems/system-bus-arbitration" >}}) |
| 허프만 코딩 | 빈도 기반 가변길이 무손실 압축 기법 | [영상압축기법 (무손실·손실·혼합)]({{< relref "/docs/subnotes/04_ComputerSystems/video-compression" >}}) |
