---
title: "Полная история консенсус-форков Биткоина"
h1: "Полная история консенсус-форков Биткоина"
cover: /img/forks-01.jpg
tags: ["bitcoin", "history", "softfork", "hardfork", "consensus", "blockchain", "chainsplit"]
description: ""
url: bitcoin-forks
date: 2017-12-28
bookFlatSection: false
bookToc: false
weight: 53
---

## Обзор

В этой статье мы перечислим 19 изменений правил консенсуса Биткоина (или 18, поскольку одно из них случайно "провалилось"), что представляет собой, по нашему мнению, почти все значительные события такого рода в истории Биткоина. По крайней мере три из этих инцидентов привели к заметному разделению цепочки, длившемуся примерно 51, 24 и 6 блоков, в 2010, 2013 и 2015 годах соответственно.

{{< hint btc >}}
Перевод статьи, опубликованной в [блоге BitMEX Research](https://blog.bitmex.com/bitcoins-consensus-forks/). Позже статья была [обновлена](https://blog.bitmex.com/a-complete-history-of-bitcoins-consensus-forks-2022-update/). Обновленный список включает в себя [инцидент, связанный с безопасностью](https://bitcoincore.org/en/2018/09/20/notice/), 2018 года и [активацию Taproot](https://en.bitcoin.it/wiki/BIP_0341) в 2021.

Поддержать проект](/contribute/).
{{< /hint >}}

## Терминология

<table>
<tbody>
<tr bgcolor="#526482">
<td width="25%"><span style="color: white;"><strong>Термин</strong></span></td>
<td width="75%"><span style="color: white;"><strong>Определение</strong></span></td>
</tr>
<tr>
<td>Разделение цепочки (Chainsplit)</td>
<td style="text-align: left;">Разделение блокчейна, в результате которого образуются две отдельные цепочки, имеющие общего предка. Это может быть вызвано либо хардфорком, либо софтфорком, либо ни тем, ни другим.</td>
</tr>
<tr bgcolor="#c2d1f0">
<td colspan="2"> <strong>Изменение правил консенсуса</strong></td>
</tr>
<tr>
<tr bgcolor="#FFFFFF">
<td> Хардфорк</td>
<td>
<p style="text-align: left;">Изменение правил консенсуса в отношении валидности блоков, в результате чего некоторые блоки, ранее считавшиеся недействительными, теперь считаются действительными.</p>
<p style="text-align: left;">Существующие узлы должны обновиться, чтобы следовать новой цепочке после хардфорка.</p>
</td>
</tr>
<tr>
<td> Софтфорк</td>
<td>
<p style="text-align: left;">Изменение правил консенсуса в отношении валидности блоков, в результате чего некоторые блоки, ранее считавшиеся действительными, теперь считаются недействительными.</p>
<p style="text-align: left;">Существующие узлы не обязательно должны обновляться, чтобы следовать новой цепочке после софтфорка.</p>
</td>
</tr>
</tbody>
</table>

