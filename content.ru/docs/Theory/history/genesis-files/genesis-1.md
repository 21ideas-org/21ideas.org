---
title: "Часть I: eCash Дэвида Чаума и зарождение мечты шифропанков"
h1: "Генезис-файлы. Часть I: eCash Дэвида Чаума и зарождение мечты шифропанков"
cover: /img/gf-231.jpeg
tags: ["биткоин", "история", "шифропанки", "генезис"]
description: "Корни Биткоина и других криптовалют лежат в этой более ранней и ориентированной на приватность платежной системе для интернета."
url: gf/genesis-1
aliases: ['/theory-hyperbitcoinization-genesis-files-1-david-chaum']
date: 2018-04-24
bookFlatSection: false
bookToc: true
weight: 2
---

{{< details "Оглавление" "..." >}}
1. [Пролог: День, когда криптография изменилась навсегда](/gf/genesis-intro)

2. [Часть I: eCash Дэвида Чаума и зарождение мечты шифропанков](/gf/genesis-1)

3. [Часть II: Hashcash или как Адам Бэк разработал сердце Биткоина](/gf/genesis-2)

4. [Часть III: Если у Биткоина был прототип, то это были b-money Вэя Дая](/gf/genesis-3)

5. [Часть IV: Создавая Bit Gold, Сабо был в двух шагах от изобретения Биткоина](/gf/genesis-4)

6. [Часть V: Как поиски цифровой наличности привели Хэла Финни к созданию RPOW (и не только)](/gf/genesis-5)
{{< /details >}}

Это – первая публикация в серии материалов, посвященных становлению движения шифропанков. Эти статьи призваны познакомить сообщество с технологиями, предшествующими киберкоммерции, которую мы сегодня наблюдаем. Понимание истории, осознание мотивов и методов достижения целей первопроходцами в области криптографии и информатики, поможет не только пролить свет на возможные варианты дальнейшего развития событий, но и выстроить более эффективные стратегии по защите собственных средств, приватной информации и личностного суверенитета.

