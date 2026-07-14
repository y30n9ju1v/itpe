---
title: "PKI 및 전자서명 메커니즘"
date: 2026-07-11T11:19:35+09:00
tags: ["보안", "PKI", "전자서명", "인증기관", "OCSPStapling", "CRL", "서브노트"]
draft: false
---

# PKI 및 전자서명 메커니즘 서브노트

> **두음 머리에 박기 🧠**
> - **인·등·저·사** (PKI 4대 논리 구성요소: 인증기관 **인**CA, 등록기관 **등**RA, 디렉토리 저장소 **저**Repository, 가입자 및 **사**용자 End Entity)
> - **인·무·부** (전자서명 3대 보안 기능: 송신처 **인**증 Authentication, 데이터 **무**결성 Integrity, 송수신 **부**인방지 Non-repudiation)
> - **씨·오·스** (인증서 유효성 검증 체계: 취소목록 **C**RL, 온라인조회 **O**CSP, 서버대행 검증 OCSP **S**tapling)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **공개키 기반 구조 (PKI, Public Key Infrastructure) 및 전자서명 (Digital Signature)** |
| **정의** | 공개키 신뢰성 보장 위한 인증서 발급·관리 **보안 프레임워크(PKI)** + 송신처 인증·위변조 방지·부인방지(인·무·부) 실현하는 **전자서명 기술** |
| **키워드** | CA / RA, X.509 인증서, CRL vs OCSP, OCSP Stapling, 비대칭키 해시 매핑, 부인방지 |
| **개념도** | **[ 전자서명(Digital Signature) 생성 및 검증 절차 ]**<br>1. **전자서명 생성 (송신자)**<br>&nbsp;&nbsp;`[ 원본 메시지 ] ➔ [ SHA-256 해시 ] ➔ [ 메시지 다이제스트 ] ➔ [ 송신자 개인키 암호화 ] ➔ [ 전자서명 ]`<br>2. **전자서명 검증 (수신자)**<br>&nbsp;&nbsp;`[ 수신한 서명 ] ➔ [ 송신자 공개키 복호화 ] ──➔ [ 다이제스트 A ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`├── 일치 시 신뢰성/무결성 보장 (인·무·부)`<br>&nbsp;&nbsp;`[ 수신한 메시지 ] ➔ [ SHA-256 해시 ] ──────➔ [ 다이제스트 B ]` |
| **구성요소** | 1. **인증기관(CA)**: 공개키 보증 인증서(X.509 표준) 디지털서명 발급하는 최상위기관<br>2. **등록기관(RA)**: 신원확인·발급신청 접수 대행 → CA 오버헤드 분산 보조기관<br>3. **CRL**: 정지/취소 인증서 일련번호 목록 파일(LDAP 저장소 배포)<br>4. **OCSP**: 인증서 폐기여부 실시간 확인 HTTP 쿼리-응답 규격 |
| **비교** | **CRL**<br>- 검증방식: 클라이언트가 취소목록 전체파일(.crl) 주기적 다운로드 후 로컬비교<br>- 문제점: 파일 커질수록 트래픽 폭증, 업데이트 배포주기까지 보안갭 발생<br><br>**OCSP**<br>- 검증방식: 질의대상 인증서 상태만 OCSP 응답기에 HTTP 실시간 질의<br>- 문제점: CA 서버 쿼리 집중 → 가용성 저하 우려, 접속도메인 노출(Privacy 문제) |
| **차별화** | **인증서 검증 지연 개선 위한 OCSP Stapling 도입 및 분산 검증 아키텍처**<br>1. **OCSP Stapling 메커니즘**: 클라이언트가 직접 CA에 질의 않고, 웹서버가 미리 CA에서 서명된 OCSP 응답 캐싱(예: 1시간 단위) → TLS Handshake(`Certificate` 전송) 시 함께 묶어(Staple) 전달 — 접속경로 노출 방지 + Handshake 지연 해소<br>2. **X.509 v3 표준 확장 필드**: SAN(주체 대체이름), Key Usage(키 용도제한), CDP(CRL 분배점), AIA(OCSP 접속주소) 명시 → 확장가능한 유연한 보안정책 통제<br>3. **루트 CA 신뢰모델 튜닝**: 단일 루트CA 붕괴 시 전체신뢰 붕괴 방지 → 하위에 중간CA(Subordinate CA) 계층구조로 다중설계, 도메인별 피해범위 격리·복구 유연성 확보 |
