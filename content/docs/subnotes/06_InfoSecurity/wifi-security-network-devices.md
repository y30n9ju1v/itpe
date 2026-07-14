---
title: "네트워크 보안 장비(방화벽/IDS/IPS/VPN)와 무선랜 보안(WEP/WPA)"
date: 2026-07-11T11:38:05+09:00
tags: ["보안", "방화벽", "IDS", "IPS", "VPN", "무선보안", "WEP", "WPA", "서브노트"]
draft: false
---

# 네트워크 보안 장비(방화벽/IDS/IPS/VPN)와 무선랜 보안(WEP/WPA) 서브노트

> **두음 머리에 박기 🧠**
> - **차·탐·방·암** (4대 네트워크 보안 장비 핵심 역할: 방화벽 **차**단, IDS **탐**지, IPS 탐지+**방**지, VPN **암**호화 터널)
> - **정·동·앱·차** (방화벽 4대 유형: **정**적 패킷필터링(3계층), 세션추적 상태기반(**동**적/4계층), **앱**플리케이션방화벽 WAF(7계층), **차**세대방화벽 NGFW)
> - **동·8·라** (동적 WEP 3대 요소: **동**적 키 갱신, IEEE **8**02.1X 인증, **라**디우스 RADIUS 서버 위임) — WEP→동적WEP→WPA(TKIP)→WPA2(CCMP/AES)→WPA3(SAE) 발전 계보

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **네트워크 보안 4대 장비(방화벽·IDS·IPS·VPN)와 무선랜 보안 발전(WEP → 동적 WEP → WPA3)** |
| **정의** | 차단·탐지·방지·암호화 역할 계층수행 4대 네트워크보안장비 + IEEE 802.11 초기표준 WEP 24bit IV취약점을 802.1X+RADIUS 기반 동적키갱신으로 보완한 동적WEP 및 이후 WPA 계보 |
| **키워드** | 패킷필터링/Stateful/WAF/NGFW, 서명기반/이상기반 IDS, IPsec/SSL-VPN, RC4/IV, 802.1X, EAP, TKIP/CCMP/SAE |
| **개념도** | **[ 다층 방어(Defense in Depth) 구성 ]**<br>`인터넷 ──➔ [ 방화벽(경계) ] ──➔ DMZ[ IDS/IPS ] ──➔ 내부망 ──➔ 호스트 기반 방화벽`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`↕ VPN 터널(재택근무자)`<br>**[ 동적 WEP 무선 인증 동작 ]**<br>`무선단말 → AP: 연결요청 ➔ AP → RADIUS: 802.1X/EAP 인증위임 ➔ RADIUS: 자격증명검증`<br>&nbsp;&nbsp;`➔ RADIUS → AP: 인증성공+동적WEP키 ➔ AP → 단말: 키배포 ➔ 세션암호화(주기적 키갱신 반복)` |
| **구성요소** | 1. **방화벽**: 규칙기반 패킷차단/허용, 패킷필터링(3계층)→Stateful(4계층)→WAF(7계층)→NGFW(통합) 고도화<br>2. **IDS**: 서명기반(정확·신규공격미탐)/이상기반(신규탐지·오탐높음) → 알림(수동대응)<br>3. **IPS**: IDS+인라인 자동차단, 오탐 시 정상트래픽 차단위험<br>4. **VPN**: IPsec(네트워크계층, 사이트간)/SSL-TLS(브라우저기반, 원격접속)/WireGuard(경량고성능)<br>5. **WEP 취약점**: RC4스트림암호+24bit IV재사용 → Aircrack 등 수분내 크랙가능<br>6. **동적 WEP**: 802.1X+RADIUS 세션별 키자동배포·갱신 → 정적WEP 고정키노출 완화(RC4 자체한계 잔존) |
| **비교** | **IDS (침입탐지시스템)**<br>- 위치: 네트워크경유지점(비인라인/미러링)<br>- 대응: 탐지시 관리자알림만(수동대응), 오탐→알림과부하<br><br>**IPS (침입방지시스템)**<br>- 위치: 인라인(트래픽 직접통과)<br>- 대응: IDS탐지+실시간자동차단, 오탐 시 정상트래픽 차단위험 |
| **차별화** | **레거시 무선인프라 단계적 보안강화 로드맵**<br>1. **동적WEP=과도기적 보완책 한정**: RC4/IV 구조결함 잔존 → 레거시HW교체 전 임시조치, 최종 WPA2(CCMP/AES)이상 전환목표<br>2. **NGFW+제로트러스트 연계 → VPN한계 극복**: 전통VPN 내부망진입 후 무제한신뢰 한계 → NGFW 앱식별+ZTNA 결합, 세션 지속재검증<br>3. **IDS/IPS 오탐최소화 → SIEM연동**: 서명·이상기반 병행 시 대량경보 → SIEM 상관분석 실위협 우선순위화, 오차단 서비스장애 최소화 |
