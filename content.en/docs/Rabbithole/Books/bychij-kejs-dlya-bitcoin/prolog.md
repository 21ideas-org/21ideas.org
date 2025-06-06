---
title: "Пролог"
h1: "Пролог"
cover: /img/bkb-471.jpg
tags: ["книга", "bitcoin", "новичкам"]
description: "Биткоин был значительным техническим прорывом, и хотя он не был очевиден 31 октября 2008 года, изобретение Сатоши Накамото в итоге изменило мир."
url: bychij-kejs-dlya-bitcoin/prolog
aliases: ['/books-bc4b-prologue']
date: 2021-05-08
bookToc: true
bookFlatSection: false
weight: 2
---

{{< details "Оглавление" "..." >}}

[Главная страница](/bychij-kejs-dlya-bitcoin)

[Предисловие от Майкла Сэйлора](/bychij-kejs-dlya-bitcoin/predislovie)

[Пролог](/bychij-kejs-dlya-bitcoin/prolog)

[Глава 1: Генезис и происхождение денег](/bychij-kejs-dlya-bitcoin/glava-1)

[Глава 2: Атрибуты хорошего средства сбережения](/bychij-kejs-dlya-bitcoin/glava-2)

[Глава 3: Эволюция денег](/bychij-kejs-dlya-bitcoin/glava-3)

[Глава 4: Форма монетизации](/bychij-kejs-dlya-bitcoin/glava-4)

[Глава 5: Новая денежная база](/bychij-kejs-dlya-bitcoin/glava-5)

[Эпилог](/bychij-kejs-dlya-bitcoin/epilog)

{{< /details >}}

## Прометей

Таинственное происхождение Биткоинa кажется настолько невероятным, что сложно поверить в его правдивость. Возможно мы никогда не узнаем всех подробностей, но мы знаем что события разворачивались примерно следующим образом: 3 января 2009 года некто в неизвестном месте нажал клавишу на компьютере и запустил одну из самых важных программ в истории человечества. Компьютер начал поиск определенной закономерности, известной как хеш, цифровая иголка в стоге сена, который должен был зафиксировать первый блок в реестре финансовых транзакций, известный сегодня как блокчейн. В течение нескольких минут или часов – никто точно не знает – был найден первый хеш, который увенчал генезис-блок и породил первую в мире по-настоящему децентрализованную цифровую валюту. Примечательно, что личность таинственного создателя Биткоина остается неизвестной по сей день. Мы знаем только его псевдоним: Сатоши Накамото.

Двумя месяцами ранее, 31 октября 2008 года, Накамото анонсировал техническую спецификацию Биткоинa в списке рассылки по криптографии. Этот список состоял из адресов имейлов людей, занимающихся изучением кодов и их взлома [^1]. Многие из членов этого списка называли себя шифропанками и были полны решимости изменить общество, освободив его от государства с помощью приватности, в основе которой лежала криптография. Электронное письмо Накамото было его первым сообщением в списке, но его публикация не вызвала особого энтузиазма, скорее всеобщий скептицизм. Даже в этой группе, погруженнoй в историю попыток изобрести цифровую валюту, мало кто осознал значимость имейла Накамото. Единственным исключением стал Хэл Финни, одаренный криптограф и программист, который посвятил бóльшую часть своей карьеры созданию цифровой валюты и был знаком с присущими этому процессу трудностями. Позднее Финни вспоминал об анонсе Биткоинa:

> Когда Сатоши объявил o Биткоинe в списке рассылки по криптографии, реакция была в лучшем случае скептической. Их можно понять, ведь криптографы видели слишком много грандиозных идей от неведающего новичка, что и вызывало негативную ответную реакцию [^2].

Финни трагически скончался 28 августа 2014 года от тяжелой формы болезни Лу Герига. Он внес множество важных вкладов в разработку цифровой валюты, особенно в Биткоин.

## Гордиев узел

Когда Тим Мэй, отставной ученый Intel и основатель движения шифропанков, представил “_[Манифест Kриптоанархиста](/manifest-kriptoanarhista)”_ небольшому собранию радикалов-единомышленников в Силиконовой долине в 1992 году, они поддержали необходимость разработки цифровой формы денег, которая не будет контролироваться  государством. Мэй писал в своем манифесте:

> Компьютерные технологии находятся на пороге предоставления возможности общения и взаимодействия друг с другом абсолютно анонимно, как  отдельным людям так и группам. Два человека могут обмениваться сообщениями, вести бизнес  и заключать электронные контракты, даже не зная настоящего имени другой стороны [^3].

Но для ведения бизнеса нужны деньги. Деньги являются самым важным товаром в любой развитой экономике, потому что они служат основой для всей торговли и сбережений. Золото – древний и почтенный драгоценный металл – выполняло эту роль на протяжении тысячелетий, но физическая природа золота была его "ахиллесовой пятой", делавшей его уязвимым к централизации, конфискации и атакам со стороны государств. Статус золота как глобальных денег был в конце концов аннулирован в двадцатом веке, когда государство стало доминировать в выпуске денег и управлении ими. Желая облегчить анонимные платежи и решить проблемы, присущие золоту, шифропанки надеялись разработать цифровую валюту, которая могла бы сопротивляться принуждениям государства.

