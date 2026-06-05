---
title: "오픈소스 라이선스 정책 변경 (개방형 → 폐쇄형)"
date: 2026-05-09T07:09:12+09:00
tags: ["peim", "소프트웨어공학", "개발방법론", "오픈소스", "라이선스", "SSPL", "BSL", "클라우드"]
draft: false
exam_peim: ["134회"]
---

## 개요

최근 Redis, Elasticsearch, MongoDB 등 주요 오픈소스 프로젝트들이 MIT·Apache 같은 개방형 라이선스에서 SSPL·BSL 같은 소스 공개는 허용하되 상업적 이용을 제한하는 폐쇄형 라이선스로 전환하고 있다. AWS 등 클라우드 사업자가 오픈소스를 무상 서비스화하는 데 따른 수익성 위기가 주요 원인이다.

## 핵심 내용

### 오픈소스 라이선스 유형

**개방형 (Permissive)**

| 라이선스 | 주요 조건 | 대표 프로젝트 |
|---------|---------|------------|
| **MIT** | 저작권 표시만 의무 | jQuery, Rails |
| **Apache 2.0** | 저작권 표시 + 변경 고지 | Android, Kubernetes |
| **BSD 2/3-Clause** | 저작권 표시, 광고 조항 일부 | FreeBSD, PostgreSQL |

**카피레프트 (Copyleft)**

| 라이선스 | 주요 조건 | 특징 |
|---------|---------|------|
| **GPL v2/v3** | 파생 저작물 소스 공개 의무 | Linux 커널 |
| **LGPL** | 라이브러리 링크는 소스 공개 면제 | GCC, FFmpeg |
| **AGPL** | 네트워크 서비스도 소스 공개 | MongoDB (구) |

**준폐쇄형 (Source Available)**

| 라이선스 | 주요 조건 | 전환 사례 |
|---------|---------|---------|
| **SSPL** (Server Side Public License) | SSPL 소프트웨어를 서비스로 제공 시 전체 스택 소스 공개 의무 | MongoDB, Redis (일부 버전) |
| **BSL** (Business Source License) | n년 후 자동으로 개방형으로 전환, 그 전까지 상업적 이용 제한 | MariaDB, HashiCorp Terraform |
| **BUSL** | BSL의 HashiCorp 변형 | Vault, Nomad |

### 라이선스 정책 변경 배경

**① 클라우드 무임승차 문제**
- AWS ElastiCache(Redis 기반), Amazon OpenSearch(Elasticsearch 기반) 등
- 오픈소스 개발사 대비 클라우드 사업자가 훨씬 많은 수익 창출
- "돈을 벌어도 기여는 없음" — 지속가능한 개발 생태계 위협

**② SaaS 경제의 확대**
- 클라우드 시대에는 소스를 배포하지 않고 SaaS로 제공 → GPL 소스 공개 의무 미발생
- GPL의 허점: 네트워크 서비스 제공 시 소스 공개 불필요 → AGPL·SSPL로 보완 시도

**③ VC 투자 기반 오픈소스 비즈니스 모델 압박**
- 투자 회수를 위한 상업화 압력 증가

### 소프트웨어 산업에 미치는 영향

**부정적 영향**

| 영향 | 내용 |
|------|------|
| **오픈소스 생태계 신뢰 훼손** | "언제 라이선스가 바뀔지 모름" 불확실성 |
| **기업 법적 위험** | 기존 사용 소프트웨어의 라이선스 준수 의무 재검토 필요 |
| **OSI 비인증** | SSPL·BSL은 OSI 오픈소스 정의 미충족 → 커뮤니티 분열 |
| **포크(Fork) 발생** | AWS가 OpenSearch, Valkey(Redis 포크) 생성 → 생태계 분열 |

**긍정적 영향**

| 영향 | 내용 |
|------|------|
| **오픈소스 지속가능성** | 개발사의 수익 확보로 장기 유지보수 가능 |
| **클라우드 공급자 책임 인식** | 업스트림 기여 확대 논의 촉진 |

### 대응 방안 (기업 관점)

- **라이선스 감사**: SBOM 기반으로 사용 중인 오픈소스 라이선스 전수 조사
- **멀티소싱 전략**: 단일 오픈소스 의존도 줄이기, 대체 솔루션 준비
- **계약 검토**: 클라우드 사업자의 라이선스 준수 보증 조항 확인

## 출제 포인트

- MIT·Apache·GPL·SSPL·BSL 라이선스 차이와 의무 사항
- SSPL 등장 배경: 클라우드 사업자의 무임승차 문제
- BSL의 자동 전환 조항 (n년 후 개방형)
- 포크(Fork) 발생 사례와 생태계 분열 영향

## 연관 개념

- [SBOM]({{< relref "/docs/notes/02_SoftwareEngineering/05_SW_Quality/sbom" >}}) — 라이선스 현황 관리 도구
- [공급망 보안]({{< relref "/docs/notes/06_InfoSecurity/02_SecuritySystems/supply-chain-security" >}}) — 오픈소스 공급망 보안
- [DevSecOps]({{< relref "/docs/notes/02_SoftwareEngineering/01_Dev_Methodology/devsecops" >}}) — 라이선스 컴플라이언스 자동화

## 참고 기출

- 134회 3교시 6번 (PEIM)
