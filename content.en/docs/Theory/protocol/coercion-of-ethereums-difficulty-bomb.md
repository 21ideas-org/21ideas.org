---
title: "The Coercion Of Ethereum's Difficulty Bomb"
h1: "The Coercion Of Ethereum's Difficulty Bomb"
cover: /img/bomb-908.jpg
description: "The perpetual Ethereum difficulty bomb is evidence that blockchains can be coercive, and Bitcoin is evidence that they don’t have to be."
url: coercion-of-ethereums-difficulty-bomb
date: 2021-12-03
bookFlatSection: false
weight: 61
---

The perpetual Ethereum difficulty bomb is evidence that blockchains can be coercive, and Bitcoin is evidence that they don’t have to be.

{{< hint btc >}}
This essay by [Level39](https://twitter.com/level39) was published in [Bitcoin Magazine](https://bitcoinmagazine.com/technical/ethereum-is-coercive-bitcoin-is-not).

[Contribute](/contribute/).
{{< /hint >}}

Can open-source blockchains be coercive? In a recent debate between Erik Vorhees and Alex Gladstein, Vorhees [asserted](https://youtu.be/Ww1lkM2ueyI?t=1332) that “there is nothing in Ethereum that is based on coercion, period.”

Vorhees went on to clarify:

> “I have a pretty high standard of coercion. It's basically like physical violence or the threat of physical violence, or theft or breach of contract. Those categories of things I call coercive. What's not coercive is if you're part of an open-source software project and the majority in that project wants to do something and you don't. And so the project goes in a direction that you didn't want it to go in. That's not coercion. That's called market forces. People I think often will ascribe the word coercion to just things that are inconvenient or unpleasant or that or that feel like they harm them or that lost them money. That's not coercion. I reserve that for more intense interventions… I don't think anything that happens in open blockchains is coercive, period, unless there's some kind of fraud going on… I think open-source software protocols can't be coercive.”
> 
> – Erik Voorhees, [“What Bitcoin Did: Bitcoin Vs Altcoins 2 With Alex Gladstein And Erik Voorhees"](https://youtu.be/Ww1lkM2ueyI?t=1576)

This isn’t the first time that the topic has been hotly debated. In 2017, in response to disagreements in preferred protocol upgrade mechanisms, Vitalik Buterin even attempted to claim that [soft forks are more coercive than hard forks](https://vitalik.ca/general/2017/03/14/forks_and_markets.html). Buterin argued that hard forks are opt-in, whereas soft forks [are not](https://youtu.be/XW0QZmtbjvs?t=3224).

However, Buterin misses the point that anyone who runs a Bitcoin node can continue to run outdated clients and expect that their coins will still work with the same rules they signed up for. As Pete Rizzo has [pointed out](https://bitcoinmagazine.com/culture/bitcoin-grants-highest-degree-of-assurances), Bitcoin is the only cryptocurrency that truly protects minority users’ rights in this way.

## Ethereum’s Difficulty Bomb Is Coercive

Curiously, neither Vorhees nor Buterin are keen to mention an aspect of Ethereum that is metaphorically labeled as destructive physical violence enshrined in code, known as the “difficulty bomb,” which is designed to override the very free market forces Vorhees espouses.

The difficulty bomb is code that incrementally increases the difficulty level of Ethereum’s proof-of-work mining in order to slowly reduce block production times, until the chain [becomes unusable](https://gitter.im/ethereum/AllCoreDevs?at=5dd4f6bfe5ea5550f4db3d78). It was released as a means to force Ethereum’s switch from proof of work to proof of stake.

The Ethereum Foundation [perpetually hits the snooze button](https://www.cnbc.com/2021/08/05/ethereums-mining-cliff-moved-up-from-summer-2022-to-december-2021.html) and resets its time bomb on the updated chain it helps release. This acts as a looming threat, in order to force compliance. Its next detonation is currently [planned for June 2022](https://eips.ethereum.org/EIPS/eip-4345), at which point it will likely be reset, yet again, for another future detonation date. Continually [modifying the detonation date is a regular occurrence](https://www.cnbc.com/2021/08/05/ethereums-mining-cliff-moved-up-from-summer-2022-to-december-2021.html) in Ethereum. One can even see the effects of accidental detonations in historical block time data.

{{% image "/img/bomb-909.png" %}}
_Source: [Etherscan.io](https://etherscan.io/chart/blocktime)_
{{% /image %}}

> “This mechanism increases the difficulty exponentially over time and eventually leads to what is referred to as the ‘Ice Age’ — that is, the chain becomes so difficult to mine that it grinds to a halt and stops producing blocks (freezes).”
> 
> – EthHub, [“What is the Ethereum Difficulty Bomb (Ice Age)?"](https://docs.ethhub.io/questions-about-ethereum/what-is-the-difficulty-bomb/)

The difficulty bomb forces miners and users into accepting developer hard forks to a proposed Ethereum upgrade known as an Ethereum Improvement Proposal (EIP).

Lest one think this framing is an exaggeration, one need only [refer to EthHub documentation](https://docs.ethhub.io/questions-about-ethereum/what-is-the-difficulty-bomb/) to see that “forcing” miners and users to upgrade is indeed the real intention of the difficulty bomb. Any reasonable person can see this is intended to be coercive.

{{% image "/img/bomb-914-en.webp" %}}
*Source: [EthHub, “What Is The Ethereum Difficulty Bomb (Ice Age)?”](https://docs.ethhub.io/questions-about-ethereum/what-is-the-difficulty-bomb/)*
{{% /image %}}

Both Buterin and Vorhees have pointed to the fact that on July 20, 2016, a segment of the Ethereum community refused to accept the Ethereum Foundation’s hard fork which reversed the exploitation of a flaw in [The DAO](https://en.wikipedia.org/wiki/The_DAO_(organization)) project's smart contract software, and undid a theft of $50 million worth of ether. The forked chain, which reversed the hack, was proposed by the trademark-owning Ethereum Foundation and was supported by its powerful marketing presence and official social media accounts. The dissenters who opposed this fork, and lacked the official marketing arsenal, had no choice but to create a new project under a different name — now known as Ethereum Classic.

According [to Voorhees](https://youtu.be/Ww1lkM2ueyI?t=4029), “The people that really didn't like Ethereum's hard fork just kept on with the same rules.”

However, that’s not entirely true. Because of the difficulty bomb, the members of the Ethereum community who opposed The DAO fork were left stranded on a dying chain that was destined to freeze. Saying these users kept on with the same rules is like claiming people are free to keep driving a car that has no oil. It’s guaranteed to stop working in a few months.

Sure enough, in January 2017, the newly-formed Ethereum Classic community was forced to [implement the “Die Hard” hard fork](https://bitcoinmagazine.com/business/ethereum-classic-hard-forks-diffuses-difficulty-bomb-1484350622) in order to remove the difficulty bomb for the remaining users and willing miners. The new Ethereum Classic developers also added in some of their own improvements, including adjusting technical parameters to increase the cost of certain spam attacks.

In other words, users who wish to dissent from the Ethereum Foundation’s contentious EIPs must also submit to the whims of the developers that choose to d the difficulty bomb in a necessary hard fork. Such an outcome is only possible if the dissenting users can find a willing team of core developers and miners who are willing to go along with the dissent, maintain the new project, create market forces and defuse the bomb.

> “A hard fork elevates those who are Technical, Persuasive, or Endorsed, to ‘non-peer’ status.”
> 
> – Paul Sztorc, [“Measuring Decentralization"](http://www.truthcoin.info/blog/measuring-decentralization/)

Conversely, Bitcoin soft forks are all backwards compatible, meaning that obsolete versions of the client software are always supported. In theory, a user could fall into an extended coma and, upon waking, find that their Bitcoin wallet and full node would still be usable decades later. The same cannot be said for Ethereum.

According to the “New Oxford American Dictionary,” coercion is defined as “The practice of persuading someone to do something by using force or threats.”

Voorhees is correct that the coercion is classically defined as a physical persuasion that ordinarily cannot exist in transparent, open-source code. However, when that code is able to exponentially increase the output of physical proof-of-work mining, to the point of mining rigs becoming _unusable_, the code crosses a line from the virtual realm into the physical world and allows manipulation through new developer hard fork EIPs.

This threat of ratcheting up the physical force on mining rigs is what persuades miners to hard fork to the Ethereum Foundation’s [hand-picked EIP](https://youtu.be/ajy7pQm6E-A?t=4332). It’s not all that different from an authoritarian government saying they will physically render your equipment useless unless you comply with its brand new rules by a certain deadline. Your only other option is to defect and form a viable “classic” government.

Ethereum’s difficulty bomb threat obviously isn’t intended to harm human bodies, but it is intended to project a violent force on physical mining property. This in turn persuades both miners and users to comply with the developer roadmap. In this way, we can say that Ethereum’s difficulty bomb is indeed coercive.

{{% image "/img/bomb-912-en.webp" %}}
_An Ethereum difficulty bomb flow chart_
{{% /image %}}

This is particularly concerning when you consider that the largest ether holders can easily influence the developers who work for the Ethereum Foundation. In a recent interview with Peter McCormack, Ethereum Core Developer Lane Rettig [recounted that he was often lobbied by large whales](https://youtu.be/ajy7pQm6E-A?t=5189) to accommodate their requests.

It is interesting to note that when (or if) Ethereum moves to proof of stake, the difficulty bomb is expected to be retired. At that point, the largest Ethereum whales will have the power to control the fate of Ethereum on their own, as proof of stake is a plutocratic consensus mechanism that is governed by the wealthiest holders — it literally means “proof of wealth.”

While there are those in the Ethereum community [who are aware of this coercion](https://gitter.im/ethereum/AllCoreDevs?at=5dd50cd3bebeec417b968b6f), there are also those who are unphased by this apparent ethical oversight. After all, the difficulty bomb and the move to proof of stake is part of the public roadmap and a was disclosed to all parties involved. And how else are Ethereum developers supposed to ensure the project moves forward unless they have the ability to “force” their upgrades to be regularly installed?

Nevertheless, this past roadmap transparency does not make brand new EIPs, that can contain new and unexpected rules, any less coercive when they are forced by the impending threat of difficulty bombs. In short, Ethereum’s coercion may be seen as a necessary evil to push the project forward given its [developers know that Ethereum is unfinished and unworkable in its current form](https://twitter.com/coin_casher/status/1441756649773928449).

## Bitcoin Is Different

One might point out that Bitcoin halvings encourage miners to work harder for less reward every four years. However, this argument is dubious. Bitcoin’s issuance schedule was predetermined on day one, can no longer be influenced by its departed founder, and is not intended to force new rules on the protocol or its users.

Bitcoin is different. By having a fully-released project and a culture of soft forks, your bitcoin full node [assures you the strongest user rights](https://youtu.be/69YoEFkbLFk?t=3535) and guarantees your accessibility over time with backwards compatibility. Whales cannot pressure Bitcoin devs to forcefully change the rules on you with soft forks — you can simply dissent and keep using Bitcoin. And you can’t be defrauded by the majority of bitcoin holders. Your user rights as an individual user of bitcoin are yours and yours alone to uphold, by running your own full node, with relatively inexpensive hardware.

Bitcoin users and miners are not beholden to developers. The consensus needed to move the protocol forward is reached in a conservative manner — through users and miners signaling their acceptance of each update. And should you as a user disagree with those updates, it’s your right to dissent in Bitcoin and nothing ever has to change about your full node client if you want to keep transacting with outdated software. Bitcoin doesn’t care, it will keep on supporting your decision either way.

While running outdated software may not be ideal, it underscores the point that Bitcoin’s protocol is not coercive. The same cannot be said for Ethereum’s perpetual difficulty bombs, which constantly threaten miners with physical energy costs, it’s detonation reset again and again until its wealthy plutocrats can forcefully deploy their proof-of-wealth-based control over users. Ethereum plutocrats can have their difficulty bombs, [aggresive deflation at the expense of lower classes](https://tomerstrolight.medium.com/the-problem-with-ethereum-part-2-a55f9170f7e7) and coercion.

Bitcoin is freedom from that tyranny. Bitcoin elevates users above developers and miners. It empowers users to choose the protocol rules they want and levels the monetary system playing field for the first time in human history. Bitcoin is on a mission of [hope, peace, abundance and prosperity](https://bitcoinmagazine.com/culture/bitcoin-and-teslas-peaceful-energy-vision). It’s time to plug in your full node and join this peaceful revolution.