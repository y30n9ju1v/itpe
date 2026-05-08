---
title: "MCP (Model Context Protocol) 보안 취약점"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "정보보안", "정보보호", "MCP", "AI보안", "에이전트보안", "LLM"]
draft: false
exam_peim: ["137회"]
---

## 개요

MCP(Model Context Protocol)는 Anthropic이 제안한 LLM과 외부 도구·데이터 소스 간의 표준 연결 프로토콜이다. AI 에이전트가 파일 시스템, 데이터베이스, 외부 API에 접근할 수 있게 하여 활용성이 극대화되지만, 새로운 보안 위협 경로를 열기도 한다.

## 핵심 내용

### MCP 구조

```
[MCP Host (Claude, GPT)]
        ↓ MCP 프로토콜
[MCP Server] ← → [외부 리소스: 파일시스템, DB, API]
```

- **MCP Host**: LLM 클라이언트 (Claude Desktop 등)
- **MCP Server**: 도구/리소스 제공 서버
- **Transport**: stdio, HTTP/SSE 방식

### 주요 보안 취약점

| 취약점 | 설명 |
|--------|------|
| **프롬프트 인젝션** | 외부 데이터(파일, 웹)에 숨겨진 악성 지시로 LLM 동작 조작 |
| **권한 상승** | MCP Server가 필요 이상의 시스템 권한으로 실행 |
| **도구 오남용** | AI가 의도치 않게 파괴적 도구(파일 삭제, 이메일 발송) 실행 |
| **악성 MCP Server** | 신뢰할 수 없는 서드파티 서버 설치로 시스템 침해 |
| **민감정보 유출** | LLM이 MCP를 통해 수집한 기밀 데이터를 외부로 전송 |
| **SSRF** | MCP Server를 통한 내부 네트워크 탐색 |
| **도구 혼란 공격** | 동일 이름의 악성 도구로 정상 도구 대체 |

### 대응 방안

**기술적 방안**:
- **최소 권한 원칙**: MCP Server에 필요한 최소 권한만 부여
- **샌드박스**: MCP Server를 격리된 컨테이너에서 실행
- **입력 검증**: MCP로 유입되는 데이터 위험 패턴 필터링
- **도구 허용 목록(Allowlist)**: 사용 가능한 MCP 도구 명시적 제한
- **감사 로그**: MCP 도구 호출 내역 전체 기록·모니터링
- **확인 요청(Human-in-the-loop)**: 고위험 작업 전 사용자 승인 요구

**관리적 방안**:
- 신뢰할 수 있는 MCP Server만 등록 허용 (검증 체계)
- MCP 사용 정책 수립·교육
- 정기적 보안 감사

## 출제 포인트

- MCP 구조(Host-Server-Resource) 먼저 설명
- 7가지 취약점을 프롬프트 인젝션·권한·데이터 유출 범주로 분류
- 대응 방안을 기술적·관리적으로 구분하여 서술

## 연관 개념

- [프롬프트 인젝션]({{< relref "/docs/06_InfoSecurity/01_SecurityTech/prompt-injection" >}}) — MCP 환경의 주요 공격 벡터
- [AI 거버넌스]({{< relref "/docs/01_InfoStrategy/03_AI_Ethics/ai-governance" >}}) — MCP 보안 정책의 상위 체계
- [공격 표면/측면 이동]({{< relref "/docs/06_InfoSecurity/02_SecuritySystems/attack-surface-lateral-movement" >}}) — MCP가 확장하는 공격 표면

## 참고 기출

- 137회 2교시 3번 (PEIM)
