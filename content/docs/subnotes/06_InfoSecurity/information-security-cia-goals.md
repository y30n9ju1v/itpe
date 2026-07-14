---
title: "정보보안 3대 목적과 위협 공격 (CIA 트라이어드)"
date: 2026-07-12T15:26:34+09:00
tags: ["정보보안", "CIA", "기밀성", "무결성", "가용성", "서브노트"]
draft: false
---

# 정보보안 3대 목적과 위협 공격 (CIA 트라이어드) 서브노트

> **두음 머리에 박기 🧠**
> - **기·무·가** (정보보안 3대 목적: **기**밀성 Confidentiality, **무**결성 Integrity, **가**용성 Availability)
> - **스·스·스·가** (기밀성을 위협하는 공격: **스**누핑 Snooping, **스**니핑 Sniffing, **스**푸핑 Spoofing, **가**로채기 Interception)
> - **변·위·가·재·부** (무결성을 위협하는 공격: **변**경 Modification, **위**조 Fabrication, **가**장 Masquerading, **재**연 Replaying, **부**인 Repudiation)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **정보보안 3대 목적 (CIA Triad: Confidentiality, Integrity, Availability)** |
| **정의** | 인가되지 않은 접근·사용·폭로·붕괴·수정·파괴로부터 정보·정보시스템 보호 → **기밀성·무결성·가용성** 제공, 각 목적은 스니핑·스푸핑·변조·DoS 등 고유 공격유형으로 위협받음 |
| **키워드** | 기밀성, 무결성, 가용성, 스니핑/스푸핑, DoS/DDoS |
| **개념도** | `              기밀성(Confidentiality)`<br>`                    △`<br>`                   / \`<br>`                  /   \`<br>`                 /     \`<br>`    무결성 ——— ◎ ——— 가용성`<br>`  (Integrity)   정보   (Availability)`<br>`               시스템` |
| **구성요소** | 1. 기밀성(Confidentiality): 비인가 노출 방지 (암호화·접근제어·인증) — 위협: 스누핑·스니핑·스푸핑·가로채기<br>2. 무결성(Integrity): 비인가 변경 방지 (해시함수·디지털서명·MDC) — 위협: 변경·위조·가장·재연·부인<br>3. 가용성(Availability): 인가 사용자의 정상 접근 보장 (이중화·BCP·DRS·Anti-DDoS) — 위협: DoS·DDoS |
| **비교** | **기밀성 위협 공격**<br>- 스누핑: 네트워크상 정보 몰래 획득 (무선랜 해킹, IGMP/DHCP 스누핑)<br>- 스니핑: 패킷·정보 훔쳐보기 (Switch Jamming, ARP/ICMP Redirect, 트래픽분석)<br>- 스푸핑: TCP/IP 구조결함 이용해 임의 웹사이트 유도 (ARP/IP/DNS 스푸핑)<br>- 가로채기: 비인가 권한 획득 (SQL Injection, XSS)<br><br>**무결성 위협 공격**<br>- 변경: 차단·접근 후 이득되는 정보로 변경 (악성코드·바이러스·웜·랜섬웨어)<br>- 위조: 발신 근원지 변경 (파밍)<br>- 가장: PIN 탈취 후 사용자·은행사이트 사칭 (피싱, 스피어피싱)<br>- 재연: 메시지 사본 획득 후 재전송 (재생공격)<br>- 부인: 송/수신자가 행동 부인 (MITM)<br><br>**가용성 위협 공격**<br>- DoS: 서버 리소스 독점 → 시스템 파괴·사용불가 (Ping of Death, Land Attack, Slowloris, Smurf)<br>- DDoS: 다중 공격자 분산배치로 트래픽 급증 (SYN/UDP/ICMP Flooding) |
| **차별화** | **CIA 목적별 대응방안 및 정보보안 전략 로드맵**<br>1. 기밀성 대응: 사용자인증(생체·토큰·2FA), 암호화(대칭/공개키, SSH, VPN, PGP, S/MIME), 접근제어(SAC·NAC·MAC·DAC·RBAC, 방화벽, 망분리)<br>2. 무결성 대응: 무결성검증(해시·MDC), 메시지인증(MAC·HMAC), 디지털서명(부인방지·PKI), 암호알고리즘(SHA-2·AES·SEED)<br>3. 가용성 대응: Anti-DDoS, Fault Tolerance(RAID·Replication), High Availability(Fail-Over·Clustering), 백업, DRS(RPO/RTO), BCP(BIA·MTPD)<br>4. 기업 전략: IT/정보보호 거버넌스 구축, 보안조직·컴플라이언스·통합보안관리, 24×365 모니터링, ISMS-P 획득으로 체계적 대응 |
