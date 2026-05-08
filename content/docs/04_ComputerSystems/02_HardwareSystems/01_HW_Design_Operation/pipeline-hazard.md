---
title: "파이프라인 해저드 (Pipeline Hazard)"
date: 2026-05-09T08:09:13+09:00
tags: ["pecs", "하드웨어시스템", "HW설계운영", "파이프라인", "해저드", "CPU아키텍처"]
draft: false
exam_pecs: ["135회"]
---

## 개요

파이프라인 해저드(Pipeline Hazard)는 명령어 파이프라인 실행 중 다음 명령어를 예정된 클록에 실행하지 못하게 하는 상황이다. 구조적·데이터·제어 해저드의 3가지 유형이 있으며, 각각 다른 해결책을 적용한다.

## 핵심 내용

### 파이프라인 기본 구조 (5단계)

```
IF → ID → EX → MEM → WB
(인출) (해독) (실행) (메모리) (기록)
```

여러 명령어가 서로 다른 단계를 동시에 수행 → 스루풋(Throughput) 향상

### 해저드 유형별 발생 원인

#### 1. 구조적 해저드 (Structural Hazard)

**원인**: 두 명령어가 동일한 하드웨어 자원을 동시에 사용하려 할 때
- 예) IF(인출)와 MEM(메모리 접근)이 동일 메모리 버스 사용 충돌

**해결 방법**:
- 명령어 캐시(I-Cache)와 데이터 캐시(D-Cache) 분리 (하버드 아키텍처)
- 파이프라인 스톨(Bubble 삽입)

#### 2. 데이터 해저드 (Data Hazard)

**원인**: 이전 명령어의 결과를 후속 명령어가 아직 기록되기 전에 사용하는 의존성

| 유형 | 설명 | 예시 |
|------|------|------|
| RAW (Read After Write) | 쓰기 전 읽기 (가장 빈번) | ADD R1, R2; SUB R3, R1 |
| WAR (Write After Read) | 읽기 전 쓰기 | 비순차 실행 시 발생 |
| WAW (Write After Write) | 쓰기 후 쓰기 | 비순차 실행 시 발생 |

**해결 방법**:
- **포워딩(Forwarding/Bypassing)**: EX 단계 결과를 즉시 다음 명령의 입력으로 전달 (하드웨어)
- **파이프라인 스톨**: 데이터가 준비될 때까지 NOP(Bubble) 삽입
- **코드 재배열(Reordering)**: 컴파일러가 독립 명령어를 사이에 배치

#### 3. 제어 해저드 (Control Hazard)

**원인**: 분기(Branch) 명령어의 결과(분기 여부, 목적지)가 확정되기 전에 후속 명령어를 인출

**해결 방법**:
| 방법 | 설명 | 비고 |
|------|------|------|
| **분기 예측(Branch Prediction)** | 정적(항상 미분기)/동적(이력 기반) 예측 | 현대 CPU 기본 기법 |
| **지연 슬롯(Delay Slot)** | 분기 후 1개 명령은 항상 실행 | RISC 아키텍처 활용 |
| **투기적 실행(Speculative Execution)** | 예측 경로를 먼저 실행, 틀리면 폐기 | 고성능, 보안 취약 (Spectre) |
| **파이프라인 플러시** | 잘못된 명령어 버리고 재시작 | 단순, 성능 저하 |

## 출제 포인트

- 3가지 해저드 유형과 각 원인을 명확히 구분
- 데이터 해저드: RAW가 가장 일반적, 포워딩으로 해결
- 제어 해저드: 분기 예측 성능이 CPU 성능에 직접 영향
- 투기적 실행의 보안 이슈: Spectre/Meltdown 취약점과 연계

## 연관 개념

- [MMU]({{< relref "/docs/04_ComputerSystems/05_Algorithms/mmu-memory-management-unit" >}}) — 메모리 접근 단계의 해저드
- [캐시 메모리]({{< relref "/docs/04_ComputerSystems/05_Algorithms/cache-memory" >}}) — I-Cache/D-Cache 분리로 구조적 해저드 해결
- [알고리즘 복잡도]({{< relref "/docs/04_ComputerSystems/05_Algorithms/big-o-notation" >}}) — 파이프라인 성능 분석

## 참고 기출

- 135회 4교시 6번 (PECS)
