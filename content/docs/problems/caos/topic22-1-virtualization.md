---
title: "Hypervisor 유형, Docker 비교, 컨테이너 배포절차"
date: 2026-06-14T09:00:00+09:00
tags: ["CA/OS", "컴퓨터구조", "운영체제", "핵토200"]
topic_no1: 22
topic_no2: 1
topic_large: "클라우드컴퓨팅"
topic_small: "가상화기술"
exam_ref: "모의_2017.01"
exam_type: "관리"
question_no: 3
---

## 문제

Hypervisor의 유형, Hypervisor와 Docker 비교, Docker 컨테이너 배포절차

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 클라우드컴퓨팅 |
| 토픽(소) | 가상화기술 |
| 출제 | 모의_2017.01 |
| 유형 | 관리 |
| 번호 | 3 |

## 해설

> **하나의 물리 서버 위에서 여러 환경을 격리하여 실행하는 기술의 두 접근법**  
> Type 1/Type 2 하이퍼바이저와 컨테이너(Docker)의 아키텍처 비교

클라우드 컴퓨팅의 근간은 **가상화(Virtualization)** 기술입니다. 하나의 물리 서버에서 여러 독립적 환경을 실행하는 방법으로 전통적인 **하이퍼바이저(Hypervisor)** 기반 VM과 경량화된 **컨테이너(Container)** 두 가지 패러다임이 공존합니다.

### 1. 출제 배경 및 의도

가상화는 클라우드 인프라의 핵심 기술입니다. 채점관은 **Type 1/2 하이퍼바이저의 구조적 차이**, **VM과 컨테이너의 격리 수준과 오버헤드 비교**, 그리고 **Docker 이미지 빌드-레지스트리-배포의 전체 흐름**을 체계적으로 서술하기를 기대합니다.

### 2. 개념의 본질과 작동 메커니즘

#### 하이퍼바이저(Hypervisor) 유형

하이퍼바이저는 물리 하드웨어 위에서 다수의 가상 머신(VM)을 실행할 수 있게 하는 소프트웨어 계층입니다.

**Type 1 하이퍼바이저 (Native / Bare-metal)**

```
┌─────────────────────────────────────────────────────┐
│  VM1 (OS+App)  │  VM2 (OS+App)  │  VM3 (OS+App)   │
├─────────────────────────────────────────────────────┤
│              Type 1 Hypervisor                      │
│          (하드웨어 직접 접근, Ring -1)              │
├─────────────────────────────────────────────────────┤
│                  물리 하드웨어                      │
└─────────────────────────────────────────────────────┘
```

- 하이퍼바이저가 하드웨어 위에 직접 설치 (호스트 OS 불필요)
- **성능:** 최고 (직접 하드웨어 접근)
- **보안:** 높음 (VM 간 완전 격리)
- **예시:** VMware ESXi, Microsoft Hyper-V, KVM, Xen
- **사용 사례:** 기업 데이터센터, 클라우드 서비스(AWS EC2, Azure VM)

**Type 2 하이퍼바이저 (Hosted)**

```
┌─────────────────────────────────────────────────────┐
│  VM1 (Guest OS+App)  │  VM2 (Guest OS+App)         │
├─────────────────────────────────────────────────────┤
│              Type 2 Hypervisor                      │
├─────────────────────────────────────────────────────┤
│              호스트 OS (Windows/Linux/macOS)        │
├─────────────────────────────────────────────────────┤
│                  물리 하드웨어                      │
└─────────────────────────────────────────────────────┘
```

- 일반 운영체제 위에 하이퍼바이저 애플리케이션으로 설치
- **성능:** 중간 (호스트 OS 레이어 추가 오버헤드)
- **사용 편의성:** 높음 (일반 PC에서 사용 가능)
- **예시:** VMware Workstation, VirtualBox, Parallels Desktop
- **사용 사례:** 개발/테스트 환경, 개인 PC 가상화

#### Hypervisor vs Docker(컨테이너) 비교

```
VM 아키텍처                     컨테이너 아키텍처
┌──────────┬──────────┐         ┌──────────┬──────────┐
│  App A   │  App B   │         │  App A   │  App B   │
├──────────┼──────────┤         ├──────────┼──────────┤
│Guest OS A│Guest OS B│         │  Lib A   │  Lib B   │
├──────────┴──────────┤         ├──────────┴──────────┤
│    Hypervisor       │         │   Container Runtime  │
├─────────────────────┤         │   (Docker Engine)    │
│     Host OS         │         ├─────────────────────┤
├─────────────────────┤         │     Host OS (공유)  │
│   Physical HW       │         ├─────────────────────┤
└─────────────────────┘         │   Physical HW       │
                                 └─────────────────────┘
```

**컨테이너 격리 메커니즘 (리눅스 커널 기능):**
- **Namespace:** PID, Network, Mount, UTS, IPC 등 커널 자원을 프로세스 그룹별로 격리
- **cgroup(Control Group):** CPU, 메모리, I/O 자원 사용량 제한

