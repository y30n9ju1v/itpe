---
title: "순환 큐(Circular Queue)의 공백/포화 상태와 삽입/제거 함수"
date: 2026-07-12T00:00:00+09:00
tags: ["알고리즘", "핵토200", "큐", "순환큐"]
topic_no1: 6
topic_no2: 1
topic_large: "큐"
topic_small: "순환큐"
exam_ref: "합숙_2016.07"
exam_type: "관리"
question_no: "Day-1"
---

## 문제

아래 순환큐의 구조를 참고하여 순환 큐의 공백, 포화 상태를 설명하고, 삽입연산과 제거연산에 대해 아래 함수를 완성하시오.

가. 삽입 함수(void CQ_Enqueue(CircularQueue* Queue, ElementType Data))

나. 제거 함수(ElementType CQ_Dequeue(CircularQueue* Queue))

```c
typedef struct tagCircularQueue // 순환큐의 구조
{
  int Capacity; /* 용량 */
  int Front; /* 전단의 인덱스 */
  int Rear; /* 후단의 인덱스 */
  Node* Nodes; /* 노드 배열 */
} CircularQueue;
```

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 큐 |
| 토픽(소) | 순환큐 |
| 출제 | 합숙_2016.07 |
| 유형 | 관리 |
| 번호 | Day-1 |

## 모범답안

1. 순환 큐(Circular Queue) 개요

    정 의  • 배열의 마지막 인덱스 다음을 첫 인덱스로 연결해 원형으로 재사용하는 큐
           - Front/Rear 인덱스를 모듈러(%) 연산으로 순환시켜 선형 큐의 공간
             낭비 문제를 해결하는 구조

    ```
            Front
              ↓
          ┌───┬───┬───┬───┬───┐
          │ A │ B │ C │   │   │   Capacity=5
          └───┴───┴───┴───┴───┘
                        ↑
                       Rear
       Rear = (Rear+1) % Capacity 로 순환 이동
    ```

    | 상태 | 조건식 | 설명 |
    |------|--------|------|
    | 공백(Empty) | Front == Rear | 전단/후단이 동일 위치 |
    | 포화(Full) | (Rear+1)%Capacity == Front | 1칸 손실 방식으로 공백과 구분 |

2. "가" 삽입(CQ_Enqueue) / "나" 제거(CQ_Dequeue) 함수 구현

    1) CQ_Enqueue 구현

    ```c
    void CQ_Enqueue(CircularQueue* Queue, ElementType Data)
    {
        if ((Queue->Rear + 1) % Queue->Capacity == Queue->Front) {
            printf("Queue is Full (Overflow)\n");
            return;
        }
        Queue->Rear = (Queue->Rear + 1) % Queue->Capacity;
        Queue->Nodes[Queue->Rear] = Data;
    }
    ```

    2) CQ_Dequeue 구현

    ```c
    ElementType CQ_Dequeue(CircularQueue* Queue)
    {
        ElementType Item;
        if (Queue->Front == Queue->Rear) {
            printf("Queue is Empty (Underflow)\n");
            return NULL;
        }
        Queue->Front = (Queue->Front + 1) % Queue->Capacity;
        Item = Queue->Nodes[Queue->Front];
        return Item;
    }
    ```

    - Enqueue는 Rear를 먼저 이동 후 저장, Dequeue는 Front를 먼저 이동 후 반환하는 대칭 구조.

3. 1칸 손실 방식 대비 Count 변수 방식 비교

    | 구분 | 1칸 손실 방식 | Count 변수 방식 |
    |------|----------------|-------------------|
    | 구현 복잡도 | 낮음(추가 필드 불요) | 중간(Count 필드 관리) |
    | 용량 활용 | Capacity-1까지만 사용 | Capacity 100% 활용 |
    | 적합 환경 | 일반 서버 환경 | 메모리 극제한 MCU 환경 |

    - 본 문제 구조체는 별도 Count 필드가 없어 1칸 손실 방식을 기준으로 구현.

4. 실무 적용 시 고려사항

    | 이슈 | 대응방안 |
    |------|----------|
    | 멀티스레드(인터럽트/메인 루프) 동시 Front/Rear 갱신 경쟁 | Lock-Free SPSC 큐 패턴 또는 원자적 연산 적용 |
    | Capacity 산정 오류로 데이터 유실(패킷 드롭) | 피크 유입률 기반 용량 산정 + 포화 알림/동적 확장 |
    | 1칸 손실 방식의 용량 비효율 | MCU 등 극제한 환경은 Count 변수 방식 채택 |

    - 최근 네트워크 링 버퍼·임베디드 시스템에서 Lock-Free 순환 큐 적용 증대 예상.  "끝"
