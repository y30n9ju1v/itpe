---
title: "UML 및 디자인 패턴"
date: 2026-07-11T11:14:19+09:00
tags: ["소프트웨어공학", "UML", "디자인패턴", "SOLID", "프록시패턴", "서브노트"]
draft: false
---

# 객체지향 설계(SOLID), UML 및 디자인 패턴 서브노트

> **두음 머리에 박기 🧠**
> - **S·O·L·I·D** (객체지향 5대 원칙: **S**RP 단일 책임, **O**CP 개방 폐쇄, **L**SP 리스코프 치환, **I**SP 인터페이스 분리, **D**IP 의존 역전)
> - **클·객·컴·배·패·프** (UML 구조 다이어그램: **클**래스, **객**체, **컴**포넌트, **배**치, **패**키지, **프**로필)
> - **유·시·활·상** (UML 핵심 행위 다이어그램: **유**스케이스, **시**퀀스, **활**동, **상**태)
> - **생·구·행** (GoF 디자인 패턴 3대 분류: **생**성 패턴, **구**조 패턴, **행**위 패턴)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **객체지향 설계 원칙 (SOLID), UML 모델링 및 GoF 디자인 패턴** |
| **정의** | 고품질 객체지향 소프트웨어 설계를 위한 **5대 원칙(SOLID)**과, 시스템 구조 및 동적 행위를 시각화하는 표준 모델링 언어 **UML**, 그리고 반복되는 설계 문제를 해결하는 **GoF 디자인 패턴(생·구·행)**의 종합적 소프트웨어 설계 기술 |
| **키워드** | SOLID, 정적/동적 UML, 생·구·행 디자인 패턴, 프록시 패턴, DI/IoC, Spring AOP |
| **개념도** | `[ 클라이언트 ]` ➔ `[ 프록시 (대리자) ]` ── 인터페이스 동일 구현<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (권한 체크 / 로깅 / 캐싱 부가 기능 수행)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 접근 제어`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 실제 대상 객체 (Real Subject) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 구조 패턴 중 '프록시 패턴(Proxy Pattern)' 예시 ]` |
| **구성요소** | 1. **SOLID 5대 원칙**: SRP(단일 책임), OCP(확장 개방/변경 폐쇄), LSP(서브타입 치환성), ISP(인터페이스 분리), DIP(추상화 의존)<br>2. **정적 UML**: 클래스(정적 관계), 컴포넌트(구현 모듈 단위), 배치(하드웨어 토폴로지) 다이어그램<br>3. **동적 UML**: 유스케이스(기능적 요구사항), 시퀀스(시간별 메시지 흐름), 상태(객체 상태 전이) 다이어그램<br>4. **GoF 생성 패턴 (5개)**: Singleton, Factory Method, Abstract Factory, Builder, Prototype<br>5. **GoF 구조 패턴 (7개)**: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy<br>6. **GoF 행위 패턴 (11개)**: Strategy, Observer, Template Method, State, Command, Iterator 등<br>7. **프록시 패턴 4대 유형**: 가상 프록시(Virtual - 생성 비용 큰 객체 지연 초기화, 예: 이미지 로딩), 보호 프록시(Protection - 접근 권한 제어), 원격 프록시(Remote - 다른 주소 공간 객체 대리, 예: gRPC Stub), 캐싱 프록시(Caching - 결과 캐싱으로 성능 향상) |
| **비교** | **클래스 다이어그램 (정적)**<br>- **초점**: 시스템의 정적 구조 및 관계 시각화<br>- **요소**: 클래스(속성, 메서드) 및 관계선(일반화, 연관, 의존, 합성, 집합)<br><br>**시퀀스 다이어그램 (동적)**<br>- **초점**: 객체 간 메시지 상호작용의 시간 순서적 표현<br>- **요소**: 생명선(Lifeline), 활성 객체(Activation Bar), 메시지(동기, 비동기, 반환)<br><br>**프록시 패턴 (Proxy)**<br>- **목적**: 접근 제어가 주 목적 (동일 인터페이스, 생명주기 관리)<br><br>**데코레이터 패턴 (Decorator)**<br>- **목적**: 기능 추가가 주 목적 (동적 기능 조합) |
| **차별화** | **SOLID 준수를 위한 Spring IoC 및 Proxy 패턴 기반 AOP 설계 전략**<br>1. **DIP와 OCP의 구현체인 DI/IoC**: 구체적인 객체 생성을 코드 내부가 아닌 Spring 컨테이너에 위임하여 런타임에 결합도(Dependency)를 동적으로 주입하여 유연성 극대화.<br>2. **Proxy 패턴 기반 Cross-cutting Concern의 분리**: 트랜잭션(@Transactional), 보안, 공통 로그 등을 프록시 객체가 동적으로 처리하게 하고, 원본 비즈니스 로직(Target)은 오직 본연의 업무 책임(SRP)에만 집중하도록 Spring AOP 설계 적용.<br>3. **인터페이스 기반 다형성(Polymorphism) 극대화**: 클래스 간 직접 의존을 금지하고, Java의 Interface 또는 Kotlin/Swift의 Protocol을 중간 매개체로 설정하여 구현체의 교체를 자유롭게 설계. |
