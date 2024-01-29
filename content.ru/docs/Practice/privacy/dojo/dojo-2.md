---
title: "Часть 2. Установка индексатора Fulcrum"
h1: "Часть 2. Установка индексатора Fulcrum"
description: ""
cover: /img/dojo-05.jpg
url: practice-privacy/dojo-2
date: 2023-12-20
bookFlatSection: false
bookToc: true
weight: 3
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
Перед выполнением дальнейших шагов убедитесь, что:
- Завершены все действия из [части 1](/privacy/dojo-1).
- Завершен процесс IBD в Bitoin Core.
{{% /hint %}}

## Введение

После полной синхронизации Bitcoin Core следующим шагом будет установка индексатора Electrum, который обеспечивает совместимость со всеми биткоин-кошельками на базе Electrum.

Подключение кошельков непосредственно к персональному серверу Electrum, а не к Bitcoin Core, значительно повышает безопасность, поскольку Bitcoin Core хранит балансы и открытые ключи в незашифрованном виде на локальном компьютере.

Индексатор Fulcrum, совместимый с протоколом Electrum, занимает больше места, чем другие индексаторы, однако после полной синхронизации его производительность не имеет себе равных.

## Загрузка и проверка Fulcrum

Перейдите в директорию для загрузок.

```bash
cd ~/downloads
```

