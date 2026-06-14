---
title: "DNS 원리와 DNSSec(DNS Security Extensions)"
date: 2026-06-14T09:00:00+09:00
tags: ["네트워크", "NW", "핵토200"]
topic_no1: 12
topic_no2: 1
topic_large: "DNS, DNSSEC"
topic_small: "DNS, DNSSEC"
exam_ref: "모의_2017.04"
exam_type: "관리"
question_no: 2
---

## 문제

사물인터넷(IoT) 시대가 진입하면서 IoT Device기기를 이용한 DNS(Domain Name System)에 대한 공격과 피해가 급증하고 있다. 이와 관련하여 DNS(Domain Name System) 원리와 DNSSec(DNS Security Extensions)에 대하여 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | DNS, DNSSEC |
| 토픽(소) | DNS, DNSSEC |
| 출제 | 모의_2017.04회 |
| 유형 | 관리 |
| 번호 | 2 |

## 해설

> **DNS는 인터넷의 전화번호부다 — "google.com"을 입력하면 "142.250.x.x"로 번역해주는 시스템. 하지만 이 전화번호부가 위조되면 엄청난 피해가 발생한다**

### 1. 출제 배경 및 의도

DNS는 모든 인터넷 통신의 시작점입니다. DNS 캐시 포이즈닝, DDoS, IoT 봇넷 기반 DNS 증폭 공격이 급증하는 상황에서 DNS 보안(DNSSEC)의 중요성이 부각됩니다. DNS 원리와 보안 확장 메커니즘을 함께 이해하는 것이 목표입니다.

### 2. 개념의 본질과 작동 메커니즘

#### DNS 계층 구조

```
루트 DNS 서버 (13개 클러스터: a.root-servers.net 등)
    │
    ├── .com TLD 서버 (VeriSign)
    │       └── google.com 권한 서버 (Google)
    │               └── www.google.com → 142.250.x.x
    │
    ├── .kr TLD 서버 (KISA)
    │       └── naver.com 권한 서버
    └── ...
```

#### DNS 조회 과정 (재귀 vs 반복)

```
클라이언트          로컬 DNS 서버         루트 DNS         .com TLD         google.com 권한
    │                    │                   │                │                   │
    │── "www.google.com" ▶│                   │                │                   │
    │   (재귀 질의)       │── "www.google.com?" ─────────────▶│                   │
    │                    │   ◀─ ".com TLD 주소: X.X.X.X" ───│                   │
    │                    │──────────────── "www.google.com?" ──────────────────▶ │
    │                    │   ◀─────────── "google.com 권한서버 주소" ────────────│
    │                    │─────────────────────────────── "www.google.com?" ──▶ │
    │                    │   ◀──────────────────────────── "142.250.x.x" ───────│
    │◀── "142.250.x.x" ──│   [캐시에 저장]
    │
    [142.250.x.x로 HTTP 연결]
```

**재귀 질의 (Recursive):** 로컬 DNS 서버가 최종 답을 찾아 클라이언트에 반환
**반복 질의 (Iterative):** 로컬 DNS 서버가 각 서버에 순차적으로 질의

#### DNS 레코드 유형

| 레코드 | 용도 | 예시 |
|---|---|---|
| **A** | 도메인 → IPv4 주소 | google.com → 142.250.x.x |
| **AAAA** | 도메인 → IPv6 주소 | google.com → 2607:f8b0::x |
| **CNAME** | 도메인 → 다른 도메인 별칭 | www → example.com |
| **MX** | 메일 서버 | mail.google.com |
| **NS** | 권한 DNS 서버 | ns1.google.com |
| **PTR** | IP → 도메인 (역방향) | 142.x.x.x → google.com |
| **TXT** | 텍스트 (SPF, DKIM 등) | 이메일 인증 |

#### DNS 보안 위협

| 공격 | 설명 |
|---|---|
| **DNS 캐시 포이즈닝** | 가짜 DNS 응답으로 캐시 오염, 사용자를 가짜 사이트로 유도 |
| **DNS 스푸핑** | DNS 응답 위조 (MITM) |
| **DNS DDoS** | 대량 DNS 쿼리로 서버 마비 |
| **DNS 증폭 공격** | 작은 쿼리로 큰 응답 유도 (반사 공격) |
| **DNS 하이재킹** | DNS 서버 자체를 침해 |

#### DNSSEC (DNS Security Extensions)

**목적:** DNS 응답의 **무결성(Integrity)**과 **출처 인증(Authenticity)** 보장

**원리:** 공개키 암호화 기반 디지털 서명

```
DNS 존 관리자:
데이터(A 레코드) → 개인키로 서명 → RRSIG 레코드 생성
공개키 → DNSKEY 레코드에 게시

클라이언트/검증 DNS:
응답 수신 → RRSIG(서명) + DNSKEY(공개키) 조회
→ 서명 검증 → 위변조 여부 확인
```

**DNSSEC 추가 레코드:**

| 레코드 | 역할 |
|---|---|
| **RRSIG** | 리소스 레코드에 대한 디지털 서명 |
| **DNSKEY** | 존(Zone) 서명 공개키 |
| **DS (Delegation Signer)** | 부모 존에 자식 존의 공개키 해시 등록 |
| **NSEC/NSEC3** | 존재하지 않는 도메인에 대한 인증 (부정 응답) |

**신뢰 체인 (Chain of Trust):**

```
루트(.) DNSKEY (ICANN이 서명)
    ↓ DS 레코드로 연결
.com DNSKEY
    ↓ DS 레코드로 연결
google.com DNSKEY
    ↓ RRSIG로 개별 레코드 서명
www.google.com A 레코드 (서명됨)

→ 최상위(루트)에서 하위까지 신뢰 체인 형성
```

### 3. 핵심 키워드 (Must-Have)

- **재귀 질의 / 반복 질의:** 로컬 DNS 서버의 두 가지 조회 방식
- **DNS 캐시 포이즈닝:** DNSSEC 도입의 주요 동기
- **RRSIG:** 리소스 레코드 서명 (DNS 응답의 디지털 서명)
- **DNSKEY:** 공개키 게시
- **신뢰 체인:** 루트에서 하위 도메인까지 서명 검증 연쇄

### 4. 맥락과 비교

| 항목 | DNS (기존) | DNSSEC |
|---|---|---|
| **보안** | 없음 (평문 UDP) | 디지털 서명 |
| **무결성** | 미보장 | 보장 |
| **기밀성** | 없음 | 없음 (DoH/DoT로 해결) |
| **성능** | 빠름 | 추가 레코드로 약간 저하 |
| **복잡도** | 낮음 | 높음 (키 관리) |

**DNS 프라이버시:** DNSSEC는 무결성만 보장, 내용 암호화는 **DoH(DNS over HTTPS)**, **DoT(DNS over TLS)**로 해결

### 5. 실무 제언

국내 주요 도메인(.kr)은 KISA에서 DNSSEC를 적용하고 있습니다. 기업 환경에서는 내부 DNS 서버에 DNS Firewall(RPZ: Response Policy Zone)을 적용하여 악성 도메인 접근을 차단합니다. IoT 기기를 활용한 Mirai 봇넷이 DNS 증폭 공격에 활용된 사례처럼, DNS 보안은 IoT 보안과 직결됩니다. 기술사 답안에서 DNS 조회 흐름도, 주요 공격 유형, DNSSEC 신뢰 체인을 체계적으로 서술하면 실무와 이론을 겸비한 답안이 됩니다.
