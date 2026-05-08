---
title: "BPFdoor (Berkeley Packet Filter 기반 백도어)"
date: 2026-05-08T00:00:00+09:00
tags: ["peim", "정보보안", "보안시스템", "BPFdoor", "백도어", "APT", "리눅스보안"]
draft: false
---

## 개요

BPFdoor는 Linux 커널의 BPF(Berkeley Packet Filter) 기능을 악용한 고급 백도어 악성코드로, 2022년 발견되었다. 특정 매직 패킷을 수신하면 활성화되는 패시브 리스닝(Passive Listening) 방식으로, 방화벽·포트 스캔·프로세스 목록으로는 탐지가 극히 어렵다.

## 핵심 내용

### BPFdoor 개념

**BPF(Berkeley Packet Filter)**: 커널 수준에서 네트워크 패킷을 필터링·처리하는 Linux 기능. tcpdump, eBPF 등에 정상 활용되지만 악용 시 강력한 은닉 수단이 됨.

**동작 원리**:
```
[공격자] → [매직 패킷 전송 (특정 포트 불필요)]
               ↓
[BPFdoor] BPF 소켓으로 모든 트래픽 스니핑 중
               ↓
매직 패킷 패턴 인식 → 역방향 셸(Reverse Shell) 활성화
               ↓
[공격자] ← 원격 제어 채널 확립
```

### 기존 백도어 방식과의 차이점

| 구분 | 기존 백도어 | BPFdoor |
|------|-----------|---------|
| **리스닝 포트** | 특정 포트 LISTEN 상태 | 포트 없음 (BPF 소켓) |
| **방화벽 탐지** | 포트 차단으로 탐지 가능 | 방화벽 우회 |
| **netstat 탐지** | LISTEN 포트로 탐지 가능 | 탐지 불가 |
| **프로세스 위장** | 이름 그대로 노출 | 정상 프로세스명으로 위장 (cron, httpd) |
| **암호화** | 평문 또는 단순 암호화 | RC4 암호화 통신 |
| **지속성** | 재부팅 시 소멸 가능 | /proc, 환경변수 활용 지속성 확보 |

### BPFdoor 위협 요소와 기업 영향

- **은닉성 극대화**: 수년간 탐지 없이 잠복 가능
- **특권 프로세스 접근**: root 권한으로 실행, 전체 시스템 제어
- **데이터 유출**: 내부 데이터베이스·파일 시스템 접근
- **측면 이동 거점**: 내부망 침투 및 확산 기반
- **공급망 공격 연계**: APT 그룹(중국계 추정) 활용 사례

### 대응 방안

**기술적 방안**:
- **eBPF 모니터링**: 비정상 BPF 프로그램 실행 감시 (Falco, Tetragon)
- **커널 감사 로그**: auditd로 BPF 시스템 콜 모니터링
- **EDR 솔루션**: 커널 수준 행위 탐지
- **네트워크 트래픽 분석**: 비정상 외부 통신 패턴 탐지
- **파일 무결성 검사**: /proc 파일 변조 감지

**관리적 방안**:
- 최소 권한 원칙: root 실행 서비스 최소화
- 정기 취약점 스캐닝 및 패치 관리
- 위협 인텔리전스(TI) 기반 IOC 모니터링

## 출제 포인트

- BPF의 정상 기능을 설명 후 BPFdoor의 악용 방식 서술
- 기존 백도어 vs BPFdoor 비교표 (포트·방화벽·프로세스 탐지 관점)
- 위협 요소 3~4가지 + 기업 영향
- 기술적·관리적 대응 방안 구분 서술

## 연관 개념

- [TTPs]({{< relref "/docs/peim/06_InfoSecurity/01_SecurityTech/ttps" >}}) — BPFdoor 공격의 TTPs 분류
- [디지털 포렌식 아티팩트]({{< relref "/docs/peim/06_InfoSecurity/05_DigitalForensics/digital-forensics-artifact" >}}) — BPFdoor 탐지 시 아티팩트
- [N²SF]({{< relref "/docs/peim/06_InfoSecurity/03_InfoProtection/n2sf-network-security" >}}) — 망 보안체계로 초기 침투 차단

## 참고 기출

- 137회 4교시 1번
