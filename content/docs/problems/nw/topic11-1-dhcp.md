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

### 출제 배경 및 의도

수백, 수천 대의 단말이 연결된 기업망 및 ISP 환경에서 수동 IP 관리는 충돌과 관리 오류를 야기하며 사실상 불가능하다. 특히 BYOD(Bring Your Own Device) 확산과 IoT 기기 폭증으로 IP 자원의 자동 할당·회수·재사용 메커니즘은 네트워크 운영의 핵심 요소가 되었다.

DHCP는 RFC 2131로 표준화된 IP 자동 할당 프로토콜로, DORA(Discover-Offer-Request-ACK) 4단계 핸드셰이크와 임대(Lease) 기반 IP 관리로 대규모 네트워크 관리를 혁신적으로 단순화한다. 기술사 시험에서 동작 원리, 임대 갱신 메커니즘, Relay Agent 구조가 중점 출제된다.

### 1. DHCP, 개요

정 의  • IP 주소·서브넷·게이트웨이·DNS 등 네트워크 구성 정보를 클라이언트에 동적으로 할당하는 응용 계층 프로토콜
       - UDP 포트 67(서버), 68(클라이언트) 사용, RFC 2131 표준

```
[클라이언트]                [DHCP 서버 (192.168.1.1)]
     |                               |
     |--DHCP Discover (Broadcast)--->|  "IP 주세요!"
     |<--DHCP Offer ------------------|  "100번 드릴게요"
     |--DHCP Request (Broadcast)---->|  "100번 쓸게요!"
     |<--DHCP ACK --------------------|  "확정! IP·GW·DNS 전달"
     |                               |
     [IP 설정 완료, 임대 시작]
```

- DORA 4단계로 IP가 동적 할당되며, 임대 만료 전 갱신(Renew/Rebind) 으로 연속성을 보장한다.

### 2. DHCP 동작 메커니즘

1) DORA 4단계 동작

| 구분 | 메시지 | 설명 |
|------|--------|------|
| ① | Discover | 클라이언트가 브로드캐스트(255.255.255.255)로 서버 탐색 |
| ② | Offer | 서버가 할당 가능한 IP·임대시간 제안 (유니캐스트 또는 브로드캐스트) |
| ③ | Request | 클라이언트가 선택한 IP 수락 요청 (브로드캐스트, 다수 서버에 알림) |
| ④ | ACK | 서버가 최종 확인, IP·서브넷·GW·DNS·임대시간 전달 |

- 트랜잭션 ID(xid)로 세션을 식별하며, MAC(chaddr) 기반 동일 IP 재할당이 가능하다.

2) IP 임대(Lease) 갱신 메커니즘

| 구분 | 항목 | 설명 |
|------|------|------|
| T/2 경과 | Renew | 서버에 유니캐스트 Request 전송으로 임대 연장 시도 |
| T×7/8 경과 | Rebind | 서버 무응답 시 브로드캐스트로 임의 서버에 갱신 시도 |
| T 만료 | 반납 | 갱신 실패 시 IP 반납 후 DORA 재시작 |

- 임대 기반 관리로 IP 자원 자동 회수 및 재사용이 보장된다.

### 3. DHCP 확장 기술 및 비교

1) DHCP Relay Agent (서브넷 간 확장)

```
[서브넷A 클라이언트]          [L3 스위치/Relay Agent]        [DHCP 서버]
       |                              |                           |
       |--Discover (Broadcast)------->|                           |
       |                     (giaddr 삽입)--Unicast Request------>|
       |                              |<--Offer (Unicast)---------|
       |<--Offer (Unicast/Broadcast)--|                           |
```

- DHCP 브로드캐스트는 라우터를 통과하지 못하므로, 각 서브넷에 Relay Agent(ip helper-address)를 설정하여 단일 DHCP 서버로 다수 서브넷을 관리한다.

2) DHCP 부가 기능 비교

| 구분 | 기능 | 설명 |
|------|------|------|
| 보안 | DHCP Snooping | 비인가 DHCP 서버 차단, Switch 포트 레벨 검증 |
| 고정 할당 | Static Binding | MAC 주소별 고정 IP 할당 (서버·프린터) |
| DNS 연동 | DDNS 연동 | IP 할당 시 DNS A 레코드 자동 갱신 |
| 위치 정보 | Option 82 | ISP 환경에서 클라이언트 접속 위치 식별자 삽입 |
| 고가용성 | Failover | Active-Standby 이중화로 SPOF 제거 |

3) DHCP vs RARP vs BOOTP 비교

| 항목 | DHCP | BOOTP | RARP |
|------|------|-------|------|
| IP 할당 | 동적+정적 | 정적 | MAC→IP |
| 추가 정보 | GW·DNS·옵션 다수 | GW까지 | IP만 |
| 서브넷 간 | Relay Agent 지원 | 미지원 | 미지원 |
| 현재 사용 | 표준 | 사라짐 | 사라짐 |

- IPv6 환경에서는 DHCPv6 또는 SLAAC(Stateless Address Autoconfiguration)으로 자동 설정이 이루어지며, DHCP는 IPv4 네트워크의 핵심 표준으로 유지된다.  "끝"

### 실무 제언

**DHCP 이중화 설계**
- **챌린지**: 단일 DHCP 서버 장애 시 신규 단말의 IP 할당 불가로 전체 서비스 중단
- **제언**: Windows Server DHCP Failover 또는 ISC DHCP Failover로 Active-Standby 구성, Split Scope(80/20 룰)로 이중화

**DHCP Snooping 보안 적용**
- **챌린지**: 내부망에 Rogue DHCP 서버 출현 시 IP 충돌 및 Man-in-the-Middle 공격 가능
- **제언**: 스위치 레벨 DHCP Snooping 활성화, Trusted Port(업링크)만 DHCP 응답 허용, Dynamic ARP Inspection 병행 적용

**클라우드 환경 DHCP 관리**
- **챌린지**: AWS VPC·Azure VNet 등 클라우드 환경에서 DHCP 옵션 커스터마이징 필요
- **제언**: 클라우드 제공 DHCP Options Set으로 내부 DNS·도메인 지정, 온프레미스 연동 시 Route 53 Resolver 또는 Azure Private DNS와 통합 설계
