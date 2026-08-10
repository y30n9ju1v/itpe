/* ==========================================================================
   ITPE Technical Specialist Flashcards - JavaScript Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // localStorage may be unavailable (private browsing, disabled storage, etc.)
  function loadRatings() {
    try {
      return JSON.parse(localStorage.getItem('itpe_flashcard_ratings') || '{}');
    } catch (err) {
      console.warn('localStorage unavailable, ratings will not persist.', err);
      return {};
    }
  }

  function saveRatings(ratings) {
    try {
      localStorage.setItem('itpe_flashcard_ratings', JSON.stringify(ratings));
    } catch (err) {
      console.warn('Failed to save ratings to localStorage.', err);
    }
  }

  // APP STATE
  const state = {
    allCards: [],
    categories: {},
    filteredCards: [],
    currentIndex: 0,
    ratings: loadRatings(),
    selectedCategory: 'all',
    selectedType: 'all',
    currentMode: 'flashcard', // 'flashcard', 'review', 'quiz', 'list'
    searchQuery: '',
    showMnemonic: true,
    isFlipped: false,
    
    // Quiz State
    quiz: {
      score: 0,
      total: 0,
      currentQuestion: null,
      answered: false
    }
  };

  // DOM ELEMENTS
  const el = {
    // Stats
    statEasy: document.getElementById('stat-easy-count'),
    statMedium: document.getElementById('stat-medium-count'),
    statHard: document.getElementById('stat-hard-count'),
    progressBarFill: document.getElementById('overall-progress-bar'),
    progressText: document.getElementById('overall-progress-text'),
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    resetStatsBtn: document.getElementById('reset-stats-btn'),

    // Sidebar & Filters
    categoryList: document.getElementById('category-list'),
    filteredCountBadge: document.getElementById('filtered-card-count'),
    modeBtns: document.querySelectorAll('.mode-btn'),
    typeBtns: document.querySelectorAll('.type-btn'),

    // Toolbar
    searchInput: document.getElementById('search-input'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    toggleMnemonic: document.getElementById('toggle-mnemonic'),
    shuffleBtn: document.getElementById('shuffle-btn'),

    // Views
    viewPanels: document.querySelectorAll('.view-panel'),
    viewFlashcard: document.getElementById('view-flashcard'),
    viewQuiz: document.getElementById('view-quiz'),
    viewList: document.getElementById('view-list'),

    // Flashcard Deck
    cardCounter: document.getElementById('card-counter'),
    currentCardCat: document.getElementById('current-card-cat'),
    flashcard3d: document.getElementById('flashcard'),
    
    // Front Face
    frontType: document.getElementById('card-front-type'),
    frontTitle: document.getElementById('card-front-title'),
    frontMnemonicBox: document.getElementById('card-front-mnemonic-container'),
    frontMnemonics: document.getElementById('card-front-mnemonics'),
    frontKeywordsBox: document.getElementById('card-front-keywords'),
    frontKeywordText: document.getElementById('card-front-keyword-text'),

    // Back Face
    backTitle: document.getElementById('card-back-title'),
    backRatingBadge: document.getElementById('card-back-rating-badge'),
    backDefinition: document.getElementById('card-back-definition'),
    backKeywordsCloud: document.getElementById('card-back-keywords-cloud'),
    backComponents: document.getElementById('card-back-components'),
    backComparison: document.getElementById('card-back-comparison'),
    backDifferentiation: document.getElementById('card-back-differentiation'),
    blockKeywords: document.getElementById('block-keywords'),
    blockComponents: document.getElementById('block-components'),
    blockComparison: document.getElementById('block-comparison'),
    blockDifferentiation: document.getElementById('block-differentiation'),
    cardSourceFile: document.getElementById('card-source-file'),

    // Controls
    prevBtn: document.getElementById('prev-card-btn'),
    nextBtn: document.getElementById('next-card-btn'),
    rateHardBtn: document.getElementById('rate-hard-btn'),
    rateMediumBtn: document.getElementById('rate-medium-btn'),
    rateEasyBtn: document.getElementById('rate-easy-btn'),

    // Quiz Elements
    quizScore: document.getElementById('quiz-score'),
    quizTotal: document.getElementById('quiz-total'),
    startNewQuizBtn: document.getElementById('start-new-quiz-btn'),
    quizCatTag: document.getElementById('quiz-cat-tag'),
    quizQuestionText: document.getElementById('quiz-question-text'),
    quizQuestionPrompt: document.getElementById('quiz-question-prompt'),
    quizOptions: document.getElementById('quiz-options'),
    quizExplanation: document.getElementById('quiz-explanation'),
    quizResultMessage: document.getElementById('quiz-result-message'),
    quizDetailExplanation: document.getElementById('quiz-detail-explanation'),
    quizNextBtn: document.getElementById('quiz-next-btn'),

    // List View Elements
    listTotalCount: document.getElementById('list-total-count'),
    cardGrid: document.getElementById('card-grid')
  };

  // INITIALIZATION
  async function init() {
    try {
      const resp = await fetch('./data.json');
      if (!resp.ok) throw new Error('Data file not found');
      const data = await resp.json();
      state.allCards = data.cards || [];
      state.categories = data.categories || {};

      renderCategorySidebar();
      applyFilters();
      updateStats();
      setupEventListeners();
      
      console.log(`Loaded ${state.allCards.length} flashcards successfully.`);
    } catch (err) {
      console.error('Failed to load flashcards:', err);
      alert('플래시카드 데이터를 불러올 수 없습니다. scripts/build_flashcards_data.py 스크립트 실행 결과를 확인하세요.');
    }
  }

  // RENDER SIDEBAR CATEGORIES
  function renderCategorySidebar() {
    let html = `
      <button class="cat-item-btn ${state.selectedCategory === 'all' ? 'active' : ''}" data-cat="all">
        <span><i class="fa-solid fa-layer-group"></i> 전체 카테고리</span>
        <span class="cat-count">${state.allCards.length}</span>
      </button>
    `;

    for (const [catId, catInfo] of Object.entries(state.categories)) {
      const count = state.allCards.filter(c => c.category_id === catId).length;
      html += `
        <button class="cat-item-btn ${state.selectedCategory === catId ? 'active' : ''}" data-cat="${catId}">
          <span>${catInfo.icon} ${catInfo.name}</span>
          <span class="cat-count">${count}</span>
        </button>
      `;
    }

    el.categoryList.innerHTML = html;
  }

  // APPLY FILTERS & UPDATE STATE
  function applyFilters() {
    let result = state.allCards;

    // Filter by Mode
    if (state.currentMode === 'review') {
      result = result.filter(c => {
        const r = state.ratings[c.id];
        return r === 'hard' || r === 'medium';
      });
    }

    // Filter by Category
    if (state.selectedCategory !== 'all') {
      result = result.filter(c => c.category_id === state.selectedCategory);
    }

    // Filter by Type
    if (state.selectedType !== 'all') {
      result = result.filter(c => c.type === state.selectedType);
    }

    // Filter by Search Query
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      result = result.filter(c => 
        (c.title && c.title.toLowerCase().includes(q)) ||
        (c.definition && c.definition.toLowerCase().includes(q)) ||
        (c.keywords && c.keywords.toLowerCase().includes(q)) ||
        (c.mnemonics && c.mnemonics.some(m => m.toLowerCase().includes(q)))
      );
    }

    state.filteredCards = result;
    state.currentIndex = 0;
    state.isFlipped = false;

    el.filteredCountBadge.textContent = `${result.length}개`;
    el.cardCounter.textContent = result.length > 0 ? `${state.currentIndex + 1} / ${result.length}` : '0 / 0';

    if (state.currentMode === 'flashcard' || state.currentMode === 'review') {
      renderCurrentCard();
    } else if (state.currentMode === 'list') {
      renderListView();
    }
  }

  // RENDER CURRENT FLASHCARD
  function renderCurrentCard() {
    if (state.isFlipped) {
      el.flashcard3d.classList.remove('is-flipped');
      state.isFlipped = false;
    }

    if (state.filteredCards.length === 0) {
      el.frontMnemonicBox.style.display = 'block';
      el.frontKeywordsBox.style.display = 'none';
      if (state.currentMode === 'review') {
        el.frontTitle.textContent = "복습할 카드가 없습니다! 🎉";
        el.frontMnemonics.innerHTML = "<li>'모름' 또는 '헷갈림'으로 평가된 카드가 모두 해소되었습니다.</li>";
      } else {
        el.frontTitle.textContent = "조건에 해당하는 카드가 없습니다.";
        el.frontMnemonics.innerHTML = "<li>다른 카테고리나 검색어를 선택해 보세요.</li>";
      }
      el.frontKeywordText.textContent = "";
      el.cardCounter.textContent = '0 / 0';
      return;
    }

    const card = state.filteredCards[state.currentIndex];
    el.cardCounter.textContent = `${state.currentIndex + 1} / ${state.filteredCards.length}`;

    // Header Cat Tag
    const catName = card.category_name || state.categories[card.category_id]?.name || '기술사';
    const catIcon = card.category_icon || state.categories[card.category_id]?.icon || '📝';
    el.currentCardCat.innerHTML = `<span class="cat-icon">${catIcon}</span> <span class="cat-name">${catName}</span>`;

    // FRONT FACE
    el.frontType.textContent = card.type === 'subnote' ? '서브노트 핵심' : '용어집';
    el.frontTitle.textContent = card.title || card.doc_title;

    // Mnemonics
    if (card.mnemonics && card.mnemonics.length > 0 && state.showMnemonic) {
      el.frontMnemonicBox.style.display = 'block';
      el.frontMnemonics.innerHTML = card.mnemonics.map(m => `<li>• ${renderInlineMarkdown(m)}</li>`).join('');
    } else {
      el.frontMnemonicBox.style.display = 'none';
    }

    // Keywords Hint
    if (card.keywords) {
      el.frontKeywordsBox.style.display = 'block';
      el.frontKeywordText.textContent = card.keywords.split(',').slice(0, 4).join(', ') + '...';
    } else {
      el.frontKeywordsBox.style.display = 'none';
    }

    // BACK FACE
    el.backTitle.textContent = card.title || card.doc_title;
    
    // Rating Status Badge
    const r = state.ratings[card.id];
    if (r === 'easy') {
      el.backRatingBadge.textContent = '암기 완료 (Easy)';
      el.backRatingBadge.className = 'card-back-rating stat-pill easy';
    } else if (r === 'medium') {
      el.backRatingBadge.textContent = '헷갈림 (Medium)';
      el.backRatingBadge.className = 'card-back-rating stat-pill medium';
    } else if (r === 'hard') {
      el.backRatingBadge.textContent = '모름 (Hard)';
      el.backRatingBadge.className = 'card-back-rating stat-pill hard';
    } else {
      el.backRatingBadge.textContent = '미평가';
      el.backRatingBadge.className = 'card-back-rating';
    }

    // Definition
    el.backDefinition.innerHTML = card.definition ? renderInlineMarkdown(card.definition) : '정의 정보 없음';

    // Keywords Cloud
    if (card.keywords) {
      el.blockKeywords.style.display = 'block';
      const tags = card.keywords.split(/[,;\/]/).map(t => t.trim()).filter(Boolean);
      el.backKeywordsCloud.innerHTML = tags.map(t => `<span class="tag-item"># ${escapeHtml(t)}</span>`).join('');
    } else {
      el.blockKeywords.style.display = 'none';
    }

    // Components
    if (card.components) {
      el.blockComponents.style.display = 'block';
      el.backComponents.innerHTML = formatDetailContent(card.components);
    } else {
      el.blockComponents.style.display = 'none';
    }

    // Comparison
    if (card.comparison) {
      el.blockComparison.style.display = 'block';
      el.backComparison.innerHTML = formatDetailContent(card.comparison);
    } else {
      el.blockComparison.style.display = 'none';
    }

    // Differentiation
    if (card.differentiation) {
      el.blockDifferentiation.style.display = 'block';
      el.backDifferentiation.innerHTML = formatDetailContent(card.differentiation);
    } else {
      el.blockDifferentiation.style.display = 'none';
    }

    el.cardSourceFile.textContent = card.source_file;
  }

  // RENDER LIST / CATALOG VIEW
  function renderListView() {
    const LIST_LIMIT = 150;
    el.listTotalCount.textContent = `총 ${state.filteredCards.length}개 토픽`;

    if (state.filteredCards.length === 0) {
      el.cardGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem;">
          <p style="color: var(--text-secondary);">검색 결과가 없습니다.</p>
        </div>
      `;
      return;
    }

    const truncated = state.filteredCards.length > LIST_LIMIT;
    const noticeHtml = truncated ? `
      <div style="grid-column: 1/-1; text-align: center; padding: 0.75rem; color: var(--text-secondary); font-size: 0.85rem;">
        ${LIST_LIMIT}개만 표시 중입니다. 검색이나 카테고리 필터로 좁혀서 나머지 항목을 확인하세요.
      </div>
    ` : '';

    const html = noticeHtml + state.filteredCards.slice(0, LIST_LIMIT).map(card => {
      const r = state.ratings[card.id];
      let ratingClass = '';
      if (r === 'easy') ratingClass = 'easy';
      if (r === 'medium') ratingClass = 'medium';
      if (r === 'hard') ratingClass = 'hard';

      return `
        <div class="grid-card-item">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <span class="card-badge-type">${card.type === 'subnote' ? '서브노트' : '용어집'}</span>
              ${r ? `<span class="stat-pill ${ratingClass}" style="font-size:0.7rem; padding:1px 6px;">${r.toUpperCase()}</span>` : ''}
            </div>
            <h3 class="grid-card-title">${escapeHtml(card.title)}</h3>
            <p class="grid-card-defn" style="margin-top:0.4rem;">${renderInlineMarkdown(card.definition)}</p>
          </div>
          <div style="font-size:0.75rem; color: var(--text-muted); border-top:1px solid var(--border-color); padding-top:0.5rem; margin-top:0.5rem;">
            <span>${card.category_icon} ${card.category_name}</span>
          </div>
        </div>
      `;
    }).join('');

    el.cardGrid.innerHTML = html;
  }

  // RATING HANDLER
  function rateCard(rating) {
    if (state.filteredCards.length === 0) return;
    const card = state.filteredCards[state.currentIndex];
    state.ratings[card.id] = rating;
    saveRatings(state.ratings);
    updateStats();

    // Visual feedback & next card
    renderCurrentCard();
    setTimeout(() => {
      nextCard();
    }, 200);
  }

  function nextCard() {
    if (state.filteredCards.length === 0) return;
    if (state.currentIndex < state.filteredCards.length - 1) {
      state.currentIndex++;
    } else {
      state.currentIndex = 0; // Wrap around
    }
    state.isFlipped = false;
    renderCurrentCard();
  }

  function prevCard() {
    if (state.filteredCards.length === 0) return;
    if (state.currentIndex > 0) {
      state.currentIndex--;
    } else {
      state.currentIndex = state.filteredCards.length - 1;
    }
    state.isFlipped = false;
    renderCurrentCard();
  }

  // UPDATE STATS & PROGRESS BAR
  function updateStats() {
    let easyCount = 0;
    let mediumCount = 0;
    let hardCount = 0;

    for (const r of Object.values(state.ratings)) {
      if (r === 'easy') easyCount++;
      else if (r === 'medium') mediumCount++;
      else if (r === 'hard') hardCount++;
    }

    el.statEasy.textContent = easyCount;
    el.statMedium.textContent = mediumCount;
    el.statHard.textContent = hardCount;

    const total = state.allCards.length || 1;
    const percent = Math.round((easyCount / total) * 100);
    el.progressBarFill.style.width = `${percent}%`;
    el.progressText.textContent = `${percent}% 완료 (${easyCount}/${total})`;
  }

  // QUIZ MODE LOGIC
  const QUIZ_LENGTH = 10;

  function startNewQuiz() {
    state.quiz.score = 0;
    state.quiz.total = 0;
    state.quiz.answered = false;
    el.quizScore.textContent = 0;
    el.quizTotal.textContent = 0;
    loadNextQuizQuestion();
  }

  function loadNextQuizQuestion() {
    if (state.quiz.total >= QUIZ_LENGTH) {
      el.quizExplanation.style.display = 'none';
      el.quizOptions.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 2rem 1rem;">
          <h3>퀴즈 완료! 최종 점수: ${state.quiz.score} / ${state.quiz.total}</h3>
          <p style="color: var(--text-secondary); margin-top: 0.5rem;">'새 퀴즈 시작' 버튼을 눌러 다시 도전해 보세요.</p>
        </div>
      `;
      return;
    }

    state.quiz.answered = false;
    el.quizExplanation.style.display = 'none';

    // Filter available cards
    let pool = state.allCards;
    if (state.selectedCategory !== 'all') {
      pool = pool.filter(c => c.category_id === state.selectedCategory);
    }
    if (pool.length < 4) {
      pool = state.allCards;
    }

    // Pick 1 correct target card
    const target = pool[Math.floor(Math.random() * pool.length)];
    state.quiz.currentQuestion = target;

    // Pick 3 distractors
    const distractors = pool.filter(c => c.id !== target.id);
    shuffleArray(distractors);
    const options = [target, ...distractors.slice(0, 3)];
    shuffleArray(options);

    // Question Prompt
    el.quizCatTag.textContent = `${target.category_icon} ${target.category_name}`;
    el.quizQuestionPrompt.innerHTML = renderInlineMarkdown(target.definition || target.keywords || target.doc_title);

    // Render Options
    el.quizOptions.innerHTML = options.map((opt, i) => `
      <button class="quiz-opt-btn" data-id="${opt.id}">
        <span>${i + 1}.</span>
        <span>${escapeHtml(opt.title)}</span>
      </button>
    `).join('');

    document.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => handleQuizAnswer(btn.dataset.id));
    });
  }

  function handleQuizAnswer(selectedId) {
    if (state.quiz.answered) return;
    state.quiz.answered = true;
    state.quiz.total++;

    const target = state.quiz.currentQuestion;
    const isCorrect = selectedId === target.id;

    if (isCorrect) {
      state.quiz.score++;
      el.quizResultMessage.innerHTML = `<span style="color:var(--color-easy); font-weight:800; font-size:1.1rem;"><i class="fa-solid fa-circle-check"></i> 정답입니다! (+1점)</span>`;
    } else {
      el.quizResultMessage.innerHTML = `<span style="color:var(--color-hard); font-weight:800; font-size:1.1rem;"><i class="fa-solid fa-circle-xmark"></i> 오답입니다!</span>`;
    }

    // Highlight Buttons
    document.querySelectorAll('.quiz-opt-btn').forEach(btn => {
      if (btn.dataset.id === target.id) {
        btn.classList.add('correct');
      } else if (btn.dataset.id === selectedId) {
        btn.classList.add('incorrect');
      }
    });

    // Detail Explanation
    el.quizDetailExplanation.innerHTML = `
      <p style="margin-top:0.75rem; font-size:0.9rem;"><strong>정답 토픽:</strong> ${escapeHtml(target.title)}</p>
      ${target.mnemonics?.length ? `<p style="font-size:0.85rem; color:var(--color-medium); margin-top:0.25rem;">🧠 두음: ${renderInlineMarkdown(target.mnemonics.join(' / '))}</p>` : ''}
    `;

    el.quizScore.textContent = state.quiz.score;
    el.quizTotal.textContent = state.quiz.total;
    el.quizExplanation.style.display = 'block';
  }

  // EVENT LISTENERS
  function setupEventListeners() {
    // 3D Card Flip
    el.flashcard3d.addEventListener('click', () => {
      state.isFlipped = !state.isFlipped;
      el.flashcard3d.classList.toggle('is-flipped', state.isFlipped);
    });

    // Rating Buttons
    el.rateHardBtn.addEventListener('click', (e) => { e.stopPropagation(); rateCard('hard'); });
    el.rateMediumBtn.addEventListener('click', (e) => { e.stopPropagation(); rateCard('medium'); });
    el.rateEasyBtn.addEventListener('click', (e) => { e.stopPropagation(); rateCard('easy'); });

    // Prev / Next Navigation
    el.prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevCard(); });
    el.nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextCard(); });

    // Modes Menu Navigation
    el.modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        el.modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentMode = btn.dataset.mode;

        el.viewPanels.forEach(panel => panel.classList.remove('active'));

        if (state.currentMode === 'flashcard') {
          el.viewFlashcard.classList.add('active');
          applyFilters();
        } else if (state.currentMode === 'review') {
          el.viewFlashcard.classList.add('active'); // reuse deck view for review
          applyFilters();
        } else if (state.currentMode === 'quiz') {
          el.viewQuiz.classList.add('active');
          startNewQuiz();
        } else if (state.currentMode === 'list') {
          el.viewList.classList.add('active');
          applyFilters();
        }
      });
    });

    // Category Buttons (Sidebar Delegation)
    el.categoryList.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-item-btn');
      if (!btn) return;
      document.querySelectorAll('.cat-item-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedCategory = btn.dataset.cat;
      applyFilters();
    });

    // Type Selector Buttons
    el.typeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        el.typeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedType = btn.dataset.type;
        applyFilters();
      });
    });

    // Search Box
    el.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      el.clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
      applyFilters();
    });

    el.clearSearchBtn.addEventListener('click', () => {
      el.searchInput.value = '';
      state.searchQuery = '';
      el.clearSearchBtn.style.display = 'none';
      applyFilters();
    });

    // Mnemonic Toggle
    el.toggleMnemonic.addEventListener('change', (e) => {
      state.showMnemonic = e.target.checked;
      renderCurrentCard();
    });

    // Shuffle Button
    el.shuffleBtn.addEventListener('click', () => {
      shuffleArray(state.filteredCards);
      state.currentIndex = 0;
      renderCurrentCard();
    });

    // Quiz Next Button
    el.quizNextBtn.addEventListener('click', loadNextQuizQuestion);
    el.startNewQuizBtn.addEventListener('click', startNewQuiz);

    // Theme Toggle
    el.themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      el.themeToggleBtn.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });

    // Reset Stats
    el.resetStatsBtn.addEventListener('click', () => {
      if (confirm('모든 학습 평가 기록을 초기화하시겠습니까?')) {
        state.ratings = {};
        try { localStorage.removeItem('itpe_flashcard_ratings'); } catch (err) { /* ignore */ }
        updateStats();
        applyFilters();
      }
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
      if (state.currentMode !== 'flashcard' && state.currentMode !== 'review') return;

      if (e.code === 'Space') {
        e.preventDefault();
        state.isFlipped = !state.isFlipped;
        el.flashcard3d.classList.toggle('is-flipped', state.isFlipped);
      } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
        nextCard();
      } else if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
        prevCard();
      } else if (e.code === 'Digit1') {
        rateCard('hard');
      } else if (e.code === 'Digit2') {
        rateCard('medium');
      } else if (e.code === 'Digit3') {
        rateCard('easy');
      }
    });
  }

  // UTILITY FUNCTIONS

  // Renders minimal inline markdown (**bold**, `code`) found in source notes.
  // Input is escaped first, so the markers below only ever wrap safe text.
  function renderInlineMarkdown(text) {
    return escapeHtml(text)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`(.+?)`/g, '<code>$1</code>');
  }

  function formatDetailContent(str) {
    if (!str) return '';
    return str.split('\n').map(line => {
      const trimmed = line.trim();
      const listMatch = trimmed.match(/^(?:\d+\.|[-*])\s+(.*)$/);
      const body = listMatch ? listMatch[1] : trimmed;
      return `<p style="margin-bottom:0.3rem;">${listMatch ? '• ' : ''}${renderInlineMarkdown(body)}</p>`;
    }).join('');
  }

  function escapeHtml(text) {
    if (!text) return '';
    return text.replace(/&/g, "&amp;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;")
               .replace(/"/g, "&quot;")
               .replace(/'/g, "&#039;");
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // START APP
  init();
});
