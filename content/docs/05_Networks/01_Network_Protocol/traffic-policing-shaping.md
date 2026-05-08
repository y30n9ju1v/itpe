---
title: "트래픽 폴리싱과 트래픽 쉐이핑 (Traffic Policing & Shaping)"
date: 2026-05-09T08:09:13+09:00
tags: ["pecs", "컴퓨터통신및네트워크", "네트워크설계", "트래픽제어", "QoS", "폴리싱", "쉐이핑"]
draft: false
exam: "135회"
---

## 개요

트래픽 폴리싱(Traffic Policing)과 트래픽 쉐이핑(Traffic Shaping)은 QoS(Quality of Service) 구현을 위한 네트워크 트래픽 제어 기법이다. 폴리싱은 한도 초과 트래픽을 즉시 드롭·마킹하고, 쉐이핑은 버퍼에 지연 저장하여 평탄화(Smoothing)한다.

## 핵심 내용

### 개념 비교

| 항목 | 트래픽 폴리싱 | 트래픽 쉐이핑 |
|------|--------------|--------------|
| **정의** | 허용 대역폭 초과 패킷 즉시 처리 | 버퍼링으로 출력 속도 평탄화 |
| **초과 패킷 처리** | 드롭(Drop) 또는 마킹(Re-marking) | 버퍼에 저장 후 지연 전송 |
| **버스트 허용** | 제한적 (CIR/PIR 범위) | 버퍼 범위 내 흡수 |
| **지연 영향** | 없음 (즉시 처리) | 있음 (버퍼링 지연) |
| **적용 위치** | 인그레스(입구), 이그레스(출구) | 이그레스(출구) 주로 사용 |
| **주요 사용** | ISP 경계, SLA 적용 | WAN 엣지, 다운스트림 제어 |

### 구성요소

**공통 개념**:
- **CIR** (Committed Information Rate): 보장된 기본 전송률
- **PIR** (Peak Information Rate): 허용 최대 전송률
- **CBS** (Committed Burst Size): 허용 순간 버스트 크기
- **TC** (Time Interval): 측정 시간 구간

### 구현 알고리즘

#### 토큰 버킷 (Token Bucket)

```
- 버킷에 일정 속도로 토큰(Token) 생성 (CIR)
- 패킷 전송 시 크기만큼 토큰 소모
- 토큰 없으면 → 폴리싱: 드롭 / 쉐이핑: 대기
- 최대 버킷 크기 = CBS (버스트 허용량)
```

#### 리키 버킷 (Leaky Bucket)

```
- 입력 패킷을 버킷(버퍼)에 저장
- 일정 속도로만 출력 (버킷에서 새는 것처럼)
- 버킷이 가득 차면 → 드롭
- 출력 속도 = CIR (완벽한 평탄화)
```

#### 듀얼 토큰 버킷 (Dual Token Bucket / Two-Rate Three-Color Marker)

- CIR 버킷 + PIR 버킷 두 개 운영
- 결과: Green(CIR 이하), Yellow(CIR~PIR), Red(PIR 초과)

### 폴리싱 vs 쉐이핑 비교

| 항목 | 폴리싱 | 쉐이핑 |
|------|--------|--------|
| 초과 처리 | Drop/Mark | Buffer |
| 지연 | 없음 | 있음 |
| 패킷 손실 | 있음 | 적음 |
| 적합 트래픽 | 실시간(VoIP) 경계 제어 | 탄력적 데이터(HTTP) |

## 출제 포인트

- 핵심 차이: 폴리싱=즉시 드롭, 쉐이핑=버퍼링
- 토큰 버킷 vs 리키 버킷 알고리즘 원리
- 3색 마킹(Green/Yellow/Red)과 Two-Rate Policing
- QoS 정책에서 VoIP는 폴리싱, 파일 전송은 쉐이핑 적합

## 연관 개념

- [네트워크 설계]({{< relref "/docs/05_Networks/02_NetworkDesign/ibn-intent-based-networking" >}}) — QoS 정책 기반 네트워크 설계
- [채널용량]({{< relref "/docs/05_Networks/03_CommunicationSystems/shannon-channel-capacity" >}}) — 이론적 대역폭 한계
- 네트워크 품질평가 — 폴리싱·쉐이핑의 QoS 성과 측정

## 참고 기출

- 135회 2교시 5번 (PECS)
