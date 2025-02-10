---
title: "Установка обновлений пакетов"
h1: "Часть 6. Установка обновлений пакетов"
description: ""
cover: /img/dojo-10.jpg
url: practice-privacy/dojo-6
date: 2023-12-20
bookFlatSection: false
bookToc: true
weight: 7
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

Возможность самостоятельно обновлять пакеты своего узла обеспечивает операторам ноды гораздо более высокий уровень суверенитета. Вы можете сами выбирать, какие обновления запускать и как их настраивать, а не полагаться на предпочтения и расписание разработчиков узлов "plug-and-play".

Здесь мы рассмотрим отдельные шаги по обновлению бинарных файлов, из которых состоит ваш узел.

## Обновление Bitcoin Core

За обновлениями пакетов можно следить в официальном [репозитории Bitcoin Core](https://github.com/bitcoin/bitcoin/releases).

Проверьте, какая версия Core установлена в данный момент, с помощью следующей команды.

```bash
bitcoin-cli --version
```

Если доступна более новая версия, остановите ноду с помощью Bitcoin CLI.

```bash
bitcoin-cli stop
```

Посетите сайт [bitcoincore.org](https://bitcoincore.org/bin/) и найдите страницу с самой актуальной версией Bitcoin Core, избегая релизов с пометкой "test".

Перейдите в директорию для загрузок.

```bash
cd ~/downloads
```

Скопируйте URL-адрес последнего пакета "x86_64-linux-gnu.tar.gz" и загрузите его с помощью команды "wget".

Следующую команду необходимо отредактировать, указав нужный номер версии.

```bash
torsocks wget https://bitcoincore.org/bin/bitcoin-core-0.0/bitcoin-0.0-x86_64-linux-gnu.tar.gz
```

Загрузите проверочные файлы, соответствующие релизу.

Следующие команды необходимо отредактировать, указав нужный номер версии.

```bash
torsocks wget https://bitcoincore.org/bin/bitcoin-core-0.0/SHA256SUMS
```

```bash
torsocks wget https://bitcoincore.org/bin/bitcoin-core-0.0/SHA256SUMS.asc
```

Проверьте контрольную сумму загруженного файла.

```bash
sha256sum --ignore-missing --check SHA256SUMS
```

{{% hint info %}}
В выводе команды должно появиться сообщение “OK” (_“ЦЕЛ”_), например: “bitcoin-0.0-x86_64-linux-gnu.tar.gz: OK.”
{{% /hint %}}

Проверьте подписи.

```bash
gpg --verify SHA256SUMS.asc
```

{{% hint info %}}
На импортированных ранее ключах разработчиков должно появиться сообщение “gpg: Good signature” (_“gpg: Действительная подпись пользователя”_).
{{% /hint %}}

Распакуйте скачанный архив.

```bash
tar xzf bitcoin-*-x86_64-linux-gnu.tar.gz
```

Удалите файлы проверки и архив.

```bash
rm SHA256SUMS && rm SHA256SUMS.asc
```

```bash
rm -r bitcoin-*-x86_64-linux-gnu.tar.gz
```

Установите новый пакет Bitcoin Core.

```bash
sudo install -m 0755 -o root -g root -t /usr/local/bin bitcoin-*/bin/*
```

Запустите Bitcoin Core.

```bash
sudo systemctl start bitcoind
```

Удалите оставшуюся папку.

```bash
rm -r bitcoin-*/
```

Убедитесь, что установлена последняя версия Bitcoin Core.

```bash
bitcoin-cli --version
```

Чтобы убедиться, что все работает как надо, проверьте логи из домашнего каталога.

```bash
tail -f .bitcoin/debug.log
```

Готово.

## Обновление Fulcrum

За обновлениями пакетов можно следить в официальном [репозитории Fulcrum](https://github.com/cculianu/Fulcrum/releases).

Перейдите в директорию для загрузок.

```bash
cd ~/downloads
```

Скопируйте URL-адрес последнего пакета "x86_64-linux-gnu.tar.gz" и загрузите его с помощью команды "wget".

Следующую команду необходимо отредактировать, указав нужный номер версии.

```bash
torsocks wget https://github.com/cculianu/Fulcrum/releases/download/v0.0.0/Fulcrum-0.0.0-x86_64-linux.tar.gz
```

Загрузите проверочные файлы, соответствующие релизу.

Следующие команды необходимо отредактировать, указав нужный номер версии.

```bash
torsocks wget https://github.com/cculianu/Fulcrum/releases/download/v0.0.0/Fulcrum-0.0.0-shasums.txt.asc
```

```bash
torsocks wget https://github.com/cculianu/Fulcrum/releases/download/v0.0.0/Fulcrum-0.0.0-shasums.txt
```

Проверьте контрольную сумму загруженного файла.

```bash
sha256sum --ignore-missing --check Fulcrum-*-shasums.txt
```

{{% hint info %}}
В выводе команды должно появиться сообщение “OK” (_“ЦЕЛ”_), например: “Fulcrum-0.0.0-x86_64-linux.tar.gz: OK.”
{{% /hint %}}

Проверьте подпись.

```bash
gpg --verify Fulcrum-*-shasums.txt.asc
```

{{% hint info %}}
На ранее импортированном ключе Cculianu должно появиться сообщение "gpg: Good signature” (_“gpg: Действительная подпись пользователя”_).
{{% /hint %}}

Распакуйте скачанный архив.

```bash
tar xvf Fulcrum-*-x86_64-linux.tar.gz
```

Удалите архив.

```bash
rm Fulcrum-*-x86_64-linux.tar.gz
```

Удалите файлы проверки.

```bash
rm Fulcrum-*-shasums.txt.asc && rm Fulcrum-*-shasums.txt
```

Остановите Fulcrum.

```bash
sudo systemctl stop fulcrum
```

Перейдите в директорию Fulcrum.

```bash
cd ~/fulcrum
```

Скопируйте существующие "fulcrum.conf" и SSL-файлы ".pem" в каталог для загрузок.

```bash
cp key.pem cert.pem fulcrum.conf ~/downloads
```

Удалите оставшиеся файлы Fulcrum.

```bash
rm -rf ./*
```

Скопируйте содержимое только что распакованного архива в папку Fulcrum.

```bash
cp -r ~/downloads/Fulcrum-*-x86_64-linux/* ~/fulcrum
```

Переместите "fulcrum.conf" и SSL-файлы ".pem" в каталог Fulcrum.

```bash
mv ~/downloads/{key.pem,cert.pem,fulcrum.conf} ~/fulcrum
```

Удалите оставшуюся папку.

```bash
rm -rf ~/downloads/Fulcrum-*-x86_64-linux
```

Запустите Fulcrum.

```bash
sudo systemctl start fulcrum.service
```

Перезапустите Tor.

```bash
sudo systemctl restart tor
```

Проверьте логи с помощью следующей команды, чтобы убедиться, что все работает как надо.

```bash
journalctl -fu fulcrum.service
```

Готово.

## Обновление Mempool

За обновлениями пакетов можно следить в официальном [репозитории Mempool](https://github.com/mempool/mempool/releases).

Перейдите в директорию Mempool.

```bash
cd ~/mempool/docker
```

Получите последний Docker-пакет Mempool.

```bash
docker compose down --rmi all
```

Соберите и запустите новый Docker-пакет Mempool.

```bash
docker compose up -d
```

Готово.

## Обновление Dojo

За обновлениями пакетов можно следить в официальном [репозитории Dojo](https://github.com/Dojo-Open-Source-Project/samourai-dojo/releases).

Зайдите на узел по SSH под пользователем "dojo".

{{% hint info %}}
Если при первоначальной настройке Dojo вы указали другое имя пользователя, отличное от "dojo", вам нужно будет зайти по SSH под этим пользователем.
{{% /hint %}}

Перейдите в директорию Dojo.

```bash
cd ~/dojo-app/docker/my-dojo
```

Остановите Dojo.

```bash
./dojo.sh stop
```

Перейдите в домашнюю директорию.

```bash
cd
```

Загрузите последнюю версию Dojo.

```bash
torsocks wget https://github.com/Dojo-Open-Source-Project/samourai-dojo/archive/refs/heads/master.zip
```

Распакуйте архив с Dojo.

```bash
unzip master.zip
```

Скопируйте содержимое в каталог "dojo-app".

```bash
cp -a samourai-dojo-master/. dojo-app/
```

Удалите архив и оставшуюся папку.

```bash
rm master.zip
```

```bash
rm -rf samourai-dojo-master
```

Вернитесь в директорию "my-dojo".

```bash
cd ~/dojo-app/docker/my-dojo
```

Запустите скрипт обновления Dojo.

```bash
./dojo.sh upgrade -y
```

Как только в журнале появится постоянный поток логов "node.js", обновление завершено, и вы можете смело выходить из журнала с помощью "control + c".

Готово.

## Обновление системы

Систему на базе Debian можно обновить в любое время, чтобы быть уверенным, что установлены последние исправления безопасности, с помощью следующей команды.

```bash
sudo apt update && sudo apt upgrade -y
```

Готово.

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