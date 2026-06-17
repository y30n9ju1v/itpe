---
title: "다형성 (Overloading과 Overriding)"
date: 2026-06-07T17:47:26+09:00
tags: ["소프트웨어공학", "핵토200", "객체지향", "다형성", "Overloading", "Overriding"]
topic_no1: 3
topic_no2: 3
topic_large: "객체지향"
topic_small: "다형성"
exam_ref: "모의_2017.04"
exam_type: "응용"
question_no: 2
---

## 문제

다음의 문제에 대하여 설명하시오.

- 가. 다형성의 개념
- 나. 사례 기반한 Overloading과 Overriding 설명
- 다. Overloading과 Overriding의 비교

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 객체지향 |
| 토픽(소) | 다형성 |
| 출제 | 모의_2017.04 |
| 유형 | 응용 |
| 번호 | 2 |

## 해설

### 출제 배경 및 의도

GitHub Copilot 등 AI 기반 자동 코드 생성 도구가 대중화되면서 초급 개발자들도 수천 줄의 코드를 몇 분 만에 생성할 수 있게 되었습니다. 하지만 AI가 작성한 코드는 비즈니스 로직이 조금만 복잡해져도 분기문(if-else, switch)을 덕지덕지 붙여 구현하는 경향이 강합니다.

채점관이 '다형성'과 '오버로딩/오버라이딩'을 출제하는 의도는 수험생이 조건문 중심의 스파게티 구조를 다형성 기반의 구조로 정제할 수 있는 아키텍처 체력을 가졌는지 검증하려는 것입니다.

다형성을 명확히 이해해야만 전략 패턴(Strategy Pattern)이나 팩토리 패턴(Factory Pattern)을 실무에 올바르게 투영할 수 있으며, OCP(개방-폐쇄 원칙)의 실현 기반이 됩니다.

### 1. 다형성(Polymorphism) 개요

정 의  • 하나의 객체나 메서드가 여러 가지 다른 형태나 기능을 가질 수 있는 OOP 고유 특성
       - 동일한 이름의 호출(메시지)을 전송하더라도 수신 객체의 실제 타입에 따라
       - 서로 다른 구체적인 행위가 수행되는 능력

```
[정적 다형성]                    [동적 다형성]
  Overloading                    Overriding
  (컴파일 타임 결정)               (런타임 결정)
  Early/Static Binding            Late/Dynamic Binding
  ↓                               ↓
파라미터 개수·타입으로           VMT(가상 메서드 테이블) 포인터로
   메서드를 구별                    실제 인스턴스의 메서드를 찾음
```

- 정적 다형성은 컴파일 시점에 확정되어 성능 우위, 동적 다형성은 런타임 유연성 우위

### 2. Overloading과 Overriding 사례

1) 오버로딩(Overloading) — 결제 처리 도메인 적용

```csharp
public class PaymentProcessor {
    public void Process(int amount) {           // 기본 현금 결제
        Console.WriteLine($"현금 결제: {amount}원");
    }
    public void Process(int amount, string cardNumber) {  // 신용카드 결제
        Console.WriteLine($"카드 결제: {amount}원, 카드: {cardNumber}");
    }
    public void Process(string barcode) {       // 포인트 결제
        Console.WriteLine($"포인트 결제, 바코드: {barcode}");
    }
}
```

- `Process()`라는 하나의 일관된 인터페이스로 가독성을 향상시키고, 메서드 이름 증가를 방지함

2) 오버라이딩(Overriding) — PG사 연동 다형성 구현

```csharp
public abstract class Gateway { public abstract void Authorize(); }

public class TossGateway : Gateway {
    public override void Authorize() { /* Toss API 인증 토큰 발행 */ }
}
public class NaverGateway : Gateway {
    public override void Authorize() { /* Naver 생체인증 검증 */ }
}

public class PaymentService {
    public void Execute(Gateway gateway) {
        gateway.Authorize();  // 런타임에 Toss/Naver 동적 결정 (OCP 준수)
    }
}
```

- PG사가 100개로 늘어나도 `PaymentService` 코드를 단 한 줄도 수정하지 않아도 됨

