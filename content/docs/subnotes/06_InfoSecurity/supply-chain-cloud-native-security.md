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

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **공급망 보안(Supply Chain Security)과 클라우드 네이티브 보안(Cloud Native Security, CNAPP)** |
| **정의** | SW·HW·서비스 공급 전 과정에서 악의적 삽입·변조를 차단하는 **공급망 보안**(SBOM 기반 투명성 확보)과, 컨테이너·마이크로서비스 환경 특성(동적확장·단명인스턴스)에 맞게 보안을 코드·파이프라인에 내재화하는 **클라우드 네이티브 보안(4C 모델, CNAPP)** — 둘 다 "빌드 단계부터 보안을 내재화"한다는 공통 철학(Shift-Left, 제로트러스트)을 공유 |
| **키워드** | SBOM, SolarWinds/Log4Shell, NIST SP 800-161, 4C모델, CNAPP=CSPM+CWPP, Istio mTLS, Shift-Left/DevSecOps |
| **개념도** | **[ 코드→클라우드 전 구간 보안 내재화 흐름 ]**<br>`[ Code ] → SAST 정적분석 → [ Container ] → 이미지스캐닝(Trivy/Snyk)+SBOM →`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ Cluster ] RBAC최소권한+NetworkPolicy → [ Cloud ] CSPM 설정오류탐지 → 런타임 CWPP(Falco) 이상탐지`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`(각 계층 = CNAPP 통합관제 대상)` |
| **구성요소** | 1. **공급망 위협 4유형**: SW공급망(개발도구·오픈소스·업데이트 배포경로 오염), HW공급망(칩·부품 제조단계 백도어), 서비스공급망(협력업체·MSP 경유 침투), 오픈소스 취약점(의존성 패키지 제로데이)<br>2. **SBOM**: 소프트웨어 구성 컴포넌트·의존성·라이선스 전체 목록, 美 행정명령 14028로 연방조달 의무화<br>3. **4C 모델**: Code→Container→Cluster→Cloud 계층적 보안, 외부 계층 침해가 내부로 확산되지 않도록 중첩 방어<br>4. **CNAPP**: CSPM(S3 공개버킷 등 클라우드 설정오류 탐지·교정) + CWPP(컨테이너·VM 런타임 보안)<br>5. **핵심 보안영역**: 컨테이너 이미지 스캐닝, 런타임 이상탐지(Falco/Seccomp), K8s RBAC, 시크릿관리(Vault), 서비스메시 mTLS(Istio) |
| **비교** | **전통적 공급망 보안**<br>- **적용 범위**: 완제품 납품·유통 단계 중심(SW/HW/서비스 벤더 계약 검증)<br>- **핵심 수단**: SBOM, 코드서명, 협력업체 보안감사<br><br>**클라우드 네이티브 보안**<br>- **적용 범위**: 코드 작성부터 런타임까지 CI/CD 파이프라인 전 구간<br>- **핵심 수단**: 이미지 스캐닝, 4C 계층 방어, CNAPP 통합 관제 — 컨테이너 이미지 자체가 공급망 보안의 확장 대상 |
| **차별화** | **DevSecOps 기반 공급망·클라우드 통합 보안 거버넌스**<br>1. **빌드 파이프라인에 SBOM+이미지서명 자동화**: CI/CD 단계에서 모든 컨테이너 이미지에 대해 SBOM을 자동 생성하고 Sigstore 등으로 서명함으로써, 배포 후에도 컴포넌트 출처와 무결성을 실시간 검증.<br>2. **제로트러스트 3원칙을 공급망·클러스터 전반에 적용**: 협력업체·컨테이너·마이크로서비스 모두를 잠재적 위협으로 간주(침해가정)하고, JIT 최소권한과 Istio mTLS로 모든 연결을 지속 검증.<br>3. **CNAPP 단일 플랫폼으로 가시성 통합**: CSPM(설정오류)과 CWPP(런타임)를 분리 운영할 때 발생하는 탐지 사각지대를 CNAPP 통합으로 해소하여, 공급망 취약점부터 런타임 공격까지 하나의 대시보드에서 우선순위화. |
