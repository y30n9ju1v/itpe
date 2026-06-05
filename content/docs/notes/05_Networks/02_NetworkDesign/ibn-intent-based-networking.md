---
title: "IBN (Intent-Based Networking)"
date: 2026-05-09T00:00:00+09:00
tags: ["peim", "컴퓨터시스템및정보통신", "네트워크설계", "IBN", "의도기반네트워킹", "SDN", "자율네트워크"]
draft: false
exam_peim: ["135회"]
---

## 개요

IBN(Intent-Based Networking)은 네트워크 관리자가 '무엇을 원하는가(의도)'를 선언적으로 정의하면, 시스템이 자동으로 네트워크를 설정·최적화·검증하는 자율 네트워크 패러다임이다.

## 핵심 내용

### IBN의 개념

- 기존 네트워크: 관리자가 CLI/장비별로 직접 설정 (명령형, Imperative)
- IBN: 비즈니스 의도(Intent)를 선언 → 시스템이 자동 변환·적용 (선언형, Declarative)
- 핵심: 의도 → 정책 변환 → 자동 배포 → 검증 → 폐쇄 루프(Closed-loop) 운영

### IBN 4대 기능

| 기능 | 설명 |
|------|------|
| **의도 변환(Translation)** | 비즈니스 의도를 네트워크 정책으로 자동 변환 |
| **자동 구성(Activation)** | 정책을 네트워크 장비에 자동 배포 |
| **인식(Awareness)** | 네트워크 상태를 실시간 모니터링 |
| **보증(Assurance)** | 의도와 실제 동작 일치 여부 지속 검증, 편차 발생 시 자동 수정 |

### IBN 아키텍처

```
비즈니스 의도 (Intent Layer)
        ↓
정책 엔진 / 번역기 (Translation Engine)
        ↓
SDN 컨트롤러 (Controller Layer)
        ↓
네트워크 인프라 (Data Plane)
        ↑ (Telemetry / 상태 피드백)
```

### SDN과의 비교

| 구분 | SDN | IBN |
|------|-----|-----|
| 추상화 수준 | 데이터/제어 평면 분리 | 의도 수준 추상화 |
| 설정 방식 | API 기반 수동 설정 | 의도 선언 → 자동 설정 |
| 자동화 | 제한적 | 폐쇄 루프 자동화 |
| AI 활용 | 선택적 | 핵심 요소 |

## 실무 적용 예시

대형 데이터센터에서 "특정 애플리케이션에 99.9% SLA를 보장하라"는 의도를 입력하면, IBN이 자동으로 트래픽 우선순위·경로·대역폭을 설정하고 지속 모니터링한다.

## 출제 포인트

- IBN의 4대 기능: 변환·자동구성·인식·보증
- 폐쇄 루프(Closed-loop) 운영 메커니즘
- SDN 대비 IBN의 차별점: 의도 기반 선언형 접근

## 연관 개념

- [네트워크 설계]({{< relref "/docs/notes/05_Networks/02_NetworkDesign/igp-egp-routing" >}}) — 라우팅 정책과 연계
- [멀티클라우드]({{< relref "/docs/notes/04_ComputerSystems/04_OS_Virtualization/multi-cloud" >}}) — 클라우드 환경 네트워크 자동화

## 참고 기출

- 135회 1교시 4번 (PEIM)
