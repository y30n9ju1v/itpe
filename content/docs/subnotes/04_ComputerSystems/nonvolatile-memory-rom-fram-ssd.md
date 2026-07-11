---
title: "비휘발성 메모리·저장장치 기술 (ROM/FRAM/SSD)"
date: 2026-07-11T11:37:56+09:00
tags: ["컴퓨터시스템", "컴퓨터구조", "ROM", "FRAM", "SSD", "비휘발성메모리", "서브노트"]
draft: false
---

# 비휘발성 메모리·저장장치 기술 (ROM/FRAM/SSD) 서브노트

> **두음 머리에 박기 🧠**
> - **마·프·이·이·플·프** (ROM 발전 6단계: **마**스크 ROM ➔ **P**ROM ➔ **E**PROM ➔ **E**EPROM ➔ **플**래시 ➔ **F**RAM)
> - **S·M·T·Q** (NAND 셀당 비트 저장 4종: **S**LC(1bit) ➔ **M**LC(2bit) ➔ **T**LC(3bit) ➔ **Q**LC(4bit), 뒤로 갈수록 저내구·저가)
> - **웨·트·오** (SSD 성능유지 3대 기법: **웨**어 레벨링 Wear Leveling, **T**RIM, **오**버 프로비저닝 Over-Provisioning)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **비휘발성 메모리·저장장치 (ROM, FRAM, SSD) 기술 비교** |
| **정의** | 전원이 꺼져도 데이터가 유지되는 비휘발성 저장 기술로, 펌웨어 저장용 **ROM 계열**, 강유전체 분극을 이용한 고속·고내구 **FRAM**, NAND 플래시 기반 대용량 저장장치인 **SSD**로 구성 |
| **키워드** | Mask ROM/PROM/EPROM/EEPROM/Flash, NOR/NAND Flash, XIP, FRAM 분극(Polarization), SLC/MLC/TLC/QLC, Write Amplification |
| **개념도** | `전원 인가 → NOR Flash(BIOS/UEFI) 실행 → POST → 부트 디바이스 탐색 → SSD/HDD OS 로드`<br>`[ FRAM ]`: 강유전체 커패시터 분극 방향(↑=1, ↓=0)으로 데이터 저장, 전원 차단에도 유지<br>`[ SSD ]`: NAND 플래시 셀(SLC~QLC) 블록 단위 저장, Wear Leveling으로 균등 마모 분산 |
| **구성요소** | 1. **ROM 계열**: Mask ROM(제조 시 고정, 불가 소거) → PROM(퓨즈 1회 기록) → EPROM(UV 소거) → EEPROM(전기적 바이트 소거) → Flash(전기적 블록 소거)<br>2. **NOR/NAND Flash**: NOR는 XIP(제자리 실행) 지원, 부트로더용 / NAND는 고용량·저가, SSD·USB 저장용<br>3. **FRAM**: 강유전체(PZT) 분극 상태로 저장, DRAM급 속도 + Flash급 비휘발성 결합<br>4. **SSD 성능 유지 기술**: Wear Leveling(쓰기 균등 분산), TRIM(삭제 블록 사전 정리), Over-Provisioning(예비 공간 7~28%) |
| **비교** | **FRAM**<br>- **쓰기 속도**: Flash 대비 1,000배 이상 빠름<br>- **쓰기 내구성**: 약 10조(10¹³)회<br>- **집적도/가격**: 낮은 집적도, 높은 단가 (PZT 특수 소재)<br>- **주 용도**: IoT 센서, 자동차 ECU, 의료기기 (저전력+빈번한 쓰기)<br><br>**SSD (NAND Flash)**<br>- **쓰기 속도**: FRAM보다 느림<br>- **쓰기 내구성**: TLC 약 1,000회, QLC 약 100~300회 (SLC 대비 현저히 낮음)<br>- **집적도/가격**: 매우 높은 집적도, 상대적 저가·대용량<br>- **주 용도**: PC·서버·데이터센터의 주 저장장치 (대용량) |
| **차별화** | **저장장치 계층별 적재적소 설계 전략**<br>1. **용도별 비휘발성 메모리 선택 기준**: 대용량·저비용이 목표면 QLC/TLC 기반 SSD를, 저전력·초고내구·즉시성이 필요한 임베디드 센서 로그 저장은 FRAM을, 변경 빈도가 거의 없는 부팅 코드는 NOR Flash(ROM 대체)를 채택하는 계층적 선정 전략.<br>2. **SSD의 Write Amplification 완화**: 실제 물리적 쓰기량이 논리적 쓰기량보다 증폭되는 현상을 줄이기 위해 TRIM 명령으로 삭제 예정 블록을 미리 정리하고, Over-Provisioning으로 가비지 컬렉션 여유 공간을 확보하여 수명 저하를 방지.<br>3. **비휘발성 메모리 계층의 향후 방향**: 인터미턴트 컴퓨팅·엣지 IoT 확산에 따라 FRAM/MRAM 같은 초저전력 비휘발성 메모리가 배터리리스 기기의 상태 보존 핵심 요소로 부상. |
