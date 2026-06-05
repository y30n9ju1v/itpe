---
title: "ASN.1 Tag 인코딩 (Long-form Tag Number Encoding)"
date: 2026-05-09T07:34:17+09:00
tags: ["pecs", "정보보안", "보안기술", "ASN.1", "인코딩", "BER", "DER", "X.509"]
draft: false
exam_pecs: ["138회"]
---

## 개요

ASN.1(Abstract Syntax Notation One)은 데이터 구조를 플랫폼 독립적으로 기술하는 표준 언어다. BER·DER·CER 등의 인코딩 규칙으로 실제 바이트 스트림을 생성하며, X.509 인증서·SNMP·LDAP 등 보안 프로토콜에 널리 사용된다.

## 핵심 내용

### TLV (Tag-Length-Value) 구조

ASN.1 인코딩의 기본 단위:

```
[Tag] [Length] [Value]
  ↑       ↑       ↑
타입 식별  데이터 길이  실제 데이터
```

### Tag 구조 (Short-form vs Long-form)

**Tag 바이트 구조:**
```
Bit 8-7: 클래스 (Universal=00, Application=01, Context=10, Private=11)
Bit 6:   구성 여부 (Primitive=0, Constructed=1)
Bit 5-1: 태그 번호 (Short-form: 0~30, Long-form: 11111 = 0x1F)
```

**Short-form (태그 번호 0~30):**
- 1바이트로 태그 표현

**Long-form Tag Number Encoding (태그 번호 31 이상):**
```
첫 바이트: 하위 5비트 모두 1 (0x1F = 11111)
이후 바이트들: MSB=1이면 다음 바이트 존재, MSB=0이면 마지막
각 바이트의 하위 7비트를 연결하여 태그 번호 구성
```

**예시:**
```
태그 번호 256 = 0x100 = 0b100000000
Long-form: 1F 82 00
  - 1F: Long-form 표시
  - 82: 1_0000010 (MSB=1, 이후 바이트 존재, 하위7 = 0000010)
  - 00: 0_0000000 (MSB=0, 마지막, 하위7 = 0000000)
  - 연결: 0000010_0000000 = 256
```

**Decoding 규칙:**
1. 첫 바이트 하위 5비트가 11111이면 Long-form
2. 이후 바이트를 읽으며 MSB=0인 바이트를 만날 때까지 계속
3. 각 바이트의 하위 7비트를 순서대로 연결하여 태그 번호 산출

### BER / DER / CER 비교

| 구분 | BER | DER | CER |
|------|-----|-----|-----|
| **정의** | 기본 인코딩 규칙 | 구별 인코딩 규칙 | 정규 인코딩 규칙 |
| **인코딩 방식** | 여러 방법 허용 (부정형 길이 포함) | 유일한 방법 지정 | 유일하되 스트리밍 최적화 |
| **길이 표현** | 정형/부정형 모두 허용 | 정형만 허용 (최소 바이트) | 부정형 허용 (스트리밍) |
| **유일성** | 보장 안 됨 | 보장 (서명 검증에 필수) | 보장 |
| **주요 용도** | 일반 ASN.1 인코딩 | X.509 인증서, 디지털 서명 | LDAP, 대용량 메시지 |

### X.509 인증서 적용 시 보안 고려사항

1. **DER 강제 사용**: 서명 검증 시 동일 바이트 시퀀스 보장 (BER 허용 시 서명 변조 가능)
2. **Long-form 태그 검증**: 비표준 Long-form 태그 파싱 버그 악용 (예: CVE-2019-0880 MS CryptoAPI 취약점)
3. **길이 필드 오버플로우**: 부정형 길이 파싱 시 버퍼 오버플로우 주의
4. **정규화 검사**: DER이 아닌 BER로 인코딩된 인증서 거부

## 출제 포인트

- Long-form Tag: 첫 바이트 하위 5비트 = 11111, 이후 바이트 하위 7비트 연결
- Encoding/Decoding 규칙 단계 서술
- BER·DER·CER 3가지 비교 (유일성·길이 표현·용도)
- DER을 X.509 서명에 강제 사용하는 이유: 유일성 보장

## 연관 개념

- [보안 인증 체계]({{< relref "/docs/notes/06_InfoSecurity/08_SecurityCertification" >}}) — X.509 PKI 인프라
- [해시 함수/암호화]({{< relref "/docs/notes/06_InfoSecurity/01_SecurityTech/hash-function-rainbow-table" >}}) — 디지털 서명 기반

## 참고 기출

- 138회 3교시 2번 (PECS)
