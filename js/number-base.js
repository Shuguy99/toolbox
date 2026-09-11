const decInput = document.getElementById('dec');
const binInput = document.getElementById('bin');
const hexInput = document.getElementById('hex');
const octInput = document.getElementById('oct');

function setAll(value) {
  decInput.value = String(value);
  binInput.value = value.toString(2);
  hexInput.value = value.toString(16).toUpperCase();
  octInput.value = value.toString(8);
}

function clearOthers(except) {
  [decInput, binInput, hexInput, octInput].forEach(el => {
    if (el !== except) el.value = '';
  });
}

function parseInput(el) {
  let val = el.value.trim();
  try {
    if (el === decInput) return parseInt(val, 10);
    if (el === binInput) return parseInt(val.replace(/[^01]/g, ''), 2);
    if (el === hexInput) return parseInt(val.replace(/^0x/gi, '').replace(/[^0-9a-f]/gi, ''), 16);
    if (el === octInput) return parseInt(val.replace(/^0o/i, '').replace(/[^0-7]/g, ''), 8);
  } catch (e) { /* fallthrough */ }
  return NaN;
}

function bind(el) {
  el.addEventListener('input', () => {
    const n = parseInput(el);
    if (isNaN(n) || n < 0) {
      clearOthers(el);
      return;
    }
    setAll(n);
  });
}

bind(decInput);
bind(binInput);
bind(hexInput);
bind(octInput);
setAll(42);