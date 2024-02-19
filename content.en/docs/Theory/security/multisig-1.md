---
title: "Multisig Part I: Why Multisig?"
h1: "Multisig Series Part I: Why Multisig?"
cover: /img/msig-683.png
description: ""
url: multisig-1
aliases: ['/theory-security-multisig-1']
date: 2020-02-20
bookFlatSection: false
weight: 10
---

This is the first of a series of articles that will describe the details of how multisignature functions with bitcoin. We’ve written extensively about [bitcoin economics](/gradually-then-suddenly), [data science](https://unchained.com/blog/category/data-science/), and [astronomy](https://unchained.com/blog/category/bitcoin-astronomy/), and we feel that it is the right time to explore the deeper technical details of multisignature to help users protect their bitcoin as we approach the 3rd halvening era. We expect that bitcoin will become much more valuable in the future, and friends should always help friends better secure bitcoin.

{{< hint btc >}}
This article was published in [Unchained blog](https://unchained.com/blog/why-multisig).

[Contribute](/contribute/).
{{< /hint >}}

## Self-Custody vs Third Party

Bitcoin gives individuals and businesses the ability to take on a new and important responsibility: the option to unilaterally control their own money. True bitcoin ownership requires users to control their own private keys, which are the exclusive tools needed to authorize transferring funds. Anything less than holding private keys means that money is ultimately controlled by someone else, in many ways failing to preserve bitcoin’s _raison d’etre_. That said, bitcoin is a journey, and most people begin that journey by buying bitcoin and storing bitcoin on an exchange.

{{% image "/img/msig-684-en.png" %}}
_These numbers are what we conservatively estimate to be the current bitcoin in self-custody. Sources: [Coinmetrics](https://coinmetrics.substack.com/p/coin-metrics-state-of-the-network-41d), [Coinshares](https://medium.com/coinshares/bitcoin-has-a-branding-problem-its-evolution-not-revolution-aa34fe5facfb), [HODL Waves](https://unchained.com/hodlwaves/)._  
{{% /image %}}

When done correctly, self-custody using a hardware wallet is an improvement in security over storing bitcoin on an exchange. Physically holding the keys to bitcoin ensures uncensorable control over personal wealth, eliminating many of the risks associated with third-party custody. Custody with an exchange requires users to secure bitcoin using account-level controls, which ultimately relies on weaker forms of authentication than cryptographic private keys and requires nearly the same amount of responsibility. Separately, large pools of bitcoin held by centralized exchanges create high value targets and honey pots for malicious attackers (Coinbase claims to hold over 1 million bitcoin!). Self-custody protects against exchange hacks, and prevents funds from potentially becoming locked if a custodian goes out of business (or merely restricts access to an account).

That said, self-custody requires more responsibility. Self-custody can potentially create greater risk if an individual or business is not well educated on operational security and key management best practices. Self-custody requires security around many different secrets, each representing a potential critical point of failure:

- Hardware wallet device which secures private key
- Back up seed required to recover access to funds if a hardware device is ever lost
- Passphrases (if used) become a required piece of information to recover funds in addition to a backup recovery.
- PIN which secures access to a hardware device

With great power comes great responsibility. Any number of unintentional or malicious attack vectors exist with self-custody solutions, but the risks vary depending on approach. Proper education solves many of these risks, which is why self-custody presents ultimately greater security compared to third-party custody, but no amount of education can solve for the risk presented by a single point of failure.

## Self-Custody: Single signature vs multisignature

Within self-custody, there are two different approaches, one that relies on protecting a single key and one that relies on multiple keys. Most individuals that self-custody rely on single signature set-ups (one key is needed to move funds). In this scenario, the key and back-up (as well as a passphrase if used) each represent a single point of failure, which creates unavoidable risk.

- What happens if a hardware device is lost and a malicious actor recovers it?
- What if the hardware device is lost and a backup recovery seed either does not exist or cannot be accessed?
- Has a backup recovery seed been accessed unbeknownst to a user?
- What if a user forgets a passphrase?
- Can a loved one figure out the security system if anything happens to the holder?

In single signature self-custody, critical failures can occur at any point in time, with a user often unaware until it is too late. For some, this constant active security is an acceptable trade-off. Relative to other self-custody options, transactions are easier to facilitate and when preserving anonymity, fewer secrets need to be secured. For others, and often those securing a material amount of wealth, single points of failure present an unacceptable level of risk. For these people, multisignature set-ups offer a solution.

## Why Multisig?

The principal benefit of multisig is that it creates added redundancy in key management. While single signature addresses require only a single key to move bitcoin, multisignature addresses require multiple keys, similar to how multiple keys must be used simultaneously to open this door.

{{% image "/img/msig-687.png" %}}
_[Tweet link](https://twitter.com/unchainedcom/status/1154417352278204418)._
{{% /image %}}

Multisignature addresses allow individuals and businesses to set up customized key and lock schemes to fit their needs, such as 2-of-3 (2 out of 3 keys are needed to move funds), 3-of-5, or any combination of M-of-N. By creating an M-of-N in which M is greater than one, multiple keys are required to facilitate any valid bitcoin transaction and no individual key represents a single point of failure. Separately, a 2-of-3 address allows users to include a third-party in a quorum, whether a company such as Unchained Capital or a family member, while still controlling a majority of the keys needed to move funds. 

Within a multisignature setup, losing a key means that your funds are not immediately at risk and an individual or business can include trusted partners without surrendering sovereign control. In all scenarios, additional private key(s) and access to additional non-private key meta-data (combination of redeem scripts, extended public keys or public keys) would both be required to facilitate any transaction. These requirements increase the security of your bitcoin, but also increases the complexity of spending and managing your information.

We’re writing this series to better educate bitcoiners on how multisig works, so they can better secure their wealth.

The rest of this series will include articles from different Unchained Capital employees, and will cover the following topics:

- Visualizing multisig addresses, where are your bitcoin actually?
- How multisig addresses are created and derived, including change addresses
- How spending from a multisig address works, including the information required
- The function of xpubs, public keys, redeem scripts and BIP32 paths
- Confirming control and ownership of multisig addresses
- Managing state in multisig
- Differences between multisig and collaborative custody, including privacy trade-offs
- and more
