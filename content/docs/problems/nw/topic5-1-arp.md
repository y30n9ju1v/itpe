---
title: "ARP(Address Resolution Protocol)와 보안 취약점"
date: 2026-06-14T09:00:00+09:00
tags: ["네트워크", "NW", "핵토200"]
topic_no1: 5
topic_no2: 1
topic_large: "ARP"
topic_small: "ARP"
exam_ref: "116"
exam_type: "컴시응"
question_no: 2
---

## 문제

ARP(Address Resolution Protocol)에 대하여 아래 사항들을 설명하시오.
가. ARP와 RARP
나. IP 프로토콜을 사용하는 서버 또는 네트워크 장비에서 ARP의 역할
다. ARP와 관련된 아래의 보안 취약점 및 이들의 대응 방안
1) ARP Spoofing
2) ARP Redirect

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | ARP |
| 토픽(소) | ARP |
| 출제 | 116회 |
| 유형 | 컴시응 |
| 번호 | 2 |

## 해설

### 출제 배경 및 의도

IP 통신은 네트워크 계층 주소(IP)만으로 완성되지 않는다. 이더넷 프레임 전달은 MAC 주소 기반이므로, 모든 IP 통신 전에 ARP를 통한 IP→MAC 변환이 선행되어야 한다. ARP는 TCP/IP 스택의 근간이지만, 인증 메커니즘 없는 설계 취약점으로 인해 심각한 보안 위협의 진원지가 된다.

116회 컴시응 문제에서 ARP 동작과 보안 취약점을 동시에 묻는 것은 프로토콜 이해와 보안 대응 능력을 통합 평가하기 위함이다. ARP Spoofing·Redirect의 공격 흐름을 다이어그램으로 명시하고, DAI(Dynamic ARP Inspection) 기반 방어 아키텍처를 서술하면 고득점이 가능하다.

### 1. ARP(Address Resolution Protocol), 개요

정 의  • ARP를 IP 주소를 브로드캐스트로 질의하여 해당 MAC 주소를 획득하는 데이터링크 계층 주소 변환 프로토콜
       - 이더넷 프레임 전달에 필요한 IP→MAC 매핑을 ARP 캐시에 임시 저장하여 반복 질의를 방지

```
[ARP 동작 흐름]

A (192.168.1.10)                  B (192.168.1.20)
  │                                 │
  │── ARP Request ─────────────────▶│ (브로드캐스트: FF:FF:FF:FF:FF:FF)
  │   "192.168.1.20의 MAC은?"       │ 모든 호스트 수신
  │                                 │
  │◀── ARP Reply ───────────────────│ (유니캐스트)
  │    "나! MAC: AA:BB:CC:DD:EE:FF" │
  │                                 │
  [ARP 캐시 저장: 192.168.1.20 → AA:BB:CC:DD:EE:FF (TTL: 수분)]
  [이후 통신: IP 패킷을 해당 MAC으로 이더넷 프레임 인캡슐화]
```

- ARP 캐시는 운영체제가 IP-MAC 매핑을 TTL 동안 보관하여 브로드캐스트 질의를 최소화하며, `arp -a` 명령으로 확인 가능하다.

### 2. ARP·RARP 비교 및 보안 취약점·대응

1) ARP와 RARP 비교

| 구분 | 항목 | ARP | RARP |
|------|------|------|------|
| 변환 방향 | 입력→출력 | IP → MAC | MAC → IP |
| 질의 방식 | 네트워크 | 브로드캐스트 | 브로드캐스트 |
| 용도 | 사용 목적 | 일반 통신 시 MAC 조회 | 디스크리스 부팅 시 IP 획득 |
| 현재 상태 | 사용 여부 | 활발히 사용 | DHCP로 대체 (RFC 2131) |
| IPv6 대응 | 프로토콜 | NDP (Neighbor Discovery) | DHCPv6 / SLAAC |

- Gratuitous ARP: 자신의 IP-MAC을 능동적으로 브로드캐스트하여 IP 충돌 감지 및 네트워크 내 캐시 일괄 갱신에 사용한다.

2) ARP 보안 취약점 및 대응 방안

