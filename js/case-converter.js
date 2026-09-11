const input = document.getElementById('input');
const output = document.getElementById('output');
const copyBtn = document.getElementById('copyBtn');

function convertCase(text, mode) {
  switch (mode) {
    case 'upper':
      return text.toUpperCase();
    case 'lower':
      return text.toLowerCase();
    case 'title':
      return text.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    case 'sentence':
      return text.toLowerCase().replace(/(^\s*\w|[.!?]\s+\w)/g, c => c.toUpperCase());
    case 'camel': {
      const words = text.toLowerCase().trim().split(/[^a-z0-9]+/).filter(Boolean);
      return words.map((w, i) => i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)).join('');
    }
    default:
      return text;
  }
}

document.querySelectorAll('[data-case]').forEach(btn => {
  btn.addEventListener('click', () => {
    output.value = convertCase(input.value, btn.dataset.case);
  });
});

copyBtn.addEventListener('click', () => copyToClipboard(output.value));