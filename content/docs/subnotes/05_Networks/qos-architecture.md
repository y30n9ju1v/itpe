---
title: "QoS 스케줄링, 모델, 측정요소"
date: 2026-07-12T18:13:12+09:00
tags: ["네트워크", "QoS", "IntServ", "DiffServ", "스케줄링", "WRED", "서브노트"]
draft: false
---

# QoS 스케줄링, 모델, 측정요소 서브노트

> **두음 머리에 박기 🧠**
> - **분·마·큐·회·쉐** (QoS 파이프라인 5단계: **분**류Classification → **마**킹Marking → **큐**잉Queuing → **회**피(혼잡회피 WRED) → **쉐**이핑/폴리싱)
> - **지·지·손·대·처·가** (QoS 6대 측정요소: **지**연Latency, **지**터Jitter, **손**실률, **대**역폭, **처**리량Throughput, **가**용성Availability)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **QoS(Quality of Service) 스케줄링·모델·측정요소** |
| **정의** | 네트워크에서 특정 트래픽 유형의 지연·지터·패킷손실·대역폭을 보장하기 위한 패킷 처리 우선순위 및 자원 관리 기술 체계로, 분류(Classification)→마킹(Marking)→큐잉(Queuing)→혼잡회피→쉐이핑/폴리싱 순서로 계층 적용됨 |
| **키워드** | PQ/WFQ/CBWFQ/LLQ, IntServ(RSVP) vs DiffServ(DSCP), WRED, CRTP/LFI, ITU-T G.114 |
| **개념도** | 입력 트래픽 → 분류·마킹(VoIP=DSCP EF/46, 영상=AF41/34, 데이터=BE/0) → 큐잉(LLQ: VoIP 절대우선 / CBWFQ: 클래스별 보장대역폭) → 혼잡회피(WRED) → 쉐이핑·폴리싱 → 출력 |
| **구성요소** | 1. **패킷 스케줄링**: FIFO(우선순위 없음) → PQ(높은 큐 우선, Starvation 위험) → WFQ(가중치 비례 공정 분배) → WRR(가중치 라운드로빈) → CBWFQ+LLQ(클래스별 WFQ+VoIP 최우선 큐, 실무 표준)<br>2. **IntServ(Integrated Services)**: RSVP PATH/RESV 메시지로 개별 흐름(Flow)별 경로상 자원 예약, 엄격한 보장이나 확장성 낮음(RFC 1633)<br>3. **DiffServ(Differentiated Services)**: 경계 라우터에서 DSCP 마킹(EF/AF/BE) 후 코어 라우터는 DSCP만 보고 PHB 적용, Stateless로 확장성 높음(RFC 2474)<br>4. **혼잡 회피 WRED**: 클래스별 임계값 기반 선제적 패킷 드롭으로 TCP 혼잡 제어 유도(테일 드롭 방지)<br>5. **QoS 측정요소**: 지연(150ms 이하), 지터(30ms 이하), 패킷 손실률(1% 이하), 대역폭, 처리량(대역폭의 70~80%), 가용성(99.99%) — ITU-T G.114 VoIP 기준 |
| **비교** | **IntServ**<br>- QoS 단위: 개별 흐름(Flow)<br>- 자원 예약: RSVP로 경로상 예약<br>- 확장성: 낮음(흐름 상태 저장)<br><br>**DiffServ**<br>- QoS 단위: 트래픽 클래스<br>- 자원 예약: 없음(마킹만)<br>- 확장성: 높음(Stateless), ISP·기업 WAN 표준 |
| **차별화** | **엔터프라이즈 QoS 설계 실무 전략**<br>1. **DSCP 기반 계층 QoS 구현**: VoIP=EF/46, 영상=AF41/34, 데이터=BE/0으로 마킹 후 WAN 라우터에 LLQ+CBWFQ 적용, SLA 측정값(지연<150ms, 지터<30ms, 손실<1%)을 IPSLA로 주기 모니터링<br>2. **저속 WAN 회선 링크 효율화**: CRTP(VoIP 헤더 40B→2~4B 압축)와 LFI(큰 패킷 분할·인터리빙)를 결합해 저속 구간에서도 VoIP 품질 개선<br>3. **SD-WAN 및 5G 슬라이싱 연계**: SD-WAN 컨트롤러의 DPI 기반 애플리케이션 자동 인식 후 DSCP 마킹 자동 배포, 5G 네트워크 슬라이싱에서는 DiffServ DSCP 마킹을 5G QoS 식별자(5QI)와 매핑해 URLLC·eMBB 엔드투엔드 QoS 보장 |
