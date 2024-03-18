---
title: "Starting with Mutiny Wallet"
h1: "Starting with Mutiny Wallet"
cover: /img/mutiny/01.png
tags: ["bitcoin", "hodl", "private keys", "security", "mobile wallet", "lightning"]
description: ""
url: mutiny
date: 2023-03-02
bookFlatSection: false
bookToc: true
weight: 8
---

Recently, I listened to an episode of [SLP551](https://fountain.fm/episode/JLUwVlKLRjkUpbffvQEC) featuring a discussion between [@stephanlivera](https://stacker.news/stephanlivera) and [@benthecarman](https://stacker.news/benthecarman) about Mutiny Wallet. Ben illustrated the straightforward process of getting started with Mutiny — merely sending a link connects you directly to the [Lightning Network](/en/what-is-lightning-network). I've been curious about Mutiny for a while now, so it's about time I checked it out for myself. Let’s dive in and see what it’s all about.

{{< hint btc >}}
This article by [@runningbitcoin](https://stacker.news/runningbitcoin) was published on [stacker.news](https://stacker.news/items/467711/r/Tony) website.

[Contribute](/contribute/).
{{< /hint>}}

## Features of Mutiny 🔥

- Mutiny is an open source lightning mobile wallet
- Self-custodial [^1]
- Self-hostable [^2] [^3] [^4]
- Web app running in the browser
- Also available on [iOS and Google Play](https://blog.mutinywallet.com/mutiny-wallet-android-and-ios/) [^5] or [.apk](https://github.com/MutinyWallet/mutiny-web/releases)
- Built in Lightning Service Provider (LSP) [Voltage](https://voltage.cloud)
- Nostr integration
- Nostr Wallet Auth
- Mutiny Gifts (easy way to onboard new users)
- Federations

## Getting Started with Mutiny Wallet 🚀

To begin, we can first visit the Website [mutinywallet.com](https://www.mutinywallet.com/). Here, we have the option to use Mutiny directly [in the browser](https://app.mutinywallet.com/) or to download the app from the [App Store](https://apps.apple.com/us/app/mutiny-wallet/id6471030760) or [Google Play Store](https://play.google.com/store/apps/details?id=com.mutinywallet.mutinywallet).

For those who prefer not to rely on the App Store or Google Play Store, Mutiny Wallet can also be accessed directly through the browser at [app.mutinywallet.com](https://stacker.news/items/app.mutinywallet.com). As a Progressive Web App (PWA), you can easily add it to your home screen for quick access: on iPhone, tap on `Share` then `Add to Home Screen`; on Android, tap the `3 dots ⋮` in the top right corner followed by `Install app`. This process enables you to use Mutiny Wallet as a PWA, just like any other app, directly from your main screen.

{{% image "/img/mutiny/02.png" /%}}

## Settings ⚙️

Tapping on the `Wheel` icon in the top right corner takes us to the settings. Let's explore some of these settings to uncover what they offer.

{{% image "/img/mutiny/03.png" /%}}

### A - Lightning Channels ⚡

In this section we are able to see how much channels we have, what our Inbound- and Outbound Liquidity levels are. Additionally there is a reserve balance. The reserve balance is the minimum amount of Bitcoin to maintain in the channel to ensure security and cover transaction fees for channel closure [^6].

{{% image "/img/mutiny/04.png" /%}}

### B - Backup 💾

Tapping on `Backup` takes us to the next page where we will be able to backup our private seed. Here `Tap to Reveal Seed words`. Write down your 12 words. Keep them safe. Do not share them with anybody.

> Not your key, not your coins

Some additional comments by Mutiny:

> Remember to back up your seed phrase! This is the only way you can redeem your funds, and if you delete the app or your browser storage cleared, you will not be able to access your funds without it. We will be unable to assist you either. Mutiny Wallet is a self-custodial wallet. Only you can access your funds [^7].

When you're finished tick the boxes and tap `I wrote down the words`

{{% image "/img/mutiny/05.png" /%}}

### Encrypt your seed words 🔒

Additionally, you can add an extra layer of security to your seed phrase by setting up an password. This ensures that even if someone gains access to your phone, your funds remain secure. Click `Encrypt` to apply this extra protection, or `Skip` if you want to proceed to the next step without it.

{{% image "/img/mutiny/06.png" /%}}

### C - Restore 🔄

Restore option is available via 12 word seed phrase.

> You can restore an existing Mutiny Wallet from your 12 words seed phrase. This will replace your existing wallet, so make sure you know what you're doing! Do not use multiple browsers at the same time.

> This option ... will restore full access to your lightning and on-chain funds. However, any other metadata will be lost. Metadata includes payment history, wallet connections, etc.[^5]

{{% image "/img/mutiny/07.png" /%}}

There is also the option to transferring data between devices, including exporting a State File. This allows for restore all wallet data completely, as outlined [here](https://blog.mutinywallet.com/migrate-mutiny-wallet-to-the-native-apps/#transferring-data).

### D - Servers 🖥️

For the tech-savvy, taking Mutiny into your own hands by running it on your infrastructure is a solid option. There are some resources available to guide you through this process. A good place to begin is by visiting [Github/mutiny-deploy](https://github.com/MutinyWallet/mutiny-deploy) and for a more in-depth guide on cloud setup, the [Setting up Mutiny in the cloud](https://github.com/MutinyWallet/mutiny-deploy/blob/master/docs/setup-docs.md).

{{% image "/img/mutiny/08.png" /%}}

## Receive Bitcoin 🔽

To begin, select `Receive` from the main screen. Enter the desired amount you wish to receive. Note that a setup fee will be deducted to initiate the lightning channel. By tapping on `Why`, you can gain insights into liquidity. Mutiny employs Voltage, a built-in LSP, in the background to streamline the process. This way you dont have to establish a channel, the LSP will do that for you. Additionally, you can label your transaction by filling in the `What is this for?` field. Once completed, click on `Continue` to proceed.

{{% image "/img/mutiny/09.png" /%}}

This process creates a QR code in a `unified format`, ready for payment. It includes information on the setup fee necessary to initiate the lightning channel if the transaction is executed through lightning. In this example, the setup fee was `6,545 SATS`. By adding the Phoenix LN fee of `404 SATS`, the aggregate amount required to open the channel was `6,949 SATS`.

{{% image "/img/mutiny/10.png" /%}}

`Choose format` will display the various payment formats available. The `unified` option allows the sender to choose the preferred payment method. Additionally, users can select either a `Lightning invoice` or `Bitcoin address` to receive Bitcoin.

{{% image "/img/mutiny/11.png" /%}}

When it comes to paying the invoice using Phoenix, the unified QR code enables both lightning and on-chain Bitcoin as viable payment options.

{{% image "/img/mutiny/12.png" /%}}

## Sending Bitcoin 🔼

Sending Bitcoin is also a straightforward. By configuring your `NOSTR NPUB` in the settings, you can directly send Bitcoin to your NOSTR contacts. Personally I really like this feature. Additionally there are also the options to send Bitcoin using an on-chain address or a lightning invoice.

{{% image "/img/mutiny/13.png" /%}}

Specify the `amount` you'd like to send, include a label for easy tracking of your transactions, and tap `Confirm Send`.

{{% image "/img/mutiny/14.png" /%}}

The SATS will magically fly into your chosen destination, truly magic internet money. ✨

{{% image "/img/mutiny/15.png" /%}}

## Nostr Wallet Auth 🔗

Nostr Wallet Auth (NWA) is an open source protocol ([NIP-67](https://github.com/nostr-protocol/nips/pull/851)) iteration of the Nostr Wallet Connect and simplifies wallet connections to other external services by offering a streamlined authentication process to request payments from your wallet.

To begin, navigate to `Settings` and, within the `Experiments` section, select `Wallet Connections`. Then, by choosing `Add Connection`, you're prompted to provide a name for the connection. Additionally, you have the ability to establish a budget by enabling `Auto Approve`, allowing you to determine how frequently your budget resets — be it Daily, Weekly, Monthly, or Yearly.

{{% image "/img/mutiny/16.png" /%}}

This generates a code that can be scanned or copied to establish the connection, for instance, with the stacker.news account.

{{% image "/img/mutiny/17.png" /%}}

On stacker.news, navigate to `wallets` and select `attach wallets`, then choose `NWC`. Paste the code here, and the newly connected Mutiny Wallet becomes the designated payment method. (ℹ️ _SN prioritizes spending from your custodial balance. If there are no funds in your wallet, it switches to your attached wallet_). The green dot will indicate that everything is set up. From this point on, zaps will deduct funds from the attached wallet when the balance is empty.

{{% image "/img/mutiny/18.png" /%}}

Back in Mutiny, after a day filled with zapping, we can easily review the total amount spent throughout the day and check what remains from the set budged.

{{% image "/img/mutiny/19.png" /%}}

## Mutiny Gifts 🎁

Mutiny Gifts was [announced in Oct 2023](https://blog.mutinywallet.com/mutiny-gifts/) and makes it easy to get new users started by just showing them a QR code. When they scan the QR code, it opens Mutiny Wallet on the web, so they can get their Bitcoin. If they don't already have a wallet, it will automatically make one for them in the background and set up a lightning channel after they redeem the Bitcoin.

Mutiny Gifts is a feature for `Mutiny+` users.

> Paying for Mutiny+ helps support ongoing development and unlocks early access to new features and premium functionality.

If you want to support the Mutiny team and get early access to new features consider joining `Mutiny+` for 16.000 SATS a month.

{{% image "/img/mutiny/20.png" /%}}

## Federations 🤝

End of last year, [Mutiny announced](https://archive.ph/K4Prm) their integration of the `fedimint protocol` for managing federated custodian funds.

> The way we've gone about the integration is to seamlessly smooth over the edges that exist in self-custodial Lightning. Our hybrid approach will use a configured Federation when needed. Otherwise, it uses self-custodial Lightning if it exists for the user. This helps things like channel reserves, channel minimums, high chain fees to get started, etc. You may add a Federation alongside your existing wallet or start with one without needing to open channels or pay on-chain costs. We recommend keeping the value low since this is a very early release, and there are some known features that we still need to develop.

Unfortunately, I haven't been able to test this feature yet, as I have not come across any Federation invite codes.

{{% image "/img/mutiny/21.png" /%}}

## Coming soon 🔜

As we gradually conclude, let's look ahead. What's in the pipeline?

> `Coinjoin`: Earn yield by participating in collaborative transaction, powered by Lightning Vortex.

> `Synthetic USD`: Hold self-custodial dollar denominated value, powered by DLCs.

The upcoming features seem interesting, I'm curious to see what they look like once implemented.

{{% image "/img/mutiny/22.png" /%}}

## Conclusion 🎯

This marks the end of my review on the Mutiny wallet. For me it was interesting to explore the features this wallet is offering and learned a lot in the process. The ability to use it without the conventional app marketplaces is a significant advantage, especially considering past challenges some wallets have faced with [approvals](https://stacker.news/items/193044). Things like NOSTR integration, NWA, and federations add even more value. I’ve really enjoyed getting to know this wallet. Please let me know if there is anything I missed and I'm eager to hear how others have found using Mutiny.

## Mutiny Resources 📚

[Website](https://www.mutinywallet.com/) | [Web App](https://app.mutinywallet.com/) | [Github](https://github.com/MutinyWallet) | [Blog](https://blog.mutinywallet.com/) | [Discord](https://discord.com/invite/x3njeHUjVd) | [Matrix](https://matrix.to/?ref=blog.mutinywallet.com#/#mutiny-community:lightninghackers.com)

[^1]: Discussion here [#453045](https://stacker.news/items/453045) and here [#453267](https://stacker.news/items/453267)
[^2]: [Self-hosting fixes this, Oct 2, 2023](https://blog.mutinywallet.com/self-hosting-mutiny/)
[^3]: [mutiny-deploy](https://github.com/MutinyWallet/mutiny-deploy/)
[^4]: [Setting up Mutiny in the cloud](https://github.com/MutinyWallet/mutiny-deploy/blob/master/docs/setup-docs.md)
[^5]: [How to Migrate Mutiny Wallet to the Native Apps, Nov 22, 2023](https://blog.mutinywallet.com/migrate-mutiny-wallet-to-the-native-apps/)
[^6]: [https://bitcoin.design/guide/how-it-works/liquidity/#channel-reserve](https://bitcoin.design/guide/how-it-works/liquidity/#channel-reserve)
[^7]: [Blog: Mutiny Wallet FAQ, Nov 25, 2023](https://blog.mutinywallet.com/mutiny-wallet-faq/)