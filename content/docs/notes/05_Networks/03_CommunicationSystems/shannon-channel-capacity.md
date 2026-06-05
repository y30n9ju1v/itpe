---
title: "채널용량과 샤논 제3정리 (Shannon Information Capacity Theorem)"
date: 2026-05-09T08:09:13+09:00
tags: ["pecs", "컴퓨터통신및네트워크", "통신시스템", "샤논", "채널용량", "정보이론", "SNR"]
draft: false
exam_pecs: ["135회"]
---

## 개요

샤논 제3정리(정보용량 정리)는 잡음이 있는 채널에서 달성 가능한 최대 정보 전송 속도(채널 용량, Channel Capacity)를 정의하는 정보이론의 기본 정리다. 이론적 상한을 제시하며 현대 디지털 통신 시스템 설계의 기반이다.

## 핵심 내용

### 샤논-하틀리 공식 (Shannon-Hartley Theorem)

```
C = B × log₂(1 + S/N)

C: 채널 용량 (bps, bits per second)
B: 대역폭 (Hz)
S/N: 신호 대 잡음비 (Signal-to-Noise Ratio)
```

- **C**: 오류 없이 전송 가능한 이론적 최대 전송률
- **B**: 주파수 대역폭이 클수록 용량 선형 증가
- **S/N**: SNR이 클수록 용량 로그적 증가 (대역폭 증가보다 효율 낮음)

### 샤논 세 가지 정리 비교

| 정리 | 내용 |
|------|------|
| **제1정리** (소스 코딩) | 무손실 압축의 이론적 하한 = 정보 엔트로피 H |
| **제2정리** (채널 코딩) | 채널 용량 C 미만의 전송률이면 오류 없는 통신 가능 |
| **제3정리** (정보 용량) | 잡음 채널에서 최대 용량 = B × log₂(1+S/N) |

### 실제 적용

| 기술 | 샤논 정리 적용 |
|------|--------------|
| **5G NR** | 광대역(B 확장) + 고 SNR(빔포밍) → 용량 증대 |
| **MIMO** | 다중 안테나로 B를 가상 확장 |
| **Wi-Fi 6E** | 6GHz 대역 활용으로 B 증가 |
| **광섬유** | 극히 낮은 잡음 → 높은 C 달성 |

### 실용적 한계

- **Shannon Limit**: 실제 시스템은 Shannon 이론적 한계에 접근하지만 도달 불가
- **Turbo Code, LDPC**: Shannon Limit에 근접한 오류 정정 코드
- **SNR vs B 트레이드오프**: SNR 두 배 = log₂(2) = 1 bps/Hz 추가, B 두 배 = 용량 두 배

## 출제 포인트

- 공식: C = B × log₂(1 + S/N) 및 각 변수 의미 정확히 서술
- 샤논 제2정리(채널 코딩)와 제3정리(정보 용량) 구분
- B(대역폭)와 S/N 증가 효과 비교: 선형 vs 로그
- 5G/MIMO에서의 적용 사례

## 연관 개념

- [AI-Native Network 6G]({{< relref "/docs/notes/05_Networks/03_CommunicationSystems/ai-native-network-6g" >}}) — 6G에서 Shannon 한계 극복 기술
- [IEEE 802.11bn]({{< relref "/docs/notes/05_Networks/01_Network_Protocol/ieee-802-11bn" >}}) — Wi-Fi에서의 채널 용량 기술
- 오류 제어·ARQ — 제2정리 기반 오류 정정 코딩

## 참고 기출

- 135회 1교시 7번 (PECS)
