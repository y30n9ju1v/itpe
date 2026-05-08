# 노트 연관 관계 그래프 빌드

블로그 노트 간의 `relref` 링크를 파싱하여 인터랙티브 그래프 페이지를 생성합니다.

## 사용법

```
/build-graph
```

---

## 실행 지침

### 1단계: 노트 데이터 파싱 및 graph-data.json 생성

아래 Python 스크립트를 실행하여 `static/graph-data.json`을 생성하세요.

```bash
python3 - << 'EOF'
import os, re, json

docs_dir = "content/docs"
slug_to_title = {}
slug_to_tags = {}
slug_to_file = {}

for root, dirs, files in os.walk(docs_dir):
    for f in files:
        if not f.endswith(".md"):
            continue
        path = os.path.join(root, f)
        with open(path) as fh:
            content = fh.read()
        title_m = re.search(r'^title:\s*["\']?(.+?)["\']?\s*$', content, re.MULTILINE)
        tags_m = re.search(r'^tags:\s*\[(.+?)\]', content, re.MULTILINE)
        title = title_m.group(1).strip('"\'') if title_m else f
        tags = [t.strip().strip('"\'') for t in tags_m.group(1).split(",")] if tags_m else []
        rel = os.path.relpath(path, docs_dir).replace("\\", "/").replace(".md", "")
        slug_to_title[rel] = title
        slug_to_tags[rel] = tags
        slug_to_file[rel] = path

nodes = []
links = []
seen_links = set()

for slug, path in slug_to_file.items():
    category = slug.split("/")[0] if "/" in slug else "other"
    nodes.append({"id": slug, "title": slug_to_title[slug], "tags": slug_to_tags[slug], "category": category})

for slug, path in slug_to_file.items():
    with open(path) as fh:
        content = fh.read()
    refs = re.findall(r'relref\s+"(/docs/[^"]+)"', content)
    for ref in refs:
        parts = ref.lstrip("/").split("/", 1)
        target_slug = parts[1] if len(parts) > 1 else ref.lstrip("/")
        if target_slug in slug_to_title:
            key = (slug, target_slug)
            if key not in seen_links:
                seen_links.add(key)
                links.append({"source": slug, "target": target_slug})

os.makedirs("static", exist_ok=True)
with open("static/graph-data.json", "w") as fh:
    json.dump({"nodes": nodes, "links": links}, fh, ensure_ascii=False, indent=2)

print(f"생성 완료: 노드 {len(nodes)}개, 링크 {len(links)}개")
EOF
```

### 2단계: Hugo 커스텀 레이아웃 생성

`layouts/graph/single.html` 파일을 생성하세요. 이 파일이 없으면 그래프 페이지가 올바르게 렌더링되지 않습니다.

파일 내용:

