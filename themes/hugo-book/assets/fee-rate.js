'use strict';

const METRICS = {
  FEE: 'fee',
  BLOCK: 'block',
  PRICE: 'price',
  SATS: 'sats',
  BTC: 'btc'
};

let currentMetric = METRICS.FEE;
let lastKnownValues = {
  fee: { label: 'Комиссия', value: null },
  block: { label: 'Высота блока', value: null },
  price: { label: 'Цена', value: null },
  sats: { label: 'Московское время', value: null },
  btc: { label: '', value: '1 BTC = 1 BTC' }
};

function formatSatsAsTime(sats) {
  // Pad with zeros to ensure at least 4 digits
  const satsStr = Math.round(sats).toString().padStart(4, '0');
  // Split into pairs and add colon
  const firstPair = satsStr.slice(0, -2);
  const secondPair = satsStr.slice(-2);
  return `${firstPair}:${secondPair}`;
}

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function availableMetrics() {
  const metrics = Object.values(METRICS).filter(metric =>
    metric !== METRICS.BTC && lastKnownValues[metric].value !== null
  );
  return [...metrics, METRICS.BTC];
}

function updateDisplay() {
  const label = document.getElementById('metrics-label');
  const value = document.getElementById('metrics-value');

  if (!label || !value) return;

  const metrics = availableMetrics();
  // Automatically return to live data when a source recovers from total failure.
  if (!metrics.includes(currentMetric)) currentMetric = metrics.find(metric => metric !== METRICS.BTC);
  const data = lastKnownValues[currentMetric] || lastKnownValues[METRICS.BTC];
  label.textContent = data ? data.label : '';
  value.textContent = data ? data.value : '';

  // Add padding-top when there's no label to maintain alignment
  value.style.paddingTop = data && !data.label ? '0.7rem' : '0';
}

async function updateMetric(keys, url, formatValues) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const values = formatValues(await response.json());
    keys.forEach((key, index) => { lastKnownValues[key].value = values[index]; });
  } catch (error) {
    keys.forEach(key => { lastKnownValues[key].value = null; });
    console.error(`Error fetching metrics from ${url}:`, error);
  } finally {
    clearTimeout(timeout);
    updateDisplay();
  }
}

async function updateMetrics() {
  // Each request updates the display independently, without waiting for other sources.
  await Promise.all([
    updateMetric([METRICS.FEE], 'https://mempool.space/api/v1/fees/recommended', data => {
      if (!Number.isFinite(data?.fastestFee) || data.fastestFee < 0) throw new Error('Invalid fee data');
      return [`${data.fastestFee} sat/vB`];
    }),
    updateMetric([METRICS.BLOCK], 'https://mempool.space/api/blocks/tip/height', height => {
      if (!Number.isInteger(height) || height <= 0) throw new Error('Invalid block height');
      return [formatNumber(height)];
    }),
    updateMetric([METRICS.PRICE, METRICS.SATS], 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd', data => {
      const price = data?.bitcoin?.usd;
      if (!Number.isFinite(price) || price <= 0) throw new Error('Invalid price data');
      return [`$${formatNumber(price)}`, formatSatsAsTime(100_000_000 / price)];
    })
  ]);
}

function cycleMetric() {
  const metrics = availableMetrics();
  if (!metrics.length) return;
  const currentIndex = metrics.indexOf(currentMetric);
  currentMetric = metrics[(currentIndex + 1) % metrics.length];
  updateDisplay();
}

// Update initially and then every minute
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('metrics-container');
  if (container) {
    container.addEventListener('click', cycleMetric);
    updateDisplay();
    updateMetrics();
    setInterval(updateMetrics, 60000);
  }
});
