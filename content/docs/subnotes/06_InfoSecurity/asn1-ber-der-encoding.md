---
title: "ASN.1 Tag 인코딩과 BER/DER/CER 비교"
date: 2026-07-11T11:38:05+09:00
tags: ["보안", "ASN.1", "인코딩", "BER", "DER", "X.509", "서브노트"]
draft: false
---

# ASN.1 Tag 인코딩과 BER/DER/CER 비교 서브노트

> **두음 머리에 박기 🧠**
> - **T·L·V** (ASN.1 인코딩 기본 단위: **T**ag-**L**ength-**V**alue)
> - **B·D·C** (ASN.1 인코딩 규칙 3종: **B**ER 기본인코딩규칙, **D**ER 구별인코딩규칙, **C**ER 정규인코딩규칙)
> - **1F·82·00** (Long-form Tag 인코딩 원리: 첫바이트 하위5비트 모두1(**1F**)이면 Long-form 시작, 이후 바이트는 MSB=1(**82**)이면 계속·MSB=0(**00**)이면 종료, 각 바이트 하위7비트를 연결)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **ASN.1 Tag 인코딩(Long-form Tag Number Encoding)과 BER·DER·CER 비교** |
| **정의** | 플랫폼 독립적 데이터구조 기술언어 ASN.1의 TLV 구조 중 태그번호 31 이상 표현 **Long-form Tag Encoding** 방식 + 바이트스트림 생성규칙 **BER·DER·CER**의 X.509 인증서 적용 |
| **키워드** | TLV, Long-form Tag, BER/DER/CER, X.509, 유일성(Uniqueness), CVE-2019-0880 |
| **개념도** | **[ Long-form Tag Number Encoding 디코딩 절차 ]**<br>`Tag 바이트: [클래스 2bit][구성여부 1bit][태그번호 5bit]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 하위5비트=11111(0x1F) 이면 Long-form`<br>`예시(태그번호256): [1F] [82] [00]`<br>&nbsp;&nbsp;`1F: Long-form 표시 ➔ 82: MSB=1(계속),하위7bit=0000010 ➔ 00: MSB=0(종료),하위7bit=0000000`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 하위7bit 연결`<br>&nbsp;&nbsp;&nbsp;&nbsp;`0000010_0000000 = 256 (태그번호 확정)` |
| **구성요소** | 1. **TLV 구조**: Tag(타입식별)-Length(데이터길이)-Value(실제데이터) 순서 ASN.1 기본 인코딩 단위<br>2. **Short-form Tag**: 태그번호 0~30, 1바이트 표현<br>3. **Long-form Tag**: 태그번호 31 이상 — 첫바이트 하위5비트=11111 시작 → 이후 바이트 MSB로 연속여부 표시 → 하위7비트씩 연결해 번호 산출<br>4. **BER**: 정형/부정형 길이 모두허용 → 인코딩 방법 다수(유일성 미보장)<br>5. **DER**: 유일 인코딩 방법만 허용(최소바이트 길이 강제) → X.509 인증서·전자서명 필수<br>6. **CER**: DER처럼 유일 + 부정형 길이 허용 → 스트리밍 최적화(LDAP·대용량 메시지) |
| **비교** | **BER(기본 인코딩 규칙)**<br>- 유일성: 미보장(같은 값도 여러 바이트열 가능)<br>- 위험: 서명대상 바이트열 변동 → 서명 변조·우회 여지<br><br>**DER(구별 인코딩 규칙)**<br>- 유일성: 보장(정형길이만 허용, 최소바이트 강제)<br>- 효과: 동일데이터 → 항상 동일 바이트시퀀스 → 위변조 판별 명확 → X.509 강제채택 |
| **차별화** | **X.509 인증서 파싱 보안 강화 3대 실무 점검 포인트**<br>1. **DER 정규화 검사 의무화**: BER 인코딩 인증서=유일성 붕괴 → 서명우회 위험 → DER 정규형식 미준수 시 거부하는 파서정책<br>2. **Long-form 태그 파싱 취약점 대응**: CVE-2019-0880(MS CryptoAPI) 유형 비표준 태그 파싱버그 예방 → 태그번호 상한·바이트길이 제한 검증<br>3. **길이 필드 오버플로우 방어**: 부정형 길이 파싱 시 버퍼오버플로우 방지 → Length 필드 정수오버플로우 검사·최대 메시지크기 제한 강제 |
