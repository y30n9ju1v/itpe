---
title: "ZSM 및 IBN 기반 자율 네트워크"
date: 2026-07-11T11:38:00+09:00
tags: ["네트워크", "ZSM", "IBN", "자율네트워크", "SDN", "Zero-touch", "서브노트"]
draft: false
---

# ZSM 및 IBN 기반 자율 네트워크 서브노트

> **두음 머리에 박기 🧠**
> - **설·최·치·보** (ZSM 4자가(Self-X) 기능: 자가**설**정 Self-Configuration, 자가**최**적화 Self-Optimization, 자가**치**유 Self-Healing, 자가**보**호 Self-Protection)
> - **변·자·인·보** (IBN 4대 기능: 정책 **변**환 Translation, **자**동구성 Activation, 상태 **인**식 Awareness, 지속검증 **보**증 Assurance)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **ETSI ZSM (Zero-touch Network and Service Management) 및 IBN (Intent-Based Networking)** |
| **정의** | 인간 개입 없이 AI/ML로 네트워크를 자율 운영·최적화·치유하는 ETSI 표준 프레임워크 **ZSM**과, 관리자가 선언한 비즈니스 의도(Intent)를 시스템이 자동으로 정책 변환·배포·검증하는 자율 네트워크 패러다임 **IBN**으로, 5G/6G 완전 자율 운영을 목표로 상호 연계됨 |
| **키워드** | Zero-touch, Self-Configuration/Optimization/Healing/Protection, Intent Layer, Closed-loop, SDN 대비 의도 추상화 |
| **개념도** | **[ ZSM-IBN 자율 네트워크 연계 구조 ]**<br>`비즈니스 의도 (Intent Layer, IBN)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`↓ 정책 엔진/번역기(Translation)`<br>`[ ZSM Cross-domain Management ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`├── Domain 1(RAN) ── Self-Configuration/Optimization`<br>&nbsp;&nbsp;&nbsp;&nbsp;`├── Domain 2(Core) ── Self-Healing/Protection`<br>&nbsp;&nbsp;&nbsp;&nbsp;`└── Domain 3(Transport)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`↑ Telemetry/상태 피드백 (Awareness → Assurance, 폐쇄루프)` |
| **구성요소** | 1. **ZSM Management Domain**: 특정 네트워크 도메인(RAN·코어망 등)의 자율 관리 단위<br>2. **Cross-domain Integration Fabric**: 도메인 간 데이터 공유·서비스 조율<br>3. **ZSM 4자가 기능**: 자가설정·자가최적화·자가치유·자가보호(→ Cognitive Network로 통합)<br>4. **IBN 4대 기능**: 의도 변환(Translation), 자동 구성(Activation), 인식(Awareness), 보증(Assurance)<br>5. **폐쇄 루프(Closed-loop) 운영**: 의도와 실제 동작의 편차 발생 시 자동 수정하는 IBN·ZSM 공통 메커니즘 |
| **비교** | **SDN (Software Defined Networking)**<br>- 추상화 수준: 데이터/제어 평면 분리<br>- 설정 방식: API 기반 수동 설정 / 자동화: 제한적<br><br>**IBN (Intent-Based Networking)**<br>- 추상화 수준: 의도(Intent) 수준 추상화<br>- 설정 방식: 의도 선언 → 자동 설정 / 자동화: 폐쇄 루프(Closed-loop) 완전 자동화<br><br>**ZSM (Zero-touch Network Management)**<br>- 범위: IBN보다 넓은 전체 네트워크 생명주기(배포·모니터링·복구) 자동화<br>- 5G에서 SON(Self-Organizing Network)이 ZSM으로 진화, 6G AI-Native Network의 기반 관리 계층 |
| **차별화** | **의도 기반 선언형 관리와 완전 자동화 네트워크로의 진화 전략**<br>1. **IBN의 ZSM Intent-based Interface 연계**: ZSM 참조 아키텍처의 Intent-based Interface가 비즈니스 의도를 기술 정책으로 변환하는 역할을 담당해, IBN의 Translation 기능과 직접 연동됨.<br>2. **SDN → IBN → ZSM 자동화 고도화 경로**: SDN이 제어/데이터 평면을 분리해 프로그래밍 가능성을 확보하면, IBN이 그 위에 의도 기반 선언형 계층을 얹고, ZSM이 전체 네트워크 생명주기를 4자가 기능으로 완전 자동화하는 단계적 발전 구조.<br>3. **6G AI-Native Network와의 결합**: 6G 환경에서는 O-RAN 오픈 인터페이스에 ZSM을 적용하고 AI/ML 분석 서비스(Analytics Services)로 실시간 이상 탐지·자동 복구를 수행해, 대형 데이터센터의 "99.9% SLA 보장" 같은 의도를 자동 실현. |
