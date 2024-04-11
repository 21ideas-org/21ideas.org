---
title: "Bitcoin address types"
h1: "Bitcoin address types compared: P2PKH, P2SH, P2WPKH, and more"
cover: /img/address-types.png
description: ""
url: bitcoin-address-types
date: 2023-03-08
bookFlatSection: false
bookToc: true
weight: 66
---

{{< hint btc >}}
This article by Tom Honzik was published in [Unchained blog](https://unchained.com/blog/bitcoin-address-types-compared).

[Contribute](/contribute/).
{{< /hint >}}

If you’ve been using bitcoin for a while, you’ve probably noticed that some [bitcoin addresses](https://unchained.com/blog/what-is-a-bitcoin-address/) appear quite different from others. You may have also seen discussion around several acronyms beginning with “P2,” such as P2PKH or P2WSH. If you’re unfamiliar with what these acronyms mean, here we’ll look through all the standardized on-chain methods for receiving bitcoin throughout its history and explain some essential differences that make each method unique.

## P2PK

Pay-to-Public-Key (P2PK) is the original method of receiving bitcoin, and it does not involve an address. Instead, as the name suggests, bitcoin is paid directly to an exposed public key. The first ever bitcoin transaction from one person to another used P2PK, when Satoshi Nakamoto sent coins to Hal Finney [in Block 170](https://mempool.space/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16).

P2PK is no longer used because it is a more expensive, less private, and less secure way of receiving bitcoin than subsequent methods.

### Quick facts

|||
|:---|:---|
| First seen |  [Block 0 \| January 3, 2009](https://mempool.space/tx/4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b) |
| Example recipient | 04678afdb0fe5548271967f…384df7ba0b8d578a4c702b6bf11d5 |  
| Current supply | ~ 1.7M BTC or 9% |  
| Status | Obsolete | 

## P2PKH

Pay-to-Public-Key-Hash (P2PKH) was available for use at bitcoin’s beginning, and it showed up on the blockchain for the first time less than two weeks after the genesis block. P2PKH makes several improvements upon P2PK, such as utilizing an address. As discussed [in our earlier article](https://unchained.com/blog/what-is-a-bitcoin-address/), addresses contain a checksum that helps prevent typos and lost bitcoin.

P2PKH addresses are typically 34 or 33 characters in length (but could theoretically be [as short as 26 characters](https://bitcoin.stackexchange.com/a/36948/140404)), and they are encoded in [Base58 format](https://en.bitcoin.it/wiki/Base58Check_encoding). They begin with a prefix of **1** and are currently responsible for receiving and securing 43% of the mined bitcoin supply, more than any other address type.

Creating a P2PKH address involves putting a single public key through hash functions SHA-256 and RIPEMD-160. This shortens the amount of data, which in turn helps save block space and transaction fees for the user. It also introduces further resistance to reverse-engineering the private key beyond the already believed-to-be-unbreakable secp256k1 elliptic curve.

### Quick facts

|||
|:---|:---|
| First seen | [Block 728 \| January 16, 2009](https://mempool.space/tx/6f7cf9580f1c2dfb3c4d5d043cdbb128c640e3f20161245aa7372e9666168516) |
| Example recipient | 12higDjoCCNXSA95xZMWUdPvXNmkAduhWv |
| Current supply | ~ 8.3M BTC or 43% |
| Status | Decreasing popularity |

## P2MS

Pay-to-Multisig (P2MS) is a trivial transaction type that was only briefly relevant and has never been responsible for holding more than 100 bitcoin at one time across all network participants. Nevertheless, P2MS is a part of bitcoin’s history.

P2MS was introduced as a standard script in early 2012, as specified by BIP 11. However, this transaction type suffered from the same problems as P2PK since it included exposed public keys and did not use any address format. It also limited the number of public keys in a multisig quorum to three. Within months P2MS would be replaced by an alternative method for receiving bitcoin into a multisig arrangement called P2SH, which we will cover next.

### Quick facts

|||
|:---|:---|
| First seen | [Block 164,467 \| January 29, 2012](https://mempool.space/tx/60a20bd93aa49ab4b28d514ec10b06e1829ce6818ec06cd3aabd013ebcdc4bb1) |
| Example recipient | Multiple public keys, like the one shown in P2PK |
| Current supply | ~ 43 BTC or 0.0002% |
| Status | Obsolete |

## P2SH

Pay-to-Script-Hash (P2SH) was introduced to bitcoin as a soft fork in accordance with BIP 16 on April 1, 2012. Like most forks, [the story behind it is fascinating](https://bitcoinmagazine.com/technical/the-battle-for-p2sh-the-untold-story-of-the-first-bitcoin-war). P2SH shares a lot in common with P2PKH. The main difference is that the address is created by hashing a redeem script instead of hashing a single public key.

A redeem script can be thought of as coded instructions specifying how bitcoin received to the P2SH address can be spent in the future. There could be a wide range of possibilities, including multiple different public keys. The receiver, not the sender, determines the script details, and the spending instructions are not exposed publicly until bitcoin is spent out of the address.

While advanced users can construct complex scripts, the most common uses for P2SH have been to create Nested SegWit addresses ([covered below](https://unchained.com/blog/bitcoin-address-types-compared/#nested-segwit)) and multisig wallets. For example, a script can include three public keys and specify that signatures from any two of the corresponding private keys can spend the bitcoin. This would create a 2-of-3 multisig address.

P2SH addresses are [exactly](https://bitcoin.stackexchange.com/questions/109938/why-p2sh-seems-to-be-never-smaller-than-34-characters-unlike-p2pkh) 34 characters in length, and they begin with a prefix of **3**, as specified by BIP 13. Before the soft fork on April 1st, a handful of transactions experimented with this alternative prefix, the first of which is found [in Block 170,052](https://mempool.space/tx/9c08a4d78931342b37fd5f72900fb9983087e6f46c4a097d8a1f52c74e28eaf6).

### Quick facts

|||
|:---|:---|
| First seen | [Block 174,717 \| April 7, 2012](https://mempool.space/tx/2597f4819e1902750b9e1fa1515df22bbf14f3a78a2b82aa7d62a8109d83289d) |
| Example recipient | 342ftSRCvFHfCeFFBuz4xwbeqnDw6BGUey |
| Current supply | ~ 4.6M BTC or 24% |
| Status | Decreasing popularity |

## P2WPKH

Pay-to-Witness-Public-Key-Hash (P2WPKH) is the first of two address types introduced to bitcoin upon the SegWit soft fork in August 2017. The story behind this extremely important and particularly contentious soft fork is documented in a book called [The Blocksize War](https://a.co/d/hUKyXwZ), written by Jonathan Bier.

P2WPKH is the SegWit variant of P2PKH, which at a basic level, means that choosing this address type rather than older P2PKH addresses will help you save money on transaction fees when moving your bitcoin around.

SegWit addresses look quite different from the older address types because, per BIP 173, they use Bech32 encoding instead of Base58. Most notably, there are no capital letters in Bech32. P2WPKH addresses can be identified by a prefix of bc1q and a character length of exactly 42.

### Quick facts

|||
|:---|:---|
| First seen | [Block 481,824 \| August 23, 2017](https://mempool.space/tx/dfcec48bb8491856c353306ab5febeb7e99e4d783eedf3de98f3ee0812b92bad) |
| Example recipient | bc1q34aq5drpuwy3wgl9lhup9892qp6svr8ldzyy7c |
| Current supply | ~ 3.8M BTC or 20% |
| Status | Increasing popularity |

## P2WSH

Pay-to-Witness-Script-Hash (P2WSH) is the SegWit variant of P2SH. The main advantage to using P2WSH over P2SH is that it can help lower transaction fees, and the primary reason to use a script hash instead of a public key hash is to accommodate multisig arrangements.

Like P2WPKH, a P2WSH address begins with a prefix of **bc1q**. However, it has a longer character length of exactly 62. Unlike the address types covered thus far, P2WSH addresses are created using the SHA-256 hashing function alone, without including RIPEMD-160, resulting in the increased character length. This was implemented cautiously, adding extra protection from a fairly nuanced and extremely unlikely multisig [attack vector](https://bitcoin.stackexchange.com/questions/54841/birthday-attack-on-p2sh/54847#54847).

### Quick facts

|||
|:---|:---|
| First seen | [Block 481,824 \| August 23, 2017](https://mempool.space/tx/461e8a4aa0a0e75c06602c505bd7aa06e7116ba5cd98fd6e046e8cbeb00379d6) |
| Example recipient | bc1qeklep85ntjz4605drds6aww9u0qr46qzrv5xswd35uhjuj8ahfcqgf6hak |
| Current supply | ~ 0.8M BTC or 4% |
| Status | Increasing popularity |

## Nested SegWit (P2SH-P2WPKH and P2SH-P2WSH)

Nested SegWit (also known as Wrapped SegWit) is technically not a different address type than we’ve covered above. Still, it is a unique way to use previously discussed address types in a manner that was temporarily useful for the bitcoin community.

When the SegWit soft-fork occurred, not all bitcoin nodes, software, and services immediately upgraded to support the new Native SegWit address types, P2WPKH and P2WSH. Only the entities that did upgrade could send to these new addresses. This meant that folks who wanted the ability to receive bitcoin from anybody (including those who hadn’t upgraded) couldn’t use a Native SegWit wallet yet. However, since SegWit offered cheaper transaction fees, most people were keen to begin using it.

The crafty solution to this dilemma was to utilize the P2SH transaction type. The entities that had not yet implemented SegWit could still send bitcoin to P2SH addresses—which, [as discussed above](https://unchained.com/blog/bitcoin-address-types-compared/#p2sh), are built with a redeem script specifying the instructions on how the bitcoin can be spent later on. As it turns out, these instructions could incorporate the new SegWit spending model, providing users with a bridge to reduced fees. Therefore, the P2SH addresses using this trick became known as Nested SegWit, and they played a significant role in the SegWit adoption process.

On the surface, Nested SegWit addresses are indistinguishable from other P2SH addresses, so the supply of bitcoin held in this arrangement is unknowable. Additionally, since all modern bitcoin tools can now send directly to Native SegWit addresses, there is no longer any good reason to use Nested SegWit.

### Quick facts

|||
|:---|:---|
| First seen | Unknown |
| Example recipient | Same as P2SH |
| Current supply | Unknown subset of P2SH |
| Status | Obsolete |

## P2TR

Pay-to-Taproot (P2TR) is the newest address type, made available by the Taproot soft-fork in November 2021. P2TR adoption remains quite low at the time of writing, and many bitcoin softwares and services are still working on integration.

While P2WPKH and P2WSH are known as SegWit V0, P2TR is considered SegWit V1. Notably, P2TR utilizes a digital signature algorithm called Schnorr, which differs from the ECDSA format used in earlier bitcoin transaction types. Schnorr signatures have several advantages, including additional transaction fee reductions and increased privacy.

Regarding privacy, the key and signature aggregations made possible by Schnorr allow multisig addresses to be indistinguishable from singlesig, and the full spending conditions for a P2TR address are not necessarily revealed publicly. The creator of the address can even include multiple customized redeem scripts to choose from in order to spend the bitcoin later.

P2TR addresses are 62 characters long, and they use Bech32m encoding, a slightly modified version of Bech32, as described in [BIP 350](https://github.com/bitcoin/bips/blob/master/bip-0350.mediawiki). P2TR addresses can be identified by their unique **bc1p** prefix.

### Quick facts

|||
|:---|:---|
| First seen | [Block 709,632 \| November 13, 2021](https://mempool.space/tx/5849051cf3ce36257a1d844e28959f368a35adc9520fb9679175f6cdf8c1f1d1) |
| Example recipient | bc1pxwww0ct9ue7e8tdnlmug5m2tamfn7q06sahstg39ys4c9f3340qqxrdu9k |
| Current supply | ~ 0.02M BTC or 0.1% |
| Status | Increasing popularity |

## Reference chart

Now that we have covered all standardized methods to receive bitcoin on-chain, some of the quick facts and address features can be combined into a convenient chart for reference.

| Type | First Seen | BTC Supply* | Use* |  Encoding | Prefix | Characters | 
| --------  | -------  | --------   | -------  |  --------     | -------    | --------   | 
| P2PK | Jan 2009 | 9% (1.7M) | Obsolete | - | - | - |  
| P2PKH | Jan 2009 | 43% (8.3M) | Decreasing | Base58 | 1 | 26 - 34 |
| P2MS | Jan 2012 | Negligible | Obsolete | - | - |
| P2SH | Apr 2012 | 24% (4.6M) | Decreasing | Base58 | 3 | 34 |
| P2WPKH | Aug 2017 | 20% (3.8M) | Increasing | Bech32 | bc1q | 42 |
| P2WSH | Aug 2017 | 4% (0.8M) | Increasing | Bech32 | bc1q | 62 |
| P2TR | Nov 2021 | 0.1% (0.02M) | Increasing | Bech32m | bc1p | 62 |

_* Data in these columns are subject to change._