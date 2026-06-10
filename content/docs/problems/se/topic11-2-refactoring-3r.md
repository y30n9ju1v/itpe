---
title: "리팩토링(Refactoring)과 3R (Reverse/Re-Engineering/Re-use)"
date: 2026-06-07T17:47:26+09:00
tags: ["소프트웨어공학", "핵토200", "3R", "리팩토링", "역공학", "재공학"]
topic_no1: 11
topic_no2: 2
topic_large: "3R"
topic_small: "3R"
exam_ref: "119회"
exam_type: "관리"
question_no: 4
---

## 문제

정보시스템 운영 및 유지보수 과정에서 소프트웨어 공학의 리팩토링(Refactoring)기법을 활용한 **3R(Reverse-Engineering, Re-Engineering, Re-use)**에 대하여 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 3R |
| 토픽(소) | 3R |
| 출제 | 119회 |
| 유형 | 관리 |
| 번호 | 4 |

## 해설

> **코드를 새로 짜지 않고 더 나은 코드로 만드는 기술**  
> 리팩토링(Refactoring) — 기능 변경 없이 내부 구조를 개선한다

"작동하는 코드"와 "좋은 코드"는 다릅니다. 리팩토링은 소프트웨어가 기능적으로 올바르게 동작하는 상태를 유지하면서, 개발자가 더 쉽게 이해하고 수정할 수 있도록 내부 구조를 지속적으로 개선하는 규율입니다. 마틴 파울러(Martin Fowler)가 체계화한 이 개념은 애자일 방법론의 핵심 실천법이며, 기술 부채 관리의 가장 강력한 무기입니다.

### 1. 출제 배경 및 의도

119회 기술사 시험에서 이 문제가 출제된 배경에는 **정보시스템 유지보수 현장의 현실**이 있습니다. 운영 중인 시스템은 새로 만들기 어렵습니다. 따라서 기존 자산을 활용하면서 품질을 높이는 3R 접근법 안에서 리팩토링을 어떻게 위치시키고 활용하는지를 이해하는 것이 기술사의 핵심 역량입니다.

채점관은 다음을 확인합니다.
- 리팩토링의 본질(기능 불변 + 구조 개선)을 정확히 이해하는가
- 리팩토링이 3R(Reverse Engineering, Re-Engineering, Reuse)과 어떻게 연결되는가
- 코드 스멜(Code Smell)이라는 리팩토링 트리거를 구체적으로 설명할 수 있는가
- 테스트 코드 없는 리팩토링이 왜 위험한지 인식하는가

### 2. 개념의 본질과 작동 메커니즘

#### 리팩토링의 정의와 핵심 조건

리팩토링(Refactoring)의 공식 정의: "**외부에서 관찰 가능한 행동(Observable Behavior)을 변경하지 않으면서 소프트웨어의 내부 구조를 개선하는 것**" (Martin Fowler, Refactoring 2nd ed.)

핵심은 두 가지 조건이 동시에 충족되어야 한다는 것입니다.

```text
[리팩토링의 두 조건]

조건 1: 기능(외부 동작)은 반드시 동일해야 함
  ├─ 입력과 출력이 리팩토링 전/후 동일
  ├─ 기존 테스트가 모두 통과해야 함
  └─ 테스트 코드가 없으면 리팩토링 보장 불가!

조건 2: 내부 구조가 개선되어야 함
  ├─ 가독성 향상 (이해하기 쉬워짐)
  ├─ 중복 코드 제거
  ├─ 복잡도 감소
  └─ 결합도 감소 / 응집도 향상
```

**리팩토링 ≠ 버그 수정 ≠ 기능 추가**

많은 개발자가 혼동하는데, 버그를 고치거나 새 기능을 추가하면서 동시에 리팩토링하는 것은 위험합니다. 마틴 파울러는 "두 가지를 동시에 하지 마라"고 강조합니다.

#### 리팩토링 프로세스 (Red-Green-Refactor 사이클)

