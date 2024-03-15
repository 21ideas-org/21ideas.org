---
title: "What is Lightning Network?"
h1: "What is Lightning Network?"
cover: /img/174.png
tags: ["bitcoin", "lightning", "scalability", "lightning network", "second layer", "payments"]
description: "Why do you need a Lightning Network, how does it work and how do you use it?"
url: what-is-lightning-network
date: 2022-09-12
bookToc: true
bookFlatSection: false
weight: 1
---

Why should you care about Lightning Network, how does it work and how to use it? We'll answer these and many other questions in this guide.

{{< hint btc >}}
The article written by [Tony⚡️](https://snort.social/p/npub10awzknjg5r5lajnr53438ndcyjylgqsrnrtq5grs495v42qc6awsj45ys7).

[Contribute](/contribute/).
{{< /hint >}}

Lightning Network is a decentralized system for instant micro payments. Bitcoin, the world's most widely used and valued cryptocurrency, allows anyone to transfer value without the need for a trusted third party. Bitcoin supports an advanced scripting system that allows users to program instructions for managing their funds. However, Bitcoin's design has a number of drawbacks. It can take an hour, and often more, from the time a transaction is made on the Bitcoin blockchain to the moment that transaction gets finalized.

Certainly, micro payments don't seem viable at the moment.

The Lightning Network solves this problem. It is one of the first implementations of a multi-party smart contract (programmable money) using the embedded script of the Bitcoin protocol. The Lightning Network is a leading technological development in the context of multi-user financial settlement based on the Bitcoin network. Let us draw attention to some of the advantages that the Lightning Network has:

### Instant payments

Bitcoin combines transactions into blocks appearing at approximately ten minute intervals. Payments on the network are considered irreversible after six confirmations (six blocks appearing on top of the block containing your transaction) or about an hour. In the Lightning network, payments do not require confirmation and are instant. Lightning can be used at retail terminals, between users' devices, or in any other situation where instant payments are needed.

### Micro payments

New markets may become available thanks to the micro payments. Lightning allows you to send as little as 0.00000001 bitcoin without forcing you to use custodial services. Minimal transaction fees on the Bitcoin blockchain are orders of magnitude higher today, and flat transaction fees make micro payments impractical. Lightning enables Bitcoin-denominated micropayments using de facto Bitcoin blockchain.

### Scalability

If the Bitcoin network is going to meet the demand of users joining, it must process many more transactions. The upcoming growth in the number of devices connected to Internet requires a device-to-device payment platform and automated micro payments. Lightning Network transactions take place outside of the Bitcoin blockchain and also do not require delegating trust and ownership, allowing users to make a nearly unlimited number of instant transactions.

## How it works

Funds are placed in a two-party [multisig](/en/multisig) Bitcoin address, also called a "channel". This channel is stored as an entry in Bitcoin's public ledger. In order to spend funds from the channel, both parties must agree on an up-to-date last balance, i.e. how much of the total channel is owned by each participant. The current balance is stored as the last transaction signed by both parties spending funds from their corresponding channel addresses. The transaction signed by both parties that closes the channel is not broadcast to the Bitcoin blockchain, but is stored by each participant. In this way, either participant can withdraw their funds from the channel if something goes wrong. To make a payment, both parties sign a new transaction, which can initiate the closure of the channel. At the same time, all old transactions become void.

The network does not require the cooperation of your counterparty to close a Lightning channel. Both parties have the ability to unilaterally close the channel. Since all participants have multiple channels with many network users, users can also send funds to participants with whom they have not personally opened a channel.

Learn more about how the Lightning Network works under the hood in this video:

{{< youtube yKdK-7AtAMQ />}}

More articles about the Lightning Network and its features can be found at [this section](/en/lightning).

## Who needs it?

The Lightning Network currently [has](https://1ml.com/statistics) nearly 20,000 nodes and over 70,000 channels; it also has slightly less than 5,000 BTC (about $150 million at the time of this writing) blocked. This protocol is already quite widespread and continues to evolve. As the user experience of interacting with Bitcoin improves, more users will come to Lightning.

{{% image "/img/175.png" /%}}

Being an early user of any *useful* network is never redundant - you get the opportunity to get more value (in one form or another) with less effort than those who join later. When talking about finance-related networks, the value becomes even more significant. Today, there are a number of ways to generate profit (albeit small at the moment, but with the popularity of Bitcoin, each sat is becoming more and more valuable), and we'll talk about some of them next.

## Earnings on the Lightning Network

There are many ways to earn the desired sats: from receiving donations for producing useful content through [Alby](/alby-i-nostr) and the [Lightning Tip Bot](/en/lntips), which we will talk about later, to sites like [https://microlancer.io/](https://microlancer.io/), where you can do simple tasks in exchange for sats, and writing articles that open for viewing after paying with sats on [Y’alls](https://yalls.org/). In addition, depending on your country of residence, you can use services such as [Lolli](https://www.lolli.com/), which refunds a portion of the cost of purchases in bitcoins.

If you take a little more time and some resources, you can open up channels and rent them out to other people by starting your own Lightning Node. You can explore [https://github.com/lightninglabs/pool](https://github.com/lightninglabs/pool), for more information on this topic.

Nevertheless, the easiest way to earn sats is to provide services in return for payments in the lightning Network.

## How to start?

The first step in interacting with any "crypto" solution is always the choice of wallet. Lightning is no exception, and first of all we should decide which GUI to choose for interaction with the network.

For beginners, I would recommend to use so-called custodial wallets - wallets that store your funds for you. I know that many people will remember the good old saying "Not your keys — not your bitcoins", and I completely agree with you, but Lightning, being a layer 2 protocol, i.e. a add-on over Bitcoin protocol, is more complicated in terms of setup. Therefore, it is by no means shameful to start with a custodial solution. You can always change your approach once you are confident in your skills and run your own node.

Examples of such wallets are [Wallet of Satoshi](https://www.walletofsatoshi.com/), [Alby](/alby-i-nostr) and many others.

{{< hint btc >}}
Don't forget that the above wallets and their developers store your sats for you and therefore have full control over your funds. Although using such wallets is a good first step when interacting with Lightning, I strongly recommend that you look into the topic in more detail and switch to a solution that gives you the ability to control your sats.
{{< /hint >}}

With a little understanding of the mechanics of how the network works, you can move on to more advanced solutions to store and transfer value in the Lightning Network. One simple non-custodial solution is the [Phoenix Wallet](/en/phoenix), a guide to which is available on this site. Alternatively, you can also use the Valet, Breez or Blixt wallet. The best and most flexible solution - although requiring more resources and knowledge - is to run your own Lightning node and manage your channels yourself.

With a little understanding of the mechanics of how the network works, you can move on to more advanced solutions to store and transfer value in the Lightning Network. One simple non-custodial solution is the [Phoenix Wallet](/en/phoenix), a guide to which is available on this site. Alternatively, you can also use the Valet, Breez or Blixt wallet. The best and most flexible solution - although requiring more resources and knowledge - is to run your own Lightning node and manage channels yourself.

Once you have created a wallet you will need to send some bitcoins to it, and then within the app you will be able to withdraw the bitcoins received "to the second layer". Different apps interact with the user differently, but generally all are intuitive and should not cause any difficulties. In the end, you'll be able to use your Lightning bitcoins the same way you would with regular bitcoins - you can create and pay invoices and interact with anyone who accepts payments via Lightning.

## Value transfer in the Lightning Network

Transactions in the Lightning Network go through special channels and are carried out by generating and paying invoices. In order to pay an invoice, it is necessary to scan the QR code offered by the counterparty or paste the received link into your wallet.

{{% image "/img/176.png" %}}
_Interface of [LN.tips](https://t.me/LightningTipBot) Telegram bot_
{{% /image %}}

As the protocol evolves, more and more convenient solutions are emerging. Of course, generating a new invoice every time you want to get paid is not the most convenient approach. Luckily, developers have come up with Lightning addresses, thanks to which you can use the same credentials to receive funds multiple times. You can learn more about Lightning-addresses from [this](/en/lightning-addresses) article.

## Value transfer in the Lightning Network without leaving Telegram

With the protocol's evolution, many third-party services have appeared to facilitate interaction with the network. One of such useful solutions is Telegram bot [@LightningTipBot](https://t.me/LightningTipBot). It allows you to send sats to other Telegram users and even thank/support with sats the comments of your conversation partners in chats where this bot is installed. The description of the bot's features and all possible commands are available with the command `/help`. Moreover, every Telegram user automatically receives LNURL - a specially generated address in the Lightning Network. You can learn more about the bot from [this](/en/lntips) guide.

{{% image "/img/177.png" %}}
*[Guide to LN.tips Telegram wallet-bot](/en/lntips)*
{{% /image %}}

## That's all?

The Bitcoin protocol and Lightning network, as a layer 2 solution, is rapidly evolving. We are constantly seeing new solutions to optimize the protocol, improve user experience and other innovations. The number of services accepting Bitcoin is rapidly growing every day.

Learning Bitcoin and related protocols now is like diving into the ocean of internet solutions in the early 2000s. It's not easy to be a pioneer, but the rewards for your curiosity and hard work usually don't last long!

