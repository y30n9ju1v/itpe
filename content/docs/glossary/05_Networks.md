---
bookCollapseSection: false
title: "네트워크 용어집"
---

| 용어 | 정의 | 출처 |
| :--- | :--- | :--- |
| 4096-QAM | WiFi 7 고밀도 변조방식(1심볼당 12bit) | [WiFi 7 및 차세대 무선 표준]({{< relref "/docs/subnotes/05_Networks/wifi7-standard" >}}) |
| 802.3af | 최대 15.4W PoE 초기 표준(2003) | [PoE (Power over Ethernet)]({{< relref "/docs/subnotes/05_Networks/poe-power-over-ethernet" >}}) |
| 802.3at | 최대 30W PoE+ 표준(2009) | [PoE (Power over Ethernet)]({{< relref "/docs/subnotes/05_Networks/poe-power-over-ethernet" >}}) |
| 802.3bt | 최대 60~100W PoE++ 표준(2018) | [PoE (Power over Ethernet)]({{< relref "/docs/subnotes/05_Networks/poe-power-over-ethernet" >}}) |
| ABR | 네트워크 상태 따라 화질 자동전환하는 스트리밍 기법 | [멀티미디어 스트리밍 프로토콜]({{< relref "/docs/subnotes/05_Networks/multimedia-streaming-protocols" >}}) |
| ABM | 양국 대등 전이중 HDLC 동작모드(X.25·PPP 최다사용) | [HDLC 데이터링크 프로토콜]({{< relref "/docs/subnotes/05_Networks/hdlc-protocol" >}}) |
| AFC | 6GHz 대역 간섭방지 자동 주파수·출력 조정 시스템 | [WiFi 7 및 차세대 무선 표준]({{< relref "/docs/subnotes/05_Networks/wifi7-standard" >}}) |
| ALOHA | 임의접근(Random Access) 충돌허용 다중접근 방식 | [다중 접근 프로토콜]({{< relref "/docs/subnotes/05_Networks/multiple-access" >}}) |
| AMF | 단말 인증·기지국간 이동성관리 담당 SBA 컴포넌트 | [5G/6G 이동통신 아키텍처]({{< relref "/docs/subnotes/05_Networks/cellular-slicing-sba" >}}) |
| AODV | RREQ/RREP/RERR 기반 요청시 경로탐색 리액티브 라우팅 | [Ad-hoc 네트워킹 라우팅 프로토콜]({{< relref "/docs/subnotes/05_Networks/adhoc-manet-routing" >}}) |
| API Gateway | 인증/인가·Rate Limiting·WAF 수행 중앙 보안통제지점 | [개방형 API 및 SOAP/REST]({{< relref "/docs/subnotes/05_Networks/open-api-soap-rest" >}}) |
| ARM | 종국이 허락없이 응답프레임 전송 가능한 HDLC 동작모드 | [HDLC 데이터링크 프로토콜]({{< relref "/docs/subnotes/05_Networks/hdlc-protocol" >}}) |
| ARP Spoofing | 위조 ARP Reply로 캐시조작해 MITM 유발하는 공격 | [ARP와 보안 취약점]({{< relref "/docs/subnotes/05_Networks/arp" >}}) |
| AS_PATH | BGP 경로벡터 방식의 AS번호목록 기반 루프방지 속성 | [라우팅 프로토콜 분류 및 알고리즘]({{< relref "/docs/subnotes/05_Networks/routing-protocol" >}}) |
| BBR | 병목대역폭·최소RTT 실측기반 혼잡제어 알고리즘 | [슬라이딩 윈도우 및 혼잡 제어]({{< relref "/docs/subnotes/05_Networks/sliding-window-congestion" >}}) |
| BEC | 오류발생 시 송신측 재전송(ARQ) 요구하는 역방향 정정 | [오류 제어 및 ARQ]({{< relref "/docs/subnotes/05_Networks/arq-error-control" >}}) |
| BLSR/UPSR | 장애 시 50ms 이내 자동우회하는 SDH 링 보호구조 | [디지털 계위 (PDH·SDH·SONET)]({{< relref "/docs/subnotes/05_Networks/digital-hierarchy-pdh-sdh" >}}) |
| BOLA | 객체수준 권한검증 부재로 인한 API 취약점 | [개방형 API 및 SOAP/REST]({{< relref "/docs/subnotes/05_Networks/open-api-soap-rest" >}}) |
| CBS | 허용되는 순간 버스트 트래픽 크기 | [트래픽 폴리싱과 트래픽 쉐이핑]({{< relref "/docs/subnotes/05_Networks/traffic-policing-shaping" >}}) |
| CBWFQ | 클래스별 보장대역폭 제공하는 큐잉기법(LLQ와 결합) | [QoS 스케줄링, 모델, 측정요소]({{< relref "/docs/subnotes/05_Networks/qos-architecture" >}}) |
| CDMA | 직교코드로 동시전송하는 채널화 다중접근(3G WCDMA) | [다중 접근 프로토콜]({{< relref "/docs/subnotes/05_Networks/multiple-access" >}}) |
| Chase Combining | 손상패킷을 버퍼보관 후 재전송패킷과 합성해 SNR 향상 | [오류 제어 및 ARQ]({{< relref "/docs/subnotes/05_Networks/arq-error-control" >}}) |
| CIDR | 클래스리스 접두사(/prefix) 표기 주소체계 | [서브네팅 및 VLSM/CIDR]({{< relref "/docs/subnotes/05_Networks/subnetting-vlsm" >}}) |
| CIR | 보장된(약정) 기본 전송률 | [트래픽 폴리싱과 트래픽 쉐이핑]({{< relref "/docs/subnotes/05_Networks/traffic-policing-shaping" >}}) |
| Coil | 1비트 읽기/쓰기 MODBUS 출력 레지스터 | [MODBUS 산업용 통신 프로토콜]({{< relref "/docs/subnotes/05_Networks/modbus-protocol" >}}) |
| Connection Migration | Connection ID로 IP변경 후에도 QUIC 세션 유지 | [HTTP 프로토콜과 QUIC]({{< relref "/docs/subnotes/05_Networks/http-quic" >}}) |
| CRC | 생성다항식 모듈로-2 나눗셈 기반 오류검출코드(FCS) | [오류 제어 및 ARQ]({{< relref "/docs/subnotes/05_Networks/arq-error-control" >}}) |
| CRTP | VoIP 헤더를 40B에서 2~4B로 줄이는 압축 기법 | [QoS 스케줄링, 모델, 측정요소]({{< relref "/docs/subnotes/05_Networks/qos-architecture" >}}) |
| CSMA/CA | 채널유휴 확인 후 랜덤백오프하는 무선(Wi-Fi) 다중접근 | [다중 접근 프로토콜]({{< relref "/docs/subnotes/05_Networks/multiple-access" >}}) |
| CSMA/CD | 충돌감지 시 Jam Signal 발생하는 유선 이더넷 다중접근 | [다중 접근 프로토콜]({{< relref "/docs/subnotes/05_Networks/multiple-access" >}}) |
| CWND | 송신측이 혼잡상태 고려해 자체계산하는 혼잡윈도우 | [슬라이딩 윈도우 및 혼잡 제어]({{< relref "/docs/subnotes/05_Networks/sliding-window-congestion" >}}) |
| DAI | DHCP Snooping 바인딩테이블 기반 ARP 검증 기능 | [ARP와 보안 취약점]({{< relref "/docs/subnotes/05_Networks/arp" >}}) |
| DASH | MPEG 표준 어댑티브 비트레이트 스트리밍(mpd 매니페스트) | [멀티미디어 스트리밍 프로토콜]({{< relref "/docs/subnotes/05_Networks/multimedia-streaming-protocols" >}}) |
| DNAT | 외부→내부 인바운드 목적지IP 역변환 | [NAT(Network Address Translation) 핵심 기능]({{< relref "/docs/subnotes/05_Networks/nat" >}}) |
| DNSKEY | RRSIG 서명 검증용 네임서버 비대칭 공개키 레코드 | [DNS 및 DNSSEC 보안]({{< relref "/docs/subnotes/05_Networks/dns-dnssec" >}}) |
| DoH | HTTPS 이용해 DNS 질의를 암호화하는 방식 | [DNS 및 DNSSEC 보안]({{< relref "/docs/subnotes/05_Networks/dns-dnssec" >}}) |
| DoT | TLS(853포트) 이용해 DNS 질의를 암호화하는 방식 | [DNS 및 DNSSEC 보안]({{< relref "/docs/subnotes/05_Networks/dns-dnssec" >}}) |
| DORA | Discover-Offer-Request-ACK DHCP 4단계 핸드셰이크 | [DHCP 구조와 동작]({{< relref "/docs/subnotes/05_Networks/dhcp" >}}) |
| DS (Delegation Signer) | 하위존 DNSKEY 해시값을 상위 부모존에 등록하는 레코드 | [DNS 및 DNSSEC 보안]({{< relref "/docs/subnotes/05_Networks/dns-dnssec" >}}) |
| DSDV | 시퀀스번호+거리벡터 기반 프로액티브 MANET 라우팅 | [Ad-hoc 네트워킹 라우팅 프로토콜]({{< relref "/docs/subnotes/05_Networks/adhoc-manet-routing" >}}) |
| DSR | 헤더에 전체경로 기록하는 소스라우팅 리액티브 방식 | [Ad-hoc 네트워킹 라우팅 프로토콜]({{< relref "/docs/subnotes/05_Networks/adhoc-manet-routing" >}}) |
| ECDHE | 완전 전방향비밀성(PFS) 보장하는 타원곡선 키교환 | [TLS 1.2 취약점과 TLS 1.3 개선사항]({{< relref "/docs/subnotes/05_Networks/tls-1-2-vs-1-3" >}}) |
| EDNS0 | 512Byte 제한 넘어서는 UDP DNS 메시지 크기 확장 표준 | [DNS 및 DNSSEC 보안]({{< relref "/docs/subnotes/05_Networks/dns-dnssec" >}}) |
| eMBB | 초광대역(고속) 5G 3대 서비스 요건 중 하나 | [5G/6G 이동통신 아키텍처]({{< relref "/docs/subnotes/05_Networks/cellular-slicing-sba" >}}) |
| ETag | 콘텐츠 해시기반 변경감지 HTTP 캐시 헤더 | [CDN 동작원리와 캐싱]({{< relref "/docs/subnotes/05_Networks/cdn" >}}) |
| FANET | 드론 군집 통신용 Ad-hoc 네트워크 | [Ad-hoc 네트워킹 라우팅 프로토콜]({{< relref "/docs/subnotes/05_Networks/adhoc-manet-routing" >}}) |
| Fast Retransmit | 동일패킷 3회 연속 중복ACK 수신 시 즉시 재전송 | [슬라이딩 윈도우 및 혼잡 제어]({{< relref "/docs/subnotes/05_Networks/sliding-window-congestion" >}}) |
| FDMA | 주파수대역 분할 채널화 다중접근(1G) | [다중 접근 프로토콜]({{< relref "/docs/subnotes/05_Networks/multiple-access" >}}) |
| FEC | 수신측 자체 오류검출·복구하는 순방향 정정기법 | [오류 제어 및 ARQ]({{< relref "/docs/subnotes/05_Networks/arq-error-control" >}}) |
| FLSM | 전체 서브넷에 동일 고정크기 마스크 적용 방식 | [서브네팅 및 VLSM/CIDR]({{< relref "/docs/subnotes/05_Networks/subnetting-vlsm" >}}) |
| Function Code | MODBUS 마스터 요청의 동작을 지정하는 코드 | [MODBUS 산업용 통신 프로토콜]({{< relref "/docs/subnotes/05_Networks/modbus-protocol" >}}) |
| Go-Back-N | 에러프레임 이후 전체를 재전송하는 ARQ 기법 | [오류 제어 및 ARQ]({{< relref "/docs/subnotes/05_Networks/arq-error-control" >}}) |
| Gratuitous ARP | 자신의 IP-MAC을 능동 브로드캐스트하는 ARP | [ARP와 보안 취약점]({{< relref "/docs/subnotes/05_Networks/arp" >}}) |
| HARQ | 물리계층 FEC와 링크계층 ARQ를 결합한 무선 재전송 | [오류 제어 및 ARQ]({{< relref "/docs/subnotes/05_Networks/arq-error-control" >}}) |
| Happy Eyeballs | IPv4·IPv6 병렬접속 후 먼저 성공한 경로 사용 기법 | [IPv6 헤더구조와 IPv4 전환 방안]({{< relref "/docs/subnotes/05_Networks/ipv6" >}}) |
| HLS | Apple 개발 세그먼트(ts/m4s)+m3u8 기반 스트리밍 | [멀티미디어 스트리밍 프로토콜]({{< relref "/docs/subnotes/05_Networks/multimedia-streaming-protocols" >}}) |
| Holding Register | 16비트 읽기/쓰기 가능한 MODBUS 레지스터 | [MODBUS 산업용 통신 프로토콜]({{< relref "/docs/subnotes/05_Networks/modbus-protocol" >}}) |
| HOL Blocking | 앞선 데이터 지연이 뒤 스트림 처리까지 막는 현상 | [HTTP 프로토콜과 QUIC]({{< relref "/docs/subnotes/05_Networks/http-quic" >}}) |
| HPACK | HTTP/2에서 사용하는 헤더 압축 방식 | [HTTP 프로토콜과 QUIC]({{< relref "/docs/subnotes/05_Networks/http-quic" >}}) |
| I-Frame | 데이터전송+ACK를 동시 수행하는 HDLC 프레임 | [HDLC 데이터링크 프로토콜]({{< relref "/docs/subnotes/05_Networks/hdlc-protocol" >}}) |
| IBN | 선언된 비즈니스 의도를 자동 정책변환·검증하는 패러다임 | [ZSM 및 IBN 기반 자율 네트워크]({{< relref "/docs/subnotes/05_Networks/zsm-ibn-autonomous-network" >}}) |
| IGMP | 호스트-라우터간 멀티캐스트 그룹 관리 프로토콜 | [라우팅 프로토콜 분류 및 알고리즘]({{< relref "/docs/subnotes/05_Networks/routing-protocol" >}}) |
| IGP | 단일 AS 내부 라우터간 최적경로 프로토콜(RIP·OSPF) | [라우팅 프로토콜 분류 및 알고리즘]({{< relref "/docs/subnotes/05_Networks/routing-protocol" >}}) |
| Incremental Redundancy | 재전송 시 추가 패리티비트만 전송하는 HARQ 기법 | [오류 제어 및 ARQ]({{< relref "/docs/subnotes/05_Networks/arq-error-control" >}}) |
| IntServ | 개별 흐름별 RSVP 자원예약하는 QoS 모델 | [회선교환과 패킷교환]({{< relref "/docs/subnotes/05_Networks/circuit-packet-switching" >}}) |
| LACP | 여러 포트 링크를 묶어 집계하는 프로토콜 | [네트워크 스위치 유형과 L4/L7 스위치]({{< relref "/docs/subnotes/05_Networks/network-switch" >}}) |
| LFI | 큰 패킷을 분할·인터리빙해 저속구간 지연을 줄이는 기법 | [QoS 스케줄링, 모델, 측정요소]({{< relref "/docs/subnotes/05_Networks/qos-architecture" >}}) |
| LLQ | VoIP 트래픽을 절대 우선처리하는 큐잉기법 | [QoS 스케줄링, 모델, 측정요소]({{< relref "/docs/subnotes/05_Networks/qos-architecture" >}}) |
| MANET | 고정 인프라 없이 단말이 라우터 역할하는 멀티홉 무선망 | [Ad-hoc 네트워킹 라우팅 프로토콜]({{< relref "/docs/subnotes/05_Networks/adhoc-manet-routing" >}}) |
| MANO | NFV 자원·VNF 생명주기를 통합 관리하는 오케스트레이터 | [소프트웨어 정의 네트워크 SDN/NFV]({{< relref "/docs/subnotes/05_Networks/sdn-nfv-architecture" >}}) |
| MLO | 2.4/5/6GHz 다중대역을 동시 결합해 송수신하는 기술 | [WiFi 7 및 차세대 무선 표준]({{< relref "/docs/subnotes/05_Networks/wifi7-standard" >}}) |
| mMTC | 다연결(대규모IoT) 5G 3대 서비스 요건 중 하나 | [5G/6G 이동통신 아키텍처]({{< relref "/docs/subnotes/05_Networks/cellular-slicing-sba" >}}) |
| Multi-RU | 간섭 주파수만 펑처링(도려내기) 후 통합전송하는 기술 | [WiFi 7 및 차세대 무선 표준]({{< relref "/docs/subnotes/05_Networks/wifi7-standard" >}}) |
| NAT-T | ESP를 UDP 4500포트로 캡슐화해 NAT를 통과시키는 기술 | [NAT(Network Address Translation) 핵심 기능]({{< relref "/docs/subnotes/05_Networks/nat" >}}) |
| NAT64 | IPv6전용 호스트가 NAT64 경유해 IPv4서버 접근하는 기술 | [IPv6 헤더구조와 IPv4 전환 방안]({{< relref "/docs/subnotes/05_Networks/ipv6" >}}) |
| Near-RT RIC | O-RAN 기반 기지국 내 준실시간 AI 추론엔진 | [AI-Native 6G 및 촉각 인터넷]({{< relref "/docs/subnotes/05_Networks/ai-native-6g-tactile-internet" >}}) |
| NDP | IPv6 ICMPv6 기반 주소해석 프로토콜(ARP 대체) | [ARP와 보안 취약점]({{< relref "/docs/subnotes/05_Networks/arp" >}}) |
| NRF | NF 서비스 인스턴스 상태등록·발견을 돕는 레지스트리 | [5G/6G 이동통신 아키텍처]({{< relref "/docs/subnotes/05_Networks/cellular-slicing-sba" >}}) |
| NRM | 주국 폴링허가 필요한 HDLC 동작모드(멀티포인트) | [HDLC 데이터링크 프로토콜]({{< relref "/docs/subnotes/05_Networks/hdlc-protocol" >}}) |
| NSEC3 | 이름 해시처리로 도메인 부재를 증명하는 레코드 | [DNS 및 DNSSEC 보안]({{< relref "/docs/subnotes/05_Networks/dns-dnssec" >}}) |
| OAM | SDH 헤더에 내장된 운용·관리·유지보수 바이트 | [디지털 계위 (PDH·SDH·SONET)]({{< relref "/docs/subnotes/05_Networks/digital-hierarchy-pdh-sdh" >}}) |
| OFDMA | 직교 부반송파를 사용자별 할당하는 채널화(LTE·5G) | [다중 접근 프로토콜]({{< relref "/docs/subnotes/05_Networks/multiple-access" >}}) |
| OLSR | MPR 플러딩감소 기반 프로액티브 MANET 라우팅 | [Ad-hoc 네트워킹 라우팅 프로토콜]({{< relref "/docs/subnotes/05_Networks/adhoc-manet-routing" >}}) |
| OpenFlow | SDN 컨트롤러가 Flow Table을 설정하는 사우스바운드 표준 | [소프트웨어 정의 네트워크 SDN/NFV]({{< relref "/docs/subnotes/05_Networks/sdn-nfv-architecture" >}}) |
| Origin Shield | CDN 원본서버를 보호하는 추가 캐시 레이어 | [CDN 동작원리와 캐싱]({{< relref "/docs/subnotes/05_Networks/cdn" >}}) |
| PAT | 공인IP 1개+포트번호로 다수 호스트 구분하는 NAT | [NAT(Network Address Translation) 핵심 기능]({{< relref "/docs/subnotes/05_Networks/nat" >}}) |
| PD | PoE 전력을 수신하는 장치(IP카메라·AP 등) | [PoE (Power over Ethernet)]({{< relref "/docs/subnotes/05_Networks/poe-power-over-ethernet" >}}) |
| PDH | 각 노드가 독립 클럭으로 동작하는 준동기 디지털 계위 | [디지털 계위 (PDH·SDH·SONET)]({{< relref "/docs/subnotes/05_Networks/digital-hierarchy-pdh-sdh" >}}) |
| PFS | 세션키 유출돼도 과거 트래픽을 보호하는 전방향비밀성 | [TLS 1.2 취약점과 TLS 1.3 개선사항]({{< relref "/docs/subnotes/05_Networks/tls-1-2-vs-1-3" >}}) |
| PIM-SM | 명시적 Join과 RP 기반 대규모 저밀도 멀티캐스트 라우팅 | [라우팅 프로토콜 분류 및 알고리즘]({{< relref "/docs/subnotes/05_Networks/routing-protocol" >}}) |
| PIR | 허용되는 최대 전송률 | [트래픽 폴리싱과 트래픽 쉐이핑]({{< relref "/docs/subnotes/05_Networks/traffic-policing-shaping" >}}) |
| PMTUD | 경로상 최대전송단위(MTU)를 탐색하는 기법 | [IPv6 헤더구조와 IPv4 전환 방안]({{< relref "/docs/subnotes/05_Networks/ipv6" >}}) |
| PoP | 사용자 근접위치의 CDN 콘텐츠 캐싱 엣지서버 거점 | [CDN 동작원리와 캐싱]({{< relref "/docs/subnotes/05_Networks/cdn" >}}) |
| Poison Reverse | 장애 발견 즉시 무한대 메트릭을 전파하는 루프방지기법 | [라우팅 프로토콜 분류 및 알고리즘]({{< relref "/docs/subnotes/05_Networks/routing-protocol" >}}) |
| PSE | PoE 전력을 공급하는 장치(스위치·인젝터) | [PoE (Power over Ethernet)]({{< relref "/docs/subnotes/05_Networks/poe-power-over-ethernet" >}}) |
| QPACK | HTTP/3(QUIC)에서 사용하는 헤더 압축 방식 | [HTTP 프로토콜과 QUIC]({{< relref "/docs/subnotes/05_Networks/http-quic" >}}) |
| QUIC | UDP 기반 저지연 전송 프로토콜, HTTP/3의 기반 | [HTTP 프로토콜과 QUIC]({{< relref "/docs/subnotes/05_Networks/http-quic" >}}) |
| Relay Agent | 라우터 넘어 서브넷의 DHCP 요청을 중계하는 장치 | [DHCP 구조와 동작]({{< relref "/docs/subnotes/05_Networks/dhcp" >}}) |
| REST | HTTP 메서드 기반 무상태 경량 아키텍처 스타일 | [개방형 API 및 SOAP/REST]({{< relref "/docs/subnotes/05_Networks/open-api-soap-rest" >}}) |
| Route Summarization | 연속된 대역을 상위 하나의 경로로 요약하는 기법 | [서브네팅 및 VLSM/CIDR]({{< relref "/docs/subnotes/05_Networks/subnetting-vlsm" >}}) |
| RRSIG | RRset에 대응하는 전자서명을 담은 DNSSEC 레코드 | [DNS 및 DNSSEC 보안]({{< relref "/docs/subnotes/05_Networks/dns-dnssec" >}}) |
| RSVP | Path/Resv 메시지로 경로상 자원을 예약하는 프로토콜 | [회선교환과 패킷교환]({{< relref "/docs/subnotes/05_Networks/circuit-packet-switching" >}}) |
| RTMP | TCP기반 1~3초 지연의 저지연 스트림 인제스트 프로토콜 | [멀티미디어 스트리밍 프로토콜]({{< relref "/docs/subnotes/05_Networks/multimedia-streaming-protocols" >}}) |
| RTSP | RTP로 데이터를 전송하는 스트리밍 제어 프로토콜 | [멀티미디어 스트리밍 프로토콜]({{< relref "/docs/subnotes/05_Networks/multimedia-streaming-protocols" >}}) |
| RWND | 수신측이 헤더로 통보하는 남은 수신버퍼(수신윈도우) | [슬라이딩 윈도우 및 혼잡 제어]({{< relref "/docs/subnotes/05_Networks/sliding-window-congestion" >}}) |
| S-Frame | 흐름·오류제어(RR·RNR·REJ·SREJ)용 HDLC 프레임 | [HDLC 데이터링크 프로토콜]({{< relref "/docs/subnotes/05_Networks/hdlc-protocol" >}}) |
| SCTP | 멀티스트리밍·멀티호밍 지원하는 연결지향 전송계층 프로토콜 | [TCP/UDP/SCTP 전송계층 프로토콜 비교]({{< relref "/docs/subnotes/05_Networks/transport-tcp-udp-sctp" >}}) |
| SDH | 모든 노드가 단일 클럭에 동기화된 완전동기 디지털 계위 | [디지털 계위 (PDH·SDH·SONET)]({{< relref "/docs/subnotes/05_Networks/digital-hierarchy-pdh-sdh" >}}) |
| Selective Repeat | 에러난 특정 프레임만 선별 재전송하는 ARQ 기법 | [오류 제어 및 ARQ]({{< relref "/docs/subnotes/05_Networks/arq-error-control" >}}) |
| Shannon Limit | 이론상 접근은 가능하나 도달할 수 없는 채널용량 한계 | [채널용량과 샤논 정리]({{< relref "/docs/subnotes/05_Networks/shannon-channel-capacity" >}}) |
| SLAAC | IPv6의 상태비저장 자동 주소설정 방식 | [DHCP 구조와 동작]({{< relref "/docs/subnotes/05_Networks/dhcp" >}}) |
| Slow Start | 임계치까지 매 RTT마다 2배 증가하는 혼잡제어 초기단계 | [슬라이딩 윈도우 및 혼잡 제어]({{< relref "/docs/subnotes/05_Networks/sliding-window-congestion" >}}) |
| SMF | 가입자 IP할당·세션 수립/해제와 UPF 라우팅룰 제어 | [5G/6G 이동통신 아키텍처]({{< relref "/docs/subnotes/05_Networks/cellular-slicing-sba" >}}) |
| SNAT | 내부→외부 아웃바운드 소스IP를 공인IP로 교체 | [NAT(Network Address Translation) 핵심 기능]({{< relref "/docs/subnotes/05_Networks/nat" >}}) |
| SONET | SDH의 북미 버전 표준(ANSI T1.105) | [디지털 계위 (PDH·SDH·SONET)]({{< relref "/docs/subnotes/05_Networks/digital-hierarchy-pdh-sdh" >}}) |
| Split Horizon | 수신한 인터페이스로 되돌려 보내지 않는 루프방지기법 | [라우팅 프로토콜 분류 및 알고리즘]({{< relref "/docs/subnotes/05_Networks/routing-protocol" >}}) |
| SRT | ARQ 기반 패킷손실 복구하는 저지연 방송 전송 프로토콜 | [멀티미디어 스트리밍 프로토콜]({{< relref "/docs/subnotes/05_Networks/multimedia-streaming-protocols" >}}) |
| STM-1 | SDH 기본 전송단위(155.52Mbps) | [디지털 계위 (PDH·SDH·SONET)]({{< relref "/docs/subnotes/05_Networks/digital-hierarchy-pdh-sdh" >}}) |
| STP | L2 루프를 차단해 브로드캐스트 스톰을 방지하는 프로토콜 | [네트워크 스위치 유형과 L4/L7 스위치]({{< relref "/docs/subnotes/05_Networks/network-switch" >}}) |
| SYN Cookies | 큐자원 선할당 없이 해시로 SYN Flood를 방어하는 기법 | [OSI 7계층 및 TCP Handshake]({{< relref "/docs/subnotes/05_Networks/osi-tcp-handshake" >}}) |
| TDMA | 시간슬롯 분할 채널화 다중접근(GSM/2G) | [다중 접근 프로토콜]({{< relref "/docs/subnotes/05_Networks/multiple-access" >}}) |
| TIME_WAIT | 4-Way 종료 후 지연패킷 대비 2×MSL간 소켓 유지 상태 | [OSI 7계층 및 TCP Handshake]({{< relref "/docs/subnotes/05_Networks/osi-tcp-handshake" >}}) |
| Turbo Code/LDPC | Shannon Limit에 근접한 오류 정정 코드 | [채널용량과 샤논 정리]({{< relref "/docs/subnotes/05_Networks/shannon-channel-capacity" >}}) |
| Two-Rate Three-Color Marker | CIR·PIR 버킷으로 트래픽을 3색(Green/Yellow/Red) 마킹 | [트래픽 폴리싱과 트래픽 쉐이핑]({{< relref "/docs/subnotes/05_Networks/traffic-policing-shaping" >}}) |
| U-Frame | 연결설정/해제(SABM·UA·DISC)용 HDLC 프레임 | [HDLC 데이터링크 프로토콜]({{< relref "/docs/subnotes/05_Networks/hdlc-protocol" >}}) |
| UPF | 제어부와 분리돼 가입자 패킷을 고속 라우팅하는 사용자평면 | [5G/6G 이동통신 아키텍처]({{< relref "/docs/subnotes/05_Networks/cellular-slicing-sba" >}}) |
| URLLC | 초저지연(1ms) 5G 3대 서비스 요건 중 하나 | [5G/6G 이동통신 아키텍처]({{< relref "/docs/subnotes/05_Networks/cellular-slicing-sba" >}}) |
| VANET | 차량간(V2V/V2I) 통신용 Ad-hoc 네트워크 | [Ad-hoc 네트워킹 라우팅 프로토콜]({{< relref "/docs/subnotes/05_Networks/adhoc-manet-routing" >}}) |
| VLAN | 스위치 브로드캐스트 도메인을 논리적으로 분리하는 기술 | [네트워크 스위치 유형과 L4/L7 스위치]({{< relref "/docs/subnotes/05_Networks/network-switch" >}}) |
| VLSM | 서브넷별 필요 크기에 맞춰 가변 마스크를 적용하는 기법 | [서브네팅 및 VLSM/CIDR]({{< relref "/docs/subnotes/05_Networks/subnetting-vlsm" >}}) |
| VNF | 방화벽·LB 등 HW 기능을 VM 소프트웨어로 모듈화한 기능 | [소프트웨어 정의 네트워크 SDN/NFV]({{< relref "/docs/subnotes/05_Networks/sdn-nfv-architecture" >}}) |
| WebRTC | UDP(SRTP)기반 P2P 실시간 브라우저 스트리밍 기술 | [멀티미디어 스트리밍 프로토콜]({{< relref "/docs/subnotes/05_Networks/multimedia-streaming-protocols" >}}) |
| WRED | 클래스별 임계값 기반 선제적 패킷드롭 혼잡회피 기법 | [QoS 스케줄링, 모델, 측정요소]({{< relref "/docs/subnotes/05_Networks/qos-architecture" >}}) |
| WSDL | SOAP 서비스의 인터페이스를 정의하는 명세 언어 | [개방형 API 및 SOAP/REST]({{< relref "/docs/subnotes/05_Networks/open-api-soap-rest" >}}) |
| ZRP | 존 내부는 프로액티브, 존간은 리액티브인 하이브리드 라우팅 | [Ad-hoc 네트워킹 라우팅 프로토콜]({{< relref "/docs/subnotes/05_Networks/adhoc-manet-routing" >}}) |
| ZSM | 인간 개입 없이 AI/ML로 자율 운영하는 ETSI 관리 프레임워크 | [ZSM 및 IBN 기반 자율 네트워크]({{< relref "/docs/subnotes/05_Networks/zsm-ibn-autonomous-network" >}}) |
| 가상회선(VC) | 연결 전 논리경로를 사전설정하는 패킷교환 방식 | [회선교환과 패킷교환]({{< relref "/docs/subnotes/05_Networks/circuit-packet-switching" >}}) |
| 다익스트라 | 링크상태(Link State) 라우팅의 최단경로 계산 알고리즘 | [라우팅 프로토콜 분류 및 알고리즘]({{< relref "/docs/subnotes/05_Networks/routing-protocol" >}}) |
| 데이터그램 | 패킷마다 독립적으로 라우팅되는 방식(순서 미보장) | [회선교환과 패킷교환]({{< relref "/docs/subnotes/05_Networks/circuit-packet-switching" >}}) |
| 디지털트윈 | 물리망과 동기화된 사전 시뮬레이션용 가상 복제본 | [AI-Native 6G 및 촉각 인터넷]({{< relref "/docs/subnotes/05_Networks/ai-native-6g-tactile-internet" >}}) |
| 리키버킷 | 입력을 버퍼에 저장 후 일정속도로만 출력해 평탄화 | [트래픽 폴리싱과 트래픽 쉐이핑]({{< relref "/docs/subnotes/05_Networks/traffic-policing-shaping" >}}) |
| 멀티스트리밍 | 1개 Association 내 독립된 다중 스트림 운용(SCTP) | [TCP/UDP/SCTP 전송계층 프로토콜 비교]({{< relref "/docs/subnotes/05_Networks/transport-tcp-udp-sctp" >}}) |
| 멀티호밍 | 복수 IP 바인딩과 HEARTBEAT로 경로를 이중화(SCTP) | [TCP/UDP/SCTP 전송계층 프로토콜 비교]({{< relref "/docs/subnotes/05_Networks/transport-tcp-udp-sctp" >}}) |
| 벨만포드 | 거리벡터(Distance Vector) 라우팅의 경로계산 알고리즘 | [라우팅 프로토콜 분류 및 알고리즘]({{< relref "/docs/subnotes/05_Networks/routing-protocol" >}}) |
| 비트 스터핑 | 연속된 1이 5개면 0을 삽입해 Flag 패턴 혼동을 방지 | [HDLC 데이터링크 프로토콜]({{< relref "/docs/subnotes/05_Networks/hdlc-protocol" >}}) |
| 샤논-하틀리 공식 | C = B×log₂(1+S/N)로 표현되는 채널용량 산출식 | [채널용량과 샤논 정리]({{< relref "/docs/subnotes/05_Networks/shannon-channel-capacity" >}}) |
| 서비스 프리미티브 | Request-Indication-Response-Confirm 4대 계층간 명령 | [OSI 7계층 및 TCP Handshake]({{< relref "/docs/subnotes/05_Networks/osi-tcp-handshake" >}}) |
| 이중스택 | IPv4와 IPv6를 동시 운용하며 DNS 응답따라 자동선택 | [IPv6 헤더구조와 IPv4 전환 방안]({{< relref "/docs/subnotes/05_Networks/ipv6" >}}) |
| 촉각 인터넷 | 1ms 이하 초저지연·초고신뢰 실시간 상호작용 응용 패러다임 | [AI-Native 6G 및 촉각 인터넷]({{< relref "/docs/subnotes/05_Networks/ai-native-6g-tactile-internet" >}}) |
| 토큰버킷 | CIR 속도로 토큰을 생성해 버스트를 허용하는 트래픽제어 | [트래픽 폴리싱과 트래픽 쉐이핑]({{< relref "/docs/subnotes/05_Networks/traffic-policing-shaping" >}}) |
| 햅틱 코덱 | 촉각(힘·진동·온도) 데이터를 압축하는 기술 | [AI-Native 6G 및 촉각 인터넷]({{< relref "/docs/subnotes/05_Networks/ai-native-6g-tactile-internet" >}}) |
| 해밍코드 | 패리티비트 위치조합으로 1비트 오류를 자동정정하는 코드 | [오류 제어 및 ARQ]({{< relref "/docs/subnotes/05_Networks/arq-error-control" >}}) |
