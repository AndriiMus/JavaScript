const generateNumberRange = (from, to) => {
  const res = [];
  for (let i = from; i <= to; i += 1) {
    res.push(i);
  }
  return res;
};

const getLinesSeats = () =>
  generateNumberRange(1, 10)
    .map(
      seatNumber =>
        `<div 
class="sector__seat"
data-seat-number="${seatNumber}">
</div>`,
    )
    .join('');

const getSectorLines = () => {
  const seat = getLinesSeats();
  return generateNumberRange(1, 10)
    .map(
      lineNumber => `<div 
class="sector__line"
data-line-number="${lineNumber}">
 ${seat}
</div>`,
    )
    .join('');
};

const arenaEl = document.querySelector('.arena');

const renderArena = () => {
  const lines = getSectorLines();

  const sectrorsString = generateNumberRange(1, 3)
    .map(
      sectorNumber => `<div 
  class="sector"
   data-sector-number="${sectorNumber}">
   ${lines}
  </div>`,
    )
    .join('');

  arenaEl.innerHTML = sectrorsString;
};

const onSeatSelect = event => {
  const isSeat = event.target.classList.contains('sector__seat');
  if (!isSeat) {
    return;
  }

  const seatNuber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  const selectedSeatElem = document.querySelector('.board__selected-seat');
  selectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNuber}`;
};

arenaEl.addEventListener('click', onSeatSelect);

renderArena();
