---
title: "Phoenix: The Non-Custodial Lightning Wallet"
h1: "Phoenix Wallet: Take Back Control of Your Sats in the Lightning Network"
cover: /img/134.jpg
tags: ["bitcoin", "hodl", "private keys", "security", "mobile wallet", "lightning"]
description: "How to use the Lightning Network without trusting anyone?"
url: phoenix
date: 2023-03-02
bookFlatSection: false
bookToc: true
weight: 1
---

How to use the Lightning Network without trusting anyone? Take Back Control of Your Sats in the Lightning Network.

{{< hint btc >}}
The guide written by [Tony⚡️](https://snort.social/p/npub10awzknjg5r5lajnr53438ndcyjylgqsrnrtq5grs495v42qc6awsj45ys7).

[Contribute](/contribute/).
{{< /hint >}}

## Intro

Now I would like to provide you a guide on [Phoenix](https://phoenix.acinq.co/) — the non-custodial Lightning wallet. This guide will be useful for those who already familiar with the Lightning Network and have evaluated the interaction with it in practice. Let's say you've already been using a custodial wallet like [Wallet Of Satoshi](https://www.walletofsatoshi.com/) and you want to gain more control over your funds, hold your sats independently in Lightning Network, and **minimize** the level of trust to a third party. I say 'minimize' rather than 'dispose' for a reason, but I'll explain this at the end of the guide.

Phoenix Wallet can serve as a great _intermediate solution_ between using a custodial wallet and running your own Lightning node.

{{% image "/img/135-en.png" /%}}

A good example was the recent cases of — [shutting down and making it almost impossible to withdraw funds from the popular Telegram LNtxBot](https://stacker.news/items/122992) and [Blue Wallet issues with custodial Lightning implementation](https://twitter.com/hi__im__dave/status/1619680373314813953).

---

### Terminology

- **On-chain** – transactions in the Bitcoin mainnet recorded to the blockchain.
- **Off-chain** – transactions outside the mainnet, such as in the Lightning Network.
- **Custodial storage** – holding / using the "crypto" (Bitcoin, Lightning Network sats, Ether or any other shitcoin) relying on a third party, a so-called custodian. The custodian holds your funds and receives / sends them at your request.
- **Non-custodial storage** – self custody and control of your own funds.
- **LIghtning Network or LN** – Layer 2 network implemented "on top" of the main Bitcoin network.
- **Invoice** – Lightning Network mechanism differs from the one used in the Bitcoin network. Instead of addresses, users passing invoices to receive funds.
- **Liquidity** – the volume of funds you can send (outbound) or receive (inbound).

---

## Why Phoenix?

Phoenix Wallet allows you to use the Lightning Network in a non-custodial way. Your wallet acts as a Lightning node and you control the number and capacity of your channels. When you create a new wallet, you will get a mnemonic backup phrase by which you can recover your funds in case of some critical error. You just need to force close your channels and the funds will go to your on-chain wallet, which you can recover through [Electrum Wallet](/en/electrum), for example.

## Lightning maximalism

Phoenix will perhaps be less common to users accustomed to "two-in-one" wallets. [Blue Wallet offers](/blue) (or offered😜) several types of wallets in one app, and wallets like Wallet Of Satoshi and [Muun](https://muun.com/) "combine" Lightning and on-chain funds into one balance, where users doesn't even notice the difference between their "accounts". Phoenix, on the other hand, is a purely Lightning wallet. 

{{% image "/img/30.jpeg" /%}}

Yes, it has the ability to receive on-chain payments, but they will be instantly swaped to LN sats. You can also do **Swap-out** and send LN sats to the on-chain address. Swaps take place "under the hood". The technical details of the process are outside the scope of this guide, just note that Phoenix should not be thought of as a classic on-chain wallet. In a sense, Phoenix can be called a _Lightning Maximalist Wallet_ ⚡️.

## Practice

Phoenix has a simple, user-friendly and intuitive interface. It is [available](https://phoenix.acinq.co/download) for all mobile platforms – iOS and Android. The true [cypherpunks](/en/cypherpunks-manifesto) – [De-Googled Android](/en/grapheneos) fans – or, for example, Huawei users, can download the [APK file](https://github.com/ACINQ/phoenix/releases) and install the app bypassing Google Play.

### Receiving sats

The first thing to do after installation is to fund your wallet with sats. This can be done either with on-chain bitcoins or via the Lightning Network. After a few welcome screens, we are greeted by a screen offering to pay an "zero-value" Lightning invoice (an invoice where you can specify the amount to be paid at your choice). Please note that the minimum deposit amount is 10,000 sat, which is due to the need to open a channel through which you will later send and receive sats. Opening a channel is done with on-chain transaction, which requires pay fee to the miners.

{{% image "/img/136-en.png" %}}
_Funding a wallet via Lightning / channel opening_
{{% /image %}}

You can also fund your wallet with on-chain transaction. To do this, click **Show a Bitcoin address** at the bottom of the screen.

{{% image "/img/137-en.png" %}}
_Funding a wallet on-chain / channel opening_
{{% /image %}}

Please note that in both cases, the first deposit will require paying on-chain fee to the miners + a one-time fee of 1000 sats to the wallet developers. This is due to the need to open the channel. Consider it as a fee necessary to escape from custodial storage of your sats.

### User Interface

Main functions of the wallet:

{{% image "/img/138-en.png" %}}
_Home screen_
{{% /image %}}

1. Settings
2. Transaction history
3. Balance (hidden/USD/sat)
4. Network state
5. Links (feedback)
6. Receive
7. Send

The settings are quite simple. I just want to point out 3 items - the tab displaying mnemonic recovery phrase (1), the tab to force close all channels and withdraw funds on-chain (2), the tab displaying your channels and their liquidity (3).

{{% image "/img/139.png" %}}
_Settings screen_
{{% /image %}}

## Features

### Payment channels

Your payment channels are displayed here, showing your outbound (1) and inbound (2) liquidity. You can change (3) view in the second column to show the channel capacity instead of the inbound liquidity.

{{% image "/img/140.png" %}}
_Payment channels screen_
{{% /image %}}

### Functions and fees

From a user's perspective, Phoenix acts almost identically to a custodial Lightning wallet. The only difference is that using this wallet, it is important to keep an eye on the state of the channel so that you don't accidentally request more funds than you have available in inbound liquidity. This will result in second channel opening and will cost you an on-chain fee + 1000 sat (you will receive less than what was sent to you).

{{% image "/img/141.png" %}}
_Receiving sats in the Lightning Network + opening a new channel_
{{% /image %}}

**Regular Phoenix functions and related fees:**

- **Receiving LN payments** (free, unless you have to open a new channel)
- **Sending LN payments** (0.4% of the amount sent + 4 sat)

{{% image "/img/142.png" %}}
_Payment send confirmation screen_
{{% /image %}}

- **Swap-in** – receiving sats on-chain and swaping them to LN (fee to miners + 1000 sat to developers. The amount received must be at least 10,000 sat).
- **Swap-out** – sending LN sats (swap)  to on-chain address. The fee is variable, depending on the Bitcoin mempool size and the current set of UTXO on ACINQ side. Note that the wallet does not charge any fees for this swap, all profits go to the miners.

## Specifics and recovery tools

### Receiving payments

In fact, it is a bit more difficult to deal with receiving LN payments. For example, you may have a channel with an outbound liquidity of 5,000 sat and a capacity of 25,000 sat. However, this does not mean that you can receive 20,000 sat in this channel because its inbound liquidity is less than the total value.

Some channel funds are "locked" as required by the Lightning protocol for security reasons (mainly to pay on-chain fees in case of force close of the channel and to keep a channel reserve on the ACINQ side).

The locked amount varies depending on the on-chain fees and can be significant. Accordingly, I recommend opening at least one high capacity channel, so that you don't have to worry later that the inbound liquidity will not be sufficient to receive the payment.

With the introduction of splicing in the [latest](https://acinq.co/blog/phoenix-splicing-update) version of Phoenix, each user now has just one channel which capacity changes based on inbound liquidity. This is perhaps one of the most important differences between using a non-custodial mobile wallet and a full node.

### How to recover funds in case of channel force close?

First, do not uninstall the app (or reset its settings) until you have restored the funds.

Second, note that if your channels have been forcibly closed, you will face a delay for withdrawal (usually 720 blocks, or ≈ 5 days, but can be longer).

In case of an "apocalypse", all you need to restore your funds is the saved mnemonic backup phrase that the wallet originally generated for you. Phoenix uses the standard BIP39 seed and follows the standard BIP84 derivation path, you can use any compatible wallet to recover your funds. I recommend using Electrum (for desktop). You can learn more about Electrum wallet from [this guide](/en/electrum).

**Step-by-step guide:**

1. Download [Electrum](https://electrum.org/#home).
2. Create new **Standard wallet**.

{{% image "/img/143-en.png" /%}}

3. Choose **I already have a seed**.

{{% image "/img/144-en.png" /%}}

4. Type your 12 words, click on **Options** and check **BIP39 seed**.

{{% image "/img/145-en.png" /%}}

5. Choose **native segwit** **(p2wpkh)**.

{{% image "/img/146-en.png" /%}}

6. Wait for funds to become available.

### Do I have to trust Phoenix Wallet?

Phoenix minimizes the need for trust, but does not completely remove it. The following operations require trust:

- channel opening (until transaction confirmation);
- swaps (user pays, and then the ACINQ node performs the swap).

You can configure Phoenix to use your own Electrum server to get mempool data and monitor your channels. This will greatly reduce your reliance on third parties to keep your wallet secure. However, using your own server requires an SSL certificate.

### Phoenix privacy

The current Phoenix version offers no privacy advantages over custodial wallets. ACINQ is the wallet developer and also the node operator, with which channels are opened, knows the final destination and the amount of payments.

Future versions will be much more private, but these improvements are still under development. More information can be found [here](https://medium.com/@ACINQ/phoenix-wallet-part-4-trampoline-payments-fb1befd027c8) and [here](https://phoenix.acinq.co/privacy).

## Conclusion

As I said before, Phoenix is a good intermediate solution for "non-beginner" level users. The wallet has its own disadvantages:

- You need to trust ACINQ node operators to a certain extent.
- Possible high fees related to unexpected channel opening (requires user attention to inbound liquidity).
- Payments privacy is no greater than in custodial LN wallets, but the team is working to improve privacy.

Despite a number of downsides (I consider them quite acceptable for users moving away from custodial solutions) Phoenix remains a good choice among LN wallets – it has managed to create a product that clearly follows its stated philosophy: to provide a non-custodial LN wallet with a user-friendly and intuitive interface. 

Still have a questions? Please visit wallet [F.A.Q.](https://phoenix.acinq.co/faq).
