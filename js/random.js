const minInput = document.getElementById('minInput');
const maxInput = document.getElementById('maxInput');
const countInput = document.getElementById('countInput');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const output = document.getElementById('output');

function secureRandomInt(min, max) {
  const range = max - min + 1;
  const maxUint = 0xFFFFFFFF;
  const values = new Uint32Array(1);
  let candidate;
  do {
    window.crypto.getRandomValues(values);
    candidate = values[0];
  } while (candidate >= (maxUint - (maxUint % range)));
  return min + (candidate % range);
}

generateBtn.addEventListener('click', () => {
  let min = parseInt(minInput.value, 10);
  let max = parseInt(maxInput.value, 10);
  let count = parseInt(countInput.value, 10) || 1;
  if (!isFinite(min)) min = 1;
  if (!isFinite(max)) max = min + 100;
  if (max < min) { const t = max; max = min; min = t; }
  count = Math.max(1, Math.min(100, count));

  const nums = [];
  for (let i = 0; i < count; i++) nums.push(secureRandomInt(min, max));
  output.textContent = nums.join(', ');
});

copyBtn.addEventListener('click', () => copyToClipboard(output.textContent));