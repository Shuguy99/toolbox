const input = document.getElementById('input');
const output = document.getElementById('output');
const encodeBtn = document.getElementById('encodeBtn');
const decodeBtn = document.getElementById('decodeBtn');
const copyBtn = document.getElementById('copyBtn');
const errorMessage = document.getElementById('errorMessage');

function setError(msg) {
  errorMessage.textContent = msg || '';
  errorMessage.className = msg ? 'error-text' : '';
}

encodeBtn.addEventListener('click', () => {
  const text = input.value;
  if (!text) {
    setError('Please enter text to encode.');
    return;
  }
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  bytes.forEach(b => binary += String.fromCharCode(b));
  output.value = btoa(binary);
  setError('');
});

decodeBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) {
    setError('Please enter a Base64 string to decode.');
    return;
  }
  try {
    const binary = atob(text);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    output.value = new TextDecoder().decode(bytes);
    setError('');
  } catch (e) {
    setError('Invalid Base64 string.');
  }
});

copyBtn.addEventListener('click', () => copyToClipboard(output.value));