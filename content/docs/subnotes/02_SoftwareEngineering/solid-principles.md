---
title: "객체지향 5대 설계 원칙과 다형성, 의존성 주입"
date: 2026-07-11T11:26:36+09:00
tags: ["소프트웨어공학", "객체지향", "SOLID", "SRP", "OCP", "LSP", "ISP", "DIP", "다형성", "의존성주입", "디자인패턴", "서브노트"]
draft: false
---

# 객체지향 5대 설계 원칙과 다형성, 의존성 주입 서브노트

> **두음 머리에 박기 🧠**
> - **단·개·리·인·의** (SOLID 5대 설계 원칙 국문 매핑: **단**일책임 SRP, **개**방폐쇄 OCP, **리**스코프치환 LSP, **인**터페이스분리 ISP, **의**존역전 DIP)
> - **에스·오·엘·아이·디** (SOLID 영문 앞글자 매핑: **S**RP, **O**CP, **L**SP, **I**SP, **D**IP)
> - **오·오** (다형성 2대 구현: **오**버로딩 Overloading(정적/컴파일타임 바인딩), **오**버라이딩 Overriding(동적/런타임 바인딩))
> - **생·세·메** (의존성 주입(DI) 3가지 방식: **생**성자 주입(권장), **세**터/속성 주입, **메**서드 주입)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **객체지향 설계 5대 원칙 (SOLID), 다형성(Overloading/Overriding), 의존성 주입(DI)** |
| **정의** | 소프트웨어 아키텍처의 유지보수성, 확장성, 재사용성을 극대화하기 위해 클래스 및 컴포넌트 설계 시 준수해야 하는 **5대 객체지향 설계 원칙(단·개·리·인·의)**과, OCP·DIP 실현의 기반이 되는 OOP 고유 특성 **다형성(정적 오버로딩/동적 오버라이딩)**, 그리고 DIP를 실행 단계에서 완성하는 **의존성 주입(DI)**의 3가지 구현 방식 |
| **키워드** | Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion, Overloading/Overriding, DI(생성자/세터/메서드)/IoC |
| **개념도** | **[ OCP와 DIP 원칙을 동시 준수하는 객체 설계 구조 ]**<br>`[ High-Level 클래스 (클라이언트) ] ➔ ─── (추상 의존) ───▶ [ 인터페이스 (추상화 레이어) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (의존 역전 및 상속 실체화)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌───────────────────┴───────────────────┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼` (변경 없이 기능 확장: OCP) &nbsp;&nbsp;&nbsp;`▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ Concrete 구현체 A ]` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ Concrete 구현체 B ]` |
| **구성요소** | 1. **단일 책임 원칙 (SRP)**: 클래스는 하나의 액터(Actor)에 대해서만 책임을 져야 함. 코드 변경의 유일한 이유 제공<br>2. **개방 폐쇄 원칙 (OCP)**: 기존 코드를 수정하지 않고(Closed), 인터페이스 기반 구현체를 추가해 확장(Open) 가능해야 함<br>3. **리스코프 치환 원칙 (LSP)**: 하위 타입 클래스는 언제나 상위 타입 객체를 대체해도 깨지지 않는 계약(사전/사후조건) 충족<br>4. **인터페이스 분리 원칙 (ISP)**: 클라이언트는 사용하지 않는 메서드에 의존하지 않도록 최소 단위로 정밀하게 쪼개어 제공<br>5. **의존 역전 원칙 (DIP)**: 상위 모듈이 하위 구체 클래스에 직접 의존하지 않고, 중간의 인터페이스(추상화)에 의존해야 함<br>6. **다형성**: 하나의 메시지 호출에 수신 객체의 실제 타입에 따라 다른 행위가 수행되는 OOP 특성으로, 오버로딩(단일 클래스 내 메서드 중복정의, 매개변수 개수·타입 차이, 정적/컴파일타임 바인딩)과 오버라이딩(상속/인터페이스 관계의 메서드 재정의, 매개변수·반환타입 동일, 동적/런타임 바인딩·VMT)으로 구현되며 오버라이딩이 OCP 실현의 핵심<br>7. **DI 3가지 방식**: 생성자 주입(객체 생성 시 강제, 불변성 보장, 컴파일타임 검증·순환참조 사전차단, 실무 권장), 세터 주입(생성 후 변경 가능, Null 리스크), 메서드 주입(호출 시마다, 클래스 무상태) |
| **비교** | **개방 폐쇄 원칙 (OCP)**<br>- **초점**: 시스템의 **확장성** 확보 (새로운 기능을 기존 코드 수정 없이 추가할 수 있는 아키텍처 형성)<br>- **수단**: 다형성(Polymorphism), 추상 클래스, 상속 활용<br><br>**의존 역전 원칙 (DIP)**<br>- **초점**: 모듈 간의 **결합도** 감소 (구체화된 객체 간의 하향식 강결합을 상향식 추상화 결합으로 변경)<br>- **수단**: 제어의 역전(IoC), 의존성 주입(DI - 생성자/세터/메서드 주입)<br><br>**오버로딩 (Ad-hoc 다형성) vs 오버라이딩 (Subtyping 다형성)**<br>- 오버로딩: 컴파일 시간 바인딩, 상속 불필요, 매개변수 반드시 다름, 반환타입 무관<br>- 오버라이딩: 실행 시간 바인딩(VMT), 상속/인터페이스 필수, 매개변수·반환타입 동일 |
| **차별화** | **Spring Framework의 DI 컨테이너 결합 및 아키텍처 품질 확보를 위한 SOLID 실무 운용 전략**<br>1. **DIP와 OCP를 보증하는 Spring DI(Dependency Injection)**: 애플리케이션 외부의 스프링 컨테이너가 런타임에 필요한 구체 클래스를 생성하여 주입(의존성 주입)해 줌으로써, 비즈니스 로직 코드가 특정 데이터베이스 액세스 라이브러리 구체 클래스에 의존하는 것을 원천 차단하여 DIP와 OCP를 동시에 달성.<br>2. **상속 오용 방지를 위한 LSP 준수 규칙**: 상속 관계 수립 시 단순 코드 재사용 목적의 무분별한 상속을 금지하고, 부모 클래스의 불변 법칙(Invariant)과 기대 동작을 자식 클래스가 훼손하지 않는지 확인. 만약 상속이 맞지 않다면 **합성 (Composition - 필드로 레퍼런스 유지)** 기법으로 대체하여 취약한 기반 클래스(Fragile Base Class) 문제 예방.<br>3. **클라이언트 맞춤형 ISP 인터페이스 파티셔닝**: 하나의 범용 인터페이스(예: `SmartDevice`)에 출력, 복사, 팩스 기능이 다 묶여 있으면 복사기 클래스는 쓰지도 않는 팩스 메서드를 강제 오버라이딩해야 함. 이를 `Printer`, `Copier`, `Fax` 인터페이스로 쪼개어 다중 상속 구현.<br>4. **생성자 주입 의무화로 순환참조 사전 차단**: Spring 필드 주입(`@Autowired`) 시 발생 가능한 A→B→A 순환 의존을 생성자 주입 표준화로 컨테이너 빌드 시점에 100% 검출하고, DI 컨테이너 등록 시 컴포넌트 생명주기(Singleton/Scoped/Transient)를 명확히 문서화. |
