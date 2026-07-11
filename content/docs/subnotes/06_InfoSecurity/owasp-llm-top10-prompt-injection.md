---
title: "OWASP LLM Top 10, 프롬프트 인젝션 및 Model DoS"
date: 2026-07-11T11:38:05+09:00
tags: ["보안", "LLM보안", "OWASP", "프롬프트인젝션", "ModelDoS", "AI보안", "서브노트"]
draft: false
---

# OWASP LLM Top 10, 프롬프트 인젝션 및 Model DoS 서브노트

> **두음 머리에 박기 🧠**
> - **프·출·오·D·공·민·플·에·과·도** (OWASP LLM Top 10 순서: LLM01 **프**롬프트인젝션, LLM02 안전하지않은 **출**력처리, LLM03 학습데이터 **오**염, LLM04 모델 **D**oS, LLM05 **공**급망취약점, LLM06 **민**감정보노출, LLM07 불안전한 **플**러그인, LLM08 과도한 **에**이전트권한, LLM09 **과**신, LLM10 모델 **도**용)
> - **직·간·탈** (프롬프트 인젝션 3대 유형: **직**접 인젝션, **간**접 인젝션, **탈**옥 Jailbreak)
> - **재·컨·중·자·스** (Model DoS 5대 공격 유형: **재**귀적 프롬프트 Recursive Prompt, **컨**텍스트 윈도우 플러딩, 복잡한 **중**첩 조건문 Nested Instruction, **자**원집약 쿼리, **스**펀지 Sponge Attack)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **OWASP LLM Top 10 및 LLM 특화 공격: 프롬프트 인젝션 (Prompt Injection) / Model DoS** |
| **정의** | LLM 애플리케이션에서 발생하는 10대 보안 위협을 정리한 **OWASP LLM Top 10(프·출·오·D·공·민·플·에·과·도)** 가이드라인과, 그 1순위 위협인 **프롬프트 인젝션(직·간·탈)**, 4순위 위협인 자원 소진 공격 **Model DoS(재·컨·중·자·스)** |
| **키워드** | LLM01~LLM10, 직접/간접 프롬프트 인젝션, Jailbreak, Model DoS, Rate Limiting, MCP, Excessive Agency |
| **개념도** | **[ LLM 애플리케이션 공격 표면과 방어 파이프라인 ]**<br>`[ 사용자 입력 / 외부 문서(간접 인젝션) ] ──➔ [ 입력 검증·필터링 ] ──➔ [ LLM 추론 엔진 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ Rate Limiting / 토큰 상한 (Model DoS 방어) ] ◀── GPU/메모리 자원 보호`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 출력 검증 (LLM02) ] ──➔ [ 최소권한 도구·플러그인 실행 (LLM07/08) ] ──➔ [ 최종 응답 ]` |
| **구성요소** | 1. **LLM01 프롬프트 인젝션**: 직접(사용자가 "이전 지시 무시" 등 직접 입력) / 간접(크롤링한 웹문서·파일에 숨은 지시문) / 탈옥(역할극 등으로 안전필터 우회)<br>2. **LLM04 Model DoS**: Recursive Prompt(무한 재귀 응답 유도), Context Window Flooding(최대 컨텍스트 근접 초대형 프롬프트), Nested Instruction(중첩 조건문으로 추론 트리 폭발), Sponge Attack(최대 계산량 유발 특수 패턴) — 일반 DoS와 달리 패킷이 아닌 **토큰 계산 비용**을 악용해 과금 피해까지 유발<br>3. **LLM05/LLM07/LLM08 (공급망·플러그인·에이전트)**: 오염된 사전학습 모델·플러그인 사용, 검증 없는 도구 연동, LLM 에이전트에 불필요한 시스템 권한 부여<br>4. **LLM06 민감정보노출**: 학습 데이터 기억(Memorization)이 응답에 그대로 노출<br>5. **LLM09/LLM10 (과신·모델도용)**: 출력 미검증 의사결정 위임, 쿼리 반복을 통한 모델 가중치 역공학 복제 |
| **비교** | **전통적 DoS**<br>- **공격 수단**: 네트워크 패킷 폭주(대역폭/커넥션 고갈)<br>- **탐지·방어**: 트래픽 볼륨 기반 IDS/IPS, 방화벽 차단<br><br>**Model DoS**<br>- **공격 수단**: 소수의 정상적인 HTTP 요청 안에 담긴 고비용 토큰 연산(재귀·초대형 컨텍스트) 악용<br>- **탐지·방어**: 토큰 단위 Rate Limiting, 추론 타임아웃, 쿼리 복잡도 사전 평가 — 볼륨이 아닌 **연산비용** 기준 방어 필요 |
| **차별화** | **LLM 애플리케이션 보안 내재화(Security by Design) 3대 실무 전략**<br>1. **입력·출력 양방향 필터링 파이프라인**: 시스템 프롬프트와 사용자 입력을 구조적으로 분리(Instruction-Data Separation)하고, LLM 응답을 코드 실행·DB 질의 등 후속 처리 전에 화이트리스트 기반으로 검증하여 LLM02(안전하지 않은 출력 처리)를 원천 차단.<br>2. **에이전트형 LLM에 대한 제로 트러스트 적용**: LLM08 과도한 에이전트 권한 문제에 대응하여, 파일 삭제·이메일 발송 등 고위험 도구 호출 시 Human-in-the-Loop 승인을 의무화하고 도구별 최소 권한(Allowlist)을 부여.<br>3. **비용 기반 이상탐지 연동**: Model DoS로 인한 토큰 사용량 급증을 SIEM/과금 시스템과 연동해 임계값 초과 시 자동 차단, API 키당 분당/일간 쿼터를 설정하여 금전적 피해와 서비스 품질 저하를 동시에 방지. |
