---
title: "DDoS — 공격원리, 공격유형, Slow Read vs Slowloris, Mirai 봇넷"
date: 2026-06-23T20:29:59+09:00
tags: ["보안", "DDoS", "DoS", "Mirai", "서비스거부공격", "핵토200"]
topic_no1: 10
topic_no2: 1
topic_large: "서비스 거부 공격(DoS)"
topic_small: "DDoS"
exam_ref: "모의_2017.01"
exam_type: "응용"
question_no: 3
---

## 문제

지난 10월 21일 금요일, 수천만의 분산된 IP 주소에서 대규모 공격이 도메인 서비스 업체인 Dyn을 덮쳤다. DDoS 공격의 대부분은 보안에 취약한 IoT 기기가 악성 프로그램에 감염되어 공격을 수행한 것으로 파악되었다. 다음 물음에 답하시오.
가. DDoS 공격원리 및 공격유형
나. Slow Read DDoS Attack 과 Slowloris 비교
다. 미라이(Mirai) 봇넷의 동작원리 및 대응방안

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 서비스 거부 공격(DoS) |
| 토픽(소) | DDoS |
| 출제 | 모의 2017.01 |
| 유형 | 응용 |
| 번호 | 3 |

## 해설

### 출제 배경 및 의도

IoT 기기를 이용한 대규모 DDoS(Mirai 봇넷 사건)의 실사례를 배경으로, DDoS 공격 분류·Slow 계열 공격·IoT 봇넷 메커니즘을 종합적으로 다룬다. 공격 원리와 함께 실질적인 대응 방안을 기술사 답안 형식으로 서술해야 한다.

### 1. DDoS 공격 원리 및 공격 유형

- **원리**: C&C(Command & Control) 서버가 다수의 감염된 좀비 PC/IoT를 제어하여 표적 서버에 대규모 트래픽을 집중, 가용성을 훼손

```
공격자 ──▶ C&C 서버 ──▶ [봇넷: 좀비PC/IoT 수만~수십만 대] ──▶ 표적 서버
```

| 유형 | 분류 | 대표 공격 |
|------|------|-----------|
| **볼류메트릭 공격** | 대역폭 소진 | UDP Flooding, ICMP Flooding, DNS Amplification |
| **프로토콜 공격** | 네트워크 자원 소진 | SYN Flooding, Ping of Death, Smurf |
| **애플리케이션 공격** | 서버 자원 소진 | HTTP Flooding, Slowloris, Slow Read |

### 2. Slow Read vs Slowloris 비교

| 항목 | Slowloris | Slow Read DDoS |
|------|-----------|----------------|
| 공격 계층 | L7(HTTP) | L4(TCP)/L7 |
| 공격 방법 | HTTP 헤더를 아주 천천히 전송, 연결 점유 | TCP 수신 윈도우 크기를 0에 가깝게 설정, 서버 전송 속도 의도적 저하 |
| 서버 영향 | 커넥션 수 한계 도달 | 소켓 버퍼 포화, 스레드 고갈 |
| 트래픽 양 | 매우 적음(정상 트래픽처럼 보임) | 적음 |
| 탐지 난이도 | 어려움(정상 브라우저와 유사) | 어려움 |
| 대응 | 연결 타임아웃, WAF, Rate Limit | TCP 윈도우 모니터링, 연결 임계값 |

### 3. 미라이(Mirai) 봇넷 동작원리 및 대응방안

#### 동작원리:
```
① IoT 기기 스캔: 23번 포트(Telnet) 대상 무차별 대입
② 기본 자격증명(admin/admin, root/root 등 61개) 시도
③ 감염 성공 시 C&C 서버에 보고
④ C&C 명령 수신 → 표적 IP:Port에 UDP/TCP Flooding
⑤ 경쟁 악성코드 제거, 자신만 상주
```

#### 특징:
- 재부팅 시 악성코드 제거(재감염 반복)
- 소스코드 공개 후 변종 급증(Mirai v2, Emotet 등)
- 2016년 Dyn DNS 공격(1.2Tbps), KrebsOnSecurity 공격(620Gbps)

#### 대응방안:

| 관점 | 대응 방안 |
|------|-----------|
| IoT 기기 제조사 | 기본 자격증명 제거 의무화, 펌웨어 자동 업데이트 |
| ISP | BGP 블랙홀, uRPF(unicast Reverse Path Forwarding) |
| 서비스 운영자 | Anti-DDoS 장비, CDN 분산, IP Rate Limiting |
| 정책/법제 | IoT 보안 인증(CC인증), 취약 기기 회수 의무화 |

### 실무 제언

**IoT 보안 설계 원칙 적용**
- **챌린지**: IoT 기기는 펌웨어 업데이트 없이 수년간 운영되어 취약점이 누적된다.
- **제언**: IoT 기기 도입 시 기기별 고유 자격증명 발급, MQTT/CoAP에 TLS 적용, 네트워크 세분화(VLAN 격리)로 IoT 기기가 외부 인터넷과 직접 통신하지 않도록 하고, ENISA IoT 보안 가이드라인을 준수하는 제품만 구매해야 한다.
