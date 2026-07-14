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

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **리눅스 컨테이너 가상화 및 쿠버네티스 (Kubernetes) 오케스트레이션** |
| **정의** | 호스트 OS 커널을 공유하며 프로세스 레벨 격리(네·컨)를 구현하는 **컨테이너 가상화**와, 컨테이너의 배포·스케일링·모니터링을 자동화하는 오픈소스 플랫폼 **쿠버네티스** |
| **키워드** | Namespace/cgroups, 하이퍼바이저 가상화 비교, Control Plane(에·이·컨·스), Kubelet, 자가치유 (Self-Healing) |
| **개념도** | **[ 쿠버네티스(K8s) 클러스터 아키텍처 및 선언적 제어 루프 ]**<br>`[ 사용자 (YAML 선언) ] ➔ [ API Server ] ── (Desired State 관리) ──➔ [ etcd ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (스케줄링 결정)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ Master: Scheduler/Controller ] ── (상태 조정 감시) ──➔ [ Worker Node ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`├── Kubelet ➔ Pods 구동`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└── Kube-Proxy ➔ 네트워킹` |
| **구성요소** | 1. **Control Plane (마스터)**: API Server(REST 게이트웨이), etcd(상태저장 DB), Controller(상태유지), Scheduler(배치)<br>2. **Worker Node (노드)**: Kubelet(마스터통신+컨테이너 관리), Kube-Proxy(네트워크 룰 제어), CRI(컨테이너 실행엔진)<br>3. **격리 커널기술 (네·컨)**: Namespace(PID/Network/Mount 격리) + cgroups(CPU/Memory/I/O 사용제한)<br>4. **쿠버네티스 추상객체**: Pod(최소배포단위), Service(L4 로드밸런싱), Ingress(L7 라우팅/SSL), ConfigMap/Secret |
| **비교** | **하이퍼바이저 가상화 (Hypervisor)**<br>- 격리수준: 완전 HW에뮬레이션 (Guest OS 구동 → 고격리성·보안성)<br>- 오버헤드: 무거움 (수GB 이미지, 분단위 부팅, 가상드라이버 오버헤드)<br><br>**컨테이너 가상화 (Container)**<br>- 격리수준: 호스트커널 공유형 프로세스 격리 (취약점 전파위험 존재)<br>- 오버헤드: 매우가벼움 (수MB 이미지, 밀리초 부팅, 베어메탈 성능) |
| **차별화** | **K8s 조율루프(Reconciliation Loop) 기반 자가치유·오토스케일링**<br>1. **선언적 제어(Declarative Control)**: 명령수행 아닌 Desired State(YAML) 기술 → Controller 상시감시 → Current State 일치화 (Reconciliation Loop)<br>2. **자가치유(Self-Healing)**: 노드 Down(NotReady) 감지 → Controller Manager → Scheduler가 Pod 정상노드 대피·재스케줄링 → 다운타임 최소화<br>3. **HPA 연동**: Metrics Server 연계 → CPU/Memory 사용률 모니터링 → 임계치(예 80%) 초과 시 ReplicaSet 자동증설(Scale Out)<br>4. **Scale Up vs Scale Out**: Scale Up=단일서버 CPU·메모리 향상, 구현단순·재시작중단·SPOF / Scale Out(HPA 채택)=서버 추가, 무중단·이론상 무한확장이나 LB·분산상태관리 필요, Stateless 설계 필수(세션은 Redis 등 외부저장)<br>5. **스케줄 기반 vs 부하 기반 Auto Scale**: 스케줄기반=Cron 사전시각(예 09:00→최소10개) 규칙확장, 예측정확·급증대응불가 / 부하기반(Metric-based)=CPU·메모리·응답시간 임계치 초과 시 확장, 불규칙트래픽 적합·플래핑/Cold Start 문제 → Cooldown(300초)+Scale In/Out 임계치이격(70%/40%)으로 방지, KEDA로 큐길이 등 비즈니스지표 스케일링 병행 |