```html
{{ define "main" }}
<style>
  .graph-container {
    width: 100%;
    height: 85vh;
    background: var(--body-background);
    border: 1px solid var(--body-font-color);
    border-radius: 8px;
    overflow: hidden;
    position: relative;
  }
  #graph-svg {
    width: 100%;
    height: 100%;
  }
  .node circle {
    stroke-width: 2;
    cursor: pointer;
    transition: r 0.2s;
  }
  .node text {
    font-size: 11px;
    pointer-events: none;
    fill: var(--body-font-color);
  }
  .link {
    stroke: #999;
    stroke-opacity: 0.4;
    stroke-width: 1.2;
  }
  .tooltip {
    position: absolute;
    background: var(--body-background);
    border: 1px solid var(--body-font-color);
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 13px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
    max-width: 240px;
    z-index: 10;
  }
  .graph-controls {
    margin-bottom: 12px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
  }
  .graph-controls input {
    padding: 6px 10px;
    border: 1px solid var(--body-font-color);
    border-radius: 4px;
    background: var(--body-background);
    color: var(--body-font-color);
    font-size: 13px;
    width: 220px;
  }
  .graph-controls select {
    padding: 6px 10px;
    border: 1px solid var(--body-font-color);
    border-radius: 4px;
    background: var(--body-background);
    color: var(--body-font-color);
    font-size: 13px;
  }
  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 10px;
    font-size: 12px;
  }
  .legend-item {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
  }
  .legend-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;
  }
</style>

<article class="markdown book-article">
  <h1>노트 연관 관계 그래프</h1>
  <p>노트 간 <code>relref</code> 링크를 기반으로 연결 관계를 시각화합니다. 노드를 클릭하면 해당 노트로 이동합니다.</p>

  <div class="graph-controls">
    <input type="text" id="search" placeholder="노트 제목 검색..." />
    <select id="category-filter">
      <option value="">전체 카테고리</option>
    </select>
  </div>

  <div class="legend" id="legend"></div>

  <div class="graph-container">
    <svg id="graph-svg"></svg>
    <div class="tooltip" id="tooltip"></div>
  </div>
</article>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
const BASE = {{ .Site.BaseURL | jsonify }};
const COLOR_MAP = {
  "peim": {
    "01_InfoStrategy": "#4e79a7",
    "02_SoftwareEngineering": "#f28e2b",
    "03_DataProcessing": "#e15759",
    "04_ComputerSystems": "#76b7b2",
    "05_Networks": "#59a14f",
    "06_InfoSecurity": "#edc948",
    "07_SystemEvaluation": "#b07aa1",
    "08_EmergingTech": "#ff9da7",
  },
  "pecs": "#9c755f",
  "common": "#bab0ac",
};

function getColor(node) {
  const parts = node.id.split("/");
  if (parts[0] === "peim" && parts[1]) return COLOR_MAP.peim[parts[1]] || "#aaa";
  if (parts[0] === "pecs") return COLOR_MAP.pecs;
  if (parts[0] === "common") return COLOR_MAP.common;
  return "#aaa";
}

fetch(BASE + "graph-data.json")
  .then(r => r.json())
  .then(data => initGraph(data));

function initGraph(data) {
  const svg = d3.select("#graph-svg");
  const container = document.querySelector(".graph-container");
  const W = container.clientWidth;
  const H = container.clientHeight;

  // 카테고리 목록
  const categories = [...new Set(data.nodes.map(n => n.id.split("/")[0] + "/" + (n.id.split("/")[1] || "")))].sort();
  const categorySelect = document.getElementById("category-filter");
  categories.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.split("/")[0];
    opt.textContent = c;
    categorySelect.appendChild(opt);
  });

  // 범례
  const legendData = Object.entries(COLOR_MAP.peim).map(([k, v]) => ({ label: "peim/" + k, color: v }));
  legendData.push({ label: "pecs", color: COLOR_MAP.pecs }, { label: "common", color: COLOR_MAP.common });
  const legend = document.getElementById("legend");
  legendData.forEach(d => {
    const item = document.createElement("div");
    item.className = "legend-item";
    item.innerHTML = `<div class="legend-dot" style="background:${d.color}"></div><span>${d.label}</span>`;
    legend.appendChild(item);
  });

  const g = svg.append("g");

  svg.call(d3.zoom().scaleExtent([0.1, 4]).on("zoom", e => g.attr("transform", e.transform)));

  let nodes = data.nodes.map(d => ({ ...d }));
  let links = data.links.map(d => ({ ...d }));

  const linkSel = g.append("g").selectAll("line");
  const nodeSel = g.append("g").selectAll("g");

  const sim = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(80))
    .force("charge", d3.forceManyBody().strength(-180))
    .force("center", d3.forceCenter(W / 2, H / 2))
    .force("collision", d3.forceCollide(18));

  function render(filteredNodes, filteredLinks) {
    const nodeIds = new Set(filteredNodes.map(n => n.id));
    const visLinks = filteredLinks.filter(l => nodeIds.has(l.source.id || l.source) && nodeIds.has(l.target.id || l.target));

    const degreeMap = {};
    filteredNodes.forEach(n => { degreeMap[n.id] = 0; });
    visLinks.forEach(l => {
      const s = l.source.id || l.source;
      const t = l.target.id || l.target;
      degreeMap[s] = (degreeMap[s] || 0) + 1;
      degreeMap[t] = (degreeMap[t] || 0) + 1;
    });

    const linkEl = g.select("g").selectAll("line").data(visLinks, d => (d.source.id || d.source) + "-" + (d.target.id || d.target));
    linkEl.enter().append("line").attr("class", "link").merge(linkEl);
    linkEl.exit().remove();

    const nodeEl = g.selectAll("g.node").data(filteredNodes, d => d.id);
    const nodeEnter = nodeEl.enter().append("g").attr("class", "node").call(
      d3.drag()
        .on("start", (e, d) => { if (!e.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
        .on("drag", (e, d) => { d.fx = e.x; d.fy = e.y; })
        .on("end", (e, d) => { if (!e.active) sim.alphaTarget(0); d.fx = null; d.fy = null; })
    );
    nodeEnter.append("circle");
    nodeEnter.append("text").attr("dy", "0.35em").attr("x", d => (Math.sqrt(degreeMap[d.id] || 0) + 5) + 4);
    nodeEnter.on("click", (e, d) => {
      window.location.href = BASE + "docs/" + d.id;
    }).on("mouseover", (e, d) => {
      const tt = document.getElementById("tooltip");
      tt.innerHTML = `<strong>${d.title}</strong><br/><small>${d.tags.join(", ")}</small>`;
      tt.style.opacity = 1;
    }).on("mousemove", e => {
      const tt = document.getElementById("tooltip");
      const rect = container.getBoundingClientRect();
      tt.style.left = (e.clientX - rect.left + 12) + "px";
      tt.style.top = (e.clientY - rect.top - 10) + "px";
    }).on("mouseout", () => {
      document.getElementById("tooltip").style.opacity = 0;
    });
    nodeEl.exit().remove();

    const allNodes = g.selectAll("g.node");
    allNodes.select("circle")
      .attr("r", d => Math.sqrt(degreeMap[d.id] || 0) + 5)
      .attr("fill", d => getColor(d))
      .attr("stroke", d => d3.color(getColor(d)).darker(0.8));
    allNodes.select("text").text(d => d.title.length > 18 ? d.title.slice(0, 18) + "…" : d.title);

    sim.nodes(filteredNodes);
    sim.force("link").links(visLinks);
    sim.alpha(0.5).restart();

    sim.on("tick", () => {
      g.selectAll("line")
        .attr("x1", d => d.source.x).attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x).attr("y2", d => d.target.y);
      g.selectAll("g.node").attr("transform", d => `translate(${d.x},${d.y})`);
    });
  }

  function applyFilter() {
    const q = document.getElementById("search").value.toLowerCase();
    const cat = document.getElementById("category-filter").value;
    const fn = nodes.filter(n => {
      const matchQ = !q || n.title.toLowerCase().includes(q) || n.id.toLowerCase().includes(q);
      const matchC = !cat || n.id.startsWith(cat);
      return matchQ && matchC;
    });
    render(fn, links);
  }

  document.getElementById("search").addEventListener("input", applyFilter);
  document.getElementById("category-filter").addEventListener("change", applyFilter);

  render(nodes, links);
}
</script>
{{ end }}
```

### 3단계: 그래프 페이지 콘텐츠 파일 생성

`content/graph.md` 파일을 생성하세요:

```markdown
---
title: "노트 그래프"
layout: "graph"
type: "graph"
url: "/graph"
---
```

### 4단계: Hugo 설정에 graph 타입 레이아웃 경로 확인

`layouts/graph/single.html` 파일이 올바른 경로에 있는지 확인하세요:

```bash
ls layouts/graph/single.html
```

### 5단계: 빌드 및 확인

```bash
hugo server -D
```

브라우저에서 `http://localhost:1313/itpe/graph/` 를 열어 그래프가 표시되는지 확인하세요.

### 6단계: 결과 보고

생성된 파일 목록과 노드/링크 수를 보고하세요:
- `static/graph-data.json` — 노드 N개, 링크 N개
- `layouts/graph/single.html` — D3.js 그래프 레이아웃
- `content/graph.md` — 그래프 페이지 진입점
