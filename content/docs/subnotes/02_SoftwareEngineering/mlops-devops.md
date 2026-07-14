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

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **MLOps(Machine Learning Operations)와 DevOps 비교** |
| **정의** | DevOps: 앱 코드 개발·운영 통합 → 빠른 배포 지향 방법론<br>**MLOps**: 여기에 데이터·모델 학습/검증/배포/모니터링 전주기 자동화 **CT** 결합한 ML 특화 운영 방법론 |
| **키워드** | CI/CD/CT, 데이터·개념 드리프트, Feature Store, Model Registry, 모델 성능 모니터링, 성숙도 레벨 |
| **개념도** | `[ 데이터 수집/검증 ] → [ Feature Store ] → [ 모델 학습(CT) ] → [ 모델 평가/검증 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ Model Registry ] → [ 모델 배포(CI/CD) ] → [ 모니터링(드리프트 감지) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (재트리거)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 모델 학습(CT) ]로 회귀` |
| **구성요소** | 1. **버전관리 확대**: DevOps=코드(Git)만 ↔ MLOps=코드+데이터셋+모델 3종<br>2. **재배포 트리거**: DevOps=코드변경 ↔ MLOps=코드+데이터변경+드리프트(성능저하)<br>3. **Feature Store**: 학습·서빙 간 피처 재사용·공유 저장소<br>4. **Model Registry**: 모델 버전·메타데이터 관리<br>5. **드리프트 탐지**: 데이터드리프트(입력분포변화)·개념드리프트(입출력관계변화) → CT 자동 재트리거 |
| **비교** | **DevOps**<br>- **대상**: 애플리케이션 코드<br>- **테스트**: 유닛·통합 테스트<br>- **모니터링**: 서버 상태, 에러율<br>- **핵심 파이프라인**: CI/CD<br><br>**MLOps**<br>- **대상**: ML 코드 + 데이터 + 모델<br>- **테스트**: 유닛 테스트 + 데이터 유효성 + 모델 평가<br>- **모니터링**: 모델 성능 드리프트, 데이터 드리프트<br>- **핵심 파이프라인**: CI/CD + **CT**(지속적 학습) |
| **차별화** | **MLOps 성숙도 향상 및 DevOps 조직 통합 전략**<br>1. **성숙도 단계적 도입**: Lv0(수동실험/배포) → Lv1(CT파이프라인 자동화, 실험-프로덕션 패리티) → Lv2(코드변경 시 CI/CD/CT 전체자동) 로드맵<br>2. **드리프트 기반 SLI 통합**: SRE 4대 황금신호(지연·트래픽·에러·포화)+데이터/개념 드리프트 지표 → 자동 CT 트리거 연계<br>3. **A/B 테스트 모델 배포**: 신규·기존 모델 동시서빙 → A/B 성능비교 → 트래픽 단계적 전환(카나리) |
