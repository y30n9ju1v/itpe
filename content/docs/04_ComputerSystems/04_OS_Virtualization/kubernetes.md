---
title: "쿠버네티스 (Kubernetes)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "컴퓨터시스템", "가상화", "쿠버네티스", "컨테이너", "HPA", "오케스트레이션"]
draft: false
exam: "137회"
---

## 개요

쿠버네티스(Kubernetes, K8s)는 컨테이너화된 애플리케이션의 배포·확장·관리를 자동화하는 오픈소스 컨테이너 오케스트레이션 플랫폼이다. Google이 내부 Borg 시스템을 기반으로 2014년 공개했으며, 현재 클라우드 네이티브 인프라의 사실상 표준이다.

## 핵심 내용

### 쿠버네티스 개념 및 특징

- **컨테이너 오케스트레이션**: 수백~수천 개 컨테이너의 자동 배치·스케줄링·복구
- **선언적 구성**: 원하는 상태(Desired State)를 YAML로 정의 → K8s가 현재 상태와 비교하여 자동 조정
- **자가 치유(Self-Healing)**: 컨테이너 장애 시 자동 재시작·재배치
- **서비스 디스커버리**: DNS 기반 서비스 자동 등록·발견
- **롤링 업데이트**: 다운타임 없이 순차적 버전 업데이트

### 주요 컴포넌트

**Control Plane (마스터)**:

| 컴포넌트 | 역할 |
|----------|------|
| **kube-apiserver** | 모든 K8s API 요청의 진입점, 인증·인가 |
| **etcd** | 클러스터 전체 상태 저장소 (분산 키-값 DB) |
| **kube-scheduler** | 파드를 적합한 노드에 배치 결정 |
| **kube-controller-manager** | 원하는 상태 유지 (Replication, Node, Job 컨트롤러) |

**Worker Node**:

| 컴포넌트 | 역할 |
|----------|------|
| **kubelet** | 노드 에이전트, 파드 상태 관리 |
| **kube-proxy** | 네트워크 규칙 관리, 서비스 IP 라우팅 |
| **Container Runtime** | 컨테이너 실행 (containerd, CRI-O) |

**핵심 오브젝트**:
- **Pod**: 최소 배포 단위 (1개 이상 컨테이너 묶음)
- **Deployment**: 파드 복제·업데이트 관리
- **Service**: 파드 그룹의 안정적 네트워크 엔드포인트
- **Ingress**: 외부 트래픽 라우팅 규칙
- **ConfigMap/Secret**: 설정·기밀 데이터 분리 관리

### HPA (Horizontal Pod Autoscaler)

**개념**: CPU 사용률·메모리 사용량·커스텀 메트릭을 기반으로 Pod 수를 자동 증감하는 K8s 내장 기능.

**동작 원리**:
```
[메트릭 서버] → CPU/메모리 사용률 수집
      ↓
[HPA 컨트롤러] 목표 메트릭 vs 현재 메트릭 비교
      ↓
replicas = ceil(currentReplicas × currentMetric / targetMetric)
      ↓
[Deployment 스케일링] Pod 수 조정
```

**설정 예시**:
```yaml
spec:
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70  # CPU 70% 유지
```

**VPA vs HPA**:
- HPA: Pod 수 자동 조정 (수평 확장)
- VPA: 컨테이너 CPU/메모리 리소스 요청 자동 조정 (수직 확장)

## 출제 포인트

- K8s의 정의와 선언적 구성·자가 치유 특징
- Control Plane 4개 컴포넌트 + Worker Node 3개 컴포넌트
- HPA의 동작 원리와 수식 서술
- HPA vs VPA 차이 언급

## 연관 개념

- [TA/AA]({{< relref "/docs/02_SoftwareEngineering/02_Analysis_Design/ta-aa-architect" >}}) — 클라우드 네이티브 아키텍처 설계
- [FTS/HA]({{< relref "/docs/04_ComputerSystems/06_InfraArchitecture/fts-ha" >}}) — K8s 기반 고가용성 구현
- [MCP 보안]({{< relref "/docs/06_InfoSecurity/03_InfoProtection/mcp-security" >}}) — 컨테이너 환경 MCP 보안

## 참고 기출

- 137회 4교시 3번 (PEIM)
