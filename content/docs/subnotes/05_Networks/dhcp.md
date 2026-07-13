---
title: "DHCP 구조와 동작"
date: 2026-07-13T18:13:12+09:00
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
| **정의** | IP 주소·서브넷·게이트웨이·DNS 등 네트워크 구성 정보를 클라이언트에 동적으로 할당하는 응용 계층 프로토콜로, UDP 포트 67(서버)·68(클라이언트)을 사용하는 RFC 2131 표준 |
| **키워드** | DORA, Lease(임대), Relay Agent, DHCP Snooping, Static Binding, DHCPv6/SLAAC |
| **개념도** | 클라이언트 → **Discover**(Broadcast) → DHCP서버 → **Offer**(IP·임대시간 제안) → 클라이언트 → **Request**(Broadcast, IP 수락) → DHCP서버 → **ACK**(IP·서브넷·GW·DNS·임대시간 확정) → [IP 설정 완료, 임대 시작] |
| **구성요소** | 1. **Discover**: 클라이언트가 브로드캐스트로 서버 탐색<br>2. **Offer**: 서버가 할당 가능 IP·임대시간 제안<br>3. **Request**: 클라이언트가 선택 IP 수락 요청(다수 서버에 알림)<br>4. **ACK**: 서버가 최종 확인 및 IP·서브넷·GW·DNS·임대시간 전달<br>5. **Relay Agent**: DHCP 브로드캐스트가 라우터를 통과하지 못하므로 서브넷마다 Relay Agent(ip helper-address)로 단일 서버가 다수 서브넷 관리 |
| **비교** | **DHCP**<br>- IP 할당: 동적+정적<br>- 추가 정보: GW·DNS·옵션 다수<br>- 서브넷 간: Relay Agent 지원<br><br>**BOOTP / RARP**<br>- IP 할당: 정적 전용(BOOTP) / MAC→IP(RARP)<br>- 추가 정보: GW까지(BOOTP) / IP만(RARP)<br>- 현재 사용: 모두 DHCP로 대체되어 사라짐 |
| **차별화** | **DHCP 이중화 및 보안 강화 실무 전략**<br>1. **DHCP Failover 이중화**: Windows Server DHCP Failover 또는 ISC DHCP Failover로 Active-Standby 구성, Split Scope(80/20 룰)로 단일 서버 장애 대비<br>2. **DHCP Snooping + Dynamic ARP Inspection 연계 보안**: 비인가 Rogue DHCP 서버를 스위치 포트 레벨에서 차단하고, Trusted Port(업링크)만 DHCP 응답 허용, DAI와 병행하여 ARP Spoofing까지 방어<br>3. **IPv6 환경 전환**: IPv6에서는 DHCPv6 또는 SLAAC(Stateless Address Autoconfiguration)으로 자동 설정이 이루어지나, DHCP는 IPv4 네트워크의 핵심 표준으로 유지 |
