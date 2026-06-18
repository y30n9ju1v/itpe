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

### 출제 배경 및 의도

DNS(Domain Name System)는 모든 인터넷 통신의 출발점으로, 인간이 기억하기 쉬운 도메인명을 IP 주소로 변환하는 인터넷의 핵심 인프라다. 1983년 ARPANET의 단순 hosts.txt에서 출발하여 현재는 전 세계 수십억 건의 쿼리를 처리하는 분산 계층 구조로 발전하였다.

IoT 시대 진입으로 수십억 개의 디바이스가 인터넷에 연결되면서 DNS 인프라에 대한 공격 표면이 급격히 확대되었다. Mirai 봇넷이 IoT 기기를 활용하여 Dyn DNS를 공격, 넷플릭스·트위터 등 대형 서비스를 마비시킨 2016년 사례는 DNS 보안의 임계적 중요성을 보여준다.

DNSSEC는 DNS 응답의 무결성과 출처 인증을 공개키 기반 서명으로 보장하는 보안 확장 표준으로, 기술사 시험에서 DNS 조회 원리와 DNSSEC 신뢰 체인의 통합 이해가 핵심 출제 포인트다.

### 1. DNS, 개요

정 의  • 도메인명을 IP 주소로 변환하는 계층형 분산 데이터베이스 시스템
       - UDP/TCP 포트 53 사용, RFC 1034/1035 표준

```
루트(.) DNS (13개 클러스터: a.root-servers.net 등)
    |
    +-- .com TLD 서버 (VeriSign)
    |       +-- google.com 권한 서버
    |               +-- www.google.com --> 142.250.x.x
    |
    +-- .kr TLD 서버 (KISA)
            +-- naver.com 권한 서버
```

- DNS는 계층 위임(Delegation) 구조로 전 세계 수십억 개 도메인을 확장성 있게 관리한다.

### 2. DNS 동작 원리 및 레코드 유형

1) DNS 조회 흐름 (재귀 vs 반복 질의)

| 구분 | 항목 | 설명 |
|------|------|------|
| 재귀 질의 | 클라이언트↔로컬DNS | 로컬 DNS 서버가 최종 답을 찾아 클라이언트에 반환 |
| 반복 질의 | 로컬DNS↔상위DNS | 로컬 DNS가 루트→TLD→권한 서버 순차 질의 후 합산 |
| 캐싱 | TTL 기반 | 조회 결과를 TTL 시간 동안 캐시, 반복 질의 감소 |

```
[클라이언트]--재귀질의-->[로컬DNS]--반복질의-->[루트DNS]
                              |<-- ".com TLD 주소" --|
                              |--반복질의-->[.com TLD]
                              |<-- "google.com 권한서버" --|
                              |--반복질의-->[google.com 권한]
                              |<-- "142.250.x.x" --|
[클라이언트]<-- "142.250.x.x" --[로컬DNS(캐시저장)]
```

- 로컬 DNS 서버가 반복 질의를 대리 수행하여 클라이언트 부하를 최소화한다.

2) DNS 주요 레코드 유형

| 구분 | 레코드 | 용도 | 예시 |
|------|--------|------|------|
| 주소 | A / AAAA | 도메인 → IPv4 / IPv6 | google.com → 142.250.x.x |
| 별칭 | CNAME | 도메인 → 다른 도메인 | www → example.com |
| 메일 | MX | 메일 서버 지정 | mail.google.com |
| 권한 | NS | 권한 DNS 서버 지정 | ns1.google.com |
| 역방향 | PTR | IP → 도메인 | 142.x.x.x → google.com |
| 텍스트 | TXT | SPF·DKIM 이메일 인증 | v=spf1 include:... |

- 레코드 유형의 다양성이 DNS를 단순 주소 변환 이상의 인터넷 인프라 기반으로 만든다.

### 3. DNSSEC 및 DNS 보안 위협 비교

1) DNS 주요 보안 위협

| 구분 | 공격 유형 | 설명 |
|------|----------|------|
| 위변조 | 캐시 포이즈닝 | 가짜 DNS 응답으로 캐시 오염, 사용자를 피싱 사이트로 유도 |
| 위변조 | DNS 스푸핑 | DNS 응답 위조(MITM), 통신 가로채기 |
| 가용성 | DNS DDoS | 대량 쿼리로 서버 마비 |
| 증폭 | DNS 증폭 공격 | 작은 ANY 쿼리로 큰 응답 유도, 반사 공격 |
| 침해 | DNS 하이재킹 | DNS 서버·레코드 자체를 침해하여 응답 조작 |

2) DNSSEC 구조 및 신뢰 체인

```
[루트(.)] DNSKEY (ICANN이 서명, 트러스트 앵커)
     | DS 레코드로 위임
[.com] DNSKEY
     | DS 레코드로 위임
[google.com] DNSKEY
     | RRSIG로 개별 레코드 서명
[www.google.com A 레코드] --> RRSIG 첨부 --> 검증기에서 공개키로 검증
```

| 구분 | 레코드 | 역할 |
|------|--------|------|
| 서명 | RRSIG | 리소스 레코드셋에 대한 디지털 서명 |
| 공개키 | DNSKEY | 존(Zone) 서명 공개키 게시 |
| 위임 | DS | 부모 존에 자식 존 공개키 해시 등록 |
| 부정 응답 | NSEC/NSEC3 | 존재하지 않는 도메인의 인증된 부정 응답 |

3) DNS 기술 비교

| 항목 | DNS (기존) | DNSSEC | DoH/DoT |
|------|-----------|--------|---------|
| 무결성 | 미보장 | 보장 (서명) | 미보장 |
| 기밀성 | 없음 (평문 UDP) | 없음 | 보장 (암호화) |
| 출처 인증 | 없음 | 보장 | 없음 |
| 성능 | 빠름 | 약간 저하 | HTTPS 오버헤드 |
| 표준 | RFC 1034/1035 | RFC 4033-4035 | RFC 8484 / RFC 7858 |

- DNSSEC는 무결성·출처 인증을, DoH/DoT는 기밀성을 보완하여 완전한 DNS 보안 스택을 구성한다.  "끝"

### 실무 제언

**DNS 캐시 포이즈닝 대응**
- **챌린지**: 로컬 DNS 캐시에 위조 레코드가 삽입되면 다수 사용자가 피싱 사이트로 유도됨
- **제언**: DNSSEC 검증 활성화(Validating Resolver 구성), 쿼리 포트 무작위화(0x20 인코딩), TTL 최적화로 캐시 오염 영향 범위 최소화

**DNS 증폭 공격 방어**
- **챌린지**: IoT 봇넷이 ANY 쿼리로 수십 배 증폭된 응답을 피해자 IP로 반사하여 대역폭 포화
- **제언**: ANY 쿼리 응답 제한, DNS Response Rate Limiting(RRL) 적용, 오픈 리졸버 차단(ACL 설정)

**기업 내부 DNS 보안 강화**
- **챌린지**: 악성코드의 DNS 터널링(C2 통신)과 도메인 생성 알고리즘(DGA) 기반 공격 탐지 어려움
- **제언**: DNS Firewall(RPZ: Response Policy Zone)으로 악성 도메인 차단, DNS 쿼리 로그 분석 기반 이상 탐지 시스템 구축
