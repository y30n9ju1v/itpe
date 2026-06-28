---
title: "LDW (Logical Data Warehouse)"
date: 2026-06-28T00:00:00+09:00
tags: ["통계", "데이터분석", "핵토200", "LDW", "데이터웨어하우스", "하둡", "빅데이터", "데이터가상화"]
topic_no1: 12
topic_no2: 1
topic_large: "LDW (Logical Data Warehouse)"
topic_small: "LDW 정의·구성요소·아키텍처·활용"
exam_ref: "121회"
exam_type: "관리"
question_no: 1
---

## 문제

기존의 데이터웨어하우스와 빅데이터의 핵심 기술인 하둡을 통합해 추상화한 정보분석 아키텍처서로 로지컬 데이터웨어하우스(LDW: Logical Data Warehouse)에 대하여 검토하고 있다. 다음에 대하여 설명하시오.

가. LDW의 정의 및 특징  
나. LDW의 구성요소  
다. LDW의 아키텍처  
라. LDW의 활용방안

## 출제 정보

| 항목 | 내용 |
|------|------|
| 출제영역 | LDW (Logical Data Warehouse) |
| 난이도 | ★★★★☆ |

## 해설

### 출제 배경 및 의도

정형 데이터 중심의 기존 EDW 한계를 극복하고, Hadoop 기반 비정형·대용량 데이터를 통합 관리하려는 수요가 급증함에 따라 LDW 아키텍처의 정의·구성·운영 방안 이해 여부를 확인하기 위해 출제

### 1. 빅데이터 시대의 효율적 정보 처리 아키텍처, LDW의 정의 및 특징

정 의  • 정형, 비정형 데이터의 저장 및 병렬 처리를 위해 기존 EDW와 Hadoop 환경을 통합하여 구성한 데이터 관리 아키텍처
       - 데이터의 재배치나 변환 없이 조회 가능하도록 지원하는 기존 DW에 빅데이터를 포함하는 확장된 개념의 아키텍처

```
[기존 EDW] ──┐
             ├──► [LDW: 논리적 통합 계층] ──► 분석/리포팅
[Hadoop]  ──┘
```

| 특징 | 설명 |
|------|------|
| 비용 절감 | 오픈소스 기반 Hadoop 이용 관리 비용 절감, 하드웨어/소프트웨어 증설 비용 절감 |
| 처리 속도 증가 | 데이터 병렬 처리 환경 구축에 따른 처리 속도 증가 |
| 분석의 적시성 | 대용량 데이터 분산 병렬 처리를 통한 작업 시간 단축, 분석에 필요한 데이터 즉시 제공 |
| Scale out 가능 | 하둡 기반 빅데이터 시스템들의 Scale out 용이 |
| 데이터 효용성 증대 | DW에서 관리되는 고품질 정형 데이터와 비정형 데이터 통합, 통합 데이터 분석을 통한 부가 가치 창출 |

### 2. LDW의 구성요소

| 구분 | 세부 | 설명 |
|------|------|------|
| 저장/처리 | Repository Management | 기존 DW + HDFS 통합 저장소 관리 |
| | Data Virtualization | 모든 데이터 타입에 가상 View 제공 |
| | Distributed Processing | 분산 처리 후 결과값 전달 |
| 기준 데이터 | Metadata Management | 기술적/업무적/정보 메타데이터 관리 |
| | Taxonomy/Ontology Resolution | 연관 데이터 결합 및 분류 체계 정의 |
| | Auditing and Performance Services | 원천 데이터 추출/가공/저장/모니터링 |
| 운영 | SLA Management | 서비스 수준 관리 (분석 성능/리포트 조회 성능/데이터 정합성) |

### 3. LDW의 아키텍처

```
[원천 데이터]                [수집/연계]          [저장/처리 계층]            [응용]
 Big Data        ──Sqoop──►  Hadoop              Real-Time Decision
 Traditional                 (HDFS/YARN/         Reporting
  Enterprise  ──ETL──────►  Hive/Spark)   ────► Analytics
  Data                             +             Text Mining
 Cloud       ──CDC──────►  DW Layer              Data Mining
                            (EDW/ODS/
                            NoSQL/Cloud DW/
                            In-Memory)
```

| 구분 | 기술 요소 | 설명 |
|------|-----------|------|
| 원천 데이터 | 소셜/스트리밍/센싱 데이터 | 정형·비정형·반정형 다양한 소스 |
| 수집 | CDC | DB 변경 사항 지속 수집 (Change Data Capture) |
| | ETL | 추출(Extract) / 변환(Transform) / 적재(Load) |
| 저장/처리 | HDFS, ODS, In-memory DB, NoSQL | 데이터 성격에 맞는 다중 저장소 활용 |
| 응용 | BI, Data Analysis, Visualization | 분석 결과 가시화 및 의사결정 지원 |

### 4. LDW의 활용방안 및 결론

| 구분 | 설명 |
|------|------|
| IoT 플랫폼 | 센서·스마트 디바이스에서 발생하는 빅데이터 활용 플랫폼 — M2M/헬스케어/실시간 제어 |
| Hybrid DW | 기존 DW 성능·비용적 한계 극복, 대량 데이터를 위한 LDW와 정제된 DW를 Hybrid 형태로 운영 |
| Data Analytics | 기존에 분석 불가했던 비정형·대용량 데이터 분석 가능, 분석 영역 확장에 따른 기업 이익 극대화 |
| Data Virtualization | 별도 가상화 도구로 원본 데이터를 유지하면서 가상화 활용 가능 |

LDW는 데이터의 지속적인 증가에 따라 데이터 레이크(Data Lake) 등 연계 기술의 지속 발전이 예상되며, 정형·비정형 데이터의 통합 분석 플랫폼으로서 그 중요성은 더욱 높아질 것이다. **끝**

### 실무 제언

- **거버넌스 우선**: LDW 도입 시 메타데이터 관리와 데이터 품질 정책을 선행 수립해야 분석 신뢰성 확보 가능
- **단계적 도입**: 기존 EDW와 병행 운영 후 Hadoop 레이어를 점진적으로 확장하는 Hybrid 전략 권장
- **SLA 관리**: 정형·비정형 혼합 쿼리에 대한 응답 성능 기준을 별도 설정하여 사용자 만족도 유지
