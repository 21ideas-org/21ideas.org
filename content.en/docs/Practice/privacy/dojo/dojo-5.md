---
title: "Installing Whirlpool CLI & Firewall Config"
h1: "Part 5. Installing Whirlpool CLI & Firewall Config"
description: ""
cover: /img/dojo-09.jpg
url: practice-privacy/dojo-5
date: 2023-12-20
bookFlatSection: false
bookToc: true
weight: 6
---

{{< expand "Contents" "..." >}}

## Dojo x86 Bitcoin Node Guide

[Introduction](/en/practice-privacy/dojo-0)

[Part 1. Installing Bitcoin Core](/en/practice-privacy/dojo-1)

[Part 2. Installing Fulcrum Indexer](/en/practice-privacy/dojo-2)

[Part 3. Installing Mempool Explorer](/en/practice-privacy/dojo-3)

[Part 4. Installing Samourai Dojo](/en/practice-privacy/dojo-4)

[Part 5. Installing Whirlpool CLI & Firewall Config](/en/practice-privacy/dojo-5)

[Part 6. Installing Package Updates](/en/practice-privacy/dojo-6)

{{< /expand >}}

{{% hint btc %}}
Prerequisites.

Completed "Dojo Node Guide," Parts [1](/privacy/dojo-1), [2](/privacy/dojo-2), [3](/privacy/dojo-3), [4](/privacy/dojo-4).
{{% /hint %}}

## Introduction

Whirlpool CLI is a command-line tool that operates silently in the background of personal Dojo-backed Bitcoin nodes. This CLI tool automates the remixing process of postmix UTXOs 24/7, ensuring you never miss a remix so long as the node is active.

## Download Whirlpool

If not already, SSH into the node as the user "dojo."

Create a directory for Whirlpool.

```bash
mkdir ~/whirlpool
```

Enter the directory.

```bash
cd ~/whirlpool
```

Visit the Whirlpool CLI [release page](https://code.samourai.io/whirlpool/whirlpool-client-cli/-/releases) and copy the link for the latest "run.jar" file, downloading it with "wget." At the time of writing, the latest version is 0.10.17, so modify commands accordingly.

```bash
torsocks wget https://code.samourai.io/whirlpool/whirlpool-client-cli/uploads/63621e145967f536a562851853bd0990/whirlpool-client-cli-0.10.16-run.jar
```

Install Java.

```bash
sudo apt install openjdk-19-jre-headless -y
```

Before initializing Whirlpool, have the Samourai Wallet's passphrase and pairing code ready for pasting into the terminal.

The pairing code is in Samourai Wallet under **Settings** > **Transaction** > **Pair** **to Whirlpool GUI**.

## Pair Samourai Wallet

Initiate Whirlpool, entering the pairing code and passphrase when prompted.

```bash
java -jar whirlpool-client-cli-*-run.jar --init
```

Connecting may take a minute, but the pairing is successful once logs start printing for the wallet's Postmix account. If returned to the command prompt, the pairing has failed and must be rerun until successful.

Once paired, exit the logs with "control+c."

## System File

Create a system file to start Whirlpool on boot.

```bash
sudo nano /etc/systemd/system/whirlpool.service
```

Paste the following lines, ensuring to edit if the Whirlpool version differs.

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

Save and exit the file.

Reload "systemctl."

```bash
sudo systemctl daemon-reload
```

Enable the Whirlpool service.

```bash
sudo systemctl enable whirlpool
```

Start the Whirlpool service.

```bash
sudo systemctl start whirlpool
```

Whirlpool CLI is now operational.

## Whirlpool GUI

Whirlpool GUI is a simple-to-use graphical user interface for Whirlpool CLI, which allows you to monitor and interact with the Whirlpool service in a user-friendly manner.

Whirlpool GUI can be [downloaded](https://samouraiwallet.com/download) directly from the Samourai Wallet website.

## Pair Whirlpool GUI

Upon opening the GUI for the first time, "Remote CLI" should be selected.

In the CLI Address field, replace "my-cli-host" with your node's IP.

Next, select "Configure API Key," and a box will appear. Return to your node's terminal via SSH and run the following command to find the key.

```bash
nano ~/whirlpool/whirlpool-cli-config.properties
```

The API key is the string of numbers that follows "cli.apiKey=" at the top of the file.

Once the CLI and API addresses are entered, select "Connect."

After a few seconds, a prompt will appear requesting the wallet's passphrase. Once entered, the pairing is complete.

## Uncomplicated Firewall (UFW)

The Uncomplicated Firewall, or UFW, is a simple-to-use, command-line application for working with a Linux firewall.

Install UFW.

```bash
sudo apt install ufw -y
```

To ensure that the only ports open are those essential to the node's regular operation, the following UFW rules should be applied in the terminal.

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

### Allow Whirlpool GUI

```bash
sudo ufw allow 8899/tcp
```

### Allow BITCOIND_ZMQ_BLK_HASH

```bash
sudo ufw allow 28334/tcp
```

### Allow BITCOIND_ZMQ_RAWTXS

```bash
sudo ufw allow 28333/tcp
```

### Allow BITCOIND_RPC_PORT

```bash
sudo ufw allow 8332/tcp
```

### Allow Fulcrum SSL

```bash
sudo ufw allow 50002/tcp
```

### Allow Mempool GUI

```bash
sudo ufw allow 4080/tcp
```

### Enable UFW

```bash
sudo ufw enable
```

When enabling UFW, a warning may appear informing that enabling UFW may cause connection issues with the session. Since a rule allowing SSH was already applied, confirming with "y is safe."

{{< expand "Contents" "..." >}}

## Dojo x86 Bitcoin Node Guide

[Introduction](/en/practice-privacy/dojo-0)

[Part 1. Installing Bitcoin Core](/en/practice-privacy/dojo-1)

[Part 2. Installing Fulcrum Indexer](/en/practice-privacy/dojo-2)

[Part 3. Installing Mempool Explorer](/en/practice-privacy/dojo-3)

[Part 4. Installing Samourai Dojo](/en/practice-privacy/dojo-4)

[Part 5. Installing Whirlpool CLI & Firewall Config](/en/practice-privacy/dojo-5)

[Part 6. Installing Package Updates](/en/practice-privacy/dojo-6)

{{< /expand >}}