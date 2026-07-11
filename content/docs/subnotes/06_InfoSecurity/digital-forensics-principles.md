---
title: "디지털 포렌식 5대 원칙"
date: 2026-07-11T11:26:36+09:00
tags: ["보안", "디지털포렌식", "5대원칙", "연계보관사슬", "비트스트림이미징", "라이브포렌식", "안티포렌식", "서브노트"]
draft: false
---

# 디지털 포렌식 5대 원칙 서브노트

> **두음 머리에 박기 🧠**
> - **정·재·신·연·무** (디지털 포렌식 증거 효력 5대 기본 원칙: **정**당성, **재**현성, **신**속성, **연**계보관사슬 Chain of Custody, **무**결성)
> - **수·이·분·보** (디지털 포렌식 분석 4단계 절차: 증거 **수**집 ➔ 안전 **이**송 ➔ 과학적 **분**석 ➔ **보**고서 작성 및 제출)
> - **레·아·메·임·디** (RFC 3227 증거 휘발성 수집 순서 Order of Volatility: CPU **레**지스터/캐시 ➔ **A**RP/라우팅 캐시 ➔ **메**모리 RAM ➔ **임**시 파일 시스템 ➔ 로컬 **디**스크)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **디지털 포렌식 (Digital Forensics) 5대 원칙 및 휘발성 증거 수집 체계** |
| **정의** | 법정에 제출할 전자적 증거물의 법적 증거 능력(허용성/증명력)을 입증하기 위해 준수해야 하는 **5대 기본 원칙(정·재·신·연·무)** 및 수집·분석 절차 |
| **키워드** | 정·재·신·연·무, Chain of Custody, 쓰기 방지 장치, 비트스트림 이미징, 라이브 포렌식 (Volatility), 안티 포렌식 |
| **개념도** | **[ 무결성 입증을 위한 연계보관사슬 (Chain of Custody) 관리 흐름 ]**<br>`[ 현장 압수 ] ➔ 1. 물리적 쓰기방지 장치 연결 ➔ 2. 비트스트림 이미징 실행 ➔ 3. 원본 해시값 산출 (SHA-256)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (시간, 이송 담당자 이력 서명 보존)`<br>`[ 법원 증거 제출 ] ◀─ 5. 제출 시 해시값 재계산하여 일치 확인 ◀─ [ 분석실 이송 ] ◀─ 4. 복제본 사본으로 분석 수행`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└─ (해시값 일치 ➔ 무결성 입증 ➔ 증거 능력 획득)` |
| **구성요소** | 1. **정당성의 원칙**: 위법수집증거 배제법칙 준수. 적법한 영장에 의해서 획득된 증거만 법적 효력 인정 (독수독과)<br>2. **재현의 원칙**: 제3의 전문가가 동일한 장비와 조건으로 분석을 재현해도 항상 동일한 결과가 도출되어야 함<br>3. **연계보관사슬의 원칙**: 증거 압수 시점부터 법원 제출까지 거친 인력, 이송 경로, 보관 이력이 완벽히 추적되어야 함<br>4. **무결성의 원칙**: 디지털 증거가 수집된 시점의 해시값과 최종 법원 제출 시점의 해시값이 1비트도 다르지 않아야 함 |
| **비교** | **단순 파일 복사 (File Copy)**<br>- **복사 범위**: OS 파일 시스템 상에 존재하는 논리 파일 영역만 복사<br>- **무결성 / 증거능력**: 파일 접근 시간 변경으로 무결성 붕괴 / 증거 능력 상실<br><br>**비트스트림 이미징 (Bit-stream Imaging)**<br>- **복사 범위**: 하드웨어 쓰기방지 장치 적용, 디바이스의 물리적 섹터 단위 1:1 복제 (삭제 데이터, 슬랙 공간 복원 가능)<br>- **무결성 / 증거능력**: 해시 함수를 통해 변조 없음 증명 / 사법 기관의 법적 효력 확보 |
| **차별화** | **휘발성 데이터(RAM) 유실 방지를 위한 라이브 포렌식(Live Forensics) 및 수집 골든타임 준수 전략**<br>1. **휘발도 순서(Order of Volatility, RFC 3227)에 입각한 수집**: 침해 사고 발생 시 시스템 전원을 즉시 차단(Shutdown)하면 RAM에 로드된 연결 세션, 프로세스, 대화형 암호 키 정보가 영구 유실됨. 따라서 휘발 속도가 빠른 레지스터 ➔ 캐시 ➔ RAM 메모리 덤프 ➔ 비휘발성 디스크 순서로 수집하는 **라이브 포렌식** 절차 적용.<br>2. **안티 포렌식 (Anti-Forensics) 위협 대응**: 해커가 증거 인멸을 위해 사용하는 파일 영구 와이핑(Wiping, 35회 덮어쓰는 가트만 삭제 기법), 암호화 볼륨, 스테가노그래피(이미지 내 기밀 은닉)를 식별하기 위해 메모리 덤프 파일 내 암호화 키 잔재 검출 및 슬랙 공간 비트패턴 통계 분석 연동.<br>3. **슬랙 공간 (Slack Space) 분석**: 파일 크기가 물리 섹터 클러스터 크기보다 작아 남는 공백 공간(RAM/File Slack) 내에 숨겨진 은닉 데이터 및 찌꺼기 파일 조각을 복원하는 파일 카빙(File Carving) 기술 결합. |
