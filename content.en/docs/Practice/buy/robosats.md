---
title: "RoboSats: Private P2P Exchange"
h1: "RoboSats: A simple and private Lightning based P2P exchange"
cover: /img/robosats/robo-01-en.png
tags: ["bitcoin", "buy", "no-kyc", "privacy", "security"]
description: ""
url: robosats
date: 2023-05-22
bookFlatSection: false
bookToc: true
weight: 3
---

{{< hint btc >}}
This guide by [Bitcoin Q+A](https://twitter.com/BitcoinQ_A) was published on [bitcoiner.guide](https://bitcoiner.guide/robosats) website.

[Contribute](/contribute/).
{{< /hint >}}

# noKYC

The de-facto way to obtain Bitcoin today, especially as a newcomer, is to do so through a regulated Bitcoin exchange. You hop onto a website, provide an egregious amount of your personal information, often including your name, address, banking details, drivers license and sometimes even a scan of your entire face or a recording of your voice!

You then wait for background checks to come through before you’re accepted and can finally smash buy some sats. After all that you still don’t really own any Bitcoin! What you have at this stage is an IOU and you still need to get those sats into a wallet where you control the private keys.

A pretty horrible experience, and hardly in the spirit of Bitcoin I think you’ll agree! Let’s also not forget that some company now has your personal information stored on a server somewhere waiting for an attacker to come along and compromise it. Sounds far-fetched, but these types of breaches happen all too often, just search for the names ‘Mt Gox’, ‘Binance’ and ‘Ledger’.

## So what’s the alternative?

Buying Bitcoin [noKYConly!](/en/privacy/no-kyc)

There are many ways to obtain Bitcoin without having to provide all of your personal details to a company that may or may not know how to properly secure that data. I have guides on using peer-to-peer markets like [Bisq](https://bitcoiner.guide/bisq) and [HodlHodl](https://bitcoiner.guide/hodlhodl), but one of the new kids on the noKYC block is RoboSats.

{{% image "/img/193.png" /%}}

# What is RoboSats?

[RoboSats](https://github.com/RoboSats/robosats) is an Open Source peer-to-peer exchange for buying and selling sats using the Lightning Network. It requires zero sign up information, is accessible via the Tor browser or an Android app and allows you to obtain sats directly to your own wallet. Because RoboSats is native to the Lightning Network, trades can be completed in as little as 5 minutes (_if both peers are online at the same time_) and for incredibly low fees.

RoboSats operates globally, supporting all popular fiat currencies and payment methods. All you need is a peer wanting to do trade in your chosen currency/method pairing. If your chosen method is not listed, you can create your own offer and wait for someone to come to you. Certain payment methods come with more risk than others, so be sure to be aware of the [trade-offs](https://learn.robosats.com/docs/payment-methods/) of your chosen method.

# Before You Start

## Things you need to know

### Jargon Buster

|   |   |
|---|---|
|[Robot](https://learn.robosats.com/docs/robots/)|Your automatically generated private trade identity. Do not re-use the same robot more than once as this can degrade your privacy.|
|[Token](https://learn.robosats.com/docs/robots/#robot-re-use-not-recommended)|A string of random characters used to generate your unique robot.|
|[Maker](https://bitcoiner.guide/robosats/)|A user who creates an offer to buy or sell Bitcoin.|
|[Taker](https://bitcoiner.guide/robosats/)|A user who takes another user up on their offer to buy or sell Bitcoin.|
|[Bond](https://learn.robosats.com/docs/bonds/)|An amount of Bitcoin locked up by both peers as a pledge to play fair and complete their part of the trade. Bonds are typically 3% of the total trade amount and are powered by [Hodl Invoices](https://github.com/lightningnetwork/lnd/pull/2022).|
|[Trade Escrow](https://learn.robosats.com/docs/escrow/)|Used by the seller as a method of holding the trade amount of Bitcoin, again using Hodl Invoices.|
|[Fees](https://learn.robosats.com/docs/fees/)|RoboSats charges **0.2%** of the trade amount, which is split between both maker and taker. The taker pays **0.175%** and the maker pays **0.025%**.|

## Things you need to have

### A Lightning Wallet

RoboSats is Lightning native, so you’re going to need a Lightning Wallet to fund the bond and receive the purchased sats as a buyer. You should take care when choosing your wallet, due to the technology used to make RoboSats function, not all are [compatible](https://learn.robosats.com/docs/wallets/).

If you’re a node runner, [Zeus](https://zeusln.app/) is by far the best option. If you don’t have your own node, I’d highly recommend [Phoenix](https://phoenix.acinq.co/), a cross platform mobile wallet with simple setup and access to Lightning. Phoenix was used in the production of this guide.

### Some Bitcoin

Buyers and sellers need to fund a bond before any trade can take place. This is usually a very small amount (_~3% of the trade amount_), but is a prerequisite nonetheless.

Using RoboSats to buy your first sats? Why not get a friend to loan you the tiny amount required to get started!? If you’re flying solo, [here](https://bitcoiner.guide/nokyconly) are some other great options to obtain some noKYC sats to get you started.

### Access to RoboSats

Obviously you’re going to need to access RoboSats! There are four main ways in which you can do this:

- [Via Tor Browser](http://robosats6tkf3eva7x2voqso3a5wcorsnw34jveyxfqi2fu7oyheasid.onion/) (_Recommended!_)
- [Via a regular web-browser](https://unsafe.robosats.com/) (_Not recommended!_)
- [Via the Android APK](https://github.com/RoboSats/robosats/releases/latest)
- [Your own client](https://bitcoiner.guide/robosats/#run-your-own-robosats-client)

If you’re new to the Tor browser, learn more and download it [here](https://www.torproject.org/).

A quick note for iOS users looking to access RoboSats via Tor from their phones. ‘Onion Browser’ is **not** Tor Browser. Instead use Orbot + Safari and Orbot + DuckDuckGo.

# Buying Bitcoin

The following steps were conducted in May 2023 using version 0.5.0, accessed via the Tor browser. The steps should be identical for users accessing RoboSats via the Android APK.

At the time of writing RoboSats is still undergoing active development, so the interface may change a little in the future, but the basic steps required to complete the trade should remain largely unchanged.

1. When you first load RoboSats you’ll be met with this landing page. Click Start.

{{% image "/img/robosats/robo-02-en.png" /%}}

2. Generate your token and store it somewhere safe like an [encrypted notes](https://standardnotes.com/) app or [password manager](https://bitwarden.com/). This token can be used to recover your temporary Robot ID in the event that your browser or app closes mid way through a trade.

{{% image "/img/robosats/robo-03-en.png" /%}}

3. Meet your new Robot identity, then click Continue.

{{% image "/img/robosats/robo-04-en.png" /%}}

4. Click Offers to browse the order book. At the top of the page you can then filter to your preferences. Be sure to take note of the bond percentages and [premium](https://learn.robosats.com/docs/premium/) over the average exchange rate.

- Choose Buy
- Choose your currency
- Choose your payment method(s)

{{% image "/img/robosats/robo-05-en.png" /%}}

5. Click on the offer you’d like to take. Enter the amount (_in your chosen fiat currency_) that you’d like to purchase from the seller, then have a final check of the details and click Take Order.

If the seller is not online (_denoted by a red dot on their profile image_), you’ll see a warning that the trade could take longer than usual. If you continue and the seller does not proceed in time, you’ll be compensated 50% of their bond amount for your wasted time.

{{% image "/img/robosats/robo-06-en.png" /%}}

6. Next, you need to lock up your trade bond by paying the invoice on screen. This is a hold invoice that freezes in your wallet. It will only be charged if you fail to complete your side of the trade.

{{% image "/img/robosats/robo-07-en.png" /%}}

7. In your Lightning Wallet, scan the QR code and pay the invoice.

{{% image "/img/robosats/robo-08-en.png" /%}}

8. Next, in your Lightning Wallet generate an invoice for the amount shown and paste into the space provided.

{{% image "/img/robosats/robo-09-en.png" /%}}

9. Wait for the seller to lock their trade amount. When this takes place, RoboSats will automatically move to the next step where the chat window will open. Say Hi and ask the seller for their fiat payment information. Once provided, send the payment via the chosen method then confirm this in RoboSats. All chat in RoboSats is PGP encrypted meaning only you and your trade peer can read the messages.

{{% image "/img/robosats/robo-10-en.png" /%}}

10. Once the seller confirms receipt of the payment, RoboSats automatically releases the payment using the invoice provided earlier.

{{% image "/img/robosats/robo-11-en.png" /%}}

11. When the invoice is paid, the trade is finished and your bond is unlocked. You’ll then see a trade summary.

{{% image "/img/robosats/robo-12-en.png" /%}}

12. Check your Lightning Wallet for confirmation that the sats have arrived.

{{% image "/img/robosats/robo-13-en.png" /%}}

# Additional Features

As well as the obvious buying and selling of Bitcoin, RoboSats has a few other features you should know about.

## Robot Garage

Want to have multiple trades going at the same time, but don’t want to share the same identity across them? No problem! Click on the Robot tab, generate an additional Robot and create or take your next order.

{{% image "/img/robosats/robo-14-en.png" /%}}

## Creating Orders

As well as taking someone else’s offer, you can create your own and wait for another Robot to come to you.

1. Open the Create page.
2. Define if your order is to buy or sell Bitcoin.
3. Enter the amount and currency you want to Buy/Sell with.
4. Enter the payment method(s) you’re willing to use.
5. Enter the ‘Premium over Market’ % you’re willing to accept. Note that this can be a negative figure to bid at a discount vs than the current market price.
6. Click Create Order.
7. Pay the Lightning invoice to lock your Maker Bond.
8. Your order is now live. Sit back and wait for someone to accept it.

{{% image "/img/robosats/robo-15-en.png" /%}}

## On-chain Payouts

RoboSats is Lightning focused, but buyers do have the option to receive their sats to an on-chain Bitcoin address. Buyers can select this option after locking up their bond. After selecting on-chain, the buyer will see an overview of the fees. The additional fees for this service include:

1. **A swap fee collected by RoboSats** - This fee is dynamic and moves depending on how busy the Bitcoin network is.
2. **A mining fee for the payout transaction** - This is configurable by the buyer.

{{% image "/img/robosats/robo-16-en.png" /%}}

## P2P Swaps

RoboSats allows users to swap sats into or out of their Lightning Wallet. Simply click the swap button at the top of the offers page to view the current swap offers.

As the buyer of a ‘Swap In’ offer, you send on-chain Bitcoin to the peer and receive sats back, minus the advertised fees and/or premiums, to your Lightning Wallet. As the buyer of a ‘Swap Out’ offer, you send sats via Lightning and receive Bitcoin, minus any fees and/or premiums, to your on-chain address. Samourai or Sparrow Wallet users can also leverage the Stowaway feature to complete a swap.

RoboSats swap offers can also incorporate pegged alternatives to Bitcoin that include RBTC, LBTC and WBTC. You should take extreme care if interacting with these tokens as they all come with various tradeoffs. Pegged Bitcoin is not Bitcoin!

{{% image "/img/robosats/robo-17-en.png" /%}}

## Run your own RoboSats Client

Umbrel, Citadel and Start9 node runners can install their own RoboSats client directly onto their node. The [benefits](https://github.com/RoboSats/robosats/tree/main/nodeapp#why-host-your-own-robosats-client) of doing so are listed as:

1. Dramatically faster load times.
2. Safer: you control what RoboSats client app you run.
3. Access RoboSats safely from any browser / device. No need to use TOR if you are on your local network or using VPN: your node backend handles the torification needed for anonymization.
4. Allows control over what P2P market coordinator you connect to (_defaults to robosats6tkf3eva7x2voqso3a5wcorsnw34jveyxfqi2fu7oyheasid.onion_)

{{% image "/img/robosats/robo-18-en.png" /%}}

# FAQ

## Can I be scammed?

As a buyer, if you’ve sent the fiat required for your side of the trade, but the seller fails to release the sats to you then you can open a dispute. If during this dispute process you can prove to the RoboSats arbitrators that you did send the fiat, the sellers escrowed funds and their trade bond will be released to you.

## How do I cancel a trade?

You can cancel a trade after posting your bond by clicking the Collaborative Cancel button within the trade menu. If your trade peer is happy to cancel, you will incur no fees. But if your trade partner wants to complete the trade and you go ahead and cancel anyway, you’ll lose your trade bond.

## Does RoboSats work with ‘X’ payment method?

There are no restrictions on payment methods in RoboSats. If you don’t see any offers in your desired method, create your own offer using it!

{{% image "/img/robosats/robo-19-en.png" /%}}

## What does RoboSats learn about me when I use it?

Providing you use RoboSats via Tor or the Android app, nothing at all! Learn more [here.](https://learn.robosats.com/docs/private/)

- Tor protects your network privacy.
- PGP encryption keeps your trade chat private.
- No accounts means one Robot per trade. This means RoboSats can’t correlate multiple trades to a single entity.

However, there are some caveats! Lightning is fairly private as a sender, but not as a receiver. If you receive to your own Lightning node, your node ID is shared in your invoices. This node ID gives anyone with knowledge of it a starting point to try and link your on-chain activity. This is also true if a user opts to receive their trade via an on-chain payout.

To mitigate this, users can opt to use a solution such as a [Proxy Wallet](https://learn.robosats.com/docs/proxy-wallets/) for Lightning or [Coinjoin](https://bitcoiner.guide/privacy/separate/) for on-chain.

# Coming Soon

## Federation

Right now there is a single RoboSats coordinator operated by the RoboSats developer team. In Bitcoin, any form of centralisation makes for an easier target for governments or regulators who may not look fondly upon a specific service.

With RoboSats being an Open Source project, anybody could take the code and start running their own coordinator. Whilst this does somewhat decentralise the risk away from a single target, it also fragments an already thin liquidity market.

The RoboSats team realise this and have started work on a [federated model](https://github.com/RoboSats/robosats/issues/228). As an end user, this should not change the trade flow demonstrated above by much, but there will be extra views or screens for you to add or remove different coordinators that arise.

# Learn More

## Written Guides

Check out [Athena Alpha](https://www.athena-alpha.com/how-to-buy-bitcoins-using-robosats/) for their guide on how to buy bitcoins with RoboSats or their full review [here](https://www.athena-alpha.com/robosats-review/).

## Video Guides

See RoboSats in action with these awesome video guides by [BTC Sessions](https://www.youtube.com/@BTCSessions) and [Ian Major](https://www.youtube.com/@IanMajor).

{{< youtube XW_wzRz_BDI />}}

{{< youtube QISRoZxQaAs />}}

### Useful Links

RoboSats is completely Open-Source. You can find the code source [here](https://github.com/RoboSats/robosats) and their extensive documentation [here](https://learn.robosats.com/)

Use RoboSats by any of the following methods:

- [Tor](http://robosats6tkf3eva7x2voqso3a5wcorsnw34jveyxfqi2fu7oyheasid.onion/)
- [Clearnet](https://unsafe.robosats.com/) (_Not recommended!_)
- [Android APK](https://github.com/RoboSats/robosats/releases/latest)
- [Your own client](https://bitcoiner.guide/robosats/#run-your-own-robosats-client)

If you have any questions or feedback, get involved via these options:

- [SimpleX](https://simplex.chat/contact/#/?v=1-2&smp=smp%3A%2F%2F0YuTwO05YJWS8rkjn9eLJDjQhFKvIYd8d4xG8X1blIU%3D%40smp8.simplex.im%2FyEX_vdhWew_FkovCQC3mRYRWZB1j_cBq%23%2F%3Fv%3D1-2%26dh%3DMCowBQYDK2VuAyEAnrf9Jw3Ajdp4EQw71kqA64VgsIIzw8YNn68WjF09jFY%253D%26srv%3Dbeccx4yfxxbvyhqypaavemqurytl6hozr47wfc7uuecacjqdvwpw2xid.onion&data=%7B%22type%22%3A%22group%22%2C%22groupLinkId%22%3A%22hWnMVPnJl-KT3-virDk0JA%3D%3D%22%7D)
- [Reddit](https://reddit.com/r/robosats)
- [Matrix](https://matrix.to/#/#robosats:matrix.org)

_Starting from June 12th, 2023, the Robosats Telegram group will no longer be active. More info [here](https://twitter.com/RoboSats/status/1668043842275229696?s=20)_.

Remember - No RoboSats representative will ever contact you unannounced via any of these platforms. If someone does, they are almost certainly a scammer and should be blocked.

And finally, don’t forget to follow them on [Twitter](https://twitter.com/RoboSats) and [Nostr](https://snort.social/p/npub1p2psats79rypr8lpnl9t5qdekfp700x660qsgw284xvq4s09lqrqqk3m82) to stay up to date!