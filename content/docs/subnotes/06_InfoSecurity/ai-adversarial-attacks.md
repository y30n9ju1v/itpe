---
title: "AI 적대적 공격 및 프라이버시 보호"
date: 2026-07-11T11:19:35+09:00
tags: ["보안", "인공지능보안", "적대적공격", "차분프라이버시", "동형암호", "연합학습", "AIRedTeam", "서브노트"]
draft: false
---

# AI 적대적 공격 및 프라이버시 보호 서브노트

> **두음 머리에 박기 🧠**
> - **포·이·엑·전** (AI 대상 4대 적대적 공격 유형: 학습단계 오염 **포**이즈닝 Poisoning, 추론단계 노이즈 **이**베이전 Evasion, 모델역공학 **엑**스트랙션 Extraction, 원본데이터 역산 **전**도(인버전) Inversion)
> - **동·차·연** (개인정보 보호형 3대 차세대 AI 학습 기술: 암호화 상태 연산 **동**형암호, 노이즈 추가 식별배제 **차**분프라이버시, 가중치만 취합 분산학습 **연**합학습)
> - **에프·지·에스·엠** (회피 공격의 대표적 미세 잡음 생성 수학 알고리즘: **FGSM** Fast Gradient Sign Method)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **AI 적대적 공격 (Adversarial Attacks) 및 프라이버시 보존형 학습 기술 (Privacy-Preserving)** |
| **정의** | 노이즈 주입 → 오분류·데이터 유출 유도 **AI 적대적 공격(포·이·엑·전)** ↔ 학습데이터 유출 방지 **프라이버시 보존 기술(동·차·연)** |
| **키워드** | Poisoning / Evasion / Extraction / Inversion, FGSM, 동형암호, 차분프라이버시 (Noise 주입), 연합학습 (Federated), AI Red Team |
| **개념도** | **[ 프라이버시 보존 연합 학습 (Federated Learning) 구조 ]**<br>`[ 중앙 AI 서버 ] ◀─── 가중치 파라미터(Gradient) 전송 ───┬─── 가중치 파라미터 전송 ───▶ [ 중앙 AI 서버 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (로컬 가중치 전달, 원본 데이터 기기 내 격리)       │`<br>`[ 로컬 단말 1 (모바일) ] ➔ 데이터 로컬 학습 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ 로컬 단말 2 (의료 서버) ] ➔ 데이터 로컬 학습`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 원본 데이터 1 저장 ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ 원본 데이터 2 저장 ]` |
| **구성요소** | 1. **포이즈닝(Poisoning)**: 학습단계 — 빅데이터에 독(왜곡 데이터) 삽입 → 바이어스·백도어 조작 — 방어: 데이터 검증·정제, 이상치 탐지, 출처 검증<br>2. **회피(Evasion)**: 추론단계 — 입력에 미세잡음(Perturbation) → 오인식 유도(적대적 예제) — 방어: 적대적 학습, 입력 전처리(Denoising), 그래디언트 마스킹<br>3. **추출(Extraction/Model Stealing)**: API질의단계 — 응답분포 리버스엔지니어링 → 모델가중치·학습셋 복제(대체모델) — 방어: 질의횟수 제한, 출력확률 마스킹, 워터마킹<br>4. **전도(Inversion)**: API질의단계 — 출력 역산 → 원본데이터·민감정보 복원 — 방어: 차분프라이버시, 출력정보량 제한, 접근통제<br>5. **동형암호**: 암호구조 유지 상태 → 복호화 없이 직접 AI 연산<br>6. **차분프라이버시**: 통계결과에 δ/ε 임계치 노이즈 주입 → 개인기여도 식별 차단 |
| **비교** | **동형암호(Homomorphic Encryption)**<br>- 원리: 격자기반 비대칭키 → 대수적 가산/승산 연산<br>- 트레이드오프: 프라이버시 완전보장 ↔ 연산 오버헤드 극심(학습 지연)<br><br>**차분프라이버시(Differential Privacy)**<br>- 원리: 쿼리결과·기울기(Gradient)에 라플라스 노이즈 주입<br>- 트레이드오프: 부하 작아 빅데이터 용이 ↔ 노이즈 증가 시 정확도 왜곡 |
| **차별화** | **AI 신뢰성 검증 — 적대적 훈련 및 AI 레드팀 가동 전략**<br>1. **적대적 훈련**: 노이즈데이터(FGSM 등 적대적 예제) + 정상라벨 → 지도학습 → 강건성(Robustness) 향상<br>2. **AI 레드팀 상설운영**: 생성형AI 릴리즈 전 프롬프트 인젝션·탈옥·개인정보유출 취약점 진단 → 방어 필터링(Guardrails) 수립<br>3. **연합학습 오염(Sybil) 방어**: 악의 단말의 오염 가중치 배제 → 취합(Aggregation) 시 기하평균 기반 강건추정(Robust Aggregation) |
