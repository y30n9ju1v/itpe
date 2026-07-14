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

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **블록체인 분산 합의 알고리즘 (Consensus Algorithms) 및 블록체인 트릴레마 (Trilemma)** |
| **정의** | 중앙기관 없이 분산노드 간 거래무결성 합의 → **분산 합의 알고리즘(작·지·대·비)** + 확장성·보안성·탈중앙화 동시충족 불가 → **트릴레마 극복 기술** |
| **키워드** | PoW / PoS / DPoS, PBFT ($3f+1$), 블록체인 트릴레마, Layer 2 (Roll-up), 블록 확정성 (Finality) |
| **개념도** | **[ 블록체인 트릴레마 (Blockchain Trilemma) 꼭짓점 매핑 ]**<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 탈중앙화 (Decentralization) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`/ \`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`/ &nbsp;&nbsp;\`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ &nbsp;&nbsp;&nbsp;&nbsp;\<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 보안성 Security ] ─────── [ 확장성 Scalability ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`* PoW : 탈중앙화/보안성 우수 ➔ 확장성(TPS) 극히 저조`<br>&nbsp;&nbsp;&nbsp;&nbsp;`* DPoS / PBFT : 소수 대표 참여로 확장성(고성능) 우수 ➔ 탈중앙화 희생 (중앙화 경향 노출)` |
| **구성요소** | 1. **PoW(작업증명)**: 목표해시값 미만 Nonce 탐색 경쟁 → 컴퓨팅파워 승부 (51% 공격 취약)<br>2. **PoS(지분증명)**: 지분(보유코인) 비례 블록생성권 획득 → 검증실패 시 Slashing 패널티<br>3. **DPoS(위임지분증명)**: 투표선출 소수 대표노드(BP) 합의전담 → 초고속 성능<br>4. **PBFT(비잔틴장애허용)**: $3f+1$ 노드 중 $f$ 배신노드 있어도 → 3단계 투표교환 다수결 합의 |
| **비교** | **PoW (작업증명)**<br>- 합의수단: 전용장비 해싱속도경쟁 (ASIC)<br>- 확정시간: 느림 (10분 주기, 분기 시 수시간 대기)<br>- 에너지: 극비효율 (연산전력 과다소모)<br><br>**PBFT (실용적 비잔틴합의)**<br>- 합의수단: 신뢰노드 3단계 투표메시지 교환<br>- 확정시간: 즉각확정 (Finality 보장, 분기無)<br>- 에너지: 효율적 (단순메시지 통신) |
| **차별화** | **트릴레마 극복 오프체인 Layer 2·롤업 실무 아키텍처**<br>1. **Layer 2 Roll-up 연계**: L1(보안성·탈중앙화) 가스비·속도한계 → L2에서 거래수천건 묶어처리 후 요약값만 L1동기화 (Optimistic/ZK-Rollup)<br>2. **정족수 투표 O(N²) 극복**: 노드증가 시 PBFT 메시지량 기하급수 병목 → 그룹화 후 대표그룹만 PBFT, 나머지 참관 (하이브리드)<br>3. **슬래싱 거버넌스**: PoS 검증노드 이중서명·부정검증 시 → 기탁(Staking) 코인 즉시영구소멸 (합의조작 방지) |
