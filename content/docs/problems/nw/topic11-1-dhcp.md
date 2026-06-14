---
title: "DHCP(Dynamic Host Configuration Protocol) 구조와 동작"
date: 2026-06-14T09:00:00+09:00
tags: ["네트워크", "NW", "핵토200"]
topic_no1: 11
topic_no2: 1
topic_large: "DHCP"
topic_small: "DHCP"
exam_ref: "합숙_2019.01"
exam_type: "응용"
question_no: "Day-2"
---

## 문제

DHCP(Dynamic Host Configuration Protocol)의 구조와 동작 원리를 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | DHCP |
| 토픽(소) | DHCP |
| 출제 | 합숙_2019.01회 |
| 유형 | 응용 |
| 번호 | Day-2 |

## 해설

> **DHCP는 "새로 입사한 직원이 회사 IT 부서에 PC를 연결하면 자동으로 IP, 서브넷, 게이트웨이, DNS를 받는 것"과 같다**

수동으로 IP를 설정하면 충돌과 관리 오류가 발생합니다. DHCP는 IP 주소 할당을 자동화하여 대규모 네트워크 관리를 혁신적으로 단순화합니다.

### 1. 출제 배경 및 의도

수백, 수천 대의 단말이 연결된 기업망이나 ISP 환경에서 수동 IP 관리는 불가능합니다. DHCP의 동작 원리와 메시지 흐름, 임대(Lease) 메커니즘은 네트워크 관리자의 필수 지식입니다.

### 2. 개념의 본질과 작동 메커니즘

#### DHCP 메시지 구조

DHCP는 UDP 기반으로 동작합니다.
- 클라이언트 → 서버: UDP 포트 67
- 서버 → 클라이언트: UDP 포트 68

**DHCP 패킷 주요 필드:**

| 필드 | 크기 | 설명 |
|---|---|---|
| op | 1바이트 | 1=Request, 2=Reply |
| htype | 1바이트 | 하드웨어 타입 (1=이더넷) |
| xid | 4바이트 | 트랜잭션 ID (세션 식별) |
| yiaddr | 4바이트 | 클라이언트에 제안/할당된 IP |
| siaddr | 4바이트 | 서버 IP 주소 |
| chaddr | 16바이트 | 클라이언트 MAC 주소 |
| options | 가변 | 서브넷 마스크, 게이트웨이, DNS, 임대 시간 등 |

#### DHCP 4단계 동작 (DORA)

```
클라이언트 (MAC: AA:BB)           DHCP 서버 (192.168.1.1)
      │                                    │
      │── DHCP Discover ──────────────────▶│
      │   (브로드캐스트: 255.255.255.255)   │ "IP 주세요!"
      │   (src: 0.0.0.0, mac: AA:BB)        │
      │                                    │
      │◀── DHCP Offer ─────────────────────│
      │   "192.168.1.100을 드릴게요,        │
      │    임대 시간 24시간"                │
      │                                    │
      │── DHCP Request ───────────────────▶│
      │   (브로드캐스트)                    │ "192.168.1.100 쓸게요!"
      │   (여러 서버 있을 때 선택 알림)     │
      │                                    │
      │◀── DHCP ACK ───────────────────────│
      │   "확정! 사용하세요"               │
      │   (IP, 서브넷, GW, DNS, 임대시간)  │
      │                                    │
      [IP 설정 완료, 임대 시작]
```

**DORA 약어:**
- **D**iscover: 브로드캐스트로 DHCP 서버 탐색
- **O**ffer: 서버가 IP 제안
- **R**equest: 클라이언트가 제안된 IP 요청 확정
- **A**CK: 서버가 최종 확인 및 구성 정보 전달

#### IP 임대 (Lease) 메커니즘

```
임대 시간 (T = 24시간 예시):
                                    임대 만료
┌──────────────────────────────────────┐
│                                      │
0h   T/2=12h   T*7/8=21h           T=24h
      ↑              ↑
   갱신 시도1    갱신 시도2(유니캐스트)
   (서버에 Request)
   
T/2 경과 → 서버에 Renew (유니캐스트)
실패 시 T*7/8 경과 → Rebind (브로드캐스트)
모두 실패 → 임대 만료 → IP 반납 → DORA 재시작
```

#### DHCP 중계 (DHCP Relay Agent)

```
서브넷A                    L3 스위치/라우터              DHCP 서버
클라이언트 ──Discover(브로드캐스트)──▶ Relay Agent ──유니캐스트──▶ 서버
                                       (giaddr 설정)
클라이언트 ◀──ACK(유니캐스트)────────── Relay Agent ◀──유니캐스트── 서버

DHCP 브로드캐스트는 라우터를 넘지 못함
→ 각 서브넷에 Relay Agent(ip helper-address)를 설정하여 해결
```

#### DHCP 추가 기능

| 기능 | 설명 |
|---|---|
| **Static Binding** | MAC 주소별 고정 IP 할당 (서버, 프린터) |
| **DHCP Snooping** | 비인가 DHCP 서버 차단 (보안) |
| **DDNS 연동** | DHCP 할당과 동시에 DNS 레코드 자동 갱신 |
| **옵션 82** | 클라이언트 위치 정보 추가 (ISP 환경) |

### 3. 핵심 키워드 (Must-Have)

- **DORA:** Discover, Offer, Request, ACK의 4단계
- **임대(Lease):** IP 할당은 영구가 아닌 일정 시간 임대
- **Relay Agent:** 라우터를 넘어 DHCP 서버에 요청 전달
- **giaddr:** Relay Agent가 삽입하는 게이트웨이 IP (서버가 서브넷 식별)
- **DHCP Snooping:** 악의적 DHCP 서버 차단

### 4. 맥락과 비교

| 항목 | DHCP | RARP | BOOTP |
|---|---|---|---|
| **IP 할당** | 동적 + 정적 | MAC→IP | 정적 |
| **추가 정보** | GW, DNS, 옵션 다수 | IP만 | GW까지 |
| **현재 사용** | 표준 | 사라짐 | 사라짐 |

IPv6 환경에서는 **DHCPv6** 또는 **SLAAC(Stateless Address Autoconfiguration)**으로 자동 설정이 이루어집니다.

### 5. 실무 제언

엔터프라이즈 환경에서 DHCP 서버 이중화(Active-Standby 또는 Active-Active with Split Scope)는 필수입니다. Windows Server의 DHCP Failover나 ISC DHCP의 Failover 설정으로 단일 장애점(SPOF)을 제거합니다. 클라우드(AWS VPC)에서는 서브넷당 자동으로 DHCP 서비스가 제공되며, 옵션 세트(DHCP Options Set)로 DNS와 도메인을 커스터마이징할 수 있습니다. 기술사 답안에서 DORA 4단계 다이어그램과 임대 갱신 메커니즘, Relay Agent 역할을 체계적으로 서술하면 높은 점수를 받을 수 있습니다.
