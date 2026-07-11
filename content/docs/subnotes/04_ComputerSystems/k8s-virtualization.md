---
title: "컨테이너 가상화 및 쿠버네티스"
date: 2026-07-11T11:19:35+09:00
tags: ["컴퓨터시스템", "가상화", "쿠버네티스", "Kubernetes", "Docker", "하이퍼바이저", "서브노트"]
draft: false
---

# 컨테이너 가상화 및 쿠버네티스 서브노트

> **두음 머리에 박기 🧠**
> - **에·이·컨·스** (K8s 마스터 노드(Control Plane) 4대 구성요소: **e**tcd, **A**PI Server, **C**ontroller Manager, **S**cheduler)
> - **큐·프·런** (K8s 워커 노드 3대 구성요소: **K**ubelet, Kube-**P**roxy, Container **R**untime)
> - **네·컨** (컨테이너 격리 핵심 리눅스 커널 기술: **네**임스페이스 Namespace(식별자 격리), **컨**트롤그룹 cgroups(자원 소모량 한계 제한))

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **리눅스 컨테이너 가상화 및 쿠버네티스 (Kubernetes) 오케스트레이션** |
| **정의** | 호스트 OS 커널을 공유하며 프로세스 레벨 격리(네·컨)를 구현하는 **컨테이너 가상화**와, 컨테이너의 배포·스케일링·모니터링을 자동화하는 오픈소스 플랫폼 **쿠버네티스** |
| **키워드** | Namespace/cgroups, 하이퍼바이저 가상화 비교, Control Plane(에·이·컨·스), Kubelet, 자가치유 (Self-Healing) |
| **개념도** | **[ 쿠버네티스(K8s) 클러스터 아키텍처 및 선언적 제어 루프 ]**<br>`[ 사용자 (YAML 선언) ] ➔ [ API Server ] ── (Desired State 관리) ──➔ [ etcd ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (스케줄링 결정)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ Master: Scheduler/Controller ] ── (상태 조정 감시) ──➔ [ Worker Node ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`├── Kubelet ➔ Pods 구동`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└── Kube-Proxy ➔ 네트워킹` |
| **구성요소** | 1. **Control Plane (마스터)**: API Server(REST 게이트웨이), etcd(상태 저장 DB), Controller(상태 유지), Scheduler(배치)<br>2. **Worker Node (노드)**: Kubelet(마스터와 통신 및 컨테이너 관리), Kube-Proxy(네트워크 룰 제어), CRI(컨테이너 실행 엔진)<br>3. **격리 커널 기술 (네·컨)**: Namespace(PID, Network, Mount 격리) 및 cgroups(CPU, Memory, I/O 사용 제한)<br>4. **쿠버네티스 추상 객체**: Pod(최소 배포 단위), Service(L4 로드밸런싱), Ingress(L7 라우팅/SSL), ConfigMap/Secret |
| **비교** | **하이퍼바이저 가상화 (Hypervisor)**<br>- **격리 수준**: 완전한 하드웨어 에뮬레이션 (Guest OS 구동으로 높은 격리성 및 보안성)<br>- **오버헤드**: 무거움 (수 GB 크기 이미지, 느린 부팅 수 분 단위, 가상 드라이버 오버헤드)<br><br>**컨테이너 가상화 (Container)**<br>- **격리 수준**: 호스트 커널 공유형 프로세스 수준 격리 (보안 취약점 전파 위험 존재)<br>- **오버헤드**: 매우 가벼움 (수 MB 크기 이미지, 밀리초 단위 즉시 부팅, 베어메탈 성능 도출) |
| **차별화** | **쿠버네티스 조율 루프(Reconciliation Loop) 기반 자가 치유(Self-Healing) 및 오토스케일링**<br>1. **선언적 제어(Declarative Control) 철학**: K8s는 명령 수행이 아닌, 원하는 상태(Desired State)를 YAML에 기술하고 Controller가 상시 감시 루프를 돌며 현재 상태(Current State)를 이에 일치시키는 화해 루프(Reconciliation Loop) 기법 관철.<br>2. **자가 치유 (Self-Healing) 구동 방식**: 특정 노드가 Down(NotReady) 상태가 되면 마스터의 Controller Manager가 이를 감지, 스케줄러를 가동해 장애 노드의 Pod들을 즉시 정상 노드에 대피 및 재스케줄링(Rescheduling)하여 다운타임 최소화.<br>3. **HPA(Horizontal Pod Autoscaler) 연동 기법**: 메트릭 서버(Metrics Server)를 연계해 Pod의 CPU/Memory 사용률을 모니터링하고, 임계치(예: 80%) 초과 시 ReplicaSet을 자동으로 늘려 수평 스케일 아웃(Scale Out) 및 트래픽 폭주 자동 통제. |
