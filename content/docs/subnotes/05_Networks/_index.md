---
bookCollapseSection: true
title: "네트워크"
---

| 번호 | 토픽명 | 정의 |
| :--- | :--- | :--- |
| 1 | [AI-Native 6G 및 촉각 인터넷]({{< relref "/docs/subnotes/05_Networks/ai-native-6g-tactile-internet" >}}) | 설계 단계부터 AI를 내재화해 자율 최적화하는 6G 핵심 개념 **AI-Native Network**와, 1ms급 초저지연 실시간 상호작용을 실현하는 ITU-T **촉각 인터넷** |
| 2 | [오류 제어 및 ARQ]({{< relref "/docs/subnotes/05_Networks/arq-error-control" >}}) | 패킷 유실·비트 에러 발생 시 역방향 피드백 채널로 재전송을 요청해 복구하는 **후방향 에러 제어(BEC)** 및 **ARQ 프로토콜** |
| 3 | [5G/6G 이동통신 아키텍처]({{< relref "/docs/subnotes/05_Networks/cellular-slicing-sba" >}}) | 코어망 제어 평면을 마이크로서비스화해 REST API로 연동하는 **SBA**와, 용도별로 물리 망을 가상 분할하는 **네트워크 슬라이싱** |
| 4 | [디지털 계위 (PDH·SDH·SONET)]({{< relref "/docs/subnotes/05_Networks/digital-hierarchy-pdh-sdh" >}}) | 여러 채널을 계층적으로 다중화하는 표준 체계로, 준동기식 **PDH**에서 완전 동기식 **SDH**(국제)·**SONET**(북미)으로 발전한 광통신 기반 기술 |
| 5 | [DNS 및 DNSSEC 보안]({{< relref "/docs/subnotes/05_Networks/dns-dnssec" >}}) | 도메인 이름을 IP로 매핑하는 **DNS**와, 캐시 포이즈닝(스푸핑)을 방어하기 위해 공개키 서명으로 무결성·출처를 검증하는 **DNSSEC** |
| 6 | [HDLC 데이터링크 프로토콜]({{< relref "/docs/subnotes/05_Networks/hdlc-protocol" >}}) | ISO 13239 제정 비트 지향 데이터링크 프로토콜로, 오류·흐름·순서 제어를 제공하며 PPP·X.25·Frame Relay의 기반이 되는 동기식 규격 |
| 7 | [MODBUS 산업용 통신 프로토콜]({{< relref "/docs/subnotes/05_Networks/modbus-protocol" >}}) | 1979년 Modicon이 개발한 산업용 직렬 통신 프로토콜로, PLC·센서 등 ICS/SCADA 장치 간 마스터-슬레이브 방식 오픈 표준 |
| 8 | [멀티미디어 스트리밍 프로토콜]({{< relref "/docs/subnotes/05_Networks/multimedia-streaming-protocols" >}}) | 오디오·영상을 실시간(Live) 또는 주문형(VOD)으로 전송하는 통신 규약으로, 전송 계층·지연 요구에 따라 상이한 프로토콜이 쓰임 |
| 9 | [네트워크 프로토콜 기본 개념]({{< relref "/docs/subnotes/05_Networks/network-protocol-basics" >}}) | 이기종 시스템 간 표준화된 통신을 가능하게 하는 규칙·절차의 집합으로, 신택스·시맨틱스·타이밍의 3요소로 구성됨 |
| 10 | [개방형 API 및 SOAP/REST]({{< relref "/docs/subnotes/05_Networks/open-api-soap-rest" >}}) | 서비스 기능을 외부 개발자가 활용하도록 공개한 인터페이스 **Open API**와, 이를 구현하는 XML 기반 **SOAP**, HTTP 경량 아키텍처 **REST** |
| 11 | [OSI 7계층 및 TCP Handshake]({{< relref "/docs/subnotes/05_Networks/osi-tcp-handshake" >}}) | 통신 과정을 표준화한 **OSI 7계층 모델**과, TCP 연결을 수립하는 **3-Way Handshake** 및 종료하는 **4-Way Handshake** |
| 12 | [PoE (Power over Ethernet)]({{< relref "/docs/subnotes/05_Networks/poe-power-over-ethernet" >}}) | IEEE 802.3 표준 기반 이더넷 케이블로 데이터·직류 전력을 동시 전송하는 기술로, IP 카메라·AP 등을 별도 전원 없이 구동 |
| 13 | [라우팅 프로토콜 분류 및 알고리즘]({{< relref "/docs/subnotes/05_Networks/routing-protocol" >}}) | 송신지에서 목적지까지 최적 경로로 패킷을 유도하기 위해 경로 정보를 관리하는 라우팅 프로토콜의 아키텍처 및 유형별 분류 |
| 14 | [소프트웨어 정의 네트워크 SDN/NFV]({{< relref "/docs/subnotes/05_Networks/sdn-nfv-architecture" >}}) | 제어부(Control)와 전송부(Data)를 분리해 소프트웨어로 망을 통제하는 **SDN**과, 장비 기능을 x86 서버 VNF로 구동하는 **NFV** |
| 15 | [채널용량과 샤논 정리]({{< relref "/docs/subnotes/05_Networks/shannon-channel-capacity" >}}) | 잡음 채널에서 달성 가능한 최대 전송 속도(채널 용량)를 정의하는 정보이론 기본 정리로, C = B × log₂(1+S/N)로 표현됨 |
| 16 | [슬라이딩 윈도우 및 혼잡 제어]({{< relref "/docs/subnotes/05_Networks/sliding-window-congestion" >}}) | 송수신 처리 속도를 조율하는 **흐름 제어**와, 라우터·망 정체를 예방하기 위해 송신율을 동적 제어하는 **혼잡 제어 기술** |
| 17 | [서브네팅 및 VLSM/CIDR]({{< relref "/docs/subnotes/05_Networks/subnetting-vlsm" >}}) | 고정 IP 클래스 낭비를 막기 위해 호스트 비트를 차용해 분할하는 **서브네팅**과, 가변 마스크 **VLSM**, 비트 단위 통합·분할 **CIDR** |
| 18 | [TLS 1.2 취약점과 TLS 1.3 개선사항]({{< relref "/docs/subnotes/05_Networks/tls-1-2-vs-1-3" >}}) | 통신의 기밀성·무결성·인증을 보장하는 보안 프로토콜로, 약한 암호 스위트로 POODLE·BEAST에 취약한 TLS 1.2에서 RFC 8446 TLS 1.3(1-RTT)으로 전환 권고 |
| 19 | [트래픽 폴리싱과 트래픽 쉐이핑]({{< relref "/docs/subnotes/05_Networks/traffic-policing-shaping" >}}) | QoS 구현을 위한 트래픽 제어 기법으로, 폴리싱은 초과 트래픽을 즉시 드롭·마킹하고 쉐이핑은 버퍼에 지연 저장해 평탄화함 |
| 20 | [WiFi 7 및 차세대 무선 표준]({{< relref "/docs/subnotes/05_Networks/wifi7-standard" >}}) | 최대 46Gbps 속도의 7세대 무선 규격 **WiFi 7**과, 밀집 지역 초고신뢰성(Ultra High Reliability)에 초점을 둔 차세대 **WiFi 8** |
| 21 | [ZSM 및 IBN 기반 자율 네트워크]({{< relref "/docs/subnotes/05_Networks/zsm-ibn-autonomous-network" >}}) | 인간 개입 없이 AI/ML로 망을 자율 운영·치유하는 ETSI 표준 **ZSM**과, 의도(Intent)를 정책으로 자동 변환·배포하는 **IBN** |
