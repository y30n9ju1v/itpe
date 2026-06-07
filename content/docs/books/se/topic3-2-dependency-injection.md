---
title: "의존성 역전 원칙(DIP)과 의존성 주입(DI)"
date: 2026-06-07T17:47:26+09:00
tags: ["소프트웨어공학", "핵토200", "객체지향", "의존성주입", "DIP", "DI"]
topic_no1: 3
topic_no2: 2
topic_large: "객체지향"
topic_small: "의존성 주입"
exam_ref: "121회"
exam_type: "관"
question_no: 2
---

## 문제

소프트웨어 재사용성과 유지보수 향상을 위하여 객체지향 설계 5대 원칙을 적용하고 있다. 다음에 대하여 답하시오.

- 가. 의존성 역전 원칙(Dependency Inversion Principle)을 설명하시오.
- 나. 의존성 주입(Dependency Injection)을 구현하는 3가지 방식을 설명하고 각 방식별 아래의 조건을 고려하여 구현 예시를 작성하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 객체지향 |
| 토픽(소) | 의존성 주입 |
| 출제 | 121회 |
| 유형 | 관 |
| 번호 | 2 |

## 해설

> **제어권을 넘겨 아키텍처를 자유롭게 하라**  
> 의존성 역전 원칙(DIP)과 의존성 주입(DI)

객체지향 설계에서 코드가 서로 단단히 묶여 있는 강한 결합(Tight Coupling)은 아키텍처의 유연성을 갉아먹는 가장 무서운 암세포와 같습니다. 클래스 A를 고쳤을 뿐인데 아무 관계 없어 보이던 클래스 B와 C에서 빌드 에러가 터지는 현상은 현업에서 매일같이 벌어지는 비극입니다. 이 사슬을 끊어내기 위해 탄생한 객체지향 설계의 정점이 바로 의존성 역전 원칙(DIP)이며, 이를 코드로 구체화하는 실전 기술이 의존성 주입(DI)입니다.

### 1. 출제 배경 및 의도

많은 개발자가 프레임워크(Spring, NestJS, .NET Core 등)가 제공하는 `@Autowired`나 DI 컨테이너 기능을 관성적으로 사용합니다. 하지만 프레임워크 뒤에 숨겨진 객체지향 설계의 본질적 메커니즘을 이해하지 못하면, 요구사항이 급변하는 복잡한 엔터프라이즈 환경에서 결코 좋은 구조를 설계할 수 없습니다.

채점관이 DIP와 DI의 구체적인 소스코드 레벨 구현을 요구하는 의도는 컴포넌트 간의 결합도를 낮춰 소프트웨어의 재사용성과 유지보수성을 극대화할 수 있는 '실천적 아키텍트'인지 검증하려는 것입니다. 헥사고날 아키텍처(Hexagonal Architecture)나 클린 아키텍처(Clean Architecture)의 핵심이 바로 '외부 기술 사양(DB, UI 등)에 비즈니스 로직이 종속되지 않도록 의존성을 역전시키는 것'이기 때문에 필수 관문으로 출제됩니다.

### 2. 가. 의존성 역전 원칙(DIP)의 본질

#### 1) DIP의 정의

의존성 역전 원칙(DIP)은 "의존 관계를 맺을 때 구체적이고 자주 변화하는 것보다, 추상적이고 거의 변화가 없는 개념(인터페이스 또는 추상 클래스)에 의존해야 한다"는 객체지향 설계 원칙(SOLID)의 정점입니다.

#### 2) 전통적 구조와 DIP 구조의 메커니즘 변환

```text
[DIP 적용 전 — 하위 종속 구조]
자동차 ──▶ 스노우타이어 (구체 클래스)

문제점: 봄이 되어 일반타이어로 교체해야 한다면, 상위 모듈인 자동차 클래스의
        내부 소스코드를 직접 수정해야 하므로 결합도가 매우 높음

[DIP 적용 후 — 추상화 매개 구조]
자동차 ──▶ <<Interface>> 타이어 ◀── 스노우타이어
                                  ◀── 일반타이어

해결책: 자동차와 구체적인 타이어 클래스 모두가 상위 추상 개념인 타이어 인터페이스를 바라보게
        함. 의존의 방향이 하위에서 상위로 '역전(Inversion)'됨
```

