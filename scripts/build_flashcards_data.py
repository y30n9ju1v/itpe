import os
import re
import json

WORKSPACE_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SUBNOTES_DIR = os.path.join(WORKSPACE_ROOT, "content", "docs", "subnotes")
GLOSSARY_DIR = os.path.join(WORKSPACE_ROOT, "content", "docs", "glossary")
OUTPUT_JSON = os.path.join(WORKSPACE_ROOT, "static", "flashcards", "data.json")

CATEGORY_MAP = {
    "01_InfoStrategy": {"name": "정보전략 및 관리", "icon": "📊"},
    "02_SoftwareEngineering": {"name": "소프트웨어 공학", "icon": "⚙️"},
    "03_DataProcessing": {"name": "데이터베이스 & 데이터", "icon": "🗄️"},
    "04_ComputerSystems": {"name": "컴퓨터 시스템 & 알고리즘", "icon": "💻"},
    "05_Networks": {"name": "네트워크", "icon": "🌐"},
    "06_InfoSecurity": {"name": "정보보안", "icon": "🔒"},
    "07_SystemEvaluation": {"name": "시스템 평가 & 운영", "icon": "📈"},
    "08_EmergingTech": {"name": "신기술 & IT 동향", "icon": "🚀"}
}

def parse_frontmatter(content):
    meta = {}
    if content.startswith("---"):
        parts = content.split("---", 2)
        if len(parts) >= 3:
            fm_text = parts[1]
            title_m = re.search(r'title:\s*"([^"]+)"|title:\s*([^\n]+)', fm_text)
            if title_m:
                meta['title'] = (title_m.group(1) or title_m.group(2)).strip()
            tags_m = re.search(r'tags:\s*\[(.*?)\]', fm_text)
            if tags_m:
                tags = [t.strip().strip('"\'') for t in tags_m.group(1).split(',')]
                meta['tags'] = tags
            content = parts[2]
    return meta, content

def parse_mnemonics(content):
    mnemonics = []
    m = re.search(r'>\s*\*\*두음 머리에 박기[^\n]*\*\*(.*?)(?=\n---| \n\n|\n\||\Z)', content, re.DOTALL)
    if m:
        block = m.group(1)
        lines = block.split('\n')
        for line in lines:
            line = line.strip().lstrip('>').strip()
            if line.startswith('-') or line.startswith('*'):
                cleaned = line.lstrip('-*').strip()
                if cleaned:
                    mnemonics.append(cleaned)
    return mnemonics

def parse_markdown_table(content):
    table_data = {}
    lines = content.split('\n')
    in_table = False
    for line in lines:
        line_str = line.strip()
        if '|' in line_str:
            parts = [p.strip() for p in line_str.split('|')[1:-1]]
            if len(parts) >= 2:
                col1 = parts[0].replace('*', '').strip()
                col2 = parts[1].strip()
                if col1 in ["토픽명", "정의", "키워드", "구성요소", "비교", "차별화", "개념도"]:
                    table_data[col1] = col2
                    in_table = True
                elif in_table and col1:
                    table_data[col1] = col2
    return table_data

def clean_html_and_markdown(text):
    if not text:
        return ""
    text = re.sub(r'<br\s*/?>', '\n', text)
    text = text.replace('&nbsp;', ' ')
    return text.strip()

def strip_markdown_emphasis(text):
    if not text:
        return text
    text = re.sub(r'\*\*(.+?)\*\*', r'\1', text)
    text = re.sub(r'`(.+?)`', r'\1', text)
    return text.strip()

