---
title: "캐시메모리 및 일관성"
date: 2026-07-11T11:19:35+09:00
tags: ["컴퓨터시스템", "컴퓨터구조", "캐시메모리", "캐시일관성", "MESI", "CXL", "서브노트"]
draft: false
---

# 캐시메모리 및 일관성 서브노트

> **두음 머리에 박기 🧠**
> - **직·완·세** (캐시 주소 매핑 3대 기법: **직**접 매핑 Direct, **완**전 연관 Fully, **세**트 연관 Set)
> - **엠·이·에스·아이** (MESI 프로토콜 4대 상태: **M**odified 수정, **E**xclusive 독점, **S**hared 공유, **I**nvalid 무효)
> - **시·공** (캐시 Locality 국한성 2종: 시간적 **시**간 Locality, 공간적 **공**간 Locality)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **캐시 메모리 (Cache Memory) 및 멀티코어 캐시 일관성 (Cache Coherence)** |
| **정의** | CPU-메모리 속도차 보완 고속 임시저장소 **캐시** + 멀티코어 개별코어 로컬캐시 사본 동일성 보장 **일관성 제어기술(MESI)** |
| **키워드** | 국한성(시·공), 매핑(직·완·세), Write-Back/Through, MESI 프로토콜, 스누핑 vs 디렉토리, CXL.cache |
| **개념도** | `[ 코어 1 (L1 캐시) ]` ── Write (A) ➔ 수정 상태 (M) 통보<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`├────── (공유 버스 스누핑 Snooping 통신) ──────┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼`<br>`[ 코어 2 (L1 캐시) ]` (A 상태 Shared ➔ Invalid 무효화) &nbsp;&nbsp;`[ 공유 L3 캐시 / 메인 메모리 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└───────────────── [ 버스 상의 쓰기 감시로 데이터 정합성 보장 ] ────────────────┘` |
| **구성요소** | 1. **시간/공간 국한성**: 최근접근 데이터(시간)·인접주소 데이터(공간) 우선캐싱 → 적중률(Hit Ratio) 극대화<br>2. **MESI 4상태**: **M**(수정됨, 독점) / **E**(메모리동일, 독점) / **S**(메모리동일, 공유) / **I**(무효)<br>3. **스누핑(Snooping)**: 주소버스 상시 브로드캐스트 모니터링 → 타코어 쓰기감지 시 상태갱신 (소규모)<br>4. **디렉토리(Directory)**: 중앙디렉토리에 캐시블록 위치·상태 저장 → 유니캐스트 통제 (대규모) |
| **비교** | **직접 매핑 (Direct Mapping)**<br>- 메모리블록 → 지정 캐시라인 1개에만 매핑, 구현간단·충돌미스 빈도↑<br><br>**완전 연관 매핑 (Fully Associative)**<br>- 메모리블록 → 임의 캐시라인 자유저장, 충돌미스 無·전라인 스캔비용↑<br><br>**세트 연관 매핑 (Set Associative)**<br>- 여러세트 분할 → 세트내 완전연관, 속도-충돌미스 절충형 표준 |
| **차별화** | **HBM 확장 및 차세대 CXL 기반 캐시 일관성 연계 전략**<br>1. **이종컴퓨팅(CPU-GPU) CXL.cache 일관성**: PCIe 오버헤드 극복 → **CXL 2.0/3.0** 적용, 호스트CPU-가속기(NPU) 캐시일관성 CXL.cache로 연계 → 지연 최소화<br>2. **False Sharing 오버헤드 방지**: 독립데이터가 동일 캐시라인(64B)에 엮여 MESI 무효화 연발 → 정렬패딩(`alignas`)으로 방지<br>3. **Write-Back Dirty Bit 관리**: Write-Through 병목 회피 위해 Write-Back 적용 + 컨텍스트스위칭 시 Dirty Bit 비동기 플러시 백그라운드 스레드 운용 |