### 3. 나. 의존성 주입(DI)의 3가지 방식 및 구현 예시

DIP가 추상화에 의존하라는 '설계적 지향점'이라면, 의존성 주입(DI)은 필요한 객체를 스스로 생성하지 않고 외부 컨테이너로부터 주입받아 DIP를 완성하는 '실행 전술'입니다.

**[출제 조건]** `ViewModel` 클래스가 메시지 창 출력을 담당하는 추상 인터페이스 `IMessageBoxProvider`에 의존하고, 구체적인 구현체로 `WpfMessageBoxProvider`를 사용하는 구조를 기반으로 3가지 DI 방식을 구현합니다.

```text
┌─────────────────────────┐
│        ViewModel        │
└─────────────────────────┘
              │
              ▼ (의존)
┌─────────────────────────┐
│ <<interface>>           │
│ IMessageBoxProvider     │
└─────────────────────────┘
              ▲
 ┌────────────┴───────────────┐
 │                            │
┌──────────────────────┐  ┌───────────────────────┐
│WpfMessageBoxProvider │  │CustomMessageBoxProvider│
└──────────────────────┘  └───────────────────────┘
```

#### 1) 생성자 주입 (Constructor Injection)

- **개념**: 객체를 생성하는 시점에 생성자의 매개변수를 통해 의존 객체를 전달하는 방식
- **특징**: 객체 생성 시 의존성이 완벽하게 채워짐을 보장. `NullPointerException`을 컴파일 시점에 원천 차단. **현대 아키텍처에서 가장 권장되는 방식**

```csharp
// 1. 추상 인터페이스 정의
public interface IMessageBoxProvider {
    void Show(string message);
}

// 2. 구체적인 하위 기술 구현체
public class WpfMessageBoxProvider : IMessageBoxProvider {
    public void Show(string message) { /* WPF 엔진을 이용한 알림창 팝업 */ }
}

// 3. 생성자 주입을 적용한 상위 클래스
public class ViewModel {
    private readonly IMessageBoxProvider _messageBoxProvider;  // 불변성 보장

    public ViewModel(IMessageBoxProvider messageBoxProvider) {
        this._messageBoxProvider = messageBoxProvider;
    }

    public void Execute() {
        _messageBoxProvider.Show("생성자 주입 완료!");
    }
}

// [실행] 외부(조립기/컨테이너)에서 객체를 생성하며 주입
var vm = new ViewModel(new WpfMessageBoxProvider());
```

#### 2) 속성/수정자 주입 (Property / Setter Injection)

- **개념**: 객체를 먼저 생성한 후, 외부에서 공개된 Setter 메서드나 프로퍼티(Property)를 통해 의존 객체를 주입하는 방식
- **특징**: 런타임에 동적으로 변경해야 할 때 유연하게 대처 가능. 단, 의존성 주입이 완료되지 않은 상태에서도 객체가 생성될 수 있어 불완전한 상태로 메서드가 호출될 리스크 존재

```csharp
public class ViewModel {
    // 런타임에 외부에서 자유롭게 변경할 수 있도록 public 프로퍼티로 노출
    public IMessageBoxProvider MessageBoxProvider { get; set; }

    public void Execute() {
        if (MessageBoxProvider == null) {
            throw new InvalidOperationException("의존성이 주입되지 않았습니다.");
        }
        MessageBoxProvider.Show("속성 주입 완료!");
    }
}

// [실행] 객체 생성 후 필요한 시점에 속성으로 주입
var vm = new ViewModel();
vm.MessageBoxProvider = new WpfMessageBoxProvider();
```

#### 3) 메서드 주입 (Method Injection)

