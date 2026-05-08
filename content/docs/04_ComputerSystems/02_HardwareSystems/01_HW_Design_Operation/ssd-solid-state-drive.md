---
title: "SSD (Solid State Drive) 장단점"
date: 2026-05-09T07:34:17+09:00
tags: ["pecs", "컴퓨터시스템", "하드웨어", "SSD", "저장장치", "NAND플래시"]
draft: false
exam_pecs: "138회"
---

## 개요

SSD(Solid State Drive)는 NAND 플래시 메모리를 기반으로 한 저장장치로, 기계적 부품 없이 전자적 방식으로 데이터를 읽고 쓴다. HDD(Hard Disk Drive)의 기계적 한계를 극복하여 현대 PC, 서버, 데이터센터의 주요 저장장치로 자리잡았다.

## 핵심 내용

### SSD vs HDD 비교

| 구분 | SSD | HDD |
|------|-----|-----|
| **저장 방식** | NAND 플래시 (전기적) | 자성 디스크 (기계적) |
| **읽기 속도** | 수 GB/s (NVMe) | ~200 MB/s |
| **쓰기 속도** | 수백 MB/s~GB/s | ~150 MB/s |
| **접근 시간** | ~0.1ms | ~10ms |
| **충격 저항** | 강함 (기계 부품 없음) | 약함 |
| **소음** | 무소음 | 회전 소음 |
| **소비전력** | 낮음 | 높음 |
| **수명** | 제한적 (쓰기 횟수) | 기계적 마모 |
| **가격/용량** | 비쌈 | 저렴 |

### SSD 장점

1. **빠른 속도**: NVMe SSD는 SATA HDD 대비 읽기 속도 10배 이상
2. **낮은 접근 시간**: 탐색 시간(Seek Time) 없음 → 랜덤 I/O 성능 우수
3. **내충격성**: 기계적 구동 부품 없어 진동·충격에 강함
4. **소형·경량**: 2.5인치, M.2 등 다양한 폼 팩터
5. **저소음·저발열**: 데이터센터 냉각 비용 절감
6. **빠른 부팅·앱 로딩**: OS·프로그램 로딩 속도 현저히 향상

### SSD 단점

1. **쓰기 수명 제한**: NAND 셀당 쓰기 횟수 한계 (TLC: ~1,000회, MLC: ~3,000회)
2. **높은 가격**: 동일 용량 HDD 대비 고가
3. **데이터 복구 어려움**: 손상 시 HDD 대비 복구 어려움
4. **Write Amplification**: 실제 쓰기 양이 논리적 쓰기 양보다 많아져 수명 단축
5. **급격한 성능 저하**: 셀이 가득 찰수록 쓰기 성능 급락

### NAND 플래시 셀 종류

| 종류 | 셀당 비트 | 내구성 | 속도 | 가격 |
|------|----------|--------|------|------|
| **SLC** | 1 bit | ~10만 회 | 빠름 | 가장 비쌈 |
| **MLC** | 2 bit | ~3,000 회 | 중간 | 중간 |
| **TLC** | 3 bit | ~1,000 회 | 느림 | 저렴 |
| **QLC** | 4 bit | ~100~300 회 | 더 느림 | 매우 저렴 |

### 성능 유지 기술

- **Wear Leveling**: 쓰기를 균등 분산하여 특정 셀 과도 사용 방지
- **TRIM**: 삭제된 블록 미리 정리하여 쓰기 성능 유지
- **Over-Provisioning**: 실제 용량의 7~28% 예비 공간 확보

## 출제 포인트

- SSD vs HDD 비교: 속도·충격·수명·가격
- 쓰기 수명 한계: NAND 셀 종류별 내구성 (SLC > MLC > TLC > QLC)
- Write Amplification과 Wear Leveling 개념
- TRIM 명령의 역할

## 연관 개념

- [FRAM]({{< relref "/docs/04_ComputerSystems/02_HardwareSystems/01_HW_Design_Operation/fram-ferroelectric-ram" >}}) — 비휘발성 메모리 비교 (쓰기 내구성 대조)
- [ROM 종류]({{< relref "/docs/04_ComputerSystems/02_HardwareSystems/01_HW_Design_Operation/rom-types" >}}) — Flash 기반 ROM과 연계
- [캐시 메모리]({{< relref "/docs/04_ComputerSystems/05_Algorithms/cache-memory" >}}) — 저장 계층 구조

## 참고 기출

- 138회 1교시 12번 (PECS)
