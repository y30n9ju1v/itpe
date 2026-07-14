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
| **정의** | 서버 인프라 관리 없이 함수(Function) 단위 코드 실행하는 클라우드 모델 → 제공자가 프로비저닝·스케일링·가용성 자동관리, 실행 자원만 과금(Pay-per-use) |
| **키워드** | FaaS, IaaS/PaaS/CaaS 비교, 콜드 스타트, 이벤트 트리거, Pay-per-use, AWS Lambda |
| **개념도** | `[ 이벤트 트리거(HTTP·메시지·스케줄) ] ➔ [ FaaS 플랫폼: 함수 컨테이너 자동 생성(0→N) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 함수 실행(실행시간·메모리 과금) ] ➔ [ 외부 저장소(상태 비저장이므로 DB/S3 등 필요) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲ (첫 호출 시 콜드 스타트 지연 수백ms~수초)` |
| **구성요소** | 1. **인프라 추상화**: 서버 프로비저닝·패치·관리 불필요<br>2. **이벤트 기반 실행**: HTTP·메시지·스케줄 트리거 → 자동 실행<br>3. **자동 스케일링**: 요청 수 따라 0→N개 인스턴스 자동확장<br>4. **사용량 기반 과금**: 실행시간·메모리 기준, 유휴비용 없음<br>5. **서비스 모델 계층**: IaaS(OS·미들웨어 직접관리, EC2) → PaaS(앱코드만, Elastic Beanstalk) → CaaS(컨테이너, EKS/GKE) → **FaaS(함수코드만, Lambda)** |
| **비교** | **컨테이너 기반(CaaS/쿠버네티스)**<br>- 관리단위: 컨테이너 이미지(장시간 상주 가능)<br>- 과금: 가동시간 기준(유휴도 과금)<br>- 상태관리: 볼륨마운트로 로컬상태 유지 가능<br><br>**서버리스(FaaS)**<br>- 관리단위: 함수 단위, 요청마다 컨테이너 신규/재사용<br>- 과금: 실행시간·메모리만(유휴비용 없음)<br>- 상태관리: Stateless 원칙, 외부저장소 필수 |
| **차별화** | **콜드스타트 완화 및 아키텍처 설계 전략**<br>1. **Provisioned Concurrency 활용**: 트래픽 예측구간 워밍업 유지 → 콜드스타트(수백ms~수초) 회피, 예측불가 구간만 온디맨드 하이브리드<br>2. **이벤트 기반 파이프라인**: S3업로드→Lambda→썸네일생성·AI분석·메타데이터저장 등 느슨결합 → 트래픽변동 자동대응, 장애전파 최소화<br>3. **벤더종속 회피 추상화**: Lambda/Cloud Functions/Azure Functions 차이 → Serverless Framework·Knative로 흡수, 멀티클라우드 전환비용 절감 |
