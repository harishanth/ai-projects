// Android Lead & Staff Interview Prep Studio - App Logic

// State Management
const STATE = {
  currentTab: 'dashboard',
  theme: localStorage.getItem('theme') || 'dark',
  themeColor: localStorage.getItem('theme_color') || 'blue',
  sidebarCollapsed: localStorage.getItem('sidebar_collapsed') === 'true',
  maximizedElement: null,
  solvedChallenges: JSON.parse(localStorage.getItem('solved_challenges') || '[]'),
  viewedHld: JSON.parse(localStorage.getItem('viewed_hld') || '[]'),
  quizState: {
    currentIndex: 0,
    answers: {},
    isFinished: false
  },
  activeChallengeId: APP_DATA.codingChallenges[0].id,
  activeHldId: APP_DATA.systemDesigns[0].id,
  codeTab: 'solution', // 'solution' | 'explanation' | 'ai'
  aiState: {
    loading: false,
    activeChallengeId: null,
    response: {},
    lastQuestion: {}
  }
};

const COLOR_PALETTES = {
  blue: { label: 'Tech Blue', color: '#3b82f6' },
  emerald: { label: 'Android Emerald', color: '#10b981' },
  violet: { label: 'Jetpack Violet', color: '#a855f7' },
  amber: { label: 'Sunset Amber', color: '#f59e0b' },
  rose: { label: 'Crimson Rose', color: '#f43f5e' },
  cyan: { label: 'Cyber Cyan', color: '#06b6d4' }
};

function getAllChallenges() {
  return APP_DATA.codingChallenges;
}

// Initialize App
function initApp() {
  initTheme();
  initColorPalette();
  initSidebar();
  initNavigation();
  initGlobalSearch();
  initCompanyFilters();
  initGeminiUI();
  initMaximizeKeyboard();
  
  // Render Components
  renderDashboard();
  renderCompanies();
  renderCodingArena();
  renderSystemDesign();
  renderQuiz();
  updateReadiness();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// 1. Theme & Color Management
let _lastThemeToggle = 0;
function toggleTheme(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const now = Date.now();
  if (now - _lastThemeToggle < 200) return;
  _lastThemeToggle = now;

  STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', STATE.theme);
  localStorage.setItem('theme', STATE.theme);
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    const icon = themeBtn.querySelector('.theme-icon');
    if (icon) icon.textContent = STATE.theme === 'dark' ? '☀️' : '🌙';
  }
  updateReadiness();
}

function initTheme() {
  document.documentElement.setAttribute('data-theme', STATE.theme);
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    const icon = themeBtn.querySelector('.theme-icon');
    if (icon) icon.textContent = STATE.theme === 'dark' ? '☀️' : '🌙';
  }
}

let _lastPaletteToggle = 0;
function togglePaletteDropdown(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const now = Date.now();
  if (now - _lastPaletteToggle < 200) return;
  _lastPaletteToggle = now;

  const pickerBtn = document.getElementById('palettePickerBtn');
  const dropdown = document.getElementById('paletteDropdown');
  if (pickerBtn && dropdown) {
    const isExpanded = pickerBtn.getAttribute('aria-expanded') === 'true';
    pickerBtn.setAttribute('aria-expanded', String(!isExpanded));
    dropdown.classList.toggle('show');
  }
}

function initColorPalette() {
  document.documentElement.setAttribute('data-color', STATE.themeColor);
  updatePaletteUI(STATE.themeColor);

  const pickerBtn = document.getElementById('palettePickerBtn');
  const dropdown = document.getElementById('paletteDropdown');

  if (pickerBtn && dropdown) {
    dropdown.querySelectorAll('.palette-option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const palette = btn.getAttribute('data-palette');
        setThemeColor(palette);
        dropdown.classList.remove('show');
        pickerBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && !pickerBtn.contains(e.target)) {
        dropdown.classList.remove('show');
        pickerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

function setThemeColor(colorName) {
  if (!COLOR_PALETTES[colorName]) colorName = 'blue';
  STATE.themeColor = colorName;
  document.documentElement.setAttribute('data-color', colorName);
  localStorage.setItem('theme_color', colorName);
  updatePaletteUI(colorName);
  updateReadiness();
}

function updatePaletteUI(colorName) {
  const currentDot = document.getElementById('currentColorDot');
  if (currentDot && COLOR_PALETTES[colorName]) {
    currentDot.style.backgroundColor = COLOR_PALETTES[colorName].color;
  }
  document.querySelectorAll('.palette-option-btn').forEach(btn => {
    const isActive = btn.getAttribute('data-palette') === colorName;
    btn.classList.toggle('active', isActive);
  });
}

let _lastSidebarToggle = 0;
function toggleSidebar(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const now = Date.now();
  if (now - _lastSidebarToggle < 200) return;
  _lastSidebarToggle = now;

  const sidebar = document.getElementById('appSidebar');
  STATE.sidebarCollapsed = !STATE.sidebarCollapsed;
  if (sidebar) {
    sidebar.classList.toggle('collapsed', STATE.sidebarCollapsed);
  }
  localStorage.setItem('sidebar_collapsed', STATE.sidebarCollapsed);
}

// 2. Expandable / Collapsible Sidebar Management
function initSidebar() {
  const sidebar = document.getElementById('appSidebar');

  if (sidebar && STATE.sidebarCollapsed) {
    sidebar.classList.add('collapsed');
  }

  // Keyboard shortcut Alt+B or Ctrl+B
  window.addEventListener('keydown', (e) => {
    if (e.key === 'b' && (e.altKey || e.metaKey)) {
      e.preventDefault();
      toggleSidebar();
    }
  });
}

// 3. Section Maximization (Declutter Focus Mode)
function toggleMaximize(targetSelectorOrElement, title = 'Focus Workspace') {
  const target = typeof targetSelectorOrElement === 'string' 
    ? document.querySelector(targetSelectorOrElement) 
    : targetSelectorOrElement;

  if (!target) return;

  if (target.classList.contains('is-maximized')) {
    exitMaximize();
    return;
  }

  // If another element is currently maximized, exit it first
  if (STATE.maximizedElement) {
    exitMaximize();
  }

  target.classList.add('is-maximized');
  document.body.classList.add('has-maximized-section');
  STATE.maximizedElement = target;

  // Insert or refresh toolbar
  let toolbar = target.querySelector('.maximized-toolbar');
  if (!toolbar) {
    toolbar = document.createElement('div');
    toolbar.className = 'maximized-toolbar';
    toolbar.innerHTML = `
      <div class="max-toolbar-info">
        <span class="max-badge">⛶ Maximized Focus Mode</span>
        <span class="max-title">${escapeHtml(title)}</span>
      </div>
      <div class="max-toolbar-actions">
        <span class="max-hint"><kbd>Esc</kbd> to restore</span>
        <button class="btn-restore-max" onclick="exitMaximize()" title="Exit Maximized Focus Mode (Esc)">
          <span class="restore-icon">🗗</span> Exit Maximized
        </button>
      </div>
    `;
    target.insertBefore(toolbar, target.firstChild);
  } else {
    const titleEl = toolbar.querySelector('.max-title');
    if (titleEl) titleEl.textContent = title;
    toolbar.style.display = 'flex';
  }

  target.scrollTop = 0;
}

function exitMaximize() {
  document.querySelectorAll('.is-maximized').forEach(el => {
    el.classList.remove('is-maximized');
    const toolbar = el.querySelector('.maximized-toolbar');
    if (toolbar) {
      toolbar.remove();
    }
  });
  STATE.maximizedElement = null;
  document.body.classList.remove('has-maximized-section');
}

function initMaximizeKeyboard() {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && STATE.maximizedElement) {
      exitMaximize();
    }
  });
}

