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
| **정의** | 운영 중 시스템 다운타임 없이 신규버전 애플리케이션을 안전하게 사용자에 릴리즈하는 **트래픽 제어 및 배포 자동화 기술** |
| **키워드** | 롤링 배포, 블루-그린, 카나리, 롤백(Rollback), 서비스 가상화, Expand and Contract 패턴 |
| **개념도** | **[ 블루-그린 배포 구조 ]**<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 사용자 트래픽 ] ──➔ [ 로드 밸런서 (스위칭) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (포인터 일시 스위칭)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌──────┴──────┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (기존 가동)  ▼ (신규 가동)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ Blue (v1.0) ]  [ Green (v1.1) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`(서버 자원 2배 사용, 장애 시 원클릭 롤백 가능)` |
| **구성요소** | 1. **롤링 배포**: 가동 인스턴스 하나씩 구→신버전 순차 업데이트<br>2. **블루-그린**: 구버전(Blue) 옆에 신버전(Green) 기동 → 로드밸런서 라우팅 전환<br>3. **카나리 배포**: 신버전에 소수트래픽(예 5%) 선배포 → 에러감지 후 점진확대(A/B 가능)<br>4. **로드밸런서(L4/L7)**: 포인터기반 라우팅 스위칭·헬스체크 대행<br>5. **데이터 동기화(CDC)**: 블루-그린 시 구/신 환경 간 실시간 데이터유실 방지 |
| **비교** | **롤링 배포**<br>- 자원추가: 불필요 (기존리소스 재사용)<br>- 신구공존: 공존 (데이터호환성 주의)<br>- 롤백: 매우느림 (순차복구 필요)<br><br>**블루-그린**<br>- 자원추가: 2배 필요 (임시비용 증가)<br>- 신구공존: 없음 (완전격리)<br>- 롤백: 즉각적 (로드밸런서 역전환)<br><br>**카나리 배포**<br>- 자원추가: 소량 필요<br>- 신구공존: 공존 (모니터링 대상)<br>- 롤백: 신속 (카나리 인스턴스 격리) |
| **차별화** | **신구버전 공존 시 DB 스키마 마이그레이션(Expand-Contract) 전략**<br>1. **확장(Expand)**: 기존테이블에 신규컬럼 추가, 기본값/Nullable 설정 → 구버전 코드에러 방지<br>2. **이행(Transition)**: 신버전 코드배포·신규데이터 입력, 트리거/배치로 구버전과 실시간 동기화 유지<br>3. **축소(Contract)**: 배포100% 완료·안정화 후 구버전 컬럼/프로세스 최종제거<br>4. **이중쓰기(Dual Write)**: DB이중화·마이그레이션 정합성 위해 백엔드가 양쪽 DB에 동시기록하는 과도기 설계 |
