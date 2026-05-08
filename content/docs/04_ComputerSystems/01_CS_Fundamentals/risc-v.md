---
title: "RISC-V"
date: 2026-05-09T07:56:10+09:00
tags: ["pecs", "컴퓨터기초이론", "컴퓨터설계", "RISC-V", "ISA", "오픈소스하드웨어", "RISC"]
draft: false
exam: "137회"
---

## 개요

RISC-V는 UC Berkeley에서 2010년 공개한 오픈소스 명령어 집합 구조(ISA, Instruction Set Architecture)다. 특허·라이선스 비용 없이 누구나 자유롭게 칩을 설계·제조·판매할 수 있어, ARM·x86의 대안으로 부상하고 있다.

## 핵심 내용

### ISA 비교

| 구분 | x86 (Intel/AMD) | ARM | RISC-V |
|------|----------------|-----|--------|
| **방식** | CISC | RISC | RISC |
| **라이선스** | 폐쇄 (독점) | 로열티 필요 | 완전 오픈소스 |
| **명령어 수** | 수천 개 (복잡) | 수백 개 | 47개 기본 (모듈식) |
| **주요 사용처** | PC, 서버 | 스마트폰, IoT | IoT, AI칩, RISC-V 서버 |
| **생태계** | 성숙 | 성숙 | 성장 중 |

### RISC-V 주요 특징

- **모듈식 설계**: 기본(I, M, A, F, D)에 확장 모듈 선택적 추가
  - `I`: 기본 정수 연산, `M`: 곱셈/나눗셈, `F`: 단정도 부동소수점, `D`: 배정도
- **32/64/128비트**: 다양한 워드 길이 지원 (RV32I, RV64I, RV128I)
- **비특권-특권 분리**: U/S/M 세 가지 권한 레벨

### RISC vs CISC

| 구분 | RISC | CISC |
|------|------|------|
| 명령어 | 단순·고정 길이 | 복잡·가변 길이 |
| 실행 | 단일 클럭 목표 | 다수 클럭 |
| 파이프라인 | 용이 | 어려움 |
| 메모리 | Load/Store 구조 | 메모리 직접 연산 |

### 활용 동향

- **IoT/임베디드**: SiFive, GigaDevice RISC-V MCU
- **AI 가속기**: 중국 화웨이·알리바바 RISC-V 기반 NPU
- **서버**: Ventana, Eswin의 RISC-V 서버 칩
- **국내**: 삼성·SK하이닉스 내부 컨트롤러에 채택

## 출제 포인트

- RISC-V의 오픈소스 ISA 특성과 라이선스 자유도
- RISC vs CISC 구조적 차이
- ARM 대비 RISC-V의 장단점 (생태계 미성숙 vs 비용 자유)

## 연관 개념

- [HBM]({{< relref "/docs/04_ComputerSystems/06_InfraArchitecture/high-bandwidth-memory" >}}) — RISC-V 기반 메모리 컨트롤러
- [GPU/TPU]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/gpu-tpu" >}}) — AI 프로세서와의 ISA 비교
- 임베디드 시스템 — RISC-V의 주요 적용 도메인

## 참고 기출

- 137회 1교시 13번 (PECS)