// 2. Navigation
function initNavigation() {
  const navBtns = document.querySelectorAll('.nav-item');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  // Pillars click navigation
  document.querySelectorAll('.pillar-card').forEach(card => {
    card.addEventListener('click', () => {
      const filter = card.getAttribute('data-filter');
      switchTab('companies');
      document.getElementById('globalSearch').value = filter;
      renderCompanies(filter);
    });
  });
}

function switchTab(tabId) {
  if (typeof exitMaximize === 'function') {
    exitMaximize();
  }

  STATE.currentTab = tabId;
  
  // Update sidebar active buttons
  document.querySelectorAll('.nav-item').forEach(btn => {
    const btnTab = btn.getAttribute('data-tab');
    const isActive = btnTab === tabId;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });

  // Update view visibility
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  // Resilient ID lookup: handles both kebab-case (system-designView) and camelCase (systemDesignView)
  const camelCaseTab = tabId.replace(/-([a-z])/g, g => g[1].toUpperCase());
  const targetPanel = document.getElementById(`${tabId}View`) || document.getElementById(`${camelCaseTab}View`);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  // Ensure content is immediately rendered when switching to specific tabs
  if (tabId === 'system-design' || tabId === 'systemDesign') {
    renderSystemDesign();
  } else if (tabId === 'coding') {
    renderCodingArena();
  } else if (tabId === 'companies') {
    renderCompanies();
  } else if (tabId === 'quiz') {
    renderQuiz();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  const mainContent = document.querySelector('.main-content');
  if (mainContent) {
    mainContent.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Global exposure for resilient inline onclick tap handlers
window.switchTab = switchTab;
window.toggleMaximize = toggleMaximize;
window.exitMaximize = exitMaximize;

// 3. Overall Readiness Score Calculation
function updateReadiness() {
  const allCh = getAllChallenges();
  const totalChallenges = allCh.length;
  const solvedCount = STATE.solvedChallenges.length;
  
  const totalHld = APP_DATA.systemDesigns.length;
  const hldCount = STATE.viewedHld.length;

  const totalQuiz = APP_DATA.quizQuestions.length;
  const answeredQuiz = Object.keys(STATE.quizState.answers).length;
  const correctQuiz = Object.entries(STATE.quizState.answers).filter(
    ([qIndex, optIndex]) => APP_DATA.quizQuestions[qIndex].correctIndex === optIndex
  ).length;

  // Weighted Score: Coding 45%, System Design 35%, Quiz 20%
  const codingScore = totalChallenges > 0 ? (solvedCount / totalChallenges) * 45 : 0;
  const hldScore = totalHld > 0 ? (hldCount / totalHld) * 35 : 0;
  const quizScore = totalQuiz > 0 ? (correctQuiz / totalQuiz) * 20 : 0;
  
  const overallPercent = Math.min(100, Math.round(codingScore + hldScore + quizScore));

  // Update UI Elements
  document.getElementById('readinessScoreText').textContent = `Readiness: ${overallPercent}%`;
  document.getElementById('progressPercent').textContent = `${overallPercent}%`;
  document.getElementById('solvedCounter').textContent = `${solvedCount}/${totalChallenges}`;
  document.getElementById('statCodingCount').textContent = `${solvedCount} / ${totalChallenges}`;
  document.getElementById('statHldCount').textContent = `${hldCount} / ${totalHld}`;
  
  const quizAccuracy = answeredQuiz > 0 ? Math.round((correctQuiz / answeredQuiz) * 100) : 0;
  document.getElementById('statQuizScore').textContent = `${quizAccuracy}% (${correctQuiz}/${totalQuiz})`;

  const navLabel = document.getElementById('companyNavLabel');
  if (navLabel) navLabel.textContent = `Company Intel (${APP_DATA.companies.length})`;
  const heroJobs = document.getElementById('heroJobsCount');
  if (heroJobs) heroJobs.textContent = `💼 ${APP_DATA.companies.length} Jobs Tracked`;

  // Update circular ring gradient
  const ring = document.getElementById('dashboardProgressRing');
  if (ring) {
    ring.style.background = `conic-gradient(var(--accent-primary) ${overallPercent}%, var(--border) 0)`;
  }
}

// 4. Render Dashboard
function renderDashboard() {
  updateReadiness();
}

// 5. Render Companies
function initCompanyFilters() {
  const locationFilter = document.getElementById('companyLocationFilter');
  const priorityFilter = document.getElementById('companyPriorityFilter');

  locationFilter.addEventListener('change', () => filterAndRenderCompanies());
  priorityFilter.addEventListener('change', () => filterAndRenderCompanies());
}

function filterAndRenderCompanies() {
  const locVal = document.getElementById('companyLocationFilter').value;
  const priVal = document.getElementById('companyPriorityFilter').value;
  const searchVal = document.getElementById('globalSearch').value.toLowerCase().trim();

  const filtered = APP_DATA.companies.filter(c => {
    const matchLoc = locVal === 'all' || (locVal === 'Remote' ? c.workMode.includes('Remote') : c.location.includes(locVal));
    const matchPri = priVal === 'all' || c.priority === priVal;
    const matchSearch = !searchVal || 
      c.name.toLowerCase().includes(searchVal) ||
      c.role.toLowerCase().includes(searchVal) ||
      c.tags.some(t => t.toLowerCase().includes(searchVal)) ||
      c.systemDesign.toLowerCase().includes(searchVal);

    return matchLoc && matchPri && matchSearch;
  });

  renderCompaniesList(filtered);
}

function renderCompanies(searchTerm = '') {
  const list = searchTerm 
    ? APP_DATA.companies.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        c.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())))
    : APP_DATA.companies;

  renderCompaniesList(list);
}

