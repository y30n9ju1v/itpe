---
title: "웹 취약점 표준 가이드라인 OWASP Top 10"
date: 2026-07-11T11:26:36+09:00
tags: ["보안", "애플리케이션보안", "OWASP", "SQL인젝션", "XSS", "SSRF", "시큐어코딩", "서브노트"]
draft: false
---

# 웹 취약점 표준 가이드라인 OWASP Top 10 서브노트

> **두음 머리에 박기 🧠**
> - **통·암·인·안·설** (OWASP Top 10 최상위 5대 취약점: 접근 **통**제 손실 Broken Access Control, **암**호화 실패 Cryptographic Failures, **인**젝션 Injection, **안**전하지 않은 설계 Insecure Design, 보안 **설**정오류 Security Misconfiguration)
> - **프·에스·시** (SQL Injection 대응 시큐어 코딩 3요소: 매개변수화 쿼리 **P**repared Statement, 입력값 필터링 **S**anitization, 특수문자 **C**haracter Escaping)
> - **에이·원·공** (인프라 침투 핵심 우회 취약점인 SSRF의 OWASP 순번: A**10** - Server-Side Request Forgery)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **OWASP Top 10 웹 취약점 및 대표적 웹 애플리케이션 공격 (SQLi, XSS, SSRF) 대응** |
| **정의** | 웹 보안 취약점 표준 기준인 **OWASP Top 10**의 분류 체계와, 소스코드 단계에서 비정상 입력을 무력화하여 웹 서비스를 보호하는 **시큐어 코딩 및 보안 아키텍처 기술** |
| **키워드** | OWASP Top 10 (통·암·인·안·설), SQL Injection, XSS (Stored / Reflected), SSRF (A10), CSP 보안 헤더, 바이브 코딩(Vibe Coding), SAST/DAST, MS SDL |
| **개념도** | **[ SSRF (서버 측 요청 위조) 공격 및 방화벽 내부망 침투 메커니즘 ]**<br>`[ 공격자 ] ── 1. 이미지 외부 조회 URL에 내부망 주소 삽입 ──➔ [ 웹 서버 (외부 오픈 API/Proxy) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`(예: http://web.com/?url=http://10.0.0.1/admin/shutdown)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 2. 내부 요청 전송 (방화벽 프리패스)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ DMZ 방화벽 ] ➔ [ 내부 사설 인트라넷 관리 서버 (10.0.0.1) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└─ (서버 가동 정지 등 심각한 침해 유발)` |
| **구성요소** | 1. **SQL Injection**: 동적 SQL 문 생성 시 사용자 입력값 검증 없이 쿼리를 조작해 인증 우회 및 데이터 유출 유발<br>2. **XSS (Cross-Site Scripting)**: 취약한 게시판 등에 악성 스크립트를 삽입해 타 사용자의 브라우저 세션 쿠키 등 정보 탈취<br>3. **SSRF (Server-Side Request Forgery)**: 외부 리소스 조회를 대행하는 서버의 로직을 조작해 서버가 내부 망을 공격하게 유도<br>4. **시큐어 코딩**: 소스코드 기획/구현 단계부터 보안 약점을 제거하는 개발 기법 (입력데이터 검증, 에러처리 등 7대 범주) |
| **비교** | **XSS (Cross-Site Scripting - 클라이언트 표적)**<br>- **공격 대상**: 웹 서비스를 이용하는 **사용자 브라우저 (Client)**<br>- **동작 방식**: 서버에 악성 스크립트를 올려 브라우저가 실행하게 함<br>- **해결 방안**: 특수문자 HTML 엔티티 치환(Escaping), CSP 헤더 적용<br><br>**SSRF (Server-Side Request Forgery - 서버/인프라 표적)**<br>- **공격 대상**: 웹 요청을 처리하는 **애플리케이션 서버 (Server)**<br>- **동작 방식**: 서버 기능을 대행자로 써서 접근 제어가 풀린 내부망 공격<br>- **해결 방안**: 입력 URL 도메인 화이트리스트 검증, 루프백 대역 차단 |
| **차별화** | **웹 취약점 원천 차단을 위한 Prepared Statement 규격화 및 브라우저 CSP 보안 전략**<br>1. **Prepared Statement(매개변수화 쿼리) 강제화**: SQL 인젝션을 완전히 해결하기 위해 소스 코드 작성 시 동적 문자열 결합을 금지하고, 쿼리 템플릿 컴파일 후 데이터를 변수로만 맵핑시키는 Prepared Statement 기법을 MyBatis/JPA 프레임워크 상에서 강제 적용.<br>2. **CSP (Content Security Policy) 보안 헤더 활성화**: XSS 공격 성공 시에도 공격자가 심어둔 악성 외부 도메인의 스크립트 실행을 브라우저 단에서 거부하도록 웹 서버 응답 헤더에 `Content-Security-Policy: default-src 'self'` 설정 선언.<br>3. **SSRF 공격 경로 방어**: 이미지 프록시나 외부 링크 스크랩 기능 구현 시, 입력받은 호스트의 IP를 분석하여 로컬 호스트(`127.0.0.1`), 사설 IP 대역(`10.0.0.0/8`, `192.168.0.0/16`)인 경우 연결을 즉시 거부(Drop)하는 IP 필터링 함수 구현.<br>4. **SDLC 전 단계 시큐어 코딩 내재화**: MS SDL(교육→요구사항→설계(STRIDE 위협모델링)→구현→검증(SAST/DAST/퍼징)→출시→대응)과 행안부 SW개발보안가이드(입력데이터검증, API오용, 보안기능, 시간및상태, 에러처리, 코드품질, 캡슐화, 환경 7대 분류)를 결합해, 취약점을 운영 단계가 아닌 구현 단계에서 선제 제거하여 수정 비용을 수십~수백 배 절감.<br>5. **바이브 코딩(Vibe Coding, AI 생성 코드)의 보안 리스크와 대응**: 자연어 프롬프트로 LLM(GitHub Copilot, Cursor, Claude Code 등)에 코드 생성을 맡기고 세부 내용을 완전히 이해하지 않은 채 개발하는 바이브 코딩은 개발 속도를 2~10배 높이지만, 훈련 데이터의 취약한 코드 패턴 재현, 보안 요구사항을 반영하지 못하는 컨텍스트 이해 부족, API 키·패스워드 하드코딩, 입력 검증 부재(SQLi/XSS 미방어), 취약 버전 의존성, 최소권한 미적용, 존재하지 않는 API를 지어내는 환각(Hallucination) 등 OWASP Top 10 취약점을 그대로 내포한 코드를 양산할 위험이 있음. 이에 AI 생성 코드도 예외 없이 인간 보안 리뷰를 거치게 하고, Semgrep·SonarQube·Checkmarx 등 SAST를 CI 파이프라인에 자동 적용하며, Secret Scanner로 하드코딩된 시크릿을 탐지하고, SCA(Software Composition Analysis)로 의존성을 감사하는 "AI-Aware DevSecOps" 파이프라인과, 개발자가 생성 코드를 이해하고 책임지는 "책임있는 바이브 코딩" 문화 정착이 필수. |
