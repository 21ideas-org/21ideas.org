---
title: "Установка Bitcoin Core и Tor"
h1: "Часть 1. Установка Bitcoin Core и Tor"
description: ""
cover: /img/dojo-04.jpg
url: practice-privacy/dojo-1
date: 2023-12-20
bookFlatSection: false
bookToc: true
weight: 2
---

{{< expand "Оглавление" "..." >}}

## Установка Биткоин-узла Dojo на x86

[Введение](/practice-privacy/dojo-0)

[Часть 1. Установка Bitcoin Core и Tor](/practice-privacy/dojo-1)

[Часть 2. Установка индексатора Fulcrum](/practice-privacy/dojo-2)

[Часть 3. Установка блокчейн-обозревателя Mempool](/practice-privacy/dojo-3)

[Часть 4. Установка Samourai Dojo](/practice-privacy/dojo-4)

[Часть 5. Конфигурация межсетевого экрана](/practice-privacy/dojo-5)

[Часть 6. Установка обновлений пакетов](/practice-privacy/dojo-6)

{{< /expand >}}

## Введение

Bitcoin Core возник из первого программного Биткоин-клиента, выпущенного Сатоши Накамото, псевдонимным создателем (создателями) Биткоин, в 2009 году. Изначально он назывался "Bitcoin", но позже был переименован в "Bitcoin Core", чтобы отличить его от более широко известной сети и валюты Биткоин.

Запуская Bitcoin Core, участники вносят свой вклад в децентрализованную и управляемую консенсусом природу сети Биткоин. Каждый узел самостоятельно проверяет транзакции и блоки, обеспечивая соблюдение правил сети без опоры на центральный орган.

## Создание пользователя в системе

Создайте пользователя "satoshi" во время начальной установки Ubuntu. Вы можете создать "satoshi" с помощью следующей команды, если был создан другой пользователь.

```bash
sudo adduser --gecos "" satoshi
```

Создайте сложный пароль для пользователя, избегая специальных символов.

Предоставьте "satoshi" права sudo.

```bash
sudo usermod -aG sudo satoshi
```

Войдите в систему под именем нового пользователя.

```bash
su - satoshi
```

Запустите обновление системы. Используйте созданный ранее пароль sudo.

```bash
sudo apt update && sudo apt upgrade -y
```

Установите необходимые зависимости.

```bash
sudo apt install curl gpg unzip apt-transport-https -y
```

## Локальный IP

На протяжении всего руководства вам нужно будет знать локальный IP-адрес вашего узла, чтобы внести необходимые изменения в различные конфигурационные файлы.

Если вы не знаете локальный IP-адрес своего узла, выполните следующую команду. Запишите его для дальнейшего использования.

```bash
hostname -I
```

## Настройка Tor

Создайте новый файл источников приложений для Tor.

```bash
sudo nano /etc/apt/sources.list.d/tor.list
```

Вставьте следующие строки, затем сохраните файл и выйдите из редактора с помощью "control+x", подтвердите "y", затем "enter".

```bash
deb [signed-by=/usr/share/keyrings/tor-archive-keyring.gpg] https://deb.torproject.org/torproject.org jammy main
deb-src [signed-by=/usr/share/keyrings/tor-archive-keyring.gpg] https://deb.torproject.org/torproject.org jammy main
```

Импортируйте gpg-ключ Tor Project.

```bash
sudo wget -qO- https://deb.torproject.org/torproject.org/A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tor-archive-keyring.gpg >/dev/null
```

Установите Tor и Tor Debian keyring.

```bash
sudo apt update && sudo apt install tor deb.torproject.org-keyring -y
```

Откройте файл "torrc".

```bash
sudo nano /etc/tor/torrc
```

Вставьте следующие строки в начало файла, затем сохраните и выйдите.

```bash
# Hidden Service Bitcoind
ControlPort 9051
CookieAuthentication 1
CookieAuthFileGroupReadable 1
```

Добавьте пользователя "satoshi" в группу Tor.

```bash
sudo usermod -aG debian-tor satoshi
```

## Настройка демона Bitcoin

### Загрузка и проверка Bitcoin Core

Создайте директорию для загрузок.

```bash
mkdir ~/downloads
```

Перейдите в созданную директорию.

```bash
cd ~/downloads
```

