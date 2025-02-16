---
title: "Конфигурация межсетевого экрана"
h1: "Часть 5. Конфигурация межсетевого экрана"
description: ""
cover: /img/dojo-09.jpg
url: practice-privacy/dojo-5
date: 2023-12-20
bookFlatSection: false
bookToc: true
weight: 6
---

{{< details "Оглавление" "..." >}}

## Установка Биткоин-узла Dojo на x86

[Введение](/practice-privacy/dojo-0)

[Часть 1. Установка Bitcoin Core и Tor](/practice-privacy/dojo-1)

[Часть 2. Установка индексатора Fulcrum](/practice-privacy/dojo-2)

[Часть 3. Установка блокчейн-обозревателя Mempool](/practice-privacy/dojo-3)

[Часть 4. Установка Samourai Dojo](/practice-privacy/dojo-4)

[Часть 5. Конфигурация межсетевого экрана](/practice-privacy/dojo-5)

[Часть 6. Установка обновлений пакетов](/practice-privacy/dojo-6)

{{< /details >}}

{{% hint btc %}}
Перед выполнением дальнейших шагов убедитесь, что завершены все действия из частей [1](/privacy/dojo-1), [2](/privacy/dojo-2), [3](/privacy/dojo-3), [4](/privacy/dojo-4).
{{% /hint %}}

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

### Разрешить ZMQ-порты для Dojo

```bash
sudo ufw allow 28334/tcp
```

```bash
sudo ufw allow 28333/tcp
```

### Разрешить RPC-порт Bitcoin Core

```bash
sudo ufw allow 8332/tcp
```

### Разрешить SSL-порт Fulcrum

```bash
sudo ufw allow 50002/tcp
```

### Разрешить HTTP-порт Mempool

```bash
sudo ufw allow 4080/tcp
```

### Включить UFW

```bash
sudo ufw enable
```

При включении UFW может появиться предупреждение о том, что включение UFW может вызвать проблемы с подключением к сессии. Поскольку правило, разрешающее SSH, уже было применено, подтвердите нажатием клавиши "y".

{{< details "Оглавление" "..." >}}

## Установка Биткоин-узла Dojo на x86

[Введение](/practice-privacy/dojo-0)

[Часть 1. Установка Bitcoin Core и Tor](/practice-privacy/dojo-1)

[Часть 2. Установка индексатора Fulcrum](/practice-privacy/dojo-2)

[Часть 3. Установка блокчейн-обозревателя Mempool](/practice-privacy/dojo-3)

[Часть 4. Установка Samourai Dojo](/practice-privacy/dojo-4)

[Часть 5. Конфигурация межсетевого экрана](/practice-privacy/dojo-5)

[Часть 6. Установка обновлений пакетов](/practice-privacy/dojo-6)

{{< /details >}}