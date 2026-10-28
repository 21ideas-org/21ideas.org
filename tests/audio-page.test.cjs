const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { mkdtempSync, readFileSync, rmSync } = require('node:fs');
const { tmpdir } = require('node:os');
const path = require('node:path');
const test = require('node:test');

test('Hugo renders audio only on the published Russian chapter, before its text', () => {
  const destination = mkdtempSync(path.join(tmpdir(), '21ideas-audio-'));
  try {
    execFileSync('hugo', ['--minify', '--destination', destination], {
      cwd: path.join(__dirname, '..'), stdio: 'pipe'
    });
    const page = url => readFileSync(path.join(destination, url, 'index.html'), 'utf8');
    const chapter = page('suverenitet-posredstvom-matematiki/glava-1');
    assert.match(chapter, /data-audio-player/);
    assert.match(chapter, /chapter-01-v2\.mp3/);
    assert.match(chapter, /preload=none/);
    assert.match(chapter, /data-audio-duration=528/);
    assert.match(chapter, /8:48/);
    assert.match(chapter, /class=audio-heading>Вся наша жизнь — торговля<\/p>/);
    assert.doesNotMatch(chapter, /Открыть аудиофайл \(MP3\)/);
    assert.match(chapter, /<audio controls/);
    assert.doesNotMatch(chapter, /<audio[^>]*autoplay/);
    assert.match(chapter, /data-audio-controls hidden/);
    assert.ok(chapter.indexOf('<h1>') < chapter.indexOf('data-audio-player'));
    assert.ok(chapter.indexOf('data-audio-player') < chapter.indexOf('<article'));
    assert.match(chapter, /audio-player[^"\s<>]*\.css/);
    assert.match(chapter, /audio-player-init[^"\s<>]*\.js/);
    for (const url of ['suverenitet-posredstvom-matematiki/glava-2',
      'en/suverenitet-posredstvom-matematiki/glava-1', 'suverenitet-posredstvom-matematiki']) {
      const html = page(url);
      assert.doesNotMatch(html, /data-audio-player|audio-player[^"\s<>]*\.(?:css|js)/);
    }
  } finally {
    rmSync(destination, { recursive: true, force: true });
  }
});
