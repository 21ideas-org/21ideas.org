---
title: "Lightning Wallets"
h1: "Lightning Wallets"
cover: /img/ln-wallets/cover.png
tags: ["bitcoin", "lightning", "scalability", "lightning network", "wallets", "payments", "guide", "hodl"]
description: "Today there are many wallets with support of the Lightning Network. This article will help you to choose the solution that will suit your needs."
url: lightning-wallets
date: 2024-01-16
bookToc: true
bookFlatSection: false
weight: 2
---

With repeated bumps of the popularity of monkey pictures in the Bitcoin blockchain and in anticipation of the upcoming bull market, fees in the mainnet don't make anyone happy.

{{% image "/img/ln-wallets/high-fees.png" %}}
_Fees in the network can reach hundreds of sats per virtual byte, and this is far from the limit. [Source](https://mempool.space/)._
{{% /image %}}

Lightning Network provides a solution to the painful problem of high fees, but you need to act thoughtfully, without hurrying. That's why today I propose to analyze the best available Lightning wallets, evaluate the pros and cons of each of them, so that you can choose the best solution and finally forget (or at least minimize the stress) about high fees.

{{< hint btc >}}
The guide written by [Tony⚡️](https://snort.social/p/npub10awzknjg5r5lajnr53438ndcyjylgqsrnrtq5grs495v42qc6awsj45ys7).

[Contribute](/contribute/).
{{< /hint >}}

### Considered wallets:

- Custodial

	- Wallet of Satoshi
	
	- Blink
	
	- Coinos
	
	- Alby

- Pocket Lightning node:

	- Phoenix
	
	- Valet
	
	- Zeus
	
	- Mutiny
	
	- Blixt

- Apps for remote node management:

	- Blue Wallet
	
	- Zeus

# Custodial wallets

## Wallet of Satoshi (WoS)

[Wallet of Satoshi](https://www.walletofsatoshi.com) is probably the simplest app that can be recommended to all beginners. All you need is to install the app and tap the "Receive" button. 

| Non-custodial | ❌ |
|----------------|:-------:|
| Onchain | ✅[^1] |
| [LN address](/en/how-lightning-address-works) |  ✅ |
| Open source |  ❌ |
| Suitable for | Beginners |

You can backup your account using e-mail. Of course, there is no control over your funds or access to mnemonic backup phrase.

{{< hint danger >}}
It is impossible to reach such a user-friendly interface without sacrificing something in return. WoS is a custodial wallet, it means the service stores your sats for you, and you have to trust that WoS will send "your" funds wherever you send them. 

Although we must admit that at the moment the reputation of the WoS team is quite good.
{{< /hint >}}

The wallet allows you to receive and send funds through Lightning and onchain. In case of receiving onchain bitcoins (as in the vast majority of LN wallets) coins will be swaped to the Lightning Network. Thus, you cannot have an onchain balance and the associated features (RBF, multisig, etc.)

{{% image "/img/ln-wallets/wos1.png" %}}
_Send and receive sats via lightning invoices, onchain and [Lightning addresses](/en/how-lightning-address-works)_
{{% /image %}}

Despite the fact that WoS is a custodial wallet, I don't hesitate to recommend it to beginners. Yes, by using this kind of app, you fully trust your funds to it, but that just means that you shouldn't keep more than a couple dollars on such wallets. This is a great way to learn the Lightning Network for the first time, to appreciate the instant Bitcoin payments with *about zero* fees, the convenience of [Lightning addresses](/en/how-lightning-address-works) and contact list, as well as login via Lightning. But as you learn more about the technology, and as the amount you send and store in the Lightning Network increases, you should definitely switch to self-custody solutions.

{{< hint warning >}}
Once you've become familiar with basic custodial solutions for the Lightning Network, be sure to move on to applications that offer more flexibility and control over your funds.
{{< /hint >}}

| **Pros** | **Cons** |
| --------- | ---------- |
| ✅ Easy to use | 🚫 Custodial |
| ✅ Easy backup by e-mail | 🚫 Closed source |
| ✅ Onchain payments | 🚫  Additional fee on onchain swap |
| ✅ Lightning address | |

## Blink

[Blink](https://www.blink.sv) is also easy to use and even offers the Stablesats function, which will appeal to many users.

| Non-custodial | ❌ |
|-----------------|:---:|
| Onchain | ✅[^1] |
| LN address | ✅ |
| Open source | ✅ [GitHub](https://github.com/GaloyMoney/galoy-mobile/) | 
| Suitable for | Beginners |

Stablesats allows you to "convert" your sats by pegging their value to the US dollar. In this way, you can store a portion of your funds in a dollar that is steadily devaluing over time.

{{% image "/img/ln-wallets/blink1.png" %}}
_The Stablesats feature is implemented at the app level and is not compatible with other Lightning wallets_
{{% /image %}}

A significant disadvantage of Blink wallet is the requirement to confirm the account via SMS. But this can either be bypassed with the help of specialized services, such as [sms4sats](https://sms4sats.com/?ref=21ideas@getalby.com), or you can use the version with some limitations that does not require confirmation. The limitations will not be noticeable to a beginner, and it is not worth trusting large volumes to custodial services:

- Daily withdrawal limit - $125
- Daily Stablesats transfer limit - $2,000

Blink also has a Lightning address. You can check its functionality by sending some sats to _21ideas@blink.sv_.

| **Pros** | **Cons** |
| --------- | ---------- |
| ✅ Easy to use | 🚫 Custodial |
| ✅ Stablesats | 🚫 Withdrawal limits for non-KYC users |
| ✅ Onchain payments | 🚫 Additional fee on onchain swap |
| ✅ Lightning address |  |
| ✅ Open source | |

## Coinos

[Coinos](https://coinos.io) may seem an unfamiliar solution, but this custodial wallet will be especially useful to some users due to its unique user interface.

| Non-custodial | ❌ |
|-----------------|:---:|
| Onchain | ✅[^1] |
| LN address | ✅ |
| Open source | ✅ [GitHub](https://github.com/coinos) |
| Suitable for | Beginners |

Coinos is a Progressive Web App (PWA) that you can interact with either in your browser or add it to the home screen of your smartphone or computer. This way the wallet will be no different from the usual native apps with Lightning support. This is also a significant plus, as installing bypassing app stores means there is no store to restrict access to Coinos itself or its features.

{{% image "/img/ln-wallets/coinos-mobile.png" /%}}

Coinos, like many others, supports sending and receiving funds in Lightning Network and onchain. A unique feature of the wallet is that it makes for each user its own page on the [coinos.io](https://coinos.io) website.

The page offers users a number of new features. For example, me with [BitKorn](https://www.youtube.com/@BitKorn) and [♾️/21M](https://t.me/gametheoryhub) are using the site to fundraise to support the translation of books about Bitcoin: https://coinos.io/21books.

{{% image "/img/ln-wallets/21books.png" %}}
_21books page on Coinos. Screenshot of desktop app installed via Brave browser._
{{% /image %}}

And even if you're not publicly active, sometimes it can be useful to share a link and allow the sender to enter the amount himself and decide how to send the funds - onchain or via Lightning.

| **Pros** | **Cons** |
| --------- | ---------- |
| ✅ PWA | 🚫 Custodial |
| ✅ Own web page | 🚫 Additional fee on onchain swap |
| ✅ Onchain payments | |
| ✅ Lightning address | |
| ✅ Open source | |

## Alby

[Alby](https://www.getalby.com) is mainly a browser extension with Lightning wallet functionality. Alby offers the ability to store and manage your sats, acting as a custodian, and also allows you to connect your own Lightning node.

| Non-custodial | ✅[^2] |
|-----------------|:---:|
| Onchain | ✅[^1] |
| LN address | ✅ |
| Open source |  ✅ [GitHub](https://github.com/getAlby) |
| Suitable for | Beginners, intermediate |

Using the custodial version of Alby you can export your wallet to a mobile interface - Blue Wallet or Zeus - and use one wallet in both the browser and on your mobile device.

Alby not only offers all the same features as its rivals - LN addresses, sending and receiving onchain - but also implements [Nostr](https://nostr.21ideas.org) support, providing Nostr addresses and the ability to store your private keys. You can also create multiple accounts for different purposes and manage them from a single dashboard. Unfortunately, the advanced functionality has not reflected well on the intuitiveness of the app, in particular its settings. Sometimes it is quite difficult to find anything in them. 

| **Pros** | **Cons** |
| ------------------------------------ | ----------------------------------- |
| ✅ Extensive features | 🚫 Invite-only accounts |
| ✅ Option to connect your own node | 🚫 Not the most intuitive UI |
| ✅ Onchain payments | |
| ✅ LN address | |
| ✅ Open source | |
| ✅ Nostr support | |

# Mobile Lightning nodes

Mobile wallets offering non-custodial storage of LN sats are a good intermediate solution between custodial services and running your own node.

Moreover, different dev teams have different visions of what a "pocket Lightning node" should look like and, accordingly, offer a variety of functionality in their apps. In this way, you can maximize your experience to that of a bitcoiner running his own node on a dedicated device by simply gradually changing the wallet you use to a more "sophisticated" one.

We will continue to move from simpler solutions to more complex and feature-rich solutions.

The first thing that will catch the eye of new users of non-custodial solutions will be the high fee for the first payment. In this, mobile solutions behave similarly to full Lightning nodes: to start using the network, you need to open a channel, which requires an onchain transaction.

{{% image "/img/ln-wallets/first-tx.png" %}}
_If onchain fees are high, it may be a good idea to delay opening a channel._
{{% /image %}}

But don't worry, only the first transactions can be significant for your pockets. The fees for further transactions ( assuming the balance of liquidity is maintained) will in most cases be around zero.

## Phoenix

[Phoenix](https://phoenix.acinq.co) — is probably the simplest non-custodial solution that can be recommended. With the latest update, Phoenix consolidate all channels into one, further simplifying the user's task - no more need to track liquidity in multiple channels, everything is much simpler.

| Non-custodial | ✅ |
|-----------------|:---:|
| Onchain | ✅[^1] |
| LN address | ❌ |
| Open source | ✅ [GitHub](https://github.com/ACINQ/phoenix) |
| Suitable for | Intermediate |

The flip side of the coin was the rather high fees and " unexpected rebalancing" of channels, also resulting in pay the onchain fees.

In the latest version, the developers [introduced](https://twitter.com/PhoenixWallet/status/1735699451770032354) a feature to buy liquidity into the channel to avoid onchain fees.

| **Event** | **Fee** |
| ----------- | ------------ |
| Sending via LN | 0.4% + 4 sat |
| Receiving via LN | - |
| Sending onchain | Miners fee (user selectable) |
| Receiving onchain (swap-in or insufficient liquidity at LN receiving) | Miners fee + 1000 sats |
| Request inbound liquidity | 1% + miners fee |

This wallet can be recommended as a second app for storing LN sats for those who regularly use one of the custodial wallets described above.

| **Pros** | **Cons** |
| --------- | ---------- |
| ✅ Backup phrase | 🚫 Trust to ACINQ in privacy and payment routing |
| ✅ Onchain payments | 🚫 No Lightning addresses |
| ✅ Open source | 🚫 Unpredictable fees (occasionally) |

{{< hint btc >}}
A detailed guide to the Phoenix Wallet is available [here](/en/phoenix).
{{< /hint >}}

## Mutiny

[Mutiny](https://www.mutinywallet.com) — quite an interesting wallet in light of [grants the team received](https://bitcoinmagazine.com/business/mutiny-wallet-raises-over-300k-in-preseed-funding) and ambitious plans.

| Non-custodial | ✅ |
|-----------------|:---:|
| Onchain | ✅ |
| LN address | ❌ |
| Open source | ✅ [GitHub](https://github.com/MutinyWallet/mutiny-web) |
| Suitable for | Intermediate |

The wallet looks good against rivals: despite rather high initial fees for opening channels, the wallet's features are worth it.

| **Event** | **Fee** |
|-------------|--------------|
| Opening a channel | Depends on onchain fees + 10,000 sat |
| Sending via LN | Small - 1-2 sat |
| Basic routing fee | 0 sat |
| Routing fee rate | 0 ppm |

The first obvious highlight of Mutiny is the fact that it is a Progressive Web App, meaning that to install Mutiny, you simply need to open their website in your native browser (whether on your smartphone or computer) and add it to your desktop (or app folder).

Channel management here is done "under the hood" and no user action is required. Except for the occasional need for "manual channel rebalancing" when inbound liquidity becomes too low. The wallet shows your channels and their balances, but does not allow you to interact with them in any way.

{{% image "/img/ln-wallets/mutiny-channels.jpg" %}}
_Display of channels in Mutiny Wallet_
{{% /image %}}

But Mutiny offers a lot of advanced features, such as connecting the wallet to Nostr apps to send zaps in one click and authentication via LNURL. The wallet also provides the ability to receive and send onchain funds, but does not offer advanced features such as UTXO management, RBF and CPFP.

Recurring LN payments are also available for project patrons (21k sats per month) and the ability to comfortably gift sats to newbies.

| **Pros** | **Cons** |
| --------------------- | -------------------------------------- |
| ✅ Backup phrase | 🚫 High fees for opening a channel |
| ✅ Onchain wallet | 🚫 Lack of advanced onchain features |
| ✅ Open source | 🚫 Unable to manage channels |
| ✅ Nostr integration | 🚫 No Lightning addresses |
| ✅ LNURL Auth | |
  
## Zeus

[Zeus](https://zeusln.com) — the first wallet in our review to offer full-featured channel management and fine-tuning of your pocket Lightning node.

| Non-custodial | ✅ |
|-----------------|:---:|
| Onchain | ✅ |
| LN address | ✅[^3] |
| Open source | ✅ [GitHub](https://github.com/ZeusLN/zeus) |
| Suitable for | Intermediate |

Despite the fact that Zeus offers a wide range of features, which is rather aimed at more experienced users, the team has not forgotten about ordinary bitcoiners who just want to use the Lightning Network without trusting anyone their funds. The wallet offers several different usage options and will suit literally anyone who has ever used a Lightning wallet. We suggest starting with two options that are appropriate for this section of the guide:

- using LSP (liquidity provider)
- self channel management

### Zeus + LSP

Using an LSP (Lightning Service Provider) is probably the best option for those who want to switch from a custodial wallet to a non-custodial wallet, but are not ready to fully dive into channel management.

It's simple: when you start the wallet, you select that you want to use LSP, and Zeus will manage the liquidity for you — it will open a channel and will refill it if needed. No action is required from you — you can just use the wallet similarly to how you used the custodial wallet. Here the behavior of Zeus and Mutiny is almost identical.

{{< hint warning >}}
When using LSs, regardless of the wallet - Phoenix, Mutiny, Zeus or Blixt - it is important to track inbound liquidity (see the screenshot below). If it is exhausted, when receiving the next payment, the provider will be forced to open a new channel, which will require an onchain transaction and result in additional fees.

{{% image "/img/ln-wallets/phoenix-channels.png" %}}
_Displaying liquidity in Phoenix Wallet_
{{% /image %}}

To avoid paying additional fees you can buy some goods or services with Lightning, send funds to another wallet or use one of the services to swap Lightning sats for onchain bitcoins.
{{< /hint >}}

| **Event** | **Fee** |
|---|---|
| Opening a channel (up to 1 million sats) | 10,000 sat |
| Opening a channel (1m - 5m sat) | 1% |
| Wrapped invoices w/o opening a channel | 2 sat |
| Basic routing fee | 0 sat |
| Routing fee rate | 0 ppm |

To start using the wallet just tap the "Quick Start" button. After a couple of minutes of synchronization (only at the first launch or if you don't open the app for a few days) you can start using both Lightning and onchain wallet.

{{< hint warning >}}
Zeus uses [aezeed](https://github.com/lightningnetwork/lnd/blob/master/aezeed/README.md) mnemonic phrase instead of usual BIP39. Therefore, you will not be able to recover the wallet by backup phrase in every app. We recommend using [Blue](/en/blue), Blixt or Breez wallet. If you suddenly lose access to your Zeus wallet and the channels are still open, restoring it in the newly downloaded app will force close the open channels and provide you a new onchain wallet with your funds.
{{< /hint >}}

### Self channel management

This mode will appeal to savvy bitcoiners: perhaps you already have your own Lightning node but would like an additional mobile node; or you've already gained confidence using simpler mobile wallets and want to try a more flexible app.

{{< hint warning >}}
It is worth mentioning that since nodes on mobile devices cannot be online all the time, you can only open private channels with other users. This means that your cell phone cannot act as a routing node. This applies to any mobile wallet (at least as of this writing).
{{< /hint >}}

To open a channel, go to the "Channels" tab in the lower right corner of the app's home screen and tap the "+" in the upper right corner of the window that appears.

{{% image "/img/ln-wallets/new-channel-zeus.png" %}}
_Opening a channel in the Zeus Wallet_
{{% /image %}}

You can then either (1) enter node settings you want to connect to, (2) scan the node's QR code, or (3) automatically connect to the Olympus node. Either way, you need to make sure you have enough funds on your onchain address.

{{< hint warning >}}
This is all done through the creation of a simple wallet that by default offers to use a liquidity provider (LSP). Instead of using this approach, we simply open channels to the desired Lightning nodes.
{{< /hint >}}

Details of how to interact with the Lightning Network can be found in the Zeus [documentation](https://docs.zeusln.app), and from [theoretical](/en/lightning) and [practical](/en/practice/lightning) sections of the 21ideas website.

| **Pros** | **Cons** |
| --------------------- | -------------------------------------- |
| ✅ Backup phrase | 🚫 Lightning addresses are difficult to use |
| ✅ Onchain wallet | 🚫 Lack of advanced onchain features |
| ✅ Open source | |
| ✅ Channel management | |
| ✅ LN address | |
| ✅ LNURL Auth | |
| ✅ Ability to import your own node | |
  
## Valet

[Valet](https://standardsats.github.io/) is a non-custodial mobile wallet offering a full-featured lightning node for mobile devices. Compared to Zeus, the wallet has a stronger focus on self-management of channels and advanced onchain features.

| Non-custodial | ✅ |
|-----------------|:---:|
| Non-custodial | ✅ 
| LN address | ❌ 
| Open source | ✅ [GitHub](https://github.com/standardsats/wallet) |
| Suitable for | Intermediate |

To start working in non-custodial form, it is necessary to fund the onchain wallet and open an outbound channel. To do this, it is enough to scan the QR code of a Lightning node, which can be found in explorers such as [amboss.space](https://amboss.space/) or [mempool.space](https://mempool.space/ru/), or paste node address in the field for sending. After that you should tap on the "Open a new channel" button and specify the amount of BTC that will be placed in the channel.

{{% image "/img/ln-wallets/connect-node.png" /%}}

You can use external LSPs to open channels with inbound liquidity. A proven service that works well with the wallet and has low fees is https://deezy.io/. Other available LSPs can be found [here](https://lightningnetwork.plus/categories/1). 

Additionally, there is a wallet's developers node, which allows you to use additional features and receive a payment without depositing bitcoins into a newly created wallet. This will be explained below.

The main advantage of Valet is the ability to minimize both onchain fees and fees through your own Lightning channels. The wallet is also faster to launch compared to Zeus or Blixt.

Valet offers advanced onchain features, for example, if you put multiple addresses and amounts in the send field, separated by semicolons as follows:

```
bc1qmu6c9krfmw7jfursz0304g4qlju9aqvekuxkfw 0.001; bc1qk753jj9xkxwplyxnphhnkvq06qvmrr9u53udrn 0.023
```

...then the wallet will create a single transaction that sends the corresponding amounts to the selected addresses. This saves up to 50% in onchain fees compared to creating separate transactions for each address.

{{% image "/img/ln-wallets/send-tx.png" /%}}

Of the useful advanced onchain features, coin control can be highlighted. This function allows you to enable and disable specific UTXOs in the wallet, i.e. outputs of unspent transactions. This feature can be useful in some cases:

1. You want to send a transaction without creating change output for lower fees in the future, and increased privacy.

2. You don't want to move specific UTXOs in everyday transactions so that an observer can't link your other UTXOs to those outputs just by looking at the transaction in a blockchain explorer.

3. You received a small amount of BTC to track (dust attack) the rest of your funds. Then you can just mark the "bad" small UTXO and do not spend it.

To activate coin control, you need to swipe the onchain balance tile to the right and tap on the button that appears.

{{% image "/img/ln-wallets/coin-control.png" /%}}

A special onchain feature of the wallet is the ability to raise onchain fees through Replace-by-Fee (RBF) technology for outgoing transactions and Child-Pays-for-Parent (CPFP) for incoming transactions. The wallet also supports the ability to cancel an unconfirmed transaction in one click.

{{% image "/img/ln-wallets/cpfp.png" /%}}

Valet also allows opening special custodial Lightning channels (the only optional custodial function in the wallet), the balance of which is pegged to USD, the so-called fiat channels. To activate this feature, you need to scan the QR code of a Lightning node that supports Hosted Channels technology and tap on the "Request USD fiat channel" button.

{{% image "/img/ln-wallets/fiat-channel.png" /%}}

Anyone in the community can start a service that provides fiat channels. At the moment the service is provided only by wallet's developers node: https://amboss.space/es/node/02cd1b7bc418fac2dc99f0ba350d60fa6c45fde5ab6017ee14df6425df485fb1dd

{{< hint warning >}}
Be careful: unlike normal channels, fiat channels cannot be force closed and get bitcoins onchain automatically if the node on the other side has gone offline. This feature is intended for short-term use to mitigate bitcoin price volatility for the user.
{{< /hint >}}

| **Pros** | **Cons** |
| --------------------- | -------------------------------------- |
| ✅ Backup phrase | 🚫 No Lightning addresses |
| ✅ Onchain wallet with advanced features | 🚫 No LSP |
| ✅ Open source | |
| ✅ Channel management | |
| ✅ Hosted Channels, stable sats | |
| ✅ LNURL Auth | |

## Blixt

[Blixt](https://blixtwallet.github.io) is another option for running a Lightning node directly on your mobile device. Its functionality is similar to that of Zeus and Valet.

| Non-custodial | ✅ |
|-------------------|:---:|
| Onchain | ✅ |
| LN address | ❌ |
| Open source | ✅ [GitHub](https://github.com/hsjoberg/blixt-wallet) |
| Suitable for | Intermediate |

I haven't personally tested this wallet, but I can say that it also offers LSP functionality called Dundler. Blixt allows users to manage their own channels, connect to preferred nodes, and generally provides a full mobile Lightning node experience. Blixt also offers an advanced features when managing onchain bitcoins.

{{< hint warning >}}
If you have used Blixt and would like to share your experiences, please leave a comment below or [contact us](/en/feedback). We will be happy to include your comments to this guide. Otherwise, we recommend reading the Blixt documentation, available [here](https://blixtwallet.github.io/features), as well as reading DarthCoin's Blixt guide, available [here](https://darthcoin.substack.com/p/getting-started-with-blixt-mobile).
{{< /hint >}}

# Mobile wallets for managing remote full Lightning node

We cannot forget to mention one more feature provided by mobile wallets. This is synchronization of your full Lightning node with the mobile app for further management of it from anywhere in the world. This feature is definitely the most useful for Lightning node owners, but not only for them.

A number of apps, e.g. the custodial version of Alby and the trial version of the LNBits, provide the ability to export a LN wallet. This way you can create a custodial wallet that provides unique functionality (piggy bank, recurring payments, paywalls, etc.) on desktop and export it to your mobile for easy use "on the go".

{{% image "/img/ln-wallets/alby-export.png" %}}
_The wallet on smartphone is a "mirror" of the wallet imported into it. Send and receive sats, log in via Lightning using one account._
{{% /image %}}

These features are offered not only by Zeus, but also by [Blue Wallet](https://bluewallet.io). Blue has proven to be an excellent multi-functional non-custodial tool. In addition to importing LN nodes, the wallet offers importing and creating many types of bitcoin storage schemes, from multi-sig to hardware wallet support. You can learn more about the features of this wallet [here](/en/blue).

Let's take a look at importing a wallet using Alby, Blue Wallet and Zeus as examples.

1. Go to https://getalby.com/ and log in to your account (button in the upper right corner).

2. Navigate to the Wallet tab at the top of the page.

3. At the bottom of the page, click on the LNDhub button and confirm your intention on the next page.

{{% image "/img/ln-wallets/alby-lndhub.png" /%}}

A page with a text string starting with `lndhub://` and a QR code will appear.

Import wallet:

- Into Blue:

{{% image "/img/ln-wallets/blue-import.png" /%}}

- Into Zeus:

{{% image "/img/ln-wallets/zeus-import.png" /%}}

After scanning the QR code from your computer screen, confirm the import, and you can start using web wallet from your smartphone.

## There is no single right solution

There are already many Lightning wallets, and every day new solutions emerge and existing ones are improved. Of course, there is no single right solution here, and everyone will find a different wallet to suit own needs. We hope that this guide has been helpful and that it will be easier for you to choose a wallet to your liking. If you still have questions or want to suggest some edits, you can do it via [GitHub](/en/github), leave a comment below or [contact us](/en/feedback).

[^1]: The wallet does not provide onchain functionality. You will not be able to manage onchain funds, but only receive and send payments from/to onchain addresses.

[^2]: Alby offers both custodial and non-custodial storage options. Use of the custodial version is invite-only, which can be received by filling out [this form](https://form.jotform.com/233515737022350?ref=blog.getalby.com).

[^3]: Lightning addresses in Zeus work through an optional add-on, which makes it painfully inconvenient to use. Nevertheless, this is the first steps towards LN addresses on non-custodial mobile wallets, and we will follow the further development of this trend.