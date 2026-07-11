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
| **정의** | 도메인 이름을 IP로 매핑하는 **DNS**와, DNS 캐시 포이즈닝(스푸핑)을 방어하기 위해 공개키 암호화 서명 기술을 도입하여 데이터의 무결성 및 출처를 검증하는 **보안 표준 DNSSEC** |
| **키워드** | Recursive/Iterative Query, Cache Poisoning, RRSIG/DNSKEY/DS/NSEC, DoH(HTTPS) / DoT(TLS) |
| **개념도** | **[ DNSSEC 신뢰 체인 (Chain of Trust) 검증 매커니즘 ]**<br>`[ 루트 존 (Root) ]` ────────── 위임 검증 ──────────➔ `[ .KR 존 (TLD) ]` (상위 존에 하위 키 해시 DS 등록)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 검증&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼ 검증`<br>`[ Root DNSKEY ]` ── 서명 검증 ➔ `[ Root RRSIG ]` &nbsp;&nbsp;&nbsp;&nbsp;`[ TLD DNSKEY ]` ── 서명 검증 ➔ `[ TLD RRSIG ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└─────────────────────── [ 상향식 전자서명 정합성 검증 성공 ] ───────────────────────┘` |
| **구성요소** | 1. **DNS 쿼리 방식**: Recursive(로컬 서버가 대행 질의 후 최종 반환), Iterative(로컬 서버가 계층별 직접 순차 질의)<br>2. **RRSIG (Resource Record Signature)**: 리소스 레코드 세트(RRset)에 대응하는 암호학적 디지털 서명 수록 레코드<br>3. **DNSKEY**: RRSIG 서명을 복호화하여 위변조를 판정할 때 사용하는 네임서버의 비대칭 공개키 수록 레코드<br>4. **DS (Delegation Signer)**: 하위 존의 DNSKEY 해시값을 담아 상위 부모 존에 배치함으로써 신뢰 체인(Chain) 연결<br>5. **NSEC3 (Next Secure 3)**: 요청 도메인 부재 증명 시 도메인 이름을 해시 처리하여 해커의 도메인 사전 수집 차단 |
| **비교** | **일반 DNS**<br>- **보안성**: 전무 (UDP 53 포트 평문 전송, 세션 ID 탈취 시 캐시 오염에 노출)<br>- **데이터 크기**: 작음 (대부분 512 Byte 이하로 단편화 없음)<br><br>**보안 DNS (DNSSEC)**<br>- **보안성**: 출처 인증 및 데이터 무결성 완벽 보장 (암호화 서명 확인)<br>- **데이터 크기**: 큼 (키/서명 포함으로 512 Byte 초과, EDNS0 및 TCP 53 전환 필요) |
| **차별화** | **DNSSEC 도입 한계 극복을 위한 DoH / DoT 암호화 및 디도스 방어 연계 전략**<br>1. **질의 내용 프라이버시 노출 극복을 위한 DoH/DoT 융합**: DNSSEC은 위변조 방지(무결성)만 제공하고 질의문 암호화는 제공하지 않으므로, ISP나 도청자가 어떤 사이트에 접속하는지 보지 못하도록 HTTPS를 이용하는 **DoH (DNS over HTTPS)** 또는 TLS 포트(853)를 타는 **DoT (DNS over TLS)** 암호화 터널을 결합하여 완벽한 보안 달성.<br>2. **DNS 증폭 디도스(Amplification DDoS) 공격 방어**: DNSSEC 적용 시 패킷의 크기가 수 배 이상 늘어나 해커가 반사판(Reflector) 공격으로 이용하기 쉬우므로, DNS 서버 단에 **RRL (Response Rate Limiting, 응답 속도 제한)** 프로토콜을 설정하여 동일 IP 대량 쿼리 시 응답 속도 조절.<br>3. **EDNS0 (Extension Mechanisms for DNS) 활성화**: DNSSEC의 대용량 서명 레코드가 512 바이트 제한으로 인해 끊어져 TCP 재시도 지연이 발생하는 것을 막기 위해, UDP 패킷 한도를 4096 바이트까지 늘려주는 EDNS0 옵션을 네트워크 전 구간에 활성화. |
