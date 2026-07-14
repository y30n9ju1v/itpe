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

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **DevOps 사상과 SRE 실천법, 그리고 플랫폼 엔지니어링** |
| **정의** | 개발·운영 단절 극복하는 **DevOps 사상**을 SW공학 방식으로 실현한 **SRE(사이트신뢰성공학)**, 개발팀 인지부하 감소 위해 IDP 구축하는 **플랫폼 엔지니어링 기술** |
| **키워드** | CALMS(문·자·린·측·공), SLI/SLO/Error Budget, 4대 황금 신호(지·트·에·포), IDP(내부 개발자 플랫폼), MLOps |
| **개념도** | `[ 개발자 ] ➔ 셀프 서비스 요청 ➔ [ 플랫폼 엔지니어링 (IDP) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (템플릿 인프라 프로비저닝)`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`[ 개발 (Dev) ] ── (CI/CD 파이프라인) ──➔ [ 운영 (Ops) ]`<br>&nbsp;&nbsp;&nbsp;&nbsp;`▲&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│`<br>&nbsp;&nbsp;&nbsp;&nbsp;`└────── [ SRE 관측성 (SLI/SLO 모니터링) ] ─────┘` |
| **구성요소** | 1. **SLI/SLO/SLA**: SLI(품질지표), SLO(목표치), SLA(고객계약지표)<br>2. **오류예산(Error Budget)**: 100%-SLO → 배포속도(Dev)-안정성(Ops) 타협 기준점<br>3. **4대 황금신호**: 지연시간, 트래픽(QPS), 에러율, 포화도(CPU/MEM 임계치)<br>4. **IDP**: 개발자 직접 인프라 프로비저닝 셀프서비스 플랫폼<br>5. **MLOps**: 데이터수집→학습→검증→서빙 전과정 자동화(CI/CD/CT)하는 AI특화Ops<br>6. **DevOps 장점**: 빠른배포주기, 품질향상(자동테스트), 사일로해소, 장애복구단축, 비용절감<br>7. **DevOps 단점**: 조직문화 저항, 초기구축비용, 보안검토 생략위험(→DevSecOps), 레거시호환, 도구학습 부담<br>8. **도구체인**: SCM(Git/GitLab), CI/CD(Jenkins/Actions/ArgoCD), 컨테이너(Docker/K8s), 모니터링(Prometheus/Grafana/ELK) |
| **비교** | **DevOps (사상/문화)**<br>- 초점: 개발-운영 조직장벽 허물기<br>- 역할: 문화적 철학·협업 프로세스 강조<br><br>**SRE (구체적 실천법)**<br>- 초점: SW엔지니어가 운영문제를 코드로 해결<br>- 역할: 구글식 방법론, 운영업무 50%이하 제한·자동화 50%이상<br><br>**플랫폼 엔지니어링 (도구/플랫폼)**<br>- 초점: 개발팀 인프라·도구 인지부하 감소<br>- 역할: 셀프서비스 플랫폼(IDP) 개발·템플릿화 제공 |
| **차별화** | **Error Budget 정책 수립 및 MLOps 확장 시 갈등완화 전략**<br>1. **배포 잠금(Freeze Policy) 자동화**: 오류예산 100% 소진 시 신규기능 배포차단, 안정성개선 작업만 강제투입 규칙화<br>2. **MLOps 드리프트 지표 통합**: API가용성 외 데이터/컨셉 드리프트 임계치 도달여부를 SLI로 추가정의 → 자동CT 트리거 연동<br>3. **플랫폼 엔지니어링 포탈(IDP) 구축**: VM/컨테이너 프로비저닝 템플릿화 → 보안/컴플라이언스 검증완료된 골든패스만 제공, Ops리소스 낭비 차단 |