Примечание: считается, что эти термины возникли в [апреле 2012](https://gist.github.com/gavinandresen/2355445) и формализованы в [BIP99](https://github.com/bitcoin/bips/blob/master/bip-0099.mediawiki) и [BIP123](https://github.com/bitcoin/bips/blob/master/bip-0123.mediawiki).

## Список консенсус-форков Биткоина

<table style="width: 100%;">
<tbody>
<tr bgcolor="#526482">
<td style="width: 10%;" width="10%"><span style="color: white;"><strong>Дата</strong></span></td>
<td style="width: 10%;" width="10%"><span style="color: white;"><strong>Высота блока при активации</strong></span></td>
<td style="width: 10%;" width="10%"><span style="color: white;"><strong>Номер BIP или версия программного обеспечения</strong></span></td>
<td style="width: 29%;" width="29%"><span style="color: white;"><strong>Описание</strong></span></td>
<td style="width: 12%;" width="12%"><span style="color: white;"><strong>Тип</strong></span></td>
<td style="width: 29%;" width="29%"><span style="color: white;"><strong>Результаты</strong></span></td>
</tr>
<tr>
<tr bgcolor="#FFFFFF">
<td style="width: 10%;">28 июля 2010</td>
<td style="text-align: right; width: 10%;">— <sup>1</sup></td>
<td style="width: 10%;"><a href="[https://en.bitcoin.it/wiki/Common_Vulnerabilities_and_Exposures#CVE-2010-5141](view-source:https://en.bitcoin.it/wiki/Common_Vulnerabilities_and_Exposures#CVE-2010-5141)">0.3.5</a></td>
<td style="width: 29%;">Отключен опкод OP_RETURN, исправлена критическая ошибка, позволявшая любому желающему потратить любой биткоин.</td>
<td style="width: 12%;">Софтфорк</td>
<td style="width: 29%;" width="151">При обновлении не было обнаружено никаких проблем.</td>
</tr>
<td style="width: 10%;" rowspan="2">31 июля 2010</td>
<td style="text-align: right; width: 10%;" rowspan="2">— <sup>1</sup></td>
<td style="width: 10%;" rowspan="2"><a href="[https://github.com/bitcoin/bitcoin/commit/a75560d828464c3f1138f52cf247e956fc8f937d](view-source:https://github.com/bitcoin/bitcoin/commit/a75560d828464c3f1138f52cf247e956fc8f937d)">0.3.6</a></td>
<td style="width: 29%;">Отключены опкоды OP_VER и OP_VERIF<a href="[https://github.com/bitcoin/bitcoin/commit/a75560d828464c3f1138f52cf247e956fc8f937d#diff-8458adcedc17d046942185cb709ff5c3L109](view-source:https://github.com/bitcoin/bitcoin/commit/a75560d828464c3f1138f52cf247e956fc8f937d#diff-8458adcedc17d046942185cb709ff5c3L109)"></a>. <sup>3</sup></td>
<td style="width: 12%;">Софтфорк</td>
<td style="width: 29%;" rowspan="2">У некоторых пользователей возникли проблемы с обновлением, и было рекомендовано отключать узлы, если они не могут быть обновлены. <sup>2</sup></td>
</tr>
<tr bgcolor="#F2F7FF">
<td style="width: 29%;">Добавлены функции OP_NOP.</td>
<td style="width: 12%;">Хардфорк</td>
</tr>
<tr>
<tr bgcolor="#FFFFFF">
<td style="width: 10%;">1 августа 2010</td>
<td style="text-align: right; width: 10%;">— <sup>1</sup></td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bitcoin/commit/73aa262647ff9948eaf95e83236ec323347e95d0](view-source:https://github.com/bitcoin/bitcoin/commit/73aa262647ff9948eaf95e83236ec323347e95d0)">0.3.7</a></td>
<td style="width: 29%;">Разделена проверка <a href="[https://github.com/bitcoin/bitcoin/commit/6ff5f718b6a67797b2b3bab8905d607ad216ee21#diff-8458adcedc17d046942185cb709ff5c3L1135](view-source:https://github.com/bitcoin/bitcoin/commit/6ff5f718b6a67797b2b3bab8905d607ad216ee21#diff-8458adcedc17d046942185cb709ff5c3L1135)">scriptSig и scriptPubKey</a>. Исправлена критическая ошибка, позволявшая любому желающему потратить любой биткоин.</td>
<td style="width: 12%;">Хардфорк</td>
<td style="width: 29%;">При обновлении не было обнаружено никаких проблем.</td>
</tr>
<td style="width: 10%;" rowspan="2">15 августа 2010</td>
<td style="text-align: right; width: 10%;" rowspan="2">74 638</td>
<td style="width: 10%;" rowspan="2"><a href="[https://github.com/bitcoin/bitcoin/commit/08fee75201e82f2e34fcc1549ee8edd152f5d040](view-source:https://github.com/bitcoin/bitcoin/commit/08fee75201e82f2e34fcc1549ee8edd152f5d040)">0.3.10</a></td>
<td style="width: 29%;">Исправление ошибки переполнения значения суммы на выходе после инцидента с тратой 184,5 миллиардов биткоинов. 0,5 BTC, которые были входом в транзакцию, остаются <a href="[https://blockchain.info/address/17TASsYPbdLrJo3UDxFfCMu5GXmxFwVZSW](view-source:https://blockchain.info/address/17TASsYPbdLrJo3UDxFfCMu5GXmxFwVZSW)">неизрасходованными</a> по сей день.</td>
<td style="width: 12%;">Софтфорк</td>
<td style="width: 29%;" rowspan="2">Произошло разделение цепочки.  Примерно через пять часов после инцидента было выпущено исправление, клиент 0.3.10. Считается, что в "плохой" цепочке был сгенерирован <a href="[https://bitcointalk.org/index.php?topic=823.msg9734#msg9734](view-source:https://bitcointalk.org/index.php?topic=823.msg9734#msg9734)">51 блок</a>, прежде чем &#8220;хорошая&#8221; цепочка вернула себе лидерство в PoW.</td>
</tr>
<tr bgcolor="#F2F7FF">
<td style="width: 29%;">Отключен опкод OP_CAT, что устранило вектор DoS-атаки, а также отключены 14 <a href="[https://github.com/bitcoin/bitcoin/commit/4bd188c4383d6e614e18f79dc337fbabe8464c82#diff-8458adcedc17d046942185cb709ff5c3R94](view-source:https://github.com/bitcoin/bitcoin/commit/4bd188c4383d6e614e18f79dc337fbabe8464c82#diff-8458adcedc17d046942185cb709ff5c3R94)">других функций</a>.</td>
<td style="width: 12%;">Софтфорк</td>
</tr>
<tr>
<tr bgcolor="#FFFFFF">
<td style="width: 10%;">7 сентября 2010</td>
<td style="text-align: right; width: 10%;">— <sup>1</sup></td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bitcoin/commit/8c9479c6bbbc38b897dc97de9d04e4d5a5a36730](view-source:https://github.com/bitcoin/bitcoin/commit/8c9479c6bbbc38b897dc97de9d04e4d5a5a36730)">0.3.12</a></td>
<td style="width: 29%;">Некорректное добавление лимита в 20 000 операций подписи. Это некорректное ограничение существует до сих пор.</td>
<td style="width: 12%;">Софтфорк</td>
<td style="width: 29%;">При обновлении не было обнаружено никаких проблем.</td>
</tr>
<tr bgcolor="#F2F7FF">
<td style="width: 10%;">12 сентября 2010</td>
<td style="text-align: right; width: 10%;">79 400</td>
<td style="width: 10%;">—</td>
<td style="width: 29%;">
<p style="text-align: left;">Добавление ограничения на размер блока в 1 МБ.</p>
<p style="text-align: left;">Коммит &#8220;MAX_BLOCK_SIZE = 1000000&#8221; <a href="[https://github.com/bitcoin/bitcoin/blob/a30b56ebe76ffff9f9cc8a6667186179413c6349/main.h#L18](view-source:https://github.com/bitcoin/bitcoin/blob/a30b56ebe76ffff9f9cc8a6667186179413c6349/main.h#L18)">был сделан</a> 15 июля 2010 года, который был представлен в версии 0.3.1 rc1 <a href="[https://github.com/bitcoin/bitcoin/commit/9d2174b6f5f3fac2463c7ebc2dbb9004b3740d23](view-source:https://github.com/bitcoin/bitcoin/commit/9d2174b6f5f3fac2463c7ebc2dbb9004b3740d23)">19 июля 2010 года</a>. <a href="[https://github.com/bitcoin/bitcoin/commit/8c9479c6bbbc38b897dc97de9d04e4d5a5a36730](view-source:https://github.com/bitcoin/bitcoin/commit/8c9479c6bbbc38b897dc97de9d04e4d5a5a36730)"> Коммит</a>, вводящий правило 1 МБ, был сделан 7 сентября 2010 года и активирован в блоке 79 400. 20 сентября 2010 года Сатоши <a href="[https://github.com/bitcoin/bitcoin/commit/172f006020965ae8763a0610845c051ed1e3b522](view-source:https://github.com/bitcoin/bitcoin/commit/172f006020965ae8763a0610845c051ed1e3b522)">удалил</a> эту логику активации, но сохранил ограничение в 1 МБ.</p>
</td>
<td style="width: 12%;">Софтфорк</td>
<td style="width: 29%;">При обновлении не было обнаружено никаких проблем.</td>
</tr>
<tr>
<td style="width: 10%;">15 марта 2012</td>
<td style="text-align: right; width: 10%;">171 193</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki)">BIP30</a></td>
<td style="width: 29%;">Запрещены транзакции с одинаковым TXID, если только более старый UTXO не был полностью израсходован. В <a href="[https://github.com/bitcoin/bitcoin/commit/ab91bf39b7c11e9c86bb2043c24f0f377f1cf514](view-source:https://github.com/bitcoin/bitcoin/commit/ab91bf39b7c11e9c86bb2043c24f0f377f1cf514)">сентябре 2012 года</a> это правило было применено ко всем блокам, кроме 91 842 и 91 880, которые нарушали это правило.</td>
<td style="width: 12%;">Софтфорк</td>
<td style="width: 29%;">Это был софтфорк, запланированный на определенную дату. При обновлении не было обнаружено никаких проблем.</td>
</tr>
<tr bgcolor="#F2F7FF">
<td style="width: 10%;">1 апреля 2012</td>
<td style="text-align: right; width: 10%;">173 805</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0016.mediawiki)">BIP16</a></td>
<td style="width: 29%;">Активация Pay-to-script hash (P2SH) позволила отправлять транзакции на хэш скрипта (адреса, начинающиеся с 3), а не только на хэш публичного ключа (адреса, начинающиеся с 1).</td>
<td style="width: 12%;">Софтфорк</td>
<td style="width: 29%;">Порог активации софтфорка в 55% узлов, поддерживающих обновление (550 блоков за неделю, то есть приблизительно из последней 1 000 блоков), не был преодолен к 1 февраля 2012. Майнеры <a href="[https://bitcointalk.org/index.php?topic=66514.0;all](view-source:https://bitcointalk.org/index.php?topic=66514.0;all)">обновлялись недостаточно быстро</a>, поэтому точка активации была отложена до 1 апреля в версии 0.6.0 rc2. Майнеры, которые использовали 0.6.0 rc1 и не обновились, активировали софтфорк раньше времени и <a href="[https://bitcointalk.org/index.php?topic=63165.60](view-source:https://bitcointalk.org/index.php?topic=63165.60)">застряли на блоке 170 060</a>, когда была добыта недействительная, по мнению их узлов, транзакция. После активации также возникли проблемы, так как оставшиеся 45 % майнеров добывали недействительные блоки в течение нескольких месяцев после софтфорка.</td>
</tr>
<tr>
<td style="width: 10%;">24 марта 2013</td>
<td style="text-align: right; width: 10%;"> 227 835</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0034.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0034.mediawiki)">BIP34</a></td>
<td style="width: 29%;">Добавление требования, чтобы coinbase-транзакция включала высоту блока.</td>
<td style="width: 12%;">Софтфорк</td>
<td style="width: 29%;">Установлен порог активации в 95% узлов. Обновление прошло удачно.</td>
</tr>
<tr bgcolor="#F2F7FF">
<td style="width: 10%;">11 марта 2013</td>
<td style="text-align: right; width: 10%;">225 430</td>
<td style="width: 10%;"><a href="[https://bitcoin.org/en/alert/2013-03-11-chain-fork](view-source:https://bitcoin.org/en/alert/2013-03-11-chain-fork)">0.8.0</a></td>
<td style="width: 29%;" width="236">Это был незапланированный хардфорк, вызванный переходом с Berkeley DB на LevelDB, которая не использует ограничение в 10 000 блокировок в параметрах базы данных по умолчанию, в отличие от BDB. Это вызвало разделение цепочки 11 марта 2013 года, хотя программное обеспечение, вызвавшее ошибку, было выпущено на 20 дней раньше, 20 февраля 2013 года. Изменение было отменено, так как пользователи Биткоина и майнеры вернулись к правилам из версии 0.7.2.</td>
<td style="width: 12%;">Без изменений в правилах консенсуса</td>
<td style="width: 29%;">Произошло разделение цепочки как минимум на <a href="[https://bitcoinmagazine.com/articles/bitcoin-network-shaken-by-blockchain-fork-1363144448/](view-source:https://bitcoinmagazine.com/articles/bitcoin-network-shaken-by-blockchain-fork-1363144448/)">24</a> блока, причем цепочка 0.8.0 имела максимальное преимущество в 13 блоков. Также произошла <a href="[http://archive.is/64Rkj](view-source:http://archive.is/64Rkj)">успешная двойная трата</a>. Цепочка с оригинальными правилами в конечном итоге вернула себе лидерство в PoW.</td>
</tr>
<tr>
<td style="width: 10%;">18 марта 2013</td>
<td style="text-align: right; width: 10%;">— <sup>1</sup></td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bitcoin/commit/34d62a8efe4c51b2dd73d56fa03001d4accee4ad](view-source:https://github.com/bitcoin/bitcoin/commit/34d62a8efe4c51b2dd73d56fa03001d4accee4ad)">0.8.1</a></td>
<td style="width: 29%;" width="236">Это был временный софтфорк с новым правилом, вводившим ограничение в 4 500 TXID, на которые могут ссылаться входы в блок. Это правило является более строгим, чем ограничение в BDB. Срок действия правила <a href="[https://github.com/bitcoin/bitcoin/commit/8bd02881899bbae2d8e5082081e02c7d577994e5#diff-7ec3c68a81efff79b6ca22ac1f1eabba](view-source:https://github.com/bitcoin/bitcoin/commit/8bd02881899bbae2d8e5082081e02c7d577994e5#diff-7ec3c68a81efff79b6ca22ac1f1eabba)">истек</a> 15 мая 2013 года в день запланированного хардфорка.</td>
<td style="width: 12%;">Софтфорк</td>
<td style="width: 29%;">При обновлении не было обнаружено никаких проблем.</td>
</tr>
<tr bgcolor="#F2F7FF">
<td style="width: 10%;">15 мая 2013 и 16 августа 2013</td>
<td style="text-align: right; width: 10%;"> 252 451 или ранее</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki)">BIP50</a></td>
<td style="width: 29%;">В августе 2013 года был создан блок, нарушающий ограничение блокировок в BDB, которое было ослаблено 15 мая 2013 года.</td>
<td style="width: 12%;">Хардфорк</td>
<td style="width: 29%;">При обновлении не было обнаружено никаких проблем.</td>
</tr>
<tr>
<td style="width: 10%;">4 июля 2015</td>
<td style="text-align: right; width: 10%;"> 363 731</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki)">BIP66</a></td>
<td style="width: 29%;">Обновление вводит строгое кодирование DER, означающее, что Биткоин больше не зависит от OpenSSL при проверке подписей.</td>
<td style="width: 12%;">Софтфорк</td>
<td style="width: 29%;">Установлен порог активации в 95% из последней 1 000 блоков. Произошло разделение цепочки, длившееся шесть блоков, поскольку некоторые майнеры сигнализировали о поддержке BIP66, но не обновились и занимались <a href="[https://blog.bitmex.com/empty-block-data-by-mining-pool/](view-source:https://blog.bitmex.com/empty-block-data-by-mining-pool/)">майнингом пустых блоков</a>. В конце концов цепочка с новыми правилами софтфорка взяла верх.</td>
</tr>
<tr bgcolor="#F2F7FF">
<td style="width: 10%;">14 декабря 2015</td>
<td style="text-align: right; width: 10%;"> 388 380</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki)">BIP65</a></td>
<td style="width: 29%;">Добавлена функция Check Lock Time Verify, позволяющая заблокировать средства до определенного времени в будущем. Это первая новая функция в Биткоине.</td>
<td style="width: 12%;">Софтфорк</td>
<td style="width: 29%;">Успешное обновление с использованием порога 95%.</td>
</tr>
<tr>
<td style="width: 10%;">4 июля 2016</td>
<td style="text-align: right; width: 10%;"> 419 328</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0068.mediawiki)">BIP68</a><br/><a href="[https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki)">BIP112</a><br/><a href="[https://github.com/bitcoin/bips/blob/master/bip-0113.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0113.mediawiki)">BIP113</a></td>
<td style="width: 29%;">
<p style="text-align: left;">Добавлена функция относительного время блокировки, которое позволяет заблокировать выход транзакции на относительный промежуток времени после ее подтверждения.</p>
<p>Добавлен опкод CheckSequenceVerify.</p>
<p style="text-align: left;">Добавлен показатель Median Time Past (MTP) (среднее время добычи последних 11 блоков), который устраняет стимул для майнера использовать временную метку будущего блока для получения большей комиссию за транзакцию.</p>
</td>
<td style="width: 12%;">Софтфорк</td>
<td style="width: 29%;">Успешное обновление с использованием порога 95% и включением versionbits в блок.</td>
</tr>
<tr bgcolor="#F2F7FF">
<td style="width: 10%;">23 июля 2017</td>
<td style="text-align: right; width: 10%;">  477 800</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0091.mediawiki)">BIP91</a></td>
<td style="width: 29%;">Этот временный софтфорк сделал обязательным включение versionbits, сигнализирующее о поддержке обновления SegWit.</td>
<td style="width: 12%;">Софтфорк</td>
<td style="width: 29%;">Софтфорк успешно активировался при 80-процентном пороге майнеров в течение 336 блоков, хотя лишь незначительное количество узлов в сети соблюдали правила BIP91 к концу заданного срока.  Поэтому в этот период риск разделения цепочки был повышенным.</td>
</tr>
<tr>
<td style="width: 10%;">01 августа 2017</td>
<td style="text-align: right; width: 10%;"> 478 479</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0148.mediawiki)">BIP148</a></td>
<td style="width: 29%;">Этот временный софтфорк сделал подачу сигнала о поддержке обновление SegWit обязательной в течение двух недель после 1 августа 2017 года.</td>
<td style="width: 12%;">Софтфорк</td>
<td style="width: 29%;">Софтфорк в назначенный день прошел без проблем, лишь незначительное количество узлов в сети соблюдали правила BIP148 к концу заданного срока. Поэтому в этот период риск разделения цепочки был повышенным.</td>
</tr>
<tr bgcolor="#F2F7FF">
<td style="width: 10%;">24 августа 2017</td>
<td style="text-align: right; width: 10%;"> 481 824</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki)">BIP141</a><br/><a href="[https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki)">BIP143</a><br/><a href="[https://github.com/bitcoin/bips/blob/master/bip-0147.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0147.mediawiki)">BIP147</a></td>
<td style="width: 29%;">Обновление <a href="[https://blog.bitmex.com/the-segwit-transaction-capacity-increase-part-1/](view-source:https://blog.bitmex.com/the-segwit-transaction-capacity-increase-part-1/)">segregated-witness</a> (SegWit).</td>
<td style="width: 12%;">Софтфорк</td>
<td style="width: 29%;">Успешное обновление с использованием порога 95% и включением versionbits в блок.</td>
</tr>
<tr>
<td style="width: 10%;">14 сентября 2017</td>
<td style="width: 10%; text-align: right;">—</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bitcoin/releases/tag/v0.15.0](view-source:https://github.com/bitcoin/bitcoin/releases/tag/v0.15.0)">0.15.0</a></td>
<td style="width: 29%;">Случайно добавлена <a href="[https://bitcoincore.org/en/2018/09/20/notice/](view-source:https://bitcoincore.org/en/2018/09/20/notice/)">критическая ошибка</a>, которая потенциально могла привести к созданию более 21 миллиона биткоинов и DoS-атакам. Она была исправлена через год, 17 сентября 2018 года.</td>
<td style="width: 12%;">Клиент с поддержкой хардфорка</td>
<td style="width: 29%;">Не было создано ни одного блока, который бы использовал ошибку, и поэтому можно сказать, что хардфорка в сети Биткоин не произошло.</td>
</tr>
<tr>
<td style="width: 10%;">14 ноября 2021</td>
<td style="width: 10%; text-align: right;">709 632 </td>
<td style="width: 10%;"><a href="[https://en.bitcoin.it/wiki/BIP_0341](view-source:https://en.bitcoin.it/wiki/BIP_0341)">BIP341</a></td>
<td style="width: 29%;">Обновление Taproot сочетает в себе такие технологии, как подписи Шнорра (<a class="mw-redirect" title="Bip-0340.mediawiki" href="[https://en.bitcoin.it/wiki/Bip-0340.mediawiki](view-source:https://en.bitcoin.it/wiki/Bip-0340.mediawiki)">BIP340</a>) и MAST (<a class="mw-redirect" title="Bip-0114.mediawiki" href="[https://en.bitcoin.it/wiki/Bip-0114.mediawiki](view-source:https://en.bitcoin.it/wiki/Bip-0114.mediawiki)">BIP114</a>, <a class="mw-redirect" title="Bip-0117.mediawiki" href="[https://en.bitcoin.it/wiki/Bip-0117.mediawiki](view-source:https://en.bitcoin.it/wiki/Bip-0117.mediawiki)">BIP117</a>)</td>
<td style="width: 12%;">Софтфорк</td>
<td style="width: 29%;">Этот софтфорк активировался с помощью &#8220;Speedy Trial&#8221;, идеи, <a href="[https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2021-March/018583.html](view-source:https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2021-March/018583.html)">предложенной</a> Расселом О'Коннором для разрешения спора о лучшей методике активации. Был успешно использован 90-процентный порог майнеров в фиксированных окнах по 2 016 блоков. Софтфорк был зафиксирован 12 июня 2021 года на высоте блока 687 283.</td>
</tr>
<tr>
<td style="width: 10%;">2262 год</td>
<td style="width: 10%;">13 440 000</td>
<td style="width: 10%;"><a href="[https://github.com/bitcoin/bips/blob/master/bip-0042.mediawiki](view-source:https://github.com/bitcoin/bips/blob/master/bip-0042.mediawiki)">BIP42</a></td>
<td style="width: 29%;">Исправлена ошибка с ограничением предложения в 21 миллион монет.  Программное обеспечение было обновлено в апреле 2014 года, чтобы исправить эту ошибку, но новое правило не будет применяться до 23 века.</td>
<td style="width: 12%;">Софтфорк</td>
<td style="width: 29%;">Софтфорк пока не действует.</td>
</tr>
</tbody>
</table>

**(Источники: BitMEX Research, GitHub, блокчейн Биткоина)**

### Примечания

1. За исключением ограничения размера блока в 1 МБ, до софтфорка BIP16 2012 года не существовало методики активации, поэтому, если форк произошел гладко, без разделения цепочки, не обязательно указывать конкретную высоту блока или дату, когда произошел консенсус-форк.
2. *“Если вы не можете обновить версию 0.3.6 прямо сейчас, лучше отключите свою ноду биткойна, пока не сделаете это.”* — [Сатоши Накамото](http://archive.is/L7amG)
3. До удаления опкода OP_VER каждое обновление программного обеспечения потенциально могло считаться недетерминированным хардфорком, и они были исключены из этого списка. Если определение хардфорков все же включает это, то это несколько странное определение.
4. В приведенной выше таблице не используются унифицированные термины, поскольку в каждом случае в зависимости от обстоятельств может быть более уместным другое определение даты, когда произошел форк.
5. Некоторые исследователи отмечали, что изменения в протоколе P2P также могут считаться хардфорками, если они делают предыдущие версии программ непригодными для использования, поскольку они больше не могут подключаться к сети. Однако, строго говоря, они не ослабляют правила валидности блоков, и можно синхронизировать старые узлы, создав ретрансляцию через промежуточные версии программного обеспечения. Эти изменения исключены из приведенного выше списка.
6. Некоторые считают [BIP90](https://github.com/bitcoin/bips/blob/master/bip-0090.mediawiki) хардфорком, но поскольку в нем были лишь смягчены правила, связанные с активацией софтфорков, которые произошли в прошлом, он не имеет многих характеристик или рисков, обычно связанных с консенсус-форками. Используя ту же логику, добавление схемы контрольных точек блоков также можно отнести к софтфоркам.
7. В [июле 2010 года](https://github.com/bitcoin/bitcoin/commit/40cd0369419323f8d7385950e20342e998c994e1#diff-623e3fd6da1a45222eeec71496747b31R420) правило выбора цепочки было изменено, чтобы перейти от количества блоков к наибольшему количеству накопленной работы. Технически это не является изменением правил валидности блоков, однако это изменение несет в себе некоторые риски, связанные с изменением правил консенсуса.

## Был ли инцидент 2013 года хардфорком?

По нашему мнению, увеличение лимита блокировок BDB через несколько месяцев после разделения цепочки 11 марта 2013 года было хардфорком. Правило, о котором идет речь, предусматривало ограничение в 10 000 блокировок, которое был увеличено. Правило было смягчено [15 мая 2013 года](https://github.com/bitcoin/bitcoin/commit/8bd02881899bbae2d8e5082081e02c7d577994e5#diff-7ec3c68a81efff79b6ca22ac1f1eabba) в версии программного обеспечения 0.8.1, которая была выпущена [18 марта 2013 года](https://github.com/bitcoin/bitcoin/commit/34d62a8efe4c51b2dd73d56fa03001d4accee4ad). Блок, превышающий этот лимит, в конечном итоге был создан 16 августа 2013 года, поэтому дату хардфорка можно определить либо как 15 мая 2013 года, либо как 16 августа 2013 года.

Некоторые специалисты утверждают, что это не было хардфорком по разным причинам, включая то, что это правило было "квази-недетерминированным" или что можно было вручную изменить параметры конфигурации BDB. Действительно, из-за недетерминированной природы лимита блокировок теоретически возможно иметь локальную систему, настроенную так, что старый лимит блокировок в BDB никогда не был изменен. Таким образом, можно заявить, что в Биткойне "никогда не было хардфорка", следуя строгому определению, которое требует, чтобы хардфорк был детерминированным или, возможно, даже напрямую связанным с данными Биткойна, такими как транзакции или заголовок блока.

Обсуждая этот инцидент, разработчик Биткоина Грегори Максвелл [сказал](https://bitcointalk.org/index.php?topic=702755.msg8116032#msg8116032):

> *Это своего рода путаница, на самом деле можно взять узел до BIP-50 и полностью синхронизировать блокчейн, последний раз я делал это в версии 0.3.24 несколько месяцев назад. Просто он не будет надежно обрабатывать реорганизации с большими блоками, если вы не измените конфигурацию BDB. Так что можно поспорить, является ли это хардфорком, поскольку он квази-недетерминированный. Ранее были исправлены ошибки, из-за которых старые версии застревали и переставали синхронизировать цепочку... Так что я думаю, что согласно действительно строгому определению создания блокчейна, который нарушает правила, предписанные предыдущими версиями, у нас никогда не было хардфорка.*

## Разделение цепочки в июле 2015 года

В приведенном выше списке изменений правил консенсуса есть три инцидента, которые привели к идентифицируемым разделениям цепочки. Самый последний из них произошел 4 июля 2015 года во время софтфорка BIP66.

Сразу после активации BIP66 возникла цепочка из шести orphan-блоков, поскольку один майнер создал недействительный блок, который не был признан недействительным другими майнинговыми пулами, так как они не проверяли новые блоки.

В этом случае некоторые майнеры сигнализировали о поддержке софтфорка BIP66, но на самом деле не обновляли свои узлы, можно сказать, что майнеры давали "ложный сигнал". Если бы майнеры проверяли блоки, они бы обнаружили, что блок недействителен, и отклонили бы его. Вместо этого некоторые майнеры построили блок поверх недействительного, и произошло разделение цепочки.  

Ниже приведена схема, иллюстрирующая эти шесть блоков и разделение цепочки.

{{% image "/img/forks-02.png" %}}
*Графическая схема разделения цепочки в июле 2015 года. (Источник: Blockchain.info [http://archive.is/WqGRp](http://archive.is/WqGRp) и [http://archive.is/LHlF7](http://archive.is/LHlF7))*
{{% /image %}}

**Примечание:** После публикации этого материала на [Bitcoin Wiki](https://en.bitcoin.it/wiki/Consensus_versions) был опубликован альтернативный список версий консенсуса.

**Дисклеймер:** Несмотря на то, что многие утверждения в этом материале снабжены ссылками, мы не гарантируем их точность. Мы могли допустить ошибки или случайно пропустить изменения правил консенсуса в списке. Мы приветствуем исправления от читателей.

### Поддержите переводчика

Поддержать переводчика можно, отправив немного сат в сети Лайтнинг:

{{% image "/img/btclinux-ln-qr.jpg" %}}
`LNURL1DP68GURN8GHJ7MRW9E6XJURN9UH8WETVDSKKKMN0WAHZ7MRWW4EXCUP0X9UX2VENXDJN2CTRXSUN2VE3XGCRQPNAPC6`
{{% /image %}}