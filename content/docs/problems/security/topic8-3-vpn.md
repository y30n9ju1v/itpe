---
title: "VPN — 개념, 특징, IPSec VPN vs SSL VPN, 기술요소"
date: 2026-06-23T20:29:59+09:00
tags: ["보안", "VPN", "IPSec", "SSL", "보안프로토콜", "핵토200"]
topic_no1: 8
topic_no2: 3
topic_large: "보안 프로토콜"
topic_small: "VPN"
exam_ref: "133"
exam_type: "관리"
question_no: 4
---

## 문제

VPN(Virtual Private Network)에 대하여 다음을 설명하시오.
가. VPN의 개념 및 특징
나. IPSec(Internet Protocol Security) VPN과 SSL(Secure Socket Layer) VPN
다. VPN의 기술요소

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 보안 프로토콜 |
| 토픽(소) | VPN |
| 출제 | 133회 |
| 유형 | 관리 |
| 번호 | 4 |

## 해설

### 출제 배경 및 의도

VPN은 공중망에서 전용망 수준의 보안을 제공하는 핵심 기술이다. IPSec VPN(L3)과 SSL VPN(L4/7)의 동작 계층·용도·장단점 차이를 비교하고, 터널링·암호화·인증 등 기술 요소를 체계적으로 서술해야 한다.

### 1. VPN 개요 및 특징

정 의  • 공중 인터넷을 사설 전용망처럼 사용하도록 암호화·터널링으로 가상의 전용 통신로를 구성하는 기술
       - 
  - 인터넷 망을 전용선 수준의 보안으로 활용
  - 터널링으로 패킷을 캡슐화하여 도청 방지
  - 비용 절감(전용선 대비)

### 2. IPSec VPN vs SSL VPN 비교

| 항목 | IPSec VPN | SSL VPN |
|------|-----------|---------|
| 동작 계층 | L3(네트워크) | L4(SSL/TLS), L7(HTTPS) |
| 접속 방식 | 전용 클라이언트(소프트웨어) 필요 | 웹브라우저로 접속 가능 |
| 적용 범위 | Site-to-Site, 전사 LAN 확장 | 원격 개인 사용자 접속 |
| NAT 통과 | 어려움(AH 모드), NAT-T로 해결 | 쉬움(TCP 443 사용) |
| 보안 강도 | 높음(L3 전체 암호화) | 보통(응용 계층 수준) |
| 설치 편의성 | 별도 소프트웨어 필요 | 클라이언트리스 가능 |
| 주요 용도 | 사업장 간 연결, 본·지점 연결 | 재택근무자, 이동 단말 접속 |

### 3. VPN 주요 기술 요소

| 기술 | 설명 |
|------|------|
| **터널링(Tunneling)** | 원본 패킷을 다른 패킷으로 캡슐화하여 전송(GRE, IPSec, L2TP, PPTP) |
| **암호화(Encryption)** | AES-256, 3DES 등으로 데이터 기밀성 보장 |
| **인증(Authentication)** | PSK(사전 공유키), 인증서(X.509), OTP, MFA |
| **키 교환** | IKEv2, Diffie-Hellman, ECDHE |
| **무결성** | HMAC-SHA256, SHA-384 |
| **접근제어** | ACL, 방화벽 정책 연동 |

### 4. VPN 구성 유형

```
[Site-to-Site IPSec VPN]
본사 LAN ──[VPN GW]──인터넷──[VPN GW]── 지사 LAN

[Remote Access SSL VPN]
원격 PC(브라우저) ──HTTPS──[SSL VPN 서버] ── 내부망
```


- VPN은 공중망에 암호화 터널을 구성해 기밀성·무결성·인증을 보장하며, IPSec VPN은 네트워크 계층 암호화로 Site-to-Site에 강점이 있고 SSL VPN은 응용 계층에서 클라이언트 없이 원격 접속이 가능하여 업무 목적에 따라 혼용 설계가 일반적임.  "끝"

### 실무 제언

**Zero Trust + VPN 전환**
- **챌린지**: 전통적 VPN은 인증 후 내부망 전체 접근을 허용하여 내부자 공격·계정 탈취 시 lateral movement가 용이하다.
- **제언**: ZTNA(Zero Trust Network Access) 기반 접근 제어를 도입하여 사용자·기기·위치·시간에 따른 최소 권한 접근을 구현하고, 기존 IPSec VPN은 사이트 간 연결에만 유지하는 하이브리드 전환 전략을 적용해야 한다.
