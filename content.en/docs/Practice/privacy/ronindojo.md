---
title: "RoninDojo x86 Installation Guide"
h1: "RoninDojo x86 Installation Guide"
description: ""
cover: /img/ronin-11.jpg
url: practice-privacy/ronindojo
date: 2024-02-02
bookFlatSection: false
bookToc: true
weight: 2
---

{{% hint btc %}}
The author would like to thank [Estudio Bitcoin](https://twitter.com/estudiobitcoin), and personally [Albercoin](https://twitter.com/Albercoin) and [Arkad](https://twitter.com/Multicripto), for their [work](https://estudiobitcoin.com/how-to-install-ronindojo-pc-intel-amd-x86_64) on installing RoninDojo on x86.
{{% /hint %}}

{{% hint info %}}
Installation of "vanilla" Dojo is described in [official documentation](https://docs.samourai.io/en/dojo) by [Samourai](https://twitter.com/SamouraiWallet) and in [guide](/en/practice-privacy/dojo) by [𝕂𝕐ℂ𝟛](https://twitter.com/KYCfree).
{{% /hint %}}

## Dojo and RoninDojo differences

Classic Dojo server includes:

- Bitcoin Core.
- [BTC RPC Explorer](https://github.com/janoside/btc-rpc-explorer).
- Fulcrum Indexer (ElectrumX compatible) or Addrindexrs.
- Dojo Maintenance Tool (DMT).
- Whirlpool CLI.
- Testnet support (not available in RoninDojo).

RoninDojo adds:

- Electrum Rust Server (electrs). Thus, the user can choose from three options.
- Optional [Mempool](https://github.com/mempool/mempool) blockchain explorer.
- Ronin UI web interface.
- Whirlpool GUI directly in the web interface.
- Ronin CLI (command line interface).
- Whirlpool Stats Tool (WST).
- Boltzmann Calculator.
- Backing up the blockchain data to a separate disk after IBD.

This tutorial will describe how to manually install all components in a Debian based operating system. I used Ubuntu 22.04. This method will allow you to:

- Use any hardware that meets the minimum requirements. Two SSDs are recommended, but not required.
- Choose a basic operating system.
- Configure the necessary components before installing the system:
    - Select a blockchain indexer (Electrs, Fulcrum or Addrindexrs).
    - Install Mempool explorer.
    - Enable Auth47 for authentication to DMT using PayNym.
    - Configure Tor bridges.
    - Enable Testnet support.

{{% hint btc %}}
If you are only learning the features of Samourai Wallet, I recommend you to try all the functions in Testnet. All you need is a [virtual machine](https://www.virtualbox.org) and 100 GB of free disk space.
{{% /hint %}}

## System Requirements

- 64-bit computer with Intel/AMD processor. Intel Core i5 6500 or similar is recommended.
- Minimum 8GB of RAM.
- 1TB SSD, 2TB is highly recommended. It is also a good practice to use a small SSD of 100 GB or more to run the operating system while the blockchain data is stored on a separate large disk.
- An external 1TB HDD/SSD drive is recommended for backing up blockchain data from Bitcoin Core.

## OS installation

You need to install the base operating system. I used Ubuntu 22.04 Server. It can be [downloaded](https://ubuntu.com/download/server) from Ubuntu website.

During the installation process, the "Set up this disk as an LVM group" option must be turned off.

{{% hint info %}}
If you are using two SSDs, choose the smaller drive.
{{% /hint %}}

{{% image "/img/ronin-02.png" /%}}

Don't forget to enable the "Install OpenSSH server" option.

{{% image "/img/ronin-01.png" /%}}

After successful installation, log into your server via local network using an SSH client with the username you set during installation, your RoninDojo machine's internal IP address, and port 22. You can figure out the address in local network by using the command on the server:

```bash
hostname -I
```

My internal IP address is 10.0.2.15, respectively the subnet address in my case is 10.0.2.0/24, by analogy define yours and write it down.

## Defining the configuration

Find the name of your network interface. Write it down, for example "*eno1*".

```bash
ip -o -4 route show to default | awk '{print $5}'
```

Enter the following command and write down the name of partition (from the "NAME" column), where the root "/" of the file system is located ("MOUNTPOINTS" column). Add "*/dev/*" before the partition name. Mine is "*/dev/sda2*".

```bash
lsblk
```

{{% image "/img/ronin-03.png" /%}}

{{% hint info %}}
If you are using two SSDs, determine from the output of the previous command the name of the disk that will be used for blockchain data. Its capacity will be either 1 or 2 TB. In the example below, the system partition is /dev/sdb2 and the large disk is /dev/sda.

{{% image "/img/ronin-04.png" /%}}

Format the large disk. Replace the value of /dev/sda with your own. Don't forget the "1" at the end of the third command.

```bash
sudo wipefs -a --force /dev/sda
sudo sgdisk -Zo -n 1 -t 1:8300 /dev/sda
sudo mkfs.ext4 -q -F -L "main" /dev/sda1
lsblk
```

Now I have a large partition /dev/sda1, the only one on this disk. Write down the name of your partition to host the blockchain data.

{{% image "/img/ronin-05.png" /%}}

Mount the partition. Replace /dev/sda1 with your value.

```bash
sudo tee "/etc/systemd/system/mnt-usb.mount" <<EOF
[Unit]
Description=Mount primary storage /dev/sda1

[Mount]
What=/dev/disk/by-uuid/$(lsblk -no UUID /dev/sda1)
Where=/mnt/usb
Type=$(blkid -o value -s TYPE /dev/sda1)
Options=defaults

[Install]
WantedBy=multi-user.target
EOF
```

```bash
sudo systemctl daemon-reload
sudo systemctl start mnt-usb.mount
sudo systemctl enable mnt-usb.mount
```

{{% /hint %}}

Plug in the external HDD/SSD that you plan to use for backup of the blockchain data. You can skip this step. Connect the drive and run the following command again:

```bash
lsblk
```

{{% image "/img/ronin-07.png" /%}}

You will see the newly connected disk in the table. Write down the name of the disk for backups by adding "*/dev/*" at the beginning and "*1*" at the end, in my case it is */dev/sdb1*.

## Pre-installation

Let's add user *ronindojo* to our system, set a password and log in as the new user.

```bash
sudo useradd -s /bin/bash -d /home/ronindojo -m -G sudo ronindojo
sudo passwd ronindojo
sudo su
echo "ronindojo    ALL=(ALL) ALL" >> /etc/sudoers
su - ronindojo
```

Install the required programs.

```bash
sudo apt update && sudo apt upgrade
sudo apt install bash-completion nano tor obfs4proxy net-tools apt-transport-https gnupg-agent unzip git openjdk-11-jdk fail2ban net-tools htop unzip ufw rsync jq python3-pip gcc dialog bpytop less plymouth-label --no-install-recommends
pip3 install pipenv
```

Docker installation.

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin --no-install-recommends
sudo curl -L https://github.com/docker/compose/releases/download/v2.21.0/docker-compose-linux-x86_64 -o /usr/bin/docker-compose
sudo chmod +x /usr/bin/docker-compose
sudo systemctl stop docker
sudo systemctl stop docker.socket
sudo systemctl stop containerd
sudo mkdir -p /mnt/usb
sudo mv /var/lib/docker/ /mnt/usb/
```

```bash
sudo tee "/etc/docker/daemon.json" << EOF
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  },
  "data-root": "/mnt/usb/docker"
}
EOF
```

```bash
sudo systemctl start docker
sudo usermod -a -G docker ronindojo
```

NodeJS installation.

```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash
sudo apt install nodejs
exit
```

## Samourai Dojo installation

```bash
su - ronindojo
git clone https://code.samourai.io/ronindojo/samourai-dojo -b master ~/dojo
cd ~/dojo/docker/my-dojo/
```

Generate random password.

```bash
tr -dc 'a-zA-Z0-9' </dev/urandom | head -c'32'
```

```bash
nano conf/docker-bitcoind.conf.tpl
```

Insert generated password after *BITCOIND_RPC_PASSWORD=*

You can save the file and exit the editor by pressing Ctrl+X, y, Enter.

```bash
nano conf/docker-indexer.conf.tpl
```

Here you can replace *electrs* (default) with *fulcrum* or *addrindexrs* in *INDEXER_TYPE=*. Fulcrum takes much longer to synchronize than Electrs and is recommended for "heavy" wallets with a large number of transactions. Addrindexrs only supports Samourai Wallet, while the other two can be used to connect wallets such as Electrum and Sparrow Wallet.

```bash
tr -dc 'a-zA-Z0-9' </dev/urandom | head -c'32'
tr -dc 'a-zA-Z0-9' </dev/urandom | head -c'32'
nano conf/docker-mempool.conf.tpl
```

Mempool browser installation can be enabled by the *MEMPOOL_INSTALL=on* option. Passwords must be inserted after *MEMPOOL_MYSQL_PASS=* and *MEMPOOL_MYSQL_ROOT_PASSWORD=*.

```bash
tr -dc 'a-zA-Z0-9' </dev/urandom | head -c'32'
tr -dc 'a-zA-Z0-9' </dev/urandom | head -c'32'
nano conf/docker-mysql.conf.tpl
```

Add the generated passwords after *MYSQL_ROOT_PASSWORD=* and *MYSQL_PASSWORD=*.

```bash
tr -dc 'a-zA-Z0-9' </dev/urandom | head -c'32'
tr -dc 'a-zA-Z0-9' </dev/urandom | head -c'32'
tr -dc 'a-zA-Z0-9' </dev/urandom | head -c'32'
nano conf/docker-node.conf.tpl
```

Insert passwords after *NODE_API_KEY=*, *NODE_ADMIN_KEY=* and *NODE_JWT_SECRET=*. Optionally add your BIP47 payment code (PM8T...) after *NODE_PAYMENT_CODE=*. By enabling this feature, you will be able to authenticate to the Dojo Maintenance Tool using the "Authenticate using PayNym" option from the Tools menu in Samourai Wallet by simply scanning the QR code on the login screen.

```bash
nano conf/docker-tor.conf.tpl
```

If you have trouble connecting to Tor, set *TOR_USE_BRIDGES=on* and add [bridges](https://bridges.torproject.org) as follows: *TOR_BRIDGE_1="obfs4 ... iat-mode=0"*.

{{% hint info %}}
**For Testnet only**

```bash
nano conf/docker-common.conf.tpl
```
Set *COMMON_BTC_NETWORK=testnet*.

```bash
nano nginx/testnet.conf
```

Add the following lines to the section *# Site Configuration*:

```
    # Proxy WebSocket connections first
    location /v2/inv {
        proxy_pass http://websocket;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
    }
    # PushTX server is separate, so proxy first
    location /v2/pushtx/ {
        proxy_pass http://node:8081/;
    }
    # Tracker server is separate, so proxy first
    location /v2/tracker/ {
        proxy_pass http://node:8082/;
    }
    # Proxy all other v2 requests to the accounts server
    location /v2/ {
        proxy_pass http://node:8080/;
    }
```
{{% /hint %}}

```bash
./dojo.sh install
```

Wait for the Dojo installation to complete. It takes 10 to 30 minutes, depending on the performance of your computer and network connection.

{{% image "/img/ronin-06.png" /%}}

If errors occur, usually related to network connectivity, you can stop the installation script with a few presses of the Ctrl+C and repeat the last command. If the installation still fails, you will have to configure a VPN on your router. Unfortunately, this procedure is beyond the scope of this guide.

## RoninOS

RoninOS is essentially a script that modifies the base operating system for RoninDojo to function properly. Since it is written for a specific OS and a specific hardware configuration, I made all the necessary changes manually.

```bash
cd
git clone https://code.samourai.io/ronindojo/RoninOS
```

### Installing and configuring the Tor service

```bash
sudo useradd -c "tor" tor
sudo cp ~/RoninOS/overlays/RoninOS/example.tor.service /usr/lib/systemd/system/tor.service
sudo systemctl stop tor@default.service
sudo rm -rf /usr/lib/systemd/system/tor@*
sudo mkdir /mnt/usb/tor/
sudo chown -R tor:tor /mnt/usb/tor/
```

```bash
sudo nano /etc/tor/torrc
```

Paste the following lines at the end of the file and add bridges. Note that unlike the Tor settings in Samourai Dojo, the bridges here should not be enclosed in quotes:

```
ClientTransportPlugin obfs4 exec /usr/bin/obfs4proxy
UseBridges 1
Bridge obfs4 ... iat-mode=0
Bridge obfs4 ... iat-mode=0
Bridge obfs4 ... iat-mode=0
#Hidden Service Ronin UI
User tor
DataDirectory /mnt/usb/tor
HiddenServiceDir /mnt/usb/tor/hidden_service_ronin_backend/
HiddenServiceVersion 3
HiddenServicePort 80 127.0.0.1:8470
```

```bash
sudo systemctl daemon-reload
sudo systemctl restart tor
sudo journalctl -f -u tor
```

Wait for the "Bootstrapped 100% (done)" message to appear in the Tor log, and close it with Ctrl+C.

### Customizing plymouth

After that, the RoninDojo logo will be displayed when the system boots, nothing special but a nice touch.

{{% image "/img/ronin-09.png" /%}}

```bash
sudo mkdir -p /etc/plymouth
sudo cp ~/RoninOS/overlays/RoninOS/etc/plymouth/plymouthd.conf /etc/plymouth/
sudo cp -r ~/RoninOS/overlays/RoninOS/usr/share/plymouth/themes/ronindojo/ /usr/share/plymouth/themes/
```

```bash
sudo nano /etc/default/grub
```

Change the *GRUB_CMDLINE_LINUX_DEFAULT* line as follows:

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
```

```bash
sudo update-alternatives --install /usr/share/plymouth/themes/default.plymouth default.plymouth /usr/share/plymouth/themes/ronindojo 120
sudo update-grub
sudo update-initramfs -u
```

### Configuring the firewall

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

In the following commands, use your subnet address that we defined at the end of the [OS installation](/en/practice-privacy/ronindojo/#os-installation).

```bash
sudo ufw allow from 10.0.2.0/24 to any port "80"
sudo ufw allow from 10.0.2.0/24 to any port "22"
sudo ufw allow from 10.0.2.0/24 to any port "50002"
sudo ufw enable
```

### Disk configuration

```bash
mkdir -p ~/.config/RoninDojo/data/
touch ~/.config/RoninDojo/data/system-install
```

In the following command, use your system primary partition name or the name of the blockchain data partition if you are using a two SSDs configuration, which you wrote down when [defining the configuration](/en/practice-privacy/ronindojo/#defining-the-configuration). As a reminder, I have one disk and a primary partition */dev/sda2*.

```bash
echo "blockdata_storage_partition=/dev/sda2" > ~/.config/RoninDojo/data/blockdata_storage_partition
```

In the following command, use your partition name for the blockchain backup if you are going to use this feature. Mine is */dev/sdb1*.

```bash
echo "backup_storage_partition=/dev/sdb1" > ~/.config/RoninDojo/data/backup_storage_partition
```

## Ronin UI and Ronin CLI

Ronin UI is a great web interface for monitoring and administering your node with a built-in Whirlpool GUI. Using it, you do not need to pair with a Whirlpool GUI application on another computer.

Ronin CLI is a console interface accessible via SSH or directly on the server, with advanced features for managing your node, security settings, and additional utilities.

```bash
mkdir ~/Ronin-UI
sudo mkdir -p /usr/share/nginx/logs/
sudo bash -c "cat /mnt/usb/tor/hidden_service_ronin_backend/hostname > /home/ronindojo/.config/RoninDojo/data/ronin-ui-tor-hostname"
git clone https://code.samourai.io/ronindojo/RoninDojo -b master
sudo ln -sf /home/ronindojo/RoninDojo/ronin /usr/local/bin/ronin
cp ~/RoninDojo/user.conf.example ~/.config/RoninDojo/user.conf
```

```bash
nano ~/.bashrc
```

Add two lines to the end of the file:

```
/home/ronindojo/RoninDojo/Scripts/.logo
ronin
```

```bash
source ~/.bashrc
```

Congratulations, you're now in the Ronin CLI.

{{% image "/img/ronin-08.png" /%}}

Go to the menu:

```
Ronin UI > Re-install
```

When the installation is complete, press any key and exit Ronin UI:

```
Go Back > Exit RoninDojo
```

To enter the Ronin CLI again, you can use the command:

```bash
ronin
```

Additionally, you will be automatically redirected to the Ronin CLI when logging in as *ronindojo* user.

Ronin UI is now accessible from your local network where the RoninDojo machine is located, via a web browser at http://ronindojo.local or by IP address of the server, in my case http://10.0.2.15.

The login password is your *ronindojo* user password.

{{% image "/img/ronin-10.jpg" /%}}

## Ronin CLI patches

The installation is complete, but requires some fixing of the Ronin CLI scripts to work correctly.

In the following command, use the name of your network interface that we [defined](/en/practice-privacy/ronindojo/#defining-the-configuration) earlier. Mine is *enp0s3*.

```bash
sed -i 's/eth0/enp0s3/g' ~/RoninDojo/Scripts/Menu/menu-system-monitoring.sh
```

```bash
sed -i 's/findmnt \"\${install_dir}\"/findmnt -n -o SOURCE --target \"\${install_dir}\"/g' ~/RoninDojo/Scripts/functions.sh
sed -i 's/findmnt \"\${install_dir}\"/findmnt -n -o SOURCE --target \"\${install_dir}\"/g' ~/RoninDojo/Scripts/Install/install-dojo.sh
```

{{% hint info %}}
**For Testnet only**

```bash
sed -i 's/_data/_data\/testnet3/g' ~/RoninDojo/Scripts/Install/install-send-block-data.sh
sed -i 's/_data/_data\/testnet3/g' ~/RoninDojo/Scripts/Install/install-receive-block-data.sh
sed -i 's/ludwig.py --rpc/ludwig.py --testnet --rpc/g' ~/RoninDojo/Scripts/Menu/menu-boltzmann.sh
```
{{% /hint %}}

##  RoninDojo tools

### Blockchain data backup

{{% hint btc %}}
I recommend testing this before fully downloading the blockchain, as misconfiguring the disks can lead to data loss and you will have to start from scratch. Perform the test when the first Bitcoin Core synchronization percentages appear in the web interface.
{{% /hint %}}

Plug in an external disk for backup. In the Ronin CLI, go to the menu:

```
System > Disk Storage > Format & Mount New Backup Drive
```

After formatting the disk, move from the main menu:

```
Dojo > Next Page > Send Block Data to Backup
```

After copying, restore the backup from the menu:

```
Dojo > Next Page > Receive Block Data from Backup
```

### Installing WST and Boltzmann Calculator

To install and use these utilities, simply select the corresponding item from the menu:

```
Samourai Toolkit
```

{{% image "/img/ronin-12.png" /%}}

{{% hint info %}}
The WST utility is not available for Testnet.
{{% /hint %}}

### Whirlpool

Wait for full synchronization of Bitcoin Core, Dojo and Indexer.

{{% image "/img/ronin-13.jpg" /%}}

Go to the "Pairing" menu and pair Samourai Wallet with Samourai Dojo. You can only connect to Dojo when the wallet is freshly installed.

{{% image "/img/ronin-14.jpg" /%}}

Click "Pair now" under "Samourai Dojo", scan the Dojo pairing QR code in your Samourai Wallet.

Go to the wallet Settings menu and:

```
Transactions > Pair to Whirlpool GUI
```

Transfer the resulting Whirlpool GUI pairing code to your computer.

Under Whirlpool CLI, click "Initialize" and use your pairing code.

After successful pairing, you need to click the "Log in" button and enter the [passphrase](/en/passphrase) you used when creating the wallet.

{{% image "/img/ronin-15.jpg" /%}}

Finally, you can enter the Whirlpool interface and remix UTXO 24/7 while your node is running.

{{% image "/img/ronin-16.jpg" /%}}

### Blockchain explorers

To access the BTC RPC Explorer, go to "Dashboard" and click "Manage" under "Dojo".

{{% image "/img/ronin-17.jpg" /%}}

Here eou can find links to access the explorer and the Dojo Maintenance Tool (DMT) through a Tor browser.

A link to access the Mempool explorer is also available from the "Manage" menu in the corresponding section of the Dashboard. There you can also install or uninstall Mempool.

### Dojo Maintenance Tool (DMT)

DMT is a simplified node monitoring dashboard with basic features for tracking your XPUBs, addresses and transactions – similar to the "Maintenance" menu in Ronin UI. In the face of poor Tor connection quality, it can be a useful tool. If you added your PayNym in the `docker-node.conf.tpl` file when installing Samourai Dojo, a QR code will be available to you. Simply select "Authenticate using PayNym" from the "Tools" menu in Samourai Wallet and scan it to access DMT.

{{% hint info %}}
If you didn't enable PayNym authentication (Auth47) during installation, add the BIP47 payment code after *NODE_PAYMENT_CODE=* to the file:

```bash
nano ~/dojo/docker/my-dojo/conf/docker-node.conf
```

After that, restart Dojo from the "Manage" menu in the corresponding section of the Ronin UI using the "Restart" button.

{{% /hint %}}

{{% image "/img/ronin-18.jpg" /%}}

{{% image "/img/ronin-19.jpg" /%}}

### Blockchain Indexers

As mentioned above, you can choose between Electrs, Fulcrum or Addrindexrs. You can install another indexer from the "Dashboard" via the "Manage" menu under "Indexer".

{{% image "/img/ronin-20.jpg" /%}}

{{% hint info %}}
Note that if you select a different indexer, the data of the previous one is not saved. If you decide to switch back, the indexer synchronization will start from scratch.
{{% /hint %}}

The link to connect Sparrow or Electrum wallets to your indexer via Tor is in the "Pair" menu under "Electrum server".

### Further tools

**Push TX** in Ronin UI will allow you to broadcast a signed transaction to the blockchain using your node.

**Credentials** in the Ronin CLI will display links to all the services on your node that are accessible via Tor.

**Security settings** can be found in the Ronin CLI menu:

```
System > Next Page
```

{{% image "/img/ronin-21.png" /%}}

Here you can manage firewall settings, SSH settings, change the password of the *ronindojo* user as well as *root*.

## RoninDojo update

Ronin UI is updated in one click. If update is available, you will see a notification about the new version in the web interface.

### Ronin CLI update

The standard RoninDojo update script can break the system, so update it manually.

```bash
cd
rm -rf ~/RoninDojo/
git clone https://code.samourai.io/ronindojo/RoninDojo -b master
```

Apply patches from [this section](/en/practice-privacy/ronindojo/#ronin-cli-patches).

### Samourai Dojo update

```bash
cd
wget https://code.samourai.io/ronindojo/samourai-dojo/-/archive/master/samourai-dojo-master.zip
unzip samourai-dojo-master.zip -d .
cp -a samourai-dojo-master/. ~/dojo/
cd ~/dojo/docker/my-dojo/
```

{{% hint info %}}
Making the necessary changes for Testnet from [this section](/en/practice-privacy/ronindojo/#samourai-dojo-installation).
{{% /hint %}}

```bash
./dojo.sh upgrade
```

## Support the author

You can support the author by sending some sats via the Lightning Network:

{{% image "/img/btclinux-ln-qr.jpg" %}}
`lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhk7mnv093kcmm4v3unxwg6jxyqf`
{{% /image %}}