---
title: "IPSec — 개념, 특징, 동작모드, 패킷 송수신 절차"
date: 2026-06-23T20:29:59+09:00
tags: ["보안", "IPSec", "VPN", "보안프로토콜", "핵토200"]
topic_no1: 8
topic_no2: 2
topic_large: "보안 프로토콜"
topic_small: "IPSec"
exam_ref: "모의_2017.11"
exam_type: "응용"
question_no: 2
---

## 문제

IPSec 의 개념과 특징, 동작모드, 패킷 송신 및 수신 절차에 대하여 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 보안 프로토콜 |
| 토픽(소) | IPSec |
| 출제 | 모의 2017.11 |
| 유형 | 응용 |
| 번호 | 2 |

## 해설

### 출제 배경 및 의도

IPSec은 IP 계층에서 보안을 제공하는 표준 프로토콜 집합으로, VPN 구현의 핵심이다. AH/ESP 프로토콜의 차이, 전송/터널 모드, IKE 키 교환 절차를 체계적으로 서술해야 한다.

### 1. IPSec 개요

정 의  • IP 계층(L3)에서 인증·기밀성·무결성을 제공하는 IETF 표준 보안 프로토콜 집합(RFC 4301)
- **구성**: IKE(키 교환) + AH(인증) + ESP(암호화·인증)
- **SA(Security Association)**: 보안 통신을 위한 단방향 논리적 연결(SPI, 목적지 IP, 보안 프로토콜로 식별)

### 2. IPSec 구성 프로토콜

| 프로토콜 | 기능 | 특징 |
|----------|------|------|
| **IKE** (Internet Key Exchange) | 키 협상 및 SA 설정 | IKEv2(RFC 7296) 사용 권고 |
| **AH** (Authentication Header) | 인증·무결성(헤더 포함) | 암호화 없음, NAT 통과 어려움 |
| **ESP** (Encapsulating Security Payload) | 암호화·인증·무결성(페이로드) | AH보다 범용적, NAT 통과 가능 |

### 3. IPSec 동작 모드

| 모드 | 보호 범위 | 적용 |
|------|-----------|------|
| **전송 모드(Transport)** | IP 페이로드만 보호, 원본 IP 헤더 유지 | 단말-단말 통신(E2E) |
| **터널 모드(Tunnel)** | 원본 패킷 전체를 새 IP 패킷에 캡슐화 | 게이트웨이-게이트웨이 VPN |

```
터널 모드 ESP 패킷 구조:
[새 IP 헤더][ESP 헤더][원본 IP 헤더][원본 페이로드][ESP 트레일러][ESP 인증 데이터]
←── 암호화 ──────────────────────────────────────────────────────▶
←──────────── 인증 ─────────────────────────────────────────────▶
```

### 4. IPSec 패킷 처리 절차

1) 송신(Outbound) 절차
```
① 패킷 생성
② SPD(Security Policy Database) 조회 → 보안 정책 확인
③ SAD(Security Association Database) 조회 → SA 존재 확인
④ SA 없으면 IKE로 SA 협상
⑤ ESP/AH 적용(암호화·서명)
⑥ 패킷 전송
```

2) 수신(Inbound) 절차
```
① 패킷 수신
② SPI로 SAD 조회 → 해당 SA 확인
③ ESP/AH 처리(복호화·검증)
④ 시퀀스 번호로 재전송 공격 방지(Anti-Replay)
⑤ SPD 정책 준수 확인
⑥ 상위 레이어로 전달
```

### 5. IKEv2 Phase 구조

| Phase | 목적 |
|-------|------|
| IKE_SA_INIT | Diffie-Hellman 키 교환, IKE SA 수립 |
| IKE_AUTH | 신원 인증(인증서/PSK), Child SA(IPSec SA) 수립 |
| CREATE_CHILD_SA | 추가 Child SA 생성 또는 재키잉 |


- 최근 IPSec 관련 보안 위협 증가에 대응하여, 서비스 안전성 확보를 위한 체계적인 통제 및 기술 적용이 증대되는 추세임.  "끝"

### 실무 제언

**Site-to-Site VPN 설계**
- **챌린지**: 원격 사업소와의 VPN에서 NAT 장비가 있으면 AH 모드가 동작하지 않는다.
- **제언**: NAT 환경에서는 ESP 터널 모드를 사용하고, NAT-T(NAT Traversal, RFC 3948)를 적용하여 ESP 패킷을 UDP 4500번 포트로 캡슐화해야 한다. IKEv2와 ECDHE를 조합하여 PFS를 보장한다.
