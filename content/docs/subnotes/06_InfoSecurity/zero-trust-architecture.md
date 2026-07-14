---
title: "제로 트러스트 보안 모델 및 ZTNA"
date: 2026-07-11T11:19:35+09:00
tags: ["보안", "제로트러스트", "SDP", "ZTNA", "NIST800-207", "SPA", "서브노트"]
draft: false
---

# 제로 트러스트 보안 모델 및 ZTNA 서브노트

> **두음 머리에 박기 🧠**
> - **지·최·기** (제로 트러스트 3대 핵심 원칙: **지**속적 검증, **최**소 권한 적용, 침해 발생 **기**해(위험) 가정)
> - **PE·PA·PEP** (NIST SP 800-207 제어 컴포넌트: 정책결정두뇌 **PE** Policy Engine, 연결통제명령 **PA** Policy Administrator, 물리실행 게이트웨이 **PEP** Policy Enforcement Point)
> - **클·컨·게** (SDP의 3대 구성원: 전용 프로그램 **클**라이언트 Client, 신뢰 판단 **컨**트롤러 Controller, 내부 자원 관문 **게**이트웨이 Gateway)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **제로 트러스트 (Zero Trust) 보안 모델 및 소프트웨어 정의 경계 (SDP, Software Defined Perimeter)** |
| **정의** | "Never Trust, Always Verify" 기조 → 모든 사용자·단말 상시인증 제로트러스트모델 + 자원 외부노출없이 논리적 은닉하는 SDP(ZTNA) 네트워크보안기술 |
| **키워드** | NIST SP 800-207 (PE/PA/PEP), SDP, SPA (Single Packet Authorization), 마이크로 세그멘테이션, 다중요소인증 (MFA) |
| **개념도** | **[ NIST SP 800-207 제로 트러스트 논리 아키텍처 ]**<br>`[ 사용자 / 단말 ] ──────────────────➔ [ PEP (Policy Enforcement Point) ] ──➔ [ 기업 핵심 리소스 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲ (동적 데이터 플레인 통제)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (제어 평면 Control Plane)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`[ 정책 엔진 (PE) ] ➔ [ 정책 관리자 (PA) ] ───┘`<br>&nbsp;&nbsp;&nbsp;&nbsp;` (상태 평가)            (세션 형성/종료 명령)` |
| **구성요소** | 1. **PE(정책엔진)**: 신원·기기준수여부·이상징후 다차원분석 → 접근권한결정 (브레인)<br>2. **PA(정책관리자)**: PE결정 수신 → 단말-게이트웨이 세션 암호화터널 생성/차단 지시<br>3. **PEP(정책실행지점)**: 리소스전면 배치 → 실트래픽 통과/차단 게이트웨이장치<br>4. **SPA(Single Packet Authorization)**: SDP단말 최초연결 시 암호화노크(Knock)패킷 1개 → 신원검증 후 포트오픈, 무단스캔방지 (Black Cloud 구현) |
| **비교** | **경계기반 보안 (전통적 VPN)**<br>- 신뢰기준: 내부망IP 진입 시 전체신뢰<br>- 위험전파: 내부망침투 → 횡적이동(Lateral Movement) → 전사DB 유실위험<br><br>**제로트러스트 보안 (SDP/ZTNA)**<br>- 신뢰기준: 전폭신뢰 없음, 요청 시마다 실시간개별검증<br>- 위험전파: 미세세그멘테이션 격리 → 해킹 시 특정VM 범위내 국한 |
| **차별화** | **기존 인프라 제로트러스트 전환 3대 실무 로드맵**<br>1. **단계적 ZTNA 도입**: 레거시VPN 급격제거 오버헤드 완화 → (1)재택근무부서 1차시범 (2)클라우드·온프레미스 점진확장<br>2. **MFA+지속적 컨텍스트분석**: ID/PW유출 도용방지 → FIDO2결합 MFA의무화, IP급변·이상트래픽 시 세션즉시해제 실시간모니터링<br>3. **네트워크 마이크로세그멘테이션**: 가상화수준 세분화 → Pod/VM간 불필요TCP포트 원천차단, 침투해도 옆서버 이동차단 |
