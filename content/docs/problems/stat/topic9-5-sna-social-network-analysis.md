---
title: "소셜 네트워크 분석(SNA: Social Network Analysis)"
date: 2026-06-28T00:00:00+09:00
tags: ["통계", "데이터분석", "핵토200", "데이터마이닝", "SNA", "소셜네트워크"]
topic_no1: 9
topic_no2: 5
topic_large: "데이터 마이닝"
topic_small: "소셜네트워크분석·Centrality"
exam_ref: "모의_59회"
exam_type: "관리"
question_no: 4
---

## 문제

소셜 네트워크 분석(SNA: Social Network Analysis)의 개념과 주요 분석 방법에 대하여 설명하고, 이 중 Centrality Analysis에 대하여 상세히 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 출제영역 | 디지털서비스 |
| 난이도 | ★★★☆☆ |

## 해설

### 출제 배경 및 의도

데이터 마이닝, 통계, 신경망 등의 문제에 이어 소셜 네트워크 분석 방법에 대한 문제 출제 예상됨. SNA의 개념 및 주요 알고리즘에 대한 이해 필요

### 1. 소셜네트워크의 의미 분석, 소셜 네트워크 분석(SNA)의 개념

가. SNA(Social Network Analysis)의 정의

정 의  • 소셜네트워크 상에서 발생되는 데이터를 통하여 각 구성원 및 구성원간의 관계, 소셜네트워크 자체의 중요도 등을 분석, 새로운 지식을 도출하는 기법
       - 사회연결망 이론을 바탕으로 소셜네트워크의 형태 및 연결 구조, 연결 강도 등을 계량화하여 측정하고 이를 통해 특정 구성원의 영향력, 특정 네트워크의 영향력 등 유의미한 지식을 도출하는 기법

나. SNA의 5가지 속성

| 속성 | 설명 |
|------|------|
| 응집력(Cohesion) | 행위자들간 강한 사회화 관계의 존재 |
| 구조적 동위성(Equivalence) | 한 네트워크의 구조적 지위와 그 위치가 주는 역할이 동일한 사람들간의 관계 |
| 명성(Prominence) | 네트워크에서 누가 권력을 가지고 있는가? |
| 범위(Range) | 행위자의 네트워크 규모 |
| 중계(Brokerage) | 다른 네트워크와 연결해주는 것 |

### 2. SNA(Social Network Analysis)의 주요 분석 방법

| 분석 방법 | 설명 |
|-----------|------|
| Density 분석 | 네트워크 내에 얼마나 많은 관계가 존재하는 지 분석, 가능한 총 관계 수와 실제로 맺어진 관계 수의 비율. 실제로 맺어진 관계가 많을수록 Density 우수. Centralization은 어떤지, 얼마나 고르게 분산되어 있는지는 고려하지 않음 |
| Neighbor 분석 | 연결망 구성 노드들(개별노드)간의 표면적 연결 상태 분석, 노드들 간의 관계를 수치로 표현, 전체 관계 및 흐름을 한눈에 파악. *표면적으로 Ted가 가장 인기 많다고 할 수 있음 |
| Centrality 분석 | 한 노드가 전체 연결 망 내에서 중심에 위치하는 정도 분석, 특정 행위자의 영향력 파악. Degree Centrality, Closeness Centrality, Betweeness Centrality가 대표적 분석 방법 |
| Clique 분석 | 연결망 구성 노드들 간 결합력을 바탕으로 한 군집구조 파악, 연결망 내에 영향력 있는 그룹 식별 |
| Affinity 분석 | 비슷한 점(공통점)이 많은 정도를 분석. 친구관계가 유사하다는 것은 둘 사이에 친밀도(유사도)가 높다는 것을 의미 |

### 3. 특정 노드의 중요도 분석, Centrality Analysis 상세 설명

| 분석 방법 | 설명 |
|-----------|------|
| Degree Centrality 분석 | 노드가 관계를 맺은 정도 분석. 연결망내에서 리더를 식별. In-Degree/Out-Degree 구분. Degree Centrality가 높으면 정보 획득이 쉽고, 영향력이 큼 (Highest In-Degree: Popular, Highest Out-Degree: Gregarious) |
| Closeness Centrality 분석 | 한 노드가 다른 노드들과 얼마나 가까운 관계에 있는지 측정. 중요 인물과 얼마나 가까이 있는지 파악 |
| Betweenness Centrality 분석 | 한 노드가 다른 노드들 사이에 위치하는(거쳐가는) 정도를 측정. 높으면 Broker로서 다른 행위자들이 의존하는 정도가 큼 |
| (참고) Centralization 분석 | 한 연결망이 얼마나 중앙집중적인 구조를 가졌는지 측정. Centralized, Decentralized, Distributed로 구분. Density는 같아도 Centralization은 다를 수 있음 |

- 한 점이 전체 연결 망에서 중심에 위치하는 정도를 분석

끝

### 실무 제언

SNS 마케팅에서의 SNA 활용, 인플루언서 식별, 조직 내 비공식 네트워크 분석
