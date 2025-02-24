---
title: "Part III: If Bitcoin Had a First Draft, Wei Dai’s B-Money Was It"
h1: "The Genesis Files. Part III: If Bitcoin Had a First Draft, Wei Dai’s B-Money Was It"
cover: /img/gf-241.jpeg
tags: ["bitcoin", "history", "cypherpunks", "genesis"]
description: "“Efficient cooperation requires a medium of exchange (money) and a way to enforce contracts,” Dai explained when he introduced b-money in November of 1998."
url: gf/genesis-3
date: 2018-06-14
bookFlatSection: false
bookToc: true
weight: 4
---

{{< details "Contents" "..." >}}
1. [Intro: The Day Cryptography Changed Forever](/en/gf/genesis-intro)
2. [Part I: How David Chaum’s eCash Spawned a Cypherpunk Dream](/en/gf/genesis-1)
3. [Part II: Hashcash or How Adam Back Designed Bitcoin’s Motor Block](/en/gf/genesis-2)
4. [Part III: If Bitcoin Had a First Draft, Wei Dai’s B-Money Was It](/en/gf/genesis-3)
5. [Part IV: With Bit Gold, Szabo Was Inches Away From Inventing Bitcoin](/en/gf/genesis-4)
6. [Part V: How Hal Finney’s Quest For Digital Cash Led To RPOW (And More)](/en/gf/genesis-5)
{{< /details >}}

