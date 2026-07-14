---
title: "DNS 및 DNSSEC 보안"
date: 2026-07-11T11:19:35+09:00
tags: ["네트워크", "DNS", "DNSSEC", "캐시포이즈닝", "RRSIG", "DNSKEY", "DoH", "DoT", "서브노트"]
draft: false
---

# DNS 및 DNSSEC 보안 서브노트

> **두음 머리에 박기 🧠**
> - **키·알·디·엔** (DNSSEC 핵심 리소스 레코드 4종: 공개키 레코드 **D**NSKEY, 전자서명 레코드 **R**RSIG, 상위 위임 해시 레코드 **D**S, 도메인 부재 증명 레코드 **N**SEC / NSEC3)
> - **디·알·씨** (DNS 보안 위협 및 솔루션: 캐시 오염 **D**NS Cache Poisoning, 무결성 강화 **D**NSSEC, 쿼리 암호화 **C**ryptography (DoH/DoT))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **Domain Name System (DNS) 및 보안 확장 표준인 DNSSEC** |
| **정의** | 도메인명→IP 매핑 **DNS** + 캐시포이즈닝(스푸핑) 방어위해 공개키 서명 도입 → 데이터 무결성·출처 검증하는 **보안표준 DNSSEC** |
| **키워드** | Recursive/Iterative Query, Cache Poisoning, RRSIG/DNSKEY/DS/NSEC, DoH(HTTPS) / DoT(TLS) |
| **개념도** | **[ DNSSEC 신뢰 체인 (Chain of Trust) 검증 매커니즘 ]**<br>`[ 루트 존 (Root) ]` ────────── 위임 검증 ──────────➔ `[ .KR 존 (TLD) ]` (상위 존에 하위 키 해시 DS 등록)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 검증&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼ 검증`<br>`[ Root DNSKEY ]` ── 서명 검증 ➔ `[ Root RRSIG ]` &nbsp;&nbsp;&nbsp;&nbsp;`[ TLD DNSKEY ]` ── 서명 검증 ➔ `[ TLD RRSIG ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└─────────────────────── [ 상향식 전자서명 정합성 검증 성공 ] ───────────────────────┘` |
| **구성요소** | 1. **DNS 쿼리 방식**: Recursive(로컬서버 대행질의 후 최종반환), Iterative(로컬서버 계층별 직접 순차질의)<br>2. **RRSIG**: RRset(리소스레코드셋) 대응 암호학적 디지털서명 수록 레코드<br>3. **DNSKEY**: RRSIG 서명 복호화·위변조 판정용 네임서버 비대칭 공개키 레코드<br>4. **DS(Delegation Signer)**: 하위존 DNSKEY 해시값 → 상위 부모존 배치 → 신뢰체인(Chain) 연결<br>5. **NSEC3**: 도메인 부재증명 시 이름 해시처리 → 해커의 도메인 사전수집 차단 |
| **비교** | **일반 DNS**<br>- 보안성: 전무 (UDP 53 평문전송, 세션ID 탈취 시 캐시오염 노출)<br>- 데이터크기: 작음 (대부분 512Byte 이하, 단편화 없음)<br><br>**보안 DNS (DNSSEC)**<br>- 보안성: 출처인증·데이터무결성 완벽보장 (암호화 서명 확인)<br>- 데이터크기: 큼 (키/서명 포함 512Byte 초과 → EDNS0·TCP 53 전환 필요) |
| **차별화** | **DNSSEC 한계 극복 위한 DoH/DoT 암호화 및 디도스 방어 연계**<br>1. **DoH/DoT 융합**: DNSSEC은 위변조방지(무결성)만 제공, 질의암호화 미제공 → HTTPS 이용 **DoH**, TLS 853포트 **DoT** 결합으로 프라이버시 완성<br>2. **DNS 증폭 DDoS 방어**: DNSSEC 적용 시 패킷크기 수배 증가 → 반사판(Reflector) 공격 악용 우려 → **RRL**(응답속도제한)로 동일IP 대량쿼리 속도조절<br>3. **EDNS0 활성화**: 대용량 서명레코드가 512Byte 제한으로 TCP 재시도 지연 발생 → UDP 한도 4096Byte로 확장, 전구간 활성화 |
