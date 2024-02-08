---
title: "Установка Samourai Dojo"
h1: "Часть 4. Установка Samourai Dojo"
description: ""
cover: /img/dojo-07.jpg
url: practice-privacy/dojo-4
date: 2023-12-20
bookFlatSection: false
bookToc: true
weight: 5
---

{{< expand "Оглавление" "..." >}}

## Установка Биткоин-узла Dojo на x86

[Введение](/privacy/dojo-0)

[Введение](/practice-privacy/dojo-0)

[Часть 1. Установка Bitcoin Core](/practice-privacy/dojo-1)

[Часть 2. Установка индексатора Fulcrum](/practice-privacy/dojo-2)

[Часть 3. Установка блокчейн-обозревателя Mempool](/practice-privacy/dojo-3)

[Часть 4. Установка Samourai Dojo](/practice-privacy/dojo-4)

[Часть 5. Установка Whirlpool CLI и конфигурация межсетевого экрана](/practice-privacy/dojo-5)

[Часть 6. Установка обновлений пакетов](/practice-privacy/dojo-6)

{{< /expand >}}

{{% hint btc %}}
Перед выполнением дальнейших шагов убедитесь, что завершены все действия из частей [1](/privacy/dojo-1), [2](/privacy/dojo-2), [3](/privacy/dojo-3).
{{% /hint %}}

## Введение

