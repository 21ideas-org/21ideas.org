---
title: "Multisig Part II: Single Keys are the Foundation of Multisignature"
h1: "Multisig Series Part II: Single Keys are the Foundation of Multisignature"
cover: /img/msig-683.png
description: ""
url: multisig-2
aliases: ['/theory-security-multisig-2']
date: 2020-04-07
bookFlatSection: false
weight: 11
---

This is the second article in our series on multisignature. Read part one here: [Why Multisig?](/en/multisig-1)

{{< hint btc >}}
This article was published in [Unchained blog](https://unchained.com/blog/single-signature-wallet).

[Contribute](/contribute/).
{{< /hint >}}

Before diving into technical details about how multisignature addresses and wallets function, it’s important to have a baseline understanding of how single signature wallets, the most common form of bitcoin wallet, function behind the scenes. Most of the general technical details that apply to single signature wallets apply to multisignature wallets, but single signature wallets tend to combine multiple steps and functions, whereas multisignature generally separates steps. First, let’s unpack the word “wallet” in the context of bitcoin.

# What is a Wallet?

The word “wallet” has imprecise and inconsistent usage in the world of bitcoin. When people generally think of a bitcoin wallet, a common assumption is that the bitcoin lives on the software or hardware that they control. In reality, wallets store and coordinate keys that can then be used to transact bitcoin that live in addresses tracked by the blockchain.

The functions of a typical wallet are broken out into pieces and displayed below.

{{% image "/img/msig-685-en.png" /%}}

“Wallet” is used to describe software or hardware which does some or all of the following:

**Consensus** — Sync data with the rest of the network about [blocks](https://en.bitcoin.it/wiki/Block) already mined as well as the current [UTXO](https://bitcoin.org/en/glossary/unspent-transaction-output) set and [mempool](https://99bitcoins.com/bitcoin/mempool/).

**Coordinator** — Calculates and displays balances, authors transactions, produces signature requests.

**Keystore** — Holds [private key](https://en.bitcoin.it/wiki/Private_key) data, exports public keys, signs transactions.

Some wallets do all of these. The [Bitcoin Core](https://bitcoin.org/en/bitcoin-core/) software itself, as the first wallet to ever exist, performs all three activities. Other wallets, such as [Electrum](https://electrum.org/#home), maintain their own consensus through a network of Electrum servers, coordinate transactions and balances, and can even store software keys.

A mobile wallet, such as [Samourai](https://samouraiwallet.com/), is both a coordinator and a keystore. The Samourai app holds private keys on your mobile device and coordinates your transactions and balance.  Consensus is outsourced to the Bitcoin Core software, either by connecting to your own full node or to one of Samourai’s.

Some companies offer products that create a complete wallet when combined. The [Trezor hardware wallet](https://trezor.io/), for example, is a dedicated hardware keystore. In order to work, the hardware wallet must interact with the Trezor website, which is the coordinator. SatoshiLabs’ own servers provide the consensus through running the Bitcoin Core software.

# Single Signature

All of the above examples use single signature addresses as a default. Single signature means that only a single key is required to create a signature and broadcast a valid bitcoin transaction. As a physical mental model, imagine that a signature is the discrete action of a key used to start a car, and broadcasting a transaction can be thought of as driving off in the car. 

For a bitcoin example, a single Trezor (the keystore) connected to [wallet.trezor.io](https://wallet.trezor.io/) (the coordinator) can unilaterally move funds located at an address that is controlled by one of the private keys stored on the Trezor. Single signature wallets are most useful for making frequent, daily transactions, leveraging privacy technology such as [CoinJoins](https://en.bitcoin.it/wiki/CoinJoin), or for moving funds into the lightning network.

When most people think of a bitcoin wallet, their mind goes to a single signature hardware device (or keystore), since it is the most direct translation from the legacy financial system’s bank account structure, or mentally maps closer to a physical wallet containing bills. However, by breaking out the concept of a wallet into the three separate functions that are happening behind the scenes (consensus, coordination, keystore), bitcoiners can better understand what’s actually happening when they create bitcoin transactions.

# Do you know where your Sats are?

{{% image "/img/msig-686-en.png" /%}}

At no point in time are bitcoin “stored” on a hardware device. A hardware device merely holds a collection of keys that can authorize spending bitcoin, which are tracked by unspent transaction outputs (UTXOs) located in addresses tracked by the blockchain. The blockchain lives on thousands of computers distributed around the world. Your bitcoin “live” on the blockchain; your hardware device stores keys (not bitcoin) but those keys are required to transfer bitcoin. And, a wallet is a user interface for interacting with the addresses that are under the control of private keys coordinated by the software or hardware.

In a single signature wallet, the keys are extremely important to protect and keep secret because addresses are generated under common assumptions, and your addresses can be discovered relatively easily if your private key is compromised. In this way, individual keys (and backups) become single points of failure in single signature wallets. 

Modern multisignature addresses guard against this by eliminating any single key as a single point of failure, at least in m-of-n schemes where n is greater than one. Separately, multisig divorces single keys from addresses. The address can only be discovered if all of the individual public keys that make up the address are known, since the public keys are cryptographically linked behind an algorithm. As a mental model, think of modern multisig as separating the concepts of a map to the location of a treasure chest from the keys that open the treasure chest. If only individual keys are found, an adversary has no way to know where the treasure chest is located. If the treasure map is discovered, but the attacker does not have a sufficient number of keys to open the treasure chest, they’re also out of luck.

# The Transition to Multisig

We hope that this article has shed some light on what is happening behind the scenes with your favorite bitcoin wallets. This is a critical building block to then be able to think about the technical side of multisig. Up next, we will be sharing more details about how to visualise multisig and will be breaking down the technical details of multisignature addresses and wallets.
