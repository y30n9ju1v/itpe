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
| **정의** | 공격자 보유정보 수준별 암호 해독 시도 **암호문 공격 4유형(COA·KPA·CPA·CCA)** + 단방향 해시함수 취약점 노리는 **Rainbow Table 공격** 및 이를 무력화하는 **Salt·Key Stretching** 방어기법 |
| **키워드** | COA/KPA/CPA/CCA, IND-CPA/CCA2, Rainbow Table, Reduction Function, Hash Salt, PBKDF2/bcrypt/Argon2 |
| **개념도** | **[ 패스워드 저장 시 Rainbow Table 방어 파이프라인 ]**<br>`평문 패스워드 + Salt(랜덤값) ──➔ [ Hash 함수 반복 적용(Key Stretching) ] ──➔ 저장: {Salt, HashValue}`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`▼`<br>`검증 시: 저장된 Salt로 입력 패스워드 재해시 ➔ 비교 ──➔ [ 공격자의 사전 계산 Rainbow Table 무력화 ]` |
| **구성요소** | 1. **COA(암호문단독)**: 암호문만 보유 → 빈도분석 등 해독(고전암호 유효)<br>2. **KPA(기지평문)**: 평문-암호문 쌍 일부 보유(에니그마 해독 사례)<br>3. **CPA(선택평문)**: 암호화 오라클 접근가능 → 공개키암호 기본가정, IND-CPA 안전성 기준<br>4. **CCA(선택암호문)**: 복호화 오라클 접근가능(최강) → CBC 패딩오라클 공격 사례, IND-CCA2가 현대암호 목표수준<br>5. **Rainbow Table**: 해시-환원함수 체인구조 → 저장공간 절약형 사전계산 조회테이블<br>6. **Salt**: 해시 전 랜덤값 추가 → 동일패스워드도 다른해시 생성 → Rainbow Table 무력화<br>7. **Key Stretching**: 해시연산 수만회 반복(bcrypt/PBKDF2/scrypt/Argon2) → 초당 시도횟수 대폭저하<br>8. **암호학적 해시 3대 특성**: 역상저항성(Preimage, H(x)=y→x 탐색불가 → 단방향성) · 제2역상저항성(Second Preimage, x 주어질때 H(x)=H(x') 다른 x' 탐색불가) · 충돌저항성(Collision, 임의 x·x'로 H(x)=H(x') 탐색불가) — 강도순: 충돌저항성 > 제2역상저항성 > 역상저항성<br>9. **DB 해시 활용**: 해시인덱스(버킷에 레코드주소, 동등조건 검색 O(1)) · 파티셔닝(해시기반 수평분할, DB샤딩) — 무결성·검색성능 목적으로 패스워드저장과는 별개 활용 |
| **비교** | **암호문 공격(Cryptanalysis)**<br>- 공격대상: 암호 알고리즘·키 자체의 수학적 안전성<br>- 방어목표: IND-CCA2 등 이론적 불구별성(Indistinguishability) 확보<br><br>**Rainbow Table 공격**<br>- 공격대상: 해시패스워드 원문 역추적(사전계산 기반)<br>- 방어목표: Salt로 사전계산테이블 무효화 + Key Stretching으로 실시간 계산비용 증가 |
| **차별화** | **현대 암호 시스템의 계층적 방어 설계 전략**<br>1. **알고리즘 선택단계 CCA 안전성 확보**: RSA-OAEP·AES-GCM 등 IND-CCA2 충족 인증암호(AEAD) 채택 → 패딩오라클 등 CCA류 공격 원천차단<br>2. **패스워드 저장체계 Salt+Key Stretching 결합**: bcrypt·Argon2(자체 Salt 포함, 메모리집약형) → GPU 병렬크래킹·Rainbow Table 동시대응<br>3. **무결성·서명검증에 충돌저항성 검증된 해시(SHA-256/SHA-3) 사용**: MD5·SHA-1 등 충돌취약 알고리즘 배제 → 디지털서명·블록체인 안전성 담보 |
