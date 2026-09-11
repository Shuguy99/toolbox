const textInput = document.getElementById('textInput');

function updateStats() {
  const text = textInput.value;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s+/g, '').length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0).length;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  document.getElementById('statWords').textContent = words;
  document.getElementById('statChars').textContent = chars;
  document.getElementById('statCharsNoSpaces').textContent = charsNoSpaces;
  document.getElementById('statSentences').textContent = sentences;
  document.getElementById('statParagraphs').textContent = paragraphs;
  document.getElementById('statReadingTime').textContent = readingTime;
}

textInput.addEventListener('input', updateStats);
updateStats();