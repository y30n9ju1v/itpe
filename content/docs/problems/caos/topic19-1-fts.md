---
title: "FTS(Fault Tolerant System) 결함 허용 시스템"
date: 2026-06-14T09:00:00+09:00
tags: ["CA/OS", "컴퓨터구조", "운영체제", "핵토200"]
topic_no1: 19
topic_no2: 1
topic_large: "FTS"
topic_small: "FTS"
exam_ref: "모의_2019.12"
exam_type: "응용"
question_no: 1
---

## 문제

FTS(Fault Tolerant System)에 대해 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | FTS |
| 토픽(소) | FTS |
| 출제 | 모의_2019.12 |
| 유형 | 응용 |
| 번호 | 1 |

## 해설

> **고장이 나도 멈추지 않는 시스템의 설계 철학**  
> 결함 허용의 개념, 구현 기법(이중화/다중화), 가용성 지표와 RTO/RPO

금융, 의료, 항공, 통신 등 중단이 허용되지 않는 미션 크리티컬 시스템에서 하드웨어나 소프트웨어의 결함(Fault)이 발생해도 서비스가 지속되는 능력이 **결함 허용(Fault Tolerance)**입니다. FTS(Fault Tolerant System)는 이 능력을 갖춘 시스템의 총칭입니다.

### 1. 출제 배경 및 의도

응용 등급 1번 문제로 FTS 전체를 포괄적으로 설명해야 합니다. 채점관은 **결함 허용의 정의와 필요성**, **결함-오류-장애의 관계**, **하드웨어/소프트웨어 이중화 기법**, **가용성 지표(가용률, MTBF, MTTR)**, 그리고 **RTO/RPO**를 체계적으로 서술하기를 기대합니다.

### 2. 개념의 본질과 작동 메커니즘

#### 결함-오류-장애의 관계

```
Fault(결함) ──▶ Error(오류) ──▶ Failure(장애)
  ↑                              ↓
하드웨어 불량,                 서비스 중단,
소프트웨어 버그,               데이터 손실
운영 실수

FTS의 목표: Error 또는 Failure 발생을 Fault에서 차단
```

- **Fault(결함):** 시스템의 비정상적 상태 (예: 디스크 섹터 불량)
- **Error(오류):** 결함에 의한 잘못된 상태 (예: 읽기 오류 발생)
- **Failure(장애):** 오류가 서비스 중단으로 이어진 상태 (예: 시스템 다운)

#### FTS 구현의 핵심 기법

**① 하드웨어 이중화 (Hardware Redundancy)**

| 방식 | 설명 | 예시 |
|---|---|---|
| **Active-Active** | 모든 구성 요소가 동시에 부하 분담 | Dual-Active DB Cluster |
| **Active-Standby (Hot Standby)** | 대기 장비가 실시간 동기화, 즉시 전환 | HA(High Availability) 클러스터 |
| **Warm Standby** | 대기 장비가 주기적 동기화, 수분 내 전환 | DR 사이트 |
| **Cold Standby** | 대기 장비 꺼져 있음, 수동 전환 | 백업 서버 |

**구성 요소별 이중화:**
```
전원부:    UPS + 이중 전원 공급 장치
네트워크:  이중 NIC (Bonding/LACP) + 이중 스위치
스토리지:  RAID + 이중 컨트롤러 + 다중 경로 (MPIO)
CPU/메모리: ECC 메모리, 이중화 서버
서버:      HA 클러스터 (Pacemaker, Corosync)
사이트:    DR 센터 (지리적 분산)
```

**② 소프트웨어 결함 허용**

- **체크포인팅(Checkpointing):** 주기적 상태 저장으로 장애 시 복구 지점 제공
- **재시도(Retry):** 일시적 오류에 자동 재시도 (Circuit Breaker 패턴)
- **복제(Replication):** 데이터를 여러 노드에 복제 (Raft, Paxos 합의 알고리즘)
- **롤링 업데이트(Rolling Update):** 무중단 배포로 소프트웨어 업데이트

**③ TMR (Triple Modular Redundancy)**

```
입력 ─┬─▶ 모듈 A ─┐
       ├─▶ 모듈 B ─┼─▶ 다수결 투표기 ─▶ 출력
       └─▶ 모듈 C ─┘
           (2/3 다수결: 하나의 모듈이 잘못된 결과를 내도 올바른 결과 보장)
```
- 항공기 비행 제어, 원전 제어 시스템 등 안전 임계 시스템에 사용
- 하나의 모듈 고장을 실시간 허용