{{< hint btc >}}
Перевод подготовлен [Тони⚡️](https://snort.social/p/npub10awzknjg5r5lajnr53438ndcyjylgqsrnrtq5grs495v42qc6awsj45ys7). [Поддержать проект](/contribute/).
{{< /hint >}}

Ознакомиться с прологом к этой серии статей можно здесь:

{{% image "/img/173.jpeg" %}}
_[Генезис-файлы. Пролог: День, когда криптография изменилась навсегда](/gf/genesis-intro)_
{{% /image %}}

Корни Биткоина и других криптовалют лежат в этой более ранней и ориентированной на приватность платежной системе для интернета.

> "Вы можете оплатить доступ к базе данных, купить программное обеспечение или оплатить новостную рассылку по электронной почте, поиграть в компьютерные игры в сети, получить 5 долларов, которые вам задолжал  друг или просто заказать пиццу. Возможности поистине безграничны".

Эта цитата не из видео о Биткоине 2011 года. На самом деле, эта цитата не имеет к  Биткоину никакого отношения. Она даже не из этого тысячелетия. [Цитата](https://chaum.com/ecash/articles/1994/05-27-9420-20World_s20first20electronic20cash20payment20over20computer20networks.pdf) принадлежит криптографу доктору Дэвиду Чауму, выступавшему на [первой конференции CERN](http://www94.web.cern.ch/WWW94/welcome.html) в Женеве в 1994 году. Он имеет в виду eCash.

Если у движения шифропанков есть праотец, то им является бородатый Чаум. Сказать, что криптограф, которому сейчас 62 или 63 года (он не раскрывает свой точный возраст), опередил свое время — преуменьшение. До того, как большинство людей услышали об интернете, до того, как в большинстве домов были персональные компьютеры, до того, как Эдвард Сноуден, Джейкоб Аппельбаум или Павел Дуров даже родились, Чаум уже заботился о будущем приватности в сети.

> "Вы должны сообщить своим читателям, насколько это важно. Киберпространство не имеет физических границ. [...] Здесь нет стен... это иное, страшное, странное место, а привязка к личности превращает его в кошмарный паноптикум. Ясно? Все, что вы делаете, может стать известно кому угодно, может быть записано навсегда. Это противоречит ключевом принципу, лежащему в основе механизмов демократии".
>
> — Дэвид Чаум в [интервью](https://www.wired.com/1994/12/emoney/) Wired

Чаум, который начал свою карьеру в качестве профессора компьютерных наук в Университете Беркли, был не просто сторонником приватности онлайн. Он разработал инструменты, чтобы воплотить ее в реальность. Впервые опубликованная в 1981 году статья Чаума "[Неотслеживаемая электронная почта, обратные адреса и цифровые псевдонимы](https://chaum.com/publications/chaum-mix.pdf)" заложила основу для исследований зашифрованной связи через интернет, что в конечном итоге привело к созданию технологий сохранения приватности, таких как [Tor](https://t.me/bitcoin21ideas/1761).

Но приватность повседневного общения не занимала первое место в списке приоритетов Чаума. Его идея, пожалуй, была более амбициозной. Профессор из Беркли хотел создать цифровые деньги, сохраняющие приватность.

_"Выбор между хранением информации в руках отдельных лиц или организаций делается каждый раз, когда какое-либо правительство или бизнес решают автоматизировать очередной набор транзакций_. _Устройство общества следующего столетия может зависеть от того, какой подход будет преобладать". — Чаум в_ [_Scientific American_](https://chaum.com/publications/ScientificAmerican-AEP.pdf) _в 1992 году._

За десять лет до этого, к 1982 году, Чаум уже разгадал головоломку и опубликовал ее решение в своей второй крупной работе: "Слепые подписи для неотслеживаемых платежей". В то время, когда современные ветераны Биткоина, такие как доктор Питер Вюлле, Эрик Вурхис или Питер Тодд, еще не родились на свет, криптограф уже разработал решение для создания анонимной платежной системы для интернета.

# Слепые подписи

В основе системы цифровых денег Чаума лежит его идея "слепых подписей".

Чтобы понять слепые подписи, важно сначала вспомнить, как работает криптография с открытым ключом и, в частности, что такое (обычные) криптографические подписи.

В криптографии с открытым ключом используются пары ключей. Такая пара состоит из публичного ключа, представляющего собой случайную строку чисел, математически выведенную из другой, действительно случайной строки чисел: приватного ключа. С помощью приватного ключа сгенерировать публичный ключ тривиально. Но при наличии только публичного ключа создать приватный ключ практически невозможно — это улица с односторонним движением.

Криптографию с открытым ключом можно использовать для установления приватного соединения между двумя людьми — в академических кругах, обычно именуемых "Алиса" и "Боб", — которые делятся друг с другом только своими публичными ключами. Их приватные ключи остаются сокрытыми.

Но личное общение — это еще не все, на что способны Алиса и Боб. Алиса (как и Боб) также может криптографически "подписывать" любую часть данных. Для этого Алисе необходимо математически объединить свой приватный ключ с подписываемыми данными. Результатом станет еще одна, казалось бы, случайная строка чисел, известная как "подпись". Опять же, воссоздать приватный ключ Алисы из подписи (с данными или без них) невозможно. Это все еще улица с односторонним движением.

Интересная особенность этой подписи заключается в том, что Боб (или кто угодно) может проверить подпись, используя публичный ключ Алисы. Таким образом Боб может убедиться, что именно Алиса создала подпись своим приватным ключом (в комбинации с дополнительными данными). Это, в свою очередь, может означать все, что Алисе и Бобу заблагорассудится. Например, это может означать, что Алиса согласна с содержанием данных (так же, как это подтверждает обычная подпись на документе).

Слепая подпись делает все это еще на порядок сложнее. На этот раз Боб сначала генерирует случайное число, называемое "nonce", и математически объединяет это число с данными. Это "перемешивает" часть данных, чтобы они походили на очередную случайную строку чисел. Затем Боб может передать данные Алисе на подпись. Алиса не может определить, как выглядят исходные данные, поэтому она подписывает их вслепую. Результатом является "слепая подпись".

Интересно, что эта слепая подпись связана не только с ключами Алисы (как и любая ее подпись), но и с зашифрованной информацией. Эта же слепая подпись также связана с оригинальными, не шифрованными данными. Используя только публичный ключ Алисы, любой может убедиться, что Алиса подписала перемешанную версию исходных данных, включая, конечно, саму Алису, если она сможет увидеть исходные данные позже.

# eCash

Эта схема слепой подписи — хитрость, которую Чаум использовал для создания системы цифровых денег.

В качестве примера, представим, что Алиса из приведенного выше примера на самом деле — это банк _Alice Bank_. Обычный банк, как и большинство привычных нам банков, где клиенты открывают счета с депозитами, например, в долларах США.

Допустим, у Alice Bank четыре клиента: Боб, Кэрол, Дэн и Эрин. Допустим, Боб хочет купить что-то у Кэрол.

Во-первых, Боб запрашивает "вывод средств" из Alice Bank (В идеале, он уже вывел средства ранее — но пока это не важно). Чтобы вывести средства, Боб фактически сам создает "цифровые банкноты" в виде уникальных чисел — "серийных номеров". Кроме того, он перемешивает эти банкноты описанным выше способом. Эти перемешанные банкноты отправляются в Alice Bank.

Получив перемешанные банкноты от Боба, Alice Bank вслепую подписывает каждую из перемешанных банкнот и отправляет их обратно Бобу. За каждую из подписанных перемешанных банкнот, которую он отправляет обратно, Alice Bank вычитает один доллар с банковского счета Боба.

Теперь, поскольку Alice Bank вслепую подписал перемешанные банкноты, его подпись также связана с оригинальными, неперемешанными банкнотами. Итак, Боб теперь может использовать оригинальные банкноты, чтобы заплатить Кэрол, просто отправив их ей.

Когда Кэрол получает банкноты, она должна переслать их в Alice Bank. Затем Alice Bank проверяет, что он действительно вслепую подписал каждую из банкнот, что возможно благодаря слепым подписям: они связаны с его собственными ключами. Alice Bank также проверяет, что те же банкноты (серийные номера) еще не были депонированы кем-то другим, чтобы убедиться, что они не были потрачены дважды.

Когда банкноты проверены, Alice Bank добавляет эквивалентное количество долларов на банковский баланс Кэрол и сообщает об этом Кэрол. После этого подтверждения Кэрол узнает, что Боб заплатил ей реальные банкноты и может спокойно отправить ему все, что он у нее приобрел.

{{% image "/img/gf-232.jpg" %}}
_Основная идея eCash._
{{% /image %}}

Важнее всего то, что Alice Bank впервые увидит неперемешанные банкноты только после того, как Кэрол их внесет! Таким образом, Alice Bank никак не знает, что банкноты были банкнотами Боба. С таким же успехом они могли быть от Дэна или Эрин.

Таким образом, решение Чаума обеспечивает приватность платежей. Само по себе это не было нововведением: приватные платежи были нормой в те времена. Но это было новшеством в цифровой форме. Отсюда и аналогия Чаума: наличные деньги (cash) -> Электронные наличные -> eCash.

# DigiCash

К 1990 году, чуть менее чем через 10 лет после окончания своих первых работ (более молодые разработчики криптовалют, такие как Мэтт Коралло, Виталик Бутерин и Олалува Осунтокун все еще не родились), Дэвид Чаум основал [DigiCash](https://en.wikipedia.org/wiki/DigiCash). Компания базировалась в Амстердаме, где Чаум жил несколько лет, и специализировалась на цифровых деньгах и платежных системах. Среди них были правительственный проект по модернизации дорожных касс (который в конечном итоге был свернут) и смарт-карты (что-то наподобие того, что сегодня мы называем аппаратными кошельками). Но флагманским проектом DigiCash стала система цифровой наличности eCash. (Система называлась eCash, а деньги в системе назывались "CyberBucks", что сравнимо с использованием заглавной буквы при упоминании _Биткоина_ как протокола и _биткоина_ в нижнем регистре для валюты.)

{{% image "/img/gf-233.png" %}}
_Техническая команда в первые дни DigiCash. (Чаум на фото не присутствует) Источник:_ [_chaum.com/ecash_](https://chaum.com/ecash/)
{{% /image %}}

В то время, когда _Netscape_ и _Yahoo!_ привели технологическую индустрию к новым высотам, и некоторые считали, что микроплатежи, а не реклама, станут моделью дохода для интернета, DigiCash считался восходящей звездой для технологических предпринимателей того времени. Конечно, Чаум и его команда также верили в успех своих технологий.

> "По мере развития платежей в сети вы будете платить за самые разные мелочи; платежей будет больше, чем сегодня_, — сказал Чаум [New York Times](https://www.nytimes.com/1994/10/19/business/attention-internet-shoppers-e-cash-is-here.html) в 1994 году, подчеркивая значимость приватности в таком мире — _за каждую прочитанную вами статью, за каждый возникший у вас вопрос придется заплатить".

В том же году, после четырех лет разработки, были [протестированы](https://chaum.com/ecash/articles/1994/05-27-9420-20World_s20first20electronic20cash20payment20over20computer20networks.pdf) первые успешные платежи, а позже в том же году [начались испытания](https://www.nytimes.com/1994/10/19/business/attention-internet-shoppers-e-cash-is-here.html) eCash: банки могли получить лицензию от DigiCash на использование технологии. Проект привлек значительное внимание. К концу 1995 года eCash выдал [лицензию](https://www.nytimes.com/1995/10/23/business/today-shoppers-on-internet-get-access-to-electronic-cash.html) первому банку – Mark Twain Bank в Сент-Луисе. Более того, к началу 1996 года к проекту [присоединился](https://web.archive.org/web/19961102121355/https://www.digicash.com/publish/ec_pres5.html) один из крупнейших банков мира – Deutsche Bank. [Credit Suisse](https://www.americanbanker.com/news/credit-suisse-digicash-in-e-commerce-test) — второй крупный игрок — присоединился позже, и несколько других банков в разных странах, включая Австралийский [Advance Bank](https://web.archive.org/web/19961102121407/https://www.digicash.com/publish/ec_pres6.html), норвежский [Norske Bank](https://web.archive.org/web/19970605025912/http://www.digicash.com:80/publish/ec_pres8.html) и [Bank Austria](https://web.archive.org/web/19970605025912/http://www.digicash.com:80/publish/ec_pres8.html), последовали этому примеру. Тем не менее, сделки, заключенные DigiCash, были менее интересны, чем те сделки, которые сорвались. Два из трех крупнейших голландских банков — ING и ABN Amro — [якобы заключили](https://web.archive.org/web/19990427142412/https://www.nextmagazine.nl/ecash.htm) партнерские сделки с DigiCash на десятки миллионов долларов. Аналогичным образом, Visa предложила инвестиции в размере 40 миллионов долларов, в то время как Netscape также проявила интерес к проекту: eCash мог быть включен в самый популярный веб-браузер той эпохи. Тем не менее, вероятно, самое большое предложение поступило от Microsoft. Билл Гейтс хотел интегрировать eCash в Windows 95 и, говорят, предложил DigiCash за это около 100 миллионов долларов. Чаум, как гласит история, попросил два доллара за каждую проданную версию Windows 95. Сделка была сорвана.

Будучи восходящей звездой в сознании технологов того времени, DigiCash, похоже, испытывала трудности с заключением финансовой сделки, которая помогла бы ей в полной мере реализовать свой потенциал. К 1996 году количество неудачных сделок было слишком большим и сотрудники DigiCash хотели изменить политику. Перемены пришли в лице [нового генерального директора](https://www.americanbanker.com/news/digicash-sends-signal-by-hiring-visa-veteran) — ветерана Visa Майкла Нэша. В стартап также вложили дополнительные  средства, а основатель MIT Media Lab Николас Негропонте был назначен председателем правления _(В рамках инициативы "Цифровая валюта" в медиа-лаборатории Массачусетского технологического института сегодня работают несколько разработчиков Bitcoin Core)_. Штаб-квартира DigiCash была перенесена из Амстердама в Кремниевую долину. Чаум оставался частью DigiCash, но теперь в качестве технического директора.

Это не имело большого значения. После нескольких лет попыток eCash так и не завоевал популярность среди широкой публики. Присоединившиеся банки экспериментировали с технологией, но на самом деле не продвигали ее; к 1998 году в Mark Twain Bank было зарегистрировано только 300 продавцов и 5000 пользователей. В то время как заключительная сделка с Citibank была близка — она могла бы дать хороший толчок проекту — этот банк в итоге вышел из сделки по несвязанным с проектом причинам.

> "Было трудно найти достаточно продавцов, готовых принимать [CyberBucks], чтобы заполучить достаточное количество потребителей, которые бы их использовали и наоборот, — сказал Чаум [Forbes](https://www.forbes.com/forbes/welcome/?toURL=https%3A%2F%2Fwww.forbes.com%2Fforbes%2F1999%2F1101%2F6411390a.html&refURL=&referrer=#54f14f16715f) в 1999 году после того, как DigiCash наконец заявила о банкротстве — По мере роста интернета средний уровень знаний пользователей снизился. Было трудно объяснить им значимость приватности".

# Рождение мечты шифропанков

DigiCash разорилась, и проект eCash потерпел неудачу. Но даже несмотря на то, что технология не преуспела в бизнесе, работа Чаума [вдохновила](https://www.cs.princeton.edu/~arvindn/publications/crypto-dream-part1.pdf) группу криптографов, хакеров и активистов, состоящих в списке рассылки. Именно эта группа, в которую входили авторы DigiCash, такие как Ник Сабо и Зуко Уилкокс-О'Хирн, стала известна как шифропанки.

Возможно, [более радикальные, чем когда-либо был сам Чаум](https://www.youtube.com/watch?v=R4JKSlBWKRY&feature=youtu.be&t=16s), шифропанки сохранили мечту об электронных деньгах, предлагая альтернативные системы цифровых валют на протяжении 1990-х и начала 2000-х годов. В 2008 году, примерно через 10 лет после кончины DigiCash, Сатоши Накамото разослал свое предложение об электронных деньгах — Биткоине — по де-факто преемнику несуществующего на тот момент списка рассылки шифропанков.

С точки зрения дизайна у Биткоина и eCash мало общего. Важно то, что eCash был централизован вокруг DigiCash и не мог быть самостоятельной валютой. Даже если все люди в мире стали бы использовать только eCash для всех своих транзакций, банкам все равно пришлось бы обеспечивать сохранность остатков на счетах и подтверждать транзакции. Это также означает, что хоть eCash и обеспечивал приватность, он не был устойчив к цензуре. Например, средства  WikiLeaks сохранялись в Биткоине даже в условиях банковской блокады, eCash не мог бы добиться подобного; банки все равно могли бы заблокировать счета WikiLeaks.

Тем не менее, работа Чаума над цифровой валютой, стартовавшая в начале 1980-х годов, остается актуальной. Хотя сам Биткоин не использует слепые подписи, уровни масштабирования и приватности, надстраиваемые поверх протокола Биткоин могут. Форум [Bitcointalk](https://bitcointalk.org/) и модератор subreddit  [r/bitcoin](https://www.reddit.com/r/Bitcoin/) Theymos, например, уже некоторое время продвигают идею [масштабируемого сайдчейна для биткоинов, подобного eCash](https://www.reddit.com/r/Bitcoin/comments/5ksu3o/blinded_bearer_certificates/). Адам Фискор, сегодняшний [лидер в области](https://medium.com/@nopara73/summary-privacy-work-in-cryptocurrencies-703d5e2231e6) приватности биткоин-транзакций, [реализует](https://bitcoinmagazine.com/articles/hiddenwallet-and-samourai-wallet-join-forces-make-bitcoin-private-zerolink) услуги по смешиванию монет с использованием слепых подписей, как когда-то [предлагал](https://bitcointalk.org/index.php?topic=279249.0) разработчик Bitcoin Core Грег Максвелл. А технология Lightning Network, которая активно набирает обороты, может использовать слепые подписи для повышения безопасности.

А что сам Чаум? Он вернулся в Беркли, где стал автором целого ряда публикаций в области цифровых выборов и систем репутации. Возможно, через 20 лет совершенно новое поколение разработчиков, предпринимателей и активистов взглянет на них как на основу технологии, которая изменит мир.

---

Оригинал статьи на английском:

{{% image "/img/gf-231.jpeg" %}}
_[The Genesis Files: How David Chaum’s eCash Spawned a Cypherpunk Dream](https://bitcoinmagazine.com/culture/genesis-files-how-david-chaums-ecash-spawned-cypherpunk-dream)_
{{% /image %}}

{{< details "Оглавление" "..." >}}
1. [Пролог: День, когда криптография изменилась навсегда](/gf/genesis-intro)

2. [Часть I: eCash Дэвида Чаума и зарождение мечты шифропанков](/gf/genesis-1)

3. [Часть II: Hashcash или как Адам Бэк разработал сердце Биткоина](/gf/genesis-2)

4. [Часть III: Если у Биткоина был прототип, то это были b-money Вэя Дая](/gf/genesis-3)

5. [Часть IV: Создавая Bit Gold, Сабо был в двух шагах от изобретения Биткоина](/gf/genesis-4)

6. [Часть V: Как поиски цифровой наличности привели Хэла Финни к созданию RPOW (и не только)](/gf/genesis-5)
{{< /details >}}
