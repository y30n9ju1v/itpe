---
title: "IPv6 헤더구조와 IPv4 전환 방안"
date: 2026-07-12T18:13:12+09:00
tags: ["네트워크", "IPv6", "PMTUD", "이중스택", "터널링", "NAT64", "서브노트"]
draft: false
---

# IPv6 헤더구조와 IPv4 전환 방안 서브노트

> **두음 머리에 박기 🧠**
> - **이·터·주** (IPv4→IPv6 전환 방안 3가지: **이**중스택 Dual Stack, **터**널링 Tunneling, **주**소변환 NAT64+DNS64)
> - **V·T·F·N·H** (IPv6 고정헤더 6개 필드: **V**ersion, **T**raffic Class, **F**low Label, payload Length, **N**ext Header, **H**op Limit) |

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **IPv6(Internet Protocol version 6)** |
| **정의** | 128비트 주소 체계로 사실상 무한한 주소 공간과 보안·QoS·자동설정을 기본 탑재한 차세대 인터넷 프로토콜로, IPv4의 주소 고갈·헤더 복잡성·보안 한계를 근본적으로 해결하도록 설계됨 |
| **키워드** | 128비트 주소, 고정 40바이트 헤더, 확장 헤더 체인, PMTUD, 이중스택/터널링/NAT64, SLAAC |
| **개념도** | IPv6 고정 헤더(40B): Version(4)｜Traffic Class(8)｜Flow Label(20) / Payload Length(16)｜Next Header(8)｜Hop Limit(8) / Source(128) / Destination(128)<br>확장 헤더 체인: IPv6헤더 → [Hop-by-Hop] → [Routing] → [Fragment] → TCP/UDP |
| **구성요소** | 1. **헤더 필드**: Traffic Class(QoS 분류, IPv4 TOS 대응), Flow Label(동일 흐름 식별), Hop Limit(IPv4 TTL 동일). IPv4 대비 체크섬·단편화 필드·IHL·Options 제거<br>2. **패킷 단편화**: IPv4는 라우터/호스트 모두 단편화 가능(MTU 기본 576B), IPv6는 송신 호스트만 단편화하며 라우터는 초과 시 드롭 후 ICMPv6 "Packet Too Big" 응답, PMTUD(Path MTU Discovery) 필수(MTU 기본 1,280B)<br>3. **이중 스택(Dual Stack)**: IPv4+IPv6 스택 동시 운용, DNS 응답 따라 자동 선택<br>4. **터널링(Tunneling)**: IPv6 패킷을 IPv4로 캡슐화(6in4, 6to4, Teredo, ISATAP)<br>5. **NAT64+DNS64**: IPv6 전용 호스트가 NAT64 장비 경유해 IPv4 서버 접근, DNS64가 AAAA 없을 시 A 레코드를 합성 응답 |
| **비교** | **IPv4**<br>- 주소: 32비트(약 43억 개)<br>- 헤더: 가변(20~60B)<br>- 단편화: 라우터·호스트<br>- ARP 대체: 해당 없음(ARP 자체 사용)<br><br>**IPv6**<br>- 주소: 128비트(약 3.4×10^38개)<br>- 헤더: 고정(40B)<br>- 단편화: 호스트만(PMTUD 필수)<br>- ARP 대체: NDP(ICMPv6 기반) |
| **차별화** | **IPv6 전환 및 트러블슈팅 실무 전략**<br>1. **기업망 단계적 이중 스택 전환**: 코어·배포 계층부터 이중 스택 적용 후 엣지로 확산, IPAM 도구로 IPv4·IPv6 통합 관리, 레거시 애플리케이션 IPv6 지원 여부 사전 검증<br>2. **PMTUD 블랙홀 문제 해결**: 방화벽이 ICMPv6 Type 2(Packet Too Big)를 차단하면 패킷이 무한 드롭되므로, 명시적 허용 및 MSS Clamping으로 단기 대응<br>3. **Happy Eyeballs 적용**: 서버가 IPv4만 지원 시 발생하는 연결 지연을 막기 위해 RFC 8305(Happy Eyeballs v2)로 IPv6·IPv4 병렬 연결 시도 후 먼저 성공한 경로 사용, NAT64 연동으로 IPv6 전용 클라이언트 지원 |