#### 가용성 지표

**가용률(Availability):**
$$A = \frac{MTBF}{MTBF + MTTR} \times 100\%$$

- **MTBF(Mean Time Between Failures):** 평균 고장 간격 (높을수록 좋음)
- **MTTR(Mean Time To Repair):** 평균 복구 시간 (낮을수록 좋음)

**연간 다운타임으로 보는 "나인(Nine)":**

| 가용률 | 연간 다운타임 | 명칭 |
|---|---|---|
| 99% (2-nine) | 87.6시간 | - |
| 99.9% (3-nine) | 8.76시간 | 대부분 서비스 |
| 99.99% (4-nine) | 52.6분 | 고가용성 서비스 |
| 99.999% (5-nine) | 5.26분 | 통신, 금융 핵심 |
| 99.9999% (6-nine) | 31.5초 | 항공, 의료 |

#### RTO와 RPO

```
장애 발생
    │
    │◄──── RPO ────►│◄────── RTO ──────►│
백업 시점          장애 발생           복구 완료
(최대 데이터 손실)  시점              (최대 중단 시간)
```

- **RPO(Recovery Point Objective):** 허용 가능한 최대 데이터 손실 범위 (시간 단위)
  - RPO = 0: 데이터 손실 없음 (동기 복제 필요)
  - RPO = 1시간: 최대 1시간 치 데이터 손실 허용
- **RTO(Recovery Time Objective):** 허용 가능한 최대 서비스 중단 시간
  - RTO = 0: 즉시 전환 (Active-Active 필요)
  - RTO = 30분: 30분 내 복구 허용

### 3. 핵심 키워드 (Must-Have)

- **Fault → Error → Failure:** 결함 전파 단계
- **FTS(Fault Tolerant System):** 결함 발생 시에도 서비스 지속
- **이중화(Redundancy):** Active-Active, Active-Standby, Hot/Warm/Cold
- **TMR(Triple Modular Redundancy):** 3중 모듈 + 다수결, 안전 임계 시스템
- **MTBF / MTTR:** 평균 고장 간격 / 평균 복구 시간
- **가용률 = MTBF / (MTBF + MTTR)**
- **"나인(Nine)":** 99.9%, 99.99%, 99.999%
- **RPO:** 최대 허용 데이터 손실 시간
- **RTO:** 최대 허용 서비스 중단 시간
- **체크포인팅, 복제(Replication):** 소프트웨어 FT 기법

### 4. 맥락과 비교

**FTS vs HA(High Availability) vs DR(Disaster Recovery):**

| 구분 | FTS | HA | DR |
|---|---|---|---|
| **목표** | 장애 중에도 서비스 지속 | 빠른 장애 전환 | 재해로부터 복구 |
| **RTO** | ~0 | 수초~수분 | 수분~수시간 |
| **RPO** | ~0 | 수초 | 수분~수시간 |
| **비용** | 매우 높음 | 높음 | 중간 |
| **예시** | 항공기 제어, 원전 | 은행 코어 시스템 | 재해 복구 사이트 |

### 5. 실무 제언

**클라우드 네이티브 환경에서 FTS 구현 패턴**

- **챌린지:** 마이크로서비스 환경에서 수십~수백 개 서비스 간 의존성이 복잡하여 단일 서비스 장애가 연쇄 장애(Cascading Failure)로 번지는 문제가 빈발합니다.
- **제언:** 클라우드 네이티브 FTS는 다음 패턴으로 구현합니다:
  1. **Circuit Breaker (Netflix Hystrix, Resilience4j):** 연속 실패 임계치 초과 시 자동으로 폴백(Fallback) 응답
  2. **Health Check + Auto-healing (Kubernetes):** Liveness/Readiness Probe로 장애 파드 자동 재시작
  3. **멀티 AZ 배포:** 가용 영역 장애를 Load Balancer + Auto Scaling으로 자동 흡수
  4. **카오스 엔지니어링 (Chaos Monkey):** 의도적 장애 주입으로 FTS 검증
  FTS의 전통적 원리(이중화, 투표, 검출)가 클라우드 환경에서 소프트웨어 패턴으로 구현됨을 이해해야 합니다.
