---

title: "What is a bitcoin seed phrase and how does it work?"
h1: "What is a bitcoin seed phrase and how does it work?"
cover: /img/seed/seed-en.png
description: ""
url: seed
date: 2023-01-18
bookToc: true
bookFlatSection: false
weight: 2

---

{{< hint btc >}}
This article by Stephen Hall was published in [Unchained blog](https://unchained.com/blog/what-is-a-bitcoin-seed-phrase).

[Contribute](/contribute/).
{{< /hint >}}

As we regularly cover in our [Continuing Education webinars](https://www.youtube.com/watch?v=0yflwOcix9c&list=PLUM8mrUjWoPTo2TCYb_67qOwxP_EVbGiL), there are several key terms to know about as a bitcoin user. When it comes to protecting your bitcoin, few are as important as **seed phrase**. Your seed phrase is where everything is derived from: these 12 or 24 words generate the keys that allow you to spend your funds, making it critically important that you protect this information.

If you use a singlesig wallet, your seed phrase is a single point of failure — if it’s compromised, your bitcoin is compromised. Thankfully, bitcoin multisig solutions like [Unchained vaults](https://unchained.com/vaults/) eliminate this single point of failure, so losing control of one seed phrase doesn’t compromise your funds. Seed phrases are always crucial, however, so let’s cover what they are, how they work, and how to think about them in the context of multisig and collaborative custody.

## What is a bitcoin seed phrase?

Typically, people know of a seed phrase (otherwise known as a seed backup, recovery phrase, seed words, mnemonic phrase, secret words, backup, or many other names) as the 12 or 24 words they write down as a backup when setting up a bitcoin hardware wallet. More specifically, a seed phrase is a human-readable representation of a **seed**, which is really just a long string of random digits. As a typical bitcoin user you’ll never see this string of digits, though — you’ll see the version that is far easier to write down (and memorize if need be!).

Seed phrases look like this:

{{% image "/img/seed/seed-en.png" %}}
_A seed phrase. Never put your seed phrase in a blog post, or anywhere else on the internet for that matter._
{{% /image %}}

## Where is my seed phrase?

If you’re using a software wallet, you may or may not have been prompted to physically back up a seed phrase. Different wallets and wallet types have different backup processes. If you weren’t given a seed phrase, you may wish to move your funds to reputable software wallet, like [BlueWallet](https://bluewallet.io/), that does provide hierarchical-deterministic wallets with BIP39 seed phrases so that you can externally recover your wallet according to bitcoin standards.

{{% image "/img/seed/seed-backup-en.jpg" %}}
_An example of a Trezor seed phrase backup card._
{{% /image %}}

Most proper hardware wallets make it very difficult to initialize the wallet without physically backing up a seed phrase; you should have been prompted to do so. If you lost your seed phrase for a hardware wallet, it’s best practice to generate a new seed and move your funds to an address governed by it. See the section on changing existing seed phrases below.

## How do bitcoin seed phrases work?

Seed phrases are generated any time you create a new hierarchical-deterministic bitcoin wallet, and that applies to both software wallets like Blue Wallet, and hardware wallets like Ledger, Trezor, and Coldcard. You should then secure this seed phrase for safekeeping in case you ever need to recover your wallet, at which point you would use these words for that purpose.

Technically speaking, these 24 words are a representation of a string of random digits called a **seed**, from which all the keys in your wallet are derived. The seed is used to generate your **master private key**, which generates the rest of your **private keys**. Private keys are used to generate corresponding **public keys**. And public keys can be used individually (singlesig) or in combination with other public keys (multisignature) to construct bitcoin **addresses**.

{{% image "/img/seed/seed-address-en.png" /%}}

That’s a lot of technical terms — I know. We’ll dive deeper into all these topics in the future articles.

## Should I back up and secure my seed phrases?

All of the top wallet makers, for good reason, strongly encourage users to write down their seed phrase on paper and store it for safekeeping. In all cases, seed phrases are the fail safe in case you lose access to your wallet, or in the case of hardware wallets, the device is lost or stolen, you forget a PIN, or a firmware update causes compatibility issues or catastrophic bugs.

If your seed phrases are protecting substantial wealth, it’s generally considered best practice to not just write them down on paper, but treat them like what they are — the key to your wealth. This could mean backing up your seed phrases with a fireproof metal device, keeping them in a fireproof safe, or even keeping them in a bank safe deposit box. Multisig solutions allow you to geographically distribute these critical items to eliminate single points of failure.

Whether you use a standalone singlesig hardware wallet or a multisig vault with Unchained, you should always secure your seeds.

## Where do the bitcoin seed phrase words come from?

Seed phrases generated by wallets that follow the latest bitcoin standards pull from [a list of 2,048 unique words](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt) established as part of Bitcoin Improvement Proposal 39, or BIP39. Each word represents a range of bits in that long random number that is your seed.

{{% image "/img/seed/words-en.png" %}}
_A sampling of the 2048 words used in bitcoin seed phrases._
{{% /image %}}

One interesting fact about seed phrases and BIP39 is that, given the 2048 words chosen for the list, only the first four letters really matter. There are no two words on the list that share the first four letters. When storing your seed phrase, you can get away with only writing down the first four letters.

## Is it possible for someone to guess my seed phrase?

It’s a common misconception that it would be easy to guess a seed phrase. After all, it’s just 12 words, right? It sounds like you could get at least someone’s seed phrase if you just give it enough tries. Thankfully, the reality is that, for all intents and purposes, it’s impossible to guess a seed phrase — as long as you or your device generates proper entropy, that is.

Because there are 2048 unique words in the BIP39 word list, guessing a 12-word seed phrase — which also have to be in the correct order, by the way, not just the words themselves — would mean correctly guessing a number between 1 and 5,444,517,900,000,000,000,000,000,000,000,000,000,000.

It’s hard for the human mind to comprehend how impossibly large this number is, but to put it in perspective, it’s in the same realm as the estimated number of atoms in the observable universe. It would take the world’s most powerful supercomputers uncountable lifetimes to brute force your seed phrase by simply guessing combinations of these words.

## Can I restore my seed phrase on a device from a different manufacturer?

Your seed phrase is fully interoperable across any wallet makers that implement the BIP39 standard properly. That means, by securing your seed phrases, you can eliminate your hardware wallet maker as a trusted party and a single point of failure. If anything ever goes wrong, simply restore your seed on another device made by a different company.

We covered this extensively in one of our Continuing Education webinars:

{{< youtube 7rEULgDz72s />}}

It’s worth noting here that not all hardware wallets use BIP39 for seed phrases, and even the ones that do, sometimes don’t do so properly or don’t document their backup and recovery processes. [WalletsRecovery](https://walletsrecovery.org/) is a good resource to learn more about various wallets and their external recovery practices.

The fact that seed phrases can be restored across different manufacturers is a key benefit especially in a multisig context. If one manufacturer makes a mistake that compromises your funds, or makes software changes that — even temporarily — [break self-custody solutions](https://unchained.com/blog/why-you-should-always-secure-your-seed-phrase-four-unexpected-errors/), your seed phrase can be used to recover full access to your bitcoin without depending on a party like Trezor, Ledger, or Unchained to fix any issues.

All Unchained-supported hardware wallets — Trezor, Ledger, and Coldcard — fully support the BIP39 standard and have well-documented external recovery practices. Seed phrases generated by these wallets can easily be restored across manufacturers.

## Can you change an existing seed phrase?

Yes, but you can’t “change” an existing seed phrase in the same way that you might update your password for an online account. You can change your seed phrase by generating a new one and moving your funds to an address that is governed by it.

Remember, seed phrases ultimately allow you to unlock the funds and spend them from your address. If your seed phrase is ever compromised, it’s critical to move funds to another address (one that was derived from a separate seed phrase that has not been compromised) to regain control over the funds.

## What is a seed phrase passphrase?

A seed phrase “passphrase,” otherwise known as “seed extension” or “extension word,” is a 13th or 25th word that you can specify yourself on top of the randomly-generated 12 or 24 words. These are used most commonly with singlesig wallets as an easy way to add an additional layer of security, with the key caveat that if you forget or lose your passphrase, you no longer hold the key to your bitcoin. These can be particularly dangerous in comparison to the protection you get from multisig because they are capitalization-specific, special character-specific, and space-specific.

This approach, as with all bitcoin security practices, has trade-offs. If you use singlesig, a passphrase can benefit your bitcoin security by requiring you to have both _something you have_ and _something you know_ to access your funds, but other approaches to eliminating single points of failure, like multisig and Unchained vaults, are a more foolproof way to eliminate the seed as a single point of failure and get the benefits of redundancy with less risk of catastrophic error.

## Confidence to always have access

Once you understand the basics of bitcoin, seed phrases are pretty straightforward. These 12 or 24 words represent your seed, and your seed, properly generated and thereafter protected, gives you the confidence that you can always restore access to your bitcoin — or in the case of multisig, access to one key in a quorum — from any wallet that supports best current practices.

In the context of singlesig without a passphrase, your seed phrase provides full access to your bitcoin. In a multisignature context like Unchained’s vaults, a seed phrase represents access to one of a number of keys required to spend your bitcoin, but does not alone give someone the ability to spend the bitcoin. Either way, it’s important to understand how to keep them safe on your bitcoin wealth management journey.