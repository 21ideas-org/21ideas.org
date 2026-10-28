import assert from 'node:assert/strict';
import test from 'node:test';
import { initializeAudioPlayer } from '../assets/audio-player.mjs';

class Control extends EventTarget {
  dataset = {};
  disabled = false;
  hidden = false;
  textContent = '';
  value = '0';
  attrs = {};
  styles = {};
  classes = new Set();
  style = { setProperty: (key, value) => { this.styles[key] = value; } };
  classList = { toggle: (key, enabled) => enabled ? this.classes.add(key) : this.classes.delete(key) };
  setAttribute(key, value) { this.attrs[key] = value; }
  getAttribute(key) { return key === 'data-audio-rate' ? this.dataset.audioRate : this.attrs[key]; }
  toggleAttribute(key, enabled) { if (key === 'hidden') this.hidden = enabled; }
}
function fixture() {
  const audio = new Control();
  Object.assign(audio, { controls: true, paused: true, ended: false, duration: NaN, currentTime: 0, playbackRate: 1, calls: 0 });
  audio.pause = () => { const playing = !audio.paused; audio.paused = true; if (playing) audio.dispatchEvent(new Event('pause')); };
  audio.start = () => { audio.paused = false; audio.dispatchEvent(new Event('play')); if (!audio.paused) audio.dispatchEvent(new Event('playing')); };
  audio.play = () => { audio.calls++; audio.start(); return Promise.resolve(); };
  const panel = new Control(), toggle = new Control(), seek = new Control(), time = new Control(), status = new Control();
  const backward = new Control(), forward = new Control(), speed = new Control(), rateLabel = new Control();
  const rateIcons = [1, 1.25, 1.5].map(rate => Object.assign(new Control(), { dataset: { audioRate: String(rate) } }));
  panel.hidden = true;
  const elements = { audio, '[data-audio-controls]': panel, '[data-audio-toggle]': toggle,
    '[data-audio-seek]': seek, '[data-audio-time]': time, '[data-audio-status]': status,
    '[data-audio-backward]': backward, '[data-audio-forward]': forward, '[data-audio-speed]': speed,
    '[data-audio-rate-label]': rateLabel };
  const root = new Control();
  root.dataset.audioDuration = '177.76';
  root.querySelector = (selector) => elements[selector] || null;
  root.querySelectorAll = (selector) => selector === '[data-audio-rate]' ? rateIcons : [];
  return { root, audio, panel, toggle, seek, time, status, backward, forward, speed, rateLabel, rateIcons };
}
const click = async (button) => { button.dispatchEvent(new Event('click')); await Promise.resolve(); };

test('initialization shows known duration without loading audio; metadata enables seeking', () => {
  const f = fixture(); initializeAudioPlayer(f.root);
  assert.equal(f.audio.calls, 0);
  assert.equal(f.panel.hidden, false); assert.equal(f.audio.controls, false); assert.equal(f.audio.hidden, true);
  assert.equal(f.time.textContent, '0:00 / 2:58'); assert.equal(f.seek.disabled, true);
  f.audio.duration = 177.76; f.audio.dispatchEvent(new Event('loadedmetadata'));
  assert.equal(f.seek.disabled, false); assert.equal(f.seek.max, '177.76');
});
test('missing panel leaves native controls available', () => {
  const f = fixture(); f.root.querySelector = (selector) => selector === 'audio' ? f.audio : null;
  initializeAudioPlayer(f.root); assert.equal(f.audio.controls, true); assert.equal(f.audio.hidden, false);
});
test('play, pause, completion and repeated initialization preserve state and one handler', async () => {
  const f = fixture(); initializeAudioPlayer(f.root); initializeAudioPlayer(f.root);
  await click(f.toggle); assert.equal(f.audio.calls, 1); assert.equal(f.root.dataset.playing, 'true');
  assert.equal(f.toggle.attrs['aria-label'], 'Приостановить');
  await click(f.toggle); assert.equal(f.audio.paused, true); assert.equal(f.toggle.attrs['aria-label'], 'Воспроизвести');
  await click(f.toggle); f.audio.ended = true; f.audio.paused = true; f.audio.dispatchEvent(new Event('ended'));
  assert.equal(f.root.dataset.playing, 'false'); assert.equal(f.toggle.attrs['aria-label'], 'Воспроизвести');
});
test('seek updates media time without starting playback and clamps out-of-range input', () => {
  const f = fixture(); initializeAudioPlayer(f.root); f.audio.duration = 180;
  f.seek.value = '90'; f.seek.dispatchEvent(new Event('input'));
  assert.equal(f.audio.currentTime, 90); assert.equal(f.audio.calls, 0); assert.equal(f.time.textContent, '1:30 / 3:00');
  assert.equal(f.seek.styles['--audio-progress'], '50%');
  f.seek.value = '999'; f.seek.dispatchEvent(new Event('input')); assert.equal(f.audio.currentTime, 180);
  f.seek.value = 'NaN'; f.seek.dispatchEvent(new Event('input')); assert.equal(f.audio.currentTime, 180);
});
test('rejected play is reported and can be retried', async () => {
  const f = fixture(); f.audio.play = () => Promise.reject(new Error('NotAllowedError'));
  initializeAudioPlayer(f.root); await click(f.toggle);
  assert.equal(f.root.dataset.playing, 'false'); assert.equal(f.toggle.disabled, false);
  assert.ok(f.status.classes.has('audio-status-error'));
  f.audio.play = () => { f.audio.start(); return Promise.resolve(); }; await click(f.toggle);
  assert.equal(f.root.dataset.playing, 'true'); assert.equal(f.status.textContent, '');
});
test('pause while play is pending prevents late playback and drops its old rejection', async () => {
  const f = fixture(); let reject;
  f.audio.play = () => new Promise((_resolve, fail) => { reject = fail; });
  initializeAudioPlayer(f.root); await click(f.toggle); await click(f.toggle);
  f.audio.start(); assert.equal(f.audio.paused, true);
  reject(new Error('AbortError')); await Promise.resolve(); assert.equal(f.status.textContent, '');
});
test('media failure stops playback and exposes a readable error', async () => {
  const f = fixture(); initializeAudioPlayer(f.root); await click(f.toggle);
  f.audio.duration = 180;
  f.audio.dispatchEvent(new Event('error'));
  f.audio.dispatchEvent(new Event('timeupdate'));
  assert.equal(f.audio.paused, true); assert.equal(f.toggle.disabled, true); assert.equal(f.seek.disabled, true);
  assert.ok(f.status.classes.has('audio-status-error')); assert.match(f.status.textContent, /недоступно/);
  assert.equal(f.backward.disabled, true); assert.equal(f.forward.disabled, true); assert.equal(f.speed.disabled, true);
});