function renderCompaniesList(companies) {
  const container = document.getElementById('companiesContainer');
  if (!container) return;

  if (companies.length === 0) {
    container.innerHTML = `<div class="empty-state" style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-muted);">No companies found matching your criteria.</div>`;
    return;
  }

  container.innerHTML = companies.map(c => {
    const priorityClass = c.priority === 'Top Priority' ? 'priority-top' : (c.priority === 'High' ? 'priority-high' : (c.priority === 'Medium-High' ? 'priority-medium-high' : 'priority-medium'));
    
    return `
      <div class="company-card">
        <div class="company-top">
          <h3>${c.name}</h3>
          <span class="priority-badge ${priorityClass}">${c.priority.includes('Priority') ? c.priority : c.priority + ' Priority'}</span>
        </div>

        <div class="company-role-pill">${c.role} (${c.seniority})</div>

        <div class="company-meta-row">
          <span>📍 ${c.location}</span>
          <span>💼 ${c.workMode}</span>
          <span>💰 ${c.compensation}</span>
        </div>

        <div class="company-tags">
          ${c.tags.map(t => `<span class="company-tag">${t}</span>`).join('')}
        </div>

        <div class="rounds-timeline">
          ${c.rounds.map(r => `
            <div class="round-item">
              <span class="round-name">${r.name}:</span>
              <span class="round-desc"><strong>${r.type}</strong> — ${r.desc}</span>
            </div>
          `).join('')}
        </div>

        <div class="company-actions">
          <button class="btn-sm btn-primary" onclick="openSystemDesignForCompany('${c.name}')">View System Design</button>
          <button class="btn-sm btn-secondary" onclick="openCodingForCompany('${c.name}')">Practice Coding</button>
        </div>
      </div>
    `;
  }).join('');
}

// 6. Render Coding Arena
function renderCodingArena() {
  const listContainer = document.getElementById('challengeList');
  if (!listContainer) return;

  const allChallenges = getAllChallenges();

  listContainer.innerHTML = allChallenges.map(ch => {
    const isSolved = STATE.solvedChallenges.includes(ch.id);
    const isActive = ch.id === STATE.activeChallengeId;

    return `
      <div class="challenge-nav-item ${isActive ? 'active' : ''}" onclick="selectChallenge('${ch.id}')">
        <h4>${isSolved ? '✅ ' : ''}${ch.title}</h4>
        <div class="challenge-nav-meta">
          <span>${ch.difficulty}</span>
          <span>${ch.company.split('&')[0]}</span>
        </div>
      </div>
    `;
  }).join('');

  renderActiveChallenge();
}

function selectChallenge(id) {
  STATE.activeChallengeId = id;
  STATE.codeTab = 'solution';
  renderCodingArena();
}

