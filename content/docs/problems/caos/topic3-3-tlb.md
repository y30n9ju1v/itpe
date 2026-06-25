---
title: "가상주소-물리주소 변환 과정과 TLB"
date: 2026-06-14T09:00:00+09:00
tags: ["CA/OS", "컴퓨터구조", "운영체제", "핵토200"]
topic_no1: 3
topic_no2: 3
topic_large: "가상메모리관리"
topic_small: "변환과정TLB"
exam_ref: "110"
exam_type: "응용"
question_no: 3
---

## 문제

페이지 방식을 이용하는 가상 메모리에서 가상주소(Virtual address)를 주기억장치 주소인 물리주소(Physical Address)로 변환하는 과정을 페이지 테이블(Page Table) 및 TLB(Translation Lookaside Buffer)를 이용하여 설명하시오.

## 출제 정보

| 항목 | 내용 |
|------|------|
| 토픽(대) | 가상메모리관리 |
| 토픽(소) | 변환과정TLB |
| 출제 | 110회 |
| 유형 | 응용 |
| 번호 | 3 |

## 해설

### 출제 배경 및 의도

가상메모리에서 CPU는 항상 가상주소(Virtual Address)를 발행한다. 이 가상주소가 실제 데이터가 있는 물리주소(Physical Address)로 변환되는 과정은 모든 메모리 접근마다 발생하는 핵심 작업이다. 이 변환을 하드웨어적으로 수행하는 것이 MMU(Memory Management Unit)이며, 변환 속도를 높이기 위한 캐시가 TLB(Translation Lookaside Buffer)다.

110회 응용 문제로 출제된 이 주제는 페이징의 내부 동작 원리를 깊이 이해하는지를 검증한다. 채점관은 가상주소의 구조(VPN + Offset), 페이지 테이블 조회 과정, TLB 히트/미스 시의 동작 차이, 그리고 유효 메모리 접근 시간(EMAT) 계산까지 체계적으로 서술하기를 기대한다.

64비트 시스템에서 단일 페이지 테이블의 한계와 다단계 페이지 테이블, 그리고 컨텍스트 스위치 시 TLB 플러시 비용을 ASID로 완화하는 방법까지 연결하면 실무 역량을 효과적으로 어필할 수 있다.

### 1. 가상주소-물리주소 변환(Address Translation), 개요

정 의  • MMU(Memory Management Unit)가 CPU가 발행한 가상주소(VPN + Offset)를 페이지 테이블을 통해 물리주소(PFN × 페이지크기 + Offset)로 변환하는 하드웨어 메커니즘
       - TLB는 최근 변환 결과를 캐싱하여 매번 페이지 테이블을 조회하는 비용을 제거

```
CPU 발행
[가상주소: VPN | Offset]
         │
         ▼
   ┌─────────────┐
   │  TLB 조회   │──Hit──▶ PFN 획득 ─────────────────┐
   └─────────────┘                                    │
         │ Miss                                       │
         ▼                                            ▼
   ┌─────────────────┐                    [물리주소: PFN | Offset]
   │  Page Table 조회│                                │
   │  (메모리 접근)  │──▶ PFN 획득 → TLB 갱신         │
   └─────────────────┘                               ▼
                                              Main Memory 접근
```

- TLB 적중 시 1회 메모리 접근, 미스 시 2회 이상 접근이 필요하므로 TLB 적중률이 성능의 핵심이다.

### 2. 페이지 테이블을 통한 주소 변환 상세

1) 가상주소 구조 (32비트, 페이지 크기 4KB 기준)

| 필드 | 비트 수 | 역할 |
|------|---------|------|
| VPN (Virtual Page Number) | 상위 20비트 | 페이지 테이블 인덱스, 최대 2^20 = 1M개 페이지 |
| Offset (페이지 내 변위) | 하위 12비트 | 페이지/프레임 내 위치, 가상→물리 동일 유지 |

2) 페이지 테이블 항목(PTE) 구성 및 변환 단계

| 구분 | 항목 | 설명 |
|------|------|------|
| PTE 필드 | PFN (Physical Frame Number) | 실제 물리 프레임 번호 |
| PTE 필드 | Valid Bit | 0이면 Page Fault 발생 → OS가 디스크에서 적재 |
| PTE 필드 | Dirty Bit | 페이지가 수정되었는지 표시 (Write-Back 정책용) |
| PTE 필드 | Protection Bit | Read/Write/Execute 권한 제어 |
| 변환 단계 | ① VPN 추출 | CPU 가상주소에서 상위 비트 추출 |
| 변환 단계 | ② PTE 조회 | 페이지 테이블 베이스 레지스터(CR3) + VPN으로 PTE 위치 산출 |
| 변환 단계 | ③ Valid 확인 | 0이면 Page Fault, 1이면 PFN 획득 |
| 변환 단계 | ④ 물리주소 계산 | 물리주소 = PFN × 페이지크기 + Offset |

- 페이지 테이블이 메모리에 있으므로 TLB 없이는 메모리 접근이 2회 필요하여 성능이 절반으로 저하된다.

### 3. TLB 동작 및 성능 분석

1) TLB Hit vs Miss 경로 비교

