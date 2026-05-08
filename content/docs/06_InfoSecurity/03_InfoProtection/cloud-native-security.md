---
title: "클라우드 네이티브 보안"
date: 2026-05-09T07:56:10+09:00
tags: ["pecs", "시스템보안", "정보보호", "클라우드네이티브", "컨테이너보안", "CNAPP", "DevSecOps", "제로트러스트"]
draft: false
exam_pecs: "137회"
---

## 개요

클라우드 네이티브 보안은 컨테이너·마이크로서비스·서버리스 등 클라우드 네이티브 환경의 특성(동적 확장, 단명 인스턴스, 코드로서의 인프라)에 맞게 보안을 코드·파이프라인에 내재화하는 접근법이다. 전통적 경계 기반 보안(방화벽 중심)으로는 대응 불가능하다.

## 핵심 내용

### 4C 보안 모델 (CNCF)

```
Code (코드) → Container (컨테이너) → Cluster (클러스터) → Cloud (클라우드)
```
각 계층에서 보안을 중첩 적용 — 외부 계층 침해가 내부 계층으로 확산 방지.

### 주요 보안 영역

| 영역 | 위협 | 대응 방안 |
|------|------|----------|
| **컨테이너 이미지 보안** | 취약한 베이스 이미지, 악성 패키지 | 이미지 스캐닝(Trivy, Snyk), 신뢰된 레지스트리 |
| **런타임 보안** | 컨테이너 탈출, 권한 에스컬레이션 | Falco(런타임 이상탐지), Seccomp/AppArmor 프로파일 |
| **쿠버네티스 보안** | API 서버 노출, RBAC 미설정 | RBAC 최소 권한, Network Policy, Admission Controller |
| **시크릿 관리** | 환경변수 하드코딩 | Vault, AWS Secrets Manager, Kubernetes Secrets 암호화 |
| **서비스 메시 보안** | 마이크로서비스 간 무인증 통신 | Istio mTLS (서비스 간 상호 인증·암호화) |
| **공급망 보안** | 오염된 의존성 라이브러리 | SBOM(Software Bill of Materials), Sigstore 서명 |

### CNAPP (Cloud Native Application Protection Platform)

CSPM(Cloud Security Posture Management) + CWPP(Cloud Workload Protection Platform) 통합.
- CSPM: 클라우드 설정 오류(잘못된 S3 공개 접근 등) 탐지·교정
- CWPP: 컨테이너·VM 워크로드의 런타임 보안

### Shift-Left Security / DevSecOps

빌드 파이프라인(CI/CD) 내 보안 자동화:
```
코드 → SAST → 이미지 빌드 → 이미지 스캔 → 배포 → 런타임 감시
```

## 실무 적용 예시

- 금융권 쿠버네티스 클러스터: Network Policy로 결제 서비스 파드 격리, Vault로 DB 크레덴셜 관리
- 공공 클라우드: CNAPP으로 IaC(Terraform) 코드의 잘못된 보안그룹 설정 자동 탐지

## 출제 포인트

- 4C 모델(Code→Container→Cluster→Cloud) 계층적 보안
- CNAPP = CSPM + CWPP의 통합 역할
- 컨테이너 공급망 보안(SBOM, 이미지 서명)의 중요성

## 연관 개념

- [제로 트러스트]({{< relref "/docs/06_InfoSecurity/03_InfoProtection/zero-trust-maturity-model" >}}) — 클라우드 네이티브 보안의 철학적 기반
- [DevSecOps]({{< relref "/docs/02_SoftwareEngineering/01_Dev_Methodology/devsecops" >}}) — Shift-Left 보안의 방법론
- [공급망 보안]({{< relref "/docs/06_InfoSecurity/02_SecuritySystems/supply-chain-security" >}}) — 컨테이너 이미지 공급망

## 참고 기출

- 137회 1교시 12번 (PECS)
