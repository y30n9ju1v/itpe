---
title: "머신러닝 파이프라인 및 MLOps·AIOps·LLMOps"
date: 2026-07-12T18:15:39+09:00
tags: ["최신기술", "AI", "MLOps", "AIOps", "LLMOps", "머신러닝파이프라인", "서브노트"]
draft: false
---

# 머신러닝 파이프라인 및 MLOps·AIOps·LLMOps 서브노트

> **두음 머리에 박기 🧠**
> - **수·전·피·학·평·배·모** (머신러닝 파이프라인 7단계: **수**집→**전**처리→**피**처엔지니어링→**학**습→**평**가→**배**포→**모**니터링)
> - **M·A·L** (3대 Ops 분화: **M**LOps(ML모델을 운영대상으로), **A**IOps(IT운영에 AI를 적용), **L**LMOps(LLM특화 MLOps 확장)) |

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **머신러닝 파이프라인(ML Pipeline) 및 MLOps, AIOps, LLMOps** |
| **정의** | 수집→배포→모니터링 전과정 표준화 자동화 **ML 파이프라인** 기반<br>→ ML모델 운영대상 자동화 **MLOps** / IT운영 자체에 AI적용 **AIOps** / LLM특화 MLOps확장 **LLMOps**로 분화 |
| **키워드** | 데이터 Drift, Feature Store, CI/CD/CT, 근본원인분석(RCA), 프롬프트 버전관리, 환각률/토큰 비용 |
| **개념도** | `[데이터 수집] → [데이터 전처리] → [피처 엔지니어링] → [모델 학습]`<br>`      ↓                                                    ↓`<br>`[모니터링] ← [배포/서빙] ← [모델 평가/검증] ← [하이퍼파라미터 튜닝]`<br>`      ↓`<br>`[Drift 감지 → 재학습 트리거] (파이프라인 순환)`<br><br>**[ 3대 Ops 분화 구조 ]**<br>`DevOps (SW 개발/배포 자동화)`<br>`   ├─ MLOps   : "머신러닝 모델"을 운영 대상으로 자동화`<br>`   ├─ AIOps   : "IT 운영 자체"에 AI를 적용(로그/메트릭 분석, 장애 예측)`<br>`   └─ LLMOps  : "LLM"에 특화된 MLOps 확장(프롬프트/컨텍스트/평가 관리)` |
| **구성요소** | 1. **파이프라인 7단계**: 수집(Kafka/Airbyte)→전처리(Pandas/Spark)→피처엔지니어링(Feature Store)→학습(TensorFlow/Kubeflow)→평가(MLflow)→배포(Kubernetes/Seldon)→모니터링(Prometheus/Evidently)<br>2. **MLOps**: 모델 개발-학습-배포-모니터링-재학습 자동화, 데이터/모델 버전관리, CI/CD/CT, MLflow/Kubeflow/SageMaker<br>3. **AIOps**: IT 운영 데이터(로그·메트릭·트레이스)를 AI/ML로 분석해 이상탐지·근본원인분석(RCA)·장애 자동복구, Datadog/Splunk ITSI/Dynatrace<br>4. **LLMOps**: LLM 파인튜닝·프롬프트 관리·RAG 파이프라인·응답 품질/비용 관리, LangSmith/W&B/Guardrails AI |
| **비교** | **수작업(Ad-hoc) 파이프라인**<br>- 실행 방식: 노트북/스크립트 수동 실행, 재현성 낮음(환경·순서 의존), 소규모 실험 적합<br><br>**오케스트레이션 기반 파이프라인**<br>- 실행 방식: DAG 기반 자동 실행, 재현성 높음(버전 관리·컨테이너화), 대규모 운영·재학습 자동화 적합(Kubeflow Pipelines, Airflow)<br><br>**MLOps vs AIOps vs LLMOps**<br>- 대상: ML 모델 전반 / IT 운영 시스템 / LLM 특화 모델<br>- AI 역할: 운영 대상(Object) / 운영 주체(Agent) / 운영 대상의 특수형<br>- 핵심 지표: 정확도·재현율·Drift / MTTR·알림 정확도 / 응답 품질·환각률·토큰 비용 |
| **차별화** | **MLOps/AIOps/LLMOps 통합 운영 실무 전략**<br>1. **계층화 거버넌스**: MLOps=큰 우산, LLMOps=하위 LLM특화, AIOps=별도 운영인프라 AI적용 축 → 플랫폼팀이 공통 Observability 제공 + 계층별 책임경계 명확화<br>2. **LLM 전용 가드레일 확장**: 전통지표(정확도·Drift)로 환각·비용 포착불가 → RAG 정합성평가·유해콘텐츠필터·토큰비용 대시보드 추가<br>3. **Drift 감지 폐루프 운영**: DVC 데이터버저닝 + 피처스토어 증분처리 + Drift감지 시 재학습 자동트리거, AIOps 자동복구는 초기 Human-in-loop 반자동검증 → 점진 자동화로 오탐 관리 |
