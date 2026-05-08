---
title: "오류 제어·혼잡 제어·슬라이딩 윈도우"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "컴퓨터시스템및정보통신", "네트워크프로토콜", "혼잡제어", "오류제어", "슬라이딩윈도우", "TCP"]
draft: false
---

## 개요

통신 프로토콜에서 오류 제어(Error Control)는 전송 중 발생한 오류를 감지·수정하고, 혼잡 제어(Congestion Control)는 네트워크 과부하를 방지하여 전체 처리량을 최적화한다. 슬라이딩 윈도우는 두 기능 모두에서 핵심 메커니즘으로 활용된다.

## 핵심 내용

### 오류 제어 vs 혼잡 제어

| 구분 | 오류 제어 | 혼잡 제어 |
|------|---------|---------|
| **목적** | 전송 오류 감지·수정 | 네트워크 과부하 방지 |
| **위치** | 송수신 단말 간 | 네트워크 전체 |
| **기법** | ARQ, FEC | 슬로우 스타트, AIMD |
| **트리거** | 오류 검출(NAK, 타임아웃) | 혼잡 신호(패킷 손실, ECN) |

### 슬라이딩 윈도우 (Sliding Window) 기법

**개념**: 수신 측의 확인 응답(ACK)을 기다리지 않고 윈도우 크기만큼 연속으로 프레임을 전송하는 기법.

```
송신 윈도우: [0][1][2][3] | [4][5][6][7]
                 전송 중     대기 중
ACK 0 수신 → 윈도우 슬라이드: [1][2][3][4] | [5][6][7][8]
```

**TCP 슬라이딩 윈도우**:
- **흐름 제어(Flow Control)**: 수신 버퍼 크기 기반 윈도우 (수신 측이 `rwnd` 광고)
- **혼잡 제어**: 네트워크 상태 기반 윈도우 (`cwnd`, 혼잡 윈도우)
- 실제 전송 윈도우 = min(rwnd, cwnd)

### TCP 혼잡 제어 알고리즘

**① Slow Start (슬로우 스타트)**:
- 초기 cwnd = 1 MSS
- ACK 수신마다 cwnd 2배 증가 (지수 증가)
- ssthresh 도달 시 선형 증가로 전환

**② AIMD (Additive Increase Multiplicative Decrease)**:
- **Additive Increase**: 혼잡 없으면 cwnd += 1 MSS/RTT (선형 증가)
- **Multiplicative Decrease**: 패킷 손실 감지 시 cwnd /= 2 (절반 감소)

**③ Fast Retransmit / Fast Recovery**:
- 3개 중복 ACK 수신 시 즉시 재전송 (타임아웃 대기 없이)
- cwnd를 ssthresh로 설정 후 선형 증가

### 프로토콜 설계 시 고려사항

| 고려사항 | 설명 |
|----------|------|
| **주소 지정** | 송수신 주소 식별 체계 |
| **오류 제어** | 오류 감지·수정 메커니즘 |
| **흐름 제어** | 수신 측 처리 속도에 맞춘 전송 |
| **혼잡 제어** | 네트워크 과부하 방지 |
| **순서 제어** | 패킷 순서 보장·재조립 |
| **연결 관리** | 연결 설정·해제 절차 |
| **보안** | 인증·암호화·무결성 |
| **확장성** | 대규모 네트워크 대응 |

## 출제 포인트

- 오류 제어와 혼잡 제어의 차이(목적·위치·트리거) 비교
- 슬라이딩 윈도우: 윈도우 크기 = min(rwnd, cwnd) 설명
- TCP 혼잡 제어 3단계(Slow Start → AIMD → Fast Retransmit)
- 프로토콜 설계 고려사항 5~7가지

## 연관 개념

- [ARQ/오류제어]({{< relref "/docs/peim/05_Networks/01_Network_Protocol/arq-error-control" >}}) — ARQ와 슬라이딩 윈도우의 상세
- [IGP/EGP]({{< relref "/docs/peim/05_Networks/02_NetworkDesign/igp-egp-routing" >}}) — 네트워크 계층 라우팅
- [AI-Native Network]({{< relref "/docs/peim/05_Networks/03_CommunicationSystems/ai-native-network-6g" >}}) — 6G 혼잡 제어 AI화

## 참고 기출

- 137회 3교시 5번
