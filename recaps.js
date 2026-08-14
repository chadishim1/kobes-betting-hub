const recapGrid = document.getElementById('recap-grid');

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const renderEmpty = () => {
  recapGrid.innerHTML = '<div class="recap-empty"><strong>Verified winning days are coming.</strong><p>No settled day currently meets the public 85% standard. Qualifying recaps will appear here only after every included play is graded and the record is verified.</p></div>';
};

fetch('recaps-data.json?v=1')
  .then((response) => {
    if (!response.ok) throw new Error('Recap data unavailable');
    return response.json();
  })
  .then((days) => {
    const qualifying = days
      .map((day) => ({ ...day, winRate: day.wins + day.losses > 0 ? (day.wins / (day.wins + day.losses)) * 100 : 0 }))
      .filter((day) => day.verified === true && day.winRate >= 85)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    if (!qualifying.length) return renderEmpty();

    recapGrid.innerHTML = qualifying.map((day) => `
      <article class="recap-card">
        <div class="recap-card-header"><span class="recap-date">${escapeHtml(day.displayDate)}</span><span class="recap-rate">${day.winRate.toFixed(1)}%</span></div>
        <p class="recap-record">${day.wins}-${day.losses}${day.pushes ? `-${day.pushes}` : ''} record</p>
        <p class="recap-units">${day.netUnits > 0 ? '+' : ''}${Number(day.netUnits).toFixed(2)} units</p>
        <p class="recap-summary">${escapeHtml(day.summary)}</p>
      </article>`).join('');
  })
  .catch(renderEmpty);
