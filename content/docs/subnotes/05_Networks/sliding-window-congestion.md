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
| **구성요소** | 1. **수신 윈도우 (RWND)**: 수신측이 패킷 헤더(Window)를 통해 송신측에 알려주는 남은 수신 버퍼 크기<br>2. **혼잡 윈도우 (CWND)**: 송신측이 네트워크 혼잡 상태를 고려해 독자적으로 계산해 내는 전송 가능 윈도우 크기<br>3. **슬로우 스타트**: 임계치까지 매 RTT마다 2배씩 윈도우 크기를 증가시켜 초기 최적 대역폭 탐색<br>4. **빠른 재전송**: 동일 패킷에 대해 3회 연속 중복 ACK 수신 시, 타이머 만료 전이라도 즉시 해당 패킷 재전송<br>5. **트래픽 쉐이핑 (Shaping)**: 임계치 초과 트래픽을 지연 버퍼(Leaky/Token Bucket)에 담았다가 평탄화하여 재전송 |
| **비교** | **흐름 제어 (Flow Control)**<br>- **통제 목적**: 수신 단말 버퍼 오버플로우 방지 (송-수신 1:1 조율)<br>- **핵심 지표**: 수신측 수신 윈도우 크기 (RWND - Receiver Window)<br><br>**혼잡 제어 (Congestion Control)**<br>- **통제 목적**: 중간 경로의 라우터 큐 오버플로우 및 망 정체 예방 (다대다 조율)<br>- **핵심 지표**: 송신측 계산 혼잡 윈도우 크기 (CWND - Congestion Window) |
| **차별화** | **현대 대용량 초고속 망 환경의 패킷 유실 한계 극복을 위한 BBR 알고리즘 및 QoS 연계**<br>1. **구글 BBR (Bottleneck Bandwidth and RTT) 혼잡 제어 알고리즘 도입**: 기존 손실 기반(Loss-based) 제어(Cubic, Reno)는 큐가 가득 차 패킷이 버려져야만 전송 속도를 줄이므로 대역폭이 넓고 지연이 긴 현대 망(LFN)이나 무선 패킷 유실 환경에서 성능이 급락함. 이를 해결하기 위해 실제 병목 대역폭과 최소 RTT를 실시간 측정하여 최적의 패킷 전송 속도를 수학적으로 도출하는 **BBR**로 전환.<br>2. **Traffic Policing과 Shaping의 실무적 조율**: 음성/영상 스트리밍 등 실시간성이 중요한 트래픽은 버퍼링 지연(Jitter)을 유발하는 **Traffic Shaping**보다 초과분을 즉시 버리는 **Policing**이 유리하며, 반면 파일 전송 등 유실 없는 데이터 전송은 Shaping을 적용하는 QoS 전략 수립.<br>3. **Window Scale Option의 활용**: 초고속 망에서 표준 TCP 헤더의 최대 윈도우 크기(64KB) 한계를 깨고 1GB 이상으로 수신 버퍼 윈도우 크기를 확장할 수 있도록 TCP Header Option의 `Window Scale` 지시자 활성화. |
