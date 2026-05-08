---
title: "공격 표면과 측면 이동 (Attack Surface & Lateral Movement)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "정보보안", "보안시스템", "공격표면", "측면이동", "사이버위협", "APT"]
draft: false
exam: "138회"
---

## 개요

공격 표면(Attack Surface)은 공격자가 시스템에 침투·영향을 미칠 수 있는 모든 진입점의 총합이며, 측면 이동(Lateral Movement)은 초기 침투 후 내부 네트워크에서 권한과 접근 범위를 확대하는 공격 기법이다. IT 인프라 확장으로 두 개념 모두 중요성이 급증했다.

## 핵심 내용

### 공격 표면 (Attack Surface)

**공격 벡터(Attack Vector)**: 공격이 실제로 수행되는 경로나 수단

| 공격 표면 유형 | 예시 |
|----------------|------|
| **네트워크 공격 표면** | 오픈 포트, 취약한 프로토콜, API 엔드포인트 |
| **소프트웨어 공격 표면** | 취약한 코드, 오래된 라이브러리, 인증 미비 |
| **물리적 공격 표면** | 접근 가능한 USB 포트, 서버실 접근 |
| **인적 공격 표면** | 피싱, 소셜 엔지니어링 대상 직원 |
| **클라우드/SaaS** | 잘못된 버킷 권한, API 키 노출 |

**공격 표면 최소화(Attack Surface Reduction)**:
- 불필요한 서비스·포트 비활성화
- 제로 트러스트(Zero Trust) 아키텍처 도입
- 정기적인 취약점 스캐닝

### 측면 이동 (Lateral Movement)

**단계별 메커니즘**:

```
1. 초기 접근(Initial Access)
   → 피싱, 취약점 익스플로잇, VPN 자격증명 도용

2. 내부 탐색(Discovery)
   → 네트워크 스캔, 서비스 열거 (nmap, BloodHound)

3. 자격증명 수집(Credential Access)
   → Mimikatz로 메모리에서 해시·패스워드 추출

4. 권한 상승(Privilege Escalation)
   → 취약점 활용, 잘못된 권한 설정 악용

5. 측면 이동 실행(Lateral Movement)
   → Pass-the-Hash, Pass-the-Ticket, RDP, WMI 활용

6. 지속성 확보(Persistence)
   → 백도어, 예약 작업, 레지스트리 등록

7. 목표 달성(Impact)
   → 데이터 유출, 랜섬웨어 배포
```

**주요 측면 이동 기법**:
- **Pass-the-Hash (PtH)**: 평문 암호 없이 NTLM 해시로 인증
- **Pass-the-Ticket (PtT)**: Kerberos 티켓 재사용
- **RDP (Remote Desktop)**: 탈취한 자격증명으로 원격 접속
- **WMI/PowerShell Remoting**: 원격 명령 실행

### 대응 방안

- **네트워크 세분화(Micro-segmentation)**: 측면 이동 경로 차단
- **특권 계정 관리(PAM)**: 관리자 계정 최소화·모니터링
- **EDR**: 엔드포인트 행위 탐지
- **UEBA**: 비정상 계정 행위 탐지

## 출제 포인트

- 공격 표면과 공격 벡터를 구분하여 정의
- 측면 이동의 7단계 메커니즘을 순서대로 서술
- PtH, PtT 등 주요 기법 명칭 포함
- 대응 방안을 네트워크·계정·탐지 측면으로 분류

## 연관 개념

- [TTPs]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/ttps" >}}) — 측면 이동은 TTPs의 대표적 기법
- [랜섬웨어/RaaS]({{< relref "/docs/06_InfoSecurity/02_SecuritySystems/ransomware-raas" >}}) — 측면 이동 후 랜섬웨어 배포
- ISMS — 관리적 보안 대응 체계

## 참고 기출

- 138회 3교시 5번
