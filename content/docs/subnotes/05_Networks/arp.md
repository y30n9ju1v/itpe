---
title: "ARP와 보안 취약점"
date: 2026-07-13T18:13:12+09:00
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
| **정의** | IP 주소를 브로드캐스트로 질의하여 해당 MAC 주소를 획득하는 데이터링크 계층 주소 변환 프로토콜로, 이더넷 프레임 전달에 필요한 IP→MAC 매핑을 ARP 캐시에 임시 저장하여 반복 질의를 방지함 |
| **키워드** | ARP Request/Reply, Gratuitous ARP, RARP, ARP Spoofing/Redirect, DAI(Dynamic ARP Inspection), NDP(IPv6) |
| **개념도** | A(192.168.1.10) → ARP Request(브로드캐스트 "192.168.1.20의 MAC은?") → B(192.168.1.20) → ARP Reply(유니캐스트 "MAC: AA:BB:CC:DD:EE:FF") → [ARP 캐시 저장: TTL 동안 보관] |
| **구성요소** | 1. **ARP 동작**: IP→MAC 브로드캐스트 질의 후 유니캐스트 응답, `arp -a`로 캐시 확인 가능<br>2. **RARP**: MAC→IP 역변환(디스크리스 부팅용), 현재는 DHCP로 대체<br>3. **Gratuitous ARP**: 자신의 IP-MAC을 능동적으로 브로드캐스트하여 IP 충돌 감지 및 캐시 일괄 갱신<br>4. **ARP Spoofing**: 공격자가 비인가 ARP Reply를 반복 전송해 A·GW 캐시를 조작, MITM(패킷 도청·수정·차단)<br>5. **ARP Redirect**: 공격자가 GW인 척 서브넷 전체에 ARP Reply 발송해 영향 범위 확대 |
| **비교** | **ARP (IPv4)**<br>- 주소 변환: ARP Request/Reply<br>- 질의 방식: 브로드캐스트<br>- 보안: 인증 없음(Spoofing 취약)<br><br>**NDP (IPv6, ICMPv6 기반)**<br>- 주소 변환: Neighbor Solicitation/Advertisement<br>- 질의 방식: 요청 노드 멀티캐스트(트래픽 최소화)<br>- 보안: SEND(Secure NDP) + CGA 기반 강화 |
| **차별화** | **ARP 보안 취약점 대응 실무 전략**<br>1. **DHCP Snooping → DAI 순차 적용**: DAI는 DHCP Snooping의 IP-MAC-포트 바인딩 테이블을 검증 기준으로 사용하므로 DHCP Snooping을 먼저 활성화해야 하며, 순서를 어기면 모든 ARP 패킷이 차단되어 통신 불가 발생. 신뢰 포트(업링크·서버)는 DAI Trusted 설정으로 제외<br>2. **Gratuitous ARP 남용 탐지**: 공격자가 지속적 Spoofing 유지를 위해 Gratuitous ARP를 초당 수회 전송하므로, ARPWatch/IDS로 동일 IP의 MAC 변경 빈도(분당 3회 초과 등) 임계값 기반 자동 차단<br>3. **무선 환경 강화**: AP의 Client Isolation(단말 간 직접 통신 차단) 활성화, WPA3 Enterprise + 802.1X 인증으로 비인가 단말 접속 원천 차단 |
