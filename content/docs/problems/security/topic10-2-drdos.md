---
title: "DRDoS(Distributed Reflect Denial of Service) — IoT 환경 공격 유형"
date: 2026-06-23T20:29:59+09:00
tags: ["보안", "DRDoS", "DDoS", "반사공격", "IoT", "핵토200"]
topic_no1: 10
topic_no2: 2
topic_large: "서비스 거부 공격(DoS)"
topic_small: "DRDoS"
exam_ref: "ITPE_2021.12"
exam_type: "공통"
question_no: 2
---

## 문제

자율주행차, 스마트 공장, 스마트시티 등에서는 수많은 IoT 기기와 센서로 구성되어 상황데이터를 수집하고 전달하는 핵심 기능을 수행한다. 이러한 IoT 기기 사용환경에서 증폭네트워크를 이용한 DRDoS(Distributed Reflect Denial of Service) 공격이 급증하고 있고 4차산업발전에 큰 위협이 되고 있다. 다음을 설명하시오.
가. DDoS 공격과 DRDoS 공격 비교
나. IoT기기 환경에서 발생 가능한 DRDoS 공격 유형 2가지

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 서비스 거부 공격(DoS) |
| 토픽(소) | DRDoS |
| 출제 | ITPE 2021.12 |
| 유형 | 공통 |
| 번호 | 2 |

## 해설

### 1. DDoS vs DRDoS 비교

| 항목 | DDoS | DRDoS(Reflected DDoS) |
|------|------|------------------------|
| 공격 방법 | 봇넷이 직접 표적 공격 | 반사 서버(Reflector)를 매개로 증폭 공격 |
| 공격자 은닉 | 봇넷 IP 노출 가능 | 공격자 IP 완전 은닉(피해자 IP 스푸핑) |
| 트래픽 증폭 | 1:1 | 1:수십~수천 (증폭 계수 활용) |
| 반사 서버 인지 | 공격 참여 인지 | 반사 서버는 공격인지 모름 |
| 대표 프로토콜 | TCP SYN, UDP | DNS, NTP, Memcached, SSDP |

```
DRDoS 동작:
공격자(src IP = 피해자 IP) ──▶ [반사 서버: DNS, NTP, Memcached]
                                     │ 응답(증폭된 트래픽)
                                     ▼
                                  피해자 서버 (서비스 불능)
```

### 2. 주요 증폭 계수

| 프로토콜 | 증폭 계수 |
|----------|-----------|
| DNS | 28~54배 |
| NTP | 556배 |
| Memcached | 51,000배 |
| SSDP | 30배 |
| CLDAP | 56~70배 |

### 3. IoT 환경 DRDoS 공격 유형

1) CoAP(Constrained Application Protocol) 반사 공격

- **원리**: IoT 기기에서 사용하는 경량 UDP 기반 프로토콜(CoAP)을 반사 서버로 악용
- **동작**: 공격자가 피해자 IP로 스푸핑하여 대량 CoAP 멀티캐스트 요청 전송 → IoT 기기들이 피해자에게 응답 → 증폭 공격
- **증폭**: 최대 34배 증폭 가능

2) MQTT(Message Queuing Telemetry Transport) 기반 증폭 공격

- **원리**: IoT 기기 관리 프로토콜 MQTT 브로커를 반사 서버로 악용
- **동작**: 인증 없는 MQTT 브로커에 다수의 토픽 구독(Subscribe) 요청 → 메시지 발행 시 피해자에게 대량 메시지 전달
- **특징**: TLS 미적용 MQTT 브로커가 표적이 됨

### 4. 대응 방안

| 방안 | 내용 |
|------|------|
| 반사 서버 대응 | DNS/NTP 응답 크기 제한, Anycast 네트워크 분산 |
| ISP 대응 | BCP 38(소스 주소 검증), uRPF 적용으로 스푸핑 패킷 차단 |
| IoT 기기 대응 | CoAP TLS(DTLS) 적용, MQTT 인증 의무화 |
| 피해자 대응 | Anti-DDoS 장비, 클라우드 스크러빙 센터 활용 |


- 최근 DRDoS(Distributed Reflect Denial of Service) 관련 보안 위협 증가에 대응하여, 서비스 안전성 확보를 위한 체계적인 통제 및 기술 적용이 증대되는 추세임.  "끝"

### 실무 제언

**스마트 공장 IoT 네트워크 격리**
- **챌린지**: 스마트 공장의 CoAP/MQTT 기기가 공인 IP에 직접 노출되면 DRDoS 반사 서버로 악용될 수 있다.
- **제언**: IoT 기기는 RFC 1918 사설 IP로 격리하고, 외부와의 통신은 DMZ의 MQTT 브로커·CoAP 프록시를 통해서만 허용해야 한다. DTLS(CoAP 보안) 및 MQTT TLS 5.0을 적용하여 인증되지 않은 연결을 거부해야 한다.
