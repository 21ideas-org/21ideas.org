---
title: "21 Million is Non-Negotiable"
h1: "21 Million is Non-Negotiable"
cover: /img/21m-603.jpg
description: ""
url: 21-million-is-non-negotiable
date: 2020-04-09
bookFlatSection: false
weight: 57
---

{{< hint btc >}}
This article by Phil Geiger was published in [Unchained blog](https://unchained.com/blog/21-million-is-non-negotiable).

[Contribute](/contribute/).
{{< /hint >}}

In the bitcoin world, there’s a nagging question that has persisted for far too long. On the surface, the question seems plausible. It has even confused prominent bitcoin technologists and researchers into keeping an open mind about the answer. Will bitcoin be secure once the block reward subsidy ends?

Bitcoin has a fixed supply of 21 million coins, which are released on a schedule on average every 10 minutes, starting at 50 BTC every 10 minutes for the first 4 years, decreasing to 25 BTC per 10 minutes for the next 4 years, and continuing to be cut in half every 4 years, in an event commonly referred to as the halving, halvening, or more recently, as “Quantitative Hardening.” This release schedule, or block subsidy, is set to occur until all 21 million bitcoin are available for people to transact via private keys, somewhere around the year 2140, thereafter there will be no block subsidy. Additionally, bitcoin has a fixed amount of data that it can process every 10 minutes. This creates a bidding war to get transactions processed, known as the transaction fee market.

Today, bitcoin’s network is secured primarily by the value of the block subsidy (12.5 BTC/10min), which in effect is value paid for by all holders of bitcoin, socializing the cost of network security. But at some point in the future, as the number of bitcoin released per block continues to be cut in half, bitcoin will primarily be secured by the value of transaction fees paid by individuals facilitating bitcoin transactions. Today’s socialized security cost mostly paid for with value extracted by bitcoin savers is slowly transitioning into a privatized cost paid for by future bitcoin spenders. Historically, this transition process has played a part in increasing miner revenue measured in USD (and has therefore increased overall security) while has decreased the overall cost of security as a percentage of the bitcoin economy.

{{% image "/img/21m-604-en.png" /%}}

{{% image "/img/21m-608-en.png" /%}}

Many who are unsure about the future viability of bitcoin’s security suggest that bitcoin’s transaction fee market security model is _untested_, and therefore in the future, bitcoin may need to have a certain amount of terminal inflation in order to adequately secure the network. They are really suggesting that at some point in the future, we may have to again socialize bitcoin’s security costs by changing bitcoin’s total supply and by reintroducing or increasing the block subsidy. 

This argument is often used as an example to explain that altcoin X “prioritizes security over a fixed monetary policy.” Rather than operate with a fixed supply and a fixed supply schedule, the currency issuance needs to be variable in order to pay for adequate security, or so the story goes. This article intends to demonstrate that these arguments start from provably false assumptions, and then will build a counter-argument using axiomatic assumptions. 

The following exposition assumes that bitcoin is alive, which you can confirm is axiomatic by checking for yourself before continuing. Before understanding why bitcoin will be secure in the future, we have to understand why bitcoin is alive today. 

If bitcoin is alive, keep reading. If bitcoin is dead, good game and thanks for playing.

## Why is Bitcoin still alive?

Bitcoin is still alive today because some individuals subjectively deem it valuable enough to keep alive. If nobody valued bitcoin, it would be dead. Whether or not you personally agree that bitcoin is valuable is irrelevant. Bitcoin is alive because people find it valuable, and there are a number of ways the network is kept alive. Some bitcoiners keep it alive by using bitcoin as a savings technology – storing value in it. Some of those individuals run full bitcoin nodes, meaning that they are verifying that each block of transactions follows the network consensus rules. Others write code that they hope will be run by individuals operating full nodes and storing value in bitcoin. It’s certainly the case that not everyone that stores value in bitcoin runs a full node or writes code, and it might be the case that node operators and coders don’t store value in bitcoin. They are all contributing to keep bitcoin alive regardless.

And then there are miners. Miners are also bitcoiners that keep the network alive, and they do so by selling electricity to the network (in the form of as many SHA-256 hashes per second as possible). By doing so, these bitcoiners are helping secure the network’s monetary policy and processing transactions for the network. In return for their electricity, miners are paid in bitcoin. Miners get to choose to whom they sell electricity – they can sell hashed electricity to people who pay a lot to make transactions (high fees), or they can donate their electricity to people who don’t pay for transactions at all (zero fees). They can even choose to sell electricity for empty blocks without any transactions, in which case the only compensation would be in the form of the block subsidy (currently 12.5 BTC every 10 minutes). There is no coercion. Miners are allowed to sell their electricity to whomever they choose. Finally, they don’t have to sell their electricity to the bitcoin network at all, which is what a vast, vast majority of energy producers choose today.

Nobody that participates in bitcoin (including miners) knows exactly how much bitcoin is going to be worth in the immediate future; however, most bitcoiners believe that it will increase in value over time, which is the fundamental reason why anyone would accept it for value exchanged in the present. Still, no one knows what the value will be tomorrow. Fortunately, there’s a clever function within the bitcoin network that ensures that as long as bitcoin is valuable to some universe of people, there will always be an economic incentive to sell electricity to secure the network and to ensure that the monetary policy is upheld despite fluctuations in value – bitcoin’s difficulty adjustment. The difficulty adjustment calibrates the network to maintain bitcoin’s fixed monetary policy and its 10-minute average block intervals completely independent from the value of the bitcoin network measured in any other currency, or from the number of participants in the network. All it does is rebalance the amount of hashed electricity the network demands (every 2016 blocks) to ensure that the block time and supply is maintained on a fixed schedule.

For people regarding the network externally, this generally means that if the value of the network increases, the amount of electricity demanded by the network increases, and if the value decreases, the amount of electricity demanded by the network decreases. This calibration ensures that it is always profitable for someone to sell electricity to the network, regardless of the price of bitcoin measured in other currencies. We can confirm that this is working as intended today because, as we’ve previously established, bitcoin is still alive and has maintained its average block cadence, despite wildly fluctuating in value, hashrate, and difficulty over the last 11 years.

All bitcoin network participants have voluntarily opted into this system for many reasons, one of which is that bitcoin is a currency with a finitely scarce supply. In fact, it might be the only form of absolute scarcity humanity has seen thus far, which is a primary reason why bitcoin is valuable. A fixed supply of 21 million is how bitcoin derives value and explains why there is any value in the first place with which to pay for security. Without a fixed supply, there would be nothing valuable enough to secure. But, its security is only made possible by aligning individual incentives through clearly defined rules, math, and code.

This scarcity is reinforced as the network increasingly decentralizes over time. As more people understand this scarcity and deem bitcoin valuable to protect, they choose to opt in to one or more of the above methods to protect it, which makes it more valuable, which encourages others to try it out. It’s a feedback loop that relies on bitcoin’s incentives functioning correctly.

## The Transaction Fee Market has been tested for 11 years

The pervasive marketing that bitcoin has an “untested security model” is false. Bitcoin has been alive and constantly tested for 11+ years, and the rules have been known to all participants interested in learning them for its entire existence. Clear rules that all participants can verify individually are necessary to maintain its supply. Its fixed supply is one of the primary drivers of bitcoin’s increase in value, and when bitcoin increases in value, more people choose to sell electricity to the network. Bitcoin holders pay electricity producers the market rate for security, which is recalibrated every 2016 blocks by the difficulty adjustment. Energy producers will only continue to sell electricity to bitcoin holders if what they receive in return is sufficiently valuable.

By function of:

1. more people storing value in bitcoin 
2. the difficulty adjustment
3. the increasingly trusted monetary policy of 21 million
4. the competitive bidding for block space

The amount of hashed electricity securing the network increases over the long-run. Meaning, the **value** of bitcoin has increased so much that despite the current nominal block reward being lower than any other time in bitcoin’s existence, it’s more secure than ever. The purchasing power (or real value) of the block reward continues to increase, despite the nominal block reward consistently declining.

{{% image "/img/21m-605-en.png" /%}}

{{% image "/img/21m-609-en.png" /%}}

But let’s look at the specific point that skeptics are trying to make: today, the block reward, which is a socialized cost paid by all holders of bitcoin, covers a majority of the **value** that is paid to miners in return for hashed electricity. What happens when transaction fees are the only incentive for miners to sell electricity? Many skeptics say something like:

> _“Assuming $X value of bitcoin, transaction fees will need to be at least $Y to cover today’s mining expenses without the subsidy.”_

This theoretical transaction fee estimate usually sounds pretty scary, but the above statement is subtly making three outrageous assumptions that rely on an ingrained tendency to view and measure bitcoin in another currency!

Bad assumption 1: **Assuming $X value of bitcoin**. Bitcoin will never have a totally stable value. Value is subjective, and during the bootstrapping phase of bitcoin in which we all find ourselves living, is extremely volatile. The difficulty adjustment recalibrates the network’s demand for electricity to ensure holders pay a market rate for security.

Bad assumption 2: **transactions fees will need to be $Y**. What’s the value of a dollar? Today’s value? Why are we trying to measure the future in today’s dollar value? Transactions historically have become cheaper over time measured in Satoshis as people find creative ways to send around smaller amounts of data.

The bitcoin network has no capacity to understand the value of bitcoin measured in another form of currency. There is only what bitcoin transactors choose to bid in order to be included in blocks, and what miners choose to sell electricity to earn, all of which are calibrated to establish consistent block times and find a market equilibrium by the difficulty adjustment.

Bad assumption 3: **Using the current mining expenses to estimate the future**. We know empirically that hashes individually become cheaper as ASICs improve, and we know that the value of bitcoin is unpredictable in the future. The inputs of this system are electricity (in the form of hashes to earn something valuable) and the difficulty adjustment which calibrates itself so that it is always profitable for _someone_ to sell electricity to the network. This is how the market value for security is discovered. We also know that a vast, vast majority of energy producers are not yet choosing to sell their excess electricity to bitcoin holders. As they come to realize that the bitcoin network can be used as [a vent to monetize their excess electricity](https://www.theblockcrypto.com/post/11481/asic-chip-technology-is-renewable-energys-future), the value of a hash will continue to drop substantially.

If bitcoin is still alive today, the value of bitcoin and the number of participants is constantly fluctuating, the pool of cheap electricity and supply of ASICs is massive and getting larger, and the difficulty adjustment calibrates bitcoin to ensure people are always paying a market rate for security, what’s the final input to consider?

**Are people transacting today and paying any transaction fees denominated in BTC**? If the answer to this question is yes, then the fee market and bitcoin’s security is working as expected.

As an example to break this down further, in 2010, Laszlo famously paid 10,000 BTC for 2 pizzas. A lesser known fact is that he paid a 1 BTC transaction fee. 1 BTC was worth ~$.004 at the time and the hashrate was 0.000075 Terahash per second. The total block of 51 BTC including subsidy and fees paid to miners was worth around 20 cents of hashed electricity. In today’s prices, just the fee he paid is worth ~$7,300. Most of the electricity at the time was donated by hobbyists because bitcoin had very little value, except to the few people using it as an experiment. 10 years later, a completely full [block 625027](https://blockstream.info/block/0000000000000000000283bdb5287901adb749ecbe25923740707cc3bb767dc9) had 28 million Satoshis (.28 BTC) of transaction fees, worth around $2,000, and was processed with an overall hashrate of 104 million Terahash per second. These transaction fees might be worth $20,000, $200, or $200,000 in the future.

Ultimately, the argument boils down to the fact that we can’t predict the future value of bitcoin, so the network might demand less security than it demands today if the value decreases. But the bitcoin network was designed so that the value of a given sat doesn’t impact how it functions, unless the value is absolutely zero, and as a result, it chugs along regardless of the price or amount people pay in satoshis for transactions. The future value has no impact on how the network functions, only on the amount of hashed electricity demanded.

## Inflation as a “solution” to security

{{% image "/img/21m-606.png" %}}
_[Source.](https://www.theblockcrypto.com/genesis/58224/money-2-0-stuff-with-no-rally-in-sight-bitcoin-must-consider-loose-monetary-policy) Bitcoin is a currency that is unable to make decisions. Bitcoin’s monetary policy governors are anyone who stores any amount of value in bitcoin. There are an estimated 10s of millions of bitcoin monetary policy governors internationally._
‌{{% /image %}}

We’ve established above that bitcoin does not have a security problem because the incentives are aligned to always pay the market rate for security based on its present value, but let’s make the faulty assumption that many make. Let’s assume that bitcoin might be insecure (and is not dead somehow). Even if it was insecure, the suggestion of changing the fixed supply to improve security is extreme Keynesian economics logic with no basis in reality.

It stems from a faulty basic assumption that adding additional units of a monetary good increases value. “Number go bigger equal everybody be bigger happy” might be a phrase uttered by an altcoin marketer, nobel prize winning economist, or president of a Federal Reserve branch.

{{% image "/img/21m-607.png" /%}}

{{< tweet user="Vis_in_numeris" id="1241905410157805568" >}}

Unfortunately, introducing monetary inflation can’t make anybody “be bigger happy” except for those with the power to print currency and their closest friends, thanks to the [Cantillon effect](https://en.wikipedia.org/wiki/Richard_Cantillon#Monetary_theory). The Cantillon effect describes how the knowledge of a currency’s debasement spreads throughout society unequally, granting an advantage to those with the power to print money, and causing economic hardships for those furthest away from the printers. Currency is non-productive – it isn’t a company. Having more total supply just means that each individual unit is worth less, and value is transferred from those who hold the currency to those who create more units and distribute them before the rest of the population understands that their savings have been debased.

A currency’s utility comes from storing and communicating value effectively. Value is stored and communicated effectively when the supply and rules are transparent, and no advantages are granted to certain participants. Distorting supply only serves to distort a currency’s ability to perform its job of storing and communicating value; it can’t make a currency more valuable or secure.

## A Fixed Supply Increases Security

The current block reward is a fee paid by every bitcoin holder to energy producers that sell hashed electricity to the network. It’s worth it to pay this subsidy today because [All 21 Million Bitcoin Already Exist](https://unchained.com/blog/all-21-million-bitcoin-already-exist/), and if anything about the supply changes, holders of the out-of-consensus fork can sell the new token for more bitcoin, ensuring that the supply of bitcoin is upheld.

The bootstrapping phase of bitcoin grants miners selling electricity to the network the option of not including any transactions (for a time), because everyone holding bitcoin is paying the fee with the value stored as block subsidies. Make no mistake, all bitcoiners are paying for each processed block today, regardless of if they participate in a transaction.

This arguably leads to a tragedy of the commons scenario during bitcoin’s bootstrapping phase, as individuals get to _spend_ BTC (the horror!) with their transaction fee subsidized by everyone, and miners are still paid even when they process empty blocks. As the subsidy decreases, it will become more expensive for miners to sell electricity for empty blocks – the value of a mined block transitions away from being paid by everyone to just those that need to make transactions. This is ok though because even at today’s scale, we have full blocks with individuals paying transaction fees. If we already have full blocks at bitcoin’s current adoption level, adding more users will likely serve to increase the value of the currency and the scarce block space even further. That said, we can never predict the future value of bitcoin, we can only see that the network is functioning as expected despite a fluctuation in value.

As selling hashed electricity to the network gets more competitive, this will serve to increase specialization in different areas of the energy production industry. Certain individuals will focus on ASIC chip production, other individuals will seek out and exploit the cheapest electricity sources, and other individuals will need to optimize how bitcoin transactions are grouped to maximize profits. Finally, entire bitcoin mining derivative markets may develop to help this system weather shocks to any of the inputs, like what we see with the [derivative energy markets in Texas](https://www.ercot.com/).

As a result of fixed rules, fierce competition, increasing scale, and specialization, bitcoin mining becomes more decentralized over time, which further increases security. Changing bitcoin’s supply, assuming everyone just went along with it (terrible assumption), would break these decentralization incentives by reducing the need for miners to find more efficient electricity, improve ASIC chip technology, and process as many transactions as they can. If everyone is paying electricity producers regardless of how well they’re performing at the job, it allows room for rent seeking, which costs every user of bitcoin more for security than they should be paying!

## Send it

Adding inflation would destroy the value proposition of bitcoin altogether by proving yet again that it’s trivial to print currency and create copies of things that are digital. Look at every other currency.

Digital scarcity is a one-time phenomenon.

The best protection bitcoin has against all other currencies is its unyielding monetary policy, which is enforced socially and technically by every individual that stores value in bitcoin. There will likely be inflation bugs, hard forks, and new currencies printed throughout the marathon of bitcoin’s ascendance. Social consensus will kick in during these times to ensure the 21 million policy remains intact. What does social consensus look like?

If you still feel that bitcoin has an insecure monetary policy, just create a fork that includes inflation. It’s trivially easy to do this; it’s permissionless money, and all ideas can be tried in open competition.

That said, when more copies of bitcoin are created, I will do what I have done with all forks, airdrops, and infinitely inflating currencies – convert them to more bitcoin, which is truly scarce. This process transfers wealth from those who do not understand economics to those who do. Adding units of currency does not create value, it merely transfers it. I’m personally optimistic that the process of transferring wealth from those who don’t understand these concepts to those who do will lead to positive outcomes for humanity in the future.

It’s easy to create as many units of another currency as you’d like. In bitcoin, 21 million is non-negotiable.

---

_Views presented are expressly my own and not those of Unchained Capital or my colleagues. Thanks to Parker Lewis, Will Cole, and Alex Smith for reviewing and for providing valuable feedback._