Зайдите на [Github](https://github.com/cculianu/Fulcrum/releases) Fulcrum в браузере и скопируйте ссылку на последний файл "x86_64-linux.tar.gz". На момент написания статьи последней версией является 1.9.8.

Скачайте Fulcrum.

```bash
torsocks wget https://github.com/cculianu/Fulcrum/releases/download/v1.9.8/Fulcrum-1.9.8-x86_64-linux.tar.gz
```

Скачайте файл "asc" для релиза.

```bash
torsocks wget https://github.com/cculianu/Fulcrum/releases/download/v1.9.8/Fulcrum-1.9.8-shasums.txt.asc
```

Загрузите файл sha256sum для релиза.

```bash
torsocks wget https://github.com/cculianu/Fulcrum/releases/download/v1.9.8/Fulcrum-1.9.8-shasums.txt
```

Проверьте контрольную сумму Fulcrum.

```bash
sha256sum -c --ignore-missing Fulcrum-*-shasums.txt
```

{{% hint info %}}
В выводе команды должно появиться сообщение "OK" (*"ЦЕЛ"*), например: "Fulcrum-0.0.0-x86_64-linux.tar.gz: OK."
{{% /hint %}}

Импортируйте [открытый ключ](https://github.com/Electron-Cash/keys-n-hashes/blob/master/pubkeys/calinkey.txt) разработчика Fulcrum из официального репозитория на GitHub.

```bash
torsocks curl https://raw.githubusercontent.com/Electron-Cash/keys-n-hashes/master/pubkeys/calinkey.txt | gpg --import
```

Убедитесь, что подписи совпадают.

```bash
gpg --verify Fulcrum-*-shasums.txt.asc
```

{{% hint info %}}
В выводе должно быть написано "Good signature from Calin Culianu" (*"gpg: Действительная подпись пользователя Calin Culianu"*).
{{% /hint %}}

{{% hint info %}}
Не беспокойтесь о предупреждении "This key is not certified with a trusted signature!" (*"Внимание: Данный ключ не заверен доверенной подписью!"*). Повышенные уровни доверия не были установлены вручную для импортированного ключа.
{{% /hint %}}

Удалите проверочные файлы.

```bash
rm Fulcrum-*-shasums.txt && rm Fulcrum-*-shasums.txt.asc
```

## Подготовка директории

Создайте директорию "fulcrum".

```bash
mkdir ~/fulcrum
```

Создайте директорию "fulcrum_db".

```bash
mkdir ~/fulcrum_db
```

Распакуйте архив.

```bash
tar xvf Fulcrum-*-x86_64-linux.tar.gz
```

Перенесите содержимое архива в директорию "fulcrum".

```bash
mv Fulcrum-*-x86_64-linux/* /home/satoshi/fulcrum
```

Удалите оставшуюся папку.

```bash
rm -r Fulcrum-*-x86_64-linux
```

Удалите архив.

```bash
rm Fulcrum-*-x86_64-linux.tar.gz
```

Войдите в директорию "fulcrum".

```bash
cd ~/fulcrum
```

## SSL

Сгенерируйте новый ключ SSL. Нажимайте Enter в подсказках, оставляя все значения по умолчанию.

```bash
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

## Конфигурирование

Переименуйте файл конфигурации fulcrum по умолчанию.

```bash
mv fulcrum-example-config.conf fulcrum.conf
```

Откройте файл "fulcrum.conf".

```bash
nano fulcrum.conf
```

Отредактируйте следующие строки.

```
####замените
datadir = /path/to/a/dir  # Windows: datadir = D:\FulcrumData\mainnet

##на
datadir = /home/satoshi/fulcrum_db  # Windows: datadir = D:\FulcrumData\mainnet
```

```
####замените значения на ваши имя пользователя и пароль для RPC Bitcoin Core
rpcuser = Bob_The_Banker
rpcpassword = hunter1
```

```
####раскомментируйте строку
#ssl = 0.0.0.0:50002

##следующим образом
ssl = 0.0.0.0:50002
```

```
####раскомментируйте и отредактируйте строки
#cert = /path/to/server-cert.pem
#key = /path/to/server-key.pem
#peering = true

##следующим образом
cert = /home/satoshi/fulcrum/cert.pem
key = /home/satoshi/fulcrum/key.pem
peering = false
```

```
###раскомментируйте и отредактируйте строку
#fast-sync = 0

##следующим образом
fast-sync = 2000
```

Сохраните файл и выйдите из редактора.

## Файл системной службы

Создайте файл системной службы для автоматического запуска Fulcrum при загрузке системы.

```bash
sudo nano /etc/systemd/system/fulcrum.service
```

Вставьте следующие строки, затем сохраните файл и выйдите из редактора.

```bash
[Unit]
Description=Fulcrum
After=network.target
[Service]
ExecStart=/home/satoshi/fulcrum/Fulcrum /home/satoshi/fulcrum/fulcrum.conf
User=satoshi
LimitNOFILE=8192
TimeoutStopSec=30min
[Install]
WantedBy=multi-user.target
```

Включите системную службу.

```bash
sudo systemctl enable fulcrum.service
```

Запустите Fulcrum.

```bash
sudo systemctl start fulcrum.service
```

Прежде чем продолжить, дождитесь завершения синхронизации Fulcrum. Во время этого процесса питание устройства не должно прерываться, иначе база данных Fulcrum может быть повреждена.

Следите за ходом синхронизации Fulcrum с помощью следующей команды из домашней директории. Синхронизация будет завершена, когда в журналах начнут отображаться последние данные из мемпула.

```bash
journalctl -fu fulcrum.service
```

Подключение локального кошелька к Fulcrum осуществляется путем добавления локального IP и SSL-порта в поле адреса в настройках вашего кошелька, например:

```
ssl://192.168.1.100:50002
```

## Соединение через Tor

Чтобы настроить Fulcrum для работы с Tor, в файл "torcc" необходимо добавить дополнительные строки.

```bash
sudo nano /etc/tor/torrc
```

Вставьте в начало файла следующие строки.

```bash
# Hidden Service Fulcrum
HiddenServiceDir /var/lib/tor/hidden_service_fulcrum/
HiddenServiceVersion 3
HiddenServicePort 50002 127.0.0.1:50002
```

Сохраните файл и выйдите из редактора, а затем перезагрузите Tor.

```bash
sudo systemctl reload tor
```

Tor-адрес Fulcrum можно запросить с помощью следующей команды.

```bash
sudo cat /var/lib/tor/hidden_service_fulcrum/hostname
```

Удаленные соединения кошелька с сервером Fulcrum могут быть выполнены с использованием onion-адреса и номера порта сервера, как показано в примере ниже.

```
https://78aqvahpe6pjachf6nxroyr76gecku6nqoyngkj49r63n3twm6jpisyd.onion:50002
```

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