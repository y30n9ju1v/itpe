---
title: "블록체인 분산 합의 알고리즘"
date: 2026-07-11T11:26:36+09:00
tags: ["최신기술", "블록체인", "합의알고리즘", "PoW", "PoS", "PBFT", "트릴레마", "서브노트"]
draft: false
---

# 블록체인 분산 합의 알고리즘 서브노트

> **두음 머리에 박기 🧠**
> - **작·지·대·비** (4대 핵심 분산 합의 알고리즘: **작**업증명 PoW, **지**분증명 PoS, **대**표위임지분증명 DPoS, 비잔틴장애허용 **비**PBFT)
> - **확·탈·보** (블록체인 구조적 한계인 트릴레마 Trilemma 3대 요소: 처리량 **확**장성 Scalability, 중앙통제 배제 **탈**중앙화 Decentralization, 위변조 방지 **보**안성 Security)
> - **삼·에프·플러스·일** (PBFT 합의 도달에 필요한 최소 물리 노드 수 조건 공식: 허용 가능한 비잔틴(배신자) 노드 수가 $f$개 일 때, 전체 노드 수는 최소 $3f+1$개 이상 필수)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **블록체인 분산 합의 알고리즘 (Consensus Algorithms) 및 블록체인 트릴레마 (Trilemma)** |
| **정의** | 분산 노드 간 중앙 신뢰 기관 없이 거래 무결성에 합의하는 **분산 합의 알고리즘(작·지·대·비)**과, 확장성·보안성·탈중앙화를 동시 충족하지 못하는 **트릴레마 극복 기술** |
| **키워드** | PoW / PoS / DPoS, PBFT ($3f+1$), 블록체인 트릴레마, Layer 2 (Roll-up), 블록 확정성 (Finality) |
| **개념도** | **[ 블록체인 트릴레마 (Blockchain Trilemma) 꼭짓점 매핑 ]**<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 탈중앙화 (Decentralization) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`/ \`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`/ &nbsp;&nbsp;\`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ &nbsp;&nbsp;&nbsp;&nbsp;\<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 보안성 Security ] ─────── [ 확장성 Scalability ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`* PoW : 탈중앙화/보안성 우수 ➔ 확장성(TPS) 극히 저조`<br>&nbsp;&nbsp;&nbsp;&nbsp;`* DPoS / PBFT : 소수 대표 참여로 확장성(고성능) 우수 ➔ 탈중앙화 희생 (중앙화 경향 노출)` |
| **구성요소** | 1. **작업 증명 (PoW)**: 목표 해시값보다 작은 값을 찾기 위해 Nonce를 대입하는 컴퓨팅 파워 경쟁 (51% 공격 취약)<br>2. **지분 증명 (PoS)**: 지분(코인 보유량) 크기에 비례해 블록 생성 권한을 획득하며 검증 실패 시 패널티(Slashing) 적용<br>3. **위임 지분 증명 (DPoS)**: 지분 보유자들의 투표로 선출된 소수의 대표 노드(BP)들이 합의 전담 (매우 빠른 성능)<br>4. **PBFT (비잔틴 장애 허용)**: $3f+1$개 노드 중 $f$개의 비잔틴 노드가 있어도 3단계 투표 메시지 교환으로 다수결 합의 도달 |
| **비교** | **작업 증명 (PoW - Proof of Work)**<br>- **합의 수단**: 전용 연산 장비의 컴퓨팅 해싱 속도 (ASIC 장비 등)<br>- **확정 시간**: 느림 (10분 주기 블록 생성, 분기 발생 시 수 시간 대기)<br>- **에너지 소모**: 극도로 비효율적 (연산 전력 소모 심각)<br><br>**실용적 비잔틴 합의 (PBFT)**<br>- **합의 수단**: 신뢰 노드 간의 3단계 투표 메시지 다중 교환<br>- **확정 시간**: 즉각적 확정 (Finality 보장, 분기 발생 없음)<br>- **에너지 소모**: 효율적 (단순 메시지 통신 연산) |
| **차별화** | **블록체인 트릴레마 극복을 위한 오프체인 Layer 2 및 롤업(Roll-up) 실무 아키텍처**<br>1. **Layer 2 롤업(Roll-up) 연계 구조**: 메인 체인(Layer 1 - 보안성/탈중앙화 담당)의 가스비 폭증과 속도 한계를 극복하기 위해, 외부 세컨드 체인(Layer 2)에서 거래 수천 건을 묶어 연산 처리한 뒤, 요약 암호화 값만 메인에 동기화하는 **Roll-up(Optimistic / ZK-Roll-up)** 기술 도입 필수.<br>2. **정족수 투표 오버헤드($O(N^2)$) 극복**: PBFT 계열 합의는 참가 노드가 많아지면 메시지 전송량이 기하급수적으로 늘어 병목 유발. 따라서 노드를 그룹화하여 대표 그룹에서만 PBFT를 수행하고 나머지는 참관하는 하이브리드 투표 아키텍처 적용.<br>3. **합의 조작 방지용 슬래싱(Slashing) 패널티 거버넌스**: PoS 계열에서는 검증 노드가 이중 서명이나 부정 검증을 감행할 때 사전에 동결 기탁(Staking)해 둔 코인을 즉각 영구 소멸시키는 하드웨어적 금융 규제 규칙 빌트인. |