Dojo - это программное обеспечение, которое повышает конфиденциальность и безопасность пользователей [Samourai Wallet](https://samouraiwallet.com/). Программное обеспечение Dojo представляет собой ваш личный бэкэнд-сервер с полным узлом, к которому могут подключаться пользователи Samourai Wallet, что повышает приватность, устраняя необходимость подключения к публичному серверу/узлу.

Запуск сервера Dojo необходим для тех, кто хочет использовать преимущества приватности, достигаемые благодаря инструментам траты средств после смешивания в Samourai Wallet и мощной реализации [CoinJoin](/coinjoin-pandul) - Whirlpool.

## Создание пользователя Dojo

Создание отдельной учетной записи пользователя для Dojo полезно для безопасности.

```bash
sudo useradd -s /bin/bash -d /home/dojo -m -G sudo dojo
```

Задайте пароль для нового пользователя.

```bash
sudo passwd dojo
```

Предоставьте пользователю "dojo" необходимые разрешения.

```bash
sudo usermod -aG docker dojo
```

Перезагрузите устройство.

```bash
sudo reboot
```

После успешной перезагрузки системы снова войдите в систему по SSH под именем пользователя "dojo".

## Загрузка Dojo

Загрузите последнюю версию Dojo из официального репозитория [Samourai](https://code.samourai.io/dojo/samourai-dojo/-/releases).

```bash
torsocks wget https://code.samourai.io/dojo/samourai-dojo/-/archive/master/samourai-dojo-master.zip
```

Распакуйте скачанный архив.

```bash
unzip samourai-dojo-master.zip
```

Создайте директорию для Dojo.

```bash
mkdir ~/dojo-app
```

Переместите распакованные файлы в новый каталог.

```bash
mv ~/samourai-dojo-master/* ~/dojo-app/
```

Удалите пустой архив и папку.

```bash
rm -r samourai-dojo-master && rm samourai-dojo-master.zip
```

## Конфигурирование Dojo

Перед инициализацией Dojo необходимо изменить несколько конфигурационных файлов.

```bash
cd ~/dojo-app/docker/my-dojo/conf/
```

Откройте "bitcoind.conf".

```bash
nano docker-bitcoind.conf.tpl
```

Отредактируйте следующим образом.

```
####замените значения на ваши имя пользователя и пароль для RPC Bitcoin Core
BITCOIND_RPC_USER=dojorpc
BITCOIND_RPC_PASSWORD=dojorpcpassword
```

```
####замените
BITCOIND_INSTALL=on

##на
BITCOIND_INSTALL=off
```

```
####замените значение на ваш локальный IP
BITCOIND_IP=172.28.1.5
```

```
####замените
BITCOIND_RPC_PORT=28256

##на
BITCOIND_RPC_PORT=8332
```

```
####замените
BITCOIND_ZMQ_RAWTXS=9501

##на
BITCOIND_ZMQ_RAWTXS=28333
```

```
####замените
BITCOIND_ZMQ_BLK_HASH=9502

##на
BITCOIND_ZMQ_BLK_HASH=28334
```

Сохраните файл и выйдите из редактора.

Откройте "indexer.conf".

```bash
nano docker-indexer.conf.tpl
```

Отредактируйте следующим образом.

```
####замените
INDEXER_TYPE=addrindexrs

##на
INDEXER_TYPE=fulcrum
```

```
####замените значение на ваш локальный IP
INDEXER_IP=172.28.1.6
```

```
####замените
INDEXER_RPC_PORT=50001

##на
INDEXER_RPC_PORT=50002
```

```
####замените
INDEXER_BATCH_SUPPORT=inactive

##на
INDEXER_BATCH_SUPPORT=active
```

```
####замените
INDEXER_PROTOCOL=tcp

##на
INDEXER_PROTOCOL=tls
```

Сохраните файл и выйдите из редактора.

Откройте "mysql.conf."

```bash
nano docker-mysql.conf.tpl
```

Создайте надежные пароли администратора (root) и пользователя для MySQL, а затем отредактируйте файл.

```
####замените пароли на свои
MYSQL_ROOT_PASSWORD=rootpassword
MYSQL_PASSWORD=password
```

Сохраните файл и выйдите из редактора.

Откройте "node.conf."

```bash
nano docker-node.conf.tpl
```

Создайте надежные пароли "API", "admin" и "JWT", а затем отредактируйте файл следующим образом.

```
####замените пароли на свои
NODE_API_KEY=myApiKey
NODE_ADMIN_KEY=myAdminKey
NODE_JWT_SECRET=myJwtSecret
```

```
####замените
NODE_ACTIVE_INDEXER=local_bitcoind

##на
NODE_ACTIVE_INDEXER=local_indexer
```

```
####опционально - добавьте PayNym-адрес для активации Auth47
NODE_PAYMENT_CODE=
```

Сохраните файл и выйдите из редактора.

Также есть возможность отключить устанавливаемый по умолчанию Bitcoin RPC Explorer. Это необязательная опция, при уже установленном Mempool он может не пригодиться.

Пропустите этот шаг, если хотите оставить RPC Explorer включенным.

Откройте "explorer.conf."

```bash
nano docker-explorer.conf.tpl
```

Отредактируйте файл следующим образом, чтобы отключить RPC Explorer.

```
####замените
EXPLORER_INSTALL=on

##на
EXPLORER_INSTALL=off
```

Сохраните файл и выйдите из редактора.

## Установка Dojo

Перейдите в директорию со скриптом установки Dojo.

```bash
cd ~/dojo-app/docker/my-dojo
```

Запустите скрипт.

```bash
./dojo.sh install
```

 Начнется процесс установки Dojo.

Установка будет завершена, когда появится постоянный поток логов "node.js". Выйдите из логов с помощью "control+c ".

## Dojo Maintenance Tool

Dojo Maintenance Tool, или "DMT", доступен только через Tor. Выделенный onion-адрес сервера можно запросить с помощью следующей команды.

```bash
./dojo.sh onion
```

Доступ к DMT можно получить через этот onion-адрес и войти в систему, используя ранее созданный "admin key" или "Auth47", если он был настроен ранее.

Как только панель управления DMT заполнится зелеными галочками, Dojo синхронизирован и готов к сопряжению с кошельком Samourai.

{{% image "/img/dojo-08.jpg" %}}
*Панель управления DMT, используется Testnet*
{{% /image %}}

Выберите "Pairing" в меню DMT, чтобы отобразить QR-код сопряжения, который можно отсканировать во время [процесса создания](/coinjoin-pandul/#%d1%88%d0%b0%d0%b3-2-%d0%bf%d0%be%d0%b4%d0%b3%d0%be%d1%82%d0%be%d0%b2%d0%ba%d0%b0-%d0%ba%d0%be%d1%88%d0%b5%d0%bb%d1%8c%d0%ba%d0%b0) или восстановления кошелька Samourai.

Если проводник RPC не отключен, будут отображены два QR-кода. QR-код сопряжения Dojo находится слева.

{{< expand "Оглавление" "..." >}}

## Установка Биткоин-узла Dojo на x86

[Введение](/practice-privacy/dojo-0)

[Часть 1. Установка Bitcoin Core](/practice-privacy/dojo-1)

[Часть 2. Установка индексатора Fulcrum](/practice-privacy/dojo-2)

[Часть 3. Установка блокчейн-обозревателя Mempool](/practice-privacy/dojo-3)

[Часть 4. Установка Samourai Dojo](/practice-privacy/dojo-4)

[Часть 5. Установка Whirlpool CLI и конфигурация межсетевого экрана](/practice-privacy/dojo-5)

[Часть 6. Установка обновлений пакетов](/practice-privacy/dojo-6)

{{< /expand >}}

## Поддержите переводчика

Поддержать переводчика можно, отправив немного сат в сети Лайтнинг:

{{% image "/img/btclinux-ln-qr.jpg" %}}
`LNURL1DP68GURN8GHJ7MRW9E6XJURN9UH8WETVDSKKKMN0WAHZ7MRWW4EXCUP0X9UX2VENXDJN2CTRXSUN2VE3XGCRQPNAPC6`
{{% /image %}}