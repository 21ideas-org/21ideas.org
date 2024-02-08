---
title: "Installing Bitcoin Core"
h1: "Part 1. Installing Bitcoin Core"
description: ""
cover: /img/dojo-04.jpg
url: practice-privacy/dojo-1
date: 2023-12-20
bookFlatSection: false
bookToc: true
weight: 2
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

## Introduction

Bitcoin Core originated from the first Bitcoin software client released by Satoshi Nakamoto, the pseudonymous creator(s) of Bitcoin, in 2009. It was initially called "Bitcoin" but later renamed "Bitcoin Core" to differentiate it from the broader Bitcoin network and currency.

By running Bitcoin Core, participants contribute to the decentralized and consensus-driven nature of the Bitcoin network. Each full node independently validates transactions and blocks, ensuring adherence to the network's rules without reliance on a central authority.

## System User

Create the user "satoshi" during the initial Ubuntu install. You can create "satoshi" with the following command if a different user was created.

```bash
sudo adduser --gecos "" satoshi
```

Create a strong password for the user, avoiding special characters.

Provide "satoshi" with sudo permission.

```bash
sudo usermod -aG sudo satoshi
```

Login as the new system user.

```bash
su - satoshi
```

Run a system upgrade. Use the sudo password created previously.

```bash
sudo apt update && sudo apt upgrade -y
```

Install required dependencies.

```bash
sudo apt install curl gpg unzip apt-transport-https -y
```

## Local IP

Throughout the guide, you will need to know the local IP address of your node to make the required modifications to the various configuration files.

Run the following command if you do not know your node's local IP. Note it for future reference.

```bash
hostname -I
```

## Configure Tor

Create a new sources file for Tor.

```bash
sudo nano /etc/apt/sources.list.d/tor.list
```

Paste the following lines, then save and exit the file with "control+x," confirm with "y," then "enter."

```bash
deb [signed-by=/usr/share/keyrings/tor-archive-keyring.gpg] https://deb.torproject.org/torproject.org jammy main
deb-src [signed-by=/usr/share/keyrings/tor-archive-keyring.gpg] https://deb.torproject.org/torproject.org jammy main
```

Import the Tor project's gpg key.

```bash
sudo wget -qO- https://deb.torproject.org/torproject.org/A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tor-archive-keyring.gpg >/dev/null
```

Install Tor and Tor Debian keyring.

```bash
sudo apt update && sudo apt install tor deb.torproject.org-keyring -y
```

Open the "torrc" file.

```bash
sudo nano /etc/tor/torrc
```

Paste the following at the top of the file, then save and exit.

```bash
# Hidden Service Bitcoind
ControlPort 9051
CookieAuthentication 1
CookieAuthFileGroupReadable 1
```

Add "satoshi" to the Tor group.

```bash
sudo usermod -aG debian-tor satoshi
```

## Configure Bitcoin Daemon

### Download & Verify Core

Create a downloads directory.

```bash
mkdir ~/downloads
```

Enter the directory.

```bash
cd ~/downloads
```

