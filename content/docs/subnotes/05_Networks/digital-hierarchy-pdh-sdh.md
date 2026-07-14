---
title: "디지털 계위 (PDH·SDH·SONET)"
date: 2026-07-11T11:38:00+09:00
tags: ["네트워크", "PDH", "SDH", "SONET", "디지털계위", "전송시스템", "서브노트"]
draft: false
---

# 디지털 계위 (PDH·SDH·SONET) 서브노트

> **두음 머리에 박기 🧠**
> - **피·에스·에스** (디지털 계위 발전 순서: 준동기 **P**DH → 유럽/국제 동기 **S**DH → 북미 동기 **S**ONET)
> - **단·직·오·링** (SDH가 PDH 대비 가진 4대 장점: **단**일 클럭 동기화, 중간 역다중화 없는 **직**접 추출, 헤더 내장 **오**AM, 50ms 이내 **링** 자동 복구)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **디지털 계위 (Digital Hierarchy): PDH·SDH·SONET** |
| **정의** | 여러 채널을 계층적 다중화 → 고속전송하는 표준체계, 준동기 **PDH** → 완전동기 **SDH**(유럽/국제)·**SONET**(북미)으로 발전한 광통신망 기반기술 |
| **키워드** | 준동기(Plesiochronous), STM-1(155.52Mbps), STS-1/OC-1, OAM, BLSR/UPSR 링 보호 |
| **개념도** | **[ PDH → SDH 계위 발전 ]**<br>`PDH (준동기, 독립 클럭)`<br>`E0(64Kbps) → E1(2.048M, 30채널) → E2(8.448M) → E3(34.368M) → E4(139.264M)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`↓ 단일 클럭 동기화 전환`<br>`SDH (완전 동기)`<br>`STM-1(155.52M) → STM-4(622.08M) → STM-16(2.5G) → STM-64(10G) → STM-256(40G)`<br>`SONET(북미판) : OC-1(51.84M) ↔ OC-3/STS-3=STM-1 ↔ OC-192/STS-192=STM-64` |
| **구성요소** | 1. **PDH(Plesiochronous Digital Hierarchy)**: 각 노드가 독립 클럭으로 준동기 동작(ITU-T G.700), 기본단위 DS0(64Kbps)<br>2. **SDH(Synchronous Digital Hierarchy)**: 모든 노드가 단일 기준 클럭에 동기화(ITU-T G.707), 기본단위 STM-1(155.52Mbps)<br>3. **SONET(Synchronous Optical NETwork)**: SDH의 북미 버전(ANSI T1.105), 기본단위 STS-1/OC-1(51.84Mbps)<br>4. **OAM(운용·관리·유지보수)**: SDH 헤더에 내장되어 원격 관리를 가능하게 하는 바이트<br>5. **BLSR/UPSR 링 구조**: SDH의 자동 복구 메커니즘으로 장애 발생 시 50ms 이내 우회 경로 전환 |
| **비교** | **PDH (준동기 디지털 계위)**<br>- 동기 방식: 준동기(독립 클럭) / 기본 속도: 64Kbps(DS0)<br>- 채널 추출: 역다중화 필요 / OAM: 제한적<br>- 복구: 느림 / 사용 현황: 레거시<br><br>**SDH (동기 디지털 계위)**<br>- 동기 방식: 완전 동기 / 기본 속도: 155.52Mbps(STM-1)<br>- 채널 추출: 직접 추출 가능 / OAM: 풍부한 OAM 바이트<br>- 복구: 링 보호(50ms 이내) / 사용 현황: 광전송 백본 |
| **차별화** | **레거시 PDH → SDH/SONET 백본 전환 및 차세대 연계**<br>1. **포인터 바이트 정렬(Pointer Justification)**: PDH 독립클럭 주파수편차 → 단일클럭+포인터바이트로 해결, stuffing 제거·중간노드 직접추출<br>2. **링 토폴로지 고가용성**: BLSR/UPSR 링구조 → 단선 등 장애 시 50ms 이내 자동우회, 통신사 백본 고가용성 요건 충족<br>3. **차세대 전송망 연계**: SDH/SONET 회선교환 인프라 → 패킷기반 OTN·WDM, 5G/6G 프론트홀·백홀 전송으로 발전 |
