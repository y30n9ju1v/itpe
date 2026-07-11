---
title: "IT 관련 법규 및 공공 정책"
date: 2026-07-11T11:24:18+09:00
tags: ["최신기술", "IT법규", "개인정보보호법", "가명정보", "소프트웨어진흥법", "대기업참여제한", "서브노트"]
draft: false
---

# IT 관련 법규 및 공공 정책 서브노트

> **두음 머리에 박기 🧠**
> - **익·가·개** (개인정보 식별 통제 분류 3단계: 복원 불가 **익**명정보 ➔ 추가 정보 결합 시 복원 가능 **가**명정보 ➔ 고유한 **개**인정보)
> - **국·신·재** (공공 SW 대기업 제한 예외 승인 요건: **국**가 안보 영향, 국가 **신**기술 실증 사업, 긴급한 **재**난 대응)
> - **통·과·공** (가명정보 정보주체 동의 없이 활용 가능한 3대 법적 목적: **통**계 작성, **과**학적 연구, **공**익적 기록보존)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **개인정보보호법 (가명정보 활성화) 및 소프트웨어진흥법 (대기업 참여제한 예외)** |
| **정의** | 데이터 활용과 사생활 보호의 조화를 꾀하는 **개인정보보호법(가명정보)**과, 중소 SW기업 동반성장 및 대기업 진입 장벽을 규정하는 **소프트웨어진흥법** 등 국가 IT 제도 프레임워크 |
| **키워드** | 익·가·개, 통·과·공, 안전조치의무 (추가정보 분리), 대기업참여제한 (국·신·재), 상용 SW 직접구매 |
| **개념도** | **[ 개인정보의 가명정보 전환 및 법적 안전 활용 라이프사이클 ]**<br>`[ 식별 개인정보 ] ➔ [ 비식별 조치 (삭제, 범주화, 해시 대체) ] ➔ [ 가명정보 ] ➔ [ 통·과·공 목적으로 동의 없이 활용 ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼ (안전조치의무 준수)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 추가 정보 분리 보관 (물리/논리적) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`[ 식별 가능성 발생 시 즉시 처리 중단 ]` |
| **구성요소** | 1. **가명정보 (Pseudonymized Data)**: 추가 정보의 결합 없이는 특정 개인을 알아볼 수 없게 임시 암호 대체한 정보<br>2. **안전조치 의무**: 가명정보와 결합할 수 있는 추가 정보를 별도 서버에 저장하고 접근 권한을 철저히 차단 통제<br>3. **대기업 참여제한 제도**: 공공 SW 분야의 중소기업 육성을 위해 자산 5조원 이상 대기업의 입찰 참여 금액 한도 설정<br>4. **상용 SW 분리발주**: 시스템 구축(SI) 사업 발주 시 상용 패키지 소프트웨어를 별도로 분리하여 조달 구매하는 제도 |
| **비교** | **가명정보 (Pseudonymized)**<br>- **재식별 가능성**: 추가 정보 결합 시 특정 개인 식별 가능 (유사 식별 가능)<br>- **법적 적용 여부**: 개인정보보호법 적용 범위 내 (단 동의 면제 특례)<br><br>**익명정보 (Anonymized)**<br>- **재식별 가능성**: 다른 어떤 정보를 결합해도 영구적으로 식별 불가능 (완전 비식별)<br>- **법적 적용 여부**: 개인정보보호법 적용 전면 제외 (일반 데이터로 자유 유통) |
| **차별화** | **공공 정보화 사업의 대기업 참여제한 부작용 완화 및 상용 SW 활성화 실무 정책 제언**<br>1. **대형 공공 시스템 품질 관리를 위한 제도 개선**: 대형 차세대 금융/의료 공공 프로젝트에서 대기업 참여제한에 따른 시스템 잦은 장애(예: 교육망 마비 등)를 극복하기 위해, 핵심 기간망에 대해서는 심의위원회의 예외인정(국·신·재) 절차를 간소화하고 대-중-소 상생 컨소시엄의 책임 지분 조율 제도화.<br>2. **상용 SW 직접구매(직구) 비율 강화**: 발주처의 편의적 SI 하청 통합 개발 문화를 탈피하고, 완성도 높은 솔루션을 정부 조달 나라장터에서 직접 개별 구매(상용 SW 분리발주 의무화 기준 강화)하여 국내 SW 산업 체력 강화.<br>3. **데이터 결합 전문기관 연동 체계 수립**: 상이한 가명 정보(예: 통신 데이터 + 금융 데이터)를 상호 이종 결합할 때, 법적으로 승인된 3대 결합 전문기관(KISA 등)에 승인 신청 후 가명 처리를 거쳐 안전하게 데이터를 병합 및 신사업 발굴. |
