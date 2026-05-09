---
title: "SBOM (소프트웨어 자재명세서, Software Bill of Materials)"
date: 2026-05-09T07:09:12+09:00
tags: ["peim", "pecs", "소프트웨어공학", "SW품질", "SBOM", "오픈소스", "공급망보안", "취약점관리"]
draft: false
exam_peim: ["134회"]
exam_pecs: ["134회"]
---

## 개요


SBOM(Software Bill of Materials)은 소프트웨어를 구성하는 모든 컴포넌트(오픈소스·상용 라이브러리·직접 개발 코드)의 목록을 기계 판독 가능한 형식으로 기술한 문서다. Log4Shell 같은 오픈소스 취약점의 신속한 탐지·대응을 위해 미국 NTIA, EU CRA 등에서 의무화를 추진하고 있다.

## 핵심 내용

### 가. 오픈소스 소프트웨어 취약점

**오픈소스 취약점의 특징**

| 특징 | 설명 |
|------|------|
| **광범위한 전파** | 하나의 라이브러리가 수천 개 애플리케이션에 포함 |
| **의존성 복잡성** | 직접 의존성 + 전이적(Transitive) 의존성으로 관리 어려움 |
| **CVE 취약점 누적** | NVD(국가취약점 데이터베이스)에 연간 수만 건 등록 |
| **지연 패치** | 취약점 발견 후 패치 배포까지 시간 소요, 그 사이 공격 노출 |

**대표 사례**
- **Log4Shell (CVE-2021-44228)**: Apache Log4j 2의 JNDI 인젝션 취약점, 전 세계 수십억 기기 영향
- **Heartbleed**: OpenSSL 버퍼 오버리드, HTTPS 통신의 개인정보 유출

**오픈소스 라이선스 위험**
- GPL 코드 포함 시 파생 제품 소스 공개 의무
- 라이선스 충돌 (MIT + GPL 혼용 시 충돌)
- 오픈소스 라이선스 폐쇄형 전환 (SSPL, BSL) — 기업 서비스에 상업적 이용 제한

### 나. SBOM 기반 오픈소스 소프트웨어 관리 방안

**SBOM 구성 요소**

| 요소 | 내용 |
|------|------|
| 컴포넌트 이름 | 라이브러리·패키지 명칭 |
| 버전 정보 | 정확한 버전 (1.2.3-rc1 등) |
| 고유 식별자 | PURL(Package URL), CPE |
| 라이선스 정보 | SPDX 라이선스 식별자 |
| 의존 관계 | 직접/전이적 의존성 트리 |
| 출처 | 소스 저장소 URL, 해시값 |

**SBOM 표준 포맷**

| 포맷 | 주관 | 특징 |
|------|------|------|
| **SPDX** | Linux Foundation | ISO/IEC 5962:2021 국제 표준 |
| **CycloneDX** | OWASP | 보안 중심, 취약점 정보 통합 |
| **SWID Tag** | NIST/ISO | 설치된 소프트웨어 식별용 |

**SBOM 기반 관리 프로세스**

```
소프트웨어 빌드
    ↓
SBOM 자동 생성 (Syft, FOSSA, Black Duck)
    ↓
취약점 DB 매핑 (NVD, OSV, GitHub Advisory)
    ↓
취약 컴포넌트 식별 → 패치 우선순위화
    ↓
라이선스 충돌 검사 → 법무 리뷰
    ↓
SBOM 배포 (제품·서비스와 함께 공유)
```

**CI/CD 파이프라인 통합**
- 빌드 시 자동 SBOM 생성 (Syft, Trivy)
- 취약점 스캔 자동화 (CVE 점수 CVSS ≥ 7.0 시 빌드 차단)
- 의존성 업데이트 봇 (Dependabot, Renovate)

**국내외 규제 동향**
- 미국 행정명령 14028(2021): 연방 조달 소프트웨어 SBOM 제공 의무화
- EU CRA(사이버복원력법): 제품 출시 시 SBOM 제공 의무화 예정
- 국내: 공공 SW 사업 오픈소스 관리 가이드라인

## 출제 포인트

- Log4Shell을 사례로 오픈소스 취약점의 파급 효과 설명
- SBOM 6대 구성 요소 (이름·버전·식별자·라이선스·의존관계·출처)
- SPDX vs CycloneDX 표준 차이
- CI/CD 파이프라인 통합을 통한 자동화 관리 방안

## 연관 개념

- [공급망 보안]({{< relref "/docs/06_InfoSecurity/02_SecuritySystems/supply-chain-security" >}}) — SBOM은 SW 공급망 보안의 핵심 수단
- [소프트웨어 테스트]({{< relref "/docs/02_SoftwareEngineering/03_Implementation_Testing/sw-testing" >}}) — 오픈소스 취약점 테스트 포함
- 오픈소스 라이선스 정책 변경 — SSPL·BSL 전환과 기업 영향

## 참고 기출

- 134회 3교시 3번 (PEIM)
- 134회 1교시 7번 (PECS)
