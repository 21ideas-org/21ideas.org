---
title: "Bitcoin Privacy"
h1: "Bitcoin Privacy"
cover: /img/priv-903.jpeg
description: "While Bitcoin can support strong privacy, many ways of using it are usually not very private. With a proper understanding of the technology, bitcoin can indeed be used in a very private and anonymous way."
url: wiki-bitcoin-privacy
aliases: ['/privacy-wiki-bitcoin-privacy']
date: 2019-02-01
bookFlatSection: false
bookToc: true
weight: 4
---

While Bitcoin can support strong **privacy**, many ways of using it are usually not very private. With a proper understanding of the technology, bitcoin can indeed be used in a very private and anonymous way.

{{< hint btc >}}
This article was published on [en.bitcoin.it](https://en.bitcoin.it/wiki/Privacy) wiki.

[Contribute](/contribute/).
{{< /hint >}}

As of 2019 most casual enthusiasts of bitcoin believe it is perfectly traceable; this is completely false. Around 2011 most casual enthusiasts believed it is totally private; which is also false. There is some nuance - in certain situations, bitcoin can be very private. But it is not simple to understand, and it takes some time and reading.

This article was written in February 2019. A good way to read the article is to [skip to the examples](/en/wiki-bitcoin-privacy/#examples-and-case-studies) and then come back to read the core concepts.

# Summary

To save you reading the rest of the article, here is a quick summary of how normal bitcoin users can improve their privacy:

- Think about what you're hiding from, what is your threat model and what is your adversary. Note that [transaction surveillance companies](https://en.bitcoin.it/wiki/Transaction_surveillance_company "Transaction surveillance company") exist which do large-scale surveillance of the bitcoin ecosystem.
- Do not reuse addresses. Addresses should be shown to one entity to receive money, and never used again after the money from them is spent.
- Try to reveal as little information as possible about yourself when transacting, for example, avoid AML/KYC checks and be careful when giving your real-life mail address.
- Use a wallet backed by your own full node or [client-side block filtering](https://en.bitcoin.it/wiki/Client-side_block_filtering "Client-side block filtering"), definitely not a web wallet.
- Broadcast on-chain transactions over Tor, if your wallet doesn't support it then copy-paste the transaction hex data into a web broadcasting form over Tor browser.
- Use Lightning Network as much as possible.
- If lightning is unavailable, use a wallet that correctly implements CoinJoin.
- Try to avoid creating change addresses, for example when funding a lightning channel spend an entire UTXO into it without any change (assuming the amount is not too large to be safe).
- If [digital forensics](/en/wiki-bitcoin-privacy/#digital-forensics) are a concern then use a solution like [Tails Operating System](https://tails.boum.org/).

See also [the privacy examples](/en/wiki-bitcoin-privacy/#examples-and-case-studies) for real-life case-studies.

# Introduction

Users interact with bitcoin through software which may leak information about them in various ways that damage their anonymity.

Bitcoin records transactions on the block chain which is visible to all and so creates the most serious damage to privacy. Bitcoins move between addresses; sender addresses are known, receiver addresses are known, and amounts are known. Only the identity of each address is not known (see first image).

The linkages between addresses made by transactions are often called the transaction graph. Alone, this information can't identify anyone because the addresses and transaction IDs are just random numbers. However, if _any_ of the addresses in a transaction's past or future can be tied to an actual identity, it might be possible to work from that point and deduce who may own all of the other addresses. This identification of an address might come from network analysis, surveillance, searching the web, or a variety of other methods. The encouraged practice of using a new address for every transaction is intended to make this attack more difficult.

{{% image "/img/priv-904.png" %}}
_The flow of Bitcoins is highly public._
{{% /image %}}

## Example - Adversary controls source and destination of coins

The second image shows a simple example. An adversary runs both a money exchanger and a honeypot website meant to trap people. If someone uses their exchanger to buy bitcoins and then transacts the coins to the trap website, the block chain would show:

{{% image "/img/priv-905.png" %}}
_Finding an identity of one address allows you to attack the anonymity of the transactions._
{{% /image %}}

- Transaction of coins on address A to address B. Authorized by \<signature of address A\>.
- Transaction of coins on address B to address C. Authorized by \<signature of address B\>.

Say that the adversary knows that Mr. Doe's bank account sent the government currency which were used to buy the coins, which were then transferred to address B. The adversary also knows the trap website received coins on address C that were spent from address B. Together this is a **very strong indication** that address B is owned by Mr. Doe and that he sent money to the trap website. This assumption is not always correct because address B may have been an address held on behalf of Mr. Doe by a third party and the transaction to C may have been unrelated, or the two transactions may actually involve a smart contract (See [Off-Chain Transactions](https://en.bitcoin.it/wiki/Off-Chain_Transactions "Off-Chain Transactions")) which effectively teleports the coins off-chain to a completely different address somewhere on the blockchain.

## Example - Non-anonymous Chinese newspaper buying

In this example, the adversary controls the destination and finds the source from metadata.

1. You live in China and want to buy a "real" online newspaper for Bitcoins.
2. You join the Bitcoin forum and use your address as a signature. Since you are very helpful, you manage to get a modest sum as donations after a few months.
3. Unfortunately, you choose poorly in who you buy the newspaper from: you've chosen a government agent!
4. The government agent looks at the transaction used to purchase the newspaper on the block chain, and searches the web every relevant address in it. He finds your address in your signature on the Bitcoin forum. You've left enough personal information in your posts to be identified, so you are now scheduled to be "reeducated".
5. A major reason this happened is because of address reuse. Your forum signature had a single bitcoin address that never changed, so it was easy to find by searching the web.

You need to protect yourself from both forward attacks (getting something that identifies you using coins that you got with methods that must remain secret, like the scammer example) and reverse attacks (getting something that must remain secret using coins that identify you, like the newspaper example).

## Example - A perfectly private donation

On the other hand, here is an example of somebody using bitcoin to make a donation that is completely anonymous.

1. The aim is to donate to some organization that accepts bitcoin.
2. You run a Bitcoin Core wallet entirely through Tor.
3. Download some extra few hundred gigabytes of data over Tor so that the total download bandwidth isn't exactly blockchain-sized.
4. Solo-mine a block, and have the newly-mined coins sent to your wallet.
5. Send the entire balance to a donation address of that organization.
6. Finally you destroy the computer hardware used.

As your full node wallet runs entirely over Tor, your IP address is very well hidden. Tor also hides the fact that you're using bitcoin at all. As the coins were obtained by mining they are entirely unlinked from any other information about you. Since the transaction is a donation, there are no goods or services being sent to you, so you don't have to reveal any delivery mail address. As the entire balance is sent, there is no change address going back that could later leak information. Since the hardware is destroyed there is no record remaining on any discarded hard drives that can later be found. The only way I can think of to attack this scheme is to be a [global adversary](https://www.torproject.org/docs/faq.html.en#AttacksOnOnionRouting) that can exploit the known weaknessness of Tor.

## Multiple interpretations of a blockchain transaction

Bitcoin transactions are made up of inputs and outputs, of which there can be one or more. Previously-created outputs can be used as inputs for later transactions. Such outputs are destroyed when spent and new unspent outputs are usually created to replace them.

Consider this example transaction:

```
1 btc  ---->  1 btc 
3 btc         3 btc
```

This transaction has two inputs, worth 1 btc and 3 btc, and creates two outputs also worth 1 btc and 3 btc.

If you were to look at this on the blockchain, what would you assume is the meaning of this transaction? (for example, we usually assume a bitcoin transaction is a payment but it doesn't have to be).

There are _at least nine'_ possible [^1] interpretations:

1. Alice provides both inputs and pays 3 btc to Bob. Alice owns the 1 btc output (i.e. it is a change output).
2. Alice provides both inputs and pays 1 btc to Bob, with 3 btc paid back to Alice as the change.
3. Alice provides 1 btc input and Bob provides 3 btc input, Alice gets 1 btc output and Bob gets 3 btc output. This is a kind of CoinJoin transaction.
4. Alice pays 2 btc to Bob. Alice provides 3 btc input, gets the 1 btc output; Bob provides 1 btc input and gets 3 btc. This would be a [PayJoin](https://en.bitcoin.it/wiki/PayJoin "PayJoin") transaction type.
5. Alice pays 4 btc to Bob (but using two outputs for some reason).
6. Fake transaction - Alice owns all inputs and outputs, and is simply moving coins between her own addresses.
7. Alice pays Bob 3 btc and Carol 1 btc. This is a [batched payment with no change address](https://en.bitcoin.it/wiki/Techniques_to_reduce_transaction_fees#Change_avoidance "Techniques to reduce transaction fees").
8. Alice pays 3, Bob pays 1; Carol gets 3 btc and David gets 1 btc. This is some kind of CoinJoined batched payment with no change address.
9. Alice and Bob pay 4 btc to Carol (but using two outputs).

Many interpretations are possible just from such a simple transaction. Therefore it's completely false to say that bitcoin transactions are always perfectly traceable, the reality is much more complicated.

Privacy-relevant adversaries who analyze the blockchain usually rely on _heuristics_ (or _idioms of use_) where certain assumptions are made about what is plausible. The analyst would then ignore or exclude some of these possibilities. But those are only assumptions which can be wrong. Someone who wants better privacy they can intentionally break those assumptions which will completely fool an analyst.

Units of the bitcoin currency are not watermarked within a transaction (in other words they don't have little serial numbers). For example the 1 btc input in that transaction may end up in the 1 btc output or part of the 3 btc output, or a mixture of both. Transactions are many-to-many mappings, so in a very important sense it's impossible to answer the question of where the 1 btc ended up. This fungibility of bitcoin within one transaction is an important reason for the different possibility interpretations of the above transaction.

## Threat model

When considering privacy you need to think about exactly who you're hiding from. You must examine how a hypothetical adversary could spy on you, what kind of information is most important to you and which technology you need to use to protect your privacy. The kind of behaviour needed to protect your privacy therefore depends on your threat model.

Newcomers to privacy often think that they can simply download some software and all their privacy concerns will be solved. This is not so. Privacy requires a change in behaviour, however slight. For example, imagine if you had a perfectly private internet where who you're communicating with and what you say are completely private. You could still use this to communicate with a social media website to write your real name, upload a selfie and talk about what you're doing right now. Anybody on the internet could view that information so your privacy would be ruined even though you were using perfectly private technology.

For details read the talk [Opsec for Hackers by grugq](https://www.slideshare.net/grugq/opsec-for-hackers). The talk is aimed mostly at political activists who need privacy from governments, but much the advice generally applies to all of us.

Much of the time plausible deniability is not good enough because lots of spying methods only need to work on a statistical level (e.g. targeted advertising).

## Method of data fusion

{{% image "/img/priv-906.png" %}}
_Data fusion diagram showing how two different privacy leaks can damage privacy far more in combination._
{{% /image %}}

Multiple privacy leaks when combined together can be far more damaging to privacy than any single leak. Imagine if a receiver of a transaction is trying to deanonymize the sender. Each privacy leak would eliminate many candidates for who the sender is, two different privacy leaks would eliminate _different_ candidates leaving far fewer candidates remaining. See the diagram for a diagram of this.

{{% image "/img/priv-907.png" %}}
_Data fusion diagram example with newspaper buyer._
{{% /image %}}

This is why even leaks of a small amount of information should be avoided, as they can often completely ruin privacy when combined with other leaks. Going back to the example of the non-anonymous Chinese newspaper buyer, who was deanonymized because of a combination of visible transaction information and his forum signature donation address. There are many many transactions on the blockchain which on their own don't reveal anything about the transactor's identity or spending habits. There are many donation addresses placed in forum signatures which also don't reveal much about the owners identity or spending habits, because they are just random cryptographic information. But together the two privacy leaks resulted in a trip to the reeducation camp. The method of data fusion is very important when understanding privacy in bitcoin (and other situations).

## Why privacy

Financial privacy is an essential element to fungibility in Bitcoin: if you can meaningfully distinguish one coin from another, then their fungibility is weak. If our fungibility is too weak in practice, then we cannot be decentralized: if someone important announces a list of stolen coins they won't accept coins derived from, you must carefully check coins you accept against that list and return the ones that fail. Everyone gets stuck checking blacklists issued by various authorities because in that world we'd all not like to get stuck with bad coins. This adds friction, transactional costs and allows the blacklist provider to engage in censorship, and so makes Bitcoin less valuable as a money.

Financial privacy is an essential criteria for the efficient operation of a free market: if you run a business, you cannot effectively set prices if your suppliers and customers can see all your transactions against your will. You cannot compete effectively if your competition is tracking your sales. Individually your informational leverage is lost in your private dealings if you don't have privacy over your accounts: if you pay your landlord in Bitcoin without enough privacy in place, your landlord will see when you've received a pay raise and can hit you up for more rent.

Financial privacy is essential for personal safety: if thieves can see your spending, income, and holdings, they can use that information to target and exploit you. Without privacy malicious parties have more ability to steal your identity, snatch your large purchases off your doorstep, or impersonate businesses you transact with towards you... they can tell exactly how much to try to scam you for.

Financial privacy is essential for human dignity: no one wants the snotty barista at the coffee shop or their nosy neighbors commenting on their income or spending habits. No one wants their baby-crazy in-laws asking why they're buying contraception (or sex toys). Your employer has no business knowing what church you donate to. Only in a perfectly enlightened discrimination free world where no one has undue authority over anyone else could we retain our dignity and make our lawful transactions freely without self-censorship if we don't have privacy.

Most importantly, financial privacy isn't incompatible with things like law enforcement or transparency. You can always keep records, be ordered (or volunteer) to provide them to whomever, have judges hold against your interest when you can't produce records (as is the case today). None of this requires _globally_ visible public records.

Globally visible public records in finance are completely unheard-of. They are undesirable and arguably intolerable. The Bitcoin whitepaper made a promise of how we could get around the visibility of the ledger with pseudonymous addresses, but the ecosystem has broken that promise in a bunch of places and we ought to fix it. Bitcoin could have coded your name or IP address into every transaction. It didn't. The whitepaper even has a section on privacy. It's incorrect to say that Bitcoin isn't focused on privacy. Sufficient privacy is an essential prerequisite for a viable digital currency [^2].

# Blockchain attacks on privacy

Bitcoin uses a block chain. Users can download and verify the blockchain to check that all the rules of bitcoin were followed throughout its history. For example, users can check that nobody printed infinite bitcoins and that every coin was only spent with a [valid signature](https://en.bitcoin.it/wiki/OP_CHECKSIG "OP CHECKSIG") created by its [private key](https://en.bitcoin.it/wiki/Private_key "Private key"). This is what leads to [bitcoin's unique value proposition](https://en.bitcoin.it/wiki/Bitcoin_as_a_medium_of_exchange "Bitcoin as a medium of exchange") as a form of electronic cash which requires [only small amounts of trust](https://en.bitcoin.it/wiki/Principles_of_Bitcoin#Low_trust "Principles of Bitcoin"). But the same blockchain structure leads to privacy problems because every transaction must be available for all to see, forever. This section discusses known methods an adversary may use for analyzing the public blockchain.

Bitcoin uses a UTXO model. Transactions have inputs and outputs, they can have one or more of each. Previous outputs can be used as inputs for later transactions. An output which hasn't been spent yet is called an unspent transaction output (UTXO). UXTOs are often called "coins". UTXOs are associated with a bitcoin address and can be spent by creating a valid signature corresponding to the scriptPubKey of the address.

Addresses are cryptographic information, essentially random numbers. On their own they do not reveal much about the real owner of any bitcoins on them. Usually an adversary will try to link together multiple addresses which they believe belong to the same wallet. Such address collections are called "clusters", "closures" or "wallet clusters", and the activity of creating them is called "wallet clustering". Once the clusters are obtained the adversary can try to link them real-world identities of entities it wants to spy on. For example, it may find wallet cluster A belonging to Alice and another wallet cluster B belonging to Bob. If a bitcoin transaction is seen paying from cluster A to cluster B then the adversary knows that Alice has sent coins to Bob.

It can be very difficult to fine-tune heuristics for wallet clustering that lead to obtaining actually correct information [^3].

## Common-input-ownership heuristic

This is a heuristic or assumption which says that if a transaction has more than one input then all those inputs are owned by the same entity.

For example, consider this transaction with inputs A, B and C; and outputs X and Y.

```
A (1 btc) --> X (4 btc)
B (2 btc)     Y (2 btc)
C (3 btc)
```

This transaction would be an indication that addresses B and C are owned by the same person who owns address A.

One of the purposes of CoinJoin is to break this heuristic. Nonetheless this heuristic is very commonly true and it is widely used by [transaction surveillance companies](https://en.bitcoin.it/wiki/Transaction_surveillance_company "Transaction surveillance company") and other adversaries as of 2019. The heuristic is usually combined with address reuse reasoning, which along with the somewhat-centralized bitcoin economy as of 2018 is why this heuristic can be unreasonably effective [^4]. The heuristic's success also depends on the wallet behaviour: for example, if a wallet usually receives small amounts and sends large amounts then it will create many multi-input transactions.

## Change address detection

Many bitcoin transactions have change outputs. It would be a serious privacy leak if the change address can be somehow found, as it would link the ownership of the (now spent) inputs with a new output. Change outputs can be very effective when combined with other privacy leaks like the common-input-ownership heuristic or address reuse. Change address detection allows the adversary to cluster together newly created address, which the common-input-ownership heuristic and address reuse allows past addresses to be clustered.

Change addresses lead to a common usage pattern called the **peeling chain**. It is seen after a large transactions from exchanges, marketplaces, mining pools and salary payments. In a peeling chain, a single address begins with a relatively large amount of bitcoins. A smaller amount is then peeled off this larger amount, creating a transaction in which a small amount is transferred to one address, and the remainder is transferred to a one-time change address. This process is repeated - potentially for hundreds or thousands of hops - until the larger amount is pared down, at which point (in one usage) the amount remaining in the address might be aggregated with other such addresses to again yield a large amount in a single address, and the peeling process begins again [^5].

Now are listed possible ways to infer which of the outputs of a transaction is the change output:

### Address reuse

If an output address has been reused it is very likely to be a payment output, not a change output. This is because change addresses are created automatically by wallet software but payment addresses are manually sent between humans. The address reuse would happen because the human user reused an address out of ignorance or apathy. This heuristic is probably the most accurate, as it is very hard to imagine how false positives would arise (except by intentional design of wallets). This heuristic is also called the "shadow heuristic".

Some very old software (from the 2010-2011 era which did not have [Deterministic wallets](https://en.bitcoin.it/wiki/Deterministic_wallet "Deterministic wallet")) did not use a new address change but sent the change back to the input address. This reveals the change address exactly.

Avoiding address reuse is an obvious remedy. Another idea is that those wallets could automatically detect when a payment address has been used before (perhaps by asking the user) and then use a reused address as their change address; so both outputs would be reused addresses.

Also, most reused addresses are mentioned on the internet, forums, social networks like Facebook, Reddit, Stackoverflow...etc. These addresses you can find and check on [https://checkbitcoinaddress.com/](https://checkbitcoinaddress.com/) site. It's like a little bit de-anonymization of pseudo-anonymized blockchain.

### Wallet fingerprinting

A careful analyst sometimes deduce which software created a certain transaction, because the many different wallet softwares don't always create transactions in exactly the same way. Wallet fingerprinting can be used to detect change outputs because a change output is the one spent with the same wallet fingerprint.

As an example, consider five typical transactions that consume one input each and produce two outputs. A, B, C, D, E refer to transactions. A1, A2, etc refer to output addresses of those transactions

```
           --> C1
A1 --> B1  --> C2
   --> B2  --> D1
           --> D2 --> E1
                  --> E2
```

  

If wallet fingerprinting finds that transactions A, B, D and E are created by the same wallet software, and the other transactions are created by other software, then the change addresses become obvious. The same transactions with non-matching addresses replaced by X is shown. The peel chain is visible, it's clear that B2, D2, E1 are change addresses which belong to the same wallet as A1.

```
           --> X
A1 --> X   --> X
   --> B2  --> X
           --> D2 --> E1
                  --> X
```

There are a number of ways to get evidence used for identifying wallet software:

- Address formats. Wallets generally only use one address type. If a transaction has all inputs and one output of the same address type (e.g. p2pkh), with the remaining output of a different type (p2sh), then a reasonable assumption is that the same-address-format output (p2pkh) is change and the different-address-format output (p2sh) is the payment which belongs to someone else.

- [Script](https://en.bitcoin.it/wiki/Script "Script") types. Each wallet generally uses only one script. For example, the sending wallet may be a [P2SH](https://en.bitcoin.it/wiki/P2SH "P2SH") 2-of-3 [multisignature](https://en.bitcoin.it/wiki/Multisignature "Multisignature") wallet, which makes a transaction to two outputs: one 2-of-3 multisignature address and the other 2-of-2 multisignature address. The different script is a strong indication that the output is payment and the other output is change.

- [BIP69](https://en.bitcoin.it/wiki/BIP_0069 "BIP 0069") Lexicographical Indexing of Transaction Inputs and Outputs. This BIP describes a standard way for wallets to order their inputs and outputs for privacy. Right now the wallet ecosystem has a mixture of wallets which do and don't implement the standard, which helps with fingerprinting. Note that the common one-input-two-output transaction with random ordering will follow BIP69 just by chance 50% of the time.

- Number of inputs and outputs. Different users often construct transactions differently. For example, individuals often make transaction with just two outputs; a payment and change, while high-volume institutions like casinos or exchanges use [consolidation](https://en.bitcoin.it/wiki/Techniques_to_reduce_transaction_fees#Consolidation "Techniques to reduce transaction fees") and [batching](https://en.bitcoin.it/wiki/Techniques_to_reduce_transaction_fees#Payment_batching "Techniques to reduce transaction fees") [^6] [^7]. An output that is later use to create a batching transaction was probably not the change. This heuristic is also called the "consumer heuristic".

- Transaction fields. Values in the transaction format which may vary depending on the wallet software: [nLockTime](https://en.bitcoin.it/wiki/NLockTime "NLockTime") is a field in transactions set by some wallets to make [fee sniping](https://en.bitcoin.it/wiki/Fee_sniping "Fee sniping") less profitable. A mixture of wallets in the ecosystem do and don't implement this feature. nLockTime can also be used as in certain privacy protocols like [CoinSwap](https://en.bitcoin.it/wiki/CoinSwap "CoinSwap"). [nSequence](https://en.bitcoin.it/wiki/Transaction#General_format_.28inside_a_block.29_of_each_input_of_a_transaction_-_Txin "Transaction") is another example. Also the version number.

- Low-R value signatures. The DER format used to encode Bitcoin signatures requires adding an entire extra byte to a signature just to indicate when the signature’s R value is on the top-half of the elliptical curve used for Bitcoin. The R value is randomly derived, so half of all signatures have this extra byte. As of July 2018 [^8] Bitcoin Core only generates signatures with a low-R value that don't require this extra byte. By doing so, Bitcoin Core transactions will save one byte per every two signatures (on average). As of 2019 no other wallet does this, so a high-R signature is evidence that Bitcoin Core is not being used [^9].

- Uncompressed and compressed public keys. Older wallet software uses uncompressed public keys [^10]. A mixture of compressed and uncompressed keys can be used for fingerprinting.

- Miner fees. Various wallet softwares may respond to block space pressure in different ways which could lead to different kinds of miner fees being paid. This might also be a way of fingerprinting wallets.

- Coin Selection. Various wallet softwares may choose which UTXOs to spend using different algorithms that could be used for fingerprinting.

If multiple users are using the same wallet software, then wallet fingerprinting cannot detect the change address. It is also possible that a single user owns two different wallets which use different software (for example a hot wallet and cold wallet) and then transactions between different softwares would not indicate a change of ownership. Wallet fingerprinting on its own is never decisive evidence, but as with all other privacy leaks it works best with data fusion when multiple privacy leaks are combined.

### Round numbers

Many payment amounts are round numbers, for example 1 BTC or 0.1 BTC. The leftover change amount would then be a non-round number (e.g. 1.78213974 BTC). This potentially useful for finding the change address. The amount may be a round number in another currency. The amount 2.24159873 BTC isn't round in bitcoin but when converted to USD it may be close to $100.

### Fee bumping

[BIP 0125](https://en.bitcoin.it/wiki/BIP_0125 "BIP 0125") defines a mechanism for replacing an unconfirmed transaction with another transaction that pays a higher fee. In the context of the [market for block space](https://en.bitcoin.it/wiki/Miner_fees#The_market_for_block_space "Miner fees"), a user may find their transaction isn't confirming fast enough so they opt to ["fee bump"](https://en.bitcoin.it/wiki/Fee_bumping "Fee bumping") or pay a higher miner fee. However generally the new higher miner fee will happen by reducing the change amount. So if an adversary is observing all unconfirmed transactions they could see both the earlier low-fee transaction and later high-fee transaction, and the output with the reduced amount would be the change output.

This could be mitigated by some of the time reducing the amount of both outputs, reducing the payment amount instead of change (in a receiver-pays-for-fee model), or replacing both addresses in each RBF transaction (this would require obtaining multiple payment addresses from the receiver).

### Unnecessary input heuristic

Also called the "optimal change heuristic". Consider this bitcoin transaction. It has two inputs worth 2 BTC and 3 BTC and two outputs worth 4 BTC and 1 BTC.

```
2 btc --> 4 btc
3 btc     1 btc
```

Assuming one of the outputs is change and the other output is the payment. There are two interpretations: the payment output is either the 4 BTC output or the 1 BTC output. But if the 1 BTC output is the payment amount then the 3 BTC input is unnecessary, as the wallet could have spent only the 2 BTC input and paid lower miner fees for doing so. This is an indication that the real payment output is 4 BTC and that 1 BTC is the change output.

This is an issue for transactions which have more than one input. One way to fix this leak is to add more inputs until the change output is higher than any input, for example:

```
2 btc --> 4 btc
3 btc     6 btc
5 btc
```

Now both interpretations imply that some inputs are unnecessary. Unfortunately this costs more in miner fees and can only be done if the wallet actually owns other UTXOs.

Some wallets have a coin selection algorithm which violates this heuristic. An example might be because the wallets want to [consolidate inputs](https://en.bitcoin.it/wiki/Techniques_to_reduce_transaction_fees#Consolidation "Techniques to reduce transaction fees") in times of cheap miner fees. So this heuristic is not decisive evidence.

### Sending to a different script type

Sending funds to a different script type than the one you're spending from makes it easier to tell which output is the change.

For example, for a transaction with 1 input spending a p2pkh coin and creating 2 outputs, one of p2pkh and one of p2sh, it is very likely that the p2pkh output is the change while the p2sh one is the payment.

This is also possible if the inputs are of mixed types (created by wallets supporting multiple script types for backwards compatibility). If one of the output script types is known to be used by the wallet (because the same script type is spent by at least one of the inputs) while the other is not, the other one is likely to be the payment.

This has the most effect on early adopters of new wallet technology, like p2sh or segwit. The more rare it is to pay to people using the same script type as you do, the more you leak the identity of your change output. This will improve over time as the new technology gains wider adoption.

### Wallet bugs

Some wallet software handles change in a very un-private way. For example certain old wallets would always put the change output in last place in the transaction. An old version of Bitcoin Core would add input UTXOs to the transaction until the change amount was around 0.1 BTC, so an amount of slightly over 0.1 BTC would always be change.

### Equal-output CoinJoin

Equal-output-CoinJoin transactions trivially reveal the change address because it is the outputs which are not equal-valued. For example consider this equal-output-coinjoin:

```
              A (1btc)
X (5btc) ---> B (1btc)
Y (3btc)      C (4btc)
              D (2btc)
```

There is a very strong indication that output D is change belongs to the owner of input Y, while output C is change belonging to input X. However, CoinJoin breaks the common-input-ownership heuristic and effectively hides the ownership of payment outputs (A and B), so the tradeoffs are still heavily in favour of using coinjoin.

### Cluster growth

Wallet clusters created by using the common-input-ownership heuristic usually grow (in number of addresses) slowly and incrementally [^11]. Two large clusters merging is rare and may indicate that the heuristics are flawed. So another way to deduce the change address is to find which output causes the clusters to grow only slowly. The exact value for "how slowly" a cluster is allowed to grow is an open question.

## Transaction graph heuristic

As described in the introduction, addresses are connected together by transactions on the block chain. The mathematical concept of a [graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)) can be used to describe the structure where addresses are connected with transactions. Addresses are vertices while transactions are edges in this transaction graph.

This is called a heuristic because transactions on the block chain do not necessarily correspond to real economic transactions. For example the transaction may represent someone sending bitcoins to themselves. Also, real economic transactions may not appear on the block chain but be [off-chain](https://en.bitcoin.it/wiki/Off-Chain_Transactions "Off-Chain Transactions"); either via a custodial entity like an exchange, or non-custodial off-chain like Lightning Network.

### Taint analysis

_Taint analysis_ is a technique sometimes used to study the flow of bitcoins and extract privacy-relevant information. If an address A is connected to privacy-relevant information (such as a real name) and it makes a transaction sending coins to address B, then address B is said to be _tainted_ with coins from address A. In this way taint is spread by "touching" via transactions [^12]. It is unclear how useful taint analysis is for spying, as it does not take into account transfer of ownership. For example an owner of tainted coins may donate some of them to some charity, the donated coins could be said to be tainted yet the charity does not care and could not give any information about the source of those coins. Taint analysis may only be useful for breaking schemes where someone tries to hide the origin of coins by sending dozens of fake transactions to themselves many times.

## Amount

Blockchain transactions contain amount information of the transaction inputs and outputs, as well as an implicit amount of the miner fee. This is visible to all.

Often the payment amount of a transaction is a round number, possibly when converted to another currency. An analysis of round numbers in bitcoin transactions has been used to measure the countries or regions where payment have happened [^13].

### Input amounts revealing sender wealth

A mismatch in the sizes of available input vs what is required can result in a privacy leak of the total wealth of the sender. For example, when intending to send 1 bitcoins to somebody a user may only have an input worth 10 bitcoins. They create a transaction with 1 bitcoin going to the recipient and 9 bitcoins going to a change address. The recipient can look at the transaction on the blockchain and deduce that the sender owned at least 10 bitcoins.

By analogy with paper money, if you hand over a 100 USD note to pay for a drink costing only 5 USD the bartender learns that your balance is at least 95 USD. It may well be higher of course, but it's at least not lower [^14].

### Exact payment amounts (no change)

Payments that send exact amounts and take no change are a likely indication that the bitcoins didn't move hands.

This usually means that the user used the "send maximum amount" wallet feature to transfer funds to her new wallet, to an exchange account, to fund a lightning channel, or other similar cases where the bitcoins remain under the same ownership.

Other possible reasons for sending exact amounts with no change is that the coin-selection algorithm was smart and lucky enough to find a suitable set of inputs for the intended payment amount that didn't require change (or required a change amount that is negligible enough to waive), or advanced users using manual coin selection to explicitly avoid change.

## Batching

[Payment batching](https://en.bitcoin.it/wiki/Techniques_to_reduce_transaction_fees#Payment_batching "Techniques to reduce transaction fees") is a technique to reduce the miner fee of a payment. It works by batching up several payments into one block chain transaction. It is typically used by exchanges, casinos and other high-volume spenders.

The privacy implication comes in that recipients can see the amount and address of recipients [^15].

When you receive your withdrawal from Kraken, you can look up your transaction on a block chain explorer and see the addresses of everyone else who received a payment in the same transaction. You don’t know who those recipients are, but you do know they received bitcoins from Kraken the same as you.

That’s not good for privacy, but it’s also perhaps not the worst thing. If Kraken made each of those payments separately, they might still be connected together through the change outputs and perhaps also by certain other identifying characteristics that block chain analysis companies and private individuals use to fingerprint particular spenders.

However, it is something to keep in mind if you’re considering batching payments where privacy might be especially important or already somewhat weak, such as making payroll in a small company where you don’t want each employee to learn the other employees’ salaries.

## Unusual scripts

Most but not all bitcoin [scripts](https://en.bitcoin.it/wiki/Script "Script") are single-signature. Other scripts are possible with the most common being [multisignature](https://en.bitcoin.it/wiki/Multisignature "Multisignature"). A script which is particularly unusual can leak information simply by being so unique.

2-of-3 multisig is by far the most common non-single-signature script as of 2019.

## Mystery shopper payment

A [mystery shopper payment](https://en.bitcoin.it/wiki/Mystery_shopper_payments "Mystery shopper payments") is when an adversary pays bitcoin to a target in order to obtain privacy-relevant information. It will work even if address reuse is avoided. For example, if the target is an online merchant then the adversary could buy a small item. On the payment interface they would be shown one of the merchant's bitcoin addresses. The adversary now knows that this address belongs to the merchant and by watching the blockchain for later transactions other information would be revealed, which when combined with other techniques could reveal a lot of data about the merchant. The common-input-ownership heuristic and change address detection could reveal other addresses belonging to the merchant (assuming countermeasures like CoinJoin are not used) and could give a lower-bound for the sales volume. This works because anybody on the entire internet can request one of the merchant's addresses.

## Forced address reuse

**Forced address reuse** is when an adversary pays an (often small) amount of bitcoin to addresses that have already been used on the block chain. The adversary hopes that users or their wallet software will use these _forced payments_ as inputs to a larger transaction which will reveal other addresses via the the common-input-ownership heuristic and thereby leak more privacy-relevant information. These payments can be understood as a way to coerce the address owner into unintentional address reuse [^16] [^17].

This attack is sometimes incorrectly called a **dust attack** [^18].

If the forced-payment coins have landed on already-used _empty_ addresses, then the correct behaviour by wallets is to not spend those coins ever. If the coins have landed on addresses which are not empty, then the correct behaviour by wallets is to fully-spend all the coins on that address in the same transaction.

## Amount correlation

Amounts correlation refers to searching the entire block chain for output amounts.

For example, say we're using any black box privacy technology that breaks the transaction graph.

```
V --> [black box privacy tech] --> V - fee
```

The privacy tech is used to mix V amount of bitcoins, and it returns V bitcoins minus fees back to the user. Amount correlation could be used to unmix this tech by searching the blockchain for transactions with an output amount close to V.

A way to resist amount correlation is to split up the sending of bitcoins back to user into many transactions with output amounts (w0, w1, w2) which together add up to V minus fees.

```
V --> [privacy tech] 	--> w0
			--> w1
			--> w2
```

Another way of using amount correlation is to use it to find a starting point. For example, if Bob wants to spy on Alice. Say that Alice happens to mention in passing that she's going on holiday costing $5000 with her boyfriend, Bob can search all transactions on the blockchain in the right time period and find transactions with output amounts close to $5000. Even if multiple matches are found it still gives Bob a good idea of which bitcoin addresses belong to Alice.

## Timing correlation

Timing correlation refers to using the time information of transactions on the blockchain. Similar to amount correlation, if an adversary somehow finds out the time that an interesting transaction happened they can search the blockchain in that time period to narrow down their candidates.

This can be beaten by uniform-randomly choosing a time between now and an appropriate time_period in which to broadcast the bitcoin transaction. This forces an adversary to search much more of the existing transactions; they have to equally consider the entire anonymity set between now and time_period.

# Non-blockchain attacks on privacy

## Traffic analysis

Bitcoin nodes communicate with each other via a [peer-to-peer network](https://en.bitcoin.it/wiki/Network "Network") to transmit transactions and blocks. [Nodes relay](https://en.bitcoin.it/wiki/Network#Standard_relaying "Network") these packets to all their connections, which has good privacy properties because a connected node doesn't know whether the transmitted data originated from its peer or whether the peer was merely relaying it.

An adversary able to snoop on your internet connection (such as your government, ISP, Wifi provider or VPN provider) can see data sent and received by your node. This would reveal that you are a bitcoin user. Even if a connection is encrypted the adversary could still see the timings and sizes of data packets. A block being mined results in a largely synchronized burst of identically-sized traffic for every bitcoin node, because of this bitcoin nodes are very vulnerable to traffic analysis revealing the fact that bitcoin is being used.

If the adversary sees a transaction or block coming out of your node which did not previously enter, then it can know with near-certainty that the transaction was made by you or the block was mined by you. As internet connections are involved, the adversary will be able to link the IP address with the discovered bitcoin information.

A certain kind of [sybil attack](https://en.bitcoin.it/wiki/Weaknesses#Sybil_attack "Weaknesses") can be used to discover the source of a transaction or block without the adversary entirely controlling the victims internet connection. It works by the adversary creating many of their own fake nodes on different IP addresses which aggressively announce themselves in an effort to attract more nodes to connect to them, they also try to connect to as many other listening nodes as they can. This high connectivity help the adversary to locate the source newly-broadcasted transactions and blocks by tracking them as they propagate through the [network](https://en.bitcoin.it/wiki/Network "Network") [^19] [^20] [^21] [^22]. Some wallets periodically rebroadcast their unconfirmed transactions so that they are more likely to propagate widely through the network and be [mined](https://en.bitcoin.it/wiki/Confirmation "Confirmation").

Some wallets are not full nodes but are lightweight nodes which function in a different way. They generally have far worse privacy properties, but how badly depends on the details of each wallet. Some [lightweight wallets](https://en.bitcoin.it/wiki/Lightweight_node "Lightweight node") can be connected only to your own full node, and if that is done then their privacy with respect to traffic analysis will be improved to the level of a full node.

## Custodial Wallets

Some bitcoin wallets are just front-ends that connects to a back-end server run by some company. This kind of wallet has no privacy at all, the operating company can see all the user's addresses and all their transactions, most of the time they'll see the user's IP address too. Users should not use web wallets.

Main article: [Browser-based wallet](https://en.bitcoin.it/wiki/Browser-based_wallet "Browser-based wallet")

## Wallet history retrieval from third-party

All bitcoin wallets must somehow obtain information about their balance and history, which may leak information about which addresses and transactions belong to them.

### Blockchain explorer websites

[Blockchain explorer websites](https://en.bitcoin.it/wiki/Block_chain_browser "Block chain browser") are commonly used. Some users even search for their transaction on those websites and refresh it until it reaches 3 confirmations. This is very bad for privacy as the website can easily link the user's IP address to their bitcoin transaction (unless Tor is used), and the queries to their website reveal that the transaction or address is of interest to somebody who has certain behavioural patterns.

To get information about your transactions it is much better to use your wallet software, not some website.

### BIP 37

Many [lightweight wallets](https://en.bitcoin.it/wiki/Lightweight_node "Lightweight node") use the [BIP37](https://en.bitcoin.it/wiki/BIP_0037 "BIP 0037") standard, which has serious design flaws leading to privacy leaks. Any wallet that uses [BIP37](https://en.bitcoin.it/wiki/BIP_0037 "BIP 0037") provides no privacy at all and is equivalent to sending all the wallets addresses to a random server. That server can easily spy on the wallet. Lessons from the failure of BIP37 can be useful when designing and understanding other privacy solutions, especially with the point about data fusion of combining BIP37 bloom filter leaks with blockchain transaction information leaks.

Main article: [BIP37 privacy problems](https://en.bitcoin.it/wiki/BIP37_privacy_problems "BIP37 privacy problems")

### Public Electrum servers

Electrum is a popular software wallet which works by connecting to special purpose servers. These servers receive hashes of the bitcoin addresses in the wallet and reply with transaction information. The Electrum wallet is fast and low-resource but by default it connects to these servers which can easily spy on the user. Some other software aside from Electrum uses the public Electrum servers. As of 2019 it is a faster and better alternative for [lightweight wallets](https://en.bitcoin.it/wiki/Lightweight_node "Lightweight node") than BIP37.

Servers only learn the hashes of addresses rather than addresses themselves, in practice they only know the actual address and associated transactions if it's been used on the blockchain at least once.

It is not very difficult to run your own Electrum server and point your wallet to use only it. This restores Electrum to have the same privacy and security properties as a full node where nobody else can see which addresses or transactions the wallet is interested in. Then Electrum becomes a full node wallet.

## Communication eavesdropping

A simple but effective privacy leak. Alice gives Bob one of her addresses to receive a payment, but the communication has been eavesdropped by Eve who saw the address and now knows it belongs to Alice. The solution is to encrypt addresses where appropriate or use another way of somehow hiding them from an adversary as per the threat model.

Sometimes the eavesdropping can be very trivial, for example some forum users publish a bitcoin donation address on their website, forum signature, profile, twitter page, etc where it can be picked up by search engines. In the example of the non-anonymous Chinese newspaper buyer from the introduction, his address being publicly visible on his forum signature was a crucial part of his deanonymization. The solution here is to show each potential donator a new address, for example [by setting up a web server to hand out unique addresses to each visitor](https://en.bitcoin.it/wiki/Receiving_donations_with_bitcoin#Improving_privacy_by_avoiding_address_re-use "Receiving donations with bitcoin").

## Revealing data when transacting bitcoin

Sometimes users may voluntarily reveal data about themselves, or be required to by the entity they interact with. For example many exchanges require users to undergo Anti-Money Laundering and Know-Your-Customer (AML/KYC) checks, which requires users to reveal all kinds of invasive personal information such as their real name, residence, occupation and income. All this information is then linked with the bitcoin addresses and transactions that are later used.

When buying goods online with bitcoin a delivery mail address is needed. This links the bitcoin transaction with the delivery address. The same applies to the user's IP address (unless privacy technology like Tor is used).

## Digital forensics

Wallet software usually stores information it needs to operate on the disk of the computer it runs on. If an adversary has access to that disk it can extract bitcoin addresses and transactions which are known to be linked with the owner of that disk. The same disk might contain other personal information (such as a scan of an ID card). Digital forensics is one reason why all good wallet software encrypts wallet files, although that can be beaten if a weak encryption password is used.

For example if you have a bitcoin wallet installed on your PC and give the computer to a repair shop to fix, then the repair shop operator could find the wallet file and records of all your transactions. Other examples might be if an old hard disk is thrown away. Other software installed on the same computer (such as malware) can also read from disk or RAM to spy on the bitcoin transactions made by the user.

For privacy don't leave data on your computer available to others. Exactly how depends on your threat model. Encryption and physical protection are options, as is using special operating systems like [Tails OS](https://tails.boum.org/) which does not read or write from the hard drive but only uses RAM, and then deletes all data on shutdown.

# Methods for improving privacy (non-blockchain)

## Obtaining bitcoins anonymously

If the adversary has not linked your bitcoin address with your identity then privacy is much easier. Blockchain spying methods like the common-input-ownership heuristic, detecting change addresses and amount correlation are not very effective on their own if there is no starting point to link back to.

Many exchanges require users to undergo Anti-Money Laundering and Know-Your-Customer (AML/KYC) checks, which requires users to reveal all kinds of invasive personal information such as their real name, residence, occupation and income. All this information is then linked with the bitcoin addresses and transactions that are later used.

Avoiding the privacy invasion of AML/KYC is probably the single most important thing an individual can do to improve their privacy. It works far better than any actual technology like CoinJoin. Indeed all the cryptography and privacy tricks are irrelevant if all users only ever transact between AML/KYC institutions [^23].

### Cash trades

Physical cash is an anonymous medium of exchange, so using it is a way to obtain bitcoin anonymously where no one except trading partners exchange identifying data.

This section won't list websites to find such meetups because the information can go out of date, but try searching the web with "buy bitcoin for cash \<your location\>". Note that some services still require ID so that is worth checking. Some services require ID only for the trader placing the advert. As of late-2018 there is at least one [decentralized exchange open source project](https://en.bitcoin.it/wiki/Bisq "Bisq") in development which aims to facilitate this kind of trading without a needing a centralized third party at all but instead using a peer-to-peer network.

**Cash-in-person** trades are an old and popular method. Two traders arrange to meet up somewhere and the buyer hands over cash while the seller makes a bitcoin transaction to the buyer. This is similar to other internet phenomena like Craigslist which organize meetups for exchange. [Escrow can be used](https://en.bitcoin.it/wiki/Secure_Trading#Use_an_Escrow_Service "Secure Trading") to improve safety or to avoid the need to wait for confirmations at the meetup.

**Cash-by-mail** works by having the buyer send physical cash through the mail. [Escrow is always used](https://en.bitcoin.it/wiki/Secure_Trading#Use_an_Escrow_Service "Secure Trading") to prevent scamming. The buyer of bitcoins can be very anonymous but the seller must reveal a mail address to the buyer. Cash-by-mail can work over long distances but does depend on the postal service infrastructure. Users should check with their local postal service if there are any guidelines around sending cash-by-mail. Often the cash can also be insured.

**Cash deposit** is a method where the buyer deposits cash directly into the seller's bank account. Again [escrow is used](https://en.bitcoin.it/wiki/Secure_Trading#Use_an_Escrow_Service "Secure Trading"), and again the buyer of bitcoins can be near-anonymous but the seller must sign up with a bank or financial institution and share with them rather invasive details about one's identity and financial history. This method relies on the personal banking infrastructure so works over long distances.

**Cash dead drop** is a rarely used method. It is similar to a cash-in-person trade but the traders never meet up. The buyer chooses a location to hide the cash in a public location, next the buyer sends a message to the seller telling them the location, finally the seller picks up the cash from the hidden location. [Escrow is a requirement](https://en.bitcoin.it/wiki/Secure_Trading#Use_an_Escrow_Service "Secure Trading") to avoid scamming. This method is very anonymous for the buyer as the seller won't even learn their physical appearance, for the seller it is slightly less anonymous as the buyer can stalk the location to watch the seller collect the cash.

### Cash substitute

Cash substitutes like gift cards, mobile phone credits or prepaid debit cards can often be bought from regular stores with cash and then traded online for bitcoin.

### Employment

Bitcoins accepted as payment for work done can be anonymous if the employer does not request much personal information. This may work well in a freelancing or contracting setting. Although if your adversary is your own employer then obviously this is not good privacy.

### Mining

Mining is the most anonymous way to obtain bitcoin. This applies to solo-mining as mining pools generally know the hasher's IP address. Depending on the size of operation mining may use a lot of electrical power which may attract suspicion. Also the [specialized mining hardware](https://en.bitcoin.it/wiki/ASIC "ASIC") may be difficult to get hold of anonymously (although they wouldn't be linked to the resulting mined bitcoins).

### Stealing

In theory another way of obtaining anonymous bitcoin is to steal them [^24].

There is at least one situation where this happened. In May 2015 a hacker known as Phineas Fisher [^25] hacked a spyware company that was selling surveillance products to dictators [^26]. The hacker used bitcoin stolen from other people to anonymously rent infrastructure for later attacks.

## Spending bitcoins anonymously

If you give up your delivery address (which you'll have to if you're buying physical goods online) then that will be a data leak. Obviously this is unavoidable in many cases.

## Wallet history synchronization

Bitcoin wallets must somehow obtain information about their balance and history. As of late-2018 the most practical and private existing solutions are to use a full node wallet (which is maximally private) and [client-side block filtering](https://en.bitcoin.it/wiki/Client-side_block_filtering "Client-side block filtering") (which is very good).

One issue with these technologies is that they always costs more resources (time, bandwidth, storage, etc) than non-private solutions like web wallets and centralized Electrum servers. There are measurements indicating that very few people actually use [BIP37](https://en.bitcoin.it/wiki/BIP_0037 "BIP 0037") because of how slow it is [^27], so even [client-side block filtering](https://en.bitcoin.it/wiki/Client-side_block_filtering "Client-side block filtering") may not be used very much.

### Full node

Full nodes download the entire blockchain which contains every on-chain transaction that has ever happened in bitcoin. So an adversary watching the user's internet connection [will not be able to learn](https://en.bitcoin.it/wiki/Full_node#Privacy "Full node") which transactions or addresses the user is interested in. This is the best solution to wallet history synchronization with privacy, but unfortunately it costs a significant amount in time and bandwidth.

### Private information retrieval

In cryptography, a private information retrieval (PIR) protocol is a protocol that allows a user to retrieve an item from a server in possession of a database without revealing which item is retrieved. This has been proposed as a way to private synchronize wallet history but as PIR is so resource-intensive, users who don't mind spending bandwidth and time could just run a full node instead.

### Client-side block filtering

[Client-side block filtering](https://en.bitcoin.it/wiki/Client-side_block_filtering "Client-side block filtering") works by having filters created that contains all the addresses for every transaction in a block. The filters can test whether an element is in the set; false positives are possible but not false negatives. A lightweight wallet would download all the filters for every block in the blockchain and check for matches with its own addresses. Blocks which contain matches would be downloaded in full from the [peer-to-peer network](https://en.bitcoin.it/wiki/Network "Network"), and those blocks would be used to obtain the wallet's history and current balance.

### Address query via onion routing

Wallet histories can be obtained from centralized servers (such as Electrum servers) but using a new Tor circuit for each address. A closely-related idea is to connect together Electrum servers in an onion-routing network [^28]. When creating such a scheme, care should be taken to avoid timing correlation linking the addresses together, otherwise the server could use the fact that the addresses were requested close to each other in time.

## Countermeasures to traffic analysis

Bitcoin Core and its forks have countermeasures against [sybil attack](https://en.bitcoin.it/wiki/Weaknesses#Sybil_attack "Weaknesses") and eclipse attacks. Eclipse attacks are sybil attacks where the adversary attempts to control all the peers of its target and block or control access to the rest of the network [^29]. Such attacks have been extensively studied in a 2015 paper [Eclipse Attacks on Bitcoin’s Peer-to-Peer Network](https://eprint.iacr.org/2015/263.pdf) which has led to new code written for Bitcoin Core for mitigation [^30] [^31] [^32] [^33] [^34].

Bitcoin Core and its forks use an algorithm known as trickling when relaying unconfirmed transactions, with the aim of making it as difficult as possible for sybil attackers to find the source IP address of a transaction. For each peer, the node keeps a list of transactions that it is going to [inv](https://en.bitcoin.it/wiki/Network#Messages "Network") to it. It sends [inv's](https://en.bitcoin.it/wiki/Network#Messages "Network") for transactions periodically with a random delay between each [inv](https://en.bitcoin.it/wiki/Network#Messages "Network"). Transactions are selected to go into the [inv](https://en.bitcoin.it/wiki/Network#Messages "Network") message somewhat randomly and according to some metrics involving fee rate. It selects a limited number of transactions to [inv](https://en.bitcoin.it/wiki/Network#Messages "Network"). The algorithm creates the possibility that a peered node may hear about an unconfirmed transaction from the creator's neighbours rather than the creator node itself [^35] [^36] [^37] [^38]. However adversaries can still sometimes obtain privacy-relevant information.

Encrypting messages between peers as in [BIP 151](https://github.com/bitcoin/bips/blob/master/bip-0151.mediawiki) would make it harder for a passive attacker such as an ISP or Wifi provider to see the exact messages sent and received by a bitcoin node.

### Tor and tor broadcasting

If a connection-controlling adversary is a concern, then bitcoin can be run entirely over Tor. Tor is encrypted and hides endpoints, so an ISP or Wifi providers won't even know you're using bitcoin. The other connected bitcoin nodes won't be able to see your IP address as Tor hides it. Bitcoin Core and its forks have features to make setting up and using Tor easier. Some [lightweight wallets](https://en.bitcoin.it/wiki/Lightweight_node "Lightweight node") also run entirely over Tor.

Running entirely over Tor has the downside that synchronizing the node requires downloading the entire blockchain over tor, which would be very slow. Downloading blocks over Tor only helps in the situation where you want to hide the fact that bitcoin is even being used from the internet service provider [^39]. It is possible to download [blocks](https://en.bitcoin.it/wiki/Blocks "Blocks") and unconfirmed transactions over clearnet but broadcast your own transactions over Tor, allowing a fast clearnet connection to be used while still providing privacy when broadcasting.

Bitcoin Core being configured with the option `walletbroadcast=0` will stop transactions belonging to the user from being broadcast and rebroadcast, allowing them to be broadcast instead via Tor or another privacy-preserving method [^40].

### Dandelion

Dandelion is another technology for private transaction broadcasting. The main idea is that transaction propagation proceeds in two phases: first the "stem" phase, and then "fluff" phase. During the stem phase, each node relays the transaction to a _single_ peer. After a random number of hops along the stem, the transaction enters the fluff phase, which behaves just like ordinary transaction flooding/diffusion. Even when an attacker can identify the location of the fluff phase, it is much more difficult to identify the source of the stem [^41] [^42] [^43] [^44].

### Interactive peer broadcasting

Some privacy technologies like CoinJoin and [CoinSwap](https://en.bitcoin.it/wiki/CoinSwap "CoinSwap") require interactivity between many bitcoin entities. They can also be used to broadcast transactions with more privacy, because peers in the privacy protocols can send each other unconfirmed transactions using the already-existing protocol they use to interact with each other.

For example, in [JoinMarket](https://en.bitcoin.it/wiki/JoinMarket "JoinMarket") market takers can send transactions to market makers who will broadcast them and so improve the taker's privacy. This can be a more convenient for the taker than setting up Tor for use with [tor broadcasting](/en/wiki-bitcoin-privacy/#tor-and-tor-broadcasting).

### Receiving bitcoin data over satellite

At least one bitcoin company offers a satellite bitcoin service [^45]. This is a free service where satellites broadcast the bitcoin blockchain to nearly anywhere in the world. If users set up a dish antenna pointing at a satellite in space, then they can receive bitcoin blocks needed to run a full node. As the satellite setups are receive-only nobody can detect that the user is even running bitcoin, and certainly not which addresses or transactions belong to them.

As of 2019 the company offers a paid-for API which allows broadcasting any data to anywhere in the world via satellite, which seems to be how they make their money. But it appears the base service of broadcasting the blockchain will always be free.

Main article: [https://blockstream.com/satellite/](https://blockstream.com/satellite/)

# Methods for improving privacy (blockchain)

This section describes different techniques for improving the privacy of transactions related to the permanent record of transactions on the blockchain. Some techniques are trivial and are included in all good bitcoin wallets. Others have been implemented in some open source projects or services, which may use more than one technique at a time. Other techniques have yet to be been implemented. Many of these techniques focus on breaking different heuristics and assumptions about the blockchain, so they work best when combined together.

## Avoiding address reuse

Addresses being used more than once is very damaging to privacy because that links together more blockchain transactions with proof that they were created by the same entity. The most private and secure way to use bitcoin is to send a brand new address to each person who pays you. After the received coins have been spent the address should never be used again. Also, a brand new bitcoin address should be demanded when sending bitcoin. All good bitcoin wallets have a user interface which discourages address reuse.

It has been argued that the phrase "bitcoin address" was a bad name for this object because it implies it can be reused like an email address. A better name would be something like "bitcoin invoice".

Bitcoin isn't anonymous but pseudonymous, and the pseudonyms are bitcoin addresses. Avoiding address reuse is like throwing away a pseudonym after its been used.

Bitcoin Core 0.17 includes an update to improve the privacy situation with address reuse [^46]. When an address is paid multiple times the coins from those separate payments can be spent separately which hurts privacy due to linking otherwise separate addresses. A -avoidpartialspends flag has been added (default=false), if enabled the wallet will always spend existing UTXO to the same address together even if it results in higher fees. If someone were to send coins to an address after it was used, those coins will still be included in future coin selections.

### Avoiding forced address reuse

The easiest way to avoid the privacy loss from [forced address reuse](/en/wiki-bitcoin-privacy/#forced-address-reuse) to not spend coins that have landed on an already-used and empty addresses. Usually the payments are of a very low value so no relevant money is lost by simply not spending the coins.

Another option is to spend the coins individual directly to miner fees. Here are instructions for how to do this with Electrum or Bitcoin Core: [https://gist.github.com/ncstdc/90fe6209a0b3ae815a6eaa2aef53524c](https://gist.github.com/ncstdc/90fe6209a0b3ae815a6eaa2aef53524c)

Dust-b-gone is an old project [^47] which aimed to safely spend forced-address-reuse payments. It signs all the UTXOs together with other people's and spends them to miner fees. The transactions use rare [OP_CHECKSIG](https://en.bitcoin.it/wiki/OP_CHECKSIG "OP CHECKSIG") sighash flags so they can be easily eliminated from the adversary's analysis, but at least the forced address reuse payments don't lead to further privacy loss.

## Coin control

Coin control is a feature of some bitcoin wallets that allow the user to choose which [coins](https://en.bitcoin.it/wiki/Coin_analogy "Coin analogy") are to be spent as inputs in an outgoing transaction. Coin control is aimed to avoid as much as possible transactions where privacy leaks are caused by amounts, change addresses, the transaction graph and the common-input-ownership heuristic [^48] [^49].

An example for avoiding a transaction graph privacy leak with coin control: A user is paid bitcoin for their employment, but also sometimes buys bitcoin with cash. The user wants to donate some money to a charitable cause they feel passionately about, but doesn't want their employer to know. The charity also has a publicly-visible donation address which can been found by web search engines. If the user paid to the charity without coin control, his wallet may use coins that came from the employer, which would allow the employer to figure out which charity the user donated to. By using coin control, the user can make sure that only coins that were obtained anonymously with cash were sent to the charity. This avoids the employer ever knowing that the user financially supports this charity.

## Multiple transactions

Paying someone with more than one on-chain transaction can greatly reduce the power of amount-based privacy attacks such as amount correlation and round numbers. For example, if the user wants to pay 5 BTC to somebody and they don't want the 5 BTC value to be easily searched for, then they can send two transactions for the value of 2 BTC and 3 BTC which together add up to 5 BTC.

Privacy-conscious merchants and services should provide customers with more than one bitcoin address that can be paid.

## Change avoidance

Change avoidance is where transaction inputs and outputs are carefully chosen to not require a change output at all. Not having a change output is excellent for privacy, as it breaks change detection heuristics.

Change avoidance is practical for high-volume bitcoin services, which typically have a large number of inputs available to spend and a large number of required outputs for each of their customers that they're sending money to. This kind of change avoidance also lowers miner fees because the transactions uses less block space overall.

Main article: [Techniques_to_reduce_transaction_fees#Change_avoidance](https://en.bitcoin.it/wiki/Techniques_to_reduce_transaction_fees#Change_avoidance "Techniques to reduce transaction fees")

Another way to avoid creating a change output is in cases where the exact amount isn't important and an entire UTXO or group of UTXOs can be fully-spent. An example is when opening a Lightning Network [payment channel](https://en.bitcoin.it/wiki/Payment_channel "Payment channel"). Another example would be when sweeping funds into a [cold storage](https://en.bitcoin.it/wiki/Cold_storage "Cold storage") wallet where the exact amount may not matter.

## Multiple change outputs

If [change avoidance](/en/wiki-bitcoin-privacy/#change-avoidance) is not an option then creating more than one change output can improve privacy. This also breaks change detection heuristics which usually assume there is only a single change output. As this method uses more block space than usual, change avoidance is preferable.

## Script privacy improvements

The [script](https://en.bitcoin.it/wiki/Script "Script") of each bitcoin output leaks privacy-relevant information. For example as of late-2018 around 70% of bitcoin addresses are single-signature and 30% are [multisignature](https://en.bitcoin.it/wiki/Multisignature "Multisignature") [^50]. Much research has gone into improving the privacy of scripts by finding ways to make several different script kinds look the same. As well as improving privacy, these ideas also improve the scalability of the system by reducing storage and bandwidth requirements.

**ECDSA-2P** is a cryptographic scheme which allows the creation of a 2-of-2 [multisignature](https://en.bitcoin.it/wiki/Multisignature "Multisignature") scheme but which results in a regular single-sig [ECDSA](https://en.bitcoin.it/wiki/Elliptic_Curve_Digital_Signature_Algorithm "Elliptic Curve Digital Signature Algorithm") signature when included on the blockchain [^51]. It doesn't need any consensus changes because bitcoin already uses [ECDSA](https://en.bitcoin.it/wiki/Elliptic_Curve_Digital_Signature_Algorithm "Elliptic Curve Digital Signature Algorithm").

**[Schnorr](https://en.bitcoin.it/wiki/Schnorr "Schnorr")** is a digital signature scheme which has many benefits over the status-quo [ECDSA](https://en.bitcoin.it/wiki/Elliptic_Curve_Digital_Signature_Algorithm "Elliptic Curve Digital Signature Algorithm") [^52] [^53]. One side effect is that any N-of-N [^54] and M-of-N [multisignature](https://en.bitcoin.it/wiki/Multisignature "Multisignature") can be easily made to look like a single-sig when included on the blockchain. Adding [Schnorr](https://en.bitcoin.it/wiki/Schnorr "Schnorr") to bitcoin requires a [Softfork](https://en.bitcoin.it/wiki/Softfork "Softfork") consensus change. As of 2019 a design for the signature scheme has been proposed [^55]. The required [softfork](https://en.bitcoin.it/wiki/Softfork "Softfork") consensus change is still in the design stage as of early-2019.

**Scriptless scripts** are a set of cryptographic protocols which provide a way of replicating the logic of [script](https://en.bitcoin.it/wiki/Script "Script") without actually having the script conditions visible, which increases privacy and scalability by removing information from the blockchain [^56] [^57] [^58] [^59]. This is generally aimed at protocols involving [Hash Time Locked Contracts](https://en.bitcoin.it/wiki/Hash_Time_Locked_Contracts "Hash Time Locked Contracts") such as Lightning Network and [CoinSwap](https://en.bitcoin.it/wiki/CoinSwap "CoinSwap").

With scriptless scripts, nearly the only thing visible is the public keys and signatures. More than that, in multi-party settings, there will be a single public key and a single signature for all the actors. Everything looks the same-- [lightning](https://en.bitcoin.it/wiki/Lightning_Network "Lightning Network") [payment channels](https://en.bitcoin.it/wiki/Payment_channels "Payment channels") would look the same as single-sig payments, escrows, [atomic swaps](https://en.bitcoin.it/wiki/Atomic_swap "Atomic swap"), or sidechain federation pegs. Pretty much anything you think about that people are doing on bitcoin in 2019, can be made to look essentially the same [^60].

**MAST** is short for Merkelized Abstract Syntax Tree, which is a scheme for hiding unexecuted branches of a [script](https://en.bitcoin.it/wiki/Script "Script") contract. It improves privacy and scalability by removing information from the blockchain [^61] [^62].

**Taproot** is a way to combine Schnorr signatures with MAST [^63]. The Schnorr signature can be used to spend the coin, but also a MAST tree can be revealed only when the user wants to use it. The schnorr signature can be any N-of-N or use any scriptless script contract. The consequence of taproot is a much larger anonymity set for interesting smart contracts, as any contract such as Lightning Network, [CoinSwap](https://en.bitcoin.it/wiki/CoinSwap "CoinSwap"), [multisignature](https://en.bitcoin.it/wiki/Multisignature "Multisignature"), etc would appear indistinguishable from regular single-signature on-chain transaction.

The taproot scheme is so useful because it is almost always the case that interesting scripts have a logical top level branch which allows satisfaction of the contract with nothing other than a signature by all parties. Other branches would only be used where some participant is failing to cooperate.

**Graftroot** is a smart contract scheme similar to taproot. It allows users to include other possible [scripts](https://en.bitcoin.it/wiki/Script "Script") for spending the coin but with less resources used even than taproot. The tradeoff is that interactivity is required between the participants [^64] [^65] [^66].

**[nLockTime](https://en.bitcoin.it/wiki/NLockTime "NLockTime")** is a field in the serialized transaction format. It can be used in certain situations to create a more private [timelock](https://en.bitcoin.it/wiki/Timelock "Timelock") which avoids using [script](https://en.bitcoin.it/wiki/Script "Script") opcodes.

## ECDH addresses

[ECDH addresses](https://en.bitcoin.it/wiki/ECDH_address "ECDH address") can be used to improve privacy by helping avoid address reuse. For example, a user can publish a [ECDH address](https://en.bitcoin.it/wiki/ECDH_address "ECDH address") as a [donation address](https://en.bitcoin.it/wiki/Receiving_donations_with_bitcoin "Receiving donations with bitcoin") which is usable by people who want to donate. An adversary can see the ECDH donation address but won't be able to easily find any transactions spending to and from it.

However [ECDH addresses](https://en.bitcoin.it/wiki/ECDH_address "ECDH address") do not solve all privacy problems as they are still vulnerable to [mystery shopper payments](https://en.bitcoin.it/wiki/Mystery_shopper_payments "Mystery shopper payments"); an adversary can donate some bitcoins and watch on the blockchain to see where they go afterwards, using heuristics like the common-input-ownership heuristic to obtain more information such as donation volume and final destination of funds.

ECDH addresses have [some practicality issues](https://en.bitcoin.it/wiki/ECDH_address "ECDH address") and are very closely equivalent to [running a http website which hands out bitcoin addresses to anybody who wants to donate](https://en.bitcoin.it/wiki/Receiving_donations_with_bitcoin#Improving_privacy_by_avoiding_address_re-use "Receiving donations with bitcoin") except without an added step of interactivity. It is therefore unclear whether ECDH are useful outside the use-case of non-interactive donations or a self-contained application which sends money to one destination without any interactivity.

## Centralized mixers

This is an old method for breaking the [transaction graph](/en/wiki-bitcoin-privacy/#transaction-graph-heuristic). Also called "tumblers" or "washers". A user would send bitcoins to a [mixing service](https://en.bitcoin.it/wiki/Bitcoin_mixer "Bitcoin mixer") and the service would send different bitcoins back to the user, minus a fee. In theory an adversary observing the blockchain would be unable to link the incoming and outgoing transactions.

There are several downsides to this. The mixer it must be trusted to keep secret the linkage between the incoming and outgoing transactions. Also the mixer must be trusted not to steal coins. This risk of stealing creates reputation effects; older and more established mixers will have a better reputation and will be able to charge fees far above the marginal cost of mixing coins. Also as there is no way to sell reputation, the ecosystem of mixers will be filled with occasional exit scams.

There is a better alternative to mixers which has essentially the same privacy and custody risks. A user could deposit and then withdraw coins from any regular bitcoin website that has a hot wallet. As long as the bitcoin service doesn't require any other information from the user, it has the same privacy and custody aspects as a centralized mixer and is also much cheaper. Examples of suitable bitcoin services are bitcoin casinos, bitcoin poker websites, tipping websites, altcoin exchanges or online marketplaces [^67].

The problem of the service having full knowledge of the transactions could be remedied by cascading several services together. A user who wants to avoid tracking by passive observers of the blockchain could first send coins to a bitcoin casino, from them withdraw and send directly to an altcoin exchange, and so on until the user is happy with the privacy gained.

Main article: [Bitcoin mixer](https://en.bitcoin.it/wiki/Bitcoin_mixer "Bitcoin mixer")

## CoinJoin

CoinJoin is a special kind of bitcoin transaction where multiple people or entities cooperate to create a single transaction involving all their inputs. It has the effect of breaking the common-input-ownership heuristic and it makes use of the [inherent fungibility of bitcoin within transactions](https://en.bitcoin.it/wiki/Coin_analogy#Fungibility "Coin analogy"). The CoinJoin technique has been possible since the very start of bitcoin and cannot be blocked except in the ways that any other bitcoin transactions can be blocked. Just by looking at a transaction it is not possible to tell for sure whether it is a coinjoin. CoinJoins are non-custodial as they can be done without any party involved in a coinjoin being able to steal anybody else's bitcoins [^68].

### Equal-output CoinJoin

Say this transaction is a CoinJoin, meaning that the 2 BTC and 3 BTC inputs were actually owned by different entities.

```
2 btc --> 3 btc
3 btc     2 btc
```

This transaction breaks the common-input-ownership heuristic, because its inputs are not all owned by the same person but it is still easy to tell where the bitcoins of each input ended up. By looking at the amounts (and assuming that the two entities do not pay each other) it is obvious that the 2 BTC input ends up in the 2 BTC output, and the same for the 3 BTC. To really improve privacy you need CoinJoin transaction that have a more than one equal-sized output:

```
2 btc --> 2 btc
3 btc     2 btc
          1 btc
```

In this transaction the two outputs of value 2 BTC cannot be linked to the inputs. They could have come from either input. This is the crux of how CoinJoin can be used to improve privacy, not so much breaking the transaction graph rather fusing it together. Note that the 1 BTC output has not gained much privacy, as it is easy to link it with the 3 BTC input. The privacy gain of these CoinJoins is compounded when the they are repeated several times.

As of late-2018 CoinJoin is the only decentralized bitcoin privacy method that has been deployed. Examples of (likely) CoinJoin transactions IDs on bitcoin's blockchain are `402d3e1df685d1fdf82f36b220079c1bf44db227df2d676625ebcbee3f6cb22a` and `85378815f6ee170aa8c26694ee2df42b99cff7fa9357f073c1192fff1f540238`. Note that these coinjoins involve more than two people, so each individual user involved cannot know the true connection between inputs and outputs (unless they collude).

### PayJoin

_Main article: [PayJoin](https://en.bitcoin.it/wiki/PayJoin "PayJoin")_

The type of CoinJoin discussed in the previous section can be easily identified as such by checking for the multiple outputs with the same value. It's important to note that such identification is always deniable, because somebody could make fake [CoinJoins](https://en.bitcoin.it/wiki/CoinJoin "CoinJoin") that have the same structure as a coinjoin transaction but are made by a single person.

PayJoin (also called pay-to-end-point or P2EP) [^69] [^70] [^71] is a special type of CoinJoin between two parties where one party pays the other. The transaction then doesn't have the distinctive multiple outputs with the same value, and so is not obviously visible as an equal-output CoinJoin. Consider this transaction:

```
2 btc --> 3 btc
5 btc     4 btc
```

It could be interpreted as a simple transaction paying to somewhere with leftover change (ignore for now the question of which output is payment and which is change). Another way to interpret this transaction is that the 2 BTC input is owned by a merchant and 5 BTC is owned by their customer, and that this transaction involves the customer paying 1 BTC to the merchant. There is no way to tell which of these two interpretations is correct. The result is a coinjoin transaction that breaks the common-input-ownership heuristic and improves privacy, but is also undetectable and indistinguishable from any regular bitcoin transaction.

If PayJoin transactions became even moderately used then it would make the common-input-ownership heuristic be completely flawed in practice. As they are undetectable we wouldn't even know whether they are being used today. As [transaction surveillance companies](https://en.bitcoin.it/wiki/Transaction_surveillance_company "Transaction surveillance company") mostly depend on that heuristic, as of 2019 there is great excitement about the PayJoin idea [^72].

## CoinSwap

_Main article: [CoinSwap](https://en.bitcoin.it/wiki/CoinSwap "CoinSwap")_

**CoinSwap** is a non-custodial privacy technique for bitcoin based on the idea of [atomic swaps](https://en.bitcoin.it/wiki/Atomic_swap "Atomic swap") [^73]. If Alice and Bob want to do a coinswap; then it can be understood as Alice exchanging her bitcoin for the same amount (minus fees) of Bob's bitcoins, but done with [bitcoin smart contracts](https://en.bitcoin.it/wiki/Contracts "Contracts") to eliminate the possibility of cheating by either side.

[CoinSwaps](https://en.bitcoin.it/wiki/CoinSwap "CoinSwap") break the transaction graph between the sent and received bitcoins. On the block chain it looks like two sets of completely disconnected transactions:

```
Alice's Address ---> escrow address 1 ---> Bob's Address
Bob's Address   ---> escrow address 2 ---> Alice's Address
```

Obviously Alice and Bob generate new addresses each to avoid the privacy loss due to address reuse.

It is possible to have CoinSwaps that are completely indistinguishable from any other transaction on the blockchain. They could be said to allow bitcoins to teleport undetectably to anywhere else on the blockchain. Non-CoinSwap transactions would benefit because a large-scale analyst of the blockchain like a [transaction surveillance company](https://en.bitcoin.it/wiki/Transaction_surveillance_company "Transaction surveillance company") could never be sure that ordinary transactions are not actually [CoinSwaps](https://en.bitcoin.it/wiki/CoinSwap "CoinSwap"). They also do not require much block space compared to the amount of privacy they provide.

CoinSwaps require a lot of interaction between the involved parties, which can make this kind of system tricky to design while avoiding denial-of-service attacks. They also have a liveness requirement and non-censorship requirement, meaning that the entities taking part must always be able to freely access the bitcoin network; If the internet was down for days or weeks then half-completed CoinSwaps could end with one side having their money stolen.

In of February 2022, **MercuryWallet** was the first implementation has been deployed [^74] [^75]. In June 2020, the [Human Rights Foundation](https://en.wikipedia.org/wiki/Human_Rights_Foundation) (a New York-based nonprofit that promotes and protects human rights globally) granted $50,000 to [Chris Belcher](https://en.bitcoin.it/wiki/User:Belcher) (one of the main contributors to this very page) to work on the project [^76].

## CoinJoinXT

CoinJoinXT is non-custodial privacy technique which is closely related to CoinJoin [^77]. It allows for any number of entities to between them create a so-called _proposed transaction graph_ (PTG) which is a list of connected transactions. In the PTG the bitcoins belonging to the entities are sent to and fro in all the transactions, but at the end of the PTG they are all returned to their rightful owners. The system is set up so that the process of the PTG being mined is atomic, so either the entire PTG is [confirmed](https://en.bitcoin.it/wiki/Confirmation "Confirmation") on the blockchain or none of it is, this means none of the participating entities can steal from each other.

The _proposed transaction graph_ has the freedom to be any list of transactions that obfuscate the transaction graph. For best results the PTG would perfectly mimic the natural transaction graph due to normal economic activity in bitcoin, and so an adversary would not know where the PTG started or ended, resulting in a massive privacy gain.

Like CoinJoin, CoinJoinXT is easy to make DOS-resistant and doesn't require a prohibitive number of interaction steps. Unlike [CoinSwap](https://en.bitcoin.it/wiki/CoinSwap "CoinSwap") there is no liveness or non-censorship requirement so funds are secure even if bitcoin is under temporary censorship. However CoinJoinXT uses a lot of block space compared the privacy gain. And CoinJoinXT requires a malleability fix so all the transactions in the PTG have to be [segwit](https://en.bitcoin.it/wiki/Segregated_Witness "Segregated Witness")-only. As of 2019 only around 40% of transactions are segwit, so an observer of the blockchain could easily eliminate non-PTG transactions by checking whether they are legacy or segwit.

## TumbleBit

[TumbleBit](https://en.bitcoin.it/wiki/TumbleBit "TumbleBit") is privacy technology which is non-custodial and where the coordinating server cannot tell the true linkage between input and output. This is achieved by a cryptographic construct where the server facilitates a private exchange of digital signatures. The protocol is very interesting to any privacy and bitcoin enthusiast.

From the point of view of an observer of the blockchain, TumbleBit transactions appear as two transactions with many (800 in the author's example) outputs and all transaction outputs must be of the same amount.

## Off-chain transactions

Off-chain transactions refer to any technology which allows bitcoin transactions on a layer above the blockchain. Bitcoin payments done off-chain are not broadcast to every node in the network and are not mined and stored forever on a public blockchain, this automatically improves privacy because much less information is visible to most adversaries. With [Off-Chain Transactions](https://en.bitcoin.it/wiki/Off-Chain_Transactions "Off-Chain Transactions") there are no public addresses, no address clusters, no public transactions, no transaction amounts or any other privacy-relevant attacks that happen with on-chain transactions.

Main article: [Off-Chain Transactions](https://en.bitcoin.it/wiki/Off-Chain_Transactions "Off-Chain Transactions")

**Lightning Network** is a huge topic in bitcoin privacy so it is [discussed in its own section](/en/wiki-bitcoin-privacy/#lightning-network).

### Blinded bearer certificates

This is another way of doing [Off-Chain Transactions](https://en.bitcoin.it/wiki/Off-Chain_Transactions "Off-Chain Transactions") which is based on blind signatures. The payments through such a system would be very very private. It has been known about since 1983. But the system is custodial so as the issuing server is a central point of failure which can steal all the money. However the concept may still be useful in certain situations where Lightning is not, for example blinded bearer certificates support payments where the receiver is offline.

Main article: [Blinded bearer certificates](https://en.bitcoin.it/wiki/Blinded_bearer_certificates "Blinded bearer certificates")

### Sidechains

[Sidechains](https://en.bitcoin.it/wiki/Sidechain "Sidechain") are when another blockchain is created which uses bitcoins as its currency unit. Bitcoins can be moved from the main bitcoin blockchain onto the sidechain which allows them to transact following different consensus rules. Sidechains can have different and better privacy properties than the regular bitcoin blockchain.

Main article: [Sidechain](https://en.bitcoin.it/wiki/Sidechain "Sidechain")

### StateChains

[StateChains](https://en.bitcoin.it/wiki/StateChain "StateChain") are a cryptographic structure that consists of a chain of digital signatures transfering ownership of a specific statecoin (a bitcoin UTO) between owners. Similar to a blockchain or sidechain, the statechain acts as immutable cryptographic proof of ownership and a proof that a statecoin(bitcoin UTXO) has not been double spent.

## Confidential transactions

_Main article: [Confidential transactions](https://en.bitcoin.it/wiki/Confidential_transactions "Confidential transactions")_

[Confidential transactions](https://en.bitcoin.it/wiki/Confidential_transactions "Confidential transactions") (CT) is a cryptographic protocol which results in the amount value of a transaction being encrypted. The encryption is special because it is still possible to verify that no bitcoins can been created or destroyed within a transaction but without revealing the exact transaction amounts. Confidential transactions requires a [softfork](https://en.bitcoin.it/wiki/Softfork "Softfork") consensus change to be added to bitcoin, although they could be added to a [sidechain](https://en.bitcoin.it/wiki/Sidechain "Sidechain") too.

## Discussion

### Privacy vs scalability

Many of the previously-mentioned privacy technologies work by adding extra data to the bitcoin blockchain which is used to hide privacy-relevant information. This has the side-effect of degrading the scalability of bitcoin by adding more data which must be handled by system. This harms privacy because full nodes become more resource-costly to run and they are the most private way for a user to learn their history and balance. Adding data to blocks also [degrades the security of the system](https://en.bitcoin.it/wiki/Full_node#Economic_strength "Full node"), and there isn't much point in having a private bitcoin if the poor security leads to it being successfully attacked and destroyed. The resource cost of using more block space is shown to the user as a higher [miner fee](https://en.bitcoin.it/wiki/Miner_fees "Miner fees"); so privacy technology which uses too much block space may not even be used much if users find the fees too expensive. During the [period of high block space demand](https://en.bitcoin.it/wiki/Miner_fees#The_market_for_block_space "Miner fees") in late-2017, low-value [JoinMarket](https://en.bitcoin.it/wiki/JoinMarket "JoinMarket") CoinJoin transactions mostly disappeared (as did most low-valued bitcoin transactions).

[Off-Chain Transactions](https://en.bitcoin.it/wiki/Off-Chain_Transactions "Off-Chain Transactions") are one way to avoid this trade-off between privacy and scalability. These kind of solutions improve privacy by entirely removing data from the blockchain, not by adding more decoy data. [Change avoidance](/en/wiki-bitcoin-privacy/#change-avoidance) and [Script privacy improvements](/en/wiki-bitcoin-privacy/#script-privacy-improvements) also reduce costs to the system while improving privacy. [CoinJoinXT](https://en.bitcoin.it/wiki/CoinJoinXT "CoinJoinXT"), equal-output CoinJoin, [TumbleBit](https://en.bitcoin.it/wiki/TumbleBit "TumbleBit") use a lot of block space relative to the privacy gain. [PayJoin](https://en.bitcoin.it/wiki/PayJoin "PayJoin") does not use much extra block space over making an ordinary transaction; relative to the gain of breaking the common-input-ownership heuristic it is very space-efficent. [CoinSwap](https://en.bitcoin.it/wiki/CoinSwap "CoinSwap") uses very little block space relative to privacy, as it can be understood as an [off-chain transaction](https://en.bitcoin.it/wiki/Off-Chain_Transactions "Off-Chain Transactions") system which makes a single transaction and then comes back on-chain. [Confidential transactions](https://en.bitcoin.it/wiki/Confidential_transactions "Confidential transactions") requires a lot of block space along with associated bandwidth and CPU costs, but its privacy gain is substantial, so the debate on that topic could go either way.

In the long term as bitcoin [miner fees](https://en.bitcoin.it/wiki/Miner_fees "Miner fees") go up, resource-costly privacy technologies will be priced out and replaced by resource-efficient ones.

### Steganography

Steganography is used in cryptography to mean the act of hiding the fact that something is being hidden. For example the content of an encrypted message cant be read by an eavesdropper but it still shows that something is being hidden. Steganographic encryption of a message can be done by embedding an encrypted message into an audio file or image which hides the message in the noise.

An equal-output CoinJoin hides the source and destination of a certain coin, but the structure of the transactions reveals that something is being hidden. So even though coinjoin breaks the common-input-ownership heuristic, the fact that equal-output coinjoins can be detected (even if the detection is imperfect) allows them to be excluded from by the adversary's analysis. Also the distinguishability of the coinjoins may attract suspicion and prompt more investigation.

The idea of steganography is a good thing to aim for [^78]. It greatly increases the privacy because the transactions made by such technology cannot be distinguished from regular transactions. Also it improves the privacy of users who don't even use the technology, as their transactions can always be confused with actual private transactions. [Scriptless scripts](https://en.bitcoin.it/w/index.php?title=Scriptless_scripts&action=edit&redlink=1 "Scriptless scripts (page does not exist)") are a great example of a steganographic privacy technology where the privacy-relevant information is hidden in the random numbers of the digital signatures. [PayJoin](https://en.bitcoin.it/wiki/PayJoin "PayJoin"), [CoinSwap](https://en.bitcoin.it/wiki/CoinSwap "CoinSwap") and [CoinJoinXT](https://en.bitcoin.it/wiki/CoinJoinXT "CoinJoinXT") are good steganographic privacy technologies because they can be made indistinguishable from regular bitcoin transactions. Equal-output coinjoins and [TumbleBit](https://en.bitcoin.it/wiki/TumbleBit "TumbleBit") are not steganographic. Also it is usually easy to see when a centralized [mixing service](https://en.bitcoin.it/wiki/Bitcoin_mixer "Bitcoin mixer") is being used with common-input-ownership heuristic analysis, but depositing and then withdrawing from a high-volume bitcoin website like a casino or altcoin exchange is better because its possible that the user simply wanted to gamble.

# Lightning Network

Lightning Network is an [off-chain transaction](https://en.bitcoin.it/wiki/Off-Chain_Transactions "Off-Chain Transactions") technology based on [payment channels](https://en.bitcoin.it/wiki/Payment_channels "Payment channels"). It has nearly the same security model as bitcoin on-chain transactions. It is not an overstatement to say that Lightning Network is a revolution for bitcoin. See the previous section on [#Off-chain transactions](/en/wiki-bitcoin-privacy/#off-chain-transactions).

As well as greatly improving privacy, Lightning Network transactions are also much faster (usually instant) and cheaper than on-chain transactions. Lightning nodes create two-way [payment channels](https://en.bitcoin.it/wiki/Payment_channels "Payment channels") between them, and lightning transactions are routed from one node to another. The source and destination node don't need to have a payment channel directly between them as transactions can be routed over many intermediate nodes.

As Lightning Network transactions happen off-chain, they are not broadcast to every node in the network and are not stored forever in a publicly-visible blockchain. Adversaries cannot look at a public permanent record of all transactions because there isn't one. Instead adversaries would possibly have to run intermediate nodes and possibly extract information that way. On-chain privacy attacks like the common-input-ownership heuristic, address reuse, change address detection, input amounts revealing sender wealth or mystery shopper payments fundamentally don't work because there are no addresses or transaction inputs/outputs that work in the same way.

However Lightning Network may introduce other privacy problems, mostly due to how the network is made up of nodes having [connections](https://en.bitcoin.it/wiki/Payment_channel "Payment channel") between them [^79]. The parts of this network which can be intermediate routing nodes are usually public, and this network information could be overlaid with information about routed packets such as their amount. Lightning nodes also reveal their IP addresses unless run over Tor, and the payment channels are made up of on-chain transactions which could be analyzed using regular blockchain analysis techniques. Payment channels look like 2-of-2 [multisignature](https://en.bitcoin.it/wiki/Multisignature "Multisignature") on the blockchain. Bilaterial closing transactions look like the 2-of-2 outputs have been spent, but unilateral close transactions have a complicated [HTLC](https://en.bitcoin.it/wiki/Hash_Time_Locked_Contracts "Hash Time Locked Contracts") [scripts](https://en.bitcoin.it/wiki/Script "Script") that is visible on the blockchain.

As of 2019 Lightning is in beta and development continues; the development community is still studying all its privacy properties. Certainly its privacy is better than the privacy of on-chain transactions.

## Onion routing

The Lightning protocol uses onion routing [^80] [^81] to improve privacy from the intermediate routing notes. The protocol is aimed to prevent intermediate nodes along a payment route learning which other nodes, besides their predecessor or successor, are part of the packet's route; it also aims to hide the length of the route and the node's position within it.

### Onion routing overlaid with network topology

Lightning Network's onion routing is usually compared with Tor onion routing. However, Tor's network is fully-connected; every node on Tor is directly connected (or has the potential to directly connect) with every other node, meaning that an onion-routed packet can be relayed from and to potentially any other node. This is not so in the Lightning Network, where [payment channels](https://en.bitcoin.it/wiki/Payment_channels "Payment channels") do not fully-connect the entire network, and where the network topology is publicly known for routing nodes. Data fusion of the network topology and the small amount of information from onion-routed packets may still be enough to uncover information in certain cirumstances [^82] [^83]. For example, if a Lightning node wallet has only a single payment channel connection going to one intermediate node, then any payments sent to and from the node wallet will have to pass through the intermediate node, which would be able to obtain a lot of information about the wallet node's payments regardless of the onion-routing used.

A mitigation to this topology problem may be that the entire topology of the Lightning Network is not known. Only nodes which intend to route transactions need to be publicly announced. It is possible for "private channels" to exist which are payment channels that exist, but whose existence is not published.

This doesn't mean the onion routing used by Lightning Network is useless, far from it, but the privacy is not as strong as with Tor.

### Rendez-vous routing

Onion routing from the sender still requires that the destination Lightning node is known to the sender (along with all associated information like channel UTXO). This would mean that a user cannot receive Lightning payments without revealing one or more UTXOs associated with their payment channels. A solution is rendez-vous routing [^84] [^85], also called Hidden Destinations [^86], which allow Lightning payments to be sent from a source node to destination node without either the source or destination needing to reveal their nodes and associated information.

A good analogy is that source onion routing is like a Tor connection going via a Tor exit node to its destination, and rendez-vous onion routing is like a Tor connection going to a Tor hidden service.

## Atomic Multipath Payments

Atomic Multipath Payments (AMP) is a protocol in Lightning which allows a single payment to be routed over multiple lightning network transactions [^87]. For example if a user has five channels each with balance 2 btc, they can send a single payment of 7 btc using the AMP protocol over multiple lightning network paths. In terms of privacy, AMP would result in intermediate nodes not observing the full payment amount of 7 btc but only the partial payment amounts of 2 btc or 1 btc (or any other combination). This is positive for privacy as routed payments would no longer leak the exact payment amount, but only a lower bound.

## Common hashlock value

For non-AMP payments, the payment hash is the same for all nodes along the route of a payment. This could allow multiple nodes if they co-operate to know that they routed the same payment based on this common hash value. Although this could also be done using the timestamp of each routed payment.

[Scriptless scripts](https://en.bitcoin.it/w/index.php?title=Scriptless_scripts&action=edit&redlink=1 "Scriptless scripts (page does not exist)") used as a replacement to explicit [hash time locked contracts](https://en.bitcoin.it/wiki/Hash_Time_Locked_Contracts "Hash Time Locked Contracts") can be used to solve the common hashlock problem. It is possible to add a different random tweak value to the committed random value at each step, as a result there can be a multi-hop path through payment channels in which individual participants in the path wouldn't be able to tell that they're in the same path unless they're directly connected because of this re-blinding [^88] [^89].

A 2017 paper called Concurrency and Privacy with Payment-Channel Networks [^90] [^91] writes about a scheme using zero-knowledge proofs which would allow each hash value in the payment route to be different. The scheme is much more expensive in terms of computation, but it may still be practical.

## Custodial wallets

Lightning-enabled wallets can be of the custodial type, where the wallet is just a front-end that connects to a back-end server run by some company. This is the same situation for web wallets in the on-chain bitcoin ecosystem.

This kind of setup would result in all the user's Lightning Network transactions being visible to that company and so they would have no privacy, in the same way that using a web wallet has no privacy for the on-chain bitcoin space. As of 2019 Zap Wallet and Lightning Peach work on this model. Peach wallet actually has checkboxes in its GUI saying "I agree to the privacy policy" and looking through the privacy policy reveals the wallet tracks all kinds of privacy-relevant stuff. Needless to say a privacy-conscious user shouldn't use these kind of lightning wallets but use non-custodial lightning wallets instead [^92].

Lightning-enabled wallets still need to interface with the underlying bitcoin network, which can leak privacy-relevant information if done incorrectly. For example, if the wallet obtains blockchain transaction information from a centralized server then that server can spy on all the channel opening and closing transaction. Privacy-aware lightweight wallets usually make use of [Client-side block filtering](https://en.bitcoin.it/wiki/Client-side_block_filtering "Client-side block filtering") which is a very good fit for Lightning Network-enabled wallets.

## Private script types

Advances in script type privacy like [Schnorr](https://en.bitcoin.it/wiki/Schnorr "Schnorr"), scriptless scripts, taproot and ECDSA-2P benefit Lightning Network privacy by making its [payment channel](https://en.bitcoin.it/wiki/Payment_channel "Payment channel") blockchain transactions appear indistinguishable from regular single-signature blockchain transactions.

## Probing payments to reveal channel states

The balance state of each channel is hidden from the public and is only known to the two entities making up the [payment channel](https://en.bitcoin.it/wiki/Payment_channel "Payment channel"). This provides a lot of privacy, as amounts and changes of the amounts are not visible to all. A possible way to defeat this privacy is for an active adversary to send probing payments until the balance is obtained. Such attack has been proved possible, as described in a paper from the beginning of 2019 [^93], due to the level of detail that lightning implementations provide about routing errors. Although it would seem that such attack would need to pay the routing fees for the probing payments, the attacker may provide a fake invoice, so even when the payment passes through all the route, the last node will send back an error message and will not be able to execute the payment. So the cost for such attack is reduced to the fees needed to open and close the channels used for the attack.

Such an attack can be used for disclosing the balances of a single or a selected group of nodes of the network and even on a large scale to obtain the balance of each channel in the network. In case the adversary repeats this procedure for every [payment channel](https://en.bitcoin.it/wiki/Payment_channel "Payment channel") in the entire Lightning Network and continues probing very frequently, then by watching the change in channel states, they could observe payment being routed around the network. A possible way to remedy this attack would be for routing nodes to randomly (for example 1-out-of-20 times) return a routing error even if the channel balance state is actually adequate. This likely would not degrade the user experience of Lightning Network much, but would impose a serious cost on the attacker.

# Existing privacy solutions

This section is about bitcoin software which implements privacy features as its main goal, especially avoiding the privacy leaks due to the blockchain.

Privacy cannot be easily separated from any other aspect of bitcoin. It is unusual to have entirely separate solutions only for privacy, the dream is that one day all bitcoin wallets will include privacy tech already built in. But as of late-2018 many privacy implementations are separate applications.

## Lightning Network

There are several implementations of Lightning Network as of early-2019; such as [LND](https://en.bitcoin.it/w/index.php?title=LND&action=edit&redlink=1 "LND (page does not exist)"), [c-lightning](https://en.bitcoin.it/w/index.php?title=C-lightning&action=edit&redlink=1 "C-lightning (page does not exist)"), [eclair](https://en.bitcoin.it/w/index.php?title=Eclair&action=edit&redlink=1 "Eclair (page does not exist)"), etc.

The network itself can be used on bitcoin mainnet and several merchants and other projects accept it. It is still not usable by the general public. It is expected that one day every bitcoin wallet will be able to send and receive lightning network transactions and so the massive privacy benefits will be included in how regular users use bitcoin all the time.

Lightning Network wallets usually the standard privacy tech like [Deterministic wallets](https://en.bitcoin.it/wiki/Deterministic_wallet "Deterministic wallet") and warnings against address reuse.

Some LN wallets such as Zap Wallet and Lightning Peach are actually custodial, they are backed by a centralized server which can spy on everything the user does, so they should be avoided.

## Handmade CoinJoin

CoinJoin transactions can be hand-made without a special wallet just using [Raw Transactions](https://en.bitcoin.it/wiki/Raw_Transactions "Raw Transactions"). This can be very flexible as the coinjoins can take any number of forms. It might be practical in between bitcoin merchants, several of whom might decide to coinjoin together some of their transactions so that the common-input-ownership heuristic would imply they are all the same wallet cluster.

## JoinMarket

[JoinMarket](https://en.bitcoin.it/wiki/JoinMarket "JoinMarket") is an implementation of CoinJoin where the required liquidity is paid for in a market. In JoinMarket terminology there are _liquidity taker_ users who can create a coinjoin for whatever amount they want at any time, they also pay a small coinjoin fee. _Liquidity makers_ are online 24 hours a day and are ready to create a coinjoin at any time for any amount they can, in return they earn coinjoin fees from liquidity takers. Because of this market for coinjoins, JoinMarket users can create coinjoins at any time and for any amount (up to a limit based on available liquidity).

Other people are always available for coinjoining because they earn fees, and coinjoins can be of any amount and happen at any time. [JoinMarket](https://en.bitcoin.it/wiki/JoinMarket "JoinMarket") can also be a small source of income for operators of liquidity maker bots, who earn coinjoin fees by allowing other people to create coinjoins with their bitcoins.

Privacy is greatly improved by repeating coinjoins many times, for this reason the [JoinMarket](https://en.bitcoin.it/wiki/JoinMarket "JoinMarket") project includes the tumbler script where coinjoins are automatically created at random times and for random amounts. Bitcoins can be deposited into the JoinMarket [HD wallet](https://en.bitcoin.it/wiki/Deterministic_wallet "Deterministic wallet") and the tumbler script will send them via many coinjoins to three or more destination addresses. This feature of using more than one destination address is required to beat amount correlation. For example a user who wants to deposit coins into an exchange would make use of the _Generate New Deposit Address_ button to obtain more than one destination address, the exchange may then combine those coins with deposits from other customers which should resist any tracking based on amounts.

JoinMarket can interface with a Bitcoin Core full node in order to privately obtain the history of its own wallet. There is also an option to use Electrum server, but users are discouraged from using it. There are plans to replace the Electrum interface with one that uses [Client-side block filtering](https://en.bitcoin.it/wiki/Client-side_block_filtering "Client-side block filtering").

The software is an open source project with a community based around it. Unfortunately JoinMarket can be difficult to install for people not used to Linux or the command line interface. It is hoped one day there may be work done to make this easier, but as all development is done by volunteers there can be no roadmap for this.

Main article: [JoinMarket](https://en.bitcoin.it/wiki/JoinMarket "JoinMarket")

## Wasabi Wallet

**Wasabi Wallet** is an open-source, non-custodial, **privacy-focused** Bitcoin wallet for Desktop, that implements trustless **CoinJoin**. The CoinJoin coordinator (run by zkSNACKs Ltd., the company that is sponsoring the development of Wasabi) cannot steal from, nor breach the privacy of the participants.

The package includes built-in Tor and, by default, all traffic between the clients and the server goes through it, so IP addresses are hidden and privacy of the users is respected. Under normal conditions, Wasabi Wallet never leaves Tor onion network and it never uses Tor exit relays, significantly decreasing the network attack surface.

Wasabi also includes all standard privacy tech like a Hierarchical [Deterministic wallet](https://en.bitcoin.it/wiki/Deterministic_wallet "Deterministic wallet") and address reuse avoidance, as well as mandatory coin control and labeling. The wallet uses BIP-158 [Client-side block filtering](https://en.bitcoin.it/wiki/Client-side_block_filtering "Client-side block filtering") to obtain its own transaction history in a private way and it has a one-click partial full node integration as it ships with Bitcoin Knots. If the user already has a Bitcoin full node on a local or remote device, then it is possible to specify the IP address and port, or the Tor onion service, and Wasabi will use it to verify and enforce rules of Bitcoin.

In addition to this, it has advanced cutting-edges features like:

- Opt-in [PayJoin](https://en.bitcoin.it/wiki/PayJoin "PayJoin")
- Dust attack protections
- Custom change address
- Anti wallet fingerprinting

Wasabi also has a [complete and detailed documentation](https://docs.wasabiwallet.io/) containing explanations on the architecture of the program, on its functioning and tutorials on how to use it.

Main article: [Wasabi Wallet](https://en.bitcoin.it/wiki/Wasabi_Wallet "Wasabi Wallet")

## Samourai Wallet

Samourai Wallet is a smartphone wallet which implements some privacy features. Stowaway is an implementation of [PayJoin](https://en.bitcoin.it/wiki/PayJoin "PayJoin"). Stonewall is a scheme which creates transactions that look like [CoinJoins](https://en.bitcoin.it/wiki/CoinJoin "CoinJoin") but actually involve only one person; these fake coinjoins are intended to create false positives in algorithms used by a hypothetical [transaction surveillance company](https://en.bitcoin.it/wiki/Transaction_surveillance_company "Transaction surveillance company"). StonewallX2 is a scheme that creates transactions that are identical to Stonewall but involve two participants, making it an actual CoinJoin transaction. PayNyms are an implementation of [ECDH addresses](https://en.bitcoin.it/wiki/ECDH_address "ECDH address"). The wallet also has a feature called like-type change outputs where it generates a change address which is of the same type as the payment address; this avoids [wallet fingerprinting](/en/wiki-bitcoin-privacy/#wallet-fingerprinting) using address types which leads to change address detection.

By default, Samourai Wallet obtains information about the user's history and balance by querying their own server. This server knows all the user's addresses and transactions, and can spy on them. Therefore using the default configuration of Samourai Wallet is only useful in a threat model where the adversary can analyze the blockchain but cannot access this server. In June 2019 with the release and open sourcing of the Samourai Wallet server, Dojo, users may now host their own server privately and direct their Samourai Wallet to connect to it.

## Liquid sidechain

As of 2018 the Liquid [sidechain](https://en.bitcoin.it/wiki/Sidechain "Sidechain") implements Confidential Transaction (CT) which allows bitcoins to be transferred on that sidechain while keeping the transaction amounts hidden. The product is developed by the Blockstream company and is aimed at exchanges and traders. It allows fast transfer of bitcoin in a very private way.

As Liquid is a federated sidechain, users generally need to pass AML checks and give up their personal data in order to use it. Its security model is quite close to having bitcoins on an exchange, because if enough of the functionaries get hacked then all the bitcoins on the sidechain could be stolen. However within that security model you get excellent privacy, and the [sidechain](https://en.bitcoin.it/wiki/Sidechain "Sidechain") itself is marketed towards traders and hedgers who certainly want to keep their trading activities private to stop other traders front-running them.

## Mercury Wallet

**Mercury** is a new Bitcoin layer-2 scaling technology, based on the concept of statechains, that enables private keys for BTC deposits (UTXOs) to be transfered securely between owners without requiring an on-chain transaction.

This enables users to transfer full custody of an amount of BTC to anyone almost instantly, with increased privacy, and without having to pay miner fees. Mercury also supports the first production **[CoinSwap](https://en.bitcoin.it/wiki/CoinSwap "CoinSwap")** implementation.

Main article: [MercuryWallet](https://en.bitcoin.it/wiki/MercuryWallet "MercuryWallet")

# Examples and case studies

Privacy is a very multifaceted and practical topic, it is helpful to follow examples to better understand how all the concepts are related.

## Bad privacy example - Exchange front running

1. You are a trader and have an account on a bitcoin [exchange](https://en.bitcoin.it/wiki/Exchange "Exchange").
2. You want to deposit some bitcoins to sell.
3. You send bitcoins to the same exchange deposit address you have used in the past.
4. Because of the address reuse, its easy to see on the blockchain that some bitcoins are being sent to the exchange.
5. The exchange requires 3 confirmations before crediting your account, but in that time the price has already moved against you as other traders become aware of your deposit transaction.
6. You sell the bitcoins for a less attractive price than you otherwise would have.
7. This is easily avoided by clicking the **Generate New Deposit Address** button on the exchange's website and depositing there.

Lesson: [Address reuse](https://en.bitcoin.it/wiki/Address_reuse "Address reuse") is terrible for privacy.

## Bad privacy example - Savings revealed with address reuse

1. You save in bitcoin, using a [single-address paper wallet](https://en.bitcoin.it/wiki/Paper_Wallet "Paper Wallet") which results in address reuse.
2. All your bitcoin savings to this same address, let's say it contains $1 million worth.
3. You buy a small amount of bitcoins to add to your savings, depositing in the paper wallet.
4. The person who sold you the bitcoins follows their trail on the blockchain and finds your paper wallet containing $1 million.
5. He mentions it to someone in a cafe or bar.
6. Word gets around. A burglar raids your home and holds you hostage until $1 million in bitcoin is handed over [^94].

Lesson: [Address reuse](https://en.bitcoin.it/wiki/Address_reuse "Address reuse") is terrible for privacy.

## Bad privacy example - Savings revealed with data collection

1. You save in bitcoin. Trading on an exchange which you [reveal all your data to](/en/wiki-bitcoin-privacy/#revealing-data-when-transacting-bitcoin).
2. Mostly you buy coins but sometimes you sell. You only ever use this one exchange.
3. Regardless of any blockchain privacy technology you use, the exchange still knows all your trades and can find exactly how much bitcoin you hold at any time.

## Example - Evading sanctions

1. You live in a country that is under international trade sanctions from other countries.
2. Because of this you cannot buy the online newspaper you want.
3. You navigate to the newspaper website with Tor so that they can't tell your origin country from your IP address.
4. You buy bitcoins with cash and send them to wallet software on your computer, then use the bitcoins to buy the newspaper.
5. Bitcoin transactions don't have geographical information about them, so your payment is not discovered as coming from a sanctioned country.

## Example - Transacting with your online poker buddies without revealing your real name

1. You play online poker with some people (for real money).
2. You win big. Lots of money goes to you and your buddies are annoyed.
3. The stakes are in bitcoin which you receive. You sell the coins for cash or via an [exchange](https://en.bitcoin.it/wiki/Exchange "Exchange"), or use them to directly buy goods and services.
4. Your irritated poker buddies can't find your real name.

This example has a very mild threat model where the adversary can't access the exchange's AML/KYC records (if you didn't trade with cash), and they are not your ISP so cannot easily link your bitcoin addresses with your IP address (in the case that you used a [lightweight node](https://en.bitcoin.it/wiki/Lightweight_node "Lightweight node") instead of a full node).

## Example - Donation without your employer knowing

1. You earn money in bitcoin, your employer has sent you bitcoins as salary.
2. You want to support X charity or political group with a donation of 0.1 BTC, but don't want your employer knowing.
3. Deposit 0.3 BTC into a bitcoin casino, altcoin exchange or another bitcoin service website that allows anonymous bitcoin deposit and withdrawals from the general public.
4. Withdraw 0.1 BTC and put the desired donation address as the withdrawal address.
5. Withdraw the remaining 0.2 BTC back into your own wallet (to a brand new address, avoiding address reuse).

If your employer casually analyses the blockchain they will think you are a gambler instead of a supporter of group X. The bitcoin casino doesn't care who you donate to. The employer also can't correlate the amounts, because they see you deposit 0.3 BTC but only 0.1 BTC is sent to the group. Privacy comes from mixing your coins with the coins of everybody else who uses that casino in the time period that your coins were deposited.

## Example - Donation without anyone knowing

1. You want to support X charity or political group without anyone knowing.
2. Download and install a wallet which is backed by a full node such as Bitcoin Core.
3. Buy the exact amount of bitcoin for cash (get slightly more because of transaction fees and volatility), have the coins sent to your wallet.
4. Send the coins to the group to donation. The transaction should be broadcasted over Tor.

Instead of direct cash trading, the user could have also bought a cash substitute like a gift card and traded it online for bitcoin that wasn't link to their identity.

The full node is required in this threat model, because otherwise your ISP or another adversary could likely spy on [lightweight node](https://en.bitcoin.it/wiki/Lightweight_node "Lightweight node") communications and discover the user's bitcoin addresses. Broadcasting the transaction over Tor is required to stop your ISP or a [transaction surveillance company](https://en.bitcoin.it/wiki/Transaction_surveillance_company "Transaction surveillance company") from learning that your IP address broadcast the transaction.

## Example - Receiving donations privately

1. You have a single donation address for your group or project, anybody can see all donations and their amounts by putting your donation address into a blockchain explorer.
2. You want to spend the donations without anyone on the internet knowing.
3. The donation address is part of a wallet backed by a full node such as [Armory](https://en.bitcoin.it/wiki/Armory "Armory").
4. Broadcast a transaction over Tor to deposit the donation money into a bitcoin website which allows anonymous deposits and withdrawals.
5. Withdraw the money straight into another similar bitcoin service website.
6. Take care to use different transactions in order to stop the amounts being correlated.
7. Make sure to wait a little while to stop the timings being used to link together transactions
8. Repeat this for many different bitcoin websites [^95] before finally sending the coins back to your own wallet.

Take an example with 1 BTC. Each arrow -> is a new withdrawal transaction.

```
Wallet    Casino1           Altcoin Exchange          Casino2            Futures Exchange   Wallet
1btc  ->  1addrA  1btc      ->  1addrB 0.1btc     ->  1addrE 0.1btc  ->  1addrG 0.4btc  ->  1addrH 0.25btc
                            ->  1addrC 0.2btc     ->  1addrF 0.9btc  ->  1addrF 0.6btc  ->  1addrI 0.25btc
                            ->  1addrD 0.7btc                                           ->  1addrJ 0.25btc
                                                                                        ->  1addrK 0.25btc
```
As before the full node wallet allows your wallet to learn its own history privately, while Tor broadcasting hides your IP address used when sending a transaction. Using many different amounts stops [amount correlation](/en/wiki-bitcoin-privacy/#amount-correlation) from providing clues that can ruin your privacy. Using multiple bitcoin websites means a single website which co-operates with the adversary won't be enough to completely ruin your privacy. There is custodial risk as each website has the power to steal your money, but in this example the bitcoin amount is relatively low so the risk is acceptable.

## Example - Storing savings privately

1. You want to [store value in bitcoin](https://en.bitcoin.it/wiki/Bitcoin_as_an_investment "Bitcoin as an investment") without anybody else knowing what you do with that value, or even that you own bitcoin.
2. Buy the coins in some way and have them sent to your [JoinMarket](https://en.bitcoin.it/wiki/JoinMarket "JoinMarket") wallet which you've configured to use your own full node, all of which run entirely over Tor.
3. Run JoinMarket's tumbler script which has it create many CoinJoin transactions with the aim to break the link between addresses.
4. Have the coins sent to another wallet which will be used for [storing the bitcoins](https://en.bitcoin.it/wiki/Storing_bitcoins "Storing bitcoins") long term. The wallet should be backed by a full node such as Electrum pointed to your own [Electrum server](https://en.bitcoin.it/wiki/Electrum#Server_software "Electrum").

Note that bitcoin privacy technology like [JoinMarket](https://en.bitcoin.it/wiki/JoinMarket "JoinMarket") can hide private-relevant information from your transactions but it cant add privacy in other places; for example if you buy the bitcoins in a non-anonymous way such as using an AML/KYC exchange then that exchange will know that your real-life identity bought bitcoins at that time.

Using [JoinMarket](https://en.bitcoin.it/wiki/JoinMarket "JoinMarket") is non-custodial unlike the previous method which sends bitcoin through many bitcoin service websites, so it is useful where the custody risk is unacceptably high (such as where you're anonymizing all your hard-earned savings). All the wallets are backed by full nodes in this example to stop a third-party service being able to link together your addresses or link them with your IP address. The full node is run entirely over Tor to stop your internet service provider or any network-level adversary from seeing that you run a bitcoin node.

## Example - Stopping incoming payments from different sources from being linked together

1. If you had both payments in the same wallet they may be linked together with the common-input-ownership heuristic.
2. You have a job as a nurse, you also moonlight as a stripper for extra income. Both jobs pay in bitcoin and you don't want them to be linked together.
3. You send the nurse income into one [JoinMarket](https://en.bitcoin.it/wiki/JoinMarket "JoinMarket") mixdepth and the stripper income into another mixdepth.
4. You run the JoinMarket tumbler script which will combine both balances without linking them together.

Another way to do this (but with custodial risk) is to deposit the nurse income into a bitcoin service website (like a casino) and then deposit the stripper income but to a different deposit address. After you withdraw both with be combined with all the other deposits of other users of the casino. Probably the best way to do this is to receive one or both of the income streams over Lightning Network.

## Example - Withdrawing casino winnings to a bitcoin exchange without either entity knowing the source or destination of funds

1. You have won 10 BTC at a bitcoin casino, you want withdraw them to a bitcoin exchange to sell without either party knowing (maybe because online gambling is blocked in your jurisdiction).
2. Install [JoinMarket](https://en.bitcoin.it/wiki/JoinMarket "JoinMarket") and point it at your own full node.
3. Have the casino winnings sent to your JoinMarket wallet in three different payments of 5btc + 2btc + 3btc, they should go to seperate mixdepths.
4. Run the JoinMarket tumbler script to mix the coins and have them sent to three different deposit address of the exchange with amounts (for example) 1btc + 2btc + 7btc.
5. Then neither the online casino nor the exchange can use amount correlation to figure out the source or destination. The coinjoin transactions stop them using the common-input-ownership heuristic, and the other JoinMarket features stop address reuse and analysis of the transaction graph [^96].

## Bad privacy example - Using a blockchain explorer

1. You receive a payment of bitcoin at one of your addresses.
2. You copy and paste the address into a [blockchain explorer website](https://en.bitcoin.it/wiki/Block_chain_browser "Block chain browser") and press _Refresh_ until the incoming transaction reaches 3 confirmations.
3. The blockchain explorer website now knows that your IP address is very interested in that particular bitcoin address.
4. This is best avoided by using your own bitcoin wallet (backed by a full node) to tell you when payments have arrived and how many confirmations they have, without any other entity knowing.

This privacy break can be almost entirely fixed by navigating to the blockchain explorer website over Tor. It still reveals that _somebody_ is interested in that bitcoin address but doesn't reveal their IP address, and does not reveal any other bitcoin addresses controlled by the same user.

## Bad privacy example - Privacy altcoin mixing failing due to amount correlation

1. You own 1.456225 BTC for which some privacy-relevant information has been leaked (maybe you bought it from a AML/KYC exchange) and want to send it to another address while breaking the link between the two.
2. You trade the bitcoins for an altcoin which implements some blockchain privacy technology, a so-called "privacy coin", then you trade the altcoin back to bitcoin after making a few altcoin transactions.
3. You send the bitcoins back to your wallet in one transaction.
4. Because the transaction amount is very close to the initial 1.456225 BTC, its not very hard for an adversary to search the entire blockchain and link the two similar-amount transaction going into and out of the altcoin exchange you used.

Lesson: Transactions have amounts visible to all which must be treated with care for privacy.

## Example - Privacy altcoin mixing

1. Similar to the previous example, you have bitcoins you want to mix. You trade into and out of a privacy altcoin to do it.
2. When trading back into bitcoin you deposit the privacy altcoin into an exchange to sell, you use several transactions so that the exchange and any observer of the blockchain cannot easily use amounts to link together the before and after addresses.

This method may still fail because privacy altcoins have fewer transactions than bitcoin by a factor of a few hundred, so the anonymity set may be lower. Also there are custodial risks with using exchanges so this method may not be appropriate for large amounts of coin. As privacy altcoins are usually much less scalable than bitcoin, their full node wallets may be more resources-costly to run than bitcoin's. Privacy altcoins are likely to have a more volatile price than bitcoin which increases the risk of losing part of the money due to price movements.

## Example - Daily commerce with Lightning Network

1. You have some bitcoin and want to spend it on regular goods and services. (Coffee, phone credit, VPN, hosting, hotel and apartment rentals, flights, food, drinks, clothes, etc etc) and you want to be as private as possible.
2. You download and install a Lightning Network wallet and use that for all purchases.
3. Privacy attacks like common-input-ownership heuristic, address reuse and change address detection fundamentally don't work on any [Off-Chain Transactions](https://en.bitcoin.it/wiki/Off-Chain_Transactions "Off-Chain Transactions") technology.

## Bad privacy example - Sending to a static donation address without precautions

1. You own bitcoin and keep it in a custodial wallet.
2. You want to donate to charity or political group X.
3. You create a transaction on the custodial wallet's website sending some money to the group's donation address.
4. The custodial wallet server can see where you're sending it (especially easily if the group uses a static donation address).
5. They disagree with your views and then they close your account.

Lesson: Using a custodial wallet is bad for privacy because the custodian can see everything you do. [Address reuse](https://en.bitcoin.it/wiki/Address_reuse "Address reuse") is harmful to privacy (but common with donation addresses).

## Bad privacy example - Receiving donations spied on with mystery shopper payments

1. You want to accept bitcoin donations but don't want to reveal the total donated amount.
2. You set up a web server to give out unique addresses for each visitor.
3. An adversary who wants to get an idea of your total donation income donates a small amount of bitcoin to you.
4. You combine all donations to use as inputs one transaction, thereby linking them together with the common-input-ownership heuristic.
5. The adversary now has a good idea of your total donation income.

Lesson: [mystery shopper payments](https://en.bitcoin.it/wiki/Mystery_shopper_payments "Mystery shopper payments") can be used to spy on people, even then they avoid address reuse. Be mindful of what is being revealed with the common-input-ownership heuristic.

## Real life example - Bitcoin-stealing malware using static addresses

1. You are a creator of stealware (malware that steals money from its victim).
2. You hardcode some bitcoin address into your malware where the ill-gottens are sent to.
3. Any malware researcher can now see how many bitcoins you have stolen simply by putting the addresses into a blockchain explorer.

This has been done in many cases including: the Wannacry malware [^97] [^98] and Electrum stealware [^99] [^100].

## Bad privacy example - Bitcoin-stealing malware spied on with mystery shopper payments

1. You are an infosec researcher studying bitcoin-stealing malware.
2. The malware author has coded a [ECDH address scheme](https://en.bitcoin.it/wiki/ECDH_address "ECDH address") into their malware.
3. Your analysis of the malware only reveals the ECDH public key rather than bitcoin addresses, so the malware author thinks he is private.
4. You send a small amount of bitcoin to an address derived from the ECDH public key as a [mystery shopper payment](https://en.bitcoin.it/wiki/Mystery_shopper_payments "Mystery shopper payments").
5. The malware author sends all their received stolen coins to an exchange in one transaction, including your payment.
6. You can now look on the blockchain and use the common-input-ownership heuristic to get an idea of total amount of bitcoins stolen by the malware.
7. Also you can now contact the exchange who will tell you the real life identity of the malware author, who can now be put in jail.

Lesson: [mystery shopper payments](https://en.bitcoin.it/wiki/Mystery_shopper_payments "Mystery shopper payments") along with the common-input-ownership heuristic can be used to deanonymize even people who avoid address reuse.

## Example - Single-use lightweight wallet over Tor

1. You want to anonymously buy something or donate to something online.
2. You install Electrum wallet and configure it to use Tor, or use [Tails OS](https://tails.boum.org).
3. You buy bitcoins anonymously with cash and have them sent to your Electrum wallet.
4. You spend the entire balance of bitcoins buying or donating to the thing you want.
5. After you're done you delete the wallet and never use it again.

Your Electrum wallet used a third-party server which can see all your bitcoin addresses and transaction. As you've connected to it over Tor, the server does not learn your real IP address. As you only use a single bitcoin address once and never again, the server isn't able to cluster together any other addresses. As you spent the entire balance there is no change address which can leak information. This setup actually results in strong privacy even though a third-party server is used.

## Bad privacy example - Lightweight wallet over Tor used multiple times

Very similar to the previous example, but more than one address and transaction is used.

1. You want to use bitcoin for more than one use-case, for example buying a novelty hat and paying for a VPN.
2. You install Electrum wallet and configure it to use Tor.
3. You pay for the novelty hat and have it sent to your mail address.
4. You pay for the VPN to improve your web browsing privacy.
5. As the Electrum wallet queries a third-party Electrum server, that server can link together the two transactions and knows which address is the change address.
6. Therefore the server can easily see that the same person who bought the hat also paid for the VPN. As the hat purchase required revealing your mail address, your mail address can now be linked with the VPN account. So much for anonymous web browsing!

Lesson: The third-party Electrum server was able to link together your two transactions. Avoid this by [running your own Electrum server](https://en.bitcoin.it/wiki/Electrum#Server_software "Electrum") which is backed by your own full node.

Lesson 2: Note that [TailsOS](https://tails.boum.org) as of 2018 uses this privacy model for Electrum(!)

## Real life example - Public donation address combined with the common-input-ownership heuristic

1. Go to a website which accepts bitcoin donations like the [Tails OS donation page](https://tails.boum.org/donate/).
2. Take their donation address (in this case `1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2`) and search it in the www.walletexplorer.com site.
3. The site uses the common-input-ownership heuristic, address reuse and possibly other techniques to cluster together addresses.
4. We can see the amount and volume of donations to the Tails OS project: [https://www.walletexplorer.com/wallet/04d3d17f766c4e53?from_address=1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2](https://www.walletexplorer.com/wallet/04d3d17f766c4e53?from_address=1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2) The amounts look realistic so we're probably on the right lines.

## Real life example - Digital forensics aids with investigation of the MtGox exchange

1. [Mt. Gox](https://en.bitcoin.it/wiki/Mt._Gox "Mt. Gox") is a now-defunct bitcoin exchange which shut down in 2013 due to insolvency.
2. Its internal database was leaked in March 2014, from which it was possible to build up a near-complete picture of the deposits and withdrawals of its wallets.
3. Address reuse was also a big factor. The common-input-ownership heuristic was less of a factor because that heuristic was broken by mtgox's import private key feature.
4. Analysis information was also cross-checked by searching the web for all forum posts where a customer writes something like: _Help! I made a deposit to MtGox of amount 0.12345 BTC. As I write my transaction has 20 confirmations but the deposit hasn't appeared in the exchange._ The forum posts include a date and time. These posts include enough information to search for the corresponding blockchain transaction.
5. The analysis revealed that there were multiple thefts from mtgox and the exchange was insolvent for most of its existence.

Full talk: [Breaking Bitcoin 2017 conference. Kim Nilsson - Cracking MtGox](https://www.youtube.com/watch?v=l70iRcSxqzo) [Slides](https://breaking-bitcoin.com/slides/CrackingMtGox.pdf).

## Real life example - Flawed use of the common-input-ownership heuristic exaggerates donation income

1. Go to a website which accepts bitcoin donations like ThePirateBay.
2. Take their donation address (in this case `1z8Tep4BNS79W3kYH8CHA8tWj6nuHYcCM`) and search it in the www.walletexplorer.com site.
3. The site uses the common-input-ownership heuristic, address reuse and possibly other techniques to cluster together addresses.
4. We can see most of the amount and volume of donations to ThePirateBay: [https://www.walletexplorer.com/wallet/00005c945dba011c?from_address=1z8Tep4BNS79W3kYH8CHA8tWj6nuHYcCM](https://www.walletexplorer.com/wallet/00005c945dba011c?from_address=1z8Tep4BNS79W3kYH8CHA8tWj6nuHYcCM)
5. The results indicate that ThePirateBay is making hundreds of millions of dollars in donations per day, which is not believable.
6. A possible explanation of what's actually happening is ThePirateBay accepts donations straight into its account at a bitcoin [exchange](https://en.bitcoin.it/wiki/Exchange "Exchange"), which would result that analysis based on the common-input-ownership heuristic gives highly exaggerated figures because it actually finds all deposits to that entire exchange. This has a danger for ThePirateBay that the custodial exchange could block or censor incoming donations.
7. Another possibility is that ThePirateBay is using CoinJoin.

## Real life example - Incorrect clusters found by the common-input-ownership heuristic

1. The www.walletexplorer.com website uses the common-input-ownership heuristic, address reuse and possibly other techniques to cluster together addresses.
2. It has a big named cluster called [MtGoxAndOthers](https://www.walletexplorer.com/wallet/MtGoxAndOthers) which has 8.6 million transactions and 3.6 million addresses associated with it as of January 2019.
3. The old [Mt. Gox](https://en.bitcoin.it/wiki/Mt._Gox "Mt. Gox") exchange had a feature where users could import bitcoin private keys from their personal wallet straight into the website [^101]. There it would be merged with UTXOs from MtGox's own wallet.
4. It seems some CoinJoin transactions have also ended up in the cluster [^102].
5. For example the transaction `5ac0210febf7ce07a737bae8c32f84c1c54d131c21a16ca6b02b6f1edcad15c3` which is probably a [JoinMarket](https://en.bitcoin.it/wiki/JoinMarket "JoinMarket") transaction belongs to the MtGoxAndOthers cluster [^103].
6. Another example is the transaction `52757ed33a235ce8e48aeaabab7f6dd9cd3445c3642630123103b154ee59f3f5` which is a coinjoin created by the old SharedCoin centralized service [^104], it is also in the MtGoxAndOthers cluster according to walletexplorer.

## Real life example - Handmade coinjoin mislead a bitcoin analyist

1. The inventor of CoinJoin Greg Maxwell posted a thread on [bitcointalk forums called "I taint rich!"](https://bitcointalk.org/index.php?topic=139581.0) which aimed to demonstrate coinjoin and how the common-input-ownership heuristic is not always correct.
2. The thread invited forum readers to create [CoinJoins](https://en.bitcoin.it/wiki/CoinJoin "CoinJoin") by hand with Greg Maxwell's vanity address, which he hopes would be a strong demonstration of the flaws of the common-input-ownership heuristic.
3. Many years later, a bitcoin transaction worth 40000 BTC was broadcasted and mined which caused some [speculation on bitcoin forums](https://www.reddit.com/r/Bitcoin/comments/6tvwr5/someone_moved_40000_btc_is_it_from_silkroad/). The handmade coinjoins caused some to come to the wrong conclusion that Greg Maxwell was the owner of the 40000 BTC.
4. A quote from the analyst:

> _Originally looks like they were owned by someone with the vanity address of GMaxweLL: 14947302eab0608fb2650a05f13f6f30b27a0a314c41250000f77ed904475dbb_
> 
> _If you follow the 40k from that transaction (click the outputs), you get to the transaction you linked to. It's a short series of transactions._
> 
> _Basically, someone who owns that address was able to unlock coins from that address, as well as another address that held the 40,000, in the same transaction. So they must have owned both (at least 4 years ago anyway)._

Lesson: The common-input-ownership heuristic isn't always right.

## Real life example - The QuadrigaCX exchange wallet analysis

1. In early 2019 the exchange QuadrigaCX shut down and many of its customers were left unable to access their bitcoin deposits, likely forever.
2. A customer wanted to analyze the blockchain to find information about QuadrigaCX's wallet.
3. They asked on internet forums for other customers to reveal their deposit addresses and transactions, many customers did so.
4. Using www.walletexplorer.com the analyst was able to find a big wallet cluster containing all those addresses, it is likely this is the QuadrigaCX hot wallet. The hot wallet made many transactions, often involve reused addresses and didn't use CoinJoin; so it's likely that this analysis is correct.
5. The walletexplorer cluster called MtGoxAndOthers mislead the analyst into believing the QuadrigaCX had something to do with MtGox, when in reality that cluster arises because of CoinJoin.
6. The analyst was unable to find a single cluster with a significant amount of bitcoins which could be the [cold storage](https://en.bitcoin.it/wiki/Cold_storage "Cold storage") wallet. However cold storage wallets are likely to create few transactions and never reuse addresses; so its possible such a cluster would never appear on walletexplorer.com which uses the common-input-ownership heuristic. However its also possible that the exchange is insolvent and so there is no [cold storage](https://en.bitcoin.it/wiki/Cold_storage "Cold storage") wallet.

Main article: [https://blog.zerononcense.com/2019/02/04/quadrigacx-chain-analysis-report-pt-1-bitcoin-wallets/](https://blog.zerononcense.com/2019/02/04/quadrigacx-chain-analysis-report-pt-1-bitcoin-wallets/)

Reddit comments: [https://www.reddit.com/r/Bitcoin/comments/amut05/investigation_proves_an_exchange_quadriga_ran_a/](https://www.reddit.com/r/Bitcoin/comments/amut05/investigation_proves_an_exchange_quadriga_ran_a/)

## Real life example - Stopping Bustabit casino customers getting banned from Coinbase.com

1. Coinbase.com is a bitcoin [exchange](https://en.bitcoin.it/wiki/Exchange "Exchange"). Bustabit is an online casino that uses bitcoin.
2. In the United States online gambling is illegal (although state government often operates their own lotteries, and meatspace gambling like in Vegas is legal). Coinbase.com enforces this policy by warning and ultimately banning their customers who use online bitcoin casinos.
3. Some of Bustabit's customers were being warned and banned by Coinbase.com.
4. Bustabit implemented [change avoidance](https://en.bitcoin.it/wiki/Techniques_to_reduce_transaction_fees#Change_avoidance "Techniques to reduce transaction fees") [^105] so many of their withdrawal transactions did not have a change output.
5. Bustabit also imported many thousands of re-used addresses into [JoinMarket](https://en.bitcoin.it/wiki/JoinMarket "JoinMarket") and made them be used as inputs in many CoinJoin transactions.
6. No more Bustabit customers were ever warned or banned
7. It seems the combination of both methods broke the common-input-ownership heuristic and reduced the privacy-relevant information leaked by change outputs, enough that Coinbase.com's [transaction surveillance company](https://en.bitcoin.it/wiki/Transaction_surveillance_company "Transaction surveillance company") partner was unable to identify Bustabit's wallet addresses anymore.

## Real life example - Rare multisignature scripts

1. As of January 2019 [multisignature](https://en.bitcoin.it/wiki/Multisignature "Multisignature") contracts are visible to any observer of the blockchain.
2. This includes their m-of-n values, the most common by far are 2-of-3 multisig [^106].
3. Some very unusual scripts such as 12-of-14 multisignature has been used a handful of times on the blockchain. These are easily visible as someone's wallet who received some money and then spent it.
4. The bitcoin vault of the Xapo company used a 3-of-5 multisignature scheme. At one point when they moved it which resulted in 90% of the coins held on 3-of-5 multisig addresses moving on the blockchain. This revealed the amount of bitcoin in Xapo's wallet [^107].
5. In 2016 the exchange Bitfinex was hacked and part of its wallet was stolen. Bitfinex used 2-of-3 multisignature addresses to store its coins. As the thief moved the hacked coins to regular non-multisignature addresses, the movement of 120,000 bitcoins out of 2-of-3 multisig was visible on the blockchain, and it revealed the size of the theft [^108].

## Real life example - Freelance IT contractor has his co-workers figure out his salary

1. A user posted on the bitcoin reddit forum [^109] about his experience with co-workers figuring out his salary because of address reuse.
2. _"As a freelance IT contractor, I had one incident where an on-site specialist found out my daily rate. Surely, he was a bit upset and complained to his manager about the lack of his own compensation. My agency fined me for 50% of the monthly rate. Needless to say, I now create a unique receive address for every invoice, and use another set of addresses for the daily personal-use expenditure."_

Lesson: [Address reuse](https://en.bitcoin.it/wiki/Address_reuse "Address reuse") is terrible for privacy.

## Real life example - Hacker hides destination of 445 btc with CoinJoin

1. In May 2017 a reddit user posted a thread saying they kept 445 btc on blockchain.info's web wallet, and their coins were stolen [^110].
2. They offered a 50% bounty for any help or information leading to finding their bitcoins again
3. The stolen coins turned out to have been mixed through [JoinMarket](https://en.bitcoin.it/wiki/JoinMarket "JoinMarket"). It seems the hacker put the coins in a JoinMarket yield generator script and allowed them to be used for coinjoins a large number of times. A CoinJoin peeling chain can be seen.
4. All traces are lost from what anybody has been able to tell.

For good advice on how to store bitcoins without having them stolen by hackers see the [Storing bitcoins](https://en.bitcoin.it/wiki/Storing_bitcoins "Storing bitcoins") article on this wiki.

## Bad privacy example - Data fusion of blockchain data and web cookies when online shopping with Bitcoin

1. Online shopping has several potential privacy leaks. Examples are third-party tracking cookies (such as from sites Doubleclick, Google Analytics or Facebook), or data given intentionally to merchants such as name, delivery address or email address.
2. Bitcoin's blockchain leaks a lot of privacy-relevant information.
3. Data fusion of these two categories of leaks can reveal a lot of information about people using Bitcoin for online shopping. This is the topic of a 2018 paper called When The Cookie Meets The Blockchain [^111].
4. For example, if a bitcoin user buys a novelty hat and has it shipped to their home and then later the same bitcoin wallet donates to Wikileaks, then the hat merchant and third-party trackers (who know the user's real name and mail address) can figure out that the same user donated to Wikileaks.

This is example of the power of data fusion, where two or more privacy leaks which when combined reveal far more information than each individual leak.

The privacy problems of third-party web tracking cookies have been known for nearly a decade but the situation has not improved much. Privacy can be regained in practice in this situation by 1) Using browser extensions such as uBlock Origin, Adblock Plus or Ghostery to block third-party tracking cookies, and/or 2) Using [off-chain transaction methods](https://en.bitcoin.it/wiki/Off-Chain_Transactions "Off-Chain Transactions") to make payments where much less privacy-relevant information is leaked. Most practically as of 2019 would be using Lightning Network for online shopping.

## Bad privacy example - Centralized mixers being easily unmixed with amount correlation

1. BitcoinFog is a centralized bitcoin mixer, it charges 1-3% for a mix.
2. Someone on reddit easily unmixes many BitcoinFog mixes using [Amount correlation](/en/wiki-bitcoin-privacy/#amount-correlation) [^112].

## Bad privacy example - Data fusion of blockchain data and IP address transaction broadcasting data

1. A 2018 paper [^113] uses blockchain analysis and the tracking of transaction broadcasts to deanonymize bitcoin users.
2. The researchers use address reuse and the common-input-ownership heuristic (the paper authors do not mention the possibility of CoinJoin)
3. The researchers connect to every single listening bitcoin node, and attempt to track transactions as they broadcast. This gives them an idea of the originating IP address.
4. The paper identifies about 22,000 bitcoin users by linking their IP address and bitcoin addresses. About 20,000 of these users come from one IP address which is probably a popular web wallet.
5. The paper collected data during late-2013, but the Bitcoin Core transaction relay algorithm has been changed significantly in the meantime to improve privacy. So the method used should work less well today.

Lesson: Private transaction broadcasting (for example over Tor) is necessary for privacy.

## Real life example - 2018 paper on analysis of bitcoin ransomware transactions

1. A 2018 paper uses tracking techniques to study bitcoin ransomware [^114].
2. Some ransomware uses static addresses (which implies address reuse) while other ransomware requires victims to connect to a http server that hands out new bitcoin addresses.
3. To find ransomware addresses the researchers found online reports by victims and reverse-engineered ransomware binaries to find addresses within.
4. They also used [mystery shopper payments](https://en.bitcoin.it/wiki/Mystery_shopper_payments "Mystery shopper payments"), sending 0.001 BTC to ransomware addresses and watching where that coin is sent to. Two ransomware operators (Cerber and Locky) took the bait but one operator (Sage) did not and so his cluster was never found.
5. The researchers use the common-input-ownership heuristic to find clusters of addresses. They know that CoinJoin breaks this assumption and so search for detectable CoinJoin transactions within the clusters which would indicate a break. This was before the invention or implementation of [PayJoin](https://en.bitcoin.it/wiki/PayJoin "PayJoin") so it is assumed that all coinjoins can be detected.
6. The researchers try to match incoming payments to the ransomware clusters with spikes in Google searches for that ransomware, and uploads of the ransomware binary to malware-tracking websites. If there are spikes in google searches or binary uploads without a corresponding increase in incoming bitcoin payments, then that indicates that the researchers have missed some clusters belonging to the ransomware wallets. This is [Timing correlation](/en/wiki-bitcoin-privacy/#timing-correlation) in use. The researchers conclude they are in fact missing most clusters for CryptoDefense, CryptoLocker, and CryptoWall, but probably have all the clusters for the other ransomware they study.
7. A [transaction surveillance company](https://en.bitcoin.it/wiki/Transaction_surveillance_company "Transaction surveillance company") called Chainalysis is used to find the ownership of certain addresses. It works particularly well for exchanges which share their data with Chainalysis. With this the destination of ransomware funds can be tracked. The largest known destination is the BTC-E, a now-shut-down Russian bitcoin exchange with lax controls that was widely known to be used by criminals. However the vast majority of funds is sent to Unknown destinations. One ransomware called CryptoXXX is ~95% sent to Unknown, WannaCry had 100% unknown. The researchers write BTC-E in the paper's abstract and conclusion because that's the biggest destination they could find, but in reality most of the ransomware money could not be tracked

The paper is an excellent example of transaction tracking. The researchers take great care in their conclusions, as in blockchain analysis it is sometimes easy to trick yourself into thinking you know more than you do. It is worth reading by anyone interested in bitcoin privacy.

Ransomware is a threat. Always keep good backups of your important data.

# See also

- [Common-input-ownership heuristic](https://en.bitcoin.it/wiki/Common-input-ownership_heuristic "Common-input-ownership heuristic")
- [Address reuse](https://en.bitcoin.it/wiki/Address_reuse "Address reuse")
- [CoinJoin](https://en.bitcoin.it/wiki/CoinJoin "CoinJoin")
- [PayJoin](https://en.bitcoin.it/wiki/PayJoin "PayJoin")
- [Transaction surveillance company](https://en.bitcoin.it/wiki/Transaction_surveillance_company "Transaction surveillance company")
- [Client-side block filtering](https://en.bitcoin.it/wiki/Client-side_block_filtering "Client-side block filtering")
- [Full node#Privacy](https://en.bitcoin.it/wiki/Full_node#Privacy "Full node")
- [Lightning Network](https://en.bitcoin.it/wiki/Lightning_Network "Lightning Network")

[^1]: Bitcoin Milan Meetup 46 - Talk by Adam Gibson [https://www.youtube.com/watch?v=IKSSWUBqMCM&t=2448](https://www.youtube.com/watch?v=IKSSWUBqMCM&t=2448)

[^2]: [https://bitcointalk.org/index.php?topic=334316.msg3588908#msg3588908](https://bitcointalk.org/index.php?topic=334316.msg3588908#msg3588908)

[^3]: Neudecker, Till & Hartenstein, Hannes. (2018). Network Layer Aspects of Permissionless Blockchains. IEEE Communications Surveys & Tutorials. PP. 1-1. 10.1109/COMST.2018.2852480.

[^4]: Harrigan, Martin & Fretter, Christoph. (2016). The Unreasonable Effectiveness of Address Clustering.

[^5]: Sarah Meiklejohn, Marjori Pomarole, Grant Jordan, Kirill Levchenko, Damon McCoy, Geoffrey M. Voelker, and Stefan Savage. 2013. A fistful of bitcoins: characterizing payments among men with no names. In Proceedings of the 2013 conference on Internet measurement conference (IMC '13). ACM, New York, NY, USA, 127-140. DOI: [https://doi.org/10.1145/2504730.2504747](https://doi.org/10.1145/2504730.2504747) [https://cseweb.ucsd.edu/~smeiklejohn/files/imc13.pdf](https://cseweb.ucsd.edu/~smeiklejohn/files/imc13.pdf)

[^6]: Bitcoin Privacy: Theory and Practice - Jonas Nick (Blockstream) - Zürich, March 2016 [https://www.youtube.com/watch?v=HScK4pkDNds](https://www.youtube.com/watch?v=HScK4pkDNds)

[^7]: Nick, Jonas David. “Data-Driven De-Anonymization in Bitcoin.” (2015).

[^8]: [https://github.com/bitcoin/bitcoin/pull/13666](https://github.com/bitcoin/bitcoin/pull/13666)

[^9]: [https://bitcoinops.org/en/newsletters/2018/08/14/](https://bitcoinops.org/en/newsletters/2018/08/14/)

[^10]: [https://bitcoin.stackexchange.com/questions/3059/what-is-a-compressed-bitcoin-key](https://bitcoin.stackexchange.com/questions/3059/what-is-a-compressed-bitcoin-key)

[^11]: Harrigan, Martin & Fretter, Christoph. (2016). The Unreasonable Effectiveness of Address Clustering.

[^12]: Meiklejohn, Sarah & Orlandi, Claudio. (2015). Privacy-Enhancing Overlays in Bitcoin. 127-141. 10.1007/978-3-662-48051-9_10. [https://fc15.ifca.ai/preproceedings/bitcoin/paper_5.pdf](https://fc15.ifca.ai/preproceedings/bitcoin/paper_5.pdf)

[^13]: Gervais A., Ritzdorf H., Lucic M., Lenders V., Capkun S. (2016) Quantifying Location Privacy Leakage from Transaction Prices. In: Askoxylakis I., Ioannidis S., Katsikas S., Meadows C. (eds) Computer Security – ESORICS 2016. ESORICS 2016. Lecture Notes in Computer Science, vol 9879. Springer, Cham [https://eprint.iacr.org/2015/496](https://eprint.iacr.org/2015/496)

[^14]: [https://medium.com/@octskyward/merge-avoidance-7f95a386692f](https://medium.com/@octskyward/merge-avoidance-7f95a386692f)

[^15]: [https://bitcointechtalk.com/saving-up-to-80-on-bitcoin-transaction-fees-by-batching-payments-4147ab7009fb](https://bitcointechtalk.com/saving-up-to-80-on-bitcoin-transaction-fees-by-batching-payments-4147ab7009fb)

[^16]: [https://www.reddit.com/r/Bitcoin/comments/3a1hte/psa_dust_being_sent_to_your_addresses_might_help/](https://www.reddit.com/r/Bitcoin/comments/3a1hte/psa_dust_being_sent_to_your_addresses_might_help/)

[^17]: [https://www.reddit.com/r/Bitcoin/comments/9r9qud/if_you_have_recently_received_a_very_small_amount/](https://www.reddit.com/r/Bitcoin/comments/9r9qud/if_you_have_recently_received_a_very_small_amount/)

[^18]: [https://github.com/JoinMarket-Org/joinmarket-clientserver/pull/471#issuecomment-565857814](https://github.com/JoinMarket-Org/joinmarket-clientserver/pull/471#issuecomment-565857814)

[^19]: [https://www.reddit.com/r/Bitcoin/comments/2yvy6b/a_regulatory_compliance_service_is_sybil/](https://www.reddit.com/r/Bitcoin/comments/2yvy6b/a_regulatory_compliance_service_is_sybil/)

[^20]: Alex Biryukov, Dmitry Khovratovich, and Ivan Pustogarov. 2014. Deanonymisation of Clients in Bitcoin P2P Network. In Proceedings of the 2014 ACM SIGSAC Conference on Computer and Communications Security (CCS '14). ACM, New York, NY, USA, 15-29. DOI: 10.1145/2660267.2660379 [https://arxiv.org/abs/1405.7418](https://arxiv.org/abs/1405.7418)

[^21]: Koshy, Philip & Koshy, Diana & McDaniel, Patrick. (2014). An Analysis of Anonymity in Bitcoin Using P2P Network Traffic. 8437. 469-485. 10.1007/978-3-662-45472-5_30. [http://ifca.ai/fc14/papers/fc14_submission_71.pdf](http://ifca.ai/fc14/papers/fc14_submission_71.pdf)

[^22]: [https://github.com/bitcoin/bitcoin/issues/3828](https://github.com/bitcoin/bitcoin/issues/3828)

[^23]: [https://twitter.com/waxwing__/status/983258474040774657](https://twitter.com/waxwing__/status/983258474040774657)

[^24]: [https://twitter.com/thegrugq/status/1062194678089404421](https://twitter.com/thegrugq/status/1062194678089404421)

[^25]: [https://motherboard.vice.com/en_us/article/3k9zzk/hacking-team-hacker-phineas-fisher-has-gotten-away-with-it](https://motherboard.vice.com/en_us/article/3k9zzk/hacking-team-hacker-phineas-fisher-has-gotten-away-with-it)

[^26]: [https://motherboard.vice.com/en_us/article/nzeg5x/here-are-all-the-sketchy-government-agencies-buying-hacking-teams-spy-tech](https://motherboard.vice.com/en_us/article/nzeg5x/here-are-all-the-sketchy-government-agencies-buying-hacking-teams-spy-tech)

[^27]: [https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2018-June/016062.html](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2018-June/016062.html)

[^28]: [https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2015-July/009510.html](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2015-July/009510.html)

[^29]: [https://bitcoin.stackexchange.com/questions/61151/eclipse-attack-vs-sybil-attack](https://bitcoin.stackexchange.com/questions/61151/eclipse-attack-vs-sybil-attack)

[^30]: [https://github.com/bitcoin/bitcoin/pull/8282](https://github.com/bitcoin/bitcoin/pull/8282)

[^31]: [https://github.com/bitcoin/bitcoin/pull/5941](https://github.com/bitcoin/bitcoin/pull/5941)

[^32]: [https://github.com/bitcoin/bitcoin/pull/9037](https://github.com/bitcoin/bitcoin/pull/9037)

[^33]: [https://github.com/bitcoin/bitcoin/pull/8594](https://github.com/bitcoin/bitcoin/pull/8594)

[^34]: [https://github.com/bitcoin/bitcoin/pull/12626](https://github.com/bitcoin/bitcoin/pull/12626)

[^35]: [https://bitcoin.stackexchange.com/questions/83018/transaction-relay-and-trickling-in-bitcoin](https://bitcoin.stackexchange.com/questions/83018/transaction-relay-and-trickling-in-bitcoin)

[^36]: [https://github.com/bitcoin/bitcoin/issues/13298](https://github.com/bitcoin/bitcoin/issues/13298)

[^37]: [https://github.com/bitcoin/bitcoin/pull/7125](https://github.com/bitcoin/bitcoin/pull/7125)

[^38]: [https://github.com/bitcoin/bitcoin/pull/7840](https://github.com/bitcoin/bitcoin/pull/7840)

[^39]: [https://bitcointalk.org/index.php?topic=7.msg264#msg264](https://bitcointalk.org/index.php?topic=7.msg264#msg264)

[^40]: [https://github.com/bitcoin/bitcoin/pull/5951](https://github.com/bitcoin/bitcoin/pull/5951)

[^41]: [https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2017-June/014571.html](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2017-June/014571.html)

[^42]: [https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2017-September/015030.html](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2017-September/015030.html)

[^43]: [https://bitcoinmagazine.com/articles/anatomy-anonymity-how-dandelion-could-make-bitcoin-more-private/](https://bitcoinmagazine.com/articles/anatomy-anonymity-how-dandelion-could-make-bitcoin-more-private/)

[^44]: [https://www.youtube.com/watch?v=XORDEX-RrAI&t=7h34m35s](https://www.youtube.com/watch?v=XORDEX-RrAI&t=7h34m35s)

[^45]: [https://blockstream.com/satellite/](https://blockstream.com/satellite/)

[^46]: [https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.17.0.md#partial-spend-avoidance](https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.17.0.md#partial-spend-avoidance)

[^47]: [https://github.com/petertodd/dust-b-gone](https://github.com/petertodd/dust-b-gone)

[^48]: [https://medium.com/@octskyward/merge-avoidance-7f95a386692f](https://medium.com/@octskyward/merge-avoidance-7f95a386692f)

[^49]: [https://medium.com/@nopara73/coin-control-is-must-learn-if-you-care-about-your-privacy-in-bitcoin-33b9a5f224a2](https://medium.com/@nopara73/coin-control-is-must-learn-if-you-care-about-your-privacy-in-bitcoin-33b9a5f224a2)

[^50]: [https://p2sh.info/](https://p2sh.info/)

[^51]: Scaling Bitcoin conference 2018 Tokyo. Conner Fromknecht (Lightning Labs) Instantiating [Scriptless] 2P-ECDSA: Fungible 2-of-2 MultiSigs for Today's Bitcoin. [https://www.youtube.com/watch?v=3mJURLD2XS8&t=3623](https://www.youtube.com/watch?v=3mJURLD2XS8&t=3623) [https://diyhpl.us/wiki/transcripts/scalingbitcoin/tokyo-2018/scriptless-ecdsa/](https://diyhpl.us/wiki/transcripts/scalingbitcoin/tokyo-2018/scriptless-ecdsa/)

[^52]: [https://medium.com/cryptoadvance/how-schnorr-signatures-may-improve-bitcoin-91655bcb4744](https://medium.com/cryptoadvance/how-schnorr-signatures-may-improve-bitcoin-91655bcb4744)

[^53]: [https://bitcoincore.org/en/2017/03/23/schnorr-signature-aggregation/](https://bitcoincore.org/en/2017/03/23/schnorr-signature-aggregation/)

[^54]: [https://blockstream.com/2018/01/23/musig-key-aggregation-schnorr-signatures/](https://blockstream.com/2018/01/23/musig-key-aggregation-schnorr-signatures/)

[^55]: [https://github.com/sipa/bips/blob/bip-schnorr/bip-schnorr.mediawiki](https://github.com/sipa/bips/blob/bip-schnorr/bip-schnorr.mediawiki)

[^56]: [https://bitcoinmagazine.com/articles/scriptless-scripts-how-bitcoin-can-support-smart-contracts-without-smart-contracts/](https://bitcoinmagazine.com/articles/scriptless-scripts-how-bitcoin-can-support-smart-contracts-without-smart-contracts/)

[^57]: [https://download.wpsoftware.net/bitcoin/wizardry/mw-slides/2017-03-mit-bitcoin-expo/slides.pdf](https://download.wpsoftware.net/bitcoin/wizardry/mw-slides/2017-03-mit-bitcoin-expo/slides.pdf)

[^58]: [https://joinmarket.me/blog/blog/flipping-the-scriptless-script-on-schnorr/](https://joinmarket.me/blog/blog/flipping-the-scriptless-script-on-schnorr/)

[^59]: [https://lists.linuxfoundation.org/pipermail/lightning-dev/2018-April/001221.html](https://lists.linuxfoundation.org/pipermail/lightning-dev/2018-April/001221.html)

[^60]: [http://diyhpl.us/wiki/transcripts/layer2-summit/2018/scriptless-scripts/](http://diyhpl.us/wiki/transcripts/layer2-summit/2018/scriptless-scripts/)

[^61]: [https://bitcointechtalk.com/what-is-a-bitcoin-merklized-abstract-syntax-tree-mast-33fdf2da5e2f](https://bitcointechtalk.com/what-is-a-bitcoin-merklized-abstract-syntax-tree-mast-33fdf2da5e2f)

[^62]: [https://bitcoinmagazine.com/articles/the-next-step-to-improve-bitcoin-s-flexibility-scalability-and-privacy-is-called-mast-1476388597/](https://bitcoinmagazine.com/articles/the-next-step-to-improve-bitcoin-s-flexibility-scalability-and-privacy-is-called-mast-1476388597/)

[^63]: [https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2018-January/015614.html](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2018-January/015614.html)

[^64]: [https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2018-February/015700.html](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2018-February/015700.html)

[^65]: [https://www.reddit.com/r/Bitcoin/comments/7vcyip/graftroot_private_and_efficient_surrogate_scripts/](https://www.reddit.com/r/Bitcoin/comments/7vcyip/graftroot_private_and_efficient_surrogate_scripts/)

[^66]: [https://bitcoinmagazine.com/articles/graftroot-how-delegating-signatures-allows-near-infinite-spending-variations/](https://bitcoinmagazine.com/articles/graftroot-how-delegating-signatures-allows-near-infinite-spending-variations/)

[^67]: [https://gist.github.com/chris-belcher/00255ecfe1bc4984fcf7c65e25aa8b4b#worked-example-for-tumbler-replacement](https://gist.github.com/chris-belcher/00255ecfe1bc4984fcf7c65e25aa8b4b#worked-example-for-tumbler-replacement)

[^68]: [https://www.reddit.com/r/joinmarket/comments/3c7hnm/joinmarket_is_smart_contracts/](https://www.reddit.com/r/joinmarket/comments/3c7hnm/joinmarket_is_smart_contracts/)

[^69]: [https://blockstream.com/2018/08/08/improving-privacy-using-pay-to-endpoint/](https://blockstream.com/2018/08/08/improving-privacy-using-pay-to-endpoint/)

[^70]: [https://medium.com/@nopara73/pay-to-endpoint-56eb05d3cac6](https://medium.com/@nopara73/pay-to-endpoint-56eb05d3cac6)

[^71]: [https://gist.github.com/AdamISZ/4551b947789d3216bacfcb7af25e029e](https://gist.github.com/AdamISZ/4551b947789d3216bacfcb7af25e029e)

[^72]: [https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2018-August/016340.html](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2018-August/016340.html)

[^73]: [https://joinmarket.me/blog/blog/coinswaps/](https://joinmarket.me/blog/blog/coinswaps/)

[^74]: [Design for a CoinSwap implementation for massively improving Bitcoin privacy and fungibility](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2020-May/017898.html)

[^75]: [Coinswap design document](https://gist.github.com/chris-belcher/9144bd57a91c194e332fb5ca371d0964)

[^76]: [The Human Rights Foundation Is Now Funding Bitcoin Privacy Development, Starting With CoinSwap](https://bitcoinmagazine.com/articles/the-human-rights-foundation-is-now-funding-bitcoin-privacy-development-starting-with-coinswap)

[^77]: [https://joinmarket.me/blog/blog/coinjoinxt/](https://joinmarket.me/blog/blog/coinjoinxt/)

[^78]: [https://joinmarket.me/blog/blog/the-steganographic-principle/](https://joinmarket.me/blog/blog/the-steganographic-principle/)

[^79]: [https://www.reddit.com/r/Bitcoin/comments/7t1q5x/deanonymization_risks_on_lightning_network/](https://www.reddit.com/r/Bitcoin/comments/7t1q5x/deanonymization_risks_on_lightning_network/)

[^80]: [https://github.com/lightningnetwork/lightning-rfc/blob/master/04-onion-routing.md](https://github.com/lightningnetwork/lightning-rfc/blob/master/04-onion-routing.md)

[^81]: [https://diyhpl.us/wiki/transcripts/scalingbitcoin/milan/onion-routing-in-lightning/](https://diyhpl.us/wiki/transcripts/scalingbitcoin/milan/onion-routing-in-lightning/)

[^82]: [https://www.reddit.com/r/Bitcoin/comments/7rrjp3/is_onion_routing_appropriate_for_lightning_network/](https://www.reddit.com/r/Bitcoin/comments/7rrjp3/is_onion_routing_appropriate_for_lightning_network/)

[^83]: [https://www.reddit.com/r/Bitcoin/comments/8hwzbh/chainalysis_on_the_ln/](https://www.reddit.com/r/Bitcoin/comments/8hwzbh/chainalysis_on_the_ln/)

[^84]: [https://github.com/lightningnetwork/lightning-rfc/wiki/Rendez-vous-mechanism-on-top-of-Sphinx](https://github.com/lightningnetwork/lightning-rfc/wiki/Rendez-vous-mechanism-on-top-of-Sphinx)

[^85]: [https://lists.linuxfoundation.org/pipermail/lightning-dev/2018-November/001498.html](https://lists.linuxfoundation.org/pipermail/lightning-dev/2018-November/001498.html)

[^86]: [https://bitcoinops.org/en/newsletters/2018/11/20/](https://bitcoinops.org/en/newsletters/2018/11/20/)

[^87]: [https://lists.linuxfoundation.org/pipermail/lightning-dev/2018-February/000993.html](https://lists.linuxfoundation.org/pipermail/lightning-dev/2018-February/000993.html)

[^88]: Lightning in Scriptless Scripts Andrew Poelstra 20 Mar 2017 [https://lists.launchpad.net/mimblewimble/msg00086.html](https://lists.launchpad.net/mimblewimble/msg00086.html)

[^89]: L2 Summit Hosted by MIT DCI and Fidelity Labs, Boston 2018, Andrew Poelstra talk on Scriptless Scripts [http://diyhpl.us/wiki/transcripts/layer2-summit/2018/scriptless-scripts/](http://diyhpl.us/wiki/transcripts/layer2-summit/2018/scriptless-scripts/)

[^90]: Giulio Malavolta, Pedro Moreno-Sanchez, Aniket Kate, Matteo Maffei, and Srivatsan Ravi. 2017. Concurrency and Privacy with Payment-Channel Networks. In Proceedings of the 2017 ACM SIGSAC Conference on Computer and Communications Security (CCS '17). ACM, New York, NY, USA, 455-471. DOI: [https://doi.org/10.1145/3133956.3134096](https://doi.org/10.1145/3133956.3134096) [https://eprint.iacr.org/2017/820.pdf](https://eprint.iacr.org/2017/820.pdf)

[^91]: [https://diyhpl.us/wiki/transcripts/scalingbitcoin/stanford-2017/concurrency-and-privacy-with-payment-channel-networks/](https://diyhpl.us/wiki/transcripts/scalingbitcoin/stanford-2017/concurrency-and-privacy-with-payment-channel-networks/)

[^92]: See first 20 minutes of this: [https://www.youtube.com/watch?v=H1yPkPXLDVc](https://www.youtube.com/watch?v=H1yPkPXLDVc)

[^93]: Jordi Herrera-Joancomartí, Guillermo Navarro-Arribas, Alejandro Ranchal-Pedrosa, Cristina Pérez-Solà, Joaquin Garcia-Alfaro (2019), "On the Difficulty of Hiding the Balance of Lightning Network Channels" IACR Cryptology ePrint Archive: [https://eprint.iacr.org/2019/328](https://eprint.iacr.org/2019/328)

[^94]: [https://github.com/jlopp/physical-bitcoin-attacks](https://github.com/jlopp/physical-bitcoin-attacks)

[^95]: [https://gist.github.com/chris-belcher/00255ecfe1bc4984fcf7c65e25aa8b4b#worked-example-for-tumbler-replacement](https://gist.github.com/chris-belcher/00255ecfe1bc4984fcf7c65e25aa8b4b#worked-example-for-tumbler-replacement)

[^96]: [https://www.reddit.com/r/joinmarket/comments/7614ea/how_to_properly_spend_tumbled_coins/](https://www.reddit.com/r/joinmarket/comments/7614ea/how_to_properly_spend_tumbled_coins/)

[^97]: [https://twitter.com/msuiche/status/863082346014224385](https://twitter.com/msuiche/status/863082346014224385)

[^98]: [https://bitcointalk.org/index.php?topic=1916199.0](https://bitcointalk.org/index.php?topic=1916199.0)

[^99]: [https://www.reddit.com/r/Bitcoin/comments/anycg2/electrum_targeted_phishing_malware_warning/](https://www.reddit.com/r/Bitcoin/comments/anycg2/electrum_targeted_phishing_malware_warning/)

[^100]: [https://twitter.com/GossiTheDog/status/1078308649158664194](https://twitter.com/GossiTheDog/status/1078308649158664194)

[^101]: [https://twitter.com/LaurentMT/status/1078638385256902656](https://twitter.com/LaurentMT/status/1078638385256902656)

[^102]: [https://www.reddit.com/r/Bitcoin/comments/2ww4eb/how_does_wallet_explorer_know_which_wallets/](https://www.reddit.com/r/Bitcoin/comments/2ww4eb/how_does_wallet_explorer_know_which_wallets/)

[^103]: [https://www.walletexplorer.com/txid/5ac0210febf7ce07a737bae8c32f84c1c54d131c21a16ca6b02b6f1edcad15c3](https://www.walletexplorer.com/txid/5ac0210febf7ce07a737bae8c32f84c1c54d131c21a16ca6b02b6f1edcad15c3)

[^104]: [https://www.coinjoinsudoku.com/](https://www.coinjoinsudoku.com/)

[^105]: [https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2018-January/015606.html](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2018-January/015606.html)

[^106]: [https://p2sh.info/dashboard/db/p2sh-repartition-by-type?orgId=1](https://p2sh.info/dashboard/db/p2sh-repartition-by-type?orgId=1)

[^107]: [https://www.youtube.com/watch?v=Tiyvrh53Yp8](https://www.youtube.com/watch?v=Tiyvrh53Yp8)

[^108]: [https://www.reddit.com/r/Bitcoin/comments/4vupa6/p2shinfo_shows_movement_out_of_multisig_wallets/](https://www.reddit.com/r/Bitcoin/comments/4vupa6/p2shinfo_shows_movement_out_of_multisig_wallets/)

[^109]: [https://web.archive.org/web/20170309231819/https://www.reddit.com/r/Bitcoin/comments/4v28jl/how_have_fungiblity_problems_affected_you_in/](https://web.archive.org/web/20170309231819/https://www.reddit.com/r/Bitcoin/comments/4v28jl/how_have_fungiblity_problems_affected_you_in/)

[^110]: [https://www.reddit.com/r/Bitcoin/comments/69duq9/50_bounty_for_anybody_recovering_445_btc_stolen/](https://www.reddit.com/r/Bitcoin/comments/69duq9/50_bounty_for_anybody_recovering_445_btc_stolen/)

[^111]: Goldfeder, S., Kalodner, H., Reisman, D., & Narayanan, A. (2018). When the cookie meets the blockchain: Privacy risks of web payments via cryptocurrencies, Proceedings on Privacy Enhancing Technologies, 2018(4), 179-199. doi: [https://doi.org/10.1515/popets-2018-0038](https://doi.org/10.1515/popets-2018-0038)

[^112]: [https://web.archive.org/web/20150607131623/http://www.reddit.com/r/DarkNetMarkets/comments/2rhaqc/deanonimyzing_bitcoinfog_and_other_tumblers/](https://web.archive.org/web/20150607131623/http://www.reddit.com/r/DarkNetMarkets/comments/2rhaqc/deanonimyzing_bitcoinfog_and_other_tumblers/)

[^113]: Juhász PL, Stéger J, Kondor D, Vattay G (2018) A Bayesian approach to identify Bitcoin users. PLOS ONE 13(12): e0207000. [https://doi.org/10.1371/journal.pone.0207000](https://doi.org/10.1371/journal.pone.0207000)

[^114]: D. Y. Huang et al., "Tracking Ransomware End-to-end," 2018 IEEE Symposium on Security and Privacy (SP), San Francisco, CA, 2018, pp. 618-631. doi: 10.1109/SP.2018.00047 [https://www.youtube.com/watch?v=H5bPmzsVLF8](https://www.youtube.com/watch?v=H5bPmzsVLF8)
