---
title: "디지털 포렌식 아티팩트 (Windows 아티팩트 유형)"
date: 2026-07-11T11:38:05+09:00
tags: ["보안", "디지털포렌식", "아티팩트", "증거수집", "레지스트리", "서브노트"]
draft: false
---

# 디지털 포렌식 아티팩트 (Windows 아티팩트 유형) 서브노트

> **두음 머리에 박기 🧠**
> - **레·이·파·웹·프·링·페·섀** (Windows 8대 아티팩트 유형: **레**지스트리, **이**벤트로그, **파**일시스템($MFT), **웹**브라우저, **프**리패치(*.pf), **링**크파일(*.lnk), **페**이지파일, **섀**도복사본)
> - **휘·비** (아티팩트 2대 분류: **휘**발성(RAM·캐시, 수집우선순위 높음), **비**휘발성(디스크·레지스트리, 우선순위 낮음))

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **디지털 포렌식 아티팩트 (Digital Forensics Artifact) — Windows 8대 유형** |
| **정의** | OS·애플리케이션이 자동 생성 → 삭제 후에도 잔존 가능 → 타임스탬프로 행위 시간순 재구성 가능한 **증거 데이터(레·이·파·웹·프·링·페·섀)** |
| **키워드** | NTUSER.DAT/SAM, $MFT, Prefetch(*.pf), LNK, pagefile.sys, VSS, Write Blocker |
| **개념도** | **[ 아티팩트 기반 사용자 행위 타임라인 재구성 ]**<br>`[ 프리패치(*.pf): 최근 실행 프로그램 ] ──┐`<br>`[ 링크파일(*.lnk): 최근 열람 파일경로 ] ──┤`<br>`[ 레지스트리(NTUSER.DAT): 사용자 설정·자동시작 ] ──┼──➔ [ 타임스탬프 정렬 ] ──➔ 사건 재구성 타임라인`<br>`[ 이벤트로그(Security.evtx): 로그인·정책변경 ] ──┤`<br>`[ $MFT: 파일 생성·수정·삭제 기록 ] ──┘`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`(전 과정 Write Blocker로 원본 무결성 보존 + 해시 검증)` |
| **구성요소** | 1. **레지스트리**: NTUSER.DAT/SAM/SYSTEM — 사용자 설정, 최근 실행파일, 자동시작 목록<br>2. **이벤트로그**: Security.evtx/System.evtx — 로그인 기록, 프로세스 실행, 정책 변경<br>3. **파일시스템($MFT)**: NTFS 마스터파일테이블 — 파일 생성·수정·삭제 기록<br>4. **웹브라우저**: 히스토리·캐시·쿠키 — 방문 URL, 다운로드 파일, 세션 정보<br>5. **프리패치(*.pf)**: 최근 실행된 프로그램 목록<br>6. **링크파일(*.lnk)**: 최근 열람 파일 경로<br>7. **페이지파일(pagefile.sys)**: 메모리 스왑 내용(악성코드 흔적 포함 가능)<br>8. **섀도복사본(VSS)**: 이전 파일 버전 복원 가능 |
| **비교** | **휘발성 아티팩트**<br>- 저장위치/수명: RAM·캐시 → 전원차단 시 즉시 소멸<br>- 수집원칙: 우선순위 최상위 (예: 실행 프로세스, 네트워크 연결)<br><br>**비휘발성 아티팩트**<br>- 저장위치/수명: 디스크·레지스트리 → 삭제 전까지 유지<br>- 수집원칙: 낮은 우선순위 (예: 로그, 레지스트리 하이브) — RFC 3227: RAM→스왑→네트워크→디스크 순 |
| **차별화** | **Windows 아티팩트 기반 사건 재구성 실무 절차**<br>1. 다중 아티팩트 교차검증: 프리패치·링크파일·레지스트리 MRU 교차대조 → 단일 아티팩트 삭제·변조에도 행위 재구성<br>2. 무결성 보존: 전 과정 Write Blocker 적용 + MD5/SHA-256 해시로 수집 전후 동일성 증명 → 법적 증거능력 담보<br>3. VSS 기반 삭제파일 복원: 원본 삭제·변조 시에도 이전버전 스냅샷 분석 → 침해 이전 상태 복원, TTPs 기반 공격자 행위 역추적 |