В 1983 году американский программист Дэвид Чаум [опубликовал](/gf/genesis-1) проект eCash, который стал первой попыткой создать систему, защищающую финансовую приватность своих пользователей с помощью криптографии. В 1989 году Чаум основал компанию под названием DigiCash для коммерческого использования своего изобретения, но она так и не добилась финансового успеха. Более того, поскольку eCash была привязана к создавшей ее компании, она страдала от проблемы централизации: если деньги выпускаются центральным органом, этот орган представляет собой единую точку отказа. И действительно, система eCash прекратила свое существование, когда компания DigiCash обанкротилась в 1998 году. Таким образом, создание децентрализованной цифровой формы денег стало ключевой задачей, занимавшей умы самых талантливых криптографов в 90-х годах.

Хотя в конце 90-х годов такие шифропанки, как Адам Бэк, Ник Сабо и Вэй Дай добились значительного прогресса в разработке цифровой валюты, важнейшая проблема оставалась нерешенной: как поддерживать редкость цифровой валюты, если нет центрального органа власти, который бы обеспечивал соблюдение правил? Еще в шестнадцатом веке испанская школа Саламанки признала, что ценность денег обусловлена их редкостью. Однако в цифровой сфере, где данные можно дешево копировать и передавать, редкость до сих пор могла обеспечиваться лишь  благодаря надзору со стороны государственной власти, как в случае с интеллектуальной собственностью.

Изобретенная в 1997 году [система](/gf/genesis-2) HashCash британского криптографа Адама Бэка внесла свой вклад в развитие ключевой концепции, которая была необходима для создания работоспособной системы цифровой редкости – Proof-of-Work или доказательство проделанной работы. Первоначально предназначенная для решения все более дорогостоящей проблемы спама в электронной почте, система Бэка предполагала поиск компьютером хеша, который может быть найден только путем исчерпывающего поиска, требующего затрат энергии и, следовательно, стоящего денег. После создания хеша его можно было быстро и дешево проверить на подлинность и использовать, чтобы оценить сколько энергии было затрачено и примерную стоимость проведения этих вычислений. Хеш был, по сути, криптографическим доказательством того, что работа была проделана. Согласно схеме Бэка, отправители электронной почты должны были прикреплять уникальный хеш к каждому письму, чтобы доказать, что они понесли незначительные затраты, например, сотые доли пенни. Эти затраты не повлияли бы на обычное использование электронной почты, но сделали бы возможность массовой рассылки спама непомерно дорогой. К сожалению, HashCash не имел коммерческого успеха и в нем отсутствовали важные элементы, которые позволили бы ему использоваться в качестве денег. Однако Proof-of-Work окажется решающим фактором для обеспечения координации ненадежных участников децентрализованной системы.

В 1998 году американский программист и инженер Вэй Дай [предложил систему](/gf/genesis-3), известную как b-money, которая устраняла критический недостаток системы eCash Чаума: ее централизацию. Вместо того, чтобы требовать от центрального органа гарантий ограничения выпуска денег, Дай предложил распределенную систему, в которой участники сети будут отдельно вести учет того, сколько денег есть у каждого участника в данный момент, так что государственное принуждение любого конкретного участника будет неэффективным. Однако предложение Дая было непрактичным, если исходить из того, что каналы связи будут создаваться почти мгновенно, оставаться соединенными и неспособными изменяться. Его система так и не была реализована.

В том же году, когда Дай предложил b-money, Ник Сабо [разработал собственную версию системы цифровых денег](/gf/genesis-4), известную как Bit Gold. Как и в случае с b-money,  Bit Gold так и не была реализована, но система Сабо стала серьезным прорывом благодаря переосмыслению проблемы редкости не как недостатка физической субстанции, а как качества, обеспечивающего дороговизну производства. Его неологизмом для этого качества была "неподделываемая дороговизна". Bit Gold Сабо основывалась на понимании работ Адама Бэка в области Proof-of-Work и позволяла пользователям системы майнить токены, предоставляя хеш, дороговизна которого действовала бы как ограничивающий фактор для увеличения денежной массы.

Владение такими токенами отслеживалось бы с помощью реестра, распределенного между многими компьютерами, известными как клуб собственности. Эта система несколько напоминает b-money Дая, но отличается техническими деталями.

