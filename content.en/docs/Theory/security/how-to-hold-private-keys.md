---
title: "Bitcoin Wallets: How, Why and When to Hold Your Own Private Keys"
h1: "Bitcoin Wallets: How, Why and When to Hold Your Own Private Keys"
cover: /img/197.png
tags: ["bitcoin", "hold", "keys", "security", "wallets"]
description: ""
url: how-to-hold-private-keys
bookToc: true
bookFlatSection: false
date: 2022-06-03
weight: 1
---

Not Your Keys, Not Your Bitcoin.

{{< hint btc >}}
This article by Brandon Quittem was published on [swanbitcoin.com](https://www.swanbitcoin.com/bitcoin-wallets-not-your-keys-not-your-bitcoin/) website.

[Contribute](/contribute/).
{{< /hint >}}

Alright so you’ve acquired some Bitcoin, now what’s the best way to store it? Here we’ll take you through the process of finding the right Bitcoin wallet for you.

Although it seems like a straight­for­ward question, there is a surprising amount of nuance to consider. _How much Bitcoin do you have? How often do you plan to spend it? Are you confi­dent your keys are more secure with you than with a regulated custo­di­an’s cold storage?_ Answering these questions will help deter­mine the right solution for you. 

Bitcoin is a bearer asset, meaning you can hold the keys to your bitcoin yourself. When you hold your own Bitcoin keys you are in direct control of your money. It is not entrusted to any third party, like a bank. You should hold your own keys once you deter­mine that the risk of holding your keys person­ally is lower than the risk of a custo­dian losing them. Making that decision relies mostly on your under­standing of how and why to hold your own Bitcoin keys. In this article, we’ll help you under­stand both. 

In this article we’re going to explore:

- “Not your keys, not your Bitcoin” 
- Security vs convenience 
- Overview of Bitcoin wallet types
- Multi signa­ture setups
- Our recom­men­da­tion for selecting the best wallet for YOU

Let’s begin.

# Bitcoin is Bearer Asset

In cryptog­raphy, a public key is used to encrypt messages and a private key is used to decrypt them. If someone wanted to send you an encrypted message, they would encrypt it with your public key. Your private key is the only way to decrypt that message, so as long as you are the only person who holds the private key, you are the only person who can read the message. 

Bitcoin uses public/private key cryptog­raphy to secure trans­ac­tions. A private key is created when you make a Bitcoin wallet. The wallet creates public keys that are hashed and used as addresses for receiving Bitcoin. The private key is required to prove the owner­ship of the Bitcoin stored at that address so it can be spent. 

If you person­ally don’t control the private keys associ­ated with your Bitcoin, then you don’t actually hold your own Bitcoin. In other words, if an exchange or a bank is holding your Bitcoin on your behalf you are not in direct control of your Bitcoin. You are outsourcing the security of your Bitcoin to another party. 

To take full advan­tage of the unique proper­ties of Bitcoin as a money you need to hold your own private keys. As Bitcoiners often say “not your keys, not your Bitcoin.” It is empow­ering to be able to hold your Bitcoin in your custody so that it cannot be seized or confis­cated by banks or the hackers that target them. But choosing to hold your own keys does come with the respon­si­bility for the security of your Bitcoin. 

Our goal is to help you become comfort­able with the prospect of holding your own keys. Until then the Bitcoin in your Swan account is held by our banking partner, Prime Trust, under state of the art security practices.

Now, we’ll take a look at what options you have for taking control of your own Bitcoin keys.

{{% image "/img/198-en.jpg" /%}}

# Bitcoin Custody Tradeoff: Security vs Convenience

The main tradeoff to consider when storing your Bitcoin is between security and conve­nience. Obviously both security and conve­nience are desir­able traits when storing your Bitcoin, however they are directly opposed to each other.  
  
Where do you sit on the security vs. conve­nience spectrum?

Ask yourself these questions to gain a better feel for what storage method makes the most sense for you:

- **Total value** — are you storing on the order of 0.1%, 1% or 10+% of your net worth in Bitcoin? The answer would neces­si­tate very different methods of storing your Bitcoin. Obviously you would be willing to suffer more incon­ve­nience if it meant protecting 50% of your net worth. 
- **Timeframe**/**Acces­si­bility -** When and how often do you need to spend your Bitcoin? Is this more of a checking account, medium term savings account, or is your Bitcoin more similar to a long term retire­ment account?

**Word to the wise:** don’t make your custody setup so compli­cated that even you forget how to access the funds. Bitcoiners tell cautionary tales of people losing Bitcoin due to overcom­pli­cated custody setups resulting in the owner forget­ting how to access their coins.

# Wallet Overview: Exploring Paper, Hardware, Mobile, Desktop, and Multisig Bitcoin Wallets

Now that you’ve decided to acquire some Bitcoin (smart move) it’s time to decide where to store your Bitcoin. This can feel overwhelming when you’re getting started. In this section we’ll give you a quick overview of your options. Like most things in life, it’s all about tradeoffs.

## Paper Bitcoin Wallets

**What:** Users print private keys and Bitcoin addresses onto a piece of paper.

**Pros:** Private keys never stored on the internet. Suitable for long term storage.

**Cons:** Hard to backup, if you lose the paper you lost your Bitcoin. Users should laminate and store in a fire resis­tant place. Need to import into a software or hardware wallet to easily spend the coins.

## Hardware Bitcoin Wallets

**What:** Users store private keys on a purpose-built piece of hardware.

**Pros:** Private keys never touch the internet which reduces the risk of losing them. Suitable for long-term storage.  If you lose your hardware wallet, you can use the backup seed phrase to restore your wallet.

**Cons:** Users must secure a seed phrase backup, which requires a thoughtful strategy on how to protect it. It’s recom­mended to write down your seed phrase on metal and store backups in multiple locations. If your hardware wallet is stolen, your funds are at risk of being hacked. Note: protecting seed phrase backups is a standard practice for wallets where the user controls the private keys.

**Examples:** [Ledger](https://www.ledger.com/), [Trezor](https://trezor.io/), [Coldcard](https://coldcardwallet.com/), & [BitBox](https://shiftcrypto.ch/)

## Mobile Bitcoin Wallets

**What:** Users store private keys on a mobile device.

**Pros:** Simple to use, good for begin­ners, works for small amounts, conve­nient for spending even though most people rarely spend their Bitcoin right now (too much upside to holding for the long term.)

**Cons:** Least secure option as private keys are on a device connected to the internet. If an attacker gains physical access to your phone, funds can be sent to their own wallets. Not good for long term storage.

**Examples:** [Muun](https://muun.com/), [Samourai](https://samouraiwallet.com/) (Android only)

## Desktop Bitcoin Wallets

**What:** Users store private keys on their desktop computer

**Pros:** Good UX, Conve­nient for spending even though most people rarely spend their Bitcoin right now (too much upside)

**Cons:** Not very secure as computers are connected to the internet and vulner­able to attacks. Not good for long-term storage.

**Examples:** [Bitcoin Core](https://bitcoin.org/en/bitcoin-core/) and [Electrum](https://electrum.org/#home) (advanced), [Specter](https://specter.solutions/) (inter­me­diate), [Block­stream Green](https://blockstream.com/green/) (beginner).

## Multisignature Bitcoin Wallets

**What:** User stores private keys in a special wallet that requires multiple private keys to sign before your funds can be moved. For example, in a “2‑of‑3” multisig wallet a user needs any two out of three private keys to send funds.

**Pros:** One of the most secure ways to store your Bitcoin, reduces the effec­tive­ness of physical attacks, suitable for long-term storage.

**Cons:** Hard to set up on your own, but several services exist to make it easier. Not conve­nient for spending, but that’s kind of the point.

**Examples:** [Unchained Capital’s Vault](https://unchained-capital.com/vaults/) (2‑of‑3), [Casa’s Keymaster](https://keys.casa/keymaster/) (2‑of‑3 and 3‑of‑5), [Specter](https://specter.solutions/) (DIY), [Electrum](https://electrum.org/#home) (DIY).

{{% image "/img/200.png" /%}}

# Hot vs Cold Bitcoin Wallets: What’s the difference?

Hot wallets are connected to the internet. This means your keys are easier to access than they are on a hardware wallet, however this also means your funds are more vulner­able to hackers. Hot wallets are only recom­mended for small amounts.

Cold wallets are NOT connected to the internet. This means your funds are harder to access. Cold wallets are less conve­nient for users but much harder for hackers to gain access to your funds. Cold wallets should be consid­ered the only option for long term storage.

## Bitcoin Wallet Backup Seeds

Most wallets require users to write down a “backup seed phrase.” This is a safety precau­tion in case you lose access to your private keys / wallet. This also means users must be very careful with their backups as they contain all the neces­sary infor­ma­tion to access your funds. Treat your backups as securely as you would a pile of gold.

### Seedless Bitcoin Wallets

Another way to store your Bitcoin is with a seedless wallet. These are designed for multi-signa­ture accounts where users don’t create backup seeds and instead rely on a service for backups. Casa is leading the charge with seedless wallets with their Keymaster multisig­na­ture product.

{{% image "/img/201.png" /%}}

## Bitcoin Multisignature: How it Works

Instead of requiring a single private key signa­ture to move your funds, multisig wallets require _multiple signa­tures_ to move your funds. There are many ways to archi­tect a multisig wallet, but let’s use a 2‑of‑3 for our example. 

As a user, this means you have 3 total private keys corre­sponding to a single Bitcoin wallet. In order to move your funds, you need at least 2 of your private keys to sign a trans­ac­tion. Most users will physi­cally separate the locations of each key to further minimize risks. Just don’t get too creative or you might fool yourself and lose your funds (it’s happened many times). 

As mentioned above, here are a few examples of Multisig­na­ture wallets

- Block­steam Green Wallet (2‑of‑2)
- Casa’s Keymaster (2‑of‑3 and 3‑of‑5)
- Unchained Capital’s Vault (2‑of‑3)
- Specter (Can design own setup)

### Benefits of Multisig

Multisig offers some room for error. If you have only a single private key and lose it, your funds are lost forever. However if you have a 2‑of‑3 setup, you can afford to lose one private key and still access your funds. 

Multisig also mitigates physical attacks. Let’s say you were physi­cally threat­ened and asked to give up your precious Bitcoin. If you had a normal wallet (not multisig) then you could easily transfer your Bitcoin to the attacker. However, if you had a multisig setup, with one of your keys at your house and the other keys in a separate location (ex: your office and a safety deposit box). This geographic separa­tion of keys greatly reduces the incen­tive for a physical attacker to target your Bitcoin.

## Why does my Bitcoin wallet keep changing my address?

Each set of private keys is capable of gener­ating billions of public keys. These public keys are then trans­formed (through a mathe­mat­ical process called hashing) to produce public addresses. 

Every single one of those addresses can receive Bitcoin. So each set of private keys you own is capable of producing its own unique, massive set of public addresses that you, and you alone, own. Anyone can send Bitcoin to those public addresses, but only the holder of the private keys can spend Bitcoin from those addresses.

Many people like to analo­gize private keys, public addresses, and Bitcoin wallets to email addresses. The private keys are your password, the public address is your email address, and the wallet is the email client you use (Gmail, Proton­mail, yahoo etc…). Although useful, this analogy is slightly misleading because with Bitcoin each password (private key) that you own gives you access to billions of poten­tial email addresses (public addresses) to send Bitcoin from and receive Bitcoin to.  
  
Don’t be concerned if your wallet consis­tently gener­ates new Bitcoin addresses. That’s actually one of its features! Wallets gener­ating and using new public addresses helps protect your privacy from people snooping on the public Bitcoin blockchain. Just remember that so long as you still hold the private keys to your wallet, you alone still own the present and future Bitcoin sent to any public address that your wallet gener­ated. Just make sure to keep your Bitcoin private keys safe, secure, and private.

## Our Recommendation: Let Percentage of Net Worth Guide your Bitcoin Wallet Choice 

The easiest way to approach Bitcoin custody is to focus on “how much money is at stake.” In other words, what percentage of your net worth is being secured? Here’s our break­down, but of course each person’s situa­tion is unique. Use this as a guide­line rather than absolute truth.

---

**Small amounts (~0.1% net worth) — Use a Mobile Bitcoin Wallet**

- [Muun](https://muun.com/) — It’s probably the easiest bitcoin wallet for iPhone and Android. It seemlessly integrates Bitcoin and Lightning.
- [Samourai](https://samouraiwallet.com/) — Best privacy-focused wallet (only for Android)

**Medium Amounts (~1% net worth) — Use a Hardware Bitcoin Wallet**

- Trezor (Begin­ners)
- Coldcard (Advanced users)

**Large amounts (more than 10%+ net worth) — Use a Multisig Bitcoin Wallet**

- [Casa Keymaster Multisig](https://keys.casa/keymaster) — easy to use inter­face, can choose from 2‑of‑3 and 3‑of‑5 setups. They have a self recovery tool, however I have not person­ally used this and would like to do more research before a whole­sale recommendation. 
- [Unchained Capital’s Multisig](https://unchained-capital.com/) — easy to use inter­face, 2‑of‑3 setup, can access finan­cial services based on your BTC in deposit. 
- Self Hosted Multisig using [Specter](https://specter.solutions/) — This requires more technical profi­ciency compared to Unchained and Casa however you don’t sacri­fice any privacy. 

**Protip:** Some users choose to diver­sify their long-term storage. They may store funds in multiple wallets. For example, store a third of their Bitcoin with a Specter multisig, another third with Unchained Capital Vault, and a third on a Coldcard.

# Let’s Wrap Up

That’s our summary of the Bitcoin self-custody landscape. If you’re still pretty intim­i­dated, no worries. We recom­mend taking control of your own Bitcoin keys only once you are comfort­able with the logis­tics. But we do encourage you to continue to consider the unique oppor­tu­nity Bitcoin provides: the ability to be in absolute control of your own wealth.

