// Custom Chat Widget logic (migrated from inline script)
// Configuration object: set via config.js (gitignored) or fallback values.
// Provide window.CHAT_API_TOKEN and window.CHAT_API_BASE (without trailing slash) optionally.

const chatConfig = {
  apiBaseUrl: ('https://api-bot.writesonic.com/v1/botsonic/generate').replace(/\/$/, ''),
  token: window.BOTSONIC_TOKEN || 'd9a2f15b-d858-4938-8859-dd4d2447dcbd'
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
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(chatConfig.token && chatConfig.token !== 'd9a2f15b-d858-4938-8859-dd4d2447dcbd' ? { 'Authorization': 'Bearer ' + chatConfig.token } : {})
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error('API error: ' + response.status);
    const raw = await response.json();
    const top = Array.isArray(raw) ? raw[0] : raw;
    const data = top && top.data ? top.data : {};
    const answer = data.answer || 'No response from server.';
    appendMessage(container, answer, 'bot');

    if (data.sources) {
      try {
        const sourcesArr = JSON.parse(data.sources);
        if (Array.isArray(sourcesArr) && sourcesArr.length) {
          const srcLines = sourcesArr.slice(0, 5).map(s => '• ' + truncate(cleanUrl(s.url), 80)).join('\n');
          appendMessage(container, 'Sources:\n' + srcLines, 'bot');
        }
      } catch (e) {
        // ignore malformed sources
      }
    }
  } catch (err) {
    console.error('Chat API error', err);
    appendMessage(container, 'Sorry, there was a problem connecting to the chat server.', 'bot');
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

document.addEventListener('DOMContentLoaded', initChat);
