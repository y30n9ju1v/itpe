---
bookCollapseSection: true
title: "네트워크"
---

| 번호 | 토픽명 | 정의 |
| :--- | :--- | :--- |
| 1 | [AI-Native 6G 및 촉각 인터넷]({{< relref "/docs/subnotes/05_Networks/ai-native-6g-tactile-internet" >}}) | 네트워크 설계 단계부터 AI를 내재화해 자율 최적화·운영하는 6G 핵심 개념 **AI-Native Network**와, 이를 기반으로 인간의 촉각 반응 시간(1ms 이하) 수준의 초저지연·초고신뢰 실시간 상호작용을 실현하는 ITU-T 정의 응용 패러다임 **촉각 인터넷** |
| 2 | [오류 제어 및 ARQ]({{< relref "/docs/subnotes/05_Networks/arq-error-control" >}}) | 패킷 유실 및 비트 에러 발생 시, 역방향 피드백 채널을 이용해 송신 측에 재전송을 요청하여 오류를 복구하는 **후방향 에러 제어(BEC) 기술 및 ARQ 프로토콜** |
| 3 | [5G/6G 이동통신 아키텍처]({{< relref "/docs/subnotes/05_Networks/cellular-slicing-sba" >}}) | 코어망의 제어 평면 기능들을 마이크로서비스화하여 REST API로 연동하는 **SBA**와, 5G 요건(광·저·다) 만족을 위해 물리 망을 용도별 가상 분할하는 **네트워크 슬라이싱 기술** |
| 4 | [디지털 계위 (PDH·SDH·SONET)]({{< relref "/docs/subnotes/05_Networks/digital-hierarchy-pdh-sdh" >}}) | 디지털 통신에서 여러 채널을 계층적으로 다중화하여 고속 전송을 실현하는 표준 체계로, 준동기식 **PDH**에서 완전 동기식 **SDH**(유럽/국제), **SONET**(북미)으로 발전한 광통신 네트워크의 기반 기술 |
| 5 | [DNS 및 DNSSEC 보안]({{< relref "/docs/subnotes/05_Networks/dns-dnssec" >}}) | 도메인 이름을 IP로 매핑하는 **DNS**와, DNS 캐시 포이즈닝(스푸핑)을 방어하기 위해 공개키 암호화 서명 기술을 도입하여 데이터의 무결성 및 출처를 검증하는 **보안 표준 DNSSEC** |
| 6 | [HDLC 데이터링크 프로토콜]({{< relref "/docs/subnotes/05_Networks/hdlc-protocol" >}}) | ISO 13239로 제정된 비트 지향 데이터링크 계층 프로토콜로, 전이중·반이중 통신에서 오류 제어·흐름 제어·순서 제어를 제공하며 PPP·X.25·Frame Relay 등 다수 프로토콜의 기반이 되는 동기식 전송 규격 |
| 7 | [MODBUS 산업용 통신 프로토콜]({{< relref "/docs/subnotes/05_Networks/modbus-protocol" >}}) | 1979년 Modicon이 개발한 산업용 직렬 통신 프로토콜로, PLC·센서·액추에이터 등 산업 제어 장치(ICS/SCADA) 간 데이터 교환을 위해 마스터-슬레이브 방식으로 동작하는 오픈 표준 |
| 8 | [멀티미디어 스트리밍 프로토콜]({{< relref "/docs/subnotes/05_Networks/multimedia-streaming-protocols" >}}) | 오디오·영상 데이터를 실시간(Live) 또는 주문형(VOD)으로 전송하기 위한 통신 규약으로, 전송 계층·지연 요구사항·플랫폼 호환성에 따라 상이한 프로토콜이 사용됨 |
| 9 | [네트워크 프로토콜 기본 개념]({{< relref "/docs/subnotes/05_Networks/network-protocol-basics" >}}) | 통신 개체들이 데이터를 주고받기 위해 합의한 규칙과 절차의 집합으로, 이기종 시스템 간 표준화된 통신을 가능하게 하며 신택스·시맨틱스·타이밍의 3요소로 구성됨 |
| 10 | [개방형 API 및 SOAP/REST]({{< relref "/docs/subnotes/05_Networks/open-api-soap-rest" >}}) | 플랫폼·서비스 기능을 외부 개발자가 프로그래밍 방식으로 활용하도록 공개한 인터페이스인 **Open API**와, 이를 구현하는 두 축인 XML 기반 엄격한 프로토콜 **SOAP**, HTTP 메서드 기반 경량 아키텍처 스타일 **REST** |
| 11 | [OSI 7계층 및 TCP Handshake]({{< relref "/docs/subnotes/05_Networks/osi-tcp-handshake" >}}) | 네트워크 통신 과정을 표준화한 **OSI 7계층 참조 모델**과, 신뢰성 있는 전송(TCP)을 위해 단말 간 논리적 연결을 수립하는 **3-Way Handshake** 및 연결을 종료하는 **4-Way Handshake** 기술 |
| 12 | [PoE (Power over Ethernet)]({{< relref "/docs/subnotes/05_Networks/poe-power-over-ethernet" >}}) | IEEE 802.3 표준 기반으로 Cat5e 이상 이더넷 케이블을 통해 데이터와 직류 전력을 동시에 전송하는 기술로, IP 카메라·무선 AP·IP 전화기 등을 별도 전원 없이 네트워크 케이블만으로 동작시켜 배선 비용과 설치 복잡성을 절감 |
| 13 | [라우팅 프로토콜 분류 및 알고리즘]({{< relref "/docs/subnotes/05_Networks/routing-protocol" >}}) | 송신지에서 목적지까지 패킷을 안전하고 빠른 최적의 경로로 유도하기 위해 경로 정보를 관리하는 **라우팅 프로토콜**의 아키텍처 및 유형별 분류 기술 |
| 14 | [소프트웨어 정의 네트워크 SDN/NFV]({{< relref "/docs/subnotes/05_Networks/sdn-nfv-architecture" >}}) | 제어부(Control)와 전송부(Data)를 분리해 소프트웨어로 유연하게 망을 통제하는 **SDN**과, 하드웨어 장비 기능들을 범용 x86 서버 가상머신(VNF)으로 구동하는 **NFV 기술** |
| 15 | [채널용량과 샤논 정리]({{< relref "/docs/subnotes/05_Networks/shannon-channel-capacity" >}}) | 잡음이 있는 채널에서 달성 가능한 최대 정보 전송 속도(채널 용량)를 정의하는 정보이론의 기본 정리로, C = B × log₂(1+S/N)의 샤논-하틀리 공식으로 표현되며 현대 디지털 통신 시스템 설계의 이론적 상한을 제시 |
| 16 | [슬라이딩 윈도우 및 혼잡 제어]({{< relref "/docs/subnotes/05_Networks/sliding-window-congestion" >}}) | 송-수신 단말 간 처리 속도 차이를 조율하는 **흐름 제어(정·슬)**와, 중간 라우터/네트워크 정체를 예방하기 위해 송신율을 동적 제어하는 **혼잡 제어(슬·회·임·빠) 기술** |
| 17 | [서브네팅 및 VLSM/CIDR]({{< relref "/docs/subnotes/05_Networks/subnetting-vlsm" >}}) | 고정된 IP 클래스 주소 낭비를 막기 위해 호스트 비트를 차용하여 여러 서브넷으로 쪼개는 **서브네팅**과, 가변 크기 마스크를 적용하는 **VLSM**, 비트 단위로 네트워크를 통합/분할하는 **CIDR 기술** |
| 18 | [TLS 1.2 취약점과 TLS 1.3 개선사항]({{< relref "/docs/subnotes/05_Networks/tls-1-2-vs-1-3" >}}) | 인터넷 통신의 기밀성·무결성·인증을 보장하는 보안 프로토콜로, TLS 1.2는 약한 암호 스위트와 2-RTT 핸드셰이크로 POODLE·BEAST 등 공격에 노출되어, RFC 8446 기반 TLS 1.3(1-RTT, 강제 PFS)로의 전환이 권고됨 |
| 19 | [트래픽 폴리싱과 트래픽 쉐이핑]({{< relref "/docs/subnotes/05_Networks/traffic-policing-shaping" >}}) | QoS 구현을 위한 네트워크 트래픽 제어 기법으로, 폴리싱은 허용 대역폭 초과 트래픽을 즉시 드롭·마킹하고 쉐이핑은 버퍼에 지연 저장해 전송 속도를 평탄화(Smoothing)하는 방식 |
| 20 | [WiFi 7 및 차세대 무선 표준]({{< relref "/docs/subnotes/05_Networks/wifi7-standard" >}}) | 최대 46Gbps 속도와 극저지연을 실현하는 7세대 무선 규격 **WiFi 7**과, 속도 경쟁을 넘어 밀집 지역 내 초고신뢰성(Ultra High Reliability) 확보에 초점을 둔 차세대 **WiFi 8 무선랜 표준 기술** |
| 21 | [ZSM 및 IBN 기반 자율 네트워크]({{< relref "/docs/subnotes/05_Networks/zsm-ibn-autonomous-network" >}}) | 인간 개입 없이 AI/ML로 네트워크를 자율 운영·최적화·치유하는 ETSI 표준 프레임워크 **ZSM**과, 관리자가 선언한 비즈니스 의도(Intent)를 시스템이 자동으로 정책 변환·배포·검증하는 자율 네트워크 패러다임 **IBN**으로, 5G/6G 완전 자율 운영을 목표로 상호 연계됨 |
