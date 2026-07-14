---
title: "TTPs(MITRE ATT&CK)와 공격표면·측면이동"
date: 2026-07-11T11:38:05+09:00
tags: ["보안", "TTPs", "MITREATTCK", "공격표면", "측면이동", "위협인텔리전스", "서브노트"]
draft: false
---

# TTPs(MITRE ATT&CK)와 공격표면·측면이동 서브노트

> **두음 머리에 박기 🧠**
> - **전·기·절** (TTPs 3계층, 위→구체 순: **전**술 Tactics-왜, **기**법 Techniques-어떻게, **절**차 Procedures-무엇을)
> - **네·소·물·인·클** (공격 표면 5대 유형: **네**트워크, **소**프트웨어, **물**리적, **인**적, **클**라우드/SaaS)
> - **초·탐·자·권·이·지·목** (측면이동 7단계: **초**기접근→내부**탐**색→**자**격증명수집→**권**한상승→측면**이**동실행→**지**속성확보→**목**표달성)
> - **정·무·전·익·설·C2·목** (Cyber Kill Chain 7단계: **정**찰→**무**기화→**전**달→**익**스플로잇→**설**치→**C2** 통신→**목**표달성)
> - **A·P·T** (APT 3대 특성: **A**dvanced 제로데이·커스텀 악성코드, **P**ersistent 수개월~수년 지속·발각회피, **T**hreat 정보유출·파괴·금전피해 목표)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **TTPs(Tactics, Techniques, Procedures)/MITRE ATT&CK 및 공격표면(Attack Surface)·측면이동(Lateral Movement)** |
| **정의** | 공격자 행동패턴 전술·기법·절차 3계층(전·기·절) 체계화 위협인텔리전스 프레임워크 TTPs(MITRE ATT&CK) + 초기침투 후 내부망 권한·범위확대 측면이동(초·탐·자·권·이·지·목) 발생하는 진입점 총합 공격표면(네·소·물·인·클) |
| **키워드** | MITRE ATT&CK, 14개 전술, Pass-the-Hash/Ticket, 공격 벡터, Micro-segmentation, PAM, UEBA |
| **개념도** | **[ TTPs 기반 측면이동 킬체인 ]**<br>`[ 초기접근: 피싱/취약점익스플로잇/VPN자격증명도용 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 내부탐색(nmap/BloodHound) ] ➔ [ 자격증명수집(Mimikatz) ] ➔ [ 권한상승 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 측면이동(PtH/PtT/RDP/WMI) ] ➔ [ 지속성확보(백도어) ] ➔ [ 목표달성(데이터유출/랜섬웨어) ]` |
| **구성요소** | 1. **Tactics(전술)**: 공격자 목적("왜") — 초기접근·권한상승·측면이동·데이터유출 등 ATT&CK 14개전술<br>2. **Techniques(기법)**: 달성방법("어떻게") — 피싱, Pass-the-Hash, SQL인젝션 등 전술매핑 수백개기법<br>3. **Procedures(절차)**: 구체구현("무엇을") — 특정악성코드의 특정레지스트리키 수정 등 상세행동<br>4. **공격표면 5유형**: 네트워크(오픈포트·API), 소프트웨어(취약코드), 물리(USB·서버실), 인적(피싱대상), 클라우드(버킷권한오류)<br>5. **측면이동 핵심기법**: Pass-the-Hash(평문없이 NTLM해시 인증), Pass-the-Ticket(Kerberos티켓 재사용), RDP/WMI 원격명령<br>6. **Cyber Kill Chain(정·무·전·익·설·C2·목)**: Lockheed Martin APT 7단계 연쇄프레임워크. 정찰(OSINT·소셜엔지니어링)→무기화(악성코드+익스플로잇결합)→전달(피싱·워터링홀·USB)→익스플로잇(취약점실행)→설치(백도어·RAT)→C2통신(HTTPS·DNS터널링)→목표달성(유출·랜섬웨어), 체인차단 시 피해방지 가능. 킬체인 7단계=흐름이해용(개략), ATT&CK 300+세부기법=정밀탐지룰설계용, 상호보완 매핑<br>7. **Cyber Deception(허니팟/허니넷)**: 허위자산(Decoy) 배치→유인·기만 능동방어. 허니팟(단일, 저/고상호작용) vs 허니넷(네트워크구성, 전과정관찰). 허니파일·허니토큰·허니유저·허니서버·DNS싱크홀 세분화, Decoy접근=오탐없는 100%탐지·측면이동 조기발견·공격자시간소모·TTPs수집 |
| **비교** | **공격 표면 (Attack Surface)**<br>- 개념범위: 공격가능 모든진입점 정적총합(사전위험평가 대상)<br>- 관리방법: 불필요서비스·포트 비활성화, 정기스캐닝 축소(ASR)<br><br>**측면 이동 (Lateral Movement)**<br>- 개념범위: 초기침투 이후 실제발생 동적공격행위 시퀀스<br>- 관리방법: 네트워크 마이크로세분화, PAM, EDR·UEBA 실시간행위탐지 |
| **차별화** | **TTPs 기반 위협헌팅 및 측면이동 방어 실무전략**<br>1. **MITRE ATT&CK 매핑 → SIEM 탐지룰 고도화**: APT그룹 TTPs → 상관분석규칙 변환, 시그니처 아닌 행동패턴 탐지 Threat Hunting체계<br>2. **네트워크 마이크로세분화 → 측면이동 경로 사전차단**: 내부망 가상세그먼트 분리, 세그먼트간 불필요TCP차단 → 초기침투해도 피해범위 국한<br>3. **레드팀/블루팀 시뮬레이션 → 방어체계 검증**: TTPs기반 BAS 정기수행 → PAM·EDR·UEBA 등 Pass-the-Hash 등 실효성 지속검증 |
