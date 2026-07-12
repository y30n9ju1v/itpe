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
| **정의** | 기계학습 모델에 노이즈를 넣어 오분류를 유도하거나 데이터를 유출하는 **AI 적대적 공격(포·이·엑·전)**과, 민감한 학습 데이터 유출을 막는 **프라이버시 보존 기술(동·차·연)** |
| **키워드** | Poisoning / Evasion / Extraction / Inversion, FGSM, 동형암호, 차분프라이버시 (Noise 주입), 연합학습 (Federated), AI Red Team |
| **개념도** | **[ 프라이버시 보존 연합 학습 (Federated Learning) 구조 ]**<br>`[ 중앙 AI 서버 ] ◀─── 가중치 파라미터(Gradient) 전송 ───┬─── 가중치 파라미터 전송 ───▶ [ 중앙 AI 서버 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (로컬 가중치 전달, 원본 데이터 기기 내 격리)       │`<br>`[ 로컬 단말 1 (모바일) ] ➔ 데이터 로컬 학습 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ 로컬 단말 2 (의료 서버) ] ➔ 데이터 로컬 학습`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 원본 데이터 1 저장 ] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ 원본 데이터 2 저장 ]` |
| **구성요소** | 1. **포이즈닝 (Poisoning)**: 학습단계, 학습용 빅데이터 수집 단계에 독(의도적 왜곡 데이터)을 타서 모델의 바이어스·백도어 조작 — 방어: 데이터 검증·정제(Sanitization), 이상치 탐지, 출처 검증<br>2. **회피 (Evasion)**: 추론(서비스)단계, 입력에 미세한 잡음(Perturbation)을 섞어 자율주행 카메라 등이 사물을 오인식하게 만듦(적대적 예제) — 방어: 적대적 학습(Adversarial Training), 입력 전처리(Denoising), 그래디언트 마스킹<br>3. **추출 (Extraction/Model Stealing)**: 추론(API질의)단계, 모델 API 결과값 분포를 리버스 엔지니어링하여 독점 모델 가중치나 원본 학습 셋 복제(대체모델 Surrogate Model 생성) — 방어: 질의횟수 제한(Rate Limiting), 출력확률 마스킹, 워터마킹<br>4. **전도 (Inversion)**: 추론(API질의)단계, 모델 출력을 역산하여 학습에 사용된 원본 데이터·민감정보(얼굴 이미지 등) 복원·추론 — 방어: 차분 프라이버시, 출력 정보량 제한, 접근 통제<br>5. **동형 암호**: 데이터의 수학적 암호 구조를 유지한 채, 평문 복호화 과정 없이 다이렉트로 AI 연산을 수행하는 기술<br>6. **차분 프라이버시**: 출력되는 통계 결과에 델타/입실론 임계치 크기의 수학적 노이즈를 섞어 특정 개인의 기여도 식별 차단 |
| **비교** | **동형 암호 (Homomorphic Encryption)**<br>- **암호 원리**: 격자 기반 비대칭 키 암호 구조 하에서의 대수적 가산/승산 연산 처리<br>- **트레이드오프**: 개인정보가 암호학적으로 완전 보장되나, 연산 오버헤드가 극도로 심해 대형 AI 학습 지연 유발<br><br>**차분 프라이버시 (Differential Privacy)**<br>- **암호 원리**: 데이터베이스 쿼리 결과나 모델 기울기(Gradient)에 수학적 라플라스 잡음(Noise) 주입<br>- **트레이드오프**: 컴퓨팅 부하가 작아 빅데이터에 용이하나, 노이즈 증가 시 인공지능 모델의 정확도 왜곡 우려 |
| **차별화** | **AI 서비스 신뢰성 검증을 위한 적대적 훈련 및 AI 레드팀(Red Teaming) 가동 전략**<br>1. **적대적 훈련 (Adversarial Training)을 통한 회피 공격 방어**: 학습 데이터 셋 구성 시, 공격에 쓰이는 노이즈 데이터(FGSM 기법 등으로 자동 생성된 적대적 예제)를 고의로 정상 라벨과 묶어 함께 지도학습시킴으로써 모델의 강건성(Robustness) 향상.<br>2. **AI 레드팀 (AI Red Teaming) 상설 운영**: 생성형 AI 챗봇 서비스 릴리즈 전 프롬프트 인젝션(Prompt Injection - 탈옥 유도), 탈옥(Jailbreak), 개인정보 유출 취약점을 진단하기 위한 적대적 모의 공격을 수행하고 방어 필터링(Guardrails) 수립.<br>3. **연합학습 가중치 오염(Sybil Attack) 방어**: 분산된 단말 중 악의적 단말이 오염된 가중치를 보낼 때 글로벌 합성을 왜곡하지 않도록 연합 학습 중간값 취합(Aggregation) 시 기하평균 기반 강건 추정 모델(Robust Aggregation) 적용. |
