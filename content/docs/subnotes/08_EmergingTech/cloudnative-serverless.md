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

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **클라우드 네이티브 (Cloud Native) 기술 요건 및 서버리스 (Serverless) 컴퓨팅** |
| **정의** | 클라우드 탄력성·확장성 극대화 **클라우드 네이티브 아키텍처(컨·마·데·씨)** + 서버관리 없이 코드배포·호출이벤트 과금만 수행 **서버리스 컴퓨팅** |
| **키워드** | Cloud Native (MSA / DevOps), FaaS vs BaaS, Cold Start, Provisioned Concurrency, Event-driven |
| **개념도** | **[ 서버리스 FaaS (이벤트 구동) 라이프사이클 및 콜드스타트 병목 ]**<br>`[ 이벤트 발생 (API 호출 / S3 업로드) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▼ (첫 호출 시)` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`(웜 스타트 Warm Start : 초고속 응답)`<br>`[ 컨테이너 프로비저닝 ] ➔ [ 런타임 로딩 ] ➔ [ 코드 실행 ] ──➔ [ 다음 요청 대기 (Warm 상태 유지) ]`<br>`◀──────  콜드 스타트 (Cold Start) 지연 구간  ──────▶`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (유휴 시간 지속 시)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 컨테이너 자원 회수 (Scale to Zero) ]` |
| **구성요소** | 1. **클라우드 네이티브 4대요소**: 컨테이너화(표준격리), MSA(느슨결합), DevOps(협업·민첩), CI/CD(자동배포)<br>2. **FaaS**: 비즈니스기능 코드작성·업로드 → 이벤트별 독립실행 (AWS Lambda)<br>3. **BaaS**: DB·사용자인증(Cognito)·스토리지 등 클라우드API로 아웃소싱<br>4. **콜드스타트**: 비활성 함수 호출 시 컨테이너가동+의존성로드 초기지연<br>5. **클라우드 서비스 사다리**: IaaS(OS·미들웨어 직접관리, EC2) → PaaS(앱코드만) → CaaS(컨테이너, EKS/GKE) → FaaS(함수코드만, Lambda) 순 관리범위↓·추상화↑ |
| **비교** | **서버리스 FaaS**<br>- 리소스제어: 인프라관리 불요, 클라우드가 스케일링·가용성 자동전담<br>- 과금방식: 실행시간(1ms단위)+호출횟수 미세과금, 미사용 시 0원<br>- 단점/적합성: 콜드스타트 지연, 최대실행시간 제한 (15분내 소형·단발연산)<br><br>**전통 컨테이너/VM**<br>- 리소스제어: CPU·메모리·오토스케일링 엔지니어 직접설정<br>- 과금방식: 사용여부 무관 프로비저닝 가동시간(시간당) 고정과금<br>- 단점/적합성: 상시웜 대기로 지연無, 지속웹서비스·대용량연산 적합 |
| **차별화** | **콜드스타트 제거·DB커넥션 병목 해결 방안**<br>1. **Provisioned Concurrency 튜닝**: 응답지연 금지 MSA 함수 → 최소 컨테이너 항상 Warm 선점대기<br>2. **경량 런타임·의존성 최적화**: JVM 대신 Go/Node.js로 콜드스타트 구간 단축, 외부라이브러리(SDK) 크기 최소화<br>3. **RDS Proxy 도입**: FaaS 무한 스케일아웃 → RDBMS Connection Limit 고갈 방지 → 커넥션 중계풀링<br>4. **Vendor Lock-in 완화**: CSP별 API 차이 → Serverless Framework/OpenFaaS 추상화 → 멀티클라우드 이식성 확보 |
