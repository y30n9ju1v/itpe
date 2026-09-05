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

  function loadBookmarks() {
    try {
      return JSON.parse(localStorage.getItem('itpe_flashcard_bookmarks') || '{}');
    } catch (err) {
      return {};
    }
  }

  function saveBookmarks(bookmarks) {
    try {
      localStorage.setItem('itpe_flashcard_bookmarks', JSON.stringify(bookmarks));
    } catch (err) {}
  }

  function loadReadCompleted() {
    try {
      return JSON.parse(localStorage.getItem('itpe_flashcard_read_completed') || '{}');
    } catch (err) {
      return {};
    }
  }

  function saveReadCompleted(completed) {
    try {
      localStorage.setItem('itpe_flashcard_read_completed', JSON.stringify(completed));
    } catch (err) {}
  }

  // Keep review timing separate from the latest confidence rating.
  function loadSchedules() {
    try {
      return JSON.parse(localStorage.getItem('itpe_flashcard_schedules') || '{}');
    } catch (err) {
      return {};
    }
  }

  function saveSchedules(schedules) {
    try {
      localStorage.setItem('itpe_flashcard_schedules', JSON.stringify(schedules));
    } catch (err) {
      console.warn('Failed to save flashcard schedules.', err);
    }
  }

  // APP STATE
  const state = {
    allCards: [],
    categories: {},
    filteredCards: [],
    currentIndex: 0,
    ratings: loadRatings(),
    schedules: loadSchedules(),
    bookmarks: loadBookmarks(),
    readCompleted: loadReadCompleted(),
    selectedCategory: 'all',
    selectedType: 'all', // 'all', 'subnote', 'glossary', 'bookmark'
    currentMode: 'study', // Desktop default; phones start in the compact flashcard view.
    studyView: 'step', // 'all' (전체 펼쳐보기) or 'step' (능동 회상)
    currentStep: 1, // 1~5
    isKeywordMasked: false,
    autoplay: {
      isPlaying: false,
      intervalMs: 8000,
      progressTimerId: null
    },
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
    statBookmark: document.getElementById('stat-bookmark-count'),
    statEasy: document.getElementById('stat-easy-count'),
    statMedium: document.getElementById('stat-medium-count'),
    statHard: document.getElementById('stat-hard-count'),
    statDue: document.getElementById('stat-due-count'),
    progressBarFill: document.getElementById('overall-progress-bar'),
    progressText: document.getElementById('overall-progress-text'),
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    resetStatsBtn: document.getElementById('reset-stats-btn'),
    resetStatsBtnMobile: document.getElementById('reset-stats-btn-mobile'),
    mobileFilterBtn: document.getElementById('mobile-filter-btn'),
    mobileFilterCloseBtn: document.getElementById('mobile-filter-close-btn'),
    sidebar: document.getElementById('learning-sidebar'),

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
    viewStudy: document.getElementById('view-study'),
    viewFlashcard: document.getElementById('view-flashcard'),
    viewQuiz: document.getElementById('view-quiz'),
    viewList: document.getElementById('view-list'),

    // View 0: Study Mode Elements
    studyCardCounter: document.getElementById('study-card-counter'),
    studyCurrentCat: document.getElementById('study-current-cat'),
    studyBookmarkBtn: document.getElementById('study-bookmark-btn'),
    studyReadBtn: document.getElementById('study-read-btn'),
    studyDocLink: document.getElementById('study-doc-link'),
    studyTabAll: document.getElementById('study-tab-all'),
    studyTabStep: document.getElementById('study-tab-step'),
    toggleKeywordMask: document.getElementById('toggle-keyword-mask'),
    autoplayControlsWrap: document.getElementById('autoplay-controls-wrap'),
    studyAutoplayBtn: document.getElementById('study-autoplay-btn'),
    studyAutoplayInterval: document.getElementById('study-autoplay-interval'),
    studyAutoplayProgress: document.getElementById('study-autoplay-progress'),
    studyAutoplayProgressBar: document.getElementById('study-autoplay-progress-bar'),
    studyStepperWrap: document.getElementById('study-stepper-wrap'),
    stepPillBtns: document.querySelectorAll('.step-pill-btn'),
    studyCard: document.getElementById('study-card'),
    studyCardBody: document.getElementById('study-card-body'),
    studyCardType: document.getElementById('study-card-type'),
    studyCardReadBadge: document.getElementById('study-card-read-badge'),
    studyCardTitle: document.getElementById('study-card-title'),
    studyCardDefn: document.getElementById('study-card-definition'),
    studyBlockMnemonic: document.getElementById('study-block-mnemonic'),
    studyCardMnemonicList: document.getElementById('study-card-mnemonic-list'),
    studyBlockDiagram: document.getElementById('study-block-diagram'),
    studyCardDiagram: document.getElementById('study-card-diagram'),
    copyDiagramBtn: document.getElementById('copy-diagram-btn'),
    studyBlockKeywords: document.getElementById('study-block-keywords'),
    studyCardKeywordsCloud: document.getElementById('study-card-keywords-cloud'),
    studyBlockComponents: document.getElementById('study-block-components'),
    studyCardComponents: document.getElementById('study-card-components'),
    studyBlockComparison: document.getElementById('study-block-comparison'),
    studyCardComparison: document.getElementById('study-card-comparison'),
    studyBlockDiff: document.getElementById('study-block-differentiation'),
    studyCardDiff: document.getElementById('study-card-differentiation'),
    studyCardSourceFile: document.getElementById('study-card-source-file'),
    studyPrevBtn: document.getElementById('study-prev-btn'),
    studyStepNextBtn: document.getElementById('study-step-next-btn'),
    studyNextBtn: document.getElementById('study-next-btn'),

    // Flashcard Deck (Existing Flip Mode)
    cardCounter: document.getElementById('card-counter'),
    currentCardCat: document.getElementById('current-card-cat'),
    flashcard3d: document.getElementById('flashcard'),
    
    // Front Face
    frontType: document.getElementById('card-front-type'),
    frontMnemonicBadge: document.getElementById('card-front-mnemonic-badge'),
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

      // A full study card is intentionally long-form. On a phone, start with
      // the recall card instead so the prompt and its rating controls remain
      // usable within the viewport.
      if (window.matchMedia('(max-width: 640px)').matches) {
        state.currentMode = 'flashcard';
        el.modeBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.mode === 'flashcard'));
        el.viewStudy.classList.remove('active');
        el.viewFlashcard.classList.add('active');
      }
      syncMobileFocusMode();

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
      result = result.filter(isDueForReview);
    }

    // Filter by Category
    if (state.selectedCategory !== 'all') {
      result = result.filter(c => c.category_id === state.selectedCategory);
    }

    // Filter by Type
    if (state.selectedType === 'bookmark') {
      result = result.filter(c => !!state.bookmarks[c.id]);
    } else if (state.selectedType === 'unread') {
      result = result.filter(c => !state.readCompleted[c.id]);
    } else if (state.selectedType !== 'all') {
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
    state.currentStep = 1;
    state.isFlipped = false;

    el.filteredCountBadge.textContent = `${result.length}개`;

    if (state.currentMode === 'study') {
      renderStudyCard();
    } else if (state.currentMode === 'flashcard' || state.currentMode === 'review') {
      renderCurrentCard();
    } else if (state.currentMode === 'list') {
      renderListView();
    }
  }

  // ==========================================================================
  // VIEW 0: STUDY MODE (학습용 플래시 카드 로직)
  // ==========================================================================

  function renderStudyCard() {
    if (state.filteredCards.length === 0) {
      const emptyMessages = {
        bookmark: ["북마크된 카드가 없습니다 ⭐️", "상단의 북마크 버튼(또는 단축키 B)을 눌러 중요한 토픽을 추가해 보세요."],
        unread: ["회독 완료! 안 읽은 카드가 없습니다 🎉", "모든 카드를 한 번씩 확인했습니다. 다른 필터로 계속 복습해 보세요."]
      };
      const [title, desc] = emptyMessages[state.selectedType] || ["조건에 해당하는 카드가 없습니다.", "다른 카테고리나 검색어를 선택해 보세요."];
      el.studyCardTitle.textContent = title;
      el.studyCardDefn.innerHTML = `<p style="color:var(--text-secondary);">${desc}</p>`;
      el.studyBlockMnemonic.style.display = 'none';
      el.studyBlockDiagram.style.display = 'none';
      el.studyBlockKeywords.style.display = 'none';
      el.studyBlockComponents.style.display = 'none';
      el.studyBlockComparison.style.display = 'none';
      el.studyBlockDiff.style.display = 'none';
      el.studyCardCounter.textContent = '0 / 0';
      el.studyBookmarkBtn.classList.remove('active');
      el.studyReadBtn.classList.remove('active');
      el.studyCardReadBadge.style.display = 'none';
      el.studyDocLink.style.display = 'none';
      return;
    }

    const card = state.filteredCards[state.currentIndex];
    el.studyCardCounter.textContent = `${state.currentIndex + 1} / ${state.filteredCards.length}`;

    // Header Category Info
    const catName = card.category_name || state.categories[card.category_id]?.name || '기술사';
    const catIcon = card.category_icon || state.categories[card.category_id]?.icon || '📝';
    el.studyCurrentCat.innerHTML = `<span class="cat-icon">${catIcon}</span> <span class="cat-name">${catName}</span>`;

    // Title and Meta
    el.studyCardType.textContent = card.type === 'subnote' ? '서브노트' : '용어집';
    el.studyCardTitle.textContent = card.title || card.doc_title;

    // Bookmark button state
    const isBookmarked = !!state.bookmarks[card.id];
    el.studyBookmarkBtn.classList.toggle('active', isBookmarked);
    el.studyBookmarkBtn.querySelector('span').textContent = isBookmarked ? '북마크됨' : '북마크';
    el.studyBookmarkBtn.querySelector('i').className = isBookmarked ? 'fa-solid fa-star' : 'fa-regular fa-star';

    // Read Completed button & badge
    const isRead = !!state.readCompleted[card.id];
    el.studyReadBtn.classList.toggle('active', isRead);
    el.studyReadBtn.querySelector('span').textContent = isRead ? '회독완료' : '회독 완료';
    el.studyCardReadBadge.style.display = isRead ? 'inline-flex' : 'none';

    // Doc URL link
    if (card.doc_url) {
      el.studyDocLink.href = card.doc_url;
      el.studyDocLink.style.display = 'inline-flex';
    } else {
      el.studyDocLink.style.display = 'none';
    }

    // Definition
    el.studyCardDefn.innerHTML = card.definition 
      ? renderInlineMarkdown(card.definition) 
      : '<p style="color:var(--text-muted);">정의 내용이 없습니다.</p>';

    // Mnemonics
    const hasMnemonic = !!(card.mnemonics && card.mnemonics.length > 0 && state.showMnemonic);
    el.studyBlockMnemonic.dataset.hasContent = String(hasMnemonic);
    if (hasMnemonic) {
      el.studyCardMnemonicList.innerHTML = card.mnemonics.map(m => `<li>• ${renderInlineMarkdown(m)}</li>`).join('');
    }

    // Concept Diagram (ASCII Architecture)
    const hasDiagram = !!(card.concept_diagram && card.concept_diagram.trim());
    el.studyBlockDiagram.dataset.hasContent = String(hasDiagram);
    if (hasDiagram) {
      el.studyCardDiagram.textContent = stripWrappingBackticks(card.concept_diagram);
    }

    // Keywords Cloud
    const hasKeywords = !!card.keywords;
    el.studyBlockKeywords.dataset.hasContent = String(hasKeywords);
    if (hasKeywords) {
      const tags = card.keywords.split(/[,;\/]/).map(t => t.trim()).filter(Boolean);
      el.studyCardKeywordsCloud.innerHTML = tags.map(t => `<span class="tag-item"># ${escapeHtml(t)}</span>`).join('');
    }

    // Components
    const hasComponents = !!card.components;
    el.studyBlockComponents.dataset.hasContent = String(hasComponents);
    if (hasComponents) {
      el.studyCardComponents.innerHTML = formatDetailContent(card.components);
    }

    // Comparison
    const hasComparison = !!card.comparison;
    el.studyBlockComparison.dataset.hasContent = String(hasComparison);
    if (hasComparison) {
      el.studyCardComparison.innerHTML = formatDetailContent(card.comparison);
    }

    // Differentiation
    const hasDiff = !!card.differentiation;
    el.studyBlockDiff.dataset.hasContent = String(hasDiff);
    if (hasDiff) {
      el.studyCardDiff.innerHTML = formatDetailContent(card.differentiation);
    }

    // Source file
    el.studyCardSourceFile.textContent = card.source_file;

    // Apply Keyword Blur Masking
    el.studyCardBody.classList.toggle('mask-keywords-active', state.isKeywordMasked);

    // Update Step Reveal View
    updateStudyStepView();
  }

  // A block's dataset.hasContent is the single source of truth for whether it has
  // anything to show; step visibility is combined with it right here, always as an
  // inline style, so nothing else needs to fight over display later (see the earlier
  // flashcard-panel bug for why mixing inline styles and CSS-class toggles is unsafe).
  function blockHasContent(block) {
    return block.dataset.hasContent !== 'false';
  }

  function stepHasContent(stepNum) {
    const blocks = document.querySelectorAll(`.study-block.step-block[data-step="${stepNum}"]`);
    return Array.from(blocks).some(blockHasContent);
  }

  function updateStudyStepView() {
    const stepBlocks = document.querySelectorAll('.study-block.step-block');

    if (state.studyView === 'step') {
      el.studyCard.classList.add('step-mode-active');
      el.studyStepperWrap.style.display = 'block';
      el.studyStepNextBtn.style.display = 'inline-flex';

      el.stepPillBtns.forEach(btn => {
        btn.classList.toggle('active', Number(btn.dataset.step) === state.currentStep);
      });

      stepBlocks.forEach(block => {
        const stepNum = Number(block.dataset.step);
        const show = blockHasContent(block) && stepNum <= state.currentStep;
        block.style.display = show ? '' : 'none';
        block.classList.toggle('step-visible', show);
      });

      if (state.currentStep >= 5) {
        el.studyStepNextBtn.innerHTML = '다음 카드 (Space) <i class="fa-solid fa-arrow-right"></i>';
      } else {
        el.studyStepNextBtn.innerHTML = `다음 단계 (스텝 ${state.currentStep + 1}/5) <i class="fa-solid fa-arrow-down"></i>`;
      }
    } else {
      el.studyCard.classList.remove('step-mode-active');
      el.studyStepperWrap.style.display = 'none';
      el.studyStepNextBtn.style.display = 'none';
      stepBlocks.forEach(block => {
        block.style.display = blockHasContent(block) ? '' : 'none';
        block.classList.remove('step-visible');
      });
    }
  }

  function nextStudyStep() {
    if (state.studyView === 'step') {
      // Skip steps that have nothing to show for this card (common for glossary
      // entries, which only ever populate the definition block) instead of landing
      // on a visually empty step.
      let next = state.currentStep;
      while (next < 5) {
        next++;
        if (stepHasContent(next)) {
          state.currentStep = next;
          updateStudyStepView();
          const targetBlock = document.querySelector(`.study-block.step-block[data-step="${state.currentStep}"]`);
          if (targetBlock) {
            targetBlock.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          return;
        }
      }
      nextStudyCard();
    } else {
      nextStudyCard();
    }
  }

  function nextStudyCard() {
    if (state.filteredCards.length === 0) return;
    if (state.currentIndex < state.filteredCards.length - 1) {
      state.currentIndex++;
    } else {
      state.currentIndex = 0;
    }
    state.currentStep = 1;
    renderStudyCard();
  }

  function prevStudyCard() {
    if (state.filteredCards.length === 0) return;
    if (state.currentIndex > 0) {
      state.currentIndex--;
    } else {
      state.currentIndex = state.filteredCards.length - 1;
    }
    state.currentStep = 1;
    renderStudyCard();
  }

  function toggleBookmark(cardId) {
    if (!cardId) return;
    state.bookmarks[cardId] = !state.bookmarks[cardId];
    if (!state.bookmarks[cardId]) {
      delete state.bookmarks[cardId];
    }
    saveBookmarks(state.bookmarks);
    updateStats();
    if (state.selectedType === 'bookmark') {
      applyFilters();
    } else {
      renderStudyCard();
    }
  }

  function toggleReadCompleted(cardId) {
    if (!cardId) return;
    state.readCompleted[cardId] = !state.readCompleted[cardId];
    if (!state.readCompleted[cardId]) {
      delete state.readCompleted[cardId];
    }
    saveReadCompleted(state.readCompleted);
    if (state.selectedType === 'unread') {
      applyFilters();
    } else {
      renderStudyCard();
    }
  }

  function toggleAutoplay() {
    if (state.autoplay.isPlaying) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  }

  function startAutoplay() {
    state.autoplay.isPlaying = true;
    el.studyAutoplayBtn.classList.add('playing');
    el.studyAutoplayBtn.innerHTML = '<i class="fa-solid fa-pause"></i> <span>일시정지</span>';
    el.studyAutoplayProgress.style.display = 'block';

    const interval = state.autoplay.intervalMs;
    const startTime = Date.now();

    if (state.autoplay.progressTimerId) clearInterval(state.autoplay.progressTimerId);
    state.autoplay.progressTimerId = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / interval) * 100);
      el.studyAutoplayProgressBar.style.width = `${pct}%`;
      if (elapsed >= interval) {
        clearInterval(state.autoplay.progressTimerId);
        nextStudyCard();
        if (state.autoplay.isPlaying) {
          startAutoplay();
        }
      }
    }, 50);
  }

  function stopAutoplay() {
    state.autoplay.isPlaying = false;
    if (state.autoplay.progressTimerId) {
      clearInterval(state.autoplay.progressTimerId);
      state.autoplay.progressTimerId = null;
    }
    el.studyAutoplayBtn.classList.remove('playing');
    el.studyAutoplayBtn.innerHTML = '<i class="fa-solid fa-play"></i> <span>자동 회독</span>';
    el.studyAutoplayProgress.style.display = 'none';
    el.studyAutoplayProgressBar.style.width = '0%';
  }

  // ==========================================================================
  // VIEW 1: FLASHCARD MODE (기존 뒤집기 암기 테스트)
  // ==========================================================================

  // RENDER CURRENT FLASHCARD
  function renderCurrentCard() {
    if (state.isFlipped) {
      el.flashcard3d.classList.remove('is-flipped');
      state.isFlipped = false;
      el.flashcard3d.setAttribute('aria-pressed', 'false');
    }

    if (state.filteredCards.length === 0) {
      el.frontMnemonicBox.style.display = 'block';
      el.frontKeywordsBox.style.display = 'none';
      if (state.currentMode === 'review') {
        el.frontTitle.textContent = "오늘 예정된 복습이 없습니다! 🎉";
        el.frontMnemonics.innerHTML = "<li>다음 복습일에 다시 만나요. 새 카드는 학습 카드 모드에서 시작할 수 있습니다.</li>";
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
    el.frontType.textContent = card.type === 'subnote' ? '정의 → 토픽 회상' : '정의 → 용어 회상';
    el.frontMnemonicBadge.style.display = 'inline-flex';
    el.frontTitle.innerHTML = card.definition
      ? renderInlineMarkdown(card.definition)
      : '정의를 보고 토픽명과 답안 구조를 떠올려 보세요.';

    // Titles, mnemonics, and keywords are answers. Keep them on the back so
    // this mode practises retrieval instead of recognition.
    el.frontMnemonicBox.style.display = 'none';
    el.frontKeywordsBox.style.display = 'none';

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
    scheduleCard(card, rating);
    saveRatings(state.ratings);
    updateStats();

    // A rated due card leaves today's queue immediately; it will return when
    // its scheduled review time arrives.
    if (state.currentMode === 'review') {
      applyFilters();
      return;
    }

    // Visual feedback & next card
    renderCurrentCard();
    setTimeout(() => {
      nextCard();
    }, 200);
  }

  function isDueForReview(card) {
    const schedule = state.schedules[card.id];
    return !schedule || !schedule.dueAt || new Date(schedule.dueAt).getTime() <= Date.now();
  }

  function scheduleCard(card, rating) {
    const previous = state.schedules[card.id] || { reps: 0, lapses: 0, intervalDays: 0 };
    let intervalDays;
    let dueAt;

    if (rating === 'hard') {
      intervalDays = 0;
      dueAt = new Date(Date.now() + 10 * 60 * 1000);
    } else if (rating === 'medium') {
      intervalDays = Math.max(1, Math.round((previous.intervalDays || 1) * 1.5));
      dueAt = new Date(Date.now() + intervalDays * 24 * 60 * 60 * 1000);
    } else {
      intervalDays = previous.reps === 0
        ? 3
        : Math.max(4, Math.round((previous.intervalDays || 3) * 2.5));
      dueAt = new Date(Date.now() + intervalDays * 24 * 60 * 60 * 1000);
    }

    state.schedules[card.id] = {
      dueAt: dueAt.toISOString(),
      intervalDays,
      reps: previous.reps + 1,
      lapses: previous.lapses + (rating === 'hard' ? 1 : 0),
      lastRating: rating,
      lastReviewedAt: new Date().toISOString()
    };
    saveSchedules(state.schedules);
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

    const bookmarkCount = Object.keys(state.bookmarks).filter(k => state.bookmarks[k]).length;
    if (el.statBookmark) el.statBookmark.textContent = bookmarkCount;

    const dueCount = state.allCards.filter(isDueForReview).length;
    if (el.statDue) el.statDue.textContent = dueCount;

    const total = state.allCards.length || 1;
    const scheduledCount = state.allCards.filter(c => !!state.schedules[c.id]).length;
    const percent = Math.round((scheduledCount / total) * 100);
    el.progressBarFill.style.width = `${percent}%`;
    el.progressText.textContent = `${percent}% 복습 계획 (${scheduledCount}/${total})`;
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

    // Prefer close distractors. Unrelated terms make a recognition quiz too easy.
    let distractors = pool.filter(c => c.id !== target.id && c.type === target.type);
    if (distractors.length < 3) {
      distractors = pool.filter(c => c.id !== target.id);
    }
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
    // 1. Study Mode Listeners
    el.studyPrevBtn.addEventListener('click', () => { stopAutoplay(); prevStudyCard(); });
    el.studyNextBtn.addEventListener('click', () => { stopAutoplay(); nextStudyCard(); });
    el.studyStepNextBtn.addEventListener('click', () => { stopAutoplay(); nextStudyStep(); });

    el.studyBookmarkBtn.addEventListener('click', () => {
      if (state.filteredCards.length > 0) {
        toggleBookmark(state.filteredCards[state.currentIndex].id);
      }
    });

    el.studyReadBtn.addEventListener('click', () => {
      if (state.filteredCards.length > 0) {
        toggleReadCompleted(state.filteredCards[state.currentIndex].id);
      }
    });

    el.studyTabAll.addEventListener('click', () => {
      state.studyView = 'all';
      el.studyTabAll.classList.add('active');
      el.studyTabStep.classList.remove('active');
      el.studyTabAll.setAttribute('aria-pressed', 'true');
      el.studyTabStep.setAttribute('aria-pressed', 'false');
      el.autoplayControlsWrap.style.display = '';
      updateStudyStepView();
    });

    el.studyTabStep.addEventListener('click', () => {
      // Autoplay just jumps to the next card on a timer — that's at odds with
      // reading through a card one step at a time, so it's unavailable here.
      stopAutoplay();
      el.autoplayControlsWrap.style.display = 'none';
      state.studyView = 'step';
      el.studyTabStep.classList.add('active');
      el.studyTabAll.classList.remove('active');
      el.studyTabStep.setAttribute('aria-pressed', 'true');
      el.studyTabAll.setAttribute('aria-pressed', 'false');
      state.currentStep = 1;
      updateStudyStepView();
    });

    el.stepPillBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        state.currentStep = Number(btn.dataset.step);
        updateStudyStepView();
      });
    });

    el.toggleKeywordMask.addEventListener('change', (e) => {
      state.isKeywordMasked = e.target.checked;
      el.studyCardBody.classList.toggle('mask-keywords-active', state.isKeywordMasked);
    });

    el.copyDiagramBtn.addEventListener('click', () => {
      const text = el.studyCardDiagram.textContent;
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          el.copyDiagramBtn.innerHTML = '<i class="fa-solid fa-check"></i> 복사됨!';
          setTimeout(() => {
            el.copyDiagramBtn.innerHTML = '<i class="fa-regular fa-copy"></i> 복사';
          }, 1500);
        }).catch(() => {
          alert('복사에 실패했습니다.');
        });
      }
    });

    el.studyAutoplayBtn.addEventListener('click', toggleAutoplay);

    el.studyAutoplayInterval.addEventListener('change', (e) => {
      state.autoplay.intervalMs = Number(e.target.value);
      if (state.autoplay.isPlaying) {
        startAutoplay();
      }
    });

    // Click on individual masked keywords to toggle reveal
    el.studyCardBody.addEventListener('click', (e) => {
      const target = e.target.closest('strong, code, .tag-item');
      if (target && state.isKeywordMasked) {
        target.classList.toggle('revealed');
      }
    });

    // 2. Flashcard Mode (3D Flip & Ratings)
    el.flashcard3d.addEventListener('click', () => {
      toggleFlashcard();
    });

    el.flashcard3d.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        toggleFlashcard();
      }
    });

    el.mobileFilterBtn.addEventListener('click', () => setMobileFiltersOpen(true));
    el.mobileFilterCloseBtn.addEventListener('click', () => setMobileFiltersOpen(false));

    el.rateHardBtn.addEventListener('click', (e) => { e.stopPropagation(); rateCard('hard'); });
    el.rateMediumBtn.addEventListener('click', (e) => { e.stopPropagation(); rateCard('medium'); });
    el.rateEasyBtn.addEventListener('click', (e) => { e.stopPropagation(); rateCard('easy'); });

    el.prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prevCard(); });
    el.nextBtn.addEventListener('click', (e) => { e.stopPropagation(); nextCard(); });

    // 3. Modes Menu Navigation
    el.modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        stopAutoplay();
        el.modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentMode = btn.dataset.mode;
        syncMobileFocusMode();
        setMobileFiltersOpen(false);

        el.viewPanels.forEach(panel => panel.classList.remove('active'));

        if (state.currentMode === 'study') {
          el.viewStudy.classList.add('active');
          applyFilters();
        } else if (state.currentMode === 'flashcard') {
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

    // 4. Category Filter Buttons
    el.categoryList.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-item-btn');
      if (!btn) return;
      document.querySelectorAll('.cat-item-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedCategory = btn.dataset.cat;
      applyFilters();
      setMobileFiltersOpen(false);
    });

    // 5. Type Selector Buttons (All / Subnote / Glossary / Bookmark)
    el.typeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        el.typeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedType = btn.dataset.type;
        applyFilters();
        setMobileFiltersOpen(false);
      });
    });

    // 6. Search Box
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

    // 7. Mnemonic Toggle
    el.toggleMnemonic.addEventListener('change', (e) => {
      state.showMnemonic = e.target.checked;
      if (state.currentMode === 'study') {
        renderStudyCard();
      } else {
        renderCurrentCard();
      }
    });

    // 8. Shuffle Button
    el.shuffleBtn.addEventListener('click', () => {
      shuffleArray(state.filteredCards);
      state.currentIndex = 0;
      if (state.currentMode === 'study') {
        renderStudyCard();
      } else {
        renderCurrentCard();
      }
    });

    // 9. Quiz Next & Restart Buttons
    el.quizNextBtn.addEventListener('click', loadNextQuizQuestion);
    el.startNewQuizBtn.addEventListener('click', startNewQuiz);

    // 10. Theme Toggle
    el.themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      el.themeToggleBtn.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });

    // 11. Reset Stats
    function resetLearningData() {
      if (confirm('모든 학습 평가 기록 및 북마크를 초기화하시겠습니까?')) {
        state.ratings = {};
        state.bookmarks = {};
        state.readCompleted = {};
        state.schedules = {};
        try {
          localStorage.removeItem('itpe_flashcard_ratings');
          localStorage.removeItem('itpe_flashcard_bookmarks');
          localStorage.removeItem('itpe_flashcard_read_completed');
          localStorage.removeItem('itpe_flashcard_schedules');
        } catch (err) { /* ignore */ }
        updateStats();
        applyFilters();
      }
    }
    el.resetStatsBtn.addEventListener('click', resetLearningData);
    // Mobile hides the header's danger action to declutter; it is
    // re-surfaced inside the settings drawer instead of dropped entirely.
    if (el.resetStatsBtnMobile) {
      el.resetStatsBtnMobile.addEventListener('click', () => {
        resetLearningData();
        setMobileFiltersOpen(false);
      });
    }

    // 12. Global Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && el.sidebar.classList.contains('mobile-open')) {
        setMobileFiltersOpen(false);
        el.mobileFilterBtn.focus();
        return;
      }
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

      if (state.currentMode === 'study') {
        if (e.code === 'Space') {
          e.preventDefault();
          nextStudyStep();
        } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
          stopAutoplay();
          nextStudyCard();
        } else if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
          stopAutoplay();
          prevStudyCard();
        } else if (e.code === 'KeyB') {
          if (state.filteredCards.length > 0) {
            toggleBookmark(state.filteredCards[state.currentIndex].id);
          }
        } else if (e.code === 'KeyM') {
          state.isKeywordMasked = !state.isKeywordMasked;
          el.toggleKeywordMask.checked = state.isKeywordMasked;
          el.studyCardBody.classList.toggle('mask-keywords-active', state.isKeywordMasked);
        } else if (e.code === 'KeyP') {
          if (state.studyView !== 'step') toggleAutoplay();
        }
      } else if (state.currentMode === 'flashcard' || state.currentMode === 'review') {
        if (e.code === 'Space') {
          e.preventDefault();
          toggleFlashcard();
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
      }
    });
  }

  function toggleFlashcard() {
    state.isFlipped = !state.isFlipped;
    el.flashcard3d.classList.toggle('is-flipped', state.isFlipped);
    el.flashcard3d.setAttribute('aria-pressed', String(state.isFlipped));
  }

  function setMobileFiltersOpen(isOpen) {
    el.sidebar.classList.toggle('mobile-open', isOpen);
    el.mobileFilterBtn.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) el.mobileFilterCloseBtn.focus();
  }

  function syncMobileFocusMode() {
    const isCompactViewport = window.matchMedia('(max-width: 640px)').matches;
    const isRecallMode = state.currentMode === 'flashcard' || state.currentMode === 'review';
    document.body.classList.toggle('flashcard-focus', isCompactViewport && isRecallMode);
  }

  // UTILITY FUNCTIONS

  // Some source notes wrap their whole concept-diagram cell in a single
  // ` `...` ` inline-code span; strip that outer pair so it isn't rendered
  // as literal backtick characters (the diagram already gets code styling).
  function stripWrappingBackticks(text) {
    if (!text) return text;
    const trimmed = text.trim();
    if (trimmed.length > 1 && trimmed.startsWith('`') && trimmed.endsWith('`')) {
      return trimmed.slice(1, -1).trim();
    }
    return trimmed;
  }

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
