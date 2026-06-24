---
title: "APT(Advanced Persistent Threat) — 정의, 특징, 공격과정, 대응방안"
date: 2026-06-23T20:29:59+09:00
tags: ["보안", "APT", "지능형지속공격", "사이버킬체인", "핵토200"]
topic_no1: 11
topic_no2: 1
topic_large: "APT"
topic_small: "APT"
exam_ref: "116"
exam_type: "관리"
question_no: 2
---

## 문제

지능형 지속공격(APT, Advanced Persistent Threat)의 정의, 특징, 공격과정 및 대응방안을 관리적 기술적 관점에서 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | APT |
| 토픽(소) | APT |
| 출제 | 116회 |
| 유형 | 관리 |
| 번호 | 2 |

## 해설

### 출제 배경 및 의도

APT는 특정 목표를 향해 장기간·다단계로 진행되는 고도화된 사이버 공격이다. 공격 단계(사이버 킬 체인)를 파악하고 각 단계별 기술적·관리적 대응방안을 체계적으로 서술해야 한다.

### 1. APT 정의 및 특징

정 의  • 특정 조직이나 국가를 대상으로 장기간에 걸쳐 다양한 공격 기법을 복합적으로 사용하는 고도로 지능적인 지속성 위협
- **주체**: 국가 지원 해커 그룹, 사이버 범죄 조직
- **특징**:
  - **Advanced**: 제로데이 취약점, 커스텀 악성코드, 다단계 공격 기법 사용
  - **Persistent**: 수개월~수년간 지속, 발각 회피 우선
  - **Threat**: 정보 유출, 인프라 파괴, 금전적 피해가 목표

### 2. APT 공격 과정 (사이버 킬 체인 기반)

```
① 정찰(Reconnaissance)
   → SNS, WHOIS, 조직도 등으로 표적 정보 수집

② 무기화(Weaponization)
   → 취약점 익스플로잇 + 악성코드 결합(PDF, Word 등에 내장)

③ 전달(Delivery)
   → 스피어 피싱 이메일, 워터링 홀, USB 등으로 전달

④ 익스플로잇(Exploitation)
   → 취약점 실행, 초기 침투

⑤ 설치(Installation)
   → 백도어, RAT(원격접근도구), 루트킷 설치

⑥ C&C 통신(Command & Control)
   → 공격자 서버와 통신 채널 수립(HTTPS, DNS 터널링)

⑦ 목표 실행(Actions on Objectives)
   → 정보 유출, 내부 이동(Lateral Movement), 피해 실행
```

### 3. APT 대응방안

1) 기술적 대응

| 단계 | 대응 기술 |
|------|-----------|
| 정찰 방어 | OSINT 노출 최소화, 웹 크롤링 방지 |
| 전달 차단 | 이메일 샌드박스, APT 탐지 장비(FireEye 등), 웹 필터링 |
| 익스플로잇 방어 | 패치 관리, 취약점 스캔, EDR(Endpoint Detection Response) |
| 설치 탐지 | AV/EDR, 행위 기반 탐지, 화이트리스트 |
| C&C 차단 | DNS 싱크홀, TI(Threat Intelligence) 기반 차단 |
| 내부 이동 탐지 | UBA(User Behavior Analytics), 네트워크 세분화 |
| 유출 방지 | DLP(Data Loss Prevention), 이상 트래픽 탐지 |

2) 관리적 대응

| 방안 | 내용 |
|------|------|
| 보안 인식 교육 | 스피어 피싱 대응 훈련, 사회공학 인식 제고 |
| 사고 대응 계획 | CIRT(사이버 침해 대응팀) 구성, IRP 수립 |
| 위협 인텔리전스 | CTI(Cyber Threat Intelligence) 구독 및 공유 |
| 제로 트러스트 | 내부 이동 제한, 최소 권한 원칙 |
| 정기 모의 훈련 | 레드팀·블루팀 훈련, 침투 테스트 |


- 최근 APT(Advanced Persistent Threat) 관련 보안 위협 증가에 대응하여, 서비스 안전성 확보를 위한 체계적인 통제 및 기술 적용이 증대되는 추세임.  "끝"

### 실무 제언

**EDR + SOAR 통합 대응**
- **챌린지**: APT는 수개월에 걸쳐 조용히 진행되어 기존 AV로는 탐지가 불가능하다.
- **제언**: EDR(Endpoint Detection & Response)로 행위 기반 탐지를 수행하고, SOAR(Security Orchestration, Automation & Response)로 탐지→분석→대응을 자동화하여 APT의 C&C 통신이나 이상 내부 이동을 실시간으로 차단하는 통합 SOC 체계를 구축해야 한다.
