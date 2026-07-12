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
| **정의** | 데이터 수집부터 모델 배포·모니터링까지 전 과정을 표준화된 단계로 자동화한 **머신러닝 파이프라인**을 기반으로, "머신러닝 모델"을 운영 대상으로 자동화하는 **MLOps**, "IT 운영 자체"에 AI를 적용하는 **AIOps**, LLM에 특화된 MLOps 확장인 **LLMOps**로 분화된 운영 기술 |
| **키워드** | 데이터 Drift, Feature Store, CI/CD/CT, 근본원인분석(RCA), 프롬프트 버전관리, 환각률/토큰 비용 |
| **개념도** | `[데이터 수집] → [데이터 전처리] → [피처 엔지니어링] → [모델 학습]`<br>`      ↓                                                    ↓`<br>`[모니터링] ← [배포/서빙] ← [모델 평가/검증] ← [하이퍼파라미터 튜닝]`<br>`      ↓`<br>`[Drift 감지 → 재학습 트리거] (파이프라인 순환)`<br><br>**[ 3대 Ops 분화 구조 ]**<br>`DevOps (SW 개발/배포 자동화)`<br>`   ├─ MLOps   : "머신러닝 모델"을 운영 대상으로 자동화`<br>`   ├─ AIOps   : "IT 운영 자체"에 AI를 적용(로그/메트릭 분석, 장애 예측)`<br>`   └─ LLMOps  : "LLM"에 특화된 MLOps 확장(프롬프트/컨텍스트/평가 관리)` |
| **구성요소** | 1. **파이프라인 7단계**: 수집(Kafka/Airbyte)→전처리(Pandas/Spark)→피처엔지니어링(Feature Store)→학습(TensorFlow/Kubeflow)→평가(MLflow)→배포(Kubernetes/Seldon)→모니터링(Prometheus/Evidently)<br>2. **MLOps**: 모델 개발-학습-배포-모니터링-재학습 자동화, 데이터/모델 버전관리, CI/CD/CT, MLflow/Kubeflow/SageMaker<br>3. **AIOps**: IT 운영 데이터(로그·메트릭·트레이스)를 AI/ML로 분석해 이상탐지·근본원인분석(RCA)·장애 자동복구, Datadog/Splunk ITSI/Dynatrace<br>4. **LLMOps**: LLM 파인튜닝·프롬프트 관리·RAG 파이프라인·응답 품질/비용 관리, LangSmith/W&B/Guardrails AI |
| **비교** | **수작업(Ad-hoc) 파이프라인**<br>- 실행 방식: 노트북/스크립트 수동 실행, 재현성 낮음(환경·순서 의존), 소규모 실험 적합<br><br>**오케스트레이션 기반 파이프라인**<br>- 실행 방식: DAG 기반 자동 실행, 재현성 높음(버전 관리·컨테이너화), 대규모 운영·재학습 자동화 적합(Kubeflow Pipelines, Airflow)<br><br>**MLOps vs AIOps vs LLMOps**<br>- 대상: ML 모델 전반 / IT 운영 시스템 / LLM 특화 모델<br>- AI 역할: 운영 대상(Object) / 운영 주체(Agent) / 운영 대상의 특수형<br>- 핵심 지표: 정확도·재현율·Drift / MTTR·알림 정확도 / 응답 품질·환각률·토큰 비용 |
| **차별화** | **MLOps/AIOps/LLMOps 통합 운영 실무 전략**<br>1. **계층화된 거버넌스 수립**: MLOps/AIOps/LLMOps 조직 간 책임 경계가 모호해지는 문제에 대응해, 플랫폼 엔지니어링 조직이 공통 관측성(Observability) 기반을 제공하고 계층별 거버넌스를 수립. MLOps가 큰 우산이고 LLMOps는 그 하위 LLM 특화 영역, AIOps는 별도로 운영 인프라에 AI를 적용하는 축으로 역할 분담.<br>2. **LLM 전용 가드레일 확장**: 전통 MLOps 지표(정확도·Drift)로는 LLM의 환각·비용을 포착할 수 없으므로, RAG 정합성 평가·유해 콘텐츠 필터링·토큰 비용 대시보드 등 LLM 전용 가드레일 확장 운영.<br>3. **Drift 감지 기반 폐루프 운영**: DVC 등 데이터 버저닝, 피처 스토어 기반 증분 처리, Drift 감지 시 재학습을 자동 트리거하는 폐루프(Closed-loop) 운영 체계 구축. AIOps의 자동 복구는 초기 Human-in-the-loop 반자동 검증 후 점진적 자동화로 오탐(False Positive) 위험 관리. |
