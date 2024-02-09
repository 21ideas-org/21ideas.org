---
title: "The Missing Pieces"
h1: "Discovering Bitcoin Part 7: The Missing Pieces"
cover: /img/sb-353.jpg
description: "In the conclusion to the “Discovering Bitcoin” series, Giacomo Zucco explores concepts of unique chronology, mining fees and off-chain transactions."
url: discovering-bitcoin/the-missing-pieces
date: 2019-09-22
bookFlatSection: false
weight: 8
---

{{< expand "Contents" "..." >}}
1. [Introduction](/en/discovering-bitcoin/intro)
2. [Part 1: About Time](/en/discovering-bitcoin/about-time)
3. [Part 2: About People](/en/discovering-bitcoin/about-people)
4. [Part 3: Introducing Money](/en/discovering-bitcoin/introducing-money)
5. [Part 4: A Wrong Turn (New Plan Needed)!](/en/discovering-bitcoin/a-wrong-turn-new-plan-needed)
6. [Part 5: Digital Scarcity](/en/discovering-bitcoin/digital-scarcity)
7. [Part 6: Digital Contracts](/en/discovering-bitcoin/digital-contracts)
8. [Part 7: The Missing Pieces](/en/discovering-bitcoin/the-missing-pieces)
{{< /expand >}}

In the conclusion to the “Discovering Bitcoin” series, Giacomo Zucco explores concepts of unique chronology, mining fees and off-chain transactions.

