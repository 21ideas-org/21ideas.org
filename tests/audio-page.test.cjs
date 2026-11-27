const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { mkdtempSync, readFileSync, rmSync } = require('node:fs');
const { tmpdir } = require('node:os');
const path = require('node:path');
const test = require('node:test');

test('Hugo renders audio only on the published Russian chapters, before its text', () => {
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
    const chapter2 = page('suverenitet-posredstvom-matematiki/glava-2');
    assert.match(chapter2, /data-audio-player/);
    assert.match(chapter2, /src=https:\/\/audio\.21ideas\.org\/podcasts\/books\/sovereignty-through-math\/chapter-02\.mp3/);
    assert.match(chapter2, /data-audio-duration=956/);
    assert.match(chapter2, /class=audio-heading>Финансовый атеизм<\/p>/);
    assert.match(chapter2, /0:00 \/ 15:56/);
    assert.match(chapter2, /<audio controls preload=none/);
    assert.ok(chapter2.indexOf('<h1>') < chapter2.indexOf('data-audio-player'));
    assert.ok(chapter2.indexOf('data-audio-player') < chapter2.indexOf('<article'));
    assert.match(chapter2, /audio-player-init[^"\s<>]*\.js/);
    const chapter3 = page('suverenitet-posredstvom-matematiki/glava-3');
    assert.match(chapter3, /data-audio-player/);
    assert.match(chapter3, /src=https:\/\/audio\.21ideas\.org\/podcasts\/books\/sovereignty-through-math\/chapter-03\.mp3/);
    assert.match(chapter3, /data-audio-duration=739/);
    assert.match(chapter3, /class=audio-heading>Доверчивость<\/p>/);
    assert.match(chapter3, /0:00 \/ 12:19/);
    assert.match(chapter3, /<audio controls preload=none/);
    assert.ok(chapter3.indexOf('<h1>') < chapter3.indexOf('data-audio-player'));
    assert.ok(chapter3.indexOf('data-audio-player') < chapter3.indexOf('<article'));
    const chapter4 = page('suverenitet-posredstvom-matematiki/glava-4');
    assert.match(chapter4, /data-audio-player/);
    assert.match(chapter4, /src=https:\/\/audio\.21ideas\.org\/podcasts\/books\/sovereignty-through-math\/chapter-04\.mp3/);
    assert.match(chapter4, /data-audio-duration=727/);
    assert.match(chapter4, /class=audio-heading>Непорочное зачатие<\/p>/);
    assert.match(chapter4, /0:00 \/ 12:07/);
    assert.match(chapter4, /<audio controls preload=none/);
    assert.ok(chapter4.indexOf('<h1>') < chapter4.indexOf('data-audio-player'));
    assert.ok(chapter4.indexOf('data-audio-player') < chapter4.indexOf('<article'));
    const chapter5 = page('suverenitet-posredstvom-matematiki/glava-5');
    assert.match(chapter5, /data-audio-player/);
    assert.match(chapter5, /src=https:\/\/audio\.21ideas\.org\/podcasts\/books\/sovereignty-through-math\/chapter-05\.mp3/);
    assert.match(chapter5, /data-audio-duration=483/);
    assert.match(chapter5, /class=audio-heading>Proof of Work<\/p>/);
    assert.match(chapter5, /0:00 \/ 8:03/);
    assert.match(chapter5, /<audio controls preload=none/);
    assert.ok(chapter5.indexOf('<h1>') < chapter5.indexOf('data-audio-player'));
    assert.ok(chapter5.indexOf('data-audio-player') < chapter5.indexOf('<article'));
    for (const url of ['suverenitet-posredstvom-matematiki/glava-6',
      'en/suverenitet-posredstvom-matematiki/glava-5',
      'en/suverenitet-posredstvom-matematiki/glava-4',
      'en/suverenitet-posredstvom-matematiki/glava-3',
      'en/suverenitet-posredstvom-matematiki/glava-2',
      'en/suverenitet-posredstvom-matematiki/glava-1', 'suverenitet-posredstvom-matematiki']) {
      const html = page(url);
      assert.doesNotMatch(html, /data-audio-player|audio-player[^"\s<>]*\.(?:css|js)/);
    }
  } finally {
    rmSync(destination, { recursive: true, force: true });
  }
});
