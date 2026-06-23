---
title: "PKI(Public Key Infrastructure) — 목적 및 구성요소"
date: 2026-06-23T20:29:59+09:00
tags: ["보안", "PKI", "공개키기반구조", "인증서", "핵토200"]
topic_no1: 3
topic_no2: 1
topic_large: "PKI"
topic_small: "PKI"
exam_ref: "모의_2015.11"
exam_type: "관리"
question_no: 2
---

## 문제

공개키 기반 구조(PKI : Public Key Infrastructure)의 목적 및 구성요소에 대해 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | PKI |
| 토픽(소) | PKI |
| 출제 | 모의 2015.11 |
| 유형 | 관리 |
| 번호 | 2 |

## 해설

### 출제 배경 및 의도

PKI는 공개키 암호화를 실용적으로 사용하기 위한 인프라로, 디지털 서명·인증서·CA 구조를 이해하는지 검증한다. 구성요소(CA, RA, VA, CPS, CRL, OCSP)의 역할과 인증서 발급·검증 절차를 체계적으로 서술해야 한다.

### 1. PKI 개요 및 목적

- **정의**: 공개키 암호화 기반으로 디지털 인증서를 발급·관리·폐기하여 신뢰할 수 있는 키 배포 환경을 제공하는 인프라
- **목적**:
  1. 공개키의 진위 확인(공개키 → 소유자 신원 바인딩)
  2. 기밀성·무결성·인증·부인방지 서비스 제공
  3. 안전한 전자거래·전자서명 기반 마련

### 2. PKI 구성요소

| 구성요소 | 영문명 | 역할 |
|----------|--------|------|
| **인증기관** | CA(Certificate Authority) | 디지털 인증서 발급·서명·폐기 |
| **등록기관** | RA(Registration Authority) | 사용자 신원 확인, CA에 인증서 발급 요청 |
| **검증기관** | VA(Validation Authority) | 인증서 유효성 실시간 검증(OCSP) |
| **인증서 저장소** | Repository | CRL·인증서 배포·조회 서비스 |
| **인증서** | Certificate(X.509) | 공개키 + 소유자 정보 + CA 서명 |
| **인증서 정책** | CP/CPS | 인증서 발급·운영 정책 문서 |

```
PKI 구조 및 인증서 발급 절차:
사용자 ──신원확인 요청──▶ RA ──발급 요청──▶ CA
사용자 ◀──인증서 발급────────────────────────
         ◀──CRL/OCSP 제공── VA ◀──폐기 목록── CA
```

### 3. X.509 인증서 주요 필드

| 필드 | 내용 |
|------|------|
| 버전(Version) | X.509 v3 |
| 일련번호(Serial Number) | CA가 발급하는 고유 번호 |
| 서명 알고리즘 | SHA-256 with RSA 등 |
| 발급자(Issuer) | CA의 DN(Distinguished Name) |
| 유효기간(Validity) | Not Before / Not After |
| 주체(Subject) | 인증서 소유자 DN |
| 공개키 정보 | 알고리즘 + 공개키 값 |
| CA 서명(Signature) | CA 개인키로 서명한 값 |

### 4. 인증서 폐기 메커니즘

| 방식 | 설명 | 특징 |
|------|------|------|
| **CRL**(Certificate Revocation List) | CA가 주기적으로 폐기 목록 발행 | 실시간성 부족, 다운로드 부담 |
| **OCSP**(Online Certificate Status Protocol) | 실시간 인증서 유효성 쿼리 | 즉각 응답, VA 서버 부하 |
| **OCSP Stapling** | 서버가 OCSP 응답을 미리 획득하여 클라이언트에 전달 | 클라이언트 부담 최소화 |

### 실무 제언

**클라우드 환경 인증서 자동화**
- **챌린지**: 마이크로서비스 환경에서 수십~수백 개의 TLS 인증서를 수동으로 관리하면 만료 사고가 빈번히 발생한다.
- **제언**: Let's Encrypt + ACME 프로토콜 기반 자동 갱신, 또는 HashiCorp Vault의 PKI 시크릿 엔진을 활용하여 인증서 생명주기를 완전 자동화해야 한다.