function renderActiveChallenge() {
  const main = document.getElementById('challengeMain');
  const allChallenges = getAllChallenges();
  const ch = allChallenges.find(c => c.id === STATE.activeChallengeId) || allChallenges[0];
  if (!main || !ch) return;

  const isSolved = STATE.solvedChallenges.includes(ch.id);

  main.innerHTML = `
    <div class="problem-header">
      <div>
        <h2>${ch.title}</h2>
        <div class="problem-meta">
          <span><strong>Target Company:</strong> ${ch.company}</span>
          <span>•</span>
          <span><strong>Category:</strong> ${ch.category}</span>
          <span>•</span>
          <span style="color: var(--accent-primary);"><strong>${ch.difficulty}</strong></span>
        </div>
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <button class="btn-sm btn-secondary" onclick="toggleMaximize('#challengeMain', '${ch.title.replace(/'/g, "\\'")}')" title="Maximize Workspace to Declutter">
          <span class="max-icon">⛶</span> Focus Workspace
        </button>
        <button class="btn-sm btn-secondary" onclick="switchCodeTab('ai')" title="Ask Gemini about this challenge">
          🤖 Ask Gemini
        </button>
        <button class="btn-sm ${isSolved ? 'btn-secondary' : 'btn-primary'}" onclick="toggleChallengeSolved('${ch.id}')">
          ${isSolved ? 'Mark Incomplete' : '✓ Mark Solved'}
        </button>
      </div>
    </div>

    <div class="problem-desc" style="font-size: 14px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px;">
      ${ch.problemDesc.replace(/```kotlin([\s\S]*?)```/g, '<div class="code-editor-box" style="margin: 12px 0;"><pre class="code-display">$1</pre></div>')}
    </div>

    <div class="code-tabs">
      <button class="code-tab-btn ${STATE.codeTab === 'solution' ? 'active' : ''}" onclick="switchCodeTab('solution')">Production Solution (Kotlin)</button>
      <button class="code-tab-btn ${STATE.codeTab === 'explanation' ? 'active' : ''}" onclick="switchCodeTab('explanation')">Architectural Deep-Dive</button>
      <button class="code-tab-btn ${STATE.codeTab === 'ai' ? 'active' : ''}" onclick="switchCodeTab('ai')">🤖 Ask Gemini (AI Assistant)</button>
    </div>

    ${STATE.codeTab === 'solution' ? `
      <div class="code-editor-box">
        <div class="code-editor-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span>kotlin</span>
            <span>•</span>
            <span>${ch.company}</span>
          </div>
          <button class="btn-copy-code" onclick="copyEntireProductionCode('${ch.id}', this)" title="Copy entire production Kotlin source code">
            📋 Copy Entire Source Code
          </button>
        </div>
        <div class="code-display" id="codeDisplayArea">${escapeHtml(ch.solutionCode)}</div>
      </div>
    ` : STATE.codeTab === 'explanation' ? `
      <div class="deep-dive-card-container" style="margin-bottom: 20px;">
        <div class="code-editor-header" style="margin-bottom: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); background: var(--bg-card);">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: var(--accent-primary); font-weight: 700;">💡 Key Architectural Concepts & Pitfalls Needing Attention</span>
            <span>•</span>
            <span>${ch.company}</span>
          </div>
          <button class="btn-copy-code" onclick="copyEntireProductionCode('${ch.id}', this)" title="Copy entire production Kotlin source code">
            📋 Copy Entire Source Code
          </button>
        </div>
        ${renderDeepDiveContent(ch)}
      </div>
    ` : `
      ${renderAiAssistant(ch)}
    `}

    <div class="code-actions">
      <button class="btn-sm btn-primary" onclick="copyEntireProductionCode('${ch.id}', this)" title="Copy entire production Kotlin source code">
        📋 Copy Entire Source Code
      </button>
      ${STATE.codeTab !== 'solution' ? `
        <button class="btn-sm btn-secondary" onclick="switchCodeTab('solution')" title="Return to production Kotlin solution">
          💻 View Production Solution Code
        </button>
      ` : ''}
      ${STATE.codeTab !== 'explanation' ? `
        <button class="btn-sm btn-secondary" onclick="switchCodeTab('explanation')" title="Examine critical architectural patterns, gotchas, and interview trade-offs">
          💡 View Architectural Deep-Dive
        </button>
      ` : ''}
      ${STATE.codeTab !== 'ai' ? `
        <button class="btn-sm btn-secondary" onclick="switchCodeTab('ai')" title="Ask Gemini about this challenge">
          🤖 Ask Gemini
        </button>
      ` : ''}
    </div>
  `;
}

