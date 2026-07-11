---
title: "저장장치 다중화 및 신뢰성 RAID"
date: 2026-07-11T11:26:36+09:00
tags: ["컴퓨터시스템", "컴퓨터구조", "RAID", "스트라이핑", "미러링", "패리티", "WritePenalty", "서브노트"]
draft: false
---

# 저장장치 다중화 및 신뢰성 RAID 서브노트

> **두음 머리에 박기 🧠**
> - **영·일·오·육** (핵심 RAID 레벨 유형: **0** 스트라이핑, **1** 미러링, **5** 분산 패리티, **6** 이중 분산 패리티)
> - **앤·마이너스·원** (RAID 5 디스크 공간 효율 공식: 전체 디스크 개수가 $N$일 때, 유효 저장 공간 효율은 $(N-1)/N$ ➔ 1개 용량만큼 패리티 영역으로 유실)
> - **일·공 vs 오·공** (중첩 RAID 구성 방식: 1(미러)로 묶고 0(분산)처리한 **RAID 10**, 5(패리티)로 묶고 0처리한 **RAID 50**)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **저장장치 중복 배열 (RAID, Redundant Array of Independent Disks) 및 Write Penalty** |
| **정의** | 복수의 독립된 물리 디스크를 논리적으로 통합하여, 데이터 분산(Striping) 및 오류 정정(Parity)을 통해 **디스크 I/O 속도와 데이터 가용성 신뢰도를 극대화하는 디스크 다중화 기술** |
| **키워드** | Striping / Mirroring / Parity, RAID 0/1/5/6, RAID 10, Write Penalty, SSD RAID Wear-out |
| **개념도** | **[ RAID 5 (분산 패리티) ]** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[ RAID 6 (이중 분산 패리티) ]**<br>디스크1 &nbsp;&nbsp;&nbsp;&nbsp; 디스크2 &nbsp;&nbsp;&nbsp;&nbsp; 디스크3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;디스크1 &nbsp;&nbsp;&nbsp;&nbsp; 디스크2 &nbsp;&nbsp;&nbsp;&nbsp; 디스크3 &nbsp;&nbsp;&nbsp;&nbsp; 디스크4<br>`[Block A1] [Block A2] [Parity A] (A행 패리티)` &nbsp;&nbsp;&nbsp;`[Block A1] [Block A2] [Parity AP] [Parity AQ] (A행 이중패리티)`<br>`[Block B1] [Parity B] [Block B2]` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[Block B1] [Parity BP] [Parity BQ] [Block B2]`<br>`[Parity C] [Block C1] [Block C2]` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[Parity CP] [Parity CQ] [Block C1] [Block C2]` |
| **구성요소** | 1. **스트라이핑 (Striping)**: 데이터를 일정 블록 단위로 나누어 복수의 디스크에 분산 저장하여 병렬 I/O 처리<br>2. **미러링 (Mirroring)**: 데이터 유실을 막기 위해 동일한 복사본 데이터를 두 개 이상의 디스크에 동시 100% 기록<br>3. **패리티 (Parity)**: 데이터 소실 시 복구를 위해 XOR 비트 연산을 적용하여 도출해 둔 오류 정정 정보<br>4. **Write Penalty**: RAID 5/6 등에서 1블록을 쓸 때마다 기존 데이터/패리티 읽기 ➔ 패리티 재계산 ➔ 쓰기로 병목 유발 |
| **비교** | **RAID 5 (분산 패리티)**<br>- **최소 필요 디스크**: 3개 이상<br>- **장애 허용 수준**: 최대 1개 디스크 결함 복구 가능<br>- **용량 효율**: $(N-1)/N$ (디스크 4개 중 3개 공간 활용)<br><br>**RAID 6 (이중 분산 패리티)**<br>- **최소 필요 디스크**: 4개 이상<br>- **장애 허용 수준**: 최대 2개 디스크 동시 결함 복구 가능<br>- **용량 효율**: $(N-2)/N$ (디스크 4개 중 2개 공간만 활용) |
| **차별화** | **SSD 환경에서의 Write Penalty 완화 및 동시 수명 소진(Wear-out) 방지 전략**<br>1. **하드웨어 RAID 컨트롤러 내 NVRAM 캐시 장착**: 쓰기 요청 시 호스트에는 즉각 완료 처리하고, 캐시 영역에서 패리티 연산을 비동기 수행하여 **Write Penalty** 병목을 무력화하며 정전 대비 배터리 백업 보드 탑재.<br>2. **SSD RAID Wear-out (동시 수명 임계치 도달) 예방**: 수명이 한정된 낸드 플래시 SSD로 RAID 구성 시, 균등한 쓰기 분산(Wear Leveling) 때문에 역설적으로 디스크 4개가 같은 날 동시에 수명을 다해 전사 유실되는 대형 사고가 유발됨. 이를 막기 위해 성능과 무관하게 노후 디스크 교체 주기를 엇갈리게 설정하는 강제 마모 편차 설계 적용.<br>3. **RAID 10 중첩 아키텍처 우선 도입**: 패리티 연산 자체의 연산 오버헤드와 디스크 고장 시 데이터 재생성(Rebuild) 부하를 회피하기 위해, 예산 확보가 용이한 미션 크리티컬 DB 서버는 미러링과 스트라이핑을 결합한 RAID 10을 기본 설계 지침으로 채택. |
