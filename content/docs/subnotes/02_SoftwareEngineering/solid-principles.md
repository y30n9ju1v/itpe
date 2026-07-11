---
title: "객체지향 5대 설계 원칙"
date: 2026-07-11T11:26:36+09:00
tags: ["소프트웨어공학", "객체지향", "SOLID", "SRP", "OCP", "LSP", "ISP", "DIP", "디자인패턴", "서브노트"]
draft: false
---

# 객체지향 5대 설계 원칙 서브노트

> **두음 머리에 박기 🧠**
> - **단·개·리·인·의** (SOLID 5대 설계 원칙 국문 매핑: **단**일책임 SRP, **개**방폐쇄 OCP, **리**스코프치환 LSP, **인**터페이스분리 ISP, **의**존역전 DIP)
> - **에스·오·엘·아이·디** (SOLID 영문 앞글자 매핑: **S**RP, **O**CP, **L**SP, **I**SP, **D**IP)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **객체지향 설계 5대 원칙 (SOLID Principle)** |
| **정의** | 소프트웨어 아키텍처의 유지보수성, 확장성, 재사용성을 극대화하기 위해 클래스 및 컴포넌트 설계 시 준수해야 하는 **5대 객체지향 설계 원칙(단·개·리·인·의)** |
| **키워드** | Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion, DI/IoC |
| **개념도** | **[ OCP와 DIP 원칙을 동시 준수하는 객체 설계 구조 ]**<br>`[ High-Level 클래스 (클라이언트) ] ➔ ─── (추상 의존) ───▶ [ 인터페이스 (추상화 레이어) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (의존 역전 및 상속 실체화)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`┌───────────────────┴───────────────────┐`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼` (변경 없이 기능 확장: OCP) &nbsp;&nbsp;&nbsp;`▼`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ Concrete 구현체 A ]` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ Concrete 구현체 B ]` |
| **구성요소** | 1. **단일 책임 원칙 (SRP)**: 클래스는 하나의 액터(Actor)에 대해서만 책임을 져야 함. 코드 변경의 유일한 이유 제공<br>2. **개방 폐쇄 원칙 (OCP)**: 기존 코드를 수정하지 않고(Closed), 인터페이스 기반 구현체를 추가해 확장(Open) 가능해야 함<br>3. **리스코프 치환 원칙 (LSP)**: 하위 타입 클래스는 언제나 상위 타입 객체를 대체해도 깨지지 않는 계약(사전/사후조건) 충족<br>4. **인터페이스 분리 원칙 (ISP)**: 클라이언트는 사용하지 않는 메서드에 의존하지 않도록 최소 단위로 정밀하게 쪼개어 제공<br>5. **의존 역전 원칙 (DIP)**: 상위 모듈이 하위 구체 클래스에 직접 의존하지 않고, 중간의 인터페이스(추상화)에 의존해야 함 |
| **비교** | **개방 폐쇄 원칙 (OCP)**<br>- **초점**: 시스템의 **확장성** 확보 (새로운 기능을 기존 코드 수정 없이 추가할 수 있는 아키텍처 형성)<br>- **수단**: 다형성(Polymorphism), 추상 클래스, 상속 활용<br><br>**의존 역전 원칙 (DIP)**<br>- **초점**: 모듈 간의 **결합도** 감소 (구체화된 객체 간의 하향식 강결합을 상향식 추상화 결합으로 변경)<br>- **수단**: 제어의 역전(IoC), 의존성 주입(DI - 생성자/필드 주입) |
| **차별화** | **Spring Framework의 DI 컨테이너 결합 및 아키텍처 품질 확보를 위한 SOLID 실무 운용 전략**<br>1. **DIP와 OCP를 보증하는 Spring DI(Dependency Injection)**: 애플리케이션 외부의 스프링 컨테이너가 런타임에 필요한 구체 클래스를 생성하여 주입(의존성 주입)해 줌으로써, 비즈니스 로직 코드가 특정 데이터베이스 액세스 라이브러리 구체 클래스에 의존하는 것을 원천 차단하여 DIP와 OCP를 동시에 달성.<br>2. **상속 오용 방지를 위한 LSP 준수 규칙**: 상속 관계 수립 시 단순 코드 재사용 목적의 무분별한 상속을 금지하고, 부모 클래스의 불변 법칙(Invariant)과 기대 동작을 자식 클래스가 훼손하지 않는지 확인. 만약 상속이 맞지 않다면 **합성 (Composition - 필드로 레퍼런스 유지)** 기법으로 대체.<br>3. **클라이언트 맞춤형 ISP 인터페이스 파티셔닝**: 하나의 범용 인터페이스(예: `SmartDevice`)에 출력, 복사, 팩스 기능이 다 묶여 있으면 복사기 클래스는 쓰지도 않는 팩스 메서드를 강제 오버라이딩해야 함. 이를 `Printer`, `Copier`, `Fax` 인터페이스로 쪼개어 다중 상속 구현. |