function renderDeepDiveContent(ch) {
  if (!ch.explanation) return '';
  const raw = ch.explanation;

  let html = raw
    .replace(/### 💡 (.*$)/gim, '<div class="deep-dive-card"><div class="deep-dive-heading concepts"><span class="heading-icon">💡</span> <h4>$1</h4></div><div class="deep-dive-content">')
    .replace(/### ⚠️ (.*$)/gim, '</div></div><div class="deep-dive-card gotchas-card"><div class="deep-dive-heading gotchas"><span class="heading-icon">⚠️</span> <h4>$1</h4></div><div class="deep-dive-content">')
    .replace(/### 🎯 (.*$)/gim, '</div></div><div class="deep-dive-card interview-card"><div class="deep-dive-heading interview"><span class="heading-icon">🎯</span> <h4>$1</h4></div><div class="deep-dive-content">')
    .replace(/### ⚖️ (.*$)/gim, '</div></div><div class="deep-dive-card tradeoffs-card"><div class="deep-dive-heading tradeoffs"><span class="heading-icon">⚖️</span> <h4>$1</h4></div><div class="deep-dive-content">')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^(\d+\.|\-)\s+(.*$)/gim, '<div class="deep-dive-item">$2</div>')
    .replace(/\n\n/g, '<br/>');

  return `<div class="deep-dive-wrapper">${html}</div></div>`;
}

function switchCodeTab(tab) {
  STATE.codeTab = tab;
  renderActiveChallenge();
}

function toggleChallengeSolved(id) {
  if (STATE.solvedChallenges.includes(id)) {
    STATE.solvedChallenges = STATE.solvedChallenges.filter(i => i !== id);
  } else {
    STATE.solvedChallenges.push(id);
  }
  localStorage.setItem('solved_challenges', JSON.stringify(STATE.solvedChallenges));
  renderCodingArena();
  updateReadiness();
}

// 7. System Design Studio
function renderSystemDesign() {
  const tabsContainer = document.getElementById('hldTabs');
  const contentArea = document.getElementById('hldContent');
  if (!tabsContainer || !contentArea) return;

  if (!STATE.activeHldId && APP_DATA.systemDesigns.length > 0) {
    STATE.activeHldId = APP_DATA.systemDesigns[0].id;
  }

  tabsContainer.innerHTML = APP_DATA.systemDesigns.map(d => `
    <button class="hld-tab-btn ${d.id === STATE.activeHldId ? 'active' : ''}" onclick="selectHld('${d.id}')">
      ${d.company}: ${d.title.split('(')[0].trim()}
    </button>
  `).join('');

  const activeD = APP_DATA.systemDesigns.find(d => d.id === STATE.activeHldId) || APP_DATA.systemDesigns[0];
  if (!activeD) return;

  // Mark viewed
  if (!STATE.viewedHld.includes(activeD.id)) {
    STATE.viewedHld.push(activeD.id);
    localStorage.setItem('viewed_hld', JSON.stringify(STATE.viewedHld));
    updateReadiness();
  }

  contentArea.innerHTML = `
    <div class="hld-card">
      <div class="problem-header">
        <div>
          <h2>${activeD.title}</h2>
          <div class="problem-meta">
            <span><strong>Target Company:</strong> ${activeD.company}</span>
            <span>•</span>
            <span style="color: var(--accent-primary);"><strong>${activeD.difficulty}</strong></span>
          </div>
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn-sm btn-secondary" onclick="toggleMaximize('.hld-card', '${activeD.title.replace(/'/g, "\\'")}')" title="Maximize Architecture Blueprint">
            <span class="max-icon">⛶</span> Maximize Blueprint
          </button>
        </div>
      </div>

      <p style="font-size: 15px; color: var(--text-secondary); margin-bottom: 20px;">
        ${activeD.overview}
      </p>

      <h3 style="font-size: 16px; font-weight: 700;">System Architecture Blueprint</h3>
      <pre class="hld-diagram-box">${escapeHtml(activeD.diagram.trim())}</pre>

      <h3 style="font-size: 16px; font-weight: 700; margin-top: 24px;">Core Architectural Components</h3>
      <div class="components-breakdown-grid">
        ${activeD.keyComponents.map(k => `
          <div class="component-item">
            <h4>${k.name}</h4>
            <p>${k.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function selectHld(id) {
  STATE.activeHldId = id;
  renderSystemDesign();
}

// 8. Quiz Engine
function renderQuiz() {
  const card = document.getElementById('quizCard');
  const badge = document.getElementById('quizStatusBadge');
  if (!card) return;

  const total = APP_DATA.quizQuestions.length;
  const currentIdx = STATE.quizState.currentIndex;
  const q = APP_DATA.quizQuestions[currentIdx];

  badge.textContent = `Question ${currentIdx + 1} of ${total}`;

  const selectedOpt = STATE.quizState.answers[currentIdx];
  const hasAnswered = selectedOpt !== undefined;

  card.innerHTML = `
    <div class="quiz-question-text">${q.question}</div>

    <div class="quiz-options">
      ${q.options.map((opt, idx) => {
        let optClass = '';
        if (hasAnswered) {
          if (idx === q.correctIndex) optClass = 'correct';
          else if (idx === selectedOpt) optClass = 'incorrect';
        }
        return `
          <button class="quiz-option-btn ${optClass}" onclick="selectQuizOption(${idx})" ${hasAnswered ? 'disabled' : ''}>
            <span style="font-weight: bold; width: 20px;">${String.fromCharCode(65 + idx)}.</span>
            <span>${opt}</span>
          </button>
        `;
      }).join('')}
    </div>

    ${hasAnswered ? `
      <div class="quiz-explanation-box">
        <strong>💡 Lead Architect Explanation:</strong>
        <p style="margin-top: 4px;">${q.explanation}</p>
      </div>
    ` : ''}

    <div class="quiz-footer">
      ${currentIdx < total - 1 ? `
        <button class="btn-sm btn-primary" onclick="nextQuizQuestion()" ${!hasAnswered ? 'disabled' : ''}>Next Question →</button>
      ` : `
        <button class="btn-sm btn-primary" onclick="restartQuiz()">Restart Quiz ↺</button>
      `}
    </div>
  `;
}

function selectQuizOption(optIdx) {
  STATE.quizState.answers[STATE.quizState.currentIndex] = optIdx;
  renderQuiz();
  updateReadiness();
}

function nextQuizQuestion() {
  if (STATE.quizState.currentIndex < APP_DATA.quizQuestions.length - 1) {
    STATE.quizState.currentIndex++;
    renderQuiz();
  }
}

function restartQuiz() {
  STATE.quizState.currentIndex = 0;
  STATE.quizState.answers = {};
  renderQuiz();
  updateReadiness();
}

// 10. Cross Navigation from Company Cards
function openSystemDesignForCompany(companyName) {
  const norm = companyName.toLowerCase();
  const found = APP_DATA.systemDesigns.find(d => {
    const dNorm = d.company.toLowerCase();
    return norm.includes(dNorm) || dNorm.includes(norm) ||
      dNorm.split(' ')[0] === norm.split(' ')[0];
  });
  if (found) {
    STATE.activeHldId = found.id;
  }
  switchTab('system-design');
  renderSystemDesign();
}

function openCodingForCompany(companyName) {
  const norm = companyName.toLowerCase();
  const found = APP_DATA.codingChallenges.find(c => {
    const cNorm = c.company.toLowerCase();
    return norm.includes(cNorm) || cNorm.includes(norm) ||
      cNorm.split(' ')[0] === norm.split(' ')[0];
  });
  if (found) {
    STATE.activeChallengeId = found.id;
  }
  switchTab('coding');
  renderCodingArena();
}

// 11. Global Search
function initGlobalSearch() {
  const searchInput = document.getElementById('globalSearch');
  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (STATE.currentTab === 'companies') {
      filterAndRenderCompanies();
    } else if (val) {
      switchTab('companies');
      document.getElementById('globalSearch').value = val;
      filterAndRenderCompanies();
    }
  });
}

function copyEntireProductionCode(challengeId, btnElement) {
  const ch = getAllChallenges().find(c => c.id === challengeId);
  if (!ch) return;

  const code = ch.solutionCode;
  copyTextToClipboard(code, btnElement, 'Entire Production Code copied to clipboard!');
}

function copyCurrentCode(btnElement) {
  const ch = getAllChallenges().find(c => c.id === STATE.activeChallengeId);
  if (!ch) return;

  const text = STATE.codeTab === 'solution' ? ch.solutionCode : ch.explanation;
  copyTextToClipboard(text, btnElement, 'Current view copied to clipboard!');
}

function copyTextToClipboard(text, btnElement, successMsg) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showCopyFeedback(btnElement, successMsg);
    }).catch(() => {
      fallbackCopyText(text, btnElement, successMsg);
    });
  } else {
    fallbackCopyText(text, btnElement, successMsg);
  }
}

