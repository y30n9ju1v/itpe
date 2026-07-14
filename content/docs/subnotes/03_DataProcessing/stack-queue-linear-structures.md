---
title: "스택과 큐: 입출력 원리와 순환큐 구현"
date: 2026-07-12T18:15:41+09:00
tags: ["자료처리", "자료구조", "스택", "큐", "순환큐", "서브노트"]
draft: false
---

# 스택과 큐: 입출력 원리와 순환큐 구현 서브노트

> **두음 머리에 박기 🧠**
> - **LIFO·FIFO** (스택은 **L**ast **I**n **F**irst **O**ut, 큐는 **F**irst **I**n **F**irst **O**ut)
> - **공·포** (순환큐 2대 상태 판별식: **공**백은 Front==Rear, **포**화는 (Rear+1)%Capacity==Front)
> - **순·연·동** (배열 큐 단점 해결책 3가지: **순**환 큐, **연**결리스트 큐, **동**적 배열 큐)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **스택(Stack) 및 큐(Queue) - 순환 큐(Circular Queue) 포함** |
| **정의** | 스택: 한쪽 끝(Top) 삽입·삭제 → LIFO 선형구조 / 큐: Rear삽입·Front삭제 → FIFO 선형구조 / 순환 큐: 배열 인덱스 모듈러 순환 → 선형 큐 공간낭비(가공 오버플로우) 해결 |
| **키워드** | LIFO, FIFO, Push/Pop, Enqueue/Dequeue, Overflow/Underflow, 순환 큐, 가공 오버플로우 |
| **개념도** | `[선형 자료구조]`<br>&nbsp;&nbsp;├─ `스택(Stack)`: 한쪽 끝(Top) 삽입/삭제 → LIFO<br>&nbsp;&nbsp;└─ `큐(Queue)`: Rear 삽입, Front 삭제 → FIFO<br><br>`순환 큐`: `Rear = (Rear+1) % Capacity` 로 배열 끝 다음을 첫 인덱스로 연결<br>공백(Front==Rear) ↔ 포화((Rear+1)%Capacity==Front, 1칸 손실 방식) |
| **구성요소** | 1. **스택 Push/Pop**: Push→`Top←Top+1`, `Top>K`면 Overflow / Pop→`Top=0`이면 Underflow, 아니면 값추출·`Top-1` (검사순서: Push 증가후검사, Pop 검사후추출)<br>2. **큐 Enqueue/Dequeue**: Enqueue→Rear삽입 / Dequeue→Front삭제<br>3. **순환 큐**: `CQ_Enqueue`→`(Rear+1)%Cap==Front`면 Full, 아니면 순환이동 후 저장 / `CQ_Dequeue`→`Front==Rear`면 Empty, 아니면 순환이동 후 반환<br>4. **배열 선형 큐 3대 단점**: 가공 오버플로우(앞공간 미재사용)·고정크기(정적할당)·중간삽입삭제 O(n) |
| **비교** | **배열 기반 구현**<br>- 메모리 정적할당, 캐시 지역성 높음<br>- 스택: Top 인덱스 1곳 관리, 구현 단순<br>- 선형 큐: Rear가 배열끝 도달 시 앞쪽여유공간 있어도 Enqueue 불가(가공 오버플로우)<br><br>**순환 큐 vs 연결리스트 큐 vs 동적 배열 큐 (선형 큐 해결책)**<br>- 순환 큐: 모듈러 연산 → 앞공간 재사용, 구현단순, 용량예측형 임베디드/버퍼 적합(1칸손실 방식)<br>- 연결리스트 큐: 노드단위 동적할당 → 고정크기 제약 완전해결, 포인터오버헤드·캐시지역성↓<br>- 동적 배열 큐: 포화시 2배 재할당(Resize) → 상환 O(1) 유지, 일시적 2배메모리 필요 |
| **차별화** | **자료구조 선택과 동시성/분산 환경 적용 전략**<br>1. **경계조건 검사순서 엄수**: Push 증가후검사, Pop 검사후추출 → 버퍼오버런 방지, 정적분석 CI로 자동검증<br>2. **동시성 제어**: 멀티스레드·인터럽트 시 Top/Front/Rear 경쟁상태(Race) → Lock 또는 CAS기반 Lock-Free 스택·SPSC 순환큐 적용<br>3. **분산 확장**: 단일프로세스 Capacity 한계 → Kafka·RabbitMQ 분산메시지큐로 확장, 동일파티션키 라우팅으로 FIFO 순서보장 |
