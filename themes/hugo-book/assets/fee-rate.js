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
  fee: { label: 'Комиссия', value: '0 sat/vB' },
  block: { label: 'Высота блока', value: '0' },
  price: { label: 'Цена', value: '$0' },
  sats: { label: 'Московское время', value: '00:00' },
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

function updateDisplay() {
  const label = document.getElementById('metrics-label');
  const value = document.getElementById('metrics-value');
  
  if (!label || !value) return;
  
  const data = lastKnownValues[currentMetric];
  label.textContent = data.label;
  value.textContent = data.value;
  
  // Add padding-top when there's no label to maintain alignment
  value.style.paddingTop = data.label ? '0' : '0.7rem';
}

async function updateMetrics() {
  try {
    // Fetch all data in parallel
    const [feeData, blockData, priceData] = await Promise.all([
      fetch('https://mempool.space/api/v1/fees/recommended').then(r => r.json()),
      fetch('https://mempool.space/api/blocks/tip/height').then(r => r.json()),
      fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd').then(r => r.json())
    ]);

    // Update stored values only after successful fetch
    lastKnownValues.fee.value = `${feeData.fastestFee} sat/vB`;
    lastKnownValues.block.value = formatNumber(blockData);
    lastKnownValues.price.value = `$${formatNumber(priceData.bitcoin.usd)}`;
    
    // Format sats/$ as time
    const satsPerDollar = Math.round(100_000_000 / priceData.bitcoin.usd);
    lastKnownValues.sats.value = formatSatsAsTime(satsPerDollar);

    // Update display with new values
    updateDisplay();
  } catch (error) {
    console.error('Error fetching metrics:', error);
    // On error, display remains unchanged with last known values
  }
}

function cycleMetric() {
  const metrics = Object.values(METRICS);
  const currentIndex = metrics.indexOf(currentMetric);
  currentMetric = metrics[(currentIndex + 1) % metrics.length];
  updateDisplay();
}

// Update initially and then every minute
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('metrics-container');
  if (container) {
    container.addEventListener('click', cycleMetric);
    updateMetrics();
    setInterval(updateMetrics, 60000);
  }
}); 