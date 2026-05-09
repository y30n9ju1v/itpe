---
title: "동적 WEP 키 (Dynamic WEP Key)"
date: 2026-05-09T14:07:16+09:00
tags: ["pecs", "시스템보안", "보안기술", "WEP", "무선보안", "동적키", "802.1X"]
draft: false
exam_pecs: ["134회"]
---

## 개요

동적 WEP 키(Dynamic WEP Key)는 정적 WEP의 취약점을 보완하기 위해 세션마다 또는 일정 주기마다 암호화 키를 자동 갱신하는 방식이다. 802.1X 인증과 RADIUS 서버를 결합하여 각 사용자에게 고유한 키를 동적으로 배포한다.

## 핵심 내용

### WEP (Wired Equivalent Privacy) 개요

- IEEE 802.11b 초기 무선 보안 표준 (1997)
- RC4 스트림 암호, 40bit/104bit 키
- **취약점**: 24bit IV(Initialization Vector) 재사용 → Aircrack 등으로 수분 내 키 크랙 가능

### 정적 WEP vs 동적 WEP

| 구분 | 정적 WEP | 동적 WEP |
|------|---------|---------|
| **키 배포** | 수동 설정, 전 단말 동일 키 | 802.1X + RADIUS로 자동 배포 |
| **키 수명** | 영구 (수동 변경 전까지) | 세션마다 또는 주기적 갱신 |
| **인증** | 없음 (또는 공유 키 인증) | EAP 기반 사용자 인증 |
| **보안성** | 매우 낮음 | WEP보다 향상, WPA보다 낮음 |
| **도입 목적** | 기존 WEP HW 활용 + 보안 강화 | 레거시 HW 교체 없이 임시 보완 |

### 동적 WEP 동작 과정

```
1. 무선 클라이언트 → AP: 연결 요청
2. AP → RADIUS 서버: 인증 위임 (802.1X/EAP)
3. RADIUS: 사용자 자격증명 검증
4. RADIUS → AP: 인증 성공 + 새 WEP 키 전달
5. AP → 클라이언트: 키 배포
6. 세션 암호화 (동적 키 사용)
7. 주기적 키 갱신 반복
```

### 한계 및 현황

- 동적 갱신으로 보안 향상되나 WEP 알고리즘 자체(RC4 + IV 취약성) 한계 존재
- **WPA(Wi-Fi Protected Access)**: 동적 WEP의 한계를 TKIP(Temporal Key Integrity Protocol)로 해결
- **WPA2**: CCMP/AES 적용, 현재 표준
- **WPA3**: 최신 표준, SAE(Simultaneous Authentication of Equals)

## 출제 포인트

- WEP 취약점: 짧은 IV(24bit) 재사용으로 키 노출
- 동적 WEP의 개선점: 802.1X + RADIUS 기반 키 자동 갱신
- WEP → 동적 WEP → WPA → WPA2 → WPA3 발전 계보

## 연관 개념

- [방화벽·IDS·IPS·VPN]({{< relref "/docs/06_InfoSecurity/02_SecuritySystems/firewall-ids-ips-vpn" >}}) — 네트워크 보안 장비
- Wi-Fi 7 — 최신 무선 표준의 보안 (WPA3)

## 참고 기출

- 134회 1교시 6번 (PECS)
