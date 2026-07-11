---
title: "데브옵스, SRE, 플랫폼 엔지니어링"
date: 2026-07-11T11:14:19+09:00
tags: ["소프트웨어공학", "DevOps", "SRE", "플랫폼엔지니어링", "ErrorBudget", "서브노트"]
draft: false
---

# 데브옵스, SRE, 플랫폼 엔지니어링 서브노트

> **두음 머리에 박기 🧠**
> - **문·자·린·측·공** (DevOps 핵심 가치 CALMS: **문**화 Culture, **자**동화 Automation, **린** Lean, **측**정 Measurement, **공**유 Sharing)
> - **지·트·에·포** (SRE 4대 황금 신호: **지**연 시간 Latency, **트**래픽 Traffic, **에**러 Errors, **포**화도 Saturation)
> - **지·지·지** (MLOps 자동화 영역: **지**속적 통합 CI, **지**속적 배포 CD, **지**속적 학습 CT)

---

| 분류 | 기술 기술사 서브노트 작성 예시 (1교시형 포맷) |
| :--- | :--- |
| **토픽명** | **DevOps 사상과 SRE 실천법, 그리고 플랫폼 엔지니어링** |
| **정의** | 개발과 운영의 단절을 극복하는 **DevOps 사상**을 SW 공학 방식으로 실현한 **SRE(사이트 신뢰성 공학)**와, 개발팀의 인지 부하를 줄이기 위해 내부 개발자 플랫폼(IDP)을 구축하는 **플랫폼 엔지니어링 기술** |
| **키워드** | CALMS(문·자·린·측·공), SLI/SLO/Error Budget, 4대 황금 신호(지·트·에·포), IDP(내부 개발자 플랫폼), MLOps |
| **개념도** | `[ 개발자 ] ➔ 셀프 서비스 요청 ➔ [ 플랫폼 엔지니어링 (IDP) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (템플릿 인프라 프로비저닝)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 개발 (Dev) ] ── (CI/CD 파이프라인) ──➔ [ 운영 (Ops) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`└────── [ SRE 관측성 (SLI/SLO 모니터링) ] ─────┘` |
| **구성요소** | 1. **SLI/SLO/SLA**: SLI(서비스 품질 지표), SLO(목표치), SLA(고객 계약 지표)<br>2. **오류 예산 (Error Budget)**: 100% - SLO. 신속한 배포(Dev)와 시스템 안정성(Ops)의 타협 기준점 제공<br>3. **4대 황금 신호**: 지연 시간, 트래픽(QPS), 에러율, 시스템 포화도(CPU/MEM 등 임계치)<br>4. **IDP (Internal Developer Platform)**: 개발자가 직접 인프라를 프로비저닝할 수 있는 셀프 서비스 플랫폼<br>5. **MLOps**: 데이터 수집 ➔ 학습 ➔ 검증 ➔ 서빙의 전 과정을 자동화(CI/CD/CT)하는 AI 특화Ops |
| **비교** | **DevOps (사상/문화)**<br>- **초점**: 개발과 운영의 조직 장벽 허물기<br>- **역할**: 문화적 철학과 협업 프로세스 강조<br><br>**SRE (구체적 실천법)**<br>- **초점**: 소프트웨어 엔지니어가 운영 문제를 코드로 해결<br>- **역할**: 구글의 구체적 방법론. 운영 업무 50% 이하 제한, 자동화 50% 이상<br><br>**플랫폼 엔지니어링 (도구/플랫폼)**<br>- **초점**: 개발팀의 가상 인프라 및 도구의 인지 부하 감소<br>- **역할**: 셀프 서비스 플랫폼(IDP) 제품 개발 및 템플릿화 제공 |
| **차별화** | **Error Budget 정책 수립 및 MLOps 확장 시 갈등 완화 전략**<br>1. **배포 잠금(Freeze Policy) 자동화**: 오류 예산(Error Budget)이 소진(100% 소진)될 경우, 개발팀의 신규 기능 배포를 차단하고 안정성 개선 작업에만 강제 투입하는 규칙 명문화.<br>2. **MLOps 드리프트 지표 통합**: 단순 API 가용성 외에 AI 모델의 데이터 드리프트(Data Drift) 및 컨셉 드리프트(Concept Drift) 임계치 도달 여부를 SLI로 추가 정의하여 자동 CT(지속 학습) 트리거 연동.<br>3. **플랫폼 엔지니어링 포탈(IDP) 구축**: 가상머신/컨테이너 프로비저닝 단계를 템플릿화하여 보안/컴플라이언스 검증이 완료된 골든 패스(Golden Path)만 제공함으로써 Ops 리소스 낭비 원천 차단. |
