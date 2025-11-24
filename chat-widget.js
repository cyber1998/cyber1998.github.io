// Custom Chat Widget logic (migrated from inline script)
// Configuration object: set via config.js (gitignored) or fallback values.
// Provide window.CHAT_API_TOKEN and window.CHAT_API_BASE (without trailing slash) optionally.

const chatConfig = {
  // Use serverless function endpoint; keeps token server-side
  apiBaseUrl: '/.netlify/functions/chat'
};

function initChat() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-input');
  const container = document.getElementById('chat-messages');
  if (!form || !input || !container) {
    console.error('Chat elements not found. Aborting chat init.');
    return;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    appendMessage(container, text, 'user');
    input.value = '';
    await sendMessageToAPI(container, text);
  });
}

function appendMessage(container, text, who) {
  const msg = document.createElement('div');
  msg.className = 'msg ' + (who === 'user' ? 'msg-user' : 'msg-bot');
  msg.textContent = text;
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

async function sendMessageToAPI(container, text) {
  ensureChatId();
  const endpoint = chatConfig.apiBaseUrl; // API expects payload with input_text & chat_id
  const payload = {
    input_text: text,
    chat_id: window.__CHAT_ID
  };
  const loader = document.createElement('div');
  loader.className = 'msg msg-bot msg-loading loading-dots';
  loader.textContent = 'Thinking';
  container.appendChild(loader);
  container.scrollTop = container.scrollHeight;
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error('API error: ' + response.status);
    const raw = await response.json();
    // New response format: root object contains answer, sources[], chat_history[]
    const answer = raw.answer || 'No response from server.';
    loader.className = 'msg msg-bot';
    loader.textContent = '';
    await streamText(loader, answer);
    if (Array.isArray(raw.sources) && raw.sources.length) {
      const srcLines = raw.sources.slice(0,5).map(s => '• ' + truncate(cleanUrl(s.url||''),80)).join('\n');
      appendMessage(container, 'Sources:\n' + srcLines, 'bot');
    }
    if (Array.isArray(raw.follow_up_questions) && raw.follow_up_questions.length) {
      appendFollowUpQuestions(container, raw.follow_up_questions);
    }
  } catch (err) {
    console.error('Chat API error', err);
    loader.className = 'msg msg-bot';
    loader.textContent = 'Sorry, there was a problem connecting to the chat server.';
  }
}

function ensureChatId() {
  if (!window.__CHAT_ID) {
    window.__CHAT_ID = generateUUIDv4();
  }
}

function generateUUIDv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function truncate(str, max) {
  return str.length > max ? str.slice(0, max - 1) + '…' : str;
}

function cleanUrl(u) {
  try { const url = new URL(u); return url.origin + url.pathname; } catch { return u; }
}

function appendFollowUpQuestions(container, questions) {
  const wrapper = document.createElement('div');
  wrapper.className = 'msg msg-bot';
  wrapper.style.maxWidth = '100%';
  wrapper.style.background = 'transparent';
  wrapper.style.border = 'none';
  wrapper.style.padding = '0';
  const followUpContainer = document.createElement('div');
  followUpContainer.className = 'follow-up-container';
  questions.forEach(q => {
    const pill = document.createElement('button');
    pill.className = 'follow-up-pill';
    pill.textContent = q;
    pill.onclick = () => {
      const input = document.getElementById('chat-input');
      if (input) {
        input.value = q;
        input.focus();
      }
    };
    followUpContainer.appendChild(pill);
  });
  wrapper.appendChild(followUpContainer);
  container.appendChild(wrapper);
  container.scrollTop = container.scrollHeight;
}

async function streamText(node, fullText) {
  const chars = [...fullText];
  let idx = 0;
  return new Promise(resolve => {
    const interval = setInterval(() => {
      node.textContent = chars.slice(0, idx + 1).join('');
      idx++;
      if (idx >= chars.length) {
        clearInterval(interval);
        resolve();
      }
    }, 12); // speed per character
  });
}

document.addEventListener('DOMContentLoaded', initChat);
