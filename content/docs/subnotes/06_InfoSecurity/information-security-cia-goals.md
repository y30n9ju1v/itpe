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
| **정의** | 정보보안이란 인가되지 않은 접근·사용·폭로·붕괴·수정·파괴로부터 정보와 정보시스템을 보호하여 **기밀성·무결성·가용성**을 제공하는 것이며, 각 목적은 스니핑·스푸핑·변조·DoS 등 고유한 공격 유형에 의해 위협받는다 |
| **키워드** | 기밀성, 무결성, 가용성, 스니핑/스푸핑, DoS/DDoS |
| **개념도** | `              기밀성(Confidentiality)`<br>`                    △`<br>`                   / \`<br>`                  /   \`<br>`                 /     \`<br>`    무결성 ——— ◎ ——— 가용성`<br>`  (Integrity)   정보   (Availability)`<br>`               시스템` |
| **구성요소** | 1. **기밀성(Confidentiality)**: 허가받지 않은 사용자에게 정보가 노출되지 않도록 보호 (암호화, 접근제어, 인증) — 위협: 스누핑, 스니핑, 스푸핑, 가로채기<br>2. **무결성(Integrity)**: 허가받지 않은 사용자에 의해 정보가 변경되지 않도록 보호 (해시함수, 디지털서명, MDC) — 위협: 변경, 위조, 가장, 재연, 부인<br>3. **가용성(Availability)**: 허가받은 사용자의 정상적인 접근을 보장 (이중화, BCP, DRS, Anti-DDoS) — 위협: 서비스거부(DoS), 분산서비스거부(DDoS) |
| **비교** | **기밀성 위협 공격**<br>- 스누핑(Snooping): 네트워크 상에 떠도는 중요 정보를 몰래 획득 (무선랜 해킹, IGMP/DHCP 스누핑)<br>- 스니핑(Sniffing): 상대방의 패킷·정보를 훔쳐보거나 다른 형태의 정보를 획득 (Switch Jamming, ARP/ICMP Redirect, 트래픽 분석)<br>- 스푸핑(Spoofing): TCP/IP 구조적 결함을 이용해 임의의 웹사이트로 유도하여 정보 획득 (ARP/IP/DNS 스푸핑)<br>- 가로채기(Interception): 접근 권한이 없는 사용자가 정보에 대한 권한을 얻는 행위 (SQL Injection, XSS)<br><br>**무결성 위협 공격**<br>- 변경(Modification): 정보를 차단·접근한 후 이득이 되는 정보로 변경 (악성코드, 바이러스, 웜, 랜섬웨어)<br>- 위조(Fabrication): 주로 발신 근원지를 변경하는 기법 (파밍)<br>- 가장(Masquerading): 사용자의 PIN을 훔쳐 해당 사용자인 척하거나 은행사이트를 가장 (피싱, 스피어 피싱)<br>- 재연(Replaying): 사용자가 보내는 메시지 사본을 얻어 나중에 다시 전송 (재생공격)<br>- 부인(Repudiation): 송신자/수신자가 자신의 행동을 부인 (Man in the Middle, MITM)<br><br>**가용성 위협 공격**<br>- 서비스거부(DoS): 서버 리소스를 독점하여 시스템 일부를 파괴하거나 사용 불가하게 함 (Ping of Death, Land Attack, Slowloris, Smurf)<br>- 분산서비스거부(DDoS): 여러 공격자를 분산 배치해 트래픽을 급증시켜 가용성 훼손 (SYN/UDP/ICMP Flooding) |
| **차별화** | **CIA 목적별 대응방안 및 정보보안 전략 로드맵**<br>1. **기밀성 대응**: 사용자 인증(생체인식, 토큰, 2팩터), 암호화(대칭키/공개키, SSH, VPN, PGP, S/MIME), 접근제어(SAC, NAC, MAC, DAC, RBAC, 방화벽, 망분리)<br>2. **무결성 대응**: 메시지 무결성 검증(해시, MDC), 메시지 인증(MAC, HMAC), 디지털 서명(부인방지, PKI), 암호 알고리즘(SHA-2, AES, SEED)<br>3. **가용성 대응**: Anti-DDoS, Fault Tolerance(RAID, Replication), High Availability(Fail-Over, Clustering), 백업, DRS(RPO/RTO), BCP(BIA, MTPD)<br>4. **기업 전략**: IT 거버넌스·정보보호 거버넌스 구축, 보안 조직·컴플라이언스·통합 보안 관리, 24×365 모니터링, ISMS-P 획득을 통해 CIA 관점의 공격에 체계적으로 대응 |