```
[ARP Spoofing 공격 흐름]

공격 전 (정상):
  A (1.10) ──── 스위치 ──── 게이트웨이 GW (1.1)
  A의 ARP 캐시: 1.1 → GW의 실제 MAC

공격 후 (ARP Spoofing):
  공격자(1.99)가 비인가 ARP Reply를 A·GW에 주기적 전송:
  → A에게: "1.1의 MAC은 공격자MAC"
  → GW에게: "1.10의 MAC은 공격자MAC"

  결과:
  A ──▶ 공격자 ──▶ GW  (MITM: 패킷 도청·수정·차단)

[ARP Redirect: 공격자가 GW인 척 전체 서브넷에 ARP Reply 발송]
  → 서브넷 모든 호스트 트래픽이 공격자 경유
  → ARP Spoofing보다 영향 범위 확대
```

| 구분 | 대응 기술 | 설명 |
|------|------|------|
| 스위치 계층 | DAI (Dynamic ARP Inspection) | DHCP Snooping 테이블 기반 ARP 패킷 검증, 비인가 Reply 자동 차단 |
| | DHCP Snooping | IP-MAC-포트 바인딩 테이블 생성 (DAI의 전제 조건) |
| 단말 계층 | Static ARP Entry | 중요 서버·GW의 MAC을 정적 등록 |
| 접근 제어 | 802.1X | 포트 기반 인증으로 비인가 단말 접속 차단 |
| 모니터링 | ARPWatch | ARP 트래픽 모니터링, IP-MAC 변경 이상 탐지 알람 |
| 암호화 | VPN / TLS | MITM 되어도 페이로드 보호 |

- DAI 적용 선행 조건: DHCP Snooping이 IP-MAC-포트 바인딩 테이블을 먼저 생성해야 DAI가 검증 기준으로 활용 가능하다.

### 3. IPv6에서의 ARP 대체 및 보안 강화

| 항목 | ARP (IPv4) | NDP (IPv6, ICMPv6 기반) |
|------|------|------|
| 주소 변환 | ARP Request/Reply | Neighbor Solicitation/Advertisement |
| 라우터 발견 | 별도 (ICMP) | RS/RA (Router Solicitation/Advertisement) |
| 보안 | 인증 없음 (Spoofing 취약) | SEND(Secure NDP) + CGA 기반 |
| 자동 설정 | DHCP 필요 | SLAAC (Stateless Auto) |
| 멀티캐스트 활용 | 브로드캐스트 | 요청 노드 멀티캐스트 (트래픽 최소화) |

- IPv6 NDP는 Solicited-Node Multicast를 사용하여 ARP의 브로드캐스트 플러딩 문제를 해소하고, CGA(Cryptographically Generated Addresses)와 SEND 프로토콜로 NDP Spoofing을 방어한다.  "끝"

### 실무 제언

**DHCP Snooping → DAI 순차 적용**
- **챌린지**: ARP Spoofing 차단을 위해 DAI만 먼저 활성화 시 DHCP Snooping 테이블 미존재로 모든 ARP 패킷이 차단되어 네트워크 통신 불가 발생
- **제언**: 반드시 DHCP Snooping 먼저 활성화하여 IP-MAC-포트 바인딩 테이블 생성 후 DAI 적용, 신뢰 포트(업링크·서버)는 DAI Trusted 설정으로 제외

**Gratuitous ARP 남용 탐지**
- **챌린지**: 공격자가 ARP Spoofing 지속 유지를 위해 Gratuitous ARP를 초당 수회 전송, 기존 정상 캐시를 주기적으로 덮어씀
- **제언**: ARPWatch 또는 IDS 규칙으로 동일 IP에 대한 MAC 변경 이벤트를 실시간 알람, 변경 빈도 임계값(예: 분당 3회 초과) 설정하여 자동 차단 정책 연동

**무선 환경 ARP 보안 강화**
- **챌린지**: Wi-Fi 환경에서는 동일 SSID 내 모든 단말이 ARP 브로드캐스트를 수신하여 Spoofing 공격 면이 유선보다 넓음
- **제언**: AP의 Client Isolation(단말 간 직접 통신 차단) 활성화, WPA3 Enterprise + 802.1X 인증 적용으로 비인가 단말 접속 자체를 원천 차단
