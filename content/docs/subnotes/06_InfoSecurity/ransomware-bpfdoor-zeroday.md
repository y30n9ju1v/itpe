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
| **정의** | 데이터를 암호화하고 금전을 요구하는 **랜섬웨어**가 서비스형 비즈니스 모델로 진화한 **RaaS**, Linux BPF 기능을 악용해 포트 없이 은닉하는 고급 백도어 **BPFdoor**, 그리고 패치가 존재하지 않는 상태에서 악용되는 **제로데이 취약점** — 세 위협 모두 초기 침투 후 은닉·확산을 거쳐 피해를 극대화하는 공통 공격 수명주기를 가진다 |
| **키워드** | RaaS, WannaCry/LockBit, AES+RSA 하이브리드, BPF/eBPF, 3-2-1 백업, CVE, Log4Shell, 가상패칭 |
| **개념도** | **[ 침해사고 공통 진행 단계와 각 위협의 위치 ]**<br>`[ 제로데이 익스플로잇 (패치 없는 최초 침투) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ BPFdoor 백도어 설치 (매직패킷 대기, 은닉 지속) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ 역방향셸 활성화, 측면이동`<br>`[ 랜섬웨어(RaaS) 배포: AES로 파일암호화 → RSA로 대칭키 암호화 → 랜섬노트 → 결제요구 ]` |
| **구성요소** | 1. **랜섬웨어 vs RaaS**: 랜섬웨어는 개발·운영 직접 수행(높은 진입장벽), RaaS는 개발자(20~30%)와 운영자/Affiliate(70~80%)로 역할 분리되어 진입장벽이 낮음(LockBit, REvil, BlackCat)<br>2. **감염경로**: 피싱 이메일, 취약점 익스플로잇(MS17-010), RDP 무차별대입, 공급망 공격, 악성광고<br>3. **BPFdoor**: 커널 BPF 소켓으로 모든 트래픽을 스니핑하며 매직패킷 인식 시에만 역방향 셸 활성화 → 포트 LISTEN이 없어 방화벽·netstat로 탐지 불가, RC4 암호화 통신, /proc·환경변수로 지속성 확보<br>4. **제로데이 생명주기**: 취약점 존재(개발자 미인지)→공격자 발견·익스플로잇 개발→공격 시작→CVE 등록·공개→패치 개발(수일~수개월)→배포 후 N-Day로 전환<br>5. **사고 대응 6단계(랜섬웨어)**: 격리→KISA(118) 신고→포렌식 증거보존→피해범위 파악→백업 복구→재발방지 |
| **비교** | **기존 백도어**<br>- **탐지 포인트**: 특정 포트 LISTEN 상태 → 포트 스캔·netstat로 탐지 가능<br>- **위장 수준**: 프로세스명 그대로 노출, 재부팅 시 소멸 가능<br><br>**BPFdoor**<br>- **탐지 포인트**: BPF 소켓 기반 패시브 리스닝으로 포트 자체가 없어 방화벽·netstat 탐지 불가<br>- **위장 수준**: cron·httpd 등 정상 프로세스명 위장, /proc 기반 지속성으로 수년간 잠복 가능 |
| **차별화** | **알려지지 않은 위협(제로데이·은닉형 백도어)에 대한 행위 기반 방어 전략**<br>1. **가상 패칭(Virtual Patching)으로 패치 공백기 방어**: 제로데이 공개 직후 정식 패치가 나오기 전까지 WAF 규칙으로 알려진 공격 패턴을 임시 차단하여 노출 기간을 최소화.<br>2. **eBPF 기반 커널 모니터링(Falco/Tetragon)으로 BPFdoor류 은닉 백도어 탐지**: 정상적 BPF 프로그램 실행과 비정상 실행을 구분하는 행위 기반 탐지를 도입하여, 포트 없는 은닉 통신도 커널 시스템콜 감사로 적발.<br>3. **랜섬웨어 대비 3-2-1 백업 원칙과 네트워크 세분화 병행**: 3개 복사본·2개 매체·1개 오프사이트 백업으로 복호화 키 없이도 복구 가능한 체계를 갖추고, 마이크로 세분화로 BPFdoor·랜섬웨어의 측면이동 확산 경로를 사전 차단. |
