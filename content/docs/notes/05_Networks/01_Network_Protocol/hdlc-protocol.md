---
title: "HDLC (High-level Data Link Control) 프로토콜"
date: 2026-05-09T14:07:16+09:00
tags: ["pecs", "네트워크", "네트워크프로토콜", "HDLC", "데이터링크", "프레임구조", "동작모드"]
draft: false
exam_pecs: ["134회"]
---

## 개요

HDLC(High-level Data Link Control)는 ISO가 제정한 비트 지향 데이터링크 계층 프로토콜(ISO 13239)이다. 전이중·반이중 통신, 오류 제어, 흐름 제어를 제공하며, 동기식 전송에 사용된다. PPP, X.25, Frame Relay 등 많은 프로토콜의 기반이다.

## 핵심 내용

### 가. HDLC 기능

| 기능 | 설명 |
|------|------|
| **오류 제어** | CRC(CCITT-16/32)로 오류 검출, ARQ로 재전송 |
| **흐름 제어** | 슬라이딩 윈도우 방식 (RR, RNR 프레임) |
| **순서 제어** | 프레임 번호(N(S)/N(R))로 순서 보장 |
| **투명성** | 비트 스터핑(Bit Stuffing)으로 임의 비트 패턴 전송 |
| **다중화** | 단일 링크로 여러 논리 채널 지원 |
| **동기화** | 플래그(01111110)로 프레임 경계 식별 |

### 나. HDLC 프레임 구조

```
| Flag | Address | Control | Data  | FCS   | Flag |
| 8bit |  8bit+  | 8/16bit | 가변  | 16/32bit | 8bit |
  0x7E                                           0x7E
```

| 필드 | 크기 | 설명 |
|------|------|------|
| **Flag** | 8bit | 프레임 시작·종료 구분자 (01111110, 0x7E) |
| **Address** | 8bit+ | 수신 스테이션 주소 |
| **Control** | 8/16bit | 프레임 유형·순서번호·제어 정보 |
| **Data** | 가변 | 상위 계층 데이터 (선택적) |
| **FCS** | 16/32bit | CRC 오류 검출 코드 |

**Control 필드 기반 프레임 유형**:

| 유형 | Control | 용도 |
|------|---------|------|
| **I-Frame (정보)** | 0으로 시작 | 데이터 전송 + ACK (N(S), N(R) 포함) |
| **S-Frame (감독)** | 10으로 시작 | 흐름·오류 제어 (RR, RNR, REJ, SREJ) |
| **U-Frame (비번호)** | 11로 시작 | 연결 설정·해제, 모드 설정 (SABM, UA, DISC) |

### 다. HDLC 동작모드

| 모드 | 약자 | 설명 | 사용 환경 |
|------|------|------|---------|
| **정규 응답 모드** | NRM | 주국(Primary)의 허락 시에만 종국(Secondary) 전송 가능 | 멀티포인트, 폴링 |
| **비동기 응답 모드** | ARM | 종국이 허락 없이 응답 프레임 전송 가능 | 포인트-투-포인트 |
| **비동기 균형 모드** | ABM | 양쪽이 동등(Combined) 스테이션, 자유롭게 전송 | 전이중, 포인트-투-포인트 |

**현재 가장 많이 사용**: ABM (X.25, ISDN, PPP의 기반)

## 출제 포인트

- 프레임 6필드: Flag·Address·Control·Data·FCS·Flag
- I/S/U 프레임 구분: 정보·감독·비번호
- 동작모드 3가지: NRM(주종)·ARM(비동기응답)·ABM(균형, 현재 표준)
- 비트 스터핑: 5개 연속 1 뒤에 0 삽입 (Flag와 혼동 방지)

## 연관 개념

- [OSI 7계층]({{< relref "/docs/notes/05_Networks/01_Network_Protocol/osi-7-layer" >}}) — HDLC는 2계층 (데이터링크)
- [네트워크 프로토콜]({{< relref "/docs/notes/05_Networks/01_Network_Protocol/network-protocol" >}}) — 프로토콜 3요소·기능
- [ARQ 오류 제어]({{< relref "/docs/notes/05_Networks/01_Network_Protocol/arq-error-control" >}}) — HDLC의 오류 제어 방식

## 참고 기출

- 134회 4교시 5번 (PECS)