```text
[TDD + 리팩토링 사이클]

     ┌──────────────────────────────────────────┐
     │                                          │
     ▼                                          │
[RED] 실패하는 테스트 작성                        │
     │                                          │
     ▼                                          │
[GREEN] 최소한의 코드로 테스트 통과               │
     │                                          │
     ▼                                          │
[REFACTOR] 테스트를 통과한 상태를 유지하며        │
           내부 구조 개선                  ──────┘
```

이 사이클에서 테스트가 안전망(Safety Net)이 됩니다. 테스트 없이 하는 리팩토링은 '모험'이 됩니다.

### 3. 핵심 키워드 (Must-Have)

#### 1) 코드 스멜(Code Smell) — 리팩토링이 필요한 신호

코드 스멜(Code Smell)이란 리팩토링이 필요하다는 것을 암시하는 코드의 나쁜 구조적 특징입니다. 기술사 시험에서는 대표적인 스멜과 그 대응 기법을 연결해서 서술하면 고득점입니다.

마틴 파울러는 22가지 코드 스멜을 정의했으며, 대표적인 것은 다음과 같습니다.

| 코드 스멜 | 설명 | 대응 리팩토링 기법 |
|----------|------|------------------|
| 긴 메서드 (Long Method) | 한 함수가 너무 많은 일을 함 | Extract Method |
| 거대한 클래스 (Large Class) | 필드/메서드가 너무 많아 응집도 낮음 | Extract Class |
| 중복 코드 (Duplicated Code) | 같은 코드가 여러 곳에 반복 | Extract Method, Pull Up Method |
| 긴 매개변수 목록 (Long Parameter List) | 파라미터가 5개 이상 | Introduce Parameter Object |
| 산탄총 수술 (Shotgun Surgery) | 하나 바꾸면 여러 곳을 고쳐야 함 | Move Method, Inline Class |
| 기능 편애 (Feature Envy) | A 클래스가 B 클래스 데이터를 너무 많이 씀 | Move Method |
| 주석 과다 (Comments) | 코드가 이해되지 않아 주석으로 설명 | 코드 자체를 설명적으로 개선 |
| 죽은 코드 (Dead Code) | 실행되지 않는 코드 | Remove Dead Code |
| 임시 필드 (Temporary Field) | 특정 상황에서만 값이 채워지는 필드 | Extract Class |
| 데이터 클래스 (Data Class) | getter/setter만 있는 클래스 | Move Method |

#### 2) 주요 리팩토링 기법

**Extract Method (메서드 추출)** — 가장 많이 쓰이는 기법

```text
// Before: 한 메서드에 모든 것이 들어있음
void printOrder(Order order) {
    // 헤더 출력
    System.out.println("주문자: " + order.getName());
    System.out.println("날짜: " + order.getDate());
    // 금액 계산
    double total = order.getPrice() * order.getQuantity();
    if (order.isMember()) total *= 0.9;
    System.out.println("금액: " + total);
}

// After: 각 책임을 별도 메서드로 분리
void printOrder(Order order) {
    printHeader(order);
    printAmount(order);
}
void printHeader(Order order) { ... }
void printAmount(Order order) { ... }
```

**Rename (이름 변경)** — 코드의 의도를 명확히

가장 단순하지만 효과가 큰 리팩토링입니다. `d` → `elapsedTimeInDays`, `fn` → `calculateTax` 처럼 이름을 바꾸는 것만으로 주석이 필요 없어집니다.

**Move Method (메서드 이동)** — 책임의 재배치

어떤 메서드가 자신이 속한 클래스보다 다른 클래스의 데이터를 더 많이 사용한다면, 그 메서드는 원래 있어야 할 클래스에 있지 않은 것입니다. Move Method로 올바른 위치로 이동시킵니다.

**Introduce Parameter Object (매개변수 객체 도입)**

