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
| **정의** | 공격자의 행동패턴을 전술·기법·절차 3계층(전·기·절)으로 체계화한 위협 인텔리전스 프레임워크 **TTPs(MITRE ATT&CK)**와, 초기 침투 후 내부망에서 권한·범위를 확대하는 **측면이동(초·탐·자·권·이·지·목)**이 발생하는 진입점 총합인 **공격표면(네·소·물·인·클)** |
| **키워드** | MITRE ATT&CK, 14개 전술, Pass-the-Hash/Ticket, 공격 벡터, Micro-segmentation, PAM, UEBA |
| **개념도** | **[ TTPs 기반 측면이동 킬체인 ]**<br>`[ 초기접근: 피싱/취약점익스플로잇/VPN자격증명도용 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 내부탐색(nmap/BloodHound) ] ➔ [ 자격증명수집(Mimikatz) ] ➔ [ 권한상승 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 측면이동(PtH/PtT/RDP/WMI) ] ➔ [ 지속성확보(백도어) ] ➔ [ 목표달성(데이터유출/랜섬웨어) ]` |
| **구성요소** | 1. **Tactics(전술)**: 공격자의 목적("왜") — 초기접근, 권한상승, 측면이동, 데이터유출 등 MITRE ATT&CK 14개 전술<br>2. **Techniques(기법)**: 목적 달성 방법("어떻게") — 피싱, Pass-the-Hash, SQL 인젝션 등 각 전술에 매핑된 수백 개 기법<br>3. **Procedures(절차)**: 기법의 구체적 구현("무엇을") — 특정 악성코드가 특정 레지스트리 키를 수정하는 상세 행동<br>4. **공격표면 5유형**: 네트워크(오픈포트·API), 소프트웨어(취약코드), 물리(USB·서버실), 인적(피싱대상 직원), 클라우드(버킷 권한 오류)<br>5. **측면이동 핵심 기법**: Pass-the-Hash(평문 없이 NTLM 해시로 인증), Pass-the-Ticket(Kerberos 티켓 재사용), RDP/WMI 원격 명령<br>6. **Cyber Kill Chain(정·무·전·익·설·C2·목)**: Lockheed Martin이 정립한 APT 공격 7단계 연쇄 프레임워크로, 정찰(OSINT·소셜엔지니어링)→무기화(악성코드+익스플로잇 결합)→전달(피싱·워터링홀·USB)→익스플로잇(취약점 실행)→설치(백도어·RAT)→C2 통신(HTTPS·DNS터널링)→목표달성(유출·랜섬웨어) 순으로 진행되며, 어느 단계에서든 체인을 끊으면 피해를 차단 가능. 킬 체인의 7단계는 ATT&CK 14개 전술보다 개략적이나 공격 흐름 이해에, ATT&CK은 300개 이상 세부기법으로 정밀 탐지룰 설계에 각각 유용해 상호 보완적으로 매핑 활용<br>7. **Cyber Deception(허니팟/허니넷)**: 허위 자산(Decoy)을 배치해 공격자를 유인·기만하는 능동 방어 기법으로, 단일 기만 시스템인 허니팟(저/고 상호작용)과 여러 허니팟을 네트워크로 구성해 공격 전 과정을 관찰하는 허니넷으로 구분. 허니파일·허니토큰·허니유저·허니서버·DNS싱크홀 등으로 세분화되며, Decoy 접근 시 오탐 없는 100% 공격 탐지·측면이동 조기 발견·공격자 시간 소모 유도·TTPs 수집을 통한 위협 인텔리전스 강화 효과를 제공 |
| **비교** | **공격 표면 (Attack Surface)**<br>- **개념 범위**: 공격이 가능한 모든 진입점의 정적 총합(사전 위험 평가 대상)<br>- **관리 방법**: 불필요한 서비스·포트 비활성화, 정기 취약점 스캐닝으로 축소(Attack Surface Reduction)<br><br>**측면 이동 (Lateral Movement)**<br>- **개념 범위**: 초기 침투 이후 실제로 발생하는 동적 공격 행위 시퀀스<br>- **관리 방법**: 네트워크 마이크로 세분화, 특권계정관리(PAM), EDR·UEBA로 실시간 행위 탐지 |
| **차별화** | **TTPs 기반 위협 헌팅 및 측면이동 방어 실무 전략**<br>1. **MITRE ATT&CK 매핑 기반 SIEM 탐지룰 고도화**: 알려진 APT 그룹의 TTPs를 SIEM 상관분석 규칙으로 변환하여, 단발성 시그니처가 아닌 공격자의 행동 패턴 자체를 탐지하는 위협 헌팅(Threat Hunting) 체계 구축.<br>2. **네트워크 마이크로 세분화로 측면이동 경로 사전 차단**: 공격표면 최소화 원칙에 따라 내부망을 가상 세그먼트로 분리하고, 세그먼트 간 불필요한 TCP 통신을 차단하여 초기 침투 성공 시에도 피해 범위를 국한.<br>3. **레드팀/블루팀 시뮬레이션으로 방어 체계 검증**: TTPs를 기반으로 한 공격 시뮬레이션(BAS)을 정기 수행하여 PAM·EDR·UEBA 등 탐지·대응 체계가 실제 Pass-the-Hash 등 기법에 효과적으로 반응하는지 지속 검증. |
