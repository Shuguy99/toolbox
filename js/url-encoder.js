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
  if (!input.value) { setError('Please enter text to encode.'); return; }
  output.value = encodeURIComponent(input.value);
  setError('');
});

decodeBtn.addEventListener('click', () => {
  if (!input.value) { setError('Please enter a URL string to decode.'); return; }
  try {
    output.value = decodeURIComponent(input.value.replace(/\+/g, ' '));
    setError('');
  } catch (e) {
    setError('Invalid URL encoding: ' + e.message);
  }
});

copyBtn.addEventListener('click', () => copyToClipboard(output.value));