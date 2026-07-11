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
| **정의** | CPU-메모리 간 속도 차이를 보완하는 고속 임시 저장소 **캐시**와, 멀티코어 시스템에서 개별 코어의 로컬 캐시 사본 데이터가 동일하도록 보장하는 **일관성 제어 기술(MESI)** |
| **키워드** | 국한성(시·공), 매핑(직·완·세), Write-Back/Through, MESI 프로토콜, 스누핑 vs 디렉토리, CXL.cache |
| **개념도** | `[ 코어 1 (L1 캐시) ]` ── Write (A) ➔ 수정 상태 (M) 통보<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`├────── (공유 버스 스누핑 Snooping 통신) ──────┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼`<br>`[ 코어 2 (L1 캐시) ]` (A 상태 Shared ➔ Invalid 무효화) &nbsp;&nbsp;`[ 공유 L3 캐시 / 메인 메모리 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└───────────────── [ 버스 상의 쓰기 감시로 데이터 정합성 보장 ] ────────────────┘` |
| **구성요소** | 1. **시간/공간 국한성**: 최근 접근한 데이터(시간), 인접 주소 데이터(공간)를 우선 캐싱하여 적중률(Hit Ratio) 극대화<br>2. **MESI 4상태**: **M**(내용 수정됨, 독점), **E**(메모리와 동일, 독점), **S**(메모리와 동일, 공유), **I**(내용 유효하지 않음)<br>3. **스누핑 (Snooping)**: 주소 버스를 상시 브로드캐스트 모니터링하여 타 코어의 쓰기 감지 시 상태 갱신 (소규모 코어)<br>4. **디렉토리 (Directory)**: 중앙 디렉토리에 각 캐시 블록의 복사본 위치 및 상태를 저장하고 유니캐스트로 통제 (대규모) |
| **비교** | **직접 매핑 (Direct Mapping)**<br>- **특징**: 메모리 블록이 지정된 한 개의 캐시 라인에만 매핑. 주소 비교 및 구현 간단하나 충돌 미스 발생 빈도 높음<br><br>**완전 연관 매핑 (Fully Associative)**<br>- **특징**: 메모리 블록이 어떤 캐시 라인에든 자유롭게 저장 가능. 충돌 미스는 없으나 모든 라인을 스캔하여 비용 높음<br><br>**세트 연관 매핑 (Set Associative)**<br>- **특징**: 캐시를 여러 세트로 쪼개고 한 세트 안에서는 완전 연관 적용. 속도와 충돌 미스의 절충형 표준안 |
| **차별화** | **HBM 고대역폭 메모리 확장 및 차세대 CXL 기반 캐시 일관성 연계 전략**<br>1. **이종 컴퓨팅(CPU-GPU) 간 CXL.cache 일관성 확보**: 기존 PCIe 슬롯 오버헤드를 극복하기 위해 차세대 버스 표준인 **CXL (Compute Express Link) 2.0/3.0**을 적용하고, 호스트 CPU와 외부 가속기(NPU) 간 캐시 일관성을 CXL.cache 프로토콜로 직접 연계하여 지연 시간(Latency) 최소화.<br>2. **False Sharing (거짓 공유) 오버헤드 방지 설계**: 멀티쓰레드 코드 작성 시 다른 코어의 독립적 데이터가 우연히 같은 캐시 라인(64 Byte)에 엮여 불필요한 MESI 무효화(Invalidate)가 연발하는 현상을 방지하도록 정렬 패딩(`alignas`) 선언.<br>3. **Write-Back 정책 하의 더티 비트(Dirty Bit) 축적 관리**: Write-Through의 쓰기 지연 병목을 막고자 Write-Back을 적용하되, 컨텍스트 스위칭 시 캐시 플러시(Flush) 부하를 최소화하도록 Dirty Bit 누적 데이터를 비동기 플러시하는 백그라운드 스레드 운용. |
