---
title: "SDN(Software Defined Network)과 NFV(Network Function Virtualization) 비교"
date: 2026-06-14T09:00:00+09:00
tags: ["네트워크", "NW", "핵토200"]
topic_no1: 17
topic_no2: 1
topic_large: "SDN, NFV"
topic_small: "SDN, NFV"
exam_ref: "114"
exam_type: "응용"
question_no: 3
---

## 문제

차세대 네트워크 기술로 부각되고 있는 SDN(Software Defined Network)과 NFV(Network Function Virtualization)의 구조와 특징을 비교 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | SDN, NFV |
| 토픽(소) | SDN, NFV |
| 출제 | 114회 |
| 유형 | 응용 |
| 번호 | 3 |

## 해설

### 출제 배경 및 의도

전통적 네트워크 인프라는 벤더 전용 하드웨어에 제어·전달 기능이 통합된 폐쇄형 구조로, 설정 변경이 어렵고 확장 비용이 높으며 멀티벤더 통합이 복잡하다는 한계를 가진다. 클라우드 데이터센터의 폭발적 성장과 5G 시대의 네트워크 슬라이싱 요구는 이러한 한계를 더욱 부각시켰다.

SDN(Software Defined Networking)은 제어 평면과 데이터 평면을 분리하여 중앙집중식 프로그래밍 가능 네트워크를 실현하고, NFV(Network Function Virtualization)는 전용 하드웨어 기능을 범용 서버의 소프트웨어로 구현하여 비용과 유연성 문제를 해결한다. 두 기술은 상호 보완적으로 현대 클라우드 데이터센터와 5G 코어의 핵심 인프라 기술로 자리 잡았으며, 기술사 시험에서 구조·차이점·상호관계가 핵심 출제 포인트다.

### 1. SDN, 개요

정 의  • 네트워크의 제어 평면(Control Plane)과 데이터 평면(Data Plane)을 분리하여, 중앙화된 SDN 컨트롤러가 전체 네트워크를 소프트웨어로 프로그래밍·제어하는 아키텍처
       - OpenFlow 프로토콜 기반, ONF(Open Networking Foundation) 표준

```
[전통 네트워크]               [SDN]
라우터/스위치                  +--[응용 계층]--+
  [제어 평면]                  | 트래픽앱/보안 |
  [데이터 평면]                +--Northbound API(REST)--+
  (분산, 각 장비 독자 결정)    | SDN 컨트롤러(ONOS) |
                               +--Southbound API(OpenFlow)--+
                               | 스위치1 | 스위치2 |
                               (단순 패킷 전달, Flow Table)
```

- SDN 컨트롤러가 전체 토폴로지를 중앙에서 파악하여 최적 경로를 계산하고 스위치에 Flow Rule을 배포함으로써 네트워크를 소프트웨어로 제어한다.

### 2. SDN 3계층 구조 및 NFV 아키텍처

1) SDN 3계층 구조

| 구분 | 계층 | 구성 요소 | API |
|------|------|----------|-----|
| ③ | 응용 계층 | 트래픽 관리, 보안 앱, 로드밸런서 앱 | Northbound API (REST) |
| ② | 제어 계층 | SDN 컨트롤러 (OpenDaylight, ONOS) | - |
| ① | 데이터 계층 | OpenFlow 스위치, 라우터 | Southbound API (OpenFlow) |

```
OpenFlow 동작:
패킷 도착 --> [스위치 Flow Table 조회]
  매칭 있음 --> 해당 액션 실행 (Forward / Drop / Modify)
  매칭 없음 --> 컨트롤러 질의 --> Flow Rule 수신 --> 실행
```

2) NFV(Network Function Virtualization) ETSI 참조 아키텍처

| 구분 | 구성 요소 | 역할 |
|------|----------|------|
| 관리 | OSS/BSS | 운영·비즈니스 지원 시스템 |
| 오케스트레이션 | NFVO | VNF 생명주기 관리, 자원 할당 |
| VNF 관리 | VNFM | 개별 VNF 인스턴스 관리 |
| 인프라 관리 | VIM | NFVI 컴퓨팅·스토리지·네트워크 자원 관리 |
| 실행 환경 | NFVI | 범용 x86 서버, 하이퍼바이저, 가상 스위치 |

```
[NFVI: 범용 x86 서버]
  +------+------+------+------+
  | vFW  | vLB  | vIDS | vDPI |  <-- VNF (소프트웨어 네트워크 기능)
  +------+------+------+------+
  [하이퍼바이저 (KVM / VMware)]
  [물리 서버 (COTS: Commercial Off-The-Shelf)]
```

- NFV는 전용 방화벽·로드밸런서·IDS 장비를 범용 서버의 소프트웨어 인스턴스로 대체하여 CapEx 절감과 신속한 서비스 배포를 실현한다.

### 3. SDN vs NFV 비교 및 상호 보완 관계

| 비교 항목 | SDN | NFV |
|----------|-----|-----|
| 핵심 아이디어 | 제어-데이터 평면 분리 | 하드웨어 기능의 소프트웨어화 |
| 대상 | 네트워크 제어 방식 | 네트워크 기능 구현 방식 |
| 목적 | 프로그래밍 가능성·중앙 통제 | 비용 절감·유연성·빠른 배포 |
| 표준 기관 | ONF (OpenFlow) | ETSI NFV ISG |
| 핵심 컴포넌트 | SDN 컨트롤러 | NFVO·VNFM·VIM |
| 주요 활용 | 데이터센터 패브릭, SD-WAN | 통신사 5G 코어, CPE NFV |
| 대표 솔루션 | Cisco ACI, VMware NSX, ONOS | OpenStack, VMware vCloud NFV |

- SDN과 NFV는 상호 보완적으로 작동한다: SDN 컨트롤러가 NFV로 구현된 가상 스위치·라우터(vSwitch·vRouter)를 OpenFlow로 제어하여 완전한 소프트웨어 정의 네트워크를 실현한다.  "끝"

### 실무 제언

**데이터센터 SDN 도입**
- **챌린지**: 기존 스위치의 분산 라우팅 프로토콜로는 마이크로서비스 환경의 동적 트래픽 변화에 신속 대응 어려움
- **제언**: VMware NSX 또는 Cisco ACI 도입으로 SDN 오버레이 네트워크 구성, 중앙 컨트롤러에서 마이크로세그멘테이션 정책 배포, DevOps CI/CD와 연계한 네트워크 자동 프로비저닝

**5G 코어 NFV 구축**
- **챌린지**: 5G 서비스별 다양한 QoS 요구(eMBB/URLLC/mMTC)를 전용 하드웨어로 지원하는 고비용·저유연성 문제
- **제언**: ETSI NFV 아키텍처 기반 5G 코어 가상화(AMF·SMF·UPF를 VNF로 구현), 네트워크 슬라이싱으로 서비스별 독립 자원 격리, Kubernetes 기반 CNF(Cloud-native NF)로 진화

**SDN/NFV 운영 자동화**
- **챌린지**: VNF 장애 시 수동 복구에 의존하면 SLA 위반 시간 증가
- **제언**: NFVO의 자동 스케일아웃·페일오버 정책 설정, Intent-Based Networking(IBN)으로 의도 기반 네트워크 자동 구성, 모니터링-자동 복구 루프 구현
