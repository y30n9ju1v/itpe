---
title: "API 보안 위협 및 대응 방안 (OWASP API Security Top 10)"
date: 2026-06-23T20:29:59+09:00
tags: ["보안", "API보안", "OWASPAPITop10", "REST보안", "핵토200"]
topic_no1: 25
topic_no2: 1
topic_large: "API·AIoT 보안"
topic_small: "API 보안"
exam_ref: "모의_2023.11"
exam_type: "공통"
question_no: 1
---

## 문제

마이크로서비스 아키텍처와 클라우드 전환으로 API(Application Programming Interface) 사용이 폭발적으로 증가하면서 API 보안 위협도 급증하고 있다. 다음에 대해 설명하시오.
가. API 보안 위협의 주요 유형 (OWASP API Security Top 10 기반)
나. API 보안 대응 방안
다. API 게이트웨이(API Gateway)의 보안 기능

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | API·AIoT 보안 |
| 토픽(소) | API 보안 |
| 출제 | 모의 2023.11 |
| 유형 | 공통 |
| 번호 | 1 |

## 해설

### 1. OWASP API Security Top 10 (2023)

| 순위 | 위협 | 설명 |
|------|------|------|
| **API1** | 객체 수준 인가 취약점(BOLA) | 타 사용자 리소스에 ID 조작으로 무단 접근 |
| **API2** | 인증 취약점 | 약한 API 키, JWT 서명 미검증, 토큰 만료 미적용 |
| **API3** | 객체 속성 수준 인가 취약점 | 수정 불가 속성을 API 요청으로 변경 |
| **API4** | 무제한 리소스 소비 | 요청 크기·횟수 제한 미적용 → DDoS·과도 비용 유발 |
| **API5** | 기능 수준 인가 취약점 | 일반 사용자가 관리자 기능 API 직접 호출 |
| **API6** | 민감 데이터 노출 | 응답에 불필요한 개인정보·비밀번호 포함 |
| **API7** | 서버사이드 요청 위조(SSRF) | API를 통해 내부 서비스 비인가 접근 |
| **API8** | 보안 설정 오류 | TLS 미적용, CORS 와일드카드, 디버그 모드 |
| **API9** | 부적절한 인벤토리 관리 | 미문서화 Shadow API, 구버전 API 노출 |
| **API10** | API 소비 안전하지 않음 | 3rd파티 API 응답을 무검증으로 처리 |

### 2. API 보안 대응 방안

| 영역 | 대응 방안 |
|------|-----------|
| **인증·인가** | OAuth 2.0 + OIDC, JWT 서명 검증, 최소 권한 |
| **입력 검증** | 모든 입력 파라미터 화이트리스트 검증, 스키마 유효성 검사 |
| **전송 보안** | TLS 1.2+ 강제, HSTS 적용 |
| **속도 제한** | Rate Limiting, 쿼터(Quota) 설정 |
| **로깅·모니터링** | 모든 API 요청·응답 로깅, 이상 패턴 SIEM 연동 |
| **API 인벤토리** | API 명세서(OAS/Swagger) 최신 유지, Shadow API 탐지 |
| **보안 테스트** | 자동화 API 퍼징(Fuzzing), DAST 정기 수행 |

### 3. API 게이트웨이의 보안 기능

```
클라이언트 요청
     ↓
[API Gateway]
 ├── 인증: OAuth Token 검증, API Key 검사
 ├── 인가: 역할 기반 접근 통제(RBAC)
 ├── Rate Limiting: IP·사용자별 요청 횟수 제한
 ├── WAF 연계: SQL Injection, XSS 필터링
 ├── 암호화: TLS 종료·재시작
 ├── 로깅: 요청·응답 전체 감사 로그
 └── 변환: 응답 민감 필드 마스킹
     ↓
백엔드 서비스
```


- 최근 API 보안 위협 및 대응 방안 (OWASP API Security Top 10) 관련 보안 위협 증가에 대응하여, 서비스 안전성 확보를 위한 체계적인 통제 및 기술 적용이 증대되는 추세임.  "끝"

### 실무 제언

**마이크로서비스 환경 API 보안 내재화**
- **챌린지**: 마이크로서비스 수가 수백 개로 증가하면서 각 서비스 팀이 독립적으로 API를 개발하면 보안 정책이 일관되게 적용되지 않는 "API 스프롤(API Sprawl)" 문제가 발생한다.
- **제언**: 중앙 API 게이트웨이(Kong, AWS API Gateway)에서 인증·속도 제한·로깅을 일괄 처리하고, OAS(OpenAPI Specification) 기반 자동화 보안 테스트를 CI/CD 파이프라인에 통합(DAST, API Fuzzing)하여 코드 배포 단계에서 API 보안 취약점을 자동 차단해야 한다.
