---
author: "NCrashed"
date: 2023-10-22
list_description: "16 Октября 2023 года разработчик Antoine Riard опубликовал описание атаки на каналы в сети Lightning. В этой публикации мы рассмотрим механизм атаки и её оставшиеся нерешённые аспекты."
menu:
  main:
    parent: blog
next: /blog/
prev: /posts/q3-23-otchet/
title: Атака циклической заменой на Lightning Network
description: ""
cover: /img/replacement-cycling/header.jpeg
weight: 10
---

16 Октября 2023 года разработчик Antoine Riard [опубликовал описание](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2023-October/021999.html) атаки на каналы в сети Lightning. До этого момента у разработчиков было полгода, чтобы минимизировать риски атаки, и в соответствии с процедурой [ответственного раскрытия](https://en.wikipedia.org/wiki/Coordinated_vulnerability_disclosure) детали атаки были полностью раскрыты общественности 16 Октября. В этой публикации мы рассмотрим механизм атаки и её оставшиеся нерешённые аспекты.

Для операторов нод сети Lightning я рекомендую убедиться в том, что версия их ноды обновлена и содержит соответствующие патчи для снижения риска атаки:
- LDK: v0.0.118 - CVE-2023 -40231
- Eclair: v0.9.0 - CVE-2023-40232
- LND: v.0.17.0-beta - CVE-2023-40233
- Core-Lightning: v.23.08.01 - CVE-2023-40234

# Подготовка

{{< image src="/img/replacement-cycling/01.png" />}}

Рассмотрим три ноды в сети Lightning Network (LN). Две из них, Маллет и Маллори, сотрудничают, чтобы атаковать третью ноду - Боба. Между Маллет и Бобом, а также между Бобом и Маллори уже установлены платежные каналы. В данный момент текущая высота блокчейна составляет 1000 блоков.

{{< image src="/img/replacement-cycling/02.png" />}}

Маллет отправляет 1 BTC Маллори, используя Боба как роутящую ноду. Согласно стандартной процедуре, Маллори создает секрет для HTLC (Hashed Timelock Contract). Срок действия контракта между Маллет и Бобом истекает на высоте блока 1020, а между Бобом и Маллори - на 1080. Почему именно такие таймауты, смотри в разделе ниже.

{{< details "Как работает HTLC" "..." >}}

В сети Lightning платежи осуществляются через механизм HTLC (Hashed Timelocked Contract), где контракт создаётся в цепочке между отправителем, получателем и всеми промежуточными нодами. Поскольку каждый контракт заключается между двумя участниками, в нашем примере будут рассмотрены два таких контракта: первый между Маллори (в роли Алисы) и Бобом, а второй — между Бобом (снова в роли Алисы) и Маллет (в роли Боба). Далее мы подробно остановимся на механике работы HTLC между участниками, играющими роли Алисы и Боба.

Условия контракта на каждом этапе платежа между Алисой и Бобом следующие:

* Боб может получить средства, если располагает секретом, хеш которого соответствует определённому значению. Этот секрет также известен как предобраз хеша или доказательство оплаты.
* Алиса может забрать обратно свои средства, если с момента создания транзакции с контрактом прошло установленное количество блоков.

Стоит отметить, что Боб может активировать свою часть контракта даже после истечения установленного таймаута. Атака основана на конфликте между транзакциями этих двух сценариев. Однако как только одна из транзакций получает подтверждение, средства из контракта переводятся, и конфликтующая транзакция навсегда становится недействительной.

{{< tabs "htlc_steps" >}}
{{< tab "Инвойс" >}} 
{{< image src="/img/replacement-cycling/03.png" />}}

Рассмотрим пошагово работу HTLC контрактов с одним промежуточным узлом. Алиса хочет передать Бобу 1 BTC через Оливию. Для этого Боб генерирует случайный секрет и записывает его в инвойс вместе со всей информацией, чтобы отправитель мог найти Боба в сети Лайтнинг. Этот инвойс передаётся Алисе, например, через QR код на экране телефона.
{{< /tab >}}
{{< tab "Блокировка" >}} 
{{< image src="/img/replacement-cycling/04.png" />}}

Алиса извлекает из инвойса хеш секрета и с его помощью блокирует 1 BTC между собой и Оливией на 80 блоков. Алиса как бы сообщает: «Оливия, если ты мне сообщишь секрет Боба, я тебе отдам свою монету и копеечку как награду!». Оливия пользуется ситуацией и блокирует свои 1 BTC (за вычетом награды) в канале между собой и Бобом на тот же хэш. Таймаут контракта Оливия ставит с запасом, чтобы успеть отменить свой контракт до истечения контракта с Алисой.
{{< /tab >}}
{{< tab "Роутинг" >}} 
{{< image src="/img/replacement-cycling/05.png" />}}

Боб видит заключённый с ним HTLC контракт и у него есть возможность либо сообщить секрет Оливии и забрать монету, либо ничего не делать. Допустим, Боб решил завершить сделку и передал секрет Оливии.  

{{< image src="/img/replacement-cycling/17.png" />}}

На уровне оффчейн протокола это реализуется через специальные сообщения. В штатном режиме работы канала платёж можно либо завершить передачей секрета HTLC, либо кооперативно отменить со стороны получателя, передав специальный ключ отмены. Процедура пересогласования балансов заслуживает отдельного материала, поэтому для упрощения мы тут её не рассматриваем. 
{{< /tab >}}
{{< tab "Конфликт" >}} 
{{< image src="/img/replacement-cycling/18.png" />}}

Если Оливия отказывается пересогласовывать состояние, то Боб закроет канал и разблокирует HTLC ончейн. Закрытие канала означает публикацию заранее заготовленной транзакции, что распределит балансы между Оливией и Боб согласно последнему состоянию канала. 

Транзакция закрытия будет содержать монеты, которые заперты контрактом HTLC. Для их разблокировки потребуется ещё одна транзакция ончейн либо с предобразом хеша, либо используя вариант таймаута после достижения нужной высоты блокчейна. 

{{< /tab >}}
{{< tab "Финализация" >}} 
{{< image src="/img/replacement-cycling/06.png" />}}

После разблокировки исходящего контракта с Бобом Оливия точно такой же процедурой передаёт секрет Алисе и обновляет баланс в канале с ней. Алиса получает доказательство оплаты, Боб получил монеты, Оливия заработала на посредничестве комиссионные. 
{{< /tab >}}
{{< /tabs >}}

Подробнее о деталях работы HTLC можно почитать в [LN книге](https://github.com/lnbook/lnbook/blob/develop/08_routing_htlcs.asciidoc).
{{< /details >}}

# Атака

{{< image src="/img/replacement-cycling/10.png" />}}

На блоке 1020 Маллет выпускает цепочку низкокомиссионных транзакций-расходников, цель которых — вытеснить свои и Боба транзакции из мемпула (см. раздел ниже). Маллет не намерена предоставлять Бобу секрет, поэтому Бобу придётся инициировать закрытие канала с Маллет, чтобы освободить свои средства.

{{< details "Как удалить транзакцию из мемпула" "..." >}}
Используя механизм [RBF (Replace by Fee)](https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki), мы можем заменить одну транзакцию на другую при соблюдении ряда условий. Обычно, это используется для повышения комиссии застрявшей транзакции или отмены ошибочно отправленных средств. Однако в сообществе нашли [обходные манёвры](https://github.com/bitcoin/bitcoin/pull/23121#issuecomment-929475999) для правил замены и теперь можно удалять транзакции из мемпула без траты родительских монет.

{{< tabs "rbf_removal" >}}
{{< tab "Подготовка" >}} 
{{< image src="/img/replacement-cycling/07.png" />}}

Допустим, что мы хотим удалить транзакцию Б1 и не тратить выход подтверждённой транзакции Б0 вовсе. Для этого мы подготавливаем цепочку из двух транзакци А1 и А2 с намеренно низкой комиссией за байт.

{{< /tab >}}
{{< tab "Шаг 1" >}} 
{{< image src="/img/replacement-cycling/08.png" />}}

Дальше мы публикуем транзакцию Б2, что заменяет одновременно транзакции Б1 и А2. Эти две транзакции будут удалены из мемпула. Цепочка из А1 и А2 необходима, чтобы обойти RBF правило №2, которое запрещает добавлять неподтверждённые входы в новой транзакции, что отсутствуют в заменяемых транзакциях:
* Неподтверждённый выход транзакции А1 используется и в А2, и в Б2.
* Подтверждённый выход транзакции Б0 используется и в Б1 и Б2.

{{< /tab >}}
{{< tab "Шаг 2" >}} 
{{< image src="/img/replacement-cycling/09.png" />}}

После того, как транзакции Б1 и А2 пропадают из мемпула, мы публикуем транзакцию А3, которая заменят транзакцию Б2. После этого шага выход транзакции Б0 не тратится ни одной транзакцией.

{{< /tab >}}
{{< /tabs >}}
{{< /details >}}

{{< image src="/img/replacement-cycling/11.png" />}}

Согласно текущей политике узлов относительно истечения времени платежей, установлен буфер в 3 блока для возможных задержек при согласовании. Таким образом, только на 1023 блоке Боб начинает процедуру закрытия канала с Маллет. В этой транзакции закрытия представлен выход с 1 BTC, который заблокирован в HTLC контракте с Маллет. 

{{< image src="/img/replacement-cycling/12.png" />}}

После подтверждения транзакции закрытия канала в блоке 1024, Боб запускает таймаут-транзакцию, целью которой является возврат средств, блокированных в контракте с Маллет.

{{< image src="/img/replacement-cycling/13.png" />}}

Однако, увидев в мемпуле таймаут-транзакцию от Боба, Маллет моментально публикует свою атакующую транзакцию с секретом. Эта транзакция предназначена для замены как транзакции Боба, так и транзакции-расходника A2.

{{< image src="/img/replacement-cycling/14.png" />}}

Поскольку транзакция от Маллет содержит секрет, который позволяет Бобу разблокировать контракт с Маллори и успешно завершить платёж, Маллет не желает, чтобы Боб узнал о наличии этой транзакции. Следовательно, Маллет устраняет свою транзакцию с секретом, заменяя ее на транзакцию A3 (подробности об удалении транзакций смотрите в соответствующем разделе).

# Манипуляции с мемпулом Боба

{{< image src="/img/replacement-cycling/15.png" />}}

В базовом варианте атаки, Маллет рассчитывает на то, что транзакция либо не успеет достигнуть Боба до того, как будет удалена на следующем этапе, либо что Боб не обратит внимания на свой локальный мемпул. Однако в более продвинутых сценариях атаки, Маллет может попытаться изолировать части P2P сети, к которым подключен Боб, и предоставлять этим сегментам противоречащие друг другу транзакции. Это делается с целью уменьшить вероятность того, что Боб увидит транзакцию со секретом до того, как она будет включена в блок.

# Завершение атаки

При каждой попытке Боба опубликовать свою таймаут-транзакцию, Маллет блокирует её, используя методику из предыдущего раздела. Эта "игра" продолжается 57 блоков до тех пор, пока блокчейн не достигнет высоты 1080. В этот момент Маллори может воспользоваться своей таймаут-транзакцией, чтобы забрать свои средства.

{{< image src="/img/replacement-cycling/16.png" />}}

Сразу после этого Маллет допускает подтверждение своей транзакции с секретом и завладевает средствами Боба. Теперь Боб не может вернуть средства Маллори, поскольку HTLC был использован таймаут-транзакцией в канале Маллори-Боб. Таким образом, Боб теряет свои деньги из-за махинаций с двойной тратой.

# Защита от атаки

На данном этапе стоит сделать паузу и осознать, что уровень уязвимости снизился и реализация вышеописанной процедуры теперь требует значительных финансовых вложений. Несмотря на это, риск полностью не исключён, и это вопрос остаётся актуальным в списке задач протокола. Давайте рассмотрим, какие меры были приняты и какие дополнительные решения предложены.

## Наблюдение за мемпулом

Если Боб заметит транзакцию Маллет, то он моментально получает преимущество. В связи с этим, ноды начали активное наблюдение за мемпулом, чтобы быстро реагировать на появление потенциальной атакующей транзакции. На момент написания статьи только LDK не внедрил этот механизм защиты. В Eclair такой механизм существовал давно, начиная с момента обнаружения схожей атаки [Flood & Loot](https://arxiv.org/abs/2006.08513).

## Продление таймаутов

С каждым новым блоком у Боба увеличиваются шансы обнаружить транзакцию Маллет и предотвратить атаку. Из-за изменчивости структуры сетей и мемпула Маллет может не успеть в нужное время отозвать свою транзакцию. В ответ на это, все реализации LN по умолчанию удлинили таймауты с 34 до 144 блоков для каждой части платежного маршрута, существенно снижая вероятность успешного проведения атаки.

## Предварительно подписанные транзакции

В разделе почтовой рассылки с описанием атаки Peter Todd [предложил концепцию](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2023-October/022035.html), согласно которой можно исключить возможность удаления транзакций из мемпула. Для этого предлагается модифицировать код контракта HTLC так, чтобы возможность траты средств при наличии секрета предоставлялась только при совместном действии Боба и Маллет. В процессе согласования HTLC обе стороны предварительно подписывают ряд транзакций с заранее определенным уровнем комиссий.

В качестве примера, шкала комиссий может выглядеть следующим образом:
```
Боб    платит 1.1 sat/vbyte
Маллет платит 1.2 sat/vbyte
Боб    платит 1.4 sat/vbyte
Маллет платит 1.8 sat/vbyte
Боб    платит 2.6 sat/vbyte
Маллет платит 4.2 sat/vbyte
Боб    платит 7.4 sat/vbyte
...
```
Данный метод может быть не совсем совместим с протоколами мультиподписи MuSig, однако он надёжно функционирует с классическим методом мультиподписи, полностью предотвращая возможную атаку.

## Интенсивная ретрансляция

По умолчанию реализации LN ретранслировали транзакцию-таймаут либо через определённое количество блоков, либо по заданному таймеру. Теперь, при исчезновении транзакции из мемпула, ноды публикуют её снова в каждом блоке, выбирая случайный момент времени для этого. Такой подход увеличивает шансы на то, что честная транзакция будет включена майнером в блок до того, как Маллет попытается её аннулировать.

## Защитные меры через комиссии

Для успешного осуществления атаки Маллет на каждом этапе замены транзакций должна увеличивать комиссии минимум на 500 сатоши, согласно правилам RBF (правило 4). Если Боб активно увеличивает комиссии, издержки для Маллет нарастают. Это может стать причиной, по которой Маллет решит отказаться от атаки из-за экономической нецелесообразности.

## Защита от затмения мемпула

Принятые меры защиты эффективны против простых вариантов атаки. Однако, Маллет, действуя совместно с майнером, обладающим примерно 10% всего хешрейта, или координируя большую сеть [Сивилл-нод](https://ru.wikipedia.org/wiki/%D0%90%D1%82%D0%B0%D0%BA%D0%B0_%D0%A1%D0%B8%D0%B2%D0%B8%D0%BB%D0%BB%D1%8B), может попытаться изолировать Боба, лишив возможности увидеть транзакцию с секретом до критического момента. Для предотвращения таких сценариев существуют методики, аналогичные тем, что [применяются в кошельке Wasabi](https://docs.wasabiwallet.io/using-wasabi/Send.html#broadcast). 

{{< hint btc >}}
Собирал, рисовал и переводил материалы **NCrashed** ([ncrashed@getalby.com](lightning:ncrashed@getalby.com))
Визуальный стиль и персонажи взяты из [The Evolution of Trust](https://ncase.me/trust/) по лицензии [CC0 1.0 Universal](https://github.com/ncase/trust/blob/gh-pages/LICENSE)

[Поддержать проект](/contribute/)
{{< /hint >}}
