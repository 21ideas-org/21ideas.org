---
title: "Understanding the RGB protocol"
h1: "Understanding the RGB protocol"
cover: /img/rgb-927.png
description: ""
url: rgb
date: 2022-04-20
bookFlatSection: false
bookToc: true
weight: 64
---

{{< hint btc >}}
This article by Federico Tenga was published in his [Medium blog](https://medium.com/@FedericoTenga/understanding-rgb-protocol-7dc7819d3059).

[Contribute](/contribute/).
{{< /hint >}}

**_Disclaimer_**_: for education purposes some of the concepts described in this article have been simplified, and to avoid overwhelming the reader with new terms also the terminology may differ from technical specifications._

Recently there has been a growing interest around tokens on top of Bitcoin and the Lightning Network. The idea of creating tokens representing assets that can be transferred and stored with the same security and convenience that Bitcoin offers is not new, it was indeed pioneered already in 2013 by protocols such as Counterparty and OmniLayer (formerly Mastercoin), and later adopted by Ethereum and other altcoins, which is also where most of the blockchain tokens activity happens today. However, using altcoins to secure financial assets is not ideal, as they are unable to offer the same level of security and decentralisation of Bitcoin. For this reason, over the years some projects emerged trying to modernise tokens-on-Bitcoin protocols and make them compatible with the Lightning Network, in particular RGB, OmniBolt and, more recently, Taro. This article will be focusing on RGB with the goal of providing a comprehensive overview of how it works and what its value proposition is.

## Legacy tokens on Bitcoin protocol

Older tokens-on-Bitcoin protocols such as Counterparty and OmniLayer worked by putting metadata inside a Bitcoin transaction to “colour” it and signal that it should be considered as a token transfer. Such signalling would usually happen in an OP_RETURN output, which is off-course ignored by normal Bitcoin nodes, but can be interpreted by the token protocol aware nodes, which will enforce the token protocol validation rules.

{{% image "/img/rgb-928-en.webp" /%}}

While this design is effective, it also presents a few drawbacks:

1. The quantity of information related to the token transfer is limited by the bytes allowed in an OP_RETURN output, which by standardness rules is 80 bytes, enough for basic transactions data encoding, but not sufficient for more complex use cases.
2. The token protocol node needs to scan the entire blockchain looking for token transfers that may be relevant for the user in OP_RETURN outputs, a process that as the blockchain grows in size becomes more resource intensive.
3. The privacy offered to the user is quite bad, as all the transaction data is visible to anyone on-chain and the anonymity set of the token you are using likely to be orders of magnitudes smaller than the one you usually enjoy with bitcoin.

## Moving off-chain

With the goal of improving on this design, the RGB project proposes a more scalable, more privacy aware and more future proof solution based on the concept of client-side validation and single-use seals, initially proposed by [Peter Todd in 2017](https://petertodd.org/2017/scalable-single-use-seal-asset-transfer).

The core of the idea is to use the Bitcoin blockchain only for what it is indispensable, that is leveraging its proof-of-work and network decentralisation for double-spending protection and censorship-resistance. All the token transfer validation work can instead be moved out of the global consensus layer, and kept off-chain, delegating it to only the client receiving the payment.

How does all of this work? In RGB, basically tokens always need to be assigned to a Bitcoin UTXO (either already existing or created ad hoc), and to move the tokens you need to spend such UTXO. While spending the UTXO, the Bitcoin transaction will have to include a commitment to a message containing the RGB payment information, defining input(s), Bitcoin UTXO(s) where the tokens will be sent to, asset id, amount, spending conditions and other extra data you may want to attach.

{{% image "/img/rgb-929.png" %}}
*If you have tokens assigned to the Output 1 of Bitcoin transaction A, to move them you would need to create an RGB transaction and a Bitcoin transaction spending from TX A: output 1 committing to the RGB transaction. As you can see, the RGB transaction is moving tokens from Bitcoin TX A: output 1 to Bitcoin TX C: output 2 (which is not shown in this diagram), not towards any output of Bitcoin TX B. In most cases, we can expect TX B outputs to just change addresses to send the satoshis owned by the UTXO being spent back to the owner minus the fee, while committing to the RGB transaction to avoid the possibility of double spending.*
{{% /image %}}

So to move RGB tokens that were assigned to a Bitcoin UTXO, a Bitcoin transaction is always needed. However, the output of the RGB transfer does not need to be the same as the output of the Bitcoin transaction! As we can see in the example above, the RGB transaction can have as output an UTXO that is completely unrelated to the Bitcoin transaction committing to it. This means that RGB tokens can “teleport” from one UTXO to another without leaving any trail in the Bitcoin transaction graph. This is great for privacy!

In this design, Bitcoin UTXOs are used as [single-use seals](https://petertodd.org/2016/commitments-and-single-use-seals#single-use-seals) containing RGB assets, and to move the assets you essentially need to open the old seal and close a new one.

The RGB specific payment data is transmitted off-chain through a dedicated communication channel, from the client of the payer to the one of the receiver which will proceed in verifying that RGB protocol rules were respected. In this way, a blockchain observer will not be able to extract any information about the activity of RGB users.

Unfortunately, validating the incoming payment is not enough to make sure the sender actually owned to assets just sent to you, therefore, to consider the received payment as finalised, you would have to receive from the payer also all the history of the transactions related to the token just sent, back to the very original issuance. By validating all the transaction history, you can make sure the asset has not been inflated and that all spending conditions attached to the asset were always respected.

{{% image "/img/rgb-930-en.webp" /%}}

This design helps with scalability as you don’t have to validate the entire history of the asset, but only those transactions that are relevant to you. Moreover, the fact that the transactions are not broadcast to a global ledger improves privacy, as fewer people are aware that your transaction even exists.

## Blinding secrets

With the goal of further improving privacy, RGB support the blinding of outputs, which means that in the payment request you share with whoever need to pay you, you do not disclose the UTXO where you want to receive the tokens, but you ask the payer to send the tokens to a hash, which you generated by concatenating the UTXO itself with a random blinding secret. Doing so, the payer will not be aware of the UTXO to which the tokens are being sent to, making it therefore impossible for an exchange or other service providers to know if they are operating a withdraw towards a UTXO “blacklisted” by some regulatory agency, or to monitor when the tokens will be spent in the future.

Please notice that when tokens are spent, the blinding secrets have to be revealed to the receiver so that she can verify all the Bitcoin part of the transaction history. This means that with RGB you have total privacy in the present, but future token holders will be able to see all the UTXOs that were involved in transfers. Therefore, while enjoying perfect privacy when receiving and holding the tokens, the confidentiality of user’s past financial activities degrades over time as the tokens are successively moved between people, approaching the same privacy level we enjoy for our past Bitcoin transaction history.

## Lightning Network compatibility

Since RGB is built on Bitcoin, it is possible to move RGB tokens on top of the Lightning Network as well, and there are already people working on this. Being the Lightning Network a scalability solution based on payment channels, realistically some efforts will be required to bootstrap a decent level of channels liquidity for each asset, which can be achieved either by the asset getting widely adopted, or by channel management software connecting directly to nodes supporting the asset the user is interested in, creating some sort of asset-specific sub-networks.

Another proposed solution to make not so popular assets viable on the Lightning Network is to introduce nodes that provide an exchange service between a specific asset and bitcoin. In this way, once exchanged in bitcoin, value can be relayed over the network leveraging bitcoin liquidity, and when reaching the other side of the path, another exchange node will convert the bitcoins back into the original asset. This would eliminate the need for a liquid asset specific network. However, to make it practical, the trading volumes for each asset against bitcoin need to be high enough to incentivise market makers to operate exchange nodes in multiple parts of the network, offering a low enough bid-ask spread to avoid too much value being taken away from the payment during the two exchanges.

{{% image "/img/rgb-931.png" %}}
_Graphical representation of a possible Lightning Network with RGB coloured channels. The grey circles represent normal LN nodes, while coloured circles represent nodes supporting a specific RGB asset. When transferring an asset along a lightning path, there will be some nodes having both coloured and normal bitcoin channels which will act as exchange to allow the payment to get to destination leveraging bitcoin liquidity._
{{% /image %}}

## Advanced smart contracts

By using Bitcoin transactions, RGB automatically inherits all Bitcoin’s smart contracts capabilities, but it is not limited to them! When you transfer tokens to a counterparty, it is possible to define in the payment additional spending conditions that she will have to satisfy in the future. Such extra spending conditions will not be enforced by the blockchain global consensus, but instead by the RGB node validation process. This means that if there is an attempt to spend the tokens without respecting the RGB specific spending conditions rules, the receiver’s node will fail the validation and consider the payment as not final, which would be particularly bad for the sender. Indeed, while the RGB payment failed, the Bitcoin transaction that spent the UTXO to which the tokens were assigned may have been confirmed on the blockchain, meaning that those token are no longer assigned to _any_ UTXO, and they can be as well be considered as burnt, which is a dynamic that needs to be taken into account while writing a RGB smart contract.

Another trade-off to remember is that while RGB contracts can offer much more privacy and scalability than any alternative, their state is not globally accessible and they cannot be unowned (as it happens in other blockchains), which may represent a limitation for some use cases.

Due to the client side nature of RGB, multiple smart contract frameworks can be proposed and implemented permissionlessly. At the time of writing, there is already a project working in this direction called [AluVM](https://www.rgbfaq.com/glossary/aluvm).

## How RGB compares to alternatives

Anyone interested in adopting RGB will find himself wondering about how it compares to the alternative token protocols. Let’s analyse a few examples:

### Altcoins based tokens

Most of the altcoins based token protocol (e.g. ERC-20) offer smart contracts with a global unowned state, which enables easy to deploy DEXes and other financial applications, but they are hard to scale, with no privacy and inherit all the drawbacks of those altcoins, such as high costs to run a node, lower decentralisation and less resistance to censorship attacks.

### Liquid assets

[Liquid](https://blockstream.com/liquid/) is a federated Bitcoin sidechain that offers some interesting features such as native assets support and confidential transactions to hide from blockchain observers the payment amount and the ID of the asset being transferred. However, the federated model presents again the problem of low decentralisation and little censorship resistance.

### OmniBolt

[OmniBolt](https://omnilab.online/omnibolt/) is the Lightning compatible version of OmniLayer, briefly described at the beginning of the article. It presents trade-offs quite similar to RGB, but it offers less privacy and scalability as all the token related data are kept on-chain.

### Taro

Announced during the Bitcoin 2022 Miami conference, [Taro](https://docs.lightning.engineering/the-lightning-network/taro) is a project backed by Lightning Labs with the goal of bringing assets on top of the Lightning Network. According to the released specifications, the design is very similar to RGB, with basically the same features and trade-offs. At the time of writing, the main difference between RGB and Taro seems to be that RGB has already released some reviewable code while taro is only specs, but on the other hand you could argue that Taro is backed by one of the best teams in the lightning ecosystem, creating good expectations for a future implementation. Given the similarities of the two designs, it would be nice if Taro and RGB ended up being interoperable, but only time will tell if the right incentives for this to happen will ever materialise.

## Conclusions

If you are interested in tokens on Bitcoin, RGB is clearly the project to look at. To learn more and join the contributors and companies working on RGB development, here there are a few links you can explore:

**RGB educational resources:** [rgb.info](https://rgb.info)

**RGB wallet for android:** [Iris Wallet](https://play.google.com/store/apps/details?id=com.iriswallet.testnet)

**RGB node repo:** [https://github.com/RGB-WG/rgb-node](https://github.com/RGB-WG/rgb-node)