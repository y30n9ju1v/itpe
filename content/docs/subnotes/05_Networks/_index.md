---
bookCollapseSection: true
title: "네트워크"
---

| 번호 | 토픽명 | 정의 |
| :--- | :--- | :--- |
| 1 | [AI-Native 6G 및 촉각 인터넷]({{< relref "/docs/subnotes/05_Networks/ai-native-6g-tactile-internet" >}}) | 설계 단계부터 AI를 내재화해 자율 최적화하는 6G 핵심 개념 **AI-Native Network**와, 1ms급 초저지연 실시간 상호작용을 실현하는 ITU-T **촉각 인터넷** |
| 2 | [Ad-hoc 네트워킹 라우팅 프로토콜]({{< relref "/docs/subnotes/05_Networks/adhoc-manet-routing" >}}) | 고정 인프라(기지국·AP) 없이 단말들이 자율적으로 라우터 역할을 수행하며 멀티홉 네트워크를 구성하는 분산형 무선 네트워크로, MANET(Mobile Ad-hoc Network)이 대표 형태이며 IEEE 802.11 기반으로 동작함 |
| 3 | [ARP와 보안 취약점]({{< relref "/docs/subnotes/05_Networks/arp" >}}) | IP 주소를 브로드캐스트로 질의하여 해당 MAC 주소를 획득하는 데이터링크 계층 주소 변환 프로토콜로, 이더넷 프레임 전달에 필요한 IP→MAC 매핑을 ARP 캐시에 임시 저장하여 반복 질의를 방지함 |
| 4 | [오류 제어 및 ARQ]({{< relref "/docs/subnotes/05_Networks/arq-error-control" >}}) | 패킷 유실·비트 에러 발생 시 역방향 피드백 채널로 재전송을 요청해 복구하는 **후방향 에러 제어(BEC)** 및 **ARQ 프로토콜** |
| 5 | [CDN 동작원리와 캐싱]({{< relref "/docs/subnotes/05_Networks/cdn" >}}) | 전 세계에 분산된 엣지 서버(PoP)에 콘텐츠를 캐싱하여 사용자에게 지리적으로 근접한 위치에서 빠르게 제공하는 분산 콘텐츠 전송 네트워크로, DNS 기반 최적 PoP 선택과 HTTP 캐시 제어 헤더 기반 캐싱 관리를 사용함 |
| 6 | [5G/6G 이동통신 아키텍처]({{< relref "/docs/subnotes/05_Networks/cellular-slicing-sba" >}}) | 코어망 제어 평면을 마이크로서비스화해 REST API로 연동하는 **SBA**와, 용도별로 물리 망을 가상 분할하는 **네트워크 슬라이싱** |
| 7 | [회선교환과 패킷교환]({{< relref "/docs/subnotes/05_Networks/circuit-packet-switching" >}}) | 네트워크에서 데이터를 목적지까지 전달하기 위해 경로와 자원을 할당하는 두 가지 교환 방식으로, 회선교환은 연결 전 전용 경로를 예약하고 패킷교환은 데이터를 분할하여 동적으로 전달함 |
| 8 | [DHCP 구조와 동작]({{< relref "/docs/subnotes/05_Networks/dhcp" >}}) | IP 주소·서브넷·게이트웨이·DNS 등 네트워크 구성 정보를 클라이언트에 동적으로 할당하는 응용 계층 프로토콜로, UDP 포트 67(서버)·68(클라이언트)을 사용하는 RFC 2131 표준 |
| 9 | [디지털 계위 (PDH·SDH·SONET)]({{< relref "/docs/subnotes/05_Networks/digital-hierarchy-pdh-sdh" >}}) | 여러 채널을 계층적으로 다중화하는 표준 체계로, 준동기식 **PDH**에서 완전 동기식 **SDH**(국제)·**SONET**(북미)으로 발전한 광통신 기반 기술 |
| 10 | [DNS 및 DNSSEC 보안]({{< relref "/docs/subnotes/05_Networks/dns-dnssec" >}}) | 도메인 이름을 IP로 매핑하는 **DNS**와, 캐시 포이즈닝(스푸핑)을 방어하기 위해 공개키 서명으로 무결성·출처를 검증하는 **DNSSEC** |
| 11 | [HDLC 데이터링크 프로토콜]({{< relref "/docs/subnotes/05_Networks/hdlc-protocol" >}}) | ISO 13239 제정 비트 지향 데이터링크 프로토콜로, 오류·흐름·순서 제어를 제공하며 PPP·X.25·Frame Relay의 기반이 되는 동기식 규격 |
| 12 | [HTTP 프로토콜과 QUIC]({{< relref "/docs/subnotes/05_Networks/http-quic" >}}) | 클라이언트와 서버 간 하이퍼텍스트 문서를 전송하기 위한 무상태(Stateless) 애플리케이션 계층 요청-응답 프로토콜로, TCP 기반 HTTP/1.1·HTTP/2의 HOL Blocking 한계를 극복하기 위해 UDP 기반 QUIC을 전송 계층으로 채택한 HTTP/3(RFC 9114)로 진화함 |
| 13 | [IPv6 헤더구조와 IPv4 전환 방안]({{< relref "/docs/subnotes/05_Networks/ipv6" >}}) | 128비트 주소 체계로 사실상 무한한 주소 공간과 보안·QoS·자동설정을 기본 탑재한 차세대 인터넷 프로토콜로, IPv4의 주소 고갈·헤더 복잡성·보안 한계를 근본적으로 해결하도록 설계됨 |
| 14 | [MODBUS 산업용 통신 프로토콜]({{< relref "/docs/subnotes/05_Networks/modbus-protocol" >}}) | 1979년 Modicon이 개발한 산업용 직렬 통신 프로토콜로, PLC·센서 등 ICS/SCADA 장치 간 마스터-슬레이브 방식 오픈 표준 |
| 15 | [다중 접근 프로토콜]({{< relref "/docs/subnotes/05_Networks/multiple-access" >}}) | 공유 매체를 다수 장치가 효율적·공정하게 사용하도록 채널 접근을 조율하는 데이터링크 계층 프로토콜군으로, 충돌 허용·금지·회피 전략에 따라 임의 접근·제어 접근·채널화 세 방식으로 분류됨 |
| 16 | [멀티미디어 스트리밍 프로토콜]({{< relref "/docs/subnotes/05_Networks/multimedia-streaming-protocols" >}}) | 오디오·영상을 실시간(Live) 또는 주문형(VOD)으로 전송하는 통신 규약으로, 전송 계층·지연 요구에 따라 상이한 프로토콜이 쓰임 |
| 17 | [NAT(Network Address Translation) 핵심 기능]({{< relref "/docs/subnotes/05_Networks/nat" >}}) | 사설 IP 주소와 공인 IP 주소를 상호 변환하여 IPv4 주소 부족을 해소하는 네트워크 기술로, RFC 1918 사설 주소 공간(10.x, 172.16.x, 192.168.x)을 공인 IP에 매핑하여 인터넷 접속을 제공함 |
| 18 | [네트워크 프로토콜 기본 개념]({{< relref "/docs/subnotes/05_Networks/network-protocol-basics" >}}) | 이기종 시스템 간 표준화된 통신을 가능하게 하는 규칙·절차의 집합으로, 신택스·시맨틱스·타이밍의 3요소로 구성됨 |
| 19 | [네트워크 스위치 유형과 L4/L7 스위치]({{< relref "/docs/subnotes/05_Networks/network-switch" >}}) | 수신한 패킷을 목적지 주소를 분석하여 해당 포트로만 선택적으로 전달하는 네트워크 중계 장비로, 허브와 달리 충돌 도메인을 포트 단위로 분리하며 인식하는 주소 유형에 따라 L2~L7으로 구분됨 |
| 20 | [개방형 API 및 SOAP/REST]({{< relref "/docs/subnotes/05_Networks/open-api-soap-rest" >}}) | 서비스 기능을 외부 개발자가 활용하도록 공개한 인터페이스 **Open API**와, 이를 구현하는 XML 기반 **SOAP**, HTTP 경량 아키텍처 **REST** |
| 21 | [OSI 7계층 및 TCP Handshake]({{< relref "/docs/subnotes/05_Networks/osi-tcp-handshake" >}}) | 통신 과정을 표준화한 **OSI 7계층 모델**과, TCP 연결을 수립하는 **3-Way Handshake** 및 종료하는 **4-Way Handshake** |
| 22 | [PoE (Power over Ethernet)]({{< relref "/docs/subnotes/05_Networks/poe-power-over-ethernet" >}}) | IEEE 802.3 표준 기반 이더넷 케이블로 데이터·직류 전력을 동시 전송하는 기술로, IP 카메라·AP 등을 별도 전원 없이 구동 |
| 23 | [QoS 스케줄링, 모델, 측정요소]({{< relref "/docs/subnotes/05_Networks/qos-architecture" >}}) | 네트워크에서 특정 트래픽 유형의 지연·지터·패킷손실·대역폭을 보장하기 위한 패킷 처리 우선순위 및 자원 관리 기술 체계로, 분류(Classification)→마킹(Marking)→큐잉(Queuing)→혼잡회피→쉐이핑/폴리싱 순서로 계층 적용됨 |
| 24 | [라우팅 프로토콜 분류 및 알고리즘]({{< relref "/docs/subnotes/05_Networks/routing-protocol" >}}) | 송신지에서 목적지까지 최적 경로로 패킷을 유도하기 위해 경로 정보를 관리하는 라우팅 프로토콜의 아키텍처 및 유형별 분류 |
| 25 | [소프트웨어 정의 네트워크 SDN/NFV]({{< relref "/docs/subnotes/05_Networks/sdn-nfv-architecture" >}}) | 제어부(Control)와 전송부(Data)를 분리해 소프트웨어로 망을 통제하는 **SDN**과, 장비 기능을 x86 서버 VNF로 구동하는 **NFV** |
| 26 | [채널용량과 샤논 정리]({{< relref "/docs/subnotes/05_Networks/shannon-channel-capacity" >}}) | 잡음 채널에서 달성 가능한 최대 전송 속도(채널 용량)를 정의하는 정보이론 기본 정리로, C = B × log₂(1+S/N)로 표현됨 |
| 27 | [슬라이딩 윈도우 및 혼잡 제어]({{< relref "/docs/subnotes/05_Networks/sliding-window-congestion" >}}) | 송수신 처리 속도를 조율하는 **흐름 제어**와, 라우터·망 정체를 예방하기 위해 송신율을 동적 제어하는 **혼잡 제어 기술** |
| 28 | [서브네팅 및 VLSM/CIDR]({{< relref "/docs/subnotes/05_Networks/subnetting-vlsm" >}}) | 고정 IP 클래스 낭비를 막기 위해 호스트 비트를 차용해 분할하는 **서브네팅**과, 가변 마스크 **VLSM**, 비트 단위 통합·분할 **CIDR** |
| 29 | [TLS 1.2 취약점과 TLS 1.3 개선사항]({{< relref "/docs/subnotes/05_Networks/tls-1-2-vs-1-3" >}}) | 통신의 기밀성·무결성·인증을 보장하는 보안 프로토콜로, 약한 암호 스위트로 POODLE·BEAST에 취약한 TLS 1.2에서 RFC 8446 TLS 1.3(1-RTT)으로 전환 권고 |
| 30 | [트래픽 폴리싱과 트래픽 쉐이핑]({{< relref "/docs/subnotes/05_Networks/traffic-policing-shaping" >}}) | QoS 구현을 위한 트래픽 제어 기법으로, 폴리싱은 초과 트래픽을 즉시 드롭·마킹하고 쉐이핑은 버퍼에 지연 저장해 평탄화함 |
| 31 | [TCP/UDP/SCTP 전송계층 프로토콜 비교]({{< relref "/docs/subnotes/05_Networks/transport-tcp-udp-sctp" >}}) | 신뢰성·속도·고가용성 간 서로 다른 균형점을 제공하는 전송계층 프로토콜군으로, TCP는 연결지향 신뢰성 전송, UDP는 비연결 저지연 전송을 담당하며, SCTP는 멀티스트리밍·멀티호밍으로 TCP의 HOL Blocking과 단일 경로 장애 문제를 해결한 연결지향 프로토콜(RFC 4960)임 |
| 32 | [WiFi 7 및 차세대 무선 표준]({{< relref "/docs/subnotes/05_Networks/wifi7-standard" >}}) | 최대 46Gbps 속도의 7세대 무선 규격 **WiFi 7**과, 밀집 지역 초고신뢰성(Ultra High Reliability)에 초점을 둔 차세대 **WiFi 8** |
| 33 | [ZSM 및 IBN 기반 자율 네트워크]({{< relref "/docs/subnotes/05_Networks/zsm-ibn-autonomous-network" >}}) | 인간 개입 없이 AI/ML로 망을 자율 운영·치유하는 ETSI 표준 **ZSM**과, 의도(Intent)를 정책으로 자동 변환·배포하는 **IBN** |
