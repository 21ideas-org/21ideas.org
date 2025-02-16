---
title: "Installing Mempool Explorer"
h1: "Part 3. Installing Mempool Explorer"
description: ""
cover: /img/dojo-06.jpg
url: practice-privacy/dojo-3
date: 2023-12-20
bookFlatSection: false
bookToc: true
weight: 4
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

- Completed "Dojo Node Guide," Parts [1](/privacy/dojo-1), [2](/privacy/dojo-2).
- Fulcrum synchronization completed.
{{% /hint %}}

## Introduction

The Mempool Visual Explorer is a valuable tool for looking up detailed information about blocks, addresses, balances & transactions.

Hosting your instance locally is preferable to entering personal transaction details into websites you don't control.

## Install Docker

Before installing Mempool, Docker is required.

Add Docker's official GPG key.

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

Add the Docker repository to Apt sources.

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```bash
sudo apt update
```

Install the Docker packages.

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```

Add the user to the docker group.

```bash
sudo usermod -aG docker satoshi
```

Log out.

```bash
exit
```

Log back in as "satoshi" again. This re-evaluates the user's new membership to the Docker group.

## Install Mempool

Clone the Mempool repository.

```bash
git clone https://github.com/mempool/mempool.git
```

Enter the Mempool Docker directory.

```bash
cd mempool/docker
```

Open the "docker-compose.yml" file.

```bash
nano docker-compose.yml
```

Edit the following lines.

```
####change
ports:
  - 80:8080

##to
ports:
  - 4080:8080
```

```
####change
MEMPOOL_BACKEND: "none"

##to
MEMPOOL_BACKEND: "electrum"
```

```
####edit to your nodes local ip
CORE_RPC_HOST: "172.27.0.1"
```

```
####edit to your core rpc username & password
CORE_RPC_USERNAME: "mempool"
CORE_RPC_PASSWORD: "mempool"
```

```
####change all 3 instances of
restart: on-failure

##to
restart: always
```

Add the following lines below "STATISTICS_ENABLED," editing "ELECTRUM_HOST" to include the node's local IP.

```
ELECTRUM_HOST: "192.xxx.x.xx"
ELECTRUM_PORT: "50002"
ELECTRUM_TLS_ENABLED: "true"
```

Paste the following block at the bottom of the file on the next available free line. Ensure the spacing is exactly as shown.

```
networks:
  default:
    driver: bridge
    ipam:
      config:
        - subnet: 172.16.57.0/24
```

Save and exit the file.

Now, initialize Mempool.

```bash
docker compose up -d
```

Open a web browser, and in the address bar, type your node's IP address, followed by ":4080" to visit the local Mempool instance.

As a fresh install, it may take time before Mempool fully populates, so don't be concerned if the dashboard is incomplete.

## Tor Connections

A [Tor Browser](https://www.torproject.org/download/) can access The local Mempool installation from anywhere worldwide. A unique onion address is required for this functionality.

Open the "torrc" file.

```bash
sudo nano /etc/tor/torrc
```

Add the following lines to the bottom of the file, then save and exit.

```
# Hidden Service Mempool
HiddenServiceDir /var/lib/tor/mempool/
HiddenServiceVersion 3
HiddenServicePort 80 127.0.0.1:4080
```

Restart the Tor service.

```bash
sudo systemctl restart tor
```

Mempool's Tor address can be requested with the following command.

```bash
sudo cat /var/lib/tor/mempool/hostname
```

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