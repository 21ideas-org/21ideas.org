---
title: "Firewall Configuration"
h1: "Part 5. Firewall Configuration"
description: ""
cover: /img/dojo-09.jpg
url: practice-privacy/dojo-5
date: 2023-12-20
bookFlatSection: false
bookToc: true
weight: 6
---

{{< details "Contents" "..." >}}

## Dojo x86 Bitcoin Node Guide

[Introduction](/en/practice-privacy/dojo-0)

[Part 1. Installing Bitcoin Core & Tor](/en/practice-privacy/dojo-1)

[Part 2. Installing Fulcrum Indexer](/en/practice-privacy/dojo-2)

[Part 3. Installing Mempool Explorer](/en/practice-privacy/dojo-3)

[Part 4. Installing Samourai Dojo](/en/practice-privacy/dojo-4)

[Part 5. Firewall Configuration](/en/practice-privacy/dojo-5)

[Part 6. Installing Package Updates](/en/practice-privacy/dojo-6)

{{< /details >}}

{{% hint btc %}}
Prerequisites.

Completed "Dojo Node Guide," Parts [1](/privacy/dojo-1), [2](/privacy/dojo-2), [3](/privacy/dojo-3), [4](/privacy/dojo-4).
{{% /hint %}}

## Uncomplicated Firewall (UFW)

The Uncomplicated Firewall, or UFW, is a simple-to-use, command-line application for working with a Linux firewall.

Install UFW.

```bash
sudo apt install ufw -y
```

The following UFW rules should be applied in the terminal to ensure that only ports essential to the node's regular operation are open.

### Default Settings

```bash
sudo ufw default deny incoming
```

```bash
sudo ufw default allow outgoing
```

### Allow SSH

```bash
sudo ufw allow ssh
```

### Allow Dojo ZMQ Ports

```bash
sudo ufw allow 28334/tcp
```

```bash
sudo ufw allow 28333/tcp
```

### Allow Bitcoin Core RPC Port

```bash
sudo ufw allow 8332/tcp
```

### Allow Fulcrum SSL Port

```bash
sudo ufw allow 50002/tcp
```

### Allow Mempool HTTP Port 

```bash
sudo ufw allow 4080/tcp
```

### Enable UFW

```bash
sudo ufw enable
```

When enabling UFW, a warning may appear informing that enabling UFW may cause connection issues with the session. Since a rule allowing SSH was already applied, confirming with "y is safe."

{{< details "Contents" "..." >}}

## Dojo x86 Bitcoin Node Guide

[Introduction](/en/practice-privacy/dojo-0)

[Part 1. Installing Bitcoin Core & Tor](/en/practice-privacy/dojo-1)

[Part 2. Installing Fulcrum Indexer](/en/practice-privacy/dojo-2)

[Part 3. Installing Mempool Explorer](/en/practice-privacy/dojo-3)

[Part 4. Installing Samourai Dojo](/en/practice-privacy/dojo-4)

[Part 5. Firewall Configuration](/en/practice-privacy/dojo-5)

[Part 6. Installing Package Updates](/en/practice-privacy/dojo-6)

{{< /details >}}