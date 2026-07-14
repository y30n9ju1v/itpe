---
title: "네트워크 스위치 유형과 L4/L7 스위치"
date: 2026-07-12T18:13:12+09:00
tags: ["네트워크", "스위치", "VLAN", "STP", "L4스위치", "L7스위치", "서브노트"]
draft: false
---

# 네트워크 스위치 유형과 L4/L7 스위치 서브노트

> **두음 머리에 박기 🧠**
> - **학·포·필·플** (스위치 4대 동작: MAC 주소 **학**습 Learning, **포**워딩 Forwarding, **필**터링 Filtering, **플**러딩 Flooding)
> - **L2·L3·L4·L7** (계층별 스위치 판단 기준: L2 MAC주소, L3 IP주소, L4 IP+포트, L7 HTTP URL/Cookie) |

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **네트워크 스위치(Network Switch) 및 L4/L7 스위치** |
| **정의** | 수신패킷 목적지주소 분석 → 해당포트 선택전달 중계장비, 허브와 달리 충돌도메인 포트단위 분리, 인식주소유형별 L2~L7 구분 |
| **키워드** | MAC Learning, VLAN, STP/RSTP, LACP, L4 스위치(로드밸런싱), L7 스위치(SSL 오프로딩·콘텐츠 라우팅) |
| **개념도** | `[L2 스위치]` MAC 테이블 기반 포트 선택 전달: A→B 통신 시 C·D 포트는 차단<br>`[L4 판단]` IP헤더+TCP포트만 확인 → IP/포트로 서버 선택<br>`[L7 판단]` IP헤더+TCP포트+GET /api/users(URL)+Cookie+Host(가상호스트) → 콘텐츠 기반 서버 선택 |
| **구성요소** | 1. **계층별 분류**: L1 더미허브(신호복사)/L2(MAC, VLAN·STP)/L3 스위치·라우터(IP, 라우팅)/L4(IP+포트, 로드밸런싱·NAT)/L7·ADC(HTTP URL·Cookie, 콘텐츠라우팅·SSL오프로딩)<br>2. **L2 핵심기술**: MAC Learning(소스MAC-포트 테이블 저장), STP/RSTP(L2루프 차단, 브로드캐스트스톰 방지), VLAN(브로드캐스트도메인 분리), LACP(포트링크 집계)<br>3. **L4 스위치**: 전송계층(IP+포트) 분석, 헤더만 → 빠른처리, Round Robin 등 IP/포트기반 로드밸런싱, SSL처리 불가<br>4. **L7 스위치**: 응용계층(HTTP, URL, Cookie) 분석, URL경로·세션기반 로드밸런싱, SSL오프로딩 가능 |
| **비교** | **L4 스위치**<br>- 분석계층: 전송계층(IP+포트)<br>- 처리속도: 빠름<br>- SSL처리: 불가<br>- 활용: DB서버 로드밸런싱, 게임서버(AWS NLB)<br><br>**L7 스위치**<br>- 분석계층: 응용계층(HTTP, URL, Cookie)<br>- 처리속도: 상대적 느림(페이로드분석)<br>- SSL처리: 가능(SSL오프로딩)<br>- 활용: MSA API게이트웨이(AWS ALB, Nginx Ingress) |
| **차별화** | **계층별 스위치 선택 실무 전략**<br>1. **MSA API 게이트웨이**: /api/order 등 경로별 라우팅 필요 → L7(Nginx, HAProxy, ALB) 도입, URL·메서드기반 라우팅+인증·속도제한 게이트웨이 일괄처리<br>2. **고성능 저지연은 L4 선택**: 금융거래·게임서버 → L7 페이로드파싱 지연 회피, L4 NLB(마이크로초 지연)+DSR로 처리량 극대화<br>3. **K8s Ingress L7 트래픽관리**: 컨테이너 동적 서비스생성·삭제 → Nginx/ALB Ingress Controller로 L7 라우팅규칙 자동반영, STP는 수렴지연 → RSTP(802.1w)·MSTP(802.1s) 대체 |
