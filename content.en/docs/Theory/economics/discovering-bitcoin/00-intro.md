---
title: "Introduction"
h1: "Discovering Bitcoin: A Brief Overview From Cavemen to the Lightning Network"
cover: /img/sb-303.jpg
description: "Welcome to the introduction to a series of seven articles, entitled “Discovering Bitcoin: A Brief Overview From Cavemen to the Lightning Network.”"
url: discovering-bitcoin/intro
aliases: ['/theory-economics-discovering-bitcoin-intro']
date: 2019-09-16
bookFlatSection: false
weight: 1
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

Welcome to the introduction to a series of seven articles, entitled “Discovering Bitcoin: A Brief Overview From Cavemen to the Lightning Network.”

{{< hint btc >}}
This article by [Giacomo Zucco](https://twitter.com/giacomozucco) was first published in [Bitcoin Magazine](https://bitcoinmagazine.com/culture/discovering-bitcoin-a-brief-overview-from-cavemen-to-the-lightning-network).

[Contribute](/contribute/).
{{< /hint>}}

## “Did You Just Say _Seven_?”

I know what you are thinking, dear reader: Seven articles outlining the history of Bitcoin is too much for your busy schedule and too little to do justice to such an ambitious subtitle.

As for your schedule, just relax: Today is Monday and, before next Sunday, you have exactly seven days, one for each article. _Bitcoin Magazine_ suggested that I keep each article at around 1,200 words: Based on the average reading speed of an adult (265 words per minute), that’s less than five minutes per day! You can find them, believe me. Also, by the end of this introduction, you will have already read 1,200 words, which aren’t even included in the total count, since this is just the introduction. Yes, I scammed you. [SFYL](https://www.urbandictionary.com/define.php?term=SFYL).

As for the pretentious subtitle, I believe that these seven brief articles will be enough to develop — if not a deep knowledge of [Bitcoin](https://btcmagwpstage.wpengine.com/what-is-bitcoin) (an intricate maze of distributed systems engineering, open source development, applied cryptography, Austrian economics, information security and more) — at least a very high-level overview of the purposes it was designed to fulfill and of the reasons why it is structured the way it is.

I chose this title not only because I intend to present the subject as a process of discovery but also because many of the best Bitcoin books and conferences are titled with a gerund ([_Mastering Bitcoin_](https://www.amazon.it/Mastering-Bitcoin-Unlocking-Digital-Cryptocurrencies/dp/1449374042), [_Programming Bitcoin_](https://www.amazon.com/Programming-Bitcoin-Learn-Program-Scratch/dp/1492031496), [_Grokking Bitcoin_](https://www.amazon.com/Grokking-Bitcoin-Kalle-Rosenbaum/dp/1617294640), [_Inventing Bitcoin_](https://www.amazon.com/Inventing-Bitcoin-Technology-Decentralized-Explained-ebook/dp/B07MWXRWNB), [_Understanding Bitcoin_](https://understandingbtc.com/), [_Scaling Bitcoin_](https://scalingbitcoin.org/), [_Breaking Bitcoin_](https://breaking-bitcoin.com/), etc), so I wanted to respect the tradition.

## Original Vision: The “Five Ws”

One of the challenges in trying to explain Bitcoin — its purpose, its structure and how the former conditions the latter — is deciding where to start. Allow me to bore you with some personal background here to justify my choice. The first few times I had to select some conceptual map, back in 2014, I opted for the famous “Five Ws,” an established information-structuring technique that [Wikipedia tells me dates back to Aristotle himself](https://en.wikipedia.org/wiki/Five_Ws#Origin)!

### When?

I decided to put the “When?” part first, to frame the actual necessity for a so-called ["blockchain"](https://btcmagwpstage.wpengine.com/guides/what-blockchain) (the ugly but also popular word sometimes used to label Bitcoin’s [“timechain”](https://blog.goodaudience.com/timechain-a-decade-of-misunderstanding-blockchain-bcb56d7839a3)): Basically just a time-related tool needed to establish a canonical ordering and to enforce a unique history in the absence of any central coordinator. Since the term had, by then, already become an abused buzzword, I considered it important to stress that everything a “blockchain” does is to answer questions based on “when” (specifically: “When can I reasonably consider this transaction as practically irreversible?” and “When was this unit of value added to the ledger relative to others?”). Bitcoin only needs a “blockchain” to prevent double-spending of valid transactions and to keep the supply growth rate under control in a decentralized setting.

### Who?

But what are those “valid transactions”? In order to explain the ownership scheme in Bitcoin and the role of digital signatures, I introduced the “Who?” part, trying to provide my clients with an introduction to public key cryptography and to some general cybersecurity practices.

### What?

In order to clarify concepts like “proof of work,” algorithmic difficulty adjustment and finite total supply of virtual “units,” I introduced the “What?” part, trying to deliver a basic introduction to client-puzzle functions and to some theory of value, as well as to answer questions like how the supply growth could be algorithmically controlled?

### Where?

But why bother with “decentralized settings” anyway? Since there are central “coordinators” in most architectures, it would be reasonable to leverage them to provide a relative and unique chronology (no inefficient “blockchain” needed), to manage identities (no need for digital signatures, with all of their UX and security challenges), or to issue digital receipts for physically scarce goods (no need for a slow and painful price-discovery process to assign some value to intrinsically digital scarcity). The “Where?” part was used to clarify that our assumption was a system with no single point of failure, designed to avoid the fate of political censorship which affected centralized predecessors of Bitcoin, like E-gold.

### Why?

And what about the reasons for such political censorship? I moved then to the “Why?” part, where I tried to give a quick overview (more logical than historical) of the evolution of money: from stored consumption goods, to barter, to commodity-money, to free-banking representative money to monopolistic “fiat” money. The lessons were usually arranged more or less like this (the arrows represent a logical dependency, “We need the thing on the left because of the right”):

{{% image "/img/sb-304-en.webp" /%}}

## Upgrade: Four Ws, Two Plans

There were two problems with this model, the first being ordering: Each step was presented as necessary to “fix” the next one, in a sort of reversed causal chain, but the full picture became clear only at the end. It would have been more natural to flip it, starting from some monetary history in “Why?,” going through failed attempts at building centralized alternatives to fiat money in “Where?,” introducing decentralized value issuance in “What?” and decentralized ownership transfer in “Who?,” and finally ending with decentralized unique chronology in “When?”

The second problem was the amount of information packed inside the “Why?” part. A lot of possible subsections, ironically, fitted quite well in the four remaining “Ws”: discussions about saving and investment fit pretty well in a “When?” section, discussions about exchange and specialization in a “Who?” section, discussions about convergence and liquidity in a “What?” section and discussions about virtualization of value by trusted central parties in a “Where?” section.

Solving these problems would have required my audience to remain open-minded and focused while I ranged from cavemen to central banks. I couldn’t afford, back then, to keep them waiting for the “blockchain” meme for so long. But now I can. I guess that means, dear reader, that you will endure four (pseudo)historical articles before I even introduce the very first bit of cryptography! Stay strong!

I labeled the first part of this series, ranging from fish-eating cavemen to modern monetary systems, “Plan A,” since it represents the first attempt at developing a monetary technology, characterized by a progressive centralization and by a very unhappy ending: fiat money.

The second part is labeled “Plan ₿” (yes, you guessed it: the “₿” stands for Bitcoin): It starts from the messy situation that Plan A got us stuck in, approaching state-of-the-art Bitcoin development. The “Where?” part is the conjunction (and turning point) between the two plans. Something like this:

{{% image "/img/sb-305-en.webp" /%}}

## Trigger Warning!

In this series, I will often prioritize conceptual symmetry over economic rigor and technical accuracy. I will privilege logical connections over real-world chronological sequences, both in relation to monetary history and to technological development. I will commit terminological abuses that would make most economists and developers cringe, particularly when I discuss money attributes (where I will use an almost-made-up word: “scaleness”) and implementation paradigms (where I will abuse the term “CoinJoin” to address Bitcoin’s UTXO-model in general). No spoilers, but the overall map of logical connections should look something like this:

{{% image "/img/sb-306-en.webp" /%}}

All the articles will include beautiful illustrations by [@BitcoinMemeHub](https://twitter.com/BitcoinMemeHub), of Bitcoin Twitter fame, in his signature “toxic” style.

So, are you ready? Cancel all of your appointments for the next week. Or, at least, remove five minutes from one of them, each day. See you next time, for “[Discovering Bitcoin Part 1: About Time.](/en/discovering-bitcoin/about-time)”

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
