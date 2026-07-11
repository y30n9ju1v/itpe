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
| **정의** | "결코 신뢰하지 말고 항상 검증하라"는 기조 하에 모든 사용자·단말을 상시 인증하는 **제로 트러스트 모델**과, 자원을 외부 노출 없이 논리적으로 숨기는 **SDP(ZTNA) 네트워크 보안 기술** |
| **키워드** | NIST SP 800-207 (PE/PA/PEP), SDP, SPA (Single Packet Authorization), 마이크로 세그멘테이션, 다중요소인증 (MFA) |
| **개념도** | **[ NIST SP 800-207 제로 트러스트 논리 아키텍처 ]**<br>`[ 사용자 / 단말 ] ──────────────────➔ [ PEP (Policy Enforcement Point) ] ──➔ [ 기업 핵심 리소스 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲ (동적 데이터 플레인 통제)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (제어 평면 Control Plane)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`[ 정책 엔진 (PE) ] ➔ [ 정책 관리자 (PA) ] ───┘`<br>&nbsp;&nbsp;&nbsp;&nbsp;` (상태 평가)            (세션 형성/종료 명령)` |
| **구성요소** | 1. **정책 엔진 (PE)**: 신원 정보, 기기 보안 규정 준수 여부, 이상 징후를 다차원 분석하여 접근 권한을 결정하는 브레인<br>2. **정책 관리자 (PA)**: PE의 결정을 수신하여 단말과 게이트웨이 간의 세션을 연결하는 암호화 통신 터널을 생성/차단 지시<br>3. **정책 실행 지점 (PEP)**: 리소스 전면에 배치되어 실제 트래픽을 통과시키거나 차단하는 게이트웨이 장치<br>4. **SPA (Single Packet Authorization)**: SDP 단말이 최초 연결 시 무단 스캔을 방지하도록 1개의 암호화된 노크(Knock) 패킷을 보내 신원을 검증받은 후 포트를 오픈하는 침투 차단 기술 (Black Cloud 구현) |
| **비교** | **경계 기반 보안 (전통적 VPN)**<br>- **신뢰 기준**: 물리적 망(내부 네트워크 IP) 진입 시 내부 전체 신뢰<br>- **위험 전파**: 내부망 침투 시 횡적 이동(Lateral Movement)을 통해 전사 DB 유실 위험 노출<br><br>**제로 트러스트 보안 (SDP / ZTNA)**<br>- **신뢰 기준**: 단 한 번도 전폭 신뢰하지 않으며 자원 요청 시마다 실시간 개별 검증<br>- **위험 전파**: 미세 세그멘테이션으로 격리되어 해킹 발생 시 해당 특정 가상 VM 범위 내 피해 국한 |
| **차별화** | **기존 기업 인프라의 제로 트러스트 전환 3대 실무 로드맵**<br>1. **단계적 ZTNA (Zero Trust Network Access) 도입**: 레거시 VPN 장비를 급격히 걷어내는 오버헤드를 줄이기 위해, (1) 사외 접속이 잦은 재택근무 부서 중심의 ZTNA 1차 시범 도입, (2) 점진적 클라우드 리소스 및 온프레미스 연동 확장 전략 적용.<br>2. **MFA(다중요소인증) 및 지속적 컨텍스트 분석**: ID/PW 유출에 따른 도용을 방지하기 위해 스마트폰 생체 정보(FIDO2)를 결합한 MFA를 의무화하고, 접속 도중에도 IP 급변이나 이상 트래픽 발생 시 세션을 즉시 해제시키는 실시간 행동 모니터링 연동.<br>3. **네트워크 마이크로 세그멘테이션 (Micro-segmentation)**: 내부 방화벽 설정을 가상화 수준까지 세분화하여 각 가상 서버(Pod/VM) 간의 불필요한 TCP 통신 포트를 원천 차단함으로써 해커가 침투하더라도 옆 서버로 넘어가지 못하도록 격리. |
