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
| **정의** | 데이터 구조를 플랫폼 독립적으로 기술하는 표준 언어 ASN.1(Abstract Syntax Notation One)의 TLV 구조 중, 태그 번호 31 이상을 표현하는 **Long-form Tag Encoding** 방식과, 실제 바이트 스트림 생성 규칙인 **BER·DER·CER**의 X.509 인증서 적용 |
| **키워드** | TLV, Long-form Tag, BER/DER/CER, X.509, 유일성(Uniqueness), CVE-2019-0880 |
| **개념도** | **[ Long-form Tag Number Encoding 디코딩 절차 ]**<br>`Tag 바이트: [클래스 2bit][구성여부 1bit][태그번호 5bit]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 하위5비트=11111(0x1F) 이면 Long-form`<br>`예시(태그번호256): [1F] [82] [00]`<br>&nbsp;&nbsp;`1F: Long-form 표시 ➔ 82: MSB=1(계속),하위7bit=0000010 ➔ 00: MSB=0(종료),하위7bit=0000000`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 하위7bit 연결`<br>&nbsp;&nbsp;&nbsp;&nbsp;`0000010_0000000 = 256 (태그번호 확정)` |
| **구성요소** | 1. **TLV 구조**: Tag(타입식별)-Length(데이터 길이)-Value(실제 데이터) 순서로 구성된 ASN.1 기본 인코딩 단위<br>2. **Short-form Tag**: 태그번호 0~30, 1바이트로 표현<br>3. **Long-form Tag**: 태그번호 31 이상, 첫바이트 하위5비트=11111로 시작하고 이후 바이트의 MSB로 연속 여부를 표시하며 하위7비트씩 이어붙여 번호 산출<br>4. **BER**: 정형/부정형 길이 모두 허용하여 인코딩 방법이 여러 가지(유일성 미보장)<br>5. **DER**: 유일한 인코딩 방법만 허용(최소 바이트 길이 강제) → X.509 인증서·디지털 서명에 필수<br>6. **CER**: DER처럼 유일하되 부정형 길이를 허용해 스트리밍에 최적화(LDAP·대용량 메시지용) |
| **비교** | **BER (기본 인코딩 규칙)**<br>- **유일성**: 보장 안 됨(같은 값도 여러 바이트열 가능)<br>- **위험**: 서명 대상 바이트열이 달라질 수 있어 서명 변조·우회 여지<br><br>**DER (구별 인코딩 규칙)**<br>- **유일성**: 보장(정형 길이만 허용, 최소 바이트 표현 강제)<br>- **효과**: 동일 데이터는 항상 동일 바이트 시퀀스 → 서명 검증 시 위변조 여부를 명확히 판별 가능해 X.509에 강제 채택 |
| **차별화** | **X.509 인증서 파싱 보안 강화를 위한 3대 실무 점검 포인트**<br>1. **DER 정규화 검사 의무화**: 인증서 파싱 시 BER 형태로 인코딩된 인증서는 유일성이 깨져 서명 우회 위험이 있으므로, 반드시 DER 정규 형식 준수 여부를 검증 후 거부하는 파서 정책 적용.<br>2. **Long-form 태그 파싱 취약점 대응**: CVE-2019-0880(MS CryptoAPI)처럼 비표준 Long-form 태그를 처리하는 과정에서 발생하는 파싱 버그를 예방하기 위해, 태그 번호 상한과 바이트 길이 제한을 명시적으로 검증.<br>3. **길이 필드 오버플로우 방어**: 부정형 길이 파싱 시 발생 가능한 버퍼 오버플로우를 막기 위해 Length 필드에 대한 정수 오버플로우 검사와 최대 메시지 크기 제한을 파서 구현 단계에서 강제. |
