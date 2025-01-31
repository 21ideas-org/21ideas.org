---
title: "On Ossification"
h1: "On Ossification"
cover: /img/oss-01.png
tags: ["bitcoin", "protocol"]
description: "An impassioned argument for why we should continue striving to improve the Bitcoin protocol."
url: on-ossification
date: 2024-11-03
bookFlatSection: false
bookToc: true
weight: 72
---

An impassioned argument for why we should continue striving to improve the Bitcoin protocol.

{{< hint btc >}}
This article by [Jameson Lopp](https://twitter.com/lopp) was published in his [blog](https://blog.lopp.net/on-ossification)

[Contribute](/contribute/)
{{< /hint >}}

{{< hint info >}}
_Note_: if you'd prefer to consume this essay in audio format, you can [listen to it here](https://www.lopp.net/media-archive/presentations/Bitcoin_Audible-On_Ossification.mp3) (narrated by [Guy Swann](https://guyswann.com/) of the Bitcoin Audible Podcast.)
{{< /hint >}}

Ossification in the context of network protocols refers to the slowdown in their evolution and rate of change. It appears to be a law of network physics. Essentially, as a network protocol achieves greater adoption, the "mass" of the network grows and the effort required to alter the direction of the network by coordinating software updates across the users of the protocol increases substantially. Eventually, the ability to safely activate any protocol changes is crushed under the massive weight of the network as it becomes impossible to coordinate massive numbers of decentralized actors.

As such, **ossification is inevitable for Bitcoin**. But as of today we find ourselves debating whether or not we should _proactively_ ossify the protocol. I myself am vehemently against this position and believe that there's far too much room for improvement to give up on base protocol changes at this point in time.

I pose to you that Bitcoin can only remain vibrant, relevant, and secure in the long run through the willingness to implement sensible, broadly beneficial protocol improvements in a careful, consensus-driven manner. Ossification to freeze progress at our current point in time is arrogant, ahistorical, and a rejection of the same visionary foresight that created Bitcoin in the first place. Thoughtful continual evolution is key to Bitcoin's long-term value proposition. Digital gold is superior to physical gold _precisely because it is not inert_. By which I mean: the properties of physical gold can not be improved, thus financial innovation of gold occurred via centralized IOUs... but the properties of Bitcoin can be improved, enhancing its permissionless usage.

## Learning From History

Bitcoin is only 15 years old and has undergone many consensus changes and upgrades. It's premature to assume this particular point in time is the ideal stopping point. Protocols need to adapt over time to remain viable.

We should learn lessons from other popular network protocols like SMTP. If Bitcoin ossifies, developers will build increasingly complex layers on top of it to add desired functionality. Complexity introduces bugs and exploits.

{{% image "/img/oss-02.png" %}}
_[The Death of Decentralized Email](https://blog.lopp.net/death-of-decentralized-email/)_
{{% /image %}}

This isn't a knock on complex layers like BitcoinOS / BitVM / Botanix's Spiderchain / Citrea's zero knowledge rollup - they are doing they best they can working with the toolset that is available to them. While we don’t want Bitcoin to be a kitchen sink protocol, adding low level functions to the base layer can make sense if they significantly reduce the complexity of building functionality at higher layers.

## Potential Paths Forward

Many desirable features like covenants, vaults, and payment pools require base layer upgrades. Building these in a clean way on the protocol itself is far better than hacky overlays. A base layer with more building blocks unlocks a new design space for Bitcoin.

{{% image "/img/oss-03.png" /%}}

Careful, well-tested upgrades that have been thoroughly debated and reached community consensus do not undermine property rights or Bitcoin's core stable money proposition. Upgrades enshrine the will of the users rather than override them.

I believe that Bitcoin has far greater potential than what we have achieved thus far. I view the bitcoin blockchain as a cryptographic accumulator for a wide variety of systems that can anchor into it. But we have barely scratched the surface of what is possible. By ossifying today when it’s so difficult to build permissionless second layers, we are hamstringing developers and significantly limiting experimentation to find the most valuable uses of block space.

People often say we don’t need to change Bitcoin because we can just scale with other layers. Sure, that would be great… if developers were not so limited! We simply don’t have all of the primitive building blocks at the base layer needed to easily roll out permissionless second layers. We could, for example, make Bitcoin script great again.

{{< youtube rSp8918HLnA />}}

Note that we implemented _3 different forks_ to enable _3 different building blocks_ in order to create the Lightning Network. Without the functionality enabled by those forks, the Lightning protocol would be far clunkier and the game theory not as sound.

There are other soft forks we could do such as SIGHASH_ANYPREVOUT that would supercharge lightning and allow channel factories, giving Lightning Network orders of magnitude more efficiency. There are forks we could do that would enhance privacy like cross input signature aggregation. There are forks we could do like OP_CTV that would increase the security of self custody like covenants and vaults. We can see many potential futures, yet it's becoming more and more difficult to step toward them.

## On Sovereignty and Self Custody

Scaling is another long term issue. Greg Maxwell said this in 2015:

> If the system is too costly people will be forced to trust third parties rather than independently enforcing the system's rules. If the Bitcoin blockchain’s resource usage, relative to the available technology, is too great, Bitcoin loses its competitive advantages compared to legacy systems because validation will be too costly (pricing out many users), forcing trust back into the system. If capacity is too low and our methods of transacting too inefficient, access to the chain for dispute resolution will be too costly, again pushing trust back into the system.

The decentralization of verification that won the block size debate is only one part of the story. Decentralization of economic actors is also important to the long term success of bitcoin. Remember that it is not the **will of the nodes** that determines the future of Bitcoin, but the **will of the economic majority of nodes**. Economic actors in bitcoin include miners, holders, and transactors (including corporations and custodians). Point being - if the number of economically relevant nodes is reduced due to centralization, and most Bitcoin users are priced out of self custody, we should expect that the "governance" of the protocol will become more centralized and fragile.

With Bitcoin as it is today, maybe 100 million entities worldwide can access the fundamental properties of bitcoin. In a world population of 8 billion, this situation would result not in a new decentralized money that changes the landscape of value and scarcity, but merely a new elite who, over time, would follow the age old path of elite groups throughout history of initially creating prosperity before ending in bread and circuses. For the first time in history, Bitcoin has the potential to do more than merely shift power from one elite to another, but only if we continue to work toward maximum decentralization by improving the protocol and making Bitcoin’s fundamental properties accessible to more people around the world.

Note well that the "we can do everything we want on other layers" argument tends to gloss over the fact that no layer on top of Bitcoin can ever offer the same security model as the base layer. Whenever you build a layer on top of Bitcoin it necessitates creating a whole new set of game theory and trade-offs for the self custody users of that layer.

## Ossification Steelman

Ossifiers posit that Bitcoin has already achieved its core functionality as sound money and a store of value. Further changes, even if well-intentioned, introduce unnecessary risks that could undermine the very properties that make Bitcoin valuable. By ossifying the protocol, we ensure that Bitcoin remains a trustworthy, decentralized, and immutable monetary system for the long term.

**1. Preserving trust in Bitcoin's fundamental properties:**

Bitcoin's primary value proposition is its fixed supply and immutability. Any changes to the protocol, even soft forks, risk eroding confidence in these core properties. Some have claimed that the ability to change the protocol reduces confidence in the inflation schedule, no matter how well intentioned.

**2. Reducing developer control and centralization risks:**

Allowing continued changes to Bitcoin gives developers outsized influence over the protocol. This creates a centralization risk, as a small group of individuals could potentially alter Bitcoin's properties.

**3. Protecting against unintended consequences:**

Even well-intentioned and thoroughly tested changes can have unforeseen effects on the network. As the value and importance of Bitcoin grow, the potential impact of these unintended consequences becomes increasingly severe.

**4. Increasing difficulty of changes with growth:**

As Bitcoin adoption increases and more economic value is built on top of it, any changes become riskier and more disruptive. Ossifiers argues that there should be a point where the protocol stabilizes, similar to other fundamental protocols like TCP/IP or power socket standards.

**5. Maintaining Bitcoin's function as sound money:**

The primary goal of Bitcoin is to serve as a new monetary system free from debasement. Ossification ensures that this core function is preserved without risking its fundamental properties for potential improvements that may not be essential to its primary purpose.

## Common Ossifier Arguments

Ossifiers argue that Bitcoin is working incredibly well as-is and that the protocol rules should be extremely resistant to change in order to preserve its core value proposition of being an unchanging, uninflatable, apolitical form of money. Even well-intentioned changes carry large risks that could jeopardize Bitcoin's long-term success and stability.

**1. Don't Fix What Isn't Broken**

Bitcoin is already succeeding with the current protocol, having grown from $0 to $1.4 trillion in market cap in just 15 years. There's no need to risk this success by making hasty or unnecessary changes.

**2. Stability is King**

Bitcoin's core value proposition is its stability and predictability. The protocol rules shouldn't keep changing on a whim. Frequent tinkering undermines confidence in Bitcoin's unchanging nature.

**3. Measure Twice, Cut Once**

Changing the Bitcoin protocol is an extremely serious undertaking, akin to altering the Constitution or laws designed to last for centuries. Any changes must be made slowly, carefully, conservatively and only after considering all the long-term implications.

**4. The Higher the Stakes, the Steadier the Hand**

The bigger and more successful Bitcoin becomes, the more important it is to be conservative about any protocol changes. With over a trillion dollars of value at stake and nation-states buying in, we can't afford to make mistakes or take unnecessary risks now.

**5. The Road to Hell is Paved with Good Intentions**

Even well-intentioned protocol changes can have unexpected negative impacts that are hard to predict, such as harming the economics for miners, developers and holders. The downside risks likely outweigh any theoretical benefits.

**6. Keep it Simple, Stupid**

Not every new feature or improvement needs to happen at the base protocol layer. Many things can be implemented at higher levels like Layer 2 or Layer 3 without jeopardizing Bitcoin's core security model and stability.

**7. Unchanging Money in an Ever-Changing World**

Constant "improvements" and protocol changes go against Bitcoin's promise of being a stable, apolitical money and settlement network. Ossification is a feature that prevents Bitcoin from being captured by special interests or mutating unpredictably.

**8. Bitcoin Should Only Be Money**

The use of block space for non-monetary purposes like tokens / NFTs only support fads and pump and dump scams that push out legitimate users from leveraging bitcoin as money.

## My Responses to Ossification Arguments

**Preserving trust in Bitcoin's fundamental properties:**

Trust in Bitcoin's properties and resistance to implementing bad ideas comes down to the governance process for protocol changes, not from making changes impossible. Bitcoin is crypto anarchy and is a system in which the default is apathy which is a strong veto. Either you believe that Bitcoin's governance has served us well to this point or you think we've just been lucky and the whole thing could fail at any time.

{{< youtube _IMzSCSeM68 />}}

**Reducing developer control and centralization risks:**

Similar to the above, either you believe that the game theory around protocol changes is sound or we've just been lucky thus far. Bitcoin developers can't force anyone to run code with which they disagree.

{{% image "/img/196.png" %}}
_[Who Controls Bitcoin Core?](/who-controls-bitcoin-core)_
{{% /image %}}

Also, the internal process for development is extremely challenging. Most proposed rule and code changes never make it through the gauntlet.

{{% image "/img/oss-04.png" %}}
_[Bitcoin Core Contributor Challenges](https://blog.lopp.net/bitcoin-core-contributor-challenges/)_
{{% /image %}}

TL;DR from my research 4 years ago:

After iterating all rejected pull requests from Bitcoin Core we find that there were:

9,011,209 total rejected added lines of code  
6,279,435 total rejected deleted lines of code

That's 15,290,644 rejected lines of code changed vs 3,651,046 accepted!

Which means that as of time of writing, **only 19% of proposed changed lines of code have been accepted into Bitcoin Core**.

**Protecting against unintended consequences:**

The fear of unknown unknowns and unintended consequences is, in my view, a non-argument. Why? Because every decision has unknown unknowns. Making changes to the protocol has unknown unknowns. NOT making changes also has unknown unknowns. There are always unquantifiable unknown unknowns, thus the argument effectively cancels itself out. Vigilance is key - therein lies Bitcoin’s antifragility.

**Increasing difficulty of changes with growth:**

I don't think this is actually an argument with which either side disagrees. As the network grows and becomes more valuable, it has been and will continue to become more difficult to change.

**Maintaining Bitcoin's function as sound money:**

The world in which Bitcoin operates will never ossify. The world will keep throwing new problems at Bitcoin; if it can’t adapt to solve them, we should expect hacky and likely centralized solutions to be bolted on. That’s what led to the downfall of SMTP. Point being, Bitcoin's properties are not guaranteed to be preserved by ossification.

**Don't Fix What Isn't Broken**

No one is pushing for hasty changes, nor can anyone make a serious argument that Bitcoin will "break" without a given feature. But what we can say is that the nature of how bitcoin is used will change. It has already changed significantly over the past 15 years.

**Stability is King**

Bitcoin's rules have not been "changed on a whim" ever since Satoshi left the project. Satoshi made unilateral changes without consulting others. I have noticed some influential people casting aspersions upon Bitcoin developers as "tinkerers" which could not be further from the truth. We can observe that the rate of change to Bitcoin has massively slowed over the years due to the overwhelming caution of developers.

**Measure Twice, Cut Once**

Indeed, slow and steady improvements that have been well vetted are all that innovators are asking for.

**The Higher the Stakes, the Steadier the Hand**

We should absolutely strive to avoid mistakes. We should also have confidence that mistakes are not irrecoverable. There have been [plenty of vulnerabilities](https://bitcoincore.org/en/blog/) introduced into Bitcoin Core, for example, that have been patched without incident. And even when the Bitcoin network has suffered from consensus failures, it has recovered within a matter of hours due to the network participants who remain vigilant. This is the fundamental nature of Bitcoin's antifragility.

Bitcoin does not exist within a vacuum. It is, in a sense, a living organism. No form of life can thrive via stagnation.

{{% image "/img/0000000001.png" %}}
_[Bitcoin is The Mycelium of Money](/bitcoin-is-the-mycelium)_
{{% /image %}}

**The Road to Hell is Paved with Good Intentions**

I find this to be another argument that cancels itself out. The Bitcoin ecosystem is incredibly complex and consists of innumerable moving parts and actors. As parts of the system other than the protocol itself continue to change over time, we should be prepared to deal with unforseen consequences of those changes.

**Keep it Simple, Stupid**

I think this is another point on which both sides generally agree. The changes that should be considered most important for the base layer are those that will have an outsized effect at enabling innovation of other permissionless layers that can then experiment to their heart's content without worrying about the base layer.

**Unchanging Money in an Ever-Changing World**

This seems to be another issue of not believing in the game theory behind Bitcoin's governance. I'm of the opinion that if you don't believe in the checks and balances inherent to the system, you don't really believe in Bitcoin.

{{% image "/img/oss-05.png" /%}}

As I'll note later, ossification itself also has the potential of enabling Bitcoin to be captured by special interest groups. The answer is not paralysis, the answer is vigilance and the ability to adapt to new stresses and adversaries!

**8. Bitcoin Should Only Be Money**

The debate over what use cases of Bitcoin should be considered spam has raged as long as I can remember. I don't find it particularly interesting because the debate boils down to people arguing about subjective value, while we can empirically observe that non-financial uses of block space have objective value to people - they are willing to pay for the privilege.

At a technical level, Bitcoin is a store of data; a blockchain is basically an append-only log with several other interesting properties. As such, people have used Bitcoin for non-financial uses for over a decade. As I wrote 8 years ago, it's the trustworthiness of this data's permanence and inability to be overwritten that entices people to use it for non-financial purposes.

{{% image "/img/oss-06.png" %}}
_[Bitcoin: The Trust Anchor in a Sea of Blockchains](https://blog.lopp.net/bitcoin-the-trust-anchor-in-a-sea-of-blockchains/)_
{{% /image %}}

We don’t know what the long term market for block space will look like - that is, which uses of block space will be found to offer the greatest utility and value. This question becomes more important with each halving. I believe that more functionality and more layers that run experiments means it’s more likely for us to find the highest possible value use cases of block space. Perhaps, for example, that might be to power zero knowledge rollups. We just don’t know, so I think we should enable innovators to keep exploring the potential design space.

What do all of these arguments boil down to, in my opinion?

{{% image "/img/oss-07.png" /%}}

## Frequently Asked Questions

_What if all these non-bug fix protocol change ideas are 'nice, but not necessary?' Is it just the bitcoin tech geeks running away with their ivory tower technical interests that aren't strictly necessary for bitcoin to some day be global money?_

I don’t see it as necessary versus nice. I see it as a question of path-finding, of exploring the design space of Bitcoin and maximizing the value of the system. To be clear, we could ossify Bitcoin right now and it would continue operating fine for a long time, until we hit a critical issue like quantum computing or the timestamp overflow point. But the nature of Bitcoin itself will evolve in a different fashion due to development limitations.

_Where is your 'stopping point' for changes? When is Bitcoin good enough?_   

We should continue improving Bitcoin until we can't. We’ve already seen bitcoin improvement proposals drop off a cliff since 2017 - averaging fewer than 1 per month since then. And many proposals don’t even come with activation guidance because developers don’t want to run that gauntlet. We’re losing talent from protocol development as a result, which further exacerbates the slowdown.

_Should protocol changes be 'bug fixes and maintenance' only? no 'new features'?_ 

That's certainly one option, and perhaps that's the path that ends up being followed. But I don't think we should settle for the status quo.

_Paint us the likely scenario where the bitcoin ecosystem would OK to support and push through a soft fork or hard fork change_

Any critical issues that put the continued operation of the system at risk. However, the very nature of ossification may make emergency fixes in the distant future very problematic.

1. Imagine that we have gone decades without any changes to Bitcoin's consensus rules. As such, perhaps the current cohort of Bitcoin protocol developers have never actually gone through making a change to consensus. This does not bode well for us in such a situation.
2. Consider that there are some looming issues that we don't know precisely when they will become critical. The nature of ossification means we'll keep delaying addressing them... potentially until it's too late. I suggest watching my recent presentation on quantum computing for a concrete example of this situation.

{{< youtube MTUzpR_mxAg />}}

## In Closing

We should strive to make changes to Bitcoin that will strengthen it and allow for more permissionless systems to be anchored to it. I think we all agree that Bitcoin should not become a kitchen sink protocol like EVM based networks, but as it stands today the developers who wish to innovate find it incredibly difficult to do so without creating incredibly complex encumbering logic.

Ossification is complacency. Yes, we all agree that Bitcoin is great. But _I do not agree_ that Bitcoin has reached its full potential. I think complacency is one of the greatest threats to Bitcoin - we must not rest upon our laurels.

Technology is deflationary by nature. Bitcoin’s consensus rules should prioritize safety and keeping the system decentralized in as many aspects as possible. This includes not only node operators, but users of block space. Because, after all, if someone is priced out of using block space, they most assuredly are not going to run a full node. I also believe we should enhance the ability for developers to build permissionless second layers so that we can continue to explore the potential use cases of block space as a cryptographic accumulator and thus have more opportunities to find paths toward sustainable demand and thus for block space that pays for the thermodynamic security of Bitcoin in perpetuity.

Are we going to allow the future of Bitcoin to be driven by optimism or by pessimism?

{{% image "/img/oss-08.png" /%}}

To be clear, caution is of utmost importance. Nowhere will you find me claiming that "Bitcoin must implement feature X or it will fail." Bitcoin's success is, in my opinion, one of the factors that actually is making it more difficult to improve.

{{% image "/img/oss-09.png" /%}}

But if we allow ourselves to be paralyzed by fear, we will be sacrificing potential paths forward and vastly limiting the exploration of Bitcoin's design space, which I believe naturally results in limiting its adoption, use cases, and strengthening of valuable attributes.

> The torment of precautions often exceeds the dangers to be avoided.
> 
> *— Napoleon Bonaparte*

A word of warning, as I see conflict on the horizon. Consider the incentives around why one would want to improve the Bitcoin protocol. The only reason you'd care about doing so is if you are a direct user of the protocol. In other words, **protocol improvements are only interesting to those who self custody**. If you use a trusted third party to store your funds, you don't care how they make use of the protocol.

{{% image "/img/oss-10.png" /%}}

Perhaps Bitcoin has already ossified and all of the above was written for naught. We won't know for sure until we have the benefit of significant hindsight. The world is never going to stop evolving, and we have to ask ourselves if we want Bitcoin to evolve along with it or for it to get left behind.

Let us proceed together apace.

Onward.