def parse_subnote_file(filepath, cat_id):
    with open(filepath, 'r', encoding='utf-8') as f:
        raw = f.read()

    filename = os.path.basename(filepath)
    if filename.startswith('_index'):
        return None

    meta, content = parse_frontmatter(raw)
    mnemonics = parse_mnemonics(content)
    table = parse_markdown_table(content)

    topic_title = strip_markdown_emphasis(table.get("토픽명")) or meta.get("title") or filename.replace('.md', '')
    definition = clean_html_and_markdown(table.get("정의", ""))
    keywords = clean_html_and_markdown(table.get("키워드", ""))
    concept_diagram = clean_html_and_markdown(table.get("개념도", ""))
    components = clean_html_and_markdown(table.get("구성요소", ""))
    comparison = clean_html_and_markdown(table.get("비교", ""))
    differentiation = clean_html_and_markdown(table.get("차별화", ""))

    rel_path = os.path.relpath(filepath, WORKSPACE_ROOT)
    doc_slug = filename.replace('.md', '')
    doc_url = f"../docs/subnotes/{cat_id}/{doc_slug}/"

    card = {
        "id": f"{cat_id}_{doc_slug}",
        "type": "subnote",
        "category_id": cat_id,
        "category_name": CATEGORY_MAP.get(cat_id, {}).get("name", cat_id),
        "category_icon": CATEGORY_MAP.get(cat_id, {}).get("icon", "📝"),
        "title": topic_title,
        "doc_title": meta.get("title", topic_title),
        "tags": meta.get("tags", []),
        "mnemonics": mnemonics,
        "definition": definition,
        "keywords": keywords,
        "concept_diagram": concept_diagram,
        "components": components,
        "comparison": comparison,
        "differentiation": differentiation,
        "source_file": rel_path,
        "doc_url": doc_url
    }
    return card

def parse_glossary_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    filename = os.path.basename(filepath)
    cat_num = filename.split('_')[0] if '_' in filename else "01"
    cat_id = None
    for k in CATEGORY_MAP.keys():
        if k.startswith(cat_num):
            cat_id = k
            break
    if not cat_id:
        cat_id = "01_InfoStrategy"

    cards = []
    lines = content.split('\n')
    for line in lines:
        if line.strip().startswith('|') and not '---' in line and not '용어' in line:
            parts = [p.strip() for p in line.strip().split('|')[1:-1]]
            if len(parts) >= 2:
                term = parts[0].strip()
                defn = parts[1].strip()
                doc_url = ""
                related_note = ""
                if len(parts) >= 3:
                    ref_part = parts[2].strip()
                    m_ref = re.search(r'\[(.*?)\]\(\{\{<\s*relref\s*"([^"]+)"\s*>\}\}\)', ref_part)
                    if m_ref:
                        related_note = m_ref.group(1)
                        ref_path = m_ref.group(2).strip('/')
                        doc_url = f"../{ref_path}/"
                if term and defn:
                    cards.append({
                        "id": f"glossary_{cat_id}_{len(cards)}",
                        "type": "glossary",
                        "category_id": cat_id,
                        "category_name": CATEGORY_MAP.get(cat_id, {}).get("name", cat_id),
                        "category_icon": CATEGORY_MAP.get(cat_id, {}).get("icon", "📖"),
                        "title": term,
                        "doc_title": term,
                        "tags": ["용어집"],
                        "mnemonics": [],
                        "definition": defn,
                        "keywords": term,
                        "concept_diagram": "",
                        "components": f"연관 서브노트: {related_note}" if related_note else "",
                        "comparison": "",
                        "differentiation": "",
                        "source_file": os.path.relpath(filepath, WORKSPACE_ROOT),
                        "doc_url": doc_url
                    })
    return cards

def main():
    all_cards = []
    
    # 1. Parse Subnotes
    for cat_id in CATEGORY_MAP.keys():
        cat_dir = os.path.join(SUBNOTES_DIR, cat_id)
        if os.path.exists(cat_dir):
            for fname in sorted(os.listdir(cat_dir)):
                if fname.endswith('.md') and not fname.startswith('_index'):
                    fpath = os.path.join(cat_dir, fname)
                    card = parse_subnote_file(fpath, cat_id)
                    if card:
                        all_cards.append(card)

    print(f"Parsed {len(all_cards)} subnote flashcards.")

    # 2. Parse Glossary
    glossary_cards_count = 0
    if os.path.exists(GLOSSARY_DIR):
        for fname in sorted(os.listdir(GLOSSARY_DIR)):
            if fname.endswith('.md'):
                fpath = os.path.join(GLOSSARY_DIR, fname)
                g_cards = parse_glossary_file(fpath)
                all_cards.extend(g_cards)
                glossary_cards_count += len(g_cards)

    print(f"Parsed {glossary_cards_count} glossary flashcards.")
    print(f"Total cards: {len(all_cards)}")

    os.makedirs(os.path.dirname(OUTPUT_JSON), exist_ok=True)
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump({
            "categories": CATEGORY_MAP,
            "total_count": len(all_cards),
            "cards": all_cards
        }, f, ensure_ascii=False, indent=2)

    print(f"Successfully saved to {OUTPUT_JSON}")

if __name__ == "__main__":
    main()
