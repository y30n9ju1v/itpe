---
title: "오픈소스 라이선스 정책 변경과 SBOM 공급망 관리"
date: 2026-07-11T11:37:46+09:00
tags: ["소프트웨어공학", "SW품질", "오픈소스", "라이선스", "SSPL", "BSL", "SBOM", "공급망보안", "서브노트"]
draft: false
---

# 오픈소스 라이선스 정책 변경과 SBOM 공급망 관리 서브노트

> **두음 머리에 박기 🧠**
> - **M·A·G·S·B** (오픈소스 라이선스 스펙트럼: **M**IT/**A**pache(개방형) → **G**PL계열(카피레프트) → **S**SPL·**B**SL(준폐쇄형))
> - **이·버·식·라·의·출** (SBOM 6대 구성요소: **이**름, **버**전, **식**별자(PURL/CPE), **라**이선스, **의**존관계, **출**처)
> - **S·C** (SBOM 양대 표준 포맷: **S**PDX(Linux Foundation), **C**ycloneDX(OWASP))

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **오픈소스 라이선스 정책 변화(SSPL·BSL)와 SBOM 기반 공급망 관리** |
| **정의** | 클라우드 사업자의 무임승차 문제로 Redis·MongoDB 등 주요 오픈소스가 개방형(MIT/Apache)에서 상업적 이용을 제한하는 준폐쇄형(**SSPL·BSL**)으로 전환하는 추세이며, 이에 대응해 사용 중인 모든 소프트웨어 구성요소와 라이선스·취약점을 기계 판독 가능한 형식으로 관리하는 **SBOM(Software Bill of Materials)**이 공급망 보안의 핵심 수단으로 부상 |
| **키워드** | SSPL/BSL, 클라우드 무임승차, 포크(Fork), Log4Shell, SPDX/CycloneDX, 전이적 의존성, CVE |
| **개념도** | `[ 오픈소스 프로젝트 ]` ── 클라우드 무임승차 압박 ──▶ `[ 라이선스 전환 (MIT→SSPL/BSL) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 포크(Fork) 발생`<br>`[ AWS 등 클라우드사 ]` ◀── (OpenSearch, Valkey 등) ── `[ 커뮤니티 생태계 분열 ]`<br><br>`[ 빌드 산출물 ]` ──(Syft/Trivy)──▶ `[ SBOM 자동 생성 ]` ──▶ `[ 취약점 DB 매핑(NVD/OSV) ]` ──▶ `[ 패치·라이선스 리뷰 ]` |
| **구성요소** | 1. **라이선스 3분류**: 개방형(MIT/Apache/BSD), 카피레프트(GPL/LGPL/AGPL), 준폐쇄형(SSPL/BSL/BUSL)<br>2. **SBOM 6대 구성요소**: 이름·버전·식별자(PURL/CPE)·라이선스(SPDX ID)·의존관계(직접/전이적)·출처<br>3. **SBOM 표준 포맷**: SPDX(ISO/IEC 5962), CycloneDX(취약점 정보 통합), SWID Tag<br>4. **관리 프로세스**: 빌드 → SBOM 생성 → 취약점 DB 매핑 → 패치 우선순위화 → 라이선스 충돌 검사 → 배포<br>5. **규제 동향**: 미 행정명령 14028, EU CRA, 국내 공공SW 오픈소스 관리 가이드라인 |
| **비교** | **라이선스 정책 변경 (법적·계약 리스크)**<br>- **원인**: 클라우드 사업자의 무임승차, SaaS 경제 확대, VC 투자 압박<br>- **영향**: 생태계 신뢰 훼손, 기업 법적 재검토 의무, 포크 발생<br><br>**SBOM (기술적·운영 리스크)**<br>- **원인**: Log4Shell 등 전이적 의존성 취약점의 광범위한 전파<br>- **영향**: CVE 조기 탐지 가능, 패치 우선순위화, 조달 규제 대응 |
| **차별화** | **SBOM 기반 오픈소스 거버넌스 통합 대응 전략**<br>1. **라이선스 감사와 SBOM 일원화**: SBOM의 라이선스 필드(SPDX ID)를 활용해 사용 중인 전 오픈소스의 라이선스 유형을 자동 스캔하고, SSPL·BSL 전환 사례를 실시간 모니터링하여 법무 리스크 사전 차단.<br>2. **CI/CD 게이트 연동**: 빌드 단계에서 SBOM을 자동 생성(Syft/Trivy)하고 CVSS ≥ 7.0 취약점 또는 GPL 계열 라이선스 혼입 시 빌드를 자동 차단하는 보안 게이트 적용.<br>3. **멀티소싱 전략**: 단일 오픈소스 의존도를 낮추고 포크(예: Valkey) 등 대체 솔루션을 SBOM으로 상시 트래킹하여 라이선스 전환 리스크에 대한 이전(migration) 대응력 확보. |
