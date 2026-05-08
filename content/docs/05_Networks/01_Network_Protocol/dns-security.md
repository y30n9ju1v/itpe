---
title: "DNS (Domain Name System)와 보안"
date: 2026-05-09T07:56:10+09:00
tags: ["pecs", "컴퓨터통신및네트워크", "네트워크프로토콜", "DNS", "DNSSEC", "DNS스푸핑", "DoH"]
draft: false
exam: "137회"
---

## 개요

DNS(Domain Name System)는 도메인 이름(www.example.com)을 IP 주소로 변환하는 인터넷의 분산 계층형 네이밍 시스템이다. 인터넷 기반 서비스의 핵심 인프라로, DNS 취약점은 서비스 전반에 치명적 영향을 미친다.

## 핵심 내용

### DNS 개요

- **포트**: UDP 53 (주로), TCP 53 (존 전송·대용량 응답)
- **계층 구조**: 루트 DNS → TLD(Top-Level Domain) → 권한 DNS → 로컬 DNS 리졸버

### DNS 구성 요소

| 구성 요소 | 역할 |
|-----------|------|
| **DNS 리졸버** (클라이언트 측) | 도메인 쿼리 시작, 결과 캐시 |
| **루트 네임서버** | TLD 서버 주소 응답 (13개 클러스터) |
| **TLD 서버** | .com, .kr 등 TLD 관리 |
| **권한 네임서버** | 특정 도메인의 최종 A/CNAME/MX 레코드 보유 |
| **DNS 캐시** | TTL 동안 응답 저장으로 조회 속도 향상 |

**주요 레코드 타입**

| 레코드 | 내용 |
|--------|------|
| A | 도메인 → IPv4 주소 |
| AAAA | 도메인 → IPv6 주소 |
| CNAME | 도메인 별칭 |
| MX | 메일 서버 |
| TXT | SPF, DKIM 등 텍스트 정보 |

### DNS 보안 취약점 및 대응

| 취약점 | 공격 방식 | 대응 방안 |
|--------|-----------|----------|
| **DNS 스푸핑/캐시 포이즈닝** | 위조 DNS 응답으로 캐시 오염 → 악성 IP 유도 | **DNSSEC**: 전자서명으로 응답 무결성 검증 |
| **DNS 증폭 공격 (DRDoS)** | 소스 IP 위조 + 대용량 DNS 응답으로 타겟 과부하 | ACL, 응답률 제한(RRL), ANY 쿼리 차단 |
| **DNS 터널링** | DNS 쿼리에 데이터를 인코딩하여 방화벽 우회 | DNS 트래픽 이상 패턴 탐지 |
| **도메인 하이재킹** | 등록 기관 계정 탈취로 도메인 이전 | 2FA, 레지스트리 잠금(Registry Lock) |
| **NXDOMAIN 공격** | 존재하지 않는 도메인 대량 쿼리로 DNS 서버 과부하 | NXDOMAIN 응답률 제한 |

**DoH(DNS over HTTPS)·DoT(DNS over TLS)**: DNS 쿼리 암호화로 도청·조작 방지.

## 출제 포인트

- DNS 계층 구조(루트→TLD→권한 서버)와 반복·재귀 쿼리 흐름
- DNS 캐시 포이즈닝의 원리와 DNSSEC 대응
- DoH/DoT의 역할(프라이버시 보호)

## 연관 개념

- [TLS 1.2 vs 1.3]({{< relref "/docs/05_Networks/01_Network_Protocol/tls-1-2-vs-1-3" >}}) — DoT/DoH의 기반 보안 프로토콜
- [침입탐지시스템(IDS)]({{< relref "/docs/06_InfoSecurity/02_SecuritySystems/siem-soar" >}}) — DNS 터널링 탐지
- [네트워크 설계]({{< relref "/docs/05_Networks/02_NetworkDesign" >}}) — DNS 이중화 설계

## 참고 기출

- 137회 4교시 4번 (PECS)
