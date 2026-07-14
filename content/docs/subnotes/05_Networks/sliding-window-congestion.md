---
title: "슬라이딩 윈도우 및 혼잡 제어"
date: 2026-07-11T11:19:35+09:00
tags: ["네트워크", "TCP", "흐름제어", "혼잡제어", "슬라이딩윈도우", "BBR", "QoS", "폴리싱", "쉐이핑", "서브노트"]
draft: false
---

# 슬라이딩 윈도우 및 혼잡 제어 서브노트

> **두음 머리에 박기 🧠**
> - **정·슬** (TCP 흐름 제어 기법: **정**지대기 Stop-and-Wait, **슬**라이딩 윈도우 Sliding Window)
> - **슬·회·임·빠** (TCP 혼잡 제어 4대 단계: **슬**로우 스타트 Slow Start ➔ 혼잡 **회**피 Congestion Avoidance ➔ **임**계치 SSThresh 도달 ➔ **빠**른 재전송/회복 Fast Retransmit/Recovery)
> - **포·쉐** (QoS 트래픽 통제 방식: 초과 시 즉시 차단 **폴**리싱 Policing, 초과 시 버퍼링 제어 **쉐**이핑 Shaping)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **TCP 흐름 제어 (Flow Control) 및 혼잡 제어 (Congestion Control)** |
| **정의** | 송-수신 단말 간 처리 속도 차이를 조율하는 **흐름 제어(정·슬)**와, 중간 라우터/네트워크 정체를 예방하기 위해 송신율을 동적 제어하는 **혼잡 제어(슬·회·임·빠) 기술** |
| **키워드** | Sliding Window (RWND), Congestion Window (CWND), Slow Start, Fast Recovery, Policing/Shaping, BBR |
| **개념도** | **[ TCP 혼잡 윈도우 (CWND) 제어 흐름 추이 ]**<br>윈도우 크기 (CWND)<br>&nbsp;&nbsp;&nbsp;&nbsp;`▲` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 3 Duplicate ACK 수신 (Fast Retransmit) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`/\ (임계값의 반으로 뚝 떨어짐)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ SSThresh ]` &nbsp;&nbsp;&nbsp;&nbsp;`/&nbsp;&nbsp;\ ➔ ─── [ Fast Recovery (선형 증가) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌─── ➔ ───` &nbsp;&nbsp;`/`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`/ (선형 증가: Avoidance)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ (지수 증가: Slow Start)<br>&nbsp;&nbsp;&nbsp;&nbsp;`└────────────────┴──────────────────┴────────────────────────────────➔ 시간 (Time)` |
| **구성요소** | 1. **RWND(수신윈도우)**: 수신측이 헤더(Window)로 통보 → 남은 수신버퍼 크기<br>2. **CWND(혼잡윈도우)**: 송신측이 혼잡상태 고려 → 자체계산 전송가능 윈도우<br>3. **슬로우스타트**: 임계치까지 매RTT 2배 증가 → 초기 최적대역폭 탐색<br>4. **빠른재전송**: 동일패킷 3회 연속 중복ACK → 타이머만료 전 즉시 재전송<br>5. **트래픽쉐이핑**: 임계치초과 트래픽 → 지연버퍼(Leaky/Token Bucket) 평탄화 후 전송 |
| **비교** | **흐름 제어**<br>- 목적: 수신단말 버퍼오버플로우 방지 (1:1 조율)<br>- 지표: RWND(수신윈도우)<br><br>**혼잡 제어**<br>- 목적: 라우터큐 오버플로우·망정체 예방 (다대다 조율)<br>- 지표: CWND(혼잡윈도우) |
| **차별화** | **대용량 초고속망 패킷유실 한계 극복 위한 BBR·QoS 연계**<br>1. **구글 BBR 도입**: 기존 손실기반(Cubic,Reno)은 큐가득참→패킷버림 시에만 감속 → LFN·무선유실 환경 성능급락 → 병목대역폭·최소RTT 실측 기반 최적전송률 산출 BBR로 전환<br>2. **Policing/Shaping 실무조율**: VoIP 등 실시간트래픽 → Jitter유발 Shaping보다 즉시드롭 Policing 유리, 파일전송 등 무손실 데이터 → Shaping 적용<br>3. **Window Scale Option**: 표준헤더 최대윈도우(64KB) 한계 → 1GB 이상 확장 위해 `Window Scale` 지시자 활성화 |
