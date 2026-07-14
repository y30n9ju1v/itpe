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
| **구성요소** | 1. **SRP(단일책임)**: 클래스 = 액터(Actor) 1개 책임 → 변경사유 유일화<br>2. **OCP(개방폐쇄)**: 기존코드 수정無(Closed) + 인터페이스구현체 추가확장(Open)<br>3. **LSP(리스코프치환)**: 하위타입 → 상위타입 대체해도 계약(사전/사후조건) 유지<br>4. **ISP(인터페이스분리)**: 클라이언트 → 미사용 메서드 비의존, 최소단위 분할제공<br>5. **DIP(의존역전)**: 상위모듈 → 하위구체클래스 직접의존 금지, 인터페이스(추상화) 경유<br>6. **다형성**: 동일메시지 → 수신객체 실제타입別 다른행위. 오버로딩(동일클래스 내 중복정의, 매개변수 개수/타입差, 정적/컴파일타임 바인딩) vs 오버라이딩(상속/인터페이스 재정의, 매개변수/반환타입 동일, 동적/런타임 바인딩·VMT, OCP핵심)<br>7. **DI 3방식**: 생성자주입(생성 시 강제, 불변성·컴파일타임검증·순환참조 차단, 실무권장) / 세터주입(생성후 변경가능, Null리스크) / 메서드주입(호출마다, 무상태) |
| **비교** | **OCP (개방폐쇄)**<br>- 초점: **확장성** 확보 (기존코드 수정無 → 기능추가)<br>- 수단: 다형성, 추상클래스, 상속<br><br>**DIP (의존역전)**<br>- 초점: **결합도** 감소 (하향식 강결합 → 상향식 추상화결합)<br>- 수단: IoC, DI(생성자/세터/메서드 주입)<br><br>**오버로딩(Ad-hoc다형성) vs 오버라이딩(Subtyping다형성)**<br>- 오버로딩: 컴파일타임 바인딩, 상속불필요, 매개변수 필수상이, 반환타입 무관<br>- 오버라이딩: 런타임 바인딩(VMT), 상속/인터페이스 필수, 매개변수·반환타입 동일 |
| **차별화** | **Spring DI 컨테이너 결합 및 아키텍처 품질 확보 실무전략**<br>1. **Spring DI → DIP+OCP 동시보증**: 컨테이너가 런타임 구체클래스 생성/주입 → 비즈니스로직의 특정DB라이브러리 직접의존 차단<br>2. **LSP 준수 → 상속오용 방지**: 단순재사용 목적 무분별상속 금지, 부모 불변법칙(Invariant) 훼손여부 확인 → 부적합 시 **합성(Composition)**으로 대체, Fragile Base Class 문제 예방<br>3. **ISP 파티셔닝 → 클라이언트 맞춤 인터페이스**: 범용인터페이스(`SmartDevice`) 통합 시 불필요메서드 강제구현 → `Printer`/`Copier`/`Fax` 분리, 다중상속구현<br>4. **생성자주입 의무화 → 순환참조 사전차단**: 필드주입(`@Autowired`) 시 A→B→A 순환의존 위험 → 생성자주입 표준화로 빌드시점 100%검출, 생명주기(Singleton/Scoped/Transient) 문서화 |
