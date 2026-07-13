---
title: "Ad-hoc 네트워킹 라우팅 프로토콜"
date: 2026-07-13T18:13:12+09:00
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
| **정의** | 고정 인프라(기지국·AP) 없이 단말들이 자율적으로 라우터 역할을 수행하며 멀티홉 네트워크를 구성하는 분산형 무선 네트워크로, MANET(Mobile Ad-hoc Network)이 대표 형태이며 IEEE 802.11 기반으로 동작함 |
| **키워드** | MANET, Proactive(OLSR/DSDV), Reactive(AODV/DSR), Hybrid(ZRP), VANET/FANET |
| **개념도** | `[Infrastructure]` 단말A─[AP]─인터넷─[AP]─단말B (고정 인프라 필수)<br>`[Ad-hoc/MANET]` 단말A─(1홉)─단말B─(2홉)─단말C (단말이 라우터 역할, 인프라 불필요) |
| **구성요소** | 1. **선제적(Proactive) 라우팅**: 항상 최신 라우팅 테이블 유지, 경로 요청 시 즉시 응답, OLSR(MPR 선택으로 플러딩 오버헤드 감소)·DSDV(시퀀스 번호 추가 거리 벡터)<br>2. **반응형(Reactive) 라우팅**: 경로 필요 시에만 탐색, AODV(RREQ/RREP/RERR 3종 메시지)·DSR(Source Routing, 헤더에 전체 경로 포함)<br>3. **AODV Route Discovery**: RREQ 브로드캐스트 → 목적지 RREP 유니캐스트 응답 → 링크 끊김 시 RERR 발생 후 재탐색<br>4. **하이브리드(Hybrid)**: 존(Zone) 내부는 Proactive, 존 간은 Reactive 방식 결합, 대표 ZRP<br>5. **응용 분야**: VANET(차량 V2V/V2I, 지리적 라우팅), WSN(무선 센서, 클러스터링), FANET(드론 군집), 5G D2D(ProSe) |
| **비교** | **Proactive**<br>- 통신 지연: 낮음<br>- 제어 오버헤드: 높음(토폴로지 변화마다 전체 업데이트)<br>- 적합 환경: 소규모·안정<br><br>**Reactive**<br>- 통신 지연: 초기 탐색 지연<br>- 제어 오버헤드: 낮음<br>- 적합 환경: 대규모·이동 빈번 |
| **차별화** | **Ad-hoc 네트워크 실무 적용 전략**<br>1. **재난망 즉시 구축**: AODV 기반 메시 네트워크로 소방·경찰 단말 간 직접 통신망 구성, 드론 Flying Relay로 커버리지 확장, 재난안전통신망(PS-LTE)과 하이브리드 운용<br>2. **VANET 보안 강화**: 중앙 인증 없는 환경에서 경로 조작(Black Hole, Wormhole) 공격 방어를 위해 PKI 기반 V2X 인증서(IEEE 1609.2), 신뢰도 기반 라우팅, 이상 행위 탐지 적용<br>3. **에너지 효율 최적화**: OLSR MPR 선택으로 플러딩 오버헤드 최소화, 클러스터 기반 계층 라우팅으로 배터리 기반 IoT·WSN 노드의 전송 부하 분산 |