function fallbackCopyText(text, btnElement, successMsg) {
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showCopyFeedback(btnElement, successMsg);
  } catch (err) {
    window.prompt('Copy the source code below:', text);
  }
}

function showCopyFeedback(btnElement, message) {
  if (btnElement) {
    const originalText = btnElement.innerHTML;
    btnElement.innerHTML = '✓ Copied!';
    btnElement.classList.add('btn-copied');
    setTimeout(() => {
      btnElement.innerHTML = originalText;
      btnElement.classList.remove('btn-copied');
    }, 2000);
  }
  showToast(message || 'Copied to clipboard!');
}

function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'app-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✓</span> <span>${escapeHtml(message)}</span>`;
  toast.classList.add('show');

  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function escapeHtml(string) {
  return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}


// ==========================================================================
// 🤖 Gemini BYOK & Coding Arena Assistant Controllers
// ==========================================================================

const AI_CODING_PRESETS = {
  concurrency: "Analyze the Kotlin Coroutines and thread safety in this solution. What are the specific cancellation hazards, Dispatcher gotchas, or race conditions that a Staff Android interviewer would challenge?",
  memory: "Evaluate the memory lifecycle and object allocation traps in this code. Where could memory leaks, uncollected listeners, or GC pressure occur under high stress or Activity recreation?",
  grilling: "Act as an aggressive Staff Mobile Bar-Raiser at the target company. Ask me 3 difficult follow-up questions challenging the architectural trade-offs, edge-case failure modes, and scalability of this implementation.",
  testing: "Provide a comprehensive unit test suite in Kotlin using Turbine and Coroutines TestDispatcher (StandardTestDispatcher) testing the critical edge cases, timeout cancellation, and exception propagation for this implementation.",
  performance: "Break down the performance, memory footprint (e.g. boxing overhead, collection allocation), and ART runtime characteristics of this code. How does it behave under low-memory (onTrimMemory) pressure?"
};

