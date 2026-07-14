---
title: "NAT(Network Address Translation) 핵심 기능"
date: 2026-07-12T18:13:12+09:00
tags: ["네트워크", "NAT", "PAT", "SNAT", "DNAT", "NAT-T", "서브노트"]
draft: false
---

# NAT(Network Address Translation) 핵심 기능 서브노트

> **두음 머리에 박기 🧠**
> - **스·다·팻** (NAT 주소 변환 3유형: **스**태틱 Static NAT(1:1), **다**이나믹 Dynamic NAT(풀 할당), **팻** PAT/NAPT(포트 다중화))
> - **S·D** (변환 방향: 아웃바운드 소스 변환 **S**NAT, 인바운드 목적지 역변환 **D**NAT)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **NAT(Network Address Translation)** |
| **정의** | 사설IP↔공인IP 상호변환 → IPv4 주소부족 해소, RFC1918 사설대역(10.x/172.16.x/192.168.x) 공인IP 매핑 |
| **키워드** | Static/Dynamic NAT, PAT(NAPT), SNAT/DNAT, Connection Tracking, NAT Traversal(STUN/TURN/ICE), NAT-T |
| **개념도** | 내부 사설망(PC1~3: 192.168.1.x) → NAT 라우터(공인IP 1.2.3.4) → 공인 인터넷<br>변환 테이블(PAT): 192.168.1.10:1025 → 1.2.3.4:5001 (포트로 다수 호스트 구분) |
| **구성요소** | 1. **Static NAT**: 사설IP↔공인IP 1:1 고정매핑 (서버 공개용)<br>2. **Dynamic NAT**: 공인IP 풀(Pool) → 동적 할당<br>3. **PAT/NAPT**: 공인IP 1개+포트번호 → 다수호스트 구분, 최대 65,535포트<br>4. **SNAT(아웃바운드)**: 내부→외부, 소스IP→공인IP 교체<br>5. **DNAT(인바운드)**: 외부→내부, 목적지IP→사설IP 역변환, Connection Tracking으로 세션상태 유지 |
| **비교** | **NAT 장점**<br>- IP절약: 공인IP 1개 → 수천대 동시접속<br>- 보안: 내부IP 구조 비노출<br><br>**NAT 한계**<br>- P2P 제한 (인바운드 개시 불가 → NAT Traversal 필요)<br>- IPSec 충돌 (헤더변경 → ESP 무결성검증 실패)<br>- VoIP 곤란 (SIP/RTP 페이로드 수정필요, ALG) |
| **차별화** | **NAT 관리 및 VPN 연동 실무 전략**<br>1. **NAT 정책 문서화**: 규칙-CMDB 연동관리, DNAT 규칙은 방화벽ACL과 쌍 관리<br>2. **클라우드 프라이빗 서브넷 인터넷접근**: NAT Gateway → 퍼블릭 서브넷 배치, 프라이빗 라우팅테이블에 0.0.0.0/0→NAT GW 경로 설정<br>3. **NAT-T(RFC 3948)**: IPSec 터널이 NAT경유 시 ESP 무결성검증 실패 → ESP를 UDP 4500포트로 캡슐화해 통과. IPv6 전환 전까지 NAT64/DNS64로 IPv4↔IPv6 혼재 지원 |
