---
title: "스푸핑(Spoofing) 공격: ARP/IP/DNS"
date: 2026-07-11T11:38:05+09:00
tags: ["보안", "스푸핑", "ARP스푸핑", "IP스푸핑", "DNS스푸핑", "네트워크공격", "서브노트"]
draft: false
---

# 스푸핑(Spoofing) 공격: ARP/IP/DNS 서브노트

> **두음 머리에 박기 🧠**
> - **A·I·D** (3대 스푸핑 대상: **A**RP(MAC주소), **I**P(출발지주소), **D**NS(도메인-IP매핑))
> - **D·B·D** (3대 스푸핑 핵심 대책: ARP엔 **D**AI(Dynamic ARP Inspection), IP엔 **B**CP38/RPF, DNS엔 **D**NSSEC)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **스푸핑(Spoofing) 공격 3유형: ARP 스푸핑, IP 스푸핑, DNS 스푸핑** |
| **정의** | 정체(MAC·IP·도메인) 신뢰대상 위장 → 프로토콜 인증부재 악용, 도청·세션하이재킹·MITM·서비스방해 수행 공격 |
| **키워드** | ARP Reply 조작, IP 출발지 위조, DNS 캐시 포이즈닝, MITM, DAI, BCP38/RPF, DNSSEC/DoH |
| **개념도** | **[ ARP 스푸핑 기반 MITM 구성 ]**<br>`정상: 호스트A → [ARP요청: 게이트웨이 IP는?] → 게이트웨이(MAC:AA) 응답`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`공격: 공격자 → [가짜 ARP Reply: 게이트웨이IP=내MAC(BB)] → 호스트A 캐시 오염`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`결과: 호스트A의 모든 트래픽이 공격자를 경유(도청·조작 가능)` |
| **구성요소** | 1. **ARP 스푸핑**: 인증없는 ARP Reply 수락구조 악용 → 가짜응답 ARP캐시 오염 → 로컬망 MITM. 대책: DAI(스위치 ARP검증), 정적ARP, VPN암호화<br>2. **IP 스푸핑**: 출발지IP 위조 → 접근통제 우회, DDoS 증폭공격 반사서버 유도. 대책: BCP38(ISP 출발지검증), RPF(인터페이스-라우팅테이블 일치검증)<br>3. **DNS 스푸핑**: 캐시포이즈닝 → 정상도메인 응답조작 → 피싱사이트 유도. 대책: DNSSEC(디지털서명), DoH(쿼리암호화), 임의포트·거래ID(Kaminsky 방어) |
| **비교** | **ARP 스푸핑**<br>- 영향범위: 로컬네트워크 한정<br>- 목적: MITM, 도청<br><br>**IP/DNS 스푸핑**<br>- 영향범위: 인터넷 전체(IP=DDoS반사, DNS=전체사용자)<br>- 목적: DDoS증폭·인증우회(IP) / 피싱·리다이렉션(DNS) |
| **차별화** | **스푸핑 공격군 계층적 방어 아키텍처**<br>1. **L2~L7 계층별 검증체계**: 스위치 DAI(ARP) + 라우터/ISP BCP38·RPF(IP) + DNS서버/클라이언트 DNSSEC·DoH → 계층별 중첩방어<br>2. **암호화기반 신뢰검증 전환**: 위조가능 식별자(IP·MAC) 인증 → PKI 상호인증 대체, 스푸핑성공해도 통신내용 암호학적보호(제로트러스트 직결)<br>3. **이상트래픽 실시간탐지 연동**: ARP Reply급증·비정상 DNS응답시간/TTL패턴 → SIEM/IDS 모니터링 → 사전경보 |
