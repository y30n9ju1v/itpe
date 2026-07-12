---
title: "피지컬 AI(Physical AI) 기술요소·동향과 VLA(Vision-Language-Action) 모델"
date: 2026-07-12T18:13:12+09:00
tags: ["신기술", "AI", "피지컬AI", "VLA", "로보틱스", "Sim-to-Real", "서브노트"]
draft: false
---

# 피지컬 AI(Physical AI) 기술요소·동향과 VLA(Vision-Language-Action) 모델 서브노트

> **두음 머리에 박기 🧠**
> - **인·판·행** (피지컬 AI 인지-판단-행동 3대 축: **인**지 Perception ➔ **판**단 Reasoning/Planning ➔ **행**동 Action, 실시간 폐루프)
> - **인·백·액·데·저** (VLA 모델 5대 구성요소: **인**코더(멀티모달), **백**본(사전학습 VLM), **액**션 토큰화, **데**이터(로봇 시연), **저**지연 추론)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **피지컬 AI (Physical AI) 기술요소·동향 및 VLA (Vision-Language-Action) 모델** |
| **정의** | 물리적 실세계를 인지·이해하고 행동을 계획·수행해 현실 공간에서 자율 작동하는 체화(Embodied) AI인 **피지컬 AI**와, 시각·언어 입력을 로봇의 물리적 행동으로 직접 변환하는 통합 파운데이션 모델인 **VLA 모델**(피지컬 AI의 '두뇌') |
| **키워드** | 인지-판단-행동 폐루프, Sim-to-Real, World Model, VLA(RT-2/GR00T/OpenVLA), Open X-Embodiment, 액션 토큰화 |
| **개념도** | **[ 피지컬 AI 인지-판단-행동 폐루프 ]**<br>`[물리세계] → 센서(카메라·LiDAR·IMU) → 인지(3D 공간인식) → 판단(VLA/World Model 경로계획) → 행동(액추에이터 제어) → [물리세계 피드백] → 재학습(Sim-to-Real)`<br><br>**[ VLA 모델 구조 ]**<br>`[카메라 이미지] ─┐`<br>`                 ├─▶ VLA 모델(Transformer, VLM백본+Action Head) ─▶ [행동 토큰(관절각/속도)]`<br>`[자연어 명령]   ─┘` |
| **구성요소** | **[피지컬 AI 기술요소]**<br>1. **인지**: 멀티모달 센서 퓨전(카메라·LiDAR·레이더·IMU), SLAM 3D 공간 매핑<br>2. **판단**: VLA/파운데이션 모델, World Model(물리 인과·동역학 예측)<br>3. **학습**: Sim-to-Real(Isaac Sim 등 가상 시뮬레이터 대량학습 후 실환경 전이)<br>4. **행동**: 로보틱스 제어(모션 플래닝, 강화학습 기반 RL Control)<br>5. **인프라**: 온디바이스 AI 반도체(저전력·저지연 엣지 NPU/GPU, Jetson 등)<br><br>**[VLA 모델 5대 구성요소]**<br>1. 멀티모달 인코더(ViT+LLM 공통 임베딩)<br>2. 백본(PaLI-X/PaLM-E 등 사전학습 VLM)<br>3. 액션 토큰화(연속 제어값→이산 토큰 예측)<br>4. 로봇 시연 데이터(Teleoperation, Open X-Embodiment)<br>5. 저지연 추론(Distillation/Quantization 경량화) |
| **비교** | **국외 동향**<br>- 플랫폼: NVIDIA Isaac(GR00T, Omniverse), 휴머노이드: Tesla Optimus/Figure AI, 자율주행: Waymo/Tesla FSD<br>- 특징: 파운데이션 모델·시뮬레이션 플랫폼 주도<br><br>**국내 동향**<br>- 플랫폼: 네이버클라우드 ARC, 휴머노이드: 삼성 레인보우로보틱스/현대차 보스턴다이내믹스<br>- 특징: 제조·모빌리티 대기업 중심 응용 확산 |
| **차별화** | **Sim-to-Real 격차 해소 및 VLA 계층적 제어 실무 전략**<br>1. **도메인 랜덤화+실환경 파인튜닝**: 시뮬레이터 학습 시 조명·질감·물리계수를 무작위화한 도메인 랜덤화로 일반화 성능을 높이고, 실환경 소량 데이터로 파인튜닝해 Sim-to-Real Gap을 축소하며 디지털 트윈 기반 검증 파이프라인을 병행 운영.<br>2. **VLA 계층적 제어(고수준/저수준 분리)**: RT-2/GR00T 등 고수준 VLA가 목표·경로를 저빈도로 생성하고, 저수준 경량 컨트롤러가 고빈도 실시간 관절 제어를 담당하도록 계층화해 VLA 추론 지연으로 인한 실시간성 제약을 해소.<br>3. **안전계층(Safety Layer) 및 단계적 실환경 배포**: 로봇 안전표준·ISO/IEC 42001과 연계한 Fail-safe 설계와 단계적 실환경 배포(Staged Rollout)로 VLA 오작동 시 물리적 피해를 최소화하고, 오픈 로보틱스 데이터·플랫폼 공유로 원천기술 종속 리스크를 완화. |
