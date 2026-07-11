---
title: "MCP(Model Context Protocol) 보안 취약점"
date: 2026-07-11T11:38:05+09:00
tags: ["보안", "MCP", "AI보안", "에이전트보안", "LLM", "서브노트"]
draft: false
---

# MCP(Model Context Protocol) 보안 취약점 서브노트

> **두음 머리에 박기 🧠**
> - **호·서·전** (MCP 3대 구성요소: **호**스트 Host - LLM 클라이언트, **서**버 Server - 도구/리소스 제공, **전**송 Transport - stdio/HTTP-SSE)
> - **프·권·오·악·민·S·도** (MCP 7대 보안 취약점: **프**롬프트인젝션, **권**한상승, **오**남용(도구), **악**성MCP서버, **민**감정보유출, **S**SRF, **도**구혼란공격)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **MCP (Model Context Protocol) 보안 취약점** |
| **정의** | Anthropic이 제안한 LLM과 외부 도구·데이터 소스 간 표준 연결 프로토콜인 MCP가, AI 에이전트에게 파일시스템·DB·API 접근 권한을 부여함으로써 새롭게 열리는 **7대 보안 취약점(프·권·오·악·민·S·도)**과 대응 방안 |
| **키워드** | MCP Host/Server, stdio, HTTP/SSE, 프롬프트 인젝션, 권한 상승, SSRF, Tool Confusion |
| **개념도** | **[ MCP 구조 및 공격 표면 ]**<br>`[ MCP Host (Claude Desktop 등) ] ──MCP 프로토콜(stdio/HTTP-SSE)──➔ [ MCP Server ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (SSRF·권한상승 위험 구간)`<br>&nbsp;&nbsp;&nbsp;&nbsp;`[ 외부 리소스: 파일시스템 / DB / 외부 API ] ── 내부망 탐색·데이터 유출 경로`<br>`(간접 프롬프트 인젝션 경로: 외부 파일·웹문서 내 악성 지시 → MCP Server 경유 → LLM 조작)` |
| **구성요소** | 1. **프롬프트 인젝션**: 외부 파일·웹 데이터에 숨겨진 악성 지시로 LLM 동작 조작<br>2. **권한 상승**: MCP Server가 필요 이상의 시스템 권한으로 실행되어 전체 자원 노출<br>3. **도구 오남용**: AI가 의도치 않게 파일 삭제·이메일 발송 등 파괴적 도구 실행<br>4. **악성 MCP Server**: 검증되지 않은 서드파티 서버 설치로 시스템 침해<br>5. **민감정보 유출**: MCP로 수집한 기밀 데이터를 외부로 전송<br>6. **SSRF**: MCP Server를 경유한 내부 네트워크 탐색·공격<br>7. **도구 혼란 공격(Tool Confusion)**: 동일 이름의 악성 도구로 정상 도구를 대체하여 실행 유도 |
| **비교** | **일반 LLM 프롬프트 인젝션**<br>- **공격 표면**: 대화 입력 텍스트로 한정<br>- **파급력**: 잘못된 응답 생성에 그침(도구 실행 권한 없음)<br><br>**MCP 환경의 프롬프트 인젝션**<br>- **공격 표면**: 대화 입력 + 연동된 파일시스템·DB·외부API 전체로 확장<br>- **파급력**: 인젝션 성공 시 실제 파일 삭제·이메일 발송·내부망 SSRF 등 시스템 수준 피해로 직결 |
| **차별화** | **MCP 도입 기업의 3단계 보안 내재화 전략**<br>1. **최소 권한 + 도구 허용목록(Allowlist)**: MCP Server가 필요한 최소 파일 경로·API 스코프만 접근하도록 제한하고, 사용 가능한 도구 목록을 명시적으로 화이트리스트화하여 도구 혼란 공격을 방지.<br>2. **샌드박스 격리 및 감사 로그**: MCP Server를 컨테이너로 격리 실행하고, 모든 도구 호출 내역을 전체 기록·모니터링하여 SSRF·권한상승 시도를 사후 추적.<br>3. **고위험 작업 Human-in-the-Loop**: 파일 삭제·송금·외부 전송 등 파괴적 작업은 AI가 자동 실행하지 않고 사용자 명시적 승인을 거치도록 워크플로우 설계, 신뢰할 수 있는 MCP Server만 등록 허용하는 검증 체계 병행. |
