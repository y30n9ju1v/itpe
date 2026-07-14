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

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **오픈소스 라이선스 정책 변화(SSPL·BSL)와 SBOM 기반 공급망 관리** |
| **정의** | 클라우드 사업자 무임승차 문제 → Redis·MongoDB 등 주요 오픈소스 개방형(MIT/Apache)→준폐쇄형(**SSPL·BSL**) 전환 추세<br>대응책: 전 SW구성요소·라이선스·취약점을 기계판독 가능형식 관리하는 **SBOM**이 공급망보안 핵심수단으로 부상 |
| **키워드** | SSPL/BSL, 클라우드 무임승차, 포크(Fork), Log4Shell, SPDX/CycloneDX, 전이적 의존성, CVE |
| **개념도** | `[ 오픈소스 프로젝트 ]` ── 클라우드 무임승차 압박 ──▶ `[ 라이선스 전환 (MIT→SSPL/BSL) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 포크(Fork) 발생`<br>`[ AWS 등 클라우드사 ]` ◀── (OpenSearch, Valkey 등) ── `[ 커뮤니티 생태계 분열 ]`<br><br>`[ 빌드 산출물 ]` ──(Syft/Trivy)──▶ `[ SBOM 자동 생성 ]` ──▶ `[ 취약점 DB 매핑(NVD/OSV) ]` ──▶ `[ 패치·라이선스 리뷰 ]` |
| **구성요소** | 1. **라이선스 3분류**: 개방형(MIT/Apache/BSD)·카피레프트(GPL/LGPL/AGPL)·준폐쇄형(SSPL/BSL/BUSL)<br>2. **SBOM 6대 구성요소**: 이름·버전·식별자(PURL/CPE)·라이선스(SPDX ID)·의존관계(직접/전이적)·출처<br>3. **SBOM 표준 포맷**: SPDX(ISO/IEC 5962), CycloneDX(취약점정보 통합), SWID Tag<br>4. **관리 프로세스**: 빌드 → SBOM생성 → 취약점DB매핑 → 패치우선순위화 → 라이선스충돌검사 → 배포<br>5. **규제 동향**: 미 행정명령 14028, EU CRA, 국내 공공SW 오픈소스 관리가이드라인 |
| **비교** | **라이선스 정책 변경(법적·계약 리스크)**<br>- 원인: 클라우드사업자 무임승차, SaaS경제 확대, VC투자 압박<br>- 영향: 생태계 신뢰훼손, 기업 법적재검토 의무, 포크발생<br><br>**SBOM(기술적·운영 리스크)**<br>- 원인: Log4Shell 등 전이적 의존성 취약점 광범위 전파<br>- 영향: CVE 조기탐지, 패치 우선순위화, 조달규제 대응 |
| **차별화** | **SBOM 기반 오픈소스 거버넌스 통합 대응 전략**<br>1. **라이선스감사·SBOM 일원화**: 라이선스필드(SPDX ID) 활용 전 오픈소스 자동스캔 + SSPL·BSL 전환사례 실시간모니터링 → 법무리스크 사전차단<br>2. **CI/CD 게이트 연동**: 빌드단계 SBOM 자동생성(Syft/Trivy) + CVSS≥7.0 취약점·GPL계열 혼입 시 빌드 자동차단 (보안게이트)<br>3. **멀티소싱 전략**: 단일 오픈소스 의존도 완화, 포크(예: Valkey) 등 대체솔루션 SBOM 상시트래킹 → 전환리스크 마이그레이션 대응력 확보 |
