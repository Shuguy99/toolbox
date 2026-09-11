const jsonInput = document.getElementById('jsonInput');
const jsonOutput = document.getElementById('jsonOutput');
const formatBtn = document.getElementById('formatBtn');
const minifyBtn = document.getElementById('minifyBtn');
const copyBtn = document.getElementById('copyBtn');
const statusMessage = document.getElementById('statusMessage');

function showStatus(text, isError) {
  statusMessage.textContent = text;
  statusMessage.className = isError ? 'error-text' : 'success-text';
}

function process(indent) {
  const input = jsonInput.value.trim();
  if (!input) {
    showStatus('Please enter JSON to process.', true);
    return;
  }
  try {
    const parsed = JSON.parse(input);
    jsonOutput.value = JSON.stringify(parsed, null, indent);
    showStatus(indent ? 'Valid JSON — formatted successfully.' : 'Valid JSON — minified successfully.');
  } catch (e) {
    showStatus('Invalid JSON: ' + e.message, true);
    jsonOutput.value = '';
  }
}

formatBtn.addEventListener('click', () => process(2));
minifyBtn.addEventListener('click', () => process(0));
copyBtn.addEventListener('click', () => copyToClipboard(jsonOutput.value));