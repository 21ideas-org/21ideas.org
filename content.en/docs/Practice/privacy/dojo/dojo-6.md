---
title: "Installing Package Updates"
h1: "Part 6. Installing Package Updates"
description: ""
cover: /img/dojo-10.jpg
url: practice-privacy/dojo-6
date: 2023-12-20
bookFlatSection: false
bookToc: true
weight: 7
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

## Introduction

The ability to update your node's packages independently provides node operators with a much higher level of sovereignty. You can choose which updates to run and how to configure them rather than relying on the preferences and timescales of plug-and-play node developers.

Here, we will cover the individual upgrade steps of the binaries that make up your node.

## Updating Core

Package updates can be monitored on the official Bitcoin Core [repository](https://github.com/bitcoin/bitcoin/releases).

Check what version of Core is currently installed with the following command.

```bash
bitcoin-cli --version
```

If a newer version is available, stop Bitcoin CLI.

```bash
bitcoin-cli stop
```

Visit [bitcoincore.org](https://bitcoincore.org/bin/) and locate the page for the most current Bitcoin version, avoiding any releases marked "test."

Enter the downloads directory.

```bash
cd ~/downloads
```

Copy the URL for the latest "x86_64-linux-gnu.tar.gz" package and download it using "wget."

The following command can be edited to include the required version number.

```bash
torsocks wget https://bitcoincore.org/bin/bitcoin-core-0.0/bitcoin-0.0-x86_64-linux-gnu.tar.gz
```

Download the releases matching verification files.

The following commands can be edited to include the required version number.

```bash
torsocks wget https://bitcoincore.org/bin/bitcoin-core-0.0/SHA256SUMS
```

```bash
torsocks wget https://bitcoincore.org/bin/bitcoin-core-0.0/SHA256SUMS.asc
```

Verify the checksum of the download.

```bash
sha256sum --ignore-missing --check SHA256SUMS
```

{{% hint info %}}
The output should show an "ok" message, for example: "bitcoin-0.0-x86_64-linux-gnu.tar.gz: OK."
{{% /hint %}}

Verify the signatures.

```bash
gpg --verify SHA256SUMS.asc
```

{{% hint info %}}
The developer keys previously imported should show a "gpg: Good signature" message.
{{% /hint %}}

Unpack the downloaded archive.

```bash
tar xzf bitcoin-*-x86_64-linux-gnu.tar.gz
```

Remove the verification files and the empty archive.

```bash
rm SHA256SUMS && rm SHA256SUMS.asc
```

```bash
rm -r bitcoin-*-x86_64-linux-gnu.tar.gz
```

Install the new Core package.

```bash
sudo install -m 0755 -o root -g root -t /usr/local/bin bitcoin-*/bin/*
```

Start Bitcoin Core.

```bash
sudo systemctl start bitcoind
```

Remove the remaining folder.

```bash
rm -r bitcoin-*/
```

Check that the latest version of Bitcoin Core is installed.

```bash
bitcoin-cli --version
```

To confirm that everything is operating as expected, check the logs from the home directory.

```bash
tail -f .bitcoin/debug.log
```

Complete.

## Updating Fulcrum

Package updates can be monitored on the official Fulcrum [repository](https://github.com/cculianu/Fulcrum/releases).

Enter the downloads directory.

```bash
cd ~/downloads
```

Copy the URL for the latest "x86_64-linux-gnu.tar.gz" package and download it using "get."

The following command can be edited to include the required version number.

```bash
torsocks wget https://github.com/cculianu/Fulcrum/releases/download/v0.0.0/Fulcrum-0.0.0-x86_64-linux.tar.gz
```

Download the releases matching verification files.

The following commands can be edited to include the required version number.

```bash
torsocks wget https://github.com/cculianu/Fulcrum/releases/download/v0.0.0/Fulcrum-0.0.0-shasums.txt.asc
```

```bash
torsocks wget https://github.com/cculianu/Fulcrum/releases/download/v0.0.0/Fulcrum-0.0.0-shasums.txt
```

Verify the checksum of the download.

```bash
sha256sum --ignore-missing --check Fulcrum-*-shasums.txt
```

{{% hint info %}}
The output should show an "ok" message, for example: "Fulcrum-0.0.0-x86_64-linux.tar.gz: OK."
{{% /hint %}}

Verify the signature.

```bash
gpg --verify Fulcrum-*-shasums.txt.asc
```

{{% hint info %}}
Cculianu's previously imported key should show a "gpg: Good signature" message.
{{% /hint %}}

Unpack the downloaded archive.

```bash
tar xvf Fulcrum-*-x86_64-linux.tar.gz
```

Remove the archive.

```bash
rm Fulcrum-*-x86_64-linux.tar.gz
```

Remove the verification files.

```bash
rm Fulcrum-*-shasums.txt.asc && rm Fulcrum-*-shasums.txt
```

Stop Fulcrum.

```bash
sudo systemctl stop fulcrum
```

Enter the Fulcrum directory.

```bash
cd ~/fulcrum
```

Copy existing "fulcrum.conf" and SSL ".pem" files to the downloads directory.

```bash
cp key.pem cert.pem fulcrum.conf ~/downloads
```

Delete the remaining Fulcrum files.

```bash
rm -rf ./*
```

Copy the contents of your newly unpacked archive to the Fulcrum folder.

```bash
cp -r ~/downloads/Fulcrum-*-x86_64-linux/* ~/fulcrum
```

Move the "fulcrum.conf" and SSL ".pem" files to the Fulcrum directory.

```bash
mv ~/downloads/{key.pem,cert.pem,fulcrum.conf} ~/fulcrum
```

Remove the remaining folder.

```bash
rm -rf ~/downloads/Fulcrum-*-x86_64-linux
```

Start Fulcrum.

```bash
sudo systemctl start fulcrum.service
```

Restart Tor.

```bash
sudo systemctl restart tor
```

Check the logs with the following command to confirm everything is operating as expected.

```bash
journalctl -fu fulcrum.service
```

Complete.

## Updating Mempool

Package updates can be monitored from the official Mempool [repository](https://github.com/mempool/mempool/releases).

Enter the Mempool directory.

```bash
cd ~/mempool/docker
```

Pull the latest Mempool Docker package.

```bash
docker compose down --rmi all
```

Build and start the new Mempool Docker package.

```bash
docker compose up -d
```

Complete.

## Updating Dojo

Package updates can be monitored from the official Dojo [repository](https://github.com/Dojo-Open-Source-Project/samourai-dojo/releases).

SSH into the node as user "dojo."

{{% hint info %}}
If you configured a different username other than "dojo" when initially configuring Dojo, you will need to SSH into that user instead.
{{% /hint %}}

Enter the Dojo directory.

```bash
cd ~/dojo-app/docker/my-dojo
```

Stop Dojo.

```bash
./dojo.sh stop
```

Go to the home directory.

```bash
cd
```

Download the latest Dojo release.

```bash
torsocks wget https://github.com/Dojo-Open-Source-Project/samourai-dojo/archive/refs/heads/master.zip
```

Unpack the Dojo archive.

```bash
unzip master.zip
```

Copy the contents to the "dojo-app" directory.

```bash
cp -a samourai-dojo-master/. dojo-app/
```

Remove the archive and remaining folder.

```bash
rm master.zip
```

```bash
rm -rf samourai-dojo-master
```

Return to the "my-dojo" directory.

```bash
cd ~/dojo-app/docker/my-dojo
```

Run the Dojo upgrade script.

```bash
./dojo.sh upgrade -y
```

Once the logs show a constant stream of "node.js" logs, the upgrade is complete, and you can safely exit the logs with "control + c."

Complete.

## Updating System

The Debian base system can be upgraded anytime to ensure it's updated with the latest security patches using the following command.

```bash
sudo apt update && sudo apt upgrade -y
```

Complete.

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