---
title: "Установка RoninDojo на x86"
h1: "Установка RoninDojo на x86"
description: ""
cover: /img/ronin-11.webp
url: practice-privacy/ronindojo
date: 2024-02-02
bookFlatSection: false
bookToc: true
weight: 2
---

{{% hint btc %}}
Автор выражает благодарность [Estudio Bitcoin](https://twitter.com/estudiobitcoin), и лично [Albercoin](https://twitter.com/Albercoin) и [Arkad](https://twitter.com/Multicripto), за их [работу](https://estudiobitcoin.com/how-to-install-ronindojo-pc-intel-amd-x86_64) по установке RoninDojo на x86.
{{% /hint %}}

{{% hint info %}}
С теорией CoinJoin в Whirlpool, а также практическим иcпользованием Dojo, можно ознакомиться [здесь](/privacy/coinjoin). Установка "ванильного" Dojo описана в [официальной документации](https://docs.samourai.io/en/dojo) [Samourai](https://twitter.com/SamouraiWallet) и в [руководстве](/practice-privacy/dojo) от [𝕂𝕐ℂ𝟛](https://twitter.com/KYCfree).
{{% /hint %}}

{{< hint danger >}}
Во время ареста разработчиков Samourai Wallet 24 апреля 2024 года спецслужбами были так же отключены серверы координатора Whirlpool и обозреватель блокчейна [OXT](/privacy/oxt). В связи с этим, начиная с версии RoninDojo v2.1.4, из кода удалены инструменты Whirlpool, WST и калькулятор Больцмана.

[\#FREESAMOURAI](https://freesamourai.com/)

В результате [атаки на тестнет](https://blog.lopp.net/griefing-bitcoin-testnet), версия Testnet3 оказалась неработоспособна, а новая Testnet4 пока не реализована в Samourai Dojo.
{{< /hint >}}

## Отличия Dojo и RoninDojo

В состав классического Dojo-сервера входят:

- Bitcoin Core.
- Обозреватель блокчейна [BTC RPC Explorer](https://github.com/janoside/btc-rpc-explorer).
- Индексатор блокчейна Fulcrum (совместим с ElectrumX) или Addrindexrs.
- Панель управления Dojo Maintenance Tool (DMT).
- Whirlpool CLI.
- Поддержка Testnet (в RoninDojo отсутствует).

В RoninDojo добавлены:

- Индексатор блокчейна Electrum Rust Server (electrs). Таким образом, пользователь может выбирать из трех вариантов.
- Опционально устанавливаемый обозреватель блокчейна [Mempool](https://github.com/mempool/mempool).
- Веб-интерфейс Ronin UI.
- Whirlpool GUI непосредственно в веб-интерфейсе.
- Консольная панель управления Ronin CLI.
- [Whirlpool Stats Tool (WST)](/privacy/coinjoin/#whirlpool-stats-tool-wst).
- [Boltzmann Calculator](/privacy/coinjoin/#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D0%BB%D1%8C%D0%BA%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%B1%D0%BE%D0%BB%D1%8C%D1%86%D0%BC%D0%B0%D0%BD%D0%B0).
- Резервное копирование блокчейна на отдельный диск после IBD.

В данном руководстве будет описана ручная установка всех компонентов в операционной системе на базе Debian. Я использовал Ubuntu 22.04. Данный способ позволит:

- Использовать любое оборудование, соответствующее минимальным требованиям. Два SSD-диска являются рекомендуемой конфигурацией, но совсем не обязательной.
- Выбирать базовую операционную систему.
- Настроить необходимые компоненты до установки системы:
    - Выбрать индексатор (Electrs, Fulcrum или Addrindexrs).
    - Установить обозреватель Mempool.
    - Включить Auth47 для аутентификации в DMT с помощью PayNym.
    - Сконфигурировать мосты для Tor.
    - Включить поддержку Testnet.

{{% hint btc %}}
Если вы только изучаете возможности кошелька Samourai, то я рекомендую попробовать все возможности именно в Testnet. Для этого вам достаточно [виртуальной машины](https://www.virtualbox.org) и 100 ГБ выделенного пространства.
{{% /hint %}}

## Системные требования

- 64-разрядный компьютер с процессором Intel/AMD. Рекомендуется Intel Core i5 6500 или аналогичный.
- Минимум 8 ГБ оперативной памяти.
- SSD-накопитель объемом 1 ТБ, настоятельно рекомендуется 2 ТБ. Так же хорошей практикой будет использование небольшого по объему SSD от 100 ГБ для функционирования операционной системы, в то время, как данные блокчейна будут находиться на отдельном большом диске.
- Рекомендуется подключаемый HDD/SSD-накопитель объемом 1 ТБ для создания резервной копии данных блокчейна из Bitcoin Core.

## Установка операционной системы

Вам необходимо установить базовую операционную систему. Я использовал серверную версию Ubuntu 22.04. [Скачать](https://ubuntu.com/download/server) ее можно на официально сайте Ubuntu. Подробную инструкцию по установке можно найти [здесь](https://losst.pro/ustanovka-ubuntu-server-20-04).

В процессе установки необходимо выключить опцию "Set up this disk as an LVM group".

{{% hint info %}}
Если вы используете два SSD, то выберите диск меньшего размера.
{{% /hint %}}

{{% image "/img/ronin-02.png" /%}}

Не забудьте включить опцию "Install OpenSSH server".

{{% image "/img/ronin-01.png" /%}}

После успешной установки зайдите на ваш сервер из локальной сети с помощью [SSH-клиента](https://losst.pro/kak-podklyuchitsya-po-ssh), используя имя пользователя, заданное при установке, внутренний IP-адрес вашей машины для RoninDojo и порт 22. Узнать адрес в вашей сети можно с помощью команды на сервере:

```bash
hostname -I
```

Мой внутренний IP-адрес 10.0.2.15, соответственно адрес подсети в моем случае 10.0.2.0/24, по аналогии определите свой и запишите.

## Определение конфигурации

Получаем имя вашего сетевого интерфейса. Запишите его, например "*eno1*".

```bash
ip -o -4 route show to default | awk '{print $5}'
```

Введите следующую команду и запишите название раздела диска (из столбца "NAME"), в котором находится корень "/" файловой системы (столбец "MOUNTPOINTS"). Добавьте "*/dev/*" перед именем раздела - у меня это "*/dev/sda2*".

```bash
lsblk
```

{{% image "/img/ronin-03.png" /%}}

{{% hint info %}}
Если вы используете два SSD, то определите из вывода предыдущей команды имя диска, который будет использоваться под данные блокчейна. Его объем будет 1 или 2 ТБ. В примере ниже системный раздел - это /dev/sdb2, а большой диск - это /dev/sda.

{{% image "/img/ronin-04.png" /%}}

Форматируем большой диск. Замените значение /dev/sda на свое. Не забудьте про "1" в конце третьей команды.

```bash
sudo wipefs -a --force /dev/sda
sudo sgdisk -Zo -n 1 -t 1:8300 /dev/sda
sudo mkfs.ext4 -q -F -L "main" /dev/sda1
lsblk
```

Теперь у меня появился большой раздел /dev/sda1, единственный на этом диске. Запишите название своего раздела для данных блокчейна.

{{% image "/img/ronin-05.png" /%}}

Монтируем раздел в системе. Замените /dev/sda1 на ваше значение.

```bash
sudo tee "/etc/systemd/system/mnt-usb.mount" <<EOF
[Unit]
Description=Mount primary storage /dev/sda1

[Mount]
What=/dev/disk/by-uuid/$(lsblk -no UUID /dev/sda1)
Where=/mnt/usb
Type=$(blkid -o value -s TYPE /dev/sda1)
Options=defaults

[Install]
WantedBy=multi-user.target
EOF
```

```bash
sudo systemctl daemon-reload
sudo systemctl start mnt-usb.mount
sudo systemctl enable mnt-usb.mount
```

{{% /hint %}}

Подключите внешний HDD/SSD, который вы планируете использовать для бэкапа данных блокчейна. Этот шаг можно пропустить. Подключите диск и снова выполните команду:

```bash
lsblk
```

{{% image "/img/ronin-07.png" /%}}

Вы увидите только что подключенный диск в таблице. Запишите название диска для резервной копии, добавив "*/dev/*" в начале и "*1*" в конце, в моем случае  - */dev/sdb1*.

## Предварительный этап

Добавим пользователя ronindojo в нашу систему, зададим пароль и выполним вход от нового пользователя.

```bash
sudo useradd -s /bin/bash -d /home/ronindojo -m -G sudo ronindojo
sudo passwd ronindojo
sudo su
echo "ronindojo    ALL=(ALL) ALL" >> /etc/sudoers
su - ronindojo
```

Устанавливаем необходимые программы.

```bash
sudo apt update && sudo apt upgrade
sudo apt install bash-completion nano tor obfs4proxy torsocks net-tools apt-transport-https gnupg-agent unzip git openjdk-11-jdk fail2ban net-tools htop unzip ufw rsync jq python3-pip gcc dialog bpytop less plymouth-label --no-install-recommends
pip3 install pipenv
```

Устанавливаем Docker.

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin --no-install-recommends
sudo curl -L https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-linux-x86_64 -o /usr/bin/docker-compose
sudo chmod +x /usr/bin/docker-compose
sudo systemctl stop docker
sudo systemctl stop docker.socket
sudo systemctl stop containerd
sudo mkdir -p /mnt/usb
sudo mv /var/lib/docker/ /mnt/usb/
```

```bash
sudo tee "/etc/docker/daemon.json" << EOF
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  },
  "data-root": "/mnt/usb/docker"
}
EOF
```

```bash
sudo systemctl start docker
sudo usermod -a -G docker ronindojo
```

Устанавливаем NodeJS.

```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash
sudo apt install nodejs
exit
```

## Установка и настройка службы Tor

```bash
sudo useradd -c "tor" tor
```

```bash
sudo tee "/usr/lib/systemd/system/tor.service" <<EOF
[Unit]
Description=Anonymizing overlay network for TCP
After=syslog.target network.target nss-lookup.target

[Unit]
RequiresMountsFor=/mnt/usb

[Service]
Type=notify
NotifyAccess=all
ExecStartPre=/usr/bin/tor -f /etc/tor/torrc --verify-config
ExecStart=/usr/bin/tor -f /etc/tor/torrc
ExecReload=/bin/kill -HUP ${MAINPID}
KillSignal=SIGINT
TimeoutSec=60
Restart=on-failure
WatchdogSec=1m
LimitNOFILE=32768

# Hardening
PrivateTmp=yes
PrivateDevices=yes
ProtectHome=yes
ProtectSystem=full
ReadOnlyDirectories=/
ReadWriteDirectories=-/var/lib/tor /mnt/usb/tor
ReadWriteDirectories=-/var/log/tor
NoNewPrivileges=yes
CapabilityBoundingSet=CAP_SETUID CAP_SETGID CAP_NET_BIND_SERVICE CAP_DAC_READ_SEARCH

[Install]
WantedBy=multi-user.target
EOF
```

```bash
sudo systemctl stop tor@default.service
sudo rm -rf /usr/lib/systemd/system/tor@*
sudo mkdir /mnt/usb/tor/
sudo chown -R tor:tor /mnt/usb/tor/
```

```bash
sudo nano /etc/tor/torrc
```

Вставляем следующие строки в конец файла. Если вы испытываете проблемы с подключением к Tor, то установите *UseBridges 1* и добавьте [мосты](https://bridges.torproject.org) после *Bridge*:

```
ClientTransportPlugin obfs4 exec /usr/bin/obfs4proxy
UseBridges 1
Bridge obfs4 ... iat-mode=0
Bridge obfs4 ... iat-mode=0
Bridge obfs4 ... iat-mode=0
#Hidden Service Ronin UI
User tor
DataDirectory /mnt/usb/tor
HiddenServiceDir /mnt/usb/tor/hidden_service_ronin_backend/
HiddenServiceVersion 3
HiddenServicePort 80 127.0.0.1:8470
```

```bash
sudo systemctl daemon-reload
sudo systemctl restart tor
sudo journalctl -f -u tor
```

Дождитесь сообщений в логе Tor "Bootstrapped 100% (done)", после чего его можно закрыть с помощью Ctrl+C.

## Установка Samourai Dojo

```bash
cd
torsocks wget http://2l2o5umijiwxjioxwpsvwxe6pr75tj7r5rggnl5ze256guwvtee3kpqd.onion/Ronin/dojo/archive/master.tar.gz -O dojo-master.tar.gz
tar -xvf dojo-master.tar.gz
rm dojo-master.tar.gz
cd ~/dojo/docker/my-dojo/
```

Генерируем случайный пароль.

```bash
tr -dc 'a-zA-Z0-9' </dev/urandom | head -c'32'
```

```bash
nano conf/docker-bitcoind.conf.tpl
```

Вставьте пароль после *BITCOIND_RPC_PASSWORD=*

Сохранить файл и выйти из редактора можно последовательным нажатием клавиш Ctrl+X, y, Enter.

```bash
nano conf/docker-indexer.conf.tpl
```

Здесь можно заменить electrs (по умолчанию) на fulcrum или addrindexrs после *INDEXER_TYPE=*. Fulcrum гораздо дольше синхронизируется, чем Electrs, и рекомендован для "тяжелых" кошельков с большим количеством транзакций. Addrindexrs поддерживает только Samourai Wallet, в то время как два других можно использовать для подключения таких кошельков, как Electrum и Sparrow Wallet.

```bash
tr -dc 'a-zA-Z0-9' </dev/urandom | head -c'32'
tr -dc 'a-zA-Z0-9' </dev/urandom | head -c'32'
nano conf/docker-mempool.conf.tpl
```

Установка обозревателя Mempool включается опцией *MEMPOOL_INSTALL=on*. Пароли необходимо вставить после *MEMPOOL_MYSQL_PASS=* и *MEMPOOL_MYSQL_ROOT_PASSWORD=*.

```bash
tr -dc 'a-zA-Z0-9' </dev/urandom | head -c'32'
tr -dc 'a-zA-Z0-9' </dev/urandom | head -c'32'
nano conf/docker-mysql.conf.tpl
```

Добавьте сгенерированные пароли после *MYSQL_ROOT_PASSWORD=* и *MYSQL_PASSWORD=*.

```bash
tr -dc 'a-zA-Z0-9' </dev/urandom | head -c'32'
tr -dc 'a-zA-Z0-9' </dev/urandom | head -c'32'
tr -dc 'a-zA-Z0-9' </dev/urandom | head -c'32'
nano conf/docker-node.conf.tpl
```

Вставьте пароли следом за *NODE_API_KEY=*, *NODE_ADMIN_KEY=* и *NODE_JWT_SECRET=*. Опционально добавьте ваш платежный код BIP47 (PM8T...) после *NODE_PAYMENT_CODE=*. Включив эту возможность, вы сможете аутентифицироваться в Dojo Maintenance Tool при помощи опции "Authenticate using PayNym" из меню Tools в кошельке Samourai, просто отсканировав QR-код на экране логина.

```bash
nano conf/docker-tor.conf.tpl
```

Если у вас есть проблемы с подключением к Tor, установите *TOR_USE_BRIDGES=on* и пропишите [мосты](https://bridges.torproject.org) следующим образом (не забывайте про кавычки): *TOR_BRIDGE_1="obfs4 ... iat-mode=0"*.

{{% hint info %}}
**Только для Testnet**

```bash
nano conf/docker-common.conf.tpl
```
Укажите *COMMON_BTC_NETWORK=testnet*.

```bash
nano nginx/testnet.conf
```

Добавьте следующие строки в раздел # Site Configuration:

```
    # Proxy WebSocket connections first
    location /v2/inv {
        proxy_pass http://websocket;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
    }
    # PushTX server is separate, so proxy first
    location /v2/pushtx/ {
        proxy_pass http://node:8081/;
    }
    # Tracker server is separate, so proxy first
    location /v2/tracker/ {
        proxy_pass http://node:8082/;
    }
    # Proxy all other v2 requests to the accounts server
    location /v2/ {
        proxy_pass http://node:8080/;
    }
```
{{% /hint %}}

```bash
./dojo.sh install
```

Дождитесь окончания установки Dojo. Она занимает от 10 до 30 минут, в зависимости от производительности вашего компьютера и сетевого подключения.

{{% image "/img/ronin-06.webp" /%}}

При возникновении ошибок, обычно связанных с сетевым соединением, вы можете остановить скрипт установки с помощью нескольких нажатий сочетания Ctrl+C и повторить последнюю команду. Если установка все же не удается, то вам придется настроить VPN на вашем маршрутизаторе. К сожалению данная процедура выходит за рамки данного руководства.

## RoninOS

RoninOS - это по сути скрипт, изменяющий базовую операционную систему для правильного функционирования RoninDojo. Так как он написан для определенной ОС и конкретной конфигурации оборудования, я произвел все необходимые изменения вручную.

```bash
cd
torsocks wget http://2l2o5umijiwxjioxwpsvwxe6pr75tj7r5rggnl5ze256guwvtee3kpqd.onion/Ronin/RoninOS/archive/master.tar.gz -O roninos-master.tar.gz
tar -xvf roninos-master.tar.gz
mv roninos RoninOS
rm roninos-master.tar.gz
```

### Настройка plymouth

После этого при загрузке системы будет отображаться логотип RoninDojo, мелочь, а приятно.

{{% image "/img/ronin-09.png" /%}}

```bash
sudo mkdir -p /etc/plymouth
sudo cp ~/RoninOS/overlays/RoninOS/etc/plymouth/plymouthd.conf /etc/plymouth/
sudo cp -r ~/RoninOS/overlays/RoninOS/usr/share/plymouth/themes/ronindojo/ /usr/share/plymouth/themes/
```

```bash
sudo nano /etc/default/grub
```

Преобразуйте строку *GRUB_CMDLINE_LINUX_DEFAULT* следующим образом:

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
```

```bash
sudo update-alternatives --install /usr/share/plymouth/themes/default.plymouth default.plymouth /usr/share/plymouth/themes/ronindojo 120
sudo update-grub
sudo update-initramfs -u
```

### Настройка межсетевого экрана

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

В следующих командах используйте ваш адрес подсети, который мы определили в конце [установки операционной системы](/practice-privacy/ronindojo/#%d1%83%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%ba%d0%b0-%d0%be%d0%bf%d0%b5%d1%80%d0%b0%d1%86%d0%b8%d0%be%d0%bd%d0%bd%d0%be%d0%b9-%d1%81%d0%b8%d1%81%d1%82%d0%b5%d0%bc%d1%8b).

```bash
sudo ufw allow from 10.0.2.0/24 to any port "80"
sudo ufw allow from 10.0.2.0/24 to any port "22"
sudo ufw allow from 10.0.2.0/24 to any port "50002"
sudo ufw enable
```

### Настройка дисков

```bash
mkdir -p ~/.config/RoninDojo/data/
touch ~/.config/RoninDojo/data/system-install
```

В следующей команде используйте свое имя основного раздела системы или имя раздела для данных блокчейна, если вы используете конфигурацию с двумя SSD, который вы записали при [определении конфигурации](/practice-privacy/ronindojo/#%d0%be%d0%bf%d1%80%d0%b5%d0%b4%d0%b5%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-%d0%ba%d0%be%d0%bd%d1%84%d0%b8%d0%b3%d1%83%d1%80%d0%b0%d1%86%d0%b8%d0%b8). Напоминаю, что у меня один диск и основной раздел */dev/sda2*.

```bash
echo "blockdata_storage_partition=/dev/sda2" > ~/.config/RoninDojo/data/blockdata_storage_partition
```

В следующей команде используйте свое имя раздела для резервной копии блокчейна, если вы собираетесь использовать эту функцию. У меня - */dev/sdb1*.

```bash
echo "backup_storage_partition=/dev/sdb1" > ~/.config/RoninDojo/data/backup_storage_partition
```

## Ronin UI и Ronin CLI

Ronin UI - это великолепный веб-интерфейс для мониторинга и администрирования вашего узла со встроенным интерфейсом Whirlpool GUI. Используя его, вам не нужно делать сопряжение с помощью приложения Whirlpool GUI на другом компьютере.

Ronin CLI - консольный интерфейс, доступный по SSH или непосредственно на сервере, с расширенными функциями управления вашей нодой, параметрами безопасности, а так же дополнительными утилитами.

```bash
cd
mkdir ~/Ronin-UI
sudo mkdir -p /usr/share/nginx/logs/
sudo bash -c "cat /mnt/usb/tor/hidden_service_ronin_backend/hostname > /home/ronindojo/.config/RoninDojo/data/ronin-ui-tor-hostname"
torsocks wget http://2l2o5umijiwxjioxwpsvwxe6pr75tj7r5rggnl5ze256guwvtee3kpqd.onion/Ronin/ronindojo/archive/master.tar.gz -O ronindojo-master.tar.gz
tar -xvf ronindojo-master.tar.gz
mv ronindojo RoninDojo
rm ronindojo-master.tar.gz
sudo ln -sf /home/ronindojo/RoninDojo/ronin /usr/local/bin/ronin
cp ~/RoninDojo/user.conf.example ~/.config/RoninDojo/user.conf
```

```bash
nano ~/.bashrc
```

Добавляем в конец файла две строки:

```
/home/ronindojo/RoninDojo/Scripts/.logo
ronin
```

```bash
source ~/.bashrc
```

Поздравляю, вы оказались в интерфейсе Ronin CLI.

{{% image "/img/ronin-08.webp" /%}}

Перейдите в меню:

```
Ronin UI > Re-install
```

По окончании установки нажмите любую клавишу и выйдите из Ronin UI:

```
Go Back > Exit RoninDojo
```

Попасть снова в Ronin CLI можно с помощью команды:

```bash
ronin
```

Кроме того, вы будете автоматически перенаправлены в Ronin CLI при логине под пользователем *ronindojo*.

Ronin UI теперь доступен из вашей локальной сети, в которой находится машина с RoninDojo, через веб-браузер по адресу http://ronindojo.local или по IP-адресу сервера, в моем случае http://10.0.2.15.

Пароль для входа - это ваш пароль пользователя *ronindojo*.

{{% image "/img/ronin-10.webp" /%}}

## Патчи для Ronin CLI

Установка завершена, но требуется немного исправить скрипты Ronin CLI для корректной работы.

В следующей команде используйте имя вашего сетевого интерфейса, которое мы [определили](/practice-privacy/ronindojo/#%d0%be%d0%bf%d1%80%d0%b5%d0%b4%d0%b5%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-%d0%ba%d0%be%d0%bd%d1%84%d0%b8%d0%b3%d1%83%d1%80%d0%b0%d1%86%d0%b8%d0%b8) ранее. У меня - *enp0s3*.

```bash
sed -i 's/eth0/enp0s3/g' ~/RoninDojo/Scripts/Menu/menu-system-monitoring.sh
```

```bash
sed -i 's/findmnt \"\${install_dir}\"/findmnt -n -o SOURCE --target \"\${install_dir}\"/g' ~/RoninDojo/Scripts/functions.sh
sed -i 's/findmnt \"\${install_dir}\"/findmnt -n -o SOURCE --target \"\${install_dir}\"/g' ~/RoninDojo/Scripts/Install/install-dojo.sh
```

{{% hint info %}}
**Только для Testnet**

```bash
sed -i 's/_data/_data\/testnet3/g' ~/RoninDojo/Scripts/Install/install-send-block-data.sh
sed -i 's/_data/_data\/testnet3/g' ~/RoninDojo/Scripts/Install/install-receive-block-data.sh
sed -i 's/ludwig.py --rpc/ludwig.py --testnet --rpc/g' ~/RoninDojo/Scripts/Menu/menu-boltzmann.sh
```
{{% /hint %}}

##  Инструменты RoninDojo

### Резервное копирование блокчейна

{{% hint btc %}}
Я рекомендую протестировать эту процедуру до полного скачивания блокчейна, так как неправильная настройка дисков может привести к потере данных, и все придется начинать с нуля. Произведите тест, когда в веб-интерфейсе появятся доли процентов синхронизации Bitcoin Core.
{{% /hint %}}

Подключите внешний диск для резервной копии. В Ronin CLI перейдите в меню:

```
System > Disk Storage > Format & Mount New Backup Drive
```

После форматирования диска, перейдите из основного меню:

```
Dojo > Next Page > Send Block Data to Backup
```

После копирования, восстановите бэкап из меню:

```
Dojo > Next Page > Receive Block Data from Backup
```

### Установка WST и калькулятора Больцмана

{{% hint info %}}
Руководство по использованию [Whirlpool Stats Tool (WST)](/privacy/coinjoin/#whirlpool-stats-tool-wst).

Руководство по [калькулятору Больцмана](/privacy/coinjoin/#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BA%D0%B0%D0%BB%D1%8C%D0%BA%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%B1%D0%BE%D0%BB%D1%8C%D1%86%D0%BC%D0%B0%D0%BD%D0%B0).
{{% /hint %}}

Для установки и использования этих утилит просто выберите соответствующий пункт из меню:

```
Samourai Toolkit
```

{{% image "/img/ronin-12.webp" /%}}

{{% hint info %}}
Утилита WST недоступна для Testnet.
{{% /hint %}}

### Whirlpool

Дождитесь полной синхронизации Bitcoin Core, Dojo и Indexer.

{{% image "/img/ronin-13.webp" /%}}

Перейдите в меню "Pairing" и выполните сопряжение Samourai Wallet с Samourai Dojo. Подключиться к Dojo можно только при новой установке кошелька.

{{% image "/img/ronin-14.webp" /%}}

Нажмите "Pair now" в разделе "Samourai Dojo", отсканируйте QR-код сопряжения Dojo в вашем Samourai Wallet.

Перейдите в меню настроек кошелька:

```
Транзакции > Связать с Whirlpool GUI
```

Перенесите полученный код сопряжения с Whirlpool GUI на компьютер.

В разделе Whirlpool CLI нажмите "Initialize" и используйте ваш код сопряжения.

После успешного сопряжения, вам нужно нажать кнопку "Log in" и ввести [парольную фразу](/passphrase), которую вы использовали при создании кошелька.

{{% image "/img/ronin-15.webp" /%}}

Наконец, вы попадаете в интерфейс Whirlpool и можете ремикшировать UTXO 24/7, пока работает ваш узел.

{{% image "/img/ronin-16.webp" /%}}

### Обозреватели блокчейна

Для доступа к BTC RPC Explorer перейдите в "Dashboard" и нажмите "Manage" в разделе "Dojo".

{{% image "/img/ronin-17.webp" /%}}

Здесь находятся ссылки для доступа к обозревателю и Dojo Maintenance Tool (DMT) через Tor-браузер.

Ссылка для доступа к обозревателю Mempool также доступна из меню "Manage" в соответствующем разделе панели управления. Там же вы можете установить или удалить Mempool.


### Dojo Maintenance Tool (DMT)

DMT представляет собой упрощенную панель для мониторинга ноды с базовыми функциями отслеживания ваших XPUB, адресов и транзакций - аналогичными меню "Maintenance" в Ronin UI. В условиях плохого качества связи с Tor, может оказаться полезным инструментом. Если вы добавили ваш PayNym в файле docker-node.conf.tpl при установке Samourai Dojo, то вам будет доступен QR-код. Просто выберите в кошельке Samourai "Authenticate using PayNym" из меню "Tools" и отсканируйте его для доступа в DMT.

{{% hint info %}}
Если вы не включили функцию аутентификации с использованием PayNym (Auth47) при установке, то просто добавьте паш платежный код BIP47 после *NODE_PAYMENT_CODE=* в файл:

```bash
nano ~/dojo/docker/my-dojo/conf/docker-node.conf
```

После этого перезапустите Dojo из меню "Manage" в соответствующем разделе Ronin UI с помощью кнопки "Restart".

{{% /hint %}}

{{% image "/img/ronin-18.webp" /%}}

{{% image "/img/ronin-19.webp" /%}}

### Индексаторы блокчейна

Как уже упоминалось выше, вы можете выбирать между Electrs, Fulcrum или Addrindexrs. Вы можете установить другой индексатор из "Dashboard" через меню "Manage" в разделе "Indexer".

{{% image "/img/ronin-20.webp" /%}}

{{% hint info %}}
Обратите внимание, что при выборе другого индексатора, данные предыдущего не сохраняются. Если вы решите переключиться обратно, синхронизация индексатора начнется с нуля.
{{% /hint %}}

Ссылка для подключения кошельков Sparrow или Electrum к вашему индексатору через Tor находится в меню "Pair" в разделе "Electrum server".

### Прочие инструменты

**Push TX** в Ronin UI позволит вам транслировать подписанную транзакцию в блокчейн с помощью вашей ноды.

**Credentials** в Ronin CLI выведет на экран ссылки на все сервисы вашего узла, доступные через Tor.

**Настройки безопасности** находятся в меню Ronin CLI:

```
System > Next Page
```

{{% image "/img/ronin-21.webp" /%}}

Здесь вы можете управлять настройками межсетевого экрана, SSH, изменить пароль пользователя ronindojo, а также root.

## Обновление RoninDojo

### Обновление Ronin UI

Ronin UI обновляется в один клик. При наличии обновления вы увидите в веб-интерфейсе уведомление о новой версии.

Второй вариант через консоль:

```bash
cd
rm -rf Ronin-UI/
ronin
```

Далее перейдите в меню:

```
Ronin UI > Re-install
```

### Обновление Ronin CLI

Стандартный скрипт обновления RoninDojo может сломать систему, поэтому апгрейд производим вручную.

```bash
cd
rm -rf ~/RoninDojo/
torsocks wget http://2l2o5umijiwxjioxwpsvwxe6pr75tj7r5rggnl5ze256guwvtee3kpqd.onion/Ronin/ronindojo/archive/master.tar.gz -O ronindojo-master.tar.gz
tar -xvf ronindojo-master.tar.gz
mv ronindojo RoninDojo
rm ronindojo-master.tar.gz
```

Применяем патчи из [этого раздела](/practice-privacy/ronindojo/#%d0%bf%d0%b0%d1%82%d1%87%d0%b8-%d0%b4%d0%bb%d1%8f-ronin-cli).

### Обновление Samourai Dojo

```bash
cd
mkdir temp
mv dojo/docker/my-dojo/conf/ temp/
rm -rf dojo/
torsocks wget http://2l2o5umijiwxjioxwpsvwxe6pr75tj7r5rggnl5ze256guwvtee3kpqd.onion/Ronin/dojo/archive/master.tar.gz -O dojo-master.tar.gz
tar -xvf dojo-master.tar.gz
rm dojo-master.tar.gz
cp ~/temp/conf/* ~/dojo/docker/my-dojo/conf/
rm -rf temp/
cd ~/dojo/docker/my-dojo/
```

{{% hint info %}}
Делаем необходимые изменения для Testnet из [этого раздела](/practice-privacy/ronindojo/#%d1%83%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%ba%d0%b0-samourai-dojo).
{{% /hint %}}

```bash
./dojo.sh upgrade
```