---
title: "시스템 통합 솔루션의 진화: EAI, ESB, API Gateway 비교"
date: 2026-06-07T17:47:26+09:00
tags: ["IT경영", "핵토200", "EAI", "EAI"]
topic_no1: 6
topic_no2: 1
topic_large: "EAI"
topic_small: "EAI"
exam_ref: "모의_2019.12"
exam_type: "공통"
question_no: 3
---

## 문제

기업 시스템의 거대화, 세분화에 따라 복잡하고 다양해진 서비스간 연동을 위한 시스템 통합은 중요한 극복 이슈였으며, 이를 해결하기 위한 다양한 솔루션이 등장, 개선 되어 활용되었다. 다음에 대하여 각 솔루션 별 장점, 기술요소 및 한계점 중심으로 설명하시오.

- 가. EAI(Enterprise Application Integration)
- 나. ESB(Enterprise Service Bus)
- 다. API Gateway

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | EAI |
| 토픽(소) | EAI |
| 출제 | 모의_2019.12 |
| 유형 | 공통 |
| 번호 | 3 |

## 해설

### 출제 배경 및 의도

기업의 정보시스템이 부문별로 개별 구축되면서 시스템 간 데이터 불일치, 중복 개발, 연동 복잡성(Spaghetti Architecture)이 심각한 문제로 대두되었다. 이를 해결하기 위해 1990년대 후반 EAI가 등장했고, 이후 SOA 확산과 함께 ESB로, 최근에는 MSA와 클라우드 네이티브 환경에 맞는 API Gateway로 시스템 통합 기술이 진화해왔다.

이 문제는 단순 개념 나열이 아니라 시대적 흐름에 따른 통합 아키텍처의 진화 과정을 장점·기술요소·한계점 중심으로 비교하도록 요구한다. 채점위원은 응시자가 각 기술이 등장한 배경과 이전 기술의 한계를 극복한 지점을 정확히 이해하고 있는지, 그리고 현재 어떤 상황에 어떤 기술이 적합한지 판단할 수 있는지를 평가한다.

### 1. 가. EAI(Enterprise Application Integration)

정 의 • EAI란 기업 내 이기종 애플리케이션 간의 데이터와 프로세스를 통합하여 상호 연동시키는 미들웨어 솔루션이다.

```
[EAI 통합 유형]
① Point-to-Point : 시스템 간 1:1 직접 연결 (초기 방식)
② Hub & Spoke     : 중앙 허브를 거쳐 N:N 연결 단순화
③ Message Bus     : 메시지 버스를 통한 비동기 연동
```

| 구분 | 내용 |
|------|------|
| 장점 | 어댑터 기반 이기종 시스템 통합, 중앙집중 관리로 연동 복잡도 감소 |
| 기술요소 | 어댑터(Adapter), 메시지 큐(MQ), 데이터 변환(Transformation) 엔진 |
| 한계점 | 허브 장애 시 전체 통합 마비(SPOF), 확장성 제약, 벤더 종속성(Lock-in) |

### 2. 나. ESB(Enterprise Service Bus)

정 의 • ESB란 SOA(서비스지향아키텍처) 구현을 위해 서비스 간 메시지 라우팅, 변환, 오케스트레이션을 담당하는 분산형 통합 미들웨어이다.

```
[ESB 아키텍처]
Service A ─┐                 ┌─ Service C
Service B ─┤── ESB(버스) ────┤─ Service D
Service E ─┘  (라우팅/변환/   └─ Service F
                오케스트레이션)
```

| 구분 | 내용 |
|------|------|
| 장점 | 분산 아키텍처로 EAI의 SPOF 문제 완화, 표준 프로토콜(SOAP/WSDL) 기반 상호운용성 |
| 기술요소 | 메시지 라우팅, 프로토콜 변환, BPEL 기반 오케스트레이션, ESB 컨테이너 |
| 한계점 | 여전히 중앙집중적 관리 부담, 무거운 미들웨어로 인한 성능 오버헤드, MSA 환경 부적합 |

