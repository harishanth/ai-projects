/**
 * Gemini BYOK (Bring Your Own Key) Service
 * Direct client-side integration with Google Gemini REST API.
 * 100% static hosting safe - API key is stored only in the user's browser localStorage.
 */

const GeminiService = {
  STORAGE_KEY: 'android_prep_gemini_key',
  STORAGE_MODEL: 'android_prep_gemini_model',
  DEFAULT_MODEL: 'gemini-2.5-flash',

  AVAILABLE_MODELS: [
    { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash (Recommended - Fastest & Smartest)' },
    { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash (High Quota)' },
    { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro (Deep Reasoning)' },
    { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash' }
  ],

  getKey() {
    return localStorage.getItem(this.STORAGE_KEY) || '';
  },

  setKey(key) {
    if (!key || !key.trim()) {
      localStorage.removeItem(this.STORAGE_KEY);
    } else {
      localStorage.setItem(this.STORAGE_KEY, key.trim());
    }
  },

  hasKey() {
    const k = this.getKey();
    return Boolean(k && k.length > 5);
  },

  getMaskedKey() {
    const key = this.getKey();
    if (!key) return '';
    if (key.length <= 8) return '••••••••';
    return `${key.slice(0, 6)}••••••••${key.slice(-4)}`;
  },

  getModel() {
    return localStorage.getItem(this.STORAGE_MODEL) || this.DEFAULT_MODEL;
  },

  setModel(model) {
    if (model) {
      localStorage.setItem(this.STORAGE_MODEL, model.trim());
    }
  },

  async testConnection(candidateKey, model) {
    const key = candidateKey || this.getKey();
    if (!key) {
      throw new Error('Please enter a Gemini API Key.');
    }
    const targetModel = model || this.getModel();
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${targetModel}:generateContent?key=${encodeURIComponent(key)}`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: 'Respond with exactly the single word "READY".' }]
        }],
        generationConfig: {
          maxOutputTokens: 10,
          temperature: 0.1
        }
      })
    });

    if (!response.ok) {
      let errMessage = `HTTP ${response.status}: ${response.statusText}`;
      try {
        const errorJson = await response.json();
        if (errorJson.error && errorJson.error.message) {
          errMessage = errorJson.error.message;
        }
      } catch (e) {
        // fallback to status text
      }
      throw new Error(errMessage);
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    return { ok: true, text: text.trim() };
  },

  async askCodingQuestion(challenge, userQuestion) {
    const key = this.getKey();
    if (!key) {
      const err = new Error('GEMINI_KEY_MISSING');
      err.code = 'NO_KEY';
      throw err;
    }

    const model = this.getModel();
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`;

    const systemInstruction = `You are a Staff Android Engineer and Lead Mobile Interviewer at top-tier tech companies (specializing in 10-11 years experience bar-raising).
You are evaluating and mentoring a candidate on the following coding problem:
- Title: "${challenge.title}"
- Target Company: "${challenge.company}"
- Category: "${challenge.category}"
- Difficulty: "${challenge.difficulty}"

CONTEXT:
${challenge.problemDesc}

PRODUCTION SOLUTION CODE (KOTLIN):
\`\`\`kotlin
${challenge.solutionCode}
\`\`\`

ARCHITECTURAL DEEP-DIVE & PITFALLS:
${challenge.explanation || 'None provided'}

INSTRUCTIONS:
1. Provide concise, highly practical, staff-level technical analysis.
2. Focus on Kotlin Coroutines structured concurrency, memory leak prevention, thread safety, Android lifecycle, and architectural trade-offs.
3. Be direct, authoritative, and format your output cleanly using markdown headings, bullet points, and Kotlin code blocks where applicable.`;

    const requestBody = {
      systemInstruction: {
        parts: [{ text: systemInstruction }]
      },
      contents: [{
        role: 'user',
        parts: [{ text: userQuestion }]
      }],
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 2048
      }
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      let errMessage = `Google Gemini Error (${response.status})`;
      try {
        const errorJson = await response.json();
        if (errorJson.error && errorJson.error.message) {
          errMessage = errorJson.error.message;
        }
      } catch (e) {
        // use default message
      }
      throw new Error(errMessage);
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
      throw new Error('Gemini returned an empty response. Please check prompt or model parameters.');
    }
    return text;
  },

  renderMarkdown(md) {
    if (!md) return '';

    // Normalize newlines
    let text = md.replace(/\r\n/g, '\n');

    // Extract code blocks first to protect them from regex interference
    const codeBlocks = [];
    text = text.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
      const idx = codeBlocks.length;
      codeBlocks.push({ lang: lang || 'kotlin', code });
      return `__CODE_BLOCK_${idx}__`;
    });

    // Escape HTML outside code blocks
    text = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Headings
    text = text.replace(/^#### (.*$)/gim, '<h5 class="ai-h5">$1</h5>');
    text = text.replace(/^### (.*$)/gim, '<h4 class="ai-h4">$1</h4>');
    text = text.replace(/^## (.*$)/gim, '<h3 class="ai-h3">$1</h3>');
    text = text.replace(/^# (.*$)/gim, '<h2 class="ai-h2">$1</h2>');

    // Bold & Italics
    text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*([^\*\n]+)\*/g, '<em>$1</em>');

    // Inline code
    text = text.replace(/`([^`\n]+)`/g, '<code class="ai-inline-code">$1</code>');

    // Blockquotes
    text = text.replace(/^> (.*$)/gim, '<blockquote class="ai-quote">$1</blockquote>');

    // Unordered lists
    text = text.replace(/^\s*[-*]\s+(.*$)/gim, '<li class="ai-li">$1</li>');
    text = text.replace(/(<li class="ai-li">.*<\/li>(\n|(?=<li class="ai-li">)))/g, '<ul class="ai-ul">$1</ul>');

    // Ordered lists
    text = text.replace(/^\s*(\d+)\.\s+(.*$)/gim, '<li class="ai-oli">$2</li>');
    text = text.replace(/(<li class="ai-oli">.*<\/li>(\n|(?=<li class="ai-oli">)))/g, '<ol class="ai-ol">$1</ol>');

    // Paragraph line breaks
    text = text.replace(/\n\n+/g, '<br/><br/>');

    // Restore code blocks with syntax display
    text = text.replace(/__CODE_BLOCK_(\d+)__/g, (match, id) => {
      const block = codeBlocks[Number(id)];
      if (!block) return '';
      const safeCode = block.code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      return `
        <div class="code-editor-box" style="margin: 14px 0;">
          <div class="code-editor-header" style="padding: 6px 14px; font-size: 11px;">
            <span>${block.lang}</span>
            <button class="btn-copy-code" onclick="copyAiSnippet(this)" style="padding: 2px 8px; font-size: 11px;">📋 Copy Code</button>
          </div>
          <pre class="code-display" style="max-height: 380px; margin: 0; padding: 12px 16px;"><code>${safeCode}</code></pre>
        </div>
      `;
    });

    return text;
  }
};

// Global helper for code snippet copy inside AI responses
function copyAiSnippet(btn) {
  const container = btn.closest('.code-editor-box');
  const codeEl = container ? container.querySelector('code') : null;
  if (!codeEl) return;
  navigator.clipboard.writeText(codeEl.textContent).then(() => {
    const original = btn.innerHTML;
    btn.innerHTML = '✓ Copied';
    setTimeout(() => { btn.innerHTML = original; }, 1800);
    if (typeof showToast === 'function') {
      showToast('Code snippet copied!');
    }
  });
}
