---
title: "랜섬웨어(RaaS), BPFdoor 백도어, 제로데이 취약점"
date: 2026-07-11T11:38:05+09:00
tags: ["보안", "랜섬웨어", "RaaS", "BPFdoor", "제로데이", "백도어", "서브노트"]
draft: false
---

# 랜섬웨어(RaaS), BPFdoor 백도어, 제로데이 취약점 서브노트

> **두음 머리에 박기 🧠**
> - **C2·대·공·삭** (랜섬웨어 하이브리드 암호화 4단계: **C2**서버 접속·공개키수신 → **대**칭키(AES)로 파일암호화 → 대칭키를 공개**공**개키(RSA)로 재암호화 → 원본대칭키 **삭**제)
> - **포·넷·자·프·암·지** (BPFdoor가 기존 백도어와 다른 6대 특징: **포**트없음(BPF소켓), 방화벽 우회로 **넷**stat탐지불가, 정상프로세스명 위장, **프**로세스 위장, RC4 **암**호화통신, /proc 기반 **지**속성)
> - **존·발·공·개·패·전** (제로데이 생명주기 6단계: **존**재(개발자모름)→공격자**발**견→**공**격시작→CVE**개**공→**패**치개발→배포**전**환) — 실은: 존재→발견→공격→공개→패치개발→배포

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **랜섬웨어·RaaS(Ransomware as a Service), BPFdoor 백도어, 제로데이(Zero-Day) 취약점** |
| **정의** | 데이터암호화+금전요구 랜섬웨어 → 서비스형 진화한 RaaS, Linux BPF 악용 포트없는 은닉 백도어 BPFdoor, 패치부재 악용 제로데이 취약점 — 3위협 모두 초기침투→은닉·확산 공통 수명주기 |
| **키워드** | RaaS, WannaCry/LockBit, AES+RSA 하이브리드, BPF/eBPF, 3-2-1 백업, CVE, Log4Shell, 가상패칭 |
| **개념도** | **[ 침해사고 공통 진행 단계와 각 위협의 위치 ]**<br>`[ 제로데이 익스플로잇 (패치 없는 최초 침투) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ BPFdoor 백도어 설치 (매직패킷 대기, 은닉 지속) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 역방향셸 활성화, 측면이동`<br>`[ 랜섬웨어(RaaS) 배포: AES로 파일암호화 → RSA로 대칭키 암호화 → 랜섬노트 → 결제요구 ]` |
| **구성요소** | 1. **랜섬웨어 vs RaaS**: 랜섬웨어=개발·운영 직접수행(진입장벽↑), RaaS=개발자(20~30%)·운영자/Affiliate(70~80%) 역할분리로 진입장벽↓(LockBit, REvil, BlackCat)<br>2. **감염경로**: 피싱메일, 취약점익스플로잇(MS17-010), RDP 무차별대입, 공급망공격, 악성광고<br>3. **BPFdoor**: 커널 BPF소켓 전트래픽 스니핑 → 매직패킷 인식 시만 역방향셸 활성화, 포트LISTEN없어 방화벽·netstat 탐지불가, RC4암호화통신, /proc·환경변수 지속성<br>4. **제로데이 생명주기**: 취약점존재(미인지)→공격자발견·익스플로잇개발→공격시작→CVE등록·공개→패치개발(수일~수개월)→배포후 N-Day전환<br>5. **사고대응 6단계**: 격리→KISA(118)신고→포렌식 증거보존→피해범위파악→백업복구→재발방지 |
| **비교** | **기존 백도어**<br>- 탐지포인트: 특정포트 LISTEN → 포트스캔·netstat 탐지가능<br>- 위장수준: 프로세스명 그대로노출, 재부팅 시 소멸가능<br><br>**BPFdoor**<br>- 탐지포인트: BPF소켓 패시브리스닝, 포트자체 없음 → 방화벽·netstat 탐지불가<br>- 위장수준: cron·httpd 등 정상프로세스명 위장, /proc기반 수년잠복 |
| **차별화** | **미지 위협(제로데이·은닉백도어) 행위기반 방어 전략**<br>1. **가상패칭(Virtual Patching) → 패치공백기 방어**: 제로데이 공개직후~정식패치 전 WAF규칙 임시차단 → 노출기간 최소화<br>2. **eBPF 커널모니터링(Falco/Tetragon) → BPFdoor류 탐지**: 정상/비정상 BPF실행 구분 행위기반탐지 → 포트없는 은닉통신도 시스템콜감사로 적발<br>3. **3-2-1 백업원칙+네트워크세분화 병행**: 3복사본·2매체·1오프사이트 → 복호화키 없이도 복구, 마이크로세분화 → 측면이동 확산경로 사전차단 |
