---
title: "Part III. Technological Teachings of Bitcoin"
h1: "Part III. Technological Teachings of Bitcoin"
cover: /img/what-16.jpg
tags: ["philosophy", "bitcoin"]
description: ""
url: what-i-learned-from-bitcoin-3
date: 2019-04-02
bookFlatSection: false
bookToc: true
weight: 1
---

{{< expand "Contents" "..." >}}

1. [Part I. Philosophical Teachings of Bitcoin](/en/what-i-learned-from-bitcoin-1)
2. [Part II. Economic Teachings of Bitcoin](/en/what-i-learned-from-bitcoin-2)
3. [Part III. Technological Teachings of Bitcoin](/en/what-i-learned-from-bitcoin-3)

{{< /expand >}}

{{< hint btc >}}
This article by [Gigi](https://twitter.com/dergigi) was published on [dergigi.com](https://dergigi.com/2019/04/02/technological-teachings-of-bitcoin/) website.

[Contribute](/contribute/).
{{< /hint >}}

What is Bitcoin? The many answers to this question are as interesting as they are varied. Bitcoin is both a social and a monetary phenomenon, but it is also a technological one. The intersection of many disciplines is what makes Bitcoin endlessly fascinating. Like many others, I began to stumble down this strange rabbit hole a while ago. Even though this article is the last of this series, I am still stumbling down with no end in sight, and I invite you to stumble along with me.

This is the third chapter of a personal journey. Again, I am indebted to [Arjun Balaji](https://twitter.com/arjunblj) who asked the following on Twitter: “What have you learned from Bitcoin?” It is this question which has led me to write this series to outline some of the things I’ve learned.

1. [Philosophical Teachings of Bitcoin](/en/what-i-learned-from-bitcoin-1)
2. [Economic Teachings of Bitcoin](/en/what-i-learned-from-bitcoin-2)
3. [Technological Teachings of Bitcoin](/en/what-i-learned-from-bitcoin-3)

Part one explored what I’ve learned from Bitcoin when seen through a philosophical lens: the interplay of immutability and change, copying and scarcity, Bitcoin’s origin story and identity, locality in a world of replication, money as free speech, and the limits of knowledge.

Part two discussed some of the economic teachings of Bitcoin: the concept of value, (sound) money and its history, inflation, and some aspects of “modern” banking like fractional reserve banking.

Part three will explore seven things I have learned from examining Bitcoin through the lens of technology. As in the previous parts, I will only be able to scratch the surface. Bitcoin is an expanding universe, evolving and improving every day. Whole books can be and have been written on small, specific parts of this cosmos. And just like in our own universe, the expansion seems to be accelerating.

Find lessons 1–7 [here](/en/what-i-learned-from-bitcoin-1) and lessons 8–14 [here](/en/what-i-learned-from-bitcoin-2).

## Lesson 15: Strength in numbers

Numbers are an essential part of our everyday life. Large numbers, however, aren’t something most of us are too familiar with. The largest numbers we might encounter in everyday life are in the range of millions, billions, or trillions. We might read about millions of people in poverty, billions of dollars spent on bank bailouts, and trillions of national debt. Even though it’s hard to make sense of these headlines, we are somewhat comfortable with the size of those numbers.

Although we might seem comfortable with billions and trillions, our intuition already starts to fail with numbers of this magnitude. Do you have an intuition how long you would have to wait for a million/billion/trillion seconds to pass? If you are anything like me, you are lost without actually crunching the numbers.

Let’s take a closer look at this example: the difference between each is an increase by three orders of magnitude: 10⁶, 10⁹, 10¹². Thinking about seconds is not very useful, so let’s translate this into something we can wrap our head around:

- 10⁶: One million seconds was 1½ weeks ago.
- 10⁹: One billion seconds was almost 32 years ago.
- 10¹²: One trillion seconds ago Manhattan was covered under a [thick layer of ice](https://en.wikipedia.org/wiki/Last_Glacial_Maximum).

{{% image "/img/what-17.png" %}}
*About 1 trillion seconds ago. Source: xkcd #1125*
{{% /image %}}

As soon as we enter the beyond-astronomical realm of modern cryptography, our intuition fails catastrophically. Bitcoin is built around large numbers and the virtual impossibility of guessing them. These numbers are way, way larger than anything we might encounter in day-to-day life. Many orders of magnitude larger. Understanding how large these numbers truly are is essential to understanding Bitcoin as a whole.

Let’s take [SHA-256](https://en.wikipedia.org/wiki/SHA-2), one of the [hash functions](https://en.bitcoin.it/wiki/Block_hashing_algorithm) used in Bitcoin, as a concrete example. It is only natural to think about 256 bits as “two hundred fifty-six,” which isn’t a large number at all. However, the number in SHA-256 is talking about orders of magnitude — something our brains are not well-equipped to deal with.

While bit length is a convenient metric, the true meaning of 256-bit security is lost in translation. Similar to the millions (10⁶) and billions (10⁹) above, the number in SHA-256 is about orders of magnitude (2²⁵⁶).

So, how strong is SHA-256, exactly?

> "SHA-256 is very strong. It’s not like the incremental step from MD5 to SHA1. It can last several decades unless there’s some massive breakthrough attack.”
> 
> — [Satoshi Nakamoto](https://bitcointalk.org/index.php?topic=191.msg1585#msg1585)

Let’s spell things out. 2²⁵⁶ equals the following number:

```
115 quattuorvigintillion 792 trevigintillion 89 duovigintillion 237 unvigintillion 316 vigintillion 195 novemdecillion 423 octodecillion 570 septendecillion 985 sexdecillion 8 quindecillion 687 quattuordecillion 907 tredecillion 853 duodecillion 269 undecillion 984 decillion 665 nonillion 640 octillion 564 septillion 39 sextillion 457 quintillion 584 quadrillion 7 trillion 913 billion 129 million 639 thousand 936.
```

That’s a lot of nonillions! Wrapping your head around this number is pretty much impossible. There is nothing in the physical universe to compare it to. It is far larger than the number of atoms in the observable universe. The human brain simply isn’t made to make sense of it.

One of the best visualizations of the true strength of SHA-256 is the following video by Grant Sanderson. Aptly named [“How secure is 256 bit security?”](https://www.youtube.com/watch?v=S9JGmA5_unY) it beautifully shows how large a 256-bit space is. Do yourself a favor and take the five minutes to watch it. As all other [3Blue1Brown](https://twitter.com/3blue1brown) videos it is not only fascinating but also exceptionally well made. Warning: You might fall down a math rabbit hole.

{{< youtube S9JGmA5_unY >}}
*Answer: Pretty secure.*
{{< /youtube >}}

[Bruce Schneier](https://www.schneier.com/) used the physical limits of computation to put this number into perspective: even if we could build an optimal computer, which would use any provided energy to [flip bits perfectly](https://en.wikipedia.org/wiki/Landauer%27s_principle#Equation), build a [Dyson sphere](https://en.wikipedia.org/wiki/Dyson_sphere) around our sun, and let it run for 100 billion billion years, we would still only have a 25% chance to find a needle in a 256-bit haystack.

> "These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space.”
> 
> — [Bruce Schneier](https://books.google.com/books?id=Ok0nDwAAQBAJ&pg=PT316&dq=%22These+numbers+have+nothing+to+do+with+the+technology+of+the+devices;%22&hl=en&sa=X&ved=0ahUKEwjXttWl8YLhAhUphOAKHZZOCcsQ6AEIKjAA#v=onepage&q&f=false)

It is hard to overstate the profoundness of this. Strong cryptography inverts the power-balance of the physical world we are so used to. Unbreakable things do not exist in the real world. Apply enough force, and you will be able to open any door, box, or treasure chest.

Bitcoin’s treasure chest is very different. It is secured by strong cryptography, which does not give way to brute force. And as long as the underlying mathematical assumptions hold, brute force is all we have. Granted, there is also the option of a global [$5 wrench attack](https://xkcd.com/538/). But torture won’t work for all bitcoin addresses, and the cryptographic walls of bitcoin will defeat brute force attacks. Even if you come at it with the force of a thousand suns. Literally.

This fact and its implications were poignantly summarized in the [call to cryptographic arms](https://cryptome.org/2012/12/assange-crypto-arms.htm): “_No amount of coercive force will ever solve a math problem.”_

> "It isn’t obvious that the world had to work this way. But somehow the universe smiles on encryption.”
> 
> — [Julian Assange](https://cryptome.org/2012/12/assange-crypto-arms.htm)

Nobody yet knows for sure if the universe’s smile is genuine or not. It is possible that our assumption of mathematical asymmetries is wrong and we find that [P actually equals NP](https://en.wikipedia.org/wiki/P_versus_NP_problem#P_=_NP), or we find surprisingly quick solutions to [specific problems](https://en.wikipedia.org/wiki/Discrete_logarithm#Cryptography) which we currently assume to be hard. If that should be the case, cryptography as we know it will cease to exist, and the implications would most likely change the world beyond recognition.

> "Vires in Numeris” = “Strength in Numbers”
> 
> — [epii](https://bitcointalk.org/index.php?topic=4994.msg140770#msg140770)

_Vires in numeris_ is not only a catchy motto used by bitcoiners. The realization that there is an unfathomable strength to be found in numbers is a profound one. Understanding this, and the inversion of existing power balances which it enables changed my view of the world and the future which lies ahead of us.

One direct result of this is the fact that you don’t have to ask anyone for permission to participate in Bitcoin. There is no page to sign up, no company in charge, no government agency to send application forms to. Simply generate a large number and you are pretty much good to go. The central authority of account creation is mathematics. And God only knows who is in charge of that.

{{% image "/img/what-18.png" %}}
*Elliptic curve examples (cc-by-sa Emmanuel Boutet)*
{{% /image %}}

Bitcoin is built upon our best understanding of reality. While there are still many open problems in physics, computer science, and mathematics, we are pretty sure about some things. That there is an asymmetry between finding solutions and validating the correctness of these solutions is one such thing. That computation needs energy is another one. In other words: finding a needle in a haystack is harder than checking if the pointy thing in your hand is indeed a needle or not. And finding the needle takes work.

The vastness of Bitcoin’s address space is truly mind-boggling. The number of private keys even more so. It is fascinating how much of our modern world boils down to the improbability of finding a needle in an unfathomably large haystack. I am now more aware of this fact than ever.

Bitcoin taught me that there is strength in numbers.


## Lesson 16: Reflections on “Don’t Trust, Verify”

Bitcoin aims to replace, or at least provide an alternative to, conventional currency. Conventional currency is bound to a centralized authority, no matter if we are talking about legal tender like the US dollar or modern monopoly money like Fortnite’s V-Bucks. In both examples, you are bound to trust the central authority to issue, manage and circulate your money. Bitcoin unties this bound, and the main issue Bitcoin solves is the issue of _trust_.

> "The root problem with conventional currency is all the trust that’s required to make it work. […] What is needed is an electronic payment system based on cryptographic proof instead of trust”
> 
> — [Satoshi](https://bitcoin.org/bitcoin.pdf)

Bitcoin solves the problem of trust by being completely decentralized, with no central server or trusted parties. Not even trusted _third_ parties, but trusted parties, period. When there is no central authority, there simply _is_ no-one to trust. Complete decentralization is the innovation. It is the root of Bitcoin’s resilience, the reason why it is still alive. Decentralization is also why we have mining, nodes, hardware wallets, and yes, the blockchain. The only thing you have to “trust” is that our understanding of mathematics and physics isn’t totally off and that the [majority](https://bitcoin.org/en/developer-guide#term-51-attack) of miners act honestly (which they are incentivized to do).

While the regular world operates under the assumption of _“trust, but verify,”_ Bitcoin operates under the assumption of _“don’t trust, verify.”_ Satoshi made the importance of removing trust very clear in both the introduction as well as the conclusion of the [Bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf).

> "Conclusion: We have proposed a system for electronic transactions without relying on trust.”
> 
> — [Satoshi Nakamoto](https://bitcoin.org/bitcoin.pdf)

Note that “without relying on trust” is used in a very specific context here. We are talking about trusted third parties, i.e. other entities which you trust to produce, hold, and process your money. It is assumed, for example, that you can trust your computer.

As Ken Thompson showed in his Turing Award lecture, trust is an extremely tricky thing in the computational world. When running a program, you have to trust all kinds of software (and hardware) which, in theory, could alter the program you are trying to run in a malicious way. As Thompson summarized in his [_Reflections on Trusting Trust_](https://www.archive.ece.cmu.edu/~ganger/712.fall02/papers/p761-thompson.pdf): “The moral is obvious. You can’t trust code that you did not totally create yourself.”

{{% image "/img/what-19.png" /%}}

Thompson demonstrated that even if you have access to the source code, your compiler — or any other program-handling program or hardware — could be compromised and detecting this backdoor would be very difficult. Thus, in practice, a truly _trustless_ system does not exist. You would have to create all your software _and_ all your hardware (assemblers, compilers, linkers, etc.) from scratch, without the aid of any external software or software-aided machinery.

> "If you wish to make an apple pie from scratch, you must first invent the universe.”
> 
> — [Carl Sagan](https://en.wikipedia.org/wiki/Cosmos_%28Carl_Sagan_book%29)

The Ken Thompson Hack is a particularly ingenious and hard-to-detect backdoor, so let’s take a quick look at a hard-to-detect backdoor which works without modifying any software. Researchers [found a way](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Stealthy+Dopant-Level+Hardware+Trojans&btnG=) to compromise security-critical hardware by altering the polarity of silicon impurities. Just by changing the physical properties of the stuff that computer chips are made of they were able to compromise a cryptographically secure random number generator. Since this change can’t be seen, the backdoor can’t be detected by optical inspection, which is one of the most important tamper-detection mechanism for chips like these.

{{% image "/img/what-20.png" %}}
*Stealthy Dopant-Level Hardware Trojans by Becker, Regazzoni, Paar, Burleson*
{{% /image %}}

Sounds scary? Well, even if you would be able to build everything from scratch, you would still have to trust the underlying mathematics. You would have to trust that [secp256k1](https://en.bitcoin.it/wiki/Secp256k1) is an elliptic curve without backdoors. Yes, malicious backdoors can be inserted in the mathematical foundations of cryptographic functions and arguably this [has already happened](https://en.wikipedia.org/wiki/Dual_EC_DRBG) at least once. There are good reasons to be paranoid, and the fact that everything from your hardware, to your software, to the elliptic curves used can have [backdoors](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography#Backdoors) are some of them.

> "Don’t trust. Verify.”

The above examples should illustrate that _trustless_ computing is utopic. Bitcoin is probably the one system which comes closest to this utopia, but still, it is _trust-minimized_ — aiming to remove trust wherever possible. Arguably, the chain-of-trust is neverending, since you will also have to trust that computation requires energy, that P does not equal NP, and that you are actually in base reality and not emprisoned in a simulation by malicious actors.

Developers are working on tools and procedures to minimize any remaining trust even further. For example, Bitcoin developers created [Gitian](https://gitian.org/), which is a software distribution method to create deterministic builds. The idea is that if multiple developers are able to reproduce identical binaries, the chance of malicious tampering is reduced. Fancy backdoors aren’t the only attack vector. Simple blackmail or extortion are real threats as well. As in the main protocol, decentralization is used to minimize trust.

Various efforts are being made to improve upon the chicken-and-egg problem of [bootstrapping](https://www.gnu.org/software/guix/manual/en/html_node/Bootstrapping.html) which Ken Thompson’s hack so brilliantly pointed out. One such effort is [Guix](https://www.gnu.org/software/guix/) (pronounced _geeks_), which uses functionally declared package management leading to bit-for-bit reproducible builds by design. The result is that you don’t have to trust any software-providing servers anymore since you can verify that the served binary was not tampered with by rebuilding it from scratch. As of this writing, a [pull-request](https://github.com/bitcoin/bitcoin/pull/15277) is in progress to integrate Guix into the Bitcoin build process.

{{% image "/img/what-21.png" %}}
*Which came first, the chicken or the egg?*
{{% /image %}}

Luckily, Bitcoin doesn’t rely on a single algorithm or piece of hardware. One effect of Bitcoin’s radical decentralization is a distributed security model. Although the backdoors described above are not to be taken lightly, it is unlikely that every software wallet, every hardware wallet, every cryptographic library, every node implementation, and every compiler of every language is compromised. Possible, but highly unlikely.

Note that you can generate a private key without relying on any computational hardware or software. You can [flip a coin](https://github.com/bitcoinbook/bitcoinbook/blob/develop/ch04.asciidoc#private-keys) a couple of times, although depending on your coin and tossing style this source of randomness might not be sufficiently random. There is a reason why storage protocols like [Glacier](https://glacierprotocol.org/) advise to use casino-grade dice as one of two sources of entropy.

Bitcoin forced me to reflect on what trusting nobody actually entails. It raised my awareness of the bootstrapping problem, and the implicit chain-of-trust in developing and running software. It also raised my awareness of the many ways in which software and hardware can be compromised.

Bitcoin taught me not to trust, but to verify.


## Lesson 17: Telling time takes work

It is often said that bitcoins are mined because thousands of computers work on solving _very complex_ mathematical problems. Certain problems are to be solved, and if you compute the right answer, you “produce” a bitcoin. While this simplified view of bitcoin mining might be easier to convey, it does miss the point somewhat. Bitcoins aren’t produced or created, and the whole ordeal is not really about solving particular math problems. Also, the math isn’t particularly complex. What is complex is _telling the time_ in a decentralized system.

As outlined in the whitepaper, the proof-of-work system (aka mining) is a way to implement a distributed timestamp server.

{{% image "/img/what-22.png" %}}
*Excerpts from the whitepaper. Did someone say timechain?*
{{% /image %}}

When I first learned how Bitcoin works I also thought that proof-of-work is inefficient and wasteful. After a while, I started to [shift my perspective on Bitcoin’s energy consumption](https://dergigi.com/2018/06/10/bitcoin-s-energy-consumption/). It seems that proof-of-work is still widely misunderstood today, in the year 10 AB (after Bitcoin).

Since the problems to be solved in proof-of-work are made up, many people seem to believe that it is _useless_ work. If the focus is purely on the computation, this is an understandable conclusion. But Bitcoin isn’t about computation. It is about _independently agreeing on the order of things._

Proof-of-work is a system in which everyone can validate what happened and in what order it happened. This independent validation is what leads to consensus, an individual agreement by multiple parties about who owns what.

In a radically decentralized environment, we don’t have the luxury of absolute time. Any clock would introduce a trusted third party, a central point in the system which had to be relied upon and could be attacked. “Timing is the root problem,” as Grisha Trubetskoy [points out](https://grisha.org/blog/2018/01/23/explaining-proof-of-work/). And Satoshi brilliantly solved this problem by implementing a decentralized clock via a proof-of-work blockchain. Everyone agrees beforehand that the chain with the most cumulative work is the source of truth. It is per definition what actually happened. This agreement is what is now known as Nakamoto consensus.

> "The network timestamps transactions by hashing them into an ongoing chain which serves as proof of the sequence of events witnessed”
> 
> — [Satoshi Nakamoto](https://bitcoin.org/bitcoin.pdf)

Without a consistent way to tell the time, there is no consistent way to tell before from after. Reliable ordering is impossible. As mentioned above, Nakamoto consensus is Bitcoin’s way to consistently tell the time. The system’s incentive structure produces a probabilistic, decentralized clock, by utilizing both greed and self-interest of competing participants. The fact that this clock is imprecise is irrelevant because the order of events is eventually unambiguous and can be verified by anyone.

Thanks to proof-of-work, both the work _and_ the validation of the work are radically decentralized. Everyone can join and leave at will, and everyone can validate everything at all times. Not only that, but everyone can validate the state of the system _individually_, without having to rely on anyone else for validation.

Understanding proof-of-work takes time. It is often counter-intuitive, and while the rules are simple, they lead to quite complex phenomena. For me, shifting my perspective on mining helped. Useful, not useless. Validation, not computation. Time, not blocks.

Bitcoin taught me that telling the time is tricky, especially if you are decentralized.


## Lesson 18: Move slowly and don’t break things

It might be a dead mantra, but “move fast and break things” is still how much of the tech world operates. The idea that it doesn’t matter if you get things right the first time is a basic pillar of the _fail early, fail often_ mentality. Success is measured in growth, so as long as you are growing everything is fine. If something doesn’t work at first you simply pivot and iterate. In other words: throw enough shit against the wall and see what sticks.

Bitcoin is very different. It is different by design. It is different out of necessity. As Satoshi [pointed out](http://p2pfoundation.ning.com/forum/topics/bitcoin-open-source?commentId=2003008%3AComment%3A9493), e-currency has been tried many times before, and all previous attempts have failed because there was a head which could be cut off. The novelty of Bitcoin is that it is a beast without heads.

> "A lot of people automatically dismiss e-currency as a lost cause because of all the companies that failed since the 1990’s. I hope it’s obvious it was only the centrally controlled nature of those systems that doomed them.”
> 
> — [Satoshi Nakamoto](http://p2pfoundation.ning.com/forum/topics/bitcoin-open-source?commentId=2003008%3AComment%3A9493)

One consequence of this radical decentralization is an inherent resistance to change. “Move fast and break things” does not and will never work on the Bitcoin base layer. Even if it would be desirable, it wouldn’t be possible without convincing _everyone_ to change their ways. That’s distributed consensus. That’s the nature of Bitcoin.

> "The nature of Bitcoin is such that once version 0.1 was released, the core design was set in stone for the rest of its lifetime.”
> 
> — [Satoshi Nakamoto](https://bitcointalk.org/index.php?topic=195.msg1611#msg1611)

This is one of the many paradoxical properties of Bitcoin. We all came to believe that anything which is software can be changed easily. But the nature of the beast makes changing it bloody hard.

As [Hasu](https://twitter.com/hasufl) beautifully shows in [Unpacking Bitcoin’s Social Contract](https://uncommoncore.co/unpacking-bitcoins-social-contract/), changing the rules of Bitcoin is only possible by _proposing_ a change, and consequently _convincing_ all users of Bitcoin to adopt this change. This makes Bitcoin very resilient to change, even though it is software.

This resilience is one of the most important properties of Bitcoin. Critical software systems have to be antifragile, which is what the interplay of Bitcoin’s social layer and its technical layer guarantees. Monetary systems are adversarial by nature, and as we have known for thousands of years solid foundations are essential in an adversarial environment.

> "The rain came down, the floods came, and the winds blew, and beat on that house; and it didn’t fall, for it was founded on the rock.”
> 
> — [Matthew 7:24–27](https://en.wikipedia.org/wiki/Parable_of_the_Wise_and_the_Foolish_Builders)

Arguably, in this parable of the wise and the foolish builders Bitcoin isn’t the house. It is the rock. Unchangeable, unmoving, providing the foundation for a new financial system.

Just like geologists, who know that rock formations are always moving and evolving, one can see that Bitcoin is always moving and evolving as well. You just have to know where to look and how to look at it.

The introduction of [pay to script hash](https://en.bitcoin.it/wiki/Pay_to_script_hash) and [segregated witness](https://en.bitcoin.it/wiki/Segregated_Witness) are proof that Bitcoin’s rules can be changed if enough users are convinced that adopting said change is to the benefit of the network. The latter enabled the development of the [lightning network](https://lightning.network/), which is one of the houses being built on Bitcoin’s solid foundation. Future upgrades like [Schnorr signatures](https://github.com/sipa/bips/blob/bip-schnorr/bip-schnorr.mediawiki#cite_ref-6-0) will enhance efficiency and privacy, as well as scripts (read: smart contracts) which will be indistinguishable from regular transactions thanks to [Taproot](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2018-January/015614.html). Wise builders do indeed build on solid foundations.

Satoshi wasn’t only a wise builder technologically. He also understood that it would be necessary to make wise decisions ideologically.

> "Being open source means anyone can independently review the code. If it was closed source, nobody could verify the security. I think it’s essential for a program of this nature to be open source.”
> 
> — [Satoshi Nakamoto](https://bitcointalk.org/index.php?topic=13.msg46#msg46)

Openness is paramount to security and inherent in open source and the free software movement. As Satoshi pointed out, secure protocols and the code which implements them have to be open — there is no security through obscurity. Another benefit is again related to decentralization: code which can be run, studied, modified, copied, and distributed freely ensures that it is spread far and wide.

The radically decentralized nature of Bitcoin is what makes it move slowly and deliberately. A network of nodes, each run by a sovereign individual, is inherently resistant to change — malicious or not. With no way to force updates upon users the only way to introduce changes is by slowly convincing each and every one of those individuals to adopt a change. This non-central process of introducing and deploying changes is what makes the network incredibly resilient to malicious changes. It is also what makes fixing broken things more difficult than in a centralized environment, which is why everyone tries not to break things in the first place.

Bitcoin taught me that moving slowly is one of its features, not a bug.


## Lesson 19: Privacy is not dead

If pundits are to believed, privacy has been dead [since the 80ies](https://books.google.com/ngrams/graph?content=privacy+is+dead&year_start=1970&year_end=2019&corpus=15&smoothing=3&share=&direct_url=t1%3B%2Cprivacy%20is%20dead%3B%2Cc0). The pseudonymous invention of Bitcoin and other events in recent history show that this is not the case. Privacy is alive, even though it is by no means easy to escape the surveillance state.

Satoshi went through great lengths to cover up his tracks and conceal his identity. Ten years later, it is still unknown if Satoshi Nakamoto was a single person, a group of people, male, female, or a [time-traveling AI](https://blockchain24-7.com/is-crypto-creator-a-time-travelling-ai/) which bootstrapped itself to take over the world. Conspiracy theories aside, Satoshi chose to identify himself to be a Japanese male, which is why I don’t assume but respect his chosen gender and refer to him as _he_.

{{% image "/img/what-23.png" %}}
*I am not Dorian Nakamoto.*
{{% /image %}}

Whatever his real identity might be, Satoshi was successful in hiding it. He set an encouraging example for everyone who wishes to remain anonymous: it is possible to have privacy online.

> "Encryption works. Properly implemented strong crypto systems are one of the few things that you can rely on.”
> 
> — [Edward Snowden](https://www.theguardian.com/world/2013/jun/17/edward-snowden-nsa-files-whistleblower)

Satoshi wasn’t the first pseudonymous or anonymous inventor, and he won’t be the last. Some have directly imitated this pseudonymous publication style, like Tom Elvis Yedusor of [MimbleWimble](https://github.com/mimblewimble/docs/wiki/MimbleWimble-Origin) fame, while others have published advanced mathematical proofs while remaining completely [anonymous](https://oeis.org/A180632/a180632.pdf).

It is a strange new world we are living in. A world where identity is optional, contributions are accepted based on merit, and people can collaborate and transact freely. It will take some adjustment to get comfortable with these new paradigms, but I strongly believe that all of this has the potential to change the world for the better.

We should all remember that privacy is a [fundamental human right](http://www.un.org/en/universal-declaration-human-rights/). And as long as people exercise and defend these rights the battle for privacy is far from over. Bitcoin taught me that privacy is not dead.


## Lesson 20: Cypherpunks write code

Like many great ideas, Bitcoin didn’t come out of nowhere. It was made possible by utilizing and combining many innovations and discoveries in mathematics, physics, computer science, and other fields. While undoubtedly a genius, Satoshi wouldn’t have been able to invent Bitcoin without the giants on whose shoulders he was standing on.

> "He who only wishes and hopes does not interfere actively with the course of events and with the shaping of his own destiny.”
> 
> — [Ludwig Von Mises](https://mises.org/library/human-action-0/html/pp/613)

One of these giants is Eric Hughes, one of the founders of the cypherpunk movement and author of the [cypherpunk manifesto](https://www.activism.net/cypherpunk/manifesto.html). It’s hard to imagine that Satoshi wasn’t influenced by this manifesto. It speaks of many things which Bitcoin enables and utilizes, such as direct and private transactions, electronic money and cash, anonymous systems, and defending privacy with cryptography and digital signatures.

> "Privacy is necessary for an open society in the electronic age. […] Since we desire privacy, we must ensure that each party to a transaction have knowledge only of that which is directly necessary for that transaction. […]
> 
> Therefore, privacy in an open society requires anonymous transaction systems. Until now, cash has been the primary such system. An anonymous transaction system is not a secret transaction system. […]
> 
> We the Cypherpunks are dedicated to building anonymous systems. We are defending our privacy with cryptography, with anonymous mail forwarding systems, with digital signatures, and with electronic money.
> 
> Cypherpunks write code.”
> 
> — [Eric Hughes](https://www.activism.net/cypherpunk/manifesto.html)

Cypherpunks do not find comfort in hopes and wishes. They actively interfere with the course of events and shape their own destiny. Cypherpunks write code.

Thus, in true cypherpunk fashion, Satoshi sat down and started to write code. Code which took an abstract idea and proved to the world that it actually worked. Code which planted the seed of a new economic reality. Thanks to this code, everyone can verify that this novel system actually works, and every 10 minutes or so Bitcoin proofs to the world that it is still living.

{{% image "/img/what-24.png" %}}
*Code excerpts from Bitcoin version 0.1.0*
{{% /image %}}

To make sure that his innovation transcends fantasy and becomes reality, Satoshi wrote code to implement his idea before he wrote the whitepaper. He also made sure [not to delay](https://bitcointalk.org/index.php?topic=199.msg1670#msg1670) any release forever. After all, “there’s always going to be one more thing to do.”

> "I had to write all the code before I could convince myself that I could solve every problem, then I wrote the paper.”
> 
> — [Satoshi Nakamoto](http://www.metzdowd.com/pipermail/cryptography/2008-November/014832.html)

In today’s world of endless promises and doubtful execution, an exercise in dedicated building was desperately needed. Be deliberate, convince yourself that you can actually solve the problems, and implement the solutions. We should all aim to be a bit more cypherpunk.

Bitcoin taught me that cypherpunks write code.


## Lesson 21: Metaphors for Bitcoin’s future

In the last couple of decades, it became apparent that technological innovation does not follow a linear trend. Whether you believe in the technological singularity or not, it is undeniable that progress is exponential in many fields. Not only that, but the rate at which technologies are being adopted is accelerating, and before you know it the bush in the local schoolyard is gone and your kids are using Snapchat instead. Exponential curves have the tendency to slap you in the face way before you see them coming.

Bitcoin is an exponential technology built upon exponential technologies. [Our World in Data](https://ourworldindata.org/) beautifully shows [the rising speed of technological adoption](https://www.visualcapitalist.com/rising-speed-technological-adoption/), starting in 1903 with the introduction of landlines. Landlines, electricity, computers, the internet, smartphones; all follow exponential trends in price-performance and adoption. Bitcoin does too.

{{% image "/img/what-25.png" %}}
*Bitcoin is literally off the charts.*
{{% /image %}}

Bitcoin has not one but [multiple network effects](https://www.thrivenotes.com/the-7-network-effects-of-bitcoin/), all of which resulting in exponential growth patterns in their respective area: price, users, security, developers, market share, and adoption as global money.

Having survived its infancy, Bitcoin is continuing to grow every day in more aspects than one. Granted, the technology has not reached maturity yet. It might be in its adolescence. But if the technology is exponential, the path from obscurity to ubiquity is short.

{{% image "/img/what-26.png" %}}
*Mobile phone, ca 1965 vs 2019.*
{{% /image %}}

In his 2003 [TED talk](https://www.ted.com/talks/jeff_bezos_on_the_next_web_innovation), Jeff Bezos chose to use electricity as a metaphor for the web’s future. All three phenomena — electricity, the internet, Bitcoin — are _enabling_ technologies, networks which enable other things. They are infrastructure to be built upon, foundational in nature.

Electricity has been around for a while now. We take it for granted. The internet is quite a bit younger, but most people already take it for granted as well. Bitcoin is ten years old and has entered public consciousness during the last hype cycle. Only the earliest of adopters take it for granted. As [more time](https://en.wikipedia.org/wiki/Lindy_effect) passes, more and more people will recognize Bitcoin as something which simply is.

In 1994, the internet was still confusing and unintuitive. Watching this old [recording of the Today Show](https://www.youtube.com/watch?v=UlJku_CSyNg) makes it obvious that what feels natural and intuitive now actually wasn’t back then. Bitcoin is still confusing and alien to most, but just like the internet is second nature for digital natives, spending and [stacking](https://twitter.com/hashtag/stackingsats) sats will be second nature to the bitcoin natives of the future.

> "The future is already here — it’s just not very evenly distributed.”
> 
> — [William Gibson](https://www.npr.org/2018/10/22/1067220/the-science-in-science-fiction)

In 1995, about 15% of American adults used the internet. Historical [data from the Pew Research Center](https://www.pewinternet.org/2014/02/27/part-1-how-the-internet-has-woven-itself-into-american-life/) shows how the internet has woven itself into all our lives. According to a [consumer survey](https://www.kaspersky.com/blog/money-report-2018/) by Kaspersky Lab, 13% of respondents have used Bitcoin and its clones to pay for goods in 2018. While payments aren’t the only use-case of bitcoin, it is some indication of where we are in Internet time: in the early- to mid-90s.

In 1997, Jeff Bezos stated in a [letter to shareholders](http://media.corporate-ir.net/media_files/irol/97/97664/reports/Shareholderletter97.pdf) that “this is Day 1 for the Internet,” recognizing the great untapped potential for the internet and, by extension, his company. Whatever day this is for Bitcoin, the vast amounts of untapped potential are clear to all but the most casual observer.

{{% image "/img/what-27.png" %}}
*The internet, 1982 vs 2005. Source: cc-by Merit Network, Inc. and Barrett Lyon, Opte Project*
{{% /image %}}

Bitcoin’s first node went online in 2009 after Satoshi mined the [genesis block](https://en.bitcoin.it/wiki/Genesis_block) and released the software into the wild. His node wasn’t alone for long. Hal Finney was one of the first people to pick up on the idea and join the network. Ten years later, as of this writing, more than 10.000 nodes are [running bitcoin](https://twitter.com/halfin/status/1110302988?lang=en).

The protocol’s base layer isn’t the only thing growing exponentially. The lightning network, a second layer technology, is growing at an even faster rate.

In January 2018, the lightning network had [40 nodes](https://bitcoinist.com/bitcoin-lightning-network-mainnet-nodes/) and 60 channels. In April 2019, the network grew to more than 4000 nodes and around 40.000 channels. Keep in mind that this is still experimental technology where loss of funds can and does occur. Yet the [trend is clear](https://twitter.com/lopp/status/1077200836072296449): thousands of people are [reckless](https://twitter.com/hashtag/reckless) and eager to use it.

{{% image "/img/what-28.png" %}}
*Lightning Network, January 2018 vs December 2018. Source: Jameson Lopp*
{{% /image %}}

To me, having lived through the meteoric rise of the web, the parallels between the internet and Bitcoin are obvious. Both are networks, both are exponential technologies, and both enable new possibilities, new industries, new ways of life. Just like electricity was the best metaphor to understand where the internet is heading, the internet might be the best metaphor to understand where bitcoin is heading. Or, in the words of Andreas Antonopoulos, Bitcoin is [_The Internet of Money_](https://theinternetofmoney.info/). These metaphors are a great reminder that while history doesn’t repeat itself, it often rhymes.

Exponential technologies are hard to grasp and often underestimated. Even though I have a great interest in such technologies, I am constantly surprised by the pace of progress and innovation. Watching the Bitcoin ecosystem grow is like watching the rise of the internet in fast-forward. It is exhilarating.

My quest of trying to make sense of Bitcoin has led me down the pathways of history in more ways than one. Understanding ancient societal structures, past monies, and how communication networks evolved were all part of the journey. From the handaxe to the smartphone, technology has undoubtedly changed our world many times over. Networked technologies are especially transformational: writing, roads, electricity, the internet. All of them changed the world. Bitcoin has changed mine and will continue to change the minds and hearts of those who dare to use it.

Bitcoin taught me that understanding the past is essential to understanding its future. A future which is just beginning.

## Conclusion

Technology is all about the application of scientific knowledge to solve problems in the real world. Every technology has to make tradeoffs in terms of efficiency, cost, security, and many other properties. Just like there is no perfect solution to deriving a square from a circle, any solution to the problems which Bitcoin tries to solve will always be imperfect as well.

Da Vinci tried to solve the intractable problem of squaring a circle with the _Vitruvian Man_, which places a human right at the center of it. Bitcoin tries to solve the double spending problem with sovereign individuals, which places humans behind each node, effectively removing any concept of a center.

Bitcoin’s headless nature shows us that seemingly simple concepts like creating accounts and agreeing on time require creative solutions in decentralized systems. It also shows that such systems can be astonishingly antifragile. How do you best kill something if the best point of attack is everywhere?

Even with all its quirks and seeming shortcomings, Bitcoin undoubtedly works. It keeps producing blocks roughly every ten minutes and does so beautifully. The longer Bitcoin continues to work, the more people will opt-in to use it.

> "It’s true that things are beautiful when they work. Art is function.”
> 
> — [Giannina Braschi](https://en.wikipedia.org/wiki/Braschi%27s_Empire_of_Dreams)

Bitcoin is growing exponentially, blurring the line between disciplines. It isn’t clear where the realm of pure technology ends and where another realm begins. I tried to differentiate the [economic teachings of Bitcoin](https://dergigi.com/2019/01/11/economic-teachings-of-bitcoin/) from the [philosophical](https://dergigi.com/2018/12/21/philosophical-teachings-of-bitcoin/) and the technological ones, which turned out more difficult than expected.

Just like in biological systems, removing one part seems to affect the whole. Maybe the most important lesson is that Bitcoin should be examined holistically, from multiple angles, if one would like to have a complete picture. Just like removing one part from Bitcoin destroys the whole (_*cough*_ blockchain _*cough*_), examining parts of Bitcoin in isolation seems to taint the understanding of the whole system.

My journey continues, and as mentioned in part one, I think that any answer to the question _“What have you learned from Bitcoin?”_ will always be incomplete. In any case, I’ve learned that the philosophy, economics, and technology of Bitcoin interact in a complex feedback loop, and I hope that these 21 lessons are just the beginning of what I’ve learned from Bitcoin.

### Acknowledgments

- Once more, thanks to [Arjun Balaji](https://twitter.com/arjunblj) for [the tweet](https://twitter.com/arjunblj/status/1050073234719293440) which gave birth to this series.
- Thanks to [Andreas M. Antonopoulos](https://twitter.com/aantonop) for all the [educational material](https://antonopoulos.com/) he has put out over the years.
- Thanks to [Marty](https://twitter.com/martybent) and [Matt](https://twitter.com/matt_odell) for guiding me through the rabbit hole and reminding us all to stay humble and stack sats.
- Thanks to [Francis Pouliot](https://twitter.com/francispouliot_) for sharing his excitement about finding out about the [timechain](https://twitter.com/francispouliot_/status/1106028072799744002).
- Thanks to [Brandon](https://twitter.com/bquittem), [Camilo](https://twitter.com/CamiloJdL), [Daniel](https://twitter.com/dnlggr), [Jannik](https://twitter.com/jnnksbrt), [Michael](https://twitter.com/michael_rogger), and [Raphael](https://twitter.com/dinemuatta) for providing feedback to early drafts of this article
- Thanks to the countless authors and content producers who influenced my thinking on Bitcoin and the topics it touches. There are simply too many to name.
- And finally, thank _you_ for reading this series. I hope you enjoyed it as much as I did enjoy writing it. Feel free to [reach out to me](https://twitter.com/dergigi) on twitter. My DMs are open.

### Further Reading

- [_Bitcoin: A Peer-to-Peer Electronic Cash System_](https://bitcoin.org/bitcoin.pdf) by Satoshi Nakamoto
- [_Mastering Bitcoin_](https://bitcoinbook.info/) by Andreas Antonopoulos
- [_The Internet of Money_](https://theinternetofmoney.info/) by Andreas Antonopoulos
- [_Inventing Bitcoin_](http://inventingbitcoin.com/) by Yan Pritzker
- [_Applied Cryptography_](https://www.schneier.com/books/applied_cryptography/) by Bruce Schneier
- [_Reflections on Trusting Trust_](https://www.archive.ece.cmu.edu/~ganger/712.fall02/papers/p761-thompson.pdf) by Ken Thompson
- [_Cypherpunks_](https://www.orbooks.com/catalog/cypherpunks/) by Julian Assange with Jacob Appelbaum
- [_The Anatomy of Proof-of-Work_](https://bitcointechtalk.com/the-anatomy-of-proof-of-work-98c85b6f6667) by [Hugo Nguyen](hhttps://twitter.com/hugohano)
- [_Blockchain Proof-of-Work Is a Decentralized Clock_](https://grisha.org/blog/2018/01/23/explaining-proof-of-work/) by Gregory Trubetskoy
- [_Unpacking Bitcoin’s Social Contract_](https://medium.com/s/story/bitcoins-social-contract-1f8b05ee24a9) by [Hasu](https://twitter.com/hasufl)
- [_Why Bitcoin Matters_](https://hackernoon.com/why-bitcoin-matters-c8bf733b9fad) by [Aleksandar Svetski](https://twitter.com/AleksSvetski)
- [_Guess My Bitcoin Private Key_](https://medium.com/@kerbleski/a-dance-with-infinity-980bd8e9a781) by [Michael Kerbleski](https://twitter.com/kerbleski)

{{< expand "Contents" "..." >}}

1. [Part I. Philosophical Teachings of Bitcoin](/en/what-i-learned-from-bitcoin-1)
2. [Part II. Economic Teachings of Bitcoin](/en/what-i-learned-from-bitcoin-2)
3. [Part III. Technological Teachings of Bitcoin](/en/what-i-learned-from-bitcoin-3)

{{< /expand >}}
