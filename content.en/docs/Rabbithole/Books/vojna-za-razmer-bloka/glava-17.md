---
title: "Глава 17: UASF – Активируемый пользователями софтфорк"
h1: "Глава 17: UASF – Активируемый пользователями софтфорк"
cover: /img/vrb-449.jpeg
description: "Идея о том, что Активируемый пользователями софтфорк (UASF) в Биткоине разрешит текущий тупик и активирует SegWit, похоже, также возникла от разработчика под псевдонимом Shaolinfry в электронном письме, отправленном в список рассылки Биткоина 25 февраля 2017 года..."
url: vojna-za-razmer-bloka/glava-17
aliases: ['/book-the-blocksize-war-chapter-17']
date: 2021-03-11
bookFlatSection: false
weight: 17
---

{{< details "Оглавление" "..." >}}

[Главная страница](/vojna-za-razmer-bloka)

[Глава 1: Первый удар](/vojna-za-razmer-bloka/glava-1)

[Глава 2: Начало](/vojna-za-razmer-bloka/glava-2)

[Глава 3: Масштабирование I Монреаль](/vojna-za-razmer-bloka/glava-3)

[Глава 4: Масштабирование II Гонконг](/vojna-za-razmer-bloka/glava-4)

[Глава 5: SegWit](/vojna-za-razmer-bloka/glava-5)

[Глава 6: Сеть Lightning](/vojna-za-razmer-bloka/glava-6)

[Глава 7: Bitcoin Classic](/vojna-za-razmer-bloka/glava-7)

[Глава 8: Круглый стол в Гонконге](/vojna-za-razmer-bloka/glava-8)

[Глава 9: Фейковый Сатоши](/vojna-za-razmer-bloka/glava-9)

[Глава 10: DAO](/vojna-za-razmer-bloka/glava-10)

[Глава 11: Масштабирование III Милан](/vojna-za-razmer-bloka/glava-11)

[Глава 12: Bitcoin Unlimited](/vojna-za-razmer-bloka/glava-12)

[Глава 13: Биржи](/vojna-za-razmer-bloka/glava-13)

[Глава 14: ASICBoost](/vojna-za-razmer-bloka/glava-14)

[Глава 15: Логово драконов](/vojna-za-razmer-bloka/glava-15)

[Глава 16: Litecoin](/vojna-za-razmer-bloka/glava-16)

[Глава 17: UASF – Активируемый пользователями софтфорк](/vojna-za-razmer-bloka/glava-17)

[Глава 18: Нью-Йоркское соглашение](/vojna-za-razmer-bloka/glava-18)

[Глава 19: Bitcoin Cash](/vojna-za-razmer-bloka/glava-19)

[Глава 20: SegWit2x](/vojna-za-razmer-bloka/glava-20)

[Глава 21: Победа](/vojna-za-razmer-bloka/glava-21)

{{< /details >}}

