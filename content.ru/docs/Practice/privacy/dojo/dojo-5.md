---
title: "Установка Whirlpool CLI и конфигурация межсетевого экрана"
h1: "Часть 5. Установка Whirlpool CLI и конфигурация межсетевого экрана"
description: ""
cover: /img/dojo-09.jpg
url: practice-privacy/dojo-5
date: 2023-12-20
bookFlatSection: false
bookToc: true
weight: 6
---

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

{{% hint btc %}}
Перед выполнением дальнейших шагов убедитесь, что завершены все действия из частей [1](/privacy/dojo-1), [2](/privacy/dojo-2), [3](/privacy/dojo-3), [4](/privacy/dojo-4).
{{% /hint %}}

## Введение

Whirlpool CLI - это инструмент командной строки, который работает в фоновом режиме на персональных Dojo-узлах Биткоина. Этот инструмент автоматизирует процесс ремикширования UTXO после начального смешивания 24/7, гарантируя, что вы никогда не пропустите ремикс, пока узел активен.

## Загрузите Whirlpool

Подключитесь к узлу по SSH под пользователем "dojo".

Создайте каталог для Whirlpool.

```bash
mkdir ~/whirlpool
```

Перейдите в директорию.

```bash
cd ~/whirlpool
```

Зайдите на страницу релизов [Whirlpool CLI](https://code.samourai.io/whirlpool/whirlpool-client-cli/-/releases) и скопируйте ссылку на последний файл "run.jar", загрузив его с помощью "wget". На момент написания статьи последней версией является 0.10.16, поэтому измените команды соответствующим образом.

```bash
torsocks wget https://code.samourai.io/whirlpool/whirlpool-client-cli/uploads/63621e145967f536a562851853bd0990/whirlpool-client-cli-0.10.16-run.jar
```

Установите Java.

```bash
sudo apt install openjdk-19-jre-headless -y
```

Перед инициализацией Whirlpool подготовьте парольную фразу и код сопряжения кошелька Samourai Wallet, чтобы вставить их в терминал.

Код сопряжения находится в кошельке Samourai Wallet в разделе **Настройки** > **Транзакции** > **Связать с Whirlpool GUI**.

## Сопряжение с Samourai Wallet

Запустите Whirlpool, введя код сопряжения и кодовую фразу при появлении запроса.

```bash
java -jar whirlpool-client-cli-*-run.jar --init
```

Подключение может занять минуту, сопряжение будет успешным, как только начнут появляться логи для аккаунта Postmix вашего кошелька. Если вы вернулись в командную строку, значит, сопряжение было неудачным и его нужно повторить, пока оно не завершится успехом.

После сопряжения выйдите из логов с помощью "control+c".

## Файл системной службы

Создайте файл системной службы для автоматического запуска Whirlpool при загрузке системы.

```bash
sudo nano /etc/systemd/system/whirlpool.service
```

Вставьте следующие строки, обязательно отредактировав их, если версия Whirlpool отличается.

```bash
[Unit]
Description=Whirlpool
After=tor.service
[Service]
WorkingDirectory=/home/dojo/whirlpool
ExecStart=/usr/bin/java -jar whirlpool-client-cli-0.10.16-run.jar --server=mainnet --tor --auto-mix --mixs-target=0 --listen
User=dojo
Group=dojo
Type=simple
KillMode=process
TimeoutSec=60
Restart=always
RestartSec=60
[Install]
WantedBy=multi-user.target
```

Сохраните файл и выйдите.

Перезагрузите "systemctl".

```bash
sudo systemctl daemon-reload
```

Включите системную службу.

```bash
sudo systemctl enable whirlpool
```

Запустите службу Whirlpool.

```bash
sudo systemctl start whirlpool
```

Whirlpool CLI теперь функционирует.

## Whirlpool GUI

[Whirlpool GUI](/privacy/coinjoin/#%d1%88%d0%b0%d0%b3-3-%d0%bf%d0%be%d0%b4%d0%b3%d0%be%d1%82%d0%be%d0%b2%d0%ba%d0%b0-whirlpool-gui) - это простой в использовании графический интерфейс для Whirlpool CLI, который позволяет вам контролировать и взаимодействовать с сервисом Whirlpool в удобной для пользователя форме.

Whirlpool GUI можно [скачать](https://samouraiwallet.com/download) непосредственно с сайта Samourai Wallet.

## Сопряжение с Whirlpool GUI

При первом запуске Whirlpool GUI следует выбрать "Remote CLI".

В поле "CLI address" замените "my-cli-host" на IP-адрес вашего узла.

Далее выберите "Configure API Key", после чего появится окно. Вернитесь в терминал вашего узла по SSH и выполните следующую команду, чтобы получить ключ.

```bash
nano ~/whirlpool/whirlpool-cli-config.properties
```

Ключ API - это строка цифр, которая следует за "cli.apiKey=" в верхней части файла.

После того как адрес CLI и API-ключ введены, нажмите "Connect".

Через несколько секунд появится запрос на ввод парольной фразы кошелька. После ее ввода сопряжение будет завершено.

## Uncomplicated Firewall (UFW)

Uncomplicated Firewall, или UFW, - это простое в использовании приложение командной строки для работы с межсетевым экраном в Linux.

Установите UFW.

```bash
sudo apt install ufw -y
```

Чтобы быть уверенным в том, что открыты только те порты, которые необходимы для нормальной работы узла, в терминале должны быть применены следующие правила UFW.

### Параметры по умолчанию

```bash
sudo ufw default deny incoming
```

```bash
sudo ufw default allow outgoing
```

### Разрешить SSH

```bash
sudo ufw allow ssh
```

### Разрешить Whirlpool GUI

```bash
sudo ufw allow 8899/tcp
```

### Разрешить BITCOIND_ZMQ_BLK_HASH

```bash
sudo ufw allow 28334/tcp
```

### Разрешить BITCOIND_ZMQ_RAWTXS

```bash
sudo ufw allow 28333/tcp
```

### Разрешить BITCOIND_RPC_PORT

```bash
sudo ufw allow 8332/tcp
```

### Разрешить SSL-порт Fulcrum

```bash
sudo ufw allow 50002/tcp
```

### Разрешить Mempool GUI

```bash
sudo ufw allow 4080/tcp
```

### Включить UFW

```bash
sudo ufw enable
```

При включении UFW может появиться предупреждение о том, что включение UFW может вызвать проблемы с подключением к сессии. Поскольку правило, разрешающее SSH, уже было применено, подтвердите нажатием клавиши "y".

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
`lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhk7mnv093kcmm4v3unxwg6jxyqf`
{{% /image %}}