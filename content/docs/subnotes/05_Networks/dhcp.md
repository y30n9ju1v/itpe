---
title: "DHCP 구조와 동작"
date: 2026-07-12T18:13:12+09:00
tags: ["네트워크", "DHCP", "DORA", "Relay Agent", "DHCP Snooping", "서브노트"]
draft: false
---

# DHCP 구조와 동작 서브노트

> **두음 머리에 박기 🧠**
> - **D·O·R·A** (DHCP 4단계 핸드셰이크: **D**iscover, **O**ffer, **R**equest, **A**CK)
> - **갱·재·반** (임대 갱신 3단계: T/2 **갱**신Renew, T×7/8 **재**시도Rebind, T만료 **반**납)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **DHCP(Dynamic Host Configuration Protocol)** |
| **정의** | IP·서브넷·게이트웨이·DNS 등 네트워크 구성정보를 클라이언트에 동적할당하는 응용계층 프로토콜, UDP 포트 67(서버)·68(클라이언트) 사용 RFC 2131 표준 |
| **키워드** | DORA, Lease(임대), Relay Agent, DHCP Snooping, Static Binding, DHCPv6/SLAAC |
| **개념도** | 클라이언트 → **Discover**(Broadcast) → DHCP서버 → **Offer**(IP·임대시간 제안) → 클라이언트 → **Request**(Broadcast, IP 수락) → DHCP서버 → **ACK**(IP·서브넷·GW·DNS·임대시간 확정) → [IP 설정 완료, 임대 시작] |
| **구성요소** | 1. **Discover**: 클라이언트 브로드캐스트로 서버탐색<br>2. **Offer**: 서버가 할당가능 IP·임대시간 제안<br>3. **Request**: 클라이언트가 선택IP 수락요청(다수서버에 알림)<br>4. **ACK**: 서버 최종확인 + IP·서브넷·GW·DNS·임대시간 전달<br>5. **Relay Agent**: DHCP 브로드캐스트가 라우터 미통과 → 서브넷마다 Relay Agent(ip helper-address)로 단일서버가 다수서브넷 관리 |
| **비교** | **DHCP**<br>- IP할당: 동적+정적<br>- 추가정보: GW·DNS·옵션 다수<br>- 서브넷간: Relay Agent 지원<br><br>**BOOTP / RARP**<br>- IP할당: 정적전용(BOOTP) / MAC→IP(RARP)<br>- 추가정보: GW까지(BOOTP) / IP만(RARP)<br>- 현재사용: 모두 DHCP로 대체·소멸 |
| **차별화** | **DHCP 이중화 및 보안강화 실무전략**<br>1. **DHCP Failover 이중화**: Windows Server 또는 ISC DHCP Failover로 Active-Standby 구성, Split Scope(80/20 룰)로 단일서버 장애대비<br>2. **DHCP Snooping+DAI 연계보안**: 비인가 Rogue DHCP서버를 스위치포트 레벨서 차단, Trusted Port(업링크)만 DHCP 응답허용, DAI 병행해 ARP Spoofing까지 방어<br>3. **IPv6 환경전환**: IPv6는 DHCPv6 또는 SLAAC(Stateless Address Autoconfiguration)으로 자동설정, DHCP는 IPv4 핵심표준으로 유지 |
