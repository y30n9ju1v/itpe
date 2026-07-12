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
| **정의** | 스택은 한쪽 끝(Top)에서만 삽입·삭제가 이루어지는 후입선출(LIFO) 선형 자료구조이고, 큐는 Rear에서 삽입·Front에서 삭제가 이루어지는 선입선출(FIFO) 선형 자료구조이며, 순환 큐는 배열 인덱스를 모듈러 연산으로 원형 순환시켜 선형 배열 큐의 공간 낭비(가공 오버플로우) 문제를 해결한 구조 |
| **키워드** | LIFO, FIFO, Push/Pop, Enqueue/Dequeue, Overflow/Underflow, 순환 큐, 가공 오버플로우 |
| **개념도** | `[선형 자료구조]`<br>&nbsp;&nbsp;├─ `스택(Stack)`: 한쪽 끝(Top) 삽입/삭제 → LIFO<br>&nbsp;&nbsp;└─ `큐(Queue)`: Rear 삽입, Front 삭제 → FIFO<br><br>`순환 큐`: `Rear = (Rear+1) % Capacity` 로 배열 끝 다음을 첫 인덱스로 연결<br>공백(Front==Rear) ↔ 포화((Rear+1)%Capacity==Front, 1칸 손실 방식) |
| **구성요소** | 1. **스택 Push/Pop 알고리즘**: Push는 `Top←Top+1` 후 `Top>K`면 Overflow, 아니면 `S[Top]←Item`. Pop은 `Top=0`이면 Underflow, 아니면 `Item←S[Top]; Top←Top-1`(검사 순서: Push는 증가 후 검사, Pop은 검사 후 추출)<br>2. **큐 Enqueue/Dequeue**: Enqueue는 Rear에 삽입, Dequeue는 Front에서 삭제<br>3. **순환 큐 구현**: `CQ_Enqueue`는 `(Rear+1)%Capacity==Front`면 Full, 아니면 Rear를 먼저 순환 이동 후 저장. `CQ_Dequeue`는 `Front==Rear`면 Empty, 아니면 Front를 먼저 순환 이동 후 값 반환<br>4. **배열 기반 선형 큐의 3대 단점**: 가공 오버플로우(비워진 앞쪽 공간 미재사용), 고정 크기(정적 할당), 중간 삽입·삭제 시 원소 이동(O(n)) |
| **비교** | **배열 기반 구현**<br>- 메모리 정적 할당, 캐시 지역성 높음<br>- 스택: Top 인덱스 1곳만 관리, 구현 단순<br>- 선형 큐: Rear가 배열 끝에 도달하면 앞쪽 여유 공간이 있어도 Enqueue 불가(가공 오버플로우)<br><br>**순환 큐 vs 연결리스트 큐 vs 동적 배열 큐 (선형 큐 단점 해결책)**<br>- 순환 큐: 모듈러 연산으로 앞쪽 공간 재사용, 구현 단순, 용량 예측 가능한 임베디드/버퍼에 적합(1칸 손실 방식 기준)<br>- 연결리스트 큐: 노드 단위 동적 할당으로 고정 크기 제약을 완전 해결, 포인터 오버헤드·캐시 지역성 저하<br>- 동적 배열 큐: 포화 시 2배 재할당(Resize)으로 상환 O(1) 성능 유지, 일시적 2배 메모리 필요 |
| **차별화** | **자료구조 선택과 동시성/분산 환경 적용 전략**<br>1. **경계조건 검사 순서 엄수**: Push는 포인터 증가 후 Overflow 검사, Pop은 Underflow 검사 후 값 추출 순서를 반드시 지켜야 버퍼 오버런 등 정합성 오류를 방지하며, 정적분석 CI로 경계조건을 자동 검증.<br>2. **동시성 제어**: 멀티스레드·인터럽트 환경에서 Top/Front/Rear 포인터 경쟁 상태(Race Condition)가 발생하므로 Lock 또는 CAS 기반 Lock-Free 스택·SPSC 순환 큐 패턴을 적용.<br>3. **분산 확장**: 단일 프로세스 순환 큐도 Capacity 한계가 있으므로 대규모 스트리밍 환경에서는 Kafka·RabbitMQ 같은 분산 메시지 큐로 확장하되, 동일 파티션 키 라우팅으로 FIFO 순서 보장을 유지. |
