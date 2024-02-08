---
title: "Digital Scarcity"
h1: "Discovering Bitcoin Part 5: Digital Scarcity"
cover: /img/sb-340.jpg
description: "In the fifth installment of Giacomo Zucco’s “Discovering Bitcoin” series, he explores concepts of scarcity in the “virtual” world, energy consumption and digital “hardness.”"
url: discovering-bitcoin/digital-scarcity
date: 2019-09-20
bookFlatSection: false
weight: 6
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

In the fifth installment of Giacomo Zucco’s “Discovering Bitcoin” series, he explores concepts of scarcity in the “virtual” world, energy consumption and digital “hardness.”

{{< hint btc >}}
This article by [Giacomo Zucco](https://twitter.com/giacomozucco) was first published in [Bitcoin Magazine](https://btcmagwpstage.wpengine.com/articles/discovering-bitcoin-part-5-digital-scarcity).

[Contribute](/contribute/).
{{< /hint>}}

Next in the “Discovering Bitcoin” series, we will build on the previous events of money virtualization, establishment of dangerous monopolies and emergent needs for decentralization, to explore concepts of scarcity in the “virtual” world, energy consumption and digital hardness.

## Proving Work: Digital Puzzles

Welcome back to this journey through our [Plan ₿](/en/discovering-bitcoin/intro) for money, which brings us, [for the second time](/en/discovering-bitcoin/introducing-money), to focus on the topic of scarcity and the question “What?”

Value needs scarcity, but in the digital world that’s really difficult to get: Information tends to always be infinitely reproducible.

In [your previous e-gold experiment](/en/discovering-bitcoin/a-wrong-turn-new-plan-needed), digital units represented actual physical gold stored by your centralized company. But how can you create a protocol in which everybody can independently agree on what is being transmitted, without any central authority? 

If such a method required a centralized third party, you would be back where you started, with a central point of failure vulnerable to Mallory. If such a method was “everybody can issue however many units they want,” the system couldn’t work: Incentives would push the supply of units toward infinity, and their price toward zero.

The answer you finally come up with is _puzzles_! You write an open procedure that everybody can run on their computers in order to try to solve some puzzles with the characteristics of being “ad hoc” (specifically built around every issuance attempt, otherwise solutions could be reused many times), asymmetric (difficult to solve but easy to verify, otherwise the system would be vulnerable to denial-of-service attacks) and “useless” (otherwise external use cases for the same solution effort could distort incentives within the system). Every solution will grant the “right” to issue a certain number of units.

{{% image "/img/sb-341.jpg" %}}
*Image courtesy of [BitcoinMemeHub](https://twitter.com/BitcoinMemeHub?lang=en)*
{{% /image %}}

Non-digital examples of similar puzzles are sudokus or crosswords: “useless” games in which finding the solution (which depends on some specific parameters that are different every time) requires a lot of trial and error, while verifying that solution, once it has been found, is trivial and quick.

More technically, what you need is called “proof of work” (PoW). It’s somewhat similar to a [CAPTCHA](https://en.wikipedia.org/wiki/CAPTCHA), but intended for computers and not humans to solve.

## Hashcash

Your choice falls on a specific kind of PoW called “[Hashcash](https://bitcoinmagazine.com/articles/genesis-files-hashcash-or-how-adam-back-designed-bitcoins-motor-block)” (created by your friend [Adam](https://twitter.com/adam3us?lang=en) and originally intended for spam prevention in the context of anonymous email exchanges). The way it works is through “hash collision”: a kind of “brute force attack” where a machine automatically tries out several slightly altered versions of the original message, over and over, with little changes every time, until one of the versions, passed through a one-way function called a “hash” (the mathematical equivalent of fingerprints or footprints), results in a string that respects some kind of constraint. 

Hash functions, while deterministic (starting from the same message, they give the same result every time), are also unpredictable (slightly different messages will result in completely different hashes, in a way impossible to guess or predict before actually calculating them) and irreversible (it’s easy for everybody to verify the hash of a known message, but it is not possible to go back to a single message from just a hash).

If your users want to “deposit” digital assets, they have to create a “deposit” transaction, add some random number and apply a hash function, repeating the process over and over again until the result, for some number, is verifiably smaller than a certain threshold, called “difficulty.”

{{% image "/img/sb-342-en.webp" /%}}

## Energy Consumption

Your users will have to “waste” some energy to find solutions, [but this is a requirement](https://bitcoinmagazine.com/bitcoin-mining), not a bug: The only way to make something scarce is to make it costly to produce — there’s no other way around it. This “waste” argument is often used by critics of your system (especially Mallory and his friends) to accuse your pseudonymous alter ego of being “environmentally unfriendly.” 

This is not really the case, for several reasons. First, energy spent in PoW is no more “wasted” than in any other production process for any other (physical or intellectual) good.

Second, the consumption of energy in your system is likely going to remain lower than historical alternatives (we are talking orders of magnitude less than the energy consumption for gold extraction, for example).

Third, entrepreneurs generating PoW to get some “digital gold” aren’t incentivized to consume more energy — if anything, they are incentivized to consume _less_ of it (to them it’s a cost, not a revenue). This drive toward using less energy increases optimization and efficiency with new technological breakthroughs or with smart generation choices, which in turn can have a waterfall effect on other energy-consuming industries.

There would be no advantage to complicated kinds of PoW that make optimizations difficult. [Indeed, the opposite is true:](https://bitcoinmagazine.com/articles/op-ed-why-we-shouldnt-worry-about-crypto-mining-energy-consumption) The most efficient PoW is one that is friendly to optimizations (the ideal being a process close to the thermodynamic limit).

## Hardness Problems

Now, anyone in the network can verify that a certain amount of computational work has been uniquely “committed” to a certain asset deposit, but no one can reproduce that same proof for other types of statements.

But this proof of work by itself is not enough to give your “digital gold” any [hardness](/en/discovering-bitcoin/about-time). It doesn’t guarantee that the supply will remain inelastic with respect to the demand.

The hashcash model would actually be, in and of itself, very inflationary: The more the demand for your “digital gold” increases, driving the price up, the more machine power will be deployed to perform PoW, and the more resources will be invested to increase energetic efficiency, thus increasing the supply, if the latter is not additionally restricted.

{{% image "/img/sb-343-en.webp" /%}}

The next innovation you need to include in your system is called “controlled supply.”

## A New Paradigm: “Controlled Supply”

Basically, whenever the issuance rate is above (or below) a certain target, the puzzle difficulty increases (or decreases), balancing the rate.

You set a target of one “issuance,” on average, every 10 minutes, as measured every 2,016 “issuances” (which means about every two weeks).

This makes for an almost perfectly constant issuance rate. Actually, you just launched the very first asset in history with an almost totally inelastic supply compared to the demand. 

Whenever the monetary demand for your “digital gold” increases, the price increases, incentives to perform PoW increases and the issuance rate starts increasing as well, but then the difficulty increases and the supply goes back to being stable again — and the other way around, of course, in case the demand goes down. 

But you decide to go even further. Instead of having just a fixed schedule, you aim for a _fixed total supply_ and introduce the “halving” mechanism: At the end of every “era” of about four years, the issuance rate is cut in half, eventually approaching a fixed stock with zero flow!

The first era starts with a maximum issuance of 5 billion virtual “units,” which the users call “satoshis” or “sats,” as a tribute to the pseudonymous alias you came up with in Part 4. In the second era, only 2.5 billion sats will be deposited every 10 minutes, on average. In the third era, that number will go down to 1.25 billion, and so on.

You chose this model to approximate the way a physical gold mine would become exhausted over time, and you call it “mining” to emphasize the analogy.

{{% image "/img/sb-344.jpg" %}}
*Image courtesy of [BitcoinMemeHub](https://twitter.com/BitcoinMemeHub?lang=en)*
{{% /image %}}

When you were using a centralized approach, you could simply piggyback the (relatively) stable price of physical gold. This new “digital gold” will require, instead, a long, difficult and volatile process of price discovery. The disinflationary nature of the issuance schedule could make some phases of this process even more “violent.”

{{% image "/img/sb-345-en.webp" /%}}

So far, you’ve learned:

- that in order to launch a completely decentralized system, you cannot leverage physical scarcity;
- that you can reproduce scarcity digitally and decentralize issuance, using special digital puzzles; and
- that in order to grant some hardness to your digital money, you need a strict supply control.

But now that you have effectively decentralized issuance, how can you do the same for ownership? We will answer that in “[Discovering Bitcoin Part 6: Digital Contracts](/en/discovering-bitcoin/digital-contracts).”

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
