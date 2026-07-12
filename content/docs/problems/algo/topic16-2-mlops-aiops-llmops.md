---
title: "MLOps, AIOps, LLMOps 비교"
date: 2026-07-12T00:00:00+09:00
tags: ["알고리즘", "핵토200", "딥러닝", "MLOps"]
topic_no1: 16
topic_no2: 2
topic_large: "머신러닝 파이프라인"
topic_small: "AIOps"
exam_ref: "모의_2025.12"
exam_type: "관리"
question_no: 2
---

## 문제

운영 기술(Operations)은 IT 기술의 발전과 함께 융합하고 결합하면서 발전하였다. 다음 운영 기술에 대하여 설명하시오.
가. MLOps
나. AIOps
다. LLMOps

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 머신러닝 파이프라인 |
| 토픽(소) | AIOps |
| 출제 | 모의_2025.12 |
| 유형 | 관리 |
| 번호 | 2 |

## 모범답안

1. 세 개념의 관계 개요

    정 의  • DevOps에서 파생된 운영 자동화 철학이 AI 대상/AI 활용 관점에서
             MLOps, AIOps, LLMOps로 분화된 개념
           - 세 용어는 명칭이 유사하나 적용 대상과 목적이 서로 다름

    ```
    DevOps (SW 개발/배포 자동화)
       ├─ MLOps   : "머신러닝 모델"을 운영 대상으로 자동화 (모델 개발→배포→모니터링)
       ├─ AIOps   : "IT 운영 자체"에 AI를 적용 (로그/메트릭 분석, 장애 예측)
       └─ LLMOps  : "LLM"에 특화된 MLOps 확장 (프롬프트/컨텍스트/평가 관리)
    ```

    - MLOps·LLMOps는 "AI를 운영하는" 기술, AIOps는 "AI로 운영하는" 기술로 방향이 반대.

2. 가/나/다 세부 비교

    1) 가. MLOps(Machine Learning Operations)

    | 항목 | 내용 |
    |------|------|
    | 정의 | 모델 개발-학습-배포-모니터링-재학습 전 과정을 자동화·표준화 |
    | 핵심 활동 | 데이터/모델 버전관리, CI/CD/CT, 모니터링 |
    | 대표 도구 | MLflow, Kubeflow, SageMaker, Vertex AI |

    2) 나. AIOps(AI for IT Operations)

    | 항목 | 내용 |
    |------|------|
    | 정의 | IT 운영 데이터(로그·메트릭·트레이스)를 AI/ML로 분석해 이상탐지·근본원인분석·장애 자동복구 수행 |
    | 핵심 활동 | 이상탐지, 알림 노이즈 제거, 근본원인분석(RCA) |
    | 대표 도구 | Datadog, Splunk ITSI, Dynatrace, Moogsoft |

    3) 다. LLMOps(Large Language Model Operations)

    | 항목 | 내용 |
    |------|------|
    | 정의 | LLM의 파인튜닝, 프롬프트 관리, RAG 파이프라인, 응답 품질·비용 관리를 다루는 MLOps 확장 |
    | 핵심 활동 | 프롬프트 버전관리, RAG 운영, LLM 평가(Eval), 가드레일 |
    | 대표 도구 | LangSmith, Weights & Biases, PromptLayer, Guardrails AI |

    - 생성형 AI 보편화로 기존 MLOps 체계에 LLM 특유의 프롬프트/환각/비용 관리가 추가 요구됨.

3. 3자 비교

    | 구분 | MLOps | AIOps | LLMOps |
    |------|-------|-------|--------|
    | 대상 | ML 모델 전반 | IT 운영 시스템 | LLM 특화 모델 |
    | AI의 역할 | 운영 대상(Object) | 운영 주체(Agent) | 운영 대상의 특수형 |
    | 핵심 지표 | 정확도, 재현율, Drift | MTTR, 알림 정확도 | 응답 품질, 환각률, 토큰 비용 |
    | 재학습 주기 | 데이터 변화에 따라 정기적 | 실시간 지속 학습 | 프롬프트/파인튜닝 갱신 |

    - MLOps가 큰 우산, LLMOps는 그 하위 LLM 특화 영역, AIOps는 별도로 운영 인프라에 AI 적용하는 축.

4. 도입 시 고려사항 및 시사점

    | 이슈 | 대응방안 |
    |------|----------|
    | MLOps/AIOps/LLMOps 조직 간 책임 경계 모호 | 플랫폼 엔지니어링 조직이 공통 관측성 기반 제공, 계층화된 거버넌스 수립 |
    | 전통 MLOps 지표로 LLM 환각·비용 미포착 | RAG 정합성 평가, 유해 콘텐츠 필터링, 토큰 대시보드 등 LLM 전용 가드레일 확장 |
    | AIOps 자동 복구의 오탐(False Positive) 위험 | 초기 Human-in-the-loop 반자동 검증 후 점진적 자동화 확대 |

    - 최근 생성형 AI 확산으로 MLOps 위에 LLMOps가 결합되고, 대규모 운영에는 AIOps 적용 증대 예상.  "끝"