| 비교 항목 | Hypervisor (VM) | Docker (컨테이너) |
|---|---|---|
| **격리 수준** | 완전 격리 (별도 OS, 커널) | 프로세스 격리 (커널 공유) |
| **시작 시간** | 수분 (OS 부팅) | 수초 이하 (프로세스 시작) |
| **오버헤드** | 높음 (Guest OS 포함) | 낮음 |
| **이미지 크기** | 수 GB (OS 포함) | 수십~수백 MB |
| **보안** | 높음 (커널 분리) | 낮음 (커널 공유) |
| **이식성** | OS 종류 제한 없음 | Linux 커널 의존 |
| **주 사용처** | 다른 OS 실행, 강한 격리 | 마이크로서비스, CI/CD |

#### Docker 컨테이너 배포 절차

```
1. 코드 작성 (Dockerfile)
   ↓
2. 이미지 빌드 (docker build)
   ↓
3. 이미지 레지스트리 푸시 (docker push)
   ↓
4. 원격 서버에서 이미지 풀 (docker pull)
   ↓
5. 컨테이너 실행 (docker run)
```

**Dockerfile 작성 예시:**
```dockerfile
FROM python:3.11-slim          # 베이스 이미지
WORKDIR /app                    # 작업 디렉토리
COPY requirements.txt .
RUN pip install -r requirements.txt  # 의존성 설치
COPY . .
EXPOSE 8080                     # 포트 노출
CMD ["python", "app.py"]        # 시작 명령
```

**도커 이미지 계층 구조 (레이어 캐시):**
```
[Base Image: python:3.11-slim]
[Layer 1: WORKDIR /app]
[Layer 2: COPY requirements.txt + RUN pip install]  ← 변경 없으면 캐시 사용
[Layer 3: COPY . .]
[Layer 4: EXPOSE 8080]
```

**쿠버네티스 기반 프로덕션 배포 절차:**
1. **Dockerfile 작성** → `docker build -t myapp:v1.0 .`
2. **이미지 레지스트리 푸시** → `docker push registry.company.com/myapp:v1.0`
3. **K8s Deployment YAML 작성** (replicas, resource limits, probe 설정)
4. **배포** → `kubectl apply -f deployment.yaml`
5. **서비스 노출** → `kubectl apply -f service.yaml` (로드밸런서/ClusterIP)
6. **롤링 업데이트** → 무중단으로 이전 버전을 새 버전으로 교체

### 3. 핵심 키워드 (Must-Have)

- **Type 1 하이퍼바이저:** Bare-metal, 하드웨어 직접 접근, 고성능
- **Type 2 하이퍼바이저:** Host OS 위에서 동작, 개발/테스트 용도
- **컨테이너(Docker):** OS 커널 공유, 경량화, 빠른 시작
- **Namespace / cgroup:** 컨테이너 격리와 자원 제한의 리눅스 커널 기반
- **Dockerfile:** 컨테이너 이미지 빌드 명세 파일
- **이미지 레이어(Layer):** 도커 이미지의 계층 구조, 캐시 재사용
- **컨테이너 레지스트리:** Docker Hub, ECR, GCR 등 이미지 저장소
- **OCI(Open Container Initiative):** 컨테이너 이미지/런타임 표준

### 4. 맥락과 비교

**가상화 기술 생태계:**

| 기술 | 유형 | 특징 |
|---|---|---|
| VMware ESXi | Type 1 하이퍼바이저 | 기업 데이터센터 표준 |
| KVM | Type 1 (Linux 내장) | AWS EC2 기반 |
| Docker | 컨테이너 | 개발/배포 표준 |
| containerd | 컨테이너 런타임 | K8s 기본 런타임 |
| gVisor (Google) | 샌드박스 컨테이너 | VM과 컨테이너의 중간 보안 |
| Kata Containers | VM 기반 컨테이너 | VM 격리 + 컨테이너 생태계 |

### 5. 실무 제언

**멀티테넌트 클라우드에서 VM vs 컨테이너 선택 기준**

- **챌린지:** 공용 클라우드에서 서로 다른 고객의 워크로드를 실행할 때, 커널을 공유하는 컨테이너는 강한 격리를 제공하지 못합니다. 2022년 발생한 컨테이너 탈출(Escape) CVE들이 이를 증명합니다.
- **제언:** AWS Lambda나 Google Cloud Run은 내부적으로 **Firecracker**라는 경량 VM 기술을 사용합니다. 컨테이너처럼 빠른 시작(~125ms)과 경량성(~5MB 메모리)을 유지하면서도 VM의 완전 격리를 제공하는 "마이크로VM" 패러다임입니다. 신뢰할 수 없는 워크로드 실행(FaaS, 멀티테넌트)에서는 VM 또는 gVisor/Kata 같은 강화된 컨테이너를 선택해야 합니다.
