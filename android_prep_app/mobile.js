// AndroidPrep Mobile - Essential Mobile Application Logic

const CHEAT_DATA = [
  {
    id: "cheat-coroutines-1",
    category: "coroutines",
    categoryName: "Coroutines & Flow",
    title: "Job vs SupervisorJob & Failure Isolation",
    points: [
      { text: "In a standard <strong>Job</strong>, an unhandled exception in any child cancels the parent, which cancels all sibling coroutines.", type: "danger" },
      { text: "Use <strong>SupervisorJob</strong> or <strong>supervisorScope</strong> so that a failure in one child does NOT cancel its siblings or parent.", type: "normal" },
      { text: "Passing <code>SupervisorJob()</code> to <code>launch(SupervisorJob())</code> does NOT isolate child coroutines launched inside it unless wrapped in <code>supervisorScope</code>.", type: "warning" }
    ]
  },
  {
    id: "cheat-coroutines-2",
    category: "coroutines",
    categoryName: "Coroutines & Flow",
    title: "StateFlow vs SharedFlow vs Channel",
    points: [
      { text: "<strong>StateFlow:</strong> Hot state holder, always has an initial value, replays 1, and ignores identical consecutive values (<code>distinctUntilChanged</code>).", type: "normal" },
      { text: "<strong>SharedFlow:</strong> Highly configurable event bus (replay, extraBufferCapacity, onBufferOverflow) ideal for broadcasts without initial value.", type: "normal" },
      { text: "<strong>Channel:</strong> 1-to-1 communication pipeline where each emitted event is consumed by exactly ONE receiver.", type: "warning" },
      { text: "Never use <code>LiveData</code> or cold flows for one-time navigation events; prefer Channel or SharedFlow.", type: "normal" }
    ]
  },
  {
    id: "cheat-coroutines-3",
    category: "coroutines",
    categoryName: "Coroutines & Flow",
    title: "Mutex vs Synchronized & Cancellation",
    points: [
      { text: "Never use <code>synchronized</code> or <code>ReentrantLock</code> inside coroutines; they block the underlying OS carrier thread.", type: "danger" },
      { text: "Always use <code>Mutex.withLock { ... }</code> which suspends rather than blocks OS threads.", type: "normal" },
      { text: "Never catch <code>CancellationException</code> without re-throwing it, otherwise structured cooperative cancellation will break.", type: "danger" }
    ]
  },
  {
    id: "cheat-compose-1",
    category: "compose",
    categoryName: "Compose Stability",
    title: "Class Stability & Recomposition Skipping",
    points: [
      { text: "Standard interfaces like <code>List&lt;T&gt;</code> are treated as <strong>UNSTABLE</strong> by Compose compiler because immutability cannot be verified.", type: "warning" },
      { text: "Use KotlinX <code>ImmutableList&lt;T&gt;</code> or mark parent model with <code>@Immutable</code> / <code>@Stable</code> to enable smart recomposition skipping.", type: "normal" },
      { text: "Unstable lambda references recreate instances on every recomposition. Use method references or <code>remember(key) { { action() } }</code>.", type: "normal" }
    ]
  },
  {
    id: "cheat-compose-2",
    category: "compose",
    categoryName: "Compose Stability",
    title: "derivedStateOf & Phase Skipping",
    points: [
      { text: "Use <code>derivedStateOf</code> when a state changes frequently (e.g. scroll pixels) but the UI only reacts to a threshold (e.g. <code>offset > 100</code>).", type: "normal" },
      { text: "Defer state reading to Layout or Draw phase using lambda modifiers like <code>Modifier.offset { IntOffset(0, y) }</code> to completely skip the Composition phase.", type: "normal" },
      { text: "In hybrid XML/Compose views, always configure <code>setViewCompositionStrategy(DisposeOnViewTreeLifecycleDestroyed)</code> to prevent memory leaks.", type: "warning" }
    ]
  },
  {
    id: "cheat-platform-1",
    category: "platform",
    categoryName: "Android 14/15",
    title: "Foreground Services & 16KB Page Alignment",
    points: [
      { text: "Android 14+ requires declaring explicit <code>foregroundServiceType</code> (dataSync, mediaPlayback, connectedDevice, etc.) in manifest AND in <code>startForeground()</code>.", type: "danger" },
      { text: "<code>shortService</code> type has a hard 3-minute timeout; exceeding it causes an immediate system ANR / crash.", type: "warning" },
      { text: "Android 15 introduces <strong>16 KB Page Sizes</strong>. All native C++/NDK libraries (.so) must be compiled with 16KB page alignment.", type: "normal" }
    ]
  },
  {
    id: "cheat-security-1",
    category: "security",
    categoryName: "OWASP Security",
    title: "KeyStore, StrongBox & Biometric Auth",
    points: [
      { text: "Generate AES-256-GCM keys directly inside <strong>AndroidKeyStore</strong>; prefer <code>setIsStrongBoxBacked(true)</code> on supported hardware.", type: "normal" },
      { text: "For sensitive actions (funds transfer), require <code>setUserAuthenticationRequired(true)</code> with <code>BiometricPrompt.CryptoObject</code>.", type: "normal" },
      { text: "Store SQLite databases encrypted with <strong>SQLCipher</strong>, deriving the database master key from KeyStore rather than hardcoding.", type: "warning" }
    ]
  }  ,
  {
    id: "cheat-arch-1",
    category: "architecture",
    categoryName: "System Design",
    title: "Mobile System Design & Scale Checklist",
    points: [
      { text: "Always establish <strong>Functional vs Non-Functional Requirements</strong> (DAU, p99 latency, offline mutation queue, battery limits) at the start.", type: "normal" },
      { text: "Client <strong>Single Source of Truth</strong>: UI (Compose) only listens to Room database Flow. Mutations write to SQLite before network sync.", type: "normal" },
      { text: "Implement <strong>exponential backoff with randomized jitter</strong> on API retries to avoid crashing recovering backend gateways.", type: "warning" },
      { text: "Use <strong>WorkManager Expedited Requests</strong> for persistent sync that survives app process death and device reboots.", type: "normal" }
    ]
  },
  {
    id: "cheat-flow-1",
    category: "coroutines",
    categoryName: "Coroutines & Flow",
    title: "Flow Concurrency: flatMapLatest, buffer & conflate",
    points: [
      { text: "<code>flatMapLatest</code> cancels the previous ongoing background search when a new user keystroke arrives.", type: "normal" },
      { text: "<code>buffer()</code> decouples producer emission speed from slow consumers using an internal channel.", type: "normal" },
      { text: "<code>conflate()</code> drops intermediate values if the collector is busy, only delivering the latest emission.", type: "warning" },
      { text: "<code>combine</code> emits on changes to either flow; <code>zip</code> requires one value from each stream in lockstep.", type: "normal" }
    ]
  },
  {
    id: "cheat-perf-1",
    category: "performance",
    categoryName: "Performance & Memory",
    title: "1MB Binder IPC Limit & 16KB Page Alignment",
    points: [
      { text: "The Android Binder IPC transaction buffer has an aggregate <strong>1MB limit</strong> across the entire process. Exceeding it throws <code>TransactionTooLargeException</code>.", type: "danger" },
      { text: "Never pass large lists or byte arrays through <code>Intent</code> or <code>SavedStateHandle</code>; persist to Room and pass unique IDs.", type: "warning" },
      { text: "Android 15 mandates <strong>16 KB Page Alignment</strong> for native C/C++ <code>.so</code> libraries.", type: "normal" },
      { text: "Free in-memory bitmap caches dynamically during <code>ComponentCallbacks2.onTrimMemory()</code> to avoid Low Memory Killer (LMK) eviction.", type: "normal" }
    ]
  },
  {
    id: "cheat-arch-2",
    category: "architecture",
    categoryName: "System Design",
    title: "Multi-Module Architecture & Play Feature Delivery",
    points: [
      { text: "Decouple modules into <code>:feature:name-api</code> (contracts) and <code>:feature:name-impl</code> to eliminate circular Gradle dependencies.", type: "normal" },
      { text: "Use <strong>Play Feature Delivery (DFMs)</strong> to extract heavy features into dynamic downloadable modules, minimizing base APK download size.", type: "normal" },
      { text: "Structure <strong>Dagger/Hilt subcomponents</strong> to dispose of feature-scoped dependencies immediately when the user exits the feature.", type: "normal" }
    ]
  }
];