### 3. Overloading과 Overriding 비교

1) 핵심 비교

| 비교 항목 | 오버로딩 (Overloading) | 오버라이딩 (Overriding) |
|----------|----------------------|----------------------|
| 개념적 본질 | 단일 클래스 내 메서드 중복 정의 | 상속/인터페이스 관계에서 메서드 재정의 |
| 바인딩 시점 | 컴파일 시간 (Compile-time) | 실행 시간 (Runtime) |
| 바인딩 방식 | 정적 바인딩 (Early/Static Binding) | 동적 바인딩 (Late/Dynamic Binding) |
| 상속 여부 | 불필요 (단일 클래스 내 가능) | 필수 (상속 또는 인터페이스 구현) |
| 메서드 이름 | 동일해야 함 | 동일해야 함 |
| 매개 변수 | 반드시 달라야 함 (개수·타입 차이) | 반드시 동일해야 함 |
| 반환 타입 | 무관함 (매개변수만으로 구별) | 동일해야 함 (또는 공변 반환 타입) |
| 이론적 분파 | Ad-hoc 다형성 (임시 다형성) | Subtyping 다형성 (서브타입 다형성) |

- 오버로딩은 동일 인터페이스로 가독성을 향상시키고, 오버라이딩은 OCP 실현의 핵심으로 확장 가능성과 교체 가능성을 동시에 보장함

2) 핵심 메커니즘 — VMT(가상 메서드 테이블)

| 구분 | 설명 | 성능 영향 |
|------|------|---------|
| 컴파일 타임 | 오버로딩 메서드 주소 직접 바인딩 | 오버헤드 없음 |
| 런타임 | VMT 포인터 조회 후 실제 메서드 주소 결정 | 미세 간접 호출 비용 발생 |

- 동적 다형성(오버라이딩)은 OCP 실현의 핵심이나, HFT·임베디드 시스템 등 극한 성능 환경에서는 VMT 오버헤드 최소화를 위한 정적 다형성(템플릿·제네릭) 전략이 필요함.  "끝"

### 실무 제언

**부적절한 오버라이딩이 초래하는 취약한 기반 클래스(Fragile Base Class) 문제**
- **챌린지**: 부모 클래스 내부 동작이 조금만 변경되어도 무분별하게 오버라이딩한 자식 클래스들의 비즈니스 로직이 연쇄적으로 오염되는 '취약한 기반 클래스 문제'가 발생함
- **제언**: 아키텍처 가이드라인에 "상속보다는 조립(Composition over Inheritance)" 원칙을 명시하고, 클래스 직접 상속 대신 인터페이스 + 전략 패턴(Strategy Pattern)을 도입하여 부모-자식 간 물리적 종속을 느슨한 결합으로 전환해야 함

**동적 바인딩의 VMT 오버헤드와 극단적 성능 최적화**
- **챌린지**: 오버라이딩 기반 동적 다형성은 런타임에 VMT 포인터를 통한 간접 호출 비용이 누적되어, 초고속 거래 시스템(HFT)·실시간 임베디드 AI 제어 환경에서는 병목의 원인이 될 수 있음
- **제언**: 극한 성능이 요구되는 임계 영역에서는 C++ 템플릿이나 Rust의 Traits와 같은 '컴파일 타임 제네릭 구조(Static Polymorphism)'를 활용하여 코드 추상성은 유지하면서 런타임 인디렉션 비용을 제거해야 함

**AI 생성 코드의 if-else 남발 구조를 다형성으로 리팩토링**
- **챌린지**: AI 코드 생성 도구는 복잡한 비즈니스 분기를 if-else/switch 문으로 선형 처리하는 경향이 강하여, 요구사항 추가 시마다 기존 코드에 분기가 무한히 증가하는 OCP 위반 구조가 양산됨
- **제언**: AI 생성 코드의 PR(Pull Request) 리뷰 단계에서 다형성 리팩토링 체크리스트를 운영하고, 전략 패턴이나 팩토리 패턴 적용 여부를 필수 검증 게이트로 설정해야 함
