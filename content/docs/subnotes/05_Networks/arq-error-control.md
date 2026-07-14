---
title: "오류 제어 및 ARQ"
date: 2026-07-11T11:19:35+09:00
tags: ["네트워크", "에러제어", "ARQ", "FEC", "BEC", "GoBackN", "SelectiveRepeat", "HARQ", "서브노트"]
draft: false
---

# 오류 제어 및 ARQ 서브노트

> **두음 머리에 박기 🧠**
> - **전·후** (네트워크 에러 복구 대분류: 전방향 에러 정정 **전**FEC, 후방향 에러 정정 **후**BEC/ARQ)
> - **정·고·셀** (대표적 ARQ 기법 3종: **정**지대기 Stop-and-Wait, **고**백엔 Go-Back-N, **셀**렉티브 리피트 Selective Repeat)
> - **체·해·씨** (에러 감지 및 정정 코드: 오류 감지 **체**크섬 Checksum, 단일비트 정정 **해**밍코드 Hamming, 다항식 에러 검출 **씨**RC)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **네트워크 에러 제어 (Error Control) 및 자동 재전송 요구 (ARQ, Automatic Repeat Request)** |
| **정의** | 패킷유실·비트에러 발생 시 역방향 피드백채널로 송신측에 재전송요청 → 오류복구하는 **후방향 에러제어(BEC) 기술 및 ARQ 프로토콜** |
| **키워드** | FEC vs BEC, 정·고·셀 ARQ, CRC 다항식 검출, 해밍코드, HARQ (CC / IR 기법) |
| **개념도** | **[ Go-Back-N ARQ ]** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[ Selective Repeat ARQ ]**<br>송신 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 수신 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 송신 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 수신<br>`│ ─ 프레임 1, 2, 3, 4 ─➔ │` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ ─ 프레임 1, 2, 3, 4 ─➔ │`<br>`│ (프레임 2 유실 발생)     │` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (프레임 2 유실 발생)     │`<br>`│ ◀─── NAK 2 전송 ─────── │` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ ◀─── NAK 2 전송 ─────── │`<br>`│ ─ 프레임 2, 3, 4 재송 ➔ │ (2번 이후 일괄 재전송)`&nbsp;&nbsp;&nbsp;&nbsp;`│ ─ 프레임 2만 재전송 ──➔ │ (유실된 2번만 선별 재송)` |
| **구성요소** | 1. **FEC (순방향 에러정정)**: 수신측이 추가 오류정정부호(해밍코드 등)로 자체 에러검출+복구<br>2. **BEC (역방향 에러정정)**: 오류발생 시 송신측 재전송(ARQ) 요구 → 복구 (CRC 검출코드와 결합)<br>3. **Go-Back-N ARQ**: 송신윈도우 크기만큼 연속전송, 에러프레임 이후 전체 폐기 후 일괄재전송<br>4. **Selective Repeat ARQ**: 에러난 특정프레임만 재전송, 수신윈도우 크기만큼 버퍼링+정렬큐 탑재<br>5. **CRC 계산**: 데이터 뒤 (디바이더길이-1)개 0 추가 → 생성다항식(디바이더)으로 모듈로-2 나눗셈(XOR, 올림수無) → 나머지=CRC값(FCS). 예) 데이터 1011010, 디바이더 1101 → 0추가 후 1011010000÷1101(XOR반복) → 나머지 011=CRC값, 전송데이터=1011010011, 수신측 재계산 나머지 0이면 정상<br>6. **해밍코드 계산**: 패리티비트를 2의 거듭제곱 위치(1,2,4,8...)에 배치, 각 패리티는 커버위치들의 짝/홀 패리티 만족하도록 설정. 오류 시 각 패리티 재검사(신드롬 s1·s2·s4·s8) → XOR 위반(1) 패리티조합 이진수(s8s4s2s1)가 오류비트 위치 직접지시 → 해당비트 반전으로 1비트 오류 자동수정 |
| **비교** | **Go-Back-N ARQ**<br>- **재전송량**: 에러프레임 이후 전체 (대역폭 낭비)<br>- **수신버퍼**: 1개 (단순구조)<br>- **구현난이도**: 매우단순 (정렬알고리즘 불필요)<br><br>**Selective Repeat ARQ**<br>- **재전송량**: 에러감지된 단일프레임만 (대역폭 고효율)<br>- **수신버퍼**: 송신윈도우 크기와 동일 (메모리 소모)<br>- **구현난이도**: 복잡 (재정렬큐 오버헤드) |
| **차별화** | **무선 5G 통신의 HARQ(Hybrid ARQ) 최적화 및 신호합성 기법**<br>1. **HARQ(물리계층 FEC+링크계층 ARQ 결합)**: 무선채널 전송실패율 높음 → FEC 채널부호화(LDPC)+RLC ARQ 병합, 초기에러 물리계층 고속해결 + 대형유실만 재전송해 전송속도 보장<br>2. **Chase Combining(CC) 신호결합**: 실패한 손상패킷 폐기않고 버퍼보관 → 재전송패킷과 합성 → 에너지증폭 → SNR 향상 → 복구성공률 상승<br>3. **Incremental Redundancy(IR) 점진적 중복**: 재전송 시 동일패킷 대신 디코딩보조 추가 패리티비트만 전송 → 대역폭소모 최소화 + 신속한 프레임정합 회복 |
