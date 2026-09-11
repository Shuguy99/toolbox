const hexInput = document.getElementById('hexInput');
const hexApply = document.getElementById('hexApply');
const hexError = document.getElementById('hexError');
const rInput = document.getElementById('rInput');
const gInput = document.getElementById('gInput');
const bInput = document.getElementById('bInput');
const rgbApply = document.getElementById('rgbApply');
const copyRgb = document.getElementById('copyRgb');
const preview = document.getElementById('preview');
const swatch = document.getElementById('swatch');

function setColor(r, g, b) {
  const hex = '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('').toUpperCase();
  const rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  preview.textContent = hex + ' → ' + rgb;
  swatch.style.background = rgb;
}

function hexToRgb(hex) {
  const m = hex.match(/^#?([0-9a-f]{6})$/i);
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

hexApply.addEventListener('click', () => {
  hexError.textContent = '';
  const c = hexToRgb(hexInput.value.trim());
  if (!c) {
    hexError.textContent = 'Invalid HEX format. Use #RRGGBB, e.g. #6366F1.';
    return;
  }
  rInput.value = c.r;
  gInput.value = c.g;
  bInput.value = c.b;
  setColor(c.r, c.g, c.b);
});

rgbApply.addEventListener('click', () => {
  const r = Math.max(0, Math.min(255, parseInt(rInput.value, 10) || 0));
  const g = Math.max(0, Math.min(255, parseInt(gInput.value, 10) || 0));
  const b = Math.max(0, Math.min(255, parseInt(bInput.value, 10) || 0));
  rInput.value = r;
  gInput.value = g;
  bInput.value = b;
  setColor(r, g, b);
});

copyRgb.addEventListener('click', () => copyToClipboard(preview.textContent.split('→ ')[1] || preview.textContent));

[hexInput, rInput, gInput, bInput].forEach(el => {
  el.addEventListener('change', () => {
    if (el === hexInput) hexApply.click();
    else rgbApply.click();
  });
});

setColor(99, 102, 241);