Посетите сайт [bitcoincore.org](https://bitcoincore.org/bin/) и найдите страницу самой последней версии Bitcoin Core, избегая релизов с пометкой "test". На момент написания статьи последней версией является v27.0.

Скопируйте URL-адрес пакета "x86_64-linux-gnu.tar.gz" и загрузите его с помощью "wget".

```bash
torsocks wget https://bitcoincore.org/bin/bitcoin-core-27.0/bitcoin-27.0-x86_64-linux-gnu.tar.gz
```

На этой же странице загрузите файл "SHA256SUMS".

```bash
torsocks wget https://bitcoincore.org/bin/bitcoin-core-27.0/SHA256SUMS
```

Затем скачайте "SHA256SUMS.asc".

```bash
torsocks wget https://bitcoincore.org/bin/bitcoin-core-27.0/SHA256SUMS.asc
```

Проверьте контрольную сумму скачанного файла.

```bash
sha256sum --ignore-missing --check SHA256SUMS
```

{{% hint info %}}
В выводе команды должно появиться сообщение "OK" (*"ЦЕЛ"*), например: "bitcoin-0.0-x86_64-linux-gnu.tar.gz: OK."
{{% /hint %}}

Проверьте валидность файла релиза, сверив подписи с известными [ключами разработчиков](https://github.com/bitcoin-core/guix.sigs/tree/main/builder-keys) из официального репозитория Bitcoin Core.

Импортируйте ключи разработчиков в связку ключей GPG.

```bash
torsocks curl -s https://api.github.com/repos/bitcoin-core/guix.sigs/contents/builder-keys | \
grep download_url | cut -d '"' -f 4 | \
xargs -n 1 curl -O && \
ls *.gpg | xargs -n 1 gpg --import && \
rm *.gpg
```

Проверьте подписи.

```bash
gpg --verify SHA256SUMS.asc
```

Это выведет серию проверок подписи для каждого открытого ключа, подписавшего файл с контрольными суммами.

{{% hint info %}}
На ключах, ранее импортированных в вашу связку ключей, должно появиться сообщение "gpg: Good signature" (*"gpg: Действительная подпись пользователя"*).
{{% /hint %}}

{{% hint info %}}
Не беспокойтесь о предупреждениях "This key is not certified with a trusted signature!" (*"Внимание: Данный ключ не заверен доверенной подписью!"*). Повышенные уровни доверия не были установлены вручную для импортируемых ключей.
{{% /hint %}}

Удалите загруженные проверочные файлы.

```bash
rm SHA256SUMS && rm SHA256SUMS.asc
```

Распакуйте Bitcoin Core.

```bash
tar xzf bitcoin-*-x86_64-linux-gnu.tar.gz
```

Удалите архив.

```bash
rm -r bitcoin-*-x86_64-linux-gnu.tar.gz
```

### Установка Bitcoin Core

Выполните следующую команду для установки Bitcoin Core.

```bash
sudo install -m 0755 -o root -g root -t /usr/local/bin bitcoin-*/bin/*
```

Удалите оставшуюся папку.

```bash
rm -r bitcoin-*/
```

Перезапустите демон Tor.

```bash
sudo systemctl restart tor
```

Запустите демон Bitcoin, а затем остановите его через несколько секунд.

```bash
bitcoind -daemon
```

```bash
bitcoin-cli stop
```

### Конфигурирование

Создайте конфигурационный файл Bitcoin Core.

```bash
nano ~/.bitcoin/bitcoin.conf
```

Вставьте в файл следующие строки.

```
#proxy=127.0.0.1:9050
#listen=1
#bind=127.0.0.1
#onlynet=onion
server=1
txindex=1
daemon=1
pruned=0
dbcache=1024
peerbloomfilters=1
rpcport=8332
rpcbind=0.0.0.0
rpcallowip=127.0.0.1
rpcallowip=10.0.0.0/8
rpcallowip=172.0.0.0/8
rpcallowip=192.0.0.0/8
zmqpubrawblock=tcp://0.0.0.0:28332
zmqpubrawtx=tcp://0.0.0.0:28333
zmqpubhashblock=tcp://0.0.0.0:28334
whitelist=127.0.0.1
```

Теперь вы должны выбрать, как синхронизировать блокчейн - через [клирнет](https://www.getmonero.org/ru/resources/moneropedia/clearnet.html) или Tor. Если приоритетом является максимально быстрая синхронизация, оставьте "#" в верхних 4 строках на месте. Обратите внимание, что при синхронизации через Tor нужно набраться терпения.

{{% hint info %}}
При синхронизации через клирнет настоятельно рекомендуется использовать VPN на уровне маршрутизатора.
{{% /hint %}}

Если вашим приоритетом является анонимная синхронизация, удалите "#" из верхних 4 строк, чтобы bitcoind никогда не подключался к клирнету и использовал только Tor-соединение. Это займет гораздо больше времени, чем синхронизация через клирнет, однако преимущества конфиденциальности будут значительными.

У вас также есть возможность включить или отключить опцию "Mempool Full-RBF". Если вы хотите, чтобы ваш выбор сохранялся при обновлениях Bitcoin Core, независимо от того, какие значения по умолчанию будут выбраны в будущих релизах, рекомендуется отметить это в вашем conf-файле, используя аргумент enable (1) или disable (0).

Вы можете проигнорировать эту строку, если вас устраивает любое значение по умолчанию, выбранное для вас в будущих обновлениях.

```
mempoolfullrbf=0
```

Оставьте файл открытым и запустите новую сессию терминала. Войдите по SSH и загрузите файл [rpcauth.py](https://github.com/bitcoin/bitcoin/blob/master/share/rpcauth/rpcauth.py)" из репозитория Bitcoin Core.

```bash
torsocks wget https://raw.githubusercontent.com/bitcoin/bitcoin/27.x/share/rpcauth/rpcauth.py
```

Установите правильные разрешения для файла.

```bash
chmod +x rpcauth.py
```

Выполните следующую команду, заменив "PASSWORDHERE" на надежный пароль RPC для Bitcoin Core. Избегайте использования специальных символов.

```bash
./rpcauth.py bitcoin PASSWORDHERE
```

Скопируйте длинную строку RPC, начинающуюся с "rpcauth=bitcoin", и вставьте ее в конце файла "bitcoin.conf", открытого в первом окне терминала.

Сохраните файл и выйдите из редактора.

Удалите файл "rpcauth.py".

```bash
rm rpcauth.py
```

### Файл системной службы

Создайте файл системной службы для автоматического запуска Bitcoin Core при загрузке системы.

```bash
cd /etc/systemd/system/
```

Скопируйте ссылку на файл "[bitcoind.service](https://github.com/bitcoin/bitcoin/blob/27.x/contrib/init/bitcoind.service)" из репозитория Bitcoin Core и скачайте его.

```bash
sudo torsocks wget https://raw.githubusercontent.com/bitcoin/bitcoin/27.x/contrib/init/bitcoind.service
```

Откройте загруженный файл.

```bash
sudo nano bitcoind.service
```

Внесите следующие изменения.

```
####замените
ExecStart=/usr/bin/bitcoind -pid=/run/bitcoind/bitcoind.pid \
                            -conf=/etc/bitcoin/bitcoin.conf \
                            -datadir=/var/lib/bitcoind \
                            -startupnotify='systemd-notify --ready' \
                            -shutdownnotify='systemd-notify --stopping'

##на
ExecStart=/usr/local/bin/bitcoind -pid=/run/bitcoind/bitcoind.pid \
                            -conf=/home/satoshi/.bitcoin/bitcoin.conf \
                            -datadir=/home/satoshi/.bitcoin \
                            -startupnotify='systemd-notify --ready' \
                            -shutdownnotify='systemd-notify --stopping'
```

```
####закомментируйте строку
ExecStartPre=/bin/chgrp bitcoin /etc/bitcoin

##следующим образом
#ExecStartPre=/bin/chgrp bitcoin /etc/bitcoin
```

```
####замените
User=bitcoin
Group=bitcoin

##на
User=satoshi
Group=satoshi
```

```
####закомментируйте строку
ProtectHome=true

##следующим образом
#ProtectHome=true
```

Сохраните файл и выйдите.

Включите системную службу.

```bash
sudo systemctl enable bitcoind
```

{{% hint info %}}
При синхронизации через Tor сразу переходите к шагу: [Пиры в сети Tor](/practice-privacy/dojo-1/#%d0%bf%d0%b8%d1%80%d1%8b-%d0%b2-%d1%81%d0%b5%d1%82%d0%b8-tor).
{{% /hint %}}

### Синхронизация через клирнет

**(Пропустите этот шаг, если синхронизация осуществляется через Tor)**

При синхронизации через клирнет дождитесь завершения начальной загрузки блоков (Initial Block Download - IBD), прежде чем переходить к шагу "Пиры в сети Tor".

Запустите bitcoind.

```bash
sudo systemctl start bitcoind
```

Следите за процессом синхронизации с помощью следующей команды из домашней директории. Как только в журналах появится сообщение "progress=1.000000", процесс IBD будет завершен.

```bash
tail -f .bitcoin/debug.log
```

Теперь удалите "#" в строках **proxy**, **listen**, **bind** и **onlynet** в файле конфигурации и перезапустите bitcoind. Это гарантирует, что все будущие данные блоков будут загружаться только через Tor.

```bash
sudo systemctl stop bitcoind
```

```bash
nano ~/.bitcoin/bitcoin.conf
```

```bash
sudo systemctl restart bitcoind
```

### Пиры в сети Tor

Первый пир в Tor необходимо добавить вручную. Откройте файл "bitcoin.conf", затем посетите страницу с узлами в сети Tor по адресу [Bitnodes.io](https://bitnodes.io/nodes/?q=tor).

```bash
nano ~/.bitcoin/bitcoin.conf
```

Выберите активный узел из списка и скопируйте адрес Tor и номер порта.

Вернитесь в терминал и вставьте адрес в конец файла "bitcoin.conf".

Как показано в примере ниже, добавьте префикс "addnode=".

```
addnode=ufi6x4yympldoxmzgszvq5pb3pzixxjicvrhssrmky23f5bgxfxlfqd.onion:8333
```

{{% hint info %}}
Внимание: В этом примере не используется активный узел, не копируйте его.
{{% /hint %}}

Сохраните файл и выйдите из редактора, затем перезагрузите компьютер.

```bash
sudo reboot
```

Подождите несколько минут, затем подключитесь к узлу по SSH под именем "satoshi".

Проверьте, что узел успешно подключается к пирам в Tor. В зависимости от времени ожидания вам может потребоваться выполнить эту команду несколько раз.

```bash
bitcoin-cli getconnectioncount
```

Если вывод показывает несколько пиров, вы можете вернуться в "bitcoin.conf" и удалить всю строку "addnode", затем сохранить и выйти.

```bash
nano .bitcoin/bitcoin.conf
```

Перезапустите демон Bitcoin.

```bash
sudo systemctl restart bitcoind
```

Подождите несколько минут, а затем проверьте, что вы по-прежнему подключаетесь к узлам Tor.

```bash
bitcoin-cli getconnectioncount
```

### Настройка сети

Убедитесь, что сетевой трафик проходит только через Tor.

В выводе должно быть показано состояние "reachable false" как для "IPV4", так и для "IPV6".

Также убедитесь, что "onion" показывает статус "reachable true".

```bash
bitcoin-cli getnetworkinfo
```

В выводе команды также отображается ваш onion-адрес Bitcoin Core. Это полезно для сервисов, требующих прямого подключения к Bitcoin Core.

Вы также можете делать прямые запросы на ваш onion-адрес.

```bash
bitcoin-cli getnetworkinfo | grep address.*onion
```

Если вы выполняете синхронизацию через Tor, следите за прогрессом с помощью следующей команды из домашней директории.

```bash
tail -f .bitcoin/debug.log
```

Прежде чем продолжить, дождитесь окончания синхронизации Bitcoin Core. Как только в журналах появится сообщение "progress=1.000000", процесс IBD будет завершен.

{{< expand "Оглавление" "..." >}}

## Установка Биткоин-узла Dojo на x86

[Введение](/practice-privacy/dojo-0)

[Часть 1. Установка Bitcoin Core и Tor](/practice-privacy/dojo-1)

[Часть 2. Установка индексатора Fulcrum](/practice-privacy/dojo-2)

[Часть 3. Установка блокчейн-обозревателя Mempool](/practice-privacy/dojo-3)

[Часть 4. Установка Samourai Dojo](/practice-privacy/dojo-4)

[Часть 5. Конфигурация межсетевого экрана](/practice-privacy/dojo-5)

[Часть 6. Установка обновлений пакетов](/practice-privacy/dojo-6)

{{< /expand >}}