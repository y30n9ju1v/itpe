---
title: "배포 전략 및 무중단 배포"
date: 2026-07-11T11:14:19+09:00
tags: ["소프트웨어공학", "배포전략", "무중단배포", "롤링배포", "블루그린", "카나리", "서브노트"]
draft: false
---

# 무중단 배포 전략 서브노트

> **두음 머리에 박기 🧠**
> - **롤·블·카** (대표적인 무중단 배포 전략 3종: **롤**링 Rolling, **블**루-그린 Blue-Green, **카**나리 Canary)
> - **확·이·축** (DB 스키마 마이그레이션 단계: **확**장 Expand ➔ **이**행/동기화 ➔ **축**소/삭제 Contract)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **무중단 배포 전략 (Zero-Downtime Deployment)** |
| **정의** | 서비스 운영 중에 시스템 다운타임(Downtime)을 발생시키지 않고 새로운 버전의 애플리케이션을 안전하게 사용자에게 릴리즈하는 **트래픽 제어 및 배포 자동화 기술** |
| **키워드** | 롤링 배포, 블루-그린, 카나리, 롤백(Rollback), 서비스 가상화, Expand and Contract 패턴 |
| **개념도** | **[ 블루-그린 배포 구조 ]**<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 사용자 트래픽 ] ──➔ [ 로드 밸런서 (스위칭) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (포인터 일시 스위칭)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌──────┴──────┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (기존 가동)  ▼ (신규 가동)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ Blue (v1.0) ]  [ Green (v1.1) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`(서버 자원 2배 사용, 장애 시 원클릭 롤백 가능)` |
| **구성요소** | 1. **롤링 배포 (Rolling)**: 가동 중인 인스턴스를 하나씩 구버전에서 신버전으로 순차적 업데이트 수행<br>2. **블루-그린 (Blue-Green)**: 구버전 환경(Blue)과 동일한 신버전 환경(Green)을 띄우고 로드밸런서 라우팅 전환<br>3. **카나리 배포 (Canary)**: 신버전에 소수 트래픽(예: 5%)을 선배포하여 에러 감지 후 점진적 확대(A/B 테스트 가능)<br>4. **로드 밸런서 (L4/L7)**: 포인터 기반 트래픽 라우팅 스위칭 및 헬스 체크(Health Check) 대행<br>5. **데이터 동기화 (CDC)**: 블루-그린 배포 시 구/신 환경 간 실시간 데이터 유실 방지를 위한 동기화 체계 |
| **비교** | **롤링 배포 (Rolling)**<br>- **자원 추가**: 불필요 (기존 리소스 재사용)<br>- **신구 공존**: 공존함 (데이터 호환성 주의)<br>- **롤백**: 매우 느림 (순차 복구 필요)<br><br>**블루-그린 (Blue-Green)**<br>- **자원 추가**: 2배 필요 (임시 비용 증가)<br>- **신구 공존**: 없음 (완전 격리)<br>- **롤백**: 즉각적 (로드밸런서 역전환)<br><br>**카나리 배포 (Canary)**<br>- **자원 추가**: 소량 필요<br>- **신구 공존**: 공존함 (모니터링 대상)<br>- **롤백**: 신속함 (카나리 인스턴스 격리) |
| **차별화** | **신구 버전 공존 하에서의 데이터베이스 스키마 마이그레이션(Expand-Contract) 전략**<br>1. **확장(Expand) 단계**: 기존 테이블에 신규 컬럼을 추가하되 기본값이나 Nullable로 설정하여 구버전 코드 에러 방지.<br>2. **이행(Transition) 단계**: 신버전 코드가 배포되어 신규 데이터를 입력하되, 구버전 코드도 동작할 수 있도록 트리거(Trigger) 또는 배치 프로그램을 이용하여 실시간 데이터 동기화 유지.<br>3. **축소(Contract) 단계**: 배포가 100% 완료되고 안정화된 후, 구버전 컬럼/프로세스를 최종 제거하여 DB 스키마 정리 완성.<br>4. **이중 쓰기(Dual Write) 기법**: DB 이중화 및 마이그레이션 간 정합성을 위해 백엔드 애플리케이션 레이어에서 양쪽 DB에 이중으로 쓰기를 수행하는 과도기 코드 설계 적용. |
