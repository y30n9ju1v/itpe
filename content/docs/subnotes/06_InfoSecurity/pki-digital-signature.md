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
| **정의** | 공개키의 신뢰성을 보장하기 위해 인증서를 발급·관리하는 **보안 프레임워크(PKI)**와, 메시지의 송신처 인증, 위변조 방지 및 부인방지(인·무·부)를 실현하는 **전자서명 기술** |
| **키워드** | CA / RA, X.509 인증서, CRL vs OCSP, OCSP Stapling, 비대칭키 해시 매핑, 부인방지 |
| **개념도** | **[ 전자서명(Digital Signature) 생성 및 검증 절차 ]**<br>1. **전자서명 생성 (송신자)**<br>&nbsp;&nbsp;`[ 원본 메시지 ] ➔ [ SHA-256 해시 ] ➔ [ 메시지 다이제스트 ] ➔ [ 송신자 개인키 암호화 ] ➔ [ 전자서명 ]`<br>2. **전자서명 검증 (수신자)**<br>&nbsp;&nbsp;`[ 수신한 서명 ] ➔ [ 송신자 공개키 복호화 ] ──➔ [ 다이제스트 A ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`├── 일치 시 신뢰성/무결성 보장 (인·무·부)`<br>&nbsp;&nbsp;`[ 수신한 메시지 ] ➔ [ SHA-256 해시 ] ──────➔ [ 다이제스트 B ]` |
| **구성요소** | 1. **인증기관 (CA)**: 가입자의 공개키를 보증하는 인증서(X.509 표준 형식)를 디지털 서명하여 발급하는 최상위 기관<br>2. **등록기관 (RA)**: 가입자 신원 확인, 인증서 발급 신청 접수를 대행하여 CA의 오버헤드를 분산하는 보조 기관<br>3. **인증서 취소 목록 (CRL)**: 효력이 정지/취소된 인증서의 일련번호 목록을 담은 파일 (LDAP 저장소에 배포)<br>4. **온라인 인증서 상태 프로토콜 (OCSP)**: 실시간으로 인증서의 폐기 여부를 확인하기 위해 HTTP 쿼리-응답을 제공하는 규격 |
| **비교** | **CRL (Certificate Revocation List)**<br>- **검증 방식**: 클라이언트가 CA 저장소로부터 취소 목록 전체 파일(.crl)을 직접 주기적 다운로드 후 로컬 비교<br>- **문제점**: 파일 크기가 커질수록 네트워크 트래픽 폭증, 다음 업데이트 배포 주기까지의 시간적 보안 갭 발생<br><br>**OCSP (Online Certificate Status Protocol)**<br>- **검증 방식**: 클라이언트가 질의 대상 인증서 상태만 OCSP 응답기(Responder)에 HTTP로 실시간 질의<br>- **문제점**: CA 서버에 질의 쿼리가 집중되어 가용성 저하 우려, 클라이언트의 접속 도메인 노출(Privacy 문제) |
| **차별화** | **인증서 검증 지연 개선을 위한 OCSP Stapling 도입 및 분산 검증 아키텍처**<br>1. **OCSP Stapling 매커니즘**: 클라이언트가 직접 CA에 OCSP 질의를 날리지 않고, 웹 서버가 미리 CA로부터 전자서명된 OCSP 응답서를 캐싱(예: 1시간 단위)해 두었다가 TLS Handshake 단계(`Certificate` 전송 시)에 함께 묶어(Staple) 전달하는 기법. 이를 통해 클라이언트 접속 경로 노출 방지 및 Handshake 3-Way 지연 완벽 해소.<br>2. **X.509 v3 표준 확장 필드의 중요성**: 인증서 내에 주체 대체 이름(SAN, Subject Alternative Name), 키 용도제한(Key Usage), CRL 분배점(CDP), OCSP 접속 주소(AIA)를 명시하여 확장 가능한 유연한 보안 정책 통제.<br>3. **루트 CA 신뢰 모델 튜닝**: 단일 루트 CA 붕괴 시 전체 신뢰가 붕괴되는 것을 막기 위해, 최상위 루트 하위에 중간 CA(Subordinate CA)를 계층적 구조로 다중 설계하여 도메인별 피해 범위 격리 및 복구 유연성 확보. |