### 3. 다. API Gateway

정 의 • API Gateway란 마이크로서비스 아키텍처(MSA)에서 다수의 개별 서비스에 대한 단일 진입점(Single Entry Point) 역할을 수행하며, 인증·라우팅·모니터링을 담당하는 경량 통합 계층이다.

```
[API Gateway 아키텍처]
Client → API Gateway → [인증/인가, Rate Limiting, 라우팅]
                 ├─ MSA Service 1
                 ├─ MSA Service 2
                 └─ MSA Service 3
```

| 구분 | 내용 |
|------|------|
| 장점 | 경량화된 구조로 MSA와 궁합, 각 서비스 독립 배포 가능, 확장성 우수 |
| 기술요소 | REST/gRPC 라우팅, OAuth2/JWT 인증, Rate Limiting, Circuit Breaker, 서비스 디스커버리 연동 |
| 한계점 | 게이트웨이 자체의 장애 시 전체 서비스 영향, 복잡한 오케스트레이션(다단계 트랜잭션) 구현에는 한계 |

### 4. 3대 솔루션 종합 비교

| 구분 | EAI | ESB | API Gateway |
|------|-----|-----|-------------|
| 등장 배경 | 이기종 시스템 통합 필요 | SOA 확산, 서비스 재사용 | MSA·클라우드 네이티브 확산 |
| 아키텍처 성격 | 중앙집중형 허브 | 분산형 버스 | 경량 게이트웨이 |
| 통신 방식 | 동기/비동기 메시징 | SOAP/WS-* 표준 | REST/gRPC, JSON |
| 적합 환경 | 레거시 통합(ERP-CRM 등) | SOA 기반 대규모 엔터프라이즈 | MSA, 클라우드 네이티브 |
| 확장성 | 낮음 | 중간 | 높음 |
| 대표 기술 | TIBCO, IBM WMB | Mule ESB, WSO2 | Kong, AWS API Gateway, Istio |

```
[통합 아키텍처 진화 흐름]
Point-to-Point → EAI(Hub&Spoke) → ESB(SOA) → API Gateway(MSA) → Service Mesh(Istio)
```

- EAI, ESB, API Gateway는 상호 대체가 아니라 시스템 환경과 통합 목적에 따라 계층적으로 공존시켜야 하는 통합 아키텍처의 진화 단계이다.  "끝"

### 실무 제언

**레거시 EAI/ESB와 신규 MSA의 공존 전략**
- **챌린지**: 다수 대기업이 기존 ESB 기반 레거시 시스템과 신규 MSA 서비스를 동시에 운영하며 이중 통합 복잡도를 겪는다.
- **제언**: ESB를 레거시 통합 전용으로 유지하되, 신규 서비스는 API Gateway로 노출하는 "Strangler Fig 패턴"을 적용해 점진적으로 레거시를 대체해야 한다.

**API Gateway의 병목화(Bottleneck) 방지**
- **챌린지**: MSA 환경에서 모든 트래픽이 단일 API Gateway를 경유하면서 게이트웨이 자체가 새로운 SPOF가 되는 경우가 많다.
- **제언**: API Gateway를 다중화(Active-Active)하고, 서비스 간 직접 통신에는 Service Mesh(Istio, Linkerd)를 도입하여 게이트웨이 부하를 분산해야 한다.

**통합 거버넌스 체계의 필요성**
- **챌린지**: 통합 기술이 EAI-ESB-API Gateway로 다양화되면서 API 설계 표준, 버전 관리, 문서화가 파편화되는 문제가 발생한다.
- **제언**: API 관리 플랫폼(API Management)을 도입하여 API 카탈로그, 버전 정책, 사용량 모니터링을 통합 거버넌스 체계로 관리해야 한다.
