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
| **정의** | 네트워크 통신 과정을 표준화한 **OSI 7계층 참조 모델**과, 신뢰성 있는 전송(TCP)을 위해 단말 간 논리적 연결을 수립하는 **3-Way Handshake** 및 연결을 종료하는 **4-Way Handshake** 기술 |
| **키워드** | OSI 7 Layer, TCP/IP 4계층, SYN / ACK / FIN, TIME_WAIT, SYN Flood, SYN Cookies |
| **개념도** | **[ TCP 3-Way Handshake (연결 수립) ]** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[ TCP 4-Way Handshake (연결 종료) ]**<br>Client &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Server &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Client &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Server<br>`│ ─── SYN (Seq=x) ──────────➔ │ (Syn_Received)` &nbsp;&nbsp;&nbsp;`│ ─── FIN ──────────────────➔ │ (Close_Wait)`<br>`│ ◀── SYN+ACK (Seq=y,Ack=x+1) ─ │` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ ◀── ACK ─────────────────── │`<br>`│ ─── ACK (Ack=y+1) ────────➔ │ (Established)` &nbsp;&nbsp;`│ ◀── FIN ─────────────────── │`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ ─── ACK ──────────────────➔ │ (Closed)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`(Time_Wait 대기 ➔ Closed)` |
| **구성요소** | 1. **OSI 7계층 PDU 및 관련 장비**: 물리(Bit, 허브·케이블·NIC), 데이터링크(Frame, L2 스위치·브리지), 네트워크(Packet, 라우터·L3 스위치), 전송(Segment, L4 스위치), 세션/표현/응용(Data, OS·애플리케이션 영역)<br>2. **서비스 프리미티브(Service Primitive)**: 인접 계층 간 서비스 교환을 위한 4가지 추상 인터페이스 명령 — Request(상위→하위 서비스 요청), Indication(하위→상위 이벤트 통보), Response(Indication에 대한 상위 응답), Confirm(Request 결과를 상위에 통보). SAP(Service Access Point)를 통해 전달되며, TCP 3-way handshake는 Connect.Req→Connect.Ind→Connect.Rsp→Connect.Cnf의 확인형(Confirmed) 서비스로 대응됨<br>3. **TCP 3-Way**: SYN(연결 요청), SYN+ACK(수락 및 역요청), ACK(수락 확인). 연결 포트 및 시퀀스 번호 교환<br>4. **TCP 4-Way**: FIN(종료 요청), ACK(수락 및 송신 대기), FIN(송신 종료 요청), ACK(최종 수락)<br>5. **TIME_WAIT 상태**: 클라이언트가 최종 ACK 전송 후, 지연 패킷(Straggler) 수신을 위해 2*MSL 시간 동안 소켓 유지 |
| **비교** | **OSI 7계층 참조 모델 (ISO 표준)**<br>- **역할**: 장비 간 이기종 결합을 위한 참조적 개념 모델 (7단계)<br>- **역사**: 프로토콜 표준화 전 이론적으로 정의됨<br><br>**TCP/IP 4계층 프로토콜 스택 (사실상 표준)**<br>- **역할**: 인터넷 통신 환경에서 직접 구동되는 실무 스택 (네트워크액세스, 인터넷, 전송, 응용 4단계)<br>- **역사**: 실제 작동되는 프로토콜(TCP, IP) 개발 후 계층화됨 |
| **차별화** | **TIME_WAIT 소켓 고갈 장애 및 SYN Flood 보안 위협 실무 대응 전략**<br>1. **TIME_WAIT 포트 고갈 해결을 위한 커널 튜닝**: 대량의 단기 커넥션이 일어나는 API 서버 등에서 TIME_WAIT 소켓 누적으로 인한 포트 고갈(Connection Timeout)을 방지하기 위해 리눅스 커널의 `net.ipv4.tcp_tw_reuse` 파라미터를 활성화하여 안전한 범위 내 소켓 포트 재사용 허용.<br>2. **SYN Flood 공격 대응을 위한 TCP SYN Cookies 기술**: 공격자가 가짜 IP로 다량의 SYN만 보내 서버의 백로그 큐(Backlog Queue)를 마비시키는 위협을 방어하기 위해, 서버가 큐의 자원을 미리 할당하지 않고 시퀀스 번호 내에 암호화된 해시값(쿠키)을 심은 SYN-ACK를 발송한 뒤 정상 ACK 수신 시에만 연결 리소스를 배분하는 **SYN Cookies** 기법 가동.<br>3. **Keep-Alive 파라미터 튜닝**: 불필요한 Handshake 반복을 차단하기 위해 HTTP Keep-Alive 시간과 커넥션 재사용 회수를 최적화하여 CPU 오버헤드 최소화. |
