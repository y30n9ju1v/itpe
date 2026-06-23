---
title: "파듀(Purdue) 모델 — ICS/OT 보안 참조 모델"
date: 2026-06-23T20:29:59+09:00
tags: ["보안", "파듀모델", "ICS보안", "OT보안", "SCADA", "핵토200"]
topic_no1: 24
topic_no2: 4
topic_large: "최신 보안 기술"
topic_small: "파듀(Purdue) 모델"
exam_ref: "125"
exam_type: "관리"
question_no: 4
---

## 문제

산업제어시스템(ICS)과 IT 환경의 통합이 가속화되면서 OT(Operational Technology) 보안의 중요성이 높아지고 있다. ICS 보안의 참조 모델인 파듀(Purdue) 모델에 대해 다음 물음에 답하시오.
가. 파듀 모델의 개요 및 계층 구조
나. 파듀 모델의 보안 위협과 대응 방안
다. IT·OT 통합 환경의 보안 고려사항

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 최신 보안 기술 |
| 토픽(소) | 파듀(Purdue) 모델 |
| 출제 | 125회 |
| 유형 | 관리 |
| 번호 | 4 |

## 해설

### 1. 파듀(Purdue) 모델 개요

- **정의**: ICS(산업제어시스템) 환경의 네트워크 계층을 6단계로 구분하여 IT·OT 영역의 보안 경계를 정의한 참조 모델
- **출처**: Purdue University + ISA-95 표준 → ICS 보안 표준(NIST SP 800-82, ISA/IEC 62443)의 기반

### 2. 파듀 모델 계층 구조

```
Level 5: Enterprise Zone (기업 IT 네트워크)
          ↑↓  [DMZ - 방화벽]
Level 4: Site Business Planning & Logistics (ERP, MES)
          ↑↓  [방화벽]
Level 3: Site Manufacturing Operations & Control (MES, 히스토리안)
          ↑↓  [방화벽 / 단방향 게이트웨이]
Level 2: Area Supervisory Control (SCADA, HMI)
Level 1: Basic Control (PLC, RTU, DCS)
Level 0: Physical Process (센서, 액추에이터, 물리적 장비)
```

| 계층 | 구성 | 보안 목표 |
|------|------|-----------|
| **L5 기업망** | IT 네트워크, 인터넷 | 외부 위협 차단 |
| **L4 사업 계획** | ERP, MES | IT 서비스 보안 |
| **L3 운영 제어** | 제조 운영 시스템 | IT/OT 경계 보안 |
| **L2 감시 제어** | SCADA, HMI | OT 시스템 가용성 |
| **L1 기본 제어** | PLC, RTU | 제어 명령 무결성 |
| **L0 물리 공정** | 센서, 액추에이터 | 물리적 안전 |

### 3. 보안 위협과 대응 방안

| 위협 | 사례 | 대응 |
|------|------|------|
| **외부 침투** | L5→L4 APT 공격 (Stuxnet, TRITON) | DMZ 구축, 산업용 방화벽 |
| **측면 이동** | IT→OT 내부 전파 | 계층 간 방화벽, 망분리 |
| **USB 매개 감염** | OT 망 USB 악성코드 유입 | USB 접속 통제, 화이트리스팅 |
| **레거시 취약점** | 패치 불가 PLC/SCADA | 가상 패치(IPS), 네트워크 격리 |
| **물리 공격** | 물리적 장비 훼손 | CCTV, 출입 통제, 물리 보안 |

### 4. IT·OT 통합 환경 보안 고려사항

| 고려사항 | 내용 |
|----------|------|
| **가용성 최우선** | OT는 CIA 중 Availability 최우선 (공정 중단 = 인명 피해 가능) |
| **실시간 요구사항** | 보안 솔루션이 OT 실시간 제어 지연을 유발하지 않아야 함 |
| **레거시 호환** | PLC·RTU는 수명 15~30년, 신규 보안 에이전트 설치 불가 → 네트워크 레벨 보호 |
| **OT 전용 보안** | IT 보안 솔루션을 OT에 그대로 적용 금지 (Claroty, Dragos 등 OT 전용 솔루션) |
| **ISA/IEC 62443** | OT 보안 국제 표준 준수 |

### 실무 제언

**스마트 팩토리 전환 시 파듀 모델 적용**
- **챌린지**: 스마트 팩토리 구축 시 공정 데이터를 클라우드(L5)로 전송하면서 기존 파듀 모델의 계층 경계가 붕괴되고 OT 시스템이 인터넷에 직간접 노출된다.
- **제언**: L3-L4 경계에 단방향 데이터 다이오드(Data Diode)를 설치하여 공정 데이터는 IT 방향으로만 전송하고, OT 영역에 Dragos/Claroty 같은 ICS 전용 가시성 솔루션을 배치하여 제어망 이상 패턴을 탐지하는 OT-IT 통합 보안 아키텍처를 구현해야 한다.
