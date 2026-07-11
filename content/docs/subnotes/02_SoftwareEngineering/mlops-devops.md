---
title: "MLOps와 DevOps 비교"
date: 2026-07-11T11:37:46+09:00
tags: ["소프트웨어공학", "개발방법론", "MLOps", "DevOps", "CT", "드리프트", "서브노트"]
draft: false
---

# MLOps와 DevOps 비교 서브노트

> **두음 머리에 박기 🧠**
> - **CI·CD·CT** (MLOps 3대 자동화 파이프라인: **CI** 지속적 통합, **CD** 지속적 배포, **CT** 지속적 학습 Continuous Training — DevOps 대비 CT가 추가된 것이 핵심 차이)
> - **0·1·2** (Google MLOps 성숙도 3단계: **0**수동, **1**CT 자동화, **2**CI/CD+CT 완전 자동화)
> - **피·모·데** (MLOps 핵심 구성요소: **피**처 스토어 Feature Store, **모**델 레지스트리 Model Registry, **데**이터 버전관리 DVC)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **MLOps(Machine Learning Operations)와 DevOps 비교** |
| **정의** | DevOps는 애플리케이션 코드의 개발·운영을 통합해 빠른 배포를 지향하는 방법론이며, **MLOps**는 여기에 데이터와 모델의 학습·검증·배포·모니터링 전 생명주기를 자동화하는 **CT(Continuous Training)**를 결합한 ML 특화 운영 방법론 |
| **키워드** | CI/CD/CT, 데이터·개념 드리프트, Feature Store, Model Registry, 모델 성능 모니터링, 성숙도 레벨 |
| **개념도** | `[ 데이터 수집/검증 ] → [ Feature Store ] → [ 모델 학습(CT) ] → [ 모델 평가/검증 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ Model Registry ] → [ 모델 배포(CI/CD) ] → [ 모니터링(드리프트 감지) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (재트리거)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 모델 학습(CT) ]로 회귀` |
| **구성요소** | 1. **버전 관리 대상 확대**: DevOps는 코드(Git)만, MLOps는 코드+데이터셋+모델 3종 버전 관리<br>2. **재배포 트리거**: DevOps는 코드 변경, MLOps는 코드 변경+데이터 변경+성능 저하(드리프트)<br>3. **Feature Store**: 학습·서빙 간 피처를 재사용·공유하는 저장소<br>4. **Model Registry**: 학습된 모델의 버전·메타데이터 관리<br>5. **드리프트 탐지**: 데이터 드리프트(입력 분포 변화), 개념 드리프트(입출력 관계 변화) 모니터링 후 CT 자동 재트리거 |
| **비교** | **DevOps**<br>- **대상**: 애플리케이션 코드<br>- **테스트**: 유닛·통합 테스트<br>- **모니터링**: 서버 상태, 에러율<br>- **핵심 파이프라인**: CI/CD<br><br>**MLOps**<br>- **대상**: ML 코드 + 데이터 + 모델<br>- **테스트**: 유닛 테스트 + 데이터 유효성 + 모델 평가<br>- **모니터링**: 모델 성능 드리프트, 데이터 드리프트<br>- **핵심 파이프라인**: CI/CD + **CT**(지속적 학습) |
| **차별화** | **MLOps 성숙도 향상 및 DevOps 조직과의 통합 전략**<br>1. **성숙도 단계적 도입**: Level 0(수동 실험/배포) → Level 1(CT 파이프라인 자동화, 실험-프로덕션 패리티 확보) → Level 2(코드 변경 시 CI/CD/CT 전체 자동 실행)로 조직 역량에 맞춰 로드맵 수립.<br>2. **드리프트 기반 SLI 통합**: SRE의 4대 황금 신호(지연·트래픽·에러·포화)에 데이터/개념 드리프트 지표를 SLI로 추가하여 자동 CT 트리거와 연계.<br>3. **A/B 테스트 기반 모델 배포**: 신규 모델과 기존 모델을 동시 서빙하며 A/B 테스트로 성능을 비교 검증 후 트래픽을 단계적으로 전환하는 카나리 방식 채택. |
