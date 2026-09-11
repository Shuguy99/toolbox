const countSlider = document.getElementById('countSlider');
const countValue = document.getElementById('countValue');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const output = document.getElementById('output');

const WORDS = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
  'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
  'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
  'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
  'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate',
  'velit', 'esse', 'cillum', 'eu', 'fugiat', 'nulla', 'pariatur', 'excepteur',
  'sint', 'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'officia',
  'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
];

function randomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function genParagraph() {
  const len = 40 + Math.floor(Math.random() * 30);
  const arr = [];
  for (let i = 0; i < len; i++) arr.push(randomWord());
  let text = arr.join(' ');
  text = text.charAt(0).toUpperCase() + text.slice(1) + '.';
  return text;
}

countSlider.addEventListener('input', () => {
  countValue.textContent = countSlider.value;
});

generateBtn.addEventListener('click', () => {
  const count = parseInt(countSlider.value, 10);
  const paragraphs = [];
  for (let i = 0; i < count; i++) paragraphs.push(genParagraph());
  output.value = paragraphs.join('\n\n');
});

copyBtn.addEventListener('click', () => copyToClipboard(output.value));

generateBtn.click();