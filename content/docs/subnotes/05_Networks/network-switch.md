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
| **정의** | 수신한 패킷을 목적지 주소를 분석하여 해당 포트로만 선택적으로 전달하는 네트워크 중계 장비로, 허브와 달리 충돌 도메인을 포트 단위로 분리하며 인식하는 주소 유형에 따라 L2~L7으로 구분됨 |
| **키워드** | MAC Learning, VLAN, STP/RSTP, LACP, L4 스위치(로드밸런싱), L7 스위치(SSL 오프로딩·콘텐츠 라우팅) |
| **개념도** | `[L2 스위치]` MAC 테이블 기반 포트 선택 전달: A→B 통신 시 C·D 포트는 차단<br>`[L4 판단]` IP헤더+TCP포트만 확인 → IP/포트로 서버 선택<br>`[L7 판단]` IP헤더+TCP포트+GET /api/users(URL)+Cookie+Host(가상호스트) → 콘텐츠 기반 서버 선택 |
| **구성요소** | 1. **계층별 스위치 분류**: L1 더미허브(신호 복사)/L2 스위치(MAC, VLAN·STP)/L3 스위치·라우터(IP, 라우팅)/L4 스위치(IP+포트, 로드밸런싱·NAT)/L7 스위치·ADC(HTTP URL·Cookie, 콘텐츠 라우팅·SSL 오프로딩)<br>2. **L2 핵심 기술**: MAC Learning(소스 MAC-포트 테이블 저장), STP/RSTP(L2 루프 차단, 브로드캐스트 스톰 방지), VLAN(브로드캐스트 도메인 분리), LACP(포트 링크 집계)<br>3. **L4 스위치**: 전송계층(IP+포트) 분석, 빠른 처리(헤더만), Round Robin 등 IP/포트 기반 로드밸런싱, SSL 처리 불가<br>4. **L7 스위치**: 응용계층(HTTP, URL, Cookie) 분석, URL 경로·세션 기반 로드밸런싱, SSL 오프로딩 가능 |
| **비교** | **L4 스위치**<br>- 분석 계층: 전송계층(IP+포트)<br>- 처리 속도: 빠름<br>- SSL 처리: 불가<br>- 활용: DB 서버 로드밸런싱, 게임 서버(AWS NLB)<br><br>**L7 스위치**<br>- 분석 계층: 응용계층(HTTP, URL, Cookie)<br>- 처리 속도: 상대적으로 느림(페이로드 분석)<br>- SSL 처리: 가능(SSL 오프로딩)<br>- 활용: 마이크로서비스 API 게이트웨이(AWS ALB, Nginx Ingress) |
| **차별화** | **계층별 스위치 선택 실무 전략**<br>1. **마이크로서비스 API 게이트웨이**: /api/order, /api/payment 등 경로별 라우팅이 필요하면 L7 스위치(Nginx, HAProxy, AWS ALB) 도입, URL·HTTP 메서드 기반 라우팅 및 인증·속도 제한을 게이트웨이 레이어에서 일괄 처리<br>2. **고성능 저지연 서비스는 L4 선택**: 금융 거래·게임 서버는 L7의 페이로드 파싱 지연을 피해 L4 NLB(마이크로초 단위 지연) + DSR(Direct Server Return)로 처리량 극대화<br>3. **Kubernetes Ingress L7 트래픽 관리**: 컨테이너 환경의 동적 서비스 생성·삭제에 대응해 Nginx/AWS ALB Ingress Controller로 서비스 등록·삭제를 자동으로 L7 라우팅 규칙에 반영, STP는 수렴 시간 문제로 RSTP(802.1w)·MSTP(802.1s)로 대체 |