Visit [bitcoincore.org](https://bitcoincore.org/bin/) and locate the page for the most current Bitcoin version, avoiding releases marked "test." At the time of writing, v26.0 is the most recent release.

Copy the URL for the latest "x86_64-linux-gnu.tar.gz" package and download using "wget."

```bash
torsocks wget https://bitcoincore.org/bin/bitcoin-core-26.0/bitcoin-26.0-x86_64-linux-gnu.tar.gz
```

On the same page, download the "SHA256SUMS" file.

```bash
torsocks wget https://bitcoincore.org/bin/bitcoin-core-26.0/SHA256SUMS
```

Then download "SHA256SUMS.asc".

```bash
torsocks wget https://bitcoincore.org/bin/bitcoin-core-26.0/SHA256SUMS.asc
```

Verify the checksum of the download.

```bash
sha256sum --ignore-missing --check SHA256SUMS
```

{{% hint info %}}
The output should show an "ok" message, for example:- "bitcoin-0.0-x86_64-linux-gnu.tar.gz: OK.
{{% /hint %}}

Verify the validity of the release by checking the signatures against the known [developer keys](https://github.com/bitcoin-core/guix.sigs/tree/main/builder-keys) from the official Core repository.

Import developer keys to GPG keyring.

```bash
torsocks curl -s https://api.github.com/repos/bitcoin-core/guix.sigs/contents/builder-keys | \
grep download_url | cut -d '"' -f 4 | \
xargs -n 1 curl -O && \
ls *.gpg | xargs -n 1 gpg --import && \
rm *.gpg
```

Verify the signatures.

```bash
gpg --verify SHA256SUMS.asc
```

This will output a series of signature checks for each public key that signed the checksums.

{{% hint info %}}
The keys previously imported into your keyring should show a "gpg: Good signature" message.
{{% /hint %}}

{{% hint info %}}
Don't worry about "This key is not certified with a trusted signature!" warnings. Enhanced trust levels have not been manually set for the imported keys.
{{% /hint %}}

Remove the downloaded verification files.

```bash
rm SHA256SUMS && rm SHA256SUMS.asc
```

Unpackage Bitcoin Core.

```bash
tar xzf bitcoin-*-x86_64-linux-gnu.tar.gz
```

Remove the archive.

```bash
rm -r bitcoin-*-x86_64-linux-gnu.tar.gz
```

### Installing Core

Run the following command to install Bitcoin Core.

```bash
sudo install -m 0755 -o root -g root -t /usr/local/bin bitcoin-*/bin/*
```

Remove the leftover folder.

```bash
rm -r bitcoin-*/
```

Restart the Tor daemon.

```bash
sudo systemctl restart tor
```

Start the Bitcoin daemon, then stop it again after a few seconds.

```bash
bitcoind -daemon
```

```bash
bitcoin-cli stop
```

### Configuration

Create a Bitcoin configuration file.

```bash
nano ~/.bitcoin/bitcoin.conf
```

Paste the following lines into the file.

```bash
proxy=127.0.0.1:9050
listen=1
bind=127.0.0.1
onlynet=onion
server=1
txindex=1
daemon=1
pruned=0
dbcache=1024
peerbloomfilters=1
rpcport=8332
rpcbind=0.0.0.0
rpcallowip=127.0.0.1
rpcallowip=10.0.0.0/8
rpcallowip=172.0.0.0/8
rpcallowip=192.0.0.0/8
zmqpubrawblock=tcp://0.0.0.0:28332
zmqpubrawtx=tcp://0.0.0.0:28333
zmqpubhashblock=tcp://0.0.0.0:28334
whitelist=127.0.0.1
```

{{% hint info %}}
To sync the blockchain via Clearnet instead of Tor, remove the proxy, listen, bind, and onlynet lines, then add again after IBD completes. Bitcoind will need to be restarted to load the modifications. Whilst this accelerates sync performance, it is detrimental to privacy and not recommended.
{{% /hint %}}

You also have the option of enabling or disabling "Mempool Full-RBF." If you want to ensure your choice persists throughout Core updates, regardless of what defaults future releases settle on, It's recommended to flag this in your conf file using either the enable (1) or disable (0) argument.

You can ignore this line if you are happy to flow with any defaults chosen for you in future updates.

```bash
mempoolfullrbf=0
```

Leave the file open and start a new terminal session. SSH in and download the raw "[rpcauth.py file](https://github.com/bitcoin/bitcoin/blob/master/share/rpcauth/rpcauth.py)" from the Bitcoin repository.

```bash
torsocks wget https://raw.githubusercontent.com/bitcoin/bitcoin/master/share/rpcauth/rpcauth.py
```

Set the correct file permissions.

```bash
chmod +x rpcauth.py
```

Run the following command, replacing "PASSWORDHERE" with a strong RPC password for Bitcoin Core. Avoid the use of special characters.

```bash
./rpcauth.py bitcoin PASSWORDHERE
```

Copy the RPC string, starting "rpcauth=bitcoin," and paste it, including the long string of numbers that follow, to the bottom of the "bitcoin.conf" file, open in your first terminal window.

Save and exit the file.

Remove the "rpcauth.py" file.

```bash
rm rpcauth.py
```

### Service File

Create a service file to start Bitcoin automatically on system boot.

```bash
cd /etc/systemd/system/
```

Copy the link to the raw "[bitcoind.service](https://github.com/bitcoin/bitcoin/blob/26.x/contrib/init/bitcoind.service)" file from the Bitcoin repo and download.

```bash
sudo torsocks wget https://raw.githubusercontent.com/bitcoin/bitcoin/26.x/contrib/init/bitcoind.service
```

Open the downloaded file.

```bash
sudo nano bitcoind.service
```

Make the following edits.

```
####change
ExecStart=/usr/bin/bitcoind -pid=/run/bitcoind/bitcoind.pid \
                            -conf=/etc/bitcoin/bitcoin.conf \
                            -datadir=/var/lib/bitcoind \
                            -startupnotify='systemd-notify --ready' \
                            -shutdownnotify='systemd-notify --stopping'

##to
ExecStart=/usr/local/bin/bitcoind -pid=/run/bitcoind/bitcoind.pid \
                            -conf=/home/satoshi/.bitcoin/bitcoin.conf \
                            -datadir=/home/satoshi/.bitcoin \
                            -startupnotify='systemd-notify --ready' \
                            -shutdownnotify='systemd-notify --stopping'
```

```
####comment out
ExecStartPre=/bin/chgrp bitcoin /etc/bitcoin

##like this
#ExecStartPre=/bin/chgrp bitcoin /etc/bitcoin
```

```
####edit
User=bitcoin
Group=bitcoin

##to
User=satoshi
Group=satoshi
```

```
####comment out
ProtectHome=true

##like this
#ProtectHome=true
```

Save the file & exit.

Enable the service file.

```bash
sudo systemctl enable bitcoind
```

### Tor Peers

The first Tor peer needs to be added manually. Open "bitcoin.conf," then visit the Tor node page at [Bitnodes.io](https://bitnodes.io/nodes/?q=tor) in a web browser.

```bash
nano ~/.bitcoin/bitcoin.conf
```

Select an active node from the list and copy the Tor address and port number.

Return to the terminal and paste the address at the bottom of the "bitcoin.conf" file.

As shown in the example below, include the "addnode=" prefix.

```
addnode=ufi6x4yympldoxmzgszvq5pb3pzixxjicvrhssrmky23f5bgxfxlfqd.onion:8333
```

{{% hint info %}}
Warning: This example is not an active node and should not be used.
{{% /hint %}}

Save and exit the file, then reboot the node.

```bash
sudo reboot
```

Wait a few minutes, then SSH into the node as "satoshi."

Check that the node is successfully connecting to Tor peers. Depending on your waiting time, you may need to run this command several times.

```bash
bitcoin-cli getconnectioncount
```

If the output shows several peers, you can return to "bitcoin.conf" and remove the entire "addnode" line, then save and exit.

```bash
nano .bitcoin/bitcoin.conf
```

Restart Bitcoin CLI.

```bash
sudo systemctl restart bitcoind
```

Wait a few minutes, then check that you are still connecting to Tor nodes.

```bash
bitcoin-cli getconnectioncount
```

### Networking

Confirm that network traffic is only passing through Tor.

The output should show a "reachable false" status for both "IPV4" and "IPV6".

Also, confirm that "onion" shows a "reachable true" status.

```bash
bitcoin-cli getnetworkinfo
```

The output also displays your Bitcoin Core onion address. This is useful for services requiring a direct connection to Core.

You can also make direct requests for your Bitcoin onion address.

```bash
bitcoin-cli getnetworkinfo | grep address.*onion
```

Tor limits IBD speeds; however, the privacy benefits of avoiding clearnet are substantial.

Monitor progress by running the following command from the home directory.

```bash
tail -f .bitcoin/debug.log
```

Wait until Core sync is finished before continuing. Once logs show "progress=1.000000", IBD is complete.

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