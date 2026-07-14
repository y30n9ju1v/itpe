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
| **정의** | 128비트 주소체계, 사실상 무한 주소공간+보안·QoS·자동설정 기본탑재한 차세대 IP, IPv4 주소고갈·헤더복잡성·보안한계 근본해결 설계 |
| **키워드** | 128비트 주소, 고정 40바이트 헤더, 확장 헤더 체인, PMTUD, 이중스택/터널링/NAT64, SLAAC |
| **개념도** | IPv6 고정 헤더(40B): Version(4)｜Traffic Class(8)｜Flow Label(20) / Payload Length(16)｜Next Header(8)｜Hop Limit(8) / Source(128) / Destination(128)<br>확장 헤더 체인: IPv6헤더 → [Hop-by-Hop] → [Routing] → [Fragment] → TCP/UDP |
| **구성요소** | 1. **헤더 필드**: Traffic Class(QoS분류, IPv4 TOS 대응), Flow Label(동일흐름 식별), Hop Limit(IPv4 TTL 동일) / IPv4 대비 체크섬·단편화필드·IHL·Options 제거<br>2. **패킷 단편화**: IPv4는 라우터/호스트 모두 단편화(MTU 기본 576B), IPv6는 송신호스트만 단편화 → 라우터 초과 시 드롭+ICMPv6 "Packet Too Big" 응답, PMTUD 필수(MTU 기본 1,280B)<br>3. **이중 스택**: IPv4+IPv6 동시운용, DNS 응답따라 자동선택<br>4. **터널링**: IPv6 패킷 → IPv4 캡슐화(6in4, 6to4, Teredo, ISATAP)<br>5. **NAT64+DNS64**: IPv6전용 호스트 → NAT64 경유 IPv4 서버접근, DNS64가 AAAA 부재 시 A레코드 합성응답 |
| **비교** | **IPv4**<br>- 주소: 32비트(약 43억 개)<br>- 헤더: 가변(20~60B)<br>- 단편화: 라우터·호스트<br>- ARP 대체: 해당 없음(ARP 자체 사용)<br><br>**IPv6**<br>- 주소: 128비트(약 3.4×10^38개)<br>- 헤더: 고정(40B)<br>- 단편화: 호스트만(PMTUD 필수)<br>- ARP 대체: NDP(ICMPv6 기반) |
| **차별화** | **IPv6 전환 및 트러블슈팅 실무 전략**<br>1. **기업망 단계적 이중스택 전환**: 코어·배포계층 우선 적용 후 엣지 확산, IPAM 도구로 IPv4·IPv6 통합관리, 레거시앱 IPv6 지원여부 사전검증<br>2. **PMTUD 블랙홀 해결**: 방화벽이 ICMPv6 Type2(Packet Too Big) 차단 시 패킷 무한드롭 → 명시적 허용+MSS Clamping 단기대응<br>3. **Happy Eyeballs 적용**: IPv4전용 서버 연결지연 방지 → RFC 8305로 IPv6·IPv4 병렬시도 후 선성공 경로 사용, NAT64 연동으로 IPv6전용 클라이언트 지원 |
