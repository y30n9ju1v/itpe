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

> **하나의 이름, 다양한 얼굴**  
> 다형성(Polymorphism)과 유연한 인터페이스의 비밀

소프트웨어가 외부의 변경 사항에 유연하게 대처하려면 코드의 한 파트가 수정되었을 때 다른 파트가 도미노처럼 무너지지 않아야 합니다. 이를 위해 객체지향 패러다임이 제시한 핵심 열쇠가 바로 다형성(Polymorphism)입니다. 다형성은 인터페이스를 고정함으로써 호출하는 측의 코드를 보호하고, 내부 구현체는 자유롭게 교체할 수 있도록 만드는 핵심 메커니즘입니다.

### 1. 출제 배경 및 의도

2026년 현재, GitHub Copilot 등 AI 기반 자동 코드 생성 도구가 대중화되면서 초급 개발자들도 수천 줄의 코드를 몇 분 만에 찍어낼 수 있게 되었습니다. 하지만 AI가 작성한 코드는 비즈니스 로직이 조금만 복잡해져도 분기문(if-else, switch)을 덕지덕지 붙여 구현하는 경향이 강합니다.

채점관이 '다형성'과 '오버로딩/오버라이딩'을 출제하는 의도는 수험생이 조건문 중심의 스파게티 구조를 다형성 기반의 구조로 정제할 수 있는 아키텍처 체력을 가졌는지 검증하려는 것입니다. 다형성을 명확히 이해해야만 전략 패턴(Strategy Pattern)이나 팩토리 패턴(Factory Pattern)을 실무에 올바르게 투영할 수 있습니다.

### 2. 가. 다형성(Polymorphism)의 개념과 메커니즘

#### 1) 다형성의 정의

다형성은 "하나의 객체나 메서드가 여러 가지 다른 형태나 기능을 가질 수 있는 객체지향의 고유 특성"을 의미합니다. 동일한 이름의 호출(메시지)을 전송하더라도, 그 메시지를 수신하는 객체의 실제 타입에 따라 서로 다른 구체적인 행위가 수행되는 능력입니다.

#### 2) 정적 다형성과 동적 다형성의 작동 메커니즘

다형성은 실행 시간(Runtime)에 결정되느냐, 컴파일 시간(Compile-time)에 결정되느냐에 따라 두 가지로 분류됩니다.

**정적 다형성 (Static Polymorphism)**
- **메커니즘**: 컴파일러가 소스코드를 분석하여 호출할 메서드를 컴파일 시점에 미리 확정
- **연결 방식**: 조기 바인딩(Early Binding) / 정적 바인딩(Static Binding)
- **대표 기술**: 오버로딩(Overloading), 제네릭(Generics)

**동적 다형성 (Dynamic Polymorphism)**
- **메커니즘**: 부모 타입의 참조 변수로 자식 객체를 가리킬 때, 실제 메서드를 런타임에 객체의 실제 인스턴스를 확인하여 결정
- **연결 방식**: 지연 바인딩(Late Binding) / 동적 바인딩(Dynamic Binding)
- **대표 기술**: 오버라이딩(Overriding), 인터페이스 구현체 교체
- **핵심 도구**: 가상 메서드 테이블(VMT: Virtual Method Table)을 내부적으로 참조하여 작동

### 3. 나. 사례 기반한 Overloading과 Overriding

전자상거래 시스템의 '결제 서비스(PaymentService)' 도메인을 가상의 비즈니스 시나리오로 삼아 소스코드 레벨 사례를 살펴보겠습니다.

#### 1) 오버로딩(Overloading) — "하나의 클래스 안에서 결제 수단 다양화"

오버로딩은 한 클래스 내에서 동일한 메서드 이름을 사용하되, 매개변수의 타입이나 개수를 다르게 하여 여러 개를 정의하는 기법입니다.

```csharp
public class PaymentProcessor {
    // 사례 A: 기본 결제 (금액만 입력)
    public void Process(int amount) {
        Console.WriteLine($"기본 현금 결제 진행: {amount}원");
    }

    // 사례 B: 파라미터 개수 확장 (신용카드 결제)
    public void Process(int amount, string cardNumber) {
        Console.WriteLine($"신용카드 결제 진행: {amount}원, 카드번호: {cardNumber}");
    }

    // 사례 C: 파라미터 타입 변환 (포인트 결제)
    public void Process(string barcode) {
        Console.WriteLine($"멤버십 포인트 결제 진행, 바코드 식별: {barcode}");
    }
}
```

개발자는 결제 방식을 바꿀 때마다 `ProcessCash()`, `ProcessCard()`, `ProcessPoint()`처럼 메서드 이름을 새로 만들 필요가 없습니다. 오직 `Process()`라는 하나의 일관된 인터페이스로 가독성을 대폭 향상시킵니다.

