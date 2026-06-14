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

> **ARP는 "주소록에서 이름(IP)으로 전화번호(MAC)를 찾는 것"이다 — 그리고 이 주소록은 누구나 위조할 수 있다**

### 1. 출제 배경 및 의도

IP 주소만으로는 실제 통신이 불가능합니다. 이더넷 프레임은 MAC 주소로 전달되기 때문에 ARP가 IP→MAC 변환을 담당합니다. 그러나 ARP의 설계적 취약점(인증 없음)이 심각한 보안 공격을 야기합니다. 보안 관제 환경에서 중요한 주제입니다.

### 2. 개념의 본질과 작동 메커니즘

#### 가. ARP와 RARP

**ARP (Address Resolution Protocol):**
- IP 주소 → MAC 주소 변환
- 브로드캐스트로 질의, 유니캐스트로 응답

```
A (192.168.1.10)                B (192.168.1.20)
  │                               │
  │── "192.168.1.20은 누구?"  ──▶│ (브로드캐스트)
  │   (ARP Request)               │
  │◀── "나야! MAC: AA:BB:CC" ────│ (유니캐스트)
  │   (ARP Reply)                 │
  │                               │
  [ARP 캐시에 저장: 192.168.1.20 → AA:BB:CC]
```

**RARP (Reverse ARP):**
- MAC 주소 → IP 주소 변환 (역방향)
- 디스크 없는 워크스테이션이 부팅 시 IP를 얻기 위해 사용
- 현재는 **DHCP**로 대체

| 항목 | ARP | RARP |
|---|---|---|
| **방향** | IP → MAC | MAC → IP |
| **용도** | 일반 통신 | 부팅 시 IP 획득 |
| **현재 상태** | 활발히 사용 | DHCP로 대체 |

#### 나. ARP의 역할

1. **로컬 네트워크 통신:** 동일 서브넷 내 목적지 MAC 주소 조회
2. **게이트웨이 MAC 조회:** 다른 서브넷 통신 시 라우터(게이트웨이) MAC 조회
3. **ARP 캐시:** 반복 조회 방지를 위해 IP-MAC 매핑 임시 저장 (TTL: 수분)
4. **Gratuitous ARP:** 자신의 IP-MAC을 능동적으로 브로드캐스트 (IP 충돌 감지, 캐시 갱신)

#### 다. ARP 보안 취약점과 대응

**1) ARP Spoofing (ARP 스푸핑)**

```
공격 전:
A (1.10) ──── 스위치 ──── 게이트웨이 (1.1)
A의 ARP캐시: 1.1 → GW의 실제 MAC

공격 후:
공격자 (1.99)가 가짜 ARP Reply 전송:
"192.168.1.1의 MAC은 공격자MAC입니다"

A의 ARP캐시: 1.1 → 공격자 MAC (오염!)

결과: A → 공격자 → 게이트웨이 (중간자 공격, MITM)
```

**2) ARP Redirect (ARP 리다이렉트)**

```
공격자가 라우터/게이트웨이인 척 ARP Reply를 발송
→ 네트워크 전체 트래픽이 공격자를 경유
→ 패킷 도청, 수정, 차단 가능

ARP Spoofing과 유사하나 대상이 게이트웨이 역할로 확대
```

**대응 방안:**

| 대응 기술 | 설명 |
|---|---|
| **Dynamic ARP Inspection (DAI)** | 스위치에서 DHCP Snooping 테이블과 ARP 매핑 검증 |
| **Static ARP Entry** | 중요 서버/게이트웨이 MAC을 정적으로 등록 |
| **ARP 캐시 모니터링** | ARP 캐시 변경 탐지 솔루션 운용 |
| **802.1X** | 포트 기반 인증으로 비인가 단말 차단 |
| **ARPWatch** | ARP 트래픽 모니터링 및 이상 탐지 |
| **VPN/암호화** | MITM 되어도 내용 보호 |

### 3. 핵심 키워드 (Must-Have)

- **ARP Request:** 브로드캐스트 (FF:FF:FF:FF:FF:FF)
- **ARP Reply:** 유니캐스트, IP-MAC 매핑 응답
- **ARP Cache:** IP-MAC 매핑 임시 저장 (arp -a 명령으로 확인)
- **Gratuitous ARP:** 자신의 IP-MAC 능동 공지
- **DAI:** Dynamic ARP Inspection, 스위치 레벨 방어

### 4. 맥락과 비교

IPv6에서 ARP는 **NDP(Neighbor Discovery Protocol)**로 대체됩니다. NDP는 ICMPv6 기반으로 동작하며, CGA(Cryptographically Generated Addresses)와 결합하여 ARP Spoofing에 대한 보안이 향상되었습니다.

### 5. 실무 제언

기업 보안 강화를 위해 L2 스위치에 **DHCP Snooping → DAI** 순서로 적용합니다. DHCP Snooping이 IP-MAC-포트 바인딩 테이블을 만들고, DAI가 이 테이블을 기준으로 ARP 패킷을 검증합니다. 비인가 ARP Reply는 자동 차단됩니다. 기술사 답안에서 공격 흐름도를 ASCII로 표현하고 DAI 적용 과정을 구체적으로 설명하면 보안 실무 역량을 어필할 수 있습니다.