{{< youtube XENl75GrBWU >}}
_Помимо YouTube с аудиокнигой можно ознакомиться на популярных подкаст-площадках: [https://www.21ideas.org/audio-audiobooks/](https://www.21ideas.org/audio-audiobooks/)_
{{< /youtube >}}

Идея о том, что _Активируемый пользователями софтфорк_ (UASF) в Биткоине разрешит текущий тупик и активирует SegWit, похоже, также возникла от разработчика под псевдонимом Shaolinfry в электронном письме, отправленном в список рассылки Биткоина 25 февраля 2017 года:

> Проблема с активацией через супербольшинство, сигнализирующее хэшрейтом, в том, что она привлекает ненужное внимание к майнерам, излишне политизируя их. Майнеры, уже неправильно истолковавшие сигнал о готовности как голосование, могут ощущать давление, полагая, что им предстоит "принять решение" от имени сообщества: кто сигнализирует, а кто нет, оказывается в фокусе общественного внимания, и это может сильно давить на неготовых к этому майнеров. Некоторые майнеры могут быть не в состоянии обновиться или предпочтут не участвовать в софтфорке – это их право. Однако теперь такой майнер может оказаться единственной причиной, по которой активация срывается для всех, в то время как софтфорк должен оставаться добровольной опцией! Эта ситуация явно противоречит добровольному характеру системы Биткоина, где участие на всех уровнях является добровольным и поддерживается хорошо сбалансированными стимулами.  
> Ниже я предлагаю обсуждение альтернативы – "сигнале об активации в назначенную дату", когда узлы начинают принудительный переход к новым правилам в заранее определенное время в будущем. Этот метод требует большего времени выполнения, чем триггер активации на основе хэшрейта, но предлагает ряд преимуществ и, возможно, обеспечивает лучший компромисс.

12 марта 2017 года Shaolinfry формализовал свое предложение, и оно стало известно как BIP 148. Идея заключалась в том, чтобы принудить майнеров сигнализировать о поддержке SegWit правилом консенсуса, тем самым активируя его. В каком-то смысле это был софтфорк для активации другого софтфорка. Принудительная сигнализация майнеров должна была начаться 1 августа 2017 года, примерно через четыре с половиной месяца. Затем это должно было активировать исходный софтфорк SegWit до истечения срока действия окна активации.

> **Мотивация**  
> Segwit увеличивает размер блока, исправляет уязвимость транзакций для посторонних и упрощает обновление скриптов, а также дает множество других преимуществ.  
> Есть надежда, что майнеры отреагируют на этот BIP, активировав Segwit раньше, до того, как BIP вступит в силу. В противном случае этот BIP вызовет принудительную активацию развертывания Segwit в рамках штатной процедуры до полуночи 15 ноября 2017 года.  
> **Спецификация**  
> Все метки времени ниже относятся к "медианному прошлому" (шестая метка времени в последовательности из 11 последних меток времени в блокчейне – прим. переводчика).  
> Этот BIP будет активен с полуночи 1 августа 2017 года (метка времени 1501545600) до полуночи 15 ноября 2017 года (метка времени 1510704000), если существующее развертывание Segwit не заблокировано или не активировано до метки времени 1501545600. Этот BIP перестанет быть активным, если Segwit будет заблокирован.  
> Пока этот BIP активен, во всех блоках первые 3 бита заголовка NVersion должны быть равны 001, так же, как и поле Bit (1<<1) (в соответствии с существующей процедурой развертывания Segwit). Блоки, которые не сигнализируют должным образом, должны быть отклонены.

С точки зрения концепции малых блоков идея была крайне спорной и очень рискованной. Во-первых, бóльшая часть нарратива лагеря малых блоков до этого момента была посвящена терпению и сугубо спокойному и безопасному изменению правил консенсуса. Предлагаемое обновление было опасным: от майнеров требовалось просигнализировать о поддержке, а если они этого не сделают, результатом может стать разделение цепи. Во-вторых, это было очень рискованно, потому что, если BIP 148 UASF потерпит неудачу, что казалось вполне возможным, это могло передать инициативу крупноблочникам. На текущем этапе войны они разделились на несколько фракций: например, на тех, кто считал Крэйга Райта Сатоши, и тех, кто считал его аферистом; на тех, кто считал Bitcoin Unlimited надежной идеей, и тех, кто считал ее ошибочной; на тех, кто подался в ICO, и тех, кто по-прежнему был верен Биткоину. Однако, надо отдать должное, до этого момента мелкоблочники в основном были едины. Для их стороны это было ключевым преимуществом, помогающим им пользоваться в этой войне большой поддержкой. Возникшее разноголосие в лагере малых блоков грозила расколоть его надвое, что могло иметь для их дела разрушительные последствия.

Например, Грегори Максвелл, один из самых влиятельных теоретиков на стороне малых блоков, выступил против UASF и четко сформулировал эту точку зрения в письме от 14 апреля 2017 года:

> Я не поддерживаю BIP148 UASF примерно по тем же причинам, по которым я поддерживаю Segwit: Биткоин ценен отчасти потому, что он обладает высокой безопасностью и стабильностью. Segwit был тщательно разработан, чтобы сейчас и в будущем люди могли рассчитывать на тот же или более высокий уровень инженерной надежности.  
> Мне не кажется, что (sic) подход, предложенный в BIP148, действительно соответствует стандарту, установленному самим Segwit, или существующим передовым методам разработки протоколов в нашем сообществе.  
> Основной недостаток BIP148 заключается в том, что принудительная активация существующих узлов (не связанных с UASF Segwit) _почти_ гарантируется при незначительном уровне сбоев.  
> Однако Segwit был тщательно спроектирован таким образом, чтобы после его активации старые _все_ немодифицированные майнеры могли продолжать работать как ни в чем ни бывало.  
> Старые узлы не будут видеть отделенные подтверждения трат, поэтому для них блоки с транзакциями Segwit не будут недействительными, даже если эти узлы не поддерживают Segwit. Они могут перейти на поддержку нового формата, когда им самим будет удобнее. Единственный риск, который несут не обновившиеся майнеры после активации Segwit, заключается в том, что если кто-то другой произведет недействительный блок, они могут счесть его валидным и наращивать цепь над этим блоком – риск, на который многие майнеры уже сегодня часто идут, если занимаются шпионским майнингом.  
> Я не думаю, что BIP 148 – ужасное предложение: оно спроектировано лучше, чем то, что творится с различными альткоинами – но нашим нормальным стандартам оно не соответствует. Я уважаю мотивацию авторов BIP 148. Если ваша цель – максимально быстрая активация Segwit, тогда очень полезно воспользоваться наличием более 80% существующих узлов, которые уже поддерживают исходную версию Segwit.  
> Но скорейшее внедрение не должно быть нашей главной целью как сообщества – всегда есть какой-нибудь безрассудный альткоин или централизованная система, которые смогут внедрить что-то быстрее, чем это можем мы – попытка соответствовать этому только подорвет наши выдающиеся ценности, такие как качество проектирования и стабильность.  
> "Прежде всего, не навреди". Нам следует использовать наименее разрушительные из всех доступных механизмов, а предложение BIP148 не соответствует этому критерию. Если послушать некоторых людей – не к разработчиков, а пользователей на Reddit и подобных площадках – они видят в принудительном отказе через BIP 148 некую добродетель, наказание за плохое поведение майнеров. Я не могу (sic) более решительно отмежеваться от этой точки зрения, чем делаю это сейчас.  
> Разумеется, я не против концепции UASF как таковой, но _в общем софтфорк (любого вида) не должен ассоциироваться с риском сбоя майнинга, как не дает его сама по себе активация Segwit. UASF – это самый первый из всех типов софтфорка и единственный вид форка, который практиковал Сатоши. P2SH был активирован в заданную дату, а все предыдущие форки были привязаны к определенному времени или высоте блока. Мы ввели активацию на основе сигнализации майнеров как часть процесса повышения стабильности Биткоина в качестве общего решения для тех периодов, когда экосистема находится в гармонии. Довольно странно видеть, что UASF изображается как нечто новое.  
> Важно, чтобы пользователи не зависели от милости какой-либо части экосистемы в той мере, в какой мы можем этого избежать – будь то разработчики, биржи, форумы или производители оборудования для майнинга. В конечном итоге правила Биткоина работают, потому что они соблюдаются пользователями коллективно – это то, что делает Биткоин Биткоином, именно то, благодаря чему люди могут на него рассчитывать: правила нелегко взять и изменить.  
> Были и другие предложения UASF, позволяющие избежать принудительного сбоя – просто определив новый сигнальный бит и разрешив майнерам и узлам, не обновленным в рамках UASF, оставаться без обновления. Я думаю, что эти предложения намного лучше. Их развертывание будет медленнее, но я не думаю, что это недостаток.  
> Нам следует набраться терпения. Биткоин – это система, которая должна постепенно взрослеть и поддерживать человечество в течение долгого времени – через десять лет пара лет споров будет казаться ничем. Но репутация, которую мы зарабатываем благодаря стабильности и порядочности, поддерживая денежную систему, на которую люди могут рассчитывать, будет значить все.  
> Если наши споры и вспомнят, то лишь в форме напоминания людям, что Биткоин не так легко изменить по прихоти, даже когда прихоти явно хороши, и как это защищает его от управления в духе управления всеми конкурирующими денежными системами, используемыми в мире. 🙂  
> Так что наберитесь терпения, не пытайтесь срезать углы. Segwit – хорошее усовершенствование, и мы должны уважать его, зная, что этого достаточно, чтобы его дождаться, и когда бы он ни был активирован, пусть это будет сделано наилучшим образом.

Одним из первых известных биткоин-разработчиков, поддержавших UASF, был Люк Младший, разработчик, который обнаружил, как вообще можно сделать SegWit софтфорком. Люк действительно обеими руками поддерживал альтернативные правила консенсуса, в то время как почти никто другой этого не делал. Однако, учитывая его личность, это вряд ли его беспокоило, и выглядел он уверенно. Один из самых уважаемых разработчиков в лагере малых блоков, Питер Вюлле, который написал большую часть кода для софтфорка SegWit, также выступил против BIP 148. В мае 2017 года в открытом чате с Люком Питер сделал следующие комментарии:

> Я предполагаю, что каждый экономически значимый полный узел отзовет поддержку кода Bip148 буквально через несколько часов после того, как на его принятие не хватит хэшрейта.  
> ...  
> Люк-мл., Я думаю, ты ненормальный.

Стоит отметить, что Питер быстро извинился за "безумный" комментарий. Учитывая взгляды разработчиков, таких как Питер и Грегори, теперь казалось крайне маловероятным, что Bitcoin Core выпустит клиент, реализующий BIP 148. Для успеха UASF мелкоблочникам, по иронии судьбы, теперь требовалось самим запустить альтернативный клиент с другими правилами консенсуса, как это сделали крупноблочники в случае с Bitcoin XT, Bitcoin Classic и Bitcoin Unlimited.

Именно это и произошло: Люк в конце концов выпустил клиент, реализующий BIP 148, с тегом пользовательского агента в заголовке "/Satoshi:0.14.2/UASF-Segwit:0.3(BIP148)/". Пользователям было рекомендовано продолжать использовать Bitcoin Core, но изменить свой идентификатор пользовательского агента, чтобы показать поддержку BIP 148, что также было популярной практикой в то время. Некоторые утверждали, что это была плохая практика, поскольку клиент на самом деле не реализовал правила BIP148, однако другие отвечали, что это лишь декларация о намерениях, и указывает, что пользователи обновятся до 1 августа. Некоторые отмечали, что это было в определенной мере лицемерием, так как было именно тем поведением, за которое мелкоблочники высмеивали и критиковали крупноблочников.

В начале мая 2017 года я пообщался в Гонконге с одним из самых значимых закулисных сторонников UASF. Разработчик, с которым я разговаривал, написал код для клиента UASF и содержал несколько веб-сайтов в поддержку UASF. Я объяснял ему, что использование UASF рискованно и важно проявлять терпение в отношении правил консенсуса Биткоина. Он дал длинный и решительный ответ. _"В обычное время ты был бы прав, – заявил он, – однако сейчас непростые времена, мы находимся в состоянии войны"_. Он продолжил: _"Биткоин находится в кризисной ситуации, Bitmain злонамеренно использует уязвимость ASICBoost, SegWit исправляет эту уязвимость, и нам нужно срочно его внедрять. Это чрезвычайная ситуация, поэтому у нас нет времени на нормальный терпеливый подход"_. Далее он объяснил, что на войне не всегда есть возможность выбрать подходящее время. Он учитывал, что до активации UASF осталось всего несколько месяцев, но, по его словам, лагерь малых блоков в настоящее время занимает доминирующее положение в войне, и нет никаких гарантий, что это продлится долго. _"Пришло время использовать наиболее мощное оружие_ _когда мы сильны"_. Он продолжил: _"У нас нет другого выбора, нам нужно действовать сейчас, обострить конфликт до уровня ядерной войны и решительно выиграть эту войну ради будущего Биткоина. Если мы этого не сделаем, мы рискуем проиграть, и Биткоин будет мертв"_. Этот разработчик, казалось, продумал все сценарии и был уверен, что BIP 148 сработает. По его мнению, значительным преимуществом был тот факт, что BIP 148 это софтфорк, подмножество текущих правил консенсуса, это облегчит майнерам задачу переключения на цепь BIP 148. Он считал, что BIP 148 – реальная угроза, но майнерам легко ее избежать, просто активировав SegWit, так что намеченный согласно BIP 148 софтфорк в августе 2017 года по факту так и не не произойдет. _"BIP 148 содержит код, который не применяется, если SegWit уже активирован"_, – пояснил он.

Первоначально эта идея вызывала споры в лагере малых блоков, но к маю 2017 года она приобрела значительную популярность. В Логове Драконов работали с полной отдачей, поддерживая BIP 148 и UASF. Самсон Мау даже организовал производство, продажу и распространение кепок с вышитыми буквами UASF. Эта кепка обычно была в цветах милитари и носилась мелкоблочниками на посвященных Биткоину конференциях и тусовках, чтобы в узких кругах показать свою поддержку этой кампании. На тот момент обсуждение UASF преобладало только внутри сообщества малых блоков, в то время как крупноблочники и более широкие слои криптовалютной индустрии в основном его игнорировали. И только к концу мая 2017 года идея получила более широкое распространение за пределами лагеря малых блоков.

С тактической точки зрения крупноблочники были слишком неповоротливыми, чтобы успеть отреагировать и даже просто понять UASF. Они должны были увидеть потенциальный раскол в лагере малых блоков, а затем попытаться обратить на него внимание публики и использовать его, точно так же, как мелкоблочники поступали во время потенциальных расколов в лагере крупных блоков. Вместо этого крупноблочники в основном игнорировали UASF. Ближе к концу мая я поговорил с одним из самых известных игроков этого лагеря, чтобы обсудить UASF. Он заявил, что не верит, будто бы Грегори Максвелл действительно выступал против UASF; Он объяснил, что это была просто его "обычная ложь и игра". Похоже, к этому моменту уровень недоверия был настолько высок, что, в сочетании с совершенно иным пониманием работы Биткоина, крупноблочники практически не могли разобраться, что замышляют оппоненты. Мне казалось, что мелкоблочники наконец сделали свой ход и оставили потенциальную брешь в обороне. Раз уж война продолжается, крупноблочникам нужно реагировать и использовать дыру в защите, но они, похоже, не понимали, что делать.

Крупноблочники также, похоже, были искренне обеспокоены UASF. В начале войны они сильно недооценили размер и влияние лагеря малых блоков, ожидая легкой победы в войне. Они часто высмеивали мелкоблочников как наивных и незначительных. Но на данный момент, после трех неудачных попыток хардфорка – поражений, которые застали их врасплох – большинство крупноблочников, похоже, наоборот, переоценивали силу и влияние противников. На самом деле лагерь малых блоков был гораздо менее сильным, чем те думали. Основной причиной их успеха в победе над крупноблочниками до этого момента было их превосходное понимание Биткоина, тактические промахи самих крупноблочников и присущая Биткоину устойчивость к спорным изменениям правил протокола. Не имея полного понимания ситуации, в лагере крупных блоков вместо этого обвиняли в своих поражениях хитрых и мощных мелкоблочников. Таким образом, казалось, что крупноблочники уважают оппонентов, и многие из них опасаются UASF, который они рассматривают как следующий большой шаг мелкоблочников. Они не видели тактических возможностей, которые перед ними открылись. Таким образом, они не сумели ими воспользоваться.

На тот момент у UASF почти не было поддержки со стороны криптовалютных бирж. Большинство руководителей бирж, с которыми я разговаривал в то время, либо ожидали провала UASF, либо даже не знали, в чем дело. Уровень экономической поддержки UASF за пределами лагеря малых блоков был крошечным. Это был рискованный шаг со стороны мелкоблочников, и мне казалось вероятным, что в результате своего форка они могут оказаться в цепи с малым хэшрейтом, которая не будет считаться Биткоином. Крупноблочники должны были подумать о выпуске "контр-софтфорка", который бы запретил использование флагов BIP 148 в блоках. Эта цепь, вероятно, будет доминировать и экономически, и по хэшрейту. Появление контр-UASF также гарантировало бы чистое разделение, и цепь, не относящаяся к UASF, больше не была бы уязвима для уничтожения. Однако крупноблочники вообще не думали подобным образом. Они хотели увеличить размер блока через хардфорк; у них не было ни опыта, ни желания внедрять контр-софтфорк.

Джихан Ву был крайне возмущен кампанией по продвижению UASF. По его мнению, UASF подорвал созданный им нарратив о том, что майнеры имеют значительное влияние на правила протокола. 28 мая 2017 года Джихан разместил твит с фотографией жертв резни в Джонстауне, сопроводив его тегом #UASF. Его гнев и страх по поводу UASF явно были сильны.

В середине июня биржа ViaBTC, связанная с Джиханом Ву, разместила на платформе фьючерс на BIP 148. Очевидно, эта идея была взята у Bitfinex, с их появившимся несколькими месяцами ранее токеном Bitcoin Unlimited. Это была попытка подорвать BIP 148, точно так же, как фьючерсы Bitfinex подорвали Bitcoin Unlimited. Однако условия контракта были довольно странными и несколько нечестными. Если вы инвестировали в токен BIP 148, вы могли получить выплату только в том случае, если продолжали существовать как цепь токенов BIP 148, так и цепь с исходными правилами (цепь без BIP 148). Это было явно не то, чего хотели сторонники BIP 148. Они считали, что цепь с исходными правилами перестанет существовать, в частности, потому что цепь с исходными правилами была уязвима для стирания из цепи BIP 148. Следовательно, инвестирование в токен, зависящий от продолжения существования цепи, не связанной с BIP 148, не имело большого смысла для сторонников BIP 148. Контрактом не удалось достичь какого-либо значительного объема торгов, и, похоже, он не подорвал BIP 148.

14 июня 2017 года Bitmain опубликовала пост, в котором изложила экстренный план действий в ответ на UASF:

> BIP148 очень опасен для бирж и другого бизнеса. Нет никаких признаков существенной экономической поддержки BIP148, и когда он проявится в блокчейне, экономическая поддержка, скорее всего, будет основана на спекуляциях. Активность майнинга, стоящая за цепочкой UASF, может прекратиться без предупреждения, а инвесторы, которые купят эти токены под влиянием пропаганды BIP148, могут потерять все свои вложения. Любые биржи, которые решат поддерживать токен UASF после старта форка, должны учитывать связанный с ним риск остановки.  
> ...  
> Цепь UASF представляет собой риск стирания исходной цепи. Если нет плана на случай непредвиденных обстоятельств, вся экономическая деятельность, которая происходит в исходной цепи после старта форка UASF, столкнется с риском уничтожения. Это имеет катастрофические последствия для всей экосистемы Биткоина. UASF – это атака на пользователей и бизнесы, которые не согласны с немедленной активацией SegWit без увеличения размера блока, а это увеличение является очень важным пунктом в Гонконгском соглашении, заключенном глобальным биткоин-сообществом в феврале 2016 года.  
> ...  
> Этот план предполагает активируемый пользователями хардфорк или UAHF  
> ...  
> Bitmain будет майнить цепь UAHF в течение минимум 72 часов после точки разветвления BIP148, выделив на это некоторый процент своего собственного хэшрейта. Bitmain, скорее всего, не будет немедленно передавать добытые блоки в общедоступную сеть, если этого не требуют обстоятельства. Это означает, что Bitmain сначала будет майнить свою цепь в частном порядке. Мы намерены опубликовать добытые блоки в следующих ситуациях (неполный список):  
> Цепь BIP148 активирована и впоследствии получает значительную поддержку со стороны майнинг-индустрии, то есть после того, как BIP148 уже успешно привел к разделу цепи;  
> Настроения рынка в отношении хардфорка с крупными блоками сильны, и экономические стимулы заставляют нас его майнить, например, обменный курс перевешивает в пользу биткоинов с крупными блоками;  
> Если уже есть значительное количество других майнеров, публично занимающихся майнингом цепи крупных блоков, и мы решаем, что для нас рационально майнить, продолжая эту цепь. В этом случае мы также рассмотрим возможность присоединения к этой цепи и откажемся от нашей частной цепи, чтобы публичная цепь UAHF не подвергалась риску реорганизации.  
> Как только Bitmain начнет публично майнить цепь UAHF, мы будем делать это постоянно, игнорируя краткосрочные экономические стимулы. Мы считаем, что дорожная карта, включающая возможность корректировки размера блока, будет лучше обслуживать пользователей, поэтому мы ожидаем, что она приведет к повышению рыночной цены в долгосрочной перспективе.

План Bitmain состоял в том, чтобы примерно в то же время, когда должен был активироваться UASF, активировать хардфорк, увеличивающий лимит размера блока. План хардфорка даже включал график увеличения лимита размера блока. Он должен был стартовать с 2 Мб в августе 2017 года, а затем постепенно увеличиваться заранее определенными шагами до 16,8 Мб к августу 2019 года. Этот план выглядел как своего рода угроза в адрес сторонников UASF. Крупноблочники получат после хардфорка свою новую цепь, чего, по их мнению, мелкоблочники отчаянно надеялись не допустить.

Хотя Джихан, похоже, не осознавал этого, его план был на самом деле невероятно благоприятным для дела UASF, потому что это означало, что цепочка UASF с большей вероятностью получит преимущество в proof-of-work по сравнению с исходной цепочкой правил, раз уж Bitmain указала, что планируется переход на альтернативную цепь хардфорка. В дополнение к этому Bitmain планировал тайно майнить новую цепь хардфорка в течение 72 часов. Это был очень плохой ход, если планировалось, что цепь хардфорка наберет обороты, поскольку никто не мог видеть эту цепь или запускать клиент, поддерживающий хардфорк, а биржи не могли поддерживать соответствующий токен. Непонятно, что послужило мотивом для этого сообщения в блоге. Похоже, что Джихан был чрезвычайно зол и быстро разработал план, призванный расстроить его противников, но не продумал его до конца. Разумеется, Джихану следовало объявить, что в случае UASF он продолжит работу над цепью с исходными правилами, а тем временем организоваь встречный UASF. Однако это привело бы к тому, что ему пришлось бы поддерживать ненужные ему блоки по 1 Мб, поэтому, возможно, он чувствовал, что у него нет особого выбора.

В Логове Драконов с восторгом отметили пост в блоге Bitmain, так как он почти гарантировал им полную победу. Однако некоторые выбрали более осторожный тон: _"Не думайте, что Джихан сделает что-то глупое только потому, что он это обещает"_. Мне показалось, что эта более осторожная позиция была правильным подходом. По мере приближения 1 августа Джихан, скорее всего, поймет, что его план не имеет смысла, и переключится на что-то более эффективное.

По мере приближения дедлайна UASF игроки лагеря крупных блоков оказывались вне игры, поскольку не знали, как эффективно реагировать. Казалось, что у них не осталось жизнеспособных вариантов. Похоже, они наконец-то были близки к унизительному поражению, и понимали это. Им нужно было что-то предпринять для спасения своей репутации.

---

[Оригинал](https://blog.bitmex.com/the-blocksize-war-chapter-17-user-activated-softfork/)

{{< details "Оглавление" "..." >}}

[Главная страница](/vojna-za-razmer-bloka)

[Глава 1: Первый удар](/vojna-za-razmer-bloka/glava-1)

[Глава 2: Начало](/vojna-za-razmer-bloka/glava-2)

[Глава 3: Масштабирование I Монреаль](/vojna-za-razmer-bloka/glava-3)

[Глава 4: Масштабирование II Гонконг](/vojna-za-razmer-bloka/glava-4)

[Глава 5: SegWit](/vojna-za-razmer-bloka/glava-5)

[Глава 6: Сеть Lightning](/vojna-za-razmer-bloka/glava-6)

[Глава 7: Bitcoin Classic](/vojna-za-razmer-bloka/glava-7)

[Глава 8: Круглый стол в Гонконге](/vojna-za-razmer-bloka/glava-8)

[Глава 9: Фейковый Сатоши](/vojna-za-razmer-bloka/glava-9)

[Глава 10: DAO](/vojna-za-razmer-bloka/glava-10)

[Глава 11: Масштабирование III Милан](/vojna-za-razmer-bloka/glava-11)

[Глава 12: Bitcoin Unlimited](/vojna-za-razmer-bloka/glava-12)

[Глава 13: Биржи](/vojna-za-razmer-bloka/glava-13)

[Глава 14: ASICBoost](/vojna-za-razmer-bloka/glava-14)

[Глава 15: Логово драконов](/vojna-za-razmer-bloka/glava-15)

[Глава 16: Litecoin](/vojna-za-razmer-bloka/glava-16)

[Глава 17: UASF – Активируемый пользователями софтфорк](/vojna-za-razmer-bloka/glava-17)

[Глава 18: Нью-Йоркское соглашение](/vojna-za-razmer-bloka/glava-18)

[Глава 19: Bitcoin Cash](/vojna-za-razmer-bloka/glava-19)

[Глава 20: SegWit2x](/vojna-za-razmer-bloka/glava-20)

[Глава 21: Победа](/vojna-za-razmer-bloka/glava-21)

{{< /details >}}
