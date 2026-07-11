---
title: "서버리스 컴퓨팅 (Serverless / FaaS)"
date: 2026-07-11T14:57:27+09:00
tags: ["컴퓨터시스템", "가상화", "서버리스", "FaaS", "클라우드", "서브노트"]
draft: false
---

# 서버리스 컴퓨팅 (Serverless / FaaS) 서브노트

> **두음 머리에 박기 🧠**
> - **I·P·C·F** (클라우드 서비스 모델 4단계: **I**aaS, **P**aaS, **C**aaS, **F**aaS(서버리스))
> - **인·이·자·사** (서버리스 4대 핵심 특성: **인**프라 추상화, **이**벤트 기반 실행, **자**동 스케일링, **사**용량 기반 과금)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **서버리스 컴퓨팅 (Serverless Computing) / FaaS (Function as a Service)** |
| **정의** | 개발자가 서버 인프라 관리 없이 함수(Function) 단위의 코드를 실행하는 클라우드 실행 모델로, 클라우드 제공자가 인프라 프로비저닝·스케일링·가용성을 자동 관리하며 실제 실행된 컴퓨팅 자원에 대해서만 과금(Pay-per-use)한다 |
| **키워드** | FaaS, IaaS/PaaS/CaaS 비교, 콜드 스타트, 이벤트 트리거, Pay-per-use, AWS Lambda |
| **개념도** | `[ 이벤트 트리거(HTTP·메시지·스케줄) ] ➔ [ FaaS 플랫폼: 함수 컨테이너 자동 생성(0→N) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 함수 실행(실행시간·메모리 과금) ] ➔ [ 외부 저장소(상태 비저장이므로 DB/S3 등 필요) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲ (첫 호출 시 콜드 스타트 지연 수백ms~수초)` |
| **구성요소** | 1. **인프라 추상화**: 서버 프로비저닝·패치·관리 불필요<br>2. **이벤트 기반 실행**: HTTP·메시지·스케줄 트리거 발생 시 자동 실행<br>3. **자동 스케일링**: 요청 수에 따라 0→N개 인스턴스 자동 확장<br>4. **사용량 기반 과금**: 실행 시간·메모리 기준 과금, 유휴 비용 없음<br>5. **서비스 모델 계층**: IaaS(OS·미들웨어 직접관리, EC2) → PaaS(앱코드만 관리, Elastic Beanstalk) → CaaS(컨테이너 관리, EKS/GKE) → **FaaS(함수코드만 관리, Lambda/Cloud Functions)** |
| **비교** | **컨테이너 기반 실행 (CaaS/쿠버네티스)**<br>- **관리 단위**: 컨테이너 이미지(장시간 상주 프로세스 가능)<br>- **과금**: 컨테이너 가동 시간 기준 (유휴 상태도 과금)<br>- **상태 관리**: 볼륨 마운트로 로컬 상태 유지 가능<br><br>**서버리스 (FaaS)**<br>- **관리 단위**: 함수 단위, 요청마다 컨테이너 신규/재사용<br>- **과금**: 실제 실행 시간·메모리만 과금 (유휴 비용 없음)<br>- **상태 관리**: 상태 비저장(Stateless) 원칙, 외부 저장소 필수 |
| **차별화** | **콜드 스타트 완화 및 서버리스 아키텍처 설계 전략**<br>1. **프로비저닝된 동시성(Provisioned Concurrency) 활용**: 트래픽 예측이 가능한 구간에는 함수 인스턴스를 미리 워밍업 상태로 유지해 콜드 스타트 지연(수백ms~수초)을 회피하고, 예측 불가 구간에서만 온디맨드 콜드 스타트를 감수하는 하이브리드 운용.<br>2. **이벤트 기반 파이프라인 설계**: S3 업로드 이벤트 → Lambda 트리거 → 썸네일 생성·AI 분석·메타데이터 저장과 같이 서비스 간 결합을 이벤트로 느슨하게 구성하여 트래픽 변동에 자동 대응하고 장애 전파를 최소화.<br>3. **벤더 종속 회피를 위한 추상화 계층 도입**: 클라우드별 서버리스 플랫폼(Lambda/Cloud Functions/Azure Functions) 차이를 흡수하도록 Serverless Framework·Knative 등 이식 가능한 프레임워크를 도입해 멀티클라우드 전환 비용을 절감. |
