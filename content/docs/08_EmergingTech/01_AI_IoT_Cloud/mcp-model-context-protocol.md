---
title: "MCP (Model Context Protocol)"
date: 2026-05-08T23:38:40+09:00
tags: ["peim", "최신기술", "AI", "MCP", "에이전틱AI", "도구통합", "Anthropic", "AI프로토콜"]
draft: false
exam: "136회"
---

## 개요

MCP(Model Context Protocol)는 Anthropic이 2024년 공개한 오픈 표준으로, AI 모델(LLM)이 외부 도구·데이터 소스·서비스와 상호작용하는 방식을 표준화한다. USB-C가 다양한 기기를 단일 인터페이스로 연결하듯, MCP는 AI 에이전트와 외부 세계 사이의 범용 통신 프로토콜 역할을 한다.

## 핵심 내용

**MCP 개요**
- 개발사: Anthropic (2024년 11월 오픈소스 공개)
- 목적: AI 모델의 도구 연동 표준화 (각 서비스마다 별도 통합 코드 불필요)
- 기반: JSON-RPC 2.0 프로토콜

**MCP 아키텍처**

```
┌─────────────┐     MCP Protocol    ┌─────────────┐
│  MCP Client │ ←─────────────────→ │  MCP Server │
│ (AI Host)   │                     │ (도구/데이터) │
└─────────────┘                     └─────────────┘
     ↑                                     ↑
  Claude,                          파일시스템, DB,
  Cursor 등                        GitHub, 슬랙 등
```

**MCP가 제공하는 3가지 기본 요소**

| 요소 | 설명 | 예시 |
|------|------|------|
| Tools | AI가 실행할 수 있는 함수/액션 | 파일 읽기, DB 쿼리, API 호출 |
| Resources | AI가 접근할 수 있는 데이터 | 파일 내용, DB 레코드 |
| Prompts | 재사용 가능한 프롬프트 템플릿 | 코드 리뷰 프롬프트 |

**MCP vs 기존 방식 비교**

| 구분 | 기존 (M×N 문제) | MCP |
|------|----------------|-----|
| 통합 수 | M개 AI × N개 서비스 = M×N 통합 | M개 MCP Client + N개 MCP Server |
| 표준화 | 각각 커스텀 코드 | 단일 표준 프로토콜 |
| 재사용성 | 낮음 | 높음 |

**보안 고려사항**
- 도구 실행 권한 최소화 (최소 권한 원칙)
- MCP 서버 공급망 신뢰성 검증
- 에이전트 행동 감사 로그

## 출제 포인트

- MCP의 정의와 등장 배경 (M×N 통합 문제 해결)
- MCP의 3가지 기본 요소 (Tools·Resources·Prompts)
- MCP와 에이전틱 AI의 관계

## 연관 개념

- [에이전틱 AI]({{< relref "/docs/08_EmergingTech/01_AI_IoT_Cloud/agentic-ai" >}}) — MCP를 활용하는 주체
- [MCP 보안]({{< relref "/docs/06_InfoSecurity/03_InfoProtection/mcp-security" >}}) — MCP 보안 위험 상세 분석
- [프록시 디자인 패턴]({{< relref "/docs/02_SoftwareEngineering/02_Analysis_Design/proxy-design-pattern" >}}) — MCP 서버의 프록시 역할

## 참고 기출

- 136회 1교시 13번
