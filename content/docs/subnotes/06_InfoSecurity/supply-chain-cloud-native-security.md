---
title: "공급망 보안(SBOM)과 클라우드 네이티브 보안(CNAPP)"
date: 2026-07-11T11:38:05+09:00
tags: ["보안", "공급망보안", "SBOM", "클라우드네이티브", "CNAPP", "DevSecOps", "서브노트"]
draft: false
---

# 공급망 보안(SBOM)과 클라우드 네이티브 보안(CNAPP) 서브노트

> **두음 머리에 박기 🧠**
> - **SW·HW·서·오** (공급망 보안 4대 위협 유형: **SW**공급망공격, **HW**공급망공격, **서**비스공급망공격, **오**픈소스취약점)
> - **명·최·침** (제로트러스트의 공급망 적용 3원칙: **명**시적검증, **최**소권한, **침**해가정)
> - **C·C·C·C** (4C 보안모델 계층: **C**ode-**C**ontainer-**C**luster-**C**loud)
> - **CS·CW** (CNAPP 구성: **CS**PM 설정오류탐지 + **CW**PP 런타임워크로드보호)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **공급망 보안(Supply Chain Security)과 클라우드 네이티브 보안(Cloud Native Security, CNAPP)** |
| **정의** | SW·HW·서비스 공급전과정 악의적 삽입·변조 차단하는 공급망보안(SBOM 투명성) + 컨테이너·MSA 특성(동적확장·단명인스턴스) 맞춰 코드·파이프라인 내재화하는 클라우드네이티브보안(4C모델, CNAPP) — 공통철학: Shift-Left·제로트러스트 |
| **키워드** | SBOM, SolarWinds/Log4Shell, NIST SP 800-161, 4C모델, CNAPP=CSPM+CWPP, Istio mTLS, Shift-Left/DevSecOps |
| **개념도** | **[ 코드→클라우드 전 구간 보안 내재화 흐름 ]**<br>`[ Code ] → SAST 정적분석 → [ Container ] → 이미지스캐닝(Trivy/Snyk)+SBOM →`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ Cluster ] RBAC최소권한+NetworkPolicy → [ Cloud ] CSPM 설정오류탐지 → 런타임 CWPP(Falco) 이상탐지`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`(각 계층 = CNAPP 통합관제 대상)` |
| **구성요소** | 1. **공급망 위협 4유형**: SW공급망(개발도구·오픈소스·업데이트경로 오염), HW공급망(칩·부품 제조단계 백도어), 서비스공급망(협력업체·MSP 경유침투), 오픈소스취약점(의존성패키지 제로데이)<br>2. **SBOM**: SW 구성컴포넌트·의존성·라이선스 전체목록, 美 행정명령14028 연방조달 의무화<br>3. **4C 모델**: Code→Container→Cluster→Cloud 계층적보안, 외부계층 침해 → 내부확산 차단 중첩방어<br>4. **CNAPP**: CSPM(설정오류 탐지·교정) + CWPP(컨테이너·VM 런타임보안)<br>5. **핵심 보안영역**: 컨테이너이미지 스캐닝, 런타임이상탐지(Falco/Seccomp), K8s RBAC, 시크릿관리(Vault), 서비스메시 mTLS(Istio) |
| **비교** | **전통적 공급망 보안**<br>- 적용범위: 완제품 납품·유통단계 중심(SW/HW/서비스벤더 계약검증)<br>- 핵심수단: SBOM, 코드서명, 협력업체 보안감사<br><br>**클라우드 네이티브 보안**<br>- 적용범위: 코드작성~런타임 CI/CD 파이프라인 전구간<br>- 핵심수단: 이미지스캐닝, 4C계층방어, CNAPP 통합관제 — 컨테이너이미지 자체가 공급망보안 확장대상 |
| **차별화** | **DevSecOps 기반 공급망·클라우드 통합 보안 거버넌스**<br>1. **빌드파이프라인 SBOM+이미지서명 자동화**: CI/CD단계 컨테이너이미지 SBOM 자동생성 + Sigstore 서명 → 배포후 출처·무결성 실시간검증<br>2. **제로트러스트 3원칙 → 공급망·클러스터 전반 적용**: 협력업체·컨테이너·MSA 모두 침해가정 → JIT최소권한+Istio mTLS 지속검증<br>3. **CNAPP 단일플랫폼 가시성 통합**: CSPM(설정오류)+CWPP(런타임) 분리운영 탐지사각지대 → 통합해소, 단일대시보드 우선순위화 |
