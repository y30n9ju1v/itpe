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
| **정의** | 패킷 유실 및 비트 에러 발생 시, 역방향 피드백 채널을 이용해 송신 측에 재전송을 요청하여 오류를 복구하는 **후방향 에러 제어(BEC) 기술 및 ARQ 프로토콜** |
| **키워드** | FEC vs BEC, 정·고·셀 ARQ, CRC 다항식 검출, 해밍코드, HARQ (CC / IR 기법) |
| **개념도** | **[ Go-Back-N ARQ ]** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**[ Selective Repeat ARQ ]**<br>송신 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 수신 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 송신 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 수신<br>`│ ─ 프레임 1, 2, 3, 4 ─➔ │` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ ─ 프레임 1, 2, 3, 4 ─➔ │`<br>`│ (프레임 2 유실 발생)     │` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ (프레임 2 유실 발생)     │`<br>`│ ◀─── NAK 2 전송 ─────── │` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`│ ◀─── NAK 2 전송 ─────── │`<br>`│ ─ 프레임 2, 3, 4 재송 ➔ │ (2번 이후 일괄 재전송)`&nbsp;&nbsp;&nbsp;&nbsp;`│ ─ 프레임 2만 재전송 ──➔ │ (유실된 2번만 선별 재송)` |
| **구성요소** | 1. **FEC (순방향 에러 정정)**: 수신측이 추가 오류 정정 부호(해밍코드 등)로 스스로 에러 검출 및 복구 수행<br>2. **BEC (역방향 에러 정정)**: 오류 발생 시 송신측에 재전송(ARQ)을 요구하여 복구 (CRC 검출 코드와 결합)<br>3. **Go-Back-N ARQ**: 송신 윈도우 크기만큼 연속 전송. 에러 프레임 이후 수신된 모든 프레임을 폐기하고 일괄 재전송<br>4. **Selective Repeat ARQ**: 에러가 난 특정 프레임만 재전송. 수신 윈도우 크기만큼 수신측에 버퍼링 및 정렬 큐 탑재<br>5. **CRC (Cyclic Redundancy Check) 계산**: 데이터 뒤에 (디바이더 길이-1)개의 0을 추가한 뒤 생성 다항식(디바이더)으로 모듈로-2 나눗셈(XOR 연산, 올림수 없음) 수행, 최종 나머지가 CRC 값(FCS). 예) 데이터 1011010, 디바이더 1101 → 0추가 후 1011010000 ÷ 1101(XOR 반복) → 나머지 011이 CRC 값, 전송데이터=1011010011, 수신측 재계산 나머지 0이면 정상<br>6. **해밍코드(Hamming Code) 계산**: 패리티 비트를 2의 거듭제곱 위치(1,2,4,8...)에 배치하고 각 패리티는 자신이 커버하는 위치들의 짝수/홀수 패리티를 만족하도록 설정. 오류 발생 시 각 패리티 위치를 재검사(신드롬 s1·s2·s4·s8)해 XOR 결과가 위반(1)인 패리티들을 조합한 이진수(s8s4s2s1)가 오류 비트 위치를 직접 지시 → 해당 비트 반전으로 1비트 오류 자동 수정 |
| **비교** | **Go-Back-N ARQ**<br>- **재전송량**: 에러 프레임 이후의 전체 프레임 (대역폭 낭비 우려)<br>- **수신 버퍼**: 1개 (단순 구조)<br>- **구현 난이도**: 매우 단순 (수신 버퍼 정렬 알고리즘 불필요)<br><br>**Selective Repeat ARQ**<br>- **재전송량**: 오직 에러가 감지된 특정 단일 프레임 (대역폭 고효율)<br>- **수신 버퍼**: 송신 윈도우 크기와 동일 (메모리 소모)<br>- **구현 난이도**: 복잡함 (수신 프레임 재정렬 큐 오버헤드 발생) |
| **차별화** | **무선 5G 통신에서의 HARQ (Hybrid ARQ) 최적화 및 신호 합성 기법**<br>1. **HARQ (물리 계층 FEC + 링크 계층 ARQ 결합)**: 전송 실패율이 높은 무선 채널에서 FEC의 채널 부호화 기술(LDPC)과 RLC 계층의 ARQ를 병합하여 초기 에러는 물리계층에서 고속 해결하고 대형 유실만 재전송하여 전송 속도 보장.<br>2. **Chase Combining (CC) 신호 결합 적용**: 수신에 실패한 손상 패킷을 폐기하지 않고 버퍼에 보관해 둔 뒤, 재전송된 패킷과 합성하여 에너지를 증폭시킴으로써 신호 대 잡음비(SNR)를 높여 복구 성공률 향상.<br>3. **Incremental Redundancy (IR) 점진적 중복 기법**: 재전송 시 동일한 패킷을 보내는 대신, 디코딩을 돕는 추가적인 패러티 비트(Parity)만 덧붙여 송신하여 대역폭 소모를 최소화하고 신속한 프레임 정합 회복. |