```
TLB Hit (빠른 경로):
  가상주소 → TLB 병렬 조회 → Hit → 물리주소 획득 → 메모리 1회 접근
  소요 시간: TLB접근시간 + 메모리접근시간

TLB Miss (느린 경로):
  가상주소 → TLB 조회 → Miss → Page Table 조회(메모리 1회)
  → PTE 획득 → TLB 갱신 → 물리주소 → 메모리 접근(1회)
  소요 시간: TLB접근시간 + 2 × 메모리접근시간
```

2) EMAT(Effective Memory Access Time) 계산

| 구분 | 수식 | 예시 계산 |
|------|------|-----------|
| EMAT 공식 | h×(t_TLB + t_M) + (1-h)×(t_TLB + 2×t_M) | TLB 20ns, 메모리 100ns, 적중률 90% |
| TLB Hit | 0.9 × (20 + 100) = 108ns | - |
| TLB Miss | 0.1 × (20 + 200) = 22ns | - |
| **EMAT** | **108 + 22 = 130ns** | TLB 없이는 200ns → 35% 향상 |

3) 다단계 페이지 테이블 (64비트 시스템)

```
가상주소: [ L1 인덱스 | L2 인덱스 | L3 인덱스 | Offset ]
              │              │              │
         L1 테이블 ──▶  L2 테이블 ──▶  L3 테이블 ──▶ PFN

x86-64: PGD → PUD → PMD → PTE (4단계)
장점: 사용되지 않는 주소 공간의 하위 테이블 생략 → 메모리 절약
단점: 레벨만큼 메모리 접근 횟수 증가 → TLB 중요성 더욱 커짐
```

- 다단계 페이지 테이블에서 TLB 미스 비용이 더 커지므로, TLB 적중률 유지가 성능의 핵심이다.

4) 멀티코어 TLB Shootdown

멀티코어 환경에서 한 코어가 페이지 테이블을 변경하면 다른 코어의 TLB에 남아있는 구 매핑을 모두 무효화해야 한다. 이 과정을 TLB Shootdown이라 한다.

```
Core 0 (페이지 해제)          Core 1, 2, 3
   │                            │
   │─── IPI(Inter-Processor ────▶│ TLB Invalidate (INVLPG)
   │    Interrupt) 브로드캐스트  │
   │                            │
   │◀── 완료 ACK 수신 ──────────│
   │
   ▶ 페이지 해제 완료 (모든 코어 구 매핑 제거 후)
```

| 단계 | 동작 | 설명 |
|------|------|------|
| ① 페이지 테이블 수정 | Core 0이 PTE 무효화 | 자신의 TLB는 INVLPG로 즉시 제거 |
| ② IPI 발송 | 다른 모든 코어에 인터럽트 | 코어 수에 비례하여 오버헤드 증가 |
| ③ TLB 플러시 | 각 코어가 INVLPG 실행 | 해당 페이지 가상주소 항목만 제거 |
| ④ ACK 응답 | 완료 신호 반환 | Core 0이 모든 ACK 수신 후 계속 진행 |

- IPI 오버헤드는 코어 수에 비례하므로, 코어 수가 많은 서버에서 fork/munmap/mprotect 빈도가 높으면 TLB Shootdown이 CPU 사용률의 수% 이상을 차지할 수 있다.  "끝"

### 실무 제언

**컨텍스트 스위치와 TLB 플러시 성능 문제**
- **챌린지**: 운영체제가 프로세스를 교체(컨텍스트 스위치)할 때마다 이전 프로세스의 TLB 항목을 무효화(TLB 플러시)해야 한다. TLB 플러시는 이후 수백 번의 TLB 미스를 유발하며, 이 비용이 컨텍스트 스위치 오버헤드의 상당 부분을 차지한다.
- **제언**: ARM과 최신 x86 프로세서는 ASID(Address Space Identifier)를 TLB 항목에 태그하여 프로세스별 TLB 항목을 구분한다. 컨텍스트 스위치 시 전체 플러시 없이 다른 ASID 항목만 무효화하여 성능을 유지할 수 있으므로, 고성능 서버의 CPU 선정 기준으로 ASID 지원 여부를 반드시 확인해야 한다.

**가상화 환경에서의 2단계 주소 변환(EPT/NPT)**
- **챌린지**: VM(가상 머신) 환경에서는 게스트 가상주소→게스트 물리주소→호스트 물리주소의 2단계 변환이 필요하다. 소프트웨어 Shadow Page Table은 메모리 사용량과 컨텍스트 스위치 오버헤드가 크다.
- **제언**: Intel EPT(Extended Page Tables) 또는 AMD NPT(Nested Page Tables)를 활용하면 하드웨어가 2단계 변환을 직접 지원하여 가상화 오버헤드를 크게 줄일 수 있다. KVM 기반 클라우드 환경에서는 EPT 활성화 여부를 CPU 플래그(`ept` in /proc/cpuinfo)로 반드시 확인해야 한다.

**Spectre/Meltdown 취약점과 KPTI**
- **챌린지**: Spectre/Meltdown 취약점은 CPU의 투기적 실행(Speculative Execution)이 TLB와 캐시의 사이드 채널을 통해 커널 메모리를 노출시키는 문제다.
- **제언**: KPTI(Kernel Page Table Isolation) 패치는 사용자 모드와 커널 모드의 페이지 테이블을 완전히 분리하여 취약점을 차단한다. 단, 모드 전환 시마다 TLB 플러시가 발생하여 시스템 콜 빈도가 높은 워크로드에서 성능 저하(5~30%)가 발생하므로 PCID(Process-Context Identifiers) 지원 CPU 사용이 권장된다.