- **개념**: 클래스 전반이 특정 객체에 의존하는 것이 아니라, 특정 메서드가 실행될 때만 매개변수를 통해 의존 객체를 전달받는 방식
- **특징**: 클래스 인스턴스 자체는 의존 객체를 유지할 필요가 없어 메모리 효율적. 특정 메서드 하나가 상황에 따라 각기 다른 구현체를 소화해야 할 때 유리

```csharp
public class ViewModel {
    // 클래스 내부에는 IMessageBoxProvider 멤버 변수가 없음

    // 메서드가 호출되는 시점에만 파라미터로 주입받아 사용
    public void DisplayLog(IMessageBoxProvider messageBoxProvider, string logData) {
        messageBoxProvider.Show($"[Log] {logData}");
    }
}

// [실행] 메서드를 호출하는 시점에 구현체를 파라미터로 전달
var vm = new ViewModel();
vm.DisplayLog(new WpfMessageBoxProvider(), "시스템 정상 가동");
```

### 4. 맥락과 비교

| 비교 항목 | 생성자 주입 (Constructor) | 속성/수정자 주입 (Setter) | 메서드 주입 (Method) |
|----------|-------------------------|-------------------------|-------------------|
| 주입 시점 | 객체 생성 단계에서 강제됨 | 객체 생성 이후 필요한 시점 | 메서드 호출 단계마다 |
| 객체의 불변성 | 보장 가능 (`readonly`/`final` 가능) | 불가능 (언제든 가변적으로 변경됨) | 불가능 (클래스가 상태를 가지지 않음) |
| 의존성 누락 위험 | 컴파일 시점 검증 (안전함) | 런타임 NullReferenceException 리스크 | 호출 시점에 휴먼 에러 가능성 존재 |
| 순환 참조 통제 | 사전 차단 (빌드 단계에서 오류 발생) | 통제 어려움 (런타임에 에러 확인) | 발생 가능성 극히 낮음 |
| 주요 용도 | 핵심 비즈니스 컴포넌트 (90% 이상 권장) | 선택적 확장, 테스트용 Mock 객체 교체 | 메서드 단위의 일시적 다형성 활용 |

### 5. 실무 제언

**순환 참조(Circular Dependency) 예방을 위한 생성자 주입의 의무화**

- **챌린지**: 클래스 A가 클래스 B를 의존하고, 클래스 B가 다시 클래스 A를 의존하는 순환 구조가 발생하면 Spring의 필드 주입(`@Autowired`) 방식에서는 앱이 구동되다가 특정 메서드 호출 시점에 스택 오버플로우(Stack Overflow)가 발생하며 서버가 다운되는 심각한 장애로 이어졌습니다.
- **제언**: 프로젝트 표준 코드 컨벤션에 생성자 주입을 의무화해야 합니다. 생성자 주입을 사용하면 애플리케이션 구동(컨테이너 빌드) 시점에 "Circular Dependency" 에러를 내며 서버 실행 자체가 차단되므로, 아키텍처의 구조적 결함을 개발 단계에서 100% 잡아낼 수 있습니다.

**테스트 용이성(Testability) 확보와 기술 부채 해소**

- **챌린지**: DIP와 DI가 부실한 코드는 데이터베이스나 외부 API 서버가 다운되었을 때 단독으로 단위 테스트(Unit Test)를 수행하는 것이 불가능합니다. 테스트를 위해 실제 DB 환경까지 모두 세팅해야 하므로 테스트 비용이 폭증하고, 결국 테스트를 기피하게 되어 품질 부채가 누적됩니다.
- **제언**: DIP 원칙에 따라 모든 외부 기술 영역을 인터페이스로 격리하고 DI 구조를 갖추어야 합니다. 이렇게 하면 테스트 환경에서 실제 구현체 대신 `MockMessageBoxProvider`나 `NullMessageBoxProvider`를 생성자를 통해 단 한 줄의 코드로 갈아끼울 수 있어, 외부 환경과 무관하게 0.1초 만에 완료되는 초고속 자동화 테스트 환경을 구축할 수 있습니다.
