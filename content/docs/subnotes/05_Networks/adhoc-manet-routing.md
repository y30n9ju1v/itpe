---
title: "Ad-hoc 네트워킹 라우팅 프로토콜"
date: 2026-07-12T18:13:12+09:00
tags: ["네트워크", "Ad-hoc", "MANET", "AODV", "DSR", "OLSR", "서브노트"]
draft: false
---

# Ad-hoc 네트워킹 라우팅 프로토콜 서브노트

> **두음 머리에 박기 🧠**
> - **선·반·하** (Ad-hoc 라우팅 3대 분류: **선**제적 Proactive, **반**응형 Reactive, **하**이브리드 Hybrid)
> - **O·D / A·D** (대표 프로토콜: Proactive는 **O**LSR·**D**SDV, Reactive는 **A**ODV·**D**SR)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **Ad-hoc Networking Routing Protocol (MANET 라우팅)** |
| **정의** | 고정 인프라(기지국·AP) 없이 단말이 라우터 역할 → 멀티홉 분산형 무선망, 대표 MANET, IEEE 802.11 기반 |
| **키워드** | MANET, Proactive(OLSR/DSDV), Reactive(AODV/DSR), Hybrid(ZRP), VANET/FANET |
| **개념도** | `[Infrastructure]` 단말A─[AP]─인터넷─[AP]─단말B (고정 인프라 필수)<br>`[Ad-hoc/MANET]` 단말A─(1홉)─단말B─(2홉)─단말C (단말이 라우터 역할, 인프라 불필요) |
| **구성요소** | 1. **Proactive**: 라우팅테이블 상시 최신유지 → 요청즉시응답, OLSR(MPR 플러딩감소)·DSDV(시퀀스번호+거리벡터)<br>2. **Reactive**: 경로 필요시만 탐색, AODV(RREQ/RREP/RERR)·DSR(Source Routing, 헤더에 전체경로)<br>3. **AODV Route Discovery**: RREQ 브로드캐스트 → RREP 유니캐스트 응답 → 링크단절 시 RERR → 재탐색<br>4. **Hybrid**: 존(Zone) 내부 Proactive + 존간 Reactive 결합, 대표 ZRP<br>5. **응용분야**: VANET(V2V/V2I, 지리적라우팅), WSN(센서·클러스터링), FANET(드론군집), 5G D2D(ProSe) |
| **비교** | **Proactive**<br>- 통신지연: 낮음<br>- 제어오버헤드: 높음(토폴로지 변화마다 전체갱신)<br>- 적합환경: 소규모·안정<br><br>**Reactive**<br>- 통신지연: 초기 탐색지연<br>- 제어오버헤드: 낮음<br>- 적합환경: 대규모·이동빈번 |
| **차별화** | **Ad-hoc 네트워크 실무 적용 전략**<br>1. **재난망 즉시구축**: AODV 메시망 → 소방·경찰 직접통신, 드론 Flying Relay 커버리지 확장, PS-LTE 하이브리드 운용<br>2. **VANET 보안강화**: 중앙인증 부재 → Black Hole/Wormhole 방어, PKI기반 V2X인증서(IEEE 1609.2), 신뢰도라우팅+이상행위탐지<br>3. **에너지효율 최적화**: OLSR MPR선택 → 플러딩오버헤드 최소화, 클러스터 계층라우팅으로 IoT·WSN 배터리 부하분산 |
