// Adapted from gm-web/src/lib/audio-player.mjs (local snapshot, 2026-10-28).
// Progressive enhancement: keep native controls until our complete panel is initialized.
const clock = (seconds) => {
  const n = Math.max(0, Math.floor(Number.isFinite(seconds) ? seconds : 0));
  return `${Math.floor(n / 60)}:${String(n % 60).padStart(2, '0')}`;
};

/** @param {HTMLElement} root */
export function initializeAudioPlayer(root) {
  if (root.dataset.audioInitialized) return;
  const audio = root.querySelector('audio');
  const panel = /** @type {HTMLElement | null} */ (root.querySelector('[data-audio-controls]'));
  const toggle = /** @type {HTMLButtonElement | null} */ (root.querySelector('[data-audio-toggle]'));
  const seek = /** @type {HTMLInputElement | null} */ (root.querySelector('[data-audio-seek]'));
  const time = root.querySelector('[data-audio-time]');
  const status = /** @type {HTMLElement | null} */ (root.querySelector('[data-audio-status]'));
  const backward = /** @type {HTMLButtonElement | null} */ (root.querySelector('[data-audio-backward]'));
  const forward = /** @type {HTMLButtonElement | null} */ (root.querySelector('[data-audio-forward]'));
  const speed = /** @type {HTMLButtonElement | null} */ (root.querySelector('[data-audio-speed]'));
  const rateLabel = /** @type {HTMLElement | null} */ (root.querySelector('[data-audio-rate-label]'));
  if (!audio || !panel || !toggle || !seek || !time || !status || !backward || !forward || !speed || !rateLabel) return;
  const rateIcons = root.querySelectorAll('[data-audio-rate]');
  const rates = [1, 1.25, 1.5];
  const fallbackDuration = Number(root.dataset.audioDuration);
  let requested = false;
  let attempt = 0;
  let failed = false;
  let pendingAttempt = 0;
  let cancelledPending = 0;

  const duration = () => Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : 0;
  const announce = (message, error = false) => {
    status.textContent = message;
    status.classList.toggle('audio-status-error', error);
  };
  const sync = () => {
    const total = duration();
    const current = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
    const playing = !audio.paused && !audio.ended;
    root.dataset.playing = String(playing);
    toggle.setAttribute('aria-label', playing || requested ? 'Приостановить' : 'Воспроизвести');
    seek.disabled = failed || !total;
    backward.disabled = forward.disabled = seek.disabled;
    speed.disabled = failed;
    seek.max = String(total || fallbackDuration || 1);
    seek.value = String(Math.min(current, total || fallbackDuration || 0));
    seek.setAttribute('aria-valuetext', `${clock(current)} из ${clock(Math.ceil(total || fallbackDuration))}`);
    seek.style.setProperty('--audio-progress', `${total ? Math.min(100, Math.max(0, current / total * 100)) : 0}%`);
    time.textContent = `${clock(current)} / ${clock(Math.ceil(total || fallbackDuration))}`;
    const rate = audio.playbackRate;
    speed.setAttribute('aria-label', `Скорость ${rate}×. Изменить скорость воспроизведения`);
    rateIcons.forEach(icon => { icon.toggleAttribute('hidden', Number(icon.getAttribute('data-audio-rate')) !== rate); });
    rateLabel.hidden = rates.includes(rate);
    rateLabel.textContent = `${rate}×`;
  };

  toggle.addEventListener('click', async () => {
    if (requested || !audio.paused) {
      cancelledPending = pendingAttempt;
      requested = false;
      attempt++;
      audio.pause();
      announce('');
      sync();
      return;
    }
    requested = true;
    const ownAttempt = ++attempt;
    pendingAttempt = ownAttempt;
    cancelledPending = 0;
    announce('Загрузка аудио…');
    sync();
    try {
      await audio.play();
      if (ownAttempt === attempt && requested) announce('');
    } catch {
      if (ownAttempt !== attempt) return;
      requested = false;
      announce('Не удалось запустить аудио. Попробуйте ещё раз.', true);
      sync();
    } finally {
      if (pendingAttempt === ownAttempt) pendingAttempt = 0;
      if (cancelledPending === ownAttempt) cancelledPending = 0;
    }
  });
  seek.addEventListener('input', () => {
    const total = duration();
    if (!total) return;
    const position = Number(seek.value);
    if (!Number.isFinite(position)) return;
    audio.currentTime = Math.max(0, Math.min(total, position));
    sync();
  });
  const skip = (seconds) => {
    const total = duration();
    if (failed || !total) return;
    const current = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
    audio.currentTime = Math.max(0, Math.min(total, current + seconds));
    sync();
  };
  backward.addEventListener('click', () => skip(-10));
  forward.addEventListener('click', () => skip(10));
  speed.addEventListener('click', () => {
    if (failed) return;
    audio.playbackRate = rates[(rates.indexOf(audio.playbackRate) + 1) % rates.length];
    sync();
    announce(`Скорость воспроизведения ${audio.playbackRate}×`);
  });
  audio.addEventListener('play', () => {
    // A cancelled pending play() may still resolve: preserve the listener's pause intent.
    if (failed || cancelledPending) audio.pause();
    else requested = true; // Playback may also be resumed by system media controls.
    sync();
  });
  audio.addEventListener('playing', () => { announce(''); sync(); });
  audio.addEventListener('waiting', () => { if (requested) announce('Загрузка аудио…'); });
  audio.addEventListener('pause', () => { requested = false; sync(); });
  audio.addEventListener('ended', () => { requested = false; announce(''); sync(); });
  audio.addEventListener('error', () => {
    failed = true;
    requested = false;
    attempt++;
    audio.pause();
    toggle.disabled = true;
    announce('Аудио недоступно. Попробуйте обновить страницу позже.', true);
    sync();
    seek.disabled = true;
  });
  for (const event of ['loadedmetadata', 'durationchange', 'timeupdate', 'seeked', 'emptied', 'ratechange']) {
    audio.addEventListener(event, sync);
  }
  sync();
  panel.hidden = false;
  audio.controls = false;
  audio.hidden = true;
  root.dataset.audioInitialized = 'true';
}
