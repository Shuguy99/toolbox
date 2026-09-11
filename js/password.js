const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()-_=+[]{};:,.?';
const AMBIGUOUS = 'Il1O0o5S2Z';

const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const passwordOutput = document.getElementById('passwordOutput');

lengthSlider.addEventListener('input', () => {
  lengthValue.textContent = lengthSlider.value;
});

function getCharset() {
  let chars = '';
  if (document.getElementById('lowercase').checked) chars += LOWER;
  if (document.getElementById('uppercase').checked) chars += UPPER;
  if (document.getElementById('numbers').checked) chars += NUMBERS;
  if (document.getElementById('symbols').checked) chars += SYMBOLS;
  if (document.getElementById('ambiguous').checked) {
    chars = chars.split('').filter(c => !AMBIGUOUS.includes(c)).join('');
  }
  return chars;
}

function generatePassword() {
  const length = parseInt(lengthSlider.value, 10);
  const charset = getCharset();
  if (!charset) {
    passwordOutput.textContent = 'Select at least one character type.';
    return;
  }
  let password = '';
  const randomValues = new Uint32Array(length);
  window.crypto.getRandomValues(randomValues);
  for (let i = 0; i < length; i++) {
    password += charset[randomValues[i] % charset.length];
  }
  passwordOutput.textContent = password;
  passwordOutput.classList.add('has-content');
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', () => copyToClipboard(passwordOutput.textContent));

generatePassword();