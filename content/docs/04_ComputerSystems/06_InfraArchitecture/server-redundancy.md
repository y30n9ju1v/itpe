---
title: "서버 이중화 구성 방안 (L4 스위치 기반 vs 소프트웨어 기반)"
date: 2026-05-09T08:09:13+09:00
tags: ["pecs", "하드웨어시스템", "HW설계운영", "서버이중화", "L4스위치", "로드밸런싱", "HA"]
draft: false
exam_pecs: ["135회"]
---

## 개요


서버 이중화는 단일 서버 장애로 인한 서비스 중단을 방지하기 위해 복수 서버를 운용하는 HA(High Availability) 구성 방식이다. L4 스위치 기반 하드웨어 방식과 소프트웨어 기반 방식으로 구분된다.

## 핵심 내용

### L4 스위치 기반 이중화

**원리**: L4 스위치(레이어 4 = 전송계층)가 TCP/UDP 포트 정보를 기반으로 트래픽을 분산

**구성도**:
```
클라이언트
    ↓
[L4 Switch] (VIP: 가상 IP)
    ↓ ↓ ↓
[서버1] [서버2] [서버3]
```

**주요 기능**:
- **VIP(Virtual IP)**: 외부에 단일 IP를 제공, 실제 서버는 숨김
- **Health Check**: 서버 상태 주기적 확인, 장애 서버 자동 제외
- **세션 유지**: Source IP/Cookie 기반 세션 지속성 보장

**로드밸런싱 알고리즘**:
| 알고리즘 | 설명 | 적합 사용 |
|----------|------|-----------|
| Round Robin | 순환 배분 | 동일 성능 서버 |
| Least Connection | 연결 수 최소 서버 우선 | 처리 시간 가변 |
| IP Hash | 클라이언트 IP 기반 고정 배분 | 세션 유지 필요 |
| Weighted RR | 성능 비례 가중치 배분 | 이기종 서버 |

### 소프트웨어 기반 이중화

**원리**: OS·미들웨어 수준에서 소프트웨어로 가용성 관리

| 솔루션 | 방식 | 특징 |
|--------|------|------|
| **HAProxy** | 오픈소스 소프트웨어 LB | 고성능, 무료 |
| **Keepalived** | VRRP 기반 VIP 이관 | L3/L4 Failover |
| **Nginx** | 웹서버 + 리버스 프록시 LB | HTTP 특화 |
| **Kubernetes** | 컨테이너 기반 자동 이중화 | 컨테이너 환경 |
| **Pacemaker/Corosync** | 클러스터 리소스 관리 | Active-Standby |

**Keepalived + HAProxy 조합 구성**:
```
[HAProxy1] ← Keepalived (Master, VIP 보유)
[HAProxy2] ← Keepalived (Backup, VIP 미보유)
→ Master 장애 시 VIP가 Backup으로 자동 이관 (VRRP)
```

### L4 스위치 기반 vs 소프트웨어 기반 비교

| 항목 | L4 스위치 기반 | 소프트웨어 기반 |
|------|--------------|----------------|
| **비용** | 고가 (전용 장비) | 저렴 (오픈소스) |
| **성능** | 높음 (하드웨어 처리) | 중간 (CPU 사용) |
| **유연성** | 낮음 (펌웨어 의존) | 높음 (코드 수정 가능) |
| **장애 내성** | 장비 자체 이중화 필요 | 소프트웨어 이중화 |
| **클라우드 적합성** | 낮음 | 높음 |
| **적합 환경** | 대규모 온프레미스 | 클라우드·컨테이너 |

## 출제 포인트

- L4 스위치의 VIP·Health Check·세션 유지 기능
- 로드밸런싱 4가지 알고리즘과 적합 상황
- 소프트웨어 방식: HAProxy, Keepalived, Nginx 역할 구분
- L4 vs SW 비용·성능·유연성 비교

## 연관 개념

- [FTS/HA]({{< relref "/docs/04_ComputerSystems/06_InfraArchitecture/fts-ha" >}}) — 서버 이중화의 상위 개념 (HA 시스템)
- [무중단 배포]({{< relref "/docs/02_SoftwareEngineering/03_Implementation_Testing/deployment-strategy" >}}) — 이중화 구성에서의 배포 전략
- [멀티클라우드]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/multicloud" >}}) — 클라우드 환경에서의 글로벌 LB

## 참고 기출

- 135회 4교시 3번 (PECS)
