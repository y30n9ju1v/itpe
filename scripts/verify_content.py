#!/usr/bin/env python3
"""Small, dependency-free quality gate for published study content."""

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content"
DATA = ROOT / "static" / "flashcards" / "data.json"

FORBIDDEN = {
    "숫자는 지어내도 OK": "답안에 근거 없는 수치를 쓰면 안 됩니다.",
    "고영향 AI 사전 영향평가 의무화": "AI기본법 영향평가는 사업자의 사전 실시 노력 규정입니다.",
    "고위험 AI 대상 영향평가 의무화": "한국 법령 용어와 의무 수준을 다시 확인하세요.",
    "소프트웨어산업진흥법": "폐지된 법률명입니다. 「소프트웨어 진흥법」과 해당 지침을 확인하세요.",
    "2026.1.22 시행된 국내 최초 AI 기본법": "인공지능기본법의 현행 시행일은 2026.7.21입니다.",
    "40억 원 이상 의무감리": "감리 대상은 현행 전자정부법 및 하위 고시 기준으로 확인하세요.",
    "예산 5억↑구축": "감리 대상은 현행 전자정부법 및 하위 고시 기준으로 확인하세요.",
}


def fail(message):
    print(f"ERROR: {message}")
    raise SystemExit(1)


def main():
    for path in CONTENT.rglob("*.md"):
        text = path.read_text(encoding="utf-8")
        for phrase, guidance in FORBIDDEN.items():
            if phrase in text:
                fail(f"{path.relative_to(ROOT)} contains '{phrase}'. {guidance}")
        if "/resources/references/" in text and "draft: true" not in text:
            fail(f"{path.relative_to(ROOT)} links to a non-public reference asset.")

    data = json.loads(DATA.read_text(encoding="utf-8"))
    cards = data.get("cards", [])
    ids = [card.get("id") for card in cards]
    if not cards or len(ids) != len(set(ids)):
        fail("Flashcard data must contain cards with unique IDs.")

    for card in cards:
        for field in ("id", "title", "definition", "doc_url", "source_file"):
            if not card.get(field):
                fail(f"Flashcard {card.get('id', '<unknown>')} is missing {field}.")
        if not (ROOT / card["source_file"]).exists():
            fail(f"Flashcard source is missing: {card['source_file']}")

    print(f"Verified {len(cards)} flashcards and published content safeguards.")


if __name__ == "__main__":
    main()
