const qrInput = document.getElementById('qrInput');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrOutput = document.getElementById('qrOutput');

let currentFG = '#0a0a0f';

document.querySelectorAll('.color-dot').forEach(dot => {
  dot.addEventListener('click', () => {
    document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
    currentFG = dot.dataset.fg;
    if (qrInput.value.trim()) generate();
  });
});

generateBtn.addEventListener('click', generate);

function generate() {
  const value = qrInput.value.trim();
  if (!value) return;
  qrOutput.innerHTML = '';
  qrOutput.classList.add('has-content');
  const qr = new QRCode(qrOutput, {
    text: value,
    width: 256,
    height: 256,
    colorDark: currentFG,
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
  currentQR = qr;
  downloadBtn.disabled = false;
}

downloadBtn.addEventListener('click', () => {
  const canvas = qrOutput.querySelector('canvas');
  if (!canvas) return;
  const link = document.createElement('a');
  link.download = 'qrcode.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
});

qrInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    generate();
  }
});