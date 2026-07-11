---
title: "LLM 경량화(sLLM·양자화) 및 추론 성능 지표(TTFT·TPOT)"
date: 2026-07-11T11:38:09+09:00
tags: ["최신기술", "AI", "sLLM", "양자화", "TurboQuant", "TTFT", "TPOT", "서브노트"]
draft: false
---

# LLM 경량화(sLLM·양자화) 및 추론 성능 지표(TTFT·TPOT) 서브노트

> **두음 머리에 박기 🧠**
> - **양·프·증·로** (sLLM 4대 경량화 기법: **양**자화 Quantization, **프**루닝 Pruning, 지식 **증**류 Distillation, **로**라 LoRA/QLoRA)
> - **프·디** (LLM 추론 2단계와 지표 매핑: **프**리필 Prefill 단계 ➔ TTFT 측정, **디**코드 Decode 단계 ➔ TPOT 측정)
> - **연·양·텐·플** (TPOT(토큰당 생성 시간) 단축 4대 기법: **연**속 배칭, **양**자화, **텐**서 병렬화, **플**래시어텐션)

---

| 항목 | 내용 |
| :--- | :--- |
| **토픽명** | **sLLM 경량화, TurboQuant 양자화 및 LLM 추론 성능 지표 (TTFT/TPOT)** |
| **정의** | 대형 LLM을 온디바이스 실행 가능한 규모로 경량화하는 **sLLM/양자화 기술**과, LLM 추론 서비스의 응답성을 측정하는 **TTFT(첫 토큰 지연)·TPOT(토큰당 생성시간) 지표** |
| **키워드** | 양자화(FP32→INT4/INT8), TurboQuant(이상값 보정), LoRA/QLoRA, Prefill/Decode, TTFT<200ms, Speculative Decoding |
| **개념도** | **[ LLM 추론 단계와 성능 지표 매핑 ]**<br>`요청 전송 → 큐 진입/GPU 할당 → Prefill(입력 전체 처리, KV캐시 생성) ← TTFT 측정 → 첫 토큰 반환`<br>`→ Decode(토큰 1개씩 자기회귀 생성) ← TPOT 측정 구간 → 응답 완료`<br><br>**[ sLLM 경량화 파이프라인 ]**<br>`[대형 교사 모델] → 지식 증류 → [소형 학생 모델] + 양자화(INT4/INT8) + LoRA 파인튜닝 → [온디바이스 sLLM]` |
| **구성요소** | 1. **양자화(Quantization)**: FP32/FP16 가중치를 INT8/INT4로 변환, 모델 크기 2~8배 감소<br>2. **TurboQuant**: 블록 단위 병렬 양자화 + 이상값(Outlier) 채널 보정으로 GPTQ 대비 수십 배 빠른 양자화, 4~8배 추론 속도 향상<br>3. **지식 증류/LoRA**: 대형 교사 모델 지식을 소형 모델로 전이, 저차원 행렬만 학습해 효율적 미세조정<br>4. **TTFT (Time To First Token)**: 요청~첫 토큰까지 지연, Prefill 단계·KV캐시 준비·큐 대기 영향<br>5. **TPOT (Time Per Output Token)**: 이후 토큰 1개당 평균 생성 시간, 모델 크기·배치·하드웨어 영향 |
| **비교** | **LLM (대형)**<br>- 파라미터: 70B~수천B, 실행 환경: 서버/클라우드(A100/H100)<br>- 도메인 특화: 어려움(대규모 재학습 필요)<br><br>**sLLM (소형, 경량화)**<br>- 파라미터: 1B~13B, 실행 환경: 온디바이스/엣지 서버<br>- 도메인 특화: 쉬움(LoRA 파인튜닝), 프라이버시 로컬 처리 가능 |
| **차별화** | **실시간 대화형 서비스의 지연 체감 최소화 종합 전략**<br>1. **TTFT 최적화**: 반복 시스템 프롬프트의 KV 캐시를 재사용하는 Prompt Caching, 작은 Draft 모델로 후보 토큰을 예측·검증하는 Speculative Decoding, Prefill 전용 서버 분리 운영.<br>2. **TPOT 최적화**: TurboQuant 등 고속 양자화로 모델 크기를 축소하고, 다중 요청을 동시 처리하는 Continuous Batching과 Flash Attention으로 GPU 활용률 극대화.<br>3. **온디바이스 배포 목표 기준 관리**: 대화형 서비스는 TTFT 200ms 이하, TPOT 50ms/token 이하를 목표로 sLLM(Gemini Nano, Phi-3 Mini 등)과 GGUF/GGML 같은 CPU 추론 최적화 포맷을 결합해 서버 의존 없는 로컬 실행 구현. |
