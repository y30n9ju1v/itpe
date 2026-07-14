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

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **디지털 포렌식 (Digital Forensics) 5대 원칙 및 휘발성 증거 수집 체계** |
| **정의** | 전자적 증거물의 법적 증거능력(허용성/증명력) 입증 → 준수해야 할 **5대 기본 원칙(정·재·신·연·무)** 및 수집·분석 절차 |
| **키워드** | 정·재·신·연·무, Chain of Custody, 쓰기 방지 장치, 비트스트림 이미징, 라이브 포렌식 (Volatility), 안티 포렌식 |
| **개념도** | **[ 무결성 입증을 위한 연계보관사슬 (Chain of Custody) 관리 흐름 ]**<br>`[ 현장 압수 ] ➔ 1. 물리적 쓰기방지 장치 연결 ➔ 2. 비트스트림 이미징 실행 ➔ 3. 원본 해시값 산출 (SHA-256)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (시간, 이송 담당자 이력 서명 보존)`<br>`[ 법원 증거 제출 ] ◀─ 5. 제출 시 해시값 재계산하여 일치 확인 ◀─ [ 분석실 이송 ] ◀─ 4. 복제본 사본으로 분석 수행`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└─ (해시값 일치 ➔ 무결성 입증 ➔ 증거 능력 획득)` |
| **구성요소** | 1. 정당성의 원칙: 위법수집증거 배제법칙 → 적법 영장 획득 증거만 효력 인정 (독수독과)<br>2. 재현의 원칙: 제3전문가가 동일 장비·조건으로 재현 시 항상 동일 결과<br>3. 연계보관사슬의 원칙: 압수~법원제출 전 과정 인력·이송경로·보관이력 완전 추적<br>4. 무결성의 원칙: 수집시점 해시값 = 최종 제출시점 해시값 (1비트도 불일치 불가) |
| **비교** | **단순 파일 복사(File Copy)**<br>- 복사범위: OS 파일시스템상 논리 파일 영역만<br>- 무결성/증거능력: 접근시간 변경 → 무결성 붕괴 → 증거능력 상실<br><br>**비트스트림 이미징(Bit-stream Imaging)**<br>- 복사범위: 쓰기방지장치 적용 + 물리 섹터단위 1:1 복제 (삭제데이터·슬랙공간 복원 가능)<br>- 무결성/증거능력: 해시함수로 변조없음 증명 → 법적 효력 확보 |
| **차별화** | **휘발성 데이터(RAM) 유실 방지 — 라이브 포렌식 및 골든타임 전략**<br>1. 휘발도 순서(RFC 3227) 기반 수집: 전원차단 시 RAM 내 세션·프로세스·암호키 영구유실 → 레지스터→캐시→RAM덤프→비휘발성디스크 순 **라이브 포렌식**<br>2. 안티 포렌식 대응: 파일 와이핑(가트만 35회 삭제)·암호화볼륨·스테가노그래피 식별 → 메모리덤프 키잔재 검출 + 슬랙공간 비트패턴 분석. 타임스탬프조작(Timestomp)·메타데이터삭제(ExifTool)·허위증거삽입·VM탐지 회피 등도 존재 → 다중해시검증(MD5·SHA-256·SHA-3) + 다중 시간소스 교차검증, SIEM 실시간 로그 외부보관, 포렌식 레디 아키텍처로 대응. 변조 증거는 효력 인정 곤란 → 증거인멸죄(형법155조)·전자기록위변작죄(232조의2), 해외수사 시 MLAT 공조 쟁점<br>3. 슬랙 공간(Slack Space) 분석: 섹터·클러스터 크기 대비 공백 영역의 은닉데이터·잔여파일 조각을 파일 카빙으로 복원 |