Несмотря на то, что проект Сабо был очень близок к решению проблемы децентрализованных денег, он имел ряд существенных недостатков. Во-первых, поскольку компьютеры продолжали наращивать вычислительную мощность, аналогичные созданным в прошлом хеши было легче создать в настоящем. Это означало, что хеши, созданные в разные моменты времени, не были бы эквивалентны по своей воспринимаемой ценности, нарушая важное свойство денег, называемое взаимозаменяемостью. Таким образом, системa Bit Gold создалa бы цифровой товар, более похожий на бриллианты, чем на золото – нестандартной формы и качества и не обладающие взаимозаменяемостью. Во-вторых, концепция реестра собственности была уязвима для атак Сивиллы, которые подорвали бы систему, создав множество фальшивых членов клуба собственности, которые затем могли бы сообщать о ложных балансах, начисляя злоумышленникам средства, которых у них быть не должно. Хотя Сабо разрабатывал решения этих проблем, они были сложными, и Bit Gold оставалaсь лишь теорией.

По мере того как одно столетие уступало место другому, надежда шифропанков на децентрализованную цифровую валюту таяла. Хэл Финни, который уделял пристальное внимание каждой из попыток  создания денег "без гражданства", попытался воплотить эту мечту в жизнь в 2004 году, [разработав систему](/gf/genesis-5), известную как RPOW (Reusable Proofs of Work), которая была упрощенной версией Bit Gold Сабо. В отличие от Сабо или Дая, Финни реализовал работающий прототип своей системы, но RPOW страдала от проблемы, схожей с проблемой eCash Чаума, поскольку она полагалась на центральный орган. Финни попытался смягчить проблему централизации, заменив центральный орган устойчивым к внешнему влиянию аппаратным устройством, которое могло бы удаленно подтвердить правильность информации о балансе для пользователей системы. Аппаратное устройство было бы более надежным, чем компания, но его все равно можно было бы легко отключить.

К 2008 году, когда мир погрузился в худший экономический кризис за многие поколения, большинство членов списка рассылки по криптографии пришли к выводу, что создание децентрализованной цифровой валюты, вероятно, невозможно. Соответственно, когда Сатоши Накамото уверенно заявил, что решил проблемы децентрализованных денег, очень немногие члены списка восприняли его всерьез.

## Прорыв

Через несколько недель после анонса Биткоинa Хэл Финни начал засыпать Сатоши Накамото вопросами о его новом изобретении. Финни быстро оценил великолепие Биткоинa и гениальный творческий скачок Накамото в создании новой формы цифровых денег без центрального органа управления. Ни одна из составляющих идей Биткоинa не была новой, как не была новой и сама криптография, но Накамото организовал систему с идеальным балансом экономических стимулов и криптографических гарантий. В рамках своего проекта Накамото решил фундаментальную проблему криптологии, впервые возникшую в конце 70-х годов и известную как Задача Византийских генералов: как могут разрозненные стороны, не доверяющие друг другу и даже враждующие между собой, координировать свои действия для достижения общей цели, не полагаясь на посредника, пользующегося взаимным доверием? Как объяснил Ник Сабо в 2011 году:

> Накамото устранил существенный недостаток в системе безопасности, присущий моему проекту [Bit Gold], а именно: потребовал, чтобы Proof-of-Work выступало узлом в устойчивой к угрозе Византийских генералов пиринговой системе, чтобы уменьшить опасность того, что ненадежная сторона будет контролировать большинство узлов и таким образом повредит ряду важных функций безопасности. Очередная особенность, очевидная в ретроспективе и совершенно неочевидная в процессе разработки [^4].

Это был значительный технический прорыв, и хотя он не был сразу очевиден для большинства членов списка рассылки по криптографии 31 октября 2008 года, изобретение Сатоши Накамото в итоге изменило мир.

{{< details "Оглавление" "..." >}}

[Главная страница](/bychij-kejs-dlya-bitcoin)

[Предисловие от Майкла Сэйлора](/bychij-kejs-dlya-bitcoin/predislovie)

[Пролог](/bychij-kejs-dlya-bitcoin/prolog)

[Глава 1: Генезис и происхождение денег](/bychij-kejs-dlya-bitcoin/glava-1)

[Глава 2: Атрибуты хорошего средства сбережения](/bychij-kejs-dlya-bitcoin/glava-2)

[Глава 3: Эволюция денег](/bychij-kejs-dlya-bitcoin/glava-3)

[Глава 4: Форма монетизации](/bychij-kejs-dlya-bitcoin/glava-4)

[Глава 5: Новая денежная база](/bychij-kejs-dlya-bitcoin/glava-5)

[Эпилог](/bychij-kejs-dlya-bitcoin/epilog)

{{< /details >}}

[^1]: [http://bullishcaseforbitcoin.com/references/bitcoin-announcement](http://bullishcaseforbitcoin.com/references/bitcoin-announcement)  
[^2]: [http://bullishcaseforbitcoin.com/references/finney-skepticism](http://bullishcaseforbitcoin.com/references/finney-skepticism)  
[^3]: [http://bullishcaseforbitcoin.com/references/anarchist-manifesto](http://bullishcaseforbitcoin.com/references/anarchist-manifesto)  
[^4]: [http://bullishcaseforbitcoin.com/references/szabo-bit-gold](http://bullishcaseforbitcoin.com/references/szabo-bit-gold)