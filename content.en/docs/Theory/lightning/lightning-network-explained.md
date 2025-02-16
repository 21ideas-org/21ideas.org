---
title: "Lightning Network Explained"
h1: "Lightning Network Explained"
cover: /img/mln-850.jpeg
description: ""
url: lightning-network-explained
date: 2018-01-30
bookFlatSection: false
bookToc: true
weight: 6
---

{{< hint btc >}}
This article by Dmitry Laptev was published in his [Medium blog](https://medium.com/lightningto-me/lightning-network-45b4b2119d97).

[Contribute](/contribute/).
{{< /hint>}}

First, we discuss why we need it (part 0) and describe an idea of payment channels and Lightning Network (part 1). Then we introduce required building blocks (part 2) and see how these blocks can be used to create payment channels (part 3). We then finally build Lightning Network, discuss its properties (part 4), and sum it all up (part 5).

> *Disclaimer. I consciously omit/simplify some of the technical details. And also I am not an expert, and can be simply wrong.*

# 0. Why?

Bitcoin blockchain is a kind of decentralized database that stores every bitcoin transaction ever made. Here “every transaction ever” is a fundamental part of the protocol design. For system to be truly distributed and to prevent any mistakes, thousands of network nodes need to constantly double check each other and to record all the transactions.

Of course, this does not help scalability _at all_. Blockchain requires tens of gigabytes of hard drive storage, blocks are full, fees are rising, people are angry and fork bitcoin. Because of all that, alternative solutions are currently being developed. And one of these solutions is _Lightning Network (LN)_.

{{< x user="lopp" id="947808940255006726" >}}

# 1. Idea

The idea of the _Lightning Network_, which belongs to a broader set of _second layer solutions_, is actually quite simple.

{{< hint btc >}}
*💡 Instead of storing and verifying all the transactions in the blockchain, let’s conduct most of the transactions “off-chain”. The main blockchain will mostly be used to synchronise the balances from time to time and to resolve conflicts. And as usual, this will all work using cryptomagic.*
{{< /hint >}}

This sounds intriguing, but absolutely unclear _how_…

## 1.1. Payment channel

Let’s start with simplifying the lives of two people (Alice and Bob), who often transact between each other. The following scheme is proposed.

1. Alice and Bob send deposits to a special address. This address is jointly controlled by both of them using their two private keys.
2. Both Alice and Bob create a special _smart contract transaction_ (yes, there are smart contracts in bitcoin, but more about that in the next part). This transaction is valid, but not yet recorded in the blockchain.
3. At first, the transaction contains information that Alice and Bob can get their deposits back.
4. When Alice is paying to Bob, they both by mutual agreement update the information in these transactions. Alice agrees to get less than her initial deposit, Bob — more. One can say for the sake of analogy that they are exchanging debt acknowledging documents (_IOU, I owe you_). But unlike most IOUs issued by banks, LN payments are fully secured and guaranteed to be immediately redeemable.
5. Like this, they can exchange small amounts (within the limits of their deposits) with each other, for as long as they both want.
6. At any moment in time any party can decide to square their balances. Then Alice (or Bob) just records the final version of their transaction to the main blockchain and they both get their deposits back (taking into account all the intermediate payments).

Points 1–3 in these plan are called _opening the payment channel_. Points 4 and 5 — _using the channels._ Point 6 — _closing the payment channel_.

{{< hint btc >}}
*👍 Only two transactions are recorded in the main blockchain: sending the initial deposits (to open the channel), and the final transaction (to close the channel). All the intermediate payments are conducted without blockchain synchronisation. This makes payments within channels free and instant.*
{{< /hint >}}

## 1.2. Network of payment channels

Payment channels between two people _per se_ are not super useful. Ultimately, we do not transact regularly with most people. But…

{{< hint btc >}}
*💡 When multiple payment channels form a network, any two people in this network can transact between each other. If there is a path between two nodes in the network, they can pay each other, even if they are not directly connected. This is the main idea of Lightning Network.*
{{< /hint >}}

{{% image "/img/mln-851.png" %}}
_Mainnet LN: the graph of payment channels as of 22.01.2018 ([https://lnmainnet.gaben.win](https://lnmainnet.gaben.win))._
{{% /image %}}

Basically, analogous to TCP protocol, most people will need to have only one open channel to transact with anyone else.

Of course, there are many open questions left: how to find a path between two people, and how to motivate nodes to process payments. But let’s start with the main issue: the problem of trust.

## 1.3. The problem of trust

As it often happens in cryptography, the system of payment channels is easy to imagine when all the parties trust each other. There is no need in deposits, keys, special transactions. We can all just write down who owns whom and how much.

The question is: how to implement a payment channel and a network of payments channels _without trust_. There are going to be three main issues.

1. Both Alice and Bob store their deposit in a joined wallet. If Bob refuses to sign transactions, then how will Alice ever return her deposit?
2. When transacting over the payment channel, Alice and Bob create many versions of IOU transactions. Assume Alice is mostly paying Bob. Then in the last version of the transaction Bob should receive more than his deposit. But Alice can cheat and submit the very first valid transaction, pretending that she never owed Bob anything. What shall Bob do in this case?
3. Assume Alice is paying Bob through Victor in the network of payment channels. How can they be sure that Victor will indeed pass the money, and not just steal it?

We will call these issues, respectively: _“the problem of a joined deposit”_, _“the problem of the last transaction”_ and _“the problem of intermediary”_.

All of the mentioned issues can actually be resolved using only a couple of tricks. But let’s not get ahead of ourselves. First, we will introduce some required building blocks…

# 2. Smart contracts

Bitcoin supports a simple smart contract programming language, called [_Script_](https://en.bitcoin.it/wiki/Script). Every bitcoin transaction has a special field that contains a small script in this language. This script checks under which conditions the output of the transaction can be spend.

_“To spend the output of transaction A”_ is in fact just a more technically correct way of saying “to spend bitcoins from address/wallet _K_, to which these bitcoins were delivered using transaction _A_”.

{{< hint btc >}}
*☝ In comparison with ethereum, capabilities of smart contract in bitcoin are much more limited. This is because of the fact that Script is not a Turing-complete language. E.g. Script does not allow cycles/recursion, and does not allow creating variables (there is no memory).*
{{< /hint >}}

See the the link below to read a bit more about transactions structure and using scripts.

{{% image "/img/mln-855.png" %}}
_[Bitcoin: transactions, malleability, SegWit and scaling](https://medium.com/lightningto-me/bitcoin-transactions-malleability-segwit-and-scaling-258af8ed9cbf)_
{{% /image %}}

Let’s have a look at a couple of important operations of bitcoin scripts.

## 2.1. Authorisation

Perhaps the most standard part of every transaction is _signature verification_. Let transaction _A_ fund some address _K_ with some number of bitcoins. In order to later spend these bitcoins from _K_, one needs to prove that they have the key. This is checked using operation `OP_CheckSig`.

But we can additionally check something else. For example, we can check that a person has a secret number, the hash of which is equal to the given value. For that we need two operations: `OP_SHA256` (computes the hash of the provided parameter) and `OP_EqualVerify` (checks equality). In part 4 we will discuss why would anyone need that.

## 2.2. Cooperation

Another common example of simple bitcoin smart contracts is based on the operation `OP_CheckMultiSig`. This operation allows to spend funds from an address only when signed with multiple keys.

This principle is used for so-called _multiple signature_ (_multisig_) wallets. It works approximately like a bank deposit box closed with two locks. One key belongs to a client, the second one — to an employee of the bank.

## 2.3. Timing

Since quite recently bitcoin also supports an operation called `OP_CheckSequenceVerify`, which allows to spend the funds only after some fixed number of blocks.

For example, this can be used to discipline people unable to save money. Blockchain works better than any piggy bank: if someone decides to freeze the savings for some time, the money will be securely frozen.

But beyond this scenario, `OP_CheckSequenceVerify` and other components are actively used for payment channel implementation.

# 3. Payment channel implementation

Now with all the building blocks ready, we can describe how payment channels actually work.

In reality, there exists a [whole variety](https://en.bitcoin.it/wiki/Payment_channels) of different payment channels, and the first one was proposed by Satoshi him/her/them-self. We will _approximately_ follow the specification called _Poon-Dryja payment channels_ (named after the two authors of [the Lightning Network paper](https://lightning.network/lightning-network-paper.pdf)).

## 3.1. Opening the channel

1. Alice and Bob create a transaction/transactions transferring their money to a joined deposit address _O_. Assume that Alice transfers _X_ bitcoins from her wallet, Bob transfers _Y_ bitcoins. The funds from this joined deposit can only be spent when signed with two keys from Alice and Bob (`OP_CheckMultiSig`).
2. The first trick is that they do _NOT_ yet sign the transaction and do _NOT_ yet submit this transaction to the blockchain. Otherwise Bob can refuse to cooperate and Alice will lose access to her money forever.
3. Instead, Alice and Bob create two new refund transactions (_A1_ and _B1_ respectively). The input of these transactions is the money from the joint account (the output of transaction _O_). There are two outputs: _X_ bitcoins is to be transferred back to Alice, and _Y_ — back to Bob. _In reality everything is a bit more complicated, but we’ll discuss it later._
4. Then Bob signs the transaction _A1_ and gives it to Alice. Alice signs the transaction _B1_ and gives it to Bob.
5. And now the initial deposit transaction _O_ can be safely recorded in the main blockchain. No one is going to freeze anyones money. If Bob refuses to cooperate, Alice will just sign her transaction _A1_, record it in the blockchain and will return her deposit.

{{% image "/img/mln-852.png" %}}
_Deposit refund transactions._
{{% /image %}}

Now _“the problem of a joint deposit”_ is solved. The channel can be opened without any trust to the second party.

{{< hint btc >}}
*☝ An interesting fact. Just half a year ago (before the SegWit activation) signing an output of an unconfirmed transaction (point 4 above) was much harder, because of [transaction malleability problem](https://medium.com/@x0100/c581ece107ba).*
{{< /hint >}}

## 3.2. Using the channel

Payments within a channel are in fact implemented by rewriting transactions _A1_ and _B1_ with the new transactions.

1. Alice is paying Bob for a cup of coffee that costs _C_.
2. Alice agrees that when closing the channel, she will receive not the original amount _X_, but _X’=(X-C)_.
3. Bob agrees to receive _Y’=(Y+C)_.

New transactions _A2_ and _B2_ will look exactly the same as _A1_ and _B1_, but with new amounts. Any party can close the payment channel at any time, submitting the last version of the transaction to the blockchain.

How to make sure that Alice will not submit transaction _A1_ instead of transaction _A2_? This is solved with the second trick.

1. Every time Alice and Bob create new transactions, they also select a _one-time private key_. This key can be used by one party to collect the deposit of another party (`OP_CheckSig`).
2. With every new payment _i_, Alice is revealing to Bob her previous private key _AK(i-1)_ and creates a new key _AKi_. Bob does not accept payment without the previous key.
3. If Bob knows Alice’s key, he can spend all the Alice’s money. But only if Alice decides to record an incorrect transaction to the blockchain.
4. This scheme insures that Alice is always motivated to record only the last transaction to the blockchain.

_Last small modification._ To dispute the transaction Alice submits to the blockchain and to provide her key, Bob needs time. Because of that Alice is not going to get her deposit immediately after she closes the channel, but after some number of blocks T (`OP_CheckSequenceVerify`). For example, she may need to wait for 48 blocks, which is approximately 8 hours.

{{% image "/img/mln-853.png" %}}
_The final form of the transactions used for a payment channel._
{{% /image %}}

If Alice signs one of her transactions (they are already signed by Bob) and submits this transaction to the blockchain, two scenarios are possible.

1. Alice submits her last transaction => Bob does not know the last private key _AKi_. This is a valid closure of the channel, everyone should get their unspent money. Alice will get hers after some time.
2. Alice is trying to record her older transaction instead of the last one => she is trying to cheat. In this case Bob knows Alice’s key and he can use it to get all the Alice’s money. Obviously, Alice is not interested in this scenario.

So, “_the problem of the last transaction_” is also solved. Payment channel between two people is ready. Now it also becomes clear, what are the advantages and disadvantages of using payment channels.

{{< hint btc >}}
***👍 Advantages:** 1. payments are instant and free, they do not create a burden on the main blockchain. 2. two parties do not have to trust each other.*
{{< /hint >}}

{{< hint btc >}}
***👎 Disadvantages:** 1. deposits are blocked for the whole time while the channel exists. 2. both parties should from time to time go online (at least once in T blocks).*
{{< /hint >}}

👌 In practice, both disadvantages are important for payment channels between two people, but much less important in the context of Lightning Network. First point stops being a disadvantage when one channel can be used to pay to various different people.

Second point is also basically non-existent in LN, because one can outsource correctness verification to a third party. If Bob is not online when Alice is closing the channel, and some random David discovers that Alice is cheating, then both Bob and David can split Alice’s confiscated deposit.

One more small note before we move further. You may think that operating a payment channel requires a lot of bookkeeping: tracking and signing different versions of transactions, exchanging signed these transactions and also temporary keys. And you will certainly be right. _Good news is: when properly implemented, this will be all happening behind the scenes_, the users will just send the money and receive them.

# 4. Lightning Network

## 4.1. Payment channel though an intermediary

Let’s now assume that Alice and Bob do not have a payment channel between each other, but both have an open channel with Victor. Alice can safely transfer money to Victor, Victor can safely transfer money to Bob.

But how to make sure that Victor, once he receives the money, will indeed pass them further to Bob?

The idea here is going to be quite similar to the previous trick. But instead of one-time private keys, they will use a secret number.

1. When the payment is initiated, Bob selects a secret number _S_, computes a hash of this number _HS_, and transfers this information to Alice. _HS_ can also be used as a virtual receipt.
2. Alice creates a transaction _AV_ that transfers the money to Victor, but only in case Victor shows a secret number _S_. For that she uses a script checking the hash of the provided number and comparing it to the value of _HS_ (this is where we need `OP_SHA256` and `OP_EqualVerify`).
3. Victor is creating a similar transaction _VB_ transferring money to Bob, but only if Bob provides a secret number _S_.
4. Bob sees that he will be able to get the money from Victor and shows him his secret number _S_.
5. Now Victor can prove to Alice he transferred the money and successfully receive transaction _AV_.

There are couple of scenarios possible.

1. First, it does not make sense for Victor to cheat. By design, if he does not pass the money to Bob, he will not get the money from Alice.
2. But Bob can decide to cheat and not to reveal the secret key to Victor. To get the money Bob will need to close the channel with Victor and to submit transaction _VB_ to the blockchain. _But_ to actually spend the money, Bob will need to show his secret number anyway. And as the blockchain is public, Victor will also see it.

There is a couple of non-trivial technicalities with selecting the right timeframe for Alice, Victor and Bob to resolve possible conflicts. But these technicalities are way out of scope of this introductory article. If interested — google _Hash Time-Locked Contracts (HTLCs)_.

## 4.2. Routing

In practice Alice and Bob can be connected through any arbitrary number of unknown/anonymous intermediaries across the whole world. The problem of finding the most optimal path of intermediaries in a graph of network nodes is called a _routing problem_.

{{% image "/img/mln-854.png" %}}
_Geographical distribution of bitcoin testnet nodes ([https://explorer.acinq.co/#/](https://explorer.acinq.co/#/))._
{{% /image %}}

The routing problem is in fact an area of active research at the moment. Optimal path depends on many dynamic factors: the availability of nodes, network topology, channels throughput, intermediaries fees.

Without going into too many details, finding the path and passing the payments in LN is currently done based on [_Onion routing_](https://en.wikipedia.org/wiki/Onion_routing) _—_ a technology for anonymous peer-to-peer routing, which is also used, for example, in [Tor](https://www.torproject.org/).

Everything is decentralized, the traffic is encrypted. No intermediary knows from whom the bitcoins come and where they go. One more advantage follows from this.

{{< hint btc >}}
***👍 Advantages:** Lightning Network is much more anonymous than bitcoin itself. First, an absolute majority of the transactions are never recorded in a public ledger, these transactions are only visible to a handful of nodes. Second, even among the nodes involved in routing, only the first and the last node knows the source and the destination of the payment.*
{{< /hint >}}

## 4.3. Fees economy

Only two major questions left.

**Question number 1:** why would an intermediary node process any payments from someone else?

First of all, because good connectivity allows them to use LN more efficiently. Second, because they receive fee: usually _very small_, but motivational enough.

At the moment the network is mostly supported by enthusiasts and the fees are almost zero: 1 satoshi, or ~0.01 _cents_ for every intermediary node.

{{< hint btc >}}
*👍 The “bandwidth” of payment channels is a much less valuable resource than the block size. Channels are cheap and easy to open. Because of that fees in LN are orders of magnitude smaller than the fees in the main bitcoin blockchain.*
{{< /hint >}}

**Question number 2:** and what about the miner fees payed on the main blockchain to open/close payment channels?

Indeed, these fees can be quite large, reaching sometimes tens of dollars. Therefore, payments are going to be cheaper if the channels are open/closed rarely.

This in turn motivates people to open channels with larger deposits, and to use channels bi-directionally: not only for outgoing payments, but also for incoming ones.

_Example_: I open a channel and fund it with 1000 dollars to use it for only outgoing payments. The turnover in the channel over the lifetime will be exactly 1000 dollars, and I will pay ~20 dollars in fees to open and close the channel. This results in 2% fees. Slightly lower than visa and mastercard, but still not as low as I would like.

The situation changes dramatically when the I start using Lightning to the fullest: deposit larger amounts and also start receiving money through channels. Then, depending on the proportion of spent/received money, _the channel can be open forever and the fees will be converging to almost zero in the limit_.

## 4.4. Criticism

It is easy to find lots of criticism of second layer solutions in general and of Lightning Network in particular. Some points actually deserve attention, some are outdated myths. Here is a couple of examples.

> *1. Using LN leads to centralization: users benefit from connecting to large hubs, and few of these hubs can control all the traffic.*

This is a valid concern and deserves attention, but the risks are not huge. First, it is economically profitable and very simple to run a new node bypassing large hubs. Second, routing algorithms should balance the traffic among all the possible paths. And third, at least for the moment we [do not see this centralization happening](https://lnmainnet.gaben.win/). Going forward, I hope the optimal topology is going to be encouraged by wallet software itself.

> *2. Low channel throughput will result in LN congestion, fees rising, and the situation will be as bad as in the main bitcoin blockchain.*

Again, as soon as this starts happening, people will have larger economic incentives to run their own nodes. Unlike the block size, the number of nodes/channels is almost unlimited.

> *3. Efficient and effective routing on large number of peer-to-peer nodes is impossible. Especially when accounting the cost of opening new channels.*

These problems are _far-far-far_ into the future. But the research in this direction is already happening ([example](http://bitfury.com/content/5-white-papers-research/whitepaper_flare_an_approach_to_routing_in_lightning_network_7_7_2016.pdf)). The community will come up with something.

> *4. Channels need to be often opened and closed. Fees spent on that will be high, and LN will become more and more expensive.*

Actually, this is an outdated myth still circling around. Early proposals of payments channels indeed were uni-directional and could last only for a fixed time. Now these problems are both solved.

> *5. You need to be online to use LN.*

Partly true. Unlike early LN implementations, there is no need to be always online: other participants can monitor my open channels and verify that no one is cheating. But you indeed need to be online to send/receive money. This is of course a limitation, but a much less significant one.

> *6. LN is not compatible with cold storage.*

This is a very good point and valid concern. Funds locked in payment channels are controlled by the wallets being online (_hot wallets_). So additional security for nodes will be required to protect against hackers.

> *7. LN transactions are not as safe as on-chain transactions.*

LN payments are indeed more risky than on-chain transactions. But only [in case of a successful 51% attack](https://blog.bitmex.com/the-lightning-network/). The risk of it is very-very small.

# 5. LN today

The most important thing you need to know: Lightning is already here and it really works.

[More than a thousand nodes](https://explorer.acinq.co/#/) in bitcoin testnet and [more then three hundred nodes](https://lnmainnet.gaben.win/) (growing every day) in mainnet are already processing transactions and testing different software today.

{{< x user="starkness" id="953434418948927488" >}}

_Co-founder of Lightning Labs does not recommend running mainnet nodes for the moment._

As for software, there are three main implementation: [lnd](https://github.com/lightningnetwork/lnd) from _Lightning Labs_, [c-lightning](https://github.com/ElementsProject/lightning) from _Blockstream_, [eclair](https://github.com/ACINQ/eclair) from _ACINQ_. These teams have been working for years to create standard specifications for nodes interactions called [_Lightning Network Specifications (BOLTs)_](https://github.com/lightningnetwork/lightning-rfc). And recently, in the end of 2016, they performed massive successful payment testing. All three implementations proved to be compatible.

At the moment, you can pay with real bitcoins using LN in only three or four online shops. But this is a whole three or four shops more than just a month ago, so this is already a great success 😊

Of course, the moment of ubiquitous transition from _on-chain_ bitcoin payments to _off-chain_ payments is still far away. A huge work should still be carried out by developers of wallets, payment gateways, exchanges, online stores. And, of course, by users themselves.

The most interesting in this story is that faster, cheaper and more anonymous transactions — is only the beginning of the story! Soon we will see even more anonymity, atomic swaps, decentralized exchanges and many more cool things. The future is exciting! ⚡

_More technical details about LN:_ [_1_](https://lightning.network/lightning-network-paper.pdf)_,_ [_2_](https://github.com/bitcoin/bips/blob/master/bip-0112.mediawiki)_,_ [_3_](https://github.com/lightningnetwork/lightning-rfc)_,_ [_4_](https://github.com/ElementsProject/lightning/blob/master/doc/deployable-lightning.pdf)_,_ [_5_](https://blog.bitmex.com/the-lightning-network/)_._

---

Please do comment, criticize, ask questions, subscribe. More about the author: [http://laptev.ch](http://laptev.ch).