#### 2) 오버라이딩(Overriding) — "상속 관계 기반의 결제 다형성 구현"

오버라이딩은 부모 클래스에 정의된 메서드를 자식 클래스에서 자신의 비즈니스 규칙에 맞게 재정의하는 기법입니다.

```csharp
// 부모 추상 클래스 정의
public abstract class Gateway {
    public abstract void Authorize();
}

// 자식 클래스 A: 토스페이먼츠 연동
public class TossGateway : Gateway {
    public override void Authorize() {
        Console.WriteLine("Toss API 서버와 커넥션 연결 후 인증 토큰 발행");
    }
}

// 자식 클래스 B: 네이버페이 연동
public class NaverGateway : Gateway {
    public override void Authorize() {
        Console.WriteLine("Naver 자사 보안 모듈 구동 및 2차 생체인증 검증");
    }
}

// 다형성 실행 메커니즘을 적용한 비즈니스 오케스트레이터
public class PaymentService {
    public void Execute(Gateway gateway) {
        // 주입된 gateway가 Toss인지 Naver인지에 따라 동적으로 결정됨
        gateway.Authorize();
    }
}
```

`PaymentService` 클래스는 연동하는 PG사가 100개로 늘어나도 소스코드를 단 한 줄도 수정하지 않습니다(OCP 준수). 새로운 PG사는 `Gateway`를 상속받아 `Authorize()`를 오버라이딩한 구현체만 만들면 됩니다.

### 4. 다. Overloading과 Overriding의 비교

| 비교 항목 | 오버로딩 (Overloading) | 오버라이딩 (Overriding) |
|----------|----------------------|----------------------|
| 개념적 본질 | 단일 클래스 내 메서드 중복 정의 | 상속/인터페이스 관계에서 메서드 재정의 |
| 바인딩 시점 | 컴파일 시간 (Compile-time) | 실행 시간 (Runtime) |
| 바인딩 방식 | 정적 바인딩 (Early / Static Binding) | 동적 바인딩 (Late / Dynamic Binding) |
| 상속 여부 | 상속 관계 불필요 (단일 클래스 내 가능) | 필수적으로 상속 또는 인터페이스 구현 필요 |
| 메서드 이름 | 반드시 동일해야 함 | 반드시 동일해야 함 |
| 매개 변수 | 반드시 달라야 함 (개수나 타입의 차이) | 반드시 동일해야 함 (개수, 타입, 순서 모두 일치) |
| 반환 타입 | 무관함 (매개변수가 같다면 반환 타입만으론 구별 불가) | 반드시 동일해야 함 (또는 공변 반환 타입) |
| 이론적 분파 | Ad-hoc 다형성 (임시 다형성) | Subtyping 다형성 (서브타입 다형성) |

### 5. 실무 제언

**부적절한 오버라이딩이 초래하는 '상속의 함정(Fragile Base Class)'**

- **챌린지**: 오버라이딩은 강력하지만 부모 클래스와 자식 클래스 간에 강한 결합도를 형성합니다. 부모 클래스의 내부 동작 메커니즘이 조금만 변경되어도 이를 상속받아 무분별하게 오버라이딩한 수많은 자식 클래스의 비즈니스 로직이 한순간에 오염되는 '취약한 기반 클래스 문제(Fragile Base Class Problem)'가 발생합니다.
- **제언**: 실무 아키텍처 가이드라인에 "상속보다는 조립(Composition over Inheritance)" 원칙을 강조해야 합니다. 클래스 자체를 상속받아 오버라이딩하기보다는 인터페이스를 설계하고 전략 패턴을 도입하여 부모-자식 간의 물리적 종속 관계를 느슨한 결합으로 전환해야 합니다.

**동적 바인딩의 VMT 오버헤드와 극단적 성능 최적화**

- **챌린지**: 오버라이딩 기반의 동적 다형성은 런타임에 가상 메서드 테이블(VMT) 포인터를 타고 들어가 실제 주소를 찾는 연산을 수행하므로, 일반적인 메서드 호출에 비해 미세한 런타임 오버헤드가 발생합니다. 초고속 거래 시스템(HFT)이나 실시간 임베디드 AI 제어 환경에서는 이 지연이 누적되어 병목의 원인이 될 수 있습니다.
- **제언**: 극한 성능 최적화가 요구되는 임계 영역에서는 동적 오버라이딩 대신 C++의 템플릿 기법이나 Rust의 Traits 패턴과 같은 '컴파일 타임 제네릭 구조(Static Polymorphism)'를 취해야 합니다. 코드의 추상성은 유지하면서 런타임 인디렉션(Indirection) 비용을 제로화하는 하이브리드 설계 전략이 필요합니다.
