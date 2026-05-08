---
title: "SIL과 HIL 테스팅 (Software/Hardware-in-the-Loop)"
date: 2026-05-09T07:56:10+09:00
tags: ["pecs", "시스템소프트웨어및응용소프트웨어", "IT품질테스트", "SIL", "HIL", "임베디드", "자동차소프트웨어", "V모델"]
draft: false
exam_pecs: "137회"
---

## 개요

SIL(Software-in-the-Loop)과 HIL(Hardware-in-the-Loop)은 임베디드·실시간 제어 시스템(자동차, 항공, 로봇)에서 실제 환경 대신 시뮬레이션 또는 실제 하드웨어를 루프에 포함하여 검증하는 테스팅 기법이다. V-모델 개발 프로세스의 통합 테스트·시스템 테스트 단계에 위치한다.

## 핵심 내용

### V-모델 내 위치

```
요구사항 ─────────────────────── 인수 테스트
  시스템 설계 ─────────── 시스템 테스트 (HIL)
    SW 설계 ─────── 통합 테스트 (SIL)
      구현 ─── 단위 테스트
```

### SIL vs HIL 비교

| 구분 | SIL | HIL |
|------|-----|-----|
| **정의** | SW와 가상 환경 모델을 PC에서 함께 실행 | 실제 ECU(제어 하드웨어)를 실시간 시뮬레이터에 연결 |
| **하드웨어** | 불필요 (순수 소프트웨어 시뮬레이션) | 실제 ECU/제어기 필요 |
| **속도** | 빠름 (비실시간) | 실시간(Hard Real-Time) |
| **비용** | 낮음 | 중간~높음 |
| **목적** | SW 로직 검증, 알고리즘 확인 | HW-SW 통합, 실시간 응답 검증 |
| **적용 시점** | 프로토타입 초기 | 양산 직전 |
| **도구** | MATLAB/Simulink, dSPACE SimulationDesk | dSPACE SCALEXIO, NI PXI |

### MIL (Model-in-the-Loop)과의 비교

MIL → SIL → HIL → PIL(Processor-in-the-Loop) → 실차 검증 순서로 점진적 검증.

| 단계 | 내용 |
|------|------|
| **MIL** | 제어 알고리즘 모델 자체 시뮬레이션 |
| **SIL** | 생성된 C코드를 PC에서 가상 환경과 실행 |
| **PIL** | 타겟 프로세서에서 코드 실행, 환경은 시뮬레이션 |
| **HIL** | 실제 ECU + 실시간 플랜트 시뮬레이터 |

## 실무 적용 예시

- 자율주행: ADAS 제어 로직을 SIL로 가상 주행 시나리오 수만 km 검증 후, HIL로 실제 ECU의 응답 시간·CAN 통신 검증
- 항공: 비행 제어 소프트웨어(FCS) HIL 테스트로 FAA 인증 지원

## 출제 포인트

- SIL은 SW만, HIL은 실제 HW 포함 — 핵심 차이
- V-모델 내 위치 (SIL: 통합 테스트, HIL: 시스템 테스트)
- MIL → SIL → HIL 순서의 점진적 검증 논리

## 연관 개념

- [임베디드 OS]({{< relref "/docs/04_ComputerSystems/03_SystemSoftware/01_OS_Embedded" >}}) — SIL/HIL의 대상 소프트웨어
- [SW 품질 및 테스트]({{< relref "/docs/02_SoftwareEngineering/05_SW_Quality" >}}) — V-모델과 테스트 유형
- [ADAS/자율주행]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/adas-ads-autonomous-driving" >}}) — SIL/HIL의 주요 적용 도메인

## 참고 기출

- 137회 1교시 6번 (PECS)
