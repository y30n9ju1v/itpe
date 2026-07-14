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
| **정의** | 인가 주체만 보호자원 접근 제한 → 4대 접근통제(M·D·R·A) + MAC 커널강제구현·참조모니터 중재하는 Secure OS — 군사·공공·금융 고보안, 내부자위협·권한탈취 대응 |
| **키워드** | Subject/Object/Permission, Bell-LaPadula/BiBa, XACML, TCB, 참조모니터, SELinux/AppArmor, MLS(다중등급보안) |
| **개념도** | **[ Secure OS의 참조모니터 기반 접근중재 ]**<br>`[ 주체(Subject, 프로세스/사용자) ] ──접근요청──➔ [ 참조모니터(Reference Monitor) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (보안정책DB의 레이블 대조, 우회 불가)`<br>`Bell-LaPadula 검사: No Read Up(상위등급 객체 읽기금지) / No Write Down(하위등급 객체 쓰기금지)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 객체(Object, 파일/DB) ] ← 허용 시에만 접근 (TCB 내 보안커널이 전 과정 강제)` |
| **구성요소** | 1. **MAC**: 시스템/관리자 보안레이블 강제통제, Bell-LaPadula(기밀성)·BiBa(무결성), 군사·기밀시스템<br>2. **DAC**: 자원소유자 권한부여(Unix chmod), 유연-관리복잡성↑<br>3. **RBAC**: 역할(Role)단위 권한부여, 역할분리(SoD)→권한남용방지, 기업ERP·병원<br>4. **ABAC**: 위치·시간·디바이스 속성조합 → 정책엔진 동적판단, XACML, 클라우드·제로트러스트<br>5. **Secure OS 4요소**: TCB(최소HW/SW집합)-보안커널(참조모니터 구현)-참조모니터(모든접근 중재·우회불가)-보안정책DB(주체-객체 규칙)<br>6. **대표구현**: SELinux(NSA, Android), AppArmor(Ubuntu, 경로기반)<br>7. **MLS(다중등급보안)**: Bell-LaPadula → 실등급체계(TS-S-C-U, 국내 I·II·III급·대외비) 적용, 단일시스템 다등급 동시처리. 자산식별→등급정의→정책수립→기술통제(SELinux/Trusted Solaris)→감사검증 5단계, Oracle Label Security 확장 |
| **비교** | **DAC (임의접근통제)**<br>- 통제주체: 자원소유자 개인판단<br>- 적용환경: 일반OS 파일시스템, 유연하나 과도권한부여 위험<br><br>**MAC (강제접근통제, Secure OS 핵심)**<br>- 통제주체: 시스템 보안레이블 강제(소유자도 변경불가)<br>- 적용환경: 군사·금융 고보안, 참조모니터 우회불가 중재 |
| **차별화** | **MAC+ABAC 융합 전략 (클라우드·제로트러스트 대응)**<br>1. **정적등급(MAC)+동적맥락(ABAC) 이중게이트**: MAC 보안등급 기본필터 + ABAC 위치·디바이스·행동이력 실시간반영 → Never Trust, Always Verify<br>2. **리스크기반 동적정책**: AI/ML 위험도 실시간산정 → 고위험 시 MFA추가·접근범위축소 자동적용, Continuous Verification<br>3. **Secure OS 감사↔SIEM 연동**: 참조모니터 통과 접근결정 → 감사로그·SIEM 연계 → MAC위반·ABAC이상행위 실시간탐지 |
