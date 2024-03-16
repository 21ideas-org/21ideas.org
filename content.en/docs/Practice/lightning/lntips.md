---
title: "Telegram bot @LightningTipBot"
h1: "Telegram bot @LightningTipBot supporting Nostr and the Lightning Network"
cover: /img/lnt-694.png
description: "Lightning Tip Bot is a friendly bot that will take your interaction with Telegram, the Lightning Network and the Nostr protocol to the next level."
url: lntips
date: 2023-03-03
bookFlatSection: false
weight: 5
---

Lightning Tip Bot is a friendly bot that will take your interaction with Telegram, the Lightning Network and the Nostr protocol to the next level.

{{< hint btc >}}
The guide written by [Tony⚡️](https://snort.social/p/npub10awzknjg5r5lajnr53438ndcyjylgqsrnrtq5grs495v42qc6awsj45ys7).

[Contribute](/contribute/).
{{< /hint >}}

Originally developed as a Telegram bot with Lightning Network support, LightningTipBot (LTB) got a new round of development with the growing popularity of the Nostr protocol. In addition to the LN payments that many people are already familiar with, the bot also supports the creation of keychain for Nostr account and Zaps. Because of this, it can be a great bridge for financial communication between different social apps.

## Purpose of Lightning Tip Bot

LTB allows Telegram users to send and receive sats without leaving the messenger. In addition to simple transfers, the bot supports a lot of interesting features. I suggest to launch the bot and look at the most useful of them.

To get started, simply follow [this link](https://t.me/LightningTipBot) or type @LightningTipBot directly into Telegram search. Start a conversation with the bot by pressing `/start`.

The bot will communicate with you in the default language of your Telegram app.

## Main features / commands

### LN address

Every Telegram user automatically gets a Lightning address - a format familiar to people who receiving sats in the Lightning Network. Your address consists of your Telegram username + @ln.tips.

{{< hint info >}}
Lightning addresses look exactly like familiar email addresses.

You can take a look at my address from LTB for an example: _tony_lightning@lntips_
{{< /hint >}}

You can check your address, as well as get its QR code, by clicking the **App** button on the bot's control panel.

{{% image "/img/lnt-695.png" /%}}

You can learn more about Lightning addresses from [this article](/en/how-lightning-address-works).

### Sending sats to another Telegram user

The only condition is that the recipient must initiate a conversation with the bot prior. If the recipient has not yet interacted with the bot, you can ask them to do so. Sending can be done by

- from the bot interaction window using the command:

```
/send <amount> @<username>
```

Example:

```
/send 21000 @tony_lightning
```

- right in the chat with the recipient:

```
@LightningTipBot /send 21000
```

- you can also send sats to the LN address:

```
/send 21000 21ideas@getalby.com
```

### Making payment on LN invoices

Insert Lightning invoice into the chat with the bot to pay:

```
/pay <lnbc…>
```

### Using a bot in group chat

LTB will bring the communication of Telegram chat participants to a new level. Add a bot as a chat administrator and chat participants will be able to:

- Send a couple sats to say thanks for a helpful comment/post by simply replying to the post with the following command:

```
/tip <amount> [<note>] 
```

{{% image "/img/lnt-696.jpeg" /%}}

- Giving out sats
- Create piggy banks
- Charge sats for entering the chat

{{< hint info >}}
If you don't want to give the bot admin privileges, you can still use the same commands by simply adding @LightningTipBot to the beginning of each command.
{{< /hint >}}

### Anonymous LN address and LNURL

By `/advanced` command the bot provides you with an anonymous LN address and LNURL in case you don't want to provide data that can be linked to your Telegram account:

{{% image "/img/lnt-697.png" /%}}

### Other features

The helper can be called with the commands `/help` ([list of simple commands](/en/lntips/#list-of-simple-commands-help)👇) and `/advanced` ([list of advanced commands](/en/lntips/#list-of-advanced-commands-advanced)👇).

## Connecting LN wallets

You can also connect mobile lightning wallets to monitor your LTB account. Currently, Blue and Zeus wallets are supported. You can export LTB by entering the `/link` command and following the instructions.

{{% image "/img/lnt-698.jpeg" %}}
_Screenshot of LTB wallet imported into Blue Wallet_
{{% /image %}}

## Nostr support

You can enter [your LN address](/en/lntips/#ln-address) from the bot into your favorite Nostr client and receive zaps and payments directly to your Telegram wallet (don't forget about [the ability to receive alerts and manage the bot from other wallets](/en/lntips/#connecting-ln-wallets)). Moreover, thanks to NIP-57 support, you will also receive comments on every financial interaction with Nostr:

{{% image "/img/lnt-699.png" /%}}

You can also enter your Nostr public key with the command `/nostr add <your public key>` to get NIP-05 verification. Then simply enter your LTB address in the NIP-05 field in your Nostr client settings:

{{% image "/img/lnt-700.png" /%}}

## Commands

### List of simple commands (`/help`):

```
/tip 🏅 Reply to a message to tip it: /tip <amount> [<memo>]

/balance 👑 Check your balance: /balance

/send 💸 Send funds to a user: /send <amount> <@user> or <user@domain.com> [<memo>]

/invoice ⚡️ Receive over Lightning: /invoice <amount> [<memo>]

/pay ⚡️ Pay over Lightning: /pay <invoice>

/donate ❤️ Donate to the project: /donate <amount>

/advanced 🤖 Read the advanced help

/help 📖 Read this help
```

### List of advanced commands (`/advanced`):

```
/transactions 📊 List transactions

/link 🔗 Link your wallet to BlueWallet or Zeus

/lnurl ⚡️ Lnurl receive or pay: /lnurl or /lnurl <lnurl> [memo]

/nostr 💜 Connect to Nostr: /nostr

/faucet 🚰 Create a faucet: /faucet <capacity> <per_user>

/tipjar 🍯 Create a tipjar: /tipjar <capacity> <per_user>

/group 🎟 Group chat features: /group

/shop 🛍 Browse shops: /shop or /shop <user/shop_id>

```
