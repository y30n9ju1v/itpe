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
| **정의** | 응용~전송계층 암호화·인증 제공 SSL/TLS, 네트워크계층(L3) AH·ESP로 기밀성·무결성·인증 보장 IPSec, 공중망→사설망처럼 암호화터널 구성 VPN — 전송구간 보안 프로토콜군 |
| **키워드** | TLS Handshake(2-RTT/1-RTT), Pre-Master/Master Secret, AH/ESP, SA(SPI), 전송/터널 모드, IKEv2, Site-to-Site/Remote Access |
| **개념도** | **[ TLS 1.2 vs TLS 1.3 Handshake RTT 비교 ]**<br>`TLS 1.2(2-RTT): ClientHello → ServerHello+Cert+KeyExchange → ClientKeyExchange+Finished → Finished`<br>`TLS 1.3(1-RTT): ClientHello(키공유) → ServerHello+Cert+Finished → Finished`<br>**[ IPSec 터널 모드 ESP 패킷 캡슐화 ]**<br>`[새 IP 헤더][ESP 헤더][원본 IP 헤더][원본 페이로드][ESP 트레일러][ESP 인증]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`←────────────── 암호화 ──────────────→`<br>**[ VPN 2대 유형 구성 ]**<br>`Site-to-Site: 본사 LAN ──[VPN GW]──인터넷──[VPN GW]── 지사 LAN (IPSec)`<br>`Remote Access: 원격 PC(브라우저) ──HTTPS──[SSL VPN 서버]── 내부망 (SSL)` |
| **구성요소** | 1. **TLS 세션키생성**: Pre-Master Secret+Client Random+Server Random → Master Secret → 세션키/MAC키/IV 파생<br>2. **IKE**: IKEv2 기반 IKE_SA_INIT(DH키교환)→IKE_AUTH(신원인증, Child SA수립)→CREATE_CHILD_SA(재키잉) SA협상<br>3. **AH/ESP**: AH=헤더포함 인증·무결성만(암호화없음, NAT통과어려움), ESP=페이로드 암호화+인증+무결성(NAT통과가능)<br>4. **SA/SPD/SAD**: SA=SPI·목적지IP·프로토콜 식별 단방향연결, SPD(정책DB) 적용여부판단 → SAD(연결DB) SA조회 송수신처리<br>5. **VPN 기술요소**: 터널링(GRE/IPSec/L2TP/PPTP), 암호화(AES-256), 인증(PSK/인증서/OTP), 키교환(IKEv2/ECDHE) |
| **비교** | **IPSec VPN**<br>- 동작계층: L3(네트워크), 전용클라이언트SW 필요<br>- 적용: Site-to-Site 본·지점연결 강점, NAT환경 ESP+NAT-T(UDP 4500) 통과<br><br>**SSL VPN**<br>- 동작계층: L4(TLS)/L7(HTTPS), 웹브라우저 클라이언트리스 접속<br>- 적용: 재택근무·이동단말 원격개인접속 강점, TCP 443 NAT/방화벽 통과용이 |
| **차별화** | **전송구간 보안 프로토콜 실무 전환·설계 로드맵**<br>1. **TLS 1.3 우선협상 전환**: 레거시 방화벽·IDS 미지원 시 TLS 1.2 잔류 → BEAST·POODLE 노출 → `ssl_protocols TLSv1.2 TLSv1.3` 설정, TLS 1.3 우선협상, 인증서 유효기간 90일 이하<br>2. **0-RTT 재전송공격 방어**: TLS 1.3 0-RTT는 재연결지연 없으나 Replay Attack 취약 → GET등 멱등요청만 허용, POST·결제는 1-RTT강제, 세션티켓 주기로테이션<br>3. **NAT환경 IPSec 설계**: NAT통과 시 AH미동작 → ESP터널모드+NAT-T(RFC 3948), IKEv2+ECDHE 조합 PFS보장<br>4. **Zero Trust 하이브리드 전환**: 전통VPN 인증후 내부망전체접근 → 계정탈취 시 lateral movement 용이 → IPSec VPN은 사이트간연결만 유지, 원격개인접속은 ZTNA 최소권한전환 |
