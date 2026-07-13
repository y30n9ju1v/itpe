---
title: "전송계층 보안 프로토콜: SSL/TLS·IPSec·VPN"
date: 2026-07-12T13:24:45+09:00
tags: ["정보보안", "SSL", "TLS", "IPSec", "VPN", "서브노트"]
draft: false
---

# 전송계층 보안 프로토콜: SSL/TLS·IPSec·VPN 서브노트

> **두음 머리에 박기 🧠**
> - **IKE·AH·ESP** (IPSec 3대 구성 프로토콜: 키교환 **IKE** Internet Key Exchange, 인증 **AH** Authentication Header, 암호화+인증 **ESP** Encapsulating Security Payload)
> - **전·터** (IPSec 2대 동작 모드: 원본 IP 헤더 유지 **전**송모드 Transport, 전체 캡슐화 **터**널모드 Tunnel)
> - **IPSec·SSL** (VPN 2대 유형: 네트워크계층(L3) **IPSec** VPN, 응용계층(L4/7) **SSL** VPN)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **전송계층 보안 프로토콜 (SSL/TLS Handshake, IPSec AH/ESP, VPN)** |
| **정의** | 응용계층과 전송계층 사이에서 암호화·인증을 제공하는 **SSL/TLS**, 네트워크계층(L3)에서 AH·ESP로 기밀성·무결성·인증을 보장하는 **IPSec**, 공중망을 사설망처럼 암호화 터널로 구성하는 **VPN**을 포괄하는 전송구간 보안 프로토콜군 |
| **키워드** | TLS Handshake(2-RTT/1-RTT), Pre-Master/Master Secret, AH/ESP, SA(SPI), 전송/터널 모드, IKEv2, Site-to-Site/Remote Access |
| **개념도** | **[ TLS 1.2 vs TLS 1.3 Handshake RTT 비교 ]**<br>`TLS 1.2(2-RTT): ClientHello → ServerHello+Cert+KeyExchange → ClientKeyExchange+Finished → Finished`<br>`TLS 1.3(1-RTT): ClientHello(키공유) → ServerHello+Cert+Finished → Finished`<br>**[ IPSec 터널 모드 ESP 패킷 캡슐화 ]**<br>`[새 IP 헤더][ESP 헤더][원본 IP 헤더][원본 페이로드][ESP 트레일러][ESP 인증]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`←────────────── 암호화 ──────────────→`<br>**[ VPN 2대 유형 구성 ]**<br>`Site-to-Site: 본사 LAN ──[VPN GW]──인터넷──[VPN GW]── 지사 LAN (IPSec)`<br>`Remote Access: 원격 PC(브라우저) ──HTTPS──[SSL VPN 서버]── 내부망 (SSL)` |
| **구성요소** | 1. **TLS 세션키 생성**: Pre-Master Secret + Client Random + Server Random → Master Secret → 세션키/MAC키/IV 파생<br>2. **IKE (Internet Key Exchange)**: IKEv2 기반 IKE_SA_INIT(DH 키교환) → IKE_AUTH(신원인증, Child SA 수립) → CREATE_CHILD_SA(재키잉) 단계로 SA 협상<br>3. **AH/ESP**: AH는 헤더 포함 인증·무결성만 제공(암호화 없음, NAT 통과 어려움), ESP는 페이로드 암호화+인증+무결성 제공(NAT 통과 가능)<br>4. **SA/SPD/SAD**: SA(Security Association)는 SPI·목적지IP·프로토콜로 식별되는 단방향 논리 연결, SPD(정책 DB)로 적용 여부 판단 후 SAD(연결 DB)에서 SA 조회하여 송수신 처리<br>5. **VPN 기술요소**: 터널링(GRE/IPSec/L2TP/PPTP), 암호화(AES-256), 인증(PSK/인증서/OTP), 키교환(IKEv2/ECDHE) |
| **비교** | **IPSec VPN**<br>- **동작 계층**: L3(네트워크), 전용 클라이언트 소프트웨어 필요<br>- **적용**: Site-to-Site 본·지점 연결에 강점, NAT 환경은 ESP+NAT-T(UDP 4500)로 통과<br><br>**SSL VPN**<br>- **동작 계층**: L4(TLS)/L7(HTTPS), 웹브라우저로 클라이언트리스 접속 가능<br>- **적용**: 재택근무자·이동 단말의 원격 개인 접속에 강점, TCP 443 사용으로 NAT/방화벽 통과 용이 |
| **차별화** | **전송구간 보안 프로토콜의 실무 전환·설계 로드맵**<br>1. **TLS 1.3 우선 협상 전환**: 레거시 방화벽·IDS가 TLS 1.3을 지원하지 않아 TLS 1.2에 머무르면 BEAST·POODLE 취약점에 노출되므로, `ssl_protocols TLSv1.2 TLSv1.3` 설정 후 TLS 1.3을 우선 협상하도록 구성하고 인증서 유효기간을 90일 이하로 단축.<br>2. **0-RTT 재전송 공격 방어**: TLS 1.3 0-RTT는 재연결 지연을 없애지만 Replay Attack에 취약하므로, GET 등 멱등 요청에만 0-RTT를 허용하고 POST·결제 요청은 1-RTT를 강제하며 세션 티켓을 주기적으로 로테이션.<br>3. **NAT 환경 IPSec 설계**: NAT 장비 통과 시 AH 모드가 동작하지 않으므로 ESP 터널 모드 + NAT-T(RFC 3948)를 적용하고, IKEv2와 ECDHE를 조합해 PFS(Perfect Forward Secrecy)를 보장.<br>4. **Zero Trust와의 하이브리드 전환**: 전통 VPN은 인증 후 내부망 전체 접근을 허용해 계정 탈취 시 lateral movement가 용이하므로, IPSec VPN은 사이트 간 연결에만 유지하고 원격 개인 접속은 ZTNA 기반 최소 권한 접근으로 전환. |
