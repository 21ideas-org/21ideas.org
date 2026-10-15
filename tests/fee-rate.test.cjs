const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const script = fs.readFileSync(path.join(__dirname, '../themes/hugo-book/assets/fee-rate.js'), 'utf8');
const nextTurn = () => new Promise(resolve => setImmediate(resolve));

function createWidget(fetch) {
  const listeners = {};
  const timers = new Map();
  const elements = {
    'metrics-label': { textContent: '' },
    'metrics-value': { textContent: '', style: {} },
    'metrics-container': { addEventListener: (event, handler) => { listeners[event] = handler; } }
  };
  let refresh;
  let timerId = 0;
  vm.runInNewContext(script, {
    fetch,
    AbortController,
    console: { error() {} },
    document: {
      getElementById: id => elements[id],
      addEventListener: (event, handler) => { listeners[event] = handler; }
    },
    setInterval: handler => { refresh = handler; },
    setTimeout: handler => { timers.set(++timerId, handler); return timerId; },
    clearTimeout: id => timers.delete(id)
  });
  return {
    async start() { listeners.DOMContentLoaded(); await nextTurn(); },
    async refresh() { await refresh(); },
    click() { listeners.click(); },
    display() { return [elements['metrics-label'].textContent, elements['metrics-value'].textContent]; },
    expireRequests() { for (const handler of [...timers.values()]) handler(); }
  };
}

function response(url) {
  const body = url.includes('fees/recommended') ? { fastestFee: 3 }
    : url.includes('blocks/tip/height') ? 970106 : { bitcoin: { usd: 80000 } };
  return { ok: true, json: async () => body };
}

function cycle(widget, count) {
  return Array.from({ length: count }, () => {
    const display = widget.display();
    widget.click();
    return display;
  });
}

test('all available metrics retain their formatting and click order', async () => {
  const widget = createWidget(async url => response(url));
  await widget.start();
  assert.deepEqual(cycle(widget, 6), [
    ['Комиссия', '3 sat/vB'], ['Высота блока', '970 106'],
    ['Цена', '$80 000'], ['Московское время', '12:50'],
    ['', '1 BTC = 1 BTC'], ['Комиссия', '3 sat/vB']
  ]);
});

test('price displays while mempool requests are pending, then skips failed metrics', async () => {
  const widget = createWidget((url, options) => {
    if (!url.includes('mempool.space')) return Promise.resolve(response(url));
    return new Promise((resolve, reject) => {
      options?.signal.addEventListener('abort', () => reject(new Error('Timed out')));
    });
  });
  await widget.start();
  assert.deepEqual(widget.display(), ['Цена', '$80 000']);
  widget.expireRequests();
  await nextTurn();
  assert.deepEqual(cycle(widget, 4), [
    ['Цена', '$80 000'], ['Московское время', '12:50'],
    ['', '1 BTC = 1 BTC'], ['Цена', '$80 000']
  ]);
});

test('mempool metrics remain available when the price source fails', async () => {
  const widget = createWidget(async url => {
    if (url.includes('coingecko.com')) throw new Error('Offline');
    return response(url);
  });
  await widget.start();
  assert.deepEqual(cycle(widget, 4), [
    ['Комиссия', '3 sat/vB'], ['Высота блока', '970 106'],
    ['', '1 BTC = 1 BTC'], ['Комиссия', '3 sat/vB']
  ]);
});

test('total failure keeps the static BTC metric, including after a click', async () => {
  const widget = createWidget(async () => { throw new Error('Offline'); });
  await widget.start();
  assert.deepEqual(cycle(widget, 2), [['', '1 BTC = 1 BTC'], ['', '1 BTC = 1 BTC']]);
});

test('HTTP errors and invalid values are excluded without hiding working metrics', async () => {
  const widget = createWidget(async url => {
    if (url.includes('fees/recommended')) return { ok: false, status: 429, json: async () => ({ fastestFee: 99 }) };
    if (url.includes('coingecko.com')) return { ok: true, json: async () => ({ bitcoin: { usd: 0 } }) };
    return response(url);
  });
  await widget.start();
  assert.deepEqual(cycle(widget, 3), [
    ['Высота блока', '970 106'], ['', '1 BTC = 1 BTC'], ['Высота блока', '970 106']
  ]);
});

test('refresh clears unavailable data and recovers when sources return', async () => {
  let offline = false;
  const widget = createWidget(async url => {
    if (offline) throw new Error('Offline');
    return response(url);
  });
  await widget.start();
  offline = true;
  await widget.refresh();
  assert.deepEqual(widget.display(), ['', '1 BTC = 1 BTC']);
  offline = false;
  await widget.refresh();
  assert.deepEqual(widget.display(), ['Комиссия', '3 sat/vB']);
});
