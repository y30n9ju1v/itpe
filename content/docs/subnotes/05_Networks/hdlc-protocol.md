---
title: "HDLC 데이터링크 프로토콜"
date: 2026-07-11T11:38:00+09:00
tags: ["네트워크", "HDLC", "데이터링크", "프레임구조", "동작모드", "서브노트"]
draft: false
---

# HDLC 데이터링크 프로토콜 서브노트

> **두음 머리에 박기 🧠**
> - **플·주·제·데·프·플** (HDLC 프레임 6필드: **플**래그, **주**소, **제**어, **데**이터, **프**레임검사시퀀스(FCS), **플**래그)
> - **아이·에스·유** (Control 필드 기반 프레임 3유형: 데이터+ACK **I**-Frame, 흐름/오류제어 **S**-Frame, 연결설정/해제 **U**-Frame)
> - **엔·아·에이** (HDLC 3대 동작모드: 주종 폴링 **N**RM, 비동기 응답 **A**RM, 균형 전이중 **A**BM)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **HDLC (High-level Data Link Control) 프로토콜** |
| **정의** | ISO 13239로 제정된 비트 지향 데이터링크 계층 프로토콜로, 전이중·반이중 통신에서 오류 제어·흐름 제어·순서 제어를 제공하며 PPP·X.25·Frame Relay 등 다수 프로토콜의 기반이 되는 동기식 전송 규격 |
| **키워드** | Flag(0x7E), 비트 스터핑, I/S/U-Frame, N(S)/N(R), NRM/ARM/ABM, CRC |
| **개념도** | **[ HDLC 프레임 구조 ]**<br>`| Flag(8bit) | Address(8bit+) | Control(8/16bit) | Data(가변) | FCS(16/32bit) | Flag(8bit) |`<br>&nbsp;&nbsp;`0x7E` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`0x7E`<br>`Control 필드: 0으로 시작 → I-Frame / 10으로 시작 → S-Frame / 11로 시작 → U-Frame` |
| **구성요소** | 1. **Flag**: 01111110(0x7E)로 프레임 시작·종료를 식별하는 경계 구분자<br>2. **Address**: 수신 스테이션 주소<br>3. **Control**: 프레임 유형·순서번호(N(S), N(R))·제어 정보를 담는 필드<br>4. **I-Frame**: 데이터 전송과 ACK을 동시 수행(순서번호 포함)<br>5. **S-Frame**: RR·RNR·REJ·SREJ로 흐름·오류 제어 수행<br>6. **U-Frame**: SABM·UA·DISC 등으로 연결 설정/해제·모드 설정 수행<br>7. **비트 스터핑**: 연속 1이 5개 나오면 0을 삽입해 Flag 패턴과의 혼동 방지 |
| **비교** | **NRM (Normal Response Mode, 정규 응답 모드)**<br>- 주국(Primary)의 허락이 있어야만 종국(Secondary)이 전송 가능<br>- 멀티포인트·폴링 환경에 적합<br><br>**ARM (Asynchronous Response Mode) / ABM (Asynchronous Balanced Mode)**<br>- ARM: 종국이 허락 없이 응답 프레임 전송 가능(포인트-투-포인트)<br>- ABM: 양쪽이 동등한 Combined 스테이션으로 자유롭게 전송하며, 전이중·포인트-투-포인트 환경에서 현재 가장 널리 사용(X.25, ISDN, PPP의 기반) |
| **차별화** | **HDLC 기반 상위 프로토콜과의 연계 및 신뢰성 확보 전략**<br>1. **PPP와의 관계**: PPP는 HDLC의 프레이밍 방식을 차용해 WAN 구간 point-to-point 링크에서 데이터를 캡슐화하며, HDLC의 ABM 모드를 기본으로 동작.<br>2. **ARQ 기반 오류 제어 결합**: S-Frame의 REJ(Go-Back-N)·SREJ(Selective-Repeat) 응답을 통해 상위 ARQ 오류 제어 메커니즘과 연동하여 프레임 유실 시 재전송을 수행.<br>3. **슬라이딩 윈도우 흐름 제어**: N(S)/N(R) 순서번호와 RR/RNR S-Frame으로 송수신 속도를 조절하여, 수신 버퍼 오버플로를 방지하는 흐름 제어를 구현. |
