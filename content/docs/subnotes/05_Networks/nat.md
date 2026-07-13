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
| **정의** | 사설 IP 주소와 공인 IP 주소를 상호 변환하여 IPv4 주소 부족을 해소하는 네트워크 기술로, RFC 1918 사설 주소 공간(10.x, 172.16.x, 192.168.x)을 공인 IP에 매핑하여 인터넷 접속을 제공함 |
| **키워드** | Static/Dynamic NAT, PAT(NAPT), SNAT/DNAT, Connection Tracking, NAT Traversal(STUN/TURN/ICE), NAT-T |
| **개념도** | 내부 사설망(PC1~3: 192.168.1.x) → NAT 라우터(공인IP 1.2.3.4) → 공인 인터넷<br>변환 테이블(PAT): 192.168.1.10:1025 → 1.2.3.4:5001 (포트로 다수 호스트 구분) |
| **구성요소** | 1. **Static NAT**: 사설 IP ↔ 공인 IP 1:1 고정 매핑(서버 공개용)<br>2. **Dynamic NAT**: 공인 IP 풀(Pool)에서 동적 할당<br>3. **PAT/NAPT**: 하나의 공인 IP + 포트 번호로 다수 호스트 구분, 최대 65,535 포트<br>4. **SNAT(아웃바운드)**: 내부→외부 시 소스 IP를 공인 IP로 교체<br>5. **DNAT(인바운드)**: 외부→내부 시 목적지 IP를 사설 IP로 역변환, Connection Tracking으로 세션 상태 유지 |
| **비교** | **NAT 장점**<br>- IP 절약: 단 하나의 공인 IP로 수천 대 동시 접속<br>- 보안: 내부 IP 구조 비노출<br><br>**NAT 한계**<br>- P2P 통신 제한(인바운드 개시 불가, NAT Traversal 필요)<br>- IPSec 충돌(패킷 헤더 변경으로 ESP 무결성 검증 실패)<br>- VoIP 어려움(SIP/RTP 페이로드 수정 필요, ALG) |
| **차별화** | **NAT 관리 및 VPN 연동 실무 전략**<br>1. **NAT 정책 문서화**: NAT 규칙을 CMDB와 연동하여 관리, DNAT 규칙은 방화벽 ACL과 반드시 쌍으로 관리<br>2. **클라우드 프라이빗 서브넷 인터넷 접근**: NAT Gateway를 퍼블릭 서브넷에 배치하고 프라이빗 서브넷 라우팅 테이블에 0.0.0.0/0 → NAT GW 경로 설정<br>3. **NAT-T(NAT Traversal, RFC 3948)**: IPSec 터널 패킷이 NAT를 경유하면 ESP 무결성 검증이 실패하므로, ESP 패킷을 UDP 4500 포트로 캡슐화해 NAT 통과 허용. IPv6 전환 완료 전까지 NAT64/DNS64로 IPv4↔IPv6 혼재 환경 지원 |