const MOBILE_STATE = {
  activeTab: 'screenCheats',
  theme: localStorage.getItem('theme') || 'dark',
  themeColor: localStorage.getItem('theme_color') || 'blue',
  solvedChallenges: JSON.parse(localStorage.getItem('solved_challenges') || '[]'),
  cheatFilter: 'all',
  challengeFilter: 'all',
  companyFilter: 'all',
  quiz: {
    currentIndex: 0,
    score: 0,
    answered: false,
    selectedOption: null,
    answersLog: []
  }
};

// Initialize Mobile App
document.addEventListener('DOMContentLoaded', () => {
  initMobileTheme();
  renderCheats();
  renderQuiz();
  renderChallenges();
  renderCompanies();
  updateMobileReadiness();
});

// 1. Theme Handling
function initMobileTheme() {
  document.documentElement.setAttribute('data-theme', MOBILE_STATE.theme);
  document.documentElement.setAttribute('data-color', MOBILE_STATE.themeColor);
  updateThemeIcon();
}

function toggleMobileTheme() {
  MOBILE_STATE.theme = MOBILE_STATE.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', MOBILE_STATE.theme);
  localStorage.setItem('theme', MOBILE_STATE.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById('mobileThemeIcon');
  if (icon) {
    icon.textContent = MOBILE_STATE.theme === 'dark' ? '☀️' : '🌙';
  }
}

// 2. Navigation Tab Switching
function switchMobileTab(screenId, btnElement) {
  MOBILE_STATE.activeTab = screenId;
  
  // Update screens
  document.querySelectorAll('.tab-screen').forEach(screen => {
    screen.classList.remove('active');
  });
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) targetScreen.classList.add('active');

  // Update nav buttons
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
  });
  if (btnElement) {
    btnElement.classList.add('active');
    btnElement.setAttribute('aria-selected', 'true');
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 3. Tab 1: Cheatsheets
function renderCheats() {
  const container = document.getElementById('cheatsListContainer');
  if (!container) return;

  const query = (document.getElementById('cheatsSearchInput')?.value || '').toLowerCase().trim();
  const filter = MOBILE_STATE.cheatFilter;

  const filtered = CHEAT_DATA.filter(item => {
    const matchesCat = filter === 'all' || item.category === filter;
    const matchesQuery = !query || 
      item.title.toLowerCase().includes(query) || 
      item.points.some(p => p.text.toLowerCase().includes(query));
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 32px 16px; color: var(--text-muted);">
        <p style="font-size: 24px; margin-bottom: 6px;">🔍</p>
        <p>No cheat cards match your search.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(cheat => `
    <article class="cheat-card">
      <div class="cheat-card-header">
        <h3 class="cheat-card-title">${cheat.title}</h3>
        <span class="category-tag">${cheat.categoryName}</span>
      </div>
      <div class="cheat-body">
        <ul class="cheat-points-list">
          ${cheat.points.map(pt => `
            <li class="cheat-point-item ${pt.type}">
              <span>${pt.text}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </article>
  `).join('');
}

function setCheatFilter(category, btnElement) {
  MOBILE_STATE.cheatFilter = category;
  btnElement.parentElement.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  btnElement.classList.add('active');
  renderCheats();
}

function filterCheats() {
  renderCheats();
}

// 4. Tab 2: Touch Quiz & Gotchas
function renderQuiz() {
  const container = document.getElementById('quizContainer');
  if (!container) return;

  const questions = APP_DATA.quizQuestions || [];
  const total = questions.length;
  const current = MOBILE_STATE.quiz.currentIndex;

  if (MOBILE_STATE.quiz.answered && current >= total) {
    // Show Completion Screen
    renderQuizSummary(container, total);
    return;
  }

  const q = questions[current];
  if (!q) {
    renderQuizSummary(container, total);
    return;
  }

  const progressPercent = Math.round(((current + 1) / total) * 100);

  container.innerHTML = `
    <div class="quiz-status-row">
      <span>Question <strong>${current + 1}</strong> of ${total}</span>
      <span>Score: <strong>${MOBILE_STATE.quiz.score}/${current + (MOBILE_STATE.quiz.answered ? 1 : 0)}</strong></span>
    </div>

    <div class="quiz-progress-bar-wrapper">
      <div class="quiz-progress-bar-fill" style="width: ${progressPercent}%;"></div>
    </div>

    <div class="quiz-card">
      <span class="quiz-q-badge">Android Internals • Lead Scenario</span>
      <h3 class="quiz-question-text">${q.question}</h3>

      <div class="quiz-options-list">
        ${q.options.map((opt, idx) => {
          const letter = String.fromCharCode(65 + idx);
          let btnClass = 'quiz-option-btn';
          if (MOBILE_STATE.quiz.answered) {
            btnClass += ' disabled';
            if (idx === q.correctIndex) {
              btnClass += ' correct';
            } else if (idx === MOBILE_STATE.quiz.selectedOption) {
              btnClass += ' wrong';
            }
          }
          return `
            <button class="${btnClass}" onclick="handleQuizAnswer(${idx})">
              <span class="opt-prefix">${letter}</span>
              <span>${opt}</span>
            </button>
          `;
        }).join('')}
      </div>

      <div class="quiz-explanation-box ${MOBILE_STATE.quiz.answered ? 'show' : ''}">
        <div class="quiz-explanation-header">
          <span>💡 Staff Rationale:</span>
        </div>
        <p>${q.explanation}</p>
      </div>

      ${MOBILE_STATE.quiz.answered ? `
        <div class="quiz-actions-row">
          <button class="primary-action-btn" onclick="nextQuizQuestion()">
            <span>${current + 1 < total ? 'Next Question →' : 'View Results 🏆'}</span>
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

function handleQuizAnswer(optIndex) {
  if (MOBILE_STATE.quiz.answered) return;

  const questions = APP_DATA.quizQuestions || [];
  const q = questions[MOBILE_STATE.quiz.currentIndex];
  if (!q) return;

  MOBILE_STATE.quiz.answered = true;
  MOBILE_STATE.quiz.selectedOption = optIndex;

  const isCorrect = optIndex === q.correctIndex;
  if (isCorrect) {
    MOBILE_STATE.quiz.score += 1;
  }
  MOBILE_STATE.quiz.answersLog.push({ qIndex: MOBILE_STATE.quiz.currentIndex, isCorrect });

  renderQuiz();
  updateMobileReadiness();
}

function nextQuizQuestion() {
  const total = (APP_DATA.quizQuestions || []).length;
  MOBILE_STATE.quiz.currentIndex += 1;
  MOBILE_STATE.quiz.answered = false;
  MOBILE_STATE.quiz.selectedOption = null;

  renderQuiz();
}

function renderQuizSummary(container, total) {
  const score = MOBILE_STATE.quiz.score;
  const pct = Math.round((score / total) * 100);

  container.innerHTML = `
    <div class="quiz-result-card">
      <div class="quiz-result-circle">
        <span>${pct}%</span>
      </div>
      <h2 style="font-size: 18px; font-weight: 800;">Quiz Completed!</h2>
      <p style="font-size: 13px; color: var(--text-secondary);">
        You scored <strong>${score} out of ${total}</strong> questions correctly.
        ${pct >= 75 ? '🎉 Outstanding staff-level architectural mastery!' : '💪 Great effort! Review the gotchas below to sharpen your edge.'}
      </p>
      <div style="margin-top: 8px;">
        <button class="primary-action-btn" onclick="restartQuiz()">
          <span>🔄 Retake Quiz</span>
        </button>
      </div>
    </div>
  `;
}

function restartQuiz() {
  MOBILE_STATE.quiz.currentIndex = 0;
  MOBILE_STATE.quiz.score = 0;
  MOBILE_STATE.quiz.answered = false;
  MOBILE_STATE.quiz.selectedOption = null;
  MOBILE_STATE.quiz.answersLog = [];
  renderQuiz();
  updateMobileReadiness();
}

// 5. Tab 3: Essential Challenges & Talking Points
function renderChallenges() {
  const container = document.getElementById('challengesListContainer');
  if (!container) return;

  const query = (document.getElementById('challengesSearchInput')?.value || '').toLowerCase().trim();
  const filter = MOBILE_STATE.challengeFilter;
  const challenges = APP_DATA.codingChallenges || [];

  const filtered = challenges.filter(c => {
    const matchesCat = filter === 'all' || 
      (c.category && c.category.toLowerCase().includes(filter.toLowerCase())) ||
      (c.tags && c.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())));
    const matchesQuery = !query ||
      c.title.toLowerCase().includes(query) ||
      c.company.toLowerCase().includes(query) ||
      c.summary.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 32px 16px; color: var(--text-muted);">
        <p style="font-size: 24px; margin-bottom: 6px;">🎯</p>
        <p>No coding challenges match your search.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(ch => {
    const isSolved = MOBILE_STATE.solvedChallenges.includes(ch.id);

    return `
      <article class="challenge-card" id="card-${ch.id}">
        <div class="challenge-card-header">
          <div class="challenge-title-area">
            <h3 class="challenge-title">${ch.title}</h3>
            <div class="challenge-tags-row">
              <span class="pill-tag accent">🏢 ${ch.company}</span>
              <span class="pill-tag">${ch.difficulty}</span>
            </div>
          </div>
          <button class="solved-btn ${isSolved ? 'solved' : ''}" onclick="toggleSolveChallenge('${ch.id}')" title="Toggle Solved Status">
            <span>${isSolved ? '✓ Done' : '○ Mark'}</span>
          </button>
        </div>

        <div class="challenge-summary-box">
          <p><strong>Core Problem:</strong> ${ch.summary}</p>
        </div>

        <div class="challenge-points-grid">
          ${ch.gotchas ? `
            <div class="challenge-point-row">
              <span class="point-icon">⚠️</span>
              <div><strong>Critical Gotcha:</strong> <span style="color: var(--text-secondary);">${ch.gotchas}</span></div>
            </div>
          ` : ''}

          ${ch.interviewTips ? `
            <div class="challenge-point-row">
              <span class="point-icon">🎙️</span>
              <div><strong>Staff Defense:</strong> <span style="color: var(--text-secondary);">${ch.interviewTips}</span></div>
            </div>
          ` : ''}
        </div>

        <button class="view-code-btn" onclick="openCodeSheet('${ch.id}')">
          <span>🔍 View Kotlin Solution Code</span>
          <span>→</span>
        </button>
      </article>
    `;
  }).join('');
}

function setChallengeFilter(cat, btnElement) {
  MOBILE_STATE.challengeFilter = cat;
  btnElement.parentElement.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  btnElement.classList.add('active');
  renderChallenges();
}

function filterChallenges() {
  renderChallenges();
}

function toggleSolveChallenge(id) {
  const idx = MOBILE_STATE.solvedChallenges.indexOf(id);
  if (idx > -1) {
    MOBILE_STATE.solvedChallenges.splice(idx, 1);
    showToast('Challenge marked as pending');
  } else {
    MOBILE_STATE.solvedChallenges.push(id);
    showToast('Challenge marked as solved! 🎉');
  }

  localStorage.setItem('solved_challenges', JSON.stringify(MOBILE_STATE.solvedChallenges));
  renderChallenges();
  updateMobileReadiness();
}

// 6. Tab 4: Company Intel Pocket Directory
function renderCompanies() {
  const container = document.getElementById('companiesListContainer');
  if (!container) return;

  const query = (document.getElementById('companiesSearchInput')?.value || '').toLowerCase().trim();
  const filter = MOBILE_STATE.companyFilter;
  const companies = APP_DATA.companies || [];

  const filtered = companies.filter(comp => {
    const matchesFilter = filter === 'all' ||
      (filter === 'Remote' && (comp.location.includes('Remote') || comp.workMode.includes('Remote'))) ||
      (filter === 'Chennai' && comp.location.includes('Chennai')) ||
      (filter === 'Top Priority' && (comp.priority.includes('Top') || comp.seniority.includes('Staff')));

    const matchesQuery = !query ||
      comp.name.toLowerCase().includes(query) ||
      comp.role.toLowerCase().includes(query) ||
      (comp.tags && comp.tags.some(t => t.toLowerCase().includes(query)));

    return matchesFilter && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 32px 16px; color: var(--text-muted);">
        <p style="font-size: 24px; margin-bottom: 6px;">🏢</p>
        <p>No companies match your search.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(comp => `
    <article class="company-mobile-card">
      <div class="company-card-top">
        <div>
          <h3>${comp.name}</h3>
          <p class="company-role-subtext">${comp.role} • <em>${comp.seniority}</em></p>
        </div>
        <span class="company-priority-badge ${comp.priority.includes('Top') ? 'top' : 'high'}">${comp.priority}</span>
      </div>

      <div style="display: flex; gap: 6px; flex-wrap: wrap;">
        <span class="pill-tag">📍 ${comp.location}</span>
        <span class="pill-tag">💼 ${comp.workMode}</span>
        <span class="pill-tag">💰 ${comp.compensation}</span>
      </div>

      <div class="company-rounds-accordion">
        <button class="company-rounds-toggle" onclick="toggleCompanyRounds('rounds-${comp.id}', this)">
          <span>📋 Interview Rounds (${comp.rounds ? comp.rounds.length : 0})</span>
          <span class="accordion-arrow">▼</span>
        </button>

        <div class="company-rounds-content" id="rounds-${comp.id}">
          ${comp.rounds ? comp.rounds.map(r => `
            <div class="round-item-mobile">
              <div class="round-name-row">
                <span>${r.name}: ${r.type}</span>
              </div>
              <p style="color: var(--text-secondary);">${r.desc}</p>
            </div>
          `).join('') : ''}

          ${comp.systemDesign ? `
            <div class="round-item-mobile" style="border-left: 3px solid var(--accent-primary);">
              <div class="round-name-row">
                <span>🏛️ System Design Focus</span>
              </div>
              <p style="color: var(--text-secondary);">${comp.systemDesign}</p>
            </div>
          ` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

function setCompanyFilter(cat, btnElement) {
  MOBILE_STATE.companyFilter = cat;
  btnElement.parentElement.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  btnElement.classList.add('active');
  renderCompanies();
}

function filterCompanies() {
  renderCompanies();
}

function toggleCompanyRounds(contentId, btn) {
  const content = document.getElementById(contentId);
  if (!content) return;

  const isOpen = content.classList.contains('open');
  content.classList.toggle('open');

  const arrow = btn.querySelector('.accordion-arrow');
  if (arrow) arrow.textContent = isOpen ? '▼' : '▲';
}

// 7. Bottom Sheet Modal (Kotlin Code Viewer)
function openCodeSheet(challengeId) {
  const challenges = APP_DATA.codingChallenges || [];
  const ch = challenges.find(c => c.id === challengeId);
  if (!ch) return;

  const backdrop = document.getElementById('bottomSheetBackdrop');
  const sheet = document.getElementById('bottomSheetModal');
  const title = document.getElementById('sheetTitle');
  const body = document.getElementById('sheetBody');

  if (!backdrop || !sheet || !title || !body) return;

  title.textContent = ch.title;
  
  const codeContent = ch.solutionCode || ch.starterCode || '// No code available';

  body.innerHTML = `
    <div style="margin-bottom: 10px;">
      <span class="pill-tag accent">🏢 ${ch.company}</span>
      <span class="pill-tag">${ch.category}</span>
    </div>
    
    <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.5;">
      <strong>Problem Overview:</strong><br>${ch.problemDesc || ch.summary}
    </div>

    <div class="sheet-code-container">
      <button class="sheet-copy-btn" onclick="copyCurrentCode()">📋 Copy</button>
      <pre id="currentCodeSnippet"><code>${escapeHtml(codeContent)}</code></pre>
    </div>

    ${ch.explanation ? `
      <div style="margin-top: 14px; background: var(--bg-card-secondary); padding: 10px; border-radius: var(--radius-sm); font-size: 12px;">
        <strong style="color: var(--text-primary); display: block; margin-bottom: 4px;">🧠 Architectural Breakdown:</strong>
        <p style="color: var(--text-secondary); line-height: 1.5;">${ch.explanation}</p>
      </div>
    ` : ''}
  `;

  backdrop.classList.add('show');
  sheet.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeBottomSheet() {
  const backdrop = document.getElementById('bottomSheetBackdrop');
  const sheet = document.getElementById('bottomSheetModal');
  if (backdrop) backdrop.classList.remove('show');
  if (sheet) sheet.classList.remove('show');
  document.body.style.overflow = '';
}

function copyCurrentCode() {
  const codeEl = document.getElementById('currentCodeSnippet');
  if (!codeEl) return;

  const text = codeEl.textContent;
  navigator.clipboard.writeText(text).then(() => {
    showToast('Kotlin code copied to clipboard! 📋');
  }).catch(() => {
    showToast('Failed to copy code');
  });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// 8. Readiness Calculator
function updateMobileReadiness() {
  const totalChallenges = (APP_DATA.codingChallenges || []).length || 10;
  const solvedCount = MOBILE_STATE.solvedChallenges.length;
  const codingScore = (solvedCount / totalChallenges) * 50;

  const totalQuestions = (APP_DATA.quizQuestions || []).length || 8;
  const quizScore = MOBILE_STATE.quiz.answered || MOBILE_STATE.quiz.score > 0
    ? (MOBILE_STATE.quiz.score / totalQuestions) * 50
    : 0;

  const totalReadiness = Math.min(100, Math.round(codingScore + quizScore));

  const textEl = document.getElementById('mobileReadinessText');
  if (textEl) {
    textEl.textContent = `${totalReadiness}% Ready`;
  }
}

// 9. Toast Notifications
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('mobileToast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}
