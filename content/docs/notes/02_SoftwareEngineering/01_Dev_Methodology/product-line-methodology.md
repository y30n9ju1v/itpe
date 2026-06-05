---
title: "제품계열 방법론 (Product Line Methodology)"
date: 2026-05-08T23:38:40+09:00
tags: ["peim", "소프트웨어공학", "개발방법론", "제품계열", "SPL", "공통자산", "재사용"]
draft: false
exam_peim: ["136회"]
---

## 개요

소프트웨어 제품계열(Software Product Line, SPL)은 공통된 아키텍처와 재사용 가능한 핵심 자산을 기반으로 관련 제품 집합을 체계적으로 개발하는 방법론이다. 개별 제품을 처음부터 개발하는 대신 공통 플랫폼(Core Assets)을 먼저 구축하고 이를 활용해 다양한 변형 제품을 빠르게 생산한다.

## 핵심 내용

**개념과 특징**
- 핵심 자산(Core Assets): 아키텍처, 컴포넌트, 테스트 케이스, 도메인 모델
- 변동성 관리(Variability Management): 공통점과 차이점을 명시적으로 정의
- 두 가지 개발 프로세스: 도메인 공학(Domain Engineering) + 응용 공학(Application Engineering)

**활용 기술**
| 기술 | 설명 |
|------|------|
| Feature Model | 제품계열의 공통/선택/대안 특성을 트리 구조로 표현 |
| 컴포넌트 기반 개발 (CBD) | 재사용 가능한 컴포넌트 라이브러리 구축 |
| 아키텍처 프레임워크 | 제품 전반에 적용되는 공통 참조 아키텍처 |
| 제품 구성 자동화 | Feature 선택에 따른 제품 자동 빌드 |

**고려사항**
1. 도메인 범위 정의: 어느 제품들을 계열로 묶을지 결정 (scope too wide → 복잡도 폭증)
2. 변동성 관리 복잡도: 수백 개의 feature 조합 테스트 필요
3. 조직 변화 관리: 도메인팀과 제품팀의 역할 분리
4. 초기 투자 비용: 핵심 자산 구축에 상당한 선행 투자 필요

## 실무 적용 예시

자동차 임베디드 SW에서 동일한 ECU 플랫폼 위에 소형차·중형차·SUV용 소프트웨어를 제품계열로 관리하여, 신차종 소프트웨어 개발 기간을 60% 단축한 사례가 있다.

## 출제 포인트

- 제품계열 방법론의 도메인 공학 vs 응용 공학 구분
- Feature Model의 개념과 변동성 관리
- 기존 컴포넌트 재사용과의 차이점

## 연관 개념

- [테일러링]({{< relref "/docs/notes/02_SoftwareEngineering/01_Dev_Methodology/tailoring" >}}) — 방법론 적용 시 변형 전략
- [로우코드/노코드]({{< relref "/docs/notes/02_SoftwareEngineering/01_Dev_Methodology/low-code-no-code" >}}) — 공통 플랫폼 기반 빠른 제품 생산이라는 공통점

## 참고 기출

- 136회 2교시 4번 (PEIM)
