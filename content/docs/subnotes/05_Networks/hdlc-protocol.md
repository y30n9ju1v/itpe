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

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **HDLC (High-level Data Link Control) 프로토콜** |
| **정의** | ISO 13239 제정 비트지향 데이터링크 프로토콜, 전이중·반이중 오류/흐름/순서제어 제공 → PPP·X.25·Frame Relay 등 다수 프로토콜 기반 동기식 전송규격 |
| **키워드** | Flag(0x7E), 비트 스터핑, I/S/U-Frame, N(S)/N(R), NRM/ARM/ABM, CRC |
| **개념도** | **[ HDLC 프레임 구조 ]**<br>`| Flag(8bit) | Address(8bit+) | Control(8/16bit) | Data(가변) | FCS(16/32bit) | Flag(8bit) |`<br>&nbsp;&nbsp;`0x7E` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`0x7E`<br>`Control 필드: 0으로 시작 → I-Frame / 10으로 시작 → S-Frame / 11로 시작 → U-Frame` |
| **구성요소** | 1. **Flag**: 01111110(0x7E) → 프레임 시작·종료 경계 구분자<br>2. **Address**: 수신 스테이션 주소<br>3. **Control**: 프레임유형·순서번호(N(S),N(R))·제어정보 필드<br>4. **I-Frame**: 데이터전송+ACK 동시수행 (순서번호 포함)<br>5. **S-Frame**: RR·RNR·REJ·SREJ → 흐름·오류제어<br>6. **U-Frame**: SABM·UA·DISC 등 → 연결설정/해제·모드설정<br>7. **비트 스터핑**: 연속 1이 5개 → 0 삽입, Flag 패턴 혼동방지 |
| **비교** | **NRM (정규 응답 모드)**<br>- 주국(Primary) 허락 필요 → 종국(Secondary) 전송<br>- 멀티포인트·폴링 환경 적합<br><br>**ARM / ABM**<br>- ARM: 종국 허락없이 응답프레임 전송 가능 (포인트-투-포인트)<br>- ABM: 양쪽 동등 Combined 스테이션 자유전송, 전이중·P2P 최다 사용(X.25, ISDN, PPP 기반) |
| **차별화** | **HDLC 기반 상위 프로토콜 연계 및 신뢰성 확보 전략**<br>1. **PPP와의 관계**: PPP → HDLC 프레이밍 차용, WAN P2P 링크 캡슐화, ABM 모드 기본동작<br>2. **ARQ 기반 오류제어 결합**: S-Frame REJ(Go-Back-N)·SREJ(Selective-Repeat) → 상위 ARQ 연동, 프레임유실 시 재전송<br>3. **슬라이딩 윈도우 흐름제어**: N(S)/N(R) 순서번호+RR/RNR S-Frame → 송수신속도 조절, 수신버퍼 오버플로 방지 |
