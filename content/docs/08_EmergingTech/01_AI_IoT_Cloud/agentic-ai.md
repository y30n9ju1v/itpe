---
title: "에이전틱 AI (Agentic AI)"
date: 2026-05-08T23:38:40+09:00
tags: ["peim", "최신기술", "AI", "에이전틱AI", "AI에이전트", "자율행동", "MCP", "멀티에이전트"]
draft: false
exam: "136회"
---

## 개요

에이전틱 AI(Agentic AI)는 목표 달성을 위해 스스로 계획을 수립하고, 도구(Tool)를 사용하며, 여러 단계의 행동을 자율적으로 실행하는 AI 시스템이다. 단순 질의응답을 넘어 코드 실행·웹 검색·API 호출·파일 조작 등 실세계 작업을 수행하는 점이 특징이다.

## 핵심 내용

**에이전틱 AI의 핵심 특성**
1. 자율성 (Autonomy): 외부 지시 없이 행동 순서 결정
2. 도구 사용 (Tool Use): 외부 API·DB·코드 실행기 활용
3. 장기 기억 (Long-term Memory): 작업 맥락 유지
4. 계획 수립 (Planning): 목표를 하위 작업으로 분해 (ReAct, CoT)
5. 적응성 (Adaptability): 중간 결과에 따라 계획 수정

**에이전틱 AI 아키텍처**
```
[사용자 목표]
     ↓
[계획 모듈] → 하위 작업 분해 (CoT/ReAct)
     ↓
[실행 모듈] → 도구 호출 (API, Code, Browser)
     ↓
[메모리 모듈] → 단기(컨텍스트) + 장기(Vector DB)
     ↓
[반성/검증] → 결과 평가 및 재계획
```

**멀티에이전트 시스템**
- 여러 AI 에이전트가 협업하여 복잡한 작업 분담
- Orchestrator 에이전트가 Sub-agent에게 작업 위임
- MCP(Model Context Protocol)를 통해 에이전트 간 표준화된 도구 연동

**에이전틱 AI 보안 위험**
- 과도한 권한 (Excessive Agency): 필요 이상 시스템 접근
- 프롬프트 인젝션을 통한 에이전트 조작
- 자율 행동의 예측 불가성 및 되돌릴 수 없는 작업 실행

## 실무 적용 예시

소프트웨어 개발 자동화 에이전트가 요구사항 분석 → 코드 생성 → 테스트 실행 → 버그 수정 → PR 생성까지 자율적으로 수행하는 사례가 증가하고 있다.

## 출제 포인트

- 에이전틱 AI의 정의와 기존 AI 챗봇과의 차이
- 자율성·도구사용·계획수립 등 핵심 특성
- 에이전틱 AI의 보안 위험과 대응 방안

## 연관 개념

- [MCP (Model Context Protocol)]({{< relref "/docs/06_InfoSecurity/03_InfoProtection/mcp-security" >}}) — 에이전트 도구 연동 표준 프로토콜
- [범용 AI 위험관리 프레임워크]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/general-purpose-ai-risk-framework" >}}) — 에이전틱 AI의 거버넌스 기반
- [LLM 보안 위험]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/llm-security-risks" >}}) — LLM08 Excessive Agency

## 참고 기출

- 136회 1교시 3번
