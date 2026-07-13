---
title: "암호문 공격 4유형 및 해시함수·Rainbow Table 방어"
date: 2026-07-11T11:38:05+09:00
tags: ["보안", "암호분석", "암호문공격", "해시함수", "레인보우테이블", "솔트", "서브노트"]
draft: false
---

# 암호문 공격 4유형 및 해시함수·Rainbow Table 방어 서브노트

> **두음 머리에 박기 🧠**
> - **COA·KPA·CPA·CCA** (암호문 공격 4대 유형, 공격자 보유 정보가 강해지는 순서: **C**iphertext-**O**nly, **K**nown-**P**laintext, **C**hosen-**P**laintext, **C**hosen-**C**iphertext)
> - **사·무·레·충·동** (단방향 해시함수 5대 문제점: **사**전공격, **무**차별대입, **레**인보우테이블, **충**돌, **동**일입력동일출력)
> - **b·P·s·A** (Key Stretching 4대 알고리즘: **b**crypt, **P**BKDF2, **s**crypt, **A**rgon2)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **암호문 공격(Ciphertext Attack) 4대 유형 및 해시함수 Rainbow Table 방어(Salt/Key Stretching)** |
| **정의** | 공격자가 보유한 정보 수준에 따라 암호를 해독하려는 **암호문 공격 4유형(COA·KPA·CPA·CCA)**과, 단방향 해시 함수의 취약점을 노리는 **Rainbow Table 공격** 및 이를 무력화하는 **Salt·Key Stretching** 방어 기법 |
| **키워드** | COA/KPA/CPA/CCA, IND-CPA/CCA2, Rainbow Table, Reduction Function, Hash Salt, PBKDF2/bcrypt/Argon2 |
| **개념도** | **[ 패스워드 저장 시 Rainbow Table 방어 파이프라인 ]**<br>`평문 패스워드 + Salt(랜덤값) ──➔ [ Hash 함수 반복 적용(Key Stretching) ] ──➔ 저장: {Salt, HashValue}`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`검증 시: 저장된 Salt로 입력 패스워드 재해시 ➔ 비교 ──➔ [ 공격자의 사전 계산 Rainbow Table 무력화 ]` |
| **구성요소** | 1. **COA(암호문 단독)**: 암호문만 보유, 빈도분석 등으로 해독(고전암호에 유효)<br>2. **KPA(기지평문)**: 평문-암호문 쌍 일부 보유(에니그마 해독 사례)<br>3. **CPA(선택평문)**: 암호화 오라클 접근 가능, 공개키 암호의 기본 가정, IND-CPA 안전성 기준<br>4. **CCA(선택암호문)**: 복호화 오라클 접근 가능(가장 강력), CBC 패딩 오라클 공격 사례, IND-CCA2가 현대 암호의 목표 수준<br>5. **Rainbow Table**: 해시-환원함수 체인 구조로 저장공간을 절약한 사전계산 조회테이블<br>6. **Salt**: 해시 전 랜덤값 추가로 동일 패스워드도 다른 해시 생성 → Rainbow Table 무력화<br>7. **Key Stretching**: 해시 연산을 수만 회 반복(bcrypt/PBKDF2/scrypt/Argon2)하여 공격자의 초당 시도 횟수를 대폭 저하<br>8. **암호학적 해시 3대 특성**: 역상 저항성(Preimage Resistance, H(x)=y가 주어질 때 x를 찾기 불가능 → 단방향성 보장), 제2역상 저항성(Second Preimage Resistance, x가 주어질 때 H(x)=H(x')인 다른 x'를 찾기 불가능), 충돌 저항성(Collision Resistance, 임의의 두 x·x'로 H(x)=H(x')를 찾기 불가능) — 강도 순서는 충돌 저항성 > 제2역상 저항성 > 역상 저항성<br>9. **DB에서의 해시 활용**: 해시 인덱스(버킷에 레코드 주소 저장, 메모리 DB의 동등 조건 검색에 O(1) 적용), 파티셔닝(해시 기반 수평 분할, DB 샤딩) — Salt/Key Stretching 기반 패스워드 저장과는 별개로 무결성·검색 성능 목적의 해시 활용 |
| **비교** | **암호문 공격 (Cryptanalysis)**<br>- **공격 대상**: 암호 알고리즘·키 자체의 수학적 안전성<br>- **방어 목표**: IND-CCA2 등 이론적 불구별성(Indistinguishability) 확보<br><br>**Rainbow Table 공격**<br>- **공격 대상**: 해시된 패스워드의 원문 역추적(사전 계산 기반)<br>- **방어 목표**: Salt로 사전계산 테이블 자체를 무효화 + Key Stretching으로 실시간 계산 비용 증가 |
| **차별화** | **현대 암호 시스템의 계층적 방어 설계 전략**<br>1. **알고리즘 선택 단계에서 CCA 안전성 확보**: RSA-OAEP, AES-GCM처럼 IND-CCA2를 만족하는 인증암호(AEAD)를 채택하여 패딩 오라클 등 CCA류 공격을 원천 차단.<br>2. **패스워드 저장 체계에 Salt+Key Stretching 결합**: bcrypt·Argon2와 같이 자체 Salt를 포함하고 메모리 집약적으로 설계된 알고리즘을 사용해 GPU 병렬 크래킹과 Rainbow Table 공격에 동시 대응.<br>3. **무결성·서명 검증에는 충돌 저항성이 검증된 해시(SHA-256/SHA-3) 사용**: MD5·SHA-1 등 충돌 취약 알고리즘을 배제하여 디지털 서명·블록체인 등 무결성 요구 서비스의 안전성을 담보. |
