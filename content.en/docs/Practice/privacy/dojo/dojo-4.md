---
title: "Installing Samourai Dojo"
h1: "Part 4. Installing Samourai Dojo"
description: ""
cover: /img/dojo-07.jpg
url: practice-privacy/dojo-4
date: 2023-12-20
bookFlatSection: false
bookToc: true
weight: 5
---

{{< expand "Contents" "..." >}}

## Dojo x86 Bitcoin Node Guide

[Introduction](/en/practice-privacy/dojo-0)

[Part 1. Installing Bitcoin Core & Tor](/en/practice-privacy/dojo-1)

[Part 2. Installing Fulcrum Indexer](/en/practice-privacy/dojo-2)

[Part 3. Installing Mempool Explorer](/en/practice-privacy/dojo-3)

[Part 4. Installing Samourai Dojo](/en/practice-privacy/dojo-4)

[Part 5. Firewall Configuration](/en/practice-privacy/dojo-5)

[Part 6. Installing Package Updates](/en/practice-privacy/dojo-6)

{{< /expand >}}

{{% hint btc %}}
Prerequisites.

Completed "Dojo Node Guide," Parts [1](/privacy/dojo-1), [2](/privacy/dojo-2), [3](/privacy/dojo-3).
{{% /hint %}}

## Introduction

Dojo is a privacy-focused, end-to-end server software solution that acts as a Bitcoin wallet backend for Samourai Wallet and other Bitcoin light wallets.

## Create Dojo User

Creating a segregated user account for Dojo is beneficial for security.

```bash
sudo useradd -s /bin/bash -d /home/dojo -m -G sudo dojo
```

Set a password for your new user.

```bash
sudo passwd dojo
```

Provide the user "dojo" with the required permissions.

```bash
sudo usermod -aG docker dojo
```

Restart the device.

```bash
sudo reboot
```

Once the system has successfully rebooted, SSH back in as user "dojo."

## Download Dojo

Download the latest version of Dojo from the official [Dojo repository](https://github.com/Dojo-Open-Source-Project/samourai-dojo/releases).

```bash
torsocks wget https://github.com/Dojo-Open-Source-Project/samourai-dojo/archive/refs/heads/master.zip
```

Unzip the downloaded archive.

```bash
unzip master.zip
```

Create a directory for Dojo.

```bash
mkdir ~/dojo-app
```

Move the unpackaged files to the new directory.

```bash
mv ~/samourai-dojo-master/* ~/dojo-app/
```

Remove the empty archive & folder.

```bash
rm -r samourai-dojo-master && rm master.zip
```

## Configure Dojo

Multiple configuration files need to be modified before initializing Dojo.

```bash
cd ~/dojo-app/docker/my-dojo/conf/
```

Open "bitcoind.conf".

```bash
nano docker-bitcoind.conf.tpl
```

Edit as follows.

```
####edit to your core rpc username & password
BITCOIND_RPC_USER=dojorpc
BITCOIND_RPC_PASSWORD=dojorpcpassword
```

```
####change
BITCOIND_INSTALL=on

##to
BITCOIND_INSTALL=off
```

```
####edit to your nodes IP
BITCOIND_IP=172.28.1.5
```

```
####change
BITCOIND_RPC_PORT=28256

##to
BITCOIND_RPC_PORT=8332
```

```
####change
BITCOIND_ZMQ_RAWTXS=9501

##to
BITCOIND_ZMQ_RAWTXS=28333
```

```
####change
BITCOIND_ZMQ_BLK_HASH=9502

##to
BITCOIND_ZMQ_BLK_HASH=28334
```

Save and exit the file.

Open "indexer.conf".

```bash
nano docker-indexer.conf.tpl
```

Edit as follows.

```
####change
INDEXER_TYPE=addrindexrs

##to
INDEXER_TYPE=fulcrum
```

```
####edit to your nodes IP
INDEXER_IP=172.28.1.6
```

```
####change
INDEXER_RPC_PORT=50001

##to
INDEXER_RPC_PORT=50002
```

```
####change
INDEXER_BATCH_SUPPORT=inactive

##to
INDEXER_BATCH_SUPPORT=active
```

```
####change
INDEXER_PROTOCOL=tcp

##to
INDEXER_PROTOCOL=tls
```

Save and exit the file.

Open "mysql.conf."

```bash
nano docker-mysql.conf.tpl
```

Create root and user passwords for MySQL, then edit the file.

```
####edit lines with passwords
MYSQL_ROOT_PASSWORD=rootpassword
MYSQL_PASSWORD=password
```

Save and exit the file.

Open "node.conf."

```bash
nano docker-node.conf.tpl
```

Create "API," "admin," and "JWT" passwords, then edit the file as follows.

```
####add passwords here
NODE_API_KEY=myApiKey
NODE_ADMIN_KEY=myAdminKey
NODE_JWT_SECRET=myJwtSecret
```

```
####change
NODE_ACTIVE_INDEXER=local_bitcoind

##to
NODE_ACTIVE_INDEXER=local_indexer
```

```
####optional - add paynym address if enabaling auth47
NODE_PAYMENT_CODE=
```

Save and exit the file.

There's also the option to disable the default Bitcoin RPC Explorer. This is optional, but with an already active Mempool installation, it may not be useful for some.

Skip this next step if wanting to leave RPC Explorer enabled.

Open "explorer.conf."

```bash
nano docker-explorer.conf.tpl
```

Edit the file as follows to disable RPC Explorer.

```
####change
EXPLORER_INSTALL=on

##to
EXPLORER_INSTALL=off
```

Save and exit the file.

## Dojo Initialisation

Enter the Dojo install script directory.

```bash
cd ~/dojo-app/docker/my-dojo
```

Run the script.

```bash
./dojo.sh install
```

Dojo will begin the installation process.

The installation is complete once a constant stream of "node.js" logs appears. Exit the logs with "control+c ".

## Dojo Maintenance Tool

The Dojo Maintenance Tool, or "DMT," is accessible only via Tor. The server's dedicated onion address can be requested with the following command.

```bash
./dojo.sh onion
```

The DMT can be accessed via this onion address and logged into using either the "admin key" previously created or "Auth47" if previously configured.

Once a full house of green ticks shows on the dashboard, Dojo is synched and ready to pair with a Samourai Wallet.

{{% image "/img/dojo-08.jpg" %}}
*DMT in Testnet*
{{% /image %}}

Select "pairing" from the DMT's menu to display the pairing QR code that can be scanned during the [setup process](https://docs.samourai.io/wallet/new-wallet#dojo) of creating or restoring a Samourai Wallet.

If the RPC explorer is not disabled, two QR codes will be displayed. The Dojo pairing QR is the one to the left.

{{< expand "Contents" "..." >}}

## Dojo x86 Bitcoin Node Guide

[Introduction](/en/practice-privacy/dojo-0)

[Part 1. Installing Bitcoin Core & Tor](/en/practice-privacy/dojo-1)

[Part 2. Installing Fulcrum Indexer](/en/practice-privacy/dojo-2)

[Part 3. Installing Mempool Explorer](/en/practice-privacy/dojo-3)

[Part 4. Installing Samourai Dojo](/en/practice-privacy/dojo-4)

[Part 5. Firewall Configuration](/en/practice-privacy/dojo-5)

[Part 6. Installing Package Updates](/en/practice-privacy/dojo-6)

{{< /expand >}}