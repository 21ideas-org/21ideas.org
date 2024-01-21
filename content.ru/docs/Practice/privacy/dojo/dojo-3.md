---
title: "Часть 3. Установка блокчейн-обозревателя Mempool"
h1: "Часть 3. Установка блокчейн-обозревателя Mempool"
description: ""
cover: /img/dojo-06.jpg
url: privacy/dojo-3
date: 2023-12-20
bookFlatSection: false
bookToc: true
weight: 4
---

{{< expand "Оглавление" "..." >}}

## Установка Биткоин-узла Dojo на x86

[Введение](/privacy/dojo-0)

[Часть 1. Установка Bitcoin Core](/privacy/dojo-1)

[Часть 2. Установка индексатора Fulcrum](/privacy/dojo-2)

[Часть 3. Установка блокчейн-обозревателя Mempool](/privacy/dojo-3)

[Часть 4. Установка Samourai Dojo](/privacy/dojo-4)

[Часть 5. Установка Whirlpool CLI и конфигурация межсетевого экрана](/privacy/dojo-5)

[Часть 6. Установка обновлений пакетов](/privacy/dojo-6)

{{< /expand >}}

## Необходимые требования

- Завершены все действия из части [1](/privacy/dojo-1), [2](/privacy/dojo-2).
- Синхронизация Fulcrum завершена.

## Введение

Mempool Visual Explorer - это ценный инструмент для поиска подробной информации о блоках, адресах, балансах и транзакциях.

Локальное размещение вашего экземпляра блокчейн-обозревателя предпочтительнее, чем ввод личных данных о транзакциях на сайтах, которые вы не контролируете.

## Установка Docker

Перед установкой Mempool необходимо установить Docker.

Добавьте официальный GPG-ключ Docker.

```bash
sudo apt update
```

```bash
sudo apt install ca-certificates gnupg -y
```

```bash
sudo install -m 0755 -d /etc/apt/keyrings
```

```bash
torsocks curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

```bash
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

Добавьте репозиторий Docker в источники приложений Apt.

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```bash
sudo apt update
```

Установите пакеты Docker.

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```

Добавьте пользователя в группу docker.

```bash
sudo usermod -aG docker satoshi
```

Выйдите из системы.

```bash
exit
```

Снова войдите в систему под именем "satoshi". При этом ваш пользователь войдет в группу Docker.

## Установка Mempool

Склонируйте репозиторий Mempool.

```bash
git clone https://github.com/mempool/mempool.git
```

Войдите в поддиректорию docker внутри директории mempool.

```bash
cd mempool/docker
```

Откройте файл "docker-compose.yml".

```bash
nano docker-compose.yml
```

Отредактируйте следующие строки.

```
####замените
ports:
  - 80:8080

##на
ports:
  - 4080:8080
```

```
####замените
MEMPOOL_BACKEND: "none"

##на
MEMPOOL_BACKEND: "electrum"
```

```
####замените на локальный IP вашего узла
CORE_RPC_HOST: "172.27.0.1"
```

```
####замените значения на ваши имя пользователя и пароль для RPC Bitcoin Core
CORE_RPC_USERNAME: "mempool"
CORE_RPC_PASSWORD: "mempool"
```

```
####измените все 3 строки
restart: on-failure

##следующим образом
restart: always
```

Добавьте следующие строки ниже "STATISTICS_ENABLED", отредактировав "ELECTRUM_HOST" с использованием локального IP вашего узла.

```bash
ELECTRUM_HOST: "192.xxx.x.xx"
ELECTRUM_PORT: "50002"
ELECTRUM_TLS_ENABLED: "true"
```

Вставьте следующий блок в конце файла на следующей свободной строке. Убедитесь, что отступы в начале строк точно соответствуют указанным.

```bash
networks:
  default:
    driver: bridge
    ipam:
      config:
        - subnet: 172.16.57.0/24
```

Сохраните файл и выйдите из редактора.

Теперь инициализируйте Mempool.

```bash
docker compose up -d
```

Откройте веб-браузер и в адресной строке введите IP-адрес вашего узла, а затем ":4080", чтобы посетить ваш локальный экземпляр Mempool.

При новой установке может потребоваться время, чтобы Mempool полностью загрузился, поэтому не беспокойтесь, если информационная панель будет неполной.

## Соединение через Tor

С помощью [Tor Browser](https://www.torproject.org/download/) можно получить доступ к локальному экземпляру Mempool из любой точки мира. Для этой функции требуется уникальный onion-адрес.

Откройте файл "torrc".

```bash
sudo nano /etc/tor/torrc
```

Добавьте следующие строки в конец файла, затем сохраните и выйдите.

```bash
# Hidden Service Mempool
HiddenServiceDir /var/lib/tor/mempool/
HiddenServiceVersion 3
HiddenServicePort 80 127.0.0.1:4080
```

Перезапустите службу Tor.

```bash
sudo systemctl restart tor
```

Tor-адрес Mempool можно запросить с помощью следующей команды.

```bash
sudo cat /var/lib/tor/mempool/hostname
```

{{< expand "Оглавление" "..." >}}

## Установка Биткоин-узла Dojo на x86

[Введение](/privacy/dojo-0)

[Часть 1. Установка Bitcoin Core](/privacy/dojo-1)

[Часть 2. Установка индексатора Fulcrum](/privacy/dojo-2)

[Часть 3. Установка блокчейн-обозревателя Mempool](/privacy/dojo-3)

[Часть 4. Установка Samourai Dojo](/privacy/dojo-4)

[Часть 5. Установка Whirlpool CLI и конфигурация межсетевого экрана](/privacy/dojo-5)

[Часть 6. Установка обновлений пакетов](/privacy/dojo-6)

{{< /expand >}}

## Поддержите переводчика

Поддержать переводчика можно, отправив немного сат в сети Лайтнинг:

{{% image "/img/btclinux-ln-qr.jpg" %}}
`LNURL1DP68GURN8GHJ7MRW9E6XJURN9UH8WETVDSKKKMN0WAHZ7MRWW4EXCUP0X9UX2VENXDJN2CTRXSUN2VE3XGCRQPNAPC6`
{{% /image %}}