function renderAiAssistant(ch) {
  const hasKey = typeof GeminiService !== 'undefined' && GeminiService.hasKey();
  const maskedKey = hasKey ? GeminiService.getMaskedKey() : '';
  const currentModel = typeof GeminiService !== 'undefined' ? GeminiService.getModel() : 'gemini-2.5-flash-lite';
  const existingResponse = STATE.aiState.response[ch.id] || null;
  const isLoading = STATE.aiState.loading && STATE.aiState.activeChallengeId === ch.id;

  return `
    <div class="ai-assistant-container">
      <div class="ai-assistant-header">
        <div class="ai-header-info">
          <span style="font-size: 24px;">🤖</span>
          <div>
            <h3 style="font-size: 16px; font-weight: 700; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              Gemini Staff Interviewer & Code Evaluator
              <span class="ai-header-badge">Model: ${escapeHtml(currentModel)}</span>
            </h3>
            <p style="font-size: 13px; color: var(--text-secondary); margin-top: 2px;">
              Ask technical questions, explore concurrency hazards, or get grilled on <strong>${escapeHtml(ch.title)}</strong> (${escapeHtml(ch.company)})
            </p>
          </div>
        </div>
        <div>
          <button class="btn-sm btn-secondary" onclick="openGeminiModal()" title="Change Gemini API Key or Model" style="font-size: 12px; display: inline-flex; align-items: center; gap: 6px;">
            <span>🔑</span>
            <span>${hasKey ? maskedKey : 'Configure API Key'}</span>
          </button>
        </div>
      </div>

      <div class="ai-prompt-chips-wrapper">
        <div class="ai-prompt-chips-label">⚡ 1-Click Staff Interview Topics</div>
        <div class="ai-prompt-chips">
          <button class="ai-prompt-chip" onclick="askGeminiCodingPreset('concurrency')">
            <span>⚡</span> Coroutine & Concurrency Hazards
          </button>
          <button class="ai-prompt-chip" onclick="askGeminiCodingPreset('memory')">
            <span>⚠️</span> Memory Leaks & Lifecycle Pitfalls
          </button>
          <button class="ai-prompt-chip" onclick="askGeminiCodingPreset('grilling')">
            <span>🎯</span> 3 Staff Mock Follow-up Questions
          </button>
          <button class="ai-prompt-chip" onclick="askGeminiCodingPreset('testing')">
            <span>🧪</span> Unit Testing with Turbine & TestDispatcher
          </button>
          <button class="ai-prompt-chip" onclick="askGeminiCodingPreset('performance')">
            <span>⏱️</span> Allocation & ART Execution Overhead
          </button>
        </div>
      </div>

      <div class="ai-query-box">
        <label for="aiCustomPromptInput" style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 8px;">
          Ask any specific question about this solution:
        </label>
        <textarea id="aiCustomPromptInput" placeholder="e.g. Why did we use Mutex instead of synchronized block? What happens if the coroutine gets cancelled midway? How would you defend this at ${escapeHtml(ch.company)}?" rows="3">${escapeHtml(STATE.aiState.lastQuestion[ch.id] || '')}</textarea>
        
        <div class="ai-query-actions">
          <span style="font-size: 12px; color: var(--text-muted);">
            ${hasKey ? 'Key saved in browser • 100% Client-Side Direct API' : '⚠️ No API key set. Free key required.'}
          </span>
          <div style="display: flex; gap: 8px;">
            <button class="btn-sm btn-secondary" onclick="clearAiResponse('${ch.id}')" title="Clear current AI response">
              Clear
            </button>
            <button class="btn-sm btn-primary" id="btnSubmitAiQuestion" onclick="submitGeminiCodingQuestion('${ch.id}')" ${isLoading ? 'disabled' : ''}>
              ${isLoading ? '<span class="pulse-spinner"></span> Thinking...' : '✨ Ask Gemini'}
            </button>
          </div>
        </div>
      </div>

      <div class="ai-response-area" id="aiResponseContainer">
        ${isLoading ? `
          <div class="shimmer-loading">
            <span class="pulse-spinner"></span>
            <span>Analyzing ${escapeHtml(ch.title)} with ${escapeHtml(currentModel)}...</span>
          </div>
        ` : existingResponse ? `
          <div class="ai-response-header">
            <span style="font-size: 13px; font-weight: 700; color: var(--accent-primary);">
              💡 Staff Interviewer Response
            </span>
            <button class="btn-sm btn-secondary" onclick="copyAiResponse('${ch.id}', this)" style="font-size: 11.5px; padding: 4px 10px;">
              📋 Copy Response
            </button>
          </div>
          <div class="ai-response-body">
            ${GeminiService.renderMarkdown(existingResponse)}
          </div>
        ` : !hasKey ? `
          <div class="ai-empty-state">
            <span class="ai-empty-icon">🔑</span>
            <h4 style="font-size: 15px; margin-bottom: 6px;">Gemini API Key Required (BYOK)</h4>
            <p style="font-size: 13px; max-width: 480px; margin: 0 auto 16px auto; line-height: 1.6;">
              To ask questions and analyze this Kotlin solution, add your free Gemini API key from Google AI Studio. Stored strictly in your browser.
            </p>
            <button class="btn-sm btn-primary" onclick="openGeminiModal()">
              ⚙️ Configure Free Gemini Key
            </button>
          </div>
        ` : `
          <div class="ai-empty-state">
            <span class="ai-empty-icon">💬</span>
            <h4 style="font-size: 15px; margin-bottom: 6px;">Ready for Questions</h4>
            <p style="font-size: 13px; max-width: 460px; margin: 0 auto; line-height: 1.6;">
              Click any of the 1-click staff interview topics above, or type your own question about <strong>${escapeHtml(ch.title)}</strong> to receive instant architectural analysis.
            </p>
          </div>
        `}
      </div>
    </div>
  `;
}

async function askGeminiCodingPreset(presetKey) {
  const prompt = AI_CODING_PRESETS[presetKey];
  if (!prompt) return;
  const inputEl = document.getElementById('aiCustomPromptInput');
  if (inputEl) inputEl.value = prompt;
  await submitGeminiCodingQuestion(STATE.activeChallengeId, prompt);
}

async function submitGeminiCodingQuestion(challengeId, directPrompt) {
  const ch = getAllChallenges().find(c => c.id === challengeId);
  if (!ch) return;

  if (!GeminiService.hasKey()) {
    openGeminiModal();
    showToast('Please configure your Gemini API Key first.');
    return;
  }

  const promptInput = document.getElementById('aiCustomPromptInput');
  const question = directPrompt || (promptInput ? promptInput.value.trim() : '');
  if (!question) {
    showToast('Please type a question or select a topic chip.');
    return;
  }

  STATE.aiState.loading = true;
  STATE.aiState.activeChallengeId = challengeId;
  STATE.aiState.lastQuestion[challengeId] = question;
  renderActiveChallenge();

  try {
    const answer = await GeminiService.askCodingQuestion(ch, question);
    STATE.aiState.response[challengeId] = answer;
    STATE.aiState.loading = false;
    renderActiveChallenge();
    showToast('Gemini response received!');
  } catch (err) {
    STATE.aiState.loading = false;
    renderActiveChallenge();
    if (err.message && (err.message.includes('API_KEY_INVALID') || err.message.includes('API key not valid'))) {
      showToast('Invalid API Key. Please update in AI Settings.');
      openGeminiModal();
    } else {
      showToast(`AI Error: ${err.message}`);
    }
  }
}