{{< hint btc >}}
This article by [Giacomo Zucco](https://twitter.com/giacomozucco) was first published in [Bitcoin Magazine](https://bitcoinmagazine.com/technical/discovering-bitcoin-part-7-missing-pieces).

[Contribute](/contribute/).
{{< /hint>}}

As we conclude our “Discovering Bitcoin” series, we will build on the use of digital signatures and of the CoinJoin paradigm to explore concepts of unique chronology, mining fees and off-chain transactions.

## Proving Unicity: Timechain

We are finally at the end of our exploration of [Plan ₿](/en/discovering-bitcoin/intro), back again to the question “When?” from whence we started. 

It’s an important question, as it justifies the introduction of the so-called “[blockchain](https://bitcoinmagazine.com/guides/what-is-blockchain) technology,” a decidedly abused expression that, in its original meaning, just labeled the answer to a problem of unique chronology. (It’s interesting, in this regard, that Satoshi himself called this structure ["timechain,"](https://blog.goodaudience.com/timechain-a-decade-of-misunderstanding-blockchain-bcb56d7839a3) which is also the term we are going to use here … sorry, [Peter](https://twitter.com/peterktodd/status/1112772853781463043)!).

{{% image "/img/sb-354-en.webp" /%}}

Let’s try to understand what problem it solves, by getting back to our little story. You designed a digital cash system in which issuance and ownership are both decentralized, leveraging [puzzles](/en/discovering-bitcoin/digital-scarcity) and [signatures](/en/discovering-bitcoin/digital-contracts) in a clever combination.

But how do you prevent users from double-spending the same UTXO? If Carol, a dishonest user, transfers sats to an address controlled by Daniel, and then signs another transaction that retransmits those very same sats to an address controlled by herself, which transaction will the network enforce? They would both be “valid” from the point of view of the chain of signatures and scripts, and both would point to a valid initial issuance, with a correct PoW difficulty.

And how do you prevent “miners” from lying about the correct timestamp, tricking the difficulty adjustment algorithm to increase the issuance rate? If the miner Minnie manages to solve hundreds of PoW puzzles at low difficulty, but she includes forged timestamps that depict the solutions as only 10 minutes apart from each other, how can a generic user, maybe just recently connected to the system, discover and prove such dishonest behavior?

Within [your previous e-gold experiment](/en/discovering-bitcoin/a-wrong-turn-new-plan-needed), your trusted timestamp server trivially solved both issues. But now there is no central server, so who defines the unique chronology of events?

If the network could somehow “vote,” it could reach a “democratic” consensus about it. But voting processes, while feasible in systems with a fixed number of known actors (often called “federations”), can’t work within dynamic sets of unknown, anonymous actors. You can’t simply use “node count” as a proxy for voting rights, since every user could pretend to “be” millions of different nodes in what is known as a “Sybil attack.” You need another, “Sybil-resistant” way to push all the nodes to find (and keep) consensus over one single, consistent, immutable history.

{{% image "/img/sb-355-en.webp" /%}}

Unfortunately, a deterministic and final solution based on mathematics is theoretically impossible. But a statistical and asymptotic solution based on economics is practically possible, and you are smart enough to find it. This is the idea: Every time miners try to solve PoW puzzles, they should include in their messages compact snapshots of the current transactional timeline! 

Instead of just their issuance messages, they should pass through the hash function more complex “blocks” of information, each containing (along with said issuance message, a timestamp and a random number needed to solve the puzzle at the correct difficulty) the solution of the previous block (which had been found by other miners about 10 minutes before) and a list of transactions recently made by other users.

{{% image "/img/sb-356.png" /%}}

A block that contains transactions already included in previous blocks is considered invalid. A block carrying a timestamp that is significantly incompatible with the previous ones is also discharged.

Using this trick, all actors are incentivized to converge on a consistent version of the same chronology. Minnie _could_ include a valid transaction contradicting (double-spending) a previously confirmed one, or alter the timestamp to trick the difficulty adjustment, but then other nodes would reject such a block, and she would lose the value of the new issuance, having wasted time and energy for nothing. 

Miners spend money to solve puzzles, and thus it’s quite safe to assume they want to enjoy the associated rewards, creating blocks that aren’t rejected, at least in scenarios where they only follow financial incentives endogenous to the system.

{{% image "/img/sb-357-en.webp" /%}}

## Mining Fees

This solution, while brilliant, still lacks incentives for miners to include other people’s transactions. They could just opt to save the computing power needed to verify scripts and signatures (which, while not being as much as the one needed for [hash collision](https://en.wikipedia.org/wiki/Collision_(computer_science)), is still relevant) and to include only their own valid issuances in otherwise empty blocks. Also, the diminishing amount of sats allowed in such issuances, due to the controlled-supply paradigm, would reduce (even discounting for an increase in sats’ purchasing power) the incentive to solve blocks at all, eventually canceling it completely at the end of the last era, when there will be no inflation.

You solve this problem by introducing “mining fees”: a small “extra” that users can attach to their transactions to incentivize miners to include them.

It works like this: The system allows miners to include in their reward transactions, along with the issuance of newly “minted” sats (compatible with the current era), also the difference in sats between created and consumed UTXOs of all the valid transactions included in the block. Fees never depend on the amount transacted, but only on the transaction size (script complexity, number of signatures, etc.) and the desired priority within blocks.

## Scaleness (and Darkness) Problems

The minimum mining fee necessary for a transaction to be included in a block fluctuates depending on supply and demand of “block space.” On the supply side, the number of transactions that can be added to the timechain are limited by a maximum block size (less than 4 megabytes for each block) and a maximum block rate (about one every 10 minutes). On the demand side, each user has different constraints and preferences (some can wait more to pay less, some can pay more to wait less, some use wallets with excellent dynamic fee estimation, some don’t). In general, a rising demand for block space would imply a rise in mining fees. This clearly limits the scaleness of the system (in particular, since miner fees are independent from the amount of value transferred, we could say that it actually reduces divisibility).

More, in general, using a timechain implies that every node in the network must forever keep track of everything: Every single on-chain transaction must be downloaded and verified by every actor who will use the system for its entire history, even far into the future. Such a system is clearly not scalable. It also lacks darkness, since everyone has to keep a copy of every transaction forever, enabling any kind of forensic analysis and deanonymization attempt.

{{% image "/img/sb-358-en.webp" /%}}

It would be possible to make the situation look better for some users, at the cost of creating another more “privileged” class of users. For example, if you increase the size and frequency of blocks, then the block-space supply increases, and its price decreases. But the cost of running nodes, with the ability to independently verify the validity of transactions and blocks, increases way faster than said supply, centralizing the topology of the entire system. Sure, a new class of specialized nodes could serve as some kind of “signed message” to inferior, non-validating users, giving them some guarantee that a transaction is valid. After all, coinage was introduced in order to delegate to a few specialized trusted entities the expensive task of verifying precious metal coins. But, just like coinage, this strategy (knowns as “SPV”) implies a strong centralization, with all the attached risks of political interference or censorship by the likes of [Mallory](/en/discovering-bitcoin/introducing-money).

## A New Paradigm: “Off-Chain”

There’s a smart way to mitigate the fundamental scaleness limits of global consensus systems without sacrificing its decentralization. We will call it the “off-chain paradigm.” 

The idea is simple: Just refrain from committing every transaction to a block until it’s strictly necessary, keeping most of the traffic off the public timechain (with its expensive global consensus) and only using it for conflict resolution and periodic settlement.

This evolution is similar to the way people use courts and contracts in common-law systems: Courts can create publicly binding precedents, reaching some sort of “legal global consensus,” but they are comparatively slow and expensive, so most trading parties usually only sign private bidirectional contracts, asking courts to verify and enforce them only when conflicts arise or when some periodic settlement is due. 

Advanced smart contracts could be used to make this kind of “recourse” trust-minimized: Unlike an actual legal system, the decentralized timechain could avoid human bias and corruption, relying mostly on cryptography and code. Unlike the credit certificates discussed in [the context of virtualization](/en/discovering-bitcoin/a-wrong-turn-new-plan-needed), off-chain transactions are not “virtual”; they are actual valid transactions, with high probability of being enforced by the system regardless of the honesty of the parties involved.

{{% image "/img/sb-359-en.webp" /%}}

You soon realize that this kind of paradigm could highly improve the darkness of your system as well. Instead of having all the nodes registering all transactions forever, most of those transactions would be exchanged privately between the interested parties alone, making forensic analysis by malicious eavesdroppers harder, costlier, less complete and less reliable.

{{% image "/img/sb-360-en.webp" /%}}

The main implementation of such a strategy is a secondary network of pre-funded, bilateral “payment channels” that can route transactions across many hops in a trust-minimized, atomic way. Users call it by a very poetic name: “the Lightning Network” (the acronym for which is often included in the label of the whole protocol suite of your system, named “LNP/BP” as analogous to the historical [“TCP/IP”](https://en.wikipedia.org/wiki/Internet_protocol_suite)).

But there are other minor instances of the same paradigm; for example, several techniques to keep the actual script off the timechain until needed, saving block space and privacy as well. (People call these techniques many strange names, like “Taproot,” “Graftroot,” “g*root,” “Scriptless Script” and so on.)

{{% image "/img/sb-361-en.webp" /%}}

With the introduction of these final pieces of technology, your users finally have everything they need to use the system in real life, in order to take back some of the most important features of money. Thank you, “Satoshi”!

{{% image "/img/sb-362.jpeg" %}}
*Image courtesy of [BitcoinMemeHub](https://twitter.com/BitcoinMemeHub?lang=en)*
{{% /image %}}

You have come a long way since your early caveman innovations, far in the past. Now, only the future can tell us if this Plan ₿ of yours will work out. To the moon.

_A final thank you to Nicki DiCicco for her cover art and to [BitcoinMemeHub](https://twitter.com/BitcoinMemeHub?lang=en) for his meme art contributions to this series!_

{{< expand "Contents" "..." >}}
1. [Introduction](/en/discovering-bitcoin/intro)
2. [Part 1: About Time](/en/discovering-bitcoin/about-time)
3. [Part 2: About People](/en/discovering-bitcoin/about-people)
4. [Part 3: Introducing Money](/en/discovering-bitcoin/introducing-money)
5. [Part 4: A Wrong Turn (New Plan Needed)!](/en/discovering-bitcoin/a-wrong-turn-new-plan-needed)
6. [Part 5: Digital Scarcity](/en/discovering-bitcoin/digital-scarcity)
7. [Part 6: Digital Contracts](/en/discovering-bitcoin/digital-contracts)
8. [Part 7: The Missing Pieces](/en/discovering-bitcoin/the-missing-pieces)
{{< /expand >}}
