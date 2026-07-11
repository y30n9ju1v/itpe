---
title: "정보은닉(Information Hiding)"
date: 2026-07-11T11:37:46+09:00
tags: ["소프트웨어공학", "SW분석설계", "정보은닉", "캡슐화", "객체지향", "서브노트"]
draft: false
---

# 정보은닉 서브노트

> **두음 머리에 박기 🧠**
> - **P·R·P·P** (접근 제어자 4종: **P**rivate, package(default), **P**rotected, **P**ublic — 범위가 좁은 순)
> - **변·결·재·보·테** (정보은닉의 5대 장점: **변**경 용이성, **결**합도 감소, **재**사용성, **보**안성, **테**스트 용이성)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **정보은닉(Information Hiding)** |
| **정의** | David Parnas가 1972년 제안한 설계 원칙으로, 모듈 내부의 구현 세부사항(변경 가능성이 높은 설계 결정)을 외부에 노출하지 않고 인터페이스를 통해서만 접근하도록 하여 모듈 간 결합도를 낮추고 변경 영향 범위를 최소화하는 기법 |
| **키워드** | Parnas, 캡슐화, 접근 제어자(private/protected/public/package), 결합도, Repository 패턴 |
| **개념도** | `[ 외부 호출자 ]` ── 인터페이스(public)로만 접근 ──▶ `[ 모듈 공개 인터페이스 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (내부 은닉, 접근 차단)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 변경 가능성 높은 내부 구현(private) ]` |
| **구성요소** | 1. **캡슐화와의 관계**: 캡슐화는 데이터+메서드를 "무엇을 묶을지", 정보은닉은 묶인 것을 "어떻게 감출지" 결정하는 수단<br>2. **접근 제어자**: private(클래스 내부), protected(상속 허용), package(동일 패키지), public(전체 공개)<br>3. **위반 사례**: public 필드 직접 노출, 로직 없는 getter/setter 남용, 구현 클래스를 반환 타입으로 노출<br>4. **실무 적용**: Repository 패턴(DB 접근 로직 은닉), API의 DTO 분리(내부 도메인 모델 비노출) |
| **비교** | **캡슐화 (Encapsulation)**<br>- **관점**: 데이터와 행위를 하나의 단위로 묶는 것 (목적)<br><br>**정보은닉 (Information Hiding)**<br>- **관점**: 묶인 내부를 외부에서 볼 수 없게 하는 것 (수단) — 캡슐화의 목적을 달성하는 구체적 실현 방법 |
| **차별화** | **정보은닉 원칙의 아키텍처 확장 적용 전략**<br>1. **Repository 패턴을 통한 DB 교체 유연성 확보**: DB 접근 로직을 인터페이스 뒤에 은닉하여 MySQL→NoSQL 전환 시 호출자 코드 무변경으로 마이그레이션 리스크 최소화.<br>2. **레이어드 아키텍처의 계층 간 은닉**: 프레젠테이션-비즈니스-데이터 계층 간 내부 구현을 서로 은닉해, 특정 계층 변경이 타 계층에 파급되지 않도록 설계.<br>3. **프록시 패턴과의 결합**: 대상 객체(Real Subject)에 대한 직접 접근을 프록시가 대리함으로써 실제 구현을 완전히 은닉하고 접근 제어·로깅 등 부가 기능을 투명하게 삽입. |
