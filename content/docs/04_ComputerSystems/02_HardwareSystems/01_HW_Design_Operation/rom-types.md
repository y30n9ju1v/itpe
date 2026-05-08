---
title: "ROM (Read Only Memory) 종류"
date: 2026-05-09T07:34:17+09:00
tags: ["pecs", "컴퓨터시스템", "하드웨어", "ROM", "비휘발성메모리", "펌웨어", "BIOS"]
draft: false
exam_pecs: ["138회"]
---

## 개요

ROM(Read Only Memory)은 전원이 꺼져도 데이터가 유지되는 비휘발성 메모리로, 주로 펌웨어·BIOS·부트로더 등 변경 빈도가 낮은 고정 코드를 저장하는 데 사용된다. 기술 발전으로 초기의 완전 읽기 전용에서 현재는 전기적 재기록이 가능한 다양한 종류로 발전했다.

## 핵심 내용

### ROM의 주요 기능

- **펌웨어 저장**: BIOS/UEFI, 마이크로컨트롤러 프로그램
- **부트 코드**: 시스템 전원 인가 시 가장 먼저 실행되는 코드
- **설정 정보**: 하드웨어 설정 파라미터 보존
- **캘리브레이션 데이터**: 센서·아날로그 회로 보정값

### ROM의 종류 비교

| 종류 | 전체 명칭 | 특징 | 프로그래밍 방법 | 소거 방법 |
|------|-----------|------|----------------|----------|
| **Mask ROM** | 마스크 ROM | 제조 시 데이터 영구 기록 | 제조 공정 | 불가 |
| **PROM** | Programmable ROM | 1회만 프로그래밍 | 퓨즈 단락 (PROM 버너) | 불가 |
| **EPROM** | Erasable PROM | UV 자외선으로 소거 가능 | 전기적 (EPROM 프로그래머) | UV 자외선 조사 (수십 분) |
| **EEPROM** | Electrically Erasable PROM | 전기적 소거, 바이트 단위 | 전기적 | 전기적 (바이트 단위) |
| **Flash Memory** | 플래시 메모리 | EEPROM 개선, 블록 단위 소거 | 전기적 | 전기적 (블록 단위) |
| **FRAM** | 강유전체 RAM | 비휘발성 + 빠른 쓰기 | 전기적 (분극 상태) | 전기적 (불필요) |

### Mask ROM vs Flash 현대 비교

- **Mask ROM**: 생산 비용 낮지만 수정 불가 → 대량 생산 소비가전 (TV 리모컨 등)
- **Flash (NAND/NOR)**: 현재 ROM 역할 대부분 대체, 펌웨어 업데이트 가능
  - **NOR Flash**: XIP(eXecute In Place) 지원, 코드 실행용 (부트로더)
  - **NAND Flash**: 고용량·저가, SSD·USB 저장용 (순차 읽기)

### 현대 시스템에서의 ROM 역할

```
전원 인가
    ↓
NOR Flash (BIOS/UEFI) 실행
    ↓
POST (Power-On Self Test)
    ↓
부트 디바이스 탐색
    ↓
SSD/HDD에서 OS 로드
```

## 출제 포인트

- ROM 6가지 종류: Mask ROM → PROM → EPROM → EEPROM → Flash → FRAM
- 각 종류의 소거 방법 구분 (불가 / UV / 전기적)
- NOR Flash vs NAND Flash: XIP 지원 여부, 용도 차이
- 현대에서 Flash가 BIOS/펌웨어 저장 역할 담당

## 연관 개념

- [FRAM]({{< relref "/docs/04_ComputerSystems/02_HardwareSystems/01_HW_Design_Operation/fram-ferroelectric-ram" >}}) — 비휘발성 + 빠른 쓰기 메모리
- [SSD 장단점]({{< relref "/docs/04_ComputerSystems/02_HardwareSystems/01_HW_Design_Operation/ssd-solid-state-drive" >}}) — NAND Flash 기반 저장장치

## 참고 기출

- 138회 3교시 4번 (PECS)