{{< hint btc >}}
This article by Aaron van Wirdum was published in [Bitcoin Magazine](https://bitcoinmagazine.com/technical/genesis-files-if-bitcoin-had-first-draft-wei-dais-b-money-was-it).

[Contribute](/contribute/).
{{< /hint >}}

> "Efficient cooperation requires a medium of exchange (money) and a way to enforce contracts,” Dai explained when he introduced b-money in November of 1998.

{{% image "/img/gf-242.png" /%}}

All Cypherpunks value privacy; it’s basically the founding principle of the collective of cryptographers, academics, developers and activists grouped around the 1990s mailing list by the same name. But few put it in practice like Wei Dai does. Once [described](https://www.nytimes.com/2015/05/17/business/decoding-the-enigma-of-satoshi-nakamoto-and-the-birth-of-bitcoin.html) as an “intensely private computer engineer” by the _New York Times_, not many personal details are known about the man who, two decades ago, dreamed up an electronic cash system intriguingly similar to Bitcoin.

This lack of personal details is made up for by Wei Dai’s work and proliferation of ideas. A talented cryptographer, Dai created and still maintains [Crypto++](https://en.wikipedia.org/wiki/Crypto2B2B): a C++ library for cryptographic algorithms. Dai is also, to this day, active on rationality forums like [LessWrong](https://www.lesswrong.com/users/wei_dai), where he philosophizes on such topics as artificial intelligence, ethics, epistemology and more. His insights [earned](https://www.lesswrong.com/posts/jCSLbQvWz8j4Mwcar/what-we-re-losing#KrgHNaDG5Sh5DSgbX) [him](https://www.lesswrong.com/posts/YduZEfz8usGbJXN4x/transcription-of-eliezer-s-january-2010-video-q-and-a) the praise of well-known AI researcher Eliezer Yudkowsky and repeated invitations to speak at his [Machine Intelligence Research Institute](https://intelligence.org/) (MIRI; previously known as the Singularity Institute).

Dai’s interest in philosophy and politics is nothing new. Back in the 1990s, as a young bachelor student in computer science at Washington University, his curiosity led him to the writings of Timothy May, one of the “founding fathers” of the Cypherpunk movement. Dai was [inspired](https://www.lesswrong.com/posts/YdfpDyRpNyypivgdu/aalwa-ask-any-lesswronger-anything#xeDaB4HMwxsadLZfr) by the [crypto-anarchy](https://activism.net/cypherpunk/crypto-anarchy.html) May advocated; the brand-new ideology prevalent amongst Cypherpunks based on the conviction that cryptography and software could provide and safeguard political and economic freedom better than any system of government would.

> “I am fascinated by Tim May's crypto-anarchy,” Dai [wrote](http://www.weidai.com/bmoney.txt) in 1998. “Unlike the communities traditionally associated with the word ‘anarchy’, in a crypto-anarchy the government is not temporarily destroyed but permanently forbidden and permanently unnecessary. It's a community where the threat of violence is impotent because violence is impossible, and violence is impossible because its participants cannot be linked to their true names or physical locations.”

By the mid-1990s, Dai engaged in discussions on various topics on the Cypherpunks mailing list such as [digital reputation systems](https://cypherpunks.venona.com/date/1995/11/msg01043.html), [game theory](https://cypherpunks.venona.com/date/1996/07/msg02620.html), [privacy](https://cypherpunks.venona.com/date/1997/03/msg00545.html) and [anonymity in digital cash systems](https://cypherpunks.venona.com/date/1998/02/msg00753.html). Perhaps more importantly, Dai made a number of proposals to further the Cypherpunk cause, including [trusted timestamping](https://cypherpunks.venona.com/date/1994/08/msg00800.html), an [encrypted TCP tunneler](https://cypherpunks.venona.com/date/1995/10/msg01690.html), a [secure file sharing system](https://cypherpunks.venona.com/date/1996/02/msg00427.html) and more. It garnered him a reputation as a prolific contributor to the Cypherpunk community — though, even back then, no one knew much about him personally. (Not even whether Dai was male or female, Timothy May recently [said](https://www.youtube.com/watch?v=MrGLraSiRZk&feature=youtu.be&t=25m36s).)

But Dai would become best known for an idea he [casually announced](https://cypherpunks.venona.com/date/1998/11/msg00941.html) in November 1998, just after graduating from university.

> “Efficient cooperation requires a medium of exchange (money) and a way to enforce contracts,” Dai explained. “The protocol proposed in this article allows untraceable pseudonymous entities to cooperate with each other more efficiently, by providing them with a medium of exchange and a method of enforcing contracts. [...] I hope this is a step toward making crypto-anarchy a practical as well as theoretical possibility.”

He called his proposal “[b-money”](http://www.weidai.com/bmoney.txt).

# b-money

Typical digital money systems use a central ledger to keep track of account balances. Whether it’s a central bank, a commercial bank, VISA or any other payment provider, a centrally-controlled database somewhere tracks who owns what.

The problem with this solution, from Dai’s and the crypto-anarchist perspective, is that it ultimately lets governments control the flow of money through regulation, while participants in the system are usually required to identify themselves.

> “My motivation for b-money was to enable online economies that are purely voluntary … ones that couldn’t be taxed or regulated through the threat of force,” he later [explained](https://spectrum.ieee.org/computing/software/bitcoin-the-cryptoanarchists-answer-to-cash).

So, Dai came up with an alternative solution. Or really, two alternative solutions.

In the first solution, instead of a central entity controlling the ledger, all participants maintain separate copies of the same ledger. Any time a new transaction is made, everyone updates their records. These ledgers, furthermore, would consist of public keys, with amounts attached to them — no real names. This decentralized approach would prevent any single entity from blocking transactions, while offering a level of privacy to all users.

As a quick example, let’s say Alice and Bob are b-money users. They both have a public key: Alice has public key “A” and Bob has public key “B”, for which they both control their unique private keys. And, as recorded in the ledgers maintained by all users, both their public keys hold b-money units; let’s say three units each.

If Bob wants to receive two b-money units from Alice (because he’s selling her a product), he sends her his public key: B. Assuming Alice wants to buy the product, she then creates a transaction in the form of a message: “2 b-money from A to B.” Next, she signs this message, with her private key corresponding to A. The message and the cryptographic signature is then sent to all b-money users.

The signed message proves to all b-money users that the rightful owner of A wants to send two b-money units to B. Everyone, therefore, updates their ledgers, now attributing a total of one b-money unit to A and a total of five b-money units to B — without learning that Alice or Bob control either.

If this solution sounds familiar, it should: It’s roughly how, 10 years later, Satoshi Nakamoto designed Bitcoin.

# b-money, Version 2

Dai considered his first b-money solution impractical, however, “because it makes heavy use of a synchronous and unjammable anonymous broadcast channel,” he explained in his proposal.

Put differently, the first b-money proposal didn’t solve the double-spending problem. Alice could send two b-money units to both Bob’s B and to Carol’s C at the same time, transmitting these transactions to different parts of the network. Both Bob and Carol would give Alice a product in return … only to later find out that half of the network won’t acknowledge their new balances.

That’s why Dai came up with a second b-money solution, all in the same proposal.

In this version, not everyone maintains a version of the ledger. Instead, the system would consist of two types of users: regular users and “servers.” Only the servers, linked through a [Usenet](https://en.wikipedia.org/wiki/Usenet)-style broadcast network, would maintain the b-money ledgers. To verify that a transaction went through like it should, regular users — like Bob and Carol — would have to verify it with a random subset of these servers. (In case of a conflict, Bob and Carol would presumably reject the transaction from Alice and not sell her anything.)

While not detailed in the proposal, anyone would probably have been able to become a server, but “each server is required to deposit a certain amount of money in a special account to be used as potential fines or rewards for proof of misconduct,” Dai proposed. The servers should also periodically publish and cryptographically commit to ownership databases.

> “Each participant should verify that his own account balances are correct and that the sum of the account balances is not greater than the total amount of money created,” Dai envisioned. “This prevents the servers, even in total collusion, from permanently and costlessly expanding the money supply.”

If this sounds somewhat familiar as well, that’s no wonder either: Dai’s second b-money proposal loosely resembles what would today be called a proof-of-stake system.

To boot, Dai added an early version of a smart contract solution to his proposal(s). These types of smart contracts most closely resemble a mixture of a proof-of-stake system and an arbitration system, where both parties to a contract and an arbitrator must all deposit funds in a special account. Curiously for modern standards, however, these contracts did not have a dispute resolution system encoded: Instead it was possible that, in case of disputes, different users (or servers) would adjust their own ledgers differently, in effect leaving the state of ledgers on the network out of consensus. (Presumably, the potential penalties would make the cost of cheating too high to risk it.)

# Monetary Policy

Yet, where b-money would have perhaps differed most sharply from Bitcoin was Dai’s proposed monetary policy.

Bitcoin’s monetary policy is of course very straightforward. To bring coins in circulation, it initially issued 50 new bitcoins per block, a number which has since dropped to 12.5. This number will continue to decrease over time until, some hundred years from now, the total amount of bitcoin issued caps out at slightly below 21 million. Whether or not such a monetary policy is ideal has been a subject of debate, but one thing is clear: So far it has not produced a stable coin value.

In contrast, a stable coin value was explicitly part of Dai’s vision. To achieve this, the value of b-money was to be coupled to the value of a (theoretical) basket of goods. For example, 100 b-money units would be worth one basket of goods. This should give b-money a stable value, at least in relation to this basket of goods: the same 100 b-money units would buy the same basket of goods in the past, in the present and in the future.

To issue new coins, users were to determine what a basket of goods would cost relative to a solution to a computational problem: a “proof of work.” If, for example, a basket of goods should cost $80 at specific point in time, it would have to be matched by a proof of work that would on average cost $80 to produce. If, 10 years later, the same basket of goods were to cost $120, the same 100 units would have to be matched with a proof of work that’d cost $120 to produce.

Using this indicator, the first person to produce a valid proof of work would be credited 100 new b-money by all users or the servers. Therefore, no one would be particularly incentivized to produce proofs of work unless they intended to use b-money, limiting inflation to the growth of the “b-money economy.”

Alternatively, in an appendix to his proposal, Dai suggested that money creation could be realized through an auction. Either all users (first protocol) or the servers (second protocol) would first have to determine an optimal increase of the monetary base. Then, if this ideal increase were to be established at 500 b-money units, for example, an auction would determine who should create these 500 units: whoever was willing and able to provide the most proof of work for it.

# Bitcoin

B-money was never implemented. It couldn’t have been: “b-money wasn't a complete practical design yet,” Dai acknowledged in a [LessWrong forum thread](https://www.lesswrong.com/posts/YdfpDyRpNyypivgdu/aalwa-ask-any-lesswronger-anything#TLvSTxuypiHBuoCLM) a couple of years ago. What’s more, Dai did not expect b-money to take off in a big way, even if it was implemented.

> “I think b-money will at most be a niche currency/contract enforcement mechanism, serving those who don't want to or can't use government sponsored ones,” he explained in an [email](http://cypherpunks.venona.com/date/1998/12/msg00261.html) following his announcement on the Cypherpunks mailing list.


Indeed, several of b-money’s problems remained unsolved or at least under-specified. Perhaps, most importantly, its consensus model was not very robust, as best shown by Dai’s proposed smart contract solution. It has since also been found that proof-of-stake systems introduce new challenges that Dai may not have foreseen; for example, it’s not clear how “misconduct” can be objectively established. And that doesn’t even get into the more nuanced problems of the proposal, such as a lack of privacy due to traceability of funds or potential coin issuance (“mining”) centralization. Indeed, some of these problems are still not solved for Bitcoin today.

Dai — who after proposing b-money went on to work for TerraSciences and Microsoft, and may have retired early on since then — would not stick around to solve these problems.

> “I didn't continue to work on the design because I had actually grown somewhat disillusioned with crypto-anarchy by the time I finished writing up b-money,” Dai later [explained](https://www.lesswrong.com/posts/YdfpDyRpNyypivgdu/aalwa-ask-any-lesswronger-anything#TLvSTxuypiHBuoCLM) on LessWrong. He reiterated, “I didn't foresee that a system like it, once implemented, could attract so much attention and use beyond a small group of hardcore Cypherpunks.”

Yet, Dai’s proposal was not forgotten: b-money ended up as the first reference in the [Bitcoin white paper](https://bitcoin.org/bitcoin.pdf). Still, as similar as b-money and Bitcoin’s designs may be, it’s possible that Satoshi Nakamoto was not inspired by Dai’s idea at all. Dai himself believes that Bitcoin’s inventor came up with the idea independently.

Shortly before publishing the Bitcoin white paper, Hashcash inventor Dr. Adam Back [directed](https://www.gwern.net/docs/bitcoin/2008-nakamoto) Satoshi Nakamoto to Dai’s work, making Dai one of few people Bitcoin’s inventor personally reached out to before publishing his white paper. But Dai did not respond to Satoshi’s email. In retrospect, he wished he had. Unsurprisingly, Dai questions Bitcoin’s coin generation model.

> “I would consider Bitcoin to have failed with regard to its monetary policy (because the policy causes high price volatility which imposes a heavy cost on its users, who have to either take undesirable risks or engage in costly hedging in order to use the currency),” he [wrote](https://www.lesswrong.com/posts/P9jggxRZTMJcjnaPw/bitcoins-are-not-digital-greenbacks#MwJE7tFnJZdu56Qbz) on LessWrong. “[O]ne possible impact of Bitcoin might be that due to its deficient monetary policy and associated price volatility it can't grow to very large scales, and by taking over the cryptocurrency niche, it has precluded a future where a cryptocurrency does grow to very large scales.”
> 
> He added, “This may have been partially my fault because when Satoshi wrote to me asking for comments on his draft paper, I never got back to him. Otherwise perhaps I could have dissuaded him (or them) from the ‘fixed supply of money’ idea.”

_Author's note: After finishing this article, it was pointed out that the first version of Nick Szabo's [Bit Gold](https://bitcoinmagazine.com/articles/genesis-files-bit-gold-szabo-was-inches-away-inventing-bitcoin) goes back to early 1998. Even more similar to Satoshi Nakamoto's invention than b-money, it's probably more accurate to consider Bit Gold "Bitcoin's first draft"._

{{< details "Contents" "..." >}}
1. [Intro: The Day Cryptography Changed Forever](/en/gf/genesis-intro)
2. [Part I: How David Chaum’s eCash Spawned a Cypherpunk Dream](/en/gf/genesis-1)
3. [Part II: Hashcash or How Adam Back Designed Bitcoin’s Motor Block](/en/gf/genesis-2)
4. [Part III: If Bitcoin Had a First Draft, Wei Dai’s B-Money Was It](/en/gf/genesis-3)
5. [Part IV: With Bit Gold, Szabo Was Inches Away From Inventing Bitcoin](/en/gf/genesis-4)
6. [Part V: How Hal Finney’s Quest For Digital Cash Led To RPOW (And More)](/en/gf/genesis-5)
{{< /details >}}
