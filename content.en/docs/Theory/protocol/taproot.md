---
title: "What Is Taproot"
h1: "What Is Taproot and How Does It Benefit Bitcoin?"
cover: /img/tr-811.jpeg
description: ""
url: taproot
date: 2021-09-26
bookFlatSection: false
weight: 62
---

Taproot is an upgrade to Bitcoin which brought several new features and benefits to Bitcoin users. The Bitcoin community activated Taproot at block 709,632 on November 12th, 2021.

{{< hint btc>}}
This article was published on [river.com](https://river.com/learn/what-is-taproot/) website.

[Contribute](/contribute/).
{{</hint >}}

# Taproot, Ordinals, and Inscriptions

Since early 2023, Taproot has introduced controversy in the Bitcoin space, as developers started using it to put other forms of data on the blockchain than transaction data, such as ordinals, inscriptions, and images in the form of Non-Fungible Tokens (NFTs).

Opinions about whether this is good for the network in the long term are divided, as there are many implications. It provides fee revenue for miners, but also increases the cost for users to use the blockchain. It expands the main use of the network beyond money, but much of this expansion is gambling-related which some users are not excited to pay the cost for.

Before Taproot, it was already possible to add non-transaction data to the blockchain, but it was more difficult and costly. Making it impossible to do so would have severe implications for Bitcoin.

# What Is In the Taproot Upgrade?

The Taproot upgrade is composed of three [Bitcoin Improvement Proposals (BIPs)](https://river.com/learn/terms/b/bitcoin-improvement-proposal-bip/) which define three distinct upgrades to the Bitcoin protocol:

- Schnorr Signatures (BIP 340)
- Taproot (BIP 341)
- Tapscript (BIP 342)

Together, these three upgrades are known as the Taproot upgrade, often collectively referred to as BIP Taproot. These BIPs introduced new, more efficient, flexible, and private ways of transferring bitcoin.

## Schnorr Signatures - BIP 340

As part of the Taproot upgrade, BIP 340 introduces Schnorr signatures for use in Bitcoin. Schnorr signatures bring several benefits to Bitcoin users, including superior privacy, lower fees, and more flexible [multisig](https://river.com/learn/terms/m/multisig/).

This BIP also specifies how Schnorr public keys and signatures are to be encoded for use in Bitcoin. Public keys used for Schnorr signatures are 32 bytes long, compared to ECDSA’s 33-byte public keys. Additionally, Schnorr signatures are 64 bytes long, compared to ECDSA signatures, which range from 71-72 bytes, including a [sighash flag](https://river.com/learn/terms/s/sighash-flag/). These small space savings offer fee savings to Bitcoin users who adopt Taproot.

## Taproot - BIP 341

While BIP 340 defines the specification for generating and encoding Schnorr signatures and public keys, BIP 341 defines how Bitcoin’s protocol integrates Schnorr signatures. Specifically, Bitcoin Script must be updated to also evaluate Schnorr signatures. Taproot also integrates [Merkelized Alternative Script Trees (MAST)](https://river.com/learn/terms/m/merkelized-alternative-script-tree-mast/), which allow users to lock outputs to multiple scripts.

{{% hint info %}}
Pay-to-Taproot outputs are version 1 SegWit outputs, and all Taproot transactions are SegWit transactions.
{{% /hint %}}

## Pay-to-Taproot (P2TR)

Taproot also introduced a new script type, a way of spending bitcoin. Pay-to-Taproot (P2TR) allows users to pay to either a Schnorr public key **or** the [Merkle root](https://river.com/learn/terms/m/merkle-root/) of a variety of other scripts. Using this new script type, a user can create a [UTXO](https://river.com/learn/terms/u/unspent-transaction-output-utxo/) which can be unlocked and spent by either the owner of the private key or anyone who can satisfy the requirements of any script within the Merkle tree.

### Key Aggregation

Schnorr’s key aggregation feature enables this flexible functionality. When bitcoin is sent to a P2TR output, it is locked to a single public key, called Q. However, this public key Q is actually an aggregation of a public key P and a public key formed from the Merkle root of many other script types. Any of the alternative scripts in the Merkle tree can be used to spend the output.

{{% image "/img/tr-813.png" /%}}

This design allows users to choose between complex, arbitrary scripts as well as simple pay-to-public-key functionality at the time of spending, rather than at the time of receiving. It also makes all Taproot outputs look similar. Because multisig outputs, single sig outputs, and other complex smart contracts all look the same on the blockchain, many chain analysis heuristics will become unusable, preserving privacy for all Taproot users.

## Tapscript - BIP 342

In order to implement P2TR transactions, BIP 342 adds and updates several [opcodes](https://river.com/learn/terms/o/opcode/). These new scripts are used to verify Taproot spends and Schnorr signatures, and they are collectively known as Tapscript.

Tapscript was designed to maximize future flexibility of P2TR spending in order to allow for upgrades which are not yet foreseen.

# The Benefits of Taproot

The Taproot upgrade offers many benefits to Bitcoin users who adopt Taproot as well as those who do not. The introduction of Schnorr signatures offers significant benefits to privacy and security, but Taproot and Tapscript also bring advantages of their own.

## Space Savings

Most Taproot (P2TR) outputs consume less space on the blockchain than normal [P2PKH](https://river.com/learn/terms/p/p2pkh/) outputs, but are slightly larger than [P2WPKH](https://river.com/learn/terms/p/p2wpkh/) outputs. This is mostly due to the fact that P2TR outputs lock bitcoin directly to a public key, not the hash of the public key. This makes sending to Taproot outputs slightly more expensive, because public keys take up more space than public key hashes. However, spending Taproot outputs is significantly cheaper because the public key is included in the scriptPubKey, and thus does not need to be included in the [Script Witness](https://river.com/learn/terms/s/script-witness/).

Taproot also defined the encoding scheme for Schnorr public keys and signatures, making them shorter than their ECDSA counterparts, providing additional fee savings.

## Privacy Benefits

The privacy implications of Taproot are perhaps the most important part of the upgrade. By introducing Schnorr signatures and key aggregation, multisignature contracts no longer look different from single signature contracts, providing privacy to all Taproot users.

{{% hint info %}}
Since the Lightning Network relies on 2-of-2 multisig, Taproot makes it impossible to discern which transactions create Lightning channels.
{{% /hint %}}

Taproot also introduced significant privacy benefits through the integration of MAST. As discussed above, Taproot allows bitcoin to be locked to many scripts at once. However, when spending bitcoin from a Taproot output, the spender need not reveal every possible script that could have unlocked the bitcoin; only the script which they actually used. In the majority of cases, Taproot users will likely use the pay-to-public-key option, allowing them to keep any backup options they might have planned private.

## Security Upgrades

On a technical, theoretical level, Schnorr signatures are considered more secure than ECDSA signatures because Schnorr signatures are provably secure using fewer assumptions. Like all elliptic curve cryptography schemes, both ECDSA and Schnorr rely on the assumption that the Discrete Logarithm Problem is hard. However, ECDSA relies on additional assumptions in order to guarantee its security. Nonetheless, there have been no examples of ECDSA being systematically compromised during Bitcoin’s existence.

Schnorr signatures also eliminate any signature [malleability](https://river.com/learn/terms/m/malleability/) that might have been present in ECDSA signatures. While transaction malleability was solved by the SegWit upgrade, malleability of signatures persisted as a feature of ECDSA.

## Taproot Enables the Taro Protocol

[Taro](https://river.com/learn/terms/t/taro/) is a Taproot-powered protocol that allows users to issue assets on the Bitcoin blockchain and the [Lightning Network](https://river.com/learn/what-is-the-lightning-network/). With a Taproot-centered design, this asset issuance can be done in a more private and scalable way than previous attempts to introduce other assets on top of Bitcoin. Taro was proposed by Lightning Labs in April 2022.

Taproot is used in Taro to embed asset metadata into an existing transaction output. Schnorr Signatures are also used to improve simplicity and scalability.

The name Taro is an acronym for Taproot Asset Representation Overlay, indicating that without Taproot, this upgrade would not be possible.

# Taproot Activation

When an upgrade to Bitcoin is proposed, it is first discussed by the developer community. Once the proposal is formalized, it is assigned a BIP number. After the code is written, reviewed, tested, and merged, Bitcoin node operators must decide how and when to activate the upgrade.

The Schnorr, Taproot, and Tapscript upgrades were given BIP 340, 341, and 342 in January of 2020, and have been under discussion and development since. In late 2020, the code implementation for all three upgrades was completed, tested, reviewed, and merged to Bitcoin Core.

In May 2021, over 90% of miners signaled for Taproot activation, and BIP 340, 341, and 342 was activated and enforced at block 709,632 on November 12th, 2021. There are several methods for activating upgrades to Bitcoin; the Bitcoin community selects a path and then executes it.

## Bitcoin Activation Paths

BIP 8 and BIP 9 define two popular methods for activating upgrades. Both processes begin by surveying Bitcoin miners for support. If an overwhelming majority of miners signal their support through messages in the blocks they mine, the upgrade is activated. The difference between BIP 8 and BIP 9 arises if miner support is insufficient. In that case, BIP 9 specifies that the upgrade should not take place, while BIP 8 specifies that the upgrade should be activated after a delay period.

Variants of these two proposals were put forward in the context of Taproot activation. However, the Bitcoin community overwhelmingly supported Taproot, and very little criticism were been raised. Thus, the specific activation path was largely insignificant.

# Key Takeaways

- Taproot is an upgrade to Bitcoin which introduced several new features.
- Taproot integrated the Schnorr digital signature scheme into Bitcoin, upgrading Bitcoin’s core cryptography.
- Taproot built on the SegWit upgrade to improve Bitcoin’s privacy and lower transaction fees.
- Taproot made future Bitcoin upgrades easier by reforming Bitcoin’s scripting language.