```text
// Before
void createReservation(String name, String date, int adults, int children)

// After
void createReservation(ReservationInfo info)
// ReservationInfo: name, date, adults, children를 묶은 객체
```

#### 3) 리팩토링과 3R의 연계

```text
[리팩토링과 3R의 관계]

Reverse Engineering (역공학)
  └→ 리팩토링의 전제: 코드를 이해해야 무엇을 개선할지 알 수 있음
  └→ 역공학으로 코드 구조 파악 → 리팩토링 대상 식별

Re-Engineering (재공학)
  └→ 역공학 + 리팩토링(재구조화)의 결합
  └→ 기존 시스템을 이해하고 더 나은 구조로 변환

Reuse (재사용)
  └→ 리팩토링으로 정리된 컴포넌트는 재사용성이 높아짐
  └→ Extract Class, Extract Method → 독립적 컴포넌트화
```

### 4. 맥락과 비교

**리팩토링 vs 재구조화(Restructuring) vs 재공학(Re-Engineering)**

| 구분 | 리팩토링 | 재구조화 | 재공학 |
|------|---------|---------|--------|
| 범위 | 코드 레벨 | 아키텍처/모듈 레벨 | 시스템 전체 |
| 기능 변경 | 없음 | 없음 | 있을 수 있음 |
| 주체 | 개발자(일상적) | 아키텍트 | 프로젝트팀 |
| 기간 | 분 ~ 시간 | 주 ~ 월 | 월 ~ 년 |
| 트리거 | 코드 스멜 | 아키텍처 부패 | 레거시 한계 |

**리팩토링 적용 시점**

```text
[언제 리팩토링해야 하나?]

리팩토링 해야 하는 때:
  ✓ 새로운 기능을 추가하기 전 (기반 정리)
  ✓ 버그를 수정한 후 (같은 버그 재발 방지)
  ✓ 코드 리뷰 중 코드 스멜 발견 시
  ✓ 이해하기 어려운 코드를 수정해야 할 때

리팩토링 하지 말아야 할 때:
  ✗ 릴리즈 직전 (위험)
  ✗ 테스트가 전혀 없는 레거시 코드 (먼저 테스트 작성)
  ✗ 처음부터 다시 짜는 것이 더 빠를 때
```

### 5. 실무 제언

**테스트 코드 없는 리팩토링의 위험성과 해결책**

레거시 시스템에서 리팩토링을 시도하는 가장 큰 장벽은 테스트 코드가 없다는 것입니다. 테스트가 없으면 리팩토링 후 기능이 망가졌는지 확인할 방법이 없습니다. 마이클 페더스(Michael Feathers)는 저서 "레거시 코드 활용 전략"에서 이를 위한 단계적 접근을 제시합니다.

1. **특성 테스트(Characterization Test) 먼저 작성**: 기존 코드의 실제 동작을 있는 그대로 테스트로 포착합니다. 옳고 그름을 판단하지 않고, 현재 동작을 기록하는 것이 목적입니다.
2. **보호막 확보 후 리팩토링**: 특성 테스트가 리팩토링의 안전망이 됩니다.
3. **점진적 적용**: 전체 시스템을 한 번에 리팩토링하는 것은 불가능합니다. "보이스카우트 원칙(Boy Scout Rule) — 캠핑지를 처음보다 더 깨끗하게 두고 떠나라"처럼, 코드를 건드릴 때마다 조금씩 개선합니다.

**CI/CD와 리팩토링의 결합**

CI(지속적 통합) 파이프라인에 자동화 테스트를 연결하면 리팩토링의 효과가 극대화됩니다. 코드를 push할 때마다 자동으로 테스트가 실행되어, 리팩토링이 기능을 망가뜨렸는지 즉시 확인할 수 있습니다. SonarQube 같은 코드 품질 분석 도구를 파이프라인에 연계하면 코드 스멜을 자동으로 탐지하여 리팩토링 대상 우선순위를 잡는 데 활용할 수 있습니다.
