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
| **정의** | 공격자가 자신의 정체(MAC·IP·도메인)를 신뢰할 수 있는 대상으로 위장하여 네트워크 프로토콜의 **인증 부재**를 악용, 도청·세션하이재킹·중간자공격(MITM)·서비스방해를 수행하는 공격 |
| **키워드** | ARP Reply 조작, IP 출발지 위조, DNS 캐시 포이즈닝, MITM, DAI, BCP38/RPF, DNSSEC/DoH |
| **개념도** | **[ ARP 스푸핑 기반 MITM 구성 ]**<br>`정상: 호스트A → [ARP요청: 게이트웨이 IP는?] → 게이트웨이(MAC:AA) 응답`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`공격: 공격자 → [가짜 ARP Reply: 게이트웨이IP=내MAC(BB)] → 호스트A 캐시 오염`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`결과: 호스트A의 모든 트래픽이 공격자를 경유(도청·조작 가능)` |
| **구성요소** | 1. **ARP 스푸핑**: 인증 없는 ARP Reply 수락 구조 악용, 가짜 응답으로 피해자 ARP 캐시 오염 → 로컬망 MITM. 대책: DAI(스위치 ARP 패킷 검증), 정적 ARP 항목, VPN 암호화<br>2. **IP 스푸핑**: 출발지 IP 위조로 IP기반 접근통제 우회, DDoS 증폭 공격의 반사서버 응답 유도에 활용. 대책: BCP38(ISP 출발지 검증), RPF(입력인터페이스-라우팅테이블 일치검증)<br>3. **DNS 스푸핑**: 캐시 포이즈닝으로 정상 도메인을 공격자 IP로 응답 조작, 피싱사이트로 유도. 대책: DNSSEC(디지털서명), DoH(쿼리암호화), 임의포트·거래ID(Kaminsky 공격 방어) |
| **비교** | **ARP 스푸핑**<br>- **영향 범위**: 로컬 네트워크로 한정<br>- **목적**: MITM, 도청<br><br>**IP/DNS 스푸핑**<br>- **영향 범위**: 인터넷 전체 광범위(IP는 DDoS 반사, DNS는 전체 인터넷 사용자)<br>- **목적**: DDoS 증폭·인증우회(IP) / 피싱·리다이렉션(DNS) |
| **차별화** | **스푸핑 공격군에 대한 계층적 방어 아키텍처**<br>1. **L2~L7 계층별 검증 체계 구축**: 스위치 단에서 DAI로 ARP를 검증하고, 라우터/ISP 단에서 BCP38·RPF로 IP 출발지를 검증하며, DNS 서버·클라이언트 단에서 DNSSEC·DoH를 적용하는 계층별 방어를 중첩 배치.<br>2. **암호화 기반 신뢰 검증으로 전환**: IP·MAC 등 위조 가능한 식별자에 의존하는 인증 방식을 PKI 기반 상호인증으로 대체하여, 스푸핑 성공 시에도 최종 통신 내용을 암호학적으로 보호(제로 트러스트 원칙과 직결).<br>3. **이상 트래픽 실시간 탐지 연동**: 동일 IP에 대한 ARP Reply 급증, 비정상 DNS 응답 시간·TTL 패턴 등을 SIEM/IDS로 모니터링하여 스푸핑 시도를 사전 경보. |
