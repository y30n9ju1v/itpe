---
title: "OSI 7계층 및 TCP Handshake"
date: 2026-07-11T11:19:35+09:00
tags: ["네트워크", "OSI7계층", "TCPIP", "3WayHandshake", "4WayHandshake", "TimeWait", "Syncookies", "서비스프리미티브", "서브노트"]
draft: false
---

# OSI 7계층 및 TCP Handshake 서브노트

> **두음 머리에 박기 🧠**
> - **물·데·네·전·세·표·응** (OSI 7계층 하위부터: **물**리 Physical, **데**이터링크 DataLink, **네**트워크 Network, **전**송 Transport, **세**션 Session, **표**현 Presentation, **응**용 Application)
> - **싱·싱아·아** (TCP 3-Way 연결 수립 흐름: **SYN** ➔ **SYN+ACK** ➔ **ACK**)
> - **핀·아·핀·아** (TCP 4-Way 연결 해제 흐름: **FIN** ➔ **ACK** ➔ **FIN** ➔ **ACK**)
> - **리·인·리·컨** (서비스 프리미티브 4종: **R**equest(요청) ➔ **I**ndication(통보) ➔ **R**esponse(응답) ➔ **C**onfirm(확인))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **OSI 7계층 참조 모델 및 TCP 3-Way / 4-Way Handshake** |
| **정의** | 네트워크통신 표준화 **OSI 7계층 참조모델** + TCP 신뢰성전송 위한 단말간 논리연결수립 **3-Way** / 연결종료 **4-Way Handshake** |
| **키워드** | OSI 7 Layer, TCP/IP 4계층, SYN / ACK / FIN, TIME_WAIT, SYN Flood, SYN Cookies |
| **개념도** | **[ TCP 3-Way Handshake (연결 수립) ]** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[ TCP 4-Way Handshake (연결 종료) ]**<br>Client &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Server &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Client &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Server<br>`│ ─── SYN (Seq=x) ──────────➔ │ (Syn_Received)` &nbsp;&nbsp;&nbsp;`│ ─── FIN ──────────────────➔ │ (Close_Wait)`<br>`│ ◀── SYN+ACK (Seq=y,Ack=x+1) ─ │` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ ◀── ACK ─────────────────── │`<br>`│ ─── ACK (Ack=y+1) ────────➔ │ (Established)` &nbsp;&nbsp;`│ ◀── FIN ─────────────────── │`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ ─── ACK ──────────────────➔ │ (Closed)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`(Time_Wait 대기 ➔ Closed)` |
| **구성요소** | 1. **OSI 7계층 PDU/장비**: 물리(Bit, 허브·케이블·NIC), DL(Frame, L2스위치·브리지), 네트워크(Packet, 라우터·L3스위치), 전송(Segment, L4스위치), 세션/표현/응용(Data, OS·앱 영역)<br>2. **서비스 프리미티브**: 인접계층 서비스교환 4대 명령 — Request(상위→하위 요청), Indication(하위→상위 통보), Response(응답), Confirm(결과통보). SAP 경유 전달, TCP 3-way는 Connect.Req→Ind→Rsp→Cnf의 확인형 서비스로 대응<br>3. **TCP 3-Way**: SYN(연결요청)→SYN+ACK(수락+역요청)→ACK(수락확인), 포트·시퀀스번호 교환<br>4. **TCP 4-Way**: FIN(종료요청)→ACK(수락+송신대기)→FIN(송신종료요청)→ACK(최종수락)<br>5. **TIME_WAIT**: 최종ACK 후 지연패킷(Straggler) 수신대비 2*MSL간 소켓 유지 |
| **비교** | **OSI 7계층 참조모델 (ISO 표준)**<br>- **역할**: 이기종결합용 참조 개념모델 (7단계)<br>- **역사**: 프로토콜표준화 전 이론적 정의<br><br>**TCP/IP 4계층 스택 (사실상 표준)**<br>- **역할**: 인터넷환경 직접구동 실무스택 (네트워크액세스·인터넷·전송·응용 4단계)<br>- **역사**: 실작동 프로토콜(TCP,IP) 개발 후 계층화 |
| **차별화** | **TIME_WAIT 소켓고갈 및 SYN Flood 대응 전략**<br>1. **TIME_WAIT 포트고갈 커널튜닝**: API서버 등 단기커넥션 다발 → TIME_WAIT 누적 포트고갈 방지 → `net.ipv4.tcp_tw_reuse` 활성화, 안전범위 내 재사용 허용<br>2. **SYN Flood 대응 SYN Cookies**: 가짜IP 다량SYN → 백로그큐 마비 위협 → 큐자원 선할당 없이 시퀀스번호에 암호화해시(쿠키) 심은 SYN-ACK 발송, 정상ACK 수신 시만 리소스 배분<br>3. **Keep-Alive 튜닝**: 불필요 Handshake 반복차단 → HTTP Keep-Alive시간·재사용횟수 최적화 → CPU 오버헤드 최소화 |
