---
title: "Proof of stake is a scam"
h1: "Proof of stake is a scam and the people promoting it are scammers"
cover: /img/pos-655.jpg
description: ""
url: proof-of-stake-is-a-scam
date: 2021-11-09
bookFlatSection: false
bookToc: true
weight: 59
---

{{< hint btc >}}
This article by yanmaani was published in his [blog](https://yanmaani.github.io/proof-of-stake-is-a-scam-and-the-people-promoting-it-are-scammers/).

[Contribute](/contribute/).
{{< /hint >}}

Proof of stake is a scam. When I say that, I mean that proof of stake is (1) claimed to be a consensus system, and (2) constitutionally incapable of actually producing a consensus.

To understand why this is the case, we must first study how proof of work works, to be able to see why proof of stake is not an adequate drop-in replacement for it.

## How Proof of Work works

Way back in the day, before Bitcoin was created, you had a lot of people trying to create “digital cash”.

They had identified - correctly - that digital signatures were a part of what was needed, but that only got them so far as to reducing the Digital Cash Problem to the Double-Spending Problem. For data can be copied endlessly, and a signature is not guaranteed to be the only one made with that key.

In 2008, Satoshi Nakamoto came along. He proposed solving the problem by introducing a new component known as “proof of work,” lifted from [an obscure e-mail spam filtering technique](http://www.hashcash.org/papers/hashcash.pdf).

The idea is to have a method to burn electricity in a provable way. The electricity used does not directly produce anything of value, except for a proof that (approximately) this amount of electricity was consumed by this or that node.

The specific method is as follows: [^1]

1. All nodes can generate lottery tickets.
2. These lottery tickets are cryptographically tied to their decisions on which transactions they approve.
3. “Scratching” the lottery ticket requires a certain amount of processing power.
4. Because of the design of the algorithms used, there is no way to mathematically reveal the lottery ticket, except through scratching it.
5. The rarity of lottery tickets that are accepted is determined by the network.
6. If a node can present a lottery ticket of rarity one-in-a-million, the network can conclude the node did about a million lottery tickets’ worth of work, on average.
7. The network gives digital currency to nodes that present a winning lottery ticket.
8. Because the lottery tickets are tied to decisions on approving transactions, a node that approves bad transactions will not be able to collect its reward. (More technically, other nodes will not consider its “coinbase transaction” - the transaction in which the reward is paid out - to be a valid one, and so will not build any lottery tickets on top of it)
9. If a node does this, it will still have spent the real-world cost associated with scratching these tickets (“mining”), such as electricity, but without getting any reward to show for it.
10. To keep things stable, the network increases the scarcity of winning lottery tickets - the “difficulty” - if people are winning too much. For example: if there currently takes, on average, 10 billion lottery tickets for a single winner, and twenty winners are found in the time it should take to find ten, the difficulty will be increased up to one in twenty billion. (The network tries to target a rate of one winner per ten minutes - if the production is too high, the difficulty goes up, and if the production is too low, the difficulty goes down)

However, this is not the whole story. Proof of work is a vital part of the machine, but it is not the machine. For that, we have to go deeper.

## The origins of digital currency

> *“Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending.”*
> 
> — Satoshi Nakamoto, [bitcoin.pdf](/epubs/whitepaper.pdf)

If you have a file on a computer, despite what NFT promoters believe, it is not possible to prevent people from copying it. If that file is your digital currency, this causes a problem. If people can effectively CTRL-C CTRL-V your currency, you do not meaningfully have a currency [^2].

A first step to solving this problem was to do “sending” differently. Instead of directly sending a computer file, users would send digital currency to other people by signing it over with a digital signature. This was a huge step forward, but not all the way. The problem that remained was the dreaded double-spending problem.

Basically: if I have $1 worth of digital currency, nothing can prevent me from trying to send that same $1 to two people, thus turning $1 into $2. Unless they can both compare their incoming transactions to see they’re being had, there’s no way to solve this.

(For what it’s worth, there is a _partial_ solution in pure cryptography. Some digital signature schemes cause for the signing key to leak if you try to sign two different things with the same key. However, the method for reconstructing the key is by doing a mathematical calculation over the two signatures. For that to happen, the two signatures have to be collected in one place by one person.)

Before Bitcoin, people had been trying to solve this problem for decades. [DigiCash](https://en.wikipedia.org/wiki/DigiCash) was proposed by David Chaum in 1989, and it did solve the problem, but at a cost. All transactions would go through a server called the “mint” (albeit in an encrypted format), and this server would, since it would have a complete list of all transactions, be able to check for double spends.

In 2007, then, the state of the art was basically a choice: a centralized system without double-spending, or a decentralized system with. Since a currency system with double-spending is no currency system at all, this effectively meant that all digital currency systems had to be centralized.

Satoshi Nakamoto, the inventor of Bitcoin, had like four big ideas:

1. If you require that all transactions have to go in a ledger, you can (by definition) ignore the transactions that are not in this ledger. This means that you only have to care about double-spending within this ledger.
2. If you have two conflicting transactions within a ledger, the correct choice is always to go with the one that was published first.
3. If you had what’s called a “timestamp server,” you could use this to figure out which transaction came first.
4. We can build such a timestamp server by relying on proof of work, as outlined above.

In more detail: using my node’s local clock, I can check that new blocks coming in (“lottery tickets,” in my analogy) state the time correctly. If I then have a series of blocks (a “block chain”), I can enforce - on threat of refusing to accept them, thus making their money worthless - that these timestamps be accurate, i.e. consistent to my (local) clock.

At this point, I really feel as if I must apologize to my reader for describing this fairly mundane process in such excruciating detail. But it truly is necessary. To understand why a nice mechanical watch is superior to a decent Chinese [^3] copy, it isn’t enough to look at the marketing materials, the glossy brochures, and then finish by taking a cursory look at the case (“looks about the same, three hands and a dial”) and observing that it seems to keep time well enough. We have to actually open it up and see what’s inside.

{{% image "/img/pos-656.png" %}}
_For $2, it’s probably decent value._
{{% /image %}}

The key points to take away from this are:

1. The entire purpose of the system is to keep time accurately. Time is very, very important here. This _cannot_ be stressed enough.
2. Proof of work is a vital part of the system, but it is not the system. There are other parts of it as well. And if you want to replace one part with another, it has to be basically the same part. Not only that, but it has to be machined to the same or better tolerances.

Is proof of stake basically the same part? Is proof of stake machined to the same tolerances?

## How Proof of Stake works, in theory

The basic idea of proof of stake is fairly simple:

1. Instead of buying mining equipment for $1000, nodes can lock up $1000 of cryptocurrency worth (“staking”)
2. Instead of indicating which blocks are valuable by mining on top of them, they can just vote for them on the network, and sign this with a digital signature
3. Instead of having the block that had the most [^4] mining done on it win, the block that had the most votes will win
4. If nodes misbehave, instead of losing their rewards from the day’s work, they will literally lose their entire stake - as if their entire mining rig farm burned down in a proof of work system.

Promoters will then argue that, because these incentives are equal or superior to those of proof of work (this is true), it is also an equally strong or superior system to proof of work (this is a lie). Their problem is that it is not sufficient to write a wish list of incentives, because they also have to create the system that puts them in place.

To use an analogy, it is as if someone would sit down to design a building in the following way: first, they draw how they would like for the exterior to look. Then, they draw how they would like for the interior to look. They make basic measurements, to confirm that the interior does not exceed the exterior in terms of dimensions. They then suggest that the house is plausible, and send it off to the construction workers to build.

Of course, they are missing the most important part: the structural system of beams and load-bearing walls that ensures the building continues being a building! Our heroes have to lay out, in practice, how their system would work, and this is where the fun starts.

## The Nothing at Stake problem

In PoW, nodes that misbehave are punished. The system that causes them to be punished is this: they have spent electricity. If they do not get their money back in cryptocurrency, they make a loss. Only if the system makes the active decision to reward them will they recoup their sunk cost.

In this way, the punishment for misbehaviour - having to pay for electricity without a reward - is assured. Because of the laws of physics, turning energy into heat increases entropy, and the arrow of time is irreversible. Once it happened, it’s a done deal. **A node cannot un-mine a block and get their electricity back.**

Proof of stake does not intrinsically have the same system. Just as the double-spending problem, anyone with a digital key can sign anything they want with no repercussions. They therefore have to build a similar, synthetic, incentive structure.

Here’s where the problem starts: because their punishment is synthetic, it exists inside of the system. Because the punishment exists inside of the system, it can only impinge on that which the system has control over - in this case, the nodes’ security deposits. Therefore, once they have withdrawn their deposits, they are untouchable. This is the “nothing at stake” problem. There will inevitably come a point when a node is free to liquidate their entire stake and cash out. At that point, the network has a problem:

1. That key is valid to sign any number of versions of, let’s say, block #200, and there is no objective, system-internal standard for which version is legitimate, other than “the one that was published first”.
2. The node can sign whatever it wants with that key with no consequences. There is no way to punish it, because it has _nothing at stake_ [^5].

Virtually all systems attempt to solve this problem in the same way:

1. If a node signs another version of the same block within a reasonably short time period, “slash” their deposits (e.g. punish them inside of the system)
2. If a node signs another version of the same block, like, a year later, just ignore it.

Here’s your problem: _how do you know which version was first?_ If you were there from the start and saw it first hand, it’s easy. But what if you just installed it, and your node is trying to sync? What happens if you’re presented with two identical blocks, and have to decide which one to pick?

The entire point of the consensus mechanism was to allow us to tell which transaction was first, without personally having seen it take place. That’s why you solve the decentralized timestamp problem - so you can solve the transaction ordering problem, so you can solve the double-spending problem.

In this case, it seems as if our alleged consensus mechanism suffers from a double-signing problem. Fortunately, it solves this problem by solving the decentralized block timestamp problem, so it can solve the block ordering problem.

Hahaha, just kidding. It doesn’t actually do that last part. You’ll need [some other method](https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity/) to figure that out:

> _“Because of all the arguments above, we can safely conclude that this threat of an attacker building up a fork from arbitrarily long range is unfortunately fundamental, and in all non-degenerate implementations the issue is fatal to a proof of stake algorithm’s success in the proof of work security model. However, we can get around this fundamental barrier with a slight, but nevertheless fundamental, change in the security model.”_
> 
> _– Vitalik Buterin, saying the quiet part out loud_

In other words: _if measured under the same threat model as proof of work, proof of stake is fundamentally (and fatally!) insecure_. This is admitted, even by its chief boosters. Only if we ~~downgrade to a weaker~~ make a “slight, but nevertheless fundamental change” to the security model can it be called “secure”.

## Some questions

If there is a fundamental security flaw in a scheme, that can only be “alleviated” by lowering the standards it is measured against, is that scheme “secure”?

If advocates of this supposedly secure scheme know about this, but neglect to tell anyone - in public, that is, not in obscure blog posts - are they committing fraud, malpractice, or merely lying by omission?

If supposedly credible people were aware of this fraud, but neglected to tell those who placed their faith in them about it, how should that reflect on their credibility, and the credibility of those who, in turn, endorsed them?

> *"But if the watchman see the sword come, and blow not the trumpet, and the people be not warned; if the sword come, and take any person from among them, he is taken away in his iniquity; but his blood will I require at the watchman’s hand."*

## The man behind the curtain

What can we conclude from this?

1. Since proof of stake can not alone reach a consensus, it is not a consensus mechanism.
2. If it still has a working system, there has to be a real consensus mechanism (e.g. not proof of stake) behind it.

Indeed, I’m not making this up:

> *“This security assumption, the idea of “getting a block hash from a friend”, may seem unrigorous to many; Bitcoin developers often make the point that if the solution to long-range attacks is some alternative deciding mechanism X, then the security of the blockchain ultimately depends on X, and so the algorithm is in reality no more secure than using X directly - implying that most X, including our social-consensus-driven approach, are insecure.*
> 
> *However, this logic ignores why consensus algorithms exist in the first place. … Weak subjectivity is exactly the correct solution."*
> 
>  _– Vitalik Buterin, not denying the claim he’s attempting to refute_

There are, to my knowledge, three such _mechanisms X_ proposed for the _actual consensus_:

1. Local consensus. This means that every node has their own view of what’s going on. This is, indeed, very decentralized. Unfortunately, it lacks the property of consensus, since every node has their own idea of what’s going on. Case study: [Bitcoin Cash ABC](https://blog.bitmex.com/bitcoin-cash-abcs-rolling-10-block-checkpoints/).
2. Proof of authority. In plain English, this means that you have a trusted authority that signs the blocks. It’s a very effective method to get a consensus, and one which doesn’t even pretend to be decentralized. Case study: Peercoin.
3. “Phone-a-friend consensus”. A mythical animal that’s very vaguely specified, but surely both decentralized and an effective consensus mechanism.

Obviously, nobody wants either of the first two - decentralized consensus is the name of the game, but getting either in isolation is incredibly easy. So let’s study this “phone-a-friend consensus” - hereinafter PFC - in more detail. More specifically, what do we do when it breaks?

In PoW, we needn’t worry about “the network” being wrong about anything. As long as we’re decently connected, and verifying everything, we know we’re on the right track. We are assured that everyone else will eventually fall in line. Since they’re running the same software, how could they not?

In PFC, however, we adopt a postmodern view of truth. What happens if I saw with my own eyes that block 200A was first, but “the network” thinks block 200B was first? Do I go on reddit and try to convince them? What if they won’t listen? What if the platforms of discourse are censored?

More importantly - what happens if “the community” believes one thing, but the big guys with the money believe another? Now, in theory, both of these attacks seem extremely far-fetched, but what about the real world? Two data points:

- In 2017, Bitcoin had a contentious and infected debate about what to do with the 1 MB block size limit. During this debate, advocates of the “big block” side found themselves [banned from /r/bitcoin](https://medium.com/@johnblocke/a-brief-and-incomplete-history-of-censorship-in-r-bitcoin-c85a290fe43). In the end, the “small block” side won [^6]. Did the bans play a part in this?
- In Ethereum, after the [The DAO debacle](https://davidgerard.co.uk/blockchain/the-dao/), the Ethereum foundation decided to do a hardfork to bail the investors out. In the end, Ethereum prevailed and Ethereum Classic (the non-hardfork coin) became consigned to irrelevancy.

It seems, then, that in a “community-based consensus”, there’s about four relevant actors. _The same thing clearly cannot act or be acted upon in the same part or in relation to the same thing at the same time, in contrary ways; and **therefore whenever this contradiction occurs in things apparently the same, we know that they are really not the same, but different.**_ (emphasis added). They are:

1. The big guys with money and power.
2. The people who own the discussion platforms.
3. The broad masses of people.
4. You.

Now, what happens if either of these actors disagree with the other? Let’s study it:

1. Against any of these other groups of people, your opinion is not realistically going to matter.
2. If the broad masses of people disagree with the platform landlord, their opinion will be altered to conform with the rules, or else they will no longer have a voice.
3. If the people who actually run the project disagree with the people running their platform, that platform will lose the vaunted “endorsement” status.
4. If the people running the project disagree with the community, the community has the choice of forking off - losing all of the institutional capital and whatever else, like in Ethereum - or getting back in line.

In practice, then, “community consensus” is just an obfuscated and convoluted version of “proof of authority”. And as Mr. Buterin knows from first-hand experience, “the security of the blockchain ultimately depends on X”.

## If it doesn’t work, then how come it works?

We’ve already established that a system that works the way the promoters suggest it does is literally impossible. A system, then, that actually works, must sacrifice one of three things - either it isn’t proof-of-stake (e.g. concealed proof of work), it isn’t decentralized, or it doesn’t have a consensus.

In practice, however, there often isn’t a bright line between these things. If the same people own all the tokens, control all of the staking pools, the project governance, and run all the full nodes, an attack isn’t even possible. It’s so centralized, it produces the impression of decentralization from a distance.

Think of it the CAP theorem: In the presence of a partition, you have to make the choice between consistency and availability, but in the absence of one, you get both and don’t even have to choose. If all of the people with the technical means of doing an attack are the owners’ cronies, the ship keeps on floating. Or as [David Gerard puts it](https://davidgerard.co.uk/blockchain/2018/05/13/ethereum-casper-only-has-to-work-well-enough-worse-is-better-in-action/):

> *"The market doesn’t care about the Bitcoin ideology behind decentralisation. … The market treats centrally administered ICO tokens, and centrally-controlled cryptocurrencies like Ripple (XRP), as the same class of object as Bitcoins or ether. The market wants what it wants, not what ideologues want it to want.*
> 
> *…*
> 
> *As long as:*
> 
> - *the network remains secure enough to function at all*
> - *the price of ether doesn’t crash*
> - *the ICO tokens keep pumping and dumping*
> - *the latest [CryptoKitties](https://davidgerard.co.uk/blockchain/2018/04/21/news-14000-cryptokitties-to-kill-ethereum-history-of-earn-coms-pitato-ransomware-cryptographers-on-cryptocurrency/) doesn’t clog it too badly*
> - *and it doesn’t have any disasters that are more expensive than the ones the current system has, like The DAO or the [Parity wallet disaster](https://davidgerard.co.uk/blockchain/2017/11/08/the-ethereum-parity-wallet-disaster-play-by-play/)*
> 
> *– then Casper will be a good enough proof-of-stake that the community can live with it.*
> 
> *Casper doesn’t have to work well enough for the ideologues — it just has to work well enough for the market."*

## The paper-moderated, ink-cooled reactor

It’s not hard to see why people are taken in by this. Proof of work promises them, in principle, a bad [^7] system that produces a certain result, through methods that are plainly inscrutable to an average reader. Proof of stake promises them a good system, which produces the same result, through methods that are about equally inscrutable.

The people promoting this are either unaware of the security properties of the technology they’re promoting, in which case they are clowns (whose endorsements of technology you cannot trust), or they are aware (but neglecting to tell you), in which case they are scammers (whose endorsements of technology you _definitely_ cannot trust).

In either case, the fact that an individual promotes proof of stake, or takes seriously those who do, ought to be enough to disqualify them from being considered authorities on any matter ever again. The fact that this is not done, and overt scammers are enthusiastically rehabilitated, is a damning indictment of the alleged “cryptocurrency community”.

## Is there any replacement for proof of work?

I don’t know if we will ever replace proof of work. Probably, in ten years they might have something. To fit the security model of Bitcoin, it must have the following desiderata:

1. Costly - mining a block must create a sunk cost roughly equivalent to the block reward
2. Irreversible - these costs must arise in the real-world, from processes that are not cheaply reversible in the short term
3. Self-certifying - it must be possible to validate solely within computer software, without reference to anything else

PoW has all three, but at some cost.

PoS has one of these, barely - it fails on the other two (irreversibility and being self-certifying)

Proof of space seems like it could work, but only if the date stored is useless, thus [moving](https://blog.dshr.org/2021/07/alternatives-to-proof-of-work.html) the [waste](https://davidgerard.co.uk/blockchain/2021/05/22/news-everybody-hates-chia-defi100-rugpull-china-versus-mining-china-versus-crypto/) [^8] from electricity to electronics. I’m not endorsing Chia’s specific implementation here, though.

Perhaps there is a small glimmer of hope in combining proof of work and proof of stake. That way, you could replace some of the mining with staking. I don’t really know, but that’s my hunch. I do know one thing, though: when it comes to promises about the future made by cryptocurrency promoters, don’t believe it until you see it.

What makes people buy into their cryptocurrency isn’t actual technological advances that have already happened, it’s promises of what’s yet to come. In fact, their best incentive is to perpetually keep the moon on the horizon, so as to helpfully inform the would-be bagholders they’re getting in on the ground floor.

Cynical people will observe that this is also how most cryptocurrency projects actually operate - not only is it more profitable, it’s also cheaper. They’re not strictly lying when they say you’re getting in on the ground floor, only when they imply that there will ever be a second one built.

[^1]: This is, believe it or not, a simplification.
[^2]: I’m not trying to make some type of hardcore anti-inflation argument here. All I’m saying is that you can’t have a currency based on taking whatever paper you happen to have on you and writing the largest number you can come up with.
[^3]: There’s nothing wrong with Chinese horology, there’s many quality Chinese watch brands, and many of the “Western” brands have production there too. I am not suggesting that all East Asian products are low quality, just that (virtually) all low quality products are made in East Asia. (The objection could be made that all products of any kind are made in East Asia.)
[^4]: Probabilistically, that is.︎
[^5]: Sometimes, people redefine “nothing at stake” to refer to something else, and call this the long-range attack instead.︎
[^6]: I’m not endorsing either side in this conflict here, all I’m saying is that platforms have power.︎
[^7]: In terms of wasting energy, for example. As a consensus system, it’s excellent.︎
[^8]: That’s not to say wasting $100 of hard drive isn’t slightly preferable to wasting $100 of electricity, though.︎
