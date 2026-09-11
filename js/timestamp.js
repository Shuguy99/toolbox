const currentTs = document.getElementById('currentTs');
const copyTs = document.getElementById('copyTs');
const tsToDate = document.getElementById('tsToDate');
const tsToDateBtn = document.getElementById('tsToDateBtn');
const dateResult = document.getElementById('dateResult');
const dateToTs = document.getElementById('dateToTs');
const dateToTsBtn = document.getElementById('dateToTsBtn');
const tsResult = document.getElementById('tsResult');

function updateCurrent() {
  currentTs.textContent = Math.floor(Date.now() / 1000);
}

setInterval(updateCurrent, 1000);
updateCurrent();

copyTs.addEventListener('click', () => copyToClipboard(currentTs.textContent));

tsToDateBtn.addEventListener('click', () => {
  const v = parseFloat(tsToDate.value.trim());
  if (!isFinite(v) || v <= 0) {
    dateResult.textContent = 'Enter a valid Unix timestamp.';
    return;
  }
  const date = new Date(v * 1000);
  dateResult.textContent = date.toString();
});

dateToTsBtn.addEventListener('click', () => {
  if (!dateToTs.value) {
    tsResult.textContent = 'Pick a date and time first.';
    return;
  }
  const ms = new Date(dateToTs.value).getTime();
  tsResult.textContent = Math.floor(ms / 1000) + ' (' + ms + ' ms)';
});