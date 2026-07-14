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
| **정의** | 전원 차단에도 데이터 유지 → 펌웨어용 **ROM 계열**, 강유전체 분극 고속·고내구 **FRAM**, NAND 기반 대용량 **SSD** |
| **키워드** | Mask ROM/PROM/EPROM/EEPROM/Flash, NOR/NAND Flash, XIP, FRAM 분극(Polarization), SLC/MLC/TLC/QLC, Write Amplification |
| **개념도** | `전원 인가 → NOR Flash(BIOS/UEFI) 실행 → POST → 부트 디바이스 탐색 → SSD/HDD OS 로드`<br>`[ FRAM ]`: 강유전체 커패시터 분극 방향(↑=1, ↓=0) 저장 → 전원차단 유지<br>`[ SSD ]`: NAND 셀(SLC~QLC) 블록 단위 저장, Wear Leveling → 균등마모 분산 |
| **구성요소** | 1. **ROM 계열**: Mask ROM(제조고정, 소거불가) → PROM(퓨즈1회) → EPROM(UV소거) → EEPROM(전기적 바이트소거) → Flash(전기적 블록소거)<br>2. **NOR/NAND Flash**: NOR → XIP(제자리실행) 지원, 부트로더용 / NAND → 고용량·저가, SSD·USB용<br>3. **FRAM**: 강유전체(PZT) 분극상태 저장 → DRAM급 속도 + Flash급 비휘발성<br>4. **SSD 성능유지 3종**: Wear Leveling(쓰기 균등분산), TRIM(삭제블록 사전정리), Over-Provisioning(예비공간 7~28%) |
| **비교** | **FRAM**<br>- 쓰기속도: Flash 대비 1,000배↑<br>- 쓰기내구성: 약 10¹³회<br>- 집적도/가격: 낮은 집적도, 고단가(PZT 특수소재)<br>- 용도: IoT센서·자동차ECU·의료기기(저전력+빈번쓰기)<br><br>**SSD (NAND Flash)**<br>- 쓰기속도: FRAM 대비 느림<br>- 쓰기내구성: TLC 약1,000회, QLC 약100~300회(SLC 대비 현저히↓)<br>- 집적도/가격: 매우 높은 집적도, 저가·대용량<br>- 용도: PC·서버·데이터센터 주저장장치 |
| **차별화** | **저장장치 계층별 적재적소 설계 전략**<br>1. **용도별 선택기준**: 대용량·저비용 → QLC/TLC SSD, 저전력·초고내구 임베디드 로그 → FRAM, 변경無 부팅코드 → NOR Flash<br>2. **Write Amplification 완화**: 물리쓰기량>논리쓰기량 증폭현상 → TRIM으로 삭제예정블록 사전정리 + Over-Provisioning으로 GC여유공간 확보 → 수명저하 방지<br>3. **향후 방향**: 인터미턴트컴퓨팅·엣지IoT 확산 → FRAM/MRAM 초저전력 비휘발성메모리, 배터리리스 기기 상태보존 핵심요소로 부상 |
