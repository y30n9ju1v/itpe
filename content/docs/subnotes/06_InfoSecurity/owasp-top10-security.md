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
| **정의** | 웹 보안취약점 표준기준 **OWASP Top 10** 분류체계 + 소스코드 단계에서 비정상입력 무력화 → 웹서비스 보호하는 **시큐어 코딩 및 보안 아키텍처 기술** |
| **키워드** | OWASP Top 10 (통·암·인·안·설), SQL Injection, XSS (Stored / Reflected), SSRF (A10), CSP 보안 헤더, 바이브 코딩(Vibe Coding), SAST/DAST, MS SDL |
| **개념도** | **[ SSRF (서버 측 요청 위조) 공격 및 방화벽 내부망 침투 메커니즘 ]**<br>`[ 공격자 ] ── 1. 이미지 외부 조회 URL에 내부망 주소 삽입 ──➔ [ 웹 서버 (외부 오픈 API/Proxy) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`(예: http://web.com/?url=http://10.0.0.1/admin/shutdown)`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 2. 내부 요청 전송 (방화벽 프리패스)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ DMZ 방화벽 ] ➔ [ 내부 사설 인트라넷 관리 서버 (10.0.0.1) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`└─ (서버 가동 정지 등 심각한 침해 유발)` |
| **구성요소** | 1. **SQL Injection**: 동적 SQL문 생성 시 입력값 미검증 → 쿼리 조작으로 인증우회·데이터유출<br>2. **XSS**: 취약 게시판 등에 악성스크립트 삽입 → 타사용자 브라우저 세션쿠키 등 정보탈취<br>3. **SSRF**: 외부리소스 조회 대행 서버로직 조작 → 서버가 내부망 공격하도록 유도<br>4. **시큐어 코딩**: 기획/구현 단계부터 보안약점 제거하는 개발기법(입력데이터검증, 에러처리 등 7대 범주) |
| **비교** | **XSS (클라이언트 표적)**<br>- 공격대상: 사용자 브라우저(Client)<br>- 동작방식: 서버에 악성스크립트 게재 → 브라우저 실행 유도<br>- 해결방안: 특수문자 HTML 엔티티 치환(Escaping), CSP 헤더 적용<br><br>**SSRF (서버/인프라 표적)**<br>- 공격대상: 애플리케이션 서버(Server)<br>- 동작방식: 서버기능을 대행자로 이용 → 접근제어 풀린 내부망 공격<br>- 해결방안: 입력URL 도메인 화이트리스트 검증, 루프백 대역 차단 |
| **차별화** | **웹 취약점 원천 차단을 위한 Prepared Statement 규격화 및 브라우저 CSP 보안 전략**<br>1. **Prepared Statement 강제화**: SQLi 완전 해결 위해 동적 문자열 결합 금지 → 쿼리 템플릿 컴파일 후 데이터를 변수로만 맵핑, MyBatis/JPA에서 강제 적용<br>2. **CSP 보안 헤더 활성화**: XSS 성공 시에도 악성 외부도메인 스크립트 실행을 브라우저 단에서 거부 — 응답헤더에 `Content-Security-Policy: default-src 'self'` 설정<br>3. **SSRF 공격 경로 방어**: 이미지 프록시·외부링크 스크랩 구현 시 입력 호스트IP 분석 → 로컬호스트(`127.0.0.1`)·사설IP 대역(`10.0.0.0/8`, `192.168.0.0/16`) 연결 즉시 거부하는 IP 필터링<br>4. **SDLC 전단계 시큐어 코딩 내재화**: MS SDL(교육→요구사항→설계(STRIDE)→구현→검증(SAST/DAST/퍼징)→출시→대응) + 행안부 SW개발보안가이드(입력데이터검증·API오용·보안기능·시간및상태·에러처리·코드품질·캡슐화·환경 7대분류) 결합 → 구현단계 선제 제거로 수정비용 수십~수백배 절감<br>5. **바이브 코딩(AI 생성코드) 보안 리스크 대응**: 자연어 프롬프트로 LLM(Copilot, Cursor, Claude Code 등)에 코드생성 위임 → 개발속도 2~10배 향상하나, 훈련데이터 취약패턴 재현·컨텍스트 이해부족·API키 하드코딩·입력검증 부재(SQLi/XSS)·취약버전 의존성·최소권한 미적용·환각(Hallucination) 등 OWASP Top 10 위험 내포 — AI 생성코드도 인간 보안리뷰 필수 + Semgrep·SonarQube·Checkmarx SAST CI 자동적용 + Secret Scanner + SCA 의존성 감사하는 "AI-Aware DevSecOps" 파이프라인과 "책임있는 바이브 코딩" 문화 정착 필요 |
