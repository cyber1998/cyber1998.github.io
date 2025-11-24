// Netlify serverless function proxy for Botsonic API
// Keeps BOTSONIC_TOKEN secret on the server side.
// Expects POST with { input_text, chat_id }

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }
  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }
  const { input_text, chat_id } = payload;
  if (!input_text) {
    return { statusCode: 422, body: JSON.stringify({ error: 'input_text required' }) };
  }
  const token = process.env.BOTSONIC_TOKEN;
  if (!token) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server token missing' }) };
  }
  try {
    const upstream = await fetch('https://api-bot.writesonic.com/v1/botsonic/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': token
      },
      body: JSON.stringify({ input_text, chat_id })
    });
    const data = await upstream.json();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return { statusCode: 502, body: JSON.stringify({ error: 'Upstream failure', detail: err.message }) };
  }
}
