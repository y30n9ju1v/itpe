---
title: "OWASP LLM Top 10 2023 아카이브, 프롬프트 인젝션 및 Model DoS"
date: 2026-07-11T11:38:05+09:00
tags: ["보안", "LLM보안", "OWASP", "프롬프트인젝션", "ModelDoS", "AI보안", "서브노트"]
draft: false
---

# OWASP LLM Top 10 2023 아카이브, 프롬프트 인젝션 및 Model DoS 서브노트

> **버전 고정**: 이 서브노트의 LLM01~LLM10 명칭·순서는 **OWASP 2023 버전**이다. 2025·2026 최신판은 항목과 번호가 다르므로, 현재 동향 답안에는 [OWASP GenAI Security Project](https://genai.owasp.org/initiatives/top-10-for-llm-and-genai/) 기준의 별도 최신판을 확인한다.

> **두음 머리에 박기 🧠**
> - **프·출·오·D·공·민·플·에·과·도** (OWASP LLM Top 10 순서: LLM01 **프**롬프트인젝션, LLM02 안전하지않은 **출**력처리, LLM03 학습데이터 **오**염, LLM04 모델 **D**oS, LLM05 **공**급망취약점, LLM06 **민**감정보노출, LLM07 불안전한 **플**러그인, LLM08 과도한 **에**이전트권한, LLM09 **과**신, LLM10 모델 **도**용)
> - **직·간·탈** (프롬프트 인젝션 3대 유형: **직**접 인젝션, **간**접 인젝션, **탈**옥 Jailbreak)
> - **재·컨·중·자·스** (Model DoS 5대 공격 유형: **재**귀적 프롬프트 Recursive Prompt, **컨**텍스트 윈도우 플러딩, 복잡한 **중**첩 조건문 Nested Instruction, **자**원집약 쿼리, **스**펀지 Sponge Attack)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **OWASP LLM Top 10 (2023 아카이브) 및 LLM 특화 공격: 프롬프트 인젝션 (Prompt Injection) / Model DoS** |
| **정의** | LLM 앱 10대 보안위협을 정리한 **OWASP LLM Top 10 2023(프·출·오·D·공·민·플·에·과·도)** + 1순위 **프롬프트 인젝션(직·간·탈)** + 4순위 자원소진 공격 **Model DoS(재·컨·중·자·스)**. 최신판의 항목·번호와 혼용하지 않는다. |
| **키워드** | LLM01~LLM10, 직접/간접 프롬프트 인젝션, Jailbreak, Model DoS, Rate Limiting, MCP, Excessive Agency |
| **개념도** | **[ LLM 애플리케이션 공격 표면과 방어 파이프라인 ]**<br>`[ 사용자 입력 / 외부 문서(간접 인젝션) ] ──➔ [ 입력 검증·필터링 ] ──➔ [ LLM 추론 엔진 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ Rate Limiting / 토큰 상한 (Model DoS 방어) ] ◀── GPU/메모리 자원 보호`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 출력 검증 (LLM02) ] ──➔ [ 최소권한 도구·플러그인 실행 (LLM07/08) ] ──➔ [ 최종 응답 ]` |
| **구성요소** | 1. **LLM01 프롬프트 인젝션**: 직접("이전 지시 무시" 등 직접입력) / 간접(크롤링 웹문서·파일에 숨은 지시문) / 탈옥(역할극 등 안전필터 우회)<br>2. **LLM04 Model DoS**: Recursive Prompt(무한 재귀응답 유도), Context Window Flooding(초대형 프롬프트), Nested Instruction(중첩조건문 → 추론트리 폭발), Sponge Attack(최대계산량 유발 패턴) — 패킷이 아닌 **토큰 계산비용** 악용, 과금피해 유발<br>3. **LLM05/07/08 (공급망·플러그인·에이전트)**: 오염된 사전학습모델·플러그인 사용, 미검증 도구연동, 에이전트에 불필요한 시스템권한 부여<br>4. **LLM06 민감정보노출**: 학습데이터 기억(Memorization)이 응답에 그대로 노출<br>5. **LLM09/10 (과신·모델도용)**: 출력 미검증 의사결정 위임, 쿼리반복 통한 모델가중치 역공학 복제 |
| **비교** | **전통적 DoS**<br>- 공격수단: 네트워크 패킷 폭주(대역폭/커넥션 고갈)<br>- 탐지·방어: 트래픽 볼륨기반 IDS/IPS, 방화벽 차단<br><br>**Model DoS**<br>- 공격수단: 소수 정상 HTTP 요청 내 고비용 토큰연산(재귀·초대형 컨텍스트) 악용<br>- 탐지·방어: 토큰단위 Rate Limiting, 추론 타임아웃, 쿼리복잡도 사전평가 — 볼륨아닌 **연산비용** 기준 방어 |
| **차별화** | **LLM 앱 보안 내재화(Security by Design) 3대 실무 전략**<br>1. **입력·출력 양방향 필터링 파이프라인**: 시스템프롬프트-사용자입력 구조적 분리(Instruction-Data Separation) + 응답을 코드실행·DB질의 전 화이트리스트 검증 → LLM02 원천 차단<br>2. **에이전트형 LLM 제로트러스트 적용**: LLM08 대응 — 고위험 도구호출(파일삭제·이메일발송 등) 시 Human-in-the-Loop 승인 의무화 + 도구별 최소권한(Allowlist)<br>3. **비용 기반 이상탐지 연동**: Model DoS 토큰사용량 급증을 SIEM/과금시스템과 연동 → 임계값 초과 자동차단, API키당 분당/일간 쿼터 설정 |
