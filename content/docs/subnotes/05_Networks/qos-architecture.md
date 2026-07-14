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
| **정의** | 트래픽유형별 지연·지터·손실·대역폭 보장 위한 패킷처리 우선순위·자원관리 체계, 분류→마킹→큐잉→혼잡회피→쉐이핑/폴리싱 순 계층적용 |
| **키워드** | PQ/WFQ/CBWFQ/LLQ, IntServ(RSVP) vs DiffServ(DSCP), WRED, CRTP/LFI, ITU-T G.114 |
| **개념도** | 입력 트래픽 → 분류·마킹(VoIP=DSCP EF/46, 영상=AF41/34, 데이터=BE/0) → 큐잉(LLQ: VoIP 절대우선 / CBWFQ: 클래스별 보장대역폭) → 혼잡회피(WRED) → 쉐이핑·폴리싱 → 출력 |
| **구성요소** | 1. **패킷스케줄링**: FIFO(우선순위없음) → PQ(높은큐 우선, Starvation위험) → WFQ(가중치비례 공정분배) → WRR(가중치 라운드로빈) → CBWFQ+LLQ(클래스별WFQ+VoIP 최우선큐, 실무표준)<br>2. **IntServ**: RSVP PATH/RESV → 개별흐름(Flow)별 경로상 자원예약, 엄격보장이나 확장성낮음(RFC 1633)<br>3. **DiffServ**: 경계라우터 DSCP마킹(EF/AF/BE) → 코어라우터는 DSCP만보고 PHB적용, Stateless→확장성높음(RFC 2474)<br>4. **혼잡회피 WRED**: 클래스별 임계값기반 선제적 패킷드롭 → TCP 혼잡제어 유도(테일드롭 방지)<br>5. **QoS 측정요소**: 지연(≤150ms), 지터(≤30ms), 패킷손실률(≤1%), 대역폭, 처리량(대역폭 70~80%), 가용성(99.99%) — ITU-T G.114 VoIP기준 |
| **비교** | **IntServ**<br>- QoS단위: 개별흐름(Flow)<br>- 자원예약: RSVP 경로상 예약<br>- 확장성: 낮음(흐름상태 저장)<br><br>**DiffServ**<br>- QoS단위: 트래픽클래스<br>- 자원예약: 없음(마킹만)<br>- 확장성: 높음(Stateless), ISP·기업WAN 표준 |
| **차별화** | **엔터프라이즈 QoS 설계 전략**<br>1. **DSCP 기반 계층QoS**: VoIP=EF/46, 영상=AF41/34, 데이터=BE/0 마킹 → WAN라우터 LLQ+CBWFQ 적용, SLA(지연<150ms, 지터<30ms, 손실<1%) IPSLA 주기모니터링<br>2. **저속 WAN 링크 효율화**: CRTP(VoIP헤더 40B→2~4B 압축)+LFI(큰패킷 분할·인터리빙) → 저속구간 VoIP품질 개선<br>3. **SD-WAN·5G 슬라이싱 연계**: SD-WAN 컨트롤러 DPI기반 앱자동인식 → DSCP 자동배포, 5G 슬라이싱은 DSCP→5QI 매핑 → URLLC·eMBB 엔드투엔드 QoS보장 |