test('system media controls can resume paused playback after a completed UI request', async () => {
  const f = fixture(); initializeAudioPlayer(f.root);
  await click(f.toggle); await click(f.toggle);
  f.audio.start();
  assert.equal(f.audio.paused, false);
  assert.equal(f.root.dataset.playing, 'true');
  assert.equal(f.toggle.attrs['aria-label'], 'Приостановить');
});

test('skip controls wait for metadata and clamp to the recording boundaries without starting playback', async () => {
  const f = fixture(); initializeAudioPlayer(f.root);
  assert.equal(f.backward.disabled, true); assert.equal(f.forward.disabled, true);
  await click(f.forward); assert.equal(f.audio.currentTime, 0); assert.equal(f.audio.calls, 0);
  f.audio.duration = 30; f.audio.dispatchEvent(new Event('loadedmetadata'));
  assert.equal(f.backward.disabled, false); assert.equal(f.forward.disabled, false);
  f.audio.currentTime = 4;
  await click(f.backward); assert.equal(f.audio.currentTime, 0);
  f.audio.currentTime = 28;
  await click(f.forward); assert.equal(f.audio.currentTime, 30);
  assert.equal(f.time.textContent, '0:30 / 0:30'); assert.equal(f.seek.value, '30');
  assert.equal(f.audio.paused, true); assert.equal(f.audio.calls, 0);
});

test('ten-second skips preserve playback and keep the progress control synchronized', async () => {
  const f = fixture(); f.audio.duration = 100; f.audio.currentTime = 30;
  initializeAudioPlayer(f.root); initializeAudioPlayer(f.root);
  await click(f.toggle); await click(f.backward);
  assert.equal(f.audio.currentTime, 20); assert.equal(f.audio.paused, false);
  assert.equal(f.seek.styles['--audio-progress'], '20%');
  await click(f.forward); assert.equal(f.audio.currentTime, 30); assert.equal(f.audio.calls, 1);
});

test('speed cycles through 1, 1.25 and 1.5 without loading media or changing playback position', async () => {
  const f = fixture(); initializeAudioPlayer(f.root); initializeAudioPlayer(f.root);
  f.audio.currentTime = 12;
  for (const rate of [1.25, 1.5, 1]) {
    await click(f.speed);
    assert.equal(f.audio.playbackRate, rate);
    assert.equal(f.speed.attrs['aria-label'], `Скорость ${rate}×. Изменить скорость воспроизведения`);
    assert.equal(f.rateIcons.find(icon => !icon.hidden).dataset.audioRate, String(rate));
    assert.equal(f.audio.currentTime, 12); assert.equal(f.audio.paused, true); assert.equal(f.audio.calls, 0);
  }
  await click(f.toggle); await click(f.speed);
  assert.equal(f.audio.playbackRate, 1.25); assert.equal(f.audio.paused, false); assert.equal(f.audio.calls, 1);
});

test('external rate changes update the accessible label and visible speed, including unsupported icon values', () => {
  const f = fixture(); initializeAudioPlayer(f.root);
  f.audio.playbackRate = 1.5; f.audio.dispatchEvent(new Event('ratechange'));
  assert.equal(f.rateIcons.find(icon => !icon.hidden).dataset.audioRate, '1.5');
  f.audio.playbackRate = 2; f.audio.dispatchEvent(new Event('ratechange'));
  assert.equal(f.rateLabel.hidden, false); assert.equal(f.rateLabel.textContent, '2×');
  assert.equal(f.rateIcons.every(icon => icon.hidden), true);
  assert.match(f.speed.attrs['aria-label'], /2×/);
});

test('media errors prevent further skipping or speed changes', async () => {
  const f = fixture(); f.audio.duration = 100; f.audio.currentTime = 40;
  initializeAudioPlayer(f.root); f.audio.dispatchEvent(new Event('error'));
  await click(f.forward); await click(f.backward); await click(f.speed);
  assert.equal(f.audio.currentTime, 40); assert.equal(f.audio.playbackRate, 1);
  assert.match(f.status.textContent, /недоступно/);
});
