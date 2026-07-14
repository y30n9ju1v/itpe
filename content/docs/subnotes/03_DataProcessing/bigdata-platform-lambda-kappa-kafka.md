---
title: "빅데이터 플랫폼 아키텍처: 람다·카파·하둡·카프카"
date: 2026-07-12T15:35:09+09:00
tags: ["데이터처리", "빅데이터", "람다아키텍처", "카파아키텍처", "하둡", "카프카", "서브노트"]
draft: false
---

# 빅데이터 플랫폼 아키텍처: 람다·카파·하둡·카프카 서브노트

> **두음 머리에 박기 🧠**
> - **배·스·서** (람다 아키텍처 3레이어: **배**치 레이어, **스**피드 레이어, **서**빙 레이어)
> - **P·V·V·V·V·V** (빅데이터 6V: 규모Volume, 다양성Variety, 속도Velocity, 진실성Veracity, 시각화Visualization, 가치Value)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **빅데이터 플랫폼 아키텍처 (Polyglot Processing, Lambda/Kappa Architecture, Hadoop Ecosystem, Kafka)** |
| **정의** | 대용량·다양·고속 데이터 수집·저장·처리 → 폴리글랏 프로세싱(엔진조합) + 람다(배치+스트림)/카파(스트림단일) 아키텍처 + 하둡(HDFS)·카프카(메시징) 포괄 플랫폼 체계 |
| **키워드** | Polyglot Processing, Lambda Architecture, Kappa Architecture, HDFS NameNode/DataNode, 하둡 에코시스템, Kafka Producer/Broker/Consumer, Pub/Sub |
| **개념도** | `[신규 데이터]`<br>&nbsp;&nbsp;├─▶`[배치 레이어] All Data→배치뷰`──┐<br>&nbsp;&nbsp;└─▶`[스피드 레이어] 실시간 증분→실시간뷰`─┤▶`[서빙 레이어 Merge]`▶쿼리 (람다)<br>`[신규 데이터]`▶`[스피드 레이어(Only Stream)]`▶`[서빙 레이어]`▶쿼리 (카파)<br>`[Producer]`▶`[Kafka Broker(Topic)]`▶`[Consumer]` (Pub/Sub)<br>`[Client]`▶`[NameNode:메타관리]`↔`[DataNode1-2-3:블록복제저장]` (HDFS) |
| **구성요소** | 1. **폴리글랏 프로세싱**: 3V(Volume→배치, Variety→NoSQL, Velocity→스트림) 문제에 맞춰 최적 엔진을 조합하는 처리 방식<br>2. **람다 아키텍처**: 배치 레이어(맵리듀스/Spark, 전체 재계산·정확성)+스피드 레이어(Storm/Flink, 실시간 증분·근사치)+서빙 레이어(배치뷰+실시간뷰 병합)<br>3. **카파 아키텍처**: 배치 레이어 제거, 스피드 레이어에서만 스트림 처리, 재작업은 코드 변경 시 별도 스트림 프로세스로 재처리<br>4. **하둡 에코시스템**: HDFS(분산 파일 저장)·MapReduce(분산 병렬 처리)·Hive(DW 인프라)·Pig(고급 처리언어)·Zookeeper(분산 코디네이션)·Sqoop(RDB 연동)·Ambari(클러스터 관리)<br>5. **HDFS 쓰기/읽기**: 쓰기(Client→NameNode 요청→DataNode1~3 순차 복제 저장), 읽기(NameNode가 가장 가까운 DataNode 위치 안내→블록 전송)<br>6. **Kafka**: Producer(메시지 생성)-Broker(Topic별 분류·저장)-Consumer(구독·소비)의 Pub/Sub 기반 고성능 분산 메시징(MOM) |
| **비교** | **람다 아키텍처**<br>- 3개 레이어(배치+스피드+서빙), 배치+스트림 조합<br>- 정확성·일관성 우수하나 코드 이중 관리로 자원 소비 많음<br>- 트위터, 라이브퍼슨 사용<br><br>**카파 아키텍처**<br>- 2개 레이어(스피드+서빙), Only 스트림<br>- 운영 단순화·개발 효율 우수, 재작업은 코드 변경 시에만<br>- 링크드인, 야후 사용 |
| **차별화** | **빅데이터 플랫폼 설계 및 운영 전략** <br>1. **아키텍처 선택**: 정확성·일관성 최우선(금융정산) → 람다 / 운영단순·개발속도 → 카파, Kafka는 단일 소스오브트루스<br>2. **HDFS 복제**: 기본 3중복제(RF=3) → DataNode 장애 자동복구, NameNode SPOF → HA(Active-Standby) 필수<br>3. **Kafka 확장성**: 브로커 3대 → 무중단 Scale-out 수십대, 파티션단위 순서보장·복제팩터 조정 → 신뢰성 확보<br>4. **클라우드 전환**: AWS EMR·Azure HDInsight·GCP Dataproc 등 관리형 서비스 전환 → 운영부담 경감 |
