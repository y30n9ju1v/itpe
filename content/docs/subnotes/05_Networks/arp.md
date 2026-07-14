---
title: "ARP와 보안 취약점"
date: 2026-07-12T18:13:12+09:00
tags: ["네트워크", "ARP", "RARP", "ARP Spoofing", "DAI", "NDP", "서브노트"]
draft: false
---

# ARP와 보안 취약점 서브노트

> **두음 머리에 박기 🧠**
> - **요·응·캐** (ARP 동작 흐름: ARP **요**청(브로드캐스트) → ARP **응**답(유니캐스트) → ARP **캐**시 저장)
> - **스·리** (ARP 보안 위협 2종: MITM 공격 **스**푸핑 Spoofing, 서브넷 전체 확산 **리**다이렉트 Redirect)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **ARP(Address Resolution Protocol)** |
| **정의** | IP주소 브로드캐스트 질의 → MAC주소 획득 데이터링크 계층 주소변환 프로토콜, IP→MAC 매핑을 ARP 캐시에 임시저장해 반복질의 방지 |
| **키워드** | ARP Request/Reply, Gratuitous ARP, RARP, ARP Spoofing/Redirect, DAI(Dynamic ARP Inspection), NDP(IPv6) |
| **개념도** | A(192.168.1.10) → ARP Request(브로드캐스트 "192.168.1.20의 MAC은?") → B(192.168.1.20) → ARP Reply(유니캐스트 "MAC: AA:BB:CC:DD:EE:FF") → [ARP 캐시 저장: TTL 동안 보관] |
| **구성요소** | 1. **ARP 동작**: IP→MAC 브로드캐스트 질의 → 유니캐스트 응답, `arp -a`로 캐시 확인<br>2. **RARP**: MAC→IP 역변환(디스크리스 부팅용), 현재 DHCP로 대체<br>3. **Gratuitous ARP**: 자신 IP-MAC 능동 브로드캐스트 → IP충돌 감지 + 캐시 일괄갱신<br>4. **ARP Spoofing**: 비인가 ARP Reply 반복전송 → A·GW 캐시조작 → MITM(도청·수정·차단)<br>5. **ARP Redirect**: 공격자가 GW 위장 → 서브넷 전체 ARP Reply 발송 → 영향범위 확대 |
| **비교** | **ARP (IPv4)**<br>- 주소변환: ARP Request/Reply<br>- 질의방식: 브로드캐스트<br>- 보안: 인증없음(Spoofing 취약)<br><br>**NDP (IPv6, ICMPv6 기반)**<br>- 주소변환: Neighbor Solicitation/Advertisement<br>- 질의방식: 요청노드 멀티캐스트(트래픽 최소화)<br>- 보안: SEND(Secure NDP)+CGA 기반 강화 |
| **차별화** | **ARP 보안 취약점 대응 실무 전략**<br>1. **DHCP Snooping → DAI 순차적용**: DAI는 DHCP Snooping의 IP-MAC-포트 바인딩테이블 검증기준 사용 → Snooping 선행활성화 필수, 순서위반 시 전체 ARP 차단·통신불가. 신뢰포트(업링크·서버)는 DAI Trusted 예외<br>2. **Gratuitous ARP 남용탐지**: 지속Spoofing 위해 초당 수회 전송 → ARPWatch/IDS로 동일IP MAC변경빈도(분당 3회 초과 등) 임계값 자동차단<br>3. **무선환경 강화**: AP Client Isolation(단말 간 직접통신 차단), WPA3 Enterprise+802.1X 인증으로 비인가단말 원천차단 |
