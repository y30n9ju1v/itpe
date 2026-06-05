---
title: "클라우드 컴퓨팅 서비스 유형 (IaaS·PaaS·SaaS·FaaS)"
date: 2026-05-09T07:56:10+09:00
tags: ["pecs", "최신기술", "클라우드", "IaaS", "PaaS", "SaaS", "FaaS", "서버리스"]
draft: false
exam_pecs: ["137회"]
---

## 개요

클라우드 컴퓨팅 서비스 유형은 제공되는 추상화 수준에 따라 IaaS·PaaS·SaaS·FaaS로 분류된다. 사용자가 관리해야 하는 스택 범위가 줄어들수록 민첩성은 높아지고 제어권은 낮아진다.

## 핵심 내용

### 서비스 유형별 책임 범위 (공유 책임 모델)

```
               사용자 관리 ↓        클라우드 관리 ↑
On-Premise: HW+OS+미들웨어+앱 전부
IaaS:       OS+미들웨어+앱        HW+가상화
PaaS:       앱+데이터             OS+미들웨어+HW
SaaS:       데이터·설정만         나머지 전부
FaaS:       함수 코드만           런타임+인프라 전부
```

### 각 유형 상세

**IaaS (Infrastructure as a Service)**
- 가상 서버·스토리지·네트워크를 서비스로 제공
- 사용자가 OS·미들웨어 직접 설치·관리
- 예: AWS EC2, Azure VM, GCP Compute Engine
- 적합: 레거시 앱 마이그레이션, 고유 OS 설정 필요

**PaaS (Platform as a Service)**
- 개발·배포 플랫폼 제공, 앱 코드만 작성
- OS·런타임·미들웨어는 클라우드 관리
- 예: AWS Elastic Beanstalk, Google App Engine, Heroku
- 적합: 웹앱 개발, 인프라 관리 없이 빠른 배포

**SaaS (Software as a Service)**
- 완성된 앱을 인터넷으로 제공
- 사용자는 데이터·설정만 관리
- 예: Gmail, Salesforce, Microsoft 365, Slack
- 적합: 표준화된 업무 도구, 엔드유저 서비스

**FaaS (Functions as a Service) / 서버리스**
- 개별 함수(Function) 단위로 실행, 이벤트 트리거
- 서버 프로비저닝·관리 전혀 불필요
- 예: AWS Lambda, Azure Functions, Google Cloud Functions
- 과금: 함수 실행 시간·횟수 기준 (유휴 시 비용 없음)
- 적합: 이벤트 처리, 마이크로서비스 API, 배치 작업

### 비교 표

| 구분 | IaaS | PaaS | SaaS | FaaS |
|------|------|------|------|------|
| 제어 범위 | 높음 | 중간 | 낮음 | 최저 |
| 민첩성 | 보통 | 높음 | 최고 | 최고 |
| 스케일링 | 수동/자동 | 자동 | 자동 | 완전 자동 |
| 비용 모델 | 시간당 | 리소스 사용량 | 구독 | 실행당 |

## 출제 포인트

- 4가지 유형의 관리 책임 범위 차이
- FaaS(서버리스)의 이벤트 기반·종량제 과금 특성
- IaaS→PaaS→SaaS→FaaS 순으로 추상화 증가

## 연관 개념

- [디지털서비스 전문계약제도]({{< relref "/docs/notes/08_EmergingTech/03_Regulations_Policies/digital-service-contract" >}}) — SaaS·PaaS의 공공 조달 방식
- [AIaaS]({{< relref "/docs/notes/08_EmergingTech/01_AI_IoT_Cloud/ai-as-a-service" >}}) — SaaS 계층의 AI 특화 서비스
- [클라우드 네이티브 보안]({{< relref "/docs/notes/06_InfoSecurity/03_InfoProtection/cloud-native-security" >}}) — PaaS/FaaS 보안

## 참고 기출

- 137회 3교시 1번 (PECS)
