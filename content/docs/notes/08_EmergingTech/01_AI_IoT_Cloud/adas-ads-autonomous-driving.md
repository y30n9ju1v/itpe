---
title: "ADAS와 ADS (첨단 운전자 지원 시스템과 자율주행 시스템)"
date: 2026-05-09T07:34:17+09:00
tags: ["pecs", "최신기술", "자율주행", "ADAS", "ADS", "자동차", "AI"]
draft: false
exam_pecs: ["138회"]
---

## 개요


ADAS(Advanced Driver Assistance System)는 운전자를 보조하는 시스템으로 인간이 주체가 되며, ADS(Automated Driving System)는 시스템이 주체가 되어 완전 자율주행을 수행하는 시스템이다. SAE J3016 기준으로 Level 0~2는 ADAS, Level 3~5는 ADS로 구분된다.

## 핵심 내용

### ADAS vs ADS 비교

| 구분 | ADAS | ADS |
|------|------|-----|
| **주체** | 운전자 (시스템은 보조) | 시스템 (운전자는 승객) |
| **SAE 레벨** | Level 0~2 | Level 3~5 |
| **개입 범위** | 특정 기능 보조 | 주행 전 과정 자동화 |
| **책임 소재** | 운전자 | 시스템 개발사/운영사 |
| **대표 기술** | AEB, LKAS, ACC, BSD | L3 Traffic Jam Pilot, L4 Robotaxi, L5 완전자율 |

### SAE J3016 자율화 레벨

| Level | 명칭 | 설명 |
|-------|------|------|
| **0** | No Automation | 운전자 전적 담당 |
| **1** | Driver Assistance | 조향 또는 가감속 하나를 보조 |
| **2** | Partial Automation | 조향·가감속 동시 보조 (운전자 감시 필요) |
| **3** | Conditional Automation | 특정 조건에서 자율주행, 요청 시 운전자 개입 |
| **4** | High Automation | 특정 지역/조건에서 운전자 불필요 |
| **5** | Full Automation | 모든 조건에서 완전 자율주행 |

### ADAS 주요 기능

- **AEB (Autonomous Emergency Braking)**: 충돌 위험 감지 자동 제동
- **LKAS (Lane Keeping Assist System)**: 차선 이탈 방지
- **ACC (Adaptive Cruise Control)**: 차간 거리 유지 정속주행
- **BSD (Blind Spot Detection)**: 사각지대 차량 감지
- **PAS (Parking Assist System)**: 주차 보조

### ADS 핵심 구성요소

1. **인지(Perception)**: 카메라, LiDAR, RADAR, GPS로 주변 환경 파악
2. **판단(Planning)**: AI 알고리즘으로 경로 계획 및 의사결정
3. **제어(Control)**: 조향·가감속 시스템 직접 제어
4. **HD맵**: 센티미터 단위 정밀 지도
5. **V2X 통신**: 차량-인프라-보행자 간 통신

### IMO 자율운항선박 등급 (스마트선박 연계)

| MASS 코드 | 등급 | 설명 |
|-----------|------|------|
| **1** | 선원 지원 | 자율 시스템이 의사결정 지원 |
| **2** | 원격 제어 (선원 승선) | 원격 제어 가능, 선원 탑승 |
| **3** | 원격 제어 (선원 미승선) | 원격 제어, 무인 운항 |
| **4** | 완전 자율 | 시스템이 모든 결정 |

## 출제 포인트

- ADAS와 ADS의 가장 큰 차이: 책임 주체 (운전자 vs 시스템)
- SAE J3016 레벨 0~5 구분 및 Level 3의 조건부 자율 특징
- ADAS 주요 기능 영문 약어와 한글 설명
- ADS 구성요소 인지-판단-제어 3단계 순서

## 연관 개념

- [ISO/PAS 8800:2024]({{< relref "/docs/notes/08_EmergingTech/01_AI_IoT_Cloud/iso-pas-8800-ai-safety" >}}) — 자율주행 AI 안전 표준
- [스마트선박 자율운항]({{< relref "/docs/notes/08_EmergingTech/01_AI_IoT_Cloud/smart-ship-autonomous-navigation" >}}) — IMO 자율화 등급 연계
- ISO 26262 — 차량 기능 안전 표준 (미작성)

## 참고 기출

- 138회 1교시 2번 (PECS)
