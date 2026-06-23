---
title: "시큐어 코딩(Secure Coding) — SW개발 보안 방법론"
date: 2026-06-23T20:29:59+09:00
tags: ["보안", "시큐어코딩", "개발보안", "OWASP", "핵토200"]
topic_no1: 13
topic_no2: 1
topic_large: "개발 보안"
topic_small: "시큐어 코딩"
exam_ref: "모의_2017.04"
exam_type: "관리"
question_no: 2
---

## 문제

해커의 공격 초점이 지속적으로 애플리케이션 계층을 향해 이동함에 따라 소프트웨어 개발 보안이 더욱 중요해졌으며, 이를 위해서 행정자치부는 소프트웨어 개발 보안(시큐어 코딩)을 무 적용하였다. 이에 대하여 다음을 답하시오.
가. SW개발보안 방법론
나. 구현 단계의 시큐어 코딩(Secure Coding)

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 개발 보안 |
| 토픽(소) | 시큐어 코딩 |
| 출제 | 모의 2017.04 |
| 유형 | 관리 |
| 번호 | 2 |

## 해설

### 출제 배경 및 의도

소프트웨어 보안 취약점의 대부분이 개발 단계에서 발생하므로, SDL(Security Development Lifecycle) 방법론과 구현 단계의 시큐어 코딩 규칙(행안부 가이드, OWASP)을 체계적으로 서술해야 한다.

### 1. SW개발 보안 방법론

#### 가. MS SDL(Security Development Lifecycle)

| 단계 | 보안 활동 |
|------|-----------|
| 교육 | 보안 인식 교육, 위협 모델링 훈련 |
| 요구사항 | 보안 요구사항 정의, 품질 게이트 설정 |
| 설계 | 위협 모델링(STRIDE), 공격 표면 분석 |
| 구현 | 시큐어 코딩, 금지 API 목록 적용 |
| 검증 | 정적 분석(SAST), 동적 분석(DAST), 퍼징 |
| 출시 | 사고 대응 계획, 최종 보안 검토(FSR) |
| 대응 | 취약점 신고 처리, 패치 릴리즈 |

#### 나. OWASP SAMM(Software Assurance Maturity Model)

- 거버넌스, 설계, 구현, 검증, 운영 5개 영역 × 3단계 성숙도
- 조직의 소프트웨어 보안 역량 평가 및 개선 로드맵

#### 다. 행안부 소프트웨어 개발 보안 가이드

- 입력 데이터 검증·표현, API 오용, 보안 기능, 시간 및 상태, 에러 처리, 코드 품질, 캡슐화, 환경 7개 분류

### 2. 구현 단계의 시큐어 코딩

#### OWASP Top 10(2021) 기반 주요 취약점 및 방어

| 취약점 | 설명 | 방어 코딩 |
|--------|------|-----------|
| **A01 취약한 접근제어** | 권한 없는 기능 접근 | 서버 측 권한 검증, RBAC 적용 |
| **A02 암호화 실패** | 민감 데이터 평문 전송·저장 | TLS 적용, 강력한 해시(bcrypt) |
| **A03 SQL Injection** | 입력값을 SQL에 직접 삽입 | 파라미터화 쿼리, Prepared Statement |
| **A04 보안 설계 실패** | 보안 미고려 설계 | 위협 모델링, Secure-by-Design |
| **A07 인증 실패** | 취약한 세션 관리·패스워드 | MFA, 강력한 패스워드 정책 |
| **A09 보안 로깅·모니터링 실패** | 공격 탐지 불가 | 보안 이벤트 로깅, SIEM 연동 |

#### 행안부 시큐어 코딩 규칙 주요 항목

```java
// 나쁜 예: SQL Injection 취약
String query = "SELECT * FROM user WHERE id='" + userId + "'";

// 좋은 예: Prepared Statement
PreparedStatement pstmt = conn.prepareStatement(
    "SELECT * FROM user WHERE id=?");
pstmt.setString(1, userId);
```

```java
// 나쁜 예: 경로 조작 취약
File file = new File("/upload/" + filename);

// 좋은 예: 허용 목록 검증
if (!filename.matches("[a-zA-Z0-9._-]+")) {
    throw new SecurityException("Invalid filename");
}
```

### 실무 제언

**SAST/DAST CI/CD 통합**
- **챌린지**: 개발자가 시큐어 코딩 규칙을 알더라도 코드 리뷰 시 보안 취약점을 놓치는 경우가 많다.
- **제언**: Sonar Qube·Checkmarx(SAST)를 CI 파이프라인에 통합하여 빌드 시 자동으로 보안 취약점을 검출하고, DAST(ZAP, Burp Suite)를 스테이징 환경에 자동 적용하며, 취약점 발견 시 빌드를 자동 차단하는 Quality Gate를 설정해야 한다.
