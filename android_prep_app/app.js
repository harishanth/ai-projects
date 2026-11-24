// Android Lead & Staff Interview Prep Studio - App Logic

// State Management
const STATE = {
  currentTab: 'dashboard',
  theme: localStorage.getItem('theme') || 'dark',
  solvedChallenges: JSON.parse(localStorage.getItem('solved_challenges') || '[]'),
  viewedHld: JSON.parse(localStorage.getItem('viewed_hld') || '[]'),
  quizState: {
    currentIndex: 0,
    answers: {},
    isFinished: false
  },
  activeChallengeId: APP_DATA.codingChallenges[0].id,
  activeHldId: APP_DATA.systemDesigns[0].id,
  codeTab: 'solution' // 'solution' | 'explanation'
};

function getAllChallenges() {
  return APP_DATA.codingChallenges;
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initGlobalSearch();
  initCompanyFilters();
  
  // Render Components
  renderDashboard();
  renderCompanies();
  renderCodingArena();
  renderSystemDesign();
  renderQuiz();
  updateReadiness();
});

// 1. Theme Management
function initTheme() {
  document.documentElement.setAttribute('data-theme', STATE.theme);
  const themeBtn = document.getElementById('themeToggleBtn');
  themeBtn.querySelector('.theme-icon').textContent = STATE.theme === 'dark' ? '☀️' : '🌙';

  themeBtn.addEventListener('click', () => {
    STATE.theme = STATE.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', STATE.theme);
    localStorage.setItem('theme', STATE.theme);
    themeBtn.querySelector('.theme-icon').textContent = STATE.theme === 'dark' ? '☀️' : '🌙';
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

  // Ensure content is immediately rendered when switching to System Design
  if (tabId === 'system-design' || tabId === 'systemDesign') {
    renderSystemDesign();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

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
    const priorityClass = c.priority === 'High' ? 'priority-high' : (c.priority === 'Medium-High' ? 'priority-medium-high' : 'priority-medium');
    
    return `
      <div class="company-card">
        <div class="company-top">
          <h3>${c.name}</h3>
          <span class="priority-badge ${priorityClass}">${c.priority} Priority</span>
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
      <div style="display: flex; gap: 8px;">
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
    ` : `
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
    `}

    <div class="code-actions">
      <button class="btn-sm btn-primary" onclick="copyEntireProductionCode('${ch.id}', this)" title="Copy entire production Kotlin source code">
        📋 Copy Entire Source Code
      </button>
      ${STATE.codeTab === 'solution' ? `
        <button class="btn-sm btn-secondary" onclick="switchCodeTab('explanation')" title="Examine critical architectural patterns, gotchas, and interview trade-offs">
          💡 View Architectural Deep-Dive
        </button>
      ` : `
        <button class="btn-sm btn-secondary" onclick="switchCodeTab('solution')" title="Return to production Kotlin solution">
          💻 View Production Solution Code
        </button>
      `}
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
  const found = APP_DATA.systemDesigns.find(d => d.company.includes(companyName.split(' ')[0]));
  if (found) {
    STATE.activeHldId = found.id;
  }
  switchTab('system-design');
  renderSystemDesign();
}

function openCodingForCompany(companyName) {
  const found = APP_DATA.codingChallenges.find(c => c.company.includes(companyName.split(' ')[0]));
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
