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

### 출제 배경 및 의도

많은 개발자가 프레임워크(Spring, NestJS, .NET Core 등)가 제공하는 `@Autowired`나 DI 컨테이너 기능을 관성적으로 사용합니다. 하지만 프레임워크 뒤에 숨겨진 객체지향 설계의 본질적 메커니즘을 이해하지 못하면, 요구사항이 급변하는 복잡한 엔터프라이즈 환경에서 결코 좋은 구조를 설계할 수 없습니다.

채점관이 DIP와 DI의 구체적인 소스코드 레벨 구현을 요구하는 의도는 컴포넌트 간의 결합도를 낮춰 소프트웨어의 재사용성과 유지보수성을 극대화할 수 있는 '실천적 아키텍트'인지 검증하려는 것입니다.

헥사고날 아키텍처(Hexagonal Architecture)와 클린 아키텍처(Clean Architecture)의 핵심이 바로 '외부 기술 사양(DB, UI 등)에 비즈니스 로직이 종속되지 않도록 의존성을 역전시키는 것'이기 때문에 필수 관문으로 출제됩니다.

### 1. 의존성 역전 원칙(DIP) 개요

정 의  • 의존 관계를 맺을 때 구체적·가변적인 것보다
       - 추상적·불변적인 인터페이스 또는 추상 클래스에 의존해야 한다는 SOLID의 정점 원칙

```
[DIP 적용 전 — 하위 종속 구조]
자동차 ──▶ 스노우타이어 (구체 클래스)
→ 문제: 타이어 교체 시 자동차 클래스 소스코드 직접 수정 필요 (높은 결합도)

[DIP 적용 후 — 추상화 매개 구조]
자동차 ──▶ <<Interface>> 타이어 ◀── 스노우타이어
                                  ◀── 일반타이어
→ 해결: 의존 방향이 하위→상위로 '역전(Inversion)', 자동차 코드 수정 없이 타이어 교체 가능
```

- DIP가 '설계적 지향점'이라면, 의존성 주입(DI)은 외부 컨테이너로부터 주입받아 DIP를 완성하는 '실행 전술'

### 2. 의존성 주입(DI) 3가지 방식

1) DI 구조 및 방식별 비교

```
┌─────────────────────────┐
│        ViewModel        │
└─────────────────────────┘
              │ (의존)
              ▼
┌─────────────────────────┐
│ <<interface>>           │
│ IMessageBoxProvider     │
└─────────────────────────┘
              ▲
 ┌────────────┴────────────┐
 │                         │
┌──────────────────────┐  ┌───────────────────────┐
│WpfMessageBoxProvider │  │CustomMessageBoxProvider│
└──────────────────────┘  └───────────────────────┘
```

| 비교 항목 | 생성자 주입 (Constructor) | 속성/수정자 주입 (Setter) | 메서드 주입 (Method) |
|----------|-------------------------|-------------------------|-------------------|
| 주입 시점 | 객체 생성 단계에서 강제 | 객체 생성 이후 필요 시점 | 메서드 호출 단계마다 |
| 객체 불변성 | 보장 가능 (readonly/final) | 불가능 (언제든 가변) | 불가능 (클래스 무상태) |
| 의존성 누락 위험 | 컴파일 시점 검증 (안전) | 런타임 NullReference 리스크 | 호출 시점 휴먼 에러 가능 |
| 순환 참조 통제 | 빌드 단계 사전 차단 | 런타임 에러 확인 | 발생 가능성 극히 낮음 |
| 주요 용도 | 핵심 비즈니스 컴포넌트 (권장) | 선택적 확장, Mock 객체 교체 | 메서드 단위 일시적 다형성 |

- 3가지 주입 방식 중 생성자 주입이 불변성 보장, 컴파일 타임 검증, 순환 참조 사전 차단 측면에서 가장 안전하여 실무 표준으로 권장됨

2) 생성자 주입 (Constructor Injection) — 가장 권장되는 방식

