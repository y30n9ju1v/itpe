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

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **저장장치 중복 배열 (RAID, Redundant Array of Independent Disks) 및 Write Penalty** |
| **정의** | 복수 독립 물리디스크 논리적 통합 → 데이터분산(Striping)+오류정정(Parity)으로 **디스크 I/O속도·가용성 신뢰도 극대화하는 다중화 기술** |
| **키워드** | Striping / Mirroring / Parity, RAID 0/1/5/6, RAID 10, Write Penalty, SSD RAID Wear-out |
| **개념도** | **[ RAID 5 (분산 패리티) ]** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[ RAID 6 (이중 분산 패리티) ]**<br>디스크1 &nbsp;&nbsp;&nbsp;&nbsp; 디스크2 &nbsp;&nbsp;&nbsp;&nbsp; 디스크3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;디스크1 &nbsp;&nbsp;&nbsp;&nbsp; 디스크2 &nbsp;&nbsp;&nbsp;&nbsp; 디스크3 &nbsp;&nbsp;&nbsp;&nbsp; 디스크4<br>`[Block A1] [Block A2] [Parity A] (A행 패리티)` &nbsp;&nbsp;&nbsp;`[Block A1] [Block A2] [Parity AP] [Parity AQ] (A행 이중패리티)`<br>`[Block B1] [Parity B] [Block B2]` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[Block B1] [Parity BP] [Parity BQ] [Block B2]`<br>`[Parity C] [Block C1] [Block C2]` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[Parity CP] [Parity CQ] [Block C1] [Block C2]` |
| **구성요소** | 1. **스트라이핑(Striping)**: 데이터 블록단위 분할 → 복수디스크 분산저장 → 병렬I/O<br>2. **미러링(Mirroring)**: 유실방지 → 동일 복사본 2개 이상 디스크에 동시 100% 기록<br>3. **패리티(Parity)**: 소실복구용 → XOR 비트연산으로 오류정정정보 도출<br>4. **Write Penalty**: RAID 5/6 → 1블록 쓰기마다 기존데이터/패리티 읽기→재계산→쓰기 → 병목유발 |
| **비교** | **RAID 5 (분산패리티)**<br>- 최소디스크: 3개↑<br>- 장애허용: 최대1개 결함복구<br>- 용량효율: $(N-1)/N$ (4개 중 3개 활용)<br><br>**RAID 6 (이중분산패리티)**<br>- 최소디스크: 4개↑<br>- 장애허용: 최대2개 동시결함복구<br>- 용량효율: $(N-2)/N$ (4개 중 2개만 활용) |
| **차별화** | **SSD 환경 Write Penalty 완화 및 동시수명소진(Wear-out) 방지 전략**<br>1. **HW RAID 컨트롤러 NVRAM 캐시**: 쓰기요청 즉시완료 처리 + 캐시영역 패리티 비동기연산 → Write Penalty 병목 무력화, 정전대비 배터리백업보드 탑재<br>2. **SSD RAID Wear-out 예방**: 낸드SSD RAID → Wear Leveling으로 역설적 디스크 동시수명소진(전사유실 위험) → 노후디스크 교체주기 엇갈림(강제 마모편차 설계)으로 대응<br>3. **RAID 10 중첩 우선도입**: 패리티연산 오버헤드+Rebuild 부하 회피 → 미션크리티컬 DB서버는 미러링+스트라이핑 결합 RAID 10을 기본채택 |