function clearAiResponse(challengeId) {
  if (STATE.aiState.response[challengeId]) {
    delete STATE.aiState.response[challengeId];
  }
  if (STATE.aiState.lastQuestion[challengeId]) {
    delete STATE.aiState.lastQuestion[challengeId];
  }
  renderActiveChallenge();
  showToast('AI response cleared.');
}

function copyAiResponse(challengeId, btn) {
  const text = STATE.aiState.response[challengeId];
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '✓ Copied!';
      setTimeout(() => { btn.innerHTML = orig; }, 1800);
    }
    showToast('AI response copied to clipboard!');
  });
}

function initGeminiUI() {
  updateGeminiKeyIndicator();

  // Top action bar button
  const geminiBtn = document.getElementById('geminiKeyBtn');
  if (geminiBtn) {
    geminiBtn.addEventListener('click', openGeminiModal);
  }

  // Close modal button
  const closeBtn = document.getElementById('closeGeminiModalBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeGeminiModal);
  }

  // Toggle eye visibility
  const eyeBtn = document.getElementById('toggleApiKeyVisibility');
  const keyInput = document.getElementById('geminiApiKeyInput');
  if (eyeBtn && keyInput) {
    eyeBtn.addEventListener('click', () => {
      const isPassword = keyInput.type === 'password';
      keyInput.type = isPassword ? 'text' : 'password';
      eyeBtn.textContent = isPassword ? '🔒' : '👁️';
    });
  }

  // Save button
  const saveBtn = document.getElementById('saveGeminiKeyBtn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const keyVal = document.getElementById('geminiApiKeyInput').value.trim();
      const modelVal = document.getElementById('geminiModelSelect').value;
      
      GeminiService.setKey(keyVal);
      GeminiService.setModel(modelVal);
      updateGeminiKeyIndicator();
      closeGeminiModal();
      showToast(keyVal ? 'Gemini API Key saved locally!' : 'Gemini Key cleared');
      
      if (STATE.currentTab === 'coding') {
        renderActiveChallenge();
      }
    });
  }

  // Clear button
  const clearBtn = document.getElementById('clearGeminiKeyBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      GeminiService.setKey('');
      document.getElementById('geminiApiKeyInput').value = '';
      updateGeminiKeyIndicator();
      const resEl = document.getElementById('geminiTestResult');
      if (resEl) resEl.style.display = 'none';
      showToast('Gemini API Key removed.');
      if (STATE.currentTab === 'coding') {
        renderActiveChallenge();
      }
    });
  }

  // Test button
  const testBtn = document.getElementById('testGeminiKeyBtn');
  if (testBtn) {
    testBtn.addEventListener('click', async () => {
      const keyVal = document.getElementById('geminiApiKeyInput').value.trim();
      const modelVal = document.getElementById('geminiModelSelect').value;
      const resEl = document.getElementById('geminiTestResult');
      if (!resEl) return;

      resEl.style.display = 'block';
      resEl.className = 'ai-test-result';
      resEl.innerHTML = '<span class="pulse-spinner"></span> Connecting to Google Gemini API...';

      try {
        await GeminiService.testConnection(keyVal, modelVal);
        resEl.className = 'ai-test-result success';
        resEl.innerHTML = '✓ Connection successful! Your Gemini API key is valid and ready to use.';
      } catch (err) {
        resEl.className = 'ai-test-result error';
        resEl.innerHTML = `✗ Connection failed: ${escapeHtml(err.message)}`;
      }
    });
  }
}

function updateGeminiKeyIndicator() {
  const dot = document.getElementById('geminiStatusDot');
  const hint = document.getElementById('apiKeyStatusHint');
  const input = document.getElementById('geminiApiKeyInput');
  const modelSelect = document.getElementById('geminiModelSelect');

  if (typeof GeminiService === 'undefined') return;

  const hasKey = GeminiService.hasKey();
  if (dot) {
    dot.className = `ai-status-indicator ${hasKey ? 'active' : 'inactive'}`;
    dot.title = hasKey ? `Gemini Active (${GeminiService.getModel()})` : 'Gemini Key not configured';
  }

  if (input && hasKey && !input.value) {
    input.value = GeminiService.getKey();
  }

  if (modelSelect) {
    modelSelect.value = GeminiService.getModel();
  }

  if (hint) {
    hint.textContent = hasKey 
      ? `Configured: ${GeminiService.getMaskedKey()} (${GeminiService.getModel()})`
      : 'No key configured. Key will be saved only in your browser localStorage.';
  }
}

function openGeminiModal() {
  const modal = document.getElementById('geminiModal');
  if (!modal) return;
  updateGeminiKeyIndicator();
  const resEl = document.getElementById('geminiTestResult');
  if (resEl) resEl.style.display = 'none';
  if (typeof modal.showModal === 'function') {
    modal.showModal();
  } else {
    modal.setAttribute('open', '');
  }
}

function closeGeminiModal() {
  const modal = document.getElementById('geminiModal');
  if (!modal) return;
  if (typeof modal.close === 'function') {
    modal.close();
  } else {
    modal.removeAttribute('open');
  }
}

// Global window exposures for resilient inline HTML and mobile tap handlers
window.switchTab = switchTab;
window.toggleMaximize = toggleMaximize;
window.exitMaximize = exitMaximize;
window.toggleTheme = toggleTheme;
window.togglePaletteDropdown = togglePaletteDropdown;
window.toggleSidebar = toggleSidebar;
window.setThemeColor = setThemeColor;
window.openGeminiModal = openGeminiModal;
window.closeGeminiModal = closeGeminiModal;
