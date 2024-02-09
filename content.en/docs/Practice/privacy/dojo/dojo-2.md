---
title: "Installing Fulcrum Indexer"
h1: "Part 2. Installing Fulcrum Indexer"
description: ""
cover: /img/dojo-05.jpg
url: practice-privacy/dojo-2
date: 2023-12-20
bookFlatSection: false
bookToc: true
weight: 3
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

- Completed "Dojo Node Guide," [Part 1](/privacy/dojo-1).
- Bitcoin Core IBD Complete.
{{% /hint %}}

## Introduction

After fully synchronizing Bitcoin Core, installing an Electrum indexer, which ensures compatibility with all Electrum-based Bitcoin wallets, is the next step.

Connecting wallets directly to a personal Electrum server, rather than Core, provides vast security improvements since Core stores balances and public keys unencrypted on the local device.

The Fulcrum Electrum indexer has a larger footprint than other indexers; however, its performance is unmatched once fully synchronized.

## Download & Verify Fulcrum

Go to the downloads directory.

```bash
cd ~/downloads
```

Visit Fulcrum's [Github page](https://github.com/cculianu/Fulcrum/releases) in a browser and copy the link for the latest "x86_64-linux.tar.gz" file. At the time of writing, the most recent version is 1.9.8.

Download Fulcrum.

```bash
torsocks wget https://github.com/cculianu/Fulcrum/releases/download/v1.9.8/Fulcrum-1.9.8-x86_64-linux.tar.gz
```

Download the releases "asc" file.

```bash
torsocks wget https://github.com/cculianu/Fulcrum/releases/download/v1.9.8/Fulcrum-1.9.8-shasums.txt.asc
```

Download the release's sha256sum file.

```bash
torsocks wget https://github.com/cculianu/Fulcrum/releases/download/v1.9.8/Fulcrum-1.9.8-shasums.txt
```

Verify Fulcrum's checksum.

```bash
sha256sum -c --ignore-missing Fulcrum-*-shasums.txt
```

{{% hint info %}}
The output should provide an “OK” message, for example:- "Fulcrum-0.0.0-x86_64-linux.tar.gz: OK."
{{% /hint %}}

Import Fulcrum's developer's [public key](https://github.com/Electron-Cash/keys-n-hashes/blob/master/pubkeys/calinkey.txt) from the official GitHub repository.

```bash
torsocks curl https://raw.githubusercontent.com/Electron-Cash/keys-n-hashes/master/pubkeys/calinkey.txt | gpg --import
```

Verify the signatures match.

```bash
gpg --verify Fulcrum-*-shasums.txt.asc
```

{{% hint info %}}
The output should read "Good signature from Calin Culianu."
{{% /hint %}}

{{% hint info %}}
Do not worry about the "This key is not certified with a trusted signature!" warning. Enhanced trust levels have not been manually set for the imported key.
{{% /hint %}}

Remove the verification files.

```bash
rm Fulcrum-*-shasums.txt && rm Fulcrum-*-shasums.txt.asc
```

## Folder Preparation

Create a "fulcrum" directory.

```bash
mkdir ~/fulcrum
```

Create a "fulcrum_db" directory.

```bash
mkdir ~/fulcrum_db
```

Unpackage the archive.

```bash
tar xvf Fulcrum-*-x86_64-linux.tar.gz
```

Move the contents to the "fulcrum" directory.

```bash
mv Fulcrum-*-x86_64-linux/* /home/satoshi/fulcrum
```

Remove the leftover folder.

```bash
rm -r Fulcrum-*-x86_64-linux
```

Remove the archive.

```bash
rm Fulcrum-*-x86_64-linux.tar.gz
```

Enter the "fulcrum" directory.

```bash
cd ~/fulcrum
```

## SSL

Generate a new SSL key. Hit enter on the prompts, leaving all at default.

```bash
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

## Configuration

Rename the default fulcrum configuration file.

```bash
mv fulcrum-example-config.conf fulcrum.conf
```

Open the "fulcrum.conf" file.

```bash
nano fulcrum.conf
```

Edit the following lines as shown.

```
####change
datadir = /path/to/a/dir  # Windows: datadir = D:\FulcrumData\mainnet

##to
datadir = /home/satoshi/fulcrum_db  # Windows: datadir = D:\FulcrumData\mainnet
```

```
####edit to your core rpc username & password
rpcuser = Bob_The_Banker
rpcpassword = hunter1
```

```
####uncomment the following line
#ssl = 0.0.0.0:50002

##like so
ssl = 0.0.0.0:50002
```

```
####uncomment & edit the following lines
#cert = /path/to/server-cert.pem
#key = /path/to/server-key.pem
#peering = true

##like so
cert = /home/satoshi/fulcrum/cert.pem
key = /home/satoshi/fulcrum/key.pem
peering = false
```

```
###uncomment & edit the following line
#fast-sync = 0

##like so
fast-sync = 2000
```

Save and exit the file.

## Service File

Create a service file to start Fulcrum on system boot.

```bash
sudo nano /etc/systemd/system/fulcrum.service
```

Paste the following lines, then save and exit the service file.

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

Enable the service file.

```bash
sudo systemctl enable fulcrum.service
```

Start Fulcrum.

```bash
sudo systemctl start fulcrum.service
```

Before continuing, wait until the Fulcrum sync has been completed. The device's power supply must remain uninterrupted during this process, or the Fulcrum database may corrupt.

Monitor Fulcrum's sync progress using the following command from the home directory. The sync is completed once the logs begin displaying the latest Mempool data.

```bash
journalctl -fu fulcrum.service
```

Local wallet connections to Fulcrum are made by adding the node's local IP and SSL port into the address field of your wallet settings, for example;

```
ssl://192.168.1.100:50002
```

## Tor Connections

Further lines must be added to the "torcc" file to configure Fulcrum with Tor.

```bash
sudo nano /etc/tor/torrc
```

Paste the following at the top of the file.

```bash
# Hidden Service Fulcrum
HiddenServiceDir /var/lib/tor/hidden_service_fulcrum/
HiddenServiceVersion 3
HiddenServicePort 50002 127.0.0.1:50002
```

Save and exit the file, then reload Tor.

```bash
sudo systemctl reload tor
```

Fulcrum's Tor address can be requested with the following command.

```bash
sudo cat /var/lib/tor/hidden_service_fulcrum/hostname
```

Remote wallet connections to the Fulcrum server can be made using the server's onion address and port number, as shown in the example below.

```
https://78aqvahpe6pjachf6nxroyr76gecku6nqoyngkj49r63n3twm6jpisyd.onion:50002
```

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