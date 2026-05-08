---
title: "MODBUS 프로토콜"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "컴퓨터시스템및정보통신", "네트워크프로토콜", "MODBUS", "산업통신", "OT보안", "ICS"]
draft: false
exam: "137회"
---

## 개요

MODBUS는 1979년 Modicon이 개발한 산업용 직렬 통신 프로토콜로, PLC(Programmable Logic Controller)·센서·액추에이터 등 산업 제어 장치(ICS/SCADA) 간의 데이터 교환 표준으로 널리 사용된다. 단순한 구조와 오픈 표준으로 현재도 스마트팩토리·OT 환경에서 광범위하게 운영된다.

## 핵심 내용

### 기본 구조

**마스터-슬레이브 방식**:
- **마스터**: 요청 시작 (SCADA, HMI, 상위 제어기)
- **슬레이브**: 응답 (PLC, 센서, 원격 I/O)
- 하나의 마스터, 최대 247개 슬레이브

### MODBUS 변형 종류

| 종류 | 전송 방식 | 특징 |
|------|----------|------|
| **MODBUS RTU** | RS-232/RS-485 직렬 | 바이너리 인코딩, 가장 널리 사용 |
| **MODBUS ASCII** | RS-232 직렬 | ASCII 인코딩, 사람이 읽기 쉬움 |
| **MODBUS TCP/IP** | 이더넷 (TCP 502번 포트) | 인터넷 연결 가능, 현대 공장 주류 |
| **MODBUS Plus** | 독점 토큰 링 | Schneider Electric 전용 |

### 데이터 모델 (4가지 레지스터)

| 레지스터 유형 | 읽기/쓰기 | 데이터 유형 | 용도 |
|--------------|----------|------------|------|
| Coil | 읽기/쓰기 | 1비트 | 디지털 출력 (릴레이, LED) |
| Discrete Input | 읽기 전용 | 1비트 | 디지털 입력 (스위치, 센서) |
| Holding Register | 읽기/쓰기 | 16비트 | 설정값, 제어 파라미터 |
| Input Register | 읽기 전용 | 16비트 | 측정값 (온도, 압력) |

### 주요 기능 코드 (Function Code)

| 코드 | 기능 |
|------|------|
| 0x01 | Coil 읽기 |
| 0x03 | Holding Register 읽기 |
| 0x06 | 단일 Holding Register 쓰기 |
| 0x10 | 다중 Holding Register 쓰기 |

### 보안 취약점

- **인증 없음**: 패킷 위조로 장치 조작 가능
- **암호화 없음**: 평문 전송으로 도청·변조 위험
- **출처 확인 불가**: IP 스푸핑으로 마스터 위장
- **대응**: 네트워크 분리(OT/IT 분리), VPN, MODBUS 방화벽, 모니터링

## 출제 포인트

- 마스터-슬레이브 구조 명시
- RTU/ASCII/TCP 3가지 변형 비교
- 4가지 레지스터 유형(Coil·Discrete Input·Holding·Input)
- 보안 취약점(인증·암호화 없음)과 OT 보안 대응 연계

## 연관 개념

- [IGP/EGP]({{< relref "/docs/peim/05_Networks/02_NetworkDesign/igp-egp-routing" >}}) — 네트워크 프로토콜 체계
- 스마트팩토리 — MODBUS 활용 대표 환경
- OT/IT 보안 통합 — MODBUS 보안의 현대적 과제

## 참고 기출

- 137회 1교시 3번
