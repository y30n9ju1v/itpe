---
title: "MLOps와 DevOps 비교"
date: 2026-05-09T07:34:17+09:00
tags: ["pecs", "소프트웨어공학", "개발방법론", "MLOps", "DevOps", "CI/CD", "머신러닝"]
draft: false
exam: "138회"
---

## 개요

DevOps는 소프트웨어 개발과 운영을 통합하여 빠른 배포를 목표로 하는 방법론이다. MLOps(Machine Learning Operations)는 DevOps 원칙을 머신러닝 시스템에 적용한 것으로, 모델 학습·검증·배포·모니터링의 전체 생명주기를 자동화하는 방법론이다.

## 핵심 내용

### MLOps vs DevOps 비교

| 구분 | DevOps | MLOps |
|------|--------|-------|
| **대상** | 애플리케이션 코드 | ML 코드 + 데이터 + 모델 |
| **버전 관리** | 코드 버전 (Git) | 코드 + 데이터셋 + 모델 버전 |
| **배포 산출물** | 실행 파일/컨테이너 | 학습된 모델 |
| **테스트** | 유닛·통합 테스트 | 유닛 테스트 + 데이터 유효성 + 모델 평가 |
| **모니터링** | 서버 상태, 에러율 | 모델 성능 드리프트, 데이터 드리프트 |
| **재배포 트리거** | 코드 변경 | 코드 변경 + 데이터 변경 + 성능 저하 |
| **핵심 파이프라인** | CI/CD | CT(Continuous Training) + CI/CD |

### MLOps 핵심 파이프라인

```
데이터 수집/검증
      ↓
특성 엔지니어링 (Feature Store)
      ↓
모델 학습 (CT: Continuous Training)
      ↓
모델 평가/검증
      ↓
모델 레지스트리 등록
      ↓
모델 배포 (CI/CD)
      ↓
모니터링 (드리프트 감지 → CT 재트리거)
```

### MLOps 성숙도 단계 (Google 기준)

| 레벨 | 설명 |
|------|------|
| **Level 0** | 수동 프로세스: 실험·배포 모두 수동 |
| **Level 1** | ML 파이프라인 자동화: CT 자동화, 실험-프로덕션 패리티 |
| **Level 2** | CI/CD + CT 완전 자동화: 코드 변경 시 파이프라인 전체 자동 실행 |

### MLOps 주요 구성요소

- **Feature Store**: 피처 재사용·공유 저장소
- **Model Registry**: 학습된 모델 버전 관리
- **데이터 버전 관리 (DVC)**: 데이터셋 변경 추적
- **모델 서빙**: REST API/gRPC로 추론 서비스 제공
- **A/B 테스트**: 신/구 모델 비교 배포
- **드리프트 탐지**: 데이터/모델 성능 변화 모니터링

## 출제 포인트

- MLOps와 DevOps의 가장 큰 차이: CT(Continuous Training) 추가 여부
- 드리프트(데이터 드리프트, 개념 드리프트) 개념 설명
- MLOps 3가지 성숙도 레벨 서술
- Feature Store와 Model Registry 역할 구분

## 연관 개념

- [DevOps 장단점]({{< relref "/docs/02_SoftwareEngineering/01_Dev_Methodology/devops-pros-cons" >}}) — DevOps 원칙
- [AI RMF]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/ai-rmf" >}}) — MLOps 위험 관리 연계
- [RAG]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/rag-retrieval-augmented-generation" >}}) — LLM 기반 MLOps 활용 사례

## 참고 기출

- 138회 1교시 3번 (PECS)
