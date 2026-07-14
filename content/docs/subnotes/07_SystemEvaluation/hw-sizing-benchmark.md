---
title: "하드웨어 벤치마크 테스트(BMT) 및 도입검증 절차"
date: 2026-07-11T11:24:18+09:00
tags: ["시스템평가", "하드웨어사이징", "BMT", "PoC", "TPC", "SPECint", "서브노트"]
draft: false
---

# 하드웨어 벤치마크 테스트(BMT) 및 도입검증 절차 서브노트

> **참고**: HW 용량 산정(Sizing) 방법론 3대 기법(기준 성능법·유사 시스템 기준법·용량 계획법)은 [`hw-sizing-guideline.md`](../04_ComputerSystems/hw-sizing-guideline.md) 참고. 본 노트는 산정된 규모를 실제 도입 전 **정량 검증**하는 BMT/PoC 절차에 집중.

> **두음 머리에 박기 🧠**
> - **티·스·티** (성능 표준 벤치마크 지표: OLTP 처리율 **T**PC-C, CPU 정수 연산 **S**PECint, 의사결정계 분석 **T**PC-H/DS)
> - **비·피·알** (장비 도입 검증 3단계: 기술타당성 검증 **P**oC ➔ 성능 비교계측 **B**MT ➔ 실 가동 환경 **R**FP 발주)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **하드웨어 벤치마크 테스트 (BMT, Benchmark Test) 및 도입검증(PoC) 절차** |
| **정의** | Sizing 도출 HW요구사양 → 도입 전 이종장비 성능/기능 계측 정량비교·검증하는 **BMT** 및 신기술 타당성 사전확인 **PoC** 절차 |
| **키워드** | tpmC / SPECint, BMT vs PoC, 리소스 간섭 (Noisy Neighbor), Rightsizing |
| **개념도** | **[ 도입 검증 수렴 모델 ]**<br>`[ Sizing으로 도출된 목표 tpmC / SPECint ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 경쟁사 장비 PoC 검증 ] ➔ [ 정량적 성능 계측 (BMT 표준 테스트) ] ➔ [ 최적 장비 확정 및 조달 발주 ]` |
| **구성요소** | 1. **tpmC**: 분당 처리완료 TPC-C 복합트랜잭션 건수 → OLTP 성능 대외표준 척도<br>2. **SPECint/SPECfp**: CPU 정수연산(int)·실수연산(fp) 속도 측정, 단일코어 벤치마크 단위<br>3. **BMT**: 동일 테스트베드 구축 → 피시험 장비들에 모의트랜잭션 → 성능차이 측정<br>4. **PoC**: 특정 장비/솔루션 1개 대상 기능구현 타당성 사전확인, BMT 이전단계 |
| **비교** | **BMT**<br>- 목적: 이종 HW/솔루션간 정량적 성능·기능 비교계측<br>- 특징: 경쟁입찰 제안서 성능평가 핵심기준, 주관배제 가능<br><br>**PoC**<br>- 목적: 신기술·아키텍처 도입가능성 사전검증<br>- 특징: 1개 대상 장비/솔루션 기능구현 타당성 확인 포커스 |
| **차별화** | **클라우드 가상화 멀티테넌트 용량최적화(Rightsizing) 및 간섭제어 방안**<br>1. **온프레미스 Over-provisioning→클라우드 Rightsizing 전환**: 모니터링 메트릭(CPU/Memory/I/O 70%미만) 기반 인스턴스 축소, CPU/Memory 임계치 연동 Auto Scaling 필수설계<br>2. **Noisy Neighbor 방어 vCPU 사이징**: CPU Overcommit(물리코어 대비 vCPU) 최대 2:1 이내, I/O병목 예방 Provisioned IOPS 반영<br>3. **워크로드별 인스턴스 테일러링**: Compute Optimized(CPU연산), Memory Optimized(DB메모리), Storage Optimized(I/O·로그) 최적매핑 |
