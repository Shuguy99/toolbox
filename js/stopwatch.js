const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const laps = document.getElementById('laps');

let running = false;
let startTime = 0;
let elapsed = 0;
let rafId = null;
let lapList = [];
let lapIndex = 0;

function fmt(ms) {
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const cs = Math.floor((ms % 1000) / 10);
  return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0') + '.' + String(cs).padStart(2, '0');
}

function tick() {
  const now = performance.now();
  elapsed = startTime ? now - startTime : 0;
  display.textContent = fmt(elapsed);
  if (running) rafId = requestAnimationFrame(tick);
}

function updateButtons() {
  startBtn.textContent = running ? 'Pause' : 'Start';
  lapBtn.disabled = !running;
  startBtn.classList.toggle('btn-secondary', running);
  startBtn.classList.toggle('btn-primary', !running);
}

startBtn.addEventListener('click', () => {
  if (running) {
    running = false;
    cancelAnimationFrame(rafId);
  } else {
    running = true;
    startTime = performance.now() - elapsed;
    tick();
  }
  updateButtons();
});

lapBtn.addEventListener('click', () => {
  lapIndex++;
  lapList.unshift({ n: lapIndex, t: fmt(elapsed) });
  laps.innerHTML = lapList.map(l => 'Lap ' + l.n + ':  ' + l.t).join('\n');
});

resetBtn.addEventListener('click', () => {
  running = false;
  cancelAnimationFrame(rafId);
  elapsed = 0;
  startTime = 0;
  lapList = [];
  lapIndex = 0;
  laps.innerHTML = '';
  display.textContent = '00:00.00';
  updateButtons();
});

updateButtons();