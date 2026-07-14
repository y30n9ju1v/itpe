---
title: "MODBUS 산업용 통신 프로토콜"
date: 2026-07-11T11:38:00+09:00
tags: ["네트워크", "MODBUS", "산업통신", "OT보안", "ICS", "서브노트"]
draft: false
---

# MODBUS 산업용 통신 프로토콜 서브노트

> **두음 머리에 박기 🧠**
> - **알·티·유·에이·티** (MODBUS 전송 변형: 직렬 바이너리 **RTU**, 사람이 읽기 쉬운 **A**SCII, 이더넷 502포트 **T**CP/IP)
> - **코·디·홀·인** (MODBUS 4대 데이터 모델 레지스터: 1비트 출력 **코**일, 1비트 입력 **디**스크리트 인풋, 16비트 읽기/쓰기 **홀**딩 레지스터, 16비트 읽기전용 **인**풋 레지스터)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **MODBUS 프로토콜 (산업 제어 통신 표준)** |
| **정의** | 1979년 Modicon 개발 산업용 직렬통신 프로토콜, PLC·센서·액추에이터 등 ICS/SCADA 장치간 데이터교환용 마스터-슬레이브 방식 오픈표준 |
| **키워드** | 마스터-슬레이브, RTU/ASCII/TCP, Coil/Discrete Input/Holding/Input Register, Function Code, OT 보안 |
| **개념도** | **[ MODBUS 마스터-슬레이브 폴링 구조 ]**<br>`[ 마스터 (SCADA/HMI) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│ 요청 (Function Code + 주소)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 슬레이브 1 (PLC) ] [ 슬레이브 2 (센서) ] ... [ 슬레이브 N (최대 247개) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`└─ RS-232/485(RTU/ASCII) 또는 이더넷 TCP 502포트로 응답 회신` |
| **구성요소** | 1. **마스터-슬레이브 구조**: 마스터 1대가 요청 시작 → 최대 247개 슬레이브 응답<br>2. **MODBUS RTU/ASCII**: RS-232/485 직렬기반, RTU=바이너리(최다사용), ASCII=사람이 읽기쉬운 인코딩<br>3. **MODBUS TCP/IP**: 이더넷(TCP 502포트) 기반, 현대공장 주류방식<br>4. **레지스터 4종**: Coil(1bit R/W), Discrete Input(1bit R), Holding Register(16bit R/W), Input Register(16bit R)<br>5. **주요 Function Code**: 0x01(Coil읽기), 0x03(Holding읽기), 0x06(단일쓰기), 0x10(다중쓰기) |
| **비교** | **MODBUS RTU/ASCII (직렬)**<br>- 전송매체: RS-232/RS-485<br>- 특징: 폐쇄망 위주, 저비용·단순구조<br>- 한계: 거리·속도 제약, 다중마스터 불가<br><br>**MODBUS TCP/IP (이더넷)**<br>- 전송매체: 이더넷(TCP 502)<br>- 특징: 인터넷 연결가능, 게이트웨이로 RTU 브리징<br>- 한계: IT망 연결확대로 외부 공격표면 증가 |
| **차별화** | **인증·암호화 부재로 인한 OT 보안 취약점 대응 전략**<br>1. **평문·무인증 구조의 근본한계**: 설계당시 폐쇄망 전제 → 인증·암호화 필드없음 → 패킷위조·도청·IP스푸핑으로 마스터 위장가능<br>2. **네트워크 분리(OT/IT 세그멘테이션)**: 산업망·사무망 물리/논리 분리, 방화벽·DMZ 경계에서 MODBUS 전용 트래픽만 화이트리스트 허용<br>3. **MODBUS 방화벽·이상탐지 연계**: Function Code·레지스터주소 단위 정상 트래픽 프로파일 학습 → 비정상 쓰기명령(0x06/0x10) 즉시 차단·경보하는 산업용 IDS/방화벽 구축 |
