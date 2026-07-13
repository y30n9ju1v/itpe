---
title: "접근통제 정책(MAC/DAC/RBAC/ABAC)과 보안운영체제(Secure OS)"
date: 2026-07-11T11:38:05+09:00
tags: ["보안", "접근통제", "MAC", "DAC", "RBAC", "ABAC", "SecureOS", "SELinux", "서브노트"]
draft: false
---

# 접근통제 정책(MAC/DAC/RBAC/ABAC)과 보안운영체제(Secure OS) 서브노트

> **두음 머리에 박기 🧠**
> - **식·인·인** (접근통제 3단계 절차: **식**별 Identification → **인**증 Authentication → **인**가 Authorization)
> - **M·D·R·A** (4대 접근통제 정책: **M**AC(시스템강제) - **D**AC(소유자결정) - **R**BAC(역할기반) - **A**BAC(속성기반동적))
> - **T·보·참·정** (Secure OS 4대 구성요소: **T**CB, **보**안커널, **참**조모니터, **정**책DB)
> - **No R·No W** (Bell-LaPadula 2대 규칙: **No** **R**ead Up-하향읽기금지아님·상향읽기금지, **No** **W**rite Down-하향쓰기금지)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **접근통제 정책 4유형(MAC/DAC/RBAC/ABAC)과 보안운영체제(Secure OS, Bell-LaPadula)** |
| **정의** | 인가된 주체만 보호 자원에 접근하도록 제한하는 4대 **접근통제 정책(M·D·R·A)**과, 이 중 MAC을 커널 수준에서 강제 구현하여 참조모니터로 모든 접근을 중재하는 **보안운영체제(Secure OS)** — 군사·공공·금융 등 고보안 환경에서 내부자 위협·권한탈취에 대응 |
| **키워드** | Subject/Object/Permission, Bell-LaPadula/BiBa, XACML, TCB, 참조모니터, SELinux/AppArmor, MLS(다중등급보안) |
| **개념도** | **[ Secure OS의 참조모니터 기반 접근중재 ]**<br>`[ 주체(Subject, 프로세스/사용자) ] ──접근요청──➔ [ 참조모니터(Reference Monitor) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (보안정책DB의 레이블 대조, 우회 불가)`<br>`Bell-LaPadula 검사: No Read Up(상위등급 객체 읽기금지) / No Write Down(하위등급 객체 쓰기금지)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 객체(Object, 파일/DB) ] ← 허용 시에만 접근 (TCB 내 보안커널이 전 과정 강제)` |
| **구성요소** | 1. **MAC**: 시스템/관리자가 보안레이블로 강제 통제, Bell-LaPadula(기밀성)·BiBa(무결성) 모델, 군사·기밀시스템<br>2. **DAC**: 자원 소유자가 권한 부여(Unix chmod), 유연하나 관리 복잡성 높음<br>3. **RBAC**: 역할(Role) 단위로 권한 부여, 역할분리(SoD)로 권한남용 방지, 기업ERP·병원<br>4. **ABAC**: 위치·시간·디바이스 등 속성 조합으로 정책엔진이 동적 판단, XACML 정책언어, 클라우드·제로트러스트 기반<br>5. **Secure OS 4요소**: TCB(보안정책 강제 최소 HW/SW집합), 보안커널(TCB핵심, 참조모니터 구현), 참조모니터(모든 접근 중재·우회불가), 보안정책DB(주체-객체 접근규칙)<br>6. **대표 구현**: SELinux(NSA개발, Android 탑재), AppArmor(Ubuntu, 경로기반)<br>7. **MLS(Multi-Level Security, 다중등급보안)**: Bell-LaPadula를 실제 등급 체계(Top Secret-Secret-Confidential-Unclassified, 국내는 I급·II급·III급 비밀·대외비)에 적용해 서로 다른 등급 정보를 단일 시스템에서 동시 처리하는 MAC의 실무 구현체. 자산식별·등급정의·접근제어정책수립·기술적통제구현(SELinux, Trusted Solaris)·감사및검증의 5단계로 도입하며, Oracle Label Security 등 보안 레이블 기반 DBMS로도 확장 |
| **비교** | **DAC (임의접근통제)**<br>- **통제 주체**: 자원 소유자 개인 판단<br>- **적용 환경**: 일반 OS 파일시스템, 유연하나 소유자 실수 시 과도한 권한 부여 위험<br><br>**MAC (강제접근통제, Secure OS 핵심)**<br>- **통제 주체**: 시스템이 보안레이블로 강제(소유자도 변경 불가)<br>- **적용 환경**: 군사·금융 고보안 시스템, 참조모니터가 모든 접근을 우회불가하게 중재 |
| **차별화** | **동적 환경(클라우드·제로트러스트) 대응을 위한 MAC+ABAC 융합 전략**<br>1. **정적 등급(MAC) + 동적 맥락(ABAC) 이중 게이트**: MAC의 강제적 보안등급을 기본 필터로 유지하면서, ABAC으로 사용자 위치·디바이스 상태·행동 이력을 실시간 반영하여 "Never Trust, Always Verify"를 구현.<br>2. **리스크 기반 동적 정책 운영**: AI/ML로 접근요청의 위험도를 실시간 산정하고, 위험도가 높으면 MFA 추가요구·접근범위 축소를 자동 적용하는 Continuous Verification 체계 구축.<br>3. **Secure OS 감사기능과 SIEM 연동**: 참조모니터를 통과한 모든 접근 결정을 감사로그로 남기고 SIEM에 연계하여, MAC 정책 위반 시도나 ABAC 이상행위를 실시간 탐지·대응. |
