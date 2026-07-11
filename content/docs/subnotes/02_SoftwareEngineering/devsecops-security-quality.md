---
title: "DevSecOps와 소프트웨어 보안 품질"
date: 2026-07-11T11:37:46+09:00
tags: ["소프트웨어공학", "SW품질", "DevSecOps", "SAST", "DAST", "SCA", "보안자동화", "서브노트"]
draft: false
---

# DevSecOps와 소프트웨어 보안 품질 서브노트

> **두음 머리에 박기 🧠**
> - **SAST·DAST·SCA·IAST** (보안 자동화 4대 도구 계열: **SAST**(정적분석), **DAST**(동적분석), **SCA**(오픈소스 구성분석), **IAST**(대화형 런타임분석) — 영문 약어 그대로 암기)
> - **기·무·부·책·인** (ISO/IEC 25010 보안성 하위 특성: **기**밀성, **무**결성, **부**인방지, **책**임추적성, **인**증성)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **DevSecOps 기반 CI/CD 파이프라인 보안과 소프트웨어 보안 품질** |
| **정의** | **DevSecOps**는 "Shift Left" 원칙에 따라 DevOps 파이프라인 초기부터 보안 검사를 자동화하는 방법론이며, 이를 통해 확보하고자 하는 목표가 ISO/IEC 25010의 보안성(기밀성·무결성·부인방지·책임추적성·인증성)을 포함하는 **소프트웨어 보안 품질**이다 |
| **키워드** | Shift Left, SAST/DAST/SCA/IAST, 보안 게이트(Security Gate), Threat Modeling(STRIDE), 컨테이너 스캔 |
| **개념도** | `[ 코드 작성 ]` → `[ 빌드(CI): SAST+SCA ]` → `[ 컨테이너 빌드: 이미지 스캔 ]` → `[ 스테이징(CD): DAST ]` → `[ 배포: IaC 보안검사 ]` → `[ 운영: RASP/SIEM ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (단계별 보안 게이트: Critical 즉시 차단 / High 승인필요 / Medium 이하 리포트)` |
| **구성요소** | 1. **SAST(정적분석)**: 소스코드·바이너리 취약점 스캔, 빌드 단계, 오탐 많음 (SonarQube, Checkmarx)<br>2. **DAST(동적분석)**: 실행 중 애플리케이션 취약점 테스트, 스테이징·운영 단계 (OWASP ZAP)<br>3. **SCA(구성 분석)**: 오픈소스 의존성 취약점 탐지 (Snyk, OWASP Dependency-Check)<br>4. **IAST(대화형 분석)**: 런타임 테스트 중 코드 계측 기반 분석 (Contrast Security)<br>5. **보안 게이트**: Critical 즉시 차단, High 승인 필요, Medium 이하 리포트 후 진행<br>6. **ISO/IEC 25010 보안성**: 기밀성, 무결성, 부인방지, 책임추적성, 인증성 |
| **비교** | **SAST (정적, Shift Left 핵심)**<br>- **분석 대상**: 소스코드·바이너리<br>- **시점**: 빌드 단계<br>- **장단점**: 조기 발견·저비용 / 오탐 많음<br><br>**DAST (동적)**<br>- **분석 대상**: 실행 중인 애플리케이션<br>- **시점**: 스테이징·운영<br>- **장단점**: 실제 취약점 검증 / 늦은 발견 |
| **차별화** | **DevSecOps 기반 보안 품질 내재화 전략**<br>1. **라이프사이클 전 단계 보안 매핑**: 요구사항(Threat Modeling/STRIDE) → 설계(보안 아키텍처 체크리스트) → 구현(SAST) → 테스트(DAST/침투테스트) → 배포(IaC 스캔) → 운영(SIEM/WAF)까지 전 단계에 보안 활동을 자동화 도구와 매핑하여 취약점 조기 발견으로 수정 비용을 10~100배 절감.<br>2. **보안 게이트의 CI/CD 강제 통합**: Critical 등급 취약점 발견 시 파이프라인을 자동 차단하는 정책을 코드화(Policy as Code)하여 사람이 아닌 시스템이 보안 기준을 강제.<br>3. **SBOM·SCA 연계**: 오픈소스 구성요소의 SBOM을 SCA 결과와 결합해 컴플라이언스 증적을 자동 생성, 감사 대응 시간을 단축. |
