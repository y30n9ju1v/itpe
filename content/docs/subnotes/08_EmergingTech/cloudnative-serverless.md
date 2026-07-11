---
title: "클라우드 네이티브 및 서버리스"
date: 2026-07-11T11:24:18+09:00
tags: ["최신기술", "클라우드", "클라우드네이티브", "서버리스", "FaaS", "IaaS", "PaaS", "CaaS", "콜드스타트", "MSA", "서브노트"]
draft: false
---

# 클라우드 네이티브 및 서버리스 서브노트

> **두음 머리에 박기 🧠**
> - **컨·마·데·씨** (클라우드 네이티브 4대 핵심 구성 필라: **컨**테이너 가상화, **마**이크로서비스 MSA, **데**브옵스 DevOps, **C**I/CD 지속적 통합/배포)
> - **인·이·콜·스** (서버리스 컴퓨팅 4대 핵심 동작 특성: **인**프라 관리 배제, **이**벤트 구동 Event-driven, 초기 지연 **콜**드스타트, 실시간 동적 **스**케일링)
> - **프·콘** (서버리스 콜드 스타트 완화 옵션: 사전 기동 상태 유지 **P**rovisioned **C**oncurrency)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **클라우드 네이티브 (Cloud Native) 기술 요건 및 서버리스 (Serverless) 컴퓨팅** |
| **정의** | 클라우드의 탄력성과 확장성을 극대화하는 **클라우드 네이티브 아키텍처(컨·마·데·씨)**와, 서버 관리 없이 코드 배포와 호출 이벤트 과금만 수행하는 **서버리스 컴퓨팅** |
| **키워드** | Cloud Native (MSA / DevOps), FaaS vs BaaS, Cold Start, Provisioned Concurrency, Event-driven |
| **개념도** | **[ 서버리스 FaaS (이벤트 구동) 라이프사이클 및 콜드스타트 병목 ]**<br>`[ 이벤트 발생 (API 호출 / S3 업로드) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼ (첫 호출 시)` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`(웜 스타트 Warm Start : 초고속 응답)`<br>`[ 컨테이너 프로비저닝 ] ➔ [ 런타임 로딩 ] ➔ [ 코드 실행 ] ──➔ [ 다음 요청 대기 (Warm 상태 유지) ]`<br>`◀──────  콜드 스타트 (Cold Start) 지연 구간  ──────▶`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (유휴 시간 지속 시)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 컨테이너 자원 회수 (Scale to Zero) ]` |
| **구성요소** | 1. **클라우드 네이티브 4대 요소**: 컨테이너화(표준 격리), MSA(느슨한 결합), DevOps(협업 및 민첩), CI/CD(자동 배포)<br>2. **FaaS (Function as a Service)**: 특정 비즈니스 기능을 코드로 작성해 업로드하면 이벤트별 독립 실행 (AWS Lambda)<br>3. **BaaS (Backend as a Service)**: 데이터베이스, 사용자 인증(Cognito), 스토리지 등을 클라우드 API로 아웃소싱 활용<br>4. **콜드 스타트 (Cold Start)**: 함수가 비활성 상태에 있다가 호출될 때 컨테이너를 가동하고 코드 의존성을 로드하는 초기 지연<br>5. **클라우드 서비스 모델 사다리**: IaaS(OS·미들웨어까지 직접 관리, EC2) → PaaS(앱 코드만 관리) → CaaS(컨테이너 관리, EKS/GKE) → FaaS(함수 코드만 관리, Lambda) 순으로 관리 범위가 축소되고 추상화 수준이 높아짐 |
| **비교** | **서버리스 FaaS (Function as a Service)**<br>- **리소스 제어**: 인프라 관리 불필요. 클라우드 제공업체가 스케일링 및 가용성 자동 전담<br>- **과금 방식**: 함수 실행 시간(1ms 단위) 및 호출 횟수 기준 미세 과금, 미사용 시 비용 0원<br>- **단점/적합성**: 콜드 스타트 지연 발생, 최대 실행 시간 제한 (15분 이내 소형/단발성 연산 적합)<br><br>**전통적 가상 컨테이너 (Containers-aaS / VM)**<br>- **리소스 제어**: CPU, 메모리 가동 스펙 및 오토스케일링 룰을 엔지니어가 직접 설정 관리<br>- **과금 방식**: 사용 여부와 상관없이 프로비저닝된 가상 머신 가동 시간(시간당) 기준 고정 과금<br>- **단점/적합성**: 상시 웜 대기로 지연 무(No Cold Start), 지속적 웹 서비스 및 장기 대용량 연산 적합 |
| **차별화** | **서버리스 성능 극대화를 위한 콜드 스타트 제거 및 DB 커넥션 병목 해결 방안**<br>1. **Provisioned Concurrency (예약된 동시성) 튜닝**: API 게이트웨이와 연계되어 초기 응답 지연이 절대 금지되는 마이크로서비스용 함수에 대해서는, 최소한의 가상 인프라 컨테이너를 항상 웜(Warm) 상태로 선점 대기시키는 동시성 예약 가동.<br>2. **경량 런타임 및 의존성 최적화**: 콜드 스타트 구간을 수축하기 위해, JVM 기반(Java/Spring) 대신 바이너리가 가볍고 초기 기동이 빠른 Go 언어 또는 Node.js를 런타임으로 선정하고, 임포트되는 외부 라이브러리(SDK 등) 크기를 패키징 단계에서 최소화.<br>3. **서버리스 전용 DB 커넥션 풀 대행 (RDS Proxy) 도입**: FaaS 특성상 요청마다 함수가 무한 스케일 아웃되어 기존 관계형 DB(RDBMS)의 Connection Limit을 초과 고갈시키는 문제를 방어하도록, 중간에 커넥션을 중계 풀링해주는 **RDS Proxy / Serverless DB** 연동 설계 적용.<br>4. **벤더 종속(Vendor Lock-in) 리스크 완화**: 클라우드사별 서버리스 플랫폼 API 차이로 인한 이식성 저하를 줄이기 위해 서버리스 프레임워크(Serverless Framework, OpenFaaS 등) 추상화 계층을 도입해 멀티 클라우드 이식성 확보. |