```csharp
public interface IMessageBoxProvider { void Show(string message); }

public class WpfMessageBoxProvider : IMessageBoxProvider {
    public void Show(string message) { /* WPF 알림창 팝업 */ }
}

public class ViewModel {
    private readonly IMessageBoxProvider _messageBoxProvider;  // 불변성 보장

    public ViewModel(IMessageBoxProvider messageBoxProvider) {
        this._messageBoxProvider = messageBoxProvider;
    }
    public void Execute() { _messageBoxProvider.Show("생성자 주입 완료!"); }
}
// [실행] 외부(DI 컨테이너)에서 생성 시점에 주입
var vm = new ViewModel(new WpfMessageBoxProvider());
```

3) 속성 주입(Setter Injection) 및 메서드 주입(Method Injection)

| 구분 | 주입 시점 | 특징 | 코드 패턴 |
|------|---------|------|----------|
| Setter 주입 | 객체 생성 이후 | 런타임 동적 변경 가능, Null 체크 필수 | `vm.MessageBoxProvider = new WpfProvider();` |
| Method 주입 | 메서드 호출 시 | 클래스 내 멤버 변수 없음, 메모리 효율 | `vm.DisplayLog(new WpfProvider(), "로그데이터");` |

- Setter·Method 주입은 선택적 의존성이나 Mock 교체 시 활용하되, 핵심 비즈니스 컴포넌트에는 생성자 주입을 원칙으로 해야 함

### 3. DI와 Clean Architecture 연계

1) Hexagonal Architecture에서의 DIP 실현

| 구분 | 계층 | DIP 적용 |
|------|------|---------|
| 도메인(Core) | 비즈니스 로직 | 인터페이스(Port) 정의, 외부 기술 무의존 |
| 어댑터(Adapter) | 기술 구현체 | Port 인터페이스를 구현하는 Adapter 작성 |
| DI 컨테이너 | 조립기(Assembler) | 런타임에 Port와 Adapter를 연결·주입 |

- DIP와 DI가 결합된 Clean Architecture는 DB·UI·외부 API 등 기술 변경 시 비즈니스 로직을 전혀 수정하지 않아도 되는 '기술 무관성(Technology Agnostic)' 달성이 핵심 목표임.  "끝"

### 실무 제언

**순환 참조(Circular Dependency) 예방을 위한 생성자 주입 의무화**
- **챌린지**: Spring의 필드 주입(`@Autowired`) 방식에서 A→B→A 순환 의존 구조 발생 시, 앱 구동 중 특정 메서드 호출 시점에 스택 오버플로우가 발생하여 서버가 다운되는 치명적 장애로 이어짐
- **제언**: 프로젝트 표준 컨벤션에 생성자 주입을 의무화해야 함. 생성자 주입은 컨테이너 빌드 시점에 "Circular Dependency" 에러로 서버 실행 자체를 차단하여 구조적 결함을 개발 단계에서 100% 검출 가능

**테스트 용이성(Testability) 확보와 기술 부채 해소**
- **챌린지**: DIP·DI가 부실한 코드는 DB·외부 API 서버가 없으면 단위 테스트 자체가 불가능하여, 테스트 비용 폭증 → 테스트 기피 → 품질 부채 누적의 악순환이 반복됨
- **제언**: DIP 원칙에 따라 모든 외부 기술 영역을 인터페이스로 격리하고 DI 구조를 갖추면, 테스트 환경에서 `MockMessageBoxProvider`를 생성자 한 줄로 갈아끼워 외부 환경 무관 0.1초 단위의 고속 자동화 테스트 체계를 구축할 수 있음

**DI 컨테이너 남용으로 인한 블랙박스화 경계**
- **챌린지**: Spring·.NET Core 등 DI 컨테이너에 과도하게 의존하면, 객체의 생성과 소멸 주기를 개발자가 파악하지 못하는 블랙박스화가 발생하여 메모리 누수·스코프 충돌 장애가 발생함
- **제언**: DI 컨테이너 등록 시 각 컴포넌트의 생명주기(Singleton, Scoped, Transient)를 명확히 정의하고, 팀 전체가 공유하는 의존성 등록 가이드라인 문서를 유지·관리해